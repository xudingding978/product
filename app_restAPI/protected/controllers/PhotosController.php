<?php

header('Content-type: *');
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: *');

class PhotosController extends Controller {

    const JSON_RESPONSE_ROOT_SINGLE = 'photo';
    const JSON_RESPONSE_ROOT_PLURAL = 'photos';
    
    public function __construct(){
        
    }
            
    public function actionIndex() {

        $temp = explode("/", $_SERVER['REQUEST_URI']);

        $id = $temp[sizeof($temp) - 1];
        $result = $this->getRequestResultByID(self::JSON_RESPONSE_ROOT_SINGLE, $id);
        $this->sendResponse(null, $result);
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

        $temp = explode("/", $_SERVER['REQUEST_URI']);

        $id = $temp[sizeof($temp) - 1];
        $result = $this->getRequestResultByID(self::JSON_RESPONSE_ROOT_SINGLE, $id);
        $this->sendResponse(null, $result);
    }
    
    public function actionUpdate() {
        try {

            $returnType = "photo";
            $temp = explode("?", $_SERVER['REQUEST_URI']);
            $request_arr = array();
            
            if (sizeof($temp) > 1) {
                $request_string = $temp [sizeof($temp) - 1];
                $request_arr = preg_split("/=|&/", $request_string);
                
                $response = $this->getAllDoc($returnType, $request_arr[1], $request_arr[3]);
                $this->sendResponse(200, $response);
            }

            error_log("aaaaaaaaaaaaaaaaaaaa");
            $request_json = file_get_contents('php://input');
          echo $request_json;

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

    public function photoSavingToS3($request_arr, $path, $domain, $bucket) {

        $response = false;

        $client = $this->getS3Connection($domain);
        // error_log(var_export($request_arr ['photo'], true));
        $data = $this->getInputData($request_arr['photo']['photo_type'], $request_arr ['photo']['photo_image_url']);
        if ($client->doesObjectExist($bucket, $path . $request_arr ['photo']['photo_title'])) {
            $response = false;
        } else {
            $client->putObject(array(
                'Bucket' => "hubstar-dev",
                'Key' => $path . $request_arr ['photo']['photo_title'],
                'Body' => $data,
                'ACL' => 'public-read'
            ));
            $response = true;
        }
        return $response;
    }

    public function doPhotoResizing($mega) {
        $image_string = $mega['photo'][0]['photo_image_url'];
        $image_name = $mega['photo'][0]['photo_title'];
        
        error_log($image_string);
        error_log($image_name.'----000000000000000000000000000000000000');
                
        $data_arr = $this->convertToString64($image_string);
        $photo = imagecreatefromstring($data_arr['data']);
//        error_log(var_export($data_arr, true));
        
        $compressed_photo = $this->compressPhotoData($data_arr['type'], $photo);
        
        
        
        error_log("----------------------------11111111111111111111111111111111");
        
        $orig_size['width'] = imagesx($compressed_photo);
        $orig_size['height'] = imagesy($compressed_photo);
        
        error_log("width:". $orig_size['width'] ."---------------------------"."height: ".$orig_size['height'] );
        
        $new_size = $this->getNewPhotoSize($orig_size, 'thambnail');
        
        $new_photo_data = $this->createNewImage($orig_size, $new_size, $compressed_photo, $data_arr['type']);
//        error_log("----------------------------vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv");
        $new_photo_name = $this->addPhotoSizeToName($image_name, $new_size);
         error_log("----------------------------nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn");
//        $new_size = getNewPhotoSize($orig_size, 'preview'); 
//        $new_size = getNewPhotoSize($orig_size, 'hero');
//        $new_photo_name = $image_name.'_'.$new_size['width'].'x'.$new_size['height'];
        
        $url = "trendsideas.com/media/article/resize/".$new_photo_name;
        error_log($url."----------------------------22222222222222222222222222222222222");
        
        $this->saveImageToS3($url, $new_photo_data);
        
    }
    
    protected function getNewPhotoSize ($photo_size, $photo_type) {
        error_log("----------------------------44444444444444444444444");
        $new_size = array();
        switch($photo_type) {
            case 'thambnail':
                $new_size['width'] = 132;
                $new_size['height'] = 132;
                break;
            case 'preview':
                $new_size['width'] = 118;
                $new_size['height'] = (($photo_size['height'] * $new_size['width']) / $photo_size['width']);
                break;
            case 'hero':
                $new_size['width'] = 338;
                $new_size['height'] = (($photo_size['height'] * $new_size['width']) / $photo_size['width']);
                break;        
        }
        
        return $new_size;
        
    }
    
    
    public function createNewImage($orig_size, $new_size, $photo, $photo_type){
        error_log("----------------------------555555555555555555555555555555555");
        
        error_log(var_export($orig_size, true));
        error_log(var_export($new_size, true));
        
        // Create new image to display
        $new_photo = imagecreatetruecolor($new_size['height'], $new_size['width']);
        error_log("----------------6666666666666666666666666666");
        // Create new image with changed dimensions
        imagecopyresized($new_photo, $photo,
                0, 0, 0, 0,
                $new_size['width'], $new_size['height'],
                $orig_size['width'], $orig_size['height']);
        error_log("----------------7777777777777777777777777777");
        
        ob_start();
        if ($photo_type == "image/png") {
            imagepng($image);
            error_log("image/png--fffffffffffffffffffffffffffffffffffffffffffffffffffffff"); 
        } else if ($photo_type == "image/jpeg") {
            imagejpeg($new_photo);
            error_log("----------------8888888888888888888888888888888888888888888888");
        }
        
        error_log("----------------8888888888888888888888888888888888888888888888");
        $contents = ob_get_contents();
        error_log("----------------pppppppppppppppppppppppppppppppppppppppp");
        ob_end_clean();
//        error_log($contents);
        return $contents;
    }
    
    
    
   
}

?>
