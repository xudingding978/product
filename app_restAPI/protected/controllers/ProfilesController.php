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
        
        $filter = null;
        
        //custom_filters_score query allows to execute a query, and if the hit matches a provided filter (ordered)
        $customFilterQuery = Sherlock\Sherlock::queryBuilder()->CustomFiltersScore()
                ->query("match_all")
                ->filters($filter);

        //Set the index, type and from/to parameters of the request.
        $request->index(Yii::app()->params['elasticSearchIndex'])
        ->type("couchbaseDocument")
        ->from(0)
        ->to(10)
        ->query($customFilterQuery);

        //Execute the search and return results
        $response = $request->execute();

        echo "Took: " . $response->took . "\r\n";
        echo "Number of Hits: " . count($response) . "\r\n";
        
        //echo var_export($response);

        //Iterate over the hits and print out some data
        foreach ($response as $hit) {
            echo $hit['score'] . ' - ' .$hit['source']['doc']['id']. "\r\n\n\r";
        }


//        try {
//            $cb = $this->couchBaseConnection();
//            $keys = array('develop.devbox1/profiles/jason_liddiard', 'develop.devbox1/profiles/leo_sun');
//            $results_arr = ($cb->getMulti($keys));
//            $result = $this->processMultiGet($results_arr, self::JSON_RESPONSE_ROOT_PLURAL);
//            echo $this->sendResponse(200, $result);
//        } catch (Exception $exc) {
//            echo $exc->getTraceAsString();
//        }
    }

    public function actionCreate() {
        try {
            $cb = $this->couchBaseConnection();
            if ($cb->add($_POST['id'], CJSON::encode($_POST))) {
                echo $this->sendResponse(201, 'OK');
            } else {
                echo $this->sendResponse(409, 'A record with id: "' . $_POST['id'] . '" already exists');
            }
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
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

}

?>
