<?php

Yii::import("application.models.*");
Yii::import("application.components.*");
require_once("ProfileCommand.php");

//header("Access-Control-Allow-Origin: *");
//header('Content-type: *');
//
//header('Access-Control-Request-Method: *');
//header('Access-Control-Allow-Methods: PUT, POST, OPTIONS,GET');
//header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

class PhotoCommand extends Controller_admin {

    protected $log_path = '/home/devbox/NetBeansProjects/test/error_photo.log';
    protected $amount = 0;

    public function actionIndex($action = null) {
        $start_time = microtime(true);
        echo $start_time . "\r\n";
        echo (isset($action) ? 'Your are do... ' . $action . "\r\n" : 'No action defined \r\n');

        if ($action == "update") {
            $this->updatePhoto();
        } else if ($action == "update-sqlserver") {
            $this->insertCouchbaseIdToSQLserver();
        } else if ($action == "add-new-doc") {
            $this->addNewDocToCouchbase();
        } elseif ($action == 'fixcountry') {
            $this->fixphotoCountry();
        } else if ($action == "changeid") {
            $this->changePhotoUrlforchangeProfileId();
        } else if ($action == "insert-url-to-sqlserver") {
            $this->insertURL();
        } else if ($action == "resize-hero") {
            $this->resizingHero();
        } else if ($action == "replace-original") {
            $this->replacingOriginalPhotoURL();        // this get the original  image from Trends Web Server, sends the URL to API for watermarkmark and upload
        } else if ($action == "stamp-original") {
            $this->stampOriginalPhotoURL();        //
        } else if ($action == "load-photo-obj") {
            $this->loadPhotoObj();
        } else if ($action == 'fix-url') {
            $this->fixPhotoURL();
        } else {
            echo "cannot find your actions";
        }

        echo "All finished: start from: " . "\r\n";
        $end_time = microtime(true);
        echo "totally spend: " . ($end_time - $start_time);
    }

    function __construct() {
        
    }

    protected function getImageIdentifier($imageInfo, $url) {

        if (strpos($imageInfo['mime'], 'jpeg')) {
            error_log('getImageIdentifier = jpeg');
            $im = imagecreatefromjpeg($url);
        } elseif (strpos($imageInfo['mime'], 'png')) {
            $im = imagecreatefrompng($url);
        } elseif (strpos($imageInfo['mime'], 'gif')) {
            $im = imagecreatefromgif($url);
        } elseif (strpos($imageInfo['mime'], 'bmp')) {
            $im = imagecreatefrombmp($url);
        }


        return $im;
    }

    public function fixphotoCountry() {
        $start_time = date('D M d Y H:i:s') . ' GMT' . date('O') . ' (' . date('T') . ')';
        $log_path = "/var/log/yii/$start_time.log";
        $bucket = "test";
        $classProfile = new ProfileCommand();
        $profile_arr = $classProfile->findProfiles($bucket);
        echo sizeof($profile_arr) . "\n";

        sleep(2);
        foreach ($profile_arr as $profile) {
            $message = "Start to fix country information for: " . $profile . "\n";
            $owner_id = substr($profile, 25);
            echo $owner_id . "\n";

//            $settings['log.enabled'] = true;
//            $bucket = $bucket;
//            $sherlock = new \Sherlock\Sherlock($settings);
//            $sherlock->addNode("es1.hubsrv.com", 9200);
//            $request = $sherlock->search();
//            $index = $bucket;
//            $must = Sherlock\Sherlock::queryBuilder()->QueryString()->query("\"$owner_id\"")
//                    ->default_field('couchbaseDocument.doc.owner_id');
//            $must2 = Sherlock\Sherlock::queryBuilder()
//                    ->QueryString()->query("photo")
//                    ->default_field('couchbaseDocument.doc.type');
//            $bool = Sherlock\Sherlock::queryBuilder()->Bool()->must($must)->
//                    must($must2);
//            $request->index($index)->type("couchbaseDocument");
//            $request->from(0)
//                    ->size(1000);
//            $request->query($bool);
//            //   print_r($bool);
//
//            $response = $request->execute();

            $query = '
{
  "query": {
    "bool": {
      "must": [
        {
          "query_string": {
            "default_field": "couchbaseDocument.doc.owner_id",
            "query": "\"' . $owner_id . '\""
          }
        },
        {
          "query_string": {
            "default_field": "couchbaseDocument.doc.type",
            "query": "\"photo\""
          }
        }
      ],
      "must_not": []
    },
    "filtered": {
      "filter": {
        "and": [
          {
            "missing": {
              "field": "couchbaseDocument.doc.photo.photo_heliumMediaId"
            }
          },
          {
            "missing": {
              "field": "couchbaseDocument.doc.photo.photo_articleId"
            }
          }
        ]
      }
    }
  },
  "from": 0,
  "size": 2000,
  "sort": [],
  "facets": {}
}             
';
            echo $query . "\n\n\n";
            $ch = curl_init("http://es1.hubsrv.com:9200/".$bucket."/_search");

            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
            curl_setopt($ch, CURLOPT_POSTFIELDS, $query);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
            $result = curl_exec($ch);
//            foreach($result as $found){
//                echo $found['id'];
//            }
            $result_arr = CJSON::decode($result, true);
            $data_arr = $result_arr['hits']['hits'];
            curl_close($ch);
            if ($data_arr != null) {
                $message.="found " . sizeof($data_arr) . " photo belongs to this profile\n";
                foreach ($data_arr as $photo) {
                    echo var_export($photo['_id'], true) . "\n\n\n\n";
                            //var_export($photo['_source']['doc'], true) . "\n\n\n\n";
                }
                if (sizeof($data_arr) === 2000) {
                    echo "profile " . $profile . " has too many photos--------------------\n-------------\n------------------------\n";
                    sleep(100);
                }
            } else {
                echo "No photo found for profile: " . $profile . "\n";
                $message = "No photo found for profile: " . $profile . "\n";
            }
            $this->writeToLog($log_path, $message);




            $cb = $this->couchBaseConnection($bucket);
            $result_profile = $cb->get($profile);
            if ($result_profile != null) {
                $result_profile_arr = CJSON::decode($result_profile);
                $country = $result_profile_arr['country'];
//                $message = "Start on " . $profile . "'s photos\n";
            } else {
                $message = "No profile found for " . $profile . "\n";
            }

            if ($country != null) {

                foreach ($data_arr as $photo) {
                    $id =  $photo['_id'];
                    $message = "Photo " . $id;

                    $result = $cb->get($id);

                    if ($result != null) {
                        $result_arr = CJSON::decode($result, true);
                        if ($result_arr != null && $result_arr["owner_id"] != null && $result_arr["owner_id"] != "") {
                            $result_arr["country"] = $country;

                            echo $result_arr["country"] . "\n";
                            if ($cb->set($id, CJSON::encode($result_arr))) {
                             //   echo " country has been changed to " . $result_arr["country"] . "\r\n";

                                $message .= " country has been changed to " . $result_arr["country"] . "\r\n";
                                echo $message;
                            } else {
                                echo $id . " fail to set the value into couchbase document! \r\n";
                                $message .= " fail to set the value into couchbase document! \r\n";
                            }
                        } else {
                            $message .= " Does not have owner_id in its data";
                        }

                       
                    } else {
                        $message.="fail to get the photo from couchbase\n";
                    }
                     $this->writeToLog($log_path, $message);
                }
                
            } else {
                $message = $profile . "does not have country\n";
                 $this->writeToLog($log_path, $message);
            }
           
             
        }

        //    return $message;
    }

    public function createResizedImage($data, $photo_type) {

        ob_start();
        if ($photo_type == "image/png") {
            imagepng($data);
        } else if ($photo_type == "image/jpeg") {
            imagejpeg($data);
        } else if ($photo_type == "image/gif") {
            imagegif($data);
        }
        $contents = ob_get_contents();

        ob_end_clean();
        //    }

        return $contents;
    }

    protected function changePhotoUrlforchangeProfileId() {
        $url = "http://trendsideas.com/Media/User/Images/platform.jpg";
        $imageInfo = getimagesize($url);
        header("Access-Control-Allow-Origin: *");
        header('Content-type: *');

        header('Access-Control-Request-Method: *');
        header('Access-Control-Allow-Methods: PUT, POST, OPTIONS,GET');
        header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
        echo $imageInfo[0] . "   " . $imageInfo[1] . "111111111111111111111111111111\n";
        print_r($imageInfo);
        $data = $this->getImageIdentifier($imageInfo, $url);
        $data1 = $this->createResizedImage($data, $imageInfo['mime']);
        echo $data;
        $newURL = "trendsideas.com/profiles/aspining-walls-nz/hero/whites%20&%20neutrals%20-%20bracken_350x532.jpg";
        $this->putImagetoS3($newURL, $data1);
    }

    protected function putImagetoS3($url, $data) {
        //connect to default bucket of couchbase
        $cb = new Couchbase("cb1.hubsrv.com:8091", "", "", "default", true);
        //'HTTP_HOST"="api.develop.trendsideas.com"
        // $key = explode(".", $_SERVER['HTTP_HOST']);

        error_log("the http_host" . $_SERVER['HTTP_HOST']);
        //key=trendsideas.com, find the s3client configration from it
        // $key = $key[2] . '.' . $key[3];
        $key = "trendsideas.com";
        error_log("the key used for couchbase is " . $key);
        $result = $cb->get($key);
        //  error_log(var_export($result));
        $result_arr = CJSON::decode($result, true);
        error_log("S3 configration: \n" . var_export($result_arr["providers"]["S3Client"], true));
        $client = Aws\S3\S3Client::factory(
                        $result_arr["providers"]["S3Client"]
        );

        //saving
        $client->putObject(array(
            'Bucket' => "s3.hubsrv.com",
            'Key' => $url,
            'Body' => $data,
            'ACL' => 'public-read',
        ));
        error_log('put into s3');
    }

    protected function fixPhotoURL() {
//        echo "-------------------in fixPhotoURL function \r\n";
        $error_image = array();
        while ($this->amount < 3459) {
            $photo_arr = $this->getData("http://develop-api.trendsideas.com/PhotoData", array('method' => 'GET'));
            $arr_size = sizeof($photo_arr['photo']);
            echo "-------------------------- arr_size=" . $arr_size . " \r\n";

            if ($arr_size > 0) {
                for ($i = 0; $i < $arr_size; $i++) {

//                    print_r($photo_arr['photo'][$i]);
//                    exit();
                    $photo_helium_ID = $photo_arr['photo'][$i]['photo'][0]['photo_heliumMediaId'];
                    $url = $this->identifyPhotoUrl($photo_helium_ID);
                    if ($url != "") {
                        $api_url = 'http://develop-api.trendsideas.com/PhotoData/update/';
                        $data_arr = array('method' => 'PUT', 'image_url' => $url, 'function' => 'addImageToS3', 'obj_ID' => $photo_arr['photo'][$i]['id']);
//                        echo "------------------------------ url is not empty  \r\n";
                        $result_arr = $this->getData($api_url, $data_arr);
//                        print_r($result);
//                        exit();

                        if ($result_arr != null) {
                            $photo_arr['photo'][$i]['photo'][0]['photo_original_filename'] = $result_arr['name'];
                            $photo_arr['photo'][$i]['photo'][0]['photo_image_original_url'] = $result_arr['url'];
                            $photo_arr['photo'][$i]['photo'][0]['photo_original_width'] = $result_arr['width'];
                            $photo_arr['photo'][$i]['photo'][0]['photo_original_height'] = $result_arr['height'];
                            $couchbase_id = 'trendsideas.com/' . $photo_arr['photo'][$i]['id'];

                            if ($this->setCouchbaseObject($couchbase_id, $photo_arr['photo'][$i])) {
                                $this->amount++;
                                $massage = $couchbase_id . ' has been updated!------' . $this->amount . '/3459';
                                $this->writeToLog($this->error_path, $massage);
                            } else {
                                $massage = $couchbase_id . ' cannot couchbase document--------------------------ERROR!!';
                                $this->writeToLog($this->error_path, $massage);
                            }
                        } else {
                            $massage = $couchbase_id . ' cannot upload imaget to S3--------------------------ERROR!';
                            $this->writeToLog($this->error_path, $massage);
                        }
                    } else {
                        $error_image[$photo_helium_ID] = $url;

                        $massage = 'id: ' . $photo_arr['photo'][$i]['photo'][0]['photo_source_id'] . ';  helium id: ' . $photo_helium_ID . ' URL for this image is not avaiable--------------------------ERROR!';
                        $this->writeToLog($this->error_path, $massage);
                    }

                    if ($this->amount > 3459)
                        break;
                }
            }
            else
                break;
        }

        foreach ($error_image as $k => $val) {
            $this->writeToLog($this->log_path, $k . '----------' . $val);
        }
    }

    protected function identifyPhotoUrl($photo_helium_ID) {
        $url_jpg = "http://trendsideas.com/media/article/original/" . $photo_helium_ID . '.jpg';
        $url_png = "http://trendsideas.com/media/article/original/" . $photo_helium_ID . '.png';
        $url = "";
        if ($this->validateImageUrl($url_jpg)) {
            $url = $url_jpg;
        } else {
            if ($this->validateImageUrl($url_png)) {
                $url = $url_png;
            }
        }

        return $url;
    }

    protected function stampOriginalPhotoURL() {

        //use sherlock to query ElasticSearch and retrieve all the missing original images urls
        $settings['log.enabled'] = true;
        //  $settings['log.level'] = 'debug';
        $sherlock = new \Sherlock\Sherlock($settings);
        $sherlock->addNode('es1.hubsrv.com');
        $request = $sherlock->search();

        $rawQuery = Sherlock\Sherlock::queryBuilder()->Raw('{
           "bool": {
                    "must": [
                        {
                            "term": {
                                "couchbaseDocument.doc.type": "photo"
                            }
                        }
                    ],
                    "must_not": [
                        {
                            "query_string": {
`                                "default_field": "couchbaseDocument.doc.photo.photo_image_original_url",
                                "query": "%.jpg OR %.png"
                            }
                        }
                    ]
                }
            }'
        );

        $request->index("production")
                ->type("couchbaseDocument")
                ->from(0)
                ->size(5000)
                ->fields("couchbaseDocument.doc.id")
                ->query($rawQuery);

        $results = $request->execute();

        print_r($results);


        // perform update on the CouchBase record for the returned results
//        $photo_data_arr = ArticleImages::model()->
//                $cb = new Couchbase("cb1.hubsrv.com:8091", "Administrator", "Pa55word", "production", true);
//        $doc = $cb->get()
    }

    protected function loadPhotoObj() {
        $photo_data_arr = ArticleImages::model()->getAll();
        echo sizeof($photo_data_arr) . "-----------------------\r\n";

        $total_amount = sizeof($photo_data_arr);
        if ($total_amount > 0) {
            for ($i = 0; $i < $total_amount; $i++) {
//                print_r($photo_data_arr[$i]);
//                break;

                $obj_arr = $this->structureArray($photo_data_arr[$i]);
//                print_r($obj_arr); 
//                break;

                if ($this->importMegaObj($obj_arr)) {
                    $message = 'loading is success with, image id: ' . $photo_data_arr[$i]['id'] . '--- object ID: ' . $photo_data_arr[$i]['objectId'] . "-----------------" . $i . "/" . $total_amount . "\r\n";
                    echo $message;
                } else {
                    $message = 'loading is NOT success with, image id: ' . $photo_data_arr[$i]['id'] . '--- object ID: ' . $photo_data_arr[$i]['objectId'];
                    echo $message;
                    $this->writeToLog($this->log_path, $message);
                }

//               if($i>1)                   break;
            }
        }
    }

    protected function replacingOriginalPhotoURL() {
        $photo_data_arr = ArticleImages::model()->getBrokenOriginal();  // grab all the original photo urls that are missing
        echo 'Total Number of Original Photos to be process is .....    ' . sizeof($photo_data_arr) . "\r\n"; // output the total number to process
        $total_amount = sizeof($photo_data_arr);
        $url_list = array();

        if ($total_amount > 0) {
            for ($i = 0; $i < $total_amount; $i++) {
                //  print_r($photo_data_arr[$i]);
//                exit();
//                $id = $photo_data_arr[$i]['couchBaseId'];
                if ($this->validateImageUrl("http://trendsideas.com/media/article/original/" . $photo_data_arr[$i]['original'])) {
                    $url_original = '{"type":"original", "id":"' . $photo_data_arr[$i]['objectId'] . '", "url":"http://trendsideas.com/media/article/original/' . $photo_data_arr[$i]['original'] . '", "original_url":"' . $photo_data_arr[$i]['photo_image_original_url'] . '"}';
                    $url_list['original'] = $url_original;
                    // print_r($url_list);
                } else {
                    $message = 'this photo is not available, id: ' . $photo_data_arr[$i]['id'] . "\r\n";
                    echo $message;
                    $this->writeToLog($this->log_path, $message);
                }

                $image_details_array = $this->importImageList($url_list);   // call API, send through JSON payload which will process image, watermark and push to S3
                //echo 'Pushing image to S3.....  ';
                // print_r($image_details_array);
//                print_r($url_list);
//                exit();

                if (sizeof($image_details_array) > 0) {
                    $photo_Image_original_url = json_decode($image_details_array['original'], true)['url'];
                    echo 'Processing ... ' . $photo_Image_original_url . "\r\n";

                    $update_bool = ArticleImages::model()->updateByPk($photo_data_arr[$i]['id'], array('photo_image_original_url' => $photo_Image_original_url));
                    if ($update_bool) {
                        $message = 'MSSQL update is a total success with photo id: ' . $photo_data_arr[$i]['id'] . "-----------------" . $i . "/" . $total_amount . "\r\n remove original url: " . $photo_data_arr[$i]['photo_image_original_url'] . "\r\n add original url: " . $photo_Image_original_url . "\r\n";
                        echo $message;
                    } else {
                        $message = 'MSSQL update is NOT success with photo id: ' . $photo_data_arr[$i]['id'] . ' original url: ' . $photo_data_arr[$i]['photo_image_original_url'] . "\r\n";
                        echo $message;
                        $this->writeToLog($this->log_path, $message);
                    }
                } else {
                    $message = 'load images to S3 fail, id: ' . $photo_data_arr[$i]['id'];
                    echo $message;
                    $this->writeToLog($this->log_path, $message);
                }

//                if ($i==20) exit();
            }
        }
    }

    protected function resizingHero() {
        $photo_data_arr = ArticleImages::model()->startFrom(132325);
        echo sizeof($photo_data_arr) . "-----------------------\r\n";
//        exit();
        $total_amount = sizeof($photo_data_arr);
        $url_list = array();

        if ($total_amount > 0) {
            for ($i = 0; $i < $total_amount; $i++) {
//                print_r($photo_data_arr[$i]);
//                exit();
//                $id = $photo_data_arr[$i]['couchBaseId'];
                if ($this->validateImageUrl("http://trendsideas.com/media/article/hero/" . $photo_data_arr[$i]['hero'])) {
                    $url_hero = '{"type":"hero", "id":"' . $photo_data_arr[$i]['objectId'] . '", "url":"http://trendsideas.com/media/article/hero/' . $photo_data_arr[$i]['hero'] . '", "hero_url":"' . $photo_data_arr[$i]['photo_image_hero_url'] . '"}';
                    $url_list['hero'] = $url_hero;
                } else {
                    $message = 'this images is not available, id: ' . $photo_data_arr[$i]['id'] . "\r\n";
                    echo $message;
                    $this->writeToLog($this->log_path, $message);
                }

                $image_details_array = $this->importImageList($url_list);

//                print_r($url_list);
//                exit();

                if (sizeof($image_details_array) > 0) {
                    $hero_url = json_decode($image_details_array['hero'], true)['url'];
//                    echo $hero_url;
//                    exit();

                    $update_bool = ArticleImages::model()->updateByPk($photo_data_arr[$i]['id'], array('photo_image_hero_url' => $hero_url));
                    if ($update_bool) {
                        $message = 'update is success with image id: ' . $photo_data_arr[$i]['id'] . "-----------------" . $i . "/" . $total_amount . "\r\n remove hero url: " . $photo_data_arr[$i]['photo_image_hero_url'] . "\r\n add hero url: " . $hero_url . "\r\n";
                        echo $message;
                    } else {
                        $message = 'update is NOT success with image id: ' . $photo_data_arr[$i]['id'] . ' hero url: ' . $photo_data_arr[$i]['photo_image_hero_url'] . "\r\n";
                        echo $message;
                        $this->writeToLog($this->log_path, $message);
                    }
                } else {
                    $message = 'load images to S3 fail, id: ' . $photo_data_arr[$i]['id'];
                    echo $message;
                    $this->writeToLog($this->log_path, $message);
                }

//                if ($i==20) exit();
            }
        }
    }

    private function addNewDocToCouchbase() {
//        $mount=0;
//        $url_arr = array();
        $photo_data_arr = ArticleImages::model()->getExtra();
        $total_amount = sizeof($photo_data_arr);
        echo "totally: " . $total_amount . " items-----------------------\r\n";
        if ($total_amount > 0) {
            for ($i = 0; $i < $total_amount; $i++) {
//                print_r($photo_data_arr[$i]);
//                exit();

                $this->loadingimages($photo_data_arr[$i]);
                echo '---------------------------' . $i . '/' . $total_amount . "\r\n";

//                if ($i >2) break;
            }
        }
    }

    protected function loadingimages($photo_arr) {

        $url_hero = "";
        $url_thumbnail = "";
        $url_preview = "";
        $url_original = "";
        $url_list = array();

        $id = $this->getNewID();
//        echo $id;
        if (preg_match('/\d[.](jpg)/', $photo_arr['hero'])) {
            if ($this->validateImageUrl("http://trendsideas.com/media/article/hero/" . $photo_arr['hero'])) {
                $url_hero = '{"type":"hero", "id":"' . $id . '", "url":"http://trendsideas.com/media/article/hero/' . $photo_arr['hero'] . '"}';
                $url_list['hero'] = $url_hero;
            }
        }

        if (preg_match('/\d[.](jpg)/', $photo_arr['thumbnail'])) {
            if ($this->validateImageUrl("http://trendsideas.com/media/article/thumbnail/" . $photo_arr['thumbnail'])) {
                $url_thumbnail = '{"type": "thumbnail", "id":"' . $id . '", "url":"http://trendsideas.com/media/article/thumbnail/' . $photo_arr['thumbnail'] . '"}';
                $url_list['thumbnail'] = $url_thumbnail;
            }
        }

        if (preg_match('/\d[.](jpg)/', $photo_arr['preview'])) {
            if ($this->validateImageUrl("http://trendsideas.com/media/article/preview/" . $photo_arr['preview'])) {
                $url_preview = '{"type": "preview", "id":' . $id . ', "url":"http://trendsideas.com/media/article/preview/' . $photo_arr['preview'] . '"}';
                $url_list['preview'] = $url_preview;
            }
        }

        if (preg_match('/\d[.](jpg)/', $photo_arr['original'])) {
            if ($this->validateImageUrl("http://trendsideas.com/media/article/original/" . $photo_arr['original'])) {
                $url_original = '{"type": "original", "id":' . $id . ', "url":"http://trendsideas.com/media/article/original/' . $photo_arr['original'] . '"}';
                $url_list['original'] = $url_original;
            }
        }

        $image_details_array = $this->importImageList($url_list);

//        echo sizeof($image_details_array)."---------- \r\n";
//        print_r($image_details_array);

        if (sizeof($image_details_array) > 0) {
            $obj_arr = $this->structureArray($photo_arr, $image_details_array, $id);
            if ($this->importMegaObj($obj_arr)) {
//                 echo $obj_arr['id'];
                ArticleImages::model()->updateByPk($photo_arr['id'], array('couchBaseId' => $obj_arr['id']));
            } else {
                $message = 'add object to couchbase fail, id: ' . $photo_arr['id'] . 'by helum id: ' . $photo_arr['heliumMediaId'];
                echo $message;
                $this->writeToLog($this->log_path, $message);
            }
        } else {
            $message = 'load images to S3 fail, id: ' . $photo_arr['id'] . 'by helum id: ' . $photo_arr['heliumMediaId'];
            echo $message;
            $this->writeToLog($this->log_path, $message);
        }

//        print_r($image_import_return_arr);
//        exit();
    }

    public function structureArray($val) {

        // image url
        $original_url = $val['photo_image_original_url'];
        $hero_url = $val['photo_image_hero_url'];
        $preview_url = $val['photo_image_preview_url'];
        $thumbnail_url = $val['photo_image_thumbnail_url'];

        // get image size 
        $image_size_arr = $this->getImageSizeFromURL($original_url);
//        print_r($image_size_arr);
        // get topic
        $topic_list = TopicSearchNames::model()->selectTopicName($val['id']);

        //get subcategory
        $subcategory = SubCategorySearchNames::model()->selectSubCategory($val['id']);

        // get category
        $category = Categories::model()->selectCategory($val['id']);

        //get book details from article id
        $book_arr = $this->getBookDetails($val['articleId']);
//        echo "2222222222222222222222222222";
//        print_r($book_arr);
        // get current datetime
        $now = strtotime(date('Y-m-d H:i:s'));

        // get keywords imfor
        $keywords = mb_check_encoding($val['keywords'], 'UTF-8') ? $val['keywords'] : utf8_encode($val['keywords']);

        // get article
        $article = Article::model()->findByPk((int) $val['articleId']);

        $obj = array(
            "id" => $val['objectId'],
            "accessed" => $now,
            "boost" => null, // serach engine ranking... integer ie 6
            "created" => $book_arr['date'], // UTC date time timezone format
            "categories" => $category,
            "collection_id" => $val['articleId'],
            "creator" => $book_arr['title'], //Book Title ie: Home & Architectural Trends - Atlanta
            "creator_type" => 'user',
            "creator_profile_pic" => "http://s3.hubsrv.com/trendsideas.com/users/1000000000/profile/profile_pic_small.jpg",
            "country" => $book_arr['country'],
            "collection_count" => null,
            "deleted" => null,
            "domains" => array(),
            "editors" => "*@trendsideas.com, support@trendsideas.com",
            "geography" => null,
            "like_count" => null,
            "is_indexed" => true,
            "is_active" => true,
            "keywords" => $keywords,
            "object_image_linkto" => null,
            "object_image_url" => $hero_url,
            "object_title" => $val['heliumMediaId'],
            "object_description" => $val['caption'],
            "owner_profile_pic" => "http://s3.hubsrv.com/trendsideas.com/users/1000000000/profile/profile_pic_small.jpg",
            "owner_type" => 'profile',
            "owner_title" => str_replace(" & ", " ", $book_arr['publication']), //Publication Name  ie: Home Architecture Trends
            "owner_id" => strtolower(str_replace("&", "and", str_replace(" ", "-", $book_arr['publication']))), //Publication Name lovwer case and '&' replaced with 'and'  ie: home-and-architecture-trends
            "owner_contact_email" => "enquiries@trendsideas.com",
            "owner_contact_cc_emails" => null,
            "owner_contact_bcc_emails" => null,
            "people_like" => array(),
            "region" => $book_arr['region'],
            "suburb" => null,
            "status_id" => null,
            "subcategories" => $subcategory,
            "timezone" => $book_arr['timezone'],
            "topics" => $topic_list,
            "type" => "photo",
            "updated" => $now, // this will be the UTC for the uploading time
            "uri_url" => null,
            "view_count" => null,
            "photo" => array()
        );

        $photo_list = array(
            "id" => $val['objectId'],
            "photo_source_id" => $val['id'],
            "photo_title" => $article->headline,
            "photo_caption" => $val['caption'],
            "photo_articleId" => $val['articleId'],
            "photo_heliumMediaId" => $val['heliumMediaId'],
            "photo_technicalSpecification" => $val['technicalSpecification'],
            "photo_sequence" => $val['sequence'],
            "photo_isExtra" => $val['isExtra'],
            "photo_image_original_url" => $original_url,
            "photo_image_hero_url" => $hero_url,
            "photo_image_thumbnail_url" => $thumbnail_url,
            "photo_image_preview_url" => $preview_url,
            "photo_type" => "image/jpeg",
            "photo_collection_name" => $article->headline,
            "photo_categories" => null,
            "photo_keywords" => $keywords,
            "photo_brands" => null,
            "photo_products" => null,
            "photo_original_filename" => $image_size_arr['name'],
            "photo_original_width" => $image_size_arr['width'],
            "photo_original_height" => $image_size_arr['height'],
            "photo_book_id" => $book_arr['id']
        );

        array_push($obj['photo'], $photo_list);
        $domains_arr = array("*.trendsideas.com");
        array_push($obj['domains'], $domains_arr);

        return $obj;
    }

    private function insertURL() {

        $photo_data_arr = ArticleImages::model()->getAll();
        echo sizeof($photo_data_arr) . "-----------------------\r\n";
        $total_amount = sizeof($photo_data_arr);

        if ($total_amount > 0) {
            for ($i = 0; $i < $total_amount; $i++) {
                $cb_id_str = $photo_data_arr[$i]['couchBaseId'];
                $ch = $this->couchBaseConnection("production");
                $result = $ch->get($cb_id_str);
                $result_arr = CJSON::decode($result, true);

                $image_arr = array();
                $image_arr['objectId'] = str_replace("trendsideas.com/", "", $cb_id_str);
                $image_arr['photo_image_original_url'] = $result_arr['photo'][0]['photo_image_original_url'];
                $image_arr['photo_image_hero_url'] = $result_arr['photo'][0]['photo_image_hero_url'];
                $image_arr['photo_image_preview_url'] = $result_arr['photo'][0]['photo_image_preview_url'];
                $image_arr['photo_image_thumbnail_url'] = $result_arr['photo'][0]['photo_image_thumbnail_url'];

                $update_bool = ArticleImages::model()->updateByPk($photo_data_arr[$i]['id'], $image_arr);
                if ($update_bool) {
                    $message = 'update is success with image id: ' . $photo_data_arr[$i]['id'] . ' couchbase id: ' . $photo_data_arr[$i]['couchBaseId'] . "-----" . $i . "/" . $total_amount . "\r\n";
                    echo $message;
                } else {
                    $message = 'update is NOT success with image id: ' . $photo_data_arr[$i]['id'] . ' couchbase id: ' . $photo_data_arr[$i]['couchBaseId'] . "\r\n";
                    echo $message;
                    $this->writeToLog($this->log_path, $message);
                }

//                print_r($image_arr);
//                if($i > 1) exit();
            }
        }
    }

    protected function insertCouchbaseIdToSQLserver() {
        $mount = 0;
        $photo_data_arr = ArticleImages::model()->getAll();
        echo sizeof($photo_data_arr) . "-----------------------\r\n";
        $total_amount = sizeof($photo_data_arr);

        if (sizeof($photo_data_arr) > 0) {
            foreach ($photo_data_arr as $photo_arr) {
//                print_r($photo_arr);
                $mount++;

                $id = '';
                $url_str = "http://api.develop.devbox/GetResultByKeyValue/?type=photo&photo_heliumMediaId=" . $photo_arr['heliumMediaId'];
                $search_results_arr = $this->getData($url_str, 'GET');

//                print_r($search_results_arr);
//                echo $url_str."\r\n";
//                echo sizeof($search_results_arr['photo'])."**************** \r\n";
//                exit();

                if (sizeof($search_results_arr['photo']) > 0) {
                    foreach ($search_results_arr['photo'] as $result_arr) {
                        if ($photo_arr['articleId'] == $result_arr['collection_id'] && $photo_arr['caption'] == $result_arr['object_description']) {
                            $id = "trendsideas.com/" . $result_arr['id'];
                            break;
                        }
                    }
                }

                if ($id != '') {
                    $update_bool = ArticleImages::model()->updateByPk($photo_arr['id'], array('couchBaseId' => $id)); // update articleimages table in sqlserver
                    if ($update_bool) {
                        $this->addPhotoSourceId($id, $photo_arr['id']);
                    } else {
                        $message = 'update is not success with image id: ' . $photo_arr['id'] . ' by helum id: ' . $photo_arr['heliumMediaId'] . ' couchbase id: ' . $id;
                        echo $message;
                        $this->writeToLog($this->log_path, $message);
                    }

                    echo 'id: ' . $photo_arr['id'] . '--- helium id: ' . $photo_arr['heliumMediaId'] . '---couchbase id: ' . $id . "\r\n" . "update success in sql server. NO. " . $mount . '/' . $total_amount . "\r\n";
                } else {
                    $message = 'connot find image: ' . $photo_arr['id'] . 'by helum id: ' . $photo_arr['heliumMediaId'];
                    echo $message;
                    $this->writeToLog($this->log_path, $message);
                }

//                if ($mount>200) exit();
            }
        }
    }

    protected function updatePhoto() {
        $utc_now_utc = strtotime(date('Y-m-d H:i:s'));
        $from_utc = 1372230158;

//            $url = "http://api.develop.devbox/Photos/update?from=1372322158&to=1372324158";
        $url_str = "http://api.develop.devbox/Photos/update?from=";
        $total_amount_int = 0;
        while (TRUE) {
            $to_utc = $from_utc + 1000;

            $new_url_str = $url_str . $from_utc . '&to=' . $to_utc;
            $result_arr = $this->getData($new_url_str);
            $amount_int = sizeof($result_arr['photo']);
            $i = 0;
            if ($amount_int > 0) {
                foreach ($result_arr['photo'] as $var_arr) {
                    $id_string = 'trendsideas.com/' . $var_arr['id'];
                    $this->updateCouchbasePhoto($id_string);

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

    public function updateCouchbasePhoto($id) {
        $cb = $this->couchBaseConnection("production");
        $result = $cb->get($id);
        $result_arr = CJSON::decode($result, true);

        $result_arr['creator_profile_pic'] = 'http://s3.hubsrv.com/trendsideas.com/users/1000000000/profile/profile_pic_small.jpg';
        $result_arr['owner_profile_pic'] = 'http://s3.hubsrv.com/trendsideas.com/users/1000000000/profile/profile_pic_small.jpg';
        $result_arr['view_count'] = null;

        $result_arr['is_active'] = true;
        $result_arr['is_indexed'] = true;

        unset($result_arr['active_yn']);
        unset($result_arr['indexed_yn']);

        if ($cb->set($id, CJSON::encode($result_arr))) {
            echo $id . " update successssssssssssssssssssssssss! \r\n";
        } else {
            echo $id . " update failllllllllllllllllllllllllllllllllllllllllllllll! \r\n";
        }
    }

}

?>
