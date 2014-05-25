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
        $this->sendResponse(204);
    }

    public function actionCreate() {
        $request_json = file_get_contents('php://input');
        $request_raw = CJSON::decode($request_json, true);
        $request_arr = $request_raw['pdf'];
        $cb = $this->couchBaseConnection();
        $docID = $this->getDomain() . "/" . $request_arr['id'];
        $pdf_json = $cb->get($docID);
        $pdf_mega = CJSON::decode($pdf_json);
        if (!isset($pdf_mega['pdf'])) {
            $pdf_mega['pdf'] = array();
        }
        $pdf_mega['pdf'][0] = $request_arr;
        $pdf_mega['object_title'] = $request_arr['pdf_title'];
        $pdf_mega['object_description'] = $request_arr['pdf_desc'];
        $pdf_mega['object_image_url'] = $request_arr['pdf_cover_image'];
        $this->saveIDToProfile($request_arr['id'], $request_arr['pdf_profile_id']);

        if ($cb->set($docID, CJSON::encode($pdf_mega))) {
            $this->sendResponse(204);
        } else {
            echo $this->sendResponse(409, 'A record with id: "' . substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI'] . '/' . '" already exists');
        }
    }
    
    public function actionSaveToS3() {
        $request_json = file_get_contents('php://input');
        $request_arr = CJSON::decode($request_json, true);
        $result['pdf_url'] = $this->savePdfToS3($request_arr);
        $result['pdf_cover_image'] = $this -> pdf2png($request_arr);
        $this->sendResponse(200,  CJSON::encode($result)); 
    }

    function pdf2png($request_arr) {
        $PDF = $request_arr['pdf_url'];
        $pdf_resource = base64_decode(str_replace('data:application/pdf;base64,', '', $PDF));
        $pdf_profile_id = $request_arr['pdf_profile_id'];
        $pdf_title = $request_arr['pdf_title'] . '.png';
        $IM = new imagick();
        $IM->setResolution(120, 120);
        $IM->setCompressionQuality(100);
        $IM->readImageBlob($pdf_resource);
        foreach ($IM as $Key => $Var) {
            $Var->setImageFormat('png');
            if ($Key ==0) {
                $bucket = "s3.hubsrv.com";
                $url = $this->getDomain() . '/profiles' . "/" . $pdf_profile_id . "/pdf/" . $pdf_title;
                $arr = $this->getProviderConfigurationByName($this->getDomain(), "S3Client");
                $client = Aws\S3\S3Client::factory(
                                $arr
                );
                $client->putObject(array(
                    'Bucket' => $bucket, //"s3.hubsrv.com"
                    'Key' => $url,
                    'Body' => $Var,
                    'ContentType' => "image/png",
                    'ACL' => 'public-read'
                ));
            }
        }
        
        return "http://s3.hubsrv.com.s3.amazonaws.com/" . $url;
    }

    public function saveIDToProfile($id, $profile_id) {
        $cb = $this->couchBaseConnection();
        $docID = $this->getDomain() . "/profiles/" . $profile_id;
        $profile_json = $cb->get($docID);
        $profile_mega = CJSON::decode($profile_json);
        if (!isset($profile_mega['profile'][0]['pdf_id']) || $profile_mega['profile'][0]['pdf_id'] == null || $profile_mega['profile'][0]['pdf_id'] == 'undefined') {
            $profile_mega['profile'][0]['pdf_id'] = $id;
        } else {
            $profile_mega['profile'][0]['pdf_id'] = $profile_mega['profile'][0]['pdf_id'] . "," . $id;
        }
        $cb->set($docID, CJSON::encode($profile_mega));
    }

    public function savePdfToS3($request_arr) {
        $pdf_resource = base64_decode(str_replace('data:application/pdf;base64,', '', $request_arr['pdf_url']));
        $pdf_profile_id = $request_arr['pdf_profile_id'];
        $pdf_title = $request_arr['pdf_title'] . '.pdf';

        $bucket = "s3.hubsrv.com";
        $url = $this->getDomain() . '/profiles' . "/" . $pdf_profile_id . "/pdf/" . $pdf_title;
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
        return "http://s3.hubsrv.com.s3.amazonaws.com/" . $url;
    }
    
    public function actionTest() {
         $this->sendResponse(204);
    }

    public function actionRead() {
//        try {
//            $cb = $this->couchBaseConnection();
//            $fileName = $this->getDomain() . $_SERVER['REQUEST_URI'];
//            $reponse = $cb->get($fileName);
//            $request_arr = CJSON::decode($reponse, true);
//            $respone_client_data = str_replace("\/", "/", CJSON::encode($request_arr["pdf"][0]));
//            $result = '{"' . self::JSON_RESPONSE_ROOT_SINGLE . '":';
////Iterate over the hits and print out some data
//            if($request_arr!==null){
//            $result .=$respone_client_data;
//            }
//            $result .= '}';
//
//            echo $this->sendResponse(200, $result);
//        } catch (Exception $exc) {
//            echo $exc->getTraceAsString();
//        }
        $this->sendResponse(204);
    }

    public function actionUpdate() {
        $request_json = file_get_contents('php://input');
        $newRecord = CJSON::decode($request_json, true);
        $id = $newRecord['pdf']['id'];
        try {
            $cb = $this->couchBaseConnection();


            $docID = $this->getDomain() . "/" . $id;
            $cbRecord = $cb->get($docID); // get the old profile record from the database according to the docID string
            $oldRecord = CJSON::decode($cbRecord, true);
            $oldRecord['pdf'][0] = $newRecord['pdf'];

            if ($cb->set($docID, CJSON::encode($oldRecord))) {
                $this->sendResponse(204);
            } else {
                $this->sendResponse(500, "some thing wrong");
            }
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
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
