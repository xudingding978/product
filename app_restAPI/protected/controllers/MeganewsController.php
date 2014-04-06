<?php

header('Access-Control-Allow-Origin: *');
header('Content-type: *');
header('Access-Control-Request-Method: *');
header('Access-Control-Allow-Methods: PUT, POST, OPTIONS, GET');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

class MeganewsController extends Controller {

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
                    $photoID = $this->getUserInput($requireParams[1]);
                    $cb = $this->couchBaseConnection();
                    $docID = $this->getDomain() . "/" . $photoID;
                    $tempRecord = $cb->get($docID);
                    $record = CJSON::decode($tempRecord, true);
                    $request_string = "RequireType=collection&collection_id=" . $record["collection_id"] . "&owner_profile_id=" . $record["owner_id"];
                } elseif ($this->getUserInput($requireParams[0]) == "articles") {                       //reload article page, get information from couchbase, form request string;
                    $articleID = $this->getUserInput($requireParams[1]);
                    $cb = $this->couchBaseConnection();
                    $docID = $this->getDomain() . "/" . $articleID;
                    $tempRecord = $cb->get($docID);
                    $record = CJSON::decode($tempRecord, true);
                    $request_string = "RequireType=articleRelatedImage&collection_id=" . $record["collection_id"] . "&owner_profile_id=" . $record["owner_id"];
                }
//                elseif ($this->getUserInput($requireParams[0]) == "video") {
//                    $request_string = "RequireType=video";
//                }

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
        $mega = $request_arr['meganew'];
        if ($mega['type'] == "profile") {
            $this->createProfile($mega);
        }
    }

    public function actionCreateNewProfile() {

        $request_json = file_get_contents('php://input');
        $request_arr = CJSON::decode($request_json, true);

        $id = $request_arr['owner_id'];
        $cb = $this->couchBaseConnection();
        $docID = $this->getDomain() . "/profiles/" . $id;
        $prrofileid = CJSON::decode($cb->get($docID));

        if ($prrofileid !== null) {
            $this->sendResponse(200, CJSON::encode(true, true));
        }
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
        } elseif ($newRecord['mega']['type'] == 'video') {
            $videoController = new VideosController();
            $videoController->videoUpdate($newRecord);
        } else {
            $this->updateMega($newRecord);
        }
    }

    public function actionDelete() {
        
    }

    public function createProfile($mega) {

        $cb = $this->couchBaseConnection();
        $id = $mega['id'];
        $domain = $this->getDomain();
        $docID = $domain . "/profiles/" . $id;
        if (!isset($mega['accessed'])) {
            $mega["accessed"] = 1;
        }
        $mega["accessed"] = date_timestamp_get(new DateTime());
        $mega["created"] = $mega["accessed"];
        if ($cb->add($docID, CJSON::encode($mega))) {
            if ($mega['creator'] !== "") {
                $url = $domain . "/users/" . $mega['creator'];
                $tempRecord = $cb->get($url);
                $oldRecord = CJSON::decode($tempRecord, true);
                $newProfile = array();
                $newProfile['profile_id'] = $id;
                $newProfile['type'] = "creator";
                if (!isset($oldRecord['user'][0]['profiles'])) {
                    $oldRecord['user'][0]['profiles'] = array();
                }
                array_push($oldRecord['user'][0]['profiles'], $newProfile);
                if ($cb->set($url, CJSON::encode($oldRecord))) {
                    
                } else {
                    echo $this->sendResponse(409, 'saving error');
                }
            }
            $this->sendResponse(204);
        } else {
            $this->sendResponse(409, "some thing wronggggggggggggggggg");
        }
    }

}

?>
