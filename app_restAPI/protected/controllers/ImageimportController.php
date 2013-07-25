<?php

header("Access-Control-Allow-Origin: *");
header('Content-type: *');

header('Access-Control-Request-Method: *');
header('Access-Control-Allow-Methods: PUT, POST, OPTIONS,GET');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

class ImageimportController extends Controller {

    public function actionIndex() {
 
        //       $this->watermark("https://s3-ap-southeast-2.amazonaws.com/hubstar-dev/trendsideas.com/media/article/original/18715.jpg");
    }

    public function actionCreate() {
        $reponse;
        $request_json = file_get_contents('php://input');
        $request_arr = CJSON::decode($request_json, true);
        $url = $request_arr["url"];
        
        $isUrlExist = $this->isUrlExist($url);
        $this->is_image($url);

        if ($isUrlExist == "true") {
            $reponse = $this->watermark($url);
        } else {
            $reponse = $isUrlExist;
        }
        $this->sendResponse(200, $reponse);
    }

    public function actionRead() {
        
    }

    public function actionUpdate() {
        
    }

    public function actionDelete() {
        
    }

    public function actionTest() {
        
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
        $response;
        if ($this->shouldBeWaterMarked($url)) {
            $stamp = $this->getStamp($url);
            try {
                $imageInfo = $this->getImageInfo($url);
                $im = $this->getImageString($imageInfo['mime'], $url);
                $marge_right = 5;
                $marge_bottom = 5;
                $sx = imagesx($stamp);
                $sy = imagesy($stamp);
                
                imagecopy($im, $stamp, imagesx($im) - $sx - $marge_right, imagesy($im) - $sy - $marge_bottom, 0, 0, imagesx($stamp), imagesy($stamp));
                $data = $this->convertData($imageInfo['mime'], $im);
                
                header('Content-type: ' . $imageInfo['mime']);
                $response = $this->imageRenameAndputImagetoS3($imageInfo, $url, $data);
            } catch (Exception $e) {
                $response = 'Caught exception: ' . $e->getMessage() . "\n". $url;
                $this->writeToLog("/home/devbox/NetBeansProjects/test/AddImage_unsucces.log", $response);
            }
        } else {
            try {
                $ch = curl_init($url);
                curl_setopt($ch, CURLOPT_HEADER, 0);
                curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
                curl_setopt($ch, CURLOPT_BINARYTRANSFER, 1);
                $data = curl_exec($ch);
                $imageInfo = $this->getImageInfo($url);
                $response = $this->imageRenameAndputImagetoS3($imageInfo, $url, $data);
            } catch (Exception $e) {
                $response = 'Caught exception: ' . $e->getMessage() . "\r\n". $url;
                $this->writeToLog("/home/devbox/NetBeansProjects/test/AddImage_unsucces.log", $response);
            }
        }

        return $response;
    }

    protected function putImagetoS3($url, $data) {
        $cb = new Couchbase("cb1.hubsrv.com:8091", "", "", "default", true);
        $key = explode(".", $_SERVER['HTTP_HOST']);
        $key = $key[1] . '.' . $key[2];
        $result = $cb->get($key);
        $result_arr = CJSON::decode($result, true);
        
        $client = Aws\S3\S3Client::factory(
                        $result_arr["providers"]["S3Client"]
        );
        $client->putObject(array(
            'Bucket' => "hubstar-dev",
            'Key' => $url,
            'Body' => $data,
            'ACL' => 'public-read'
        ));
    }

    protected function getStamp($url) {
        try {
            $stamp = imagecreatefrompng('/home/devbox/NetBeansProjects/test/watermark4hero.png');
            if (strpos($url, 'original')) {
                $stamp = imagecreatefrompng('/home/devbox/NetBeansProjects/test/watermark4original.png');
            } elseif (strpos($url, 'hero')) {
                $stamp = imagecreatefrompng('/home/devbox/NetBeansProjects/test/watermark4hero.png');
            }
            return $stamp;
        } catch (Exception $e) {

            $stamp = imagecreatefrompng('https://s3-ap-southeast-2.amazonaws.com/hubstar-dev/watermark4hero.png');
            if (strpos($url, 'original')) {
                $stamp = imagecreatefrompng('https://s3-ap-southeast-2.amazonaws.com/hubstar-dev/watermark4original.png');
            } elseif (strpos($url, 'hero')) {
                $stamp = imagecreatefrompng('https://s3-ap-southeast-2.amazonaws.com/hubstar-dev/watermark4hero.png');
            }
            
            $message = "get water mark image faill: " . $e->getMessage() . "\r\n" . date("Y-m-d H:i:s").$url. "\r\n";
            echo $message;            
            
            $this->writeToLog("/home/devbox/NetBeansProjects/test/AddImage_unsucces.log", $message);
        }
    }


    protected function shouldBeWaterMarked($url) {
        $response = false;
        if (strpos($url, 'original')) {
            $response = true;
        } elseif (strpos($url, 'hero')) {
            $response = true;
        } else {
            $response = false;
        }
        return $response;
    }

    protected function imageRenameAndputImagetoS3($imageInfo, $url, $data) {
        $tempname = "false";
        $exteonsion = ".png";
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
        $name = $tempname[0] . "_" . $imageInfo[0] . "x" . $imageInfo[1] . "$exteonsion"; //  $width  = $get[0]; $height = $get[1]; $type   = $get[2];  $attr   = $get[3];  $bits   = $get['bits']; $mime   = $get['mime'];
        $name = str_replace('http://', '', $name);
        
        $this->putImagetoS3($name, $data);
        $url = "https://s3-ap-southeast-2.amazonaws.com/hubstar-dev/" . $name;
        $width = $imageInfo[0];
        $height = $imageInfo[1];
        
        $tempArray = array(
            "width" => $width,
            "height" => $height,
            "url" => $url,
        );
        $returnReponse = json_encode($tempArray, true);
        return $returnReponse;
    }

    function convertData($type, $data) {
        ob_start();
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
