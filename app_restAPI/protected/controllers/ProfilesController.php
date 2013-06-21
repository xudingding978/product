<?php
 
        header('Access-Control-Allow-Origin: *');
class ProfilesController extends Controller {

    const JSON_RESPONSE_ROOT_SINGLE = 'profile';
    const JSON_RESPONSE_ROOT_PLURAL = 'profiles';

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
                ->size(100)
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
        try {
            $request_json = file_get_contents('php://input');
            $request_arr = CJSON::decode($request_json, true);

            $cb = $this->couchBaseConnection();
            if ($cb->add(substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI'] . '/' . $request_arr['profile']['id'], CJSON::encode($request_arr['profile']))) {
                echo $this->sendResponse(200, var_dump($request_arr));
            } else {
                echo $this->sendResponse(409, 'A record with id: "' . substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI'] . '/' . '" already exists');
            }
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
            echo json_decode(file_get_contents('php://input'));
        }
    }

    public function actionRead() {
        try {
            $cb = $this->couchBaseConnection();
            $reponse = $cb->get(substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI']);
            $result = '{"' . self::JSON_RESPONSE_ROOT_SINGLE . '":';
            //Iterate over the hits and print out some data
            $result .=$reponse;
            $result .= '}';
       //     error_log(var_export($result,true));
            echo $this->sendResponse(200, $result);
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
    }

    public function actionUpdate() {

        try {
            $payloads_arr = CJSON::decode(file_get_contents('php://input'));
            $payload_json = CJSON::encode($payloads_arr['profile']);
            $payload_arr = CJSON::decode($payload_json);
            $cb = $this->couchBaseConnection();
            $document_arr = CJSON::decode($cb->get(substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI']));
            $newdocument = array_merge($document_arr, $payload_arr);
            if ($cb->set(substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI'], CJSON::encode($newdocument))) {
                echo $this->sendResponse(201, var_export($newdocument));
            }
        } catch (Exception $exc) {
            echo var_export($newdocument);
        }
    }

    public function actionDelete() {
        try {
            
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
    }

    public function actionOptions() {
        try {
            $statusHeader = 'HTTP/1.1 ' . 200 . ' ' . $this->getStatusCodeMessage(200);
            header($statusHeader);
            // Set the content type
            header('Content-type: *');
            // Set the Access Control for permissable domains
            header("Access-Control-Allow-Origin: *");
            header('Access-Control-Request-Method: *');
            header('Access-Control-Allow-Methods: *');
            header('Access-Control-Allow-Headers: *');

            echo $this->sendResponse();
            Yii::app()->end();
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
    }

}
?>
