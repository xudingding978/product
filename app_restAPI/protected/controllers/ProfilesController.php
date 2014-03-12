<?php

header("Access-Control-Allow-Origin: *");
header('Content-type: *');

header('Access-Control-Request-Method: *');
header('Access-Control-Allow-Methods: PUT, POST, OPTIONS,GET');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
Yii::import('ext.runactions.components.ERunActions');
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
            if ($oldRecord['profile'][0]['profile_name'] !== $newRecord['profile_name']) {
                $oldRecord['profile'][0]['profile_name'] = $newRecord['profile_name'];
                $setProfileName = TRUE;
            } else {
                $setProfileName = FALSE;
            }
            $oldRecord['profile'][0]['profile_category'] = $newRecord['profile_category'];
            $oldRecord['profile'][0]['profile_subcategory'] = $newRecord['profile_subcategory'];
            $oldRecord['profile'][0]['profile_country'] = $newRecord['profile_country'];
            $oldRecord['profile'][0]['profile_domains'] = $newRecord['profile_domains'];
            $oldRecord['profile'][0]['profile_country'] = $newRecord['profile_country'];
            $oldRecord['profile'][0]['profile_editors'] = $newRecord['profile_editors'];
             $oldRecord['profile'][0]['profile_editors'] = $newRecord['profile_editors'];
             $oldRecord['profile'][0]['profile_creater'] = $newRecord['profile_creater'];
             $oldRecord['creator'] == $newRecord['profile_creater'];
             $oldRecord['profile'][0]['profile_hours'] = $newRecord['profile_hours'];
             $oldRecord['profile'][0]['administrator'] = $newRecord['administrator'];             
            $oldRecord['profile'][0]['editor'] = $newRecord['editor'];
            $oldRecord['profile'][0]['profile_is_active'] = $newRecord['profile_is_active'];
            $oldRecord['profile'][0]['profile_is_deleted'] = $newRecord['profile_is_deleted'];
            $oldRecord['profile'][0]['profile_keywords'] = $newRecord['profile_keywords'];
            $oldRecord['profile'][0]['profile_video_num'] = $newRecord['profile_video_num'];
            $oldRecord['keywords'] = $newRecord['profile_keywords'];
            $oldRecord['profile'][0]['profile_keywords_num'] = $newRecord['profile_keywords_num'];
            $oldRecord['keyword_num'] = $newRecord['profile_keywords_num'];
            $oldRecord['profile'][0]['title_modify_time'] = $newRecord['title_modify_time'];


//            $oldRecord['profile'][0]['keywords'] = $newRecord['keywords'] ;
//            $oldRecord['keyword'] = $newRecord['keywords'];
            if ($oldRecord['profile'][0]['profile_package_name'] !== $newRecord['profile_package_name']) {
                $oldRecord['profile'][0]['profile_package_name'] = $newRecord['profile_package_name'];
                $boost = $this->setBoost($newRecord['profile_package_name']);
                $oldRecord['profile'][0]['profile_boost'] = $boost;
                $setPhotoBoost = TRUE;
            } else {
                $setPhotoBoost = FALSE;
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
            
            $oldRecord['profile'][0]['show_template'] = $newRecord['show_template'];
            
            $oldRecord['profile'][0]['show_keyword_id'] = $newRecord['show_keyword_id'];
            $cb->set($this->getDomain() . $_SERVER['REQUEST_URI'], CJSON::encode($oldRecord, true));           
//            if ($setProfileName) {
////                ERunActions::touchUrlExt('http://api.develop.trendsideas.com/profiles/backgroundProcess',$postData=null,$contentType=null,$httpClientConfig=array());
//                ERunActions::httpPOST('http://api.develop.trendsideas.com/profiles/backgroundProcess',array('profile_id'=>$oldRecord['profile'][0]['id'],'profile_name'=>$newRecord['profile_name']));
//            }
            if ($cb->set($this->getDomain() . $_SERVER['REQUEST_URI'], CJSON::encode($oldRecord, true))) {
                $this->sendResponse(204);
            }
//            error_log($setProfileName);
//            if ($setProfileName) {
//                $this->setProfileName($newRecord['profile_name'], $oldRecord['profile'][0]['id']);
//            }
//            if ($setPhotoBoost) {
//                $this->setPhotoBoost($oldRecord['profile'][0]['profile_boost'], $oldRecord['profile'][0]['id']);
//            }
        } catch (Exception $exc) {
            error_log($exc);
        }
    }
    
    public function actionBackgroundProcess() {
        $profile_id = filter_input(INPUT_POST,"profile_id",FILTER_SANITIZE_STRING);
        $profile_name = filter_input(INPUT_POST,"profile_name",FILTER_SANITIZE_STRING);                    
//        $response = $this->getProfileReults($profile_id);
        if (ERunActions::runBackground()) {
//            $start_time = date('D M d Y H:i:s') . ' GMT' . date('O') . ' (' . date('T') . ')';
//            $log_path = "error_log/".$start_time."log";
            $log_path = "/var/log/nginx/error.log";
//            $this->writeToLog($log_path, $profile_name);
            $data_arr = $this->findAllAccordingOwner($profile_id);
            while (sizeof($data_arr) > 0) {
                try {
//                $this->writeToLog($log_path, 'loop'.  sizeof($data_arr));
                $data_arr = $this->modifyOwnerID($data_arr, $profile_name, $log_path);
                } catch (Exception $e) {
//                    $this->writeToLog($log_path, 'error when loop');
                }
            }
        }
//        error_log('background');
//        error_log(filter_input(INPUT_POST,"profile_name",FILTER_SANITIZE_STRING));
    }
    
    public function modifyOwnerID($data_arr, $profile_name, $log_path) {
        $cb = $this->couchBaseConnection();   
                     
         for ($i = 0; $i < sizeof($data_arr); $i ++) {                          
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
            } catch(Exception $e) {                    
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

    public function actionGoogleMap() {
        $payloads_arr = CJSON::decode(file_get_contents('php://input'));
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
