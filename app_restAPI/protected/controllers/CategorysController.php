
<?php

header("Access-Control-Allow-Origin: *");
header('Content-type: *');

header('Access-Control-Request-Method: *');
header('Access-Control-Allow-Methods: PUT, POST, OPTIONS,GET');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

class CategorysController extends Controller {

    const JSON_RESPONSE_ROOT_SINGLE = 'category';
    const JSON_RESPONSE_ROOT_PLURAL = 'categorys';

    public function actionIndex() {
        $domain = $this->getDomain();

        $configuration = $this->getProviderConfigurationByName($domain, "categories");
        $topicSelection = $configuration[0]['global'][0];

        $response = CJSON::encode($topicSelection, true);

        error_log('wwwwwwwwwwww');

        error_log(var_export($response, true));
        $this->sendResponse(200, $response);
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
