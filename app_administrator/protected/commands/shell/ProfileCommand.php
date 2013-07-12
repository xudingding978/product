<?php
Yii::import("application.models.*");
Yii::import("application.components.*");

class ProfileCommand extends Controller_admin {
    
    public function actionIndex ($action=null) {
        echo (isset($action) ? 'Your are do... ' . $action."\r\n" : 'No action defined \r\n');
                
        $start_time = microtime(true);
        echo $start_time . "\r\n";        
        
        if ($action == "import") {
            $this->importProfile ();
        } else if ($action == 'insert') {
            $this->insertProfileToMSDB();
        } else {
            echo "please input an action!!";
        }
        
        echo "All finished: start from: " . "\r\n";
        $end_time = microtime(true);
        echo "totally spend: " . ($end_time - $start_time);
        
    }
    
    protected function insertProfileToMSDB () {
        $url = "http://api.develop.devbox/profiles/";
        $profile_arr = $this->getData($url, "GET");
        $total_amount = sizeof($profile_arr['profile']);
        echo $total_amount."\r\n"; 
        
        if($total_amount > 0) {
            for($i=0; $i<$total_amount; $i++) {
                $obj_arr['objectId'] = str_replace("develop.devbox/profiles/", "", $profile_arr['profile'][$i]['id']);
                $obj_arr['couchBaseId'] = $profile_arr['profile'][$i]['id'];
                $obj_arr['documentContent'] = json_encode($profile_arr['profile'][$i]);
                
                if ($this->saveToDB($obj_arr)) {                    
                    $message = 'profile is success with profile id: '.$profile_arr['profile'][$i]['id'] . " ----------------- ".$i."/".$total_amount. "\r\n";
                    echo $message;
                } else {
                    $message = 'import profile to couchbase is fail, id: '. $profile_arr['profile'][$i]['id'];
                    echo $message;
                    $this->writeToLog($this->log_path, $message);
                }
                    
//                break;
            }
        }
    }

    protected function  saveToDB($obj_arr) {
        $profile = new Profiles();

        $profile->objectId=$obj_arr['objectId'];
        $profile->couchBaseId = $obj_arr['couchBaseId'];
        $profile->documentContent = $obj_arr['documentContent'];
        
        return $profile->save();
    }


    protected function importProfile() {
        $url = "http://api.develop.devbox/profiles/";
        $profile_arr = $this->getData($url, "GET");
        $total_amount = sizeof($profile_arr['profile']);
        echo $total_amount."\r\n"; 
        
        for($i=0; $i<$total_amount; $i++) {
            $obj_arr=$this->refineProfileArray($profile_arr['profile'][$i]);
//            print_r($obj_arr);
            
             if ($this->importMegaObj($obj_arr)) {
                $message = 'profile  is success with profile id: '.$obj_arr['profile'][$i]['id'] . " ----------------- ".$i."/".$total_amount. "\r\n";
                echo $message;
            } else {
                $message = 'import profile to couchbase is fail, id: '. $obj_arr['profile'][$i]['id'];
                echo $message;
                $this->writeToLog($this->log_path, $message);
            }
            
//            break;
        }
        
    }
    
    protected function  refineProfileArray ($obj_arr) {
        $obj_arr['id'] = str_replace('develop.devbox/profiles/', "", $obj_arr['id']);
        $obj_arr['domains'] = 'trendsideas.com';
        if(array_key_exists('domain', $obj_arr)) {
            unset($obj_arr['domain']);
        }
        
        if(array_key_exists('region', $obj_arr)) {
            unset($obj_arr['region']);
        }
        
        if(array_key_exists('profile_pic_url', $obj_arr['profile'][0])) {
            $obj_arr['owner_profile_pic'] = $obj_arr['profile'][0]['profile_pic_url'];
        }
        
        if(array_key_exists('profile_name', $obj_arr['profile'][0])) {
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
        
        if(!array_key_exists('profile_package_name', $obj_arr['profile'][0])) {
            $obj_arr['profile'][0]['profile_package_name'] = 'Gold';
        }
        
        if(array_key_exists('profile_regoin', $obj_arr['profile'][0])) {
            $temp_str = $obj_arr['profile'][0]['profile_regoin'];
            $obj_arr['profile'][0]['profile_region'] = $temp_str; 
            
            unset($obj_arr['profile'][0]['profile_regoin']);
        }
        
        return $obj_arr;
    }
    
    
}

?>
