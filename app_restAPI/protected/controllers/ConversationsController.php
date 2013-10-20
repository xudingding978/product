
<?php

header('Access-Control-Allow-Origin: *');
header('Content-type: *');
header('Access-Control-Request-Method: *');
header('Access-Control-Allow-Methods: PUT, POST, OPTIONS, GET');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

class ConversationsController extends Controller {

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

    public function actionConversationRead() {
        
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
        $conversationID = $conversationID . $commenter_id;
        $conversationItemID = $conversationItemID . $commenter_id;
        $conversation = $this->addConversation($commenter_id, $date, $commentContent, $newStyleImage, $imageType, $photo_name, $conversationID, $conversationItemID);


        if ($conversation) {
            $this->sendResponse(200, CJSON::encode($conversation));
        } else {
            echo $this->sendResponse(409, 'A record with id: "' . substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI'] . '/' . '" already exists');
        }
    }

    public function addConversation($commenter_id, $date, $commentContent, $newStyleImage, $imageType, $photo_name, $conversationID, $conversationItemID) {                       //saving follower in profile
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



//get the commenter's photo url and name
            $commenterInfo = $this->getDomain() . "/users/" . $commenter_id;
            $cbs = $this->couchBaseConnection();
            $commenterInfoDeep = $cbs->get($commenterInfo); // get the old user record from the database according to the docID string
            $oldcommenterInfo = CJSON::decode($commenterInfoDeep, true);

            $newConversationItem["name"] = $oldcommenterInfo['user'][0]["display_name"];
            $newConversationItem["sender_photo_url_large"] = $oldcommenterInfo['user'][0]["photo_url_large"];
            if (!isset($oldcommenterInfo['user'][0]["conversations"])) {

                $oldcommenterInfo['user'][0]["conversations"] = array();
                //  $oldcommenterInfo['user'][0]["conversations"].','.$conversationID;
            }
            $conversationObject = array();
            $conversationObject["conversationId"] = $conversationID;
            $conversationObject["isRead"] = false;
            array_unshift($oldRecordDeep['ConversationCollection'], $conversationObject);

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
            $oldRecordDeep['participation_ids'] = $commenter_id;
            $oldRecordDeep['ConversationCollection'] = array();
            array_unshift($oldRecordDeep['ConversationCollection'], $newConversationItem);


            if ($cb->set($docIDDeep, CJSON::encode($oldRecordDeep))) {
                return $oldRecordDeep;
            } else {
                
            }
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
            echo json_decode(file_get_contents('php://input'));
        }
    }

}

?>
