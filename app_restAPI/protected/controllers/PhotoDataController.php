<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of PhotoDataController
 *
 * @author devbox
 */

header('Content-type: *');
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: *');
Yii::import("application.components.*");

class PhotoDataController extends Controller_data {
    //put your code here
    
    public function actionIndex() {
//        echo "111111111111111111111";
//        $temp = explode("/", $_SERVER['REQUEST_URI']);
        $photo_arr = $this->getDataFromElastic('photo');
        echo $photo_arr;
    }
    
    public function actionCreate() {
        $request_str = file_get_contents('php://input'); 
        $request_arr = CJSON::decode($request_str, true);
        error_log("in actionUPdate, PhotoDataController--------------".gettype($request_arr));
        error_log(var_export($request_arr, true));
        
       if ($request_arr['function']=='addProfileFolder') {
            echo CJSON::encode($this->addProfileFolder($request_arr));
        } else {
            echo null;
        }
    }
    
    public function actionUpdate() {
        $request_str = file_get_contents('php://input'); 
        $request_arr = CJSON::decode($request_str, true);
        error_log("in actionUPdate, PhotoDataController--------------".gettype($request_arr));
        error_log(var_export($request_arr, true));
        
        if($request_arr['function']=='addImageToS3') {
            echo CJSON::encode($this->addImageToS3($request_arr));
        } else {
            echo null;
        }
    }
    
    private function addImageToS3 ($request_arr) {
//        error_log("--------------------------- in addImageToS3 FUNCTION \r\n");
        $image_string=  $this->getImageString($request_arr['image_url']);
        $image_infor = getimagesizefromstring($image_string);
        $name = $this->renamingImage($image_infor, $request_arr['image_url']);
//        error_log($name);
        $response = $this->getWatermarkImageSource($request_arr['image_url'], $image_infor, $image_string);
        $bucket = 's3.hubsrv.com';
        $key = 'trendsideas.com/' . $request_arr['obj_ID'] . '/photo/' . $request_arr['obj_ID'] . '/' .  'original/' . $name;
        
        $result=$this->saveImageToS3($key, $response, $bucket);
        
//        error_log(var_export($image_infor, true));
//        error_log(gettype($result)."**********************************  \r\n");
//        error_log($result);
        
        if($result) {
            $return_arr['url'] = 'http://s3.hubsrv.com/'.$key;
            $return_arr['name'] =$name;
            $return_arr['width'] =$image_infor[0];
            $return_arr['height'] =$image_infor[1];
            $return_arr['type'] =$image_infor['mime'];
            
            return $return_arr;
        } else {
            return null;
        }
    }
    
    private function addProfileFolder ($request_arr) {
        $bucket = 's3.hubsrv.com';
        $key = 'trendsideas.com/profiles/' . $request_arr['obj_ID'] . '/';
        
        return $result=$this->saveImageToS3($key, "", $bucket);
    }
    
}

?>
