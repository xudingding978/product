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
        $this->sendResponse(204);
    }

    public function actionCreate() {
        $request_json = file_get_contents('php://input');
        $newRecord = CJSON::decode($request_json, true);

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
            $response = $oldRecord['profile'][0]['reviews'];
            $results = '{"' . self::JSON_RESPONSE_ROOT_PLURAL . '":[';
            $i = 0;
            foreach ($response as $hit) {
                if (isset($hit['source']['doc']['profile'][0]['reviews'])) {
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
        $owner_id = $newRecord ['optional'];
        $id = $newRecord['review_id'];
        try {
            $cb = $this->couchBaseConnection();


            $docID = $this->getDomain() . "/profiles/" . $owner_id;
            $cbRecord = $cb->get($docID); // get the old profile record from the database according to the docID string
            $oldRecord = CJSON::decode($cbRecord, true);
            $records = $oldRecord["profile"][0]["reviews"];
           
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

        $request_json = file_get_contents('php://input');
        $newRecord = CJSON::decode($request_json, true);

        $owner_id = $newRecord ['optional'];
        $id = $newRecord['review_id'];
        try {
            $cb = $this->couchBaseConnection();


            $docID = $this->getDomain() . "/profiles/" . $owner_id;
            $cbRecord = $cb->get($docID); // get the old profile record from the database according to the docID string
            $oldRecord = CJSON::decode($cbRecord, true);
            $records = $oldRecord["profile"][0]["reviews"];
            $review_num = $this->getSelectedreview($records, $id);
            if ($review_num !== -1) {
                  array_splice($oldRecord["profile"][0]["reviews"], $review_num, 1);
 
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
