<?php
Yii::import("application.models.*");
Yii::import("application.components.*");

class PhotoCommand extends Controller_admin {
    protected $log_path = '/home/devbox/NetBeansProjects/test/error_couchbasetosql.log';
    
    public function actionIndex ($action=null) {
        $start_time = microtime(true);
        echo $start_time . "\r\n";     
        echo (isset($action) ? 'Your are do... ' . $action."\r\n" : 'No action defined \r\n');
        
        if ($action == "update") {
            $this->updatePhoto ();
        } else if ($action == "update-sqlserver") {
            $this->insertCouchbaseIdToSQLserver();
        } else {
            echo "cannot find your actions";
        }
        
        echo "All finished: start from: " . "\r\n";
        $end_time = microtime(true);
        echo "totally spend: " . ($end_time - $start_time);
    }
    
    protected function insertCouchbaseIdToSQLserver() {
        $mount=0;
        $photo_data_arr = ArticleImages::model()->getAll();
        echo sizeof($photo_data_arr)."-----------------------\r\n";
        $total_amount = sizeof($photo_data_arr);
        
        if (sizeof($photo_data_arr)>0) {
            foreach ($photo_data_arr as $photo_arr) {
//                print_r($photo_arr);
                $mount++;
                
                $id = '';
                $url_str = "http://api.develop.devbox/GetResultByKeyValue/?type=photo&photo_heliumMediaId=" . $photo_arr['heliumMediaId'];
                $search_results_arr =  $this->getData($url_str, 'GET');
                
//                print_r($search_results_arr);
//                echo $url_str."\r\n";
//                echo sizeof($search_results_arr['photo'])."**************** \r\n";
//                exit();
                
                if (sizeof($search_results_arr['photo'])>0) {
                    foreach ($search_results_arr['photo'] as $result_arr) {
                        if ($photo_arr['articleId'] == $result_arr['collection_id'] && $photo_arr['caption'] == $result_arr['object_description'] ) {
                            $id = "trendsideas.com/".$result_arr['id'];                            
                            break;
                        }
                    }
                }
                
                if ($id != '') {
                    $update_bool = ArticleImages::model()->updateByPk($photo_arr['id'], array('couchBaseId' => $id)); // update articleimages table in sqlserver
                    if($update_bool) {
                        $this->addPhotoSourceId($id, $photo_arr['id']);
                    } else {
                        $message = 'update is not success with image id: '.$photo_arr['id']. ' by helum id: '. $photo_arr['heliumMediaId']. ' couchbase id: '. $id;
                        echo $message;
                        $this->writeToLog($this->log_path, $message);
                    }  
                     
                    echo 'id: '.$photo_arr['id'].'--- helium id: '.$photo_arr['heliumMediaId'].'---couchbase id: '.$id."\r\n" . "update success in sql server. NO. ". $mount.'/'.$total_amount . "\r\n";
                 } else {
                     $message = 'connot find image: '. $photo_arr['id']. 'by helum id: '. $photo_arr['heliumMediaId'];
                     echo $message;
                     $this->writeToLog($this->log_path, $message);
                 }
                
//                if ($mount>200) exit();
                
            }
            
            
        }
    }
    
    protected function updatePhoto() {
        $utc_now_utc = strtotime(date('Y-m-d H:i:s'));
        $from_utc = 1372230158;

//            $url = "http://api.develop.devbox/Photos/update?from=1372322158&to=1372324158";
        $url_str = "http://api.develop.devbox/Photos/update?from=";
        $total_amount_int = 0;
        while (TRUE) {
            $to_utc = $from_utc + 1000;

            $new_url_str = $url_str . $from_utc . '&to=' . $to_utc;
            $result_arr = $this->getData($new_url_str);
            $amount_int = sizeof($result_arr['photo']);
            $i = 0;
            if ($amount_int > 0) {
                foreach ($result_arr['photo'] as $var_arr) {
                    $id_string = 'trendsideas.com/' . $var_arr['id'];
                    $this->updateCouchbasePhoto($id_string);
                    
                    $i++;
                    echo ($total_amount_int + $i) . " / " . ($total_amount_int + $amount_int) . "\r\n";
                }

                $total_amount_int += $amount_int;
            }

            $from_utc = $to_utc;

            echo $to_utc . '/' . $utc_now_utc . "---------------------------------------------\r\n";
            if ($to_utc > $utc_now_utc)
                break;
        }
    }
    
    

    
    
    public function updateCouchbasePhoto($id) {
        $ch = $this->couchBaseConnection("production");
        $result = $ch->get($id);
        $result_arr = CJSON::decode($result, true);

        $result_arr['creator_profile_pic'] = 'http://s3.hubsrv.com/trendsideas.com/users/1000000000/profile/profile_pic_small.jpg';
        $result_arr['owner_profile_pic'] = 'http://s3.hubsrv.com/trendsideas.com/users/1000000000/profile/profile_pic_small.jpg';
        $result_arr['view_count'] = null;

        $result_arr['is_active'] = true;
        $result_arr['is_indexed'] = true;
        
        unset($result_arr['active_yn']);
        unset($result_arr['indexed_yn']);

        if ($ch->set($id, CJSON::encode($result_arr))) {
            echo $id . " update successssssssssssssssssssssssss! \r\n";
        } else {
            echo $id . " update failllllllllllllllllllllllllllllllllllllllllllllll! \r\n";
        }
    }
    
    protected function couchBaseConnection($bucket = "test") {
        return new Couchbase("cb1.hubsrv.com:8091", "Administrator", "Pa55word", $bucket, true);
    }
    
}

?>
