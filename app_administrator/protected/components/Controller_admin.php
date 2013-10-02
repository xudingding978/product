<?php

class Controller_admin extends CConsoleCommand
{
    protected  $error_path = "/home/devbox/NetBeansProjects/test/image.log";
    
    protected function getData($url, $list_arr) {
        try {
//            print_r(CJSON::encode($list_arr));
            
            if(isset($list_arr['method'])) {
//                echo "-------------------------------------in getData function in controller_admin \r\n";
                
                $ch = curl_init($url);
                curl_setopt($ch, CURLOPT_CUSTOMREQUEST, $list_arr['method']);
                curl_setopt($ch, CURLOPT_POSTFIELDS, CJSON::encode($list_arr));
                curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
                curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));

                $result = curl_exec($ch);
                curl_close($ch);
                
                $data_arr = CJSON::decode($result, true);
                
//                echo "fffffffffffffffffffffffffffffffff \r\n";
//                print_r($data_arr);
                
                return $data_arr;
            } else {
                return null;
            }
        } catch (Exception $e) {
            $message = 'Caught exception: ' . $e->getMessage();
            $this->writeToLog($this->error_path, $message);
            return null;
        }
    }   
        
    protected function writeToLog($fileName, $content) {
        //   $my_file = '/home/devbox/NetBeansProjects/test/addingtocouchbase_success.log';
        $handle = fopen($fileName, 'a') or die('Cannot open file:  ' . $fileName);
        $output = "\n" . $content;
        fwrite($handle, $output);
        fclose($handle);

    }
    
        
    protected function couchBaseConnection($bucket) {
        return new Couchbase("cb1.hubsrv.com:8091", "Administrator", "Pa55word", $bucket, true);
    }
    
    protected  function setCouchbaseObject($id, $photo_arr, $bucket) {
         $cb = $this->couchBaseConnection($bucket);
         
          if ($cb->set($id, CJSON::encode($photo_arr))) {
            return true;
        } else {
            return false;
        }
    }
    
    protected  function addCouchbaseObject($id, $document_arr, $bucket_str) {
         $cb_obj = $this->couchBaseConnection($bucket_str);
         
          if ($cb_obj->add($id, CJSON::encode($document_arr))) {
            return true;
        } else {
            return false;
        }
    }
    
    protected function addPhotoSourceId($id, $source_Id) {
        $ch = $this->couchBaseConnection("develop");
        $result = $ch->get($id);
        $result_arr = CJSON::decode($result, true);
        
        $result_arr['photo'][0]['photo_source_id'] = $source_Id;
        
        if ($ch->set($id, CJSON::encode($result_arr))) {
            echo $id . " update successssssssssssssssssssssssss! \r\n";
        } else {
            echo $id . " update failllllllllllllllllllllllllllllllllllllllllllllll! \r\n";
        }
    } 
    
    protected function validateImageUrl($url) {
        $is_vailable = FALSE;
       
        try {
            $file_headers = @get_headers($url);

            if ($file_headers[0] == 'HTTP/1.1 404 Not Found') {
                $is_vailable = FALSE;
            } else {
                  if ($a=@getimagesize($url)) {
                        $image_type = $a[2];
                        if (in_array($image_type, array(IMAGETYPE_GIF, IMAGETYPE_JPEG, IMAGETYPE_PNG, IMAGETYPE_BMP))) {
                            $is_vailable = TRUE;
                        }
                    } else {
                           $is_vailable = FALSE;
                    }
            }
        } catch (Exception $e) {
            $is_vailable = FALSE;
            $response = 'Caught exception: ' . $e->getMessage() . "\n"; 
            echo $response;
        }
        
        return $is_vailable;
    }
    
    protected function getNewID() {
        $myText = (string) microtime();
        $pieces = explode(" ", $myText);
        $id = $pieces[1];
        $id = (string)rand(99999999, 999999999) . $id;
//        echo "111111111111111111111111111111";
        return $id;
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
    
    public function getCoverPage($article_id) {
        $data_arr = Article::model()->getFirstPhotoHlmID($article_id);
        $cover_url = "";
        if (sizeof($data_arr) > 0) {
            $helim_id_str = $data_arr[0]['heliumMediaId'];
            $url = "http://develop-api.trendsideas.com/GetResultByKeyValue/?type=photo&photo_heliumMediaId=" . $helim_id_str;
            $json_result = $this->getData($url);

            if (sizeof($json_result) > 0) {
                $cover_url = $this->getCoverUrl($json_result);
            } else {
                echo "cannot find any image object from couchbase!----helim ID: " . $helim_id_str . "----------- \r\n";
            }
        }
        return $cover_url;
    }
    
    
    protected function getBookDetails ($article_id) {
        $book_data_arr = array();
        
        $book_id = array();
        $book_date = 0;
//        $book_title = "";
        $timezone = "";
        $title = ""; 
        $region="";
        $country="";
//        $book_creator="";
        
        $book_list = Books::model()->getBookByArticalID($article_id);
//        echo "111111111111111111111111111";
//        print_r($book_list);
        
        if (sizeof($book_list) > 0) {
            foreach ($book_list as $book) {
                array_push($book_id, $book['id']);
                $date_live = $book['dateLive'];
                $publication = $book['publication'];
                $title = $book['title'];
//                $title = str_replace(" ", "-", str_replace(" & ", "-", $book['title']));
                
                if ($book['region'] != "" || $book['region'] != null)  {
                    $region_id = $book['region'];
                    $region = Regions::model()->selectCountryNameByID($book['region']);
                    if ($region !== null && $region !== "") {
                        $region_arr = explode(", ", $region);
                        if (sizeof($region_arr)>0) {
                            $country = $region_arr[sizeof($region_arr)-1];
                        } else {
                            $country = $region;
                        }
                        
                        $time_array = $this->getUTC($date_live, $country);
                        if (sizeof($time_array) > 0) {
                            $UTC = $time_array['utc'];
                            if ((int) $UTC > $book_date) {
                                $book_date = $UTC;
                                $timezone = $time_array['timezone'];
//                                $country_book = str_replace(" ", "-", str_replace(" & ", "-", $country));
//                                $book_creator = $country_book . "-" . $title;                                
                            }
                        }
                    }
                }
            }
        }
        
        $book_data_arr['id'] = $book_id;
        $book_data_arr['date'] =  $book_date;
        $book_data_arr['title'] = $title;
        $book_data_arr['publication'] = $publication;
        $book_data_arr['timezone'] = $timezone;
        $book_data_arr['region'] = $region;
        $book_data_arr['country'] = $country;
        $book_data_arr['region_id'] = $region_id;
        
        return $book_data_arr;        
    }
    
        
    protected function importImageList($url_json_arr) {
        $handle_array = array();
        $return_array = array();
        foreach($url_json_arr as $k=>$list){
            $ch = curl_init("http://develop-api.trendsideas.com/photos/");
            
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
            curl_setopt($ch, CURLOPT_POSTFIELDS, $list);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
                
            $handle_array[$k] = $ch;
        }
        
        $mh = curl_multi_init();
        foreach($handle_array as $k => $val) curl_multi_add_handle($mh, $val);
        
        $running = null; 
        do{
           curl_multi_exec($mh, $running);
        } while($running > 0);
        
        foreach($handle_array as $k => $h) {
            $result = curl_multi_getcontent($h);
            $return_array[$k] = $result;
            
//            $this->image_amount++;
//            echo $result . "\r\n" . date("Y-m-d H:i:s") . "---" . $this->image_amount." \r\n";
        }
        
        foreach ($handle_array as $k=>$h) {
            curl_multi_remove_handle($mh, $h);
        }
        
        curl_multi_close($mh); 
        
        return $return_array; 
    }
    
    protected function importMegaObj($data_list) {
        $json_list = json_encode($data_list);
        try {
            $ch = curl_init("http://develop-api.trendsideas.com/megaimport/");
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");    //request post
            curl_setopt($ch, CURLOPT_POSTFIELDS, $json_list);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);   //return curl_exec($ch)
            curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
            $result = curl_exec($ch);
            //close connection
            curl_close($ch);

            echo $message = $result . " is added to couchbase---" . date("Y-m-d H:i:s") .  "\r\n";
            return TRUE;
        } catch (Exception $e) {
            $response = 'Caught exception: ' . $e->getMessage();
            echo $message = $response . "--" . date("Y-m-d H:i:s") . " --- id : ". $data_list['id'] ." \r\n";
             return FALSE;
        }
    }
    
    protected function getImageSizeFromURL($url) {
        $image_arr = array();
        $tem_arr = explode("/", $url);
        if (sizeof($tem_arr)>0) {
            $file_name = $tem_arr[sizeof($tem_arr)-1];
            $image_arr['name'] = $file_name;
            $name_arr = preg_split("/_|x|[\.]/", $file_name);
            if (sizeof($name_arr)>0) {
                $image_arr['width'] = $name_arr[1];
                $image_arr['height'] = $name_arr[2];
            }
            
//            print_r($image_arr);
//            exit();
        }
        
        return $image_arr;
    }
    
    protected function getImageString($url) {
            $ch = curl_init($url);
            curl_setopt($ch, CURLOPT_HEADER, 0);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($ch, CURLOPT_BINARYTRANSFER, 1);
            $tim = curl_exec($ch);
            
//            return $tim;
            return @$imageInfo = getimagesizefromstring($tim);
               
        }
    
        protected function renamingImage($imageInfo, $url) {
            $tempname = "false";
            $exteonsion = ".png";
            $name_arr = explode("/", $url);
            if (strpos($url, '.jpg')) {
                $tempname = explode(".jpg", $name_arr[sizeof($name_arr) - 1]);
            } elseif (strpos($url, '.png')) {
                $tempname = explode(".png", $name_arr[sizeof($name_arr) - 1]);
            }
            if (strpos($imageInfo['mime'], 'jpeg')) {
                $exteonsion = ".jpg";
            } elseif (strpos($imageInfo['mime'], 'png')) {
                $exteonsion = ".png";
            }
            $name = $tempname[0] . "_" . $imageInfo[0] . "x" . $imageInfo[1] . "$exteonsion"; //  $width  = $get[0]; $height = $get[1]; $type   = $get[2];  $attr   = $get[3];  $bits   = $get['bits']; $mime   = $get['mime'];
            $name = str_replace('http://', '', $name);

            return $name;
        }
    
        protected function getWatermarkImageSource($url, $imageInfo) {
            $stamp = $this->getStamp($url);
            try {
                $im = $this->getImageString($imageInfo['mime'], $url);
                $marge_right = 5;
                $marge_bottom = 5;

                $sx = imagesx($stamp);
                $sy = imagesy($stamp);

                imagecopy($im, $stamp, imagesx($im) - $sx - $marge_right, imagesy($im) - $sy - $marge_bottom, 0, 0, imagesx($stamp), imagesy($stamp));
                $response = $this->compressData($imageInfo['mime'], $im, $url);

                return $response;
            } catch (Exception $e) {
                $response = 'Caught watermark exception: ' . $e->getMessage() . "\r\n" . $url;
                $this->writeToLog($this->error_path, $response);
            }
        }

}
