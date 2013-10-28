
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

    public function actionMarkAllRead() {
        $request_array = CJSON::decode(file_get_contents('php://input'));
        $request = CJSON::decode($request_array);
        $notificationId = $request[0];
        $this->setAllRead($notificationId);
    }

    public function setAllRead($notificationId) {
        $cb = $this->couchBaseConnection();
        $domain = $this->getDomain();
        $docID_currentUser = $domain . "/users/" . $notificationId;
        $tempMega_currentUser = $cb->get($docID_currentUser);
        $mega_currentUser = CJSON::decode($tempMega_currentUser, true);
        if (isset($mega_currentUser['user'][0]["notifications"])) {
            for ($i = 0; $i < sizeof($mega_currentUser['user'][0]["notifications"]); $i++) {
                $mega_currentUser['user'][0]["notifications"][$i]["isRead"] = true;
            }
        }
        if ($cb->set($docID_currentUser, CJSON::encode($mega_currentUser))) {
            
        } else {
            
        }
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

    public function actionReadNotificationTop() {

        $request_array = CJSON::decode(file_get_contents('php://input'));
        $request_array = CJSON::decode($request_array);
        $notificationId = $request_array[0];
        $notification = $this->readNotificationItemTop($notificationId);

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
                for ($i = 0; $i < sizeof($readNotification); $i++) {
                    $commenterInfo = $this->getDomain() . "/users/" . $readNotification[$i] ["user_id"];
                    $cbs = $this->couchBaseConnection();
                    $commenterInfoDeep = $cbs->get($commenterInfo); // get the old user record from the database according to the docID string
                    $oldcommenterInfo = CJSON::decode($commenterInfoDeep, true);
                    $readNotification[$i]["display_name"] = $oldcommenterInfo['user'][0]["display_name"];
                    $readNotification[$i]["photo_url_large"] = $oldcommenterInfo['user'][0]["photo_url_large"];
                }
            } else {
                $readNotification = array();
            }
            return $readNotification;
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
            echo json_decode(file_get_contents('php://input'));
        }
    }

    public function readNotificationItemTop($notificationId) {
        try {

            $cb = $this->couchBaseConnection();
            $domain = $this->getDomain();
            $docID_currentUser = $domain . "/users/" . $notificationId;

            $tempMega_currentUser = $cb->get($docID_currentUser);
            $mega_currentUser = CJSON::decode($tempMega_currentUser, true);
            if (isset($mega_currentUser['user'][0]["notifications"])) {
                $readNotification = array();
                $readItem = array();
                for ($i = 0; $i < sizeof($mega_currentUser['user'][0]["notifications"]); $i++) {
                    if ($mega_currentUser['user'][0]["notifications"][$i]["isRead"] === false) {
                        $commenterInfo = $this->getDomain() . "/users/" . $mega_currentUser['user'][0]["notifications"][$i]["user_id"];
                        $cbs = $this->couchBaseConnection();
                        $commenterInfoDeep = $cbs->get($commenterInfo); // get the old user record from the database according to the docID string
                        $oldcommenterInfo = CJSON::decode($commenterInfoDeep, true);
                        $readItem = $mega_currentUser['user'][0]["notifications"][$i];
                        $readItem["display_name"] = $oldcommenterInfo['user'][0]["display_name"];
                        $readItem["photo_url_large"] = $oldcommenterInfo['user'][0]["photo_url_large"];
                        array_push($readNotification, $readItem);
                    }
                }
            } else {
                $readNotification = array();
            }
            return $readNotification;
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
            echo json_decode(file_get_contents('php://input'));
        }
    }

}

?>
