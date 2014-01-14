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


//Execute the search and return results
        $response = $request->execute();

//echo "Took: " . $response->took . "\r\n";
//echo "Number of Hits: " . count($response) . "\r\n";
//echo var_export($response);

        $results = '{"' . self::JSON_RESPONSE_ROOT_PLURAL . '":[';


//Iterate over the hits and print out some data
        $i = 0;
        foreach ($response as $hit) {
            if (isset($hit['source']['doc']['profile'][0])) {
                $results .= CJSON::encode($hit['source']['doc']['profile'][0]);
                if (++$i !== count($response)) {
                    $results .= ',';
                }
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
            $cb = $this->couchBaseConnection();
            $id = $tempProfile['id'];
            $domain = $this->getDomain();
            $docID = $domain . "/profiles/" . $id;
            $tempMega = $cb->get($docID);
            $mega = CJSON::decode($tempMega, true);
            $mega['profile'][0] = $tempProfile;
            $mega['profile'][0]['followers'] = array();
            $mega['profile'][0]['collections'] = array();


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
            $oldRecord['profile'][0]['owner'] = $newRecord['owner'];
            $oldRecord['profile'][0]['owner_contact_bcc_emails'] = $newRecord['owner_contact_bcc_emails'];
            $oldRecord['profile'][0]['owner_contact_cc_emails'] = $newRecord['owner_contact_cc_emails'];
            $oldRecord['profile'][0]['owner_contact_email'] = $newRecord['owner_contact_email'];
            $oldRecord['profile'][0]['profile_about_us'] = $newRecord['profile_about_us'];
            $oldRecord['profile'][0]['profile_areas_serviced'] = $newRecord['profile_areas_serviced'];
            $oldRecord['profile'][0]['profile_boost'] = $newRecord['profile_boost'];
            $oldRecord['profile'][0]['profile_contact_first_name'] = $newRecord['profile_contact_first_name'];
            $oldRecord['profile'][0]['profile_contact_last_name'] = $newRecord['profile_contact_last_name'];
            $oldRecord['profile'][0]['profile_contact_number'] = $newRecord['profile_contact_number'];
            $oldRecord['profile'][0]['profile_name'] = $newRecord['profile_name'];
            $oldRecord['profile'][0]['profile_category'] = $newRecord['profile_category'];
            $oldRecord['profile'][0]['profile_subcategory'] = $newRecord['profile_subcategory'];
            $oldRecord['profile'][0]['profile_country'] = $newRecord['profile_country'];
            $oldRecord['profile'][0]['profile_domains'] = $newRecord['profile_domains'];
            $oldRecord['profile'][0]['profile_country'] = $newRecord['profile_country'];
            $oldRecord['profile'][0]['profile_editors'] = $newRecord['profile_editors'];
            $oldRecord['profile'][0]['profile_hours'] = $newRecord['profile_hours'];
            $oldRecord['profile'][0]['profile_is_active'] = $newRecord['profile_is_active'];
            $oldRecord['profile'][0]['profile_is_deleted'] = $newRecord['profile_is_deleted'];
            $oldRecord['profile'][0]['profile_keywords'] = $newRecord['profile_keywords'];
            $oldRecord['profile'][0]['profile_video_num'] = $newRecord['profile_video_num'];
            $oldRecord['keywords'] = $newRecord['profile_keywords'];
            $oldRecord['profile'][0]['profile_keywords_num'] = $newRecord['profile_keywords_num'];
            $oldRecord['keyword_num'] = $newRecord['profile_keywords_num'];

//            $oldRecord['profile'][0]['keywords'] = $newRecord['keywords'] ;
//            $oldRecord['keyword'] = $newRecord['keywords'];
            if ($oldRecord['profile'][0]['profile_package_name'] !== $newRecord['profile_package_name']) {
                $oldRecord['profile'][0]['profile_package_name'] = $newRecord['profile_package_name'];
                $boost = $this->setBoost($newRecord['profile_package_name']);
                $oldRecord['profile'][0]['profile_boost'] = $boost;
                $oldRecord['boost'] = $boost;
                $this->setPhotoBoost($boost, $oldRecord['profile'][0]['id']);
            }
            $oldRecord['profile'][0]['profile_partner_ids'] = $newRecord['profile_partner_ids'];
            $oldRecord['profile'][0]['profile_physical_address'] = $newRecord['profile_physical_address'];
            $oldRecord['profile'][0]['profile_suburb'] = $newRecord['profile_suburb'];
            $oldRecord['profile'][0]['profile_regoin'] = $newRecord['profile_regoin'];
            $oldRecord['profile'][0]['profile_website'] = $newRecord['profile_website'];
            $oldRecord['profile'][0]['profile_website_url'] = $newRecord['profile_website_url'];
            $oldRecord['profile'][0]['profile_cover_text'] = $newRecord['profile_cover_text'];
            $oldRecord['profile'][0]['profile_facebook_link'] = $newRecord['profile_facebook_link'];
            $oldRecord['profile'][0]['profile_twitter_link'] = $newRecord['profile_twitter_link'];
            $oldRecord['profile'][0]['profile_googleplus_link'] = $newRecord['profile_googleplus_link'];
            $oldRecord['profile'][0]['profile_pinterest_link'] = $newRecord['profile_pinterest_link'];
            $oldRecord['profile'][0]['profile_linkedin_link'] = $newRecord['profile_linkedin_link'];
            $oldRecord['profile'][0]['profile_youtube_link'] = $newRecord['profile_youtube_link'];
            $oldRecord['profile'][0]['profile_analytics_code'] = $newRecord['profile_analytics_code'];
            $oldRecord['profile'][0]['profile_google_map'] = $newRecord['profile_google_map'];

            $oldRecord['profile'][0]['show_keyword_id'] = $newRecord['show_keyword_id'];
            $cb->set($this->getDomain() . $_SERVER['REQUEST_URI'], CJSON::encode($oldRecord, true));
            if ($cb->set($this->getDomain() . $_SERVER['REQUEST_URI'], CJSON::encode($oldRecord, true))) {
                $this->sendResponse(204);
            }
        } catch (Exception $exc) {
            
        }
    }

    public function setBoost($package_name) {
        $domain = $this->getDomain();
        $configuration = $this->getProviderConfigurationByName($domain, "package_details");
        $boost = $configuration[$package_name]['boost'];
        return $boost;
    }

    public function setPhotoBoost($boost, $profile_id) {
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

    public function actionGoogleMap() {
        $payloads_arr = CJSON::decode(file_get_contents('php://input'));
        error_log(var_export($payloads_arr, true));
        $googleMap = $payloads_arr[0];
        $id = $payloads_arr[1];
        $cb = $this->couchBaseConnection();
        $docID = $this->getDomain() . '/profiles/' . $id;
        $oldRecord = CJSON::decode($cb->get($docID));

        $oldRecord['profile'][0]['profile_google_map'] = $googleMap;

        if ($cb->set($docID, CJSON::encode($oldRecord))) {
            $this->sendResponse(204);
        } else {
            $this->sendResponse(500, 'something wrong');
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

        if ($mode == 'profile_hero') {
            $oldRecord['profile'][0]['profile_hero_url'] = null;
            $oldRecord['profile'][0]['profile_hero_url'] = $url;
            error_log(var_export($url, true));
        } elseif
        ($mode == 'background') {
            $oldRecord['profile'][0]['profile_bg_url'] = null;
            $oldRecord['profile'][0]['profile_bg_url'] = $url;
            error_log(var_export($url, true));
        } elseif
        ($mode == 'profile_picture') {
            $oldRecord['profile'][0]['profile_pic_url'] = null;
            $oldRecord['profile'][0]['profile_pic_url'] = $url;
            error_log(var_export($url, true));
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

}

?>
