<?php
Yii::import("application.models.*");
Yii::import("application.components.*");
class ImportArticleCommand extends ArticleCommand {

    public $total_amount = 0;

//        public function actionIndex($start = null, $quantity = null) {
    public function actionIndex() {
//            echo (isset($start) ? 'Start position is... ' . $start : 'No start defined');
//            echo (isset($quantity) ? '  Quantity to load is... ' . $quantity : 'No quantity defined');
//            $this->updatePhoto();
        $this->actionArticle();
        sleep(5);
        echo "finish........................... \r\n";
        exit();
//            $this->updateObj();
    }

    protected function updatePhoto() {
        $utc_now_utc = strtotime(date('Y-m-d H:i:s'));
        $from_utc = 1372230158;

//            $url = "http://api.develop.devbox/Photos/update?from=1372322158&to=1372324158";
        $url_str = "http://api.develop.devbox/Photos/update?from=";
        $total_amount_int = 0;
        while (TRUE) {
            $to_utc = $from_utc + 1000;

            $new_url_str = $url_str . $from_utc . '&to=' . $to_utc;

//                echo $new_url_str."\r\n";

            $result_arr = $this->getData($new_url_str);
            $amount_int = sizeof($result_arr['photo']);
            $i = 0;
            if ($amount_int > 0) {
                foreach ($result_arr['photo'] as $var_arr) {
                    $id_string = 'trendsideas.com/' . $var_arr['id'];
                    $this->updateCouchbasePhoto($id_string);
                    $i++;
                    echo ($total_amount_int + $i) . " / " . ($total_amount_int + $amount_int) . "\r\n";
                }

                $total_amount_int += $amount_int;
            }

            $from_utc = $to_utc;

            echo $to_utc . '/' . $utc_now_utc . "---------------------------------------------\r\n";
            if ($to_utc > $utc_now_utc)
                break;
        }
    }

    public function updateCouchbasePhoto($id) {
        $ch = $this->couchBaseConnection("develop");
        $result = $ch->get($id);
        $result_arr = CJSON::decode($result, true);

        $result_arr['creator_profile_pic'] = 'http://s3.hubsrv.com/trendsideas.com/users/1000000000/profile/profile_pic_small.jpg';
        $result_arr['owner_profile_pic'] = 'http://s3.hubsrv.com/trendsideas.com/users/1000000000/profile/profile_pic_small.jpg';
        $result_arr['view_count'] = null;

        $result_arr['is_active'] = true;
        $result_arr['is_indexed'] = true;
        unset($result_arr['active_yn']);
        unset($result_arr['indexed_yn']);

        if ($ch->set($id, CJSON::encode($result_arr))) {
            echo $id . " update successssssssssssssssssssssssss! \r\n";
        } else {
            echo $id . " update failllllllllllllllllllllllllllllllllllllllllllllll! \r\n";
        }
    }

    protected function couchBaseConnection($bucket = "test") {
        return new Couchbase("cb1.hubsrv.com:8091", "Administrator", "Pa55word", $bucket, true);
    }

//        protected function couchBaseConnection() {
//            $cb = new Couchbase("cb1.hubsrv.com:8091", "Administrator", "Pa55word", "develop", true);
//            return $cb;
//        }

    public function actionArticle() {
        $start_time = microtime(true);
        echo $start_time . "\r\n";

        Yii::import("application.models.*");

        $artical_data_arr = Article::model()->getArticalbyDate();//????
        $this->total_amount = sizeof($artical_data_arr);  //elements in the array
        echo $this->total_amount . "\r\n";
        
        $i=0;
        if (sizeof($artical_data_arr) > 0) {
            foreach ($artical_data_arr as $val_arr) {

                $obj = $this->structureArray($val_arr);
                
//                print_r($obj);
                
                $this->importMegaObj($obj, $val_arr['id']);
                
                $i++;
                echo "-------------------".$i."/".$this->total_amount."\r\n" ;
//                exit();
            }
        } else {
            echo "cannot find any articals";
        }

        echo "All finished: start from: " . "\r\n";

        $end_time = microtime(true);
        echo "totally spend: " . ($end_time - $start_time);
    }

    public function getMegaData(&$artical_data) {
        foreach ($artical_data as $val) {
            $obj = array();
            $obj = $this->structureArray($val);

//                print_r("<pre>");
//                print_r($obj);
//                exit();
//                $this->importMegaObj($obj, $val['id']);
        }
    }

    public function structureArray(&$val) {

        //  get region and country
        $region = Regions::model()->selectRegionByArtical($val['id']);
        $country = $region;
        $pos = strripos($country, ",");
        if ($pos) {
            $country = substr($country, -($pos - 3));
        }

        // get topic
        $topic_list = TopicSearchNames::model()->selectTopicNameByArticalID($val['id']);

        //get subcategory
        $subcategory = SubCategorySearchNames::model()->selectSubCategoryByArticalID($val['id']);

        // get category 
        $category = Categories::model()->selectCategoryByArticalID($val['id']);

        // get book infor 
        $book_id = array();
        $book_date = 0;
        $book_title = "";
        $book_list = Books::model()->getBookByArticalID($val['id']);
        if (sizeof($book_list) > 0) {
            foreach ($book_list as $book) {
                array_push($book_id, $book['id']);
                $region_book = Regions::model()->selectCountryNameByID($book['region']);
                $date_live = $book['dateLive'];
                $title = str_replace(" & ", "-", $book['title']);
                $title = str_replace(" ", "-", $title);


                $UTC = $this->getUTC($date_live, $region_book);

                if ((int) $UTC > $book_date) {
                    $book_date = $UTC;
                    $region_book = str_replace(" & ", "-", $region_book);
                    $region_book = str_replace(" ", "-", $region_book);
                    $book_title = $region_book . "-" . $title;
                }
            }
        }

        // get current datetime
        $accessed = strtotime(date('Y-m-d H:i:s'));

        // get photography
        $photography = "";
        if (strstr($val['photography'], 'Photography by')) {
            $photography = str_replace("Photography by", "", $val['photography']);
        }

        //get writer
        $writer = "";
        if (strstr($val['writer'], 'Story by')) {
            $writer = str_replace("Story by", "", $val['writer']);
        }

        //get object cover
        $cover = $this->getCoverPage($val['id']);

        $obj = array(
            "id" => null,
            "type" => "article",
            "accessed" => $accessed,
            "is_active" => true,
            "created" => $book_date,
            "timezone" => null,
            "creator" => $book_title,
            "creator_type" => 'user',
            "creator_profile_pic" => "http://s3.hubsrv.com/trendsideas.com/users/1000000000/profile/profile_pic_small.jpg",
            "creator_title" => "Trends Ideas",
            "topics" => $topic_list,
            "categories" => $category,
            "collection_id" => $val['id'],
            "subcategories" => $subcategory,
            "collection_count" => null,
            "likes_count" => null,
            "deleted" => null,
            "domains" => array(),
            "editors" => "*@trendsideas.com",
            "follower_count" => null,
            "followers" => null,
            "following" => null,
            "following_count" => null,
            "country" => $country,
            "region" => $region,
            "geography" => null,
            "is_indexed" => true,
            "object_image_linkto" => null,
            "object_image_url" => $cover,  //varify later
            "object_title" => $val['headline'],
            "object_description" => $val['subHeadline'],
            "owner_type" => 'profile',
            "owner_profile_pic" => "http://s3.hubsrv.com/trendsideas.com/users/1000000000/profile/profile_pic_small.jpg",
            "owner_title" => "Trends Ideas",
            "owner_id" => strtolower($book_title), //"home-and-apartment-trends-nz"
            "owners" => array(),
            "owner_contact_email" => "enquiries@trendsideas.com",
            "owner_contact_cc_emails" => null,
            "owner_contact_bcc_emails" => null,
            "status_id" => null,
            "updated" => null,
            "uri_url" => null,
            "view_count" => null,
            "keywords" => $val['headline'],
            "article" => array()
        );

        $article_list = array(
            "id" => null,
            "article_id" => $val['id'],
            "article_spark_job_id" => $val['sparkJobId'],
            "article_helium_mediaId" => $val['heliumMediaId'],
            "article_type" => $val['type'],
            "article_headline" => $val['headline'],
            "article_subheadline" => $val['subHeadline'],
            "article_body" => $val['body'],
            "article_credits" => $val['creditText'],
            "article_photography" => $photography,
            "article_feature_name" => $val['featureName'],
            "article_channel_id" => $val['channelId'],
            "article_reports" => $val['reports'],
            "article_delivered" => $val['delivered'],
            "article_homepage_url" => $val['homepageUrl'],
            "article_contact_details" => $val['contactDetails'],
            "article_project" => $val['projectName'],
            "article_sequence" => $val['sequence'],
            "article_supplier" => $val['supplierName'],
            "article_category" => $val['serviceCategory'],
            "article_writer" => $writer,
            "article_writer_user_id" => null,
            "article_book_id" => $book_id,
            "article_image_url" => $cover,
        );

        array_push($obj['article'], $article_list);
        $owners_arr = array("*@trendsideas.com");
        $domains_arr = array("beta.trendsides.com", "trendsideas.com");
        
        array_push($obj['owners'], $owners_arr);
        array_push($obj['domains'], $domains_arr);

        return $obj;
    }

    public function getCoverPage($article_id) {
        $data_arr = Article::model()->getFirstPhotoHlmID($article_id);
        $cover_url = "";
        if (sizeof($data_arr) > 0) {
            $helim_id_str = $data_arr[0]['heliumMediaId'];
            $url = "http://api.develop.devbox/GetResultByKeyValue/?type=photo&photo_heliumMediaId=" . $helim_id_str;
            $json_result = $this->getData($url);

            if (sizeof($json_result) > 0) {
                $cover_url = $this->getCoverUrl($json_result);
            } else {
                echo "cannot find any image object from couchbase!----helim ID: " . $helim_id_str . "----------- \r\n";
            }
        }
        return $cover_url;
    }

    public function updateObj() {
        Yii::import("application.models.*");
        $id_array = Article::model()->getArticalID();
        $total = sizeof($id_array);
        $num = 0;
        foreach ($id_array as $val) {
//                    echo "---".$val['article']."-----------".$val['image']."------------------";
            $cover_url = "";
            $couchbase_id = array();

            $url = "http://api.develop.devbox/GetResultByKeyValue/?type=photo&photo_heliumMediaId=" . $val['image'];
            $json_result = $this->getData($url);
            if (sizeof($json_result) > 0) {
                $cover_url = $this->getCoverUrl($json_result);
            } else {
                echo "cannot find any image object from couchbase!----" . $val['article'] . "------" . $val['image'] . "------ \r\n";
            }

            $url = "http://api.develop.devbox/GetResultByKeyValue/?type=article&collection_id=" . $val['article'];
            $article_result = $this->getData($url);
            if (sizeof($article_result) > 0) {
                $couchbase_id = $this->getArticleCouchbaseId($article_result);
            } else {
                echo "cannot find any article object from couchbase!----" . $val['article'] . "------" . $val['image'] . "------ \r\n";
            }
//                print_r($couchbase_id);

            if ($cover_url != "" && sizeof($couchbase_id) > 0) {
                foreach ($couchbase_id as $k => $val) {
                    $this->updateArticle($cover_url, $val);
                }
                $num++;
                echo "--" . $num . "/" . $total;
            }
        }
    }

    public function updateArticle($cover_url, $couchbase_id) {
        $cb = $this->couchBaseConnection();
        $id = "develop.devbox/" . $couchbase_id;

        $old_record = $cb->get($id);
        $old_record_array = CJSON::decode($old_record, true);

        $old_record_array['object_image_url'] = $cover_url;
        if ($cb->set($id, CJSON::encode($old_record_array))) {
            echo $id . " update successssssssssssssssssssssssss! \r\n";
        } else {
            echo $id . " update failllllllllllllllllllllllllllllllllllllllllllllll! \r\n";
        }
    }

    public function getArticleCouchbaseId($article_result) {
        $couchbase_id_array = array();
        foreach ($article_result['articles'] as $val) {
            array_push($couchbase_id_array, $val['id']);
        }

        return $couchbase_id_array;
    }

    public function getData($url) {
        try {
            $ch = curl_init($url);
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "GET");
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));

            $result = curl_exec($ch);
            curl_close($ch);
            $data_arr = CJSON::decode($result, true);
            return $data_arr;
        } catch (Exception $e) {
            echo 'Caught exception: ' . $e->getMessage();
            return null;
        }
    }

    public function getCoverUrl($json_result) {
        $cover_url = "";
        foreach ($json_result['articles'] as $val) {
            $sequence = $val['photo'][0]['photo_sequence'];
            if ($sequence === "1") {
                $cover_url = $val['photo'][0]['photo_image_hero_url'];
                if ($cover_url != "")
                    break;
            }
        }

        return $cover_url;
    }

    public function importMegaObj($data_list, $id) {
        $json_list = json_encode($data_list);
        try {
            $ch = curl_init("http://api.develop.devbox/megaimport/");
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
            curl_setopt($ch, CURLOPT_POSTFIELDS, $json_list);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
            $result = curl_exec($ch);
            //close connection
            curl_close($ch);

            echo $message = "trendsideas.com/" . $result. "-----------" . date("Y-m-d H:i:s") . "---id: " . $id .  " \r\n";

        } catch (Exception $e) {
            $response = 'Caught exception: ' . $e->getMessage();
            echo $message = $response . "----" . date("Y-m-d H:i:s") . $data_list['object_image_url'] . " \r\n";
        }
    }

    public function getUTC($datetime, $region) {
        $time_zone = '';
        switch ($region) {
            case "New Zealand":
                $time_zone = 'NZ';
            case "Australia":
                $time_zone = 'Australia/Sydney';
            case "United States":
                $time_zone = 'America/New_York';
            case "South Africa":
                $time_zone = 'Africa/Johannesburg';
            case "The Gulf":
                $time_zone = 'Asia/Dubai';
            case "The Gulf & Asia":
                $time_zone = 'Asia/Dubai';
            case "中国":
                $time_zone = 'Asia/Shanghai';
            case "India":
                $time_zone = 'Asia/Kolkata';
        };

        date_default_timezone_set($time_zone);
        $time_string = strtotime($datetime);

        return $time_string;
    }

    public function isUrlExist($path) {
        $file_headers = @get_headers($path);
        if ($file_headers[0] == 'HTTP/1.1 404 Not Found') {
            $response = 'HTTP/1.1 404 Not Found';
        } else {
            $response = "true";
        }

        unset($file_headers);
        return $response;
    }

    protected function writeToLog($fileName, $content) {
        //   $my_file = '/home/devbox/NetBeansProjects/test/addingtocouchbase_success.log';
        $handle = fopen($fileName, 'a') or die('Cannot open file:  ' . $fileName);
        $output = "\n" . $content;
        fwrite($handle, $output);
        fclose($handle);

        unset($fileName, $content, $handle, $output);
    }

}

?>
