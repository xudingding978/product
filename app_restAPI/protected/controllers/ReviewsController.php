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
        $newRecord['review']['reply_reviews'] = array();
        array_unshift($oldRecord['profile'][0]['reviews'], $newRecord['review']);

        $average = $this->calculateReviewAverage($oldRecord['profile'][0]['reviews']);
        $averageLength = $average * 20;
        $oldRecord['profile'][0]['profile_average_review'] = $average;
        $oldRecord['profile'][0]['profile_average_review_length'] = $averageLength;


        if ($cb->set($docID, CJSON::encode($oldRecord))) {
            $this->sendResponse(204);
        } else {
            $this->sendResponse(500, "some thing wrong");
        }
    }

    public function calculateReviewAverage($reviews) {
        $average = 0;
        for ($i = 0; $i < sizeof($reviews); $i++) {
            $average = $average + $reviews[$i]['review_star_rating_value'];
        }
        return round($average / sizeof($reviews), 1);
    }

    public function actionCreateReviewReply() {
        $request_array = CJSON::decode(file_get_contents('php://input'));
        $profile_id = $request_array[0];
        $review_id = $request_array[1];
        $reply = $request_array[2];
        error_log(var_export($request_array));
//        error_log(var_export($review_id));
//        error_log(var_export(CJSON::decode($reply)));
        $this->sendResponse(204);
//        if ($comment) {
//            $this->sendResponse(200, CJSON::encode($comment));
//        } else {
//            echo $this->sendResponse(409, 'A record with id: "' . substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI'] . '/' . '" already exists');
//        }
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

            $newReply["review_user_name"] = $oldcommenterInfo['user'][0]["display_name"];
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


                $newReply["review_url"] = $url;
            } else {
                $newReply["review_url"] = null;
            }
//$newReplyJason= CJSON::encode($newReply);

            $currentReply = null;
            for ($i = 0; $i < sizeof($oldRecordDeep['profile'][0]["reviews"]); $i++) {
                $currentReply = $oldRecordDeep['profile'][0]["reviews"][$i];
                if ($currentReply["review_id"] === $reviewID) {
                    error_log(var_export($newReply, true));

                    if (isset($oldRecordDeep['profile'][0]["reviews"][$i]["reply_reviews"])) {
                        array_unshift($oldRecordDeep['profile'][0]["reviews"][$i]["reply_reviews"], $newReply);
                    } else {
                        $oldRecordDeep['profile'][0]["reviews"][$i]["reply_reviews"] = $newReply;
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


        $request_json = file_get_contents('php://input');
        $request_arr = CJSON::decode($request_json, true);

        try {
            $cb = $this->couchBaseConnection();
            //$ownerID= $request_arr['optional'];
            $docID = $this->getDomain() . "/profiles/" . $request_arr;
            $old = $cb->get($docID); // get the old user record from the database according to the docID string
            $oldRecord = CJSON::decode($old, true);
            $newRecord = array();


// update name and photo

//            if (isset($oldRecord['profile'][0]["reviews"])) {
//                for ($i = 0; $i < sizeof($oldRecord['profile'][0]["reviews"]); $i++) {
//                    $newRecord[$i]["review_id"] = $oldRecord['profile'][0]["reviews"][$i]["review_id"];
//                    $newRecord[$i]["review_user_id"] = $oldRecord['profile'][0]["reviews"][$i]["review_user_id"];
//                    $newRecord[$i]["review_user_photo_url"] = $oldRecord['profile'][0]["reviews"][$i]["review_user_photo_url"];
//                    $newRecord[$i]["review_user_name"] = $oldRecord['profile'][0]["reviews"][$i]["review_user_name"];
//                    $newRecord[$i]["review_content"] = $oldRecord['profile'][0]["reviews"][$i]["review_content"];
//                    $newRecord[$i]["review_time_stamp"] = $oldRecord['profile'][0]["reviews"][$i]["review_time_stamp"];
//                    $newRecord[$i]["review_star_rating_value"] = $oldRecord['profile'][0]["reviews"][$i]["review_star_rating_value"];
//                    $newRecord[$i]["review_length"] = $oldRecord['profile'][0]["reviews"][$i]["review_length"];
//                    $newRecord[$i]["review_like_count"] = $oldRecord['profile'][0]["reviews"][$i]["review_like_count"];
//                    $newRecord[$i]["review_people_like"] = $oldRecord['profile'][0]["reviews"][$i]["review_people_like"];
//                    if (isset($oldRecord['profile'][0]["reviews"][$i]["reply_reviews"])) {
//                        $newRecord[$i]["reply_reviews"] = array();
//                        for ($j = 0; $j < sizeof($oldRecord['profile'][0]["reviews"][$i]["reply_reviews"]); $j++) {
//                            $newRecord[$i]["reply_reviews"][$j] = $oldRecord['profile'][0]["reviews"][$i]["reply_reviews"][$j];
//                            $commenterInfo = $this->getDomain() . "/users/" . $newRecord[$i]["reply_reviews"][$j] ["review_user_id"];
//                            $cbs = $this->couchBaseConnection();
//                            $commenterInfoDeep = $cbs->get($commenterInfo); // get the old user record from the database according to the docID string
//                            $oldcommenterInfo = CJSON::decode($commenterInfoDeep, true);
//                            $display_name = $oldcommenterInfo['user'][0]["first_name"] + $oldcommenterInfo['user'][0]["last_name"];
//                            $photo_url_large = $oldcommenterInfo['user'][0]["photo_url_large"];
//                            $newRecord[$i]["reply_reviews"][$j]["user_name"] = $display_name;
//                            $newRecord[$i]["reply_reviews"][$j]["photo_url_large"] = $photo_url_large;
//                        }
//                    }
//                }
//            }
            $response = $oldRecord['profile'][0]['reviews'];
            $results = '{"' . self::JSON_RESPONSE_ROOT_PLURAL . '":[';
            $i = 0;
            foreach ($response as $hit) {
                if(isset($hit['source']['doc']['profile'][0]['reviews'])) {
                    $results .= CJSON::encode($hit['source']['doc']['profile'][0]);
                    if (++$i !== count($response)) {
                        $results .= ',';
                    }
                }
            }
            $results .= ']}';

            if ($newRecord === null) {
                $this->sendResponse(204);
            } else {
                $this->sendResponse(200, CJSON::encode($newRecord));
            }
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
    }

    public function actionUpdate() {

        $request_json = file_get_contents('php://input');
        $newRecord = CJSON::decode($request_json, true);
//       error_log(var_export($newRecord, true));

        $owner_id = $newRecord ['optional'];
        $id = $newRecord['review_id'];
        try {
            $cb = $this->couchBaseConnection();


            $docID = $this->getDomain() . "/profiles/" . $owner_id;
            $cbRecord = $cb->get($docID); // get the old profile record from the database according to the docID string
            $oldRecord = CJSON::decode($cbRecord, true);
            $records = $oldRecord["profile"][0]["reviews"];
            error_log(var_export($records, true));
            $review_num = $this->getSelectedreview($records, $id);
            if ($review_num !== -1) {
                
                $oldRecord["profile"][0]["reviews"] [$review_num] ["review_id"] = $newRecord["review_id"];
                $oldRecord["profile"][0]["reviews"] [$review_num] ["review_user_id"] = $newRecord["review_user_id"];
                $oldRecord["profile"][0]["reviews"] [$review_num] ["review_user_photo_url"] = $newRecord["review_user_photo_url"];
                $oldRecord["profile"][0]["reviews"] [$review_num] ["review_user_name"] = $newRecord["review_user_name"];
                $oldRecord["profile"][0]["reviews"] [$review_num] ["review_content"] = $newRecord["review_content"];
                $oldRecord["profile"][0]["reviews"] [$review_num] ["review_time_stamp"] = $newRecord["review_time_stamp"];
                $oldRecord["profile"][0]["reviews"] [$review_num] ["review_star_rating_value"] = $newRecord["review_star_rating_value"];
                $oldRecord["profile"][0]["reviews"] [$review_num] ["review_length"] = $newRecord["review_length"];
                $oldRecord["profile"][0]["reviews"] [$review_num] ["review_like_count"] = $newRecord["review_like_count"];
                $oldRecord["profile"][0]["reviews"] [$review_num] ["review_people_like"] = $newRecord["review_people_like"];


                error_log(var_export($oldRecord["profile"][0]["reviews"] [$review_num], true));
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

    public function getSelectedreview($records, $id) {
        $i = 0;
        $review_num = -1;
        foreach ($records as $record_id) {//assign each collection in profile's collections to record_id
            if ($record_id["review_id"] == $id) {
                //$records [$collection_num] = $collection; //replace the old collection with the new record's collection
                $review_num = $i;
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
