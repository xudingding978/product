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
          error_log("12325");
        
        
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
                
                    $response = $this->getRequestResult($request_string, self::JSON_RESPONSE_ROOT_PLURAL);
            }            
            $this->sendResponse(200, $response);
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
    }

    public function actionCreate() {
        error_log("fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
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
            error_log("ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd");
            $temp = explode("/", $_SERVER['REQUEST_URI']);
            $id = $temp [sizeof($temp) - 1];
            $cb = $this->couchBaseConnection();
            $docID = $this->getDomain() . "/profiles/" . $id;
            $reponse = $cb->get($docID);
            $reponse = '{"' . self::JSON_RESPONSE_ROOT_SINGLE . '":' . $reponse . '}';
            error_log(var_export($reponse,true));
            
            $this->sendResponse(200, $reponse);
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
    }

    public function actionUpdate() {
        $temp = explode("/", $_SERVER['REQUEST_URI']);
        $id = $temp [sizeof($temp) - 1];
        error_log("ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss");
        $newRecord = file_get_contents('php://input');
        $newRecord = CJSON::decode($newRecord, true);
        $newRecord['id'] = $id;
        if ($newRecord['mega']['type'] == 'user') {
            $this->updateUserRecord($newRecord);
        } elseif ($newRecord['mega']['type'] == 'profile') {
            //error_log(var_export($newRecord['mega']['type'],true));
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
            $this->sendResponse(204);
            
//            $cb = $this->couchBaseConnection();
//
//            if (!isset($newRecord['mega']['profile'])) {
//                //error_log(var_export($newRecord,true));
//                //$id = $newRecord['mega']['owner_id'];
//            } else {
//                $id = $newRecord['mega']['profile'][0]['id'];
//                $docID = $this->getDomain() . "/profiles/" . $id;
//                $oldRecord = $cb->get($docID);
//                $oldRecord = CJSON::decode($oldRecord, true);
//                $oldRecord['profile'] = $newRecord['mega']['profile'];
//                if ($cb->set($docID, CJSON::encode($oldRecord))) {
//                    $this->sendResponse(204);
//                } else {
//                    $this->sendResponse(500, "some thing wrong");
//                }
//            }
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

        $this->sendResponse(204);
    }

    public function actionaddlike() {
        $like = CJSON::decode(file_get_contents('php://input'));
        $like_arr = CJSON::decode($like, true);
        //error_log(var_export($like_arr[0],true));
        $like_people = $like_arr[0];
        $like_profile = $like_arr[1];
        $like_type = $like_arr[2];
        if ($like_type === "profile") {
            //error_log(var_export($like_type,true));
            try {
                $cb = $this->couchBaseConnection();
                $docID = $this->getDomain() . "/profiles/" . $like_profile;
                $old = $cb->get($docID); // get the old profile record from the database according to the docID string
                $oldRecord = CJSON::decode($old, true);
                if (!isset($oldRecord["people_like"])) {
                    //error_log("ssssssssssssssssss");            
                    $oldRecord["people_like"] = null;
                }

                $likeExist = strpos($oldRecord["people_like"], $like_people);
                //error_log(var_export($oldRecord["people_like"],true));
                if ($likeExist === false) {
                    if ($oldRecord["people_like"] !== null && $oldRecord["people_like"] !== "") {
                        $oldRecord["people_like"] = $oldRecord["people_like"] . ',' . $like_people;
                    } else {
                        $oldRecord["people_like"] = "" . $like_people;
                    }
                    //error_log(var_export($oldRecord["people_like"],true));            
                }
                $likeLength = sizeof(explode(",", $oldRecord["people_like"]));
                $oldRecord["likes_count"] = $likeLength;
                if ($cb->set($docID, CJSON::encode($oldRecord))) {
                    $this->sendResponse(200, $oldRecord["people_like"]);
                } else {
                    $this->sendResponse(500, "some thing wrong");
                }
            } catch (Exception $exc) {
                echo $exc->getTraceAsString();
            }
        } elseif ($like_type === "photo") {
            try {
                $cb = $this->couchBaseConnection();
                $docID = $this->getDomain() . "/" . $like_profile;
                $old = $cb->get($docID); // get the old profile record from the database according to the docID string
                $oldRecord = CJSON::decode($old, true);
                //error_log(var_export(is_array($oldRecord["people_like"]),true));
                if (!isset($oldRecord["people_like"]) || is_array($oldRecord["people_like"])) {
                 
                    $oldRecord["people_like"] = null;
                }
                //error_log(var_export($oldRecord["people_like"],true));
                $likeExist = strpos($oldRecord["people_like"], $like_people);
                //error_log(var_export($oldRecord["people_like"],true));
                if ($likeExist === false) {
                    if ($oldRecord["people_like"] !== null && $oldRecord["people_like"] !== "") {
                        $oldRecord["people_like"] = $oldRecord["people_like"] . ',' . $like_people;
                    } else {
                        $oldRecord["people_like"] = "" . $like_people;
                    }
                }
                $likeLength = sizeof(explode(",", $oldRecord["people_like"]));
                $oldRecord["likes_count"] = $likeLength;
                if ($cb->set($docID, CJSON::encode($oldRecord))) {
                  $people_like=   CJSON::encode($oldRecord["people_like"], true);
                    $this->sendResponse(200, $people_like);
                } else {
                    $this->sendResponse(500, "some thing wrong");
                }
            } catch (Exception $exc) {
                echo $exc->getTraceAsString();
            }
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
