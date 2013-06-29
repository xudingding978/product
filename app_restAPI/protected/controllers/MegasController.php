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
//                error_log($request_string);
                $response = $this->getRequestResult($request_string, self::JSON_RESPONSE_ROOT_PLURAL);
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
//        $request_arr["mega"]["id"] = str_replace('test', '', $request_arr["mega"]["id"]);
//        $path = 'this_is/folder_path/';
////      $s3response = $this->photoSavingToS3($request_arr, $path);
//        $response = "ok";
//
////        error_log(var_export($request_arr, true));
//
//        $request_arr["mega"]['type'] = "photos";
//        $request_arr["mega"]['photos'][0]['id'] = $request_arr["mega"]["id"];
//
//        $statusHeader = 'HTTP/1.1 ' . 200 . ' ' . $this->getStatusCodeMessage(200);
//        header($statusHeader);
//        header('Content-type: *');
//        header("Access-Control-Allow-Origin: *");
//        header('Access-Control-Request-Method: *');
//        header('Access-Control-Allow-Methods: PUT, POST, OPTIONS, GET');
//        header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
//
//        echo $response;
$this->sendResponse(200,$request_json);
    }

    public function actionRead() {
        try {
            $cb = $this->couchBaseConnection();
            $temp = explode("/", $_SERVER['REQUEST_URI']);
            $id = $temp [sizeof($temp) - 1];
            $reponse = $cb->get(substr($_SERVER['HTTP_HOST'], 4) . "/" . $id);
            $result = '{"' . self::JSON_RESPONSE_ROOT_SINGLE . '":' . $reponse . '}';

            echo $this->sendResponse(200, $result);
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
                error_log(var_export($newRecord['mega']['comments'], true));
            }
            $cb = $this->couchBaseConnection();
            $temp = explode("/", $_SERVER['REQUEST_URI']);
            $id = $temp [sizeof($temp) - 1];
            $docID = $this->getDomain() . "/" . $id;
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
            error_log(var_export($oldRecord,true));
        //  $oldRecord['user'][0] = null;
            $oldRecord['user'] = $newRecord['mega']['user'];
            if ($cb->set($docID, CJSON::encode($oldRecord))) {
                $this->sendResponse(204, "{ render json: @user, status: :ok }");
            } else {
                $this->sendResponse(500, "some thing wrong");
            }
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
    }

}

?>
