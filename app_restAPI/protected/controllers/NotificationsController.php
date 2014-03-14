
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

    public function actionReadProfiles() {
        $request_array = (file_get_contents('php://input'));
        $request = CJSON::decode($request_array);
        $cb = $this->couchBaseConnection();
        $domain = $this->getDomain();
        $url = $domain . "/profiles/" . $request;
        $tempRecord = $cb->get($url);
        $oldRecord = CJSON::decode($tempRecord, true);
        $respone_user = array();
        $respone_user['profile_name'] = $oldRecord['profile'][0]['profile_name'];
        $respone_user['profile_pic'] = $oldRecord['profile'][0]['profile_pic_url'];
        $this->sendResponse(200, CJSON::encode($respone_user));
    }

    public function actionMarkRead() {
        $request_array = CJSON::decode(file_get_contents('php://input'));
        $request = CJSON::decode($request_array);
        $notificationId = $request[1];
        $ownerId = $request[0];
        $this->setRead($ownerId, $notificationId);
    }

    public function actionAccept() {
        $request_array = CJSON::decode(file_get_contents('php://input'));
        $request = CJSON::decode($request_array);
        $notificationId = $request[1];
        $ownerId = $request[0];
        $is_success = $this->setAccept($ownerId, $notificationId);

        $this->sendResponse(200, CJSON::encode($is_success));
    }

    public function actionMarkAllRead() {
        $request_array = CJSON::decode(file_get_contents('php://input'));
        $request = CJSON::decode($request_array);
        $notificationId = $request[0];
        $ids = $request[1];
        $this->setAllRead($notificationId, $ids);
        $notification = $this->actionReadNotification($notificationId);
        if ($notification) {
            $this->sendResponse(200, CJSON::encode($notification));
        } else {
            $this->sendResponse(204);
        }
    }

    public function setAllRead($notificationId, $ids) {
        $cb = $this->couchBaseConnection();
        $domain = $this->getDomain();
        $docID_currentUser = $domain . "/users/" . $notificationId;
        $tempMega_currentUser = $cb->get($docID_currentUser);
        $mega_currentUser = CJSON::decode($tempMega_currentUser, true);
        $idArray = explode(",", $ids);
        if (isset($mega_currentUser['user'][0]["notifications"])) {
            for ($i = 0; $i < sizeof($mega_currentUser['user'][0]["notifications"]); $i++) {
                for ($j = 0; $j < sizeof($idArray); $j++) {
                    if ($mega_currentUser['user'][0]["notifications"][$i]["notification_id"] === $idArray[$j]) {
                        $mega_currentUser['user'][0]["notifications"][$i]["isRead"] = true;
                    }
                }
            }
        }
        if ($cb->set($docID_currentUser, CJSON::encode($mega_currentUser))) {
            
        } else {
            
        }
    }

    public function setAccept($ownerId, $notificationId) {
        $cb = $this->couchBaseConnection();
        $domain = $this->getDomain();
        $docID_currentUser = $domain . "/users/" . $ownerId;
        $tempMega_currentUser = $cb->get($docID_currentUser);
        $mega_currentUser = CJSON::decode($tempMega_currentUser, true);
        $notificationObject = array();
        if (isset($mega_currentUser['user'][0]["notifications"])) {
            for ($i = 0; $i < sizeof($mega_currentUser['user'][0]["notifications"]); $i++) {
                if ($mega_currentUser['user'][0]["notifications"][$i]["notification_id"] === $notificationId) {
                    $notificationObject = $mega_currentUser['user'][0]["notifications"][$i];
                    $mega_currentUser['user'][0]["notifications"][$i]["content"] = $mega_currentUser['user'][0]["notifications"][$i]["content"] . ",isProve";

                    break;
                }
            }
        }
        $profile = array();
        $profile["profile_id"] = $notificationObject["user_id"];
        $a = explode(",", $notificationObject["content"]);
        $profile["type"] = $a[1];
        $url = $domain . "/profiles/" . $notificationObject["user_id"];
        $target = $cb->get($url);
        $targetProfile = CJSON::decode($target, true);
        $alreadyMove = true;
        if ($profile["type"] === "editor") {
            $editors = explode(",", $targetProfile["profile"][0]["editor"]);
            for ($i = 0; $i < sizeof($editors); $i++) {
                if ($editors[$i] === $ownerId) {
                    $alreadyMove = false;
                }
            }
        } else if ($profile["type"] === "administrator") {
            $editors = explode(",", $targetProfile["profile"][0]["administrator"]);
            for ($i = 0; $i < sizeof($editors); $i++) {
                if ($editors[$i] === $ownerId) {
                    $alreadyMove = false;
                }
            }
        }
        if ($alreadyMove === false) {
            if (!isset($mega_currentUser['user'][0]["profiles"])) {
                $mega_currentUser['user'][0]["profiles"] = array();
            }
            $flag = false;
            for ($i = 0; $i < sizeof($mega_currentUser['user'][0]["profiles"]); $i++) {
                if ($mega_currentUser['user'][0]["profiles"][$i]["profile_id"] === $profile["profile_id"]) {
                    $flag = true;
                }
            }
            if ($flag === false) {
                array_push($mega_currentUser['user'][0]["profiles"], $profile);
            }
            if ($cb->set($docID_currentUser, CJSON::encode($mega_currentUser))) {
                if ($flag === false) {
                    return "You are the " . $profile["type"] . " now.";
                } else {
                    return "You are already the " . $profile["type"] . ".";
                }
            } else {
                return "save fail";
            }
        } else {
            if ($cb->set($docID_currentUser, CJSON::encode($mega_currentUser))) {
                return "sorry, you have already been removed from the " . $profile["type"] . " list.";
            } else {
                return "save fail";
            }
        }
    }

    public function setRead($ownerId, $notificationId) {
        $cb = $this->couchBaseConnection();
        $domain = $this->getDomain();
        $docID_currentUser = $domain . "/users/" . $ownerId;
        $tempMega_currentUser = $cb->get($docID_currentUser);
        $mega_currentUser = CJSON::decode($tempMega_currentUser, true);
        if (isset($mega_currentUser['user'][0]["notifications"])) {
            for ($i = 0; $i < sizeof($mega_currentUser['user'][0]["notifications"]); $i++) {
                if ($mega_currentUser['user'][0]["notifications"][$i]["notification_id"] === $notificationId) {
                    $mega_currentUser['user'][0]["notifications"][$i]["isRead"] = true;
                    break;
                }
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
                    if ($readNotification[$i] ["type"] === "authority") {
                        $commenterInfo = $this->getDomain() . "/profiles/" . $readNotification[$i] ["user_id"];
                        $cbs = $this->couchBaseConnection();
                        $commenterInfoDeep = $cbs->get($commenterInfo); // get the old profile record from the database according to the docID string
                        $oldcommenterInfo = CJSON::decode($commenterInfoDeep, true);
                        $readNotification[$i]["display_name"] = $oldcommenterInfo['profile'][0]["profile_name"];
                        $readNotification[$i]["photo_url_large"] = $oldcommenterInfo['profile'][0]["profile_pic_url"];
                    } else {
                        $commenterInfo = $this->getDomain() . "/users/" . $readNotification[$i] ["user_id"];
                        $cbs = $this->couchBaseConnection();
                        $commenterInfoDeep = $cbs->get($commenterInfo); // get the old user record from the database according to the docID string
                        $oldcommenterInfo = CJSON::decode($commenterInfoDeep, true);
                        $readNotification[$i]["display_name"] = $oldcommenterInfo['user'][0]["display_name"];
                        $readNotification[$i]["photo_url_large"] = $oldcommenterInfo['user'][0]["photo_url_large"];
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

    public function actionDeleteNotification() {
        $request_array = CJSON::decode(file_get_contents('php://input'));
        $request_array = CJSON::decode($request_array);
        $commenter_id = $request_array[0];
        $notification_id = $request_array[1];
        $comment = $this->delNotification($commenter_id, $notification_id);

        if ($comment) {
            $this->sendResponse(204, CJSON::encode($comment));
        }
    }

    public function delNotification($commenter_id, $notification_id) {
        try {
            $isDelete = false;
            $commenterInfo = $this->getDomain() . "/users/" . $commenter_id;
            $cb = $this->couchBaseConnection();
            $commenterInfoDeep = $cb->get($commenterInfo); // get the old user record from the database according to the docID string
            $oldcommenterInfo = CJSON::decode($commenterInfoDeep, true);
            $notification = $oldcommenterInfo['user'][0]["notifications"];
            for ($i = 0; $i < sizeof($notification); $i++) {
                if ($notification[$i]["notification_id"] === $notification_id) {
                    array_splice($oldcommenterInfo['user'][0]["notifications"], $i, 1);
                    break;
                }
            }
            if ($cb->set($commenterInfo, CJSON::encode($oldcommenterInfo))) {
                $isDelete = true;
                return $isDelete;
            }
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
