<?php

header("Access-Control-Allow-Origin: *");
header('Content-type: *');

header('Access-Control-Request-Method: *');
header('Access-Control-Allow-Methods: PUT, POST, OPTIONS, GET, DELETE');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

class UsersController extends Controller {

    const JSON_RESPONSE_ROOT_SINGLE = 'user';
    const JSON_RESPONSE_ROOT_PLURAL = 'users';

    public function actionIndex() {
        $settings['log.enabled'] = true;
        // $settings['log.file'] = '/var/log/sherlock/newlogfile.log';
        $settings['log.level'] = 'debug';
        $sherlock = new Sherlock\Sherlock($settings);
        $sherlock->addNode(Yii::app()->params['elasticSearchNode']);

        //Build a new search request
        $request = $sherlock->search();

        $termQuery = Sherlock\Sherlock::queryBuilder()
                ->Match()
                ->field("type")
                ->query("user")
                ->boost(2.5);

        $request->index(Yii::app()->params['elasticSearchIndex'])
                ->type("couchbaseDocument")
                ->from(0)
                ->to(10)
                ->size(100)
                ->query($termQuery);

//        $json = '{"query":
//                            {"bool":
//                                {"must":[
//                                    {"query_string":
//                                        {"default_field":"couchbaseDocument.doc.keywords","query":"home"}}],
//                                            "must_not":[],"should":[]
//                                                }},
//                                                "from":0,"size":50,"sort":[],"facets":{}}';
//        $json = '{"query":{"bool":{"must":[{"query_string":{"default_field":"couchbaseDocument.doc.type","query":"user"}}],"must_not":[],"should":[]}},"from":0,"size":50,"sort":[],"facets":{}}';
//        $rawTermQuery = Sherlock\Sherlock::queryBuilder()->Raw($json);

        $response = $request->execute();
        $results = '{"' . self::JSON_RESPONSE_ROOT_PLURAL . '":[';

        //Iterate over the hits and print out some data
        $i = 0;
        foreach ($response as $hit) {
            $results .= CJSON::encode($hit['source']['doc']['user'][0]);
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
    }

    public function actionRead() {
        try {

            $cb = $this->couchBaseConnection();
            $temp = explode("/", $_SERVER['REQUEST_URI']);
            $id = $temp [sizeof($temp) - 1]; 
         $doc_id  = $this->getDomain() . "/users/" . $id;

            $reponse = $cb->get($doc_id);    
            $respone_user =  CJSON::decode($reponse, true);
              //          error_log(var_export($respone_user,true));
            $respone_user_data = CJSON::encode($respone_user['user'][0]);

            $result = '{"' . self::JSON_RESPONSE_ROOT_SINGLE . '":' . $respone_user_data . '}';
            $this->sendResponse(200, $result);
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
    }

    public function actionUpdate() {
        $request_json = file_get_contents('php://input');
        $request_arr = CJSON::decode($request_json, true);
        try {
            $cb = $this->couchBaseConnection();
            $temp = explode("/", $_SERVER['REQUEST_URI']);
            $id = $temp [sizeof($temp) - 1];
            $request_arr['user']['id'] = $id;
            $url = $this->getDomain() . "/users/" . $id;
            error_log('$url  '.$url);
            $oldRecord = $cb->get($url);
            $oldRecord = CJSON::decode($oldRecord, true);
            $oldRecord['user'][0] = null;
            $oldRecord['user'][0] = $request_arr['user'];

            if ($cb->set($url, CJSON::encode($oldRecord))) {
                $this->sendResponse(204);
            } else {
                $this->sendResponse(500, "some thing wrong");
            }
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

    public function actionOptions() {

        $statusHeader = 'HTTP/1.1 ' . 200 . ' ' . $this->getStatusCodeMessage(200);
        header($statusHeader);
// Set the content type
        header('Content-type:*');
// Set the Access Control for permissable domains
        header("Access-Control-Allow-Origin:*");
        header('Access-Control-Request-Method:*');
        header('Access-Control-Allow-Methods: DELETE, PUT, POST, OPTIONS, GET');
        header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

        echo "";
        Yii::app()->end();
    }

    public function getInputData($inputDataType, $inputData) {
        $tempInput = "";
        if ($inputDataType == "image/jpeg") {
            $tempInput = str_replace('data:image/jpeg;base64,', '', $inputData);
        } elseif ($inputDataType == "application/pdf") {
            $tempInput = str_replace('data:application/pdf;base64,', '', $inputData);
        } elseif ($inputDataType == "image/png") {
            $tempInput = str_replace('data:image/png;base64,', '', $inputData);
        } elseif ($inputDataType == "image/gif") {
            $tempInput = str_replace('data:image/gif;base64,', '', $inputData);
        }
        $data = base64_decode($tempInput);
        return $data;
    }

    public function photoSavingToS3($request_arr, $path) {
        $cb = new Couchbase("cb1.hubsrv.com:8091", "", "", "default", true);
        $key = explode(".", $_SERVER['HTTP_HOST']);
        $key = $key[1] . '.' . $key[2];
        $result = $cb->get($key);
        $result_arr = CJSON::decode($result, true);
        $response = false;
        $data = $this->getInputData($request_arr ["object"]['photos'][0]['photo_type'], $request_arr ["object"]['photos'][0]['photo_url']);
        $client = Aws\S3\S3Client::factory(
                        $result_arr["providers"]["S3Client"]
        );
//        if ($client->doesObjectExist('hubstar-dev', $path . $request_arr ["object"]['photos'][0]['photo_title'])) {
//            $response = false;
//        } else {
//            $client->putObject(array(
//                'Bucket' => "hubstar-dev",
//                'Key' => $path . $request_arr ["object"]['photos'][0]['photo_title'],
//                'Body' => $data,
//                'ACL' => 'public-read'
//            ));
//            $response = true;
//        }



        return $response;
    }

    public function test() {
        
    }

}

?>
