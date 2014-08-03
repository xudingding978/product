
<?php

header('Access-Control-Allow-Origin: *');

session_start();

class Controller extends CController {

    public $layout = '//layouts/api';
    protected function getInputAsJson() {
        return CJSON::decode(file_get_contents('php://input'));
    }
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
}
