
<?php

header('Access-Control-Allow-Origin: *');
header('Content-type: *');
header('Access-Control-Request-Method: *');
header('Access-Control-Allow-Methods: PUT, POST, OPTIONS, GET');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

class ConversationsController extends Controller {

    const JSON_RESPONSE_ROOT_SINGLE = 'conversation';
    const JSON_RESPONSE_ROOT_PLURAL = 'conversations';

    public function __construct() {
        
    }

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

    public function actionDeleteConversation() {
        $request_array = CJSON::decode(file_get_contents('php://input'));
        $request_array = CJSON::decode($request_array);
        $owner_id = $request_array[0];
        $conversationId = $request_array[1];
        $conversation = $this->deleteConversation($owner_id, $conversationId);

        if ($conversation) {
            $this->sendResponse(200, CJSON::encode($conversation));
        } else {
            echo $this->sendResponse(409, 'A record with id: "' . substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI'] . '/' . '" already exists');
        }
    }

    public function deleteConversation($owner_id, $conversationId) {
        try {
            $cb = $this->couchBaseConnection();
            $domain = $this->getDomain();
            $docID_currentUser = $domain . "/conversations/" . $conversationId;


            $tempMega_currentUser = $cb->get($docID_currentUser);
            $mega_currentUser = CJSON::decode($tempMega_currentUser, true);

            $participation_id = explode(",", $mega_currentUser["participation_ids"]);

            $participationID = "";
            for ($i = 0; $i < sizeof($participation_id); $i++) {

                if ($participation_id[$i] !== $owner_id) {
                    if (sizeof($participation_id) === 1) {
                        $participationID = $participation_id[$i];
                    } else {
                        if ($participationID != "") {
                            $participationID = $participationID . "," . $participation_id[$i];
                        } else {
                            $participationID = $participation_id[$i];
                        }
                    }
                }
            }


            $mega_currentUser["participation_ids"] = $participationID;
            $commenterInfo = $this->getDomain() . "/users/" . $owner_id;
            $cbs = $this->couchBaseConnection();
            $commenterInfoDeep = $cbs->get($commenterInfo); // get the old user record from the database according to the docID string
            $oldcommenterInfo = CJSON::decode($commenterInfoDeep, true);


            for ($i = 0; $i < sizeof($oldcommenterInfo['user'][0]["conversations"]); $i++) {
                if ($oldcommenterInfo['user'][0]["conversations"][$i]["conversation_id"] === $conversationId) {
                    array_splice($oldcommenterInfo['user'][0]["conversations"], $i, 1);
                }
            }

            if ($cb->set($commenterInfo, CJSON::encode($oldcommenterInfo))) {
                
            } else {
                
            }
            if ($cb->set($docID_currentUser, CJSON::encode($mega_currentUser))) {
                
            } else {
                
            }
            return true;
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
            echo json_decode(file_get_contents('php://input'));
        }
    }

    public function actionReadConversation() {

        $request_array = CJSON::decode(file_get_contents('php://input'));
        $request_array = CJSON::decode($request_array);
        $conversationId = $request_array[0];
        $conversation = $this->readConversationItem($conversationId);

        if ($conversation) {
            $this->sendResponse(200, CJSON::encode($conversation));
        } else {
            $this->sendResponse(204);
        }
    }

    public function actionAddConversationItem() {
        $request_array = CJSON::decode(file_get_contents('php://input'));
        $request_array = CJSON::decode($request_array);
        $commenter_id = $request_array[0];
        $time_stamp = $request_array[1];
        $conversationtContent = $request_array[2];
        $conversationItemId = $request_array[3];
        $newStyleImage = $request_array[4];
        $imageType = $request_array[5];
        $imageStyleName = $request_array[6];
        $conversationId = $request_array[7];
        $participantIds = $request_array[8];
        $conversationItemId = $conversationItemId . $commenter_id;

        $conversation = $this->addConversationItem($commenter_id, $time_stamp, $conversationtContent, $conversationItemId, $newStyleImage, $imageType, $imageStyleName, $conversationId, $participantIds);

        if ($conversation) {
            $this->sendResponse(200, CJSON::encode($conversation));
        } else {
            echo $this->sendResponse(204);
        }
    }

    public function addConversationItem($commenter_id, $time_stamp, $conversationtContent, $conversationItemId, $newStyleImage, $imageType, $photo_name, $conversationId, $participantIds) {

        try {
            $cb = $this->couchBaseConnection();
            $domain = $this->getDomain();
            $docID_currentUser = $domain . "/conversations/" . $conversationId;


            $tempMega_currentUser = $cb->get($docID_currentUser);
            $mega_currentUser = CJSON::decode($tempMega_currentUser, true);


            $newConversationItem = array();


            $newConversationItem["item_id"] = $conversationItemId;
            $newConversationItem["sender_id"] = $commenter_id;
            $newConversationItem["time_stamp"] = $time_stamp;
            $newConversationItem["msg"] = $conversationtContent;


            $commenterInfo = $this->getDomain() . "/users/" . $commenter_id;
            $cbs = $this->couchBaseConnection();
            $commenterInfoDeep = $cbs->get($commenterInfo); // get the old user record from the database according to the docID string
            $oldcommenterInfo = CJSON::decode($commenterInfoDeep, true);

            $newConversationItem["name"] = $oldcommenterInfo['user'][0]["display_name"];
            $newConversationItem["sender_photo_url_large"] = $oldcommenterInfo['user'][0]["photo_url_large"];

            if ($newStyleImage !== null && $photo_name !== "") {
                $photoController = new PhotosController(); //    this.get("controllers.PhotosController").             
                //error_log(var_export($newStyleImage, true));
                $data_arr = $photoController->convertToString64($newStyleImage);
                //$data_arr = $photoController->convertToString64($photo_string);      
                $photo = imagecreatefromstring($data_arr['data']);
                $compressed_photo = $photoController->compressPhotoData($imageType, $photo);
                $orig_size['width'] = imagesx($compressed_photo);
                $orig_size['height'] = imagesy($compressed_photo);
                $url = $photoController->saveConversationPhotoInTypes($orig_size, "user_cover_small", $photo_name, $compressed_photo, $data_arr, null, $conversationItemId);

                $newConversationItem["url"] = $url;
            } else {
                $newConversationItem["url"] = null;
            }

            array_unshift($mega_currentUser['ConversationCollection'], $newConversationItem);

            $participation_id = explode(",", $participantIds);
            if ($participantIds !== null && $participantIds !== '') {
                $mega_currentUser["participation_ids"] = $mega_currentUser["participation_ids"] . "," . $participantIds;
            }
            $participantions = explode(",", $mega_currentUser["participation_ids"]);


            for ($i = 0; $i < sizeof($participation_id); $i++) {

                $commenterInfo = $this->getDomain() . "/users/" . $participation_id[$i];
                $cbs = $this->couchBaseConnection();
                $commenterInfoDeep = $cbs->get($commenterInfo); // get the old user record from the database according to the docID string
                $oldcommenterInfo = CJSON::decode($commenterInfoDeep, true);

                if (!isset($oldcommenterInfo['user'][0]["conversations"])) {
                    $oldcommenterInfo['user'][0]["conversations"] = array();
                }
                $conversationObject = array();
                $conversationObject["conversation_id"] = $conversationId;
                $conversationObject["is_read"] = false;
                array_unshift($oldcommenterInfo['user'][0]["conversations"], $conversationObject);

                if ($cb->set($commenterInfo, CJSON::encode($oldcommenterInfo))) {
                    
                } else {
                    echo $this->sendResponse(409, 'A record with id: "' . substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI'] . '/' . '" already exists');
                }
            }
            $this->createNotification($commenter_id, $participantions, $time_stamp, $conversationId, $conversationtContent);
            if ($cb->set($docID_currentUser, CJSON::encode($mega_currentUser))) {
                return $newConversationItem;
            } else {
                
            }
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
            echo json_decode(file_get_contents('php://input'));
        }
    }

    public function readConversationItem($conversationId) {
        try {

            $cb = $this->couchBaseConnection();
            $domain = $this->getDomain();
            $docID_currentUser = $domain . "/users/" . $conversationId;

            $tempMega_currentUser = $cb->get($docID_currentUser);
            $mega_currentUser = CJSON::decode($tempMega_currentUser, true);

            $readConversation = array();
            if (isset($mega_currentUser['user'][0]['conversations'])) {
                for ($i = 0; $i < sizeof($mega_currentUser['user'][0]['conversations']); $i++) {
                    $currentConversationId = $mega_currentUser['user'][0]['conversations'][$i]["conversation_id"];
                    $docID_currentConversation = $domain . "/conversations/" . $currentConversationId;

                    $tempMega_conversation = $cb->get($docID_currentConversation);
                    $mega_currentConversation = CJSON::decode($tempMega_conversation, true);

                    $participationIds = explode(",", $mega_currentConversation["participation_ids"]);
                    $contentParticipation = array();
                    for ($k = 0; $k < sizeof($participationIds); $k++) {
                        if ($participationIds[$k] !== '' && $participationIds[$k] !== null) {
                            $docID_currentUserNew = $domain . "/users/" . $participationIds[$k];
                            $docID_currentUserNew = $cb->get($docID_currentUserNew);
                            $tdocID_currentUserNew = CJSON::decode($docID_currentUserNew, true);
                            $tempPhoto = array();
                            $tempPhoto['isAdd'] = true;
                            $tempPhoto['name'] = $tdocID_currentUserNew['user'][0]["display_name"];
                            $tempPhoto['photo_url'] = $tdocID_currentUserNew['user'][0]["photo_url_large"];
                            array_push($contentParticipation, $tempPhoto);
                            if ($k === 0) {
                                $names = $tdocID_currentUserNew['user'][0]["display_name"];
                            } elseif ($k === 1) {
                                $names = $names . ', ' . $tdocID_currentUserNew['user'][0]["display_name"];
                            } elseif ($k === 2) {
                                $names = $names . ', ' . $tdocID_currentUserNew['user'][0]["display_name"];
                                if (strlen($names) > 45) {
                                    $names = substr($names, 0, 45) . "...";
                                } else {
                                    $names = $names . "...";
                                }
                            }
                        }
                    }

                    for ($j = 0; $j < sizeof($mega_currentConversation["ConversationCollection"]); $j++) {
                        $sender_id = $mega_currentConversation["ConversationCollection"][$j]["sender_id"];
                        $docID_currentUserNew = $domain . "/users/" . $sender_id;
                        $docID_currentUserNew = $cb->get($docID_currentUserNew);
                        $docID_currentUserNew = CJSON::decode($docID_currentUserNew, true);
                        $mega_currentConversation["ConversationCollection"][$j]["name"] = $docID_currentUserNew['user'][0]["display_name"];
                        $mega_currentConversation["ConversationCollection"][$j]["sender_photo_url_large"] = $docID_currentUserNew['user'][0]["photo_url_large"];
                    }
                    array_push($readConversation, $mega_currentConversation);

                    $readConversation[$i]["names"] = $names;
                    $readConversation[$i]["conversationPhoto"] = $contentParticipation;
                }
            } else {
                
            }

            return $readConversation;
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
            echo json_decode(file_get_contents('php://input'));
        }
    }

    public function actionCreateConversation() {
        $request_array = CJSON::decode(file_get_contents('php://input'));
        $request_array = CJSON::decode($request_array);

        $commenter_id = $request_array[0];
        $date = $request_array[1];
        $commentContent = $request_array[2];


        $newStyleImage = $request_array[3];

        $imageType = $request_array[4];
        $photo_name = $request_array[5];

        $conversationID = $request_array[6];
        $conversationItemID = $request_array[7];
        $participation_ids = $request_array[8];
        $conversationID = $conversationID . $commenter_id;
        $conversationItemID = $conversationItemID . $commenter_id;
        $conversation = $this->addConversation($commenter_id, $date, $commentContent, $newStyleImage, $imageType, $photo_name, $conversationID, $conversationItemID, $participation_ids);


        if ($conversation) {
            $this->sendResponse(200, CJSON::encode($conversation));
        } else {
            echo $this->sendResponse(409, 'A record with id: "' . substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI'] . '/' . '" already exists');
        }
    }

    public function createNotification($commenter_id, $participantions, $date, $conversationID, $commentContent) {

        for ($i = 0; $i < sizeof($participantions); $i++) {
            if ($participantions[$i] !== $commenter_id) {
                $ownerId = $participantions[$i];
                $notificationObject = array();
                $timeID = date_timestamp_get(new DateTime());

                $notification_id = (string) (rand(10000, 99999)) . $timeID . $commenter_id;

                $notificationObject["notification_id"] = $notification_id;
                $notificationObject["user_id"] = $commenter_id;
                $notificationObject["time"] = $date;
                $notificationObject["type"] = "conversation";
                $notificationObject["content"] = $commentContent;
                $notificationObject["action_id"] = $conversationID;
                $notificationObject["isRead"] = false;
                $notificationInfo = $this->getDomain() . "/users/" . $ownerId;
                $cbs = $this->couchBaseConnection();
                $notificationInfoDeep = $cbs->get($notificationInfo); // get the old user record from the database according to the docID string
                $userInfo = CJSON::decode($notificationInfoDeep, true);

                if (!isset($userInfo['user'][0]['notification_setting']) || strpos($userInfo['user'][0]['notification_setting'], "conversation") !== false) {
                    if (!isset($userInfo['user'][0]['notifications'])) {
                        $userInfo['user'][0]['notifications'] = array();
                    }
                    array_unshift($userInfo['user'][0]["notifications"], $notificationObject);
                }

                if ($cbs->set($notificationInfo, CJSON::encode($userInfo))) {
                    if (!isset($userInfo['user'][0]['notification_setting']) || strpos($userInfo['user'][0]['notification_setting'], "email") !== false) {
                        $receiveEmail = $userInfo['user'][0]['email'];
                        $receiveName = $userInfo['user'][0]['display_name'];
                        $notificationCountFollow = 0;
                        $notificationCountMessage = 0;

                        for ($j = 0; $j < sizeof($userInfo['user'][0]['notifications']); $j++) {
                            if ($userInfo['user'][0]['notifications'][$j]["isRead"] === false) {
                                if ($userInfo['user'][0]['notifications'][$j]["type"] === "follow" || $userInfo['user'][0]['notifications'][$j]["type"] === "unFollow") {
                                    $notificationCountFollow++;
                                } else {
                                    $notificationCountMessage++;
                                }
                            }
                        }
                        $this->sendEmail($receiveEmail, $receiveName, $notificationCountFollow, $notificationCountMessage, $ownerId);
                    }
                }
            }
        }
    }

    public function sendEmail($receiveEmail, $receiveName, $notificationCountFollow, $notificationCountMessage, $ownerId) {

     //   $receiveEmail = "tom@hubstar.co";
        $domain = $this->getDomain();
        $domainWithoutAPI=$this->getDomainWihoutAPI();
        $configuration = $this->getProviderConfigurationByName($domain, "SES");
        $amazonSes = Aws\Ses\SesClient::factory($configuration);
        $platformSettings = $this->getProviderConfigurationByName($domain, "Communications");
        $platformEmail = $platformSettings['support']['email'];
        $subject_prefix = $receiveName . "  you have notifications pending ";
        $args = array(
            "Source" => $platformEmail,
            "Destination" => array(
                "ToAddresses" => array(
                    $receiveEmail),
//                "BccAddresses" => array(
//                    $platformEmail)
            ),
            "Message" => array(
                "Subject" => array(
                    "Data" => $subject_prefix
                ),
                "Body" => array(
                    "Html" => array(

                        "Data" => $this->confirmationEmailForm($domainWithoutAPI,$receiveName, $notificationCountFollow, $notificationCountMessage, $ownerId)

                    )
                ),
            ),
        );
        $amazonSes->sendEmail($args);
    }


    public function confirmationEmailForm($domainWithoutAPI,$receiveName, $notificationCountFollow, $notificationCountMessage, $ownerId) {

        return '
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title></title>
    </head>
    <body style="background: #E5E5E5; margin: 0; padding: 0;">
        <table width="100%" cellpadding="0" cellspacing="0">
            <tbody>
                <tr>
                    <td align="center">
                        &nbsp;<br />
                        <br />&nbsp;
                        <table cellpadding="0" cellspacing="0" border="0" style="background: #fff;" width="600">
                            <tbody>     
                                <tr>
                                    <td align="center">
                                        &nbsp;<br />
                                        <table cellpadding="10" cellspacing="0" width="90%" style="color: #666; font-size: 13px;
                                               line-height: 150%; font-family: Helvetica, Arial, San-Serif; text-align: left;">
                                            <tr>
                                                <td valign="top">
                                                    <h1 style="color: #05B1E5; font-size: 2em; font-weight: normal; margin: 0; line-height: 200%;">
                                                       Hi   ' . $receiveName . '</h1>
                                                    You have new notifications on myTrends!
                                                         &nbsp;<br />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <table align="left" style="color: #05B1E5; font-size: 13px; line-height: 150%; font-family: Helvetica, Arial, San-Serif;
                                                           text-align: left;" cellpadding="0" cellspacing="0">
                                                        <tr>
                                                            <td valign="top">

                                                            <a href="http://'.$domainWithoutAPI.'/#/users/' . $ownerId . '/messagecenter/notifications">  ' . $notificationCountMessage . ' notifications  </a>
                                                                  
                                                            </td>
                                                        </tr>
                                                    </table>

                                                </td>
                                            </tr>
                                            <tr>
                                                <td valign="top">
                                                    <hr style="text-align:center;height: 1px; color: #0088CC; background: #0088CC; width: 100%; border: 0 none;margin:0;" />
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center">
                                        &nbsp;<br />
                                 <a href="http://'.$domainWithoutAPI.'/#/search">     <button type="homepage">Go to TrendsIdeas</button></a>

                                    </td>
                                     <td align="center">
                                  <a href="http://'.$domainWithoutAPI.'/#/users/' . $ownerId . '/messagecenter/notifications">      <button type="notifications">     See all notifications</button> </a>
                                        <br />&nbsp;
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        &nbsp;<br />
                    </td>
                </tr>
            </tbody>
        </table>
    </body>
</html>
';
    }

    public function addConversation($commenter_id, $date, $commentContent, $newStyleImage, $imageType, $photo_name, $conversationID, $conversationItemID, $participation_ids) {                       //saving follower in profile
        try {

            $docIDDeep = $this->getDomain() . "/conversations/" . $conversationID;

            //  error_log(var_export($id, true));
            $cb = $this->couchBaseConnection();
            $oldDeep = $cb->get($docIDDeep); // get the old user record from the database according to the docID string
            $oldRecordDeep = CJSON::decode($oldDeep, true);

            $newConversationItem = array();

            $newConversationItem["item_id"] = $conversationItemID;
            $newConversationItem["sender_id"] = $commenter_id;
            $newConversationItem["time_stamp"] = $date;
            $newConversationItem["msg"] = $commentContent;

            $commenterInfo = $this->getDomain() . "/users/" . $commenter_id;
            $cbs = $this->couchBaseConnection();
            $commenterInfoDeep = $cbs->get($commenterInfo); // get the old user record from the database according to the docID string
            $oldcommenterInfo = CJSON::decode($commenterInfoDeep, true);

            $newConversationItem["name"] = $oldcommenterInfo['user'][0]["display_name"];
            $newConversationItem["sender_photo_url_large"] = $oldcommenterInfo['user'][0]["photo_url_large"];


            if ($cb->set($commenterInfo, CJSON::encode($oldcommenterInfo))) {
                
            } else {
                echo $this->sendResponse(409, 'A record with id: "' . substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI'] . '/' . '" already exists');
            }

            if ($newStyleImage !== null && $photo_name !== "") {
                $photoController = new PhotosController(); //    this.get("controllers.PhotosController").             
                //error_log(var_export($newStyleImage, true));
                $data_arr = $photoController->convertToString64($newStyleImage);
                //$data_arr = $photoController->convertToString64($photo_string);      
                $photo = imagecreatefromstring($data_arr['data']);
                $compressed_photo = $photoController->compressPhotoData($imageType, $photo);
                $orig_size['width'] = imagesx($compressed_photo);
                $orig_size['height'] = imagesy($compressed_photo);
                $url = $photoController->saveConversationPhotoInTypes($orig_size, "user_cover_small", $photo_name, $compressed_photo, $data_arr, null, $conversationID);


                $newConversationItem["url"] = $url;
            } else {
                $newConversationItem["url"] = null;
            }

            $oldRecordDeep['conversationID'] = $conversationID;
            $oldRecordDeep['type'] = "conversation";
            if ($participation_ids === null || $participation_ids === '') {
                $oldRecordDeep['participation_ids'] = $commenter_id;
            } else {
                $oldRecordDeep['participation_ids'] = $commenter_id . "," . $participation_ids;
            }

            $oldRecordDeep['ConversationCollection'] = array();
            array_unshift($oldRecordDeep['ConversationCollection'], $newConversationItem);

            $addResult = $oldRecordDeep;
            //get the commenter's photo url and name
            if ($participation_ids === '' || $participation_ids === null) {
                $participantions = explode(",", $commenter_id);
            } else {
                $participantions = explode(",", $participation_ids . ',' . $commenter_id);
            }

            $this->createNotification($commenter_id, $participantions, $date, $conversationID, $commentContent);

            $addResult['conversationPhoto'] = array();
            for ($i = 0; $i < sizeof($participantions); $i++) {
                $commenterInfo = $this->getDomain() . "/users/" . $participantions[$i];
                $cbs = $this->couchBaseConnection();
                $commenterInfoDeep = $cbs->get($commenterInfo); // get the old user record from the database according to the docID string
                $oldcommenterInfo = CJSON::decode($commenterInfoDeep, true);
                $conversationObject = array();
                $conversationObject["conversation_id"] = $conversationID;
                $conversationObject["is_read"] = false;
                if (!isset($oldcommenterInfo['user'][0]["conversations"])) {

                    $oldcommenterInfo['user'][0]["conversations"] = array();
                }

                $tempPhoto = array();
                $tempPhoto['isAdd'] = true;
                $tempPhoto['name'] = $oldcommenterInfo['user'][0]["display_name"];
                $tempPhoto['photo_url'] = $oldcommenterInfo['user'][0]["photo_url_large"];
                array_push($addResult['conversationPhoto'], $tempPhoto);
                if ($i === 0) {
                    $names = $oldcommenterInfo['user'][0]["display_name"];
                } elseif ($i === 1) {
                    $names = $names . ',' . $oldcommenterInfo['user'][0]["display_name"];
                } elseif ($i === 2) {
                    $names = $names . ',' . $oldcommenterInfo['user'][0]["display_name"];
                    if (strlen($names) > 40) {
                        $names = substr($names, 0, 40) . "...";
                    } else {
                        $names = $names . "...";
                    }
                }
                $addResult["names"] = $names;

                array_unshift($oldcommenterInfo['user'][0]["conversations"], $conversationObject);
                if ($cb->set($commenterInfo, CJSON::encode($oldcommenterInfo))) {
                    
                } else {
                    echo $this->sendResponse(409, 'A record with id: "' . substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI'] . '/' . '" already exists');
                }
            }


            if ($cb->set($docIDDeep, CJSON::encode($oldRecordDeep))) {

                return $addResult;
            } else {
                
            }
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
            echo json_decode(file_get_contents('php://input'));
        }
    }

}

?>
