<?php

header("Access-Control-Allow-Origin: *");
header('Content-type: *');

header('Access-Control-Request-Method: *');
header('Access-Control-Allow-Methods: PUT, POST, OPTIONS,GET');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

class CommentsController extends Controller {

    const JSON_RESPONSE_ROOT_SINGLE = 'comment';
    const JSON_RESPONSE_ROOT_PLURAL = 'comments';

    public function actionIndex() {
$this->sendResponse(200, "aaaaaaaaaaaaa");
    }

    public function actionCreate() {
        $request_json = file_get_contents('php://input');
        $request_arr = CJSON::decode($request_json, true);
        $this->sendResponse(200, $request_json);
    }

    public function actionRead() {

    }

    public function actionUpdate() {
        $this->sendResponse(200, "ok");
    }

    public function actionDelete() {
        
    }

    public function actionTest() {
        
    }

}

?>
