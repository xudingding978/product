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
            $returnType = "articles";
            $temp = explode("?", $_SERVER['REQUEST_URI']);
            $requestArray = array();
            if (sizeof($temp) > 1) {
                $request_string = $temp [sizeof($temp) - 1];
                $temparray = preg_split("/=|&/", $request_string);
                $requestStringOne = 'couchbaseDocument.doc.' . $temparray[0] . '=' . $temparray[1];
                array_push($requestArray, $requestStringOne);
                $requestStringtwo = 'couchbaseDocument.doc.photo.' . $temparray[2] . '=' . $temparray[3];
                array_push($requestArray, $requestStringtwo);
                error_log(var_export($requestArray, true));
                $response = $this->performMustSearch($requestArray, $returnType);
                $this->sendResponse(200, $response);

            }
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
    }

}

?>
