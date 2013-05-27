<?php

class PhotosController extends Controller {

    const JSON_RESPONSE_ROOT_SINGLE = 'photo';
    const JSON_RESPONSE_ROOT_PLURAL = 'photos';

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
                ->query("photo")
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

    public function actionRead() {
        try {
            $cb = $this->couchBaseConnection();
            $results_arr = $cb->get(substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI']);
            if ($results_arr) {
                $result = $this->processGet($results_arr, self::JSON_RESPONSE_ROOT_SINGLE);
                echo $this->sendResponse(200, $result);
            } else {
                echo $this->sendResponse(409, 'A record with id: "' . substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI'] . '" already exists');
            }
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
    }

    public function actionOptions() {
        try {
            echo $this->sendResponse(200, "OK");
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
    }

}

?>
