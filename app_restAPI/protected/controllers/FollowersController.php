
<?php

header("Access-Control-Allow-Origin: *");
header('Content-type: *');

header('Access-Control-Request-Method: *');
header('Access-Control-Allow-Methods: PUT, POST, OPTIONS,GET');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

class FollowersController extends Controller {

    const JSON_RESPONSE_ROOT_SINGLE = 'follower';
    const JSON_RESPONSE_ROOT_PLURAL = 'followers';

    public function actionIndex() {
        
    }

    public function actionCreate() {
        $this->sendResponse(204);
    }

    public function actionCreateFollower() {
        $request_array = CJSON::decode(file_get_contents('php://input'));
        $profile_id = $request_array[0];
        $request_arr = $request_array[1];
        $following = $this->followingProfile($profile_id, $request_arr);
        $follower = $this->followerProfile($profile_id, $request_arr);
        if ($following && $follower) {
            $this->sendResponse(204);
        } else {
            echo $this->sendResponse(409, 'A record with id: "' . substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI'] . '/' . '" already exists');
        }
    }

    public function followerProfile($profile_id, $request_arr) {                       //saving follower in profile
        $isSaving = false;
        try {
            $cb = $this->couchBaseConnection();
            $domain = $this->getDomain();
            $docID_profile = $domain . "/profiles/" . $profile_id;
            $tempMega_profile = $cb->get($docID_profile);
            $mega_profile = CJSON::decode($tempMega_profile, true);
            if (!isset($mega_profile['profile'][0]['followers'])) {
                $mega_profile['profile'][0]['followers'] = array();
            }

            $bool = 0;
            for ($i = 0; $i < sizeof($mega_profile['profile'][0]['followers']); $i++) {
                if ($request_arr["follower_id"] === $mega_profile['profile'][0]['followers'][$i]["follower_id"]) {
                    $bool = 1;
                    break;
                }
            }
            if (!$bool) {
                array_unshift($mega_profile['profile'][0]['followers'], $request_arr);
            }
            if ($cb->set($docID_profile, CJSON::encode($mega_profile))) {
                $isSaving = true;
            } else {
                
            }
            return $isSaving;
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
            echo json_decode(file_get_contents('php://input'));
        }
    }

    public function followingProfile($profile_id, $request_arr) {                      //saving following profile in follower user
        $isSaving = false;
        try {
            $cb = $this->couchBaseConnection();
            $domain = $this->getDomain();
            $docID_currentUser = $domain . "/users/" . $request_arr['follower_id'];

            $tempMega_currentUser = $cb->get($docID_currentUser);
            $mega_currentUser = CJSON::decode($tempMega_currentUser, true);

            if (!isset($mega_currentUser['user'][0]['followings'])) {
                $mega_currentUser['user'][0]['followings'] = array();
            }

            $follower_arr = $request_arr;
            $follower_arr['follower_id'] = $profile_id;
            $bool = 0;
            for ($i = 0; $i < sizeof($mega_currentUser['user'][0]['followings']); $i++) {
                if ($profile_id === $mega_currentUser['user'][0]['followings'][$i]["follower_id"]) {
                    $bool = 1;
                    break;
                }
            }
            if (!$bool) {
                array_unshift($mega_currentUser['user'][0]['followings'], $follower_arr);
            }

            if ($cb->set($docID_currentUser, CJSON::encode($mega_currentUser))) {
                $isSaving = true;
                ;
            }
            return $isSaving;
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
            echo json_decode(file_get_contents('php://input'));
        }
    }

    public function actionCreateUserFollower() {
        $request_array = CJSON::decode(file_get_contents('php://input'));
        $user_id = $request_array[0];
        $request_arr = $request_array[1];
        $following = $this->followingUser($user_id, $request_arr);
        $follower = $this->followerUser($user_id, $request_arr);


        if ($following && $follower) {

            $this->sendResponse(204);
        } else {
            echo $this->sendResponse(409, 'A record with id: "' . substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI'] . '/' . '" already exists');
        }
    }

    public function createNotification($follower_id, $ownerId, $time) {
        $notificationObject = array();
        $timeID = date_timestamp_get(new DateTime());

        $notification_id = (string) (rand(10000, 99999)) . $timeID . $follower_id;

        $notificationObject["notification_id"] = $notification_id;
        $notificationObject["user_id"] = $follower_id;
        $notificationObject["time"] = $time;
        $notificationObject["type"] = "follow";
        $notificationObject["content"] = "";
        $notificationObject["action_id"] = "";
        $notificationObject["isRead"] = false;


        $notificationInfo = $this->getDomain() . "/users/" . $ownerId;
        $cbs = $this->couchBaseConnection();
        $notificationInfoDeep = $cbs->get($notificationInfo); // get the old user record from the database according to the docID string
        $userInfo = CJSON::decode($notificationInfoDeep, true);

        $conversationController = new ConversationsController();
        if (!isset($userInfo['user'][0]['notification_setting']) || strpos($userInfo['user'][0]['notification_setting'], "follow") !== false) {
            if (!isset($userInfo['user'][0]['notifications'])) {
                $userInfo['user'][0]['notifications'] = array();
            }
            array_unshift($userInfo['user'][0]["notifications"], $notificationObject);

            if ($cbs->set($notificationInfo, CJSON::encode($userInfo))) {
                if (!isset($userInfo['user'][0]['notification_setting']) || strpos($userInfo['user'][0]['notification_setting'], "email") !== false) {

                    $receiveEmail = $userInfo['user'][0]['email'];
                    $receiveName = $userInfo['user'][0]['display_name'];
                    $notificationCountFollow = 0;
                    $notificationCountMessage = 0;
                    for ($i = 0; $i < sizeof($userInfo['user'][0]['notifications']); $i++) {
                        if ($userInfo['user'][0]['notifications'][$i]["isRead"] === false) {
                            if ($userInfo['user'][0]['notifications'][$i]["type"] === "follow" || $userInfo['user'][0]['notifications'][$i]["type"] === "unFollow") {
                                $notificationCountFollow++;
                            } else if ($userInfo['user'][0]['notifications'][$i]["type"] === "authority") {
                                $notificationCountAuthority++;
                            } else {
                                $notificationCountMessage++;
                            }
                        }
                    }
                    $conversationController->sendEmail($receiveEmail, $receiveName, $notificationCountFollow, $notificationCountMessage, $ownerId, $notificationCountAuthority);
                }
            } else {
                echo $this->sendResponse(409, 'A record with id: "' . substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI'] . '/' . '" already exists');
            }
        }
    }

    public function setFollowStatus($newRecord, $oldRecordDeep, $userFollower, $id, $like_user) {
        if (!isset($oldRecordDeep['user'][0]["followers"])) {
            $newRecord['follower_size'] = 0;
            $newRecord['follow_status'] = false;
            $newRecord['following_status'] = false;
            for ($j = 0; $j < sizeof($userFollower); $j++) {
                if ($userFollower !== null && $userFollower[$j]["follower_id"] === $id) {
                    $newRecord['following_status'] = true;
                    break;
                }
            }
        } else {
            if (($oldRecordDeep['user'][0]["followers"] === null) || ($oldRecordDeep['user'][0]["followers"] === "")) {
                $newRecord['follower_size'] = 0;
                $newRecord['follow_status'] = false;
                $newRecord['following_status'] = false;
                for ($j = 0; $j < sizeof($userFollower); $j++) {
                    if ($userFollower !== null && $userFollower[$j]["follower_id"] === $id) {
                        $newRecord['following_status'] = true;
                        break;
                    }
                }
            } else {

                $newRecord['follow_status'] = false;
                for ($j = 0; $j < sizeof($oldRecordDeep['user'][0]["followers"]); $j++) {
                    if ($oldRecordDeep['user'][0]["followers"][$j]["follower_id"] === $like_user) {
                        $newRecord['follow_status'] = true;
                        break;
                    }
                }
                $newRecord['follower_size'] = sizeof($oldRecordDeep['user'][0]["followers"]);
                $newRecord['following_status'] = false;
                for ($j = 0; $j < sizeof($userFollower); $j++) {
                    if ($userFollower !== null && $userFollower[$j]["follower_id"] === $id) {
                        $newRecord['following_status'] = true;
                        break;
                    }
                }
            }
        }
        return $newRecord;
    }

    public function getGeneralParam($cb, $oldRecord, $userFollower, $like_user) {
        $newRecord = array();
        for ($i = 0; $i < sizeof($oldRecord['user'][0]["followers"]); $i++) {
            if ($oldRecord['user'][0]["followers"][$i]["follower_id"] !== null) {
                $id = $oldRecord['user'][0]["followers"][$i]["follower_id"];

                $docIDDeep = $this->getDomain() . "/users/" . $id;
                $oldDeep = $cb->get($docIDDeep); // get the old user record from the database according to the docID string
                $oldRecordDeep = CJSON::decode($oldDeep, true);
                $newRecord[$i]['record_id'] = $id;
                $newRecord[$i]['name'] = $oldRecordDeep['user'][0]["display_name"];
                $newRecord[$i]['photo_url'] = $oldRecordDeep['user'][0]["photo_url_large"];
                if (isset($oldRecordDeep['user'][0]["cover_url_small"])) {
                    $newRecord[$i]['cover_url_small'] = $oldRecordDeep['user'][0]["cover_url_small"];
                } else {
                    $newRecord[$i]['cover_url_small'] = "http://develop.devbox.s3.amazonaws.com/profile_cover/default/defaultcover6.jpg";
                }
                if (!isset($oldRecordDeep['user'][0]["collections"])) {
                    $newRecord[$i]['collections_size'] = 0;
                } else {
                    if (($oldRecordDeep['user'][0]["collections"] === null) || ($oldRecordDeep['user'][0]["collections"] === "")) {

                        $newRecord[$i]['collections_size'] = 0;
                    } else {
                        $newRecord[$i]['collections_size'] = sizeof($oldRecordDeep['user'][0]["collections"]);
                    }
                }
                $newRecord[$i] = $this->setFollowStatus($newRecord[$i], $oldRecordDeep, $userFollower, $id, $like_user);  //set follow status
            }
        }
        return $newRecord;
    }

    public function getGeneralParamProfile($cb, $oldRecord, $userFollower, $like_user) {
        $newRecord = array();
        for ($i = 0; $i < sizeof($oldRecord['profile'][0]["followers"]); $i++) {
            if ($oldRecord['profile'][0]["followers"][$i]["follower_id"] !== null) {
                $id = $oldRecord['profile'][0]["followers"][$i]["follower_id"];

                $docIDDeep = $this->getDomain() . "/users/" . $id;
                $oldDeep = $cb->get($docIDDeep); // get the old user record from the database according to the docID string
                $oldRecordDeep = CJSON::decode($oldDeep, true);
                $newRecord[$i]['record_id'] = $id;
                $newRecord[$i]['name'] = $oldRecordDeep['user'][0]["display_name"];
                $newRecord[$i]['photo_url'] = $oldRecordDeep['user'][0]["photo_url_large"];
                if (isset($oldRecordDeep['user'][0]["cover_url_small"])) {
                    $newRecord[$i]['cover_url_small'] = $oldRecordDeep['user'][0]["cover_url_small"];
                } else {
                    $newRecord[$i]['cover_url_small'] = "http://develop.devbox.s3.amazonaws.com/profile_cover/default/defaultcover6.jpg";
                }
                if (!isset($oldRecordDeep['user'][0]["collections"])) {
                    $newRecord[$i]['collections_size'] = 0;
                } else {
                    if (($oldRecordDeep['user'][0]["collections"] === null) || ($oldRecordDeep['user'][0]["collections"] === "")) {

                        $newRecord[$i]['collections_size'] = 0;
                    } else {
                        $newRecord[$i]['collections_size'] = sizeof($oldRecordDeep['user'][0]["collections"]);
                    }
                }
                $newRecord[$i] = $this->setFollowStatus($newRecord[$i], $oldRecordDeep, $userFollower, $id, $like_user);  //set follow status
            }
        }
        return $newRecord;
    }

    public function actionRead() {
        $like = CJSON::decode(file_get_contents('php://input'));
        $likeArr = CJSON::decode($like, true);

        $like_user = $likeArr[0];
        $like_arr = $likeArr[1];
        try {
            $cb = $this->couchBaseConnection();

            $docID = $this->getDomain() . "/users/" . $like_arr;
            $old = $cb->get($docID); // get the old user record from the database according to the docID string
            $oldRecord = CJSON::decode($old, true);
            if (!isset($oldRecord['user'][0]["followers"])) {

                $oldRecord['user'][0]["followers"] = array();
            }
            $docIDUser = $this->getDomain() . "/users/" . $like_user;
            $oldUser = $cb->get($docIDUser); // get the old user record from the database according to the docID string
            $oldRecordUser = CJSON::decode($oldUser, true);
            if (!isset($oldRecordUser['user'][0]["followers"]) || $oldRecordUser['user'][0]["followers"] === "") {
                $userFollower = null;
            } else {
                $userFollower = $oldRecordUser['user'][0]["followers"];
            }


            $newRecord = $this->getGeneralParam($cb, $oldRecord, $userFollower, $like_user);

            if ($newRecord === null) {
                $this->sendResponse(204);
            } else {
                $this->sendResponse(200, CJSON::encode($newRecord));
            }
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
    }

    public function actionReadProfileFollower() {
        $like = CJSON::decode(file_get_contents('php://input'));
        $likeArr = CJSON::decode($like, true);

        $like_user = $likeArr[0];
        $like_arr = $likeArr[1];
        try {
            $cb = $this->couchBaseConnection();

            $docID = $this->getDomain() . "/profiles/" . $like_arr;
            $old = $cb->get($docID); // get the old user record from the database according to the docID string
            $oldRecord = CJSON::decode($old, true);
            if (!isset($oldRecord['profile'][0]["followers"])) {

                $oldRecord['profile'][0]["followers"] = array();
            }
            $docIDUser = $this->getDomain() . "/users/" . $like_user;
            $oldUser = $cb->get($docIDUser); // get the old user record from the database according to the docID string
            $oldRecordUser = CJSON::decode($oldUser, true);
            if (!isset($oldRecordUser['user'][0]["followers"]) || $oldRecordUser['user'][0]["followers"] === "") {
                $userFollower = null;
            } else {
                $userFollower = $oldRecordUser['user'][0]["followers"];
            }


            $newRecord = $this->getGeneralParamProfile($cb, $oldRecord, $userFollower, $like_user);

            if ($newRecord === null) {
                $this->sendResponse(204);
            } else {
                $this->sendResponse(200, CJSON::encode($newRecord));
            }
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
    }

    public function setFollowParam($id, $like_user, $oldRecordDeep, $userFollower, $newRecord) {
        if (!isset($oldRecordDeep['user'][0]["followers"])) {
            $newRecord['follower_size'] = 0;
            $newRecord['follow_status'] = false;
            $newRecord['following_status'] = false;
            for ($j = 0; $j < sizeof($userFollower); $j++) {
                if ($userFollower !== null && $userFollower[$j]["follower_id"] === $id) {
                    $newRecord['following_status'] = true;
                    break;
                }
            }
        } else {
            if (($oldRecordDeep['user'][0]["followers"] === null) || ($oldRecordDeep['user'][0]["followers"] === "")) {
                $newRecord['follower_size'] = 0;
                $newRecord['follow_status'] = false;
                $newRecord['following_status'] = false;
                for ($j = 0; $j < sizeof($userFollower); $j++) {
                    if ($userFollower !== null && $userFollower[$j]["follower_id"] === $id) {
                        $newRecord['following_status'] = true;
                        break;
                    }
                }
            } else {
                $newRecord['follow_status'] = false;
                for ($j = 0; $j < sizeof($oldRecordDeep['user'][0]["followers"]); $j++) {
                    if ($oldRecordDeep['user'][0]["followers"][$j]["follower_id"] === $like_user) {
                        $newRecord['follow_status'] = true;
                        break;
                    }
                }
                $newRecord['following_status'] = false;
                for ($j = 0; $j < sizeof($userFollower); $j++) {
                    if ($userFollower !== null && $userFollower[$j]["follower_id"] === $id) {
                        $newRecord['following_status'] = true;
                        break;
                    }
                }
                $newRecord['follower_size'] = sizeof($oldRecordDeep['user'][0]["followers"]);
            }
        }
        return $newRecord;
    }

    public function setUserFollowStatus($cb, $id, $like_user, $newRecord, $userFollower) {

        $docIDDeep = $this->getDomain() . "/users/" . $id;
        $oldDeep = $cb->get($docIDDeep); // get the old user record from the database according to the docID string
        $oldRecordDeep = CJSON::decode($oldDeep, true);
        $newRecord['record_id'] = $id;
        $newRecord['name'] = $oldRecordDeep['user'][0]["display_name"];
        $newRecord['photo_url'] = $oldRecordDeep['user'][0]["photo_url_large"];
        if (isset($oldRecordDeep['user'][0]["cover_url_small"])) {
            $newRecord['cover_url_small'] = $oldRecordDeep['user'][0]["cover_url_small"];
        } else {
            $newRecord['cover_url_small'] = "http://develop.devbox.s3.amazonaws.com/profile_cover/default/defaultcover6.jpg";
        }
        if (!isset($oldRecordDeep['user'][0]["collections"])) {
            $newRecord['collections_size'] = 0;
        } else {

            if (($oldRecordDeep['user'][0]["collections"] === null) || ($oldRecordDeep['user'][0]["collections"] === "")) {

                $newRecord['collections_size'] = 0;
            } else {
                $newRecord['collections_size'] = sizeof($oldRecordDeep['user'][0]["collections"]);
            }
        }
        $newRecord = $this->setFollowParam($id, $like_user, $oldRecordDeep, $userFollower, $newRecord);
        return $newRecord;
    }

    public function setProfileFollowStaus($cb, $id, $like_user, $newRecord) {

        $docIDDeep = $this->getDomain() . "/profiles/" . $id;
        $oldDeep = $cb->get($docIDDeep); // get the old user record from the database according to the docID string
        $oldRecordDeep = CJSON::decode($oldDeep, true);
        $newRecord['record_id'] = $id;
        $newRecord['name'] = $oldRecordDeep['profile'][0]["profile_name"];
        $newRecord['photo_url'] = $oldRecordDeep['profile'][0]["profile_pic_url"];
        if (isset($oldRecordDeep['profile'][0]["profile_hero_cover_url"])) {
            $newRecord['cover_url_small'] = $oldRecordDeep['profile'][0]["profile_hero_cover_url"];
        } else {
            $newRecord['cover_url_small'] = $oldRecordDeep['profile'][0]["profile_hero_url"];
        }
        $newRecord['following_status'] = false;
        if (!isset($oldRecordDeep['profile'][0]["profile_partner_ids"])) {
            $newRecord['partner_size'] = 0;
        } else {
            if ($oldRecordDeep['profile'][0]["profile_partner_ids"] === null || $oldRecordDeep['profile'][0]["profile_partner_ids"] === '') {
                $newRecord['partner_size'] = 0;
            } else {
                $partner = explode(",", $oldRecordDeep['profile'][0]["profile_partner_ids"]);
                $newRecord['partner_size'] = sizeof($partner);
            }
        }
        if (!isset($oldRecordDeep['profile'][0]["collections"])) {
            $newRecord['collections_size'] = 0;
        } else {

            if (($oldRecordDeep['profile'][0]["collections"] === null) || ($oldRecordDeep['profile'][0]["collections"] === "")) {

                $newRecord['collections_size'] = 0;
            } else {
                $newRecord['collections_size'] = sizeof($oldRecordDeep['profile'][0]["collections"]);
            }
        }
        if (!isset($oldRecordDeep['profile'][0]["followers"])) {
            $newRecord['follower_size'] = 0;
            $newRecord['follow_status'] = false;
        } else {
            if (($oldRecordDeep['profile'][0]["followers"] === null) || ($oldRecordDeep['profile'][0]["followers"] === "")) {
                $newRecord['follower_size'] = 0;
                $newRecord['follow_status'] = false;
            } else {
                $newRecord['follow_status'] = false;
                for ($j = 0; $j < sizeof($oldRecordDeep['profile'][0]["followers"]); $j++) {
                    if ($oldRecordDeep['profile'][0]["followers"][$j]["follower_id"] === $like_user) {
                        $newRecord['follow_status'] = true;
                        break;
                    }
                }
                $newRecord['follower_size'] = sizeof($oldRecordDeep['profile'][0]["followers"]);
            }
        }
        return $newRecord;
    }

    public function setUserOrProfile($cb, $oldRecord, $like_user, $userFollower) {
        $newRecord = array();

        for ($i = 0; $i < sizeof($oldRecord['user'][0]["followings"]); $i++) {
            if ($oldRecord['user'][0]["followings"][$i]["follower_id"] !== null) {
                $id = $oldRecord['user'][0]["followings"][$i]["follower_id"];
                $newRecord[$i]['type'] = $oldRecord['user'][0]["followings"][$i]['type'];


                if ($oldRecord['user'][0]["followings"][$i]['type'] === "user") {

                    $newRecord[$i] = $this->setUserFollowStatus($cb, $id, $like_user, $newRecord[$i], $userFollower);
                } else {
                    $newRecord[$i] = $this->setProfileFollowStaus($cb, $id, $like_user, $newRecord[$i]);
                }
            }
        }
        return $newRecord;
    }

    public function actionReadPic() {
        $like_arr = CJSON::decode(file_get_contents('php://input'));

        try {
            $cb = $this->couchBaseConnection();
            $docID = $this->getDomain() . "/users/" . $like_arr;
            $old = $cb->get($docID); // get the old user record from the database according to the docID string
            $oldRecord = CJSON::decode($old, true);

            $newRecord = null;
            if (!isset($oldRecord['user'][0]["followers"])) {
                $oldRecord['user'][0]["followers"] = array();
            }

            $followerLength = sizeof($oldRecord['user'][0]["followers"]);

            for ($i = 0; $i < $followerLength; $i++) {
                $id = $oldRecord['user'][0]["followers"][$i]["follower_id"];
                $docIDDeep = $this->getDomain() . "/users/" . $id;
                $oldDeep = $cb->get($docIDDeep); // get the old user record from the database according to the docID string
                $oldRecordDeep = CJSON::decode($oldDeep, true);
                $newRecord[$i]['record_id'] = $id;
                $newRecord[$i]['name'] = $oldRecordDeep['user'][0]["display_name"];
                $newRecord[$i]['photo_url'] = $oldRecordDeep['user'][0]["photo_url_large"];
            }

            if ($newRecord === null) {
                $this->sendResponse(204);
            } else {

                $this->sendResponse(200, CJSON::encode($newRecord));
            }
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
    }

    public function actionReadProfilePic() {
        $like_arr = CJSON::decode(file_get_contents('php://input'));

        try {
            $cb = $this->couchBaseConnection();
            $docID = $this->getDomain() . "/profiles/" . $like_arr;
            $old = $cb->get($docID); // get the old user record from the database according to the docID string
            $oldRecord = CJSON::decode($old, true);
            $newRecord = null;
            if (!isset($oldRecord['profile'][0]["followers"])) {
                $oldRecord['profile'][0]["followers"] = array();
            }

            $followerLength = sizeof($oldRecord['profile'][0]["followers"]);
            for ($i = 0; $i < $followerLength; $i++) {
                $id = $oldRecord['profile'][0]["followers"][$i]["follower_id"];
                $docIDDeep = $this->getDomain() . "/users/" . $id;
                $oldDeep = $cb->get($docIDDeep); // get the old user record from the database according to the docID string
                $oldRecordDeep = CJSON::decode($oldDeep, true);
                $newRecord[$i]['record_id'] = $id;
                $newRecord[$i]['name'] = $oldRecordDeep['user'][0]["display_name"];
                $newRecord[$i]['isChange'] = false;
                $newRecord[$i]['photo_url'] = $oldRecordDeep['user'][0]["photo_url_large"];
            }
            if ($newRecord === null) {
                $this->sendResponse(204);
            } else {
                $this->sendResponse(200, CJSON::encode($newRecord));
            }
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
    }

    public function actionReadPhoto() {
        $like_arr = CJSON::decode(file_get_contents('php://input'));

        try {
            $cb = $this->couchBaseConnection();
            $docID = $this->getDomain() . "/profiles/" . $like_arr;
            $old = $cb->get($docID); // get the old user record from the database according to the docID string
            $oldRecord = CJSON::decode($old, true);

            $newRecord = null;
            if (!isset($oldRecord['profile'][0]["followers"])) {
                $oldRecord['profile'][0]["followers"] = array();
            }
            if (sizeof($oldRecord['profile'][0]["followers"]) < 6) {
                $followerLength = sizeof($oldRecord['profile'][0]["followers"]);
            } else {
                $followerLength = 6;
            }
            for ($i = 0; $i < $followerLength; $i++) {
                $id = $oldRecord['profile'][0]["followers"][$i]["follower_id"];
                $docIDDeep = $this->getDomain() . "/users/" . $id;
                $oldDeep = $cb->get($docIDDeep); // get the old user record from the database according to the docID string
                $oldRecordDeep = CJSON::decode($oldDeep, true);
                $newRecord[$i]['record_id'] = $id;
                $newRecord[$i]['name'] = $oldRecordDeep['user'][0]["display_name"];
                $newRecord[$i]['photo_url'] = $oldRecordDeep['user'][0]["photo_url_large"];
            }

            if ($newRecord === null) {
                $this->sendResponse(204);
            } else {

                $this->sendResponse(200, CJSON::encode($newRecord));
            }
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
    }

    public function actionReadFollowing() {

        $like = CJSON::decode(file_get_contents('php://input'));
        $likeArr = CJSON::decode($like, true);
        $like_user = $likeArr[0];
        $like_arr = $likeArr[1];

        try {
            $cb = $this->couchBaseConnection();
            $docID = $this->getDomain() . "/users/" . $like_arr;
            $old = $cb->get($docID); // get the old user record from the database according to the docID string
            $oldRecord = CJSON::decode($old, true);
            if (!isset($oldRecord['user'][0]["followings"])) {
                $oldRecord['user'][0]["followings"] = array();
            }

            $docIDUser = $this->getDomain() . "/users/" . $like_user;
            $oldUser = $cb->get($docIDUser); // get the old user record from the database according to the docID string
            $oldRecordUser = CJSON::decode($oldUser, true);

            if (!isset($oldRecordUser['user'][0]["followers"]) || $oldRecordUser['user'][0]["followers"] === "") {
                $userFollower = null;
            } else {
                $userFollower = $oldRecordUser['user'][0]["followers"];
            }

            $newRecord = $this->setUserOrProfile($cb, $oldRecord, $like_user, $userFollower);

            if ($newRecord === null) {
                $this->sendResponse(204);
            } else {

                $this->sendResponse(200, CJSON::encode($newRecord));
            }
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
    }

    //10363413462  10570790799   10672374646  10803527458
    public function actionUpdate() {
        
    }

    public function actionDelete() {
        $this->sendResponse(204);
    }

    public function actionTest() {
        echo "test";
    }

    public function actionDeleteFollower() {
        $request_array = CJSON::decode(file_get_contents('php://input'));
        $profile_id = $request_array[0];
        $user_id = $request_array[1];
        $unFollowing = $this->unFollowingProfile($profile_id, $user_id);
        $unFollower = $this->unFollowerProfile($profile_id, $user_id);
        if ($unFollowing && $unFollower) {
            $this->sendResponse(204);
        } else {
            echo $this->sendResponse(409, 'A record with id: "' . substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI'] . '/' . '" already exists');
        }
    }

    public function unFollowerProfile($profile_id, $user_id) {                                               //unfollow follower user in profile
        $isDelete = false;
        try {
            $cb = $this->couchBaseConnection();
            $domain = $this->getDomain();
            $docID_profile = $domain . "/profiles/" . $profile_id;
            $tempMega_profile = $cb->get($docID_profile);
            $mega_profile = CJSON::decode($tempMega_profile, true);
            for ($i = 0; $i < sizeof($mega_profile["profile"][0]["followers"]); $i++) {
                if ($mega_profile["profile"][0]["followers"][$i]["follower_id"] === $user_id) {
                    array_splice($mega_profile["profile"][0]["followers"], $i, 1);
                }
            }
            if ($cb->set($docID_profile, CJSON::encode($mega_profile))) {
                $isDelete = true;
            }
            return $isDelete;
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
            echo json_decode(file_get_contents('php://input'));
        }
    }

    public function unFollowingProfile($profile_id, $user_id) {                                            //unfollow following profile in user
        $isDelete = false;
        try {
            $cb = $this->couchBaseConnection();
            $domain = $this->getDomain();
            $docID_currentUser = $domain . "/users/" . $user_id;
            $tempMega_currentUser = $cb->get($docID_currentUser);
            $mega_currentUser = CJSON::decode($tempMega_currentUser, true);
            for ($i = 0; $i < sizeof($mega_currentUser["user"][0]["followings"]); $i++) {
                if ($mega_currentUser["user"][0]["followings"][$i]["follower_id"] === $profile_id) {
                    array_splice($mega_currentUser["user"][0]["followings"], $i, 1);
                }
            }
            if ($cb->set($docID_currentUser, CJSON::encode($mega_currentUser))) {
                $isDelete = true;
            }
            return $isDelete;
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
            echo json_decode(file_get_contents('php://input'));
        }
    }

    public function createNotificationunfollow($follower_id, $ownerId, $timeFollow) {
        $notificationObject = array();
        $timeID = new DateTime();

        $time = date_timestamp_get($timeID);

        $notification_id = (string) (rand(10000, 99999)) . $time . $follower_id;

        $notificationObject["notification_id"] = $notification_id;
        $notificationObject["user_id"] = $follower_id;
        $notificationObject["time"] = $timeFollow;
        $notificationObject["type"] = "unFollow";
        $notificationObject["content"] = "";
        $notificationObject["action_id"] = "";
        $notificationObject["isRead"] = false;

        $notificationInfo = $this->getDomain() . "/users/" . $ownerId;
        $cbs = $this->couchBaseConnection();
        $notificationInfoDeep = $cbs->get($notificationInfo); // get the old user record from the database according to the docID string
        $userInfo = CJSON::decode($notificationInfoDeep, true);
        $conversationController = new ConversationsController();
        if (!isset($userInfo['user'][0]['notification_setting']) || strpos($userInfo['user'][0]['notification_setting'], "follow") !== false) {
            if (!isset($userInfo['user'][0]['notifications'])) {
                $userInfo['user'][0]['notifications'] = array();
            }
            array_unshift($userInfo['user'][0]["notifications"], $notificationObject);


            if ($cbs->set($notificationInfo, CJSON::encode($userInfo))) {
                if (!isset($userInfo['user'][0]['notification_setting']) || strpos($userInfo['user'][0]['notification_setting'], "email") !== false) {
                    $receiveEmail = $userInfo['user'][0]['email'];
                    $receiveName = $userInfo['user'][0]['display_name'];
                    $notificationCountFollow = 0;
                    $notificationCountMessage = 0;
                    for ($i = 0; $i < sizeof($userInfo['user'][0]['notifications']); $i++) {
                        if ($userInfo['user'][0]['notifications'][$i]["isRead"] === false) {
                            if ($userInfo['user'][0]['notifications'][$i]["type"] === "follow" || $userInfo['user'][0]['notifications'][$i]["type"] === "unFollow") {
                                $notificationCountFollow++;
                            } else if ($userInfo['user'][0]['notifications'][$i]["type"] === "authority") {
                                $notificationCountAuthority++;
                            } else {
                                $notificationCountMessage++;
                            }
                        }
                    }

                    $conversationController->sendEmail($receiveEmail, $receiveName, $notificationCountFollow, $notificationCountMessage, $ownerId, $notificationCountAuthority);
                }
            } else {
                echo $this->sendResponse(409, 'A record with id: "' . substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI'] . '/' . '" already exists');
            }
        }
    }

    public function actionDeleteUserFollower() {
        $request_array = CJSON::decode(file_get_contents('php://input'));
        $currentUser_id = $request_array[0];
        $user_id = $request_array[1];
        $time = $request_array[2];

        $unFollowing = $this->unFollowingUser($currentUser_id, $user_id);
        $unFollower = $this->unFollowerUser($currentUser_id, $user_id, $time);
        if ($unFollowing && $unFollower) {
            $this->sendResponse(204);
        } else {
            echo $this->sendResponse(409, 'A record with id: "' . substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI'] . '/' . '" already exists');
        }
    }

    public function unFollowingUser($currentUser_id, $user_id) {                                     //delete following in currentUser
        $isDelete = false;
        try {
            $cb = $this->couchBaseConnection();
            $domain = $this->getDomain();
            $docID_currentUser = $domain . "/users/" . $currentUser_id;
            $tempMega_currentUser = $cb->get($docID_currentUser);
            $mega_currentUser = CJSON::decode($tempMega_currentUser, true);
            for ($i = 0; $i < sizeof($mega_currentUser["user"][0]["followings"]); $i++) {
                if ($mega_currentUser["user"][0]["followings"][$i]["follower_id"] === $user_id) {
                    array_splice($mega_currentUser["user"][0]["followings"], $i, 1);
                }
            }
            if ($cb->set($docID_currentUser, CJSON::encode($mega_currentUser))) {
                $isDelete = true;
            }
            return $isDelete;
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
            echo json_decode(file_get_contents('php://input'));
        }
    }

    public function unFollowerUser($currentUser_id, $user_id, $time) {                           //delete follower in this following user
        $isDelete = false;
        $flag = false;
        try {
            $cb = $this->couchBaseConnection();
            $domain = $this->getDomain();
            $docID_user = $domain . "/users/" . $user_id;
            $tempMega_user = $cb->get($docID_user);
            $mega_user = CJSON::decode($tempMega_user, true);
            for ($i = 0; $i < sizeof($mega_user["user"][0]["followers"]); $i++) {
                if ($mega_user["user"][0]["followers"][$i]["follower_id"] === $currentUser_id) {
                    $flag = true;
                    array_splice($mega_user["user"][0]["followers"], $i, 1);
                }
            }
            if ($cb->set($docID_user, CJSON::encode($mega_user))) {
                $isDelete = true;
            }
            if ($flag === true) {
                //$this->createNotificationunfollow($currentUser_id, $user_id, $time);
            }
            return $isDelete;
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
            echo json_decode(file_get_contents('php://input'));
        }
    }

    public function followingUser($user_id, $request_arr) {                                               //save following in currentUser
        $isSaving = false;
        try {
            $cb = $this->couchBaseConnection();
            $domain = $this->getDomain();
            $docID_currentUser = $domain . "/users/" . $request_arr['follower_id'];
            $tempMega_currentUser = $cb->get($docID_currentUser);
            $mega_currentUser = CJSON::decode($tempMega_currentUser, true);

            if (!isset($mega_currentUser['user'][0]['followings'])) {
                $mega_currentUser['user'][0]['followings'] = array();
            }
            $follower_arr = $request_arr;
            $follower_arr['follower_id'] = $user_id;

            $bool = 0;
            for ($i = 0; $i < sizeof($mega_currentUser['user'][0]['followings']); $i++) {
                if ($user_id === $mega_currentUser['user'][0]['followings'][$i]["follower_id"]) {
                    $bool = 1;
                    break;
                }
            }
            if (!$bool) {
                array_unshift($mega_currentUser['user'][0]['followings'], $follower_arr);
            }


            if ($cb->set($docID_currentUser, CJSON::encode($mega_currentUser))) {
                $isSaving = true;
                ;
            }
            return $isSaving;
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
            echo json_decode(file_get_contents('php://input'));
        }
    }

    public function followerUser($user_id, $request_arr) {                              //save follower in this following user
        $isSaving = false;
        try {
            $cb = $this->couchBaseConnection();
            $domain = $this->getDomain();
            $docID_user = $domain . "/users/" . $user_id;
            $tempMega_user = $cb->get($docID_user);
            $mega_user = CJSON::decode($tempMega_user, true);
            if (!isset($mega_user['user'][0]['followers'])) {
                $mega_user['user'][0]['followers'] = array();
            }
            $bool = 0;
            for ($i = 0; $i < sizeof($mega_user['user'][0]['followers']); $i++) {
                if ($request_arr['follower_id'] === $mega_user['user'][0]['followers'][$i]["follower_id"]) {
                    $bool = 1;
                    break;
                }
            }

            if (!$bool) {
                array_unshift($mega_user['user'][0]['followers'], $request_arr);
            }

            if ($cb->set($docID_user, CJSON::encode($mega_user))) {
                $isSaving = true;
            } else {
                
            }
            if (!$bool) {
                $current_time = $request_arr["time_stamp"];
                $follower_id = $request_arr["follower_id"];
                $this->createNotification($follower_id, $user_id, $current_time);
            }
            return $isSaving;
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
            echo json_decode(file_get_contents('php://input'));
        }
    }

}

?>
