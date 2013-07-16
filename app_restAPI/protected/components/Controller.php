<?php

class Controller extends CController {

    public $cb = null;
    public $layout = '//layouts/api';

    /**
     * @var array the breadcrumbs of the current page. The value of this property will
     * be assigned to {@link CBreadcrumbs::links}. Please refer to {@link CBreadcrumbs::links}
     * for more details on how to specify this property.
     */
    public $breadcrumbs = array();

    /**
     * Gets RestFul data and decodes its JSON request
     * @return mixed
     */
    protected function getInputAsJson() {
        return CJSON::decode(file_get_contents('php://input'));
    }

    protected function couchBaseConnection() {
        $bucket = Yii::app()->params['couchBaseBucket'];
        $account = Yii::app()->params['couchBaseAccount'];
        $password = Yii::app()->params['couchBasePassword'];
        $node = Yii::app()->params['couchBaseNode'];
        return new Couchbase($node, $account, $password, $bucket, true);
    }

    protected function couchBaseConnection_production() {
        return new Couchbase("cb1.hubsrv.com:8091", "Administrator", "Pa55word", "production", true);
    }

    protected function getS3Connection($domain) {
        $cb = new Couchbase("cb1.hubsrv.com:8091", "", "", "default", true);
        $result = $cb->get($domain);
        $result_arr = CJSON::decode($result, true);
        $client = Aws\S3\S3Client::factory(
                        $result_arr["providers"]["S3Client"]
        );
        return $client;
    }

    protected function getProviderConfigurationByName($domain, $name) {
        $bucket = Yii::app()->params['couchBaseDefaultBucket'];
        $account = Yii::app()->params['couchBaseDefaultAccount'];
        $password = Yii::app()->params['couchBaseDefaultPasswrd'];
        $node = Yii::app()->params['couchBaseDefaultNode'];
        $cb = new Couchbase($node, $account, $password, $bucket, true);
        $result = $cb->get($domain);
        $result_arr = CJSON::decode($result, true);
        return $result_arr["providers"][$name];
    }

    // function for connecting to s3. Using for move photo between buckets. (Tao)
//    public function connectToS3() {
//        $cb = new Couchbase("cb1.hubsrv.com:8091", "", "", "default", true);
//        $key = explode(".", $_SERVER['HTTP_HOST']);
//        $key = $key[1] . '.' . $key[2];
//        $result = $cb->get($key);
//        $result_arr = CJSON::decode($result, true);
//
//        $client = Aws\S3\S3Client::factory(
//                        $result_arr["providers"]["S3Client"]
//        );
//
//        return $client;
//    }

    /**
     * Send raw HTTP response
     * @param int $status HTTP status code
     * @param string $body The body of the HTTP response
     * @param string $contentType Header content-type
     * @return HTTP response
     */
    protected function sendResponse($status = 200, $body = '', $contentType = 'application/json') {
// Set the status
        $statusHeader = 'HTTP/1.1 ' . $status . ' ' . $this->getStatusCodeMessage($status);
        header($statusHeader);
// Set the content type
        header('Content-type: ' . $contentType);
// Set the Access Control for permissable domains
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Request-Method: *');
        header('Access-Control-Allow-Methods: *');
        header('Access-Control-Allow-Headers: *');
//header('Access-Control-Allow-Headers: *');

        echo $body;
        Yii::app()->end();
    }

    /**
     * Return the http status message based on integer status code
     * @param int $status HTTP status code
     * @return string status message
     */
    protected function getStatusCodeMessage($status) {
        $codes = array(
            100 => 'Continue',
            101 => 'Switching Protocols',
            200 => 'OK',
            201 => 'Created',
            202 => 'Accepted',
            203 => 'Non-Authoritative Information',
            204 => 'No Content',
            205 => 'Reset Content',
            206 => 'Partial Content',
            300 => 'Multiple Choices',
            301 => 'Moved Permanently',
            302 => 'Found',
            303 => 'See Other',
            304 => 'Not Modified',
            305 => 'Use Proxy',
            306 => '(Unused)',
            307 => 'Temporary Redirect',
            400 => 'Bad Request',
            401 => 'Unauthorized',
            402 => 'Payment Required',
            403 => 'Forbidden',
            404 => 'Not Found',
            405 => 'Method Not Allowed',
            406 => 'Not Acceptable',
            407 => 'Proxy Authentication Required',
            408 => 'Request Timeout',
            409 => 'Conflict',
            410 => 'Gone',
            411 => 'Length Required',
            412 => 'Precondition Failed',
            413 => 'Request Entity Too Large',
            414 => 'Request-URI Too Long',
            415 => 'Unsupported Media Type',
            416 => 'Requested Range Not Satisfiable',
            417 => 'Expectation Failed',
            500 => 'Internal Server Error',
            501 => 'Not Implemented',
            502 => 'Bad Gateway',
            503 => 'Service Unavailable',
            504 => 'Gateway Timeout',
            505 => 'HTTP Version Not Supported',
        );
        return (isset($codes[$status])) ? $codes[$status] : '';
    }

    protected function processMultiGet($results_arr, $jsonRoot) {
        $numItems = count($results_arr);
        $i = 0;
        $result = '{"' . $jsonRoot . '":[';
        foreach ($results_arr as $key => $value) {
            if (++$i === $numItems) {
                $result .= $value;
            } else {
                $result .= $value . ',';
            }
        }
        $result .= ']}';
        return $result;
    }

    protected function processGet($results_arr, $jsonRoot) {
        $result = '{"' . $jsonRoot . '":[';
        $result .= $results_arr;
        $result .= ']}';
        return $result;
    }

    protected function getNewID() {
        $myText = (string) microtime();
        $pieces = explode(" ", $myText);
        $id = $pieces[1];
        $id = (string) " " . rand(99999999, 999999999) . $id;
        return trim($id);
    }

    protected function getRequestResult($searchString, $returnType) {
        $response = "";
        $requireParams = explode('&', $searchString);
        $requireType = $this->getUserInput($requireParams[0]);
        if ($requireType == 'search') {
            $region = $this->getUserInput($requireParams[1]);
            $searchString = $this->getUserInput($requireParams[2]);
            $from = $this->getUserInput($requireParams[3]);
            $size = $this->getUserInput($requireParams[4]);
            $response = $this->performSearch($returnType, $region, $searchString, $from, $size);
        } elseif ($requireType == 'collection') {
            $collection_id = $this->getUserInput($requireParams[1]);
            $owner_profile_id = $this->getUserInput($requireParams[2]);
            $response = $this->performRawSearch($returnType, $collection_id, $owner_profile_id);
        } elseif ($requireType == 'partner') {
            $partner_id_raw = $this->getUserInput($requireParams[1]);
            $partner_id = str_replace("%2C", ",", $partner_id_raw);
            $partnerIds = explode(',', $partner_id);
            $str_partnerIds = "";
            for ($i = 0; $i < sizeof($partnerIds); $i++) {
                $str_partnerIds = $str_partnerIds . '\"' . $partnerIds[$i] . '\"';
                if ($i + 1 < sizeof($partnerIds)) {
                    $str_partnerIds.=',';
                }
            }
            $response = $this->getProfilePartner($returnType, $str_partnerIds);
        } elseif ($requireType == 'articleRelatedImage') {
            $article_id = $this->getUserInput($requireParams[1]);
            $owner_id = $this->getUserInput($requireParams[2]);
            $requestArray = array();
            $requestStringOne = 'couchbaseDocument.doc.photo.photo_articleId=' . $article_id;
            array_push($requestArray, $requestStringOne);
            $requestStringTwo = 'couchbaseDocument.doc.owner_id=' . $owner_id;
            array_push($requestArray, $requestStringTwo);
            $response = $this->performMustSearch($requestArray, $returnType, 'must');
        } elseif ($requireType == 'status') {
            $region = $this->getUserInput($requireParams[1]);
            $searchString = $this->getUserInput($requireParams[2]);
            $response = $this->getSearchResultsTotal($returnType, $region, $searchString);
        } elseif ($requireType == 'personalCollection') {
            $userid = $this->getUserInput($requireParams[1]);
            $collection_id = $this->getUserInput($requireParams[2]);
            $requestArray = array();
            $requestStringOne = 'couchbaseDocument.doc.user.id=' . $userid;
            array_push($requestArray, $requestStringOne);
            $requestStringTwo = 'couchbaseDocument.doc.user.collections.id=' . $collection_id;
            array_push($requestArray, $requestStringTwo);
            $tempResult = $this->performMustSearch($requestArray, $returnType, 'must');
            $mega = CJSON::decode($tempResult, true);
            $collections = $mega['megas'][0]['user'][0]['collections'];
            $response = $this->getCollections($collections, $collection_id, $returnType);
        } else {
            $response = $this->performSearch($returnType, "", "huang");
        }
        return $response;
    }

    protected function performSearch($returnType, $region, $requestString, $from = 0, $size = 50) {
        $requestArray = array();
        if ($region != null && $region != "") {
            $requestStringOne = 'couchbaseDocument.doc.region=' . $region;
            array_push($requestArray, $requestStringOne);
        }
            if ($requestString != null && $requestString != "") {
        $requestStringTwo = 'couchbaseDocument.doc.keywords=' . $requestString;
        array_push($requestArray, $requestStringTwo);
            }
        $tempResult = $this->performMustSearch($requestArray, $returnType, 'must', $from, $size);
        return $tempResult;

    }
    protected function getmustQuestWithQueryString($queryString) {
        $mustQuery = explode('=', $queryString);
        $should = Sherlock\Sherlock::queryBuilder()->QueryString()->query('"'.$mustQuery[1].'"')//$collection_id
                ->field($mustQuery[0]);
        return $should;
    }

    protected function performMustSearch($requestArray, $returnType, $search_type = "should",$from = 0, $size = 50) {
        $settings['log.enabled'] = true;
        $sherlock = new \Sherlock\Sherlock($settings);
        $sherlock->addNode(Yii::app()->params['elasticSearchNode']);
        $request = $sherlock->search();
        $request->index("develop")->type("couchbaseDocument")->from($from);
        $request->index("develop")->type("couchbaseDocument")->size($size);
        $max = sizeof($requestArray);
        $bool = Sherlock\Sherlock::queryBuilder()->Bool();

        for ($i = 0; $i < $max; $i++) {
            $must = $this->getmustQuestWithQueryString($requestArray[$i]);
            if ($search_type == "must") {
                $bool->must($must);
            } else if ($search_type == "should") {
                $bool->must($must);
            } else {
                echo "no such search type, please input: must or should as a search type.";
            }
        }
        $request->query($bool);
        $response = $request->execute();

        $i = 0;

        $results = '{"' . $returnType . '":[';
        foreach ($response as $hit) {
            $results .= CJSON::encode($hit['source']['doc']);
            if (++$i < count($response)) {
                $results .= ',';
            }
        }
        $results .= ']}';
        return $results;
    }

    protected function getRequestResultByID($returnType, $requestString) {

        $request = $this->getElasticSearch();
//populate a Term query to start
        $should = Sherlock\Sherlock::queryBuilder()->Term()->term($requestString)//$collection_id
                ->field('couchbaseDocument.doc.id');
        $bool = Sherlock\Sherlock::queryBuilder()->Bool()->should($should)
                ->boost(2.5);
        $response = $request->query($bool)->execute();

        $results = '{"' . $returnType . '":';
        foreach ($response as $hit) {
            $results .= CJSON::encode($hit['source'] ['doc']);
        }
        $results .= '}';
        return $results;
    }

    protected function getProfilePartner($returnType, $partner_id) {
        $request = $this->getElasticSearch();
        $termQuery = Sherlock\Sherlock::queryBuilder()->Raw('{
                "bool": {
                    "must": [
                        {
                            "query_string": {
                                "default_field": "couchbaseDocument.doc.profile.id",
                                "query": "' . $partner_id . '"
                            }
                        }
                    ]
                }
    
            }');

        $response = $request->query($termQuery)->execute();
        $results = '{"' . $returnType . '":[';
        $i = 0;
        foreach ($response as $hit) {

            $results .= CJSON::encode($hit['source'] ['doc']);
            if (++$i !== count($response)) {
                $results .= ',';
            }
        }
        $results .= ']}';

        return $results;
    }

    protected function performRawSearch($returnType, $collection_id, $owner_profile_id) {
        $request = $this->getElasticSearch();

        $must = Sherlock\Sherlock::queryBuilder()
                ->QueryString()
                ->field('couchbaseDocument.doc.collection_id')
                ->query($collection_id);
        $must2 = Sherlock\Sherlock::queryBuilder()
                ->QueryString()
                ->field('couchbaseDocument.doc.owner_id')
                ->query($owner_profile_id);

        $bool = Sherlock\Sherlock::queryBuilder()->Bool()->must($must)
                ->must($must2)
                ->boost(2.5);
        $response = $request->query($bool)->execute();

        $results = '{"' . $returnType . '":[';

//Iterate over the hits and print out some data
        $i = 0;
        foreach ($response as $hit) {

            $results .= CJSON::encode($hit['source'] ['doc']);
            if (++$i !== count($response)) {
                $results .= ',';
            }
        }
        $results .= ']}';

        return $results;
    }

    protected function getSearchResultsTotal($returnType, $region, $requestString) {
                $requestArray = array();
        if ($region != null && $region != "") {
            $requestStringOne = 'couchbaseDocument.doc.region=' . $region;
            array_push($requestArray, $requestStringOne);
        }
            if ($requestString != null && $requestString != "") {
        $requestStringTwo = 'couchbaseDocument.doc.keywords=' . $requestString;
        array_push($requestArray, $requestStringTwo);
            }
        
                    $settings['log.enabled'] = true;
        $sherlock = new \Sherlock\Sherlock($settings);
        $sherlock->addNode(Yii::app()->params['elasticSearchNode']);
        $request = $sherlock->search();
        $max = sizeof($requestArray);
        $bool = Sherlock\Sherlock::queryBuilder()->Bool();

        for ($i = 0; $i < $max; $i++) {
            $must = $this->getmustQuestWithQueryString($requestArray[$i]);
                $bool->must($must);
  
        }
        $request->query($bool);

        $response = $request->execute();
// $result = "";
//Iterate over the hits and print out some data
        $result = '{"' . $returnType . '":[{"id":"hit","hits":"' . $response->total;
        $result .= '"}]}'  ;
        return $result;
    }

    protected function getElasticSearch() {
        $settings['log.enabled'] = true;
        $sherlock = new \Sherlock\Sherlock($settings);
        $sherlock->addNode(Yii::app()->params['elasticSearchNode']);
        $request = $sherlock->search();
        $index = Yii::app()->params['elasticSearchIndex'];
        $request->index($index)->type("couchbaseDocument");
        return $request;
    }

    protected function getUserInput($request_string) {
        $returnString = null;
        if ($request_string != null || $request_string != "") {
            $returnString = explode('=', $request_string)[1];
        }
        return $returnString;
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

    protected function getCollections($collections, $collection_id, $returnType) {
        $request_ids = $this->getSelectedCollectionIds($collections, $collection_id);
        $id_arr = explode(',', $request_ids);
        $header = '{"ids": { "values": [';
        $footer = ']}}';
        $tempRquestIDs = "";
        for ($i = 0; $i < sizeof($id_arr); $i++) {
            $tempRquestIDs .= '"' . $this->getDomain() . "/" . trim($id_arr[$i]) . '"';
            if ($i < sizeof($id_arr) - 1) {
                $tempRquestIDs.=',';
            }
        }

        $rawRequest = $header . $tempRquestIDs . $footer;
        $settings['log.enabled'] = true;
        $sherlock = new \Sherlock\Sherlock($settings);
        $sherlock->addNode(Yii::app()->params['elasticSearchNode']);
        $request = $sherlock->search();
        $termQuery = Sherlock\Sherlock::queryBuilder()->Raw($rawRequest);
        $request->index(Yii::app()->params['elasticSearchIndex'])
                ->type("couchbaseDocument")
                ->query($termQuery);
        $response = $request->execute();
        $results = $this->getReponseResult($response, $returnType);
        return $results;
    }


    protected function getDomain() {
        $host = $_SERVER['HTTP_HOST'];
        preg_match("/[^\.\/]+\.[^\.\/]+$/", $host, $matches);

        return trim($matches[0]);
    }

    protected function getSelectedCollectionIds($collections, $collection_id) {
        $max = sizeof($collections);
        $request_ids = "";
        for ($i = 0; $i < $max; $i++) {
            $thisCollection = $collections[$i];

            if ($thisCollection["id"] == $collection_id) {

                $request_ids = $thisCollection['collection_ids'];
            }
        }
        return $request_ids;
    }

    //update article 
    protected function modifyArticleResponseResult($response, $returnType) {
        $results = '{"' . $returnType . '":[';
        $i = 0;
        foreach ($response as $hit) {
            $id = $hit['source']['meta']['id'];
            $id = str_replace("trendsideas.com/", "", $id);
            $hit['source']['doc']['id'] = $id;
            $hit['source']['doc']['article'][0]['id'] = $id;

            $results .= CJSON::encode($hit['source']['doc']);
            if (++$i !== count($response)) {
                $results .= ',';
            }
        }

        $results .= ']}';
        return $results;
    }

    protected function getReponseResult($response, $returnType) {
        $results = '{"' . $returnType . '":[';
        $i = 0;
        foreach ($response as $hit) {

            $results .= CJSON::encode($hit['source']['doc']);

            if (++$i < count($response)) {
                $results .= ',';
            }
        }
        $results .= ']}';

        return $results;
    }







    public function getCurrentUTC() {

        $datetime = date("Y-m-d H:i:s");
        $time_string = strtotime($datetime);
        return $time_string;
    }





    function array_put_to_position($array, $object, $position, $name = null) {
        $count = 0;
        $inserted = false;
        $return = array();

        foreach ($array as $k => $v) {
            // insert new object
            if ($count == $position) {
                if (!$name)
                    $name = $count;
                $return[$name] = $object;
                $inserted = true;
            }
            // insert old object
            $return[$k] = $v;
            $count++;
        }
        if (!$name)
            $name = $count;
        if (!$inserted)
            $return[$name];
        $array = $return;
        return $array;
    }

}
