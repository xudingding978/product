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
        error_log('index');
        $this->sendResponse(200, "ok");
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
    
    public function actionRead() {

        $this->sendResponse(204);
    }

    public function actionUpdate() {
error_log('update');
        $this->sendResponse(204);
    }

    public function actionDelete() {
        
    }

    public function actionTest() {
        
    }

}

?>
