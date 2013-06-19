<?php
    class ImportArticalCommand extends CConsoleCommand {
        public $amount=0;
        public $total_amount=0;
        
        public function actionIndex($start = null, $quantity = null) {

            echo (isset($start) ? 'Start position is... ' . $start : 'No start defined');
            echo (isset($quantity) ? '  Quantity to load is... ' . $quantity : 'No quantity defined');
            $this->actionArtical($start, $quantity);
        }
    
        public function actionArtical($start, $quantity) {
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
                $this->total_amount = $this->total_amount + sizeof($artical_data);
                echo sizeof($artical_data);
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
                    $region = Regions::model()->selectCountryNameByID($book['region']);
                    $date_live = $book['dateLive'];
                    $title = str_replace(" & ", "-", $book['title']);
                    $title = str_replace(" ", "-", $title);
                    
                    
                    $UTC = $this->getUTC($date_live, $region);

                    if ((int)$UTC>$book_date) {
                       $book_date = $UTC;
                        $region = str_replace(" & ", "-", $region);
                        $region = str_replace(" ", "-", $region);
                        $book_title =$region."-".$title;
    //                    $book_title = strtolower($book_title);
                    }
                }
            }

            // get current datetime
            $accessed = strtotime(date('Y-m-d H:i:s'));

            // get keywords imfor
//            $keywords = mb_check_encoding($val['keywords'], 'UTF-8') ? $val['keywords'] : utf8_encode($val['keywords']);
            
            $obj = array(
                "id" => null,
                "type" => "artical",
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
                "object_image_url" => null,
                "object_title" => null,
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
                "artical" => array()
            );

            $artical_list = array(
                "id" => null,
                "article_sparkJobID" => $val['sparkJobId'],
                "article_heliumMediaId" => $val['heliumMediaId'],
                "article_type" => $val['type'],
                "article_headline" => $val['headline'],
                "article_subheadline" => $val['subHeadline'],
                "article_body" => $val['body'],
                "article_credits" => $val['creditText'],
                "article_photography" => $val['photography'],
                "article_featureName" => $val['featureName'],
                "article_channelId" => $val['channelId'],
                "article_reports" => $val['reports'],
                "article_delivered" => $val['delivered'],
                "article_homepageUrl" => $val['homepageUrl'],
                "article_contactDetails" => $val['contactDetails'],
                "article_project" => $val['projectName'],
                "article_sequence" => $val['sequence'],
                "article_supplier" => $val['supplierName'],
                "article_category" => $val['serviceCategory'],
                "article_writer" => $val['writer'],
                "photo_book_id" => $book_id
            );

            array_push($obj['artical'], $artical_list);
            $owners_arr = array("andrew.johnson@trendsideas.com", "support@trendsideas.com");
            array_push($obj['owners'], $owners_arr);

            return $obj;
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

            echo $message = "develop.devbox/" . $result . "\r\n" . date("Y-m-d H:i:s") ."\r\n". $data_list['object_image_url'] . "---" . $this->obj_amount . "/" . $this->total_amount . "\r\n" .$id. "/" . $this->amount. " \r\n";
          
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
