<?php

header('Access-Control-Allow-Origin: *');  

class SearchresultsController extends Controller {

    const JSON_RESPONSE_ROOT_SINGLE = 'searchresult';
    const JSON_RESPONSE_ROOT_PLURAL = 'searchresults';

    public function actionIndex() {

        $settings['log.enabled'] = true;
        // $settings['log.file'] = '/var/log/sherlock/newlogfile.log';
        $settings['log.level'] = 'debug';
        $sherlock = new Sherlock\Sherlock($settings);
        $sherlock->addNode(Yii::app()->params['elasticSearchNode']);

        //Build a new search request
        $request = $sherlock->search();

        //populate a Term query to start
//        $termQuery = Sherlock\Sherlock::queryBuilder()->QueryString()
//                ->default_field("type")
//                ->query("profile OR photo")
//                ->boost(2.5);
//        
//        $filter = null;
        //custom_filters_score query allows to execute a query, and if the hit matches a provided filter (ordered)
//        $customFilterQuery = Sherlock\Sherlock::queryBuilder()->CustomFiltersScore()
//                ->query("match_all")
//                ->filters($filter);
        //Set the index, type and from/to parameters of the request.
        $request->index(Yii::app()->params['elasticSearchIndex'])
                ->type("couchbaseDocument")
                ->from(0)
                ->to(50)
                ->size(50);
        //->query($termQuery);

        $must = Sherlock\Sherlock::queryBuilder()->QueryString()
                ->default_field("type")
                ->query("profile OR photo");

        $must2 = Sherlock\Sherlock::queryBuilder()->Term()
                ->field("type")
                ->term("profile");

        // echo var_dump($must2);

        $bool = Sherlock\Sherlock::queryBuilder()->Bool()
                ->must($must2);
        //->should("")
        //->must_not("");
        // echo var_dump($bool);
        //Execute the search and return results
        //$response = $request->query($bool)->execute();
        //Raw Term Query
        $json = '{"query":{"bool":{"must":[{"query_string":{"default_field":"couchbaseDocument.doc.mega.type","query":"profile OR photos OR article OR video"}}],"must_not":[],"should":[]}},"from":0,"size":50,"sort":[],"facets":{}}';
        $rawTermQuery = Sherlock\Sherlock::queryBuilder()->Raw($json);

        $response = $request->query($rawTermQuery)->execute();


//        echo "Took: " . $response->took . "\r\n";
//        echo "Number of Hits: " . count($response) . "\r\n";
//        echo var_export($response);

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

    public function actionOptions() {
        try {
            echo $this->sendResponse(200, "OK");
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
    }

    public function actionRead() {

        echo "ok";
    }

}

?>
