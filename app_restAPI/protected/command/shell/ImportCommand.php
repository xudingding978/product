<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


Yii::import("application.models.*");
Yii::import("application.components.*");

class ProfileCommand extends Controller_admin {

    public function actionIndex($action = null) {
        echo (isset($action) ? 'Your are do... ' . $action . "\r\n" : 'No action defined \r\n');

        $start_time = microtime(true);
        echo $start_time . "\r\n";

        if ($action == "import") {
            $this->importProfile();
        } else if ($action == 'insert') {
            $this->insertProfileToMSDB();
        } elseif ($action == 'gj-gardner') {
            $this->importProfilesToCouchbase();
        } elseif ($action == 'update') {
            $this->updateCouchbasePhoto("trendsideas.com/" . '9761376532636891');
        } elseif ($action == 'search') {
            $this->updateCouchbasePhoto();
        } else {
            echo "please input an action!!";
        }

        echo "All finished: start from: " . "\r\n";
        $end_time = microtime(true);
        echo "totally spend: " . ($end_time - $start_time);
    }

    protected function importProfilesToCouchbase() {
        // select data from DB table
        $profiles_arr = $this->selectProfilesFromSQLDB(Profiles_Gj_Gardner::model());
        $message = "";
        if ($profiles_arr != null) {
            $total_amount = sizeof($profiles_arr);
            if ($total_amount > 0) {
                for ($i = 0; $i < $total_amount; $i++) {
                    $couchbase_id = 'trendsideas.com/profiles/' . $profiles_arr[$i]['ProfileUrl'];
                    $obj_arr = $this->createObjectArr($profiles_arr[$i]);

                    if ($this->addCouchbaseObject($couchbase_id, $obj_arr, 'production')) {
                        $url = "http://develop-api.trendsideas.com/PhotoData";
                        $list_arr = array(
                            'method' => 'POST',
                            'function' => 'addProfileFolder',
                            'obj_ID' => $obj_arr['id']
                        );

                        if ($this->getData($url, $list_arr)) {
                            $message = $couchbase_id . " ---have been add to couchbase! \r\n";
                        } else {
                            $message = "add folder in S3 server fail------------------------------ \r\n";
                        }
                    } else {
                        $message = "add object fail ------------------------------- \r\n";
                    }

//                    print_r($obj_arr);
                    echo $message;
//                    exit();

                    $this->writeToLog($this->error_path, $message);
                }
            } else {
                $message = 'cannot find any data from sql server!';
            }
        } else {
            $message = 'cannot find any data from sql server!';
//            $this->writeToLog($this->log_path, $message);
        }

        $this->writeToLog($this->error_path, $message);
    }

    public function updateCouchbasePhoto() {
        require 'vendor/autoload.php';
     //    use \Sherlock\Sherlock;
 
//$sherlock = new Sherlock();
        $settings['log.enabled'] = true;
        $settings['log.file'] = '../../newlogfile.log';
    //    $sherlock = new \Sherlock\Sherlock($settings);
        $sherlock = new Sherlock\Sherlock($settings);
        $sherlock->addNode("http://es1.hubsrv.com", 9200);
        $request = $sherlock->search();
 //       $manualData = array("field" => "owner_id", "term" => "lockwood-nz");
        $json = '{ "term" : { "lockwood-nz" : "owner_id" } }';
   error_log("11111");
//        $termQuery = Sherlock::queryBuilder()->Term()->field("owner_id")
//        ->term("lockwood-nz");



        $request->index("temp")
                ->type("couchbaseDocument")
                ->from(0)
                ->size(200);
        error_log("222222");
        $request->query(Sherlock::query()->Raw($json));
     //   $request->query(Sherlock::query()->Term($manualData));
          //      ->query($termQuery);
   //     error_log("333333");
        $response = $request->execute();
error_log("4444444");
        foreach ($response as $hit) {
            echo $hit["score"] . ' - ' . $hit['id']['owner_id'] . "\r\n";
        }
        error_log("555555");


        //   $request = $this->getElasticSearch();
        // $request->from(0)
        //          ->size(100);
//        $termQuery = Sherlock\Sherlock::queryBuilder()->Raw('{
//  "fields": [
//    "_source.doc._id"
//  ],
//  "query": {
//    "query_string": {
//      "default_field": "owner_id",
//      "query": "\"lockwood\\-nz\""
//    }
//  },
//  "from": 0,
//  "size": 500,
//  "sort": [],
//  "facets": {}
//}');
//        $photo_arr = $request->query($termQuery)->execute();
//        //$photo_arr = $this->getReponseResult($response);
//
//
//
//        for ($i = 0; $i < sizeof($photo_arr); $i++) {
//            $id="trendsideas.com/".$photo_arr[$i];
//            $ch = $this->couchBaseConnection("temp");
//            $result = $ch->get($id);
//            $result_arr = CJSON::decode($result, true);
//    
//            
//            
//        $ch = $this->couchBaseConnection("production");
//        $result = $ch->get($id);
//        $result_arr = CJSON::decode($result, true);
//        print_r($result_arr);
//    //    $result_arr['creator_profile_pic'] = 'http://s3.hubsrv.com/trendsideas.com/users/1000000000/profile/profile_pic_small.jpg';
//    //    $result_arr['owner_profile_pic'] = 'http://s3.hubsrv.com/trendsideas.com/users/1000000000/profile/profile_pic_small.jpg';
//
//       // $result_arr['is_active'] = true;
//      //  $result_arr['is_indexed'] = true;
//     //   unset($result_arr['active_yn']);
//  //      unset($result_arr['indexed_yn']);
//        if( $result_arr["collection_id"] != null){
//             $result_arr["collection_id"]=str_replace(" ", "-", $result_arr["collection_id"]);
//              $result_arr["collection_id"]=strtolower( $result_arr["collection_id"]);
//        }
//       
//        
//     
//      print_r($result_arr);
//
//
//
//
//        if ($ch->set($id, CJSON::encode($result_arr))) {
//            echo $id . " update successssssssssssssssssssssssss! \r\n";
//        } else {
//            echo $id . " update failllllllllllllllllllllllllllllllllllllllllllllll! \r\n";
//        }
//
//        exit();
    }
}
?>
