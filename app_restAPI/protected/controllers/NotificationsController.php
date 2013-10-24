
<?php

header('Access-Control-Allow-Origin: *');
header('Content-type: *');
header('Access-Control-Request-Method: *');
header('Access-Control-Allow-Methods: PUT, POST, OPTIONS, GET');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

class NotificationsController extends Controller {

    const JSON_RESPONSE_ROOT_SINGLE = 'conversation';
    const JSON_RESPONSE_ROOT_PLURAL = 'conversations';

    public function actionIndex() {
        //   date_default_timezone_set('Pacific/Auckland'); 
        // echo phpinfo();
        date_default_timezone_set('Pacific/Auckland');
        echo "Testing Couchbase";
        $cb = new Couchbase("cb1.hubsrv.com:8091", "Administrator", "Pa55word", "develop");
    }

    public function actionCreate() {
        $this->sendResponse(204);
    }

    public function actionRead() {
        //      $this->sendResponse(204);
    }

    public function actionReadNotification() {

        $request_array = CJSON::decode(file_get_contents('php://input'));
        $request_array = CJSON::decode($request_array);
        $notificationId = $request_array[0];
        $notification = $this->readNotificationItem($notificationId);

        if ($notification) {
            $this->sendResponse(200, CJSON::encode($notification));
        } else {
            $this->sendResponse(204);
        }
    }

    public function readNotificationItem($notificationId) {
        try {

            $cb = $this->couchBaseConnection();
            $domain = $this->getDomain();
            $docID_currentUser = $domain . "/users/" . $notificationId;
            
            $tempMega_currentUser = $cb->get($docID_currentUser);
            $mega_currentUser = CJSON::decode($tempMega_currentUser, true);
            if (isset($mega_currentUser['user'][0]["notifications"])) {
                $readNotification = $mega_currentUser['user'][0]["notifications"];
            } else {
                $readNotification = array();
            }
            error_log(var_export($readNotification, true));
            return $readNotification;
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
            echo json_decode(file_get_contents('php://input'));
        }
    }

}

?>
