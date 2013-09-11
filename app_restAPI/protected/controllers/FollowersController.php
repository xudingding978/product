
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
            array_unshift($mega_profile['profile'][0]['followers'], $request_arr);
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
            array_unshift($mega_currentUser['user'][0]['followings'], $follower_arr);
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

    public function actionRead() {
        $like = CJSON::decode(file_get_contents('php://input'));
        $likeArr = CJSON::decode($like, true);
        //error_log(var_export($like_arr[0],true));
        $like_user = $likeArr[0];
        $like_arr = $likeArr[1];
        //error_log(var_export($like_user, true));
        //error_log(var_export($like_arr, true));
        //error_log(var_export($like_arr, true));
        try {
            $cb = $this->couchBaseConnection();
            $docID = $this->getDomain() . "/users/" . $like_arr;
            $old = $cb->get($docID); // get the old user record from the database according to the docID string
            $oldRecord = CJSON::decode($old, true);
            if (!isset($oldRecord['user'][0]["followers"])) {
                //error_log("ssssssssssssssssss");            
                $oldRecord['user'][0]["followers"] = array();
            }

            $docIDUser = $this->getDomain() . "/users/" . $like_user;
            $oldUser = $cb->get($docIDUser); // get the old user record from the database according to the docID string
            $oldRecordUser = CJSON::decode($oldUser, true);
            $userFollower = $oldRecordUser['user'][0]["followers"];
            if (!isset($oldRecordUser['user'][0]["followers"]) || $oldRecordUser['user'][0]["followers"] === "") {
                $userFollower = null;
            }

            $newRecord = array();

            for ($i = 0; $i < sizeof($oldRecord['user'][0]["followers"]); $i++) {
                if ($oldRecord['user'][0]["followers"][$i]["follower_id"] !== null) {
                    $id = $oldRecord['user'][0]["followers"][$i]["follower_id"];

                    $docIDDeep = $this->getDomain() . "/users/" . $id;
                    $oldDeep = $cb->get($docIDDeep); // get the old user record from the database according to the docID string
                    $oldRecordDeep = CJSON::decode($oldDeep, true);
                    $newRecord[$i]['record_id'] = $id;
                    $newRecord[$i]['name'] = $oldRecordDeep['user'][0]["first_name"] . " " . $oldRecordDeep['user'][0]["last_name"];
                    $newRecord[$i]['photo_url'] = $oldRecordDeep['user'][0]["photo_url"];
                    if (isset($oldRecordDeep['user'][0]["cover_url"])) {
                        $newRecord[$i]['photo_url_large'] = $oldRecordDeep['user'][0]["cover_url"];
                    } else {
                        $newRecord[$i]['photo_url_large'] = null;
                    }

                    if (!isset($oldRecordDeep['user'][0]["collections"])) {
                        $newRecord[$i]['collections_size'] = 0;
                    } else {
                        // error_log(var_export($oldRecordDeep['user'][0]["collections"], true));
                        if (($oldRecordDeep['user'][0]["collections"] === null) || ($oldRecordDeep['user'][0]["collections"] === "")) {

                            $newRecord[$i]['collections_size'] = 0;
                        } else {
                            $newRecord[$i]['collections_size'] = sizeof($oldRecordDeep['user'][0]["collections"]);
                        }
                    }
                    if (!isset($oldRecordDeep['user'][0]["followers"])) {
                        $newRecord[$i]['follower_size'] = 0;
                        $newRecord[$i]['follow_status'] = false;
                        $newRecord[$i]['following_status'] = false;
                        for ($j = 0; $j < sizeof($userFollower); $j++) {
                            if ($userFollower !== null && $userFollower[$j]["follower_id"] === $id) {
                                $newRecord[$i]['following_status'] = true;
                                break;
                            }
                        }
                    } else {
                        if (($oldRecordDeep['user'][0]["followers"] === null) || ($oldRecordDeep['user'][0]["followers"] === "")) {
                            $newRecord[$i]['follower_size'] = 0;
                            $newRecord[$i]['follow_status'] = false;
                            $newRecord[$i]['following_status'] = false;
                            for ($j = 0; $j < sizeof($userFollower); $j++) {
                                if ($userFollower !== null && $userFollower[$j]["follower_id"] === $id) {
                                    $newRecord[$i]['following_status'] = true;
                                    break;
                                }
                            }
                        } else {

                            $newRecord[$i]['follow_status'] = false;
                            for ($j = 0; $j < sizeof($oldRecordDeep['user'][0]["followers"]); $j++) {
                                if ($oldRecordDeep['user'][0]["followers"][$j]["follower_id"] === $like_user) {
                                    $newRecord[$i]['follow_status'] = true;
                                    break;
                                }
                            }
                            $newRecord[$i]['follower_size'] = sizeof($oldRecordDeep['user'][0]["followers"]);
                            $newRecord[$i]['following_status'] = false;
                            for ($j = 0; $j < sizeof($userFollower); $j++) {
                                if ($userFollower !== null && $userFollower[$j]["follower_id"] === $id) {
                                    $newRecord[$i]['following_status'] = true;
                                    break;
                                }
                            }
                            //     error_log(var_export($newRecord[$i]['follow_status'], true));
                        }
                    }
                }
                //error_log(var_export($newRecord[$i], true));
            }
            if ($newRecord === null) {
                $this->sendResponse(204);
            } else {
                //error_log(var_export(CJSON::encode($newRecord), true));
                // error_log(var_export(CJSON::encode($newRecord), true));
                $this->sendResponse(200, CJSON::encode($newRecord));
            }
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
    }

    public function actionReadFollowing() {

        $like = CJSON::decode(file_get_contents('php://input'));
        $likeArr = CJSON::decode($like, true);
        //error_log(var_export($like_arr[0],true));
        $like_user = $likeArr[0];
        $like_arr = $likeArr[1];
        error_log(var_export($like_user, true));
        error_log(var_export($like_arr, true));
        // $like = CJSON::decode(file_get_contents('php://input'));
        //$like_arr = CJSON::decode($like, true);
        //error_log(var_export($like_arr, true));

        try {
            $cb = $this->couchBaseConnection();
            $docID = $this->getDomain() . "/users/" . $like_arr;
            $old = $cb->get($docID); // get the old user record from the database according to the docID string
            $oldRecord = CJSON::decode($old, true);
            if (!isset($oldRecord['user'][0]["followings"])) {
                //error_log("ssssssssssssssssss");            
                $oldRecord['user'][0]["followings"] = array();
            }

            $docIDUser = $this->getDomain() . "/users/" . $like_user;
            $oldUser = $cb->get($docIDUser); // get the old user record from the database according to the docID string
            $oldRecordUser = CJSON::decode($oldUser, true);
            $userFollower = $oldRecordUser['user'][0]["followers"];
            if (!isset($oldRecordUser['user'][0]["followers"]) || $oldRecordUser['user'][0]["followers"] === "") {
                $userFollower = null;
            }

            $newRecord = array();

            for ($i = 0; $i < sizeof($oldRecord['user'][0]["followings"]); $i++) {
                if ($oldRecord['user'][0]["followings"][$i]["follower_id"] !== null) {
                    $id = $oldRecord['user'][0]["followings"][$i]["follower_id"];
                    $newRecord[$i]['type'] = $oldRecord['user'][0]["followings"][$i]['type'];
                    if ($oldRecord['user'][0]["followings"][$i]['type'] === "user") {
                        $docIDDeep = $this->getDomain() . "/users/" . $id;
                        $oldDeep = $cb->get($docIDDeep); // get the old user record from the database according to the docID string
                        $oldRecordDeep = CJSON::decode($oldDeep, true);
                        $newRecord[$i]['record_id'] = $id;
                        $newRecord[$i]['name'] = $oldRecordDeep['user'][0]["first_name"] . " " . $oldRecordDeep['user'][0]["last_name"];
                        $newRecord[$i]['photo_url'] = $oldRecordDeep['user'][0]["photo_url"];
                        if (isset($oldRecordDeep['user'][0]["cover_url"])) {
                            $newRecord[$i]['photo_url_large'] = $oldRecordDeep['user'][0]["cover_url"];
                        } else {
                            $newRecord[$i]['photo_url_large'] = null;
                        }
                        if (!isset($oldRecordDeep['user'][0]["collections"])) {
                            $newRecord[$i]['collections_size'] = 0;
                        } else {
                            //error_log(var_export($oldRecordDeep['user'][0]["collections"], true));
                            if (($oldRecordDeep['user'][0]["collections"] === null) || ($oldRecordDeep['user'][0]["collections"] === "")) {

                                $newRecord[$i]['collections_size'] = 0;
                            } else {
                                $newRecord[$i]['collections_size'] = sizeof($oldRecordDeep['user'][0]["collections"]);
                            }
                        }
                        if (!isset($oldRecordDeep['user'][0]["followers"])) {
                            $newRecord[$i]['follower_size'] = 0;
                            $newRecord[$i]['follow_status'] = false;
                            $newRecord[$i]['following_status'] = false;
                            for ($j = 0; $j < sizeof($userFollower); $j++) {
                                if ($userFollower !== null && $userFollower[$j]["follower_id"] === $id) {
                                    $newRecord[$i]['following_status'] = true;
                                    break;
                                }
                            }
                        } else {
                            if (($oldRecordDeep['user'][0]["followers"] === null) || ($oldRecordDeep['user'][0]["followers"] === "")) {
                                $newRecord[$i]['follower_size'] = 0;
                                $newRecord[$i]['follow_status'] = false;
                                $newRecord[$i]['following_status'] = false;
                                for ($j = 0; $j < sizeof($userFollower); $j++) {
                                    if ($userFollower !== null && $userFollower[$j]["follower_id"] === $id) {
                                        $newRecord[$i]['following_status'] = true;
                                        break;
                                    }
                                }
                            } else {
                                $newRecord[$i]['follow_status'] = false;
                                for ($j = 0; $j < sizeof($oldRecordDeep['user'][0]["followers"]); $j++) {
                                    if ($oldRecordDeep['user'][0]["followers"][$j]["follower_id"] === $like_user) {
                                        $newRecord[$i]['follow_status'] = true;
                                        break;
                                    }
                                }
                                $newRecord[$i]['following_status'] = false;
                                for ($j = 0; $j < sizeof($userFollower); $j++) {
                                    if ($userFollower !== null && $userFollower[$j]["follower_id"] === $id) {
                                        $newRecord[$i]['following_status'] = true;
                                        break;
                                    }
                                }
                                $newRecord[$i]['follower_size'] = sizeof($oldRecordDeep['user'][0]["followers"]);
                            }
                        }
                    } else {
                        $docIDDeep = $this->getDomain() . "/profiles/" . $id;
                        $oldDeep = $cb->get($docIDDeep); // get the old user record from the database according to the docID string
                        $oldRecordDeep = CJSON::decode($oldDeep, true);
                        $newRecord[$i]['record_id'] = $id;
                        $newRecord[$i]['name'] = $oldRecordDeep['profile'][0]["profile_name"];
                        $newRecord[$i]['photo_url'] = $oldRecordDeep['profile'][0]["profile_pic_url"];
                        $newRecord[$i]['photo_url_large'] = $oldRecordDeep['profile'][0]["profile_bg_url"];
                        $newRecord[$i]['following_status'] = false;
                        if (!isset($oldRecordDeep['profile'][0]["collections"])) {
                            $newRecord[$i]['collections_size'] = 0;
                        } else {
                            //error_log(var_export($oldRecordDeep['profile'][0]["collections"], true));
                            if (($oldRecordDeep['profile'][0]["collections"] === null) || ($oldRecordDeep['profile'][0]["collections"] === "")) {

                                $newRecord[$i]['collections_size'] = 0;
                            } else {
                                $newRecord[$i]['collections_size'] = sizeof($oldRecordDeep['profile'][0]["collections"]);
                            }
                        }
                        if (!isset($oldRecordDeep['profile'][0]["followers"])) {
                            $newRecord[$i]['follower_size'] = 0;
                            $newRecord[$i]['follow_status'] = false;
                        } else {
                            if (($oldRecordDeep['profile'][0]["followers"] === null) || ($oldRecordDeep['profile'][0]["followers"] === "")) {
                                $newRecord[$i]['follower_size'] = 0;
                                $newRecord[$i]['follow_status'] = false;
                            } else {
                                $newRecord[$i]['follow_status'] = false;
                                for ($j = 0; $j < sizeof($oldRecordDeep['profile'][0]["followers"]); $j++) {
                                    if ($oldRecordDeep['profile'][0]["followers"][$j]["follower_id"] === $like_user) {
                                        $newRecord[$i]['follow_status'] = true;
                                        break;
                                    }
                                }
                                $newRecord[$i]['follower_size'] = sizeof($oldRecordDeep['profile'][0]["followers"]);
                            }
                        }
                    }
                }
                //error_log(var_export($newRecord[$i], true));
            }
            if ($newRecord === null) {
                $this->sendResponse(204);
            } else {
                //error_log(var_export(CJSON::encode($newRecord), true));
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

    public function actionDeleteUserFollower() {
        $request_array = CJSON::decode(file_get_contents('php://input'));
        $currentUser_id = $request_array[0];
        $user_id = $request_array[1];
        $unFollowing = $this->unFollowingUser($currentUser_id, $user_id);
        $unFollower = $this->unFollowerUser($currentUser_id, $user_id);
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

    public function unFollowerUser($currentUser_id, $user_id) {                           //delete follower in this following user
        $isDelete = false;
        try {
            $cb = $this->couchBaseConnection();
            $domain = $this->getDomain();
            $docID_user = $domain . "/users/" . $user_id;
            $tempMega_user = $cb->get($docID_user);
            $mega_user = CJSON::decode($tempMega_user, true);
            for ($i = 0; $i < sizeof($mega_user["user"][0]["followers"]); $i++) {
                if ($mega_user["user"][0]["followers"][$i]["follower_id"] === $currentUser_id) {
                    array_splice($mega_user["user"][0]["followers"], $i, 1);
                }
            }
            if ($cb->set($docID_user, CJSON::encode($mega_user))) {
                $isDelete = true;
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
            array_unshift($mega_currentUser['user'][0]['followings'], $follower_arr);
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

            array_unshift($mega_user['user'][0]['followers'], $request_arr);
            if ($cb->set($docID_user, CJSON::encode($mega_user))) {
                $isSaving = true;
            } else {
                
            }
            return $isSaving;
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
            echo json_decode(file_get_contents('php://input'));
        }
    }

}

?>
