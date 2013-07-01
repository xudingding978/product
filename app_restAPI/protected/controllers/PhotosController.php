<?php
     header('Content-type: *');
    header("Access-Control-Allow-Origin: *");
   header('Access-Control-Allow-Headers: *');

class PhotosController extends Controller {

    const JSON_RESPONSE_ROOT_SINGLE = 'photo';
    const JSON_RESPONSE_ROOT_PLURAL = 'photos';

    public function actionIndex() {

   $temp = explode("/", $_SERVER['REQUEST_URI']);
   
      $id=  $temp[sizeof($temp)-1];
   $result=$this->getRequestResultByID(self::JSON_RESPONSE_ROOT_SINGLE, $id);
   $this->sendResponse(null,$result);
    }

    public function actionCreate() {
        $statusHeader = 'HTTP/1.1 ' . 200 . ' ' . $this->getStatusCodeMessage(200);
        header($statusHeader);
        header('Content-type: *');
        header("Access-Control-Allow-Origin: http://www.develop.devbox");
        header('Access-Control-Request-Method: *');
        header('Access-Control-Allow-Methods: *');
        header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

        echo $response;
        Yii::app()->end();
    }

    public function actionRead() {
    $temp = explode("/", $_SERVER['REQUEST_URI']);

       $id=  $temp[sizeof($temp)-1];
    $result=$this->getRequestResultByID(self::JSON_RESPONSE_ROOT_SINGLE, $id);
    $this->sendResponse(null,$result);



    }
    
    public function actionUpdate() {
        try {
            $response;
            $returnType = "photo";
            $temp = explode("?", $_SERVER['REQUEST_URI']);
            $requestArray = array();
            
            if (sizeof($temp) > 1) {
                $request_string = $temp [sizeof($temp) - 1];
                $temparray = preg_split("/=|&/", $request_string);
            
                $response = $this->getAllDoc($returnType, $temparray[1], $temparray[3]);
                
//            $data_arr = CJSON::decode($response);
//            echo sizeof($data_arr['photo'])."\r\n";
            
//            $data_arr = CJSON::decode($photo_data);
            
//            print_r($photo_data);
                $this->sendResponse(200, $response);
//            for ($i=0; $i<73; $i++) {
//                    $start = $i*1000;
//                    $photo_data = $this->getAllDoc('photo', $start);
////                    echo $start;
//                    $data_arr = CJSON::decode($photo_data);
////                    echo sizeof($data_arr['photo'])."\r\n";
//        //            echo $photo_data;
//                
//                    foreach($data_arr['photo'] as $val) {
//                        $id = 'trendsideas.com/'.$val['id'];
//                        error_log($id."\r\n");
////                        $this->updateCouchbasePhoto($id);
                    }
//                    
//                    exit();
//            }
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
    }
    
    public function updateCouchbasePhoto($id) {
        $ch = $this->couchBaseConnection("develop");
        $result=$ch->get($id);
        $result_arr = CJSON::decode($result, true);
        
        $result_arr['creator_profile_pic'] = 'http://s3.hubsrv.com/trendsideas.com/users/1000000000/profile/profile_pic_small.jpg';
        $result_arr['owner_profile_pic'] = 'http://s3.hubsrv.com/trendsideas.com/users/1000000000/profile/profile_pic_small.jpg';
        
        $result_arr['is_active'] = true;
        $result_arr['is_indexed'] = true;
        unset($result_arr['active_yn']);
        unset($result_arr['indexed_yn']);
        
//        error_log(var_export($result));
        print_r($result_arr);        
        
        if ($ch->set($id, CJSON::encode($result_arr))) {
            echo $id." update successssssssssssssssssssssssss! \r\n";
        } else {
            echo $id." update failllllllllllllllllllllllllllllllllllllllllllllll! \r\n";
        }
        
        exit();
    }
    
    public function actionDelete() {
        try {
            
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
    }

    public function actionTest() {

        header('Content-type: application/json');

        echo CJSON::encode("dddddddd");
    }

    public function actionOptions() {
        $statusHeader = 'HTTP/1.1 ' . 200 . ' ' . $this->getStatusCodeMessage(200);
        header($statusHeader);
        // Set the content type
        header('Content-type: ' . 'application/json');
        // Set the Access Control for permissable domains
        header("Access-Control-Allow-Origin: *");
        header('Access-Control-Request-Method: *');
        header('Access-Control-Allow-Methods: PUT, POST, OPTIONS');
        header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
        header('Access-Control-Allow-Headers: *');

        echo "";
        Yii::app()->end();


//                echo $this->sendResponse(200, "OK");
    }

    public function getInputData($inputDataType, $inputData) {
        error_log("here   " . $inputDataType);
        $tempInput = "";
        if ($inputDataType == "image/jpeg") {
            $tempInput = str_replace('data:image/jpeg;base64,', '', $inputData);
        } elseif ($inputDataType == "application/pdf") {
            $tempInput = str_replace('data:application/pdf;base64,', '', $inputData);
        } elseif ($inputDataType == "image/png") {
            $tempInput = str_replace('data:image/png;base64,', '', $inputData);
        } elseif ($inputDataType == "image/gif") {
            $tempInput = str_replace('data:image/gif;base64,', '', $inputData);
        }
        $data = base64_decode($tempInput);
        return $data;
    }

    public function actionMovePhoto(){
        
        echo "1111111111111111111111";
    }

}

?>
