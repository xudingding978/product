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
        return new Couchbase("cb1.hubsrv.com:8091", "", "Pa55word", "test", true);
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
}
