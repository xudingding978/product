<?php

header('Content-type: *');
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: *');

class PhotosController extends Controller {

    const JSON_RESPONSE_ROOT_SINGLE = 'photo';
    const JSON_RESPONSE_ROOT_PLURAL = 'photos';

    public function __construct() {
        
    }

    public function actionIndex() {
        
        $temp = explode("/", $_SERVER['REQUEST_URI']);

        $id = $temp[sizeof($temp) - 1];
        $result = $this->getRequestResultByID(self::JSON_RESPONSE_ROOT_SINGLE, $id);
        $this->sendResponse(null, $result);
    }

    public function actionCreate() {
        
        $response;
        $request_json = file_get_contents('php://input');        
        $request_arr = CJSON::decode($request_json, true);
        
        
        $url = $request_arr["url"];
        $this->addResizedHeroPhoto($url);
    }
    
    protected function addResizedHeroPhoto($url) {
        $isUrlExist = $this->isUrlExist($url);
        $this->is_image($url);

//        print_r($request_arr); 
//        exit();

        if ($isUrlExist == "true") {
            if (strpos($url, 'hero')) {
                $url = str_replace('http://', 'http://imageservice.', $url) . '?width=336&format=jpg';
                $url = str_replace('hero', 'original', $url);
            }
            
            $image_info = $this->getImageInfo($url);
            $name = $this->renamingImage($image_info, $url);
            if (strpos($url, 'original')) {
                $response = $this->getWatermarkImageSource($url, $image_info);
            } else {
                $response = $this->getImageSource($url, $image_info);
            }
            $bucket = 's3.hubsrv.com';
            $key = str_replace("http://s3.hubsrv.com/", "", $request_arr['original_url']);
            $this->removeImageFromS3($key, $bucket);

            $key = 'trendsideas.com/' . $request_arr['id'] . '/photo/' . $request_arr['id'] . '/' . $request_arr['type'] . '/' . $name;

//            echo $key. "\r\n";

            $this->saveImageToS3($key, $response, $bucket);
            $path = 'http://s3.hubsrv.com/'.$key;
         
//            echo $path;
//            exit();
            $tempArray = array(
                "width" => $image_info[0],
                "height" => $image_info[1],
                "url" => $path,
                "name" => $name
            );

//            print_r($tempArray);
//            exit();

            $response = json_encode($tempArray, true);
        } else {
            $response = $isUrlExist;
        }

        $this->sendResponse(200, $response);
    }

    protected function renamingImage($imageInfo, $url) {
        $tempname = "false";
        $exteonsion = ".png";
        $name_arr = explode("/", $url);
        if (strpos($url, '.jpg')) {
            $tempname = explode(".jpg", $name_arr[sizeof($name_arr) - 1]);
        } elseif (strpos($url, '.png')) {
            $tempname = explode(".png", $name_arr[sizeof($name_arr) - 1]);
        }
        if (strpos($imageInfo['mime'], 'jpeg')) {
            $exteonsion = ".jpg";
        } elseif (strpos($imageInfo['mime'], 'png')) {
            $exteonsion = ".png";
        }
        $name = $tempname[0] . "_" . $imageInfo[0] . "x" . $imageInfo[1] . "$exteonsion"; //  $width  = $get[0]; $height = $get[1]; $type   = $get[2];  $attr   = $get[3];  $bits   = $get['bits']; $mime   = $get['mime'];
        $name = str_replace('http://', '', $name);

        return $name;
    }

    protected function getWatermarkImageSource($url, $imageInfo) {
        $stamp = $this->getStamp($url);
        try {
            $im = $this->getImageString($imageInfo['mime'], $url);
            $marge_right = 5;
            $marge_bottom = 5;

            $sx = imagesx($stamp);
            $sy = imagesy($stamp);

            imagecopy($im, $stamp, imagesx($im) - $sx - $marge_right, imagesy($im) - $sy - $marge_bottom, 0, 0, imagesx($stamp), imagesy($stamp));
            $response = $this->compressData($imageInfo['mime'], $im, $url);

            return $response;
        } catch (Exception $e) {
            $response = 'Caught watermark exception: ' . $e->getMessage() . "\r\n" . $url;
            $this->writeToLog("/home/devbox/NetBeansProjects/test/AddImage_unsucces.log", $response);
        }
    }

    protected function getImageSource($url, $imageInfo) {
        try {
            $im = $this->getImageString($imageInfo['mime'], $url);
            $response = $this->compressData($imageInfo['mime'], $im, $url);
            header('Content-type: ' . $imageInfo['mime']);

            return $response;
        } catch (Exception $e) {
            $response = 'Caught un-watermark exception: ' . $e->getMessage() . "\r\n" . $url;
            $this->writeToLog("/home/devbox/NetBeansProjects/test/AddImage_unsucces.log", $response);
        }
    }

    protected function getStamp($url) {
        try {
            $stamp = imagecreatefrompng('/home/devbox/NetBeansProjects/test/watermark4hero.png');
            if (strpos($url, 'original') && !strpos($url, 'imageservice')) {
                $stamp = imagecreatefrompng('/home/devbox/NetBeansProjects/test/watermark4original.png');
            } elseif (strpos($url, 'imageservice')) {
                $stamp = imagecreatefrompng('/home/devbox/NetBeansProjects/test/watermark4hero.png');
            }

            return $stamp;
        } catch (Exception $e) {

            $stamp = imagecreatefrompng('https://s3-ap-southeast-2.amazonaws.com/hubstar-dev/watermark4hero.png');
            if (strpos($url, 'original')) {
                $stamp = imagecreatefrompng('https://s3-ap-southeast-2.amazonaws.com/hubstar-dev/watermark4original.png');
            } elseif (strpos($url, 'imageservice')) {
                $stamp = imagecreatefrompng('https://s3-ap-southeast-2.amazonaws.com/hubstar-dev/watermark4hero.png');
            }

            $message = "get water mark image faill from localhost: " . $e->getMessage() . "\r\n" . date("Y-m-d H:i:s") . $url . "\r\n";


            return $stamp;
        }
    }

    public function actionRead() {

        $temp = explode("/", $_SERVER['REQUEST_URI']);

        $id = $temp[sizeof($temp) - 1];
        $result = $this->getRequestResultByID(self::JSON_RESPONSE_ROOT_SINGLE, $id);
        $this->sendResponse(null, $result);

        $temp = explode("/", $_SERVER['REQUEST_URI']);

        $id = $temp[sizeof($temp) - 1];
        $result = $this->getRequestResultByID(self::JSON_RESPONSE_ROOT_SINGLE, $id);
        $this->sendResponse(null, $result);
    }

    public function actionUpdate() {
        try {
            $returnType = "photo";
            $temp = explode("?", $_SERVER['REQUEST_URI']);
            $request_arr = array();

            if (sizeof($temp) > 1) {
                $request_string = $temp [sizeof($temp) - 1];
                $request_arr = preg_split("/=|&/", $request_string);

                $response = $this->getAllDoc($returnType, $request_arr[1], $request_arr[3]);
                $this->sendResponse(200, $response);
            }
        
            $request_json = file_get_contents('php://input');
            echo $request_json;
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
    }

    public function updateCouchbasePhoto($id) {
        $ch = $this->couchBaseConnection("develop");
        $result = $ch->get($id);
        $result_arr = CJSON::decode($result, true);

        $result_arr['creator_profile_pic'] = 'http://s3.hubsrv.com/trendsideas.com/users/1000000000/profile/profile_pic_small.jpg';
        $result_arr['owner_profile_pic'] = 'http://s3.hubsrv.com/trendsideas.com/users/1000000000/profile/profile_pic_small.jpg';

        $result_arr['is_active'] = true;
        $result_arr['is_indexed'] = true;
        unset($result_arr['active_yn']);
        unset($result_arr['indexed_yn']);

//        error_log(var_export($result));
        print_r($result_arr);

        if ($ch->set($id, CJSON::encode($result_arr))) {
            echo $id . " update successssssssssssssssssssssssss! \r\n";
        } else {
            echo $id . " update failllllllllllllllllllllllllllllllllllllllllllllll! \r\n";
        }

        exit();
    }

    public function actionDelete() {
        try {
            
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
    }

    public function actionTest() {

        header('Content-type: application/json');

        echo CJSON::encode("dddddddd");
    }

    public function actionOptions() {
        $statusHeader = 'HTTP/1.1 ' . 200 . ' ' . $this->getStatusCodeMessage(200);
        header($statusHeader);
        // Set the content type
        header('Content-type: ' . 'application/json');
        // Set the Access Control for permissable domains
        header("Access-Control-Allow-Origin: *");
        header('Access-Control-Request-Method: *');
        header('Access-Control-Allow-Methods: PUT, POST, OPTIONS');
        header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
        header('Access-Control-Allow-Headers: *');

        echo "";
        Yii::app()->end();


//                echo $this->sendResponse(200, "OK");
    }

    public function getInputData($inputDataType, $inputData) {
        $tempInput = "";
        if ($inputDataType == "image/jpeg") {
            $tempInput = str_replace('data:image/jpeg;base64,', '', $inputData);
        } elseif ($inputDataType == "application/pdf") {
            $tempInput = str_replace('data:application/pdf;base64,', '', $inputData);
        } elseif ($inputDataType == "image/png") {
            $tempInput = str_replace('data:image/png;base64,', '', $inputData);
        } elseif ($inputDataType == "image/gif") {
            $tempInput = str_replace('data:image/gif;base64,', '', $inputData);
        }
        $data = base64_decode($tempInput);
        return $data;
    }

    public function photoSavingToS3($request_arr, $path, $domain, $bucket) {

        $response = false;
//important changement
        //$array=getProviderConfigurationByName($domain,"S3Client");
//            $client = Aws\S3\S3Client::factory($array);
        $client = $this->getS3Connection($domain);
        $data = $this->getInputData($request_arr['photo']['photo_type'], $request_arr ['photo']['photo_image_url']);
        if ($client->doesObjectExist($bucket, $path . $request_arr ['photo']['photo_title'])) {
            $response = false;
        } else {
            $client->putObject(array(
                'Bucket' => "hubstar-dev",
                'Key' => $path . $request_arr ['photo']['photo_title'],
                'Body' => $data,
                'ACL' => 'public-read'
            ));
            $response = true;
        }
        return $response;
    }

    
    public function doPhotoResizing($mega) {
        $photo_string = $mega['photo'][0]['photo_image_original_url'];
        $photo_name = $mega['photo'][0]['photo_title'];
        $owner_id = $mega['owner_id'];
        $data_arr = $this->convertToString64($photo_string);
        $photo = imagecreatefromstring($data_arr['data']);
        $compressed_photo = $this->compressPhotoData($data_arr['type'], $photo);
        $orig_size['width'] = imagesx($compressed_photo);
        $orig_size['height'] = imagesy($compressed_photo);
        $thambnailUrl = $this->savePhotoInTypes($orig_size, "thambnail", $photo_name, $compressed_photo, $data_arr, $owner_id);
        $heroUrl = $this->savePhotoInTypes($orig_size, "hero", $photo_name, $compressed_photo, $data_arr, $owner_id);
        $previewUrl = $this->savePhotoInTypes($orig_size, "preview", $photo_name, $compressed_photo, $data_arr, $owner_id);
        $originalUrl = $this->savePhotoInTypes($orig_size, "original", $photo_name, $compressed_photo, $data_arr, $owner_id);
        $mega['object_image_url']=$heroUrl;

        $mega['photo'][0]['photo_image_original_url'] = $originalUrl;
        $mega['photo'][0]['photo_image_hero_url'] = $heroUrl;
        $mega['photo'][0]['photo_image_thumbnail_url'] = $thambnailUrl;
        $mega['photo'][0]['photo_image_preview_url'] = $previewUrl;
        $mega['photo'][0]['photo_original_height'] = $orig_size['height'];
        $mega['photo'][0]['photo_original_width'] = $orig_size['width'];
        return $mega;
    }

    protected function savePhotoInTypes($orig_size, $photo_type, $photo_name, $compressed_photo, $data_arr, $owner_id) {
        $new_size = $this->getNewPhotoSize($orig_size, $photo_type);
        $new_photo_data = $this->createNewImage($orig_size, $new_size, $compressed_photo, $data_arr['type']);
        $new_photo_name = $this->addPhotoSizeToName($photo_name, $new_size);
        $bucket = 's3.hubsrv.com';
        $url = "/" . $owner_id . "/" . $photo_type . "/" . $new_photo_name;
        $this->saveImageToS3($url, $new_photo_data, $bucket);
        $s3url = 'https://s3-ap-southeast-2.amazonaws.com/' . $bucket . $url;
        return $s3url;
    }

    protected function getNewPhotoSize($photo_size, $photo_type) {
        $new_size = array();
        switch ($photo_type) {
            case 'thambnail':
                $new_size['width'] = 132;
                $new_size['height'] = 132;
                break;
            case 'preview':
                $new_size['width'] = 118;
                $new_size['height'] = (($photo_size['height'] * $new_size['width']) / $photo_size['width']);
                break;
            case 'hero':
                $new_size['width'] = 338;
                $new_size['height'] = (($photo_size['height'] * $new_size['width']) / $photo_size['width']);
                break;
            case 'original':
                $new_size['width'] = $photo_size['width'];
                $new_size['height'] = $photo_size['height'];
                break;
        }

        return $new_size;
    }

    public function createNewImage($orig_size, $new_size, $photo, $photo_type) {

        // Create new image to display
        $new_photo = imagecreatetruecolor($new_size['width'], $new_size['height']);
        // Create new image with changed dimensions
        imagecopyresized($new_photo, $photo, 0, 0, 0, 0, $new_size['width'], $new_size['height'], $orig_size['width'], $orig_size['height']);

        ob_start();
        if ($photo_type == "image/png") {
            imagepng($new_photo);

        } else if ($photo_type == "image/jpeg") {
            imagejpeg($new_photo);
        }
        $contents = ob_get_contents();
        ob_end_clean();
        return $contents;
    }

    public function photoCreate($mega) {
        $this->doPhotoResizing ($mega);
        error_log(var_export($mega, true));
        
        exit();
        
        $id = $this->getNewID();

        $docID = $this->getDomain() . "/" . $id;
        str_replace(' ', '', $docID);

        $mega["id"] = $id;
        $mega["photo"][0]["id"] = $id;

        $mega['created'] = $this->getCurrentUTC();
        $mega['updated'] = $this->getCurrentUTC();
       $newMega= $this->doPhotoResizing($mega);
        //error_log(var_export($mega["photo"][0], true));
        $cb = $this->couchBaseConnection();
        if ($cb->add($docID, CJSON::encode($newMega))) {
            $this->sendResponse(204, "{ render json: @user, status: :ok }");
        } else {
            $this->sendResponse(500, "some thing wrong");
        }
    }

}

?>