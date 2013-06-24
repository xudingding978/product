<?php
    class RefineDataCommand extends CConsoleCommand {

        public function  actionIndex() {
            Yii::import("application.models.*");
            $data_list = ArticleImages::model()->findAll();
            echo "Totally: ".sizeof($data_list)."\r\n";
            if (sizeof($data_list)>0) {
                foreach ($data_list as $val) {
                    $photo_heliumMediaId = "";
                    $valid_photo_array=array();
                    $photo_heliumMediaId = $val['heliumMediaId'];
//                    echo $photo_heliumMediaId;
                    if ($photo_heliumMediaId!="") {
                        $photo_array=$this->getValidPhoto($photo_heliumMediaId);
                    } else {
                        $message = date("Y-m-d H:i:s")." -- ".$val['id']." --Does not have helium media id!!";
                        $this->writeToLog('/home/devbox/NetBeansProjects/test/error.log', $message);
                    }
                    
                    exit();
                    $url = "http://api.develop.devbox/GetResultByKeyValue/?type=photo&photo_heliumMediaId=".$photo_heliumMediaId;
                    
                }
            }
        }
        
        public function getValidPhoto($photo_heliumMediaId) {
            for($i=0; $i<4; $i++) {
                $url="";
                $photo_type = '';
                switch ($i) {
                    case 0: 
                        $photo_type = 'thumbnail';
                        $url = 'http://trendsideas.com/media/article/'.$photo_type.'/'.$photo_heliumMediaId.'.jpg';
                        break;
                    case 1: 
                        $photo_type = 'preview';
                        $url = 'http://trendsideas.com/media/article/'.$photo_type.'/'.$photo_heliumMediaId.'.jpg';
                        break;
                    case 2:
                        $photo_type = 'hero';
                        $url = 'http://trendsideas.com/media/article/'.$photo_type.'/'.$photo_heliumMediaId.'.jpg';
                        break;
                    case 3:
                        $photo_type = 'original';
                        $url = 'http://trendsideas.com/media/article/'.$photo_type.'/'.$photo_heliumMediaId.'.jpg';
                        break;
                }
//                        echo $url."\r\n";

               if($this->validatePhotoUrl($url)) {                           
                   $valid_photo_array[$photo_type] = $url;
               }
            }
        } 
        
        public function moveS3Obj(){

//            $client = Aws\S3\S3Client::factory(
//                array(
//                    ['key']=>'AKIAJKVKLIJWCJBKMJUQ',
//                    ['secret']=>'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'
//                )
//            );
//
//            $sourcebucket="hubstar-dev";
//            $sourcekeyname="/hubstar-dev/trendsideas.com/media/article/hero/100000_266x300.jpg";
//            
//            $targetbucket="trendsideas.com";
//            $targetkeyname;
//            
//           
//            $s3 = new AmazonS3();
//            echo "2222222222222222222222";
//            $response = $s3->get_object_list($sourcebucket);
//            
//            print_r($response);
            
        }
        
        
        public function validatePhotoUrl($url) {
            $is_vailable = FALSE;
            if ($this->isUrlExist($url)) {
                if($a=@getimagesize($url)) {
                    $is_vailable=TRUE;
                 } else {
                    $message = date("Y-m-d H:i:s")." -- ".$url." --URL is not a photo!!";
                    $this->writeToLog('/home/devbox/NetBeansProjects/test/error.log', $message);
                }                
            } else {
                $message = date("Y-m-d H:i:s")." -- ".$url." --URL is not work!!";
                $this->writeToLog('/home/devbox/NetBeansProjects/test/error.log', $message);
            }
            
            return $is_vailable;
        }

        public function isUrlExist($path) {
            $file_headers = @get_headers($path);
            if ($file_headers[0] == 'HTTP/1.1 404 Not Found') {
                $response = 'HTTP/1.1 404 Not Found';
            } else {
                $response = "true";
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

        public function connectToS3(){
            $cb = new Couchbase("cb1.hubsrv.com:8091", "", "", "default", true);
            $key = explode(".", $_SERVER['HTTP_HOST']);
            $key = $key[1] . '.' . $key[2];
            $result = $cb->get($key);
            $result_arr = CJSON::decode($result, true);
            $client = Aws\S3\S3Client::factory(
                $result_arr["providers"]["S3Client"]
            );

            return $client;
        }


































    }

?>
