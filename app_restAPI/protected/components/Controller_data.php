<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Controller_data
 *
 * @author devbox
 */
class Controller_data extends Controller {
    
    public $layout = '//layouts/api';
    protected  $error_path = "/home/devbox/NetBeansProjects/test/image.log";
    
    protected function getDataFromElastic($returnType) {
        $rawRequest = '{
                "bool": {
          "must": [
            {
              "term": {
                "couchbaseDocument.doc.type": "photo"
              }
            }
          ],
          "must_not": [
            {
              "query_string": {
                "default_field": "couchbaseDocument.doc.photo.photo_image_original_url",
                "query": "%.jpg OR %.png"
              }
            }
          ]
        }}';
        
        $settings['log.enabled'] = true;
        $settings['log.file'] = '../../sherlock.log';
        $sherlock = new \Sherlock\Sherlock($settings);
        $sherlock->addNode(Yii::app()->params['elasticSearchNode']);
        $request = $sherlock->search(); 
        $termQuery = Sherlock\Sherlock::queryBuilder()->Raw($rawRequest);
        $request->index("production")
                ->from(0)
                ->size(1000)
                ->type("couchbaseDocument")
                ->query($termQuery);

        $response = $request->execute();

        $results = $this->modifyArticleResponseResult($response, $returnType);

        return $results;
        
    }
    
    protected function getImageString($url) {
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_HEADER, 0);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_BINARYTRANSFER, 1);
        $tim = curl_exec($ch);

        return $tim;

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
    
    protected function getWatermarkImageSource($url, $imageInfo, $image_string) {
        $stamp = $this->getStamp($url);
        try {
//            $im = $this->getImageString($imageInfo['mime'], $url);
            $im = imagecreatefromstring($image_string);
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
    
    protected function getStamp($url) {
        try {
            $stamp = imagecreatefrompng('/home/devbox/NetBeansProjects/test/watermark4hero.png');
            if (strpos($url, 'original') && !strpos($url, 'imageservice')) {
                $stamp = imagecreatefrompng('/home/devbox/NetBeansProjects/test/watermark4original.png');
            } elseif (strpos($url, 'imageservice')) {
                $stamp = imagecreatefrompng('/home/devbox/NetBeansProjects/test/watermark4hero.png');
            }

            return $stamp;
        } catch (Exception $e) {

            $stamp = imagecreatefrompng('https://s3-ap-southeast-2.amazonaws.com/hubstar-dev/watermark4hero.png');
            if (strpos($url, 'original')) {
                $stamp = imagecreatefrompng('https://s3-ap-southeast-2.amazonaws.com/hubstar-dev/watermark4original.png');
            } elseif (strpos($url, 'imageservice')) {
                $stamp = imagecreatefrompng('https://s3-ap-southeast-2.amazonaws.com/hubstar-dev/watermark4hero.png');
            }

            $message = "get water mark image faill from localhost: " . $e->getMessage() . "\r\n" . date("Y-m-d H:i:s") . $url . "\r\n";

            return $stamp;
        }
    }

    
//    public function saveImageToS3($url, $data, $bucket) {
//        $provider_arr['key'] = 'AKIAJKVKLIJWCJBKMJUQ';
//        $provider_arr['secret'] = '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';
//        $provider_arr['region'] = 'ap-southeast-2';
//        $client = Aws\S3\S3Client::factory(
//                        $provider_arr
//        );
//        $result = $client->putObject(array(
//                            'Bucket' => $bucket, //"s3.hubsrv.com"
//                            'Key' => $url,
//                            'Body' => $data,
//                            'ACL' => 'public-read'
//                        ));
//        return $result;
//    }
//    
}

?>
