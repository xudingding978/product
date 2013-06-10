<?php

class ImportDataController extends Controller {

    public $image_amount = 0;
    public $obj_amount = 0;
    public $total_amount=0;

    public function actionIndex() {
        echo "index........................";
    }

    public function actionImage() {
        error_log("111111111111111111111111111111111");

        for ($i = 10; $i < 50; $i++) {

            $image_data = array();
            $from = 46500 + $i * 10;
            $to = 46500 + ($i + 1) * 10;
            $image_data = ArticleImages::model()->getImageRange($from, $to);
            $this->total_amount = $this->total_amount + sizeof($image_data);
//            error_log(sizeof($image_data)."-------------");

            if (sizeof($image_data) > 0) {
                
//                error_log(var_export($image_data, true));
//                error_log(sizeof($image_data));

                $this->getMegaData($image_data);
            }
        }
        
        $this->writeToLog("/home/devbox/NetBeansProjects/test/addimage_sucess.log", "All finished");
        $this->writeToLog("/home/devbox/NetBeansProjects/test/AddingCouchbase_sucess.log", "All finished");

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
            $is_hero = false;
            $is_thumbnail = false;
            $is_preview = false;
            $is_original = false;            
            
//            $return_hero = $this->addImage("http://trendsideas.com/media/article/hero/".$val['hero']);
//            $return_thumbnail = $this->addImage("http://trendsideas.com/media/article/thumbnail/".$val['thumbnail']);
//            $return_preview = $this->addImage("http://trendsideas.com/media/article/preview/".$val['preview']);
//            $return_original = $this->addImage("http://trendsideas.com/media/article/original/".$val['original']);


                if($this->isUrlExist("http://trendsideas.com/media/article/hero/".$val['hero'])) {
                    $url_hero = '{"url":"http://trendsideas.com/media/article/hero/'.$val['hero'].'"}';
                    $return_hero=json_decode($this->imageImport($url_hero));
                    $is_hero = true;
                } else {
                    $message="http://trendsideas.com/media/article/hero/".$val['hero']."--- URL NOT available!";
                    $this->writeToLog("/home/devbox/NetBeansProjects/test/addimage_sucess.log", $message);
                }
//                error_log("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
//                error_log(var_export($return_hero, true));
                
                if($this->isUrlExist("http://trendsideas.com/media/article/thumbnail/".$val['thumbnail'])) {
                    $url_thumbnail = '{"url":"http://trendsideas.com/media/article/thumbnail/'.$val['thumbnail'].'"}'; 
                    $return_thumbnail=json_decode($this->imageImport($url_thumbnail));
                    $is_thumbnail=true;
                } else {
                    $message="http://trendsideas.com/media/article/thumbnail/".$val['thumbnail']."--- URL NOT available!";
                    $this->writeToLog("/home/devbox/NetBeansProjects/test/addimage_sucess.log", $message);
                }
                
                if($this->isUrlExist("http://trendsideas.com/media/article/preview/".$val['preview'])) {
                    $url_preview = '{"url":"http://trendsideas.com/media/article/preview/'.$val['preview'].'"}';
                    $return_preview=json_decode($this->imageImport($url_preview));
                    $is_preview=true;
                } else {
                    $message="http://trendsideas.com/media/article/preview/".$val['preview']."--- URL NOT available!";
                    $this->writeToLog("/home/devbox/NetBeansProjects/test/addimage_sucess.log", $message);
                }
                
                if($this->isUrlExist("http://trendsideas.com/media/article/original/".$val['original'])) {
                    $url_original = '{"url":"http://trendsideas.com/media/article/original/'.$val['original'].'"}';
                    $return_original=json_decode($this->imageImport($url_original));
                    $is_original=true;
                } else {
                    $message="http://trendsideas.com/media/article/original/".$val['original']."--- URL NOT available!";
                    $this->writeToLog("/home/devbox/NetBeansProjects/test/addimage_sucess.log", $message);
                }
                
                if($is_original==true&&$is_preview==true&&$is_thumbnail==true&&$is_hero == true) {
                    $obj = $this->structureArray($val, $return_hero, $return_thumbnail, $return_preview, $return_original);
                    $this->importMegaObj($obj); 
                }else {
                    $message="http://trendsideas.com/media/article/preview/".$val['preview']."--- DO NOT have return value from S3!";
                }
        }

    }

//    public function addImage($url) {
//        error_log($url);

//        if ($this->isUrlExist($url)) {
////            $return_json = '{"url":' . $url . '}';
////            
////            $return_data = json_decode($this->imageImport($return_json));
////            
//            error_log(var_export($return_data, true));
//            
//            
//            return $return_data;
//        } else {
//            $message = $url . "--- URL NOT available!";
//            $this->writeToLog("/home/devbox/NetBeansProjects/test/addimage_sucess.log", $message);
//            return false;
//        }
//    }

    public function isUrlExist($path) {
        $file_headers = @get_headers($path);
        if ($file_headers[0] == 'HTTP/1.1 404 Not Found') {
            $response = 'HTTP/1.1 404 Not Found';
        } else {
            $response = "true";
        }
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
            $this->writeToLog("/home/devbox/NetBeansProjects/test/addimage_sucess.log", $message);
            return $result;
        } catch (Exception $e) {
            $response = 'Caught exception: ' . $e->getMessage();
            $message = $response . "\n" . date("Y-m-d H:i:s") . $json_obj;
            $this->writeToLog("/home/devbox/NetBeansProjects/test/addimage_NotSucess.log", $message);
        }
        return false;
    }

    public function importMegaObj($data_list) {
        $json_list = json_encode($data_list);
        try {
            $ch = curl_init("http://api.develop.devbox/megaimport/");
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
            curl_setopt($ch, CURLOPT_POSTFIELDS, $json_list);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
            $result = curl_exec($ch);
            $this->obj_amount++;
            $message = $result . "\n" . date("Y-m-d H:i:s") . $data_list['object_image_url'] . "---" . $this->obj_amount."/".$this->total_amount;
            $this->writeToLog("/home/devbox/NetBeansProjects/test/AddingCouchbase_sucess.log", $message);
        } catch (Exception $e) {
            $response = 'Caught exception: ' . $e->getMessage();
            $message = $response . "\n" . date("Y-m-d H:i:s") . $data_list['object_image_url'];
            $this->writeToLog("/home/devbox/NetBeansProjects/test/AddingCouchbase_NotSucess.log", $message);
        }
    }

    public function structureArray($val, $return_hero, $return_thumbnail, $return_preview, $return_original) {

//        error_log(var_export($return_original, true));
//        error_log(gettype($return_original));
        $size = "_" . $return_original->width . 'x' . $return_original->height . ".jpg";
        $original_size = str_replace(".jpg", $size, $val['original']);
//        error_log($original_size);

        $keywords = mb_check_encoding($val['keywords'], 'UTF-8') ? $val['keywords'] : utf8_encode($val['keywords']);
        $obj = array(
            "id" => null,
            "type" => "photo",
            "accessed" => null,
            "active_yn" => "y",
            "topic" => null,
            "category" => "kitchens",
            "created" => "06/06/2013",
            "creator" => "importer@trendsideas.com",
            "deleted" => null,
            "domains" => "trendsideas.com",
            "editors" => "*@trendsideas.com",
            "follower_count" => rand(1, 999999),
            "followers" => null,
            "following" => null,
            "following_count" => rand(1, 999999),
            "country" => "New Zealand",
            "region" => "Auckland",
            "geography" => null,
            "indexed_yn" => "y",
            "object_image_linkto" => null,
            "object_image_url" => $return_hero->url,
            "object_title" => null,
            "owner_profile_pic" => "https://s3-ap-southeast-2.amazonaws.com/hubstar-dev/this_is/folder_path/Trends-Logo.jpg",
            "owner_title" => "Trends Ideas",
            "owner_profile_id" => "trendsideas",
            "owners" => array(),
            "status_id" => null,
            "updated" => null,
            "uri_url" => null,
            "view_count" => rand(1, 99999999),
            "keywords" => $keywords,
            "photo_original_width_height" => $original_size,
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
            "photo_original_width_height" => $original_size,
        );

        array_push($obj['photo'], $photo_list);
        $owners_arr = array("andrew.johnson@trendsideas.com", "support@trendsideas.com");
        array_push($obj['owners'], $owners_arr);
        return $obj;
    }

    protected function writeToLog($fileName, $content) {
        //   $my_file = '/home/devbox/NetBeansProjects/test/addingtocouchbase_sucess.log';
        $handle = fopen($fileName, 'a') or die('Cannot open file:  ' . $fileName);
        $output = "\n" . $content;
        fwrite($handle, $output);
        fclose($handle);
    }

}