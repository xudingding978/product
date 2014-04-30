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
        $cb = $this->couchBaseConnection();
        $docID = $this->getDomain() . "/" . $request_arr['id'];
        $pdf_mega = CJSON::decode($cb->get($docID));
        if (!isset($pdf_mega['pdf'])) {
            $pdf_mega['pdf'] = array();
        }
        $pdf_mega['pdf'][0]=$request_arr;
        $pdf_mega['object_title'] = $request_arr['pdf_title'];
        $pdf_mega['object_description'] = $request_arr['pdf_desc'];
        $pdf_mega['object_image_url'] = $request_arr['pdf_cover_image'];
        $pdf_mega['pdf'][0]['pdf_url']  = $this->savePdfToS3($request_arr);  
        
//
//
        if ($cb->set($docID, CJSON::encode($pdf_mega))) {
            $this->sendResponse(204);
        } else {
            echo $this->sendResponse(409, 'A record with id: "' . substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI'] . '/' . '" already exists');
        }
    }
    
    public function savePdfToS3($request_arr) {
        error_log('savetos3');
        error_log(var_export($request_arr, true));
        $pdf_resource = base64_decode(str_replace('data:application/pdf;base64,', '', $request_arr[0]['pdf_url']));
        $pdf_profile_id = $request_arr[0]['pdf_profile_id'];
        $pdf_title = $request_arr[0]['pdf_title'] . '.pdf';
        
        $bucket = "s3.hubsrv.com";
        $url = $this->getDomain() . '/profiles' . "/" . $pdf_profile_id . "/"  . $pdf_title;
        $arr = $this->getProviderConfigurationByName($this->getDomain(), "S3Client");
        $client = Aws\S3\S3Client::factory(
                        $arr
        );

        $client->putObject(array(
            'Bucket' => $bucket, //"s3.hubsrv.com"
            'Key' => $url,
            'Body' => $pdf_resource,
            'ContentType' => "application/pdf",
            'ACL' => 'public-read'
        ));
        return $url;
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
