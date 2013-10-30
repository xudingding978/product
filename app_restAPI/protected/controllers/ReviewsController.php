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
        $ownerID = $request_array[3];

        $newStyleImage = $request_array[4];

        $imageType = $request_array[5];
        $photo_name = $request_array[6];

        $replyReviewID = $request_array[7];
        $reviewID = $request_array[8]; //current reply owner's review id 



        $replyReviewID = $replyReviewID . $replyUserID . $ownerID;
        $comment = $this->addReply($replyUserID, $replyDate, $replyContent, $ownerID, $newStyleImage, $imageType, $photo_name, $replyReviewID, $reviewID);

        if ($comment) {
            $this->sendResponse(200, CJSON::encode($comment));
        } else {
            echo $this->sendResponse(409, 'A record with id: "' . substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI'] . '/' . '" already exists');
        }
    }

//$message_id: is used to store the image store url and as a reply id
    public function addReply($replyUserID, $replyDate, $replyContent, $ownerID, $newStyleImage, $imageType, $photo_name, $replyReviewID, $reviewID) {                       //saving follower in profile
        try {
            
            $docIDDeep = $this->getDomain() . "/profiles/" . $ownerID;
            $cb = $this->couchBaseConnection();
            $oldDeep = $cb->get($docIDDeep); // get the old user record from the database according to the docID string
            $oldRecordDeep = CJSON::decode($oldDeep, true);


            $newReply = array();

            $newReply["review_reply_id"] = $replyReviewID;
            $newReply["review_user_id"] = $replyUserID;
            $newReply["review_time_stamp"] = $replyDate;
            $newReply["review_msg"] = $replyContent;



//get the commenter's photo url and name
            $commenterInfo = $this->getDomain() . "/users/" . $replyUserID;
            $cbs = $this->couchBaseConnection();
            $commenterInfoDeep = $cbs->get($commenterInfo); // get the old user record from the database according to the docID string
            $oldcommenterInfo = CJSON::decode($commenterInfoDeep, true);

            $newReply["review_user_name"] = $oldcommenterInfo['user'][0]["first_name"] +  $oldcommenterInfo['user'][0]["last_name"];
            $newReply["review_photo_url_large"] = $oldcommenterInfo['user'][0]["photo_url_large"];

            if ($newStyleImage !== null && $photo_name !== "") {
                $photoController = new PhotosController(); //    this.get("controllers.PhotosController").             
                //error_log(var_export($newStyleImage, true));
                $data_arr = $photoController->convertToString64($newStyleImage);
                //$data_arr = $photoController->convertToString64($photo_string);      
                $photo = imagecreatefromstring($data_arr['data']);
                $compressed_photo = $photoController->compressPhotoData($imageType, $photo);
                $orig_size['width'] = imagesx($compressed_photo);
                $orig_size['height'] = imagesy($compressed_photo);
                $url = $photoController->saveCommentPhotoInTypes($orig_size, "user_cover_small", $photo_name, $compressed_photo, $data_arr, $replyUserID, null, $replyReviewID);


                $newReply["url"] = $url;
            } else {
                $newReply["url"] = null;
            }
//$newReplyJason= CJSON::encode($newReply);
            $currentReply = null;
            for ($i = 0; $i < sizeof($oldRecordDeep['profile'][0]["reviews"]); $i++) {
                $currentReply = $oldRecordDeep['profile'][0]["reviews"][$i];
                if ($currentReply["review_id"] === $reviewID) {

                    if (isset($oldRecordDeep['profile'][0]["reviews"])) {
                        array_unshift($oldRecordDeep['user'][0]["reviews"][$i]["replyReviewCollection"], $newReply);
                    } else {
                        $oldRecordDeep['profile'][0]["reviews"] = array();
                        array_unshift($oldRecordDeep['profile'][0]["reviews"][$i]["replyReviewCollection"], $newReply);
                    }
                    $currentReply = $oldRecordDeep['profile'][0]["reviews"][$i];
                    break;
                }
            }

            $newReply = $currentReply;


            if ($cb->set($docIDDeep, CJSON::encode($oldRecordDeep))) {
                return $newReply;
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
