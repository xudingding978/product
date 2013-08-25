
<?php

header("Access-Control-Allow-Origin: *");
header('Content-type: *');

header('Access-Control-Request-Method: *');
header('Access-Control-Allow-Methods: PUT, POST, OPTIONS,GET');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

class FollowersController extends Controller {

    const JSON_RESPONSE_ROOT_SINGLE = 'follower';
    const JSON_RESPONSE_ROOT_PLURAL = 'followers';

    public function actionIndex() {
     
    }

    public function actionCreate() {
         $this->sendResponse(204);    
    }

    public function actionCreateFollower(){
       try{
            
            $request_array =CJSON::decode(file_get_contents('php://input'));
            $profile_id = $request_array[0];           
            $request_arr = $request_array[1];    

           $cb = $this->couchBaseConnection();
           
           //save follower in profile
           $domain_profile = $this->getDomain();
           $docID_profile = $domain_profile . "/profiles/" . $profile_id;
      //     $cb ->getAndLock($docID_profile, 16);
           //error_log(var_export($casValue,true))
          $tempMega_profile = $cb->get($docID_profile);    
           $mega_profile = CJSON::decode($tempMega_profile, true);
           if (!isset($mega_profile['profile'][0]['followers'])) {
                  $mega_profile['profile'][0]['followers']= array();
              }
          array_unshift($mega_profile['profile'][0]['followers'], $request_arr);        
          if ($cb->set($docID_profile, CJSON::encode($mega_profile))) {
                $this->sendResponse(204);               
          }
          else {
             echo $this->sendResponse(409, 'A record with id: "' . substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI'] . '/' . '" already exists');
          }
          
           //save profile_id in user
          /**
          $domain_user = $this->getDomain();
          $docID_user = $domain_user . "/users" . $request_arr['follower_id'];
          $tempMega_user = $cb -> get($docID_user);
          $mega_user = CJSON::decode($tempMega_user, true);
           if (!isset($mega_user['user'][0]['profile_id'])) {
                  $mega_user['user'][0]['profile_id']= array();
              }
          array_unshift($mega_user['user'][0]['profile_id'], $profile_id);        
          if ($cb->set($docID_user, CJSON::encode($mega_user))) {
                $this->sendResponse(204);               
          }
          else {
             echo $this->sendResponse(409, 'A record with id: "' . substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI'] . '/' . '" already exists');
          }
          
          **/
    }    
    catch (Exception $exc) {
            echo $exc->getTraceAsString();
            echo json_decode(file_get_contents('php://input'));
        }
    }
    
    public function actionRead() {

    }

    public function actionUpdate() {
        
    }

    public function actionDelete() {
        $this->sendResponse(204);
    }

    public function actionTest() {
        echo "test";
    }
    
    public function actionDeleteFollower(){
        try{          
           $request_array = CJSON::decode(file_get_contents('php://input'));
           $profile_id = $request_array[0];
           $user_id = $request_array[1];      
           error_log(var_export($user_id,true));
           $cb = $this->couchBaseConnection();
           
           
            //delete follower in profile
           $domain_profile = $this->getDomain();
           $docID_profile = $domain_profile . "/profiles/" . $profile_id;
           error_log(var_export($docID_profile,true));
           $tempMega_profile = $cb->get($docID_profile);    
           $mega_profile = CJSON::decode($tempMega_profile, true);
           error_log(var_export($mega_profile,true));
           for ( $i=0; $i< sizeof($mega_profile["profile"][0]["followers"]);$i++ ) {
              if($mega_profile["profile"][0]["followers"][$i]["follower_id"]===$user_id)
                {
                   error_log(var_export($mega_profile["profile"][0]["followers"][$i]["follower_id"],true));
                  array_splice($mega_profile["profile"][0]["followers"], $i, 1);
                }
           }
           if ($cb->set($docID_profile, CJSON::encode($mega_profile))) {
                $this->sendResponse(204);                
            } else {
                $this->sendResponse(500, "some thing wrong");
            }
            
          //delete profile_id in user
          /**
          $domain_user = $this->getDomain();
          $docID_user = $domain_user . "/users" . $user_id;
          $tempMega_user = $cb -> get($docID_user);
          $mega_user = CJSON::decode($tempMega_user, true);
          for ( $i=0; $i< sizeof($mega_user["user"][0]["profile_id"]);$i++ ) {
              if($mega_profile["user"][0]["profile_id"][$i]===$user_id)
                {
                   //error_log(var_export($owner["profile"][0]["collections"][$i],true));
                   array_splice($mega_profile["user"][0]["profile_id"], $i, 1);
                }
           } 
          
          
          if ($cb->set($docID_user, CJSON::encode($mega_user))) {
                $this->sendResponse(204);               
          }
          else {
             echo $this->sendResponse(409, 'A record with id: "' . substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI'] . '/' . '" already exists');
          }
            **/
        }    
        catch (Exception $exc) {
            //$cb->unlock($docID_profile);
            echo $exc->getTraceAsString();
            echo json_decode(file_get_contents('php://input'));
        }
    }
    

}

?>
