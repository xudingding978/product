<?php

header("Access-Control-Allow-Origin: *");
header('Content-type: *');

header('Access-Control-Request-Method: *');
header('Access-Control-Allow-Methods: PUT, POST, OPTIONS,GET');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

class ProfilesController extends Controller {

    const JSON_RESPONSE_ROOT_SINGLE = 'profile';
    const JSON_RESPONSE_ROOT_PLURAL = 'profiles';

    public function actionIndex() {
//    $results = $this->getAllProfiles("profile");
        $settings['log.enabled'] = true;
// $settings['log.file'] = '/var/log/sherlock/newlogfile.log';
// $settings['log.level'] = 'debug';
        $sherlock = new Sherlock\Sherlock($settings);
        $sherlock->addNode(Yii::app()->params['elasticSearchNode']);

//Build a new search request
        $request = $sherlock->search();

//populate a Term query to start
        $termQuery = Sherlock\Sherlock::queryBuilder()
                ->Match()
                ->field("type")
                ->query("profile")
                ->boost(2.5);


//Set the index, type and from/to parameters of the request.
        $request->index(Yii::app()->params['elasticSearchIndex'])
                ->type("couchbaseDocument")
                ->from(0)
                ->to(10)
                ->size(100)
                ->query($termQuery);

        error_log($request->toJSON());

//Execute the search and return results
        $response = $request->execute();

//echo "Took: " . $response->took . "\r\n";
//echo "Number of Hits: " . count($response) . "\r\n";
//echo var_export($response);

        $results = '{"' . self::JSON_RESPONSE_ROOT_PLURAL . '":[';


//Iterate over the hits and print out some data
        $i = 0;
        foreach ($response as $hit) {
            $results .= CJSON::encode($hit['source']['doc']['profile'][0]);
            if (++$i !== count($response)) {
                $results .= ',';
            }
        }
        $results .= ']}';

        echo $this->sendResponse(200, $results);
    }

    public function actionCreate() {
        try {
            $request_json = file_get_contents('php://input');
            $request_arr = CJSON::decode($request_json, true);
            $tempProfile = $request_arr['profile'];
            sleep(1);
            $cb = $this->couchBaseConnection();
            $id = $tempProfile['id'];
            $domain = $this->getDomain();
            $docID = $domain . "/profiles/" . $id;
            $tempMega = $cb->get($docID);
            $mega = CJSON::decode($tempMega, true);
            $mega['profile'][0] = $tempProfile;  
            $mega['profile'][0]['collections']= array();
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
            $respone_client_data = str_replace("\/", "/", CJSON::encode($request_arr["profile"][0]));
            $result = '{"' . self::JSON_RESPONSE_ROOT_SINGLE . '":';
//Iterate over the hits and print out some data
            $result .=$respone_client_data;

            $result .= '}';


//       error_log(var_export($result, true));

            echo $this->sendResponse(200, $result);
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
    }

    public function actionUpdate() {

        try {
            $payloads_arr = CJSON::decode(file_get_contents('php://input'));
            $payload_json = CJSON::encode($payloads_arr['profile'], true);
            $newRecord = CJSON::decode($payload_json);
            $cb = $this->couchBaseConnection();
            $oldRecord = CJSON::decode($cb->get($this->getDomain() . $_SERVER['REQUEST_URI']));
            $id = $oldRecord['profile'][0]['id'];
            $oldfollower = $oldRecord['profile'][0]['followers'];
            $collections = $oldRecord['profile'][0]['collections'];
            $profile_bg_url = $oldRecord['profile'][0]['profile_bg_url'];
            $profile_pic_url = $oldRecord['profile'][0]['profile_pic_url'];
            $profile_hero_url = $oldRecord['profile'][0]['profile_hero_url'];
            $newRecord['profile_hero_url'] = $profile_hero_url;
            $newRecord['profile_bg_url'] = $profile_bg_url;
            $newRecord['profile_pic_url'] = $profile_pic_url;
            $newRecord['collections'] = $collections;
             $newRecord['followers'] = $oldfollower;
            $oldRecord['profile'][0] = null;
            $oldRecord['profile'][0] = $newRecord;

//            if (isset($payloads_arr['profile']['followers'][0])) {
//                if (sizeof($payloads_arr['profile']['followers']) > sizeof($oldRecord['profile'][0]['followers'])) {//insert comment
//                    array_unshift($oldRecord['profile'][0]['followers'], $payloads_arr['profile']['followers'][0]);
//                }
//            }
            $oldRecord['profile'][0]['id'] = $id;
            if ($cb->set($this->getDomain() . $_SERVER['REQUEST_URI'], CJSON::encode($oldRecord, true))) {
                $this->sendResponse(204);
            }
        } catch (Exception $exc) {
            
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

        $url = $photoController->savePhotoInTypes($orig_size, $mode, $photo_name, $compressed_photo, $data_arr, $owner_id);

        $cb = $this->couchBaseConnection();
        $oldRecord = CJSON::decode($cb->get($this->getDomain() . '/profiles/' . $owner_id));
        error_log(var_export($oldRecord['profile'][0], true));
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
                $this->sendResponse(204);
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
