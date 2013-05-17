<?php

header("Access-Control-Allow-Origin: *");

class ImagesController extends Controller {

    const JSON_RESPONSE_ROOT_SINGLE = 'ImageFile';
    const JSON_RESPONSE_ROOT_PLURAL = 'ImageFiles';

    public function actionIndex() {

        $settings['log.enabled'] = true;
// $settings['log.file'] = '/var/log/sherlock/newlogfile.log';
// $settings['log.level'] = 'debug';
        $sherlock = new Sherlock\Sherlock($settings);
        $sherlock->addNode(Yii::app()->params['elasticSearchNode']);

//Build a new search request
        $request = $sherlock->search();

//populate a Term query to start
        $termQuery = Sherlock\Sherlock::queryBuilder()
                ->Match()
                ->field("type")
                ->query("profile")
                ->boost(2.5);

//        $filter = null;
//custom_filters_score query allows to execute a query, and if the hit matches a provided filter (ordered)
//        $customFilterQuery = Sherlock\Sherlock::queryBuilder()->CustomFiltersScore()
//                ->query("match_all")
//                ->filters($filter);
//Set the index, type and from/to parameters of the request.
        $request->index(Yii::app()->params['elasticSearchIndex'])
                ->type("couchbaseDocument")
                ->from(0)
                ->to(10)
                ->query($termQuery);

//Execute the search and return results
        $response = $request->execute();

//echo "Took: " . $response->took . "\r\n";
//echo "Number of Hits: " . count($response) . "\r\n";
//echo var_export($response);

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

        echo $this->sendResponse(200, $results);
    }

    public function actionCreate() {

        $request_json = file_get_contents('php://input');
        $request_arr = CJSON::decode($request_json, true);
        $input = str_replace('data:image/jpeg;base64,', '', $request_arr['image']['path']);
        $data = base64_decode($input);
        $client = Aws\S3\S3Client::factory(array(
                    'key' => 'AKIAJKVKLIJWCJBKMJUQ',
                    'secret' => '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',
        ));
        $client->putObject(array(
            'Bucket' => "hubstar-dev",
            'Key' => 'kingsley/'.$request_arr['image']['name'],
            'Body' => $data,
            'ACL' => 'public-read'
        ));





        $statusHeader = 'HTTP/1.1 ' . 200 . ' ' . $this->getStatusCodeMessage(200);
        header($statusHeader);
        // Set the content type
        header('Content-type: ' . 'application/json');
        // Set the Access Control for permissable domains
        header("Access-Control-Allow-Origin: http://www.develop.devbox");
        header('Access-Control-Request-Method: *');
        header('Access-Control-Allow-Methods: PUT, POST, OPTIONS');
        header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
        //header('Access-Control-Allow-Headers: *');
        echo "ffff";
        Yii::app()->end();
    }

    public function actionRead() {
        try {
            
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
    }

    public function actionUpdate() {
        try {
            
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
    }

    public function actionDelete() {
        try {
            
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
    }

    public function actionTest() {

        header('Content-type: application/json');

        echo CJSON::encode("dddddddd");
    }

    public function actionOption() {


        $statusHeader = 'HTTP/1.1 ' . 200 . ' ' . $this->getStatusCodeMessage(200);
        header($statusHeader);
        // Set the content type
        header('Content-type: ' . 'application/json');
        // Set the Access Control for permissable domains
        header("Access-Control-Allow-Origin: http://www.develop.devbox");
        header('Access-Control-Request-Method: *');
        header('Access-Control-Allow-Methods: PUT, POST, OPTIONS');
        header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
        //header('Access-Control-Allow-Headers: *');

        echo "";
        Yii::app()->end();


//                echo $this->sendResponse(200, "OK");
    }

}

?>
