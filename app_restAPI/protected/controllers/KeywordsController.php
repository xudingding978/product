
<?php

header("Access-Control-Allow-Origin: *");
header('Content-type: *');

header('Access-Control-Request-Method: *');
header('Access-Control-Allow-Methods: PUT, POST, OPTIONS,GET');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

class KeywordsController extends Controller {

    const JSON_RESPONSE_ROOT_SINGLE = 'keyword';
    const JSON_RESPONSE_ROOT_PLURAL = 'keywords';

    public function actionIndex() {
        
    }

    public function actionCreate() {
        $this->sendResponse(204);
    }

    public function actionRead() {
        
    }
    
    public function actionUpdate() {
        
    }

    public function actionDelete() {
        $this->sendResponse(204);
    }

    public function actionTest() {
        echo "test";
    }

}

?>
