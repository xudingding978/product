<?php

header("Access-Control-Allow-Origin: *");
header('Content-type: *');

header('Access-Control-Request-Method: *');
header('Access-Control-Allow-Methods: PUT, POST, OPTIONS,GET');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

class VideosController extends Controller {

    const JSON_RESPONSE_ROOT_SINGLE = 'video';
    const JSON_RESPONSE_ROOT_PLURAL = 'videos';

    public function __construct() {
        
    }

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
            $docID = $this->getDomain() . "/video/" . $id;

            $reponse = $cb->get($docID);
            $reponse = '{"' . self::JSON_RESPONSE_ROOT_SINGLE . '":' . $reponse . '}';

            $this->sendResponse(200, $reponse);
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
    }

    public function actionUpdate() {
        
    }
    
   
    
    public function videoUpdate($mega) {
        try {
            $cb = $this->couchBaseConnection();
            $temp = explode("/", $_SERVER['REQUEST_URI']);
            $id = $temp [sizeof($temp) - 1];
            $photoTitle = $mega['mega']['object_title'];

            $photoCaption = $mega['mega']['object_description'];
            $url = $this->getDomain() . "/" . $id;
            $tempRecord = $cb->get($url);
            $oldRecord = CJSON::decode($tempRecord, true);
            $oldRecord['object_title'] = $photoTitle;
            $oldRecord['object_description'] = $photoCaption;
            $oldRecord['object_description'] = $photoCaption;
            $oldRecord['videoes'][0]['video_title'] = $photoTitle;
            $oldRecord['videoes'][0]['video_desc'] = $photoCaption;

             if (!isset($oldRecord['view_count'])) {
                $oldRecord["view_count"] = 1;
            } else {
            $oldRecord['view_count'] = $mega['mega']['view_count'];   // //or using $mega['mega']['view_count'];
            }
             if (!isset($oldRecord['accessed'])) {
                $oldRecord["accessed"] = 1;
            } else {
            $oldRecord["accessed"] = date_timestamp_get(new DateTime());
            }
             if (!isset($oldRecord['share_count'])) {
                $oldRecord["share_count"] = 0;
            } else {
            $oldRecord["share_count"] =   $mega['mega']['share_count'];   // //or using   $mega['mega']['share_count']; 
            }


            if ($cb->set($url, CJSON::encode($oldRecord))) {
                $this->sendResponse(204);
            } else {
                $this->sendResponse(500, "some thing wrong");
            }
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
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
