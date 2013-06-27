<?php
    class RefineDataCommand extends CConsoleCommand {
        public $total_num = 0;
        public $obj_amount = 0;
        
        
        public function  actionIndex() {
            Yii::import("application.models.*");
            $data_list = ArticleImages::model()->getAll();
            $this->total_num = sizeof($data_list);
            echo "Totally: ".$this->total_num."\r\n";

            if (sizeof($data_list)>0) {
                foreach ($data_list as $val) {
                    $photo_heliumMediaId = $val['heliumMediaId'];
//                    echo $photo_heliumMediaId ."\r\n";
                    if ($photo_heliumMediaId!="") {                        
                        $photo_array=$this->getValidPhoto($photo_heliumMediaId);
                        
                        $url = "http://api.develop.devbox/GetResultByKeyValue/?type=photo&photo_heliumMediaId=".$photo_heliumMediaId;
                        $elastic_return_str = $this->callAPI($url);
                        $s3_url_arr=$this->getUrlFromElastic($elastic_return_str);
                        
                        $mega_obj_arr = $this->structureArray($val, $s3_url_arr);
                        $id = $this->importMegaObj($mega_obj_arr, $val['id']);
                        
                        foreach($photo_array as $k=>$val){
                            $url_arr = explode("/", $s3_url_arr[$k]);
                            $file_name = $url_arr[sizeof($url_arr)-1];
                            
                            $url = 'http://api.develop.devbox/PhotoMoving?style='.$k.'&name='.$file_name.'&id='.$id;                            
                            $move_return_data=$this->callAPI($url);
                            
//                            echo $url."\r\n";
//                            echo gettype($move_return_data);
                        }
            
//                        exit();
                        
                    } else {
                        $message = date("Y-m-d H:i:s")." -- ".$val['id']." --Does not have helium media id!!";
                        $this->writeToLog('/home/devbox/NetBeansProjects/test/error.log', $message);
                    }
                }
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
                echo $message = "trendsideas.com/" . $result . "\r\n id=" .$id . "---" . date("Y-m-d H:i:s"). "---" . $this->obj_amount . "/" . $this->total_num. " \r\n";
                return $result;
            } catch (Exception $e) {
                $response = 'Caught exception: ' . $e->getMessage();
                echo $message = $response . "\n" . date("Y-m-d H:i:s") . $data_list['object_image_url']." \r\n";

                return null;
            }
        }
        
        public function structureArray($val, $photo_arr) {
            // get size of image        
            $original_size = $photo_arr['photo_original_filename'];

            // image url 
            $original_url = 'https://s3.hubsrv.com/trendsideas.com/object_id/photo/object_id/origianl/'.$photo_arr['photo_original_filename'];
            $hero_url = 'https://s3.hubsrv.com/trendsideas.com/object_id/photo/object_id/hero/'.$photo_arr['photo_hero_filename'];
            $preview_url = 'https://s3.hubsrv.com/trendsideas.com/object_id/photo/object_id/preview/'.$photo_arr['photo_preview_filename'];
            $thumbnail_url = 'https://s3.hubsrv.com/trendsideas.com/object_id/photo/object_id/thumbnail/'.$photo_arr['photo_thumbnail_filename'];

            //  get region and country
            $country="";
            
            $region = Regions::model()->selectRegionByImage($val['id']);
            if(sizeof($region)) {
                $country = $region;
                $pos = strripos($country, ",");
                if ($pos) {
                    $country = substr($country, -($pos - 3));
                }
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
                "follower_count" => null,
                "followers" => null,
                "following" => null,
                "following_count" => null,
                "country" => $country,
                "region" => $region,
                "geography" => null,
                "indexed_yn" => "y",
                "object_image_linkto" => null,
                "object_image_url" => $hero_url,
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
                "photo_image_url" => $original_url,
                "photo_image_original_url" => $original_url,
                "photo_image_hero_url" => $hero_url,
                "photo_image_thumbnail_url" => $thumbnail_url,
                "photo_image_preview_url" => $preview_url,
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
                "photo_original_width" => $photo_arr['photo_original_width'],
                "photo_original_height" => $photo_arr['photo_original_height'],
                "photo_book_id" => $book_id
            );

            array_push($obj['photo'], $photo_list);
            $owners_arr = array("andrew.johnson@trendsideas.com", "support@trendsideas.com");
            array_push($obj['owners'], $owners_arr);

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
      
        public function callAPI($url) {
            try{
//                echo $url."\r\n";
                $ch = curl_init($url);
                curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "GET");
                curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
                curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));

                $result = curl_exec($ch);
                curl_close ($ch);
                return $result;
            } catch (Exception $e) {
               $response = $e->getMessage();
               $message = date("Y-m-d H:i:s")." ----API CALL ERROR!! \r\n".$response.$url;
               $this->writeToLog('/home/devbox/NetBeansProjects/test/error.log', $message);
           }
        }
        
        public function getUrlFromElastic($elastic_return_str){
                $obj_url_arr=array();
                $result_arr =  CJSON::decode($elastic_return_str);
                
                if(sizeof($result_arr['articles'])>0) {
                    $photo_arr = $result_arr['articles'][sizeof($result_arr['articles'])-1]['photo'][0];
                    
                    $obj_url_arr['original'] = $photo_arr['photo_image_original_url'];
                    $obj_url_arr['hero'] = $photo_arr['photo_image_hero_url'];
                    $obj_url_arr['thumbnail'] = $photo_arr['photo_image_thumbnail_url'];
                    $obj_url_arr['preview'] = $photo_arr['photo_image_preview_url'];
                    
                    if(array_key_exists('photo_original_filename', $photo_arr)) {
                        $obj_url_arr['photo_original_filename'] = $photo_arr['photo_original_filename'];
                    } 
                    if(array_key_exists('photo_original_width', $photo_arr)) {
                        $obj_url_arr['photo_original_width'] = $photo_arr['photo_original_width'];                     
                    } 
                    if(array_key_exists('photo_original_height', $photo_arr)) {
                        $obj_url_arr['photo_original_height'] = $photo_arr['photo_original_height'];
                    }
                                       
                    $url_arr = explode("/", $obj_url_arr['hero']);
                    $obj_url_arr['photo_hero_filename'] = $url_arr[sizeof($url_arr)-1];
                    
                     $url_arr = explode("/", $obj_url_arr['thumbnail']);
                    $obj_url_arr['photo_thumbnail_filename'] = $url_arr[sizeof($url_arr)-1];
                    
                     $url_arr = explode("/", $obj_url_arr['preview']);
                     $obj_url_arr['photo_preview_filename'] = $url_arr[sizeof($url_arr)-1];
                }
                                               
//                print_r($obj_url_arr);
//                exit();
                return $obj_url_arr;
        }
        
        public function getValidPhoto($photo_heliumMediaId) {
            $valid_photo_array=array();
            for($i=0; $i<4; $i++) {
                $url="";
                $photo_type = '';
                switch ($i) {
                    case 0: 
                        $photo_type = 'thumbnail';
                        $url = 'http://trendsideas.com/media/article/'.$photo_type.'/'.$photo_heliumMediaId.'.jpg';
                        break;
                    case 1: 
                        $photo_type = 'preview';
                        $url = 'http://trendsideas.com/media/article/'.$photo_type.'/'.$photo_heliumMediaId.'.jpg';
                        break;
                    case 2:
                        $photo_type = 'hero';
                        $url = 'http://trendsideas.com/media/article/'.$photo_type.'/'.$photo_heliumMediaId.'.jpg';
                        break;
                    case 3:
                        $photo_type = 'original';
                        $url = 'http://trendsideas.com/media/article/'.$photo_type.'/'.$photo_heliumMediaId.'.jpg';
                        break;
                }
//                        echo $url."\r\n";

               if($this->validatePhotoUrl($url)) {
                   $valid_photo_array[$photo_type] = $url;
               }
            }
            
            return $valid_photo_array;
        }       
        
        public function validatePhotoUrl($url) {
            $is_vailable = FALSE;
            if ($this->isUrlExist($url)) {
                if($a=@getimagesize($url)) {
                    $is_vailable=TRUE;
                 } else {
                    $message = date("Y-m-d H:i:s")." -- ".$url." --URL is not a photo!!";
                    $this->writeToLog('/home/devbox/NetBeansProjects/test/error.log', $message);
                }                
            } else {
                $message = date("Y-m-d H:i:s")." -- ".$url." --URL is not work!!";
                $this->writeToLog('/home/devbox/NetBeansProjects/test/error.log', $message);
            }
            
            return $is_vailable;
        }

        public function isUrlExist($path) {
            $file_headers = @get_headers($path);
            if ($file_headers[0] == 'HTTP/1.1 404 Not Found') {
                $response = 'HTTP/1.1 404 Not Found';
            } else {
                $response = "true";
            }

            return $response;
        }
        
        public function writeToLog($fileName, $content) {
            //   $my_file = '/home/devbox/NetBeansProjects/test/addingtocouchbase_success.log';
            $handle = fopen($fileName, 'a') or die('Cannot open file:  ' . $fileName);
            $output = "\n" . $content;
            fwrite($handle, $output);
            fclose($handle);

            unset($fileName, $content, $handle, $output);
        }

    }

?>