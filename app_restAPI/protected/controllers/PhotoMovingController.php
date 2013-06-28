<?php
header("Access-Control-Allow-Origin: *");
header('Content-type: *');

header('Access-Control-Request-Method: *');
header('Access-Control-Allow-Methods: PUT, POST, OPTIONS,GET');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

class PhotoMovingController extends Controller {
    
    public function actionIndex() {
        $response = "";
        $temp = explode("?", $_SERVER['REQUEST_URI']);
        if (sizeof($temp) > 1) {
                $request_string = $temp [sizeof($temp) - 1];
                $temp_arr = preg_split("/=|&/", $request_string);
                
//                error_log($temp_arr);
//                exit();
                
                if (sizeof($temp_arr)>0) {
                    $client = $this->connectToS3();
                    
                    $bucket = 's3.hubsrv.com';
                    $copy = 'hubstar-dev/trendsideas.com/media/article/'.$temp_arr[1].'/'.$temp_arr[3];
                    $key = 'trendsideas.com/'.$temp_arr[5].'/photo/'.$temp_arr[5].'/'.$temp_arr[1].'/'.$temp_arr[3];
                    
                    $data_array = array(
                        'Bucket'=>$bucket,
                        'CopySource'=>$copy,
                        'Key'=>$key,
                        'ACL' => 'public-read'
                    );
                    
                    $response=$client->copyObject($data_array); 
                }
        }
        
        echo $response;
    }

}

?>
