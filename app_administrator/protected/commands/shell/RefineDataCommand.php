<?php

Yii::import("application.models.*");
Yii::import("application.components.*");
require_once("ArticleCommand.php");

class RefineDataCommand extends Controller_admin {

    public $total_num = 0;
    public $obj_amount = 0;
    public $image_amount = 0;

    public function actionIndex($action = null) {


        if ($action == "articlekeyword") {
            $this->updateArticleKeyword();
        } elseif ($action == "photokeyword") {
            $this->updatePhotoKeyword();
        } elseif ($action == "comment") {
            $this->addCommentId();
        } elseif ($action == "fixcredit") {
            $this->importCreditList();
        } elseif ($action == "fixurl") {
            $this->fixPhoto_url_largeofLisa();
        } elseif ($action == "cate") {
            $this->fixcategories();
        } elseif ($action == 'fixboost') {
            $this->fixBoostNumber();
        } elseif ($action == 'test') {
            $this->fixProfileRelatedImages('home', 200, 'develop');
        } elseif ($action == "fixtype") {
            $this->fixtype();
        } elseif ($action == "comment") {
            $this->addCommentId();
        } elseif ($action == "fixcreated") {
            $this->fixCreated();
        } elseif ($action == 'fix715') {
            $this->fixArticlebeenUpdatedwithWrongId();
        } elseif ($action == "findall") {
            $this->deleteIncorrectRecord();
        } elseif ($action == "fixuserlarge") {
            $this->fixUserPictureLarge();
        }elseif($action=='findhtml'){
            $this->ticket537HtmlRelocation();
        } elseif($action=='numbersready'){
            $this->ticket667likesCountCommentCount();
        }
        elseif ($action == "refineArticle") {








            $this->refineArticle();
            echo "finish~~~~~~~~~~~~~~~~~~~~~~~~";
            exit();

            $startid = 0;
            echo (isset($startid) ? 'Start position is... ' . $startid : 'No start defined');
            $data_list = ArticleImages::model()->getDatabyid($startid);
            $this->total_num = sizeof($data_list);
            echo "Totally: " . $this->total_num . "\r\n";

            $start_time = microtime(TRUE);
            if (sizeof($data_list) > 0) {
                foreach ($data_list as $val) {
                    //     echo $val['heliumMediaId']." start\r\n";;
                    $photo_heliumMediaId = $val['heliumMediaId'];
                    if ($photo_heliumMediaId != "") {

                        $url = "http://api.develop.devbox/GetResultByKeyValue/?type=photo&photo_heliumMediaId=" . $photo_heliumMediaId;
                        $elastic_return_str = $this->callAPI($url);
                        $s3_url_arr = $this->getUrlFromElastic($elastic_return_str);

                        $mega_obj_arr = $this->structureArray($val, $s3_url_arr);
                        echo $mega_obj_arr . $val['heliumMediaId'] . "\r\n";
                        $id = $this->importMegaObj($mega_obj_arr, $val['id']);
                        $photo_array = $this->getValidPhoto($photo_heliumMediaId, $id, $val['id']);
                        $handle_array = array();
                        foreach ($photo_array as $k => $val) {
                            $url_arr = explode("/", $s3_url_arr[$k]);
                            $file_name = $url_arr[sizeof($url_arr) - 1];


                            $url = 'http://api.develop.devbox/PhotoMoving?style=' . $k . '&name=' . $file_name . '&id=' . $id;

                            $ch = curl_init($url);
                            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "GET");
                            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
                            curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));

                            $handle_array[$k] = $ch;
                        }
                        $this->movingPhotoList($handle_array);
                    } else {
                        $message = date("Y-m-d H:i:s") . " -- " . $val['id'] . " --Does not have helium media id!!";
                        $this->writeToLog('/home/devbox/NetBeansProjects/test/error.log', $message);
                    }
                }
            }

            $end_time = microtime(TRUE);
            echo "*******************************" . ($end_time - $start_time);
        }
    }

    public function deleteIncorrectRecord() {
        $article_arr = $this->fixArticlebeenUpdatedwithWrongId();
        foreach ($article_arr as $article) {
            $article_id = $article[0];
            $article_owner_id = $article[1];
            $article_colloection_id = $article[2];
            $article_country = $article[3];
            $article_time = $article[4];
            $bucket = 'temp';
            $setting['log.enabled'] = true;
            $Sherlock = new \Sherlock\Sherlock($setting);
            $Sherlock->addNode("es1.hubsrv.com", 9200);
            $request = $Sherlock->search();
            $index = $bucket;
            $request->index($index)->type('couchbaseDocument');
            $raw = '
             {
    "bool": {
      "must": [
        {
          "query_string": {
            "default_field": "couchbaseDocument.doc.collection_id",
                           "query": "\"' . $article_colloection_id . '\""
          }
        },
          {
          "query_string": {
            "default_field": "couchbaseDocument.doc.country",
            "query": "\"' . $article_country . '\""
          }
        },
        {
          "query_string": {
            "default_field": "couchbaseDocument.doc.owner_id",
            "query": "' . $article_owner_id . '"
          }
        },
          {
          "query_string": {
            "default_field": "couchbaseDocument.doc.created",
            "query": "\"' . $article_time . '\""
          }
        }
      ]
    }
    }
';
            $query = Sherlock\Sherlock::queryBuilder()->Raw($raw);
            $request->query($query);
            echo "\n" . $request->toJSON() . "\n";
            $respones = $request->execute();
            if (sizeof($respones) > 0) {
                foreach ($respones as $content) {
                    echo $content['id'] . "\n";
                }
            }
        }
    }

    public function fixUserPictureLarge() {
        $bucket = 'production';
        $user_list = $this->findAllAccordingType($bucket, 'user');
        $cb = $this->couchBaseConnection($bucket);
        $i = 0;
        foreach ($user_list as $user) {
            $i++;
            echo "fix for number: " . $i;
            echo "\n" . $user . "\n";
            $result = $cb->get($user);
            if ($result != null) {
                $result_arr = CJSON::decode($result);
                if (isset($result_arr['id']) && $result_arr['id'] != null) {
                    //   echo "\n".$user . "\n";


                    if (isset($result_arr['user'][0]['photo_url_large']) && $result_arr['user'][0]['photo_url_large'] != null) {
                        $target_url = $result_arr['user'][0]['photo_url_large'];
                        $aiming_url = 'http://s3.hubsrv.com/trendsideas.com/users/' . $result_arr['id'] . '/user_picture/user_picture';
                        if ($target_url === $aiming_url) {
                            echo $user . " has correct photo_url_large\n";
                            //sleep(1);
                        } else {
                            echo "\n" . $user . "\n";

                            $data_arr = array();
                            $data_arr['url'] = $target_url;
                            $data_arr['newStyleImageName'] = 'user_picture';
                            $data_arr['mode'] = 'user_picture';
                            $data_arr['id'] = $result_arr['id'];
                            //  $data_arr['type'] = $type;
                            $pass_arr = CJSON::encode($data_arr);


                            try {
                                $ch = curl_init("http://api.develop.trendsideas.com/users/updateim");

                                curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
                                curl_setopt($ch, CURLOPT_POSTFIELDS, $pass_arr);
                                curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
                                curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));

                                $back = curl_exec($ch);
                                curl_close($ch);
                            } catch (Exception $exc) {
                                echo $exc->getTraceAsString();
                            }
                        }
                    } else {
                        echo $user . " can not find photo_url_large----------------\n";
                    }
                } else {
                    echo $user . " can not find id for the user------------------\n";
                }
            } else {
                echo $user . " can not find couchbase record  for the user------------------\n";
            }
        }
    }
    
    public function ticket667likesCountCommentCount(){
        $bucket="develop";
        $article_arr=$this->findAllAccordingType('develop','article');
        $cb=$this->couchBaseConnection($bucket);
        foreach($article_arr as $article){
            $result=$cb->get($article);
            if($result!=null){
                $result_arr=CJSON::decode($result);
                if(!iset($result_arr['likes_count']) || $result_arr['likes_count']==null){
                    $result_arr['likes_count']=0;
                }else{
                    echo $article." has like count already\n";
                }
                
                      if(!iset($result_arr['view_count']) || $result_arr['view_count']==null){
                    $result_arr['view_count']=0;
                }else{
                    echo $article." has like count already\n";
                }
                
                              if(!iset($result_arr['comment_count']) || $result_arr['comment_count']==null){
                    $result_arr['comment_count']=0;
                    if(isset($result_arr['comment'])){
                        if(sizeof($result_arr['commnet'])>0){
                            $result_arr['comment_count']=  sizeof($result_arr['comment']);
                        }else{
                            echo $article." does not have comment\n";
                        }
                    }else{
                        echo $article." does not have comment object\n";
                    }
                }else{
                    echo $article." has like count already\n";
                }
            }else{
                echo $article." can not find in couchbase---------\n";
            }
        }
        $photo_arr=$this->findAllAccordingType($bucket, 'photo');
                foreach($photo_arr as $photo){
            $result=$cb->get($photo);
            if($result!=null){
                $result_arr=CJSON::decode($result);
                if(!iset($result_arr['likes_count']) || $result_arr['likes_count']==null){
                    $result_arr['likes_count']=0;
                }else{
                    echo $photo." has like count already\n";
                }
                
                      if(!iset($result_arr['view_count']) || $result_arr['view_count']==null){
                    $result_arr['view_count']=0;
                }else{
                    echo $photo." has like count already\n";
                }
                
                              if(!iset($result_arr['comment_count']) || $result_arr['comment_count']==null){
                    $result_arr['comment_count']=0;
                    if(isset($result_arr['comment'])){
                        if(sizeof($result_arr['commnet'])>0){
                            $result_arr['comment_count']=  sizeof($result_arr['comment']);
                        }else{
                            echo $photo." does not have comment\n";
                        }
                    }else{
                        echo $photo." does not have comment object\n";
                    }
                }else{
                    echo $photo." has like count already\n";
                }
            }else{
                echo $photo." can not find in couchbase---------\n";
            }
        }
    }
    
    public function ticket537HtmlRelocation(){
        $bucket='production';
        $type='photo';
        $datetime = date('D M d Y H:i:s') . ' GMT' . date('O') . ' (' . date('T') . ')';
        $log_path = '/var/log/yii/' . $datetime . '.log';
        $cb=$this->couchBaseConnection($bucket);
        $photo_list=$this->findAllAccordingType($bucket, $type);
        $count=0;
        foreach($photo_list as $photo){
            $message=$photo." ";
            $result=$cb->get($photo);
            if($result!=null){
                $result_arr=CJSON::decode($result);
                if(isset($result_arr['photo'][0]['photo_caption'])&&$result_arr['photo'][0]['photo_caption']!=null){
                    $caption_record= $result_arr['photo'][0]['photo_caption'];
                    if(strpos($caption_record, "<a href" )!==false){
                        echo $photo. "has html tag+++++++++++++ "."\n";
                         $message.= "has html tag+++++++++++++ "."\n";
                      //  sleep(5);
                        $count++;
                        $caption_arr_url=  explode('"', $caption_record);
                       
                        foreach($caption_arr_url as $part){
                            if(strpos($part, "http")!==false){
                                $url=$part;
                            }
                        }
                        $result_arr['photo'][0]['photo_link_url']=$url;
                        preg_match('/>(.*?)</', $caption_record, $text);
                        $result_arr['photo'][0]['photo_link_text']=$text[1];
                        $result_arr['photo'][0]['photo_caption']="";
                   //     echo $url."\n".$text[1]."\n-------------------------------";
                        if($cb->set($photo,CJSON::encode($result_arr))){
                            echo "save to couchbase successful\n";
                            $message.="    save to couchbase successful\n";
                        }else{
                            echo "save to couchbase failed";
                            $message.="    save to couchbase failed";
                        }
                        $result_arr['photo'][0]['photo_caption']="";
                        
            
                    }else{
                        $message.= " does not have Html tag \n";
                        echo $photo. " does not have Html tag \n";
                    }
                }else{
                    echo $photo. " does not have caption********** \n";
                    $message.= " does not have caption********** \n";
                }
                

                
            }else{
                echo $photo." cannot find record in couchbase--------------- \n";
                 $message.= " cannot find record in couchbase--------------- \n";
            }
            $this->writeToLog($log_path, $message);
        }
       // $this->writeToLog($log_path, $message);
        echo $count;
        
    }

    public function fixArticlebeenUpdatedwithWrongId() {
        $bucket = 'temp';
        $article_arr = $this->findAllAccordingType($bucket, 'article');
        $cb = $this->couchBaseConnection($bucket);
        //  $collectionId_arr = array();
        //  $helium_arr = array();



        $setting['log.enabled'] = true;
        $datetime = date('D M d Y H:i:s') . ' GMT' . date('O') . ' (' . date('T') . ')';
        $log_path = '/var/log/yii/' . $datetime . '.log';
        $Sherlock = new \Sherlock\Sherlock($setting);
        $Sherlock->addNode("es1.hubsrv.com", 9200);
        $request = $Sherlock->search();
        $index = $bucket;
        $request->index($index)->type('couchbaseDocument');
        $return_arr = array();


        foreach ($article_arr as $article) {
            $message = null;
            time_nanosleep(0, 200000000);
            $collection_id = null;
            $helium = null;
            $result = $cb->get($article);
            if ($result != null) {
                $result_arr = CJSON::decode($result);
                if ($result_arr['collection_id'] != null) {
                    $collection_id = $result_arr['collection_id'];
                } else {
                    echo "can not find collection id for " . $article . "\n";
                }
                if ($result_arr['article'][0]['article_helium_media_id'] != null) {
                    $helium = $result_arr['article'][0]['article_helium_media_id'];
                } else {
                    echo "can not find helium media id for " . $article . "\n";
                }
                if ($collection_id != null && $helium != null) {
                    echo $article . " | " . $collection_id . " | " . $helium . "\n";

                    $raw = '
             {
    "bool": {
      "must": [
        {
          "query_string": {
            "default_field": "couchbaseDocument.doc.article.article_helium_media_id",
                           "query": "\"' . $helium . '\""
          }
        },
          {
          "query_string": {
            "default_field": "couchbaseDocument.doc.type",
            "query": "article"
          }
        }
      ]
    }
    }
';

                    // echo $raw . "\n";
                    echo $helium;
                    $query = Sherlock\Sherlock::queryBuilder()->Raw($raw);
                    //     echo $query->toJSON() . "\n";

                    $request->query($query);
                    echo $request->toJSON() . "\n";

                    $response = $request->execute();
                    echo sizeof($response) . "\n";
                    if (sizeof($response) > 1) {
                        $check_arr = array();
                        foreach ($response as $helium_found) {
                            if ($helium_found['id'] != $article) {
                                array_push($check_arr, $helium_found['id']);
                            }
                        }
                        if (sizeof($check_arr) > 1) {
                            echo $article . " | " . $collection_id . " has more that 2 duplications----------n";
                            $message = $article . " | " . $collection_id . " has more that 2 duplications----------n";
                        } else {
                            $compare_arr = CJSON::decode($cb->get($check_arr[0]));
                            $current = $result_arr['created'];
                            $compare = $compare_arr['created'];
                            if ($result_arr['owner_id'] === $compare_arr['owner_id'] && $result_arr['country'] === $compare_arr['country']) {
                                $articleInfor_arr = array();





                                if ($current > $compare) {
                                    array_push($articleInfor_arr, $check_arr[0]);
                                    array_push($articleInfor_arr, $compare_arr['owner_id']);
                                    array_push($articleInfor_arr, $compare_arr['collection_id']);
                                    array_push($articleInfor_arr, $compare_arr['country']);
                                    array_push($articleInfor_arr, $compare);
                                    array_push($return_arr, $articleInfor_arr);
                                    echo $article . " | " . $collection_id . " | " . $helium . " | " . $current . " update into " . $check_arr[0] . " | " . $compare_arr['collection_id'] . " | " . $compare_arr['article'][0]['article_helium_media_id'] . " | " . $compare . "\n";
                                    $message = $article . " | " . $collection_id . " | " . $helium . " | " . $current . " update into " . $check_arr[0] . " | " . $compare_arr['collection_id'] . " | " . $compare_arr['article'][0]['article_helium_media_id'] . " | " . $compare . "\n";
                                } elseif ($current < $compare) {
                                    array_push($articleInfor_arr, $article);
                                    array_push($articleInfor_arr, $compare_arr['owner_id']);
                                    array_push($articleInfor_arr, $collection_id);
                                    array_push($articleInfor_arr, $compare_arr['country']);
                                    array_push($articleInfor_arr, $current);
                                    array_push($return_arr, $articleInfor_arr);
                                    echo $check_arr[0] . " | " . $compare_arr['collection_id'] . " | " . $compare_arr['article'][0]['article_helium_media_id'] . " | " . $compare . " update into " . $article . " | " . $collection_id . " | " . $helium . " | " . $current . "\n";
                                    $message = $check_arr[0] . " | " . $compare_arr['collection_id'] . " | " . $compare_arr['article'][0]['article_helium_media_id'] . " | " . $compare . " update into " . $article . " | " . $collection_id . " | " . $helium . " | " . $current . "\n";
                                } else {
                                    echo $article . " | " . $collection_id . " | " . $helium . " has same timestamp with " . $compare_arr['id'] . " | " . $compare_arr['collection_id'] . " | " . $compare_arr['article'][0]['article_helium_media_id'] . "-------------------\n";
                                    $message = $article . " | " . $collection_id . " | " . $helium . " has same timestamp with " . $compare_arr['id'] . " | " . $compare_arr['collection_id'] . " | " . $compare_arr['article'][0]['article_helium_media_id'] . "-------------------\n";
                                }
                            }
                            //array_push$record_arr
                        }
                        $this->writeToLog($log_path, $message);
                    } else {
                        echo $article . " | " . $collection_id . " has single helium media associated with it\n";
                    }
                    //    
                } else {
                    echo $article . "can not find the helium or collection id --------\n";
                }
            } else {
                echo $article . "can not find the article in couchbase----------------\n";
            }
        }
        echo "\n" . var_export($return_arr) . "\n";
        return $return_arr;
    }

//    
//    public function fixArticlebeenUpdatedwithWrongId() {
//        $bucket = 'develop';
//        $article_arr = $this->findAllAccordingType($bucket, 'article');
//        $cb = $this->couchBaseConnection($bucket);
//        $collectionId_arr = array();
//        $helium_arr = array();
//        
//        
//        
//        
//        
//        
//        foreach ($article_arr as $article) {
//            time_nanosleep(0, 200000000);
//            $collection_id = null;
//            $helium = null;
//            $result = $cb->get($article);
//            if ($result != null) {
//                $result_arr = CJSON::decode($result);
//                if ($result_arr['collection_id'] != null) {
//                    $collection_id = $result_arr['collection_id'];
//                } else {
//                    echo "can not find collection id for " . $article . "\n";
//                }
//                if ($result_arr['article'][0]['article_helium_media_id'] != null) {
//                    $helium = $result_arr['article'][0]['article_helium_media_id'];
//                } else {
//                    echo "can not find helium media id for " . $article . "\n";
//                }
//                if ($collection_id != null && $helium != null) {
//                    array_push($helium_arr, $helium);
//                    array_push($collectionId_arr, $collection_id);
//                    echo $article." | ".$collection_id." | ".$helium."\n";
//                }
//                //array_push$record_arr
//            } else {
//                echo $article . "can not find the article in couchbase\n";
//            }
//        }
//        $setting['log.enabled'] = true;
//        $datetime = date('D M d Y H:i:s') . ' GMT' . date('O') . ' (' . date('T') . ')';
//        $log_path = '/var/log/yii/' . $datetime . '.log';
//        $Sherlock = new \Sherlock\Sherlock($setting);
//        $Sherlock->addNode("es1.hubsrv.com", 9200);
//        $request = $Sherlock->search();
//        $index = $bucket;
//        $request->index($index)->type('couchbaseDocument');
//
//        for ($i = 0; $i <= sizeof($collectionId_arr); $i++) {
//            $raw = '
//             {
//    "bool": {
//      "must": [
//        {
//          "query_string": {
//            "default_field": "couchbaseDocument.doc.collection_id",
//            "query": "\"' . $collectionId_arr[$i] . '\""
//          }
//        },
//          {
//          "query_string": {
//            "default_field": "couchbaseDocument.doc.type",
//            "query": "article"
//          }
//        }
//      ]
//    }
//    }
//';
//       //     echo $raw;
//
//            $query = Sherlock\Sherlock::queryBuilder()->Raw($raw);
//   //         echo $query->toJSON()."\n";
//
//            $request->query($query);
//            echo $request->toJSON()."\n";
//
//            $response = $request->execute();
//            echo sizeof($response);
//            if (sizeof($response) > 1) {
//                $check_arr = array();
//                foreach ($response as $collection) {
//                    array_push($check_arr, $collection['source']['doc']['article'][0]['article_helium_media_id']);
//                }
//       //         echo var_export($collection,true);
//                echo var_export($check_arr,true);
//                if (sizeof(array_unique($check_arr)) > 1) {
//                    echo $collection['id'] . " | " . $collectionId_arr[$i] ." | " .$collection['source']['doc']['created']." has more than one helium media associated with it-----------------\n";
//                    $message=$collection['id']  . " | " . $collectionId_arr[$i]  ." | ".$collection['source']['doc']['created']. " has more than one helium media associated with it-----------------\n";
//                    $this->writeToLog($log_path, $message);
//                }else{
//                    echo $article . " | " . $collectionId_arr[$i] . " has single helium media associated with it\n";
//                }
//            }else{
//                   echo $article . " | " . $collectionId_arr[$i] . " has single helium media associated with it\n";
//            }
//        }
//    }






    public function fixCreated() {
        $bucket = 'production';
        $setting['log.enabled'] = true;
        $datetime = date('D M d Y H:i:s') . ' GMT' . date('O') . ' (' . date('T') . ')';
        $log_path = '/var/log/yii/' . $datetime . '.log';
        $Sherlock = new \Sherlock\Sherlock($setting);
        $Sherlock->addNode("es1.hubsrv.com", 9200);
        $request = $Sherlock->search();
        $index = $bucket;
        $raw = '{
              "filtered": {
      "filter": {
        "missing": {
          "field": "couchbaseDocument.doc.created"
        }
      }
    }
            }';
        $filer = Sherlock\Sherlock::queryBuilder()->Raw($raw);
        $request->index($index)->type('couchbaseDocument')->query($filer);
        $data_arr = array();
        for ($i = 0; $i < 100; $i++) {
            $request->from(50 * $i)->size(50);
            $response = $request->execute();
            if (sizeof($response) != 0) {
                foreach ($response as $data) {
                    array_push($data_arr, $data['id']);
                }
            } else {
                $i = 100;
            }
        }
        echo var_export($data_arr, true);
        echo $request->toJSON() . "111111";
        $cb = $this->couchBaseConnection($bucket);
        foreach ($data_arr as $found) {
            $message = "";
            $result = $cb->get($found);
            if ($result != null) {
                $result_arr = CJSON::decode($result);
                $result_arr['created'] = strtotime(date('Y-m-d H:i:s'));
                echo $found . "Created changed to " . $result_arr['created'] . "\n";
                $message = "Created changed to " . $result_arr['created'] . "\n";
                if ($cb->set($found, CJSON::encode($result_arr))) {
                    echo $found . " couchbase record being updated\n";
                    $message.=$found . " couchbase record being updated\n";
                } else {
                    $found . " couchbase record  update failed----------------------------------\n";
                    $message.=$found . " couchbase record  update failed----------------------------------\n";
                }
            } else {
                echo $found . " can not be found in couchbase---------------------------------\n";
                $message = $found . " can not be found in couchbase---------------------------------\n";
            }
            $this->writeToLog($log_path, $message);
        }
    }

    public function fixtype() {
        $bucket = 'production';
        $setting['log.enabled'] = true;
        $datetime = date('D M d Y H:i:s') . ' GMT' . date('O') . ' (' . date('T') . ')';
        $log_path = '/var/log/yii/' . $datetime . '.log';
        $Sherlock = new \Sherlock\Sherlock($setting);
        $Sherlock->addNode("es1.hubsrv.com", 9200);
        $request = $Sherlock->search();
        $index = $bucket;
        $raw = '{
            

     "filtered": {
      "filter": {
        "exists": {
          "field": "couchbaseDocument.doc.conversationID"
        }
      }
    }

              }';
        $filter = Sherlock\Sherlock::queryBuilder()->Raw($raw);


        $request->index($index)->type('couchbaseDocument')->from(0)->size(300)->query($filter);

        echo $request->toJSON();

        $response = $request->execute();

        echo "found " . sizeof($response) . " conversations\n";
        $cb = $this->couchBaseConnection($bucket);
        foreach ($response as $conversation) {
            $message = "";
            echo $conversation['id'] . "\n";
            $result = $cb->get($conversation['id']);
            if ($result != null) {
                $result_arr = CJSON::decode($result);
                $result_arr['type'] = "conversation";
                echo "type " . $conversation['type'] . " added \n";
                echo var_export($result_arr);
                $message = "type " . $conversation['type'] . " added \n";
                if ($cb->set($conversation['id'], CJSON::encode($result_arr))) {
                    echo $conversation['id'] . " update couchbase successfull\n";
                    $message.=$conversation['id'] . " update couchbase successfull\n";
                } else {
                    echo $conversation['id'] . " update couchbase failed------------\n";
                    $message.=$conversation['id'] . " update couchbase failed------------\n";
                }
            } else {
                echo $conversation['id'] . " no couchbase record found------------\n";
                $message = $conversation['id'] . " no couchbase record found------------\n";
            }
            $this->writeToLog($log_path, $message);
        }
    }

    public function fixcategories() {
        $bucket = 'test';
        $setting['log.enabled'] = true;
        $datetime = date('D M d Y H:i:s') . ' GMT' . date('O') . ' (' . date('T') . ')';
        $log_path = '/var/log/yii/' . $datetime . '.log';
        $Sherlock = new \Sherlock\Sherlock($setting);
        $Sherlock->addNode("es1.hubsrv.com", 9200);
        $request = $Sherlock->search();
        $index = $bucket;
        $must = Sherlock\Sherlock::queryBuilder()->QueryString()->query("\"photo\"")->default_field('couchbaseDocument.doc.type');
        $bool = Sherlock\Sherlock::queryBuilder()->Bool()->must($must);
        $progress = 0;
        $record_arr = array();
        for ($i = 0; $i < 2000; $i++) {

            $progress = $i;
            $request->index($index)->type('couchbaseDocument')->from(50 * $i)->size(50)->query($bool);
            $response = $request->execute();
            foreach ($response as $find) {
                array_push($record_arr, $find['id']);
                $progess+=1;
                echo "\n finding data from couchbase NO." . $progess . "\n";
            }
        }
        echo sizeof($record_arr);
        print_r(var_export($record_arr, TRUE));
        foreach ($record_arr as $record) {
            $count+=1;
            if ($count % 500 === 0) {
                sleep(2);
                echo "\nSleep for 2seconds\n";
            }
            $message = "\nprocessing No." . $count . " id: " . $record . "\n";

            $id = $record;

            $cb = $this->couchBaseConnection($bucket);
            $result = $cb->get($id);
            if ($result != null) {
                $result_arr = CJSON::decode($result);
                $categories = $result_arr['categories'];
                $category = $result_arr['category'];
                $subcategories = $result_arr['subcategories'];
                $topics = $result_arr['topics'];
                if ($categories != null && $categories != "") {
                    $result_arr['categories'] = array();
                    $uniqe_arr = array_unique($categories, SORT_STRING);
                    foreach ($uniqe_arr as $value) {
                        array_push($result_arr['categories'], $value);
                    }
                    //  $result_arr['categories']=  array_unique($categories, SORT_STRING);
                } else {
                    echo "\n" . $id . " does not have categories record in couchbase \n";
                    $message.="\n" . $id . " does not have categories record in couchbase \n";
                }
                if ($category != null && $category != "") {
                    $result_arr['category'] = array();
                    $uniqe_arr = array_unique($category, SORT_STRING);
                    foreach ($uniqe_arr as $value) {
                        array_push($result_arr['category'], $value);
                    }
                    //        $result_arr['category']=  array_unique($category, SORT_STRING);
                } else {
                    echo "\n" . $id . " does not have category record in couchbase \n";
                    $message.="\n" . $id . " does not have category record in couchbase \n";
                }
                if ($subcategories != null && $subcategories != "") {
                    $result_arr['subcategories'] = array();
                    $uniqe_arr = array_unique($subcategories, SORT_STRING);
                    foreach ($uniqe_arr as $value) {
                        array_push($result_arr['subcategories'], $value);
                    }
                    //         $result_arr['subcategories']=  array_unique($subcategories, SORT_STRING);
                } else {
                    echo "\n" . $id . " does not have subcategories record in couchbase \n";
                    $message.="\n" . $id . " does not have subcategories record in couchbase \n";
                }
                if ($topics != null && $topics != "") {
                    $result_arr['topics'] = array();
                    foreach (array_unique($topics, SORT_STRING) as $value) {
                        array_push($result_arr['topics'], $value);
                    }
                    //    $result_arr['topics']=  array_unique($topics, SORT_STRING);
                } else {
                    echo "\n" . $id . " does not have topics record in couchbase\n";
                    $message.="\n" . $id . " does not have topics record in couchbase \n";
                }
                if ($cb->set($id, CJSON::encode($result_arr))) {
                    echo "\n" . $id . " update category record in couchbase \n";
                    $message.="\n" . $id . " update category record in couchbase \n";
                } else {
                    "\n" . $id . " can not updatecatrgory record in couchbase----------------------- \n";
                    $message.="\n" . $id . " can not updatecatrgory record in couchbase ---------------------------\n";
                }
            } else {
                echo "\n" . $id . " Can not find record in couchbase -----------------------\n";
                $message = "\n" . $id . " Can not find record in couchbase -------------------------\n";
            }
            $this->writeToLog($log_path, $message);
        }
    }

    public function fixBoostForUsers($bucket) {
        $start_time = date('D M d Y H:i:s') . ' GMT' . date('O') . ' (' . date('T') . ')';
        $log_path = "/var/log/yii/$start_time.log";

        $message = "";
        $bucket = $bucket;
        $settings['log.enabled'] = true;
        $sherlock = new \Sherlock\Sherlock($settings);
        $sherlock->addNode("es1.hubsrv.com", 9200);
        $request = $sherlock->search();
        $index = $bucket;
        $must = Sherlock\Sherlock::queryBuilder()->QueryString()->query("\"user\"")
                ->default_field('couchbaseDocument.doc.type');
        $bool = Sherlock\Sherlock::queryBuilder()->Bool()->must($must);
        $request->index($index)->type("couchbaseDocument");
        $request->from(0)
                ->size(2000);
        $request->query($bool);
        $response = $request->execute();
        foreach ($response as $user) {
            $id = $user['id'];
            $ch = $this->couchBaseConnection($bucket);
            $result = $ch->get($id);
            $result_arr = CJSON::decode($result, true);
            if (isset($result_arr['boost'])) {
                $result_arr['boost'] = NULL;

                if ($ch->set($id, CJSON::encode($result_arr))) {
                    echo "User " . $id . " boost has been set to null";
                }
            }
        }
    }

    public function fixBoostNumber() {
        $bucket = 'develop';
        $profile_record = array();
//  $this->fixBoostForUsers($bucket);
        $start_time = date('D M d Y H:i:s') . ' GMT' . date('O') . ' (' . date('T') . ')';
        $log_path = "/var/log/yii/$start_time.log";
        $package_path = "/var/log/yii/ProfilePackages.log";
        $message = "";
        $settings['log.enabled'] = true;
        $sherlock = new \Sherlock\Sherlock($settings);
        $sherlock->addNode("es1.hubsrv.com", 9200);
        $request = $sherlock->search();
        $index = $bucket;
        $must = Sherlock\Sherlock::queryBuilder()->QueryString()->query("\"profile\"")
                ->default_field('couchbaseDocument.doc.type');
        $bool = Sherlock\Sherlock::queryBuilder()->Bool()->must($must);
        $request->index($index)->type("couchbaseDocument");
        $request->from(0)
                ->size(1000);
        $request->query($bool);
        $response = $request->execute();
        foreach ($response as $hit) {
            $message = "";
            $timeStamp = $this->setUTC();
            $id = $hit['id'];
            $ch = $this->couchBaseConnection($bucket);
            $result = $ch->get($id);
            $result_arr = CJSON::decode($result);
            $record_boost = $result_arr["boost"];
            $record_accessed = $result_arr["accessed"];
            $record_updated = $result_arr["updated"];
            $record_accessed_readable = $result_arr["accessed_readable"];
            $record_updated_readable = $result_arr["updated_readable"];
            $searchForImage = false;
            $package_record = $id . " : " . $result_arr["profile"][0]["profile_package_name"];
            array_push($profile_record, $package_record);

            if ($result_arr != null && $result_arr["profile"][0]["profile_package_name"] != null) {
                //     if($result_arr['id'])
                $tempPackage = $result_arr["profile"][0]["profile_package_name"];
                $result_arr["accessed"] = $timeStamp;
                $result_arr["updated"] = $timeStamp;
                $result_arr["accessed_readable"] = date('D M d Y H:i:s') . ' GMT' . date('O') . ' (' . date('T') . ')';
                $result_arr["updated_readable"] = date('D M d Y H:i:s') . ' GMT' . date('O') . ' (' . date('T') . ')';
                if ($tempPackage === "Bronze") {
                    $boost = 25;
                    $result_arr["boost"] = $boost;
                    $searchForImage = true;
                } elseif ($tempPackage === "Silver") {
                    $boost = 50;
                    $result_arr["boost"] = $boost;
                    $searchForImage = true;
                } elseif ($tempPackage === "Gold") {
                    $boost = 100;
                    $result_arr["boost"] = $boost;
                    $searchForImage = true;
                } elseif ($tempPackage === "Platinum") {
                    $boost = 200;
                    $result_arr["boost"] = $boost;
                    $searchForImage = true;
                } if ($searchForImage === true) {

                    if ($ch->set($id, CJSON::encode($result_arr))) {
//                    echo "Document: " . $id . "\r\n" . "boost has been changed from " . $record_boost . " to " . $result_arr["boost"] . "\r\n" .
//                    "accessed has been changed from " . $record_accessed . " to " . $result_arr["accessed"] . "\r\n" .
//                    "updated has been changed from " . $record_updated . " to " . $result_arr["updated"] . "\r\n" .
//                    "accessed_readable has been changed from " . $record_accessed_readable . " to " . $result_arr["accessed_readable"] . "\r\n" .
//                    "updated_readable has been changed from " . $record_updated_readable . " to " . $result_arr["updated_readable"] . "\r\n" .
//                    "\r\n";
                        $message .= "\nProfile " . $id . "old_boost: " . $record_boost . ' new_boost: ' . $result_arr["boost"] . "\n";
                        echo $message;
                        $message.=$this->fixProfileRelatedImages($result_arr['profile'][0]['id'], $boost, $bucket);
                    } else {
                        echo $id . " fail to set the value into couchbase document! \r\n";
                        $message .= $id . " fail to set the value into couchbase document! \r\n";
                    }
                } elseif ($searchForImage == false) {
                    $message = "\nProfile " . $id . " does not have a proper package for boost*******************************************************************\n";
                    echo $message;
                }
            } else {

                $message = "\nProfile " . $id . "Does not have package specified in its profile********************************************************************\n";
                echo $message;
            }

            $this->writeToLog($log_path, $message);
        }
        $this->writeToLog($package_path, var_export($profile_record, true));
    }

    public function fixProfileRelatedImages($id, $boost, $bucket) {
//               $start_time = date('D M d Y H:i:s') . ' GMT' . date('O') . ' (' . date('T') . ')';
//    $log_path = "/var/log/yii/$start_time.log";
        $data_arr = array();
        $message = "";
        $settings['log.enabled'] = true;
        $sherlock = new \Sherlock\Sherlock($settings);
        $sherlock->addNode("es1.hubsrv.com", 9200);
        $request = $sherlock->search();
        $index = $bucket;

        for ($i = 0; $i < 3000; $i++) {

            $must = Sherlock\Sherlock::queryBuilder()->QueryString()->query("\"$id\"")
                    ->default_field('couchbaseDocument.doc.owner_id');

            $bool = Sherlock\Sherlock::queryBuilder()->Bool()->must($must);
            $request->index($index)->type("couchbaseDocument");
            $request->from($i * 50)
                    ->size(50);
            $request->query($bool);
            //      echo "\n".$request->toJSON()."\n";
            $response = $request->execute();
            echo "Search for " . $i * 50 . "\n";
            if (sizeof($response) == 0) {
                $i = 3000;
            }
            foreach ($response as $found) {
                array_push($data_arr, $found['id']);
            }
        }
        echo "\n found " . sizeof($data_arr) . " objects belongs to " . $id;
        if (sizeof($data_arr) > 0) {
            $cb = $this->couchBaseConnection($bucket);
            $count = 0;

            foreach ($data_arr as $data) {
                $result = $cb->get($data);
                $message = "";
                $count++;
                echo "\nfixing data for " . $count . "\n";
                if ($result != null && $result != "") {
                    $result_arr = CJSON::decode($result);
                    $boost_record = $result_arr['boost'];
                    $result_arr['boost'] = $boost;
                }
                if ($cb->set($data, CJSON::encode($result_arr))) {
                    $message.= "\n" . $id . " Boost data of object " . $data . " has been changed from " . $boost_record . " to " . $result_arr['boost'] . "\n";
                    echo $message;
                    //             $this->writeToLog($log_path, $message);
                } else {
                    $message.="\nBoost data of object " . $data . " update failed**********************************************\n";
                    echo $message;
                    //         $this->writeToLog($log_path, $message);
                }
            }
        } else {
            $message.="\nProfile " . $id . " does not have any image--------------------------------------------------\n";
            echo $message;
        }

        return $message;
    }

    public function fixPhoto_url_largeofLisa() {
        $bucket = 'test';
        $settings['log.enabled'] = true;
        $sherlock = new \Sherlock\Sherlock($settings);
        $sherlock->addNode("es1.hubsrv.com", 9200);
        $request = $sherlock->search();
        $index = $bucket;

        //     $must = Sherlock\Sherlock::queryBuilder()->QueryString()->query('55959331448')
        $must = Sherlock\Sherlock::queryBuilder()->QueryString()->query("\"73625997635\"")
                ->default_field('couchbaseDocument.doc.comments.commenter_id');
//        $must2 = Sherlock\Sherlock::queryBuilder()
//                ->QueryString()->query("photo")
//                ->default_field('couchbaseDocument.doc.type');
        $bool = Sherlock\Sherlock::queryBuilder()->Bool()->must($must);
//           ->must($must2);
        $request->index($index)->type("couchbaseDocument");
        $request->from(0)
                ->size(500);
        $request->query($bool);
        echo "\n" . $request->toJSON() . "\n";
        $response = $request->execute();

        echo "number of file: " . count($response);
        foreach ($response as $found) {
            $id = $found['id'];
            $cb = $this->couchBaseConnection($bucket);
            $result = $cb->get($id);
            $result_arr = CJSON::decode($result);
            if ($result_arr['comments'] != null && $result_arr['comments'] != "") {
                $comment_arr = $result_arr['comments'];
                for ($i = 0; $i < sizeof($comment_arr); $i++) {
                    $comment_arr[$i]['commenter_profile_pic_url'] = "http://s3.hubsrv.com/trendsideas.com/users/" . $comment_arr[$i]['commenter_id'] . "/user_picture/user_picture";
                }
//                foreach ($comment_arr as $comment) {
//                    $comment['commenter_profile_pic_url'] = "http://s3.hubsrv.com/trendsideas.com/users/" . $comment['commenter_id'] . "/user_picture/user_picture";
//                }
                $result_arr['comments'] = $comment_arr;
                if ($cb->set($id, CJSON::encode($result_arr))) {
                    echo "change made to " . $id . "\n";
                }
            }
        }
    }

    function __construct() {
        
    }

    public function importCreditList() {
        $classArticleImport = new ArticleCommand();
        $start_time = date('D M d Y H:i:s') . ' GMT' . date('O') . ' (' . date('T') . ')';

        $log_path = "/var/log/yii/$start_time.log";

        $bucket = "production";
        $settings['log.enabled'] = true;
        $Sherlock = new \Sherlock\Sherlock($settings);
        $Sherlock->addNode("es1.hubsrv.com", 9200);
        $article_arr = array();
        for ($i = 0; $i < 280; $i++) {
            $request = $Sherlock->search();
            $must = \Sherlock\Sherlock::queryBuilder()->QueryString()->query("\"article\"")
                    ->default_field("couchbaseDocument.doc.type");
            $bool = \Sherlock\Sherlock::queryBuilder()->Bool()->must($must);
            $request->index($bucket)
                    ->type("couchbaseDocument")
                    ->from(50 * $i)
                    ->size(50);
            $request->query($bool);
            $response = $request->execute();
            $progress = 50 * $i;
            foreach ($response as $hit) {
                $progress+=1;
                echo "Job carrying to: " . $progress;
                array_push($article_arr, $hit['id']);
                $message.=$hit['id'] . "\n";
            }
        }
        $progress = 0;
        foreach ($article_arr as $article) {
            $progress+=1;
            echo "Job carrying to: " . $progress;
            $message = 'Job carrying to: ' . $progress . "\n";
            $timeStamp = $this->setUTC();
            $cb = $this->couchBaseConnection($bucket);
            $result = $cb->get($article);
            $result_arr = CJSON::decode($result, TRUE);
            $article_id = $result_arr['collection_id'];
            $credit_of_article = $classArticleImport->buildCreditListObject($article_id);
            if ($credit_of_article != null && $credit_of_article != "") {
                for ($i = 0; $i < sizeof($credit_of_article); $i++) {
                    $credit_of_article[$i]['optional'] = $result_arr['article'][0]['id'];
                }
                $result_arr['article'][0]['credits'] = $credit_of_article;
                $result_arr["accessed"] = $timeStamp;
                $result_arr["updated"] = $timeStamp;
                $result_arr["accessed_readable"] = date('D M d Y H:i:s') . ' GMT' . date('O') . ' (' . date('T') . ')';
                $result_arr["updated_readable"] = date('D M d Y H:i:s') . ' GMT' . date('O') . ' (' . date('T') . ')';
                $message.=$article . '\n Credit list object\n: ' . var_export($result_arr['article'][0]['credits'], TRUE) . "\n";
                if ($cb->set($article, CJSON::encode($result_arr))) {
                    echo "\n\nCredit List: " . $message . "\n";

                    echo $article . " update body successful\n";
                } else {
                    echo $article . " fail to update couchbase record~~~~~~~~~~~~~~~~\n";
                    $message = $article . " fail to update couchbase record~~~~~~~~~~~~~~~~\n";
                }
            } else {
                echo $article . " does not have credit list record~~~~~~~~~~~~~~~~\n";
                $message = $article . " does not have credit list record~~~~~~~~~~~~~~~~\n";
            }
            $this->writeToLog($log_path, $message);
        }
    }

    public function addCommentId() {
        $bucket = 'production';
        $start_time = date('D M d Y H:i:s') . ' GMT' . date('O') . ' (' . date('T') . ')';
        $log_path = "/var/log/yii/$start_time.log";
        $message = "";
//        $settings['log.enabled'] = true;
//        $sherlock = new \Sherlock\Sherlock($settings);
//        $sherlock->addNode("es1.hubsrv.com", 9200);
//        $request = $sherlock->search();
//        $index = $bucket;
//        $request->index($index)->type("couchbaseDocument");
//        $request->from(0)
//                ->size(1000);
//        $rawRequest = ' 
//    "filtered": {
//      "filter": {
//        "exists": {
//          "field": "couchbaseDocument.doc.comments.content"
//        }
//      }
// }';
//        $termQuery = Sherlock\Sherlock::queryBuilder()->Raw($rawRequest);
//        $request->query($termQuery);
//        $response = $request->execute();
        $query = '{
  "query": {
    "filtered": {
      "filter": {
        "exists": {
          "field": "couchbaseDocument.doc.comments.content"
        }
      }
    }
  },
  "size": "500"
}';
        $ch = curl_init("http://es1.hubsrv.com:9200/production/_search");

        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
        curl_setopt($ch, CURLOPT_POSTFIELDS, $query);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));

        $result = curl_exec($ch);
//            foreach($result as $found){
//                echo $found['id'];
//            }
        $result_arr = CJSON::decode($result, true);
        $record_arr = $result_arr['hits']['hits'];
        echo sizeof($record_arr);
        sleep(5);
        // echo var_export($data_arr,true);
        // echo "number of file: " . var_export($result_arr);
        //   $message=  var_export($result_arr,TRUE);
        //$record_arr=array();
        foreach ($record_arr as $found) {
            // sleep(1);
            $couchbase_data_arr = array();
//            $data_arr=array();
//
//            $data_arr = $found['_source']['doc'];
            $id = $found['_id'];
            echo "\n" . $id . "\n";
            //    $message=  var_export($data_arr,true)."\n---------------------------------------------------------\n";
            //     $id = $data_arr['id'];
//            $message = $id;
//            $this->writeToLog($log_path, $message);
            //     $message.="\n".$id;
//            if ($data_arr['type'] === "profile") {
//                $couchbase_id = "trendsideas.com/profiles/" . $id;
//            } else {
//                $couchbase_id = "trendsideas.com/" . $id;
//            }
            $cb = $this->couchBaseConnection($bucket);
            $couchbase_data = $cb->get($id);
            $couchbase_data_arr = CJSON::decode($couchbase_data);
            if (isset($couchbase_data_arr['comments'])) {


                $comment_arr = $couchbase_data_arr['comments'];
                //echo var_export($comment_arr,true);
                // sleep(5);
                $new_comment_array = array();

                foreach ($comment_arr as $comment) {
                    if ($comment['message_id'] == NULL)
                        $comment['message_id'] = rand(100, 999) . strtotime(date('Y-m-d H:i:s')) . $comment['commenter_id'];
                    //     $comment['optional'] = $couchbase_data_arr['type'] . "/" . $id;
                    //     $comment['commenter_profile_pic_url']= "http://s3.hubsrv.com/trendsideas.com/users/" . $comment['commenter_id'] . "/user_picture/user_picture";
                    array_push($new_comment_array, $comment);
                }
                $couchbase_data_arr['comments'] = $new_comment_array;
                echo var_export($new_comment_array, true);
            }

            if ($cb->set($id, CJSON::encode($couchbase_data_arr))) {
                echo $id . " update successfull\n";
                $message = $id . " update successfull\n";
            } else {
                echo $id . " write couchbase record failed---------------------\n";
                $message = $id . " write couchbase record failed---------------------\n";
            }
            $this->writeToLog($log_path, $message);
        }




// $message=var_export($result_arr);
//    echo $message;
        echo "number of file: " . sizeof($data_arr);
    }

    public function refineArticle() {
        $data_list = Article::model()->getArticalID();
        $this->total_num = sizeof($data_list);
        echo "Totally: " . $this->total_num . "\r\n";

        if (sizeof($data_list) > 0) {
            foreach ($data_list as $val) {

//                print_r($val);                        
//                exit();
                //     echo $val['heliumMediaId']." start\r\n";
                $article_id_str = $val['article'];
                if ($article_id_str != "") {

                    $url = "http://api.develop.devbox/GetResultByKeyValue/?type=article&collection_id=" . $article_id_str;
                    $elastic_return_str = $this->callAPI($url);
                    $s3_url_arr = $this->getUrlFromElastic($elastic_return_str);

                    $mega_obj_arr = $this->structureArray($val, $s3_url_arr);
                    echo $mega_obj_arr . $val['heliumMediaId'] . "\r\n";
                    $id = $this->importMegaObj($mega_obj_arr, $val['id']);
                    $photo_array = $this->getValidPhoto($photo_heliumMediaId, $id, $val['id']);
                    $handle_array = array();
                    foreach ($photo_array as $k => $val) {
                        $url_arr = explode("/", $s3_url_arr[$k]);
                        $file_name = $url_arr[sizeof($url_arr) - 1];

                        $url = 'http://api.develop.devbox/PhotoMoving?style=' . $k . '&name=' . $file_name . '&id=' . $id;

                        $ch = curl_init($url);
                        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "GET");
                        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
                        curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));

                        $handle_array[$k] = $ch;
                    }
                    $this->movingPhotoList($handle_array);
                } else {
                    $message = date("Y-m-d H:i:s") . " -- " . $val['id'] . " --Does not have helium media id!!";
                    $this->writeToLog('/home/devbox/NetBeansProjects/test/error.log', $message);
                }
            }
        }
    }

    public function updateArticleKeyword() {
        $start_time = date('D M d Y H:i:s') . ' GMT' . date('O') . ' (' . date('T') . ')';
        $log_path = "/var/log/yii/$start_time.log";
        $bucket = "develop";
        $settings['log.enabled'] = true;
        $Sherlock = new \Sherlock\Sherlock($settings);
        $Sherlock->addNode("es1.hubsrv.com", 9200);
        $article_arr = array();
        for ($i = 0; $i < 280; $i++) {
            $request = null;
            $request = $Sherlock->search();
            $must = \Sherlock\Sherlock::queryBuilder()->QueryString()->query("\"article\"")
                    ->default_field("couchbaseDocument.doc.type");
            $bool = \Sherlock\Sherlock::queryBuilder()->Bool()->must($must);
            $request->index($bucket)
                    ->type("couchbaseDocument")
                    ->from(50 * $i)
                    ->size(50);
            $request->query($bool);
            $response = $request->execute();
            $progress = 50 * $i;
            foreach ($response as $hit) {
                $progress+=1;
                echo "Job carrying to: " . $progress;
                array_push($article_arr, $hit['id']);
            }
        }
        $progress = 0;
        foreach ($article_arr as $article) {
            $progress+=1;
            echo "Job carrying to: " . $progress;
            $message = 'Job carrying to: ' . $progress . "\n";
            $this->writeToLog($log_path, $message);
            $timeStamp = $this->setUTC();
            $cb = $this->couchBaseConnection($bucket);
            $result = $cb->get($article);
            $result_arr = CJSON::decode($result, TRUE);
            $record_accessed = $result_arr["accessed"];
            $record_updated = $result_arr["updated"];
            $record_accessed_readable = $result_arr["accessed_readable"];
            $record_updated_readable = $result_arr["updated_readable"];
            $keyword_obj = array();
            $keyword_data = array();
            echo strstr($result_arr['keywords'], ":") . "111111111111111\n";
            if (strstr($result_arr['keywords'], ":") === false) {
                echo "22222222222";
                if (strstr($result_arr['keywords'], "\n")) {
                    $keyword_arr = explode("\n", $result_arr['keywords']);
                    foreach ($keyword_arr as $keyword) {
                        $trimed_keyword = trim(trim(trim($keyword, "\r"), "\n"));
                        if ($trimed_keyword != "" && $trimed_keyword != null) {
                            $keyword_obj['keyword_id'] = $this->getNewID();
                            $keyword_obj['keyword_name'] = $trimed_keyword;
                            $keyword_obj['create_date'] = strtotime(date('Y-m-d H:i:s'));
                            $keyword_obj['expire_date'] = NULL;
                            $keyword_obj['value'] = NULL;
                            $keyword_obj['profile_id'] = $result_arr['owner_id'];
                            $keyword_obj['collection_id'] = NULL;
                            $keyword_obj['is_delete'] = NULL;
                            array_push($keyword_data, $keyword_obj);
                        }
                    }
                } else {
                    $keyword_arr = explode(",", $result_arr['keywords']);
                    foreach ($keyword_arr as $keyword) {
                        if ($keyword != "" && $keyword != null) {
                            $keyword_obj['keyword_id'] = $this->getNewID();
                            $keyword_obj['keyword_name'] = $keyword;
                            $keyword_obj['create_date'] = strtotime(date('Y-m-d H:i:s'));
                            $keyword_obj['expire_date'] = NULL;
                            $keyword_obj['value'] = NULL;
                            $keyword_obj['profile_id'] = $result_arr['owner_id'];
                            $keyword_obj['collection_id'] = NULL;
                            $keyword_obj['is_delete'] = NULL;
                            array_push($keyword_data, $keyword_obj);
                        }
                    }
                }
                print_r($article . "    \n" . var_export($keyword_data)) . "\n\n\n\n\n";

                $result_arr['keyword'] = $keyword_data;
                $result_arr['article'][0]['keywords'] = $keyword_data;


                $result_arr["accessed"] = $timeStamp;
                $result_arr["updated"] = $timeStamp;
                $result_arr["accessed_readable"] = date('D M d Y H:i:s') . ' GMT' . date('O') . ' (' . date('T') . ')';
                $result_arr["updated_readable"] = date('D M d Y H:i:s') . ' GMT' . date('O') . ' (' . date('T') . ')';
                $message = $article . $result_arr["type"] . " keyword has been changed from " . $result_arr['keywords'] . ' to ' . var_export($result_arr['keyword'], TRUE) . "\n";
                if ($cb->set($article, CJSON::encode($result_arr))) {
                    echo "\n\nAfter: " . var_export($result_arr['keyword'], TRUE);

                    echo $article . " update keyword successful\n";
                    $this->writeToLog($log_path, $message);
                } else {
                    echo $article . " fail to update couchbase record~~~~~~~~~~~~~~~~\n";
                    $message = $article . " fail to update couchbase record~~~~~~~~~~~~~~~~\n";
                    $this->writeToLog($log_path, $message);
                }
            } else {
                echo "found creditlist in keyword";
                $message = $article . " found creditlist in keyword~~~~~~~~~~~~~~~~\n";
                $this->writeToLog($log_path, $message);
            }
        }
    }

    public function updatePhotoKeyword() {
        $start_time = date('D M d Y H:i:s') . ' GMT' . date('O') . ' (' . date('T') . ')';
        $log_path = "/var/log/yii/$start_time.log";
        $bucket = "develop";
        $settings['log.enabled'] = true;
        $Sherlock = new \Sherlock\Sherlock($settings);
        $Sherlock->addNode("es1.hubsrv.com", 9200);
        $photo_arr = array();
        for ($i = 0; $i < 2000; $i++) {
            $request = null;
            $request = $Sherlock->search();
            $must = \Sherlock\Sherlock::queryBuilder()->QueryString()->query("\"photo\"")
                    ->default_field("couchbaseDocument.doc.type");
            $bool = \Sherlock\Sherlock::queryBuilder()->Bool()->must($must);
            $request->index($bucket)
                    ->type("couchbaseDocument")
                    ->from(50 * $i)
                    ->size(50);
            $request->query($bool);
            $response = $request->execute();
            $progress = 50 * $i;
            foreach ($response as $hit) {
                $progress+=1;
                echo "Job carrying to: " . $progress;
                array_push($photo_arr, $hit['id']);
            }
        }
        $progress = 0;
        foreach ($photo_arr as $photo) {
            $progress+=1;
            echo "Job carrying to: " . $progress;
            $message = 'Job carrying to: ' . $progress . "\n";
            $this->writeToLog($log_path, $message);
            $timeStamp = $this->setUTC();
            $cb = $this->couchBaseConnection($bucket);
            $result = $cb->get($photo);
            $result_arr = CJSON::decode($result, TRUE);
            $record_accessed = $result_arr["accessed"];
            $record_updated = $result_arr["updated"];
            $record_accessed_readable = $result_arr["accessed_readable"];
            $record_updated_readable = $result_arr["updated_readable"];
            $keyword_obj = array();
            $keyword_data = array();
            echo strstr($result_arr['keywords'], ":") . "111111111111111\n";
            if (strstr($result_arr['keywords'], ":") == false) {
                echo "22222222222";
                if (strstr($result_arr['keywords'], "\n")) {
                    $keyword_arr = explode("\n", $result_arr['keywords']);
                    foreach ($keyword_arr as $keyword) {
                        $trimed_keyword = trim(trim(trim($keyword, "\r"), "\n"));
                        if ($trimed_keyword != "" && $trimed_keyword != null) {
                            $keyword_obj['keyword_id'] = $this->getNewID();
                            $keyword_obj['keyword_name'] = $trimed_keyword;
                            $keyword_obj['create_date'] = strtotime(date('Y-m-d H:i:s'));
                            $keyword_obj['expire_date'] = NULL;
                            $keyword_obj['value'] = NULL;
                            $keyword_obj['profile_id'] = $result_arr['owner_id'];
                            $keyword_obj['collection_id'] = NULL;
                            $keyword_obj['is_delete'] = NULL;
                            array_push($keyword_data, $keyword_obj);
                        }
                    }
                } else {
                    $keyword_arr = explode(",", $result_arr['keywords']);
                    foreach ($keyword_arr as $keyword) {
                        if ($keyword != "" && $keyword != null) {
                            $keyword_obj['keyword_id'] = $this->getNewID();
                            $keyword_obj['keyword_name'] = $keyword;
                            $keyword_obj['create_date'] = strtotime(date('Y-m-d H:i:s'));
                            $keyword_obj['expire_date'] = NULL;
                            $keyword_obj['value'] = NULL;
                            $keyword_obj['profile_id'] = $result_arr['owner_id'];
                            $keyword_obj['collection_id'] = NULL;
                            $keyword_obj['is_delete'] = NULL;
                            array_push($keyword_data, $keyword_obj);
                        }
                    }
                }

                print_r($photo . "    \n" . var_export($keyword_data)) . "\n\n\n\n\n";

                $result_arr['keyword'] = $keyword_data;
                $result_arr['photo'][0]['keywords'] = $keyword_data;


                $result_arr["accessed"] = $timeStamp;
                $result_arr["updated"] = $timeStamp;
                $result_arr["accessed_readable"] = date('D M d Y H:i:s') . ' GMT' . date('O') . ' (' . date('T') . ')';
                $result_arr["updated_readable"] = date('D M d Y H:i:s') . ' GMT' . date('O') . ' (' . date('T') . ')';
                $message = $photo . $result_arr["type"] . " keyword has been changed from " . $result_arr['keywords'] . ' to ' . var_export($result_arr['keyword'], TRUE) . "\n";
                if ($cb->set($photo, CJSON::encode($result_arr))) {
                    echo "\n\nAfter: " . var_export($result_arr['keyword'], TRUE);

                    echo $photo . " update keyword successful\n";
                    $this->writeToLog($log_path, $message);
                } else {
                    echo $photo . " fail to update couchbase record~~~~~~~~~~~~~~~~\n";
                    $message = $photo . " fail to update couchbase record~~~~~~~~~~~~~~~~\n";
                    $this->writeToLog($log_path, $message);
                }
            } else {
                echo "found creditlist in keyword";
                $message = $photo . " found creditlist in keyword~~~~~~~~~~~~~~~~\n";
                $this->writeToLog($log_path, $message);
            }
        }
    }

    public function movingPhotoList($handle_array) {
        $mh = curl_multi_init();
        foreach ($handle_array as $k => $val)
            curl_multi_add_handle($mh, $val);
        $running = null;

        do {
            curl_multi_exec($mh, $running);
        } while ($running > 0);

        foreach ($handle_array as $k => $h) {
            curl_multi_remove_handle($mh, $h);
        }

        curl_multi_close($mh);
    }

    public function importMegaObj($data_list, $id) {
        $json_list = json_encode($data_list);
        try {
            $ch = curl_init("http://api.develop.devbox/megaimport/");
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
            curl_setopt($ch, CURLOPT_POSTFIELDS, $json_list);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
            $result = curl_exec($ch);
            //close connection
            curl_close($ch);
            $this->obj_amount++;
            //            error_log($result);
            echo $message = "trendsideas.com/" . $result . "\r\n id=" . $id . "---" . date("Y-m-d H:i:s") . "---" . $this->obj_amount . "/" . $this->total_num . "\r\n";
            return $result;
        } catch (Exception $e) {
            $response = 'Caught exception: ' . $e->getMessage();
            echo $message = $response . "\n" . date("Y-m-d H:i:s") . $data_list['object_image_url'] . " \r\n";

            return null;
        }
    }

    public function getBookInfor() {
// get book infor 
        $book_id = array();
        $book_date = 0;
        $book_title = "";
        $book_list = Books::model()->getBookByPhotoID($val['id']);
        $timezone = "";
        $region_book = "";

        if (sizeof($book_list) > 0) {
            foreach ($book_list as $book) {
                array_push($book_id, $book['id']);
                if ($book['region'] != "" || $book['region'] != null)
                    $region_book = Regions::model()->selectCountryNameByID($book['region']);
                $date_live = $book['dateLive'];
                $title = str_replace(" & ", "-", $book['title']);
                $title = str_replace(" ", "-", $title);
                if ($region_book !== null && $region_book !== "") {
                    $time_array = $this->getUTC($date_live, $region_book);
                    if (sizeof($time_array) > 0) {
                        $UTC = $time_array['utc'];
                        $timezone = $time_array['timezone'];
                        if ((int) $UTC > $book_date) {
                            $book_date = $UTC;
                            $tempRegion_book = str_replace(" & ", "-", $region_book);
                            $result = str_replace(" ", "-", $tempRegion_book);
                            $book_title = $result . "-" . $title;
                        }
                    }
                }
            }
        }
    }

    public function structureArray($val, $photo_arr) {
// get size of image
        $original_size = $photo_arr['photo_original_filename'];

// image url
        $original_url = 'http://s3.hubsrv.com/trendsideas.com/object_id/photo/object_id/original/' . $photo_arr['photo_original_filename'];
        $hero_url = 'http://s3.hubsrv.com/trendsideas.com/object_id/photo/object_id/hero/' . $photo_arr['photo_hero_filename'];
        $preview_url = 'http://s3.hubsrv.com/trendsideas.com/object_id/photo/object_id/preview/' . $photo_arr['photo_preview_filename'];
        $thumbnail_url = 'http://s3.hubsrv.com/trendsideas.com/object_id/photo/object_id/thumbnail/' . $photo_arr['photo_thumbnail_filename'];

//  get region and country
        $country = "";

        $region = Regions::model()->selectRegionByImage($val['id']);
        if (sizeof($region)) {
            $country = $region;
            $pos = strripos($country, ",");
            if ($pos) {
                $country = substr($country, -($pos - 3));
            }
        }

// get topic
        $topic_list = TopicSearchNames::model()->selectTopicName($val['id']);

//get subcategory
        $subcategory = SubCategorySearchNames::model()->selectSubCategory($val['id']);

// get category
        $category = Categories::model()->selectCategory($val['id']);

// get book infor 
        $book_id = array();
        $book_date = 0;
        $book_title = "";
        $book_list = Books::model()->getBookByPhotoID($val['id']);
        $timezone = "";
        $region_book = "";

        if (sizeof($book_list) > 0) {
            foreach ($book_list as $book) {
                array_push($book_id, $book['id']);
                if ($book['region'] != "" || $book['region'] != null)
                    $region_book = Regions::model()->selectCountryNameByID($book['region']);
                $date_live = $book['dateLive'];
                $title = str_replace(" & ", "-", $book['title']);
                $title = str_replace(" ", "-", $title);
                if ($region_book !== null && $region_book !== "") {
                    $time_array = $this->getUTC($date_live, $region_book);
                    if (sizeof($time_array) > 0) {
                        $UTC = $time_array['utc'];
                        $timezone = $time_array['timezone'];
                        if ((int) $UTC > $book_date) {
                            $book_date = $UTC;
                            $tempRegion_book = str_replace(" & ", "-", $region_book);
                            $result = str_replace(" ", "-", $tempRegion_book);
                            $book_title = $result . "-" . $title;
                        }
                    }
                }
            }
        }

// get current datetime
        $accessed = strtotime(date('Y-m-d H:i:s'));

// get keywords imfor
        $keywords = mb_check_encoding($val['keywords'], 'UTF-8') ? $val['keywords'] : utf8_encode($val['keywords']);

// get article
//            Yii::import("application.models.*");
        $article = Article::model()->findByPk((int) $val['articleId']);

        $obj = array(
            "id" => null,
            "type" => "photo",
            "accessed" => $accessed,
            "is_active" => "true",
            "created" => $book_date,
            "timezone" => $timezone,
            "creator" => $book_title,
            "creator_type" => 'user',
            "creator_profile_pic" => "https://s3.hubsrv.com/trendsideas.com/users/1000000000/profile/profile_pic_small",
            "creator_title" => "Trends Ideas",
            "topics" => $topic_list,
            "categories" => $category,
            "collection_id" => $val['articleId'],
            "subcategories" => $subcategory,
            "collection_count" => null,
            "like_count" => null,
            "deleted" => null,
            "domains" => array(),
            "editors" => "*@trendsideas.com",
            "follower_count" => null,
            "followers" => null,
            "following" => null,
            "following_count" => null,
            "country" => $country,
            "region" => $region,
            "geography" => null,
            "is_indexed" => true,
            "object_image_linkto" => null,
            "object_image_url" => $hero_url,
            "object_title" => $val['heliumMediaId'],
            "object_description" => $val['caption'],
            "owner_type" => 'profile',
            "owner_profile_pic" => "https://s3.hubsrv.com/trendsideas.com/users/1000000000/profile/profile_pic_small",
            "owner_title" => "Trends Ideas",
            "owner_id" => strtolower($book_title), //"home-and-apartment-trends-nz"
            "owners" => array(),
            "owner_contact_email" => "enquiries@trendsideas.com",
            "owner_contact_cc_emails" => null,
            "owner_contact_bcc_emails" => null,
            "status_id" => null,
            "updated" => null,
            "uri_url" => null,
            "view_count" => null,
            "keywords" => $keywords,
            "photo" => array()
        );

        $photo_list = array(
            "id" => null,
            "photo_title" => null,
            "photo_caption" => $val['caption'],
            "photo_articleId" => $val['articleId'],
            "photo_heliumMediaId" => $val['heliumMediaId'],
            "photo_technicalSpecification" => $val['technicalSpecification'],
            "photo_sequence" => $val['sequence'],
            "photo_isExtra" => $val['isExtra'],
            "photo_image_url" => $original_url,
            "photo_image_original_url" => $original_url,
            "photo_image_hero_url" => $hero_url,
            "photo_image_thumbnail_url" => $thumbnail_url,
            "photo_image_preview_url" => $preview_url,
            "photo_image_linkto" => null,
            "photo_type" => "image/jpeg",
            "photo_collection_name" => $article->headline,
            "photo_categories" => null,
            "photo_keywords" => $keywords,
            "photo_brands" => null,
            "photo_products" => null,
            "photo_time_zone" => $timezone,
            "photo_created" => $book_date,
            "photo_original_filename" => $original_size,
            "photo_original_width" => $photo_arr['photo_original_width'],
            "photo_original_height" => $photo_arr['photo_original_height'],
            "photo_book_id" => $book_id
        );

        array_push($obj['photo'], $photo_list);
        $owners_arr = array("andrew.johnson@trendsideas.com", "support@trendsideas.com");
        $domains_arr = array("beta.trendsides.com", "trendsideas.com");

        array_push($obj['owners'], $owners_arr);
        array_push($obj['domains'], $domains_arr);

        return $obj;
    }

    public function getUTC($datetime, $region) {
        $time_zone = '';
        switch ($region) {
            case 'New Zealand':
                $time_zone = 'NZ';
                break;
            case 'Australia':
                $time_zone = 'Australia/Sydney';
                break;
            case 'United States':
                $time_zone = 'America/New_York';
                break;
            case 'South Africa':
                $time_zone = 'Africa/Johannesburg';
                break;
            case 'The Gulf':
                $time_zone = 'Asia/Dubai';
                break;
            case 'The Gulf & Asia':
                $time_zone = 'Asia/Dubai';
                break;
            case '中国':
                $time_zone = 'Asia/Shanghai';
                break;
            case 'India':
                $time_zone = 'Asia/Kolkata';
                break;
        }
        $time_array = array();
        date_default_timezone_set($time_zone);
        $time_string = strtotime($datetime);
        $time_array['utc'] = $time_string;
        $time_array['timezone'] = $time_zone;

        return $time_array;
    }

    public function callAPI($url) {
        try {
//                echo $url."\r\n";
            $ch = curl_init($url);
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "GET");
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
            $result = curl_exec($ch);
            curl_close($ch);
            return $result;
        } catch (Exception $e) {
            $response = $e->getMessage();
            $message = date("Y-m-d H:i:s") . " ----API CALL ERROR!! \r\n" . $response . $url;
            $this->writeToLog('/home/devbox/NetBeansProjects/test/error.log', $message);
        }
    }

    public function getUrlFromElastic($elastic_return_str) {
        $obj_url_arr = array();
        $result_arr = CJSON::decode($elastic_return_str);


        if (sizeof($result_arr['articles']) > 0) {
            $photo_arr = $result_arr['articles'][sizeof($result_arr['articles']) - 1]['photo'][0];

//                    print_r($photo_arr);                    
            $obj_url_arr['original'] = $photo_arr['photo_image_original_url'];

            if (array_key_exists('photo_image_hero_url', $photo_arr)) {
                $obj_url_arr['hero'] = $photo_arr['photo_image_hero_url'];
            } else {
                $obj_url_arr['hero'] = $photo_arr['object_image_hero_url'];
            }

            $obj_url_arr['thumbnail'] = $photo_arr['photo_image_thumbnail_url'];
            $obj_url_arr['preview'] = $photo_arr['photo_image_preview_url'];

//                    if(array_key_exists('photo_original_filename', $photo_arr)) {
//                        $obj_url_arr['photo_original_filename'] = $photo_arr['photo_original_filename'];
//                    } 
//                    if(array_key_exists('photo_original_width', $photo_arr)) {
//                        $obj_url_arr['photo_original_width'] = $photo_arr['photo_original_width'];                     
//                    } 
//                    if(array_key_exists('photo_original_height', $photo_arr)) {
//                        $obj_url_arr['photo_original_height'] = $photo_arr['photo_original_height'];
//                    }
//                    echo $obj_url_arr['hero'] . "--------------------------------------------";

            $url_arr = explode("/", $obj_url_arr['hero']);
            $obj_url_arr['photo_hero_filename'] = $url_arr[sizeof($url_arr) - 1];


            $url_arr = explode("/", $obj_url_arr['thumbnail']);
            $obj_url_arr['photo_thumbnail_filename'] = $url_arr[sizeof($url_arr) - 1];

            $url_arr = explode("/", $obj_url_arr['preview']);
            $obj_url_arr['photo_preview_filename'] = $url_arr[sizeof($url_arr) - 1];

            $url_arr = explode("/", $obj_url_arr['original']);
            $obj_url_arr['photo_original_filename'] = $url_arr[sizeof($url_arr) - 1];
            $original_url = $url_arr[sizeof($url_arr) - 1];

            $orginal_name_arr = preg_split("/_|x|\./", $original_url);
            $obj_url_arr['photo_original_width'] = "";
            $obj_url_arr['photo_original_height'] = "";
            if (sizeof($orginal_name_arr) > 0) {
                $obj_url_arr['photo_original_width'] = $orginal_name_arr[1];
                $obj_url_arr['photo_original_height'] = $orginal_name_arr[2];
            }
        }

        return $obj_url_arr;
    }

    public function getValidPhoto($photo_heliumMediaId, $mega_id, $photo_id) {
        $valid_photo_array = array();
        for ($i = 0; $i < 4; $i++) {
            $url = "";
            $photo_type = '';
            switch ($i) {
                case 0:
                    $photo_type = 'thumbnail';
                    $url = 'http://trendsideas.com/media/article/' . $photo_type . '/' . $photo_heliumMediaId . '.jpg';
                    break;
                case 1:
                    $photo_type = 'preview';
                    $url = 'http://trendsideas.com/media/article/' . $photo_type . '/' . $photo_heliumMediaId . '.jpg';
                    break;
                case 2:
                    $photo_type = 'hero';
                    $url = 'http://trendsideas.com/media/article/' . $photo_type . '/' . $photo_heliumMediaId . '.jpg';
                    break;
                case 3:
                    $photo_type = 'original';
                    $url = 'http://trendsideas.com/media/article/' . $photo_type . '/' . $photo_heliumMediaId . '.jpg';
                    break;
            }

            if ($this->validatePhotoUrl($url, $mega_id, $photo_id)) {
                $valid_photo_array[$photo_type] = $url;
            }
        }

        return $valid_photo_array;
    }

    public function validatePhotoUrl($url, $mega_id, $photo_id) {
        $is_vailable = FALSE;
        $response = $this->isUrlExist($url);
        if ($response) {
            if ($a = @getimagesize($url)) {
                $is_vailable = TRUE;
            } else {
                $message = date("Y-m-d H:i:s") . " -- " . $url . " (cannot get image from this site!!) \r\n" . "mega ID: " . $mega_id . "; photo ID: " . $photo_id;
                $this->writeToLog('/home/devbox/NetBeansProjects/test/error_url.log', $message);
            }
        } else {
            $message = date("Y-m-d H:i:s") . " -- " . $url . " (HTTP/1.1 404 Not Found) \r\n" . "mega ID: " . $mega_id . "; photo ID: " . $photo_id;
            $this->writeToLog('/home/devbox/NetBeansProjects/test/error_url.log', $message);
        }

        return $is_vailable;
    }

    public function isUrlExist($path) {
        $file_headers = @get_headers($path);

        if ($file_headers[0] == 'HTTP/1.1 404 Not Found') {
            $response = FALSE;
        } else {
            $response = TRUE;
        }

        return $response;
    }

    public function writeToLog($fileName, $content) {
//   $my_file = '/home/devbox/NetBeansProjects/test/addingtocouchbase_success.log';
        $handle = fopen($fileName, 'a') or die('Cannot open file:  ' . $fileName);
        $output = "\n" . $content;
        fwrite($handle, $output);
        fclose($handle);

        unset($fileName, $content, $handle, $output);
    }

}

?>
