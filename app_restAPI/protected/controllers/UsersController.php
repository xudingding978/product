<?php

header('Access-Control-Allow-Origin: *');
header('Content-type: *');
header('Access-Control-Request-Method: *');
header('Access-Control-Allow-Methods: PUT, POST, OPTIONS, GET, DELETE');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

class UsersController extends Controller {

    const JSON_RESPONSE_ROOT_SINGLE = 'user';
    const JSON_RESPONSE_ROOT_PLURAL = 'users';

    public function actionIndex() {



        $urlController = new UrlController();

        $link = "http://" . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];

        $domain = $urlController->getDomain($link);

        $settings['log.enabled'] = true;
        // $settings['log.file'] = '/var/log/sherlock/newlogfile.log';
        $settings['log.level'] = 'debug';
        $sherlock = new Sherlock\Sherlock($settings);
        $sherlock->addNode(Yii::app()->params['elasticSearchNode']);

        //Build a new search request
        $request = $sherlock->search();

        $termQuery = Sherlock\Sherlock::queryBuilder()
                ->Match()
                ->field("type")
                ->query("user")
                ->boost(2.5);

        $request->index(Yii::app()->params['elasticSearchIndex'])
                ->type("couchbaseDocument")
                ->from(0)
                ->to(10)
                ->size(100)
                ->query($termQuery);


        $response = $request->execute();
        $results = '{"' . self::JSON_RESPONSE_ROOT_PLURAL . '":[';

        //Iterate over the hits and print out some data
        $i = 0;
        foreach ($response as $hit) {
            $results .= CJSON::encode($hit['source']['doc']['user'][0]);
            if (++$i !== count($response)) {
                $results .= ',';
            }
        }
        $results .= ']}';

        echo $this->sendResponse(200, $results);
    }

    public function actionCreate() {
        $request_json = file_get_contents('php://input');

        $request_arr = CJSON::decode($request_json, true);
    }

    public function actionSendNotification() {
        $request_array = (CJSON::decode(file_get_contents('php://input')));
        $administrators = $request_array[0];
        $editors = $request_array[1];
        $this->sendDeleteNotification($administrators[0]);
        $this->sendAddNotification($administrators[1]);
        $this->sendAddNotification($editors[1]);
        $this->sendDeleteNotification($editors[0]);
    }

    public function sendDeleteNotification($delData) {
        $cb = $this->couchBaseConnection();
        for ($i = 0; $i < sizeof($delData); $i++) {
            $docID = $this->getDomain() . "/users/" . $delData[$i][1];
            $old = $cb->get($docID);
            $userInfo = CJSON::decode($old, true);
            $notificationObject = array();
            $timeID = new DateTime();
            $time = date_timestamp_get($timeID);
            $notification_id = (string) (rand(10000, 99999)) . $time . $delData[$i][1];
            $notificationObject["notification_id"] = $notification_id;
            $notificationObject["user_id"] = $delData[$i][0];
            $notificationObject["time"] = date('D M d Y H:i:s') . ' GMT' . date('O') . ' (' . date('T') . ')';
            $notificationObject["type"] = "authority";
            $notificationObject["content"] = "del," . $delData[$i][2];
            $notificationObject["action_id"] = $delData[$i][0];
            $notificationObject["isRead"] = false;
            $conversationController = new ConversationsController();


            if (!isset($userInfo['user'][0]['notifications'])) {
                $userInfo['user'][0]['notifications'] = array();
            }
            array_unshift($userInfo['user'][0]["notifications"], $notificationObject);

            if (isset($userInfo['user'][0]["profiles"])) {
                for ($j = 0; $j < sizeof($userInfo['user'][0]["profiles"]); $j++) {
                    if ($userInfo['user'][0]["profiles"][$j]["profile_id"] === $delData[$i][0]) {
                        array_splice($userInfo['user'][0]["profiles"], $j, 1);
                    }
                }
            }
            if ($cb->set($docID, CJSON::encode($userInfo))) {
                if (!isset($userInfo['user'][0]['notification_setting']) || strpos($userInfo['user'][0]['notification_setting'], "email") !== false) {
                    $receiveEmail = $userInfo['user'][0]['email'];
                    $receiveName = $userInfo['user'][0]['display_name'];
                    $notificationCountFollow = 0;
                    $notificationCountMessage = 0;
                    $notificationCountAuthority = 0;
                    for ($j = 0; $j < sizeof($userInfo['user'][0]['notifications']); $j++) {
                        if ($userInfo['user'][0]['notifications'][$j]["isRead"] === false) {
                            if ($userInfo['user'][0]['notifications'][$j]["type"] === "follow" || $userInfo['user'][0]['notifications'][$j]["type"] === "unFollow") {
                                $notificationCountFollow++;
                            } else if ($userInfo['user'][0]['notifications'][$j]["type"] === "authority") {
                                $notificationCountAuthority++;
                            } else {
                                $notificationCountMessage++;
                            }
                        }
                    }

                    $conversationController->sendEmail($receiveEmail, $receiveName, $notificationCountFollow, $notificationCountMessage, $delData[$i][1], $notificationCountAuthority);
                }
            } else {
                echo $this->sendResponse(409, 'A record with id: "' . substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI'] . '/' . '" already exists');
            }
        }
    }

    public function sendAddNotification($addData) {
        $cb = $this->couchBaseConnection();
        for ($i = 0; $i < sizeof($addData); $i++) {
            $docID = $this->getDomain() . "/users/" . $addData[$i][1];
            $old = $cb->get($docID);
            $userInfo = CJSON::decode($old, true);
            $notificationObject = array();
            $timeID = new DateTime();
            $time = date_timestamp_get($timeID);
            $notification_id = (string) (rand(10000, 99999)) . $time . $addData[$i][1];
            $notificationObject["notification_id"] = $notification_id;
            $notificationObject["user_id"] = $addData[$i][0];
            $notificationObject["time"] = date('D M d Y H:i:s') . ' GMT' . date('O') . ' (' . date('T') . ')';
            $notificationObject["type"] = "authority";
            $notificationObject["content"] = "add," . $addData[$i][2];
            $notificationObject["action_id"] = $addData[$i][0];
            $notificationObject["isRead"] = false;
            $conversationController = new ConversationsController();


            if (!isset($userInfo['user'][0]['notifications'])) {
                $userInfo['user'][0]['notifications'] = array();
            }
            array_unshift($userInfo['user'][0]["notifications"], $notificationObject);


            if ($cb->set($docID, CJSON::encode($userInfo))) {
                if (!isset($userInfo['user'][0]['notification_setting']) || strpos($userInfo['user'][0]['notification_setting'], "email") !== false) {
                    $receiveEmail = $userInfo['user'][0]['email'];
                    $receiveName = $userInfo['user'][0]['display_name'];
                    $notificationCountFollow = 0;
                    $notificationCountMessage = 0;
                    $notificationCountAuthority = 0;
                    for ($j = 0; $j < sizeof($userInfo['user'][0]['notifications']); $j++) {
                        if ($userInfo['user'][0]['notifications'][$j]["isRead"] === false) {
                            if ($userInfo['user'][0]['notifications'][$j]["type"] === "follow" || $userInfo['user'][0]['notifications'][$j]["type"] === "unFollow") {
                                $notificationCountFollow++;
                            } else if ($userInfo['user'][0]['notifications'][$j]["type"] === "authority") {
                                $notificationCountAuthority++;
                            } else {
                                $notificationCountMessage++;
                            }
                        }
                    }

                    $conversationController->sendEmail($receiveEmail, $receiveName, $notificationCountFollow, $notificationCountMessage, $addData[$i][1], $notificationCountAuthority);
                }
            } else {
                echo $this->sendResponse(409, 'A record with id: "' . substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI'] . '/' . '" already exists');
            }
        }
    }

    public function actionReadCollection() {
        $request_array = CJSON::decode(file_get_contents('php://input'));
        $user_id = $request_array[0];
        try {
            $docIDDeep = $this->getDomain() . "/users/" . $user_id; //$id  is the page owner
            $cb = $this->couchBaseConnection();
            $oldDeep = $cb->get($docIDDeep); // get the old user record from the database according to the docID string
            $oldRecordDeep = CJSON::decode($oldDeep, true);
            if (isset($oldRecordDeep['user'][0]["profiles"])) {
                $profiles = $oldRecordDeep['user'][0]["profiles"];
            } else {
                $profiles = array();
            }
            $collections = array();
            for ($i = 0; $i < sizeof($profiles); $i++) {
                $doc = $this->getDomain() . "/profiles/" . $profiles[$i]["profile_id"];
                $profileString = $cb->get($doc);
                $profileData = CJSON::decode($profileString, true);
                if (isset($profileData['profile'][0]["collections"])) {
                    $collection = $profileData['profile'][0]["collections"];
                } else {
                    $collection = array();
                }
                $items = array();
                $collectionItem = array();
                for ($j = 0; $j < sizeof($collection); $j++) {
//                    $item = array();
//                    $item["id"] = $collection[$j]["id"];
//                    $item["title"] = $collection[$j]["title"];                   
                    array_push($collectionItem, $collection[$j]);
                }
                $items["collection"] = $collectionItem;
                $items["profile_id"] = $profiles[$i]["profile_id"];
                $items["profile_name"] = $profileData['profile'][0]["profile_name"];
                array_unshift($collections, $items);
            }

            $this->sendResponse(200, CJSON::encode($collections));
        } catch (Exception $exc) {

            echo $exc->getTraceAsString();
        }
    }

    //get profiles' name, id and images
    public function actionReadProfileData() {
        $request_array = CJSON::decode(file_get_contents('php://input'));
        $user_id = $request_array[0];
        try {
            $docIDDeep = $this->getDomain() . "/users/" . $user_id; //$id  is the page owner
            $cb = $this->couchBaseConnection();
            $oldDeep = $cb->get($docIDDeep); // get the old user record from the database according to the docID string
            $oldRecordDeep = CJSON::decode($oldDeep, true);
            if (isset($oldRecordDeep['user'][0]["profiles"])) {
                $profiles = $oldRecordDeep['user'][0]["profiles"];
            } else {
                $profiles = array();
            }
            $collections = array();
            for ($i = 0; $i < sizeof($profiles); $i++) {
                $doc = $this->getDomain() . "/profiles/" . $profiles[$i]["profile_id"];
                $profileString = $cb->get($doc);
                $profileData = CJSON::decode($profileString, true);
                if (isset($profileData['profile'][0]["collections"])) {
                    $collection = $profileData['profile'][0]["collections"];
                } else {
                    $collection = array();
                }
                $items = array();
                $collectionItem = array();
                for ($j = 0; $j < sizeof($collection); $j++) {
//                    $item = array();
//                    $item["id"] = $collection[$j]["id"];
//                    $item["title"] = $collection[$j]["title"];                   
                    array_push($collectionItem, $collection[$j]);
                }
                $items["collection"] = $collectionItem;
                $items["profile_id"] = $profiles[$i]["profile_id"];
                $items["profile_name"] = $profileData['profile'][0]["profile_name"];
                if (isset($profileData['profile'][0]["profile_pic_url"])) {
                    $items["profile_hero_cover_url"] = $profileData['profile'][0]["profile_pic_url"];
                }
                array_unshift($collections, $items);
            }

            $this->sendResponse(200, CJSON::encode($collections));
        } catch (Exception $exc) {

            echo $exc->getTraceAsString();
        }
    }

    public function actionSaveNotification() {
        $request_array = CJSON::decode(file_get_contents('php://input'));
        $request_array = CJSON::decode($request_array);
        $commenter_id = $request_array[0]; // it is the  login in user
        $notification = $request_array[1]; // it is the page owner

        try {
            $docIDDeep = $this->getDomain() . "/users/" . $commenter_id; //$id  is the page owner
            $cb = $this->couchBaseConnection();
            $oldDeep = $cb->get($docIDDeep); // get the old user record from the database according to the docID string
            $oldRecordDeep = CJSON::decode($oldDeep, true);

            $oldRecordDeep['user'][0]["notification_setting"] = $notification;

            if ($cb->set($docIDDeep, CJSON::encode($oldRecordDeep))) {
                
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
            $temp = explode("/", $_SERVER['REQUEST_URI']);
            $id = $temp [sizeof($temp) - 1];
            $doc_id = $this->getDomain() . "/users/" . $id;
            $domain = $this->getDomain();
            $reponse = $cb->get($doc_id);
            $respone_user = CJSON::decode($reponse, true);
            if (!isset($respone_user['user'][0]['is_top_ad_display'])) {
                $respone_user['user'][0]['is_top_ad_display'] = true;
            }
            if (isset($respone_user['user'][0]['profiles'])) {
                for ($i = 0; $i < sizeof($respone_user['user'][0]['profiles']); $i++) {

                    $url = $domain . "/profiles/" . $respone_user['user'][0]['profiles'][$i]['profile_id'];
                    $tempRecord = $cb->get($url);
                    $oldRecord = CJSON::decode($tempRecord, true);
                    if (isset($oldRecord['profile'][0]['profile_name']) && isset($oldRecord['profile'][0]['profile_pic_url'])) {
                        $respone_user['user'][0]['profiles'][$i]['profile_name'] = $oldRecord['profile'][0]['profile_name'];
                        $respone_user['user'][0]['profiles'][$i]['profile_pic'] = $oldRecord['profile'][0]['profile_pic_url'];
                    }
                }
            }
            if (isset($respone_user['user'][0]['groups'])) {
                for ($i = 0; $i < sizeof($respone_user['user'][0]['groups']); $i++) {

                    $url = $domain . "/groups/" . $respone_user['user'][0]['groups'][$i]['group_id'];
                    $tempRecord = $cb->get($url);
                    $oldRecord = CJSON::decode($tempRecord, true);
                    if (isset($oldRecord['groups'][0]['group_name']) && isset($oldRecord['groups'][0]['group_pic_url'])) {
                        $respone_user['user'][0]['groups'][$i]['group_name'] = $oldRecord['groups'][0]['group_name'];
                        $respone_user['user'][0]['groups'][$i]['group_pic_url'] = $oldRecord['groups'][0]['group_pic_url'];
                    }
                }
            }

            $respone_user_data = CJSON::encode($respone_user['user'][0]);
            if ($respone_user === null) {
                $result = '{"' . self::JSON_RESPONSE_ROOT_SINGLE . '":' . '}';
            } else {
                $result = '{"' . self::JSON_RESPONSE_ROOT_SINGLE . '":' . $respone_user_data . '}';
            }
            $this->sendResponse(200, $result);
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
    }

    public function actionUpdate() {
        $request_json = file_get_contents('php://input');
        $request_arr = CJSON::decode($request_json, true);
        $payload_json = CJSON::encode($request_arr['user'], true);
        $newRecord = CJSON::decode($payload_json);
        try {
            $cb = $this->couchBaseConnection();
            $temp = explode("/", $_SERVER['REQUEST_URI']);
            $id = $temp [sizeof($temp) - 1];
            $request_arr['user']['id'] = $id;
            $url = $this->getDomain() . "/users/" . $id;
            $oldRecord = $cb->get($url);
            $oldRecord = CJSON::decode($oldRecord, true);


            $oldRecord['user'][0]['selected_topics'] = $newRecord['selected_topics'];

//            $oldRecord['user'][0]['collections'] = $request_arr['user']['collections'];
            // $oldRecord['user'][0]['photo_url'] = $request_arr['user']['photo_url'];
            $oldRecord['user'][0]['description'] = $request_arr['user']['description'];
            $oldRecord['user'][0]['display_name'] = $request_arr['user']['display_name'];
            $oldRecord['user'][0]['first_name'] = $request_arr['user']['first_name'];
            $oldRecord['user'][0]['last_name'] = $request_arr['user']['last_name'];
            $oldRecord['user'][0]['about_me'] = $request_arr['user']['about_me'];
            $oldRecord['user'][0]['facebook_link'] = $newRecord['facebook_link'];
            $oldRecord['user'][0]['twitter_link'] = $newRecord['twitter_link'];
            $oldRecord['user'][0]['linkedin_link'] = $newRecord['linkedin_link'];
            $oldRecord['user'][0]['googleplus_link'] = $newRecord['googleplus_link'];
            $oldRecord['user'][0]['pinterest_link'] = $newRecord['pinterest_link'];
            $oldRecord['user'][0]['youtube_link'] = $newRecord['youtube_link'];
            $oldRecord['user'][0]['instagram_link'] = $newRecord['instagram_link'];
            $oldRecord['user'][0]['region'] = $request_arr['user']['region'];
            $oldRecord['user'][0]['email'] = $request_arr['user']['email'];
            $oldRecord['user'][0]['password'] = $request_arr['user']['password'];


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
            
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
    }

    public function actionOptions() {

        $statusHeader = 'HTTP/1.1 ' . 200 . ' ' . $this->getStatusCodeMessage(200);
        header($statusHeader);
// Set the content type
        header('Content-type:*');
// Set the Access Control for permissable domains
        header("Access-Control-Allow-Origin:*");
        header('Access-Control-Request-Method:*');
        header('Access-Control-Allow-Methods: DELETE, PUT, POST, OPTIONS, GET');
        header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

        echo "";
        Yii::app()->end();
    }

    public function getInputData($inputDataType, $inputData) {
        $tempInput = "";
        if ($inputDataType == "image/jpeg") {
            $tempInput = str_replace('data:image/jpeg;base64,', '', $inputData);
        } elseif ($inputDataType == "application/pdf") {
            $tempInput = str_replace('data:application/pdf;base64,', '', $inputData);
        } elseif ($inputDataType == "image/png") {
            $tempInput = str_replace('data:image/png;base64,', '', $inputData);
        } elseif ($inputDataType == "image/gif") {
            $tempInput = str_replace('data:image/gif;base64,', '', $inputData);
        }
        $data = base64_decode($tempInput);
        return $data;
    }

    public function actionTest() {
        echo "test";
    }

    protected function getImageIdentifier($imageInfo, $url) {
        $return_arr = array();
        if (strpos($imageInfo['mime'], 'jpeg')) {
            $im = imagecreatefromjpeg($url);
            $return_arr['type'] = 'image/jpeg';
        } elseif (strpos($imageInfo['mime'], 'png')) {
            $im = imagecreatefrompng($url);
            $return_arr['type'] = 'image/jpeg';
        } elseif (strpos($imageInfo['mime'], 'gif')) {
            $im = imagecreatefromgif($url);
            $return_arr['type'] = 'image/gif';
        } elseif (strpos($imageInfo['mime'], 'bmp')) {
            $im = imagecreatefromwbmp($url);
            $return_arr['type'] = 'image/jpeg';
        }
        $return_arr['im'] = $im;

        return $return_arr;
    }

    public function actionUpdateim() {
        $payloads_arr = CJSON::decode(file_get_contents('php://input'));
        $old_url = $payloads_arr['url'];
        $photo_name = $payloads_arr['newStyleImageName'];
        $mode = $payloads_arr['mode'];
        $user_id = $payloads_arr['id'];
        $imageInfor = getimagesize($old_url);
        $return_arr = $this->getImageIdentifier($imageInfor, $old_url);
        $type = $return_arr['type'];
        $photoController = new PhotosController();
        $data_arr = array();
        $data_arr['type'] = $type;
        $photo = $return_arr['im'];
        $compressed_photo = $photoController->compressPhotoData($type, $photo);
        $orig_size['width'] = imagesx($compressed_photo);
        $orig_size['height'] = imagesy($compressed_photo);
        $photoController->savePhotoInTypes($orig_size, $mode . '_original', $photo_name, $compressed_photo, $data_arr, $user_id, null, $type);
        $url = $photoController->savePhotoInTypes($orig_size, $mode, $photo_name, $compressed_photo, $data_arr, $user_id, null, $type);
        $cb = $this->couchBaseConnection_production();
        $oldRecord = CJSON::decode($cb->get($this->getDomain() . '/users/' . $user_id));
        if ($mode == 'user_picture') {
            $oldRecord['user'][0]['photo_url_large'] = null;
            $oldRecord['user'][0]['photo_url_large'] = $url;
        } elseif
        ($mode == 'user_cover') {
            $oldRecord['user'][0]['cover_url'] = null;
            $oldRecord['user'][0]['cover_url'] = $url;
        }
        if ($mode == 'user_cover') {
            $smallimage = $photoController->savePhotoInTypes($orig_size, 'user_cover_small', $photo_name, $compressed_photo, $data_arr, $user_id, null, $type);
            $oldRecord['user'][0]['cover_url_small'] = null;
            $oldRecord['user'][0]['cover_url_small'] = $smallimage;
        }
        $url = $this->getDomain() . '/users/' . $user_id;
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

    public function actionSaveimtos3() {
        $payloads_arr = CJSON::decode(file_get_contents('php://input'));
        $old_url = $payloads_arr['url'];
        $photo_name = $payloads_arr['newStyleImageName'];
        $mode = $payloads_arr['mode'];
        $user_id = $payloads_arr['id'];
        $imageInfor = getimagesize($old_url);
        $return_arr = $this->getImageIdentifier($imageInfor, $old_url);
        $type = $return_arr['type'];
        $photoController = new PhotosController();
        $data_arr = array();
        $data_arr['type'] = $type;
        $photo = $return_arr['im'];
        $compressed_photo = $photoController->compressPhotoData($type, $photo);
        $orig_size['width'] = imagesx($compressed_photo);
        $orig_size['height'] = imagesy($compressed_photo);
        $photoController->savePhotoInTypes($orig_size, $mode . '_original', $photo_name, $compressed_photo, $data_arr, $user_id, null, $type);
        $url = $photoController->savePhotoInTypes($orig_size, $mode, $photo_name, $compressed_photo, $data_arr, $user_id, null, $type);
    }

    public function actionUpdateStyleImage() {
        $payloads_arr = CJSON::decode(file_get_contents('php://input'));
        $photo_string = $payloads_arr['newStyleImageSource'];

        $photo_name = $payloads_arr['newStyleImageName'];
        $mode = $payloads_arr['mode'];
        $user_id = $payloads_arr['id'];
        $type = $payloads_arr['type'];
        $photoController = new PhotosController();

        $data_arr = $photoController->convertToString64($photo_string);
        $photo = imagecreatefromstring($data_arr['data']);
        $compressed_photo = $photoController->compressPhotoData($data_arr['type'], $photo);
        $orig_size['width'] = imagesx($compressed_photo);
        $orig_size['height'] = imagesy($compressed_photo);

        $photoController->savePhotoInTypes($orig_size, $mode . '_original', $photo_name, $compressed_photo, $data_arr, $user_id, null, $type);
        $url = $photoController->savePhotoInTypes($orig_size, $mode, $photo_name, $compressed_photo, $data_arr, $user_id, null, $type);

        $cb = $this->couchBaseConnection();
        $oldRecord = CJSON::decode($cb->get($this->getDomain() . '/users/' . $user_id));

        $photos = array();
        if ($mode == 'user_picture') {

            $oldRecord['user'][0]['photo_url_large'] = null;
            $oldRecord['user'][0]['photo_url_large'] = $url;
            $photos[0] = $url;
        } elseif ($mode == 'user_cover') {

            $oldRecord['user'][0]['cover_url'] = null;
            $oldRecord['user'][0]['cover_url'] = $url;
            $photos[0] = $url;
        }

        if ($mode == 'user_cover') {
            $smallimage = $photoController->savePhotoInTypes($orig_size, 'user_cover_small', $photo_name, $compressed_photo, $data_arr, $user_id, null, $type);
            $oldRecord['user'][0]['cover_url_small'] = null;
            $oldRecord['user'][0]['cover_url_small'] = $smallimage;
            $photos[1] = $url;
        }

        $url = $this->getDomain() . '/users/' . $user_id;

        $copy_of_oldRecord = unserialize(serialize($oldRecord));
        $tempUpdateResult = CJSON::encode($copy_of_oldRecord, true);
        
        
        if ($cb->delete($url)) {
            if ($cb->set($url, $tempUpdateResult)) {
                $this->sendResponse(200,$photos);
            } else {
                $this->sendResponse(500, 'something wrong');
            }
        } else {
            $cb->set($url, $tempUpdateResult);
            $this->sendResponse(500, 'something wrong');
        }
    }

    public function actionSetTopAds() {
        $request_array = CJSON::decode(file_get_contents('php://input'));
        $id = $request_array[0];

        $docIDDeep = $this->getDomain() . "/users/" . $id; //$id  is the page owner
        $cb = $this->couchBaseConnection();
        $oldDeep = $cb->get($docIDDeep); // get the old user record from the database according to the docID string
        $oldRecord = CJSON::decode($oldDeep, true);

        $oldRecord["user"][0]['is_top_ad_display'] = false;

        if ($cb->set($docIDDeep, CJSON::encode($oldRecord))) {
            $this->sendResponse(204);
        } else {
            $this->sendResponse(500, "some thing wrong");
        }
    }

    public function actionResetTopAds() {
        $request_array = CJSON::decode(file_get_contents('php://input'));
        $id = $request_array[0];

        $docIDDeep = $this->getDomain() . "/users/" . $id; //$id  is the page owner
        $cb = $this->couchBaseConnection();
        $oldDeep = $cb->get($docIDDeep); // get the old user record from the database according to the docID string
        $oldRecord = CJSON::decode($oldDeep, true);

        $oldRecord["user"][0]['is_top_ad_display'] = true;

        if ($cb->set($docIDDeep, CJSON::encode($oldRecord))) {
            $this->sendResponse(204);
        } else {
            $this->sendResponse(500, "some thing wrong");
        }
    }

}

?>
