
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
        $configuration = $this->getProviderConfigurationByName($domain, "categorys");

        error_log(var_export($configuration, true));

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
