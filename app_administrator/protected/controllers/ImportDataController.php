<?php
    
class ImportDataController extends Controller {

    public function actionIndex() {
        echo "index........................";
    }

    public function actionImage() {
       
         $image_data = ArticleImages::model()->getImageRange("80000", "80030");
        
//        for($i=0; $i<15; $i++){
//            $image_data = array();
//            
//            $from = 40000 + $i*100; 
//            $to = 40000 + ($i+1)*100;
//            
//            $image_data = ArticleImages::model()->getImageRange($from, $to);

            if(sizeof($image_data)>0) {
//                    error_log($from."-----------".$to);
//                    error_log(sizeof($image_data));

                    $this->getMegaData($image_data);

            }
//        }
 
//        $this->render('image', array(
//            'headline' => $image_data
//        ));
    }
    
    public function getMegaData($image_data) {
           
            $obj_list = Array();
            foreach ($image_data as $val) {

                $url_hero = json_decode('{"url":"http://trendsideas.com/media/article/hero/'.$val['hero'].'"}');
                $this->imageImport($url_hero);
                        
//                        $url_thumbnail = json_decode('{"url":"http://trendsideas.com/media/article/thumbnail/'.$val['thumbnail'].'"}');
//                        $url_preview = json_decode('{"url":"http://trendsideas.com/media/article/preview/'.$val['preview'].'"}');
//                        $url_original = json_decode('{"url":"http://trendsideas.com/media/article/original/'.$val['original'].'"}');

//              $obj = $this->structureArray($val);
//              array_push($obj_list, json_encode($obj));
          }
          
//          $this->importMegaObj($obj_list);

    }
    
    public function imageImport($json_obj){
        $ch = curl_init("http://api.develop.devbox/imageimport/");
        
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
        curl_setopt($ch, CURLOPT_POSTFIELDS, $json_obj);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
        $result = curl_exec($ch);
        
       error_log($result." ------------------------------");
    }
    
    
    public function importMegaObj($json_list) {
        $ch = curl_init("http://api.develop.devbox/megaimport/");
        for ($i = 0; $i < sizeof($json_list); $i++) {
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
            curl_setopt($ch, CURLOPT_POSTFIELDS, $json_list[$i]);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
        
            $result = curl_exec($ch);
            $this->writeToLog($result);
        }
    }

    public function getRawData($url) {
            $ch = curl_init($url);
            curl_setopt($ch, CURLOPT_HEADER, 0);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($ch, CURLOPT_BINARYTRANSFER, 1);
            $rawdata = curl_exec($ch);
            return $rawdata;
    }
    
    public function structureArray($val) {

        $rawdata_h = $this->getRawData("trendsideas.com/media/article/hero/" . $val['hero']); 
        $data_hero = mb_check_encoding($rawdata_h, 'UTF-8') ? $rawdata_h : utf8_encode($rawdata_h);
        
        $rawdata_o = $this->getRawData("trendsideas.com/media/article/original/" . $val['original']); 
        $data_original = mb_check_encoding($rawdata_o, 'UTF-8') ? $rawdata_o : utf8_encode($rawdata_o);
        
        $rawdata_t = $this->getRawData("trendsideas.com/media/article/thumbnail/" . $val['thumbnail']); 
        $data_thumbnail = mb_check_encoding($rawdata_t, 'UTF-8') ? $rawdata_t : utf8_encode($rawdata_t);
        
        $rawdata_p = $this->getRawData("trendsideas.com/media/article/preview/" . $val['preview']); 
        $data_preview = mb_check_encoding($rawdata_p, 'UTF-8') ? $rawdata_p : utf8_encode($rawdata_p);
        
        $keywords = mb_check_encoding($val['keywords'], 'UTF-8') ? $val['keywords'] : utf8_encode($val['keywords']);
        
        $obj = array(
            "id" => null,
            "type" => "photo",
            "accessed" => null,
            "active_yn" => "y",
            "category" => "kitchens",
            "created" => "06/06/2013",
            "creator" => "importer@trendsideas.com",
            "deleted" => null,
            "domains" => "trendsideas.com",
            "editors" => "*@trendsideas.com",
            "follower_count" => rand(1, 99999),
            "followers" => null,
            "following" => null,
            "following_count" => rand(1, 99999),
            "country" => "New Zealand",
            "region" => "Auckland",
            "geography" => null,
            "indexed_yn" => "y",
            "object_image_linkto" => null,
            "object_image_url" => "https://s3-ap-southeast-2.amazonaws.com/hubstar-dev/trendsideas.com/media/article/hero/" . $val['hero'],
            "object_title" => null,
            "owner_profile_pic" => "https://s3-ap-southeast-2.amazonaws.com/hubstar-dev/this_is/folder_path/Trends-Logo.jpg",
            "owner_title" => "Trends Ideas",
            "owner_url" => "/profiles/trendsideas",
            "owners" => array(),
            "status_id" => null,
            "updated" => null,
            "uri_url" => null,
            "view_count" => rand(1,9999999),
            "keywords" => "good, nice, well, happy",
            "photo" => array()
        );

        $type_list = array(
            "id" => null,
            "photo_title" => null,
            "photo_caption" => $val['caption'],
            "photo_articleId" => $val['articleId'],
            "photo_heliumMediaId" => $val['heliumMediaId'],
            "photo_technicalSpecification" => $val['technicalSpecification'],
            "photo_sequence" => $val['sequence'],
            "photo_isExtra" => $val['isExtra'],
            "photo_image_url" => "https://s3-ap-southeast-2.amazonaws.com/hubstar-dev/trendsideas.com/media/article/original/" . $val['original'],
            "photo_image_original_url" => "https://s3-ap-southeast-2.amazonaws.com/hubstar-dev/trendsideas.com/media/article/original/" . $val['original'],
            "object_image_hero_url" => "https://s3-ap-southeast-2.amazonaws.com/hubstar-dev/trendsideas.com/media/article/hero/" . $val['hero'],
            "photo_image_thumbnail_url" => "https://s3-ap-southeast-2.amazonaws.com/hubstar-dev/trendsideas.com/media/article/thumbnail/" . $val['thumbnail'],
            "photo_image_preview_url" => "https://s3-ap-southeast-2.amazonaws.com/hubstar-dev/trendsideas.com/media/article/preview/" . $val['preview'],
            "photo_image_linkto" => null,
            "photo_type" => "image/jpeg",
            "photo_collection_name" => null,
            "photo_categories" => null,
            "photo_keywords" => $keywords,
            "photo_brands" => null,
            "photo_products" => null,
            "photo_thumbnail_rawdata" => $data_thumbnail,
            "photo_preview_rawdata" => $data_preview,
            "photo_hero_rawdata" => $data_hero,
            "photo_original_rawdata" => $data_original,
        );
        
        array_push($obj['photo'], $type_list);
        $owners_arr = array ("andrew.johnson@trendsideas.com", "support@trendsideas.com");
        array_push ($obj['owners'], $owners_arr);
        
//        error_log(var_export($obj, true));
        
//        $this->render('image', array(
//            "url" => "https://s3-ap-southeast-2.amazonaws.com/hubstar-dev/trendsideas.com/media/article/preview/" . $val['preview'],
//            'headline' => $rawdata_t
//        ));
        
        return $obj;
    }

    public function actionObject() {
        $data_obj = Article::model()->getObjData();
//        error_log(sizeof($data_obj));

//        foreach ($data_obj as $val) {
//            error_log(gettype($val));
//            error_log(var_export($val,true));
//            $this->setCouchBaseRecord($val);
//        }

//        $this->render('object', array(
//            'headline' => $data_obj
//        ));
    }

    public function displayUrl($url_list) {
//        error_log(sizeof($url_list));

        for ($i = 0; $i < sizeof($url_list); $i++) {
//            error_log($i."          ".(string)$url_list[$i]);
            $this->setImage((string) $url_list[$i]);
        }
    }
    
    public function setImage($url) {
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_HEADER, 0);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_BINARYTRANSFER, 1);
        $data = curl_exec($ch);

        if (is_null($data) || strpos($data, '404') || empty($data)) {
            $my_file = '/home/devbox/NetBeansProjects/test/error.log';
            $handle = fopen($my_file, 'a') or die('Cannot open file:  ' . $my_file);
            $output = "\n" . 'New data ';
            $output = "\n" . $url . ' has error';
            fwrite($handle, $output);
            fclose($handle);
        } else {
            $my_file = '/home/devbox/NetBeansProjects/test/sucess.log';
            $handle = fopen($my_file, 'a') or die('Cannot open file:  ' . $my_file);
            $output = "\n" . $url . ' is create';
            fwrite($handle, $output);
            fclose($handle);

//            $this->putImagetoS3($url, $data);
//            sleep(4);
        }
    }

//    public function putImagetoS3($url, $data) {
//        $cb = new Couchbase("cb1.hubsrv.com:8091", "", "", "default", true);
//        $key = explode(".", $_SERVER['HTTP_HOST']);
//        $key = $key[1] . '.' . $key[2];
//        $result = $cb->get($key);
//        $result_arr = CJSON::decode($result, true);
//        $client = Aws\S3\S3Client::factory(
//                        $result_arr["providers"]["S3Client"]
//        );
//        $client->putObject(array(
//            'Bucket' => "hubstar-dev",
//            'Key' => $url,
//            'Body' => $data,
//            'ACL' => 'public-read'
//        ));
//    }

        protected function writeToLog($content) {
        $my_file = '/home/devbox/NetBeansProjects/test/addingtocouchbase_sucess.log';
        $handle = fopen($my_file, 'a') or die('Cannot open file:  ' . $my_file);
        $output = "\n" . $content . ' -- '. $url ;
        fwrite($handle, $output);
        fclose($handle);
    }

}