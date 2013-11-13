<?php
header("Access-Control-Allow-Origin: *");
header('Content-type: *');
header('Access-Control-Request-Method: *');
header('Access-Control-Allow-Methods: PUT, POST, OPTIONS,GET');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

class LogoutController extends Controller {
    
    public function actionCreate(){
        

        $this->sendResponse(200,'OK');
        
        
    }
    
      public function actionRead(){
        
    }
      public function actionUpdate(){
        
    }
      public function actionDelete(){
        
    }
    
}
?>
