<?php

header("Access-Control-Allow-Origin: *");
header('Content-type: *');
header('Access-Control-Request-Method: *');
header('Access-Control-Allow-Methods: PUT, POST, OPTIONS,GET');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

class MegasController extends Controller {

    const JSON_RESPONSE_ROOT_SINGLE = 'mega';
    const JSON_RESPONSE_ROOT_PLURAL = 'megas';

    public function actionIndex() {
        try {

            $temp = explode("?", $_SERVER['REQUEST_URI']);
            $request_string = $temp [sizeof($temp) - 1];
//            error_log(var_export($temp, true)."       ".sizeof($temp));
            $response;

            if (sizeof($temp) > 1) {

                $response = $this->getRequestResult($request_string, self::JSON_RESPONSE_ROOT_PLURAL);
                //    $response = $this->getRequestResultByID(self::JSON_RESPONSE_ROOT_PLURAL, $request_string);
            } else {//default search       
                $response = $this->performSearch(self::JSON_RESPONSE_ROOT_PLURAL, "", "dean");
            }
            $this->sendResponse(200, $response);
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
    }

    public function actionCreate() {
        $request_json = file_get_contents('php://input');
        $request_arr = CJSON::decode($request_json, true);

        $mega = $request_arr['mega'];
        if ($mega['type'] == "profile") {
            $this->createProfile($mega);
        } elseif ($mega['type'] == "photo") {
            $this->createUploadedPhoto($mega);
        }


//        $request_arr["mega"]["id"] = str_replace('test', '', $request_arr["mega"]["id"]);
//        $path = 'this_is/folder_path/';
//      $s3response = $this->photoSavingToS3($request_arr, $path);
//        $response = "ok";
//
//        error_log(var_export($request_arr, true));
//  
//        $request_arr["mega"]['type'] = "photos";
//        $request_arr["mega"]['photos'][0]['id'] = $request_arr["mega"]["id"];
//        $statusHeader = 'HTTP/1.1 ' . 200 . ' ' . $this->getStatusCodeMessage(200);
//        header($statusHeader);
//        header('Content-type: *');
//        header("Access-Control-Allow-Origin: *");
//        header('Access-Control-Request-Method: *');
//        header('Access-Control-Allow-Methods: PUT, POST, OPTIONS, GET');
//        header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
//        echo $response;
        $this->sendResponse(204, $request_json);
    }

    protected function doImageResizing($photo_string, $photo_name) {
        error_log("----------------------------11111111111111111111111111111111");
        $data_arr = $this->convertToString64($photo_string);

//        error_log(var_export($data_arr, true));

        $photo = imagecreatefromstring($data_arr['data']);



        $orig_size['width'] = imagesx($photo);
        $orig_size['height'] = imagesy($photo);

        error_log("width:" . $orig_size['width'] . "---------------------------" . "height: " . $orig_size['height']);

        $new_size = $this->getNewPhotoSize($orig_size, 'thambnail');

        $new_photo_data = $this->createNewImage($orig_size, $new_size, $photo, $data_arr['type']);
        error_log("----------------------------iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
        $new_photo_data = $this->compressPhotoData($data_arr['type'], $new_photo_data);
        error_log("----------------------------vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv");
        $new_photo_name = $this->addPhotoSizeToName($photo_name, $new_size);
        error_log("----------------------------nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn");
//        $new_size = getNewPhotoSize($orig_size, 'preview'); 
//        $new_size = getNewPhotoSize($orig_size, 'hero');
//        $new_photo_name = $image_name.'_'.$new_size['width'].'x'.$new_size['height'];

        $url = "trendsideas.com/media/article/resize/" . $new_photo_name;
        error_log($url . "----------------------------22222222222222222222222222222222222");
        $this->saveImageToS3($url, $new_photo_data);
    }

    public function createNewImage($orig_size, $new_size, $image, $photo_type) {
        error_log("----------------------------555555555555555555555555555555555");

        error_log(var_export($orig_size, true));
        error_log(var_export($new_size, true));

        // Create new image to display
        $new_image = imagecreatetruecolor($new_size['height'], $new_size['width']);
        error_log("----------------6666666666666666666666666666");
        // Create new image with changed dimensions
        imagecopyresized($new_image, $image, 0, 0, 0, 0, $new_size['width'], $new_size['height'], $orig_size['width'], $orig_size['height']);
        error_log("----------------7777777777777777777777777777");

        ob_start();
        if ($photo_type === 'image/png') {
            imagejpeg($new_image);

            $contents = ob_get_contents();
//            imagej
        }

        $contents = ob_get_contents();

        ob_end_clean();
        error_log($contents);
        return $contents;
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
        }

        return $new_size;
    }

    public function actionRead() {
        try {
//            $cb = $this->couchBaseConnection();
            $temp = explode("/", $_SERVER['REQUEST_URI']);
            $id = $temp [sizeof($temp) - 1];

//            $reponse = $cb->get(substr($_SERVER['HTTP_HOST'], 4) . "/" . $id);
//            $result = '{"' . self::JSON_RESPONSE_ROOT_SINGLE . '":' . $reponse . '}';
            $reponse = $this->getRequestResultByID(self::JSON_RESPONSE_ROOT_SINGLE, $id);

            $this->sendResponse(200, $reponse);
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
    }

    public function actionUpdate() {
        $newRecord = file_get_contents('php://input');
        $newRecord = CJSON::decode($newRecord, true);
        if ($newRecord['mega']['type'] == 'user') {
            $this->updateUserRecord($newRecord);
        } else {

            $this->updateComment($newRecord);
        }
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

    public function photoSavingToS3($request_arr, $path) {
        $cb = new Couchbase("cb1.hubsrv.com:8091", "", "", "default", true);
        $key = explode(".", $_SERVER['HTTP_HOST']);
        $key = $key[1] . '.' . $key[2];
        $result = $cb->get($key);
        $result_arr = CJSON::decode($result, true);
        $response = false;
//        error_log(var_export($request_arr ["mega"]['photos'][0], true));
        $data = $this->getInputData($request_arr ["object"]['photos'][0]['photo_type'], $request_arr ["object"]['photos'][0]['photo_url']);
        $client = Aws\S3\S3Client::factory(
                        $result_arr["providers"]["S3Client"]
        );
        return $response;
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
            $this->putImagetoS3($url, $data);
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

    public function updateComment($newRecord) {
        try {

            if (isset($newRecord['mega']['comments'][0]['mega_id'])) {
                $newRecord['mega']['comments'][0]['mega_id'] = null;
            }
            $cb = $this->couchBaseConnection();
            $temp = explode("/", $_SERVER['REQUEST_URI']);
            $id = $temp [sizeof($temp) - 1];
            $docID = $this->getDomain() . "/" . $id;
            error_log($docID);
            $oldRecord = $cb->get($docID);
            $oldRecord = CJSON::decode($oldRecord, true);
            $oldRecord['comments'] = $newRecord['mega']['comments'];

            if ($cb->set($docID, CJSON::encode($oldRecord))) {
                $this->sendResponse(204, "");
            } else {
                $this->sendResponse(500, "some thing wrong");
            }
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
    }

    public function updateUserRecord($newRecord) {
        try {
            $cb = $this->couchBaseConnection();
            $id = $newRecord['mega']['user'][0]['id'];
            $docID = substr($_SERVER['HTTP_HOST'], 4) . "/users/" . $id;
            $oldRecord = $cb->get($docID);
            $oldRecord = CJSON::decode($oldRecord, true);
            error_log(var_export($oldRecord, true));

            $oldRecord['user'] = $newRecord['mega']['user'];
            if ($cb->set($docID, CJSON::encode($oldRecord))) {
                $this->sendResponse(204);
            } else {
                $this->sendResponse(500, "some thing wrong");
            }
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
    }

    public function createUploadedPhoto($mega) {
        $cb = $this->couchBaseConnection();
        $id = $this->getNewID();
        $domain = $this->getDomain();
        $docID = $domain . "/" . $id;
        error_log($docID);
        if ($cb->add($docID, CJSON::encode($mega))) {
            $this->sendResponse(204, "{ render json: @user, status: :ok }");
        } else {
            $this->sendResponse(500, "some thing wrong");
        }
    }

    public function createProfile($mega) {
        $cb = $this->couchBaseConnection();
        $id = $mega['id'];
        $domain = $this->getDomain();
        $docID = $domain . "/profiles/" . $id;
//   error_log(var_export(CJSON::encode($mega), true));
        if ($cb->add($docID, CJSON::encode($mega))) {
            $this->sendResponse(204, "{ render json: @user, status: :ok }");
        } else {
            $this->sendResponse(500, "some thing wrong");
        }
    }

}

?>
