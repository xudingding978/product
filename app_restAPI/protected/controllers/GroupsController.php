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
            $mega['groups'][0]["id"]=$id."";
            $mega['groups'][0]['collections'] = array();
            $mega['groups'][0]['collections'][0]['id'] = (string) (rand(10000, 99999)) . $timeID . $mega['creator'];
            $mega['groups'][0]['collections'][0]['title'] = '';
            $mega['groups'][0]['collections'][0]['desc'] = '';
            $mega['groups'][0]['collections'][0]['collection_ids'] = '';
            $mega['groups'][0]['collections'][0]['created_at'] = $timeID;
            $mega['groups'][0]['collections'][0]['cover'] = "";
            $mega['groups'][0]['collections'][0]['parent_type'] = null;
            $mega['groups'][0]['collections'][0]['optional'] = $id."";
            $mega['groups'][0]['collections'][0]['type'] = "group";
            
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
                       
            $docID = $this->getDomain() . "/users/" . $request_arr["groups"][0]['group_creator'];
            $old = $cb->get($docID);
            $userInfo = CJSON::decode($old, true);
            $photo = (isset($userInfo["user"][0]["photo_url_large"]))? $userInfo["user"][0]["photo_url_large"] : $userInfo["user"][0]["photo_url"];
            $request_arr["groups"][0]["group_hero_cover_url"] =  $photo;
            $request_arr["groups"][0]["group_creator_name"] = $userInfo["user"][0]["display_name"];
            $respone_client_data = str_replace("\/", "/", CJSON::encode($request_arr["groups"][0]));
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

    public function actionDelete() {
        try {
            
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
    }
}
?>
