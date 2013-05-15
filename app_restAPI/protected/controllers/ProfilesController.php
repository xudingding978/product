<?php

//spl_autoload_unregister(array('YiiBase','autoload'));
//
//Yii::import('application.protected.vendor.autoload');
//require_once '/home/devbox/NetBeansProjects/hubstar/app_restAPI/protected/vendor/autoload.php';
////spl_autoload_register(array('Sherlock','autoload'));
////$sherlock = new Sherlock();
//spl_autoload_register(array('YiiBase','autoload'));

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
                //echo file_get_contents('php://input');
                //echo var_dump($request_arr);
            }
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
            echo json_decode(file_get_contents('php://input'));
        }
    }

    public function actionRead() {
        try {
            $cb = $this->couchBaseConnection();
            $results_arr = $cb->get(substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI']);

            if ($results_arr) {
                $result = $this->processGet($results_arr, self::JSON_RESPONSE_ROOT_SINGLE);
                echo $this->sendResponse(200, $result);
            } else {
                echo $this->sendResponse(409, 'A record with id: "' . substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI'] . '/' . $_POST['id'] . '" already exists');
            }
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
    }

    public function actionUpdate() {
//echo file_get_contents('php://input');
//        $payload = CJSON::decode(file_get_contents('php://input'));
//        $profile = CJSON::encode($payload['profile']);
//
////echo $profile;
//
//        $profile_arr = CJSON::decode($profile);
//
//        $add_arr = array('test' => 'test value');
//
//        $newDoc = array_merge($profile_arr, $add_arr);
//
//        echo CJSON::encode($newDoc);


        try {


            $payloads_arr = CJSON::decode(file_get_contents('php://input'));
            $payload_json = CJSON::encode($payloads_arr['profile']);
            $payload_arr = CJSON::decode($payload_json);


//        $payload = CJSON::decode(file_get_contents('php://input'));
//        $profile = CJSON::encode($payload['profile']);
            //    $profile_arr = CJSON::decode($profile);
//        $add_arr = array('test' => 'test value');
            //   $newDoc = array_merge($profile_arr, $add_arr);





            $cb = $this->couchBaseConnection();

            $document_arr = CJSON::decode($cb->get(substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI']));

            $array1 = '{"profile":{"id":"Jason_test",profile_name":"leokllhghgvbb","last_name":null,"first_name":null,"email":null,"about":null,"type":"profile","profile_cover_url":null,"profile_pic_url":null,"profile_bg_url":null,"contact_user":null,"profile_category":null,"profile_physical_address":null,"phone_number":null,"website_url":null}}';
            $array2 = '{"id": "leo_test","profile_name": "Leooooooooooooooooooooooooooooooooo","new_file":null}';

            $a1 = CJSON::decode($array1);
            $a2 = CJSON::decode($array2);

            $a3 = array('id' => 'leo_test', 'profile_name' => 'Jason Liddiard', 'last_name' => NULL, 'full_name' => 'Leo Sun', 'first_name' => NULL, 'email' => NULL, 'about' => NULL, 'type' => 'profile', 'profile_cover_url' => NULL, 'profile_pic_url' => NULL, 'profile_bg_url' => NULL, 'contact_user' => NULL, 'profile_category' => NULL, 'profile_physical_address' => NULL, 'phone_number' => NULL, 'website_url' => NULL,);

            //$newdocument1 = array_merge( $a2 , $a1['profile']);
            
            if (is_array($document_arr) && is_array($payload_arr)){
                $newdocument2 = $document_arr + $payload_arr;
            } else {
                echo $this->sendResponse(401, 'Array Mergin issue');
            }

            


            if ($cb->set(substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI'], CJSON::encode($newdocument2))) {
                //     echo $this->sendResponse(200, $cb->get(substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI']));
                //echo $this->sendResponse(200, CJSON::encode($newdocument));
                echo $this->sendResponse(200, CJSON::encode($document_arr).','. CJSON::encode($payloads_arr['profile']));
            } else {
                echo $this->sendResponse(200, $cb->get(substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI']));
            }
        } catch (Exception $exc) {
            //echo $this->sendResponse(409, $exc->getTraceAsString());
            ///  echo var_dump(CJSON::encode($request_arr['profile']));
            //echo var_export($newdocument);
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
