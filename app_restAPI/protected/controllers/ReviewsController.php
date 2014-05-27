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

    public function actionAddlike() {
        $like = CJSON::decode(file_get_contents('php://input'));
        $like_arr = CJSON::decode($like, true);              
        $like_people = $like_arr[0];
        $like_profile = $like_arr[1];
        $review_id = $like_arr[2];
        $recordNum = null;
        try {
            $cb = $this->couchBaseConnection();
            $docID = $this->getDomain() . "/profiles/" . $like_profile;
            $old = $cb->get($docID); // get the old profile record from the database according to the docID string
            $oldRecord = CJSON::decode($old, true);
            $record = $oldRecord["profile"][0]["reviews"];
            for ($i = 0; $i < sizeof($record); $i++) {
                if ($record[$i]["review_id"] === $review_id) {
                    $recordNum = $i;
                }                
            }
            if (!isset($record[$recordNum]["review_people_like"]) || is_array($record[$recordNum]["review_people_like"])) {
                $record[$recordNum]["review_people_like"] = null;
            }
            $likeExist = strpos($record[$recordNum]["review_people_like"], $like_people);
            
            if ($likeExist === false) {
                if ($record[$recordNum]["review_people_like"] !== null && $record[$recordNum]["review_people_like"] !== "") {
                    $record[$recordNum]["review_people_like"] = $record[$recordNum]["review_people_like"] . ',' . $like_people;
                } else {
                    $record[$recordNum]["review_people_like"] = "" . $like_people;
                }
            }
            $likeLength = sizeof(explode(",", $record[$recordNum]["review_people_like"]));
            $record[$recordNum]["review_like_count"] = $likeLength;
            $oldRecord["profile"][0]["reviews"] = $record;
            if ($cb->set($docID, CJSON::encode($oldRecord))) {
                $people_like = CJSON::encode($oldRecord["profile"][0]["reviews"][$recordNum]["review_people_like"], true);
                $this->sendResponse(200, $people_like);
            } else {
                $this->sendResponse(500, "something wrong");
            }
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }      
    }
    public function actionUnlike() {
        $like = CJSON::decode(file_get_contents('php://input'));
        $like_arr = CJSON::decode($like, true);              
        $like_people = $like_arr[0];
        $like_profile = $like_arr[1];
        $review_id = $like_arr[2];
        $recordNum = null;
        try {
            $cb = $this->couchBaseConnection();
            $docID = $this->getDomain() . "/profiles/" . $like_profile;
            $old = $cb->get($docID); // get the old profile record from the database according to the docID string
            $oldRecord = CJSON::decode($old, true);
            $record = $oldRecord["profile"][0]["reviews"];
            for ($i = 0; $i < sizeof($record); $i++) {
                if ($record[$i]["review_id"] === $review_id) {
                    $recordNum = $i;
                }                
            }
            if (!isset($record[$recordNum]["review_people_like"]) || is_array($record[$recordNum]["review_people_like"])) {
                $record[$recordNum]["review_people_like"] = null;
            }
            $temp = explode(",", $record[$recordNum]["review_people_like"]);
            $temp = array_diff($temp, array($like_people));
            $record[$recordNum]["review_people_like"] = implode(",", $temp);
            $record[$recordNum]["review_like_count"] = count($temp);
            $oldRecord["profile"][0]["reviews"] = $record;
            if ($cb->set($docID, CJSON::encode($oldRecord))) {
                $people_like = CJSON::encode($oldRecord["profile"][0]["reviews"][$recordNum]["review_people_like"], true);
                $this->sendResponse(200, $people_like);
            } else {
                $this->sendResponse(500, "something wrong");
            }
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
    }    
//    public function getSelectedreview($records, $id) {
//        $i = 0;
//        $review_num = -1;
//        foreach ($records as $record_id) {
//            if ($record_id["review_id"] == $id) {
//                
//                $review_num = $i;
//            }
//            $i++;
//        }
//        return $review_num;
//    }

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
