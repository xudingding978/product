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
    /*
   public function actionGetImageSize()
   {  
       $request_json = file_get_contents('php://input');
        //error_log($request_json);
      $request_arr=  CJSON::decode($request_json, true);
error_log(var_export($request_arr,true));
     $requireType=$request_arr['imageSrc'];
    
       
      //error_log(var_export($requireType, true));
        $domain = $this->getDomain();
        $configuration = $this->getProviderConfigurationByName($domain, "image_required_sizes");
        $imageSize = getimagesize($requireType);
        error_log(var_export($imageSize, true));
        $feedback = CJSON::encode($configuration[$imageSize], true);
        $this->sendResponse(200, $feedback);
         
   }
     * */
     */
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
      
       
      //error_log(var_export($requireType, true));
        $domain = $this->getDomain();
        $configuration = $this->getProviderConfigurationByName($domain, "image_required_sizes");
     //   $newConfig = $this->getProviderConfigurationByName($domain, "image_current_sizes");
     //   error_log(var_export($newConfig, true));
        $feedback = CJSON::encode($configuration[$requireType], true);
     //   $newFeedback = CJSON::encode($newConfig[$requireType], true);
     //    error_log(var_export($newFeedback, true));
     //   if($feedback>=$newFeedback){
            $this->sendResponse(200, $feedback);
      //    } elseif($feedback<$newFeedback ) {
     //         echo "please upload large pic";
          }
    //}

}

?>