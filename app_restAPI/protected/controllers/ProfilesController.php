<?php

header("Access-Control-Allow-Origin: *");
header('Content-type: *');

header('Access-Control-Request-Method: *');
header('Access-Control-Allow-Methods: PUT, POST, OPTIONS,GET');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

class ProfilesController extends Controller {

    const JSON_RESPONSE_ROOT_SINGLE = 'profile';
    const JSON_RESPONSE_ROOT_PLURAL = 'profiles';

    public function actionIndex() {
    //    $results = $this->getAllProfiles("profile");
     
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
          $results .= CJSON::encode($hit['source']['doc']['profile'][0]);
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
            if ($cb->add($this->getDomain() . $_SERVER['REQUEST_URI'] . '/' . $request_arr['profile']['id'], CJSON::encode($request_arr['profile']))) {
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
            $fileName = $this->getDomain() . $_SERVER['REQUEST_URI'];
            $reponse = $cb->get($fileName);
            $request_arr = CJSON::decode($reponse, true);

            $respone_client_data = str_replace("\/", "/", CJSON::encode($request_arr["profile"][0]));
            $result = '{"' . self::JSON_RESPONSE_ROOT_SINGLE . '":';
            //Iterate over the hits and print out some data
            $result .=$respone_client_data;

            $result .= '}';


            //       error_log(var_export($result, true));

            echo $this->sendResponse(200, $result);
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
    }

    public function actionUpdate() {

        try {
            $payloads_arr = CJSON::decode(file_get_contents('php://input'));
            $payload_json = CJSON::encode($payloads_arr['profile'], true);
            $cb = $this->couchBaseConnection();
            $oldRecord = CJSON::decode($cb->get($this->getDomain() . $_SERVER['REQUEST_URI']));
            $id = $oldRecord['profile'][0]['id'];
            $oldfollower = $oldRecord['profile'][0]['followers'];
            $oldRecord['profile'][0] = null;
            $oldRecord['profile'][0] = CJSON::decode($payload_json);
            if (isset($payloads_arr['profile']['followers'][0])) {
                error_log('new '.sizeof($payloads_arr['profile']['followers']) );
                                error_log('old '.sizeof($oldRecord['profile'][0]['followers']));
                if (sizeof($payloads_arr['profile']['followers']) > sizeof($oldRecord['profile'][0]['followers'])) {//insert comment
                    array_unshift($oldRecord['profile'][0]['followers'], $payloads_arr['profile']['followers'][0]);
                }
            }
            $oldRecord['profile'][0]['id'] = $id;
            if ($cb->set($this->getDomain() . $_SERVER['REQUEST_URI'], CJSON::encode($oldRecord, true))) {
                $this->sendResponse(204);
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

}

?>
