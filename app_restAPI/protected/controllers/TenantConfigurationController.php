<?php

header("Access-Control-Allow-Origin: *");
header('Content-type: *');

header('Access-Control-Request-Method: *');
header('Access-Control-Allow-Methods: PUT, POST, OPTIONS,GET');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

class TenantConfigurationController extends Controller {

    const JSON_RESPONSE_ROOT_SINGLE = 'mega';
    const JSON_RESPONSE_ROOT_PLURAL = 'megas';

    public function actionIndex() {

    }

    public function actionCreate() {

    }

    public function actionRead() {

    }

    public function actionUpdate() {

    }

    public function actionDelete() {

    }   
    public function actionGetRequireIamgeSize() {
        $request_json = file_get_contents('php://input');
        //error_log($request_json);
      $request_arr=  CJSON::decode($request_json, true);

     $requireType=$request_arr['RequireIamgeType'];
      
      if($requireType=="Background"){
          $requireType='profile_bg';
          
      }elseif($requireType=="Profile Hero"){
               $requireType='profile_hero';
      }
      elseif($requireType=="Profile Picture"){
               $requireType='profile_pic';
      }
       elseif($requireType=="User Picture"){
               $requireType='photo_url_large';
      }
      elseif($requireType=="User Cover"){
               $requireType='cover_url';
      }
      

        $domain = $this->getDomain();
        $configuration = $this->getProviderConfigurationByName($domain, "image_required_sizes");

        $feedback = CJSON::encode($configuration[$requireType], true);

            $this->sendResponse(200, $feedback);

          }
    
}

?>