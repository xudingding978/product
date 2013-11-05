<?php

Yii::import("application.models.*");
Yii::import("application.components.*");

class ImportdataCommand extends Controller_admin {

    public function actionIndex($action = null) {
        //$start = null, $quantity = null) {
        //     echo (isset($start) ? 'Start position is... ' . $start : 'No start defined');
        //    echo (isset($quantity) ? 'Quantity to load is... ' . $quantity : 'No quantity defined');
        // $this->actionImage($start, $quantity);
        if ($action == "import") {
            $this->getPhotoDataByDate();
        } elseif ($action == "test") {
            $this->test();
        }
    }

    public $image_amount = 0;
    public $obj_amount = 0;
    public $total_amount = 0;
    public $amount = 0;

    public function actionObject() {
        $sql = "select dbo.ArticleImages.id from dbo.ArticleImages where dbo.ArticleImages.id between 58960 and 59060";
        $data_list = Yii::app()->db->createCommand($sql)->queryAll();
        foreach ($data_list as $val) {
            $book_list = Books::model()->getBookByPhotoID($val['id']);
//                $region_list = Regions::model()->selectRegionByImage($val['id']);
//            foreach ($book_list as $book) {
//                
//            }
//            print_r("<pre>");
//            print_r($book_list);
//                print_r($region_list);
        }
    }

//    
//        protected function getNewID() {
//        $myText = (string) microtime();
//        echo $myText."\n";
//        $pieces = explode(" ", $myText);
//        $id = $pieces[1];
//        $id = (string)rand(99999999, 999999999) . $id;
////        echo "111111111111111111111111111111";
//        return $id;
//    }
    public function test() {

        $id = $this->checkImageExisting('24046', 'home-and-architectural-trends','5260');
        echo $id;
    }

    public function checkImageExisting($heliumMediaId, $owner_id, $collection_id) {

        $settings['log.enabled'] = true;
        $sherlock = new \Sherlock\Sherlock($settings);
        $sherlock->addNode("es1.hubsrv.com", 9200);
        $request = $sherlock->search();
        $index = 'test';
        $must = Sherlock\Sherlock::queryBuilder()->QueryString()->query('"\"' . $heliumMediaId . '\""')
                ->default_field('couchbaseDocument.doc.photo.photo_heliumMediaId');
        $must2 = Sherlock\Sherlock::queryBuilder()
                ->QueryString()->query("photo")
                ->default_field('couchbaseDocument.doc.type');
        $must3 = Sherlock\Sherlock::queryBuilder()
                ->QueryString()->query('"\"' . $owner_id . '\""')
                ->default_field('couchbaseDocument.doc.owner_id');
         $must4 = Sherlock\Sherlock::queryBuilder()
                ->QueryString()->query('"\"' . $collection_id . '\""')
                ->default_field('couchbaseDocument.doc.collection_id');
        $bool = Sherlock\Sherlock::queryBuilder()->Bool()->must($must)->
                        must($must2)->must($must3)
                ->must($must4);
        $request->index($index)->type("couchbaseDocument");
        $request->from(0)
                ->size(50);
        $request->query($bool);
        print_r($bool->toJSON());

        $response = $request->execute();
        echo sizeof($response);
        $existing_arr = array();
        foreach ($response as $found) {
            array_push($existing_arr, $found['id']);
        }
        return $existing_arr;
    }

    public function createArticleCover() {
        $data_list = array();
        $sql = "select
                    dbo.ArticleImages.* ,dbo.SparkJobNotes.dateCreated
                from
                    dbo.ArticleImages, dbo.Articles, dbo.SparkJobNotes 
                where 
                   (dbo.SparkJobNotes.dateCreated between '2013-10-21' and '2013-10-29')
                and 
                    dbo.SparkJobNotes.sparkJobId=dbo.Articles.sparkJobId 
                and
                    dbo.ArticleImages.articleId=dbo.Articles.id
                and 
                    dbo.ArticleImages.sequence = 1
                and 
                    dbo.ArticleImages.isExtra =0
                and 
                    dbo.SparkJobNotes.comment like 'Success'";

        $data_list = Yii::app()->db->createCommand($sql)->queryAll();
        if (sizeof($data_list) > 0) {
            foreach ($data_list as $coverImage) {
                if (preg_match('/\d[.](jpg)/', $coverImage['original'])) {
                    if ($this->isUrlExist("http://trendsideas.com/media/article/original/" . $coverImage['original'])) {
                        $url_hero = '{"url":"http://trendsideas.com/media/article/hero/' . $coverImage['original'] . '"}';
                        $url_list['cover'] = $url_hero;
                    }
                    if (sizeof($url_list) > 0) {
                        echo var_export($url_list) . "\n";
                        $image_details_array = $this->importImageList($url_list);
                    }

                    if (sizeof($image_details_array) > 0) {
                        $return_hero = json_decode($image_details_array['hero']);
                    }
                }
            }
        }
    }

// , dbo.ArticleImages.*, dbo.HeliumMedia.keywords     
    //left join dbo.Articles on dbo.SparkJobNotes.sparkJobId =dbo.Articles.sparkJobId
//left join dbo.ArticleImages on dbo.Articles.heliumMediaId = dbo.ArticleImages.heliumMediaId 
//
//                                    left join  dbo.HeliumMedia on dbo.ArticleImages.heliumMediaId = dbo.HeliumMedia.heliumId
    //       order by dbo.ArticleImages.id asc

    public function getPhotoDataByDate() {
        $sql = "select dbo.articleImages.*, dbo.SparkJobNotes.dateCreated, dbo.SparkJobNotes.sparkJobId, dbo.SparkJobNotes.comment, dbo.Articles.headline, dbo.Articles.subHeadline, dbo.Articles.body, dbo.Articles.creditText, dbo.Articles.photography, dbo.HeliumMedia.keywords from dbo.ArticleImages
                                       inner join dbo.HeliumMedia on  dbo.ArticleImages.heliumMediaId = dbo.HeliumMedia.heliumId
                                       inner join dbo.Articles on dbo.Articles.id=dbo.ArticleImages.articleId
                                       left join dbo.SparkJobNotes on dbo.Articles.sparkJobId =dbo.SparkJobNotes.sparkJobId

                                       where (dbo.SparkJobNotes.dateCreated between '2013-10-21' and '2013-10-29')
                                       and dbo.SparkJobNotes.comment like 'Success'

                                       order by dbo.Articles.id ASC
                             ";
        $from = "2013-10-01";
        $to = "2013-10-30";
        $dataDuringDates = Yii::app()->db->createCommand($sql)->queryAll();
        //   echo var_export($dataDuringDates). "over";
        echo "-------------------" . sizeof($dataDuringDates) . "\r\n";
        if (sizeof($dataDuringDates) > 0) {


            $this->getMegaData($dataDuringDates);
        }
    }

    public function actionImage($start, $quantity) {
        $start_time = microtime(true);

        $rows = 0;
        $this->amount = $start + $quantity;
        while (true) {
            $image_data = array();
            $from = $start + $rows;
            $to = $start + $rows + 20;
            $rows += 20;

            Yii::import("application.models.*");

            $image_data = ArticleImages::model()->getImageRange($from, $to);
            $this->total_amount = $this->total_amount + sizeof($image_data);

            echo "-------------------" . sizeof($image_data) . "\r\n";
            if (sizeof($image_data) > 0) {

                $this->getMegaData($image_data);
            }

            if (($rows + 20) > $quantity) {
                break;
            }
        }

        unset($image_data, $from, $to);
        echo "All finished: start from: " . $start . ", quantity: " . $quantity . "\r\n";

        $end_time = microtime(true);
        echo "totally spend: " . ($end_time - $start_time);

        //$this->writeToLog("/home/devbox/NetBeansProjects/test/addimage_success.log", "All finished");
        //$this->writeToLog("/home/devbox/NetBeansProjects/test/AddingCouchbase_success.log", "All finished");
//        $this->render('image', array(
//            'headline' => $image_data
//        ));
    }

    public function getMegaData($image_data) {

        foreach ($image_data as $val) {
            $return_hero = array();
            $return_thumbnail = array();
            $return_preview = array();
            $return_original = array();
            $obj = array();

            $is_hero = false;
            $is_thumbnail = false;
            $is_preview = false;
            $is_original = false;

            $message = "";
            $url_hero = "";
            $return_hero = "";
            $url_thumbnail = "";
            $return_thumbnail = "";
            $url_preview = "";
            $return_preview = "";
            $url_original = "";

            $url_list = array();
            $image_details_array = array();

            if (preg_match('/\d[.](jpg)/', $val['hero'])) {
                if ($this->isUrlExist("http://trendsideas.com/media/article/hero/" . $val['hero'])) {
                    $url_original = '{"url":"http://trendsideas.com/media/article/original/' . $val['hero'] . '"}';
                    $url_list['original'] = $url_original;
                    $url_preview = '{"url":"http://trendsideas.com/media/article/preview/' . $val['hero'] . '"}';
                    $url_list['preview'] = $url_preview;
                    $url_thumbnail = '{"url":"http://trendsideas.com/media/article/thumbnail/' . $val['hero'] . '"}';
                    $url_list['thumbnail'] = $url_thumbnail;
                    $url_hero = '{"url":"http://trendsideas.com/media/article/hero/' . $val['hero'] . '"}';
                    $url_list['hero'] = $url_hero;
                }
            }

            if (preg_match('/\d[.](jpg)/', $val['thumbnail'])) {
                if ($this->isUrlExist("http://trendsideas.com/media/article/thumbnail/" . $val['thumbnail'])) {
                    $url_original = '{"url":"http://trendsideas.com/media/article/original/' . $val['thumbnail'] . '"}';
                    $url_list['original'] = $url_original;
                    $url_preview = '{"url":"http://trendsideas.com/media/article/preview/' . $val['thumbnail'] . '"}';
                    $url_list['preview'] = $url_preview;
                    $url_thumbnail = '{"url":"http://trendsideas.com/media/article/thumbnail/' . $val['thumbnail'] . '"}';
                    $url_list['thumbnail'] = $url_thumbnail;
                    $url_hero = '{"url":"http://trendsideas.com/media/article/hero/' . $val['thumbnail'] . '"}';
                    $url_list['hero'] = $url_hero;
                }
            }

            if (preg_match('/\d[.](jpg)/', $val['preview'])) {
                if ($this->isUrlExist("http://trendsideas.com/media/article/preview/" . $val['preview'])) {
                    $url_original = '{"url":"http://trendsideas.com/media/article/original/' . $val['preview'] . '"}';
                    $url_list['original'] = $url_original;
                    $url_preview = '{"url":"http://trendsideas.com/media/article/preview/' . $val['preview'] . '"}';
                    $url_list['preview'] = $url_preview;
                    $url_thumbnail = '{"url":"http://trendsideas.com/media/article/thumbnail/' . $val['preview'] . '"}';
                    $url_list['thumbnail'] = $url_thumbnail;
                    $url_hero = '{"url":"http://trendsideas.com/media/article/hero/' . $val['preview'] . '"}';
                    $url_list['hero'] = $url_hero;
                }
            }

            if (preg_match('/\d[.](jpg)/', $val['original'])) {
                if ($this->isUrlExist("http://trendsideas.com/media/article/original/" . $val['original'])) {
                    $url_original = '{"url":"http://trendsideas.com/media/article/original/' . $val['original'] . '"}';
                    $url_list['original'] = $url_original;
                    $url_preview = '{"url":"http://trendsideas.com/media/article/preview/' . $val['original'] . '"}';
                    $url_list['preview'] = $url_preview;
                    $url_thumbnail = '{"url":"http://trendsideas.com/media/article/thumbnail/' . $val['original'] . '"}';
                    $url_list['thumbnail'] = $url_thumbnail;
                    $url_hero = '{"url":"http://trendsideas.com/media/article/hero/' . $val['original'] . '"}';
                    $url_list['hero'] = $url_hero;
                }
            }
            //     echo var_export($url_list)."\n";
            if (sizeof($url_list) > 0) {
                echo var_export($url_list) . "\n";
                $image_details_array = $this->importImageList($url_list);
            }
            // echo "\n\n55555555".var_export($image_details_array)."\n66666666\n";

            if (sizeof($image_details_array) > 0) {
                $return_hero = json_decode($image_details_array['hero']);
                $return_thumbnail = json_decode($image_details_array['thumbnail']);
                $return_preview = json_decode($image_details_array['preview']);
                $return_original = json_decode($image_details_array['original']);
                //  print_r(json_decode($image_details_array['hero']) );
                //   print_r($return_hero );
                print_r('hero: ' . var_export($return_hero) . "\n" . 'thumbnail: ' . var_export($return_thumbnail) . "\n" . 'preview: ' . var_export($return_preview) . "\n" . 'original: ' . var_export($return_original) . "\n");

                $obj = $this->structureArray($val, $return_hero, $return_thumbnail, $return_preview, $return_original);
                //        $this->importMegaObj($obj, $val['id']);
                $this->writeCouchbaseRecord($obj);
            } else {
                echo "http://trendsideas.com/media/article/preview/" . $val['preview'] . "--- DO NOT have return value from S3!--ID:" . $val['id'] . " \r\n";
            }
        }
    }

    public function importImageList($image_list) {
        $handle_array = array();
        $return_array = array();
        foreach ($image_list as $k => $list) {
            echo $list;
            $ch = curl_init("http://api.develop.trendsideas.com/Imageimport/");

            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
            curl_setopt($ch, CURLOPT_POSTFIELDS, $list);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));

            $handle_array[$k] = $ch;
        }
        echo "\n back from api";

        $mh = curl_multi_init();
        foreach ($handle_array as $k => $val)
            curl_multi_add_handle($mh, $val);

        $running = null;
        do {
            curl_multi_exec($mh, $running);
        } while ($running > 0);

        foreach ($handle_array as $k => $h) {
            $result = curl_multi_getcontent($h);
            $return_array[$k] = $result;



            $this->image_amount++;
            //    echo $result . "\r\n" . date("Y-m-d H:i:s") . "---" . $this->image_amount." \r\n";
            echo "\r\n" . date("Y-m-d H:i:s") . "---" . $this->image_amount . " \r\n";
        }

        foreach ($handle_array as $k => $h) {
            curl_multi_remove_handle($mh, $h);
        }

        curl_multi_close($mh);

        //     echo "saved url ".json_decode(var_export($return_array,TRUE)."\n");
        //       echo "saved url ".(var_export($return_array,TRUE)."\n");
        //           echo var_export($return_array)."9999999999999999999999999999999999999\n\n";
        return $return_array;
    }

    public function imageImport($json_obj) {
        try {
            $ch = curl_init("http://api.develop.devbox/imageimport/");

            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
            curl_setopt($ch, CURLOPT_POSTFIELDS, $json_obj);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
            $result = curl_exec($ch);

            $this->image_amount++;
            echo $message = $result . "\n" . date("Y-m-d H:i:s") . $json_obj . "---" . $this->image_amount . " \r\n";

            //close connection
            curl_close($ch);
            unset($ch, $message, $json_obj);

            return $result;
        } catch (Exception $e) {
            $response = 'Caught exception: ' . $e->getMessage();
            echo $message = $response . "\n" . date("Y-m-d H:i:s") . $json_obj . " \r\n";

            unset($e, $response, $message);
            return false;
        }
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
            $this->obj_amount++;
//            error_log($result);
            echo $message = "develop.devbox/" . $result . "\r\n" . date("Y-m-d H:i:s") . "\r\n" . $data_list['object_image_url'] . "---" . $this->obj_amount . "/" . $this->total_amount . "\r\n" . $id . "/" . $this->amount . " \r\n";


            unset($data_list, $json_list, $ch, $result, $message);
        } catch (Exception $e) {
            $response = 'Caught exception: ' . $e->getMessage();
            echo $message = $response . "\n" . date("Y-m-d H:i:s") . $data_list['object_image_url'] . " \r\n";


            unset($json_list, $response, $message);
        }
    }

    protected function getNewID() {
        $myText = (string) microtime();
        $pieces = explode(" ", $myText);
        $id = $pieces[1];
        $id = (string) rand(99999999, 999999999) . $id;
//        echo "111111111111111111111111111111";
        return $id;
    }

    public function writeCouchbaseRecord($obj) {

        $image_arr = $obj;

        $imageAdded_arr = array();
        $total_amount = sizeof($image_arr);

        if ($total_amount > 0) {
            $exist_arr = $this->checkImageExisting($image_arr['photo'][0]['photo_heliumMediaId'], $image_arr['owner_id'], $image_arr['collection_id']);
            if (sizeof($exist_arr) > 0) {
                foreach ($exist_arr as $existPhoto) {
                    $couchbase_id = 'trendsideas.com/' . $existPhoto;
                    $cb = $this->couchBaseConnection('restored');
                    $result = $cb->get($couchbase_id);
                    //   if($result!= null){
                    $result_arr = CJSON::decode($result, true);
                    //  $record_collection_id = $result_arr["collection_id"];
                    //create Couchbase object ready for inserting into bucket
                    if ($cb->set($couchbase_id, CJSON::encode($result_arr))) {
                        array_push($imageAdded_arr, $couchbase_id);
                    }
                }
            } else {
                $newId = $this->getNewID();
                $couchbase_id = 'trendsideas.com/' . $newId;
                $image_arr['id'] = $newId;
                $image_arr['photo'][0]['id'] = $newId;
                $cb = $this->couchBaseConnection('restored');
                //any attributes that need to update
                //create Couchbase object ready for inserting into bucket
                if ($cb->add($couchbase_id, CJSON::encode($image_arr))) {
                    array_push($imageAdded_arr, $couchbase_id);

                    echo "add record successful " . $couchbase_id . "\n";
                } else {
                    $message = "add object fail ------------------------------- \r\n";
                    $this->writeToLog($this->error_path, $message);
                }

                //   print_r($obj_arr);
                echo $message;
                //    exit();
                print_r($imageAdded_arr);
            }
        }
        unset($image_arr);
    }

    public function structureArray($val, $return_hero, $return_thumbnail, $return_preview, $return_original) {
        // get size of image
        $size = "_" . $return_original->width . 'x' . $return_original->height . ".jpg";
        $original_size = str_replace(".jpg", $size, $val['original']);
        echo $original_size . "\n";
        echo $val['id'] . " \n";

        //      get region and country
        $region = Regions::model()->selectRegionByImage($val['id']);
        $country = $region;
        $pos = strripos($country, ",");
        if ($pos) {
            $country = substr($country, 0, -2);
        }
        echo $country . "\n";

        // get topic


        $topic_list = TopicSearchNames::model()->selectTopicName($val['articleId']);
        print_r(var_export($topic_list) . "\n");
        echo "Done with image " . $val["id"] . "\n\n\n\n";


        //get subcategory
        $subcategory = SubCategorySearchNames::model()->selectSubCategory($val['id']);

        // get category 
        $category = Categories::model()->selectCategory($val['id']);

        //     get book infor 
        $book_id = array();
        $book_date = 0;
        $book_title = "";
        $book_list = Books::model()->getBookByPhotoID($val['id']);
        $timezone = "";
        if (sizeof($book_list) > 0) {
            foreach ($book_list as $book) {
                array_push($book_id, $book['id']);
                $date_live = $book['dateLive'];
                $title = str_replace(" & ", "-", $book['title']);
                $title = str_replace(" ", "-", $title);
                $time_array = $this->getUTC($date_live, $region_book);
                if (sizeof($time_array) > 0) {
                    $UTC = $time_array['utc'];
                    $timezone = $time_array['timezone'];
                    $book_title = $title;
                }
            }
        }





        // get current datetime
        $accessed = strtotime(date('Y-m-d H:i:s'));

        // get keywords imfor
        $keywords = mb_check_encoding($val['keywords'], 'UTF-8') ? $val['keywords'] : utf8_encode($val['keywords']);
        $obj = array(
            "id" => null, //
            "accessed" => $accessed, //the creating UTC datatime of a obj
            "created" => $book_date, //the UTC datatime of book datelive from books table of MS SQL
            "boost" => null, //
            "categories" => $category,
            "collection_id" => $val['articleId'],
            "creator" => $book_title,
            "creator_type" => 'user', //
            "creator_profile_pic" => "http://s3.hubsrv.com/trendsideas.com/users/1000000000/profile/profile_pic_small.jpg", //
            "country" => $country, //region from table, could be multiple
            "collection_count" => null, //
            "deleted" => null, //
            "domains" => array(),
            "editors" => "*@trendsideas.com, support@trendsideas.com", //
            "geography" => null, //
            "like_count" => null, //
            "is_indexed" => TRUE, //
            "is_active" => true, //
            "keywords" => $keywords,
            "object_image_linkto" => null, //
            "object_image_url" => $return_hero->url,
            "object_title" => null, //
            "object_description" => $val['caption'],
            "owner_type" => 'profile', //
            "owner_profile_pic" => "http://s3.hubsrv.com/trendsideas.com/users/1000000000/profile/profile_pic_small.jpg", //
            "owner_title" => "Trends Ideas", //
            "owner_id" => strtolower($book_title), //"home-and-apartment-trends-nz"
            "owner_contact_email" => "enquiries@trendsideas.com", //
            "owner_contact_cc_emails" => null, //
            "owner_contact_bcc_emails" => null, //
            "people_like" => null, //
            "region" => $country,
            "suburb" => null, //
            "status_id" => null, //
            "subcategories" => $subcategory,
            "timezone" => $timezone,
            "topics" => $topic_list,
            "type" => "photo", //
            "updated" => null, //
            "uri_url" => null, //
            "view_count" => null, //
            "photo" => array()                      //
        );

        $photo_list = array(
            "id" => null, //
            "photo_title" => null, //
            "photo_caption" => $val['caption'],
            "photo_articleId" => $val['articleId'],
            "photo_heliumMediaId" => $val['heliumMediaId'],
            "photo_technicalSpecification" => $val['technicalSpecification'],
            "photo_sequence" => $val['sequence'],
            "photo_isExtra" => $val['isExtra'],
            "photo_image_url" => $return_original->url,
            "photo_image_original_url" => $return_original->url,
            "photo_image_hero_url" => $return_hero->url,
            "photo_image_thumbnail_url" => $return_thumbnail->url,
            "photo_image_preview_url" => $return_preview->url,
            "photo_type" => "image/jpeg", //
            "photo_collection_name" => null, //
            "photo_categories" => null, //
            "photo_keywords" => $keywords,
            "photo_brands" => null, //
            "photo_products" => null, //
            "photo_original_filename" => $original_size,
            "photo_original_width" => $return_original->width,
            "photo_original_height" => $return_original->height,
            "photo_book_id" => $book_id
        );

        array_push($obj['photo'], $photo_list);
        $domains_arr = array("beta.trendsides.com", "trendsideas.com");
        array_push($obj['domains'], $domains_arr);
        print_r(var_export($obj));
        unset($photo_list, $photo_list, $keywords, $category, $subcategory, $topic_list, $country, $pos, $region, $original_size, $size, $val, $return_hero, $return_thumbnail, $return_preview, $return_original);
        return $obj;
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
        $time_array = array();
        date_default_timezone_set($time_zone);
        $time_string = strtotime($datetime);
        $time_array['utc'] = $time_string;
        $time_array['timezone'] = $time_zone;

        return $time_array;
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
