<?php

Yii::import("application.models.*");
Yii::import("application.components.*");

class ProfileUpdateTitleCommand extends Controller_admin {

    protected $log_path = '/home/devbox/NetBeansProjects/test/error_loadingarticle.log';

    public function actionIndex($param1,$param2) {              //inhertance of two actions,
    //    echo (isset($action) ? 'Your are do... ' . $action . "\r\n" : 'No action defined \r\n');
        Yii::import("application.models.*");
//if($action=="test"){
        if(preg_match("<blank>",$param1)){
            $param1=  str_replace("<blank>", " ", $param1);
        }
           if(preg_match("<blank>",$param2)){
            $param2=  str_replace("<blank>", " ", $param2);
        }
    echo "param1: ".$param1."\n";
    echo "param2: ".$param2."\n";
    sleep(10);
     $start_time = microtime(true);
        echo $start_time . "\r\n";
   //       $profile_name=$parm1;
       // $profile_id=$parm2;
   $profile_name=$param2;
        $profile_id=$param1;
   //     error_log("setprofilename");
    //    $payloads_arr = CJSON::decode(file_get_contents('php://input'));
//        error_log(var_export($payloads_arr, true));
//        $infoDel = CJSON::decode($payloads_arr, true);
//        error_log(var_export($payloads_arr, true));
//        $profile_name = $infoDel[0];
//        $profile_id = $infoDel[1];
        
     //   $response = $this->getProfileReults($profile_id);
        $response = $this->findAllAccordingOwner("develop", $profile_id);
     echo "3333333333333311111111\n";
        $responseArray = array();
        foreach ($response as $hit) {
           // $id = $hit['source']['doc']['id'];
            $id = $hit;
          //  $profileId = $hit['source']['doc']['owner_id'];
            echo $id. "\n";
      //      if ($profileId === $profile_id) {
                $cb = $this->couchBaseConnection("develop");
             //   $docID = $this->getDomain() . '/' . $id;
                $profileOwn = $cb->get($id);
                $owner = CJSON::decode($profileOwn, true);
                $owner['owner_title'] = $profile_name;
                 echo $id. " owner_title changed to ".$profile_name."\n";

                if ($cb->set($id, CJSON::encode($owner))) {
                    array_unshift($responseArray, $id . ' update succeed');
                     echo $id. " saved to couchbase\n";
                    
                } else {
                    array_unshift($responseArray, $id . ' delete failed');
                }
            }
   //     }

    
    

        echo "All finished: start from: " . "\r\n";
        $end_time = microtime(true);
        echo "totally spend: " . ($end_time - $start_time);      //time spend
//}
       
    }
    
    public function test(){
           //    echo (isset($action) ? 'Your are do... ' . $action . "\r\n" : 'No action defined \r\n');
        Yii::import("application.models.*");
//if($action=="test"){
    echo "11111111\n";
     $start_time = microtime(true);
        echo $start_time . "\r\n";
         // $profile_name="a";
      //  $profile_id=$parm2;
   $profile_name="tom";
        $profile_id="shuai";
   //     error_log("setprofilename");
    //    $payloads_arr = CJSON::decode(file_get_contents('php://input'));
//        error_log(var_export($payloads_arr, true));
//        $infoDel = CJSON::decode($payloads_arr, true);
//        error_log(var_export($payloads_arr, true));
//        $profile_name = $infoDel[0];
//        $profile_id = $infoDel[1];
        
     //   $response = $this->getProfileReults($profile_id);
        $response = $this->findAllAccordingOwner("develop", $profile_id);
     echo "3333333333333311111111\n";
        $responseArray = array();
        foreach ($response as $hit) {
           // $id = $hit['source']['doc']['id'];
            $id = $hit;
          //  $profileId = $hit['source']['doc']['owner_id'];
            echo $id. "\n";
      //      if ($profileId === $profile_id) {
                $cb = $this->couchBaseConnection();
                $docID = $this->getDomain() . '/' . $id;
                $profileOwn = $cb->get($docID);
                $owner = CJSON::decode($profileOwn, true);
                $owner['owner_title'] = $profile_name;
                 echo $id. " owner_title changed to ".$profile_name."\n";

                if ($cb->set($docID, CJSON::encode($owner))) {
                    array_unshift($responseArray, $id . ' update succeed');
                     echo $id. " saved to couchbase\n";
                    
                } else {
                    array_unshift($responseArray, $id . ' delete failed');
                }
      //      }
        }

    
    

        echo "All finished: start from: " . "\r\n";
        $end_time = microtime(true);
        echo "totally spend: " . ($end_time - $start_time);      //time spend
    }





    protected function getProfileReults($owner_profile_id) {
echo "3333333333333311111111\n";
//$cd=$this->get
  //      $request = $this->getElasticSearch();

   $settings['log_enabled'] = true;
        $sherlock=new \Sherlock\Sherlock($settings);
        $sherlock->addNode("es1.hubsrv.com", 9200);
        $request=$sherlock->search();
        $index="develop";
        $request->from(0)
                ->size(1000);

        $must = Sherlock\Sherlock::queryBuilder()
                ->QueryString()->query('"' . $owner_profile_id . '"')
                ->default_field('couchbaseDocument.doc.owner_id');
        $bool = Sherlock\Sherlock::queryBuilder()->Bool()->must($must);
        error_log($request->query($bool)->toJSON());
        $response = $request->query($bool)->execute();
        return $response;
    }
    
    
    function __construct() {
        
    }

   



}

?>
