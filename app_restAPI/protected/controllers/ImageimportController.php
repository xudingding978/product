<?php

header("Access-Control-Allow-Origin: *");
header('Content-type: *');

header('Access-Control-Request-Method: *');
header('Access-Control-Allow-Methods: PUT, POST, OPTIONS,GET');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

class ImageimportController extends PhotoDataController {

    public function actionIndex() {

        //       $this->watermark("https://s3-ap-southeast-2.amazonaws.com/hubstar-dev/trendsideas.com/media/article/original/18715.jpg");
    }

    public function actionCreate() {
   //     echo "\n post  to api \n";
        $reponse;
        $request_json = file_get_contents('php://input');
        $request_arr = CJSON::decode($request_json, true);
    //    echo var_export($request_arr) . "33333333333333333\n\n";
        error_log("url information posted Into API" . var_export($request_arr, true)."\n");
        $url = $request_arr["url"];
        $isUrlExist = $this->isUrlExist($url);
       //   $this->is_image($url);

        if ($isUrlExist == "true") {
   //         $response ="\nThis is response \n";
            //stamp the image and save it to s3
                      $response = $this->watermark($url);
        } else {
                      $response = $isUrlExist;
        }
               $this->sendResponse(200, $response);
    }

    public function actionRead() {
        
    }

    public function actionUpdate() {
        
    }

    public function actionDelete() {
        
    }

    public function actionTest() {
        
    }

    public function isUrlExist($path) {
        $file_headers = @get_headers($path);
        if ($file_headers[0] == 'HTTP/1.1 404 Not Found') {
            $response = 'HTTP/1.1 404 Not Found';
        } else {
            $response = "true";
        }

        unset($file_headers);
        return $response;
    }

    public function actionOptions() {

        $statusHeader = 'HTTP/1.1 ' . 200 . ' ' . $this->getStatusCodeMessage(200);
        header($statusHeader);
// Set the content type
        header('Content-type:*');
// Set the Access Control for permissable domains
        header("Access-Control-Allow-Origin:*");
        header('Access-Control-Request-Method:*');
        header('Access-Control-Allow-Methods:*');
        header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

        echo "";
        Yii::app()->end();


//                echo $this->sendResponse(200, "OK");
    }

    public function actionResize() {
        echo "33333333333333";
    }

    public function getInputData($inputDataType, $inputData) {
        $tempInput = "";
        if ($inputDataType == "image/jpeg") {
            $tempInput = str_replace('data:image/jpeg;base64,', '', $inputData);
        } elseif ($inputDataType == "application/pdf") {
            $tempInput = str_replace('data:application/pdf;base64,', '', $inputData);
        } elseif ($inputDataType == "image/png") {
            $tempInput = str_replace('data:image/png;base64,', '', $inputData);
        } elseif ($inputDataType == "image/gif") {
            $tempInput = str_replace('data:image/gif;base64,', '', $inputData);
        }
        $data = base64_decode($tempInput);
        return $data;
    }

    public function setImage($url) {

        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_HEADER, 0);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_BINARYTRANSFER, 1);
        $data = curl_exec($ch);
        //close connection
        curl_close($ch);

        if (is_null($data) || strpos($data, '404') || empty($data)) {
            $my_file = '/home/devbox/NetBeansProjects/test/error.log';
            $handle = fopen($my_file, 'a') or die('Cannot open file:  ' . $my_file);
            $output = "\n" . 'New data ';
            $output = "\n" . $url . ' has error';
            fwrite($handle, $output);
            fclose($handle);
        } else {
            $my_file = '/home/devbox/NetBeansProjects/test/sucess.log';
            $handle = fopen($my_file, 'a') or die('Cannot open file:  ' . $my_file);
            $output = "\n" . $url . ' is create';
            fwrite($handle, $output);
            fclose($handle);
            $this->putImagetoS3($url, $data);
        }
    }

    public function watermark($url) {
         $version=$this->getVersionofImage($url);
        //   check if need to be watermarked
        if ($this->shouldBeWaterMarked($url)) {
            //get the stamp according to type of the image
          
            $stamp = $this->getStamp($url);
        //    error_log($url . "url sent in");
            try {
                error_log("The image need to be watermarked");
                //get the width,height and type of the image
                $imageInfo = getimagesize($url);
               

//                error_log($imageInfo[0] . "width" . $imageInfo[1] . "height" . $imageInfo['mime'] . "type");
//                error_log('ddddddddddddddddddddddddddd');
                //get the image data from physical image through correct gb libray function
                $im = $this->getImageIdentifier($imageInfo, $url);
                                   error_log('\n before im \n');
        error_log($im, true);
        error_log('\n after im \n');
                error_log("type of the image is: ".$imageInfo['mime']."\n");

              //  $data = $this->createResizedImage($imageInfo,  $im, $imageInfo['mime'],$version);
               
          //      $response = $this->imageRenameAndputImagetoS3($imageInfo, $url, $data);
                  
             //     $imageInfo[0]=imagesx($data[1]);
             //     $imageInfo[1]=imagesy($data[1]);
                //attributes used when watermarking
                $marge_right = 5;
                $marge_bottom = 5;
                //width of the stamp
                $sx = imagesx($stamp);
                error_log($sx . "width");
                error_log(imagesx($im) . "width 2nd");
                //height of the stamp
                $sy = imagesy($stamp);
                //doing water stamp
                imagecopy($im, $stamp, imagesx($im) - $sx - $marge_right, imagesy($im) - $sy - $marge_bottom, 0, 0, imagesx($stamp), imagesy($stamp));
                $data = $this->createResizedImage($imageInfo,  $im, $imageInfo['mime'],$version);
                $newImageInfor = getimagesizefromstring($data);

      //           $data = $this->createResizedImage($imageInfo,  $im, $imageInfo['mime']);
     //           $image = $this->convertData($imageInfo['mime'], $im);

                header('Content-type: ' . $imageInfo['mime']);
                //change the name of the image with the size of the image and save to s3
                $response = $this->imageRenameAndputImagetoS3($newImageInfor, $url, $data);
            } catch (Exception $e) {
                $response = 'Caught exception: ' . $e->getMessage() . "\n" . $url;
     //           $this->writeToLog("/home/devbox/NetBeansProjects/test/AddImage_unsucces.log", $response);
            }
        } else {
            try {
                 $imageInfo = getimagesize($url);
//                $ch = curl_init($url);
//                curl_setopt($ch, CURLOPT_HEADER, 0);
//                curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
//                curl_setopt($ch, CURLOPT_BINARYTRANSFER, 1);
//                $data = curl_exec($ch);
                $im = $this->getImageIdentifier($imageInfo, $url);
                   error_log('\n before im \n');
        error_log($im);
        error_log('\n after im \n');
                
                $data = $this->createResizedImage($imageInfo,  $im, $imageInfo['mime'],$version);
                $newImageInfor = getimagesizefromstring($data);
                $response = $this->imageRenameAndputImagetoS3($newImageInfor, $url, $data);
            } catch (Exception $e) {
                $response = 'Caught exception: ' . $e->getMessage() . "\r\n" . $url;
           //     $this->writeToLog("/home/devbox/NetBeansProjects/test/AddImage_unsucces.log", $response);
            }
        }

        return $response;
    }

    protected function getImageIdentifier($imageInfo, $url) {

        if (strpos($imageInfo['mime'], 'jpeg')) {
            error_log('getImageIdentifier = jpeg');
            $im = imagecreatefromjpeg($url);
        } elseif (strpos($imageInfo['mime'], 'png')) {
            $im = imagecreatefrompng($url);
        } elseif (strpos($imageInfo['mime'], 'gif')) {
            $im = imagecreatefromgif($url);
        } elseif (strpos($imageInfo['mime'], 'bmp')) {
            $im = imagecreatefrombmp($url);
        }

        return $im;
    }

    protected function putImagetoS3($url, $data) {
        //connect to default bucket of couchbase
        $cb = new Couchbase("cb1.hubsrv.com:8091", "", "", "default", true);
        //'HTTP_HOST"="api.develop.trendsideas.com"
        $key = explode(".", $_SERVER['HTTP_HOST']);

        error_log("the http_host".$_SERVER['HTTP_HOST']);
        //key=trendsideas.com, find the s3client configration from it
        $key = $key[2] . '.' . $key[3];
        error_log("the key used for couchbase is " . $key);
        $result = $cb->get($key);
        //  error_log(var_export($result));
        $result_arr = CJSON::decode($result, true);
        error_log("S3 configration: \n".var_export($result_arr["providers"]["S3Client"], true));
        $client = Aws\S3\S3Client::factory(
                        $result_arr["providers"]["S3Client"]
        );

        //saving
        $client->putObject(array(
            'Bucket' => "hubstar-dev",
            'Key' => $url,
            'Body' => $data,
            'ACL' => 'public-read',
        ));
        error_log('put into s3');
    }

    protected function getStamp($url) {
        try {
            $stamp = imagecreatefrompng('/home/devbox/NetBeansProjects/test/watermark4hero.png');
            if (strpos($url, 'original')) {
                $stamp = imagecreatefrompng('/home/devbox/NetBeansProjects/test/watermark4original.png');
            } elseif (strpos($url, 'hero')) {
                $stamp = imagecreatefrompng('/home/devbox/NetBeansProjects/test/watermark4hero.png');
            }
            error_log("getStamp" . $stamp);
            return $stamp;
        } catch (Exception $e) {

            $stamp = imagecreatefrompng('https://s3-ap-southeast-2.amazonaws.com/hubstar-dev/watermark4hero.png');
            if (strpos($url, 'original')) {
                $stamp = imagecreatefrompng('https://s3-ap-southeast-2.amazonaws.com/hubstar-dev/watermark4original.png');
            } elseif (strpos($url, 'hero')) {
                $stamp = imagecreatefrompng('https://s3-ap-southeast-2.amazonaws.com/hubstar-dev/watermark4hero.png');
            }

            $message = "get water mark image faill: " . $e->getMessage() . "\r\n" . date("Y-m-d H:i:s") . $url . "\r\n";
  //          echo $message;
            $this->writeToLog("/home/devbox/NetBeansProjects/test/AddImage_unsucces.log", $message);
        }
    }

    protected function shouldBeWaterMarked($url) {
        $watermark = false;
        if (strpos($url, 'original')) {
            $watermark = true;
        } elseif (strpos($url, 'hero')) {
            $watermark = true;
        } 
//        echo $url . "11111111111111111 \n";
        return $watermark;
    }
    
     protected function getVersionofImage($url) {
            $version="";
        if (strpos($url, 'original')) {
            $version = 'original';
        } elseif (strpos($url, 'hero')) {
              $version = 'hero';
        } elseif (strpos($url, 'preview')) {
              $version = 'preview';
        } elseif (strpos($url, 'thumbnail')) {
              $version = 'thumbnail';
        } 
//        echo $url . "11111111111111111 \n";
        return $version;
    }

    
       protected function getNewPhotoSize($photo_size, $version) {
        $new_size = array();
        error_log("befor get resize information from thumbnail: ".$version);
        switch ($version) {
            case 'thumbnail':
                error_log("get resize information from thumbnail");
                $new_size['width'] = 132;
                $new_size['height'] = 132;
                break;
            case 'preview':
                $new_size['height'] = 118;
                $new_size['width'] = intval(($photo_size['width'] * $new_size['height']) / $photo_size['height']);
                
                break;
            case 'hero':
                $new_size['width'] = 338;
                $new_size['height'] = intval(($photo_size['height'] * $new_size['width']) / $photo_size['width']);
                break;
            case 'user_cover':
                $new_size['width'] = 1280;
                $new_size['height'] = intval(($photo_size['height'] * $new_size['width']) / $photo_size['width']);
                break;
            case 'user_cover_small':
                $new_size['width'] = 165;
                $new_size['height'] = intval(($photo_size['height'] * $new_size['width']) / $photo_size['width']);
                break;
            case 'user_picture':
                $new_size['width'] = 150;
                $new_size['height'] = intval(($photo_size['height'] * $new_size['width']) / $photo_size['width']);
                break;
            case 'original':
                $new_size['width'] = intval($photo_size['width']);
                $new_size['height'] = intval($photo_size['height']);
                break;
            default:
                $new_size['width'] = intval($photo_size['width']);
                $new_size['height'] = intval($photo_size['height']);
        }

        return $new_size;
    }
       public function createResizedImage($orig_size, $data, $photo_type,$version) {
           $photo_size['height']=$orig_size[1];
               $photo_size['width']=    $orig_size[0];
//         error_log('\n before data1 \n');
//        error_log($data);
//        error_log('\n after data1 \n');
         $new_size=  $this->getNewPhotoSize($photo_size, $version);
             
        // Create new image to display
        $new_photo = imagecreatetruecolor($new_size['width'], $new_size['height']);
        // Create new image with changed dimensions
        imagecopyresampled($new_photo, $data, 0, 0, 0, 0, $new_size['width'], $new_size['height'], $orig_size[0], $orig_size[1]);
//        error_log('\n before data \n');
//        error_log($data);
//        error_log('\n after data \n');
//        if($watermark){
//            $contents=$new_photo;
//        }  else {
                    ob_start();
        if ($photo_type == "image/png") {
            imagepng($new_photo);
        } else if ($photo_type == "image/jpeg") {
            imagejpeg($new_photo);
        }
            else if($photo_type== "image/gif"){
                imagegif($new_photo);
            }
        $contents = ob_get_contents();
        ob_end_clean();
    //    }
        
        return $contents;
    }

    protected function imageRenameAndputImagetoS3($imageInfo, $url, $data) {
        $tempname = "false";
        $exteonsion = ".png";
      
      //  if(strpos($url, $tempname))
        //sperate the image name in order to add size information
        if (strpos($url, '.jpg')) {
            $tempname = explode(".jpg", $url);
        } elseif (strpos($url, '.png')) {
            $tempname = explode(".png", $url);
        }
        if (strpos($imageInfo['mime'], 'jpeg')) {
            $exteonsion = ".jpg";
        } elseif (strpos($imageInfo['mime'], 'png')) {
            $exteonsion = ".png";
        }
          if($this->getVersionofImage($url)=='hero'){
            $coverName="cover_".$tempname[0].$exteonsion;
            $coverName = str_replace('http://', '', $coverName);
            $this->putImagetoS3($coverName, $data);
             $url = "https://s3-ap-southeast-2.amazonaws.com/hubstar-dev/" . $coverName;
             error_log( " this is url of the saved image: ".$url ."\n");
        }
        //adding size information to the image name
        $name = $tempname[0] . "_" . $imageInfo[0] . "x" . $imageInfo[1] . "$exteonsion"; //  $width  = $get[0]; $height = $get[1]; $type   = $get[2];  $attr   = $get[3];  $bits   = $get['bits']; $mime   = $get['mime'];
        //remove http...
        $name = str_replace('http://', '', $name);
        error_log("this is the remaining name: " . $name . "\n");
        //save to s3
        $this->putImagetoS3($name, $data);
        //new url for the image in s3 server
        $url = "https://s3-ap-southeast-2.amazonaws.com/hubstar-dev/" . $name;

        error_log( " this is url of the saved image: ".$url ."\n");
    //    echo $url . " \n";
        $width = $imageInfo[0];
        $height = $imageInfo[1];

        $tempArray = array(
            "width" => $width,
            "height" => $height,
            "url" => $url,
        );
        $returnReponse = json_encode($tempArray, true);
        error_log('imageRenamedAndputtoS3\n');
        return $returnReponse;
    }

    function convertData($type, $data) {
        ob_start();
        error_log("This is " . $type . " over");
        if ($type == "image/png") {
            imagepng($data);
        } elseif ($type == "image/jpeg") {
            imagejpeg($data, null, 80);
        }
        $return = ob_get_contents();
        ob_end_clean();
        return $return;
    }

}

?>
