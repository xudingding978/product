<?php
    class ImportArticleCommand extends CConsoleCommand {
        public $amount=0;
        public $total_amount=0;
        public $obj_amount=0;
        
        public function actionIndex($start = null, $quantity = null) {

            echo (isset($start) ? 'Start position is... ' . $start : 'No start defined');
            echo (isset($quantity) ? '  Quantity to load is... ' . $quantity : 'No quantity defined');
            
            $this->updateObj();
//            $this->actionArticle($start, $quantity);
        }
        
        protected function couchBaseConnection() {
            $cb = new Couchbase("cb1.hubsrv.com:8091", "Administrator", "Pa55word", "test", true);
            return $cb;
        }
        
        public function actionArticle($start, $quantity) {
            $start_time = microtime(true);

            $rows = 0;
            $this->amount = $start+$quantity;
            while(true) {
                $artical_data = array();
                $from = $start + $rows;
                $to = $start + $rows + 20;
                $rows += 20;

                Yii::import("application.models.*");
                
                $artical_data = Article::model()->getArticalRange($from, $to);
//                echo "qqqqqqqqqqqqqqqqqqq";
//                exit();
                
                $this->total_amount = $this->total_amount + sizeof($artical_data);
//                echo sizeof($artical_data);
               if(sizeof($artical_data>0)) {
                    $this->getMegaData($artical_data);
               } else {
                   echo "cannot find any articals";
               }

                if (($rows+20)>$quantity) {
                    break;
                }
            
            }
            echo "All finished: start from: " .$start. ", quantity: " .$quantity  . "\r\n";

            $end_time = microtime(true);
            echo "totally spend: ". ($end_time-$start_time);

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
            if(sizeof($book_list)>0) {
                foreach($book_list as $book) {
                    array_push($book_id, $book['id']);
                    $region_book = Regions::model()->selectCountryNameByID($book['region']);
                    $date_live = $book['dateLive'];
                    $title = str_replace(" & ", "-", $book['title']);
                    $title = str_replace(" ", "-", $title);
                    
                    
                    $UTC = $this->getUTC($date_live, $region_book);

                    if ((int)$UTC>$book_date) {
                       $book_date = $UTC;
                        $region_book = str_replace(" & ", "-", $region_book);
                        $region_book = str_replace(" ", "-", $region_book);
                        $book_title =$region_book."-".$title;
    //                    $book_title = strtolower($book_title);
                    }
                }
            }

            // get current datetime
            $accessed = strtotime(date('Y-m-d H:i:s'));
            
            // get photography
            $photography="";
            if(strstr($val['photography'], 'Photography by')){
                $photography=  str_replace("Photography by", "", $val['photography']);
            }
            
            //get writer
            $writer = "";             
            if(strstr($val['writer'], 'Story by')){
                $writer =  str_replace("Story by", "", $val['writer']);
            }
            
            //get object cover
//            $cover= $this->getArticleCover($val['id']);

            
            // get keywords imfor
//            $keywords = mb_check_encoding($val['keywords'], 'UTF-8') ? $val['keywords'] : utf8_encode($val['keywords']);
            
            $obj = array(
                "id" => null,
                "type" => "article",
                "accessed" => $accessed,
                "active_yn" => "y",
                "created" => $book_date,
                "creator" => $book_title,
                "creator_type" => 'user',
                "creator_profile_pic" => "",
                "creator_title" => null,
                "topics" => $topic_list,
                "categories" => $category,
                "collection_id" =>$val['id'],
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
                "object_image_url" => $cover,
                "object_title" => $val['headline'],
                "object_description" => $val['subHeadline'],
                "owner_type" => 'profile',
                "owner_profile_pic" => "https://s3-ap-southeast-2.amazonaws.com/hubstar-dev/this_is/folder_path/Trends-Logo.jpg",
                "owner_title" => "Trends Ideas",
                "owner_id" => strtolower($book_title),    //"home-and-apartment-trends-nz"
                "owners" => array(),
                "status_id" => null,
                "updated" => null,
                "uri_url" => null,
                "view_count" => rand(1, 99999999),
                "keywords" => $val['headline'],
                "article" => array()
            );

            $article_list = array(
                "id" => null,
                "article_id"=>$val['id'],
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
                "article_book_id" => $book_id
            );

            array_push($obj['article'], $article_list);
            $owners_arr = array("*@trendsideas.com");
            array_push($obj['owners'], $owners_arr);

            return $obj;
        }
        
        public function updateObj(){
             Yii::import("application.models.*");
            $id_array = Article::model()->getArticalID();
            $total = sizeof($id_array);
            $num = 0;
            foreach($id_array as $val) {
//                    echo "---".$val['article']."-----------".$val['image']."------------------";
                $cover_url="";
                $couchbase_id = array();

                $url = "http://api.develop.devbox/GetResultByKeyValue/?type=photo&photo_heliumMediaId=".$val['image'];
                $json_result=$this->getData($url);
                if (sizeof($json_result)>0) {
                    $cover_url = $this->getCoverUrl($json_result);
                } else {
                    echo "cannot find any image object from couchbase!----".$val['article']."------".$val['image']."------ \r\n";
                }
                
                $url = "http://api.develop.devbox/GetResultByKeyValue/?type=article&collection_id=".$val['article'];
                $article_result=$this->getData($url);
                 if (sizeof($article_result)>0) {
                    $couchbase_id = $this->getArticleCouchbaseId($article_result);
                } else {
                    echo "cannot find any article object from couchbase!----".$val['article']."------".$val['image']."------ \r\n";
                }
//                print_r($couchbase_id);
                
                if ($cover_url!="" && sizeof($couchbase_id)>0) {
                    foreach ($couchbase_id as $k=>$val) {
                        $this->updateArticle($cover_url, $val);
                    }
                    $num ++;
                    echo "--".$num ."/". $total; 
                }
                
            }
        }
                
        public function updateArticle($cover_url, $couchbase_id) {
            $cb = $this->couchBaseConnection();
            $id = "develop.devbox/".$couchbase_id;
            
            $old_record = $cb->get($id);
            $old_record_array = CJSON::decode($old_record, true);
            
            $old_record_array['object_image_url']=$cover_url;
              if ($cb->set($id, CJSON::encode($old_record_array))) {
                  echo $id." update successssssssssssssssssssssssss! \r\n";
              } else {
                  echo $id." update failllllllllllllllllllllllllllllllllllllllllllllll! \r\n";
              }
        }
        
        public function getArticleCouchbaseId($article_result) {
            $couchbase_id_array = array();
            foreach($article_result['articles'] as $val) {
                array_push($couchbase_id_array, $val['id']);
            }
            
            return $couchbase_id_array;
        }
        
        public function getData($url){
            try{
//                echo $url."\r\n";
                $cover_url="";
                $ch = curl_init($url);
                curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "GET");
                curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
                curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
                
                $result = curl_exec($ch);
                $json_result = json_decode($result, true);
                curl_close ($ch);
                
                return $json_result;
                
            } catch (Exception $e) {
                echo 'Caught exception: ' . $e->getMessage();
                return null;
            }
        }
        
        public function getCoverUrl($json_result) {
            $cover_url = "";
            foreach($json_result['articles'] as $val) {
                $sequence = $val['photo'][0]['photo_sequence'];
                if($sequence=1) {
                    $cover_url = $val['photo'][0]['photo_image_hero_url'];
                    if ($cover_url != "") break;
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
            $this->obj_amount++;

            echo $message = "develop.devbox/" . $result . "\r\n" . date("Y-m-d H:i:s") . "---" . $this->obj_amount . "/" . $this->total_amount . "\r\n" .$id. "/" . $this->amount. " \r\n";
          
            unset($data_list, $json_list, $ch, $result, $message);
        } catch (Exception $e) {
            $response = 'Caught exception: ' . $e->getMessage();
            echo $message = $response . "\n" . date("Y-m-d H:i:s") . $data_list['object_image_url']." \r\n";

            unset($json_list, $response, $message);
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
