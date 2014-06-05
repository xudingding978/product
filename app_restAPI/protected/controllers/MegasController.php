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
                $response = $this->profileSetting($response, $this->getUserInput($requireParams[0]), "mega");
            }
            $this->sendResponse(200, $response);
        } catch (Exception $exc) {
            $result = '{"' . self::JSON_RESPONSE_ROOT_PLURAL . '":';
            $result .= '}';
            $this->sendResponse(200, $result );
        }
    }

    public function actionCreate() {
        $request_json = file_get_contents('php://input');
        $request_arr = CJSON::decode($request_json, true);
        $mega = $request_arr['mega'];
        $mega["id"] = str_replace("test", "", $mega["id"]);
        if ($mega['type'] == 'photo' || $mega['type'] == 'video') {
            $cb = $this->couchBaseConnection();
            $owner = "trendsideas.com/profiles/" . $mega['owner_id'];
            $profile = $cb->get($owner);
            if ($profile != null) {
                $profile_arr = CJSON::decode($profile);
                $country = $profile_arr['country'];
                $boost = $profile_arr['boost'];
                $mega['country'] = $country;
                $mega['boost'] = $boost;
            }
        }


        if ($mega['type'] == "profile") {
            $this->createProfile($mega);
        } elseif ($mega['type'] == "photo") {
            $this->createUploadedPhoto($mega);
        } elseif ($mega['type'] == "video") {
            $mega['videoes'][0]['id'] = $mega['id'];

            $keyword = $this->getProfileKeyword($mega['owner_id']);
            $mega['keyword'] = $keyword;

            $this->createUploadedVideo($mega);
        } elseif ($mega['type'] == 'pdf') {
            $mega['pdf'][0]['id'] = $mega['id'];

            $keyword = $this->getProfileKeyword($mega['owner_id']);
            $mega['keyword'] = $keyword;
//            $mega['pdf'][0]['pdf_url']  = $this->savePdfToS3($mega['pdf']);            
            $this->createUploadedPdf($mega);
        }
        $this->sendResponse(204);
    }

    public function actionRead() {
        try {

            $temp = explode("/", $_SERVER['REQUEST_URI']);
            $id = $temp [sizeof($temp) - 1];
            $cb = $this->couchBaseConnection();
            $docID = $this->getDomain() . "/profiles/" . $id;
            $reponse = $cb->get($docID);
            $mega_profile = CJSON::decode($reponse, true);

            $profile_editors = (isset($mega_profile["profile"][0]["profile_editors"])) ? $mega_profile["profile"][0]["profile_editors"] : '*@trendsideas.com';
            $profile_name = (isset($mega_profile["profile"][0]["profile_name"])) ? $mega_profile["profile"][0]["profile_name"] : 'Trends Ideas';
            $profile_pic = (isset($mega_profile["profile"][0]["profile_pic_url"])) ? $mega_profile["profile"][0]["profile_pic_url"] : 'http://s3.hubsrv.com/trendsideas.com/profiles/new-home-trends/profile_picture/profile_picture_192x192.jpg';
            $mega_profile['editors'] = $profile_editors;
            $mega_profile['owner_title'] = $profile_name;
            $mega_profile['owner_profile_pic'] = $profile_pic;
            $profile_editor = (isset($mega_profile["profile"][0]["profile_editor"])) ? $mega_profile["profile"][0]["profile_editor"] : '';
            $profile_administrator = (isset($mega_profile["profile"][0]["profile_administrator"])) ? $mega_profile["profile"][0]["profile_administrator"] : '';
            $profile_creator = (isset($mega_profile["profile"][0]["profile_creator"])) ? $mega_profile["profile"][0]["profile_creator"] : '';
            $mega_profile['profile_editor'] = $profile_editor;
            $mega_profile['profile_administrator'] = $profile_administrator;
            $mega_profile['profile_creator'] = $profile_creator;
            $mega_profile['owner_contact_email'] = $mega_profile["profile"][0]["owner_contact_email"];
            $mega_profile['owner_contact_cc_emails'] = $mega_profile["profile"][0]["owner_contact_cc_emails"];
            $mega_profile['owner_contact_bcc_emails'] = $mega_profile["profile"][0]["owner_contact_bcc_emails"];
            $reponse = CJSON::encode($mega_profile);
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


        $commentController = new CommentsController();
        $commentController->updateUserInfo($id);



        if ($newRecord['mega']['type'] == 'user') {
            $this->updateUserRecord($newRecord);
        } else if ($newRecord['mega']['type'] == 'profile') {
            $this->updateProfileRecord($newRecord);
        } else if ($newRecord['mega']['type'] == 'photo') {

            $photoController = new PhotosController();
            $photoController->photoUpdate($newRecord);
        } else if ($newRecord['mega']['type'] == 'video') {
            $videoController = new VideosController();
            $videoController->videoUpdate($newRecord);
        } else if ($newRecord['mega']['type'] == 'article') {
            $this->articleUpdate($newRecord);
        } else {
            $this->updateMega($newRecord);
        }
    }

    public function actionSetSaveCount() {
        $request_array = CJSON::decode(file_get_contents('php://input'));
        $id = $request_array[0];
        //$count = $request_array[2];
        $docIDDeep = $this->getDomain() . "/" . $id; //$id  is the page owner
        $cb = $this->couchBaseConnection();
        $oldDeep = $cb->get($docIDDeep); // get the old user record from the database according to the docID string
        $oldRecord = CJSON::decode($oldDeep, true);
        if (!isset($oldRecord['save_count'])) {
            $oldRecord["save_count"] = 1;
        } else {
            $oldRecord['save_count'] = $oldRecord['save_count'] + 1; //$mega['mega']['view_count'] + 1;  ,but it  will also add one when share 
        }
        if ($cb->set($docIDDeep, CJSON::encode($oldRecord))) {
            $this->sendResponse(200, CJSON::encode($oldRecord['save_count']));
        } else {
            $this->sendResponse(500, "some thing wrong");
        }
    }

    public function actionSetViewCount() {
        $request_array = CJSON::decode(file_get_contents('php://input'));
        $id = $request_array[0];
        //$count = $request_array[2];
        $docIDDeep = $this->getDomain() . "/" . $id; //$id  is the page owner
        $cb = $this->couchBaseConnection();
        $oldDeep = $cb->get($docIDDeep); // get the old user record from the database according to the docID string
        $oldRecord = CJSON::decode($oldDeep, true);
        if (!isset($oldRecord['view_count'])) {
            $oldRecord["view_count"] = 1;
        } else {
            $oldRecord['view_count'] = $oldRecord['view_count'] + 1; //$mega['mega']['view_count'] + 1;  ,but it  will also add one when share 
        }
        if (!isset($oldRecord['accessed'])) {
            $oldRecord["accessed"] = 1;
        }
        $oldRecord["accessed"] = date_timestamp_get(new DateTime());

        if ($cb->set($docIDDeep, CJSON::encode($oldRecord))) {
            $this->sendResponse(200, CJSON::encode($oldRecord['view_count']));
        } else {
            $this->sendResponse(500, "some thing wrong");
        }
    }

    public function actionSetProfileViewCount() {
        $request_array = CJSON::decode(file_get_contents('php://input'));
        $id = $request_array[0];
        //$count = $request_array[2];
        $docIDDeep = $this->getDomain() . "/profiles/" . $id; //$id  is the page owner
        $cb = $this->couchBaseConnection();
        $oldDeep = $cb->get($docIDDeep); // get the old user record from the database according to the docID string
        $oldRecord = CJSON::decode($oldDeep, true);
        if (!isset($oldRecord['view_count'])) {
            $oldRecord["view_count"] = 1;
        } else {
            $oldRecord['view_count'] = $oldRecord['view_count'] + 1; //$mega['mega']['view_count'] + 1;  ,but it  will also add one when share 
        }
        if (!isset($oldRecord['accessed'])) {
            $oldRecord["accessed"] = 1;
        }
        $oldRecord["accessed"] = date_timestamp_get(new DateTime());

        if ($cb->set($docIDDeep, CJSON::encode($oldRecord))) {
            $this->sendResponse(200, CJSON::encode($oldRecord['view_count']));
        } else {
            $this->sendResponse(500, "some thing wrong");
        }
    }

    public function articleUpdate($mega) {
        try {
            $cb = $this->couchBaseConnection();
            $temp = explode("/", $_SERVER['REQUEST_URI']);
            $id = $temp [sizeof($temp) - 1];
            $url = $this->getDomain() . "/" . $id;
            $tempRecord = $cb->get($url);
            $oldRecord = CJSON::decode($tempRecord, true);
            if (!isset($oldRecord['view_count'])) {
                $oldRecord["view_count"] = 1;
            } else {
                $oldRecord['view_count'] = $oldRecord['view_count'] + 1; //$mega['mega']['view_count'] + 1;  ,but it  will also add one when share 
            }

            if (!isset($oldRecord['accessed'])) {
                $oldRecord["accessed"] = 1;
            }
            $oldRecord["accessed"] = date_timestamp_get(new DateTime());

            if (!isset($oldRecord['share_count'])) {
                $oldRecord["share_count"] = 0;
            } else {
                $oldRecord["share_count"] = $mega['mega']['share_count'];   // //or using   $mega['mega']['share_count']; 
            }

            if ($cb->set($url, CJSON::encode($oldRecord))) {
                $this->sendResponse(204);
            } else {
                $this->sendResponse(500, "some thing wrong");
            }
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
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
            $id = $newRecord['mega']['owner_id'];

            $docID = $this->getDomain() . "/profiles/" . $id;
            $oldRecord = $cb->get($docID);
            $oldRecord = CJSON::decode($oldRecord, true);
            if (!isset($oldRecord['view_count'])) {
                $oldRecord["view_count"] = 1; //$newRecord['mega']['view_count'];
            } else {
                $oldRecord["view_count"] = $newRecord['mega']['view_count']; //$newRecord['mega']['view_count'];
            }
            if (!isset($oldRecord['accessed'])) {
                $oldRecord["accessed"] = 1;
            }
            $oldRecord["accessed"] = date_timestamp_get(new DateTime());

            if (!isset($oldRecord['share_count'])) {
                $oldRecord["share_count"] = 0;
            } else {
                $oldRecord["share_count"] = $newRecord['mega']['share_count'];
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

    public function createUploadedPdf($mega) {

        if (sizeof($mega) > 0) {
            $cb = $this->couchBaseConnection();

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

            if ($cb->add($this->getDomain() . '/' . $mega['id'], CJSON::encode($mega))) {
                echo $this->sendResponse(204);
            } else {
                echo $this->sendResponse(409, 'A record with id: "' . substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI'] . '/' . '" already exists');
            }
        }
    }

    public function createUploadedVideo($mega) {

        if (sizeof($mega) > 0) {
            $cb = $this->couchBaseConnection();

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

            if ($cb->add($this->getDomain() . '/' . $mega['id'], CJSON::encode($mega))) {
                echo $this->sendResponse(200);
            } else {
                echo $this->sendResponse(409, 'A record with id: "' . substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI'] . '/' . '" already exists');
            }
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
// try {
//            $cb = $this->couchBaseConnection();
//            $id = $newRecord['mega']['owner_id'];
//
//
//            $docID = $this->getDomain() . "/profiles/" . $id;
//            $oldRecord = $cb->get($docID);
//            $oldRecord = CJSON::decode($oldRecord, true);
//            $oldRecord["view_count"] = $newRecord['mega']['view_count'];     
//            $oldRecord["accessed"] = date_timestamp_get(new DateTime());
//            $oldRecord["share_count"] = $newRecord['mega']['share_count'];  
//
//            
//            if ($cb->set($docID, CJSON::encode($oldRecord))) {
//                $this->sendResponse(204);
//            } else {
//                $this->sendResponse(500, "some thing wrong");
//            }
//        } catch (Exception $exc) {
//            echo $exc->getTraceAsString();
//        }
        $this->sendResponse(204);
    }

    public function actionaddlike() {
        $like = CJSON::decode(file_get_contents('php://input'));
        $like_arr = CJSON::decode($like, true);

        $like_people = $like_arr[0];
        $like_profile = $like_arr[1];
        $like_type = $like_arr[2];
        if ($like_type === "profile") {

            try {
                $cb = $this->couchBaseConnection();
                $docID = $this->getDomain() . "/profiles/" . $like_profile;
                $old = $cb->get($docID); // get the old profile record from the database according to the docID string
                $oldRecord = CJSON::decode($old, true);
                if (!isset($oldRecord["people_like"])) {
                    $oldRecord["people_like"] = null;
                }

                $likeExist = strpos($oldRecord["people_like"], $like_people);
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
                    $people_like = CJSON::encode($oldRecord["people_like"], true);
                    $this->sendResponse(200, $people_like);
                } else {
                    $this->sendResponse(500, "some thing wrong");
                }
            } catch (Exception $exc) {
                echo $exc->getTraceAsString();
            }
        } else {
            try {
                $cb = $this->couchBaseConnection();
                $docID = $this->getDomain() . "/" . $like_profile;
                $old = $cb->get($docID); // get the old profile record from the database according to the docID string
                $oldRecord = CJSON::decode($old, true);

                if (!isset($oldRecord["people_like"]) || is_array($oldRecord["people_like"])) {

                    $oldRecord["people_like"] = null;
                }

                $likeExist = strpos($oldRecord["people_like"], $like_people);

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
                    $people_like = CJSON::encode($oldRecord["people_like"], true);
                    $this->sendResponse(200, $people_like);
                } else {
                    $this->sendResponse(500, "some thing wrong");
                }
            } catch (Exception $exc) {
                echo $exc->getTraceAsString();
            }
        }
    }

    public function actionunlike() {
        $like = CJSON::decode(file_get_contents('php://input'));
        $like_arr = CJSON::decode($like, true);

        $like_people = $like_arr[0];
        $like_profile = $like_arr[1];
        $like_type = $like_arr[2];
        if ($like_type === "profile") {

            try {
                $cb = $this->couchBaseConnection();
                $docID = $this->getDomain() . "/profiles/" . $like_profile;
                $old = $cb->get($docID); // get the old profile record from the database according to the docID string
                $oldRecord = CJSON::decode($old, true);
                if (!isset($oldRecord["people_like"])) {
                    $oldRecord["people_like"] = null;
                }

                $temp = explode(",", $oldRecord["people_like"]);
                $temp = array_diff($temp, array($like_people));
                $oldRecord["people_like"] = implode(",", $temp);
                $oldRecord["likes_count"] = count($temp);

                if ($cb->set($docID, CJSON::encode($oldRecord))) {
                    $people_like = CJSON::encode($oldRecord["people_like"], true);
                    $this->sendResponse(200, $people_like);
                } else {
                    $this->sendResponse(500, "some thing wrong");
                }
            } catch (Exception $exc) {
                echo $exc->getTraceAsString();
            }
        } else {
            try {
                $cb = $this->couchBaseConnection();
                $docID = $this->getDomain() . "/" . $like_profile;
                $old = $cb->get($docID); // get the old profile record from the database according to the docID string
                $oldRecord = CJSON::decode($old, true);

                if (!isset($oldRecord["people_like"]) || is_array($oldRecord["people_like"])) {
                    $oldRecord["people_like"] = null;
                }
                $temp = explode(",", $oldRecord["people_like"]);
                $temp = array_diff($temp, array($like_people));
                $oldRecord["people_like"] = implode(",", $temp);
                $oldRecord["likes_count"] = count($temp);

                if ($cb->set($docID, CJSON::encode($oldRecord))) {
                    $people_like = CJSON::encode($oldRecord["people_like"], true);
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
