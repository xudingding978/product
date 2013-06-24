<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


header("Access-Control-Allow-Origin: *");
header('Content-type: *');

header('Access-Control-Request-Method: *');
header('Access-Control-Allow-Methods: PUT, POST, OPTIONS,GET');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

class GetResultByKeyValueController extends Controller {
    
    public function actionIndex() {
        try {
            $response;
            
            $temp = explode("?", $_SERVER['REQUEST_URI']);
            
            if (sizeof($temp) > 1) {
                $request_string = $temp [sizeof($temp) - 1];
                $request_array = preg_split("/=|&/", $request_string);
                $response = $this->getRequestResultByKeyValue($request_array);

//                print_r($response);
                echo $response;
//                return $response;
            }
//            return $this->sendResponse(200, $response);
//            echo "444444444444444444444";
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
    }
    
}

?>
