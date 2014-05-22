<?php

header("Access-Control-Allow-Origin: *");
header('Content-type: *');

header('Access-Control-Request-Method: *');
header('Access-Control-Allow-Methods: PUT, POST, OPTIONS,GET');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
Yii::import('ext.runactions.components.ERunActions');

class GroupsController extends Controller {

    const JSON_RESPONSE_ROOT_SINGLE = 'profile';
    const JSON_RESPONSE_ROOT_PLURAL = 'profiles';

    public function actionIndex() {
    }

    public function actionCreate() {
        try {
            $request_json = file_get_contents('php://input');
            $request_arr = CJSON::decode($request_json, true);
            error_log(var_export($request_arr, true));
            $tempProfile = $request_arr['group'];
            $cb = $this->couchBaseConnection();
            $id = $tempProfile['id'];
            $domain = $this->getDomain();
            $docID = $domain . "/groups/" . $id;
            $tempMega = $cb->get($docID);
            $mega = CJSON::decode($tempMega, true);
            $mega['groups'][0] = $tempProfile;
            $mega['groups'][0]['collections'] = array();


            if ($cb->set($docID, CJSON::encode($mega))) {
                $this->sendResponse(204);
            } else {
                echo $this->sendResponse(409, 'A record with id: "' . substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI'] . '/' . '" already exists');
            }
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
            echo json_decode(file_get_contents('php://input'));
        }
    }

    public function actionRead() {
        try {
            $cb = $this->couchBaseConnection();
            $fileName = $this->getDomain() . $_SERVER['REQUEST_URI'];
            $reponse = $cb->get($fileName);
            $request_arr = CJSON::decode($reponse, true);
            
            error_log(var_export($request_arr, true));
            $respone_client_data = str_replace("\/", "/", CJSON::encode($request_arr["profile"][0]));
            $result = '{"' . self::JSON_RESPONSE_ROOT_SINGLE . '":';
//Iterate over the hits and print out some data
            if($request_arr!==null){
            $result .=$respone_client_data;
            }
            $result .= '}';

            echo $this->sendResponse(200, $result);
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
    }

    public function actionUpdate() {

        try {
        } catch (Exception $exc) {
        }
    }


    public function modifyOwnerID($data_arr, $profile_name, $log_path) {
        $cb = $this->couchBaseConnection();

        for ($i = 0; $i < sizeof($data_arr); $i++) {
            try {
                $docID = $data_arr[$i];
//            $this->writeToLog('/var/log/nginx/backprocess.log', $docID);
                $profileOwn = $cb->get($docID);

//            $this->writeToLog('/var/log/nginx/backprocess.log', $docID . ' get');
                $owner = CJSON::decode($profileOwn, true);
//            $this->writeToLog('/var/log/nginx/backprocess.log', $docID. 'decode');

                $owner['owner_title'] = $profile_name;
                if ($cb->set($docID, CJSON::encode($owner))) {
                    array_splice($data_arr, $i, 1);
//                    $this->writeToLog($log_path, $docID . 'update success');
                } else {
//                    $this->writeToLog($log_path, $docID . 'update fail'.'since');
                }
            } catch (Exception $e) {
//                $this->writeToLog($log_path, 'error when get data');
            }
        }
        return $data_arr;
    }

    public function findAllAccordingOwner($owner_id) {
        $request = $this->getElasticSearch();
        $must = Sherlock\Sherlock::queryBuilder()->QueryString()->query("\"$owner_id\"")
                ->default_field('couchbaseDocument.doc.owner_id');
        $bool = Sherlock\Sherlock::queryBuilder()->Bool()->must($must);
        $data_arr = array();
        for ($i = 0; $i < 2000; $i++) {
            $request->from($i * 50)
                    ->size(50);
            $request->query($bool);
            $response = $request->execute();
            foreach ($response as $hit) {
                //     echo $hit["score"] . ' - ' . $hit['id'] . "\r\n";
                array_push($data_arr, $hit['id']);
//                 $this->writeToLog('/var/log/nginx/backprocess.log', $hit['id']);
            }
            if (sizeof($response) == 0) {
                $i = 2000;
            }
        }
        return $data_arr;
    }

    public function setBoost($package_name) {
        $domain = $this->getDomain();
        $configuration = $this->getProviderConfigurationByName($domain, "package_details");
        $boost = $configuration[$package_name]['boost'];
        return $boost;
    }

    public function actionSetPhotoBoost($boost, $profile_id) {
        $response = $this->getProfileReults($profile_id);
        $responseArray = array();
        foreach ($response as $hit) {
            $id = $hit['source']['doc']['id'];
            $profileId = $hit['source']['doc']['owner_id'];
            if ($profileId === $profile_id) {
                $cb = $this->couchBaseConnection();
                $docID = $this->getDomain() . '/' . $id;
                $profileOwn = $cb->get($docID);
                $owner = CJSON::decode($profileOwn, true);
                $owner['boost'] = $boost;

                if ($cb->set($docID, CJSON::encode($owner))) {
                    array_unshift($responseArray, $id . ' update succeed');
                } else {
                    array_unshift($responseArray, $id . ' delete failed');
                }
            }
        }
    }

    public function actionSetProfileName() {
        $payloads_arr = CJSON::decode(file_get_contents('php://input'));
        $infoDel = CJSON::decode($payloads_arr, true);
        $profile_name = $infoDel[0];
        $profile_id = $infoDel[1];
        $response = $this->getProfileReults($profile_id);
        $responseArray = array();
        foreach ($response as $hit) {
            $id = $hit['source']['doc']['id'];
            $profileId = $hit['source']['doc']['owner_id'];
            if ($profileId === $profile_id) {
                $cb = $this->couchBaseConnection();
                $docID = $this->getDomain() . '/' . $id;
                $profileOwn = $cb->get($docID);
                $owner = CJSON::decode($profileOwn, true);
                $owner['owner_title'] = $profile_name;

                if ($cb->set($docID, CJSON::encode($owner))) {
                    array_unshift($responseArray, $id . ' update succeed');
                } else {
                    array_unshift($responseArray, $id . ' delete failed');
                }
            }
        }
    }
    
    public function actionDelete() {
        try {
            
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
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

        $url = $photoController->savePhotoInTypes($orig_size, $mode, $photo_name, $compressed_photo, $data_arr, $owner_id, $mode);

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

        $copy_of_oldRecord = unserialize(serialize($oldRecord));
        $tempUpdateResult = CJSON::encode($copy_of_oldRecord, true);

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

    public function writeToLog($fileName, $content) {
//   $my_file = '/home/devbox/NetBeansProjects/test/addingtocouchbase_success.log';
        $handle = fopen($fileName, 'a') or die('Cannot open file:  ' . $fileName);
        $output = "\n" . $content;
        fwrite($handle, $output);
        fclose($handle);

        unset($fileName, $content, $handle, $output);
    }

}

?>
