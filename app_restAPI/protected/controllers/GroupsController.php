<?php

header("Access-Control-Allow-Origin: *");
header('Content-type: *');

header('Access-Control-Request-Method: *');
header('Access-Control-Allow-Methods: PUT, POST, OPTIONS,GET');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
Yii::import('ext.runactions.components.ERunActions');

class GroupsController extends Controller {

    const JSON_RESPONSE_ROOT_SINGLE = 'group';
    const JSON_RESPONSE_ROOT_PLURAL = 'groups';

    public function actionIndex() {
        
    }

    public function actionCreate() {
        try {
            $request_json = file_get_contents('php://input');
            $request_arr = CJSON::decode($request_json, true);
            $tempProfile = $request_arr['group'];
            $cb = $this->couchBaseConnection();
            $id = $tempProfile['id'];
            $domain = $this->getDomain();
            $docID = $domain . "/groups/" . $id;
            $tempMega = $cb->get($docID);
            $mega = CJSON::decode($tempMega, true);
            $timeID = date_timestamp_get(new DateTime());
            $mega['groups'][0] = $tempProfile;
            $mega['groups'][0]["id"] = $id . "";
            $mega['groups'][0]['collections'] = array();
            $mega['groups'][0]['collections'][0]['id'] = (string) (rand(10000, 99999)) . $timeID . $mega['creator'];
            $mega['groups'][0]['collections'][0]['title'] = '';
            $mega['groups'][0]['collections'][0]['desc'] = '';
            $mega['groups'][0]['collections'][0]['collection_ids'] = '';
            $mega['groups'][0]['collections'][0]['created_at'] = $timeID;
            $mega['groups'][0]['collections'][0]['cover'] = "";
            $mega['groups'][0]['collections'][0]['parent_type'] = null;
            $mega['groups'][0]['collections'][0]['optional'] = $id . "";
            $mega['groups'][0]['collections'][0]['type'] = "group";

            $mega['groups'][0]["group_partner_ids"] = $this->getTopic($mega['groups'][0]['group_category']);
            $this->autoFollow($mega['creator'], $mega['groups'][0]["group_partner_ids"]);
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

    public function autoFollow($user_id, $group_partner_ids) {
        $followersController = new FollowersController();
        $partners = explode(",", $group_partner_ids);
        for ($i = 0; $i < sizeof($partners); $i++) {
            $profile_id = $partners[$i];
            $request_arr = array();
            $request_arr["follower_profile_pic_url"] = "";
            $request_arr["follower_id"] = $user_id;
            $request_arr["name"] = "";
            $request_arr["type"] = "profile";
            $request_arr["time_stamp"] = date('D M d Y H:i:s') . ' GMT' . date('O') . ' (' . date('T') . ')';
            $request_arr["is_delete"] = false;
            $following = $followersController->followingProfile($profile_id, $request_arr);
            $follower = $followersController->followerProfile($profile_id, $request_arr);
        }
    }

    public function getTopic($c) {
        $categories = explode(",", $c);
        $domain = $this->getDomainWihoutAPI();
        $partners = "";
        $configuration = $this->getProviderConfigurationByName($domain, "categories");
        $topicSelection = $configuration[0]['global'][0]['topics'];
        for ($j = 0; $j < sizeof($topicSelection); $j++) {
            $topic = $topicSelection[$j]['topic'];
            for ($i = 0; $i < sizeof($categories); $i++) {
                if ($topic === trim($categories[$i])) {
                    if ($partners === "") {
                        $partners = $topicSelection[$j]["profiles"];
                    } else {
                        $partners = $partners . "," . $topicSelection[$j]["profiles"];
                    }
                }
            }
        }
        return $partners;
    }

    public function actionRead() {
        try {
            $cb = $this->couchBaseConnection();
            $fileName = $this->getDomain() . $_SERVER['REQUEST_URI'];
            $reponse = $cb->get($fileName);
            $request_arr = CJSON::decode($reponse, true);

            $docID = $this->getDomain() . "/users/" . $request_arr["groups"][0]['group_creator'];
            $old = $cb->get($docID);
            $userInfo = CJSON::decode($old, true);
            $photo = (isset($userInfo["user"][0]["photo_url_large"])) ? $userInfo["user"][0]["photo_url_large"] : $userInfo["user"][0]["photo_url"];
            $request_arr["groups"][0]["group_hero_cover_url"] = $photo;
            $request_arr["groups"][0]["group_creator_name"] = $userInfo["user"][0]["display_name"];
            $respone_client_data = str_replace("\/", "/", CJSON::encode($request_arr["groups"][0]));
            $result = '{"' . self::JSON_RESPONSE_ROOT_SINGLE . '":';
//Iterate over the hits and print out some data
            if ($request_arr !== null) {
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
            $payloads_arr = CJSON::decode(file_get_contents('php://input'));
            $payload_json = CJSON::encode($payloads_arr['group'], true);
            $newRecord = CJSON::decode($payload_json);
            $cb = $this->couchBaseConnection();
            $oldRecord = CJSON::decode($cb->get($this->getDomain() . $_SERVER['REQUEST_URI']));
            $oldRecord["groups"][0]["group_expertise"] = $newRecord["group_expertise"];
            $oldRecord["groups"][0]["group_category"] = $newRecord["group_category"];
            $oldRecord["groups"][0]["group_subcategory"] = $newRecord["group_subcategory"];

            $oldRecord["categories"] = $newRecord["group_category"];
            $oldRecord["subcategories"] = $newRecord["group_subcategory"];

            $oldRecord["groups"][0]["group_hero_url"] = $newRecord["group_hero_url"];
            $oldRecord["groups"][0]["group_pic_url"] = $newRecord["group_pic_url"];
            $oldRecord["owner_profile_pic"] = $newRecord["group_pic_url"];
            $oldRecord["groups"][0]["group_bg_url"] = $newRecord["group_bg_url"];

            $oldRecord["groups"][0]["group_name"] = $newRecord["group_name"];
            $oldRecord["owner_title"] = $newRecord["group_name"];
            $oldRecord["groups"][0]["group_description"] = $newRecord["group_description"];

            $oldRecord["groups"][0]["group_timeframe"] = $newRecord["group_timeframe"];
            $oldRecord["groups"][0]["group_budget"] = $newRecord["group_budget"];
            if (isset($oldRecord["groups"][0]["group_classification"])) {
                $oldRecord["groups"][0]["group_classification"] = $newRecord["group_classification"];
            }
            $oldRecord["classification"] = $newRecord["group_classification"];
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

}

?>
