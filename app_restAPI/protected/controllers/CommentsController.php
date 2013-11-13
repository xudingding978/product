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
        $newRecord = CJSON::decode($request_json, true);
        $typeAndID = $newRecord['comment']['optional'];

        $typeAndID = explode("/", $typeAndID);
        $docID = $this->getDocId($typeAndID[0], $typeAndID[1]);
        $cb = $this->couchBaseConnection();
        $oldRecord_arr = $cb->get($docID);

        $oldRecord = CJSON::decode($oldRecord_arr, true);
        if (!isset($oldRecord['comments'])) {
            $oldRecord['comments'] = array();
        }
        array_unshift($oldRecord['comments'], $newRecord['comment']);
        if ($cb->set($docID, CJSON::encode($oldRecord))) {
            $this->sendResponse(204);
        } else {
            $this->sendResponse(500, "some thing wrong");
        }
    }

    public function actionRead() {

    }

    public function actionUpdate() {
 
    }

    public function actionDelete() {

    }

    public function actionTest() {
       
    }

}

?>
