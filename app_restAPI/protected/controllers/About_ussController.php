
<?php

header("Access-Control-Allow-Origin: *");
header('Content-type: *');

header('Access-Control-Request-Method: *');
header('Access-Control-Allow-Methods: PUT, POST, OPTIONS,GET');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

class About_ussController extends Controller {

    const JSON_RESPONSE_ROOT_SINGLE = 'about_us';
    const JSON_RESPONSE_ROOT_PLURAL = 'about_uss';

    public function actionIndex() {
        $this -> actionCreate();
    }

    public function actionCreate() {
        error_log('create here');
        try {
            $request_json = file_get_contents('php://input');
            $request_arr = CJSON::decode($request_json, true);
//            error_log(var_export($request_arr, true));
            $tempCollection = $request_arr['about_us'];
            $profile_id = $tempCollection['about_id'];
            
            $cb = $this->couchBaseConnection();
            $domain = $this->getDomain();
          
                $docID = $domain . "/profiles/" . $profile_id;
                $tempMega = $cb->get($docID);           
                $mega = CJSON::decode($tempMega, true);
                if (!isset($mega['profile'][0]['about_us'][0]['about_embeded_object'])) {
                    $mega['profile'][0]['about_us'][0]['about_embeded_object'] = array();
                }
//                array_unshift($mega['profile'][0]['keywords'], $tempCollection);
            $mega['profile'][0]['about_us'][0] = $tempCollection;
               
            if ($cb->set($docID, CJSON::encode($mega))) {
                $this->sendResponse(204);
            } else {
                echo $this->sendResponse(409, 'A record with id: "' . substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI'] . '/' . '" already exists');
            }

        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
//            echo json_decode(file_get_contents('php://input'));
        }
    }    
    
    public function actionRead() {
        
    }
    
    public function actionUpdate() {
        $this->sendResponse(204);
    }

    public function actionDelete() {
        error_log('delete here!!');
//        $info = CJSON::decode(file_get_contents('php://input'));
//        //$info = file_get_contents('php://input');
//         $infoDel = CJSON::decode($info, true);
//        $keyword_id = $infoDel['keyword_id'];
//        $profile_id = $infoDel['profile_id'];
//
//        try {
//            $cb = $this->couchBaseConnection();
//           
//                $docID = $this->getDomain() . "/profiles/" . $profile_id;
//                $profileOwn = $cb->get($docID);
//                $owner = CJSON::decode($profileOwn, true);
//                $records =  $owner["profile"][0]["keywords"];
//                $collection_num = $this -> getSelectedcollection($records ,$keyword_id);
//                array_splice($owner["profile"][0]["keywords"], $collection_num, 1);
//                $owner['keyword'] = $owner['profile'][0]['keywords'];
//            if ($cb->set($docID, CJSON::encode($owner))) {
                $this->sendResponse(204);
//            } else {
//                $this->sendResponse(500, "some thing wrong");
//            }
//                
//           
//        } catch (Exception $exc) {
//            echo $exc->getTraceAsString();
//        }
    }

    public function actionTest() {
        echo "test";
    }

}

?>
