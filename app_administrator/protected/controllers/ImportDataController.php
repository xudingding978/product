<?php

class ImportDataController extends Controller {

    public $image_amount = 0;
    public $obj_amount = 0;
    public $total_amount=0;

    public function actionIndex() {
        echo "index........................";
    }

    public function actionObject() {
//        $a = getimagesize("http://trendsideas.com/media/article/original/NAFF");
//        print_r("<pre>");
//        print_r($a);
        
//        $result = preg_match('/\d[.](jpg)/', ".jpg");
//        echo($result);
//            date_default_timezone_set('Asia/Bangkok');
//            $time_string = strtotime("DEC 10 2004 12:00:00:000AM");
//            echo $date_time = date('Y-m-d H:i:s', $time_string)."\n";
//            echo $time_string;
        
            
            $sql = "select dbo.ArticleImages.id from dbo.ArticleImages where dbo.ArticleImages.id between 58960 and 59060";
            $data_list = Yii::app()->db->createCommand($sql)->queryAll();
            foreach($data_list as $val) {
                $book_list = Books::model()->getBookByPhotoID($val['id']);
//                $region_list = Regions::model()->selectRegionByImage($val['id']);
                
                foreach($book_list as $book){
                    
                }
                
                print_r("<pre>");
                print_r($book_list);
//                print_r($region_list);
            }
    }
    
    
    public function actionImage() {
        for ($i = 0; $i < 2000; $i++) {
            $image_data = array();
            $from = 66597 + $i * 10;
            $to = 66597 + ($i + 1) * 10;
            $image_data = ArticleImages::model()->getImageRange($from, $to);
            $this->total_amount = $this->total_amount + sizeof($image_data);
            
            if (sizeof($image_data) > 0) {
                $this->getMegaData($image_data);
            }
            unset($image_data, $from, $to);
        }
        
        $this->writeToLog("/home/devbox/NetBeansProjects/test/addimage_success.log", "All finished");
        $this->writeToLog("/home/devbox/NetBeansProjects/test/AddingCouchbase_success.log", "All finished");

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
            
            if(preg_match('/\d[.](jpg)/', $val['hero'])) {
                    if($this->isUrlExist("http://trendsideas.com/media/article/hero/".$val['hero'])) {
                        $url_hero = '{"url":"http://trendsideas.com/media/article/hero/'.$val['hero'].'"}';
                        $return_hero=json_decode($this->imageImport($url_hero));
                        $is_hero = true;
                    } else {
                        $message="http://trendsideas.com/media/article/hero/".$val['hero']."--- URL NOT available!";
                        $this->writeToLog("/home/devbox/NetBeansProjects/test/addimage_success.log", $message);
                    }
            }
            
             if(preg_match('/\d[.](jpg)/', $val['thumbnail'])) {
                    if($this->isUrlExist("http://trendsideas.com/media/article/thumbnail/".$val['thumbnail'])) {
                        $url_thumbnail = '{"url":"http://trendsideas.com/media/article/thumbnail/'.$val['thumbnail'].'"}'; 
                        $return_thumbnail=json_decode($this->imageImport($url_thumbnail));
                        $is_thumbnail=true;
                    } else {
                        $message="http://trendsideas.com/media/article/thumbnail/".$val['thumbnail']."--- URL NOT available!";
                        $this->writeToLog("/home/devbox/NetBeansProjects/test/addimage_success.log", $message);
                    }
             }
                
              if(preg_match('/\d[.](jpg)/', $val['preview'])) {
                    if($this->isUrlExist("http://trendsideas.com/media/article/preview/".$val['preview'])) {
                        $url_preview = '{"url":"http://trendsideas.com/media/article/preview/'.$val['preview'].'"}';
                        $return_preview=json_decode($this->imageImport($url_preview));
                        $is_preview=true;
                    } else {
                        $message="http://trendsideas.com/media/article/preview/".$val['preview']."--- URL NOT available!";
                        $this->writeToLog("/home/devbox/NetBeansProjects/test/addimage_success.log", $message);
                    }
              }

               if(preg_match('/\d[.](jpg)/', $val['original'])) {
                    if($this->isUrlExist("http://trendsideas.com/media/article/original/".$val['original'])) {
                        $url_original = '{"url":"http://trendsideas.com/media/article/original/'.$val['original'].'"}';
                        $return_original=json_decode($this->imageImport($url_original));
                        $is_original=true;
                    } else {
                        $message="http://trendsideas.com/media/article/original/".$val['original']."--- URL NOT available!";
                        $this->writeToLog("/home/devbox/NetBeansProjects/test/addimage_success.log", $message);
                    }
               }
                
                if($is_original==true&&$is_preview==true&&$is_thumbnail==true&&$is_hero == true) {
                    $obj = $this->structureArray($val, $return_hero, $return_thumbnail, $return_preview, $return_original);
                    $this->importMegaObj($obj, $val['id']); 
                }else {
                    $message="http://trendsideas.com/media/article/preview/".$val['preview']."--- DO NOT have return value from S3!--ID:".$val['id'];
                    $this->writeToLog("/home/devbox/NetBeansProjects/test/AddingCouchbase_NotScucess.log", $message);
                }
                
                
            unset($return_hero, $return_thumbnail, $return_preview, $return_original, $obj);
            unset($is_hero, $is_thumbnail, $is_preview, $is_original);
            unset($message, $url_hero, $return_hero, $url_thumbnail, $return_thumbnail, $url_preview, $return_preview, $url_original, $return_original);
            
        }
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

    public function imageImport($json_obj) {
        try {
            $ch = curl_init("http://api.develop.devbox/imageimport/");

            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
            curl_setopt($ch, CURLOPT_POSTFIELDS, $json_obj);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
            $result = curl_exec($ch);
            $this->image_amount++;

            $message = $result . "\n" . date("Y-m-d H:i:s") . $json_obj . "---" . $this->image_amount;
            $this->writeToLog("/home/devbox/NetBeansProjects/test/addimage_success.log", $message);
            
            unset($ch, $message, $json_obj);
            
            return $result;
        } catch (Exception $e) {
            $response = 'Caught exception: ' . $e->getMessage();
            $message = $response . "\n" . date("Y-m-d H:i:s") . $json_obj;
            $this->writeToLog("/home/devbox/NetBeansProjects/test/addimage_NotSuccess.log", $message);
            
            unset($e, $response, $message);
            return false;
        }
    }

    public function importMegaObj($data_list, $id) {
        $json_list = json_encode($data_list);
//        print_r($json_list);
        try {
            $ch = curl_init("http://api.develop.devbox/megaimport/");
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
            curl_setopt($ch, CURLOPT_POSTFIELDS, $json_list);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
            $result = curl_exec($ch);
            $this->obj_amount++;
//            error_log($result);
            $message = "develop.devbox/".$result . "\n" . date("Y-m-d H:i:s") . $data_list['object_image_url'] . "---" . $this->obj_amount."/".$this->total_amount."\n".$id;
            $this->writeToLog("/home/devbox/NetBeansProjects/test/AddingCouchbase_success.log", $message);
            
            unset($data_list, $json_list, $ch, $result, $message);
        } catch (Exception $e) {
            $response = 'Caught exception: ' . $e->getMessage();
            $message = $response . "\n" . date("Y-m-d H:i:s") . $data_list['object_image_url'];
            $this->writeToLog("/home/devbox/NetBeansProjects/test/AddingCouchbase_NotSuccess.log", $message);
            
            unset($json_list, $response, $message);
        }
    }

    public function structureArray($val, $return_hero, $return_thumbnail, $return_preview, $return_original) {
        // get size of image
        $size = "_" . $return_original->width . 'x' . $return_original->height . ".jpg";
        $original_size = str_replace(".jpg", $size, $val['original']);
        $book_id = array();

        //  get region and country
        $region = Regions::model()->selectRegionByImage($val['id']);
        $country = $region;
        $pos = strripos($country, ",");
        if($pos){
            $country = substr($country, -($pos-3));
        }
        
        // get topic
        $topic_list = TopicSearchNames::model()->selectTopicName($val['id']);
        
        //get subcategory
        $subcategory = SubCategorySearchNames::model()->selectSubCategory($val['id']);
        
        // get category 
        $category = Categories::model()->selectCategory($val['id']);
        
        // get book infor 
        
        
//        $book_list = Books::model()->getBookByPhotoID($val['id']);
//        if(sizeof($book_list)>0) {
//            foreach($book_list as $book) {
//                arrray_push($book_id, $book['id']);
//                
//            }
//        }
        
        // get keywords imfor
        $keywords = mb_check_encoding($val['keywords'], 'UTF-8') ? $val['keywords'] : utf8_encode($val['keywords']);
        $obj = array(
            "id" => null,
            "type" => "photo",
            "accessed" => null,
            "active_yn" => "y",
            "created" => "created",
            "creator" => null,
            "creator_type" => 'user',
            "creator_profile_pic" => "",
            "creator_title" => null,
            "topics" => $topic_list,
            "categories" => $category,
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
            "owner_id" => "home-and-apartment-trends-nz",
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
            "photo_original_filename" => $original_size,
            "photo_original_width" => $return_original->width,
            "photo_original_height" => $return_original->height,
            "photo_book_id" => null
        );

        array_push($obj['photo'], $photo_list);
        $owners_arr = array("andrew.johnson@trendsideas.com", "support@trendsideas.com");
        array_push($obj['owners'], $owners_arr);

        unset($owners_arr, $photo_list, $photo_list, $keywords, $category, $subcategory, $topic_list, $country, $pos, $region, $original_size, $size, $val, $return_hero, $return_thumbnail, $return_preview, $return_original);
        return $obj;
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