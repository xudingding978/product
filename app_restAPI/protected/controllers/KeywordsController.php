
<?php

header("Access-Control-Allow-Origin: *");
header('Content-type: *');

header('Access-Control-Request-Method: *');
header('Access-Control-Allow-Methods: PUT, POST, OPTIONS,GET');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

class KeywordsController extends Controller {

    const JSON_RESPONSE_ROOT_SINGLE = 'keyword';
    const JSON_RESPONSE_ROOT_PLURAL = 'keywords';

    public function actionIndex() {
        
    }

    public function actionCreate() {
//        error_log('keywords create here');
//        try {
//            $request_json = file_get_contents('php://input');
//            $request_arr = CJSON::decode($request_json, true);
//            $tempCollection = $request_arr['keyword'];
//            $profile_id = $tempCollection['profile_id'];
//            
//            $cb = $this->couchBaseConnection();
//            $domain = $this->getDomain();
//          
//                $docID = $domain . "/profiles/" . $profile_id;
//                $tempMega = $cb->getAndLock($docID, $casarray = COUCHBASE_ETMPFAIL);           
//                $mega = CJSON::decode($tempMega, true);
//                if (!isset($mega['profile'][0]['keywords'])) {
//                    $mega['profile'][0]['keywords'] = array();
//                }
//                array_unshift($mega['profile'][0]['keywords'], $tempCollection);
//            $mega['keyword'] = $mega['profile'][0]['keywords'];
//               
//            if ($cb->set($docID, CJSON::encode($mega))) {
                $this->sendResponse(204);
//            } else {
//                echo $this->sendResponse(409, 'A record with id: "' . substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI'] . '/' . '" already exists');
//            }
//
//        } catch (Exception $exc) {
//            echo $exc->getTraceAsString();
////            echo json_decode(file_get_contents('php://input'));
//        }
    }
    
    public function actionAddKeywords() {
        $request_json = file_get_contents('php://input');
        $request_arr = CJSON::decode($request_json, true);
        error_log(var_export(CJSON::decode($request_arr[0]),true));
        $keyword = CJSON::decode($request_arr[0]);
        $profile_id = $keyword['profile_id'];
        $cb = $this->couchBaseConnection();
        $domain = $this->getDomain();
        $docID = $domain . "/profiles/" . $profile_id;
        $tempMega = $cb->get($docID);           
        $mega = CJSON::decode($tempMega, true);
        if (!isset($mega['profile'][0]['keywords'])) {
            $mega['profile'][0]['keywords'] = array();
        }
        
        for ($i = 0; $i < sizeof($request_arr); $i ++) {
            array_push($mega['profile'][0]['keywords'], CJSON::decode($request_arr[$i]));
        }
        $mega['keyword'] = $mega['profile'][0]['keywords'];
        if ($cb->set($docID, CJSON::encode($mega))) {
            $this->sendResponse(204);
        } else {
            echo $this->sendResponse(409, 'A record with id: "' . substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI'] . '/' . '" already exists');
        }
    }
    
    public function actionRead() {
        
    }
    
    public function actionUpdate() {
        error_log('keywords upload here!!');
        $this->sendResponse(204);
    }

    public function actionDelete() {
        $info = CJSON::decode(file_get_contents('php://input'));
        //$info = file_get_contents('php://input');
         $infoDel = CJSON::decode($info, true);
        $keyword_id = $infoDel['keyword_id'];
        $profile_id = $infoDel['profile_id'];

        try {
            $cb = $this->couchBaseConnection();
           
                $docID = $this->getDomain() . "/profiles/" . $profile_id;
                $profileOwn = $cb->get($docID);
                $owner = CJSON::decode($profileOwn, true);
                $records =  $owner["profile"][0]["keywords"];
                $collection_num = $this -> getSelectedcollection($records ,$keyword_id);
                array_splice($owner["profile"][0]["keywords"], $collection_num, 1);
                $owner['keyword'] = $owner['profile'][0]['keywords'];
            if ($cb->set($docID, CJSON::encode($owner))) {
                $this->sendResponse(204);
            } else {
                $this->sendResponse(500, "some thing wrong");
            }
                
           
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
    }
    
    public function getSelectedcollection($records,$id) {
        $i = 0;
        $collection_num=-1;
        foreach ($records as $record_id) {
            if ($record_id["keyword_id"] == $id) {
                $collection_num=$i;
            }
            $i++;
        }
        return $collection_num;
    }

    public function actionTest() {
        echo "test";
    }

}

?>
