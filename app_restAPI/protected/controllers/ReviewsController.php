<?php

header("Access-Control-Allow-Origin: *");
header('Content-type: *');
header('Access-Control-Request-Method: *');
header('Access-Control-Allow-Methods: PUT, POST, OPTIONS,GET');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

class ReviewsController extends Controller {

    const JSON_RESPONSE_ROOT_SINGLE = 'review';
    const JSON_RESPONSE_ROOT_PLURAL = 'reviews';

    public function actionIndex() {
        $this->sendResponse(200, "ok");
    }

    public function actionCreate() {
        $request_json = file_get_contents('php://input');
        $newRecord = CJSON::decode($request_json, true); 
        
      //  error_log(var_export($newRecord,true));
        $id = $newRecord['review']['optional'];
        $docID = $this->getDomain() . "/profiles/" . $id;
        $cb = $this->couchBaseConnection();
        $oldRecord_arr = $cb->get($docID);
     
        $oldRecord = CJSON::decode($oldRecord_arr, true);
        if (!isset($oldRecord['profile'][0]['reviews'])) {
            $oldRecord['profile'][0]['reviews'] = array();
        }
        array_unshift($oldRecord['profile'][0]['reviews'], $newRecord['review']);
        
        $average = $this->calculateReviewAverage($oldRecord['profile'][0]['reviews']);
        $oldRecord['profile'][0]['profile_average_review'] = $average;
        error_log(var_export($oldRecord,true));
        if ($cb->set($docID, CJSON::encode($oldRecord))) {
            $this->sendResponse(204);
        } else {
            $this->sendResponse(500, "some thing wrong");
        }
    }
    
    public function calculateReviewAverage($reviews) {
        $average = 0;
        for ($i = 0; $i< sizeof($reviews); $i++) {
            $average = $average + $reviews[$i]['review_star_rating_value'];
        }
        return round($average/sizeof($reviews),1);
    }
    
      public function actionCreateReviewReply() {
        $request_arr = CJSON::decode(file_get_contents('php://input'));
        $request_array = CJSON::decode($request_arr);
        $replyUserID= $request_array[0];
        $replyDate = $request_array[1];
        $replyContent = $request_array[2];
        $replyOwnerID = $request_array[3];

        $newStyleImage = $request_array[4];

        $imageType = $request_array[5];
        $photo_name = $request_array[6];

        $message_id = $request_array[7];
        $review_id = $request_array[8]; //current message owner's message id 



        $message_id = $message_id . $replyUserID . $replyOwnerID;
        $comment = $this->addReply($replyUserID, $replyDate, $replyContent, $replyOwnerID, $newStyleImage, $imageType, $photo_name, $message_id, $review_id);

        if ($comment) {
            $this->sendResponse(200, CJSON::encode($comment));
        } else {
            echo $this->sendResponse(409, 'A record with id: "' . substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI'] . '/' . '" already exists');
        }
    }

//$message_id: is used to store the image store url and as a reply id
    public function addReply($replyUserID, $replyDate, $replyContent, $replyOwnerID, $newStyleImage, $imageType, $photo_name, $message_id, $review_id) {                       //saving follower in profile
        try {
             //$id = $newRecord['review']['optional'];
            $docIDDeep = $this->getDomain() . "/profiles/" . $id;
            $cb = $this->couchBaseConnection();
            $oldDeep = $cb->get($docIDDeep); // get the old user record from the database according to the docID string
            $oldRecordDeep = CJSON::decode($oldDeep, true);


            $newReply = array();

            $newReply["review_reply_id"] = $message_id;
            $newReply["review_user_id"] = $replyUserID;
            $newReply["review_time_stamp"] = $replyDate;
            $newReply["review_msg"] = $replyContent;



//get the commenter's photo url and name
            $commenterInfo = $this->getDomain() . "/users/" . $replyUserID;
            $cbs = $this->couchBaseConnection();
            $commenterInfoDeep = $cbs->get($commenterInfo); // get the old user record from the database according to the docID string
            $oldcommenterInfo = CJSON::decode($commenterInfoDeep, true);

            $newReply["user_name"] = $oldcommenterInfo['user'][0]["display_name"];
            $newReply["photo_url_large"] = $oldcommenterInfo['user'][0]["photo_url_large"];

            if ($newStyleImage !== null && $photo_name !== "") {
                $photoController = new PhotosController(); //    this.get("controllers.PhotosController").             
                //error_log(var_export($newStyleImage, true));
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
                return $newMessage;
            } else {
                
            }
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
            echo json_decode(file_get_contents('php://input'));
        }
    }
    
    
    

    public function actionRead() {

    }

    public function actionUpdate() {

        $request_json = file_get_contents('php://input');
        $newRecord = CJSON::decode($request_json, true);        
       error_log(var_export($newRecord, true));
   
       $owner_id = $newRecord ['optional'];
       $id = $newRecord['review_id'];
        try {
            $cb = $this->couchBaseConnection();
            

              $docID = $this->getDomain() . "/profiles/" . $owner_id;                         
              $cbRecord = $cb->get($docID); // get the old profile record from the database according to the docID string
              $oldRecord = CJSON::decode($cbRecord, true);
              $records =  $oldRecord["profile"][0]["reviews"];            
              $review_num = $this ->getSelectedreview($records,$id);
              error_log(var_export($review_num, true));
              if ($review_num !== -1) {
                $oldRecord["profile"][0]["reviews"] [$review_num] = $newRecord; 
               error_log(var_export($newRecord, true));
              }
 
        
        if ($cb->set($docID, CJSON::encode($oldRecord))) {
                $this->sendResponse(204);
            } else {
                $this->sendResponse(500, "some thing wrong");
            }
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
    
    }
    
    public function getSelectedreview($records,$id) {
        $i = 0;
        $review_num=-1;
        foreach ($records as $record_id) {//assign each collection in profile's collections to record_id

            if ($record_id["review_id"] == $id) {
                //$records [$collection_num] = $collection; //replace the old collection with the new record's collection
                $review_num=$i;
            }
            $i++;
        }
        return $review_num;
    }

    public function actionDelete() {

    }

    public function actionTest() {
       
    }

}

?>
