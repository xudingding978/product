<?php

header("Access-Control-Allow-Origin: *");
header('Content-type: *');

header('Access-Control-Request-Method: *');
header('Access-Control-Allow-Methods: PUT, POST, OPTIONS,GET');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

class TestController extends Controller {

    const JSON_RESPONSE_ROOT_SINGLE = 'mega';
    const JSON_RESPONSE_ROOT_PLURAL = 'megas';

    public function actionIndex() {

        $settings['log.enabled'] = true;
        // $settings['log.file'] = '/var/log/sherlock/newlogfile.log';
        $settings['log.level'] = 'debug';
        $sherlock = new Sherlock\Sherlock($settings);
        $sherlock->addNode(Yii::app()->params['elasticSearchNode']);

        //Build a new search request
        $request = $sherlock->search();
//        $json = '{"query":
//                            {"bool":
//                                {"must":[
//                                    {"query_string":
//                                        {"default_field":"couchbaseDocument.doc.keywords","query":"home"}}],
//                                            "must_not":[],"should":[]
//                                                }},
//                                                "from":0,"size":50,"sort":[],"facets":{}}';
        
        $json =  '{"query":
                            {"bool":
                                {"must":[
                                    {"query_string":{"default_field":"couchbaseDocument.doc.collection_id","query":"default"}},
                                        {"query_string":{"default_field":"couchbaseDocument.doc.owner_profile_id","query":"trendsideas"}}],
                                            "must_not":[],"should":[]}},"from":0,"size":50,"sort":[],"facets":{}}';
 
        $rawTermQuery = Sherlock\Sherlock::queryBuilder()->Raw($json);

        $response = $request->query($rawTermQuery)->execute();
        $results = '{"' . self::JSON_RESPONSE_ROOT_PLURAL . '":[';

        //Iterate over the hits and print out some data
        $i = 0;
        foreach ($response as $hit) {
            $results .= CJSON::encode($hit['source']['doc']);
            if (++$i !== count($response)) {
                $results .= ',';
            }
        }
        $results .= ']}';

        echo $this->sendResponse(200, $i);
    }

    public function actionCreate() {
        
    }

    public function actionRead() {
        
    }

    public function actionUpdate() {
        
    }

    public function actionDelete() {
        
    }

    public function actionTest() {
        
    }

    public function actionOptions() {
        
    }

}

?>
