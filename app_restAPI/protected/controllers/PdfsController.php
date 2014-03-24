<?php

header("Access-Control-Allow-Origin: *");
header('Content-type: *');
header('Access-Control-Request-Method: *');
header('Access-Control-Allow-Methods: PUT, POST, OPTIONS,GET ,DELETE');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
require("protected/vendor/tcpdf/tcpdf.php");
class PdfsController extends Controller {

    const JSON_RESPONSE_ROOT_SINGLE = 'pdf';
    const JSON_RESPONSE_ROOT_PLURAL = 'pdfs';

    public function actionIndex() {
        
    }

    public function actionCreate() {
        error_log('actionCreate');
        $request_json = file_get_contents('php://input');
        $request_arr = CJSON::decode($request_json, true);
//        error_log(var_export($request_arr, true));
//        error_log($request_arr['pdf']['pdf_url']);
        $pdf_resource = base64_decode(str_replace('data:application/pdf;base64,', '', $request_arr['pdf']['pdf_url']));
//        $pdf_resource = base64_decode($request_arr['pdf']['pdf_url']);
 //$pdf_resource =   $request_arr['pdf']['pdf_url'];
        error_log($pdf_resource);
        $pdf_profile_id = $request_arr['pdf']['pdf_profile_id'];
        error_log($pdf_profile_id);
//        $pdf_collection_id = $request_arr['pdf_collection_id'];
        $pdf_title = $request_arr['pdf']['pdf_title'] . '.pdf';
        
        $bucket = "s3.hubsrv.com";
        $url = $this->getDomain() . '/profiles' . "/" . $pdf_profile_id . "/"  . $pdf_title;
        error_log($url);
        $arr = $this->getProviderConfigurationByName($this->getDomain(), "S3Client");
        $client = Aws\S3\S3Client::factory(
                        $arr
        );
        $pdf = new TCPDF( );
        error_log('111111111111111111');
        fwrite ($pdf,$pdf_resource);
        $client->putObject(array(
            'Bucket' => $bucket, //"s3.hubsrv.com"
            'Key' => $url,
            'Body' => $pdf,
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
