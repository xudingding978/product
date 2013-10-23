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

    public function actionRead() {

    }

    public function actionUpdate() {
 
    }

    public function actionDelete() {

    }

    public function actionTest() {
       
    }

}

?>
