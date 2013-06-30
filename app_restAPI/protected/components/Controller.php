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

    protected function couchBaseConnection($bucket="test") {
        return new Couchbase("cb1.hubsrv.com:8091", "Administrator", "Pa55word", $bucket, true);
    }
    
    protected function couchBaseConnection_production() {
        return new Couchbase("cb1.hubsrv.com:8091", "Administrator", "Pa55word", "production", true);
    }

    protected function getS3BucketName($domain) {
        $cb = new Couchbase("cb1.hubsrv.com:8091", "", "", "default", true);
        $result = $cb->get($domain);
        $result_arr = CJSON::decode($result, true);
        return $result_arr["providers"]["S3bucket"];
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
        
        protected function getProviderConfigurationByName($domain,$name) {
        $cb = new Couchbase("cb1.hubsrv.com:8091", "", "", "default", true);
        $result = $cb->get($domain);
        $result_arr = CJSON::decode($result, true);
        return $result_arr["providers"][$name];
    }

    // function for connecting to s3. Using for move photo between buckets. (Tao)
    public function connectToS3() {
        $cb = new Couchbase("cb1.hubsrv.com:8091", "", "", "default", true);
        $key = explode(".", $_SERVER['HTTP_HOST']);
        $key = $key[1] . '.' . $key[2];
        $result = $cb->get($key);
        $result_arr = CJSON::decode($result, true);

//        error_log(var_export($result_arr));

        $client = Aws\S3\S3Client::factory(
                        $result_arr["providers"]["S3Client"]
        );

        return $client;
    }

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
        $id = (string) rand(99999999, 999999999) . $id;
        return $id;
    }

    protected function getRequestResult($searchString, $returnType) {
        $response = "";
        $requireParams = explode('&', $searchString);
        $requireType = $this->getUserInput($requireParams[0]);
        if ($requireType == 'search') {
            $region = $this->getUserInput($requireParams[1]);
            $searchString = $this->getUserInput($requireParams[2]);
            $response = $this->performSearch($returnType, $region, $searchString);
        } elseif ($requireType == 'collection') {
            $collection_id = $this->getUserInput($requireParams[1]);
            $owner_profile_id = $this->getUserInput($requireParams[2]);
            $response = $this->performRawSearch($returnType, $collection_id, $owner_profile_id);
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
            $tempResult = $this->performMustSearch($requestArray, $returnType);
            $mega = CJSON::decode($tempResult, true);
            $collections = $mega['megas'][0]['user'][0]['collections'];
            $response = $this->getCollections($collections, $collection_id, $returnType);
        } else {
            $response = $this->performSearch($returnType, "", "huang");
        }
        return $response;
    }

    protected function performSearch($returnType, $region, $requestString) {
        $settings['log.enabled'] = true;
        $sherlock = new \Sherlock\Sherlock($settings);

        $sherlock->addNode(Yii::app()->params['elasticSearchNode']);
//Build a new search request
        $request = $sherlock->search();

        $request->index("test")->type("couchbaseDocument")->from(1);
        $request->index("test")->type("couchbaseDocument")->size(50);
//populate a Term query to start
        $termQuery = Sherlock\Sherlock::queryBuilder()
                ->QueryString()
                ->fields("couchbaseDocument.doc.keywords")
                ->query($requestString)
                ->boost(2.5);

        $request->index(Yii::app()->params['elasticSearchIndex'])
                ->type("couchbaseDocument")
                ->from(10)
                ->size(50)
                ->query($termQuery);

        $response = $request->execute();

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

    protected function performMustSearch($requestArray, $returnType) {
        $settings['log.enabled'] = true;
        $sherlock = new \Sherlock\Sherlock($settings);
        $sherlock->addNode(Yii::app()->params['elasticSearchNode']);
        $request = $sherlock->search();
        $request->index("test")->type("couchbaseDocument")->from(1);
        $request->index("test")->type("couchbaseDocument")->size(50);
        $max = sizeof($requestArray);
        $bool = Sherlock\Sherlock::queryBuilder()->Bool();
        for ($i = 0; $i < $max; $i++) {
            $must = $this->getmustQuest($requestArray[$i]);
            $bool->must($must);
        }
        $request->query($bool);
        $response = $request->execute();
        $i = 0;
        $results = '{' . $returnType . ':[';
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

        $settings['log.enabled'] = true;
        $sherlock = new Sherlock\Sherlock($settings);
        $sherlock->addNode(Yii::app()->params['elasticSearchNode']);
//Build a new search request
        $request = $sherlock->search();
//populate a Term query to start
        $termQuery = Sherlock\Sherlock::queryBuilder()
                ->QueryString()
                ->fields("couchbaseDocument.doc.id")
                ->query($requestString)
                ->boost(2.5);
        $request->index(Yii::app()->params['elasticSearchIndex'])
                ->type("couchbaseDocument")
                ->size(7)
                ->query($termQuery);
        $response = $request->execute();
        $results = '{"' . $returnType . '":';
        $i = 0;
        foreach ($response as $hit) {
            $results .= CJSON::encode($hit['source']['doc']);
            if (++$i < count($response)) {
                $results .= ',';
            }
        }
        $results .= '}';
        return $results;
    }

    protected function performRawSearch($returnType, $collection_id, $owner_profile_id) {
        $settings['log.enabled'] = true;
        $sherlock = new Sherlock\Sherlock($settings);
        $sherlock->addNode(Yii::app()->params['elasticSearchNode']);
        $request = $sherlock->search();
        $must = Sherlock\Sherlock::queryBuilder()->Term()->term($collection_id)//$collection_id
                ->field('couchbaseDocument.doc.collection_id');
        $must2 = Sherlock\Sherlock::queryBuilder()->Term()->term($owner_profile_id)
                ->field('couchbaseDocument.doc.owner_profile_id');
        $bool = Sherlock\Sherlock::queryBuilder()->Bool()->must($must)
                ->must($must2)
                ->boost(2.5);
        $response = $request->query($bool)->execute();

        $results = '{"' . $returnType . '":[';

//Iterate over the hits and print out some data
        $i = 0;
        foreach ($response as $hit) {

            $results .= CJSON::encode($hit['source']['doc']);
            if (++$i !== count($response)) {
                $results .= ',';
            }
        }
        $results .= ']}';

        return $results;
    }

    protected function getSearchResultsTotal($returnType, $region, $requestString) {
        $settings['log.enabled'] = true;
        $sherlock = new \Sherlock\Sherlock($settings);
        $sherlock->addNode(Yii::app()->params['elasticSearchNode']);
//Build a new search request
        $request = $sherlock->search();
        $request->index("test")->type("couchbaseDocument")->from(1);
        $request->index("test")->type("couchbaseDocument")->size(50);
//populate a Term query to start
        $termQuery = Sherlock\Sherlock::queryBuilder()
                ->QueryString()
                ->fields("couchbaseDocument.doc.keywords")
                ->query($requestString)
                ->boost(2.5);

        $request->index(Yii::app()->params['elasticSearchIndex'])
                ->type("couchbaseDocument")
                ->query($termQuery);

        $response = $request->execute();
// $result = "";
//Iterate over the hits and print out some data
        $result = '{"' . $returnType . '":[{"id":"hit","hits":"' . $response->total;
        $result .= '"}]}';
        return $result;
    }

    protected function getUserInput($request_string) {
        $returnString = "";
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

    protected function getmustQuest($queryString) {
        $mustQuery = explode('=', $queryString);
        $should = Sherlock\Sherlock::queryBuilder()->Term()->term($mustQuery[1])//$collection_id
                ->field($mustQuery[0]);
        return $should;
    }

    protected function getCollections($collections, $collection_id, $returnType) {

        $request_ids = $this->getSelectedCollectionIds($collections, $collection_id);
        $request_ids = explode(',', $request_ids);
        $header = '{"ids": { "values": [';
        $footer = ']}}';
        $tempRquestIDs = "";
        for ($i = 0; $i < sizeof($request_ids); $i++) {
            $tempRquestIDs.= '"' . $this->getDomain() . "/" . trim($request_ids[$i]) . '"';
            if ($i < sizeof($request_ids) - 1) {
                $tempRquestIDs.=',';
            }
        }
        $rawRequest = $header . $tempRquestIDs . $footer;
        error_log($rawRequest);
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
        return $matches[0];
    }

    protected function getSelectedCollectionIds($collections, $collection_id) {
        $max = sizeof($collections);
        $request_ids;
        for ($i = 0; $i < $max; $i++) {
            $thisCollection = $collections[$i];
            if ($thisCollection["id"] == $collection_id) {
                $request_ids = $thisCollection['collection_ids'];
            }
        }
        return $request_ids;
    }

    protected function getReponseResult($response, $returnType) {

        $results = '{"' . $returnType . '":[';

        $i = 0;
        foreach ($response as $hit) {
            $results .= CJSON::encode($hit['source']['doc']);
            if (++$i !== count($response)) {
                $results .= ',';
            }
        }
        $results .= ']}';
        return $results;
    } 
    
   
    protected function getImageString($type, $url) {
        $im = "";
        if ($type == "image/png") {
            $im = imagecreatefrompng($url);
        } elseif ($type == "image/jpeg") {
            $im = imagecreatefromjpeg($url);
        }
        return $im;
    }
    
    protected function getImageInfo($url) {
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_HEADER, 0);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_BINARYTRANSFER, 1);
        $tim = curl_exec($ch);
        
        if (@$imageInfo = getimagesizefromstring($tim)) {
            return $imageInfo;
        } else {
            $message = $url . "\r\n" . date("Y-m-d H:i:s").$tim. " \r\n";
            $this->writeToLog("/home/devbox/NetBeansProjects/test/AddImage_unsucces.log", $message);
            return false;
        }
    }
    
}
