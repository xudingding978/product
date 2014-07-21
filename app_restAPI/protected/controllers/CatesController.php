
<?php

header("Access-Control-Allow-Origin: *");
header('Content-type: *');
header('Access-Control-Request-Method: *');
header('Access-Control-Allow-Methods: PUT, POST, OPTIONS,GET');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

class CatesController extends Controller {

    const JSON_RESPONSE_ROOT_SINGLE = 'cate';
    const JSON_RESPONSE_ROOT_PLURAL = 'cates';

    public function actionIndex() {
        $temp = explode("?", $_SERVER['REQUEST_URI']);
        $request_string = $temp [sizeof($temp) - 1];
        $response = "";
        $requireParams = explode('&', $request_string);
        $types = explode("=", $requireParams[0]);
        $cb = $this->couchBaseConnection();
        $url = $this->getDomain() . "/";
        $tempRecord = $cb->get($url);
        if (sizeof($types) > 1) {
            if ($types[1] === "cateRead") {
                $search_strings = explode("=", $requireParams[1]);
                if ($search_strings[1] === 'International') {
                    $domain = $this->getDomainWihoutAPI();
                    $configuration = $this->getProviderConfigurationByName($domain, "categories");
                    $topicSelection = $configuration[0]['global'][0]['topics'];
                } else if ($search_strings[1] === 'USA') {
                    $domain = $this->getDomainWihoutAPI();
                    $configuration = $this->getProviderConfigurationByName($domain, "categories");
                    $topicSelection = $configuration[0]['united states'][0]['topics'];
                }
            }



//        $results = '{"' . self::JSON_RESPONSE_ROOT_PLURAL . '":[';
//        $i = 0;
//        foreach ($response as $hit) {
//            $results .= CJSON::encode($hit['source']['doc']);
//            if (++$i < count($response)) {
//                $results .= ',';
//            }
//        }
//        $results .= ']}';


            $response = '{"' . self::JSON_RESPONSE_ROOT_PLURAL . '":' . CJSON::encode($topicSelection, true) . '}';

            $this->sendResponse(200, $response);
        } else {
            $this->sendResponse(204);
        }
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
