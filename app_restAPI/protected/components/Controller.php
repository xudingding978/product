
<?php

header('Access-Control-Allow-Origin: *');

session_start();

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
        return new Couchbase("cb1.hubsrv.com:8091", "", "", "production", true);
    }

    protected function couchBaseConnection_test() {
        return new Couchbase("cb1.hubsrv.com:8091", "", "", "test", true);
    }

    protected function couchBaseConnection_develop() {
        return new Couchbase("cb1.hubsrv.com:8091", "", "", "develop", true);
    }

    protected function getS3Connection($domain) {
        $cb = new Couchbase("cb1.hubsrv.com:8091", "", "", "default", true);
        $result = $cb->get($domain);
        $result_arr = CJSON::decode($result, true);
        $client = Aws\S3\S3Client::factory($result_arr["providers"]["S3Client"]);
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
            $location = $this->getUserInput($requireParams[5]);

            $classification = $this->getUserInput($requireParams[6]);
            $response = $this->getSearchResultsWithAnalysis($region, $searchString, $from, $size, $location, $classification);

            $response = $this->profileSetting($response, $returnType, 'firstsearch');
        } elseif ($requireType == 'collection') {
            $collection_id = $this->getUserInput($requireParams[1]);
            $owner_profile_id = $this->getUserInput($requireParams[2]);
            $response = $this->getCollectionReults($collection_id, $owner_profile_id);
            $response = $this->profileSetting($response, $returnType, 'collection');
        } elseif ($requireType == 'partner') {
            $response = $this->getPartnerResults($requireParams[1]);
            $response = $this->getReponseResult($response, $returnType);
        } elseif ($requireType == 'partnerSearch') {
            $response = $this->getPartnerResults($requireParams[1], $requireParams[2]);
            $response = $this->getReponseResult($response, $returnType);
        } elseif ($requireType == 'articleRelatedImage') {
            $article_id = $this->getUserInput($requireParams[1]);
            $owner_id = $this->getUserInput($requireParams[2]);
            $response = $this->getArticleRelatedImages($article_id, $owner_id);
            $response = $this->getReponseResult($response, $returnType);
            //$response = $this->profileSetting($response, $returnType, 'profilecollection');
        } elseif ($requireType == 'firstsearch') {
            $region = $this->getUserInput($requireParams[1]);
            $searchString = $this->getUserInput($requireParams[2]);
            $from = $this->getUserInput($requireParams[3]);
            $size = $this->getUserInput($requireParams[4]);
            $location = $this->getUserInput($requireParams[5]);


            $classification = $this->getUserInput($requireParams[6]);
            //$commercial = $this->getUserInput($requireParams[7]);


            $response = $this->getSearchResultsWithAnalysis($region, $searchString, $from, $size, $location, $classification);
            $response = $this->profileSetting($response, $returnType, 'firstsearch');
        } elseif ($requireType == 'personalCollection') {
            $userid = $this->getUserInput($requireParams[1]);
            $collection_id = $this->getUserInput($requireParams[2], false);
            $response = $this->searchCollectionItem($userid, $collection_id, $returnType);
            //$response = $this->profileSetting($response, $returnType, 'profilecollection');
        } elseif ($requireType == 'profileCollection') {
            $userid = $this->getUserInput($requireParams[1]);
            $collection_id = $this->getUserInput($requireParams[2], false);
            $response = $this->searchProfileCollectionItem($userid, $collection_id, $returnType);
            //$response = $this->profileSetting($response, $returnType, 'profilecollection');
        } elseif ($requireType == 'defaultSearch') {
            $response = $this->defaultSearchItem('21051211514', 'editor-picks', $returnType);
            //$response = $this->profileSetting($response, $returnType, 'profilecollection');
        } elseif ($requireType == 'video') {
            $videoOwnerId = $this->getUserInput($requireParams[1]);
            $response = $this->getVideoesByOwner($returnType, $videoOwnerId);
        } elseif ($requireType == 'pdf') {
            $owner_id = $this->getUserInput($requireParams[1]);
            $response = $this->getPdfByOwner($owner_id);
            $response = $this->profileSetting($response, $returnType, 'pdf');
        } elseif ($requireType == 'singleVideo') {

            $videoid = $this->getUserInput($requireParams[1]);
            $response = $this->getRequestResultByID($returnType, $videoid);
        } else {
            $response = $this->getSearchResults("", "huang");
        }
        return $response;
    }

    protected function getPdfByOwner($owner_id) {
        $cb = $this->couchBaseConnection();

        $tempResult = $this->getDomain() . "/profiles/" . $owner_id;
        $tempResult = $cb->get($tempResult);



        $mega = CJSON::decode($tempResult, true);
        if (!isset($mega['profile'][0]['pdf_id']) || $mega['profile'][0]['pdf_id'] == null || $mega['profile'][0]['pdf_id'] == 'undefined' || $mega['profile'][0]['pdf_id'] == "") {
            $mega['profile'][0]['pdf_id'] = "";
        }
        $pdf_Id = explode(",", $mega['profile'][0]['pdf_id']);
        $response = Array();
        $megas = Array();


        for ($i = 0; $i < sizeof($pdf_Id); $i++) {
            if ($pdf_Id[$i] !== "") {
                $owner = $this->getDomain() . "/" . trim($pdf_Id[$i]);
                $mega = $cb->get($owner);
                $megaNew = CJSON::decode($mega, true);
                if ($megaNew !== null && $megaNew !== "") {
                    array_push($megas, $megaNew);
                }
            }
        }



        $response["megas"] = $megas;
        return CJSON::encode($response);
    }

    protected function getVideoesByOwner($returnType, $videoOwnerId) {
        $conditions = array();
        $requestStringOne = 'couchbaseDocument.doc.type=video';
        array_push($conditions, $requestStringOne);
        $requestStringTwo = 'couchbaseDocument.doc.owner_id=' . $videoOwnerId;
        array_push($conditions, $requestStringTwo);


        $tempResult = $this->searchWithCondictions($conditions, 'must');
        $response = $this->getReponseResult($tempResult, $returnType);

        return $response;
    }

    protected function defaultSearchItem($userid, $collection_id, $returnType) {

        $cb = $this->couchBaseConnection();

        $tempResult = $this->getDomain() . "/users/" . $userid;
        $tempResult = $cb->get($tempResult);



        $mega = CJSON::decode($tempResult, true);
        if (!isset($mega['user'][0]['collections'])) {
            $collections = array();
        } else {
            $collections = $mega['user'][0]['collections'];
        }

        $collection = null;



        for ($i = 0; $i < sizeof($collections); $i++) {

            if ($collections[$i]['id'] === $collection_id) {
                $collection = $collections[$i];

                break;
            }
        }
        $collectionIds = explode(",", $collection['collection_ids']);
        $response = Array();
        $megas = Array();


        for ($i = 0; $i < sizeof($collectionIds); $i++) {
            if (sizeof($megas) > 20) {
                break;
            }
            if ($collectionIds[$i] !== "") {
                $owner = $this->getDomain() . "/" . trim($collectionIds[$i]);
                $mega = $cb->get($owner);
                $megaNew = CJSON::decode($mega, true);
                if ($megaNew !== null && $megaNew !== "") {
                    array_push($megas, $megaNew);
                }
            }
        }

        $response["megas"] = $megas;
        return CJSON::encode($response);

        //$response = $this->getCollections($collections, $collection_id, $returnType);
    }

    protected function searchCollectionItem($userid, $collection_id, $returnType) {

        $cb = $this->couchBaseConnection();

        $tempResult = $this->getDomain() . "/users/" . $userid;
        $tempResult = $cb->get($tempResult);



        $mega = CJSON::decode($tempResult, true);
        if (!isset($mega['user'][0]['collections'])) {
            $collections = array();
        } else {
            $collections = $mega['user'][0]['collections'];
        }

        $collection = null;



        for ($i = 0; $i < sizeof($collections); $i++) {

            if ($collections[$i]['id'] === $collection_id) {
                $collection = $collections[$i];

                break;
            }
        }
        $collectionIds = explode(",", $collection['collection_ids']);
        $response = Array();
        $megas = Array();


        for ($i = 0; $i < sizeof($collectionIds); $i++) {
            if ($collectionIds[$i] !== "") {
                $owner = $this->getDomain() . "/" . trim($collectionIds[$i]);
                $mega = $cb->get($owner);
                $megaNew = CJSON::decode($mega, true);
                if ($megaNew !== null && $megaNew !== "") {
                    array_push($megas, $megaNew);
                }
            }
        }

        $response["megas"] = $megas;
        return CJSON::encode($response);

        //$response = $this->getCollections($collections, $collection_id, $returnType);
    }

    protected function searchProfileCollectionItem($userid, $collection_id, $returnType) {
        $conditions = array();
        $userid = urldecode($userid);
        $requestStringOne = 'couchbaseDocument.doc.profile.id=' . $userid;

        array_push($conditions, $requestStringOne);

        $collection_id = urldecode($collection_id);
        $requestStringTwo = 'couchbaseDocument.doc.profile.collections.id=' . $collection_id;
        array_push($conditions, $requestStringTwo);
        $tempResult = $this->searchWithCondictions($conditions, 'must');
        $tempResult = $this->getReponseResult($tempResult, $returnType);

        $mega = CJSON::decode($tempResult, true);

        if (!isset($mega['megas'][0]['profile'][0]['collections'])) {
            $collections = array();
        } else {
            $collections = $mega['megas'][0]['profile'][0]['collections'];
        }

        for ($i = 0; $i < sizeof($collections); $i++) {
            if ($collections[$i]['id'] === $collection_id) {
                $collection = $collections[$i];
                break;
            }
        }
        if (isset($collection)) {
            $collectionIds = explode(",", $collection['collection_ids']);
            $response = Array();
            $megas = Array();
            $cb = $this->couchBaseConnection();

            for ($i = 0; $i < sizeof($collectionIds); $i++) {
                if ($collectionIds[$i] !== "") {
                    $owner = $this->getDomain() . "/" . trim($collectionIds[$i]);
                    $mega = $cb->get($owner);
                    $megaNew = CJSON::decode($mega, true);
                    if ($megaNew !== null && $megaNew !== "") {
                        array_push($megas, $megaNew);
                    }
                }
            }

            $response["megas"] = $megas;
        } else {
            $response = Array();
            $megas = Array();
            $response["megas"] = $megas;
        }
        return CJSON::encode($response);
    }

    public function fixUserpicture() {
        
    }

    protected function getSearchResults($region, $requestString, $from = 0, $size = 50, $location = 'Global', $classification = "All") {

        $conditions = array();
        if ($region != null && $region != "") {
            $requestStringOne = 'couchbaseDocument.doc.region=' . $region;
            array_push($conditions, $requestStringOne);
        }
        if ($requestString != null && $requestString != "") {
            $requestStringTwo = '_all=' . $requestString;
            array_push($conditions, $requestStringTwo);
        }


        $results = $this->searchWithCondictions($conditions, 'must', $from, $size, $location, $classification);

        return $results;
    }

    protected function getmustQuestWithQueryString($queryString) {
        $mustQuery = explode('=', $queryString);
        $should = Sherlock\Sherlock::queryBuilder()->QueryString()->query($mustQuery[1])//$collection_id
                ->default_field($mustQuery[0])
                ->default_operator('AND');
        return $should;
    }

    protected function searchWithMultiMatch($queryString, $from = 0, $size = 50, $location = 'Global', $classification = "All") {
        //  $request = $this->getElasticSearch();
        $date = date("Y-m-d h:m:s");
        $timestamp = strtotime($date);
        //  $request->from($from)
        //           ->size($size);
        $location_filter = null;
        $classification_filter = null;
        if ($location !== 'Global' && $location !== 'undefined' && $location !== '' && $location !== null) {
            $location_filter = 1;
            if ($location == 'United+States') {
                $location = $location . '+Canada';
            }
        }
        if ($classification !== 'All' && $classification !== 'undefined' && $classification !== '' && $classification !== null) {
            $classification_filter = 1;
        }



        if ($classification_filter != null) {
            $filter = ' "filter":{
                "query": {
                  "bool": {
                    "must": [ 
                    
                     {
                      "queryString": {
                        "default_field": "couchbaseDocument.doc.classification",
                        "query": "' . $classification . '"
                      }
                    },
                       {
                      "queryString": {
                        "default_field": "couchbaseDocument.doc.is_deleted",
                        "query": 0
                      }
                    }    
                    ],
                                              "must_not": [
                    {
                    "queryString": {
                        "default_field": "couchbaseDocument.doc.type",
                        "query": "user"
                      }
                  },
                  {
                    "queryString": {
                        "default_field": "couchbaseDocument.doc.type",
                        "query": "conversation"
                      }
                  }
                  ]
                }
                }
              },';
            if ($location_filter != null) {

                $filter = ' "filter":{
                "query": {
                  "bool": {
                    "must": [ {
                      "queryString": {
                        "default_field": "couchbaseDocument.doc.classification",
                        "query": "' . $classification . '"
                      }
                    },
                    {
                      "queryString": {
                        "default_field": "couchbaseDocument.doc.country",
                        "query": "' . $location . '"
                      }
                    },
                       {
                      "queryString": {
                        "default_field": "couchbaseDocument.doc.is_deleted",
                        "query": 0
                      }
                    }   
                    ],
                      "must_not": [
                    {
                    "queryString": {
                        "default_field": "couchbaseDocument.doc.type",
                        "query": "user"
                      }
                  },
                  {
                    "queryString": {
                        "default_field": "couchbaseDocument.doc.type",
                        "query": "conversation"
                      }
                  }
                  ]
                }
                }
              },';
            }
        }

        if ($classification_filter == null) {

            $filter = "";
            if ($location_filter != null) {
                $filter = ' "filter":{
                "query": {
                  "bool": {
                    "must": [     {
                      "queryString": {
                        "default_field": "couchbaseDocument.doc.country",
                        "query": "' . $location . '"
                      }
                    },
                       {
                      "queryString": {
                        "default_field": "couchbaseDocument.doc.is_deleted",
                        "query": 0
                      }
                    }   
                    ],
                    "must_not": [
                    {
                    "queryString": {
                        "default_field": "couchbaseDocument.doc.type",
                        "query": "user"
                      }
                  },
                  {
                    "queryString": {
                        "default_field": "couchbaseDocument.doc.type",
                        "query": "conversation"
                      }
                  }
                  ]
                }
                }
              },';
            } else {
                $filter = ' "filter":{
                "query": {
                  "bool": {

                    "must":   {
                      "queryString": {
                        "default_field": "couchbaseDocument.doc.is_deleted",
                        "query": 0
                      }
                    } ,

                    "must_not": [
                    {
                    "queryString": {
                        "default_field": "couchbaseDocument.doc.type",
                        "query": "user"
                      }
                  },
                  {
                    "queryString": {
                        "default_field": "couchbaseDocument.doc.type",
                        "query": "conversation"
                      }
                  }
                  ]
                }
                }
              },';
            }
        }

        $termQuery = '{
  "query": {
    "function_score": {
      "functions": [
        {
          "script_score": {
            "script": "doc[' . "'" . "couchbaseDocument.doc.boost" . "'" . '].value/100+1"
          }
        },

        {
          "script_score": {
            "script": "3-(8/(sqrt(sqrt(doc[' . "'" . "couchbaseDocument.doc.likes_count" . "'" . '].value*8+doc[' . "'" . "couchbaseDocument.doc.view_count" . "'" . '].value*4+doc[' . "'" . "couchbaseDocument.doc.share_count" . "'" . '].value*2+doc[' . "'" . "couchbaseDocument.doc.comment_count" . "'" . '].value*2+256))))"
          }
        },
        {
          "gauss": {
            "couchbaseDocument.doc.accessed": {
              "origin": "' . $timestamp . '",
              "scale": "31536000",
              "decay": "0.5"
            }
          }
        }
      ],

          "query": {
            "multi_match": {
          "query": "' . $queryString . '",
              "fields": [
                "couchbaseDocument.doc.keyword.keyword_name^10",
                "country",
                "owner_title^2",
                "region",
                "object_title^2",
                "object_description^4",
                "couchbaseDocument.doc.article.credits.credits_text^8",
                "couchbaseDocument.doc.photo.photo_heliumMediaId^5",
                "couchbaseDocument.doc.article.article_spark_job_id^5"
              ]
            }
          }

    }
  },' . $filter . '

  "from": "' . $from . '",
  "size": "' . $size . '",
  "sort": []
}';

//        $request->sort($sort1, $sort2);
        //  $response = $request->query($termQuery)->execute();
        //      return $response;
//               $log_path = "/home/devbox/Documents/searchquery.log";
//        $this->writeToLog($log_path, $termQuery);
        $index = Yii::app()->params['elasticSearchIndex'];
        //       $ch = curl_init("http://es1.hubsrv.com:9200/develop/_search");
        $ch = curl_init("http://es1.hubsrv.com:9200/" . $index . "/_search");
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
        curl_setopt($ch, CURLOPT_POSTFIELDS, $termQuery);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
        $result = curl_exec($ch);
        $result_arr = CJSON::decode($result, true);



        $record_arr = $result_arr['hits']['hits'];
        $new_arr = array();
        $new_arr['total'] = $result_arr['hits']['total'];
        foreach ($record_arr as $return) {
            $temp = array();
            $temp['index'] = $return['_index'];
            $temp['type'] = $return['_type'];
            $temp['id'] = $return['_id'];
            $temp['score'] = $return['_score'];
            $temp['source'] = $return['_source'];
            array_push($new_arr, $temp);
        }
        //      $content1=  var_export($new_arr,true);
        //     $fileName1="/home/devbox/Documents/output.log";
        //    $this->writeToLog($fileName1, $content1);
        //     $start_time = date('D M d Y H:i:s') . ' GMT' . date('O') . ' (' . date('T') . ')';

        $new_return_arr = array();
        $new_return_arr['took'] = $result_arr['took'];
        $new_return_arr['timed_out'] = $result_arr['timed_out'];
        $new_return_arr['total'] = $result_arr['hits']['total'];
        $new_return_arr['max_score'] = $result_arr['hits']['max_score'];
        $new_return_arr['hits'] = $new_arr;
        //     $content2=  var_export($new_return_arr,true);
        //  $fileName2="/home/devbox/Documents/output1.log";
        //  $this->writeToLog($fileName2, $content2);
        return $new_arr;
    }

    protected function writeToLog($fileName, $content) {
        //   $my_file = '/home/devbox/NetBeansProjects/test/addingtocouchbase_success.log';
        $handle = fopen($fileName, 'a') or die('Cannot open file:  ' . $fileName);
        $output = "\n" . $content;
        fwrite($handle, $output);
        fclose($handle);
    }

    protected function searchWithCondictions($conditions, $search_type = "should", $from = 0, $size = 50, $location = 'Global', $classification = "All") {
        $request = $this->getElasticSearch();
        $request->from($from);
        $request->size($size);
        if ($location !== 'Global' && $location !== 'undefined' && $location !== '' && $location !== null) {
//            $filter = Sherlock\Sherlock::filterBuilder()->Raw('{"query": {
//                "queryString": {
//                  "default_field": "couchbaseDocument.doc.country",
//                  "query": "' . $location . '"
//                }
//              }}');
            $location_filter = 1;
        }
        if ($classification != "All") {

            $filter = Sherlock\Sherlock::filterBuilder()->Raw('{
                "query": {
                  "bool": {
                    "must": [ 
                    
                     {
                      "queryString": {
                        "default_field": "couchbaseDocument.doc.classification",
                        "query": "' . $classification . '"
                      }
                    },
                        {
                      "queryString": {
                        "default_field": "couchbaseDocument.doc.is_deleted",
                        "query": 0
                      }
                    }   
                    ],
                    "must_not": [
                    {
                    "queryString": {
                        "default_field": "couchbaseDocument.doc.type",
                        "query": "user"
                      }
                  },
                  {
                    "queryString": {
                        "default_field": "couchbaseDocument.doc.type",
                        "query": "conversation"
                      }
                  }
                  ]
                }
                }
              }');
            if ($location != "Global") {

                $filter = Sherlock\Sherlock::filterBuilder()->Raw('{
                "query": {
                  "bool": {
                    "must": [ {
                      "queryString": {
                        "default_field": "couchbaseDocument.doc.classification",
                        "query": "' . $classification . '"
                      }
                    },
                    {
                      "queryString": {
                        "default_field": "couchbaseDocument.doc.country",
                        "query": "' . $location . '"
                      }
                    },
                        {
                      "queryString": {
                        "default_field": "couchbaseDocument.doc.is_deleted",
                        "query": 0
                      }
                    }       
                    ],
                     "must_not": [
                    {
                    "queryString": {
                        "default_field": "couchbaseDocument.doc.type",
                        "query": "user"
                      }
                  },
                  {
                    "queryString": {
                        "default_field": "couchbaseDocument.doc.type",
                        "query": "conversation"
                      }
                  }
                  ]
                }
                }
              }');
            }
            $request->filter($filter);
        }

        if ($classification == "All") {

            if ($location !== "Global") {

                $filter = Sherlock\Sherlock::filterBuilder()->Raw('{
                "query": {
                  "bool": {
                    "must": [     {
                      "queryString": {
                        "default_field": "couchbaseDocument.doc.country",
                        "query": "' . $location . '"
                      }
                    },
                        {
                      "queryString": {
                        "default_field": "couchbaseDocument.doc.is_deleted",
                        "query": 0
                      }
                    }     
                    ],
                     "must_not": [
                    {
                    "queryString": {
                        "default_field": "couchbaseDocument.doc.type",
                        "query": "user"
                      }
                  },
                  {
                    "queryString": {
                        "default_field": "couchbaseDocument.doc.type",
                        "query": "conversation"
                      }
                  }
                  ]
                }
                }
              }');
                $request->filter($filter);
            } else {

                $filter = Sherlock\Sherlock::filterBuilder()->Raw('{
                "query": {
                  "bool": {

                    "must":   {
                      "queryString": {
                        "default_field": "couchbaseDocument.doc.is_deleted",
                        "query": 0
                      }
                    } ,

                     "must_not": [
                    {
                    "queryString": {
                        "default_field": "couchbaseDocument.doc.type",
                        "query": "user"
                      }
                  },
                  {
                    "queryString": {
                        "default_field": "couchbaseDocument.doc.type",
                        "query": "conversation"
                      }
                  }
                  ]
                }
                }
              }');
                $request->filter($filter);
            }
        }
        $max = sizeof($conditions);
        $bool = Sherlock\Sherlock::queryBuilder()->Bool();
        for ($i = 0; $i < $max; $i++) {
            $must = $this->getmustQuestWithQueryString($conditions[$i]);
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

        return $response;
    }



    protected function searchArticleWithCondictions($conditions, $search_type = "should", $from = 0, $size = 50, $location = 'Global') {
        $request = $this->getElasticSearch();
        $request->from($from);
        $request->size($size);
        if ($location !== 'Global' && $location !== 'undefined' && $location !== '' && $location !== null) {
            $filter = Sherlock\Sherlock::filterBuilder()->Raw('{"query": {
                "queryString": {
                  "default_field": "couchbaseDocument.doc.country",
                  "query": "' . $location . '"
                }
              }}');
            $request->filter($filter);
        }
        $max = sizeof($conditions);
        $bool = Sherlock\Sherlock::queryBuilder()->Bool();
        for ($i = 0; $i < $max; $i++) {
            $must = $this->getmustQuestWithQueryString($conditions[$i]);
            if ($search_type == "must") {
                $bool->must($must);
            } else if ($search_type == "should") {
                $bool->must($must);
            } else {
                echo "no such search type, please input: must or should as a search type.";
            }
        }
        $sort = Sherlock\Sherlock::sortBuilder();
        $sort1 = $sort->Field()->name("couchbaseDocument.doc.photo.photo_isExtra")->order('asd');
        $sort2 = $sort->Field()->name("couchbaseDocument.doc.photo.photo_sequence")->order("asd");

        $request->query($bool);
        $request->sort($sort1, $sort2);
        $response = $request->execute();

        return $response;
    }

    protected function getRequestResultByID($returnType, $requestString) {
        $request = $this->getElasticSearch();
        $should = Sherlock\Sherlock::queryBuilder()->Term()->term($requestString)//$collection_id
                ->field('couchbaseDocument.doc.id');
        $bool = Sherlock\Sherlock::queryBuilder()->Bool()->should($should);
        $response = $request->query($bool)->execute();
        if ($returnType == "mega") {
            $results = '{"' . $returnType . '":';
            $i = 0;
            foreach ($response as $hit) {
                $results .= CJSON::encode($hit['source']['doc']);

                if (++$i < count($response)) {
                    $results .= ',';
                }
            }
            $results .= '}';
        } else if ($returnType == "megas") {
            $results = '{"' . $returnType . '":[';
            $i = 0;
            foreach ($response as $hit) {
                $results .= CJSON::encode($hit['source']['doc']);

                if (++$i < count($response)) {
                    $results .= ',';
                }
            }
            $results .= ']}';
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

    protected function RequireByIds($ids, $size, $keyword = null) {

        $request = $this->getElasticSearch();
        $request->from(0)
                ->size($size);
        $header = '{"ids": { "values": [';
        $footer = ']}}';
        $tempRquestIDs = "";
        $rawRequest = $header . $ids . $footer;
        $termQuery = Sherlock\Sherlock::queryBuilder()->Raw($rawRequest);
        if (isset($keyword)) {
            $filter = Sherlock\Sherlock::filterBuilder()->Raw('{"query": {
                "queryString": {
                  "default_field": "couchbaseDocument.doc.profile.profile_name",
                  "query": "' . $keyword . '"
                }
              }}');
            $request->filter($filter);
        }
        $request->query($termQuery);
        $response = $request->execute();
        return $response;
    }

    protected function getCollectionReults($collection_id, $owner_profile_id) {
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


        return $response;
    }

    protected function getProfileReults($owner_profile_id) {

        $request = $this->getElasticSearch();
        $request->from(0)
                ->size(1000);

        $must = Sherlock\Sherlock::queryBuilder()
                ->QueryString()->query('"' . $owner_profile_id . '"')
                ->default_field('couchbaseDocument.doc.owner_id');
        $bool = Sherlock\Sherlock::queryBuilder()->Bool()->must($must);
        $response = $request->query($bool)->execute();
        return $response;
    }

    protected function profileSetting($tempResult, $returnType, $type) {
        $profile_id = "";
        if ($type !== 'collection') {
            $tempResult = CJSON::decode($tempResult);
        }
        $cb = $this->couchBaseConnection();
        if ($type === 'firstsearch') {

            for ($i = 0; $i < sizeof($tempResult['stats'][0]['megas']); $i++) {
                $hit = $tempResult['stats'][0]['megas'][$i];
                if (isset($hit['owner_id'])) {
                    $profile_id = $hit['owner_id'];
                    $domain = $this->getDomain();
                    $docID_profile = $domain . "/profiles/" . trim($profile_id);
                    $tempMega_profile = $cb->get($docID_profile);
                    $mega_profile = CJSON::decode($tempMega_profile, true);
                    $profile_editors = (isset($mega_profile["profile"][0]["profile_editors"])) ? $mega_profile["profile"][0]["profile_editors"] : '*@trendsideas.com';
                    $profile_name = (isset($mega_profile["profile"][0]["profile_name"])) ? $mega_profile["profile"][0]["profile_name"] : 'Trends Ideas';
                    $profile_pic = (isset($mega_profile["profile"][0]["profile_pic_url"])) ? $mega_profile["profile"][0]["profile_pic_url"] : 'http://s3.hubsrv.com/trendsideas.com/profiles/new-home-trends/profile_picture/profile_picture_192x192.jpg';
                    $tempResult['stats'][0]['megas'][$i]['editors'] = $profile_editors;
                    $tempResult['stats'][0]['megas'][$i]['owner_title'] = $profile_name;
                    $tempResult['stats'][0]['megas'][$i]['owner_profile_pic'] = $profile_pic;
                    if (isset($mega_profile['classification'])) {
                        $profile_classification = $mega_profile['classification'];
                        $tempResult['stats'][0]['megas'][$i]['classification'] = $profile_classification;
                    }
                    $profile_editor = (isset($mega_profile["profile"][0]["profile_editor"])) ? $mega_profile["profile"][0]["profile_editor"] : '';
                    $profile_administrator = (isset($mega_profile["profile"][0]["profile_administrator"])) ? $mega_profile["profile"][0]["profile_administrator"] : '';
                    $profile_creator = (isset($mega_profile["profile"][0]["profile_creator"])) ? $mega_profile["profile"][0]["profile_creator"] : '';
                    $tempResult['stats'][0]['megas'][$i]['profile_editor'] = $profile_editor;
                    $tempResult['stats'][0]['megas'][$i]['profile_administrator'] = $profile_administrator;
                    $tempResult['stats'][0]['megas'][$i]['profile_creator'] = $profile_creator;
                    $tempResult['stats'][0]['megas'][$i]['owner_contact_email'] = (isset($mega_profile["profile"][0]["owner_contact_email"])) ? $mega_profile["profile"][0]["owner_contact_email"] : "";
                    $tempResult['stats'][0]['megas'][$i]['owner_contact_cc_emails'] = (isset($mega_profile["profile"][0]["owner_contact_cc_emails"])) ? $mega_profile["profile"][0]["owner_contact_cc_emails"] : "";
                    $tempResult['stats'][0]['megas'][$i]['owner_contact_bcc_emails'] = (isset($mega_profile["profile"][0]["owner_contact_bcc_emails"])) ? $mega_profile["profile"][0]["owner_contact_bcc_emails"] : "";
                    if (isset($tempResult['stats'][0]['megas'][$i]['photo'][0]['tags'])) {
                        $tempResult['stats'][0]['megas'][$i]['photo'][0]['tags'] = array();
                    }
                    if ($tempResult['stats'][0]['megas'][$i]['type'] !== "profile") {
                        $tempResult['stats'][0]['megas'][$i]['keyword'] = array();
                    }
                }
            }
        } else if ($type === 'singleMega') {
            if (isset($tempResult['mega'])) {
                $hit = $tempResult['mega'];
                if (isset($hit['owner_id'])) {
                    $profile_id = $hit['owner_id'];
                    $domain = $this->getDomain();
                    $docID_profile = $domain . "/profiles/" . trim($profile_id);
                    $tempMega_profile = $cb->get($docID_profile);
                    $mega_profile = CJSON::decode($tempMega_profile, true);
                    $profile_editors = (isset($mega_profile["profile"][0]["profile_editors"])) ? $mega_profile["profile"][0]["profile_editors"] : '*@trendsideas.com';
                    $profile_name = (isset($mega_profile["profile"][0]["profile_name"])) ? $mega_profile["profile"][0]["profile_name"] : 'Trends Ideas';
                    $profile_pic = (isset($mega_profile["profile"][0]["profile_pic_url"])) ? $mega_profile["profile"][0]["profile_pic_url"] : 'http://s3.hubsrv.com/trendsideas.com/profiles/new-home-trends/profile_picture/profile_picture_192x192.jpg';
                    $tempResult['mega']['editors'] = $profile_editors;
                    $tempResult['mega']['owner_title'] = $profile_name;
                    $tempResult['mega']['owner_profile_pic'] = $profile_pic;
                    if (isset($mega_profile['classification'])) {
                        $profile_classification = $mega_profile['classification'];
                    }
                    $tempResult['mega']['classification'] = $profile_classification;
                    $profile_editor = (isset($mega_profile["profile"][0]["profile_editor"])) ? $mega_profile["profile"][0]["profile_editor"] : '';
                    $profile_administrator = (isset($mega_profile["profile"][0]["profile_administrator"])) ? $mega_profile["profile"][0]["profile_administrator"] : '';
                    $profile_creator = (isset($mega_profile["profile"][0]["profile_creator"])) ? $mega_profile["profile"][0]["profile_creator"] : '';
                    $tempResult['mega']['profile_editor'] = $profile_editor;
                    $tempResult['mega']['profile_administrator'] = $profile_administrator;
                    $tempResult['mega']['profile_creator'] = $profile_creator;
                    $tempResult['mega']['owner_contact_email'] = (isset($mega_profile["profile"][0]["owner_contact_email"])) ? $mega_profile["profile"][0]["owner_contact_email"] : "";
                    $tempResult['mega']['owner_contact_cc_emails'] = (isset($mega_profile["profile"][0]["owner_contact_cc_emails"])) ? $mega_profile["profile"][0]["owner_contact_cc_emails"] : "";
                    $tempResult['mega']['owner_contact_bcc_emails'] = (isset($mega_profile["profile"][0]["owner_contact_bcc_emails"])) ? $mega_profile["profile"][0]["owner_contact_bcc_emails"] : "";
                    if (isset($tempResult['mega']['photo'][0]['tags'])) {
                        $tempResult['mega']['photo'][0]['tags'] = array();
                    }
                    if ($tempResult['mega']['type'] !== "profile") {
                        $tempResult['mega']['keyword'] = array();
                    }
                }
            }
        } else {

            for ($i = 0; $i < sizeof($tempResult['megas']); $i++) {
                $hit = $tempResult['megas'][$i];
                if (isset($hit['owner_id'])) {
                    $profile_id = $hit['owner_id'];
                    $domain = $this->getDomain();
                    $docID_profile = $domain . "/profiles/" . trim($profile_id);
                    $tempMega_profile = $cb->get($docID_profile);
                    $mega_profile = CJSON::decode($tempMega_profile, true);
                    $profile_editors = (isset($mega_profile["profile"][0]["profile_editors"])) ? $mega_profile["profile"][0]["profile_editors"] : '*@trendsideas.com';
                    $profile_name = (isset($mega_profile["profile"][0]["profile_name"])) ? $mega_profile["profile"][0]["profile_name"] : 'Trends Ideas';
                    $profile_pic = (isset($mega_profile["profile"][0]["profile_pic_url"])) ? $mega_profile["profile"][0]["profile_pic_url"] : 'http://s3.hubsrv.com/trendsideas.com/profiles/new-home-trends/profile_picture/profile_picture_192x192.jpg';
                    $tempResult['megas'][$i]['editors'] = $profile_editors;
                    $tempResult['megas'][$i]['owner_title'] = $profile_name;
                    $tempResult['megas'][$i]['owner_profile_pic'] = $profile_pic;
                    if (isset($mega_profile['classification'])) {
                        $profile_classification = $mega_profile['classification'];
                    }
                    $tempResult['megas'][$i]['classification'] = $profile_classification;
                    $profile_editor = (isset($mega_profile["profile"][0]["profile_editor"])) ? $mega_profile["profile"][0]["profile_editor"] : '';
                    $profile_administrator = (isset($mega_profile["profile"][0]["profile_administrator"])) ? $mega_profile["profile"][0]["profile_administrator"] : '';
                    $profile_creator = (isset($mega_profile["profile"][0]["profile_creator"])) ? $mega_profile["profile"][0]["profile_creator"] : '';
                    $tempResult['megas'][$i]['profile_editor'] = $profile_editor;
                    $tempResult['megas'][$i]['profile_administrator'] = $profile_administrator;
                    $tempResult['megas'][$i]['profile_creator'] = $profile_creator;
                    $tempResult['megas'][$i]['owner_contact_email'] = (isset($mega_profile["profile"][0]["owner_contact_email"])) ? $mega_profile["profile"][0]["owner_contact_email"] : "";
                    $tempResult['megas'][$i]['owner_contact_cc_emails'] = (isset($mega_profile["profile"][0]["owner_contact_cc_emails"])) ? $mega_profile["profile"][0]["owner_contact_cc_emails"] : "";
                    $tempResult['megas'][$i]['owner_contact_bcc_emails'] = (isset($mega_profile["profile"][0]["owner_contact_bcc_emails"])) ? $mega_profile["profile"][0]["owner_contact_bcc_emails"] : "";
                    if (isset($tempResult['megas'][$i]['photo'][0]['tags'])) {
                        $tempResult['megas'][$i]['photo'][0]['tags'] = array();
                    }
                    if ($tempResult['megas'][$i]['type'] !== "profile") {
                        $tempResult['megas'][$i]['keyword'] = array();
                    }
                }
            }
        }
        return CJSON::encode($tempResult);
    }

    protected function getSearchResultsWithAnalysis($region, $requestString, $from = 0, $size = 50, $location, $classification = "All") {


        $tempResponse = $this->searchWithMultiMatch($requestString, $from, $size, $location, $classification);
        //    $fileName="/home/devbox/Documents/search_result2.log";
        //   $this->writeToLog($fileName, var_export($tempResponse,true));
        $numberofresults = $tempResponse['total'];
        $tempResponse = CJSON::encode($tempResponse);
        $tempResponse = CJSON::decode($tempResponse);
        $array = array();
        for ($int = 0; $int < sizeof($tempResponse) - 1; $int++) {
            $tempObject = $tempResponse[$int]['source']['doc'];
            if (isset($tempResponse[$int]['source']['doc']['comments'])) {
                
            }
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

//        if ($isRelaceDash) {
//           $returnString = str_replace('-', '\-', $returnString);
//        }
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
        $request->query($termQuery)
                ->from(0)
                ->size(sizeof($id_arr));
        $response = $request->execute();
        $results = $this->getReponseResult($response, $returnType);
        return $results;
    }

    protected function getPartnerResults($partnerIds, $keyword = null) {
        $partner_id_raw = $this->getUserInput($partnerIds, false);
        $partner_id = str_replace("%2C", ",", $partner_id_raw);
        $partnerIds = explode(',', $partner_id);
        $str_partnerIds = "";
        $domain = $this->getDomain();
        $trendsUrl = $domain . "/profiles/";
        $size = count($partnerIds);
        for ($i = 0; $i < sizeof($partnerIds); $i++) {
            $str_partnerIds = $str_partnerIds . '"' . $trendsUrl . $partnerIds[$i] . '"';
            if ($i + 1 < sizeof($partnerIds)) {
                $str_partnerIds.=',';
            }
        }
        if (isset($keyword)) {
            $response = $this->RequireByIds($str_partnerIds, $size, $keyword);
        } else {
            $response = $this->RequireByIds($str_partnerIds, $size);
        }

        return $response;
    }

    protected function getPartnerResultsInOrder($partnerIds, $keyword = null) {
        $response = array();
        $partner_id_raw = $this->getUserInput($partnerIds, false);
        $partner_id = str_replace("%2C", ",", $partner_id_raw);
        $partnerIds = explode(',', $partner_id);
        $str_partnerIds = "";
        $domain = $this->getDomain();
        $trendsUrl = $domain . "/profiles/";
        $size = count($partnerIds);
        $cb = $this->couchBaseConnection();
        $results = '{"' . 'megas' . '":[';
        for ($i = 0; $i < sizeof($partnerIds); $i++) {
            $tempMega_profile = $cb->get($trendsUrl . $partnerIds[$i]);
            if ($i !== sizeof($partnerIds) - 1) {
                $results.= $tempMega_profile . ',';
            } else {
                $results.= $tempMega_profile;
            }
        }
        $results .= ']}';
        return $results;
    }

    protected function getArticleRelatedImages($article_id, $owner_id) {
        $conditions = array();
        $requestStringOne = 'couchbaseDocument.doc.collection_id=' . $article_id;
        array_push($conditions, $requestStringOne);
        $requestStringTwo = 'couchbaseDocument.doc.owner_id=' . $owner_id;
        array_push($conditions, $requestStringTwo);
        $requestStringThree = 'couchbaseDocument.doc.type=photo';
        array_push($conditions, $requestStringThree);
        $response = $this->searchArticleWithCondictions($conditions, 'must');

        return $response;
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
            $docID = $this->getDomain() . "/profiles/" . $id;
        } elseif ($type == "photo") {
            $docID = $this->getDomain() . "/" . $id;
        } elseif ($type == "article") {
            $docID = $this->getDomain() . "/" . $id;
        } elseif ($type == "video") {
            $docID = $this->getDomain() . "/" . $id;
        }
        return $docID;
    }

    public function getDomainWihoutAPI() {
        $host = $_SERVER['HTTP_HOST'];
        $pieces = explode(".", $host);
        $domain = "";
        for ($i = 1; $i < sizeof($pieces); $i++) {
            $domain.= $pieces[$i];
            if ($i != sizeof($pieces) - 1) {
                $domain .= ".";
            }
        }
        return $domain;
    }

}
