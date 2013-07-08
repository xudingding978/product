<?php

class ArticleCommand extends CConsoleCommand {
    protected  $total_amount=0;

    public function actionIndex ($action=null) {
        echo (isset($action) ? 'Your are do... ' . $action."\r\n" : 'No action defined \r\n');
        Yii::import("application.models.*");
        
        $start_time = microtime(true);
        echo $start_time . "\r\n";        
        
        if ($action == "update") {
            $this->updateArticles ();
        } else if ($action =="import") {
            $this->importArticleToProduction();
        }
        
        echo "All finished: start from: " . "\r\n";
        $end_time = microtime(true);
        echo "totally spend: " . ($end_time - $start_time);
        
    }
    
    protected function importArticleToProduction() {
        $artical_data_arr = Article::model()->getArticalRange();
        $this->total_amount = sizeof($artical_data_arr);
        echo $this->total_amount . "\r\n";
        
        $i=0;
        if (sizeof($artical_data_arr) > 0) {
            foreach ($artical_data_arr as $val_arr) {
                $obj = $this->structureArray($val_arr);
//                print_r($obj);
                
                $this->importMegaObj($obj, $val_arr['id']);
                
                $i++;
                echo "-------------------".$i."/".$this->total_amount."\r\n" ;
                
//                if ($i>5) exit();
//                exit();
            }
        } else {
            echo "cannot find any articals";
        }

    }
        
    protected function  updateArticles () {
        $utc_now_utc = strtotime(date('Y-m-d H:i:s'));
        $from_utc = 1372740000;
        
        $url_str = "http://api.develop.devbox/Articles/update?from=";
        $total_amount_int = 0;
        
        while (TRUE) {
            $to_utc = $from_utc + 100;
            $new_url_str = $url_str . $from_utc . '&to=' . $to_utc;

//            echo $new_url_str."\r\n";

            $result_arr = $this->getData($new_url_str, "POST");
            $amount_int = sizeof($result_arr['article']);
            
            $i = 0;
            if ($amount_int > 0) {
//                echo $amount_int."\r\n";
                
                foreach ($result_arr['article'] as $var_arr) {
                    $this->updateCouchbaseArticle($var_arr['id']);
           
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
    
    public function updateCouchbaseArticle($id) {
         $id_string = 'trendsideas.com/' . $id;
        $ch = $this->couchBaseConnection("develop");
        $result = $ch->get($id_string);
        $result_arr = CJSON::decode($result, true);
        
//        print_r($result_arr);
//        exit();
        
        $result_arr['creator_title'] = 'Trends Ideas';
        $result_arr['id'] = $id;
        $result_arr['article'][0]['id']=$id;
        $result_arr['follower_count'] = null;
        $result_arr['following_count'] =null;
        
        $result_arr['view_count'] = null;

        if ($ch->set($id_string, CJSON::encode($result_arr))) {
            echo $id_string . " update successssssssssssssssssssssssss! \r\n";
        } else {
            echo $id_string . " update failllllllllllllllllllllllllllllllllllllllllllllll! \r\n";
        }
    }
    
    protected function couchBaseConnection($bucket = "test") {
        return new Couchbase("cb1.hubsrv.com:8091", "Administrator", "Pa55word", $bucket, true);
    }
    
    protected function getData($url, $method) {
        try {
            $ch = curl_init($url);
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, $method);
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
    
    public function structureArray($val) {

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

        //get book details
        $book_arr = $this->getBookDetails($val);

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
            "created" => $book_arr['date'],
            "timezone" => $book_arr['timezone'],
            "creator" => $book_arr['title'],
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
            "owner_id" => strtolower($book_arr['title']), //"home-and-apartment-trends-nz"
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
            "article_book_id" => $book_arr['id'],
            "article_image_url" => $cover,
        );

        array_push($obj['article'], $article_list);
        $owners_arr = array("*@trendsideas.com");
        $domains_arr = array("beta.trendsides.com", "trendsideas.com");
        
        array_push($obj['owners'], $owners_arr);
        array_push($obj['domains'], $domains_arr);
        
        return $obj;
    }
    
    protected function getBookDetails ($val) {
        $book_data_arr = array();
        
        $book_id = array();
        $book_date = 0;
        $book_title = "";
        $timezone = "";
        $title = ""; 
        $region_book="";
        
        $book_list = Books::model()->getBookByArticalID($val['id']);
        if (sizeof($book_list) > 0) {
            foreach ($book_list as $book) {
                array_push($book_id, $book['id']);
                
                if ($book['region'] != "" || $book['region'] != null)  $region_book = Regions::model()->selectCountryNameByID($book['region']);
                $date_live = $book['dateLive'];
                $title = str_replace(" & ", "-", $book['title']);
                $title = str_replace(" ", "-", $title);
                if ($region_book !== null && $region_book !== "") {
                    $time_array = $this->getUTC($date_live, $region_book);
                    if (sizeof($time_array) > 0) {
                        $UTC = $time_array['utc'];
                        if ((int) $UTC > $book_date) {
                            $book_date = $UTC;
                            $timezone = $time_array['timezone'];
                            $region_book = str_replace(" & ", "-", $region_book);
                            $region_book = str_replace(" ", "-", $region_book);
                            $book_title = $region_book . "-" . $title;
                        }
                    }
                }
            }
        }
        
        $book_data_arr['id'] = $book_id;
        $book_data_arr['date'] =  $book_date;
        $book_data_arr['title'] = $book_title;
        $book_data_arr['timezone'] = $timezone;
        
        return $book_data_arr;        
    }
    
    
    public function getUTC($datetime, $region) {
        $time_zone = '';
        switch ($region) {
            case 'New Zealand':
                $time_zone = 'NZ';
                break;
            case 'Australia':
                $time_zone = 'Australia/Sydney';
                break;
            case 'United States':
                $time_zone = 'America/New_York';
                break;
            case 'South Africa':
                $time_zone = 'Africa/Johannesburg';
                break;
            case 'The Gulf':
                $time_zone = 'Asia/Dubai';
                break;
            case 'The Gulf & Asia':
                $time_zone = 'Asia/Dubai';
                break;
            case '中国':
                $time_zone = 'Asia/Shanghai';
                break;
            case 'India':
                $time_zone = 'Asia/Kolkata';
                break;
        }
        $time_array = array();
        date_default_timezone_set($time_zone);
        $time_string = strtotime($datetime);
        
        $time_array['utc'] = $time_string;
        $time_array['timezone'] = $time_zone;

        return $time_array;
    }

    public function getCoverPage($article_id) {
        
        $data_arr = Article::model()->getFirstPhotoHlmID($article_id);
        
//        print_r($data_arr);
//        echo $data_arr[0]['heliumMediaId']."\r\n";
//        exit();
        
        $cover_url = "";
        if (sizeof($data_arr) > 0) {
            $helim_id_str = $data_arr[0]['heliumMediaId'];
//            echo $helim_id_str;
            $url = "http://api.develop.devbox/GetResultByKeyValue/?type=photo&photo_heliumMediaId=" . $helim_id_str;
            $json_result = $this->getData($url, "GET");
            
//            print_r($json_result);
//            echo gettype($json_result);
            
//            exit();
            
            if (sizeof($json_result) > 0) {
                $cover_url = $this->getCoverUrl($json_result);
            } else {
                echo "cannot find any image object from couchbase!----helim ID: " . $helim_id_str . "----------- \r\n";
            }
        }
        
//        echo $cover_url;
//        exit();
        
        return $cover_url;
    }
    
    public function getCoverUrl($json_result) {
        $cover_url = "";
        
//        print_r($json_result['photo']);
        
        foreach ($json_result['photo'] as $val) {
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
    
}
?>
