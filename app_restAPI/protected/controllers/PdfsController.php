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
        $request_json = file_get_contents('php://input');
        $request_arr = CJSON::decode($request_json, true);
        $pdf_resource = $request_arr['pdf_url'];
        $pdf_profile_id = $request_arr['pdf_profile_id'];
//        $pdf_collection_id = $request_arr['pdf_collection_id'];
        $pdf_title = $request_arr['pdf_title'];
        
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
            'ContentType' => "pdf",
            'ACL' => 'public-read'
        ));
        
    }

    public function actionRead() {
       
    }

    public function actionUpdate() {

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
