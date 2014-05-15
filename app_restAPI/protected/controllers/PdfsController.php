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
        $request_arr = CJSON::decode($request_json, true)['pdf'];
        error_log("1111111111111111111");
        error_log(var_export($request_arr, true));
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
        $pdf_mega['pdf'][0]['pdf_url'] = $this->savePdfToS3($request_arr);
        $this -> pdf2png($request_arr);
        $this->saveIDToProfile($request_arr['id'], $request_arr['pdf_profile_id']);
//
//
        if ($cb->set($docID, CJSON::encode($pdf_mega))) {
            $this->sendResponse(204);
        } else {
            echo $this->sendResponse(409, 'A record with id: "' . substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI'] . '/' . '" already exists');
        }
    }

    function pdf2png($request_arr) {
        error_log("immagick");
        $PDF = $request_arr['pdf_url'];
        $pdf_resource = base64_decode(str_replace('data:application/pdf;base64,', '', $PDF));
        $pdf_profile_id = $request_arr['pdf_profile_id'];
        $pdf_title = $request_arr['pdf_title'] . '.png';
//        if (!extension_loaded('imagick')) {
//            return false;
//        }
//        if (!file_exists($PDF)) {
//            return false;
//        }
        error_log("11111111111111111111");
        $IM = new imagick();
        error_log("2222222222222222");
        $IM->setResolution(120, 120);
        error_log("3333333333333333");
        $IM->setCompressionQuality(100);
//        error_log($pdf_resource);
        $IM->readImageBlob($pdf_resource);
        error_log('4444444444444444444');
        error_log($IM);
        foreach ($IM as $Key => $Var) {
            $Var->setImageFormat('png');
            error_log($Var);
//            $Filename = $Path . '/' . md5($Key . time()) . '.png';
//            if ($Var->writeImage($Filename) == true) {
//                $Return[] = $Filename;
//            }
        }
        $bucket = "s3.hubsrv.com";
        $url = $this->getDomain() . '/profiles' . "/" . $pdf_profile_id . "/" . $pdf_title;
        $arr = $this->getProviderConfigurationByName($this->getDomain(), "S3Client");
        $client = Aws\S3\S3Client::factory(
                        $arr
        );
        $client->putObject(array(
            'Bucket' => $bucket, //"s3.hubsrv.com"
            'Key' => $url,
            'Body' => $IM[0],
            'ContentType' => "application/png",
            'ACL' => 'public-read'
        ));
        return $url;
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
//        error_log('savetos3');
//        error_log(var_export($request_arr, true));
        $pdf_resource = base64_decode(str_replace('data:application/pdf;base64,', '', $request_arr['pdf_url']));
        $pdf_profile_id = $request_arr['pdf_profile_id'];
        $pdf_title = $request_arr['pdf_title'] . '.pdf';

        $bucket = "s3.hubsrv.com";
        $url = $this->getDomain() . '/profiles' . "/" . $pdf_profile_id . "/" . $pdf_title;
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
        $request_json = file_get_contents('php://input');
        $newRecord = CJSON::decode($request_json, true);
        error_log(var_export($newRecord, true));
        $id = $newRecord['pdf']['id'];
        try {
            $cb = $this->couchBaseConnection();


            $docID = $this->getDomain() . "/" . $id;
            $cbRecord = $cb->get($docID); // get the old profile record from the database according to the docID string
            $oldRecord = CJSON::decode($cbRecord, true);
            $oldRecord['pdf'] = $newRecord;

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
