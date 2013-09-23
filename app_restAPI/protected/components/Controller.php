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

    /**
     * Send raw HTTP response
     * @param int $status HTTP status code
     * @param string $body The body of the HTTP response
     * @param string $contentType Header content-type
     * @return HTTP response
     */
    protected function sendResponse($status = 204, $body = '', $contentType = 'application/json') {
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
            $response = $this->performSearch($returnType, $region, $searchString, $from, $size, true);
        } elseif ($requireType == 'uploadPhotoIDs') {
            $upload_Image_ids = $this->getUserInput($requireParams[1]);
            $raw_id = str_replace("test", "", $upload_Image_ids);
            $imageIDs = explode('%2C', $raw_id);
            $str_ImageIds = "";
            for ($i = 0; $i < sizeof($imageIDs); $i++) {
                $str_ImageIds = $str_ImageIds . '\"' . $imageIDs[$i] . '\"';
                if ($i + 1 < sizeof($imageIDs)) {
                    $str_ImageIds.=',';
                }
            }
            $response = $this->QueryStringByIds($returnType, $str_ImageIds, "id");
        } elseif ($requireType == 'collection') {
            $collection_id = $this->getUserInput($requireParams[1]);
            $owner_profile_id = $this->getUserInput($requireParams[2]);
            $response = $this->performEdit($returnType, $collection_id, $owner_profile_id);
        } elseif ($requireType == 'partner') {
            $partner_id_raw = $this->getUserInput($requireParams[1], false);
            $partner_id = str_replace("%2C", ",", $partner_id_raw);
            $partnerIds = explode(',', $partner_id);
            $str_partnerIds = "";
            $domain = $this->getDomain();
            $trendsUrl = $domain . "/profiles/";
            for ($i = 0; $i < sizeof($partnerIds); $i++) {
                $str_partnerIds = $str_partnerIds . '"' . $trendsUrl . $partnerIds[$i] . '"';
                if ($i + 1 < sizeof($partnerIds)) {
                    $str_partnerIds.=',';
                }
            }
            $response = $this->RequireByIds($returnType, $str_partnerIds, "profile.id");
        } elseif ($requireType == 'articleRelatedImage') {
            $article_id = $this->getUserInput($requireParams[1]);
            $owner_id = $this->getUserInput($requireParams[2]);
            $requestArray = array();
            $requestStringOne = 'couchbaseDocument.doc.photo.photo_articleId=' . $article_id;
            array_push($requestArray, $requestStringOne);
            $requestStringTwo = 'couchbaseDocument.doc.owner_id=' . $owner_id;
            array_push($requestArray, $requestStringTwo);
            $response = $this->performMustSearch($requestArray, $returnType, 'must');
        } elseif ($requireType == 'firstsearch') {
            $region = $this->getUserInput($requireParams[1]);
            $searchString = $this->getUserInput($requireParams[2]);
            $from = $this->getUserInput($requireParams[3]);
            $size = $this->getUserInput($requireParams[4]);
            $response = $this->getSearchResultsTotal($returnType, $region, $searchString, $from, $size, true);
        } elseif ($requireType == 'personalCollection') {
            $userid = $this->getUserInput($requireParams[1]);
            $collection_id = $this->getUserInput($requireParams[2], false);
            $requestArray = array();
            $requestStringOne = 'couchbaseDocument.doc.user.id=' . $userid;
            array_push($requestArray, $requestStringOne);
            $requestStringTwo = 'couchbaseDocument.doc.user.collections.id=' . $collection_id;
            array_push($requestArray, $requestStringTwo);
            $tempResult = $this->performMustSearch($requestArray, $returnType, 'must');
            $mega = CJSON::decode($tempResult, true);
            $mega = CJSON::encode($tempResult, true);
            // echo $mega;
            $collections = $mega['megas'][0]['user'][0]['collections'];
            $response = $this->getCollections($collections, $collection_id, $returnType);
        } else {
            $response = $this->performSearch($returnType, "", "huang");
        }
        return $response;
    }

    protected function performSearch($returnType, $region, $requestString, $from = 0, $size = 50, $noUser = false) {

        $requestArray = array();
        if ($region != null && $region != "") {
            $requestStringOne = 'couchbaseDocument.doc.region=' . $region;
            array_push($requestArray, $requestStringOne);
        }
        if ($requestString != null && $requestString != "") {
            $requestStringTwo = 'couchbaseDocument.doc.keywords=' . $requestString;
            array_push($requestArray, $requestStringTwo);
        }

        $tempResult = $this->performMustSearch($requestArray, $returnType, 'must', $from, $size, $noUser);
        return $tempResult;
    }

    protected function getmustQuestWithQueryString($queryString) {
        $mustQuery = explode('=', $queryString);
        $should = Sherlock\Sherlock::queryBuilder()->QueryString()->query($mustQuery[1])//$collection_id
                // ->default_field($mustQuery[0])
                ->default_operator('AND');
        return $should;
    }

    protected function performMustSearch($requestArray, $returnType, $search_type = "should", $from = 0, $size = 50, $noUser = false) {
        $request = $this->getElasticSearch();
        $request->from($from);
        $request->size($size);
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
//        if ($noUser == true) {
//            $must = $this->getmustQuestWithQueryString('couchbaseDocument.doc.type=user');
//            $bool->must_not($must);
//        }
        $request->query($bool);

        $response = $request->execute();
        //    CJSON::encode($hit['source']['doc']);
        //   return $response;
        $results = $this->getReponseResult($response, $returnType);
        return $results;
    }

    protected function getRequestResultByID($returnType, $requestString) {
        $request = $this->getElasticSearch();
//populate a Term query to start
        $should = Sherlock\Sherlock::queryBuilder()->Term()->term($requestString)//$collection_id
                ->field('couchbaseDocument.doc.id');
        $bool = Sherlock\Sherlock::queryBuilder()->Bool()->should($should);
        $response = $request->query($bool)->execute();
        if ($returnType == "mega" || $returnType == "megas") {
            $results = '{"' . $returnType . '":';
            $i = 0;
            foreach ($response as $hit) {
                $results .= CJSON::encode($hit['source']['doc']);

                if (++$i < count($response)) {
                    $results .= ',';
                }
            }
            $results .= '}';
        } else {
            $results = '{"' . $returnType . '":';
            $i = 0;
            foreach ($response as $hit) {
                $results .= CJSON::encode($hit['source']['doc'][$returnType][0]);

                if (++$i < count($response)) {
                    $results .= ',';
                }
            }
            $results .= '}';
        }
        return $results;
    }

    protected function QueryStringByIds($returnType, $ids, $default_field) {

        $request = $this->getElasticSearch();
        $request->from(0)
                ->size(100);
        $termQuery = Sherlock\Sherlock::queryBuilder()->Raw('{
                "bool": {
                    "must": [
                        {
                            "query_string": {
                                "default_field": "couchbaseDocument.doc.' . $default_field . '",
                                "query": " ' . $ids . ' "
                                                    }
                        }
                    ]
                }
            }');
        $response = $request->query($termQuery)->execute();
        $results = $this->getReponseResult($response, $returnType);

        return $results;
    }

    protected function RequireByIds($returnType, $ids, $default_field) {

        $request = $this->getElasticSearch();
        $request->from(0)
                ->size(100);

        $header = '{"ids": { "values": [';
        $footer = ']}}';
        $tempRquestIDs = "";
        $rawRequest = $header . $ids . $footer;
        $termQuery = Sherlock\Sherlock::queryBuilder()->Raw($rawRequest);
        $request->query($termQuery);

        $response = $request->execute();

        $results = $this->getReponseResult($response, $returnType);

        return $results;
    }

    protected function performRawSearch($returnType, $collection_id, $owner_profile_id) {
        $request = $this->getElasticSearch();
        $request->from(0)
                ->size(100);

        $must = Sherlock\Sherlock::queryBuilder()->QueryString()->query('"' . $collection_id . '"')
                ->default_field('couchbaseDocument.doc.collection_id');
        $must2 = Sherlock\Sherlock::queryBuilder()
                ->QueryString()->query('"' . $owner_profile_id . '"')
                ->default_field('couchbaseDocument.doc.owner_id');
        $bool = Sherlock\Sherlock::queryBuilder()->Bool()->must($must)->
                must($must2);
        $response = $request->query($bool)->execute();
        //   error_log(var_export(   $response['0']['took'], true));
        //   error_log(var_export($returnType, true));
        // error_log(var_export($response, true));

        $results = $this->getReponseResult($response, $returnType);
        // error_log(var_export($results, true));
        //   $results = $results['profile'];
        return $results;
    }

    protected function getSearchResultsTotal($returnType, $region, $requestString, $from = 0, $size = 50, $noUser) {
        $requestArray = array();
        if ($region != null && $region != "") {
            $requestStringOne = 'couchbaseDocument.doc.region=' . $region;
            array_push($requestArray, $requestStringOne);
        }
        if ($requestString != null && $requestString != "") {
            $requestStringTwo = 'couchbaseDocument.doc.keywords=' . $requestString;
            array_push($requestArray, $requestStringTwo);
        }
        $request = $this->getElasticSearch();
        $max = sizeof($requestArray);
        $bool = Sherlock\Sherlock::queryBuilder()->Bool();
        for ($i = 0; $i < $max; $i++) {
            $must = $this->getmustQuestWithQueryString($requestArray[$i]);
            $bool->must($must);
        }
        $request->query($bool);
        $tempResponse = $request->execute();
        $numberofresults = $tempResponse->total;
        $tempResponse = CJSON::encode($tempResponse);
        $tempResponse = CJSON::decode($tempResponse);
        $array = array();
        for ($int = 0; $int < sizeof($tempResponse); $int++) {
            $tempObject = $tempResponse[$int]['source']['doc'];
            array_push($array, $tempObject);
        }

        $tempId = time();
        $response["megas"] = $array;
        $response["id"] = $tempId;
        $response["numberofresults"] = $numberofresults;
        $result = CJSON::encode($response, true);
        $result = '{"stats":[' . $result;
        $result .= ']}';
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

    protected function getUserInput($request_string, $isRelaceDash = true) {

        $returnString = null;
        if ($request_string != null || $request_string != "") {
            $temp = explode('=', $request_string);
            $returnString = $temp[1];
        }

        if ($isRelaceDash) {
            $returnString = str_replace('-', '\-', $returnString);
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
        $request = $this->getElasticSearch();
        $termQuery = Sherlock\Sherlock::queryBuilder()->Raw($rawRequest);
        $request->query($termQuery);
        $response = $request->execute();
        $results = $this->getReponseResult($response, $returnType);
        return $results;
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

    protected function getDomain() {
        $host = $_SERVER['HTTP_HOST'];
        preg_match("/[^\.\/]+\.[^\.\/]+$/", $host, $matches);

        return trim($matches[0]);
    }

    public function getDocId($type, $id) {
        $docID = "";
        if ($type == "profile") {
            $docID = $this->getDomain () . "/profiles/" . $id;
            } elseif ($type == "photo") {
            $docID = $this->getDomain () . "/" . $id;
            }
            elseif ($type == "article") {
            $docID = $this->getDomain () . "/" . $id;
        }
        return $docID;
    }

}
