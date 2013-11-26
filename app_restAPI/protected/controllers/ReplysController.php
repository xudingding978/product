<?php

header("Access-Control-Allow-Origin: *");
header('Content-type: *');
header('Access-Control-Request-Method: *');
header('Access-Control-Allow-Methods: PUT, POST, OPTIONS,GET');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

class ReplysController extends Controller {

    const JSON_RESPONSE_ROOT_SINGLE = 'reply';
    const JSON_RESPONSE_ROOT_PLURAL = 'replys';

    public function actionIndex() {
        $this->sendResponse(204);
    }

    public function actionCreate() {
        try {
        $request_arr = CJSON::decode(file_get_contents('php://input'));
     
        $OptionalndID = $request_arr['reply']['optional'];
        $typeAndID = explode("/", $OptionalndID);
        $docID = $this->getDomain() . "/profiles/" . $typeAndID[0];
        $cb = $this->couchBaseConnection();
        $oldRecord_arr = $cb->get($docID);

        $oldRecord = CJSON::decode($oldRecord_arr, true);
        $review_num =$this-> getSelectedReview($oldRecord['profile'][0]['reviews'], $typeAndID[1]);
        if (!isset($oldRecord['profile'][0]['reviews'][$review_num]['reply_reviews'])) {
            $oldRecord['profile'][0]['reviews'][$review_num]['reply_reviews'] = array();
        }
        array_unshift($oldRecord['profile'][0]['reviews'][$review_num]['reply_reviews'] , $request_arr['reply']);
        if ($cb->set($docID, CJSON::encode($oldRecord))) {
            $this->sendResponse(204);
        } else {
            $this->sendResponse(500, "some thing wrong");
        }
        
        
        
        $this->sendResponse(204);
        }catch (exception $exc) {
            error_log('error~~~~~~~~~~');
        }
    }

    public function getSelectedReview($records,$id) {
        $i = 0;
        $collection_num=-1;
        foreach ($records as $record_id) {//assign each collection in profile's collections to record_id

            if ($record_id["review_id"] == $id) {
                //$records [$collection_num] = $collection; //replace the old collection with the new record's collection
                $collection_num=$i;
            }
            $i++;
        }
        return $collection_num;
    }
    
    
     public function getSelectedReply($records,$id) {
        $i = 0;
        $collection_num=-1;
        foreach ($records as $record_id) {//assign each collection in profile's collections to record_id

            if ($record_id["review_reply_id"] == $id) {
                //$records [$collection_num] = $collection; //replace the old collection with the new record's collection
                $collection_num=$i;
            }
            $i++;
        }
        return $collection_num;
    }
    
    public function actionRead() {

        $this->sendResponse(204);
    }

    public function actionUpdate() {
        
        $request_json = file_get_contents('php://input');
        $newRecord = CJSON::decode($request_json, true);   
          $typeAndID_arr = $newRecord['optional'];
        $typeAndID = explode("/", $typeAndID_arr); 
        $owner_id = $typeAndID[0];
        $review_id = $typeAndID[1];
        $reply_id = $newRecord['review_reply_id'];
        try {
            $cb = $this->couchBaseConnection();
            $docID = $this->getDomain() . "/profiles/" . $owner_id;
            $cbRecord = $cb->get($docID); // get the old profile record from the database according to the docID string
            $oldRecord = CJSON::decode($cbRecord, true);
          //   error_log(var_export($oldRecord, true));
             $review_num =$this-> getSelectedReview($oldRecord['profile'][0]['reviews'], $review_id);
             $reply_num =$this-> getSelectedReply($oldRecord['profile'][0]['reviews'][$review_num]['reply_reviews'], $reply_id);
             
            if ($review_num !== -1 && $reply_num !== -1) {
                $oldRecord['profile'][0]['reviews'][$review_num]['reply_reviews'][$reply_num]["review_user_name"] = $newRecord["review_user_name"];     
                 $oldRecord['profile'][0]['reviews'][$review_num]['reply_reviews'][$reply_num]["review_time_stamp"] = $newRecord["review_time_stamp"];          
                    $oldRecord['profile'][0]['reviews'][$review_num]['reply_reviews'][$reply_num]["review_msg"] = $newRecord["review_msg"];
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

    public function actionDelete() {
        
          $request_json = file_get_contents('php://input');
        $newRecord = CJSON::decode($request_json, true);   
          $typeAndID_arr = $newRecord['optional'];
        $typeAndID = explode("/", $typeAndID_arr); 
        $owner_id = $typeAndID[0];
        $review_id = $typeAndID[1];
        $reply_id = $newRecord['review_reply_id'];
        try {
            $cb = $this->couchBaseConnection();
            $docID = $this->getDomain() . "/profiles/" . $owner_id;
            $cbRecord = $cb->get($docID); // get the old profile record from the database according to the docID string
            $oldRecord = CJSON::decode($cbRecord, true);
          //   error_log(var_export($oldRecord, true));
             $review_num =$this-> getSelectedReview($oldRecord['profile'][0]['reviews'], $review_id);
             $reply_num =$this-> getSelectedReply($oldRecord['profile'][0]['reviews'][$review_num]['reply_reviews'], $reply_id);
             
            if ($review_num !== -1 && $reply_num !== -1) {
                array_splice($oldRecord['profile'][0]['reviews'][$review_num]['reply_reviews'], $reply_num, 1);
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

    public function actionTest() {
        
    }

}

?>
