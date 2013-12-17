
<?php

header('Access-Control-Allow-Origin: *');
header('Content-type: *');
header('Access-Control-Request-Method: *');
header('Access-Control-Allow-Methods: PUT, POST, OPTIONS, GET');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

class MessagesController extends Controller {

    const JSON_RESPONSE_ROOT_SINGLE = 'comment';
    const JSON_RESPONSE_ROOT_PLURAL = 'comments';

    public function actionIndex() {
        
    }

    public function actionCreate() {
        $this->sendResponse(204);
    }

    public function actionRemoveMessage() {
        $request_array = CJSON::decode(file_get_contents('php://input'));
        $request_array = CJSON::decode($request_array);
        $commenter_id = $request_array[0]; // it is the  login in user
        $owner_id = $request_array[1]; // it is the page owner
        $message_id = $request_array[2];

        $comment = $this->deleteMessage($commenter_id, $owner_id, $message_id);
        if ($comment) {
            $this->sendResponse(204);
        } else {
            echo $this->sendResponse(409, 'A record with id: "' . substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI'] . '/' . '" already exists');
        }
    }

    public function deleteMessage($commenter_id, $id, $message_id) {
        $isDelete = false;
        try {
            $docIDDeep = $this->getDomain() . "/users/" . $id; //$id  is the page owner
            $cb = $this->couchBaseConnection();
            $oldDeep = $cb->get($docIDDeep); // get the old user record from the database according to the docID string
            $oldRecordDeep = CJSON::decode($oldDeep, true);

            $currentMessage = null;
            for ($i = 0; $i < sizeof($oldRecordDeep['user'][0]["messages"]); $i++) {
                $currentMessage = $oldRecordDeep['user'][0]["messages"][$i];
                if ($currentMessage["message_id"] === $message_id) {
                    array_splice($oldRecordDeep['user'][0]["messages"], $i, 1);
                    break;
                }
            }
            if ($cb->set($docIDDeep, CJSON::encode($oldRecordDeep))) {
                $isDelete = true;
            }
            return $isDelete;
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
            echo json_decode(file_get_contents('php://input'));
        }
    }

    public function actionRemoveReply() {
        $request_array = CJSON::decode(file_get_contents('php://input'));
        $request_array = CJSON::decode($request_array);
        $commenter_id = $request_array[0]; // it is the  login in user
        $owner_id = $request_array[1]; // it is the page owner
        $reply_id = $request_array[2];
        $comment = $this->deleteReply($commenter_id, $owner_id, $reply_id);
        if ($comment) {
            $this->sendResponse(204);
        } else {
            echo $this->sendResponse(409, 'A record with id: "' . substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI'] . '/' . '" already exists');
        }
    }

    public function deleteReply($commenter_id, $id, $reply_id) {

        if ($commenter_id === $id) {
            $isDelete = false;
            try {
                $docIDDeep = $this->getDomain() . "/users/" . $id; //$id  is the page owner
                $cb = $this->couchBaseConnection();
                $oldDeep = $cb->get($docIDDeep); // get the old user record from the database according to the docID string
                $oldRecordDeep = CJSON::decode($oldDeep, true);

                $currentMessage = null;
                for ($i = 0; $i < sizeof($oldRecordDeep['user'][0]["messages"]); $i++) {
                    for ($j = 0; $j < sizeof($oldRecordDeep['user'][0]["messages"][$i]["replyMessageCollection"]); $j++) {
                        $currentMessage = $oldRecordDeep['user'][0]["messages"][$i]["replyMessageCollection"][$j];
                        if ($currentMessage["reply_id"] === $reply_id) {
                            array_splice($oldRecordDeep['user'][0]["messages"][$i]["replyMessageCollection"], $j, 1);
                            break;
                        }
                    }
                }
                if ($cb->set($docIDDeep, CJSON::encode($oldRecordDeep))) {
                    $isDelete = true;
                }
                return $isDelete;
            } catch (Exception $exc) {
                echo $exc->getTraceAsString();
                echo json_decode(file_get_contents('php://input'));
            }
        } else {
            $isDelete = false;
            try {
                $docIDDeep = $this->getDomain() . "/users/" . $id; //$id  is the page owner
                $cb = $this->couchBaseConnection();
                $oldDeep = $cb->get($docIDDeep); // get the old user record from the database according to the docID string
                $oldRecordDeep = CJSON::decode($oldDeep, true);

                $currentMessage = null;
                for ($i = 0; $i < sizeof($oldRecordDeep['user'][0]["messages"]); $i++) {
                    for ($j = 0; $j < sizeof($oldRecordDeep['user'][0]["messages"][$i]["replyMessageCollection"]); $j++) {
                        $currentMessage = $oldRecordDeep['user'][0]["messages"][$i]["replyMessageCollection"][$j];
                        if (($currentMessage["reply_id"] === $reply_id) && ($currentMessage["user_id"] === $commenter_id)) {
                            array_splice($oldRecordDeep['user'][0]["messages"][$i]["replyMessageCollection"], $j, 1);
                            break;
                        }
                    }
                }
                if ($cb->set($docIDDeep, CJSON::encode($oldRecordDeep))) {
                    $isDelete = true;
                }
                return $isDelete;
            } catch (Exception $exc) {
                echo $exc->getTraceAsString();
                echo json_decode(file_get_contents('php://input'));
            }
        }
    }

    public function actionCreateComment() {
        $request_array = CJSON::decode(file_get_contents('php://input'));
        $request_array = CJSON::decode($request_array);
        $commenter_id = $request_array[0];
        $date = $request_array[1];
        $commentContent = $request_array[2];
        $owner_id = $request_array[3];

        $newStyleImage = $request_array[4];

        $imageType = $request_array[5];
        $photo_name = $request_array[6];

        $message_id = $request_array[7];
        $reply_id = $request_array[8];
        $message_id = $message_id . $commenter_id . $owner_id;
        $reply_id = $reply_id . $commenter_id . $owner_id;
        $comment = $this->addComment($commenter_id, $date, $commentContent, $owner_id, $newStyleImage, $imageType, $photo_name, $message_id, $reply_id);

        if ($comment) {
            $this->sendResponse(200, CJSON::encode($comment));
        } else {
            echo $this->sendResponse(409, 'A record with id: "' . substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI'] . '/' . '" already exists');
        }
    }

    public function addComment($commenter_id, $date, $commentContent, $id, $newStyleImage, $imageType, $photo_name, $message_id, $reply_id) {                       //saving follower in profile
        try {
            $docIDDeep = $this->getDomain() . "/users/" . $id;
            $cb = $this->couchBaseConnection();
            $oldDeep = $cb->get($docIDDeep); // get the old user record from the database according to the docID string
            $oldRecordDeep = CJSON::decode($oldDeep, true);
            $newMessage = array();

            $newReply = array();

            $newReply["reply_id"] = $reply_id;
            $newReply["user_id"] = $commenter_id;
            $newReply["time_stamp"] = $date;
            $newReply["msg"] = $commentContent;



//get the commenter's photo url and name
            $commenterInfo = $this->getDomain() . "/users/" . $commenter_id;
            $cbs = $this->couchBaseConnection();
            $commenterInfoDeep = $cbs->get($commenterInfo); // get the old user record from the database according to the docID string
            $oldcommenterInfo = CJSON::decode($commenterInfoDeep, true);

            $newReply["user_name"] = $oldcommenterInfo['user'][0]["display_name"];
            $newReply["photo_url_large"] = $oldcommenterInfo['user'][0]["photo_url_large"];

            if ($newStyleImage !== null && $photo_name !== "") {
                $photoController = new PhotosController(); //    this.get("controllers.PhotosController").             

                $data_arr = $photoController->convertToString64($newStyleImage);
                //$data_arr = $photoController->convertToString64($photo_string);      
                $photo = imagecreatefromstring($data_arr['data']);
                $compressed_photo = $photoController->compressPhotoData($imageType, $photo);
                $orig_size['width'] = imagesx($compressed_photo);
                $orig_size['height'] = imagesy($compressed_photo);
                $url = $photoController->saveCommentPhotoInTypes($orig_size, "user_cover_small", $photo_name, $compressed_photo, $data_arr, $id, null, $message_id);


                $newReply["url"] = $url;
            } else {
                $newReply["url"] = null;
            }
//$newReplyJason= CJSON::encode($newReply);
            $newMessage["message_id"] = $message_id;
            $newMessage['replyMessageCollection'] = array();
            array_unshift($newMessage['replyMessageCollection'], $newReply);
            if (isset($oldRecordDeep['user'][0]["messages"])) {
                array_unshift($oldRecordDeep['user'][0]["messages"], $newMessage);
            } else {
                $oldRecordDeep['user'][0]["messages"] = array();
                array_unshift($oldRecordDeep['user'][0]["messages"], $newMessage);
            }

            if ($cb->set($docIDDeep, CJSON::encode($oldRecordDeep))) {
                $this->createNotification($commenter_id, $id, $date, $message_id, $commentContent);
                return $newMessage;
            } else {
                
            }
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
            echo json_decode(file_get_contents('php://input'));
        }
    }

    public function createNotification($commenter_id, $id, $date, $message_id, $commentContent) {
        if ($commenter_id !== $id) {
            $ownerId = $id;
            $notificationObject = array();
            $timeID = date_timestamp_get(new DateTime());

            $notification_id = (string) (rand(10000, 99999)) . $timeID . $commenter_id;

            $notificationObject["notification_id"] = $notification_id;
            $notificationObject["user_id"] = $commenter_id;
            $notificationObject["time"] = $date;
            $notificationObject["type"] = "addMessage";
            $notificationObject["content"] = $commentContent;
            $notificationObject["action_id"] = $message_id;
            $notificationObject["isRead"] = false;


            $notificationInfo = $this->getDomain() . "/users/" . $ownerId;
            $cbs = $this->couchBaseConnection();
            $notificationInfoDeep = $cbs->get($notificationInfo); // get the old user record from the database according to the docID string
            $userInfo = CJSON::decode($notificationInfoDeep, true);

            $conversationController = new ConversationsController();
            if (!isset($userInfo['user'][0]['notification_setting']) || strpos($userInfo['user'][0]['notification_setting'], "message") !== false) {
                if (!isset($userInfo['user'][0]['notifications'])) {
                    $userInfo['user'][0]['notifications'] = array();
                }
                array_unshift($userInfo['user'][0]["notifications"], $notificationObject);

                if ($cbs->set($notificationInfo, CJSON::encode($userInfo))) {
                    if (!isset($userInfo['user'][0]['notification_setting']) || strpos($userInfo['user'][0]['notification_setting'], "email") !== false) {
                        $receiveEmail = $userInfo['user'][0]['email'];
                        $receiveName = $userInfo['user'][0]['display_name'];
                        $notificationCountFollow = 0;
                        $notificationCountMessage = 0;
                        for ($i = 0; $i < sizeof($userInfo['user'][0]['notifications']); $i++) {

                            if ($userInfo['user'][0]['notifications'][$i]["isRead"] === false) {
                                if ($userInfo['user'][0]['notifications'][$i]["type"] === "follow" || $userInfo['user'][0]['notifications'][$i]["type"] === "unFollow") {
                                    $notificationCountFollow++;
                                } else {
                                    $notificationCountMessage++;
                                }
                            }
                        }
                        $conversationController->sendEmail($receiveEmail, $receiveName, $notificationCountFollow, $notificationCountMessage, $ownerId);
                    }
                } else {
                    echo $this->sendResponse(409, 'A record with id: "' . substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI'] . '/' . '" already exists');
                }
            }
        }
    }

    public function actionUpdateReply() {
        $request_array = CJSON::decode(file_get_contents('php://input'));
        $request_array = CJSON::decode($request_array);
        $owner_id = $request_array[0];
        $date = $request_array[1];
        $commentContent = $request_array[2];

        $newStyleImage = $request_array[3];

        $imageType = $request_array[4];
        $photo_name = $request_array[5];

        $message_id = $request_array[6];
        $reply_id = $request_array[7];
        $url = $request_array[8];
        $reply_id = $reply_id . $message_id . $owner_id;
        $comment = $this->updateReply($owner_id, $date, $commentContent, $newStyleImage, $imageType, $photo_name, $message_id, $reply_id, $url);

        if ($comment !== false) {
            $this->sendResponse(200, CJSON::encode($comment));
        } else {
            echo $this->sendResponse(409, 'A record with id: "' . substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI'] . '/' . '" already exists');
        }
    }

    public function updateReply($id, $date, $commentContent, $newStyleImage, $imageType, $photo_name, $message_id, $reply_id, $url) {
        try {
            $docIDDeep = $this->getDomain() . "/users/" . $id; // it is the owner id
            $cb = $this->couchBaseConnection();
            $oldDeep = $cb->get($docIDDeep); // get the old user record from the database according to the docID string
            $oldRecordDeep = CJSON::decode($oldDeep, true);
            $dataNew = array();

            for ($i = 0; $i < sizeof($oldRecordDeep['user'][0]["messages"]); $i++) {
                for ($j = 0; $j < sizeof($oldRecordDeep['user'][0]["messages"][$i]["replyMessageCollection"]); $j++) {

                    $currentMessage = $oldRecordDeep['user'][0]["messages"][$i]["replyMessageCollection"][$j];

                    if ($currentMessage["reply_id"] === $message_id) {

                        $currentMessage["msg"] = $commentContent;
                        $currentMessage["time_stamp"] = $date;
                        $dataNew["time_stamp"] = $date;
                        $dataNew["msg"] = $commentContent;

                        if ($oldRecordDeep['user'][0]["messages"][$i]["replyMessageCollection"][$j]["url"] !== null) {

                            $infoRefreshDeep = explode("/", $currentMessage["url"]);

                            $inforRefreshLength = sizeof($infoRefreshDeep);

                            $messagId = $infoRefreshDeep[$inforRefreshLength - 3];

                            if ($newStyleImage !== null && $photo_name !== "") {
                                $photoController = new PhotosController(); //    this.get("controllers.PhotosController").             

                                $data_arr = $photoController->convertToString64($newStyleImage);
                                //$data_arr = $photoController->convertToString64($photo_string);      
                                $photo = imagecreatefromstring($data_arr['data']);
                                $compressed_photo = $photoController->compressPhotoData($imageType, $photo);
                                $orig_size['width'] = imagesx($compressed_photo);
                                $orig_size['height'] = imagesy($compressed_photo);
                                $url = $photoController->saveCommentPhotoInTypes($orig_size, "user_cover_small", $photo_name, $compressed_photo, $data_arr, $id, null, $messagId);

                                $oldRecordDeep['user'][0]["messages"][$i]["replyMessageCollection"][$j]["url"] = $url;
                                $dataNew["url"] = $url;
                            } else {

                                $dataNew["url"] = $oldRecordDeep['user'][0]["messages"][$i]["replyMessageCollection"][$j]["url"];
                                if ($url === null) {
                                    $dataNew["url"] = null;
                                    $oldRecordDeep['user'][0]["messages"][$i]["replyMessageCollection"][$j]["url"] = null;
                                }
                            }
                            break;
                        } else {
                            if ($newStyleImage !== null && $photo_name !== "") {
                                $photoController = new PhotosController(); //    this.get("controllers.PhotosController").             
                                $data_arr = $photoController->convertToString64($newStyleImage);
                                //$data_arr = $photoController->convertToString64($photo_string);      
                                $photo = imagecreatefromstring($data_arr['data']);
                                $compressed_photo = $photoController->compressPhotoData($imageType, $photo);
                                $orig_size['width'] = imagesx($compressed_photo);
                                $orig_size['height'] = imagesy($compressed_photo);
                                $url = $photoController->saveCommentPhotoInTypes($orig_size, "user_cover_small", $photo_name, $compressed_photo, $data_arr, $id, null, $reply_id);

                                $oldRecordDeep['user'][0]["messages"][$i]["replyMessageCollection"][$j]["url"] = $url;

                                $dataNew["url"] = $url;
                            } else {
                                $oldRecordDeep['user'][0]["messages"][$i]["replyMessageCollection"][$j]["url"] = null;
                                $dataNew["url"] = null;
                            }
                            break;
                        }
                    }
                }
            }
            if ($cb->set($docIDDeep, CJSON::encode($oldRecordDeep))) {
                return $dataNew;
            } else {
                return false;
            }
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
            echo json_decode(file_get_contents('php://input'));
        }
    }

    public function actionUpdateMessage() {
        $request_array = CJSON::decode(file_get_contents('php://input'));
        $request_array = CJSON::decode($request_array);
        $owner_id = $request_array[0];
        $date = $request_array[1];
        $commentContent = $request_array[2];

        $newStyleImage = $request_array[3];

        $imageType = $request_array[4];
        $photo_name = $request_array[5];

        $message_id = $request_array[6];
        $reply_id = $request_array[7];
        $url = $request_array[8];
        $reply_id = $reply_id . $message_id . $owner_id;
        $comment = $this->updateMessage($owner_id, $date, $commentContent, $newStyleImage, $imageType, $photo_name, $message_id, $reply_id, $url);

        if ($comment !== false) {
            $this->sendResponse(200, CJSON::encode($comment));
        } else {
            echo $this->sendResponse(409, 'A record with id: "' . substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI'] . '/' . '" already exists');
        }
    }

    public function updateMessage($id, $date, $commentContent, $newStyleImage, $imageType, $photo_name, $message_id, $reply_id, $url) {
        try {
            $docIDDeep = $this->getDomain() . "/users/" . $id; // it is the owner id
            $cb = $this->couchBaseConnection();
            $oldDeep = $cb->get($docIDDeep); // get the old user record from the database according to the docID string
            $oldRecordDeep = CJSON::decode($oldDeep, true);
            $dataNew = array();


            for ($i = 0; $i < sizeof($oldRecordDeep['user'][0]["messages"]); $i++) {
                $currentMessage = $oldRecordDeep['user'][0]["messages"][$i];
                if ($currentMessage["message_id"] === $message_id) {

                    $replyLenth = sizeof($oldRecordDeep['user'][0]["messages"][$i]["replyMessageCollection"]) - 1;
                    $oldRecordDeep['user'][0]["messages"][$i]["replyMessageCollection"][$replyLenth]["msg"] = $commentContent;
                    $oldRecordDeep['user'][0]["messages"][$i]["replyMessageCollection"][$replyLenth]["time_stamp"] = $date;
                    $dataNew["time_stamp"] = $date;

                    $dataNew["msg"] = $commentContent;

                    if ($oldRecordDeep['user'][0]["messages"][$i]["replyMessageCollection"][$replyLenth]["url"] !== null) {

                        $infoRefreshDeep = explode("/", $currentMessage["replyMessageCollection"][$replyLenth]["url"]);

                        $inforRefreshLength = sizeof($infoRefreshDeep);

                        $messagId = $infoRefreshDeep[$inforRefreshLength - 3];

                        if ($newStyleImage !== null && $photo_name !== "") {
                            $photoController = new PhotosController(); //    this.get("controllers.PhotosController").             
                            $data_arr = $photoController->convertToString64($newStyleImage);
                            //$data_arr = $photoController->convertToString64($photo_string);      
                            $photo = imagecreatefromstring($data_arr['data']);
                            $compressed_photo = $photoController->compressPhotoData($imageType, $photo);
                            $orig_size['width'] = imagesx($compressed_photo);
                            $orig_size['height'] = imagesy($compressed_photo);
                            $url = $photoController->saveCommentPhotoInTypes($orig_size, "user_cover_small", $photo_name, $compressed_photo, $data_arr, $id, null, $messagId);

                            $oldRecordDeep['user'][0]["messages"][$i]["replyMessageCollection"][$replyLenth]["url"] = $url;
                            $dataNew["url"] = $url;
                        } else {

                            $dataNew["url"] = $oldRecordDeep['user'][0]["messages"][$i]["replyMessageCollection"][$replyLenth]["url"];
                            if ($url === null) {
                                $dataNew["url"] = null;
                                $oldRecordDeep['user'][0]["messages"][$i]["replyMessageCollection"][$replyLenth]["url"] = null;
                            }
                        }
                        break;
                    } else {
                        if ($newStyleImage !== null && $photo_name !== "") {
                            $photoController = new PhotosController(); //    this.get("controllers.PhotosController").             
                            $data_arr = $photoController->convertToString64($newStyleImage);
                            //$data_arr = $photoController->convertToString64($photo_string);      
                            $photo = imagecreatefromstring($data_arr['data']);
                            $compressed_photo = $photoController->compressPhotoData($imageType, $photo);
                            $orig_size['width'] = imagesx($compressed_photo);
                            $orig_size['height'] = imagesy($compressed_photo);
                            $url = $photoController->saveCommentPhotoInTypes($orig_size, "user_cover_small", $photo_name, $compressed_photo, $data_arr, $id, null, $reply_id);

                            $oldRecordDeep['user'][0]["messages"][$i]["replyMessageCollection"][$replyLenth]["url"] = $url;

                            $dataNew["url"] = $url;
                        } else {
                            $oldRecordDeep['user'][0]["messages"][$i]["replyMessageCollection"][$replyLenth]["url"] = null;
                            $dataNew["url"] = null;
                        }
                        break;
                    }
                }
            }
            if ($cb->set($docIDDeep, CJSON::encode($oldRecordDeep))) {
                return $dataNew;
            } else {
                return false;
            }
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
            echo json_decode(file_get_contents('php://input'));
        }
    }

    public function actionCreateReply() {
        $request_array = CJSON::decode(file_get_contents('php://input'));
        $request_array = CJSON::decode($request_array);
        $commenter_id = $request_array[0];
        $date = $request_array[1];
        $commentContent = $request_array[2];
        $owner_id = $request_array[3];

        $newStyleImage = $request_array[4];

        $imageType = $request_array[5];
        $photo_name = $request_array[6];

        $message_id = $request_array[7];
        $ownerMessage_id = $request_array[8]; //current message owner's message id 



        $message_id = $message_id . $commenter_id . $owner_id;
        $comment = $this->addReply($commenter_id, $date, $commentContent, $owner_id, $newStyleImage, $imageType, $photo_name, $message_id, $ownerMessage_id);

        if ($comment) {
            $this->sendResponse(200, CJSON::encode($comment));
        } else {
            echo $this->sendResponse(409, 'A record with id: "' . substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI'] . '/' . '" already exists');
        }
    }

//$message_id: is used to store the image store url and as a reply id
    public function addReply($commenter_id, $date, $commentContent, $id, $newStyleImage, $imageType, $photo_name, $message_id, $ownerMessage_id) {                       //saving follower in profile
        try {
            $docIDDeep = $this->getDomain() . "/users/" . $id;
            $cb = $this->couchBaseConnection();
            $oldDeep = $cb->get($docIDDeep); // get the old user record from the database according to the docID string
            $oldRecordDeep = CJSON::decode($oldDeep, true);


            $newReply = array();

            $newReply["reply_id"] = $message_id;
            $newReply["user_id"] = $commenter_id;
            $newReply["time_stamp"] = $date;
            $newReply["msg"] = $commentContent;



//get the commenter's photo url and name
            $commenterInfo = $this->getDomain() . "/users/" . $commenter_id;
            $cbs = $this->couchBaseConnection();
            $commenterInfoDeep = $cbs->get($commenterInfo); // get the old user record from the database according to the docID string
            $oldcommenterInfo = CJSON::decode($commenterInfoDeep, true);

            $newReply["user_name"] = $oldcommenterInfo['user'][0]["display_name"];
            $newReply["photo_url_large"] = $oldcommenterInfo['user'][0]["photo_url_large"];

            if ($newStyleImage !== null && $photo_name !== "") {
                $photoController = new PhotosController(); //    this.get("controllers.PhotosController").             
                $data_arr = $photoController->convertToString64($newStyleImage);
                //$data_arr = $photoController->convertToString64($photo_string);      
                $photo = imagecreatefromstring($data_arr['data']);
                $compressed_photo = $photoController->compressPhotoData($imageType, $photo);
                $orig_size['width'] = imagesx($compressed_photo);
                $orig_size['height'] = imagesy($compressed_photo);
                $url = $photoController->saveCommentPhotoInTypes($orig_size, "user_cover_small", $photo_name, $compressed_photo, $data_arr, $id, null, $message_id);


                $newReply["url"] = $url;
            } else {
                $newReply["url"] = null;
            }
//$newReplyJason= CJSON::encode($newReply);
            $currentMessage = null;
            for ($i = 0; $i < sizeof($oldRecordDeep['user'][0]["messages"]); $i++) {
                $currentMessage = $oldRecordDeep['user'][0]["messages"][$i];
                if ($currentMessage["message_id"] === $ownerMessage_id) {

                    if (isset($oldRecordDeep['user'][0]["messages"])) {
                        array_unshift($oldRecordDeep['user'][0]["messages"][$i]["replyMessageCollection"], $newReply);
                    } else {
                        $oldRecordDeep['user'][0]["messages"] = array();
                        array_unshift($oldRecordDeep['user'][0]["messages"][$i]["replyMessageCollection"], $newReply);
                    }
                    $currentMessage = $oldRecordDeep['user'][0]["messages"][$i];
                    break;
                }
            }

            $newMessage = $currentMessage;


            if ($cb->set($docIDDeep, CJSON::encode($oldRecordDeep))) {
                $this->createNotificationReply($commenter_id, $id, $date, $message_id . ',' . $ownerMessage_id . ',' . $id, $commentContent, $newMessage["replyMessageCollection"][sizeof($newMessage["replyMessageCollection"]) - 1]['user_id']);
                return $newMessage;
            } else {
                
            }
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
            echo json_decode(file_get_contents('php://input'));
        }
    }

    public function createNotificationReply($commenter_id, $id, $date, $message_id, $commentContent, $message_owner) {

        $ownerId = $id;
        $notificationObject = array();

        $timeID = date_timestamp_get(new DateTime());


        $notification_id = (string) (rand(10000, 99999)) . $timeID . $commenter_id;

        $notificationObject["notification_id"] = $notification_id;
        $notificationObject["user_id"] = $commenter_id;
        $notificationObject["time"] = $date;
        $notificationObject["type"] = "addReply";
        $notificationObject["content"] = $commentContent;
        $notificationObject["action_id"] = $message_id;
        $notificationObject["isRead"] = false;
        $conversationController = new ConversationsController();
        if ($commenter_id !== $message_owner && $commenter_id !== $id && $message_owner !== $id) {

            $notificationInfo = $this->getDomain() . "/users/" . $ownerId;
            $cbs = $this->couchBaseConnection();
            $notificationInfoDeep = $cbs->get($notificationInfo); // get the old user record from the database according to the docID string
            $userInfo = CJSON::decode($notificationInfoDeep, true);

            if (!isset($userInfo['user'][0]['notification_setting']) || strpos($userInfo['user'][0]['notification_setting'], "message") !== false) {
                if (!isset($userInfo['user'][0]['notifications'])) {
                    $userInfo['user'][0]['notifications'] = array();
                }
                array_unshift($userInfo['user'][0]["notifications"], $notificationObject);
                if (!isset($userInfo['user'][0]['notification_setting']) || strpos($userInfo['user'][0]['notification_setting'], "email") !== false) {
                    $receiveEmail = $userInfo['user'][0]['email'];
                    $receiveName = $userInfo['user'][0]['display_name'];
                    $notificationCountFollow = 0;
                    $notificationCountMessage = 0;
                    for ($i = 0; $i < sizeof($userInfo['user'][0]['notifications']); $i++) {
                        if ($userInfo['user'][0]['notifications'][$i]["isRead"] === false) {
                            if ($userInfo['user'][0]['notifications'][$i]["type"] === "follow" || $userInfo['user'][0]['notifications'][$i]["type"] === "unFollow") {
                                $notificationCountFollow++;
                            } else {
                                $notificationCountMessage++;
                            }
                        }
                    }
                    $conversationController->sendEmail($receiveEmail, $receiveName, $notificationCountFollow, $notificationCountMessage, $ownerId);
                }
                if ($cbs->set($notificationInfo, CJSON::encode($userInfo))) {
                    
                } else {
                    echo $this->sendResponse(409, 'A record with id: "' . substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI'] . '/' . '" already exists');
                }
            }



            $notification = $this->getDomain() . "/users/" . $message_owner;
            $cbm = $this->couchBaseConnection();
            $notificationDeep = $cbm->get($notification); // get the old user record from the database according to the docID string
            $userMessage = CJSON::decode($notificationDeep, true);



            if (!isset($userMessage['user'][0]['notification_setting']) || strpos($userMessage['user'][0]['notification_setting'], "message") !== false) {
                if (!isset($userMessage['user'][0]['notifications'])) {
                    $userMessage['user'][0]['notifications'] = array();
                }
                array_unshift($userMessage['user'][0]["notifications"], $notificationObject);
                if ($cbm->set($notification, CJSON::encode($userMessage))) {
                    if (!isset($userMessage['user'][0]['notification_setting']) || strpos($userMessage['user'][0]['notification_setting'], "email") !== false) {
                        $receiveEmail = $userMessage['user'][0]['email'];
                        $receiveName = $userMessage['user'][0]['display_name'];
                        $notificationCountFollow = 0;
                        $notificationCountMessage = 0;
                        for ($i = 0; $i < sizeof($userMessage['user'][0]['notifications']); $i++) {
                            if ($userMessage['user'][0]['notifications'][$i]["isRead"] === false) {
                                if ($userMessage['user'][0]['notifications'][$i]["type"] === "follow" || $userMessage['user'][0]['notifications'][$i]["type"] === "unFollow") {
                                    $notificationCountFollow++;
                                } else {
                                    $notificationCountMessage++;
                                }
                            }
                        }
                        $conversationController->sendEmail($receiveEmail, $receiveName, $notificationCountFollow, $notificationCountMessage, $ownerId);
                    } else {
                        echo $this->sendResponse(409, 'A record with id: "' . substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI'] . '/' . '" already exists');
                    }
                }
            }
        } elseif ($commenter_id !== $message_owner && $commenter_id !== $id && $message_owner === $id) {
            $notificationInfo = $this->getDomain() . "/users/" . $ownerId;
            $cbs = $this->couchBaseConnection();
            $notificationInfoDeep = $cbs->get($notificationInfo); // get the old user record from the database according to the docID string
            $userInfo = CJSON::decode($notificationInfoDeep, true);

            if (!isset($userInfo['user'][0]['notification_setting']) || strpos($userInfo['user'][0]['notification_setting'], "message") !== false) {
                if (!isset($userInfo['user'][0]['notifications'])) {
                    $userInfo['user'][0]['notifications'] = array();
                }
                array_unshift($userInfo['user'][0]["notifications"], $notificationObject);
                if (!isset($userInfo['user'][0]['notification_setting']) || strpos($userInfo['user'][0]['notification_setting'], "email") !== false) {
                    $receiveEmail = $userInfo['user'][0]['email'];
                    $receiveName = $userInfo['user'][0]['display_name'];
                    $notificationCountFollow = 0;
                    $notificationCountMessage = 0;
                    for ($i = 0; $i < sizeof($userInfo['user'][0]['notifications']); $i++) {
                        if ($userInfo['user'][0]['notifications'][$i]["isRead"] === false) {
                            if ($userInfo['user'][0]['notifications'][$i]["type"] === "follow" || $userInfo['user'][0]['notifications'][$i]["type"] === "unFollow") {
                                $notificationCountFollow++;
                            } else {
                                $notificationCountMessage++;
                            }
                        }
                    }
                    $conversationController->sendEmail($receiveEmail, $receiveName, $notificationCountFollow, $notificationCountMessage, $ownerId);
                }
                if ($cbs->set($notificationInfo, CJSON::encode($userInfo))) {
                    
                } else {
                    echo $this->sendResponse(409, 'A record with id: "' . substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI'] . '/' . '" already exists');
                }
            }
        } elseif ($commenter_id === $id && $id !== $message_owner) {
            $notification = $this->getDomain() . "/users/" . $message_owner;
            $cbm = $this->couchBaseConnection();
            $notificationDeep = $cbm->get($notification); // get the old user record from the database according to the docID string
            $userMessage = CJSON::decode($notificationDeep, true);


            if (!isset($userMessage['user'][0]['notification_setting']) || strpos($userMessage['user'][0]['notification_setting'], "message") !== false) {
                if (!isset($userMessage['user'][0]['notifications'])) {
                    $userMessage['user'][0]['notifications'] = array();
                }
                array_unshift($userMessage['user'][0]["notifications"], $notificationObject);
                if (!isset($userMessage['user'][0]['notification_setting']) || strpos($userMessage['user'][0]['notification_setting'], "email") !== false) {
                    $receiveEmail = $userMessage['user'][0]['email'];
                    $receiveName = $userMessage['user'][0]['display_name'];
                    $notificationCountFollow = 0;
                    $notificationCountMessage = 0;
                    for ($i = 0; $i < sizeof($userMessage['user'][0]['notifications']); $i++) {
                        if ($userMessage['user'][0]['notifications'][$i]["isRead"] === false) {
                            if ($userMessage['user'][0]['notifications'][$i]["type"] === "follow" || $userMessage['user'][0]['notifications'][$i]["type"] === "unFollow") {
                                $notificationCountFollow++;
                            } else {
                                $notificationCountMessage++;
                            }
                        }
                    }
                    $conversationController->sendEmail($receiveEmail, $receiveName, $notificationCountFollow, $notificationCountMessage, $ownerId);
                }
                if ($cbm->set($notification, CJSON::encode($userMessage))) {
                    
                } else {
                    echo $this->sendResponse(409, 'A record with id: "' . substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI'] . '/' . '" already exists');
                }
            }
        } elseif ($commenter_id === $message_owner && $id !== $commenter_id) {
            $notificationInfo = $this->getDomain() . "/users/" . $ownerId;
            $cbs = $this->couchBaseConnection();
            $notificationInfoDeep = $cbs->get($notificationInfo); // get the old user record from the database according to the docID string
            $userInfo = CJSON::decode($notificationInfoDeep, true);

            if (!isset($userInfo['user'][0]['notification_setting']) || strpos($userInfo['user'][0]['notification_setting'], "message") !== false) {
                if (!isset($userInfo['user'][0]['notifications'])) {
                    $userInfo['user'][0]['notifications'] = array();
                }
                array_unshift($userInfo['user'][0]["notifications"], $notificationObject);
                if (!isset($userInfo['user'][0]['notification_setting']) || strpos($userInfo['user'][0]['notification_setting'], "email") !== false) {
                    $receiveEmail = $userInfo['user'][0]['email'];
                    $receiveName = $userInfo['user'][0]['display_name'];
                    $notificationCountFollow = 0;
                    $notificationCountMessage = 0;
                    for ($i = 0; $i < sizeof($userInfo['user'][0]['notifications']); $i++) {
                        if ($userInfo['user'][0]['notifications'][$i]["isRead"] === false) {
                            if ($userInfo['user'][0]['notifications'][$i]["type"] === "follow" || $userInfo['user'][0]['notifications'][$i]["type"] === "unFollow") {
                                $notificationCountFollow++;
                            } else {
                                $notificationCountMessage++;
                            }
                        }
                    }
                    $conversationController->sendEmail($receiveEmail, $receiveName, $notificationCountFollow, $notificationCountMessage, $ownerId);
                }
                if ($cbs->set($notificationInfo, CJSON::encode($userInfo))) {
                    
                } else {
                    echo $this->sendResponse(409, 'A record with id: "' . substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI'] . '/' . '" already exists');
                }
            }
        }
    }

    public function actionRead() {
        $ownerID = CJSON::decode(file_get_contents('php://input'));

        try {
            $cb = $this->couchBaseConnection();

            $docID = $this->getDomain() . "/users/" . $ownerID;
            $old = $cb->get($docID); // get the old user record from the database according to the docID string
            $oldRecord = CJSON::decode($old, true);
            $newRecord = array();

            if (isset($oldRecord['user'][0]["messages"])) {
                for ($i = 0; $i < sizeof($oldRecord['user'][0]["messages"]); $i++) {
                    $newRecord[$i]["message_id"] = $oldRecord['user'][0]["messages"][$i]["message_id"];
                    if (isset($oldRecord['user'][0]["messages"][$i]["replyMessageCollection"])) {
                        $newRecord[$i]["replyMessageCollection"] = array();
                        for ($j = 0; $j < sizeof($oldRecord['user'][0]["messages"][$i]["replyMessageCollection"]); $j++) {
                            $newRecord[$i]["replyMessageCollection"][$j] = $oldRecord['user'][0]["messages"][$i]["replyMessageCollection"][$j];
                            $commenterInfo = $this->getDomain() . "/users/" . $newRecord[$i]["replyMessageCollection"][$j] ["user_id"];
                            $cbs = $this->couchBaseConnection();
                            $commenterInfoDeep = $cbs->get($commenterInfo); // get the old user record from the database according to the docID string
                            $oldcommenterInfo = CJSON::decode($commenterInfoDeep, true);
                            $display_name = $oldcommenterInfo['user'][0]["display_name"];
                            $photo_url_large = $oldcommenterInfo['user'][0]["photo_url_large"];
                            $newRecord[$i]["replyMessageCollection"][$j]["user_name"] = $display_name;
                            $newRecord[$i]["replyMessageCollection"][$j]["photo_url_large"] = $photo_url_large;
                        }
                    }
                }
            }


            if ($newRecord === null) {
                $this->sendResponse(204);
            } else {
                $this->sendResponse(200, CJSON::encode($newRecord));
            }
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
    }

    public function actionDelete() {
        $info = CJSON::decode(file_get_contents('php://input'));
        $infoDel = CJSON::decode($info, true);
        $message_id = $infoDel[0];
        $reply_id = $infoDel[1];


        try {
            $cb = $this->couchBaseConnection();
            if ($type === 'profile') {
                $docID = $this->getDomain() . "/profiles/" . $collectionDelProfile;
                $profileOwn = $cb->get($docID);
                $owner = CJSON::decode($profileOwn, true);
                $records = $owner["profile"][0]["collections"];
                $collection_num = $this->getSelectedcollection($records, $collectionDel_id);
                array_splice($owner["profile"][0]["collections"], $collection_num, 1);
//                for ($i = 0; $i < sizeof($owner["profile"][0]["collections"]); $i++) {
//                    if ($owner["profile"][0]["collections"][$i]["id"] === $collectionDel_id) {
//                        array_splice($owner["profile"][0]["collections"], $i, 1);
//                    }
//                }
            } else {
                $docID = $this->getDomain() . "/users/" . $collectionDelProfile;
                $profileOwn = $cb->get($docID);
                $owner = CJSON::decode($profileOwn, true);
                $records = $owner["user"][0]["collections"];
                $collection_num = $this->getSelectedcollection($records, $collectionDel_id);
                array_splice($owner["user"][0]["collections"], $collection_num, 1);
            }

            if ($cb->set($docID, CJSON::encode($owner))) {
                $this->sendResponse(204);
            } else {
                $this->sendResponse(500, "some thing wrong");
            }
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
    }

}

?>
