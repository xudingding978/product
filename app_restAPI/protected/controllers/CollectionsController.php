<?php

header("Access-Control-Allow-Origin: *");
header('Content-type: *');

header('Access-Control-Request-Method: *');
header('Access-Control-Allow-Methods: PUT, POST, OPTIONS,GET');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

class CollectionsController extends Controller {

    const JSON_RESPONSE_ROOT_SINGLE = 'mega';
    const JSON_RESPONSE_ROOT_PLURAL = 'megas';

    public function actionIndex() {
        
    }

    public function actionCreate() {
try{
       $request_json = file_get_contents('php://input');
        $request_arr = CJSON::decode($request_json, true); 
 //    $tempProfile = $request_arr['profile'];
    // $id = $tempProfile['id'];
        
       $tempCollection = $request_arr['collection'];
      $id = $tempCollection['optional'];
     //$cid=$tempCollection['id'];
       //error_log("this is a error");
   //  error_log(var_export($request_arr, true));
      $cb = $this->couchBaseConnection();
                   $domain = $this->getDomain();
        $docID = $domain . "/profiles/" . $id;
         $tempMega = $cb->get($docID);
    //error_log(var_export($tempMega, true));
    
    
    $mega = CJSON::decode($tempMega, true);
   if (!isset($mega['profile'][0]['collections'])) {
          $mega['profile'][0]['collections']= array();
      }
      // error_log(var_export($mega['profile'], true));
  array_unshift($mega['profile'][0]['collections'], $tempCollection);
   //$mega['profile'][0]['collections']=$tempCollection;
   
    //   error_log(var_export($mega['profile']['collections'][0], true));
           // $mega['optional'][0] = $tempCollection ;
       // error_log(var_export($mega['profile']['collections'], true));
      // $tempProfile = $request_arr['profile'];
      //$newmega=$mega['profile']['collections'][0];
      
     if ($cb->set($docID, CJSON::encode($mega))) {
                $this->sendResponse(204);
                
                
            }
        else {
            echo $this->sendResponse(409, 'A record with id: "' . substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI'] . '/' . '" already exists');

        }
        
       
    
        
      //$this->sendResponse(200, $request_json);

    }
    catch (Exception $exc) {
            echo $exc->getTraceAsString();
            echo json_decode(file_get_contents('php://input'));
        }
    }

    public function actionRead() {

        echo "aaaaaaaaaaa";
    }

    public function actionUpdate() {
        
    }

    public function actionDelete() {
        
    }

    public function actionTest() {
        
    }

}

?>
