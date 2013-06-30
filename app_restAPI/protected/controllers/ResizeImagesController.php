<?php
header("Access-Control-Allow-Origin: *");
header('Content-type: *');

header('Access-Control-Request-Method: *');
header('Access-Control-Allow-Methods: PUT, POST, OPTIONS,GET');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

class ResizeImagesController extends Controller {
    
    public function actionIndex() {
        $request_json = file_get_contents('php://input');
        $request_arr = CJSON::decode($request_json, true);
        
        print_r($request_arr);
        
        exit();
        $url = "http://trendsideas.com/media/article/hero/83014.jpg";        
        $width = 100;        
        $image = imagecreatefromjpeg($url);
        $orig_width = imagesx($image);
        $orig_height = imagesy($image);

//        if ($image !== false) {
//            header('Content-Type: image/jpg');
//            imagejpeg($image);
//            imagedestroy($image);
//        }
//        exit();
        
//        $image_infor = $this->getImageInfo($url);
//        $image_original_size = array();
//        preg_match_all('/\"([0-9]*?)\"/', $image_infor[3], $image_original_size);
        
//        print_r($image_infor);
//        print_r($image_original_size);
        
//        $orig_height = $image_original_size[1][1];
//        $orig_width = $image_original_size[1][0];
     
         // Calc the new height
        $height = (($orig_height * $width) / $orig_width);
        
//        echo $height; 
//        exit();
        
//        $height_thumbnail = 132; 
//        $width_thumbnail = 132;
         
        
        // Create new image to display
        $new_image = imagecreatetruecolor($width, $height);
        
        // Create new image with changed dimensions
        imagecopyresized($new_image, $image,
                0, 0, 0, 0,
                $width, $height,
                $orig_width, $orig_height);
        
//        $image64 = base64_enco;
        
//        echo ToString($new_image);
        
        ob_start();
        imagejpeg($new_image);
        $contents = ob_get_contents();
        ob_end_clean();
        echo $contents;

//        if ($new_image !== false) {
//            header('Content-Type: image/jpg');
//            imagejpeg($new_image);
//            imagedestroy($new_image);
//        }
        
//        $image_data = base64_encode(file_get_contents($new_image));
//        echo $image_data;
    }  
    
}































?>
