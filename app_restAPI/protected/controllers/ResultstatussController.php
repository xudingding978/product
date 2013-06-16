<?php

header("Access-Control-Allow-Origin: *");
header('Content-type: *');
header('Access-Control-Request-Method: *');
header('Access-Control-Allow-Methods: PUT, POST, OPTIONS,GET');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

class ResultstatussController extends Controller {

    const JSON_RESPONSE_ROOT_SINGLE = 'Resultstatus';
    const JSON_RESPONSE_ROOT_PLURAL = 'Resultstatuss';

    public function actionIndex() {

        $temp = explode("?", $_SERVER['REQUEST_URI']);
        $request_string = $temp [sizeof($temp) - 1];
        //  error_log(var_export($temp, true)."       ".sizeof($temp));
        $response = $this->getRequestResult($request_string, self::JSON_RESPONSE_ROOT_PLURAL);

        $this->sendResponse(200, $request_arr);
    }

    public function actionCreate() {
        try {
            $request_json = file_get_contents('php://input');
            $request_arr = CJSON::decode($request_json, true);

            $cb = $this->couchBaseConnection();
            if ($cb->add(substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI'] . '/' . $request_arr['article']['id'], CJSON::encode($request_arr['article']))) {
                echo $this->sendResponse(200, var_dump($request_arr));
            } else {
                echo $this->sendResponse(409, 'A record with id: "' . substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI'] . '/' . '" already exists');
            }
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
            echo json_decode(file_get_contents('php://input'));
        }
    }

    public function actionRead() {
        try {
            $cb = $this->couchBaseConnection();
            $results_arr = $cb->get(substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI']);

            if ($results_arr) {
                $result = $this->processGet($results_arr, self::JSON_RESPONSE_ROOT_SINGLE);
                echo $this->sendResponse(200, $result);
            } else {
                echo $this->sendResponse(409, 'A record with id: "' . substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI'] . '/' . $_POST['id'] . '" already exists');
            }
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
    }

    public function actionUpdate() {

        try {
            $payloads_arr = CJSON::decode(file_get_contents('php://input'));
            $payload_json = CJSON::encode($payloads_arr['article']);
            $payload_arr = CJSON::decode($payload_json);
            $cb = $this->couchBaseConnection();
            $document_arr = CJSON::decode($cb->get(substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI']));
            $newdocument = array_merge($document_arr, $payload_arr);
            if ($cb->set(substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI'], CJSON::encode($newdocument))) {
                echo $this->sendResponse(201, var_export($newdocument));
            }
        } catch (Exception $exc) {
            echo var_export($newdocument);
        }
    }

    public function actionDelete() {
        try {
            
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
    }

    public function actionOptions() {
        try {
            echo $this->sendResponse(200, "OK");
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
    }

}

?>
