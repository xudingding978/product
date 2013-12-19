<?php

header("Access-Control-Allow-Origin: *");
header('Content-type: *');

header('Access-Control-Request-Method: *');
header('Access-Control-Allow-Methods: PUT, POST, OPTIONS,GET');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

class CollectionsController extends Controller {

    const JSON_RESPONSE_ROOT_SINGLE = 'collection';
    const JSON_RESPONSE_ROOT_PLURAL = 'collections';

    public function actionIndex() {

        $infoRefresh = explode("?", $_SERVER['REQUEST_URI']);

        $infoRefreshDeep = explode("&", $infoRefresh[1]);
        $profile_id = explode("=", $infoRefreshDeep[1]);
        $collection_id = explode("=", $infoRefreshDeep[2]);


        try {
            $cb = $this->couchBaseConnection();
            $docID = $this->getDomain() . "/profiles/" . $profile_id[1];
            $profileOwn = $cb->get($docID);
            $owner = CJSON::decode($profileOwn, true);
            for ($i = 0; $i < sizeof($owner["profile"][0]["collections"]); $i++) {

                if ($owner["profile"][0]["collections"][$i]["id"] === $collection_id[1]) {
                    $title = $owner["profile"][0]["collections"][$i];

                    break;
                }
            }
            $title = CJSON::encode($title, true);
            $title = '{"' . self::JSON_RESPONSE_ROOT_PLURAL . '":[' . $title . ']}';
            //      $response = '{"' . self::JSON_RESPONSE_ROOT_PLURAL . '":' . CJSON::encode($topicSelection, true) . '}';

            echo $this->sendResponse(200, $title);
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
    }

    public function actionSaveCollection() {
        $request_json = CJSON::decode(file_get_contents('php://input'), true);
        $request_arr = CJSON::decode($request_json, true);

        $docIDDeep = $this->getDomain() . "/profiles/" . $request_arr["optional"]; //$id  is the page owner
        $cb = $this->couchBaseConnection();
        $oldDeep = $cb->get($docIDDeep); // get the old user record from the database according to the docID string
        $oldRecordDeep = CJSON::decode($oldDeep, true);
        if (!isset($oldRecordDeep['profile'][0]['collections'])) {
            $oldRecordDeep['profile'][0]['collections'] = array();
        }
        for ($i = 0; $i < sizeof($oldRecordDeep['profile'][0]['collections']); $i++) {
            if ($oldRecordDeep['profile'][0]['collections'][$i]["id"] === $request_arr["id"]) {
                $oldRecordDeep['profile'][0]['collections'][$i]["collection_ids"] = $request_arr["collection_ids"];
            }
        }
        if ($cb->set($docIDDeep, CJSON::encode($oldRecordDeep))) {
            $this->sendResponse(204);
        } else {
            echo $this->sendResponse(409, 'A record with id: "' . substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI'] . '/' . '" already exists');
        }
    }

    

    public function actionCreate() {
        try {
            $request_json = file_get_contents('php://input');
            $request_arr = CJSON::decode($request_json, true);
            $tempCollection = $request_arr['collection'];
            $type = $tempCollection['type'];
            $id = $tempCollection['optional'];
            $tempCollection['id'] = (string) $tempCollection['id'];
            $cb = $this->couchBaseConnection();
            $domain = $this->getDomain();
            if ($type === "profile") {
                $docID = $domain . "/profiles/" . $id;
                $tempMega = $cb->get($docID);
                $mega = CJSON::decode($tempMega, true);
                if (!isset($mega['profile'][0]['collections'])) {
                    $mega['profile'][0]['collections'] = array();
                }
                array_unshift($mega['profile'][0]['collections'], $tempCollection);
            } else {
                $docID = $domain . "/users/" . $id;
                $tempMega = $cb->get($docID);
                $mega = CJSON::decode($tempMega, true);
                if (!isset($mega['user'][0]['collections'])) {
                    $mega['user'][0]['collections'] = array();
                }
                array_unshift($mega['user'][0]['collections'], $tempCollection);
            }

            if ($cb->set($docID, CJSON::encode($mega))) {
                $this->sendResponse(204);
            } else {
                echo $this->sendResponse(409, 'A record with id: "' . substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI'] . '/' . '" already exists');
            }




            //$this->sendResponse(200, $request_json);
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
            echo json_decode(file_get_contents('php://input'));
        }
    }

    public function actionRead() {

        echo "aaaaaaaaaaa";
    }

    public function actionUpdate() {
        $temp = explode("/", $_SERVER['REQUEST_URI']);
        $id = $temp [sizeof($temp) - 1];
        $request_json = file_get_contents('php://input');
        $newRecord = CJSON::decode($request_json, true);
        $newRecord['collection']['id'] = $id;

        $owner_id = $newRecord ['collection']['optional'];
        $type = $newRecord ['collection']['type'];
        try {
            $cb = $this->couchBaseConnection();

            if ($type === 'profile') {
                $docID = $this->getDomain() . "/profiles/" . $owner_id;
                $cbRecord = $cb->get($docID); // get the old profile record from the database according to the docID string
                $oldRecord = CJSON::decode($cbRecord, true);
                $records = $oldRecord["profile"][0]["collections"];
                $collection_num = $this->getSelectedcollection($records, $id);

                if ($collection_num !== -1) {
                    $oldRecord["profile"][0]["collections"] [$collection_num] = $newRecord["collection"];
                }
            } else {
                $docID = $this->getDomain() . "/users/" . $owner_id;
                $cbRecord = $cb->get($docID); // get the old profile record from the database according to the docID string
                $oldRecord = CJSON::decode($cbRecord, true);
                $records = $oldRecord["user"][0]["collections"];
                $collection_num = $this->getSelectedcollection($records, $id);

                if ($collection_num !== -1) {
                    $oldRecord["user"][0]["collections"] [$collection_num] = $newRecord["collection"];
                }
            }
            if ($cb->set($docID, CJSON::encode($oldRecord))) {
                $this->sendResponse(204);
            } else {
                $this->sendResponse(500, "some thing wrong");
            }
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
    }

    public function getSelectedcollection($records, $id) {
        $i = 0;
        $collection_num = -1;
        foreach ($records as $record_id) {//assign each collection in profile's collections to record_id
            if ($record_id["id"] == $id) {
                //$records [$collection_num] = $collection; //replace the old collection with the new record's collection
                $collection_num = $i;
            }
            $i++;
        }
        return $collection_num;
    }

    public function actionDelete() {
        $info = CJSON::decode(file_get_contents('php://input'));
        //$info = file_get_contents('php://input');
        $infoDel = CJSON::decode($info, true);
        //$newRecord = CJSON::decode($request_json, true);
        $collectionDel_id = $infoDel[0];
        $collectionDelProfile = $infoDel[1];
        $type = $infoDel[2];

        try {
            $cb = $this->couchBaseConnection();
            if ($type === 'profile') {
                $docID = $this->getDomain() . "/profiles/" . $collectionDelProfile;
                $profileOwn = $cb->get($docID);
                $owner = CJSON::decode($profileOwn, true);
                $records = $owner["profile"][0]["collections"];
                $collection_num = $this->getSelectedcollection($records, $collectionDel_id);
                array_splice($owner["profile"][0]["collections"], $collection_num, 1);
                //$this->deletePhoto($collectionDel_id, $collectionDelProfile);
//                for ($i = 0; $i < sizeof($owner["profile"][0]["collections"]); $i++) {
//                    if ($owner["profile"][0]["collections"][$i]["id"] === $collectionDel_id) {
//                        array_splice($owner["profile"][0]["collections"], $i, 1);
//                    }
//                }
            } else {
                $docID = $this->getDomain() . "/users/" . $collectionDelProfile;
                $profileOwn = $cb->get($docID);
                $owner = CJSON::decode($profileOwn, true);
                $records = $owner["user"][0]["collections"];
                $collection_num = $this->getSelectedcollection($records, $collectionDel_id);
                array_splice($owner["user"][0]["collections"], $collection_num, 1);
            }

            if ($cb->set($docID, CJSON::encode($owner))) {
                $this->sendResponse(204);
            } else {
                $this->sendResponse(500, "some thing wrong");
            }
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
    }

    public function deletePhoto($collection_id, $profile_id) {
        $response = $this->getCollectionReults($collection_id, $profile_id);
        $responseArray = array();
        foreach ($response as $hit) {
            $id = $hit['id'];
            $collectionId = $hit['source']['doc']['collection_id'];
            $profileId = $hit['source']['doc']['owner_id'];
            if ($collectionId === $collection_id && $profileId === $profile_id) {
                $cb = $this->couchBaseConnection();
                if ($cb->delete($id)) {
                    array_unshift($responseArray, $id . ' delete succeed');
                } else {
                    array_unshift($responseArray, $id . ' delete failed');
                }
            }
        }
    }

    public function actionTest() {
        
    }

}

?>
