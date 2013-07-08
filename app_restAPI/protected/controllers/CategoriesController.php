<?php

header("Access-Control-Allow-Origin: *");
header('Content-type: *');

header('Access-Control-Request-Method: *');
header('Access-Control-Allow-Methods: PUT, POST, OPTIONS,GET');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

class CategoriesController extends Controller {

    const JSON_RESPONSE_ROOT_SINGLE = 'category';
    const JSON_RESPONSE_ROOT_PLURAL = 'categories';

    public function actionIndex() {
        error_log('dddddddddddddddddddddddd');
        echo $this->sendResponse(200, "aaaaaaaaaaaaa");
    }

    public function actionCreate() {
        echo "this is create method";
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
