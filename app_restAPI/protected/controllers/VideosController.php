<?php
header("Access-Control-Allow-Origin: *");
header('Content-type: *');

header('Access-Control-Request-Method: *');
header('Access-Control-Allow-Methods: PUT, POST, OPTIONS,GET');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
class VideosController extends Controller {

    const JSON_RESPONSE_ROOT_SINGLE = 'video';
    const JSON_RESPONSE_ROOT_PLURAL = 'videos';

    public function actionIndex() {
        
    }

    public function actionCreate() {
        try {
            $request_json = file_get_contents('php://input');
            $request_arr = CJSON::decode($request_json, true);

            $cb = $this->couchBaseConnection();
            if ($cb->add(substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI'] . '/' . $request_arr['video']['id'], CJSON::encode($request_arr['video']))) {
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
                 $temp = explode("/", $_SERVER['REQUEST_URI']);
            $id = $temp [sizeof($temp) - 1];
            $cb = $this->couchBaseConnection();
            $docID = $this->getDomain() . "/videos/" . $id;
    
            $reponse = $cb->get($docID);
            $reponse = '{"' . self::JSON_RESPONSE_ROOT_SINGLE . '":' . $reponse . '}';

            $this->sendResponse(200, $reponse);
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
    }

    public function actionUpdate() {

        try {
            $payloads_arr = CJSON::decode(file_get_contents('php://input'));
            $payload_json = CJSON::encode($payloads_arr['video']);
            $payload_arr = CJSON::decode($payload_json);
            $cb = $this->couchBaseConnection();
            $document_arr = CJSON::decode($cb->get(substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI']));
            $newdocument = array_merge($document_arr, $payload_arr);
            if ($cb->set(substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI'], CJSON::encode($newdocument))) {
                echo $this->sendResponse(201,var_export($newdocument));
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


}

?>
