<?php

header('Access-Control-Allow-Origin: *');
header('Content-type: *');
header('Access-Control-Request-Method: *');
header('Access-Control-Allow-Methods: PUT, POST, OPTIONS, GET');
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
                $requireParams = explode('&', $request_string);
                if ($this->getUserInput($requireParams[0]) == "photos") {                                //reload photo page, get information from couchbase, form request string;
                    $photoID= $this ->getUserInput($requireParams[1]);
                     $cb = $this->couchBaseConnection();
                    $docID = $this->getDomain() . "/" . $photoID;
                    $tempRecord = $cb->get($docID);
                    $record =  CJSON::decode($tempRecord, true);
                    $request_string= "RequireType=collection&collection_id=" . $record["collection_id"] . "&owner_profile_id=" . $record["owner_id"];
                } elseif ($this->getUserInput($requireParams[0]) == "articles") {                       //reload article page, get information from couchbase, form request string;
                    $articleID= $this ->getUserInput($requireParams[1]);
                     $cb = $this->couchBaseConnection();
                    $docID = $this->getDomain() . "/" . $articleID;
                    $tempRecord = $cb->get($docID);
                    $record =  CJSON::decode($tempRecord, true);
                    $request_string= "RequireType=articleRelatedImage&collection_id=" . $record["collection_id"] . "&owner_profile_id=" . $record["owner_id"];
                }
                
                $response = $this->getRequestResult($request_string, self::JSON_RESPONSE_ROOT_PLURAL);
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
            $temp = explode("/", $_SERVER['REQUEST_URI']);
            $id = $temp [sizeof($temp) - 1];
            $cb = $this->couchBaseConnection();
            $docID = $this->getDomain() . "/profiles/" . $id;
            $reponse = $cb->get($docID);
            $reponse = '{"' . self::JSON_RESPONSE_ROOT_SINGLE . '":' . $reponse . '}';
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
        } elseif ($newRecord['mega']['type'] == 'profile') {
            $this->updateProfileRecord($newRecord);
        } elseif ($newRecord['mega']['type'] == 'photo') {
            $photoController = new PhotosController();
            $photoController->photoUpdate($newRecord);
        } else {
            $this->updateMega($newRecord);
        }
    }

    public function actionDelete() {
        try {
            $temp = explode("/", $_SERVER['REQUEST_URI']);
            $id = $temp [sizeof($temp) - 1];
            $request_json = $this->getRequestResultByID(self::JSON_RESPONSE_ROOT_SINGLE, $id);
            $megas = CJSON::decode($request_json, true);
            $mega = $megas['mega'];
            $docID = $this->getDocId($mega['type'], $mega['id']);
            $cb = $this->couchBaseConnection();
            if ($cb->delete($docID)) {
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
            $this->sendResponse(204);
        } else {
            $this->sendResponse(200, "some thing wronggggggggggggggggg");
        }
    }

    public function updateMega($newRecord) {
//        $cb = $this->couchBaseConnection();
//        $id = $newRecord['id'];
//        $type = $newRecord['mega']['type'];
//        $docID = $this->getDocId($type, $id);
//        $oldRecord = $cb->get($docID);
//        $oldRecord = CJSON::decode($oldRecord, true);
//
//        if (!isset($oldRecord['comments'])) {
//            $oldRecord['comments'] = array();
//        }
//        if (sizeof($newRecord['mega']['comments']) > sizeof($oldRecord['comments'])) {//insert comment
//            array_unshift($oldRecord['comments'], $newRecord['mega']['comments'][0]);
//        }
//        if (!isset($oldRecord['likes_count']) || $oldRecord['likes_count'] != $newRecord['mega']['likes_count']) {//update count
//            $oldRecord['likes_count'] = $newRecord['mega']['likes_count'];
//            $oldRecord['people_like'] = $newRecord['mega']['people_like'];
//        }
//        if ($cb->set($docID, CJSON::encode($oldRecord))) {
//            $this->sendResponse(204);
//        } else {
//            $this->sendResponse(500, "some thing wrong");
//        }
        $this->sendResponse(204);
    }

    public function actionaddlike() {
        $newRecord_arr = file_get_contents('php://input');
        $newRecord = CJSON::decode($newRecord_arr, true);
        $likes_count = $newRecord['likes_count'];
        $people_like = $newRecord['people_like'];
        $id = $newRecord['optional'];
        $type = $newRecord['type'];
        $docID = $this->getDocId($type, $id);
        $cb = $this->couchBaseConnection();
        $oldRecord_arr = $cb->get($docID);
        $oldRecord = CJSON::decode($oldRecord_arr, true);
        $oldRecord['likes_count'] = $likes_count;
        $oldRecord['people_like'] = $people_like;
        if ($cb->set($docID, CJSON::encode($oldRecord))) {
            $this->sendResponse(204);
        } else {
            $this->sendResponse(500, "some thing wrong");
        }
    }

    public function actionaddcomment() {
        $newRecord_arr = file_get_contents('php://input');
        $newRecord = CJSON::decode($newRecord_arr, true);
        $optional = $newRecord['optional'];
        $idData = explode("/", $optional);
        if (sizeof($idData) > 0) {
            $docID = $this->getDocId($idData[0], $idData[1]);
            $cb = $this->couchBaseConnection();
            $oldRecord_arr = $cb->get($docID);
            $oldRecord = CJSON::decode($oldRecord_arr, true);
            array_unshift($oldRecord['comments'], $newRecord);
            if ($cb->set($docID, CJSON::encode($oldRecord))) {
                $this->sendResponse(204);
            } else {
                $this->sendResponse(500, "some thing wrong");
            }
        }
    }

}

?>
