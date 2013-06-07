<?php

class ImportDataController extends Controller {

    public function actionIndex() {
        echo "index........................";
    }

    public function actionImage() {
        $image_data = ArticleImages::model()->getImageRange("46561", "46580");
        $image_list = Array();
        $obj_list = Array();

        foreach ($image_data as $val) {
            $url_hero = "trendsideas.com/media/article/hero/" . $val['hero'];
            $obj = $this->structureArray($val, 'hero');
            array_push($obj_list, json_encode($obj));
            array_push($image_list, $url_hero);
//            error_log(var_export($obj_list, true));


            $url_thumbnail = "trendsideas.com/media/article/thumbnail/" . $val['thumbnail'];
            $obj = $this->structureArray($val, 'thumbnail');
            array_push($obj_list, json_encode($obj));
            array_push($image_list, $url_thumbnail);
            //            error_log($url_thumbnail);


            $url_preview = "trendsideas.com/media/article/preview/" . $val['preview'];
            $obj = $this->structureArray($val, 'preview');
            array_push($obj_list, json_encode($obj));
            array_push($image_list, $url_preview);
            //            error_log($url_preview);


            $url_original = "trendsideas.com/media/article/original/" . $val['original'];
            $obj = $this->structureArray($val, 'original');
            array_push($obj_list, json_encode($obj));
            array_push($image_list, $url_original);
            //            error_log($url_original)
        }

//        error_log(sizeof($obj_list));

        $this->importMegaObj($obj_list);

//        $this->render('image', array(
//            'headline' => $obj_list
//        ));
    }

    public function importMegaObj($json_list) {
        $ch = curl_init("http://api.develop.devbox/megaimport/");
        for ($i = 0; $i < sizeof($json_list); $i++) {
//            error_log($json_list[$i]);
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
            curl_setopt($ch, CURLOPT_POSTFIELDS, $json_list[$i]);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
            $result = curl_exec($ch);
            
//            error_log("-----------------------".$result);
        }
        
        $my_file = '/home/devbox/NetBeansProjects/test/addingtocouchbase_sucess.log';
        $handle = fopen($my_file, 'a') or die('Cannot open file:  ' . $my_file);
        $output = "\n process is finished";
        fwrite($handle, $output);
        fclose($handle);
    }

    public function structureArray($val, $folder) {
        $obj = array(
            "type" => "photos",
            "accessed" => null,
            "active_yn" => "y",
            "article_id" => $val['articleId'],
            "category" => "kitchens",
            "created" => "06/06/2013",
            "creator" => "king",
            "deleted" => null,
            "domains" => "trendsideas.com",
            "editors" => null,
            "follower_count" => rand(1, 99999),
            "followers" => null,
            "following" => null,
            "following_count" => rand(1, 99999),
            "country" => "New Zealand",
            "region" => "auckland",
            "geography" => null,
            "indexed_yn" => null,
            "object_image_linkto" => null,
            "object_image_url" => "https://s3-ap-southeast-2.amazonaws.com/trendsideas.com/media/article/hero/" . $val['hero'],
            "object_title" => null,
            "owner_profile_pic" => null,
            "owner_title" => null,
            "owner_url" => "/profiles/trends",
            "owners" => null,
            "status_id" => null,
            "updated" => null,
            "uri_url" => null,
            "view_count" => null,
            "keywords" => "good nice well",
            "photos" => array()
            
        );
        
        $type_list = array(
                "photo_title" => null,
                "photo_heliumMediaId" => $val['heliumMediaId'],
                "photo_technicalSpecification" => $val['technicalSpecification'],
                "photo_sequence" => $val['sequence'],
                "isExtra" => $val['isExtra'],
                "photo_image_url" => "https://s3-ap-southeast-2.amazonaws.com/trendsideas.com/media/article/original/" . $val['original'],
                "photo_image_thumbnail_url" => "https://s3-ap-southeast-2.amazonaws.com/trendsideas.com/media/article/thumbnail/" . $val['thumbnail'],
                "photo_image_preview_url" => "https://s3-ap-southeast-2.amazonaws.com/trendsideas.com/media/article/preview/" . $val['preview'],
                "photo_image_linkto" => null,
                "photo_caption" => $val['caption'],
                "photo_type" => "image/jpeg",
                "photo_folder_name" => $folder,
                "photo_collection_name" => null,
                "photo_categories" => null,
                "photo_keywords" => null,
                "photo_brands" => null,
                "photo_products" => null
        );
        array_push($obj['photos'],  $type_list);
        
//        error_log(var_export($obj, true));
        
        return $obj;
    }

    public function actionObject() {
//        echo "44444444444444444444444444444444";
        $data_obj = Article::model()->getObjData();
//        error_log(sizeof($data_obj));

        foreach ($data_obj as $val) {
//            error_log(gettype($val));
//            error_log(var_export($val,true));
            $this->setCouchBaseRecord($val);
        }

        $this->render('object', array(
            'headline' => $data_obj
        ));
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

    public function putImagetoS3($url, $data) {
        $cb = new Couchbase("cb1.hubsrv.com:8091", "", "", "default", true);
        $key = explode(".", $_SERVER['HTTP_HOST']);
        $key = $key[1] . '.' . $key[2];
        $result = $cb->get($key);
        $result_arr = CJSON::decode($result, true);
        $client = Aws\S3\S3Client::factory(
                        $result_arr["providers"]["S3Client"]
        );
        $client->putObject(array(
            'Bucket' => "hubstar-dev",
            'Key' => $url,
            'Body' => $data,
            'ACL' => 'public-read'
        ));
    }

}