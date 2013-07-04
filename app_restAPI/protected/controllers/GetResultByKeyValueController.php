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
            $returnType = "articles";
            $temp = explode("?", $_SERVER['REQUEST_URI']);
            $requestArray = array();
            if (sizeof($temp) > 1) {
                $request_string = $temp [sizeof($temp) - 1];
                $temp_arr = preg_split("/=|&/", $request_string);
                
                $requestStringOne = 'couchbaseDocument.doc.' . $temp_arr[0] . '=' . $temp_arr[1];
                array_push($requestArray, $requestStringOne);
                $requestStringtwo = 'couchbaseDocument.doc.photo.' . $temp_arr[2] . '=' . $temp_arr[3];
                array_push($requestArray, $requestStringtwo);
                
                $response = $this->performMustSearch($requestArray, $returnType);
                $this->sendResponse(200, $response);
            }
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
    }
    
 }

?>
