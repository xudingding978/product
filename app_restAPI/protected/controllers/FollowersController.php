
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
        try {

            $request_array = CJSON::decode(file_get_contents('php://input'));
            $profile_id = $request_array[0];
            $request_arr = $request_array[1];

            $cb = $this->couchBaseConnection();

            //save follower in profile
            $domain_profile = $this->getDomain();
            $docID_profile = $domain_profile . "/profiles/" . $profile_id;
            //     $cb ->getAndLock($docID_profile, 16);
            //error_log(var_export($casValue,true))
            $tempMega_profile = $cb->get($docID_profile);
            $mega_profile = CJSON::decode($tempMega_profile, true);
            if (!isset($mega_profile['profile'][0]['followers'])) {
                $mega_profile['profile'][0]['followers'] = array();
            }
            array_unshift($mega_profile['profile'][0]['followers'], $request_arr);
            if ($cb->set($docID_profile, CJSON::encode($mega_profile))) {
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
        $like = CJSON::decode(file_get_contents('php://input'));
        $like_arr = CJSON::decode($like, true);
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
                    $newRecord[$i]['photo_url_large'] = $oldRecordDeep['user'][0]["photo_url_large"];
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
                    } else {
                        if (($oldRecordDeep['user'][0]["followers"] === null) || ($oldRecordDeep['user'][0]["followers"] === "")) {
                            $newRecord[$i]['follower_size'] = 0;
                        } else {
                            $newRecord[$i]['follower_size'] = sizeof($oldRecordDeep['user'][0]["followers"]);
                        }
                    }
                }
                //error_log(var_export($newRecord[$i], true));
            }
            if ($newRecord === null) {
                $this->sendResponse(204);
            } else {
                //error_log(var_export(CJSON::encode($newRecord), true));
             
                error_log(var_export(CJSON::encode($newRecord), true));
                $this->sendResponse(200, CJSON::encode($newRecord));
            }
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
    }
    public function actionReadFollowing() {
        $like = CJSON::decode(file_get_contents('php://input'));
        $like_arr = CJSON::decode($like, true);
        //error_log(var_export($like_arr, true));
        try {
            $cb = $this->couchBaseConnection();
            $docID = $this->getDomain() . "/users/" . $like_arr;
            $old = $cb->get($docID); // get the old user record from the database according to the docID string
            $oldRecord = CJSON::decode($old, true);
            if (!isset($oldRecord['user'][0]["followings"])) {
                //error_log("ssssssssssssssssss");            
                $oldRecord['user'][0]["followers"] = array();
            }

            $newRecord = array();

            for ($i = 0; $i < sizeof($oldRecord['user'][0]["followings"]); $i++) {
                if ($oldRecord['user'][0]["followings"][$i]["follower_id"] !== null) {
                    $id = $oldRecord['user'][0]["followings"][$i]["follower_id"];
                    if ($oldRecord['user'][0]["followings"][$i]['type'] === "user") {
                        $docIDDeep = $this->getDomain() . "/users/" . $id;
                        $oldDeep = $cb->get($docIDDeep); // get the old user record from the database according to the docID string
                        $oldRecordDeep = CJSON::decode($oldDeep, true);
                        $newRecord[$i]['record_id'] = $id;
                        $newRecord[$i]['name'] = $oldRecordDeep['user'][0]["first_name"] . " " . $oldRecordDeep['user'][0]["last_name"];
                        $newRecord[$i]['photo_url'] = $oldRecordDeep['user'][0]["photo_url"];
                        $newRecord[$i]['photo_url_large'] = $oldRecordDeep['user'][0]["photo_url_large"];
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
                        if (!isset($oldRecordDeep['user'][0]["followings"])) {
                            $newRecord[$i]['follower_size'] = 0;
                        } else {
                            if (($oldRecordDeep['user'][0]["followings"] === null) || ($oldRecordDeep['user'][0]["followings"] === "")) {
                                $newRecord[$i]['follower_size'] = 0;
                            } else {
                                $newRecord[$i]['follower_size'] = sizeof($oldRecordDeep['user'][0]["followings"]);
                            }
                        }
                    }
                    else 
                    {
                          $docIDDeep = $this->getDomain() . "/profiles/" . $id;
                        $oldDeep = $cb->get($docIDDeep); // get the old user record from the database according to the docID string
                        $oldRecordDeep = CJSON::decode($oldDeep, true);
                        $newRecord[$i]['record_id'] = $id;
                        $newRecord[$i]['name'] = $oldRecordDeep['profile'][0]["profile_name"] ;
                        $newRecord[$i]['photo_url'] = $oldRecordDeep['profile'][0]["profile_pic_url"];
                        $newRecord[$i]['photo_url_large'] = $oldRecordDeep['profile'][0]["profile_bg_url"];
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
                        } else {
                            if (($oldRecordDeep['profile'][0]["followers"] === null) || ($oldRecordDeep['profile'][0]["followers"] === "")) {
                                $newRecord[$i]['follower_size'] = 0;
                            } else {
                                $newRecord[$i]['follower_size'] = sizeof($oldRecordDeep['profile'][0]["followers"]);
                            }
                        }
                    }
                }
                error_log(var_export($newRecord[$i], true));
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
        try {
            $request_array = CJSON::decode(file_get_contents('php://input'));
            $profile_id = $request_array[0];
            $user_id = $request_array[1];
            error_log(var_export($user_id, true));
            $cb = $this->couchBaseConnection();


            //delete follower in profile
            $domain_profile = $this->getDomain();
            $docID_profile = $domain_profile . "/profiles/" . $profile_id;
            error_log(var_export($docID_profile, true));
            $tempMega_profile = $cb->get($docID_profile);
            $mega_profile = CJSON::decode($tempMega_profile, true);
            error_log(var_export($mega_profile, true));
            for ($i = 0; $i < sizeof($mega_profile["profile"][0]["followers"]); $i++) {
                if ($mega_profile["profile"][0]["followers"][$i]["follower_id"] === $user_id) {
                    error_log(var_export($mega_profile["profile"][0]["followers"][$i]["follower_id"], true));
                    array_splice($mega_profile["profile"][0]["followers"], $i, 1);
                }
            }
            if ($cb->set($docID_profile, CJSON::encode($mega_profile))) {
                $this->sendResponse(204);
            } else {
                $this->sendResponse(500, "some thing wrong");
            }

            //delete profile_id in user
            /**
              $domain_user = $this->getDomain();
              $docID_user = $domain_user . "/users" . $user_id;
              $tempMega_user = $cb -> get($docID_user);
              $mega_user = CJSON::decode($tempMega_user, true);
              for ( $i=0; $i< sizeof($mega_user["user"][0]["profile_id"]);$i++ ) {
              if($mega_profile["user"][0]["profile_id"][$i]===$user_id)
              {
              //error_log(var_export($owner["profile"][0]["collections"][$i],true));
              array_splice($mega_profile["user"][0]["profile_id"], $i, 1);
              }
              }


              if ($cb->set($docID_user, CJSON::encode($mega_user))) {
              $this->sendResponse(204);
              }
              else {
              echo $this->sendResponse(409, 'A record with id: "' . substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI'] . '/' . '" already exists');
              }
             * */
        } catch (Exception $exc) {
            //$cb->unlock($docID_profile);
            echo $exc->getTraceAsString();
            echo json_decode(file_get_contents('php://input'));
        }
    }

}

?>
