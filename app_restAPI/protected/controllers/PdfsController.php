<?php

header("Access-Control-Allow-Origin: *");
header('Content-type: *');
header('Access-Control-Request-Method: *');
header('Access-Control-Allow-Methods: PUT, POST, OPTIONS,GET ,DELETE');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

class PdfsController extends Controller {

    const JSON_RESPONSE_ROOT_SINGLE = 'pdf';
    const JSON_RESPONSE_ROOT_PLURAL = 'pdfs';

    public function actionIndex() {
        
    }

    public function actionCreate() {
        $this->sendResponse(204);
    }
    
    public function actionPdfCreate() {
        $request_json = file_get_contents('php://input');
        $request_arr = CJSON::decode($request_json, true);
        error_log(var_export($request_arr['id'], true));
//        $pdf = $request_arr['megas']['pdf'];
//        $pdf_url = $this->savePdfToS3($request_arr);
//        $pdf['pdf_url'] = $pdf_url;
//        
//        $cb = $this->couchBaseConnection();
//        $id = $pdf['id'];
//        $domain = $this->getDomain();
//        $docID = $domain . "/profiles/" . $id;
//        $tempMega = $cb->get($docID);
//        $mega = CJSON::decode($tempMega, true);
//        $mega['profile'][0] = $tempProfile;
//        $mega['profile'][0]['followers'] = array();
//        $mega['profile'][0]['collections'] = array();
//
//
//        if ($cb->set($docID, CJSON::encode($mega))) {
            $this->sendResponse(204);
//        } else {
//            echo $this->sendResponse(409, 'A record with id: "' . substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI'] . '/' . '" already exists');
//        }
    }

    public function actionRead() {
       
    }

    public function actionUpdate() {
        error_log('update here');
        $this->sendResponse(204);
    }

    public function actionDelete() {
        
    }

    public function actionOptions() {
        $statusHeader = 'HTTP/1.1 ' . 200 . ' ' . $this->getStatusCodeMessage(200);
        header($statusHeader);
// Set the content type
        header('Content-type:*');
// Set the Access Control for permissable domains
        header("Access-Control-Allow-Origin:*");
        header('Access-Control-Request-Method:*');
        header('Access-Control-Allow-Methods: PUT, POST, OPTIONS,GET ,DELETE');
        header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

        echo "";
    }

}

?>
