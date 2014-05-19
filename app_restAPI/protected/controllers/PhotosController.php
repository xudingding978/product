<?php

header('Content-type: *');
header('Access-Control-Allow-Origin: *');
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

            $this->saveImageToS3($key, $response, $bucket);
            $path = 'http://s3.hubsrv.com/' . $key;

            $tempArray = array(
                "width" => $image_info[0],
                "height" => $image_info[1],
                "url" => $path,
                "name" => $name
            );


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
        $photo = $this->getRequestResultByID(self::JSON_RESPONSE_ROOT_SINGLE, $id);
        $this->sendResponse(200, $photo);
    }

    public function actionUpdate() {

        try {
            $newRecord = file_get_contents('php://input');
            $newRecord = CJSON::decode($newRecord, true);
            $cb = $this->couchBaseConnection();
            $temp = explode("/", $_SERVER['REQUEST_URI']);
            $id = $temp[sizeof($temp) - 1];
            $url = $this->getDomain() . "/" . $id;
            $tempRecord = $cb->get($url);
            $oldRecord = CJSON::decode($tempRecord, true);
            $oldRecord['object_description'] = $newRecord['photo']['photo_caption'];
            $oldRecord['photo'][0]['photo_title'] = $newRecord['photo']['photo_title'];
            $oldRecord['photo'][0]['photo_caption'] = $newRecord['photo']['photo_caption'];

            $keyword = $this->getProfileKeyword($oldRecord['owner_id']);

            $oldRecord['keyword'] = $keyword;

            if ($cb->set($url, CJSON::encode($oldRecord))) {
                $this->sendResponse(204);
            } else {
                $this->sendResponse(500, "some thing wrong");
            }
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
    }

    public function getProfileKeyword($owner_id) {
        $cb = $this->couchBaseConnection();
        $url = $this->getDomain() . "/profiles/" . $owner_id;
        $tempProfile = $cb->get($url);
        $profile = CJSON::decode($tempProfile, true);

        if (!isset($profile['keyword'])) {
            $profile['keyword'] = array();
        }
        return $profile['keyword'];
    }

    public function getProfileEditors($owner_id) {
        $cb = $this->couchBaseConnection();
        $url = $this->getDomain() . "/profiles/" . $owner_id;
        $tempProfile = $cb->get($url);
        $profile = CJSON::decode($tempProfile, true);
        return $profile['profile'][0]['profile_editors'];
    }

    public function getProfileClassification($owner_id) {
        $cb = $this->couchBaseConnection();
        $url = $this->getDomain() . "/profiles/" . $owner_id;
        $tempProfile = $cb->get($url);
        $profile = CJSON::decode($tempProfile, true);
        if (!isset($profile['classification'])) {
            $profile['classification'] = "";
        }
        return $profile['classification'];
    }

    public function updateCouchbasePhoto($id) {
        $ch = $this->couchBaseConnection("develop");
        $result = $ch->get($id);
        $result_arr = CJSON::decode($result, true);

        //    $result_arr['creator_profile_pic'] = 'http://s3.hubsrv.com/trendsideas.com/users/1000000000/profile/profile_pic_small.jpg';
        //    $result_arr['owner_profile_pic'] = 'http://s3.hubsrv.com/trendsideas.com/users/1000000000/profile/profile_pic_small.jpg';
        // $result_arr['is_active'] = true;
        //  $result_arr['is_indexed'] = true;
        //   unset($result_arr['active_yn']);
        //      unset($result_arr['indexed_yn']);
        if ($result_arr["collection_id"] != null) {
            $result_arr["collection_id"] = $result_arr["collection_id"]->split(' ')->join('-');
        }






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

    public function doPhotoResizing($mega) {

        $photo_string = $mega['photo'][0]['photo_image_original_url'];
        $photo_name = $mega['photo'][0]['photo_title'];
        $owner_id = $mega['owner_id'];
        $data_arr = $this->convertToString64($photo_string);
        $photo = imagecreatefromstring($data_arr['data']);
        $compressed_photo = $this->compressPhotoData($data_arr['type'], $photo);
        $orig_size['width'] = intval(imagesx($compressed_photo));
        $orig_size['height'] = intval(imagesy($compressed_photo));
        $thumbnailUrl = $this->savePhotoInTypes($orig_size, "thumbnail", $photo_name, $photo, $data_arr, $owner_id, "photo");
        $heroUrl = $this->savePhotoInTypes($orig_size, "hero", $photo_name, $photo, $data_arr, $owner_id, "photo");
        $previewUrl = $this->savePhotoInTypes($orig_size, "preview", $photo_name, $photo, $data_arr, $owner_id, "photo");
        $originalUrl = $this->savePhotoInTypes($orig_size, "original", $photo_name, $compressed_photo, $data_arr, $owner_id, "photo");

        $mega['object_image_url'] = $heroUrl;
        $mega['photo'][0]['photo_image_original_url'] = $originalUrl;
        $mega['photo'][0]['photo_image_hero_url'] = $heroUrl;
        $mega['photo'][0]['photo_image_thumbnail_url'] = $thumbnailUrl;
        $mega['photo'][0]['photo_image_preview_url'] = $previewUrl;
        $mega['photo'][0]['photo_original_height'] = $orig_size['height'];
        $mega['photo'][0]['photo_original_width'] = $orig_size['width'];

        $mega['view_count'] = 0;
        $mega['share_count'] = 0;
        $mega['save_count'] = 0;
        $mega['comment_count'] = 0;
        $mega['likes_count'] = 0;
        if (!isset($mega['accessed'])) {
            $mega["accessed"] = 1;
        }
        $mega["accessed"] = date_timestamp_get(new DateTime());

        if (!isset($mega['created'])) {
            $mega["created"] = 1;
        }
        $mega["created"] = date_timestamp_get(new DateTime());


        $mega["updated"] = 0;


        $keyword = $this->getProfileKeyword($mega['owner_id']);
        $editors = $this->getProfileEditors($mega['owner_id']);
        $mega['keyword'] = $keyword;

        $mega['editors'] = $editors;



        $mega['classification'] = $this->getProfileClassification($mega['owner_id']);



        return $mega;
    }

    public function savePhotoInTypes($orig_size, $photo_type, $photo_name, $compressed_photo, $data_arr, $owner_id, $optional = null, $type = null) {

        $new_size = $this->getNewPhotoSize($orig_size, $photo_type);
        $new_photo_data = $this->createNewImage($orig_size, $new_size, $compressed_photo, $data_arr['type']);
        //$new_photo_name = $this->addPhotoSizeToName($photo_name, $new_size);
        $bucket = 's3.hubsrv.com';
        if ($optional == null || $optional == 'undefined' || $optional == "") {
            $url = $this->getDomain() . '/users' . "/" . $owner_id . "/" . $photo_type . "/" . $photo_name;
        } else if ($optional == 'profile_picture') {
            $new_photo_name = $this->addPhotoSizeToName($photo_name, $new_size);
            $url = $this->getDomain() . '/profiles' . "/" . $owner_id . "/" . $optional . "/" . $new_photo_name;
        } else if ($optional == "photo") {
            $new_photo_name = $this->addPhotoSizeToName($photo_name, $new_size);
            $url = $this->getDomain() . '/profiles' . "/" . $owner_id . "/" . $optional . "/" . $new_photo_name;
        } else {
            $new_photo_name = $this->addPhotoSizeToName($photo_name, $new_size);
            $url = $this->getDomain() . '/users' . "/" . $owner_id . "/" . $photo_type . "/" . $new_photo_name;
        }
        $this->saveImageToS3($url, $new_photo_data, $bucket, $type);
        $s3url = 'http://' . $bucket . '/' . $url;
        return $s3url;
    }

    public function saveCommentPhotoInTypes($orig_size, $photo_type, $photo_name, $compressed_photo, $data_arr, $owner_id, $type = null, $message_id) {

        $new_size = $this->getNewPhotoSize($orig_size, $photo_type);
        $new_photo_data = $this->createNewImage($orig_size, $new_size, $compressed_photo, $data_arr['type']);
        //$new_photo_name = $this->addPhotoSizeToName($photo_name, $new_size);
        $bucket = 's3.hubsrv.com';

        $url = $this->getDomain() . '/users' . "/" . $owner_id . "/" . "message/" . $message_id . "/" . $photo_type . "/" . $photo_name;

        $this->saveImageToS3($url, $new_photo_data, $bucket, $type);
        $s3url = 'http://' . $bucket . '/' . $url;
        return $s3url;
    }

    public function saveConversationPhotoInTypes($orig_size, $photo_type, $photo_name, $compressed_photo, $data_arr, $type = null, $message_id) {

        $new_size = $this->getNewPhotoSize($orig_size, $photo_type);
        $new_photo_data = $this->createNewImage($orig_size, $new_size, $compressed_photo, $data_arr['type']);
        //$new_photo_name = $this->addPhotoSizeToName($photo_name, $new_size);
        $bucket = 's3.hubsrv.com';

        $url = $this->getDomain() . '/conversations' . "/" . $message_id . "/" . $photo_type . "/" . $photo_name;

        $this->saveImageToS3($url, $new_photo_data, $bucket, $type);
        $s3url = 'http://' . $bucket . '/' . $url;
        return $s3url;
    }

    protected function getNewPhotoSize($photo_size, $photo_type) {
        $new_size = array();
        switch ($photo_type) {
            case 'thumbnail':
                $new_size['width'] = 132;
                $new_size['height'] = 132;
                break;
            case 'preview':
                $new_size['width'] = 118;
                $new_size['height'] = intval(($photo_size['height'] * $new_size['width']) / $photo_size['width']);
                break;
            case 'hero':
                $new_size['width'] = 338;
                $new_size['height'] = intval(($photo_size['height'] * $new_size['width']) / $photo_size['width']);
                break;
            case 'user_cover':
                $new_size['width'] = 1280;
                $new_size['height'] = intval(($photo_size['height'] * $new_size['width']) / $photo_size['width']);
                break;
            case 'user_cover_small':
                $new_size['width'] = 165;
                $new_size['height'] = intval(($photo_size['height'] * $new_size['width']) / $photo_size['width']);
                break;
            case 'user_picture':
                $new_size['width'] = 150;
                $new_size['height'] = intval(($photo_size['height'] * $new_size['width']) / $photo_size['width']);
                break;
            case 'original':
                $new_size['width'] = intval($photo_size['width']);
                $new_size['height'] = intval($photo_size['height']);
                break;
            default:
                $new_size['width'] = intval($photo_size['width']);
                $new_size['height'] = intval($photo_size['height']);
        }

        return $new_size;
    }

    public function createNewImage($orig_size, $new_size, $photo, $photo_type) {
        // Create new image to display
        $new_photo = imagecreatetruecolor($new_size['width'], $new_size['height']);
        // Create new image with changed dimensions
        imagecopyresampled($new_photo, $photo, 0, 0, 0, 0, $new_size['width'], $new_size['height'], $orig_size['width'], $orig_size['height']);
        ob_start();
        if ($photo_type == "image/png") {
            imagepng($new_photo);
        } else if ($photo_type == "image/jpeg") {
            imagejpeg($new_photo);
        } else if ($photo_type == "image/gif") {
            imagegif($new_photo);
        }
        $contents = ob_get_contents();
        ob_end_clean();
        return $contents;
    }

    public function photoCreate($mega) {
        $mega["id"] = str_replace("test", "", $mega["id"]);
        $docID = $this->getDomain() . "/" . $mega["id"];
        $mega["photo"][0]["id"] = $mega["id"];
        $mega['created'] = $this->getCurrentUTC();
        $mega['updated'] = $this->getCurrentUTC();
        $newMega = $this->doPhotoResizing($mega);

        $cb = $this->couchBaseConnection();
        if ($cb->add($docID, CJSON::encode($newMega))) {
            $this->sendResponse(204);
        } else {
            $this->sendResponse(500, "some thing wrong");
        }
    }

    public function convertToString64($image_string) {
        $matchs = array();

        preg_match_all('/\:(.*?)\;/', $image_string, $matchs);

        $image_type = $matchs[1][0];

        $input_image_string = $this->getInputData($image_type, $image_string);
        $image_data['type'] = $image_type;
        $image_data['data'] = $input_image_string;
        return $image_data;
    }

    function compressPhotoData($type, $image) {

        if ($type == "image/png") {
            imagepng($image);
        } elseif ($type == "image/jpeg") {
            imagejpeg($image, null, 80);
        } else if ($type == "image/gif") {
            imagegif($image);
        }
        return $image;
    }

    protected function addPhotoSizeToName($photo_name, $photo_size_arr) {

        $name_arr = explode(".", $photo_name);
        $new_name = "";
        if (sizeof($name_arr > 0)) {
            $temp_str = '_' . $photo_size_arr['width'] . 'x' . $photo_size_arr['height'];
            $new_name = $name_arr[0] . $temp_str . '.' . $name_arr[1];
        }
        return $new_name;
    }

    public function saveImageToS3($url, $data, $bucket, $type) {

        $arr = $this->getProviderConfigurationByName($this->getDomain(), "S3Client");
        $client = Aws\S3\S3Client::factory(
                        $arr
        );
        if ($type == null || $type == 'undefined' || $type == "") {
            $client->putObject(array(
                'Bucket' => $bucket, //"s3.hubsrv.com"
                'Key' => $url,
                'Body' => $data,
                'ACL' => 'public-read'
            ));
        } else {
            $client->putObject(array(
                'Bucket' => $bucket, //"s3.hubsrv.com"
                'Key' => $url,
                'Body' => $data,
                'ContentType' => $type,
                'ACL' => 'public-read'
            ));
        }
    }

    public function removeS3Record($mega) {
        $bucket = 's3.hubsrv.com';
        $arr = $this->getProviderConfigurationByName($this->getDomain(), "S3Client");
        $client = Aws\S3\S3Client::factory(
                        $arr
        );
        $client->delete_object($bucket, $mega['photo'][0]['photo_image_hero_url']);
    }

    public function photoUpdate($mega) {
        
        try {
            $cb = $this->couchBaseConnection();
            $temp = explode("/", $_SERVER['REQUEST_URI']);
            $id = $temp [sizeof($temp) - 1];
            $photoTitle = $mega['mega']['photo'][0]['photo_title'];
            $photoCaption = $mega['mega']['photo'][0]['photo_caption'];
            $linkText = $mega['mega']['photo'][0]['photo_link_text'];
            $linkUrl = $mega['mega']['photo'][0]['photo_link_url'];
            $deleted = $mega['mega']['is_deleted'];


            $url = $this->getDomain() . "/" . $id;
            $tempRecord = $cb->get($url);
            $oldRecord = CJSON::decode($tempRecord, true);
            $oldRecord['object_description'] = $photoCaption;
//            if (!isset($oldRecord['view_count'])) {
//                $oldRecord["view_count"] = 1;
//            } else {
//                $oldRecord['view_count'] = $mega['mega']['view_count']; // ,but it  will also add one when share  //$mega['mega']['view_count']; 
//            }
            if (!isset($oldRecord['accessed'])) {
                $oldRecord["accessed"] = 1;
            }
            $oldRecord["accessed"] = date_timestamp_get(new DateTime());

            if (!isset($oldRecord['share_count'])) {
                $oldRecord["share_count"] = 0;
            } else {
                $oldRecord["share_count"] = $mega['mega']['share_count'];   // //or using   $mega['mega']['share_count']; 
            }
            $oldRecord['photo'][0]['photo_title'] = $photoTitle;
            $oldRecord['photo'][0]['photo_caption'] = $photoCaption;
            $oldRecord['photo'][0]['photo_link_text'] = $linkText;
            $oldRecord['photo'][0]['photo_link_url'] = $linkUrl;
            $oldRecord['is_deleted'] = $deleted;
            if ($cb->set($url, CJSON::encode($oldRecord))) {
                $this->sendResponse(204);
            } else {
                $this->sendResponse(500, "some thing wrong");
            }
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
    }

}

?>
