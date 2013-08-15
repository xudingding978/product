<?php

header("Access-Control-Allow-Origin: *");
header('Content-type: *');

header('Access-Control-Request-Method: *');
header('Access-Control-Allow-Methods: PUT, POST, OPTIONS,GET');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

class CollectionsController extends Controller {

    const JSON_RESPONSE_ROOT_SINGLE = 'mega';
    const JSON_RESPONSE_ROOT_PLURAL = 'megas';

    public function actionIndex() {
        
    }

    public function actionCreate() {
        $request_json = file_get_contents('php://input');
        $request_arr = CJSON::decode($request_json, true);
        $tempProfile = $request_arr['profile'];
        $id = $tempProfile['id'];
        error_log(var_export($request_json, true));
//        $cb = $this->couchBaseConnection();
//                    $domain = $this->getDomain();
//            $docID = $domain . "/profiles/" . $id;
//            $tempMega = $cb->get($docID);
        
        $this->sendResponse(200, $request_json);
    }

    public function actionRead() {

        echo "aaaaaaaaaaa";
    }

    public function actionUpdate() {
        
    }

    public function actionDelete() {
        
    }

    public function actionTest() {
        
    }

}

?>
