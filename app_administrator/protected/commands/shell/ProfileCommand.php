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

        $settings['log.enabled'] = true;
        $sherlock = new \Sherlock\Sherlock($settings);


        $sherlock->addNode("es1.hubsrv.com", 9200);
        $request = $sherlock->search();
        $index = 'develop';
        
        $must = Sherlock\Sherlock::queryBuilder()->QueryString()->query("\"lockwood\-nz\"")
                ->default_field('couchbaseDocument.doc.owner_id');
        $must2 = Sherlock\Sherlock::queryBuilder()
                ->QueryString()->query("photo")
                ->default_field('couchbaseDocument.doc.type');
        $bool = Sherlock\Sherlock::queryBuilder()->Bool()->must($must)->
                must($must2);
  
//        if ($noUser == true) {
//            $must = $this->getmustQuestWithQueryString('couchbaseDocument.doc.type=user');
//            $bool->must_not($must);
//        }
     //   $request->query($bool);
//        
//        $termQuery = Sherlock\Sherlock::queryBuilder()->QueryString()->default_field("couchbaseDocument.doc.owner_id")
//                                             ->query("\"lockwood\-nz\"");
//        $termQuery2 =Sherlock\Sherlock::queryBuilder()->QueryString()->default_field("couchbaseDocument.doc.type")
//                                             ->query("photo");
//        $bool = Sherlock\Sherlock::queryBuilder()->Bool->$query($termQuery)->
//                $query($termQuery2);
        $request->index($index)->type("couchbaseDocument");
        $request->from(0)
                ->size(500);
         //       ->query($query);
                error_log($request->toJSON());
      $response = $request->query($bool);
                            error_log($request->toJSON());
             $response  ->execute();
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

   //     $request->query($termQuery);
    //    error_log($request->toJSON());
    //    $response = $request->execute();

        echo "Number of Hits: " . count($response) . "\r\n";
        error_log("4444444");
        $photo_arr = array();


        foreach ($response as $hit) {
            echo $hit["score"] . ' - ' . $hit['id'] . ' - ' . $hit['couchbaseDocument.owner_id'] . "\r\n";

//            $id = $hit['id'];
//            $ch = $this->couchBaseConnection("temp");
//            $result = $ch->get($id);
//            $result_arr = CJSON::decode($result, true);
//            print_r($result_arr);
//            if ($result_arr["collection_id"] != null) {
//                $result_arr["collection_id"] = str_replace(" ", "-", $result_arr["collection_id"]);
//                $result_arr["collection_id"] = strtolower($result_arr["collection_id"]);
//            }
//            if ($ch->set($id, CJSON::encode($result_arr))) {
//                echo $id . " update successssssssssssssssssssssssss! \r\n";
//            } else {
//                echo $id . " update failllllllllllllllllllllllllllllllllllllllllllllll! \r\n";
//            }
        }
        error_log("555555");



//    //    $photo_arr = $this->getReponseResult($response);
//         foreach ($photo_arr as $photo) {
//            echo $photo['id'] . ' - ' . $hit['couchbaseDocument.owner_id'].  "\r\n";
//        }
//
//        for ($i = 0; $i < sizeof($photo_arr); $i++) {
//            $id="trendsideas.com/".$photo_arr[$i];
//            $ch = $this->couchBaseConnection("temp");
//            $result = $ch->get($id);
//            $result_arr = CJSON::decode($result, true);
//    //    $result_arr['creator_profile_pic'] = 'http://s3.hubsrv.com/trendsideas.com/users/1000000000/profile/profile_pic_small.jpg';
//    //    $result_arr['owner_profile_pic'] = 'http://s3.hubsrv.com/trendsideas.com/users/1000000000/profile/profile_pic_small.jpg';
//
//       // $result_arr['is_active'] = true;
//      //  $result_arr['is_indexed'] = true;
//     //   unset($result_arr['active_yn']);
//  //      unset($result_arr['indexed_yn']);

        exit();
    }

    private function createObjectArr($profile_arr) {
        $now = strtotime(date('Y-m-d H:i:s'));
//        $profile_name_lower = strtolower($profile_arr['ProfileName']);
        $profile_name_lower = strtolower(str_replace("---", "-", preg_replace("/\s|\// ", "-", $profile_arr['ProfileName'])));
        $profile_bg_url = 'http://s3.hubsrv.com/trendsideas.com/profiles/' . $profile_arr['ProfileUrl'] . '/profile_bg.jpg';
        $profile_hero_url = 'http://s3.hubsrv.com/trendsideas.com/profiles/' . $profile_arr['ProfileUrl'] . '/profile_hero.jpg';
        $profile_pic_url = 'http://s3.hubsrv.com/trendsideas.com/profiles/' . $profile_arr['ProfileUrl'] . '/profile_pic.jpg';

        $mega_arr = array(
            "id" => $profile_arr['ProfileUrl'],
            "accessed" => $now,
            "boost" => 6,
            "created" => $now,
            "categories" => $profile_arr['ProfileCategory'],
            "collection_id" => null,
            "creator" => null,
            "creator_type" => null,
            "creator_profile_pic" => NULL,
            "country" => $profile_arr['Country'],
            "collection_count" => null,
            "deleted" => null,
            "domains" => "trendsideas.com",
            "editors" => NULL,
            "geography" => null,
            "like_count" => null,
            "is_indexed" => true,
            "is_active" => true,
            "keywords" => str_replace("-", ", ", $profile_name_lower),
            "object_image_linkto" => null,
            "object_image_url" => null,
            "object_title" => null,
            "object_description" => $profile_arr['ProfileAboutUs'],
            "owner_profile_pic" => $profile_pic_url,
            "owner_type" => 'profiles',
            "owner_title" => $profile_arr['ProfileName'],
            "owner_id" => $profile_arr['ProfileUrl'],
            "owner_contact_email" => $profile_arr['ProfileContactEmail'],
            "owner_contact_cc_emails" => null,
            "owner_contact_bcc_emails" => null,
            "people_like" => null,
            "region" => $profile_arr['Region'],
            "suburb" => null,
            "status_id" => null,
            "subcategories" => NULL,
            "timezone" => NULL,
            "topics" => NULL,
            "type" => "profile",
            "updated" => $now,
            "uri_url" => null,
            "view_count" => null,
            "photo" => array(),
            "user" => array(),
            "profile" => array()
        );

        $name_arr = preg_split("/\s/", $profile_arr['ProfileContact']);
        $model_arr = array(
            "id" => $profile_arr['ProfileUrl'],
            "profile_name" => $profile_arr['ProfileName'],
            "profile_bg_url" => $profile_bg_url,
            "profile_hero_url" => $profile_hero_url,
            "profile_pic_url" => $profile_pic_url,
            "profile_client_name" => $profile_arr['ClientContact'],
            "profile_contact_id" => NULL,
            "profile_contact_first_name" => $name_arr[0],
            "profile_contact_last_name" => $name_arr[1],
            "profile_contact_email" => $profile_arr['ProfileContactEmail'],
            "profile_category" => $profile_arr['ProfileCategory'],
            "profile_about_us" => $profile_arr['ProfileAboutUs'],
            "profile_physical_address" => $profile_arr['ProfilePhysicalAddress'],
            "profile_contact_number" => $profile_arr['ProfileContactNumber'],
            "profile_keywords" => str_replace("-", ", ", $profile_name_lower),
            "profile_package_name" => "Platinum",
            "profile_areas_serviced" => null,
            "profile_website" => $profile_arr['ProfileWebsite'],
            "profile_website_url" => $profile_arr['ProfileWebsiteUrl'],
            "profile_editors" => null,
            "owner_contact_email" => $profile_arr['ProfileContactEmail'],
            "owner_contact_cc_emails" => null,
            "owner_contact_bcc_emails" => null,
            "profile_region" => $profile_arr['Region'],
            "profile_country" => $profile_arr['Country'],
            "profile_hours" => $profile_arr['ProfileHours']
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
