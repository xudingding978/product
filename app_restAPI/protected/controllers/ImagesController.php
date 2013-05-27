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

  
         //writting file on the php server 

          //        $request_json = file_get_contents('php://input');
          //        $request_arr = CJSON::decode($request_json, true);
          //        $my_file = '/home/devbox/NetBeansProjects/hubstar/app_restAPI/protected/controllers/' . $request_arr['image']['name'];
          //        if (file_exists($my_file)) {
          //            unlink($my_file);
          //            error_log($my_file);
          //        }
          //        $handle = fopen($my_file, 'w') or die('Cannot open file:  ' . $my_file);
          //        $input = str_replace('data:image/jpeg;base64,', '', $request_arr['image']['path']);
          //        $data = base64_decode($input);
          //        error_log($data);
          //        fwrite($handle, $data);
          //        fclose($handle);

         

        $response = "";
        $request_json = file_get_contents('php://input');
        $request_arr = CJSON::decode($request_json, true);
//        $data = $this->getInputData($request_arr['image']['data_type'], $request_arr['image']['src']);
//        $client = Aws\S3\S3Client::factory(array(
//                    'key' => 'AKIAJKVKLIJWCJBKMJUQ',
//                    'secret' => '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',
//        ));
//        if ($client->doesObjectExist('hubstar-dev', 'kingsley/' . $request_arr['image']['name'])) {
//            $response = $request_arr['image']['name'] . " already exist.";
//        } else {
//            $client->putObject(array(
//                'Bucket' => "hubstar-dev",
//                'Key' => 'kingsley/gallery/' . $request_arr['image']['name'],
//                'Body' => $data,
//                'ACL' => 'public-read'
//            ));
//            $response = "file uploads secussfully";
//        }

       error_log(substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI'] . '/' . $request_arr['image']['name']);
        error_log($_SERVER['REQUEST_URI']);
        //      try {
//            $cb = $this->couchBaseConnection();
//            if ($cb->add(substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI'] . '/' . $request_arr['profile']['id'], CJSON::encode($request_arr['profile']))) {
//                echo $this->sendResponse(200, var_dump($request_arr));
//            } else {
//                echo $this->sendResponse(409, 'A record with id: "' . substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI'] . '/' . '" already exists');
//            }
//        } catch (Exception $exc) {
//            echo $exc->getTraceAsString();
//            echo json_decode(file_get_contents('php://input'));
//        }



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
        echo $response;
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
        header("Access-Control-Allow-Origin: *");
        header('Access-Control-Request-Method: *');
        header('Access-Control-Allow-Methods: PUT, POST, OPTIONS');
        header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
        header('Access-Control-Allow-Headers: *');

        echo "";
        Yii::app()->end();


//                echo $this->sendResponse(200, "OK");
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

}

?>
