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
    //    error_log(var_export($request_arr,true));
        $mega = $request_arr['meganew'];
        
    //     error_log(var_export($mega,true));
        if ($mega['type'] == "profile") {
            $this->createProfile($mega);
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
        }  

        else {
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
        if ($cb->add($docID, CJSON::encode($mega))) {
            $this->sendResponse(204);
        } else {
            $this->sendResponse(200, "some thing wronggggggggggggggggg");
        }
    }
    
    
     public function actionUpdateStyleImage() {
         
         
         
        $payloads_arr = CJSON::decode(file_get_contents('php://input'));
        
        $photo_string = $payloads_arr['newStyleImageSource'];
        $photo_name = $payloads_arr['newStyleImageName'];
        $mode = $payloads_arr['mode'];
        $owner_id = $payloads_arr['id'];
        $photoController = new PhotosController();
        $data_arr = $photoController->convertToString64($photo_string);
        $photo = imagecreatefromstring($data_arr['data']);
        $compressed_photo = $photoController->compressPhotoData($data_arr['type'], $photo);
        $orig_size['width'] = imagesx($compressed_photo);
        $orig_size['height'] = imagesy($compressed_photo);

        $url = $photoController->savePhotoInTypes($orig_size, $mode, $photo_name, $compressed_photo, $data_arr, $owner_id);
        error_log(var_export($url,true));
        $cb = $this->couchBaseConnection();
        $oldRecord = CJSON::decode($cb->get($this->getDomain() . '/profiles/' . $owner_id));

        if ($mode == 'profile_hero') {
            $oldRecord['profile'][0]['profile_hero_url'] = null;
            $oldRecord['profile'][0]['profile_hero_url'] = $url;
        } elseif
        ($mode == 'background') {
            $oldRecord['profile'][0]['profile_bg_url'] = null;
            $oldRecord['profile'][0]['profile_bg_url'] = $url;
        } elseif
        ($mode == 'profile_picture') {
            $oldRecord['profile'][0]['profile_pic_url'] = null;
            $oldRecord['profile'][0]['profile_pic_url'] = $url;
        }

        if ($mode == 'profile_hero') {
            $smallimage = $photoController->savePhotoInTypes($orig_size, 'hero', $photo_name, $compressed_photo, $data_arr, $owner_id, $mode);
            $oldRecord['profile'][0]['profile_hero_cover_url'] = null;
            $oldRecord['profile'][0]['profile_hero_cover_url'] = $smallimage;
        }

        $url = $this->getDomain() . '/profiles/' . $owner_id;
 error_log(var_export($url,true));
        $copy_of_oldRecord = unserialize(serialize($oldRecord));
        error_log(var_export($copy_of_oldRecord,true));
        $tempUpdateResult = CJSON::encode($copy_of_oldRecord, true);
         error_log(var_export($tempUpdateResult,true));

        if ($cb->delete($url)) {
            if ($cb->set($url, $tempUpdateResult)) {
                $this->sendResponse(204, $url);
            } else {
                $this->sendResponse(500, 'something wrong');
            }
        } else {
            $cb->set($url, $tempUpdateResult);
            $this->sendResponse(500, 'something wrong');
        }
    }

   
    



}

?>
