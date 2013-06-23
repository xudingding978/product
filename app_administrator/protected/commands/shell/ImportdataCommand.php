<?php

class ImportdataCommand extends CConsoleCommand {

    public function actionIndex($start = null, $quantity = null) {

        echo (isset($start) ? 'Start position is... ' . $start : 'No start defined');
        echo (isset($quantity) ? 'Quantity to load is... ' . $quantity : 'No quantity defined');
        $this->actionImage($start, $quantity);
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

    public function actionImage($start, $quantity) {
        $start_time = microtime(true);
        
        $rows = 0;
        $this->amount = $start+$quantity;
        while(true) {
            $image_data = array();
            $from = $start + $rows;
            $to = $start + $rows + 20;
            $rows += 20;
            
            Yii::import("application.models.*");
            
            $image_data = ArticleImages::model()->getImageRange($from, $to);
            $this->total_amount = $this->total_amount + sizeof($image_data);

            if (sizeof($image_data) > 0) {
                $this->getMegaData($image_data);
            }
            
            if (($rows+20)>$quantity) {
                break;
            }
        }
        
        unset($image_data, $from, $to);
        echo "All finished: start from: " .$start. ", quantity: " .$quantity  . "\r\n";
        
        $end_time = microtime(true);
        echo "totally spend: ". ($end_time-$start_time);
        
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
                    $url_hero = '{"url":"http://trendsideas.com/media/article/hero/' . $val['hero'] . '"}';
                    $url_list['hero']=$url_hero;
                }
            }
            
            if (preg_match('/\d[.](jpg)/', $val['thumbnail'])) {
                if ($this->isUrlExist("http://trendsideas.com/media/article/thumbnail/" . $val['thumbnail'])) {
                    $url_thumbnail = '{"url":"http://trendsideas.com/media/article/thumbnail/' . $val['thumbnail'] . '"}';
                    $url_list['thumbnail']=$url_thumbnail;
                }
            }
            
            if (preg_match('/\d[.](jpg)/', $val['preview'])) {
                if ($this->isUrlExist("http://trendsideas.com/media/article/preview/" . $val['preview'])) {
                    $url_preview = '{"url":"http://trendsideas.com/media/article/preview/' . $val['preview'] . '"}';
                    $url_list['preview']=$url_preview;
                }
            }
            
            if (preg_match('/\d[.](jpg)/', $val['original'])) {
                if ($this->isUrlExist("http://trendsideas.com/media/article/original/" . $val['original'])) {
                    $url_original = '{"url":"http://trendsideas.com/media/article/original/' . $val['original'] . '"}';
                    $url_list['original']=$url_original;
                }
            }
            
            if (sizeof($url_list)>0) {
                    $image_details_array = $this->importImageList($url_list);
            }
            
            if (sizeof($image_details_array)>0) {
                $return_hero = json_decode($image_details_array['hero']);
                $return_thumbnail = json_decode($image_details_array['thumbnail']);
                $return_preview = json_decode($image_details_array['preview']);
                $return_original = json_decode($image_details_array['original']);
                
                $obj = $this->structureArray($val, $return_hero, $return_thumbnail, $return_preview, $return_original);
                $this->importMegaObj($obj, $val['id']);
            } else {
                echo "http://trendsideas.com/media/article/preview/" . $val['preview'] . "--- DO NOT have return value from S3!--ID:" . $val['id']. " \r\n";
            }
            
            unset($return_hero, $return_thumbnail, $return_preview, $return_original, $obj);
            unset($is_hero, $is_thumbnail, $is_preview, $is_original);
            unset($message, $url_hero, $return_hero, $url_thumbnail, $return_thumbnail, $url_preview, $return_preview, $url_original, $return_original);
        }
    }
    
    public function importImageList(&$image_list) {
        $handle_array = array();
        $return_array = array();
        foreach($image_list as $k=>$list){
            $ch = curl_init("http://api.develop.devbox/imageimport/");
            
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
            curl_setopt($ch, CURLOPT_POSTFIELDS, $list);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
                
            $handle_array[$k] = $ch;
        }
        
        $mh = curl_multi_init();
        foreach($handle_array as $k => $val) curl_multi_add_handle($mh, $val);
        
        $running = null; 
        do{
           curl_multi_exec($mh, $running);           
        } while($running > 0);
        
        foreach($handle_array as $k => $h) {
            $result = curl_multi_getcontent($h);
            $return_array[$k] = $result;
            
            $this->image_amount++;
            echo $result . "\r\n" . date("Y-m-d H:i:s") . "---" . $this->image_amount." \r\n";
        }
        
        foreach ($handle_array as $k=>$h) {
            curl_multi_remove_handle($mh, $h);
        }
        
        curl_multi_close($mh); 
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
            echo $message = $result . "\n" . date("Y-m-d H:i:s") . $json_obj . "---" . $this->image_amount." \r\n";
            
            //close connection
            curl_close($ch);
            unset($ch, $message, $json_obj);

            return $result;
        } catch (Exception $e) {
            $response = 'Caught exception: ' . $e->getMessage();
            echo $message = $response . "\n" . date("Y-m-d H:i:s") . $json_obj. " \r\n";
            
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
            echo $message = "develop.devbox/" . $result . "\r\n" . date("Y-m-d H:i:s") ."\r\n". $data_list['object_image_url'] . "---" . $this->obj_amount . "/" . $this->total_amount . "\r\n" .$id. "/" . $this->amount. " \r\n";
          

            unset($data_list, $json_list, $ch, $result, $message);
        } catch (Exception $e) {
            $response = 'Caught exception: ' . $e->getMessage();
            echo $message = $response . "\n" . date("Y-m-d H:i:s") . $data_list['object_image_url']." \r\n";
         

            unset($json_list, $response, $message);
        }
    }

    public function structureArray($val, $return_hero, $return_thumbnail, $return_preview, $return_original) {
        // get size of image
        $size = "_" . $return_original->width . 'x' . $return_original->height . ".jpg";
        $original_size = str_replace(".jpg", $size, $val['original']);
       
        //  get region and country
        $region = Regions::model()->selectRegionByImage($val['id']);
        $country = $region;
        $pos = strripos($country, ",");
        if ($pos) {
            $country = substr($country, -($pos - 3));
        }

        // get topic
        $topic_list = TopicSearchNames::model()->selectTopicName($val['id']);

        //get subcategory
        $subcategory = SubCategorySearchNames::model()->selectSubCategory($val['id']);

        // get category 
        $category = Categories::model()->selectCategory($val['id']);

        // get book infor 
        $book_id = array();
        $book_date = 0;
        $book_title = "";
        $book_list = Books::model()->getBookByPhotoID($val['id']);
        $timezone="";
        if(sizeof($book_list)>0) {
            foreach($book_list as $book) {
                array_push($book_id, $book['id']);
                $region_book = Regions::model()->selectCountryNameByID($book['region']);
                $date_live = $book['dateLive'];
                $title = str_replace(" & ", "-", $book['title']);
                $title = str_replace(" ", "-", $title);
                $time_array = $this->getUTC($date_live, $region_book);
                if(sizeof($time_array)>0) {
                    $UTC = $time_array['utc'];
                    $timezone = $time_array['timezone'];
                    if ((int)$UTC>$book_date) {
                       $book_date = $UTC;
                        $region_book = str_replace(" & ", "-", $region_book);
                        $region_book = str_replace(" ", "-", $region_book);
                        $book_title =$region_book."-".$title;
    //                    $book_title = strtolower($book_title);
                    }
                }
            }
        }
        
        // get current datetime
        $accessed = strtotime(date('Y-m-d H:i:s'));
        
        // get keywords imfor
        $keywords = mb_check_encoding($val['keywords'], 'UTF-8') ? $val['keywords'] : utf8_encode($val['keywords']);
        $obj = array(
            "id" => null,
            "type" => "photo",
            "accessed" => $accessed,
            "active_yn" => "y",
            "created" => $book_date,
            "timezone" =>$timezone,
            "creator" => $book_title,
            "creator_type" => 'user',
            "creator_profile_pic" => "",
            "creator_title" => null,
            "topics" => $topic_list,
            "categories" => $category,
            "collection_id" =>$val['articleId'],
            "subcategories" => $subcategory,
            "deleted" => null,
            "domains" => "trendsideas.com",
            "editors" => "*@trendsideas.com",
            "follower_count" => rand(1, 999999),
            "followers" => null,
            "following" => null,
            "following_count" => rand(1, 999999),
            "country" => $country,
            "region" => $region,
            "geography" => null,
            "indexed_yn" => "y",
            "object_image_linkto" => null,
            "object_image_url" => $return_hero->url,
            "object_title" => null,
            "object_description" => $val['caption'],
            "owner_type" => 'profile',
            "owner_profile_pic" => "https://s3-ap-southeast-2.amazonaws.com/hubstar-dev/this_is/folder_path/Trends-Logo.jpg",
            "owner_title" => "Trends Ideas",
            "owner_id" => strtolower($book_title),    //"home-and-apartment-trends-nz"
            "owners" => array(),
            "status_id" => null,
            "updated" => null,
            "uri_url" => null,
            "view_count" => rand(1, 99999999),
            "keywords" => $keywords,
            "photo" => array()
        );

        $photo_list = array(
            "id" => null,
            "photo_title" => null,
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
            "photo_image_linkto" => null,
            "photo_type" => "image/jpeg",
            "photo_collection_name" => null,
            "photo_categories" => null,
            "photo_keywords" => $keywords,
            "photo_brands" => null,
            "photo_products" => null,
            "photo_time_zone" =>$timezone,
            "photo_created" => $book_date,
            "photo_original_filename" => $original_size,
            "photo_original_width" => $return_original->width,
            "photo_original_height" => $return_original->height,
            "photo_book_id" => $book_id
        );

        array_push($obj['photo'], $photo_list);
        $owners_arr = array("andrew.johnson@trendsideas.com", "support@trendsideas.com");
        array_push($obj['owners'], $owners_arr);

        unset($owners_arr, $photo_list, $photo_list, $keywords, $category, $subcategory, $topic_list, $country, $pos, $region, $original_size, $size, $val, $return_hero, $return_thumbnail, $return_preview, $return_original);
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
        $time_array['utc']=$time_string;
        $time_array['timezone']=$time_zone;
        
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
