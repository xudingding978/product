<?php

header("Access-Control-Allow-Origin: *");

class ObjectsController extends Controller {

    const JSON_RESPONSE_ROOT_SINGLE = 'object';
    const JSON_RESPONSE_ROOT_PLURAL = 'objects';

    public function actionIndex() {

        echo $this->sendResponse(200, "this is object control");
    }

    public function actionCreate() {
        $request_json = file_get_contents('php://input');
        $request_arr = CJSON::decode($request_json, true);
        $request_arr["object"]["id"] = str_replace('test', '', $request_arr["object"]["id"]);
        $path = 'this_is/folder_path/';
        
       
    //    $s3response = $this->photoSavingToS3($request_arr, $path);
        $response = "ok";
        //   error_log(var_export($request_arr, true));
//        if ($s3response) {
            // $fileName = explode('.', $request_arr['photo']['photo_title'])[0];
            $request_arr["object"]['photos'][0]['image_url'] = "https://s3-ap-southeast-2.amazonaws.com/" . $path . $request_arr["object"]['photos'][0]['photo_title'];
            $request_arr["object"]['type'] = "photos";
            try {
                $cb = $this->couchBaseConnection();
                if ($cb->add(substr($_SERVER['HTTP_HOST'], 4) . '/' . $request_arr["object"]["type"] . '/' . $request_arr["object"]["id"], CJSON::encode($request_arr['object']))) {
                    echo $this->sendResponse(200, var_dump($request_arr));
                } else {
                    echo $this->sendResponse(409, 'A record with id: "' . substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI'] . '/' . '"rrrrr  rrrr already exists');
                }
            } catch (Exception $exc) {
                echo $exc->getTraceAsString();
                echo json_decode(file_get_contents('php://input'));
            }
//        } else {
//            echo $this->sendResponse(409, 'A record with id: "' . substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI'] . '/' . '" already exists');
//        }


        $statusHeader = 'HTTP/1.1 ' . 200 . ' ' . $this->getStatusCodeMessage(200);
        header($statusHeader);
        header('Content-type: ' . 'application/json');
        header("Access-Control-Allow-Origin: http://www.develop.devbox");
        header('Access-Control-Request-Method: *');
        header('Access-Control-Allow-Methods: PUT, POST, OPTIONS');
        header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

        echo $response;
        Yii::app()->end();
    }

    public function actionRead() {
        try {
            
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
    }

    public function actionUpdate() {
        try {
            
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
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

    public function actionOption() {

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

    public function photoSavingToS3($request_arr, $path) {
        $cb = new Couchbase("cb1.hubsrv.com:8091", "", "", "default", true);
        $key = explode(".", $_SERVER['HTTP_HOST']);
        $key = $key[1] . '.' . $key[2];
        $result = $cb->get($key);
        $result_arr = CJSON::decode($result, true);
        $response = false;
        error_log(var_export($request_arr ["object"]['photos'][0], true));
        $data = $this->getInputData($request_arr ["object"]['photos'][0]['photo_type'], $request_arr ["object"]['photos'][0]['photo_url']);
        $client = Aws\S3\S3Client::factory(
                        $result_arr["providers"]["S3Client"]
        );
//        if ($client->doesObjectExist('hubstar-dev', $path . $request_arr ["object"]['photos'][0]['photo_title'])) {
//            $response = false;
//        } else {
//            $client->putObject(array(
//                'Bucket' => "hubstar-dev",
//                'Key' => $path . $request_arr ["object"]['photos'][0]['photo_title'],
//                'Body' => $data,
//                'ACL' => 'public-read'
//            ));
//            $response = true;
//        }
        return $response;
    }

}
?>
