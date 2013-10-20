<?php

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
            //$this->importProfilesToCouchbase();
        } elseif ($action == 'flooring_foundation') {
            $this->outputData();
        } elseif ($action == 'update') {
            $this->updateCouchbasePhoto();
        } elseif ($action == 'keyword') {
            $this->updateCouchbasePofileKeywords();
        } elseif ($action == 'count') {
            $this->checkNumber();
        }elseif ($action == 'time') {
            $this->updateTimeStamp();
        } else
{
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

    protected function outputData() {
        echo "I am outputting data..... ";
        $profiles_arr = $this->selectProfilesFromSQLDB(profiles_flooring_foundation::model());
        // $profiles_arr = $this->selectProfilesFromSQLDB(Profiles_Gj_Gardner::model());
        //  echo var_export($profiles_arr, true);
        //   if (isset($profiles_arr['keywords'])) {
        // build the CURL object to access the API's endpoint
//            $cb = curl_init($url);
//            curl_setopt($cb, CURLOPT_CUSTOMREQUEST, $profiles_arr['keywords']);
//            curl_setopt($cb, CURLOPT_POSTFIELDS, CJSON::encode($profiles_arr));
//            curl_setopt($cb, CURLOPT_RETURNTRANSFER, true);
//            curl_setopt($cb, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
        //    }

        if ($profiles_arr != null) {
            $total_amount = sizeof($profiles_arr);
            error_log('$total_amount   ' . $total_amount);
            if ($total_amount > 0) {
                for ($i = 0; $i < $total_amount; $i++) {
                    $couchbase_id = 'trendsideas.com/profiles/' . $profiles_arr[$i]['profile_url'];
                    $obj_arr = $this->createObjectArr($profiles_arr[$i]);

                    //create Couchbase object ready for inserting into bucket
                    if ($this->addCouchbaseObject($couchbase_id, $obj_arr, 'production')) {
//                        //set the API endpoint
//                        $url = "http://develop-api.trendsideas.com/profiles";
//                        //building an array for CURL call to endpoint
//                        $list_arr = array(
//                            'method' => 'POST',
//                            'function' => 'addProfileFolder',
//                            'obj_ID' => $obj_arr['id']
//                        );
//
//                        if ($this->getData($url, $list_arr)) {
//                            $message = $couchbase_id . " ---have been add to couchbase! \r\n";
//                        } else {
//                            $message = "add folder in S3 server fail------------------------------ \r\n";
//                        }
                    } else {
                        $message = "add object fail ------------------------------- \r\n";
                        $this->writeToLog($this->error_path, $message);
                    }

                    //   print_r($obj_arr);
                    echo $message;
                    //    exit();
                }
            } else {
                $message = 'cannot find any data from sql server!';
            }
        } else {
            $message = 'cannot find any data from sql server!';
            $this->writeToLog($this->log_path, $message);
        }
    }

    public function updateCouchbasePhoto() {
        $start_time = date('D M d Y H:i:s') . ' GMT' . date('O') . ' (' . date('T') . ')';
        $log_path = "/var/log/yii/$start_time.log";
        $message = "";
        $settings['log.enabled'] = true;
        $sherlock = new \Sherlock\Sherlock($settings);
        $sherlock->addNode("es1.hubsrv.com", 9200);
        $request = $sherlock->search();
        $index = 'temp';
        $must = Sherlock\Sherlock::queryBuilder()->QueryString()->query("\"lockwood\-nz\"")
                ->default_field('couchbaseDocument.doc.owner_id');
        $must2 = Sherlock\Sherlock::queryBuilder()
                ->QueryString()->query("photo")
                ->default_field('couchbaseDocument.doc.type');
        $bool = Sherlock\Sherlock::queryBuilder()->Bool()->must($must)->
                must($must2);
        $request->index($index)->type("couchbaseDocument");
        $request->from(0)
                ->size(500);
        $request->query($bool);
        //   print_r($bool);

        $response = $request->execute();

        echo "number of file: " . count($response);

        //using raw
//        $termQuery = Sherlock\Sherlock::queryBuilder()->Raw('{
//    "bool": {
//     "must": [
//       {
//          "query_string": {
//            "default_field": "couchbaseDocument.doc.owner_id",
//            "query": "lockwood-nz"
//          }
//        },
//        {
//          "query_string": {
//            "default_field": "couchbaseDocument.doc.type",
//            "query": "photo"
//          }
//        }
//      ],
//      "must_not": [],
//      "should": []
//    }
//  }');
        foreach ($response as $hit) {
            //    echo $hit["score"] . ' - ' . $hit['id'] . "\r\n";
            $timeStamp = $this->setUTC();
            $id = $hit['id'];
            $ch = $this->couchBaseConnection("develop");
            $result = $ch->get($id);
            //   if($result!= null){
            $result_arr = CJSON::decode($result, true);
            $record_collection_id = $result_arr["collection_id"];
            $record_accessed = $result_arr["accessed"];
            $record_updated = $result_arr["updated"];
            $record_accessed_readable = $result_arr["accessed_readable"];
            $record_updated_readable = $result_arr["updated_readable"];
            if ($result_arr != null) {
                $result_arr["collection_id"] = str_replace(" ", "-", $result_arr["collection_id"]);
                $result_arr["collection_id"] = strtolower($result_arr["collection_id"]);
                $result_arr["accessed"] = $timeStamp;
                $result_arr["updated"] = $timeStamp;
                $result_arr["accessed_readable"] = date('D M d Y H:i:s') . ' GMT' . date('O') . ' (' . date('T') . ')';
                $result_arr["updated_readable"] = date('D M d Y H:i:s') . ' GMT' . date('O') . ' (' . date('T') . ')';
            }
            if ($ch->set($id, CJSON::encode($result_arr))) {
                echo "Document: " . $id . "\r\n" . "collection_id has been changed from " . $record_collection_id . " to " . $result_arr["collection_id"] . "\r\n" .
                "accessed has been changed from " . $record_accessed . " to " . $result_arr["accessed"] . "\r\n" .
                "updated has been changed from " . $record_updated . " to " . $result_arr["updated"] . "\r\n" .
                "accessed_readable has been changed from " . $record_accessed_readable . " to " . $result_arr["accessed_readable"] . "\r\n" .
                "updated_readable has been changed from " . $record_updated_readable . " to " . $result_arr["updated_readable"] . "\r\n" .
                "\r\n";
                $message = $id . "|" . $result_arr["type"] . "|" . '{"owner_id":' . '"' . $result_arr["owner_id"] . '"' . ', "old_collection_id": ' . '"' . $record_collection_id . '"' . ', "new_collection_id": ' . '"' . $result_arr["collection_id"] . '"' . "}";
            } else {
                echo $id . " fail to set the value into couchbase document! \r\n";
                $message = $id . " fail to set the value into couchbase document! \r\n";
            }
            $this->writeToLog($log_path, $message);
        }

        echo "Number of Hits: " . count($response) . "\r\n";
        exit();
    }

    public function updateCouchbasePofileKeywords() {
        $start_time = date('D M d Y H:i:s') . ' GMT' . date('O') . ' (' . date('T') . ')';
        $log_path = "/var/log/yii/$start_time.log";
        $message = "";
        $settings['log.enabled'] = true;
        $sherlock = new \Sherlock\Sherlock($settings);
        $sherlock->addNode("es1.hubsrv.com", 9200);
        $request = $sherlock->search();
        $index = 'temp';
        $must = Sherlock\Sherlock::queryBuilder()->QueryString()->query("\"profile\"")
                ->default_field('couchbaseDocument.doc.type');
        $bool = Sherlock\Sherlock::queryBuilder()->Bool()->must($must);
        $request->index($index)->type("couchbaseDocument");
        $request->from(0)
                ->size(10000);
        $request->query($bool);
        $response = $request->execute();
        foreach ($response as $hit) {
            echo $hit["score"] . ' - ' . $hit['id'] . "\r\n";

            $timeStamp = $this->setUTC();
            $id = $hit['id'];
            $ch = $this->couchBaseConnection("temp");
            $result = $ch->get($id);
            //   if($result!= null){
            $result_arr = CJSON::decode($result, true);

            $record_keywords = $result_arr["keywords"];
            $record_accessed = $result_arr["accessed"];
            $record_updated = $result_arr["updated"];
            $record_accessed_readable = $result_arr["accessed_readable"];
            $record_updated_readable = $result_arr["updated_readable"];

            if ($result_arr != null && $result_arr["profile"][0]["profile_keywords"] != null && $result_arr["profile"][0]["profile_keywords"] != "") {
                $tempKeyword = str_replace("\n", "", $result_arr["profile"][0]["profile_keywords"]);
                $result_arr["keywords"] = str_replace("\r", "", $tempKeyword);
                $result_arr["accessed"] = $timeStamp;
                $result_arr["updated"] = $timeStamp;
                $result_arr["accessed_readable"] = date('D M d Y H:i:s') . ' GMT' . date('O') . ' (' . date('T') . ')';
                $result_arr["updated_readable"] = date('D M d Y H:i:s') . ' GMT' . date('O') . ' (' . date('T') . ')';
            } else {
                $message = $id . "|" . $result_arr["type"] . "|" . "Does not have keyword in its profile";
            }

            if ($ch->set($id, CJSON::encode($result_arr))) {
                echo "Document: " . $id . "\r\n" . "keywords has been changed from " . $record_keywords . " to " . $result_arr["keywords"] . "\r\n" .
                "accessed has been changed from " . $record_accessed . " to " . $result_arr["accessed"] . "\r\n" .
                "updated has been changed from " . $record_updated . " to " . $result_arr["updated"] . "\r\n" .
                "accessed_readable has been changed from " . $record_accessed_readable . " to " . $result_arr["accessed_readable"] . "\r\n" .
                "updated_readable has been changed from " . $record_updated_readable . " to " . $result_arr["updated_readable"] . "\r\n" .
                "\r\n";
                $message = $id . "|" . $result_arr["type"] . "|" . '{"old_keywords": ' . '"' . $record_keywords . '"' . '; "new_keywords": ' . '"' . $result_arr["keywords"] . '"' . "}";
            } else {
                echo $id . " fail to set the value into couchbase document! \r\n";
                $message = $id . " fail to set the value into couchbase document! \r\n";
            }
            $this->writeToLog($log_path, $message);
        }

        echo "Number of Hits: " . count($response) . "\r\n";
        exit();
    }

    public function checkSingleProfilePartner() {
        $start_time = date('D M d Y H:i:s') . ' GMT' . date('O') . ' (' . date('T') . ')';
        $log_path = "/var/log/yii/$start_time.log";
        $ch = $this->couchBaseConnection("production");
        $result = $ch->get("trendsideas.com/profiles/vision-wallcoverings-nz");
        $result_arr = CJSON::decode($result, true);
        //    print_r($result_arr) ;
        // print_r("partner: ".$result_arr["profile"][0]["profile_partner_ids"]." over") ;
        $partner_str = $result_arr["profile"][0]["profile_partner_ids"];
        print_r($partner_str);
        $partner_arr = explode(",", $partner_str);
        print_r($partner_arr);
        //   print_r($partner_arr);
        echo "Number of Hits: " . count($partner_arr) . "\r\n";

        $settings['log.enabled'] = true;
        $sherlock = new \Sherlock\Sherlock($settings);
        $sherlock->addNode("es1.hubsrv.com", 9200);
        $request = $sherlock->search();
        $index = 'production';
        foreach ($partner_arr as $id) {

            $must = Sherlock\Sherlock::queryBuilder()->QueryString()->query("\"$id\"")
                    ->default_field('couchbaseDocument.doc.id');

            $bool = Sherlock\Sherlock::queryBuilder()->Bool()->must($must);
            $request->index($index)->type("couchbaseDocument");
            $request->from(0)
                    ->size(10);
            $request->query($bool);

            $response = $request->execute();
            //   error_log("start:\n".$request->toJSON()."\n". $id." has ".count($response)." found \n over \n");
            if (count($response) === 0) {
                $message = $id . " can not be found in database ----------------------------";
            } else {
                $message = $id . " is found in the database";
            }
            $this->writeToLog($log_path, $message);
        }
        echo "over";
    }
    
    public function updateTimeStamp(){
            $timeStamp = $this->setUTC();
            $id = $hit['id'];
            $ch = $this->couchBaseConnection("temp");
            $result = $ch->get("trendsideas.com/481376534221498");
            //   if($result!= null){
            $result_arr = CJSON::decode($result, true);
            $record_created= $result_arr["created"];
            $record_updated = $result_arr["updated"];
            $record_accessed=$result_arr["accessed"];
            $record_accessed_readable = $result_arr["accessed_readable"];
            $record_updated_readable = $result_arr["updated_readable"];
            $record_created_readable = $result_arr["created_readable"];
            if ($result_arr != null) {
                 $result_arr["updated"] = $timeStamp;
                 $result_arr["updated_readable"]=  date('D M d Y H:i:s'). ' GMT' . date('O') . ' (' . date('T') . ')';  
                if($result_arr["created"]!=null && $result_arr["created"]!=""){          
                      $result_arr["created_readable"]=  date('D M d Y H:i:s', $result_arr["created"]). ' GMT' . date('O',$result_arr["created"]) . ' (' . date('T',$result_arr["created"]) . ')';                                 
                }
                else{
                    $result_arr["created"]=$timeStamp;
                    $result_arr["created_readable"]=  date('D M d Y H:i:s'). ' GMT' . date('O') . ' (' . date('T') . ')';  
                }
                 if($result_arr["accessed"]!=null && $result_arr["accessed"]!=""){          
                      $result_arr["accessed_readable"]=  date('D M d Y H:i:s', $result_arr["accessed"]). ' GMT' . date('O',$result_arr["accessed"]) . ' (' . date('T',$result_arr["accessed"]) . ')';                                 
                }
                else{
                    $result_arr["accessed"]=$timeStamp;
                    $result_arr["accessed_readable"]=  date('D M d Y H:i:s'). ' GMT' . date('O') . ' (' . date('T') . ')';  
                }       
            } else {
                $message = $id . "|" . $result_arr["type"] . "|" . "Does not have keyword in its profile";
            }
            if ($ch->set($id, CJSON::encode($result_arr))) {
                echo "Document: " . $id . "\r\n" . "created has been changed from " . $record_created . " to " . $result_arr["created"] . "\r\n" .
                "accessed has been changed from " . $record_accessed . " to " . $result_arr["accessed"] . "\r\n" .
                "updated has been changed from " . $record_updated . " to " . $result_arr["updated"] . "\r\n" .
                "created_readable has been changed from " . $record_created_readable . " to " . $result_arr["created_readable"] . "\r\n" .
                "accessed_readable has been changed from " . $record_accessed_readable . " to " . $result_arr["accessed_readable"] . "\r\n" .
                "updated_readable has been changed from " . $record_updated_readable . " to " . $result_arr["updated_readable"] . "\r\n" .
                "\r\n";
                $message = $id . "|" . $result_arr["type"] . "|" . '{"old_keywords": ' . '"' . $record_created . '"' . '; "new_keywords": ' . '"' .$result_arr["created"] . '"' . "}\n".
                        $id . "|" . $result_arr["type"] . "|" . '{"old_accessed": ' . '"' . $record_accessed . '"' . '; "new_keywords": ' . '"' .$result_arr["created"] . '"' . "}\n".
                        $id . "|" . $result_arr["type"] . "|" . '{"old_keywords": ' . '"' . $record_created . '"' . '; "new_keywords": ' . '"' .$result_arr["created"] . '"' . "}\n".
                        $id . "|" . $result_arr["type"] . "|" . '{"old_keywords": ' . '"' . $record_updated_readable . '"' . '; "new_keywords": ' . '"' .$result_arr["updated_readable"] . '"' . "}\n".
                        $id . "|" . $result_arr["type"] . "|" . '{"old_keywords": ' . '"' . $record_accessed_readable . '"' . '; "new_keywords": ' . '"' .$result_arr["accessed_readable"] . '"' . "}\n".
                         $id . "|" . $result_arr["type"] . "|" . '{"old_keywords": ' . '"' . $record_created_readable . '"' . '; "new_keywords": ' . '"' .$result_arr["created_readable"] . '"' . "}";
            } else {
                echo $id . " fail to set the value into couchbase document! \r\n";
                $message = $id . " fail to set the value into couchbase document! \r\n";
            }
            $this->writeToLog($log_path, $message);
    }

    /*
     * The function below gives full report of partner status, including those can be found and can not be found.
     * Not using at the monment just save in case needed. 
     */

//    public function checkNumber(){
//         $start_time = date('D M d Y H:i:s') . ' GMT' . date('O') . ' (' . date('T') . ')';
//        $log_path = "/var/log/yii/$start_time.log";
//        $profile_arr=$this->findProfiles();
//
//        foreach($profile_arr as $profile_id){
//            $message="\n\nThis is the partner list of: ".$profile_id."\n";
//            echo "\n\nThis is the partner list of: ".$profile_id."\n";
//           
//         $ch = $this->couchBaseConnection("temp");
//            $result = $ch->get($profile_id);
//             $result_arr = CJSON::decode($result, true);
//            $partner_str=$result_arr["profile"][0]["profile_partner_ids"];
//             if($partner_str!=null && $partner_str !=""){
//            $partner_arr=  explode(",", $partner_str);
//            echo "   Found " . count($partner_arr) ." partners in record: " . "\r\n";   
//            $message.="   Found " . count($partner_arr) ." partners in record: " . "\r\n";   
//             $settings['log.enabled'] = true;
//        foreach ($partner_arr as $ids){
//             $sherlock = new \Sherlock\Sherlock($settings);
//        $sherlock->addNode("es1.hubsrv.com", 9200);
//        $request = $sherlock->search();
//        $index = 'test';
//            $request->index($index)->type("couchbaseDocument");
//             $request->from(0)
//                ->size(400);
//        $header = '{"ids": { "values": ["trendsideas.com/profiles/';
//        $footer = '"]}}';
//        $rawRequest = $header . $ids . $footer;
//        $termQuery = Sherlock\Sherlock::queryBuilder()->Raw($rawRequest);
//        $request->query($termQuery);
//        $response = $request->execute();
//            
////        $must = Sherlock\Sherlock::queryBuilder()->QueryString()->query("\"$id\"")
////                ->default_field('couchbaseDocument.doc.id');
////     
////        $bool = Sherlock\Sherlock::queryBuilder()->Bool()->must($must);
////        $request->index($index)->type("couchbaseDocument");
////        $request->from(0)
////                ->size(10);
////        $request->query($bool);
////  
////        $response = $request->execute();
//          echo "partner record ".$ids." has ".count($response)." found in database\n";
//        if(count($response) === 0){
//            $message.="     ". $ids ." can not be found in database ----------------------------";
//         
//        }
//        else{
//             $message.="      ". $ids ." is found in the database";
//        }
//           $this->writeToLog($log_path, $message);
//           $message=null;
//        }
//      
//        }
//        else{
//              echo "   This profile does not have profile partner \n";
//              $message.= "   This does not have profile partner";
//               $this->writeToLog($log_path, $message);
//        }
//        }
//          echo "Scanning Completed";
//    }



    private function createObjectArr($profile_arr) {
        $now = strtotime(date('Y-m-d H:i:s'));
//        $profile_name_lower = strtolower($profile_arr['ProfileName']);
        $profile_name_lower = strtolower(str_replace("---", "-", preg_replace("/\s|\// ", "-", $profile_arr['profile_name'])));
        $profile_bg_url = 'http://s3.hubsrv.com/trendsideas.com/profiles/' . $profile_arr['profile_url'] . '/profile_bg.jpg';
        $profile_hero_url = 'http://s3.hubsrv.com/trendsideas.com/profiles/' . $profile_arr['profile_url'] . '/profile_hero.jpg';
        $profile_pic_url = 'http://s3.hubsrv.com/trendsideas.com/profiles/' . $profile_arr['profile_url'] . '/profile_pic.jpg';

        $names = $profile_arr['profile_contact'];

        $name = explode(" ", $names);
        if (sizeof($name) > 0) {
            if ($name[1] === '&') {
                $firstName = $name[0] . ' & ' . $name[2];
                $lastName = $name[3];
            } elseif (sizeof($name) > 3) {
                $firstName = $name[0];
                $lastName = $name[1];
            } else {
                $firstName = $name[0];
                $lastName = $name[1];
            }
        };




        $mega_arr = array(
            "id" => $profile_arr['profile_url'],
            "authority" => "*@trendsideas.com",
            "accessed" => $now,
            "accessed_readable" => date('D M d Y H:i:s') . ' GMT' . date('O') . ' (' . date('T') . ')',
            "boost" => $profile_arr['boost'],
            "created" => $now,
            "created" => date('D M d Y H:i:s') . ' GMT' . date('O') . ' (' . date('T') . ')',
            "category" => $profile_arr['category'],
            "categories" => array(),
            "collection_id" => null,
            "creator" => $profile_arr['admin2'],
            "creator_type" => 'user',
            "creator_profile_pic" => null,
            "country" => $profile_arr['country'],
            "collection_count" => null,
            "deleted" => null,
            "domains" => "trendsideas.com",
            "editors" => $profile_arr['admin2'],
            "geography" => null,
            "likes_count" => null,
            "is_active" => true,
            "is_indexed" => true,
            "keywords" => str_replace("-", ", ", $profile_arr['keywords']),
            "object_image_linkto" => return_hero,
            "object_image_url" => null,
            "object_title" => null,
            "object_description" => $profile_arr['ProfileAboutUs'],
            "owner_type" => 'profiles',
            "owner_profile_pic" => $profile_pic_url,
            "owner_title" => $profile_arr['profile_name'],
            "owner_id" => $profile_arr['profile_url'],
            "owner_contact_email" => $profile_arr['admin2'],
            "owner_contact_cc_emails" => null,
            "owner_contact_bcc_emails" => null,
            "people_like" => null,
            "region" => $profile_arr['region'],
            "suburb" => $profile_arr['suburb'],
            "status_id" => null,
            "subcategories" => NULL,
            "timezone" => NULL,
            "topics" => NULL,
            "type" => "profile",
            "updated" => $now,
            "updated_readable" => date('D M d Y H:i:s') . ' GMT' . date('O') . ' (' . date('T') . ')',
            "uri_url" => null,
            "view_count" => null,
            "photo" => array(),
            "user" => array(),
            "profile" => array(),
            "optional" => null,
            "isFollow" => false,
            "user" => array(),
            "profile" => array(),
            "comments" => array(),
            "article" => array(),
        );

        $name_arr = preg_split("/\s/", $profile_arr['ProfileContact']);
        $model_arr = array(
            "id" => $profile_arr['profile_url'],
            "profile_name" => $profile_arr['profile_name'],
            "profile_bg_url" => $profile_bg_url,
            "profile_hero_url" => $profile_hero_url,
            "profile_hero_cover_url" => null,
            "profile_pic_url" => $profile_pic_url,
            "profile_client_name" => $profile_arr['client_name'],
            "profile_contact_user" => NULL,
            "profile_contact_first_name" => $firstName,
            "profile_contact_last_name" => $lastName,
            "profile_contact_email" => $profile_arr['direct_inquiry_email'],
            "profile_counter_collections" => null,
            "profile_counter_partners" => null,
            "profile_counter_follwers" => null,
            "profile_category" => $profile_arr['category'],
            "profile_about_us" => $profile_arr['ProfileAboutUs'],
            "profile_physical_address" => $profile_arr['address'] . "," . $profile_arr['suburb'] . "," . $profile_arr['region'] . "," . $profile_arr['country'],
            "profile_contact_number" => $profile_arr['contact_no'],
            "profile_keywords" => str_replace("-", ", ", $profile_arr['keywords']),
            "profile_package_name" => "Gold",
            "profile_areas_serviced" => null,
            "profile_website" => $profile_arr['website_url'],
            "profile_website_url" => $profile_arr['website_url'],
            "profile_editors" => null,
            "owner_contact_email" => $profile_arr['direct_inquiry_email'],
            "owner_contact_cc_emails" => null,
            "owner_contact_bcc_emails" => null,
            //     "profile_region" => $profile_arr['Region'],
            "profile_country" => $profile_arr['country'],
            "profile_hours" => $profile_arr['opening_hours'],
            "profile_cover_text" => null,
            "profile_creater" => null,
            "profile_street_address" => $profile_arr['address'],
            "profile_suburb" => $profile_arr['suburb'],
            "profile_editors" => '*@trendsideas.com, support@trendsideas.com,' . $profile_arr['admin2'],
            "profile_boost" => $profile_arr['boost'],
            "profile_regoin" => $profile_arr['region'],
            "profile_domains" => null,
            "profile_partner_ids" => null,
            "profile_isActive" => null,
            "profile_isDeleted" => null,
            "profile_facebook_link" => null,
            "profile_twitter_link" => null,
            "profile_googleplus_link" => null,
            "profile_pinterest_link" => null,
            "profile_linkedin_link" => null,
            "profile_youtube_link" => null,
            "followers" => array(),
            "collections" => array(),
        );
        array_push($mega_arr['profile'], $model_arr);

        return $mega_arr;
    }

    private function selectProfilesFromSQLDB($model) {
        $profiles_arr = array();
        $profiles_data = $model->findAll();

        if (sizeof($profiles_data) > 0) {
            foreach ($profiles_data as $val) {
//                print_r($val->attributes);
//                break;

                array_push($profiles_arr, $val->attributes);
            }

            return $profiles_arr;
        } else {
            return null;
        }
    }

    protected function insertProfileToMSDB() {
        $url = "http://api.develop.devbox/profiles/";
        $profile_arr = $this->getData($url, "GET");
        $total_amount = sizeof($profile_arr['profile']);
        echo $total_amount . "\r\n";

        if ($total_amount > 0) {
            for ($i = 0; $i < $total_amount; $i++) {
                $obj_arr['objectId'] = str_replace("develop.devbox/profiles/", "", $profile_arr['profile'][$i]['id']);
                $obj_arr['couchBaseId'] = $profile_arr['profile'][$i]['id'];
                $obj_arr['documentContent'] = json_encode($profile_arr['profile'][$i]);

                if ($this->saveToDB($obj_arr)) {
                    $message = 'profile is success with profile id: ' . $profile_arr['profile'][$i]['id'] . " ----------------- " . $i . "/" . $total_amount . "\r\n";
                    echo $message;
                } else {
                    $message = 'import profile to couchbase is fail, id: ' . $profile_arr['profile'][$i]['id'];
                    echo $message;
                    $this->writeToLog($this->error_path, $message);
                }

//                break;
            }
        }
    }

    protected function saveToDB($obj_arr) {
        $profile = new Profiles();

        $profile->objectId = $obj_arr['objectId'];
        $profile->couchBaseId = $obj_arr['couchBaseId'];
        $profile->documentContent = $obj_arr['documentContent'];

        return $profile->save();
    }

    protected function importProfile() {
        $url = "http://api.develop.devbox/profiles/";
        $profile_arr = $this->getData($url, "GET");
        $total_amount = sizeof($profile_arr['profile']);
        echo $total_amount . "\r\n";

        for ($i = 0; $i < $total_amount; $i++) {
            $obj_arr = $this->refineProfileArray($profile_arr['profile'][$i]);
//            print_r($obj_arr);

            if ($this->importMegaObj($obj_arr)) {
                $message = 'profile  is success with profile id: ' . $obj_arr['profile'][$i]['id'] . " ----------------- " . $i . "/" . $total_amount . "\r\n";
                echo $message;
            } else {
                $message = 'import profile to couchbase is fail, id: ' . $obj_arr['profile'][$i]['id'];
                echo $message;
                $this->writeToLog($this->log_path, $message);
            }

//            break;
        }
    }

    protected function refineProfileArray($obj_arr) {
        $obj_arr['id'] = str_replace('develop.devbox/profiles/', "", $obj_arr['id']);
        $obj_arr['domains'] = 'trendsideas.com';
        if (array_key_exists('domain', $obj_arr)) {
            unset($obj_arr['domain']);
        }

        if (array_key_exists('region', $obj_arr)) {
            unset($obj_arr['region']);
        }

        if (array_key_exists('profile_pic_url', $obj_arr['profile'][0])) {
            $obj_arr['owner_profile_pic'] = $obj_arr['profile'][0]['profile_pic_url'];
        }

        if (array_key_exists('profile_name', $obj_arr['profile'][0])) {
            $obj_arr['owner_title'] = $obj_arr['profile'][0]['profile_name'];
        }

// get current datetime
        $now = strtotime(date('Y-m-d H:i:s'));
//        if (array_key_exists('accessed', $obj_arr)) {
        $obj_arr['accessed'] = $now;
//        } else $obj_arr['accessed'] = $now;
//         if (array_key_exists('created', $obj_arr)) {
        $obj_arr['created'] = $now;
//        } else $obj_arr['created'] = $now;
//        if (array_key_exists('updated', $obj_arr)) {
        $obj_arr['updated'] = $now;
//        } else $obj_arr['updated'] = $now;

        if (!array_key_exists('boost', $obj_arr)) {
            $obj_arr['boost'] = "5";
        }

//        if(isset($obj_arr['profile'][0]['profile_editors'])) {
        $obj_arr['profile'][0]['profile_editors'] = '*@trendsideas.com, support@trendsideas.com';
//        }

        if (!array_key_exists('profile_package_name', $obj_arr['profile'][0])) {
            $obj_arr['profile'][0]['profile_package_name'] = 'Gold';
        }

        if (array_key_exists('profile_regoin', $obj_arr['profile'][0])) {
            $temp_str = $obj_arr['profile'][0]['profile_regoin'];
            $obj_arr['profile'][0]['profile_region'] = $temp_str;

            unset($obj_arr['profile'][0]['profile_regoin']);
        }

        return $obj_arr;
    }

}

?>
