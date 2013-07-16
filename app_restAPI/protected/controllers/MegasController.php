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
            $response = "";

            if (sizeof($temp) > 1) {
                $response = $this->getRequestResult($request_string, self::JSON_RESPONSE_ROOT_PLURAL);
                //    $response = $this->getRequestResultByID(self::JSON_RESPONSE_ROOT_PLURAL, $request_string);
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

        $this->sendResponse(204, $request_json);
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
        $temp = explode("/", $_SERVER['REQUEST_URI']);
        $id = $temp [sizeof($temp) - 1];

        $newRecord = file_get_contents('php://input');
        $newRecord = CJSON::decode($newRecord, true);
        $newRecord['id'] = $id;
        if ($newRecord['mega']['type'] == 'user') {
            $this->updateUserRecord($newRecord);
        }
        elseif ($newRecord['mega']['type'] == 'profile') {
            $this->updateProfileRecord($newRecord);
        } else {

            $this->updateMega($newRecord);
            //    $this->updateComment($newRecord);
        }
    }

    public function actionDelete() {
        try {
            
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
    }

    public function photoSavingToS3($request_arr, $path) {
        $cb = new Couchbase("cb1.hubsrv.com:8091", "", "", "default", true);
        $key = explode(".", $_SERVER['HTTP_HOST']);
        $key = $key[1] . '.' . $key[2];
        $result = $cb->get($key);
        $result_arr = CJSON::decode($result, true);
        $response = false;

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
            $cb = $this->couchBaseConnection();
            $temp = explode("/", $_SERVER['REQUEST_URI']);
            $id = $temp [sizeof($temp) - 1];
            $type = $newRecord['mega']['type'];
            $docID = $this->getDocId($type, $id);
            $oldRecord = $cb->get($docID);
            $oldRecord = CJSON::decode($oldRecord, true);
            $oldRecord['comments'] = null;
            $oldRecord['comments'] = $newRecord['mega']['comments'];
            if ($cb->set($docID, CJSON::encode($oldRecord, true))) {
                $this->sendResponse(204);
            } else {
                $this->sendResponse(500, "some thing wrong");
            }
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
    }

    public function updateProfileRecord($newRecord) {
        try {
            $cb = $this->couchBaseConnection();
            $id = $newRecord['mega']['profile'][0]['id'];
            $docID = $this->getDomain() . "/profiles/" . $id;
            $oldRecord = $cb->get($docID);
            $oldRecord = CJSON::decode($oldRecord, true);
            $oldRecord['profile'] = $newRecord['mega']['profile'];
            if ($cb->set($docID, CJSON::encode($oldRecord))) {
                $this->sendResponse(204);
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
            $docID = $this->getDomain() . "/users/" . $id;
            $oldRecord = $cb->get($docID);
            $oldRecord = CJSON::decode($oldRecord, true);
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
        if (sizeof($mega) > 0) {
            $photoController = new PhotosController();
            $photoController->photoCreate($mega);
        }
    }

    public function createProfile($mega) {

        $cb = $this->couchBaseConnection();
        $id = $mega['id'];
        $domain = $this->getDomain();
        $docID = $domain . "/profiles/" . $id;

        if ($cb->add($docID, CJSON::encode($mega))) {
            $this->sendResponse(200, "ok");
        } else {
            $this->sendResponse(500, "some thing wrong");
        }
    }

    public function updateMega($newRecord) {
        $cb = $this->couchBaseConnection();
        $id = $newRecord['id'];
        $type = $newRecord['mega']['type'];
        $this->getDocId($type, $id);
        $docID = $this->getDocId($type, $id);
        $oldRecord = $cb->get($docID);
        $oldRecord = CJSON::decode($oldRecord, true);

        if (!isset($oldRecord['comments'])) {
            $oldRecord['comments'] = array();
        }
        if (sizeof($newRecord['mega']['comments']) > sizeof($oldRecord['comments'])) {//insert comment
            array_unshift($oldRecord['comments'], $newRecord['mega']['comments'][0]);
        }
        if (!isset($oldRecord['likes_count']) || $oldRecord['likes_count'] != $newRecord['mega']['likes_count']) {//update count
            $oldRecord['likes_count'] = $newRecord['mega']['likes_count'];
            $oldRecord['people_like'] = $newRecord['mega']['people_like'];
        }
        if ($cb->set($docID, CJSON::encode($oldRecord))) {
            $this->sendResponse(204);
        } else {
            $this->sendResponse(500, "some thing wrong");
        }
    }

    public function getDocId($type, $id) {
        $docID = "";
        if ($type == "profile") {
            $docID = $this->getDomain() . "/profiles/" . $id;
        } elseif ($type == "photo") {
            $docID = $this->getDomain() . "/" . $id;
        }
        return $docID;
    }

}

?>
