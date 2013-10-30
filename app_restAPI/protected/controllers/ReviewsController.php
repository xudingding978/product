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
        $averageLength=$average*20;
        $oldRecord['profile'][0]['profile_average_review'] = $average;
         $oldRecord['profile'][0]['profile_average_review_length'] = $averageLength;
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
