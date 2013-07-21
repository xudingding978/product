<?php
header("Access-Control-Allow-Origin: *");
header('Content-type: *');

header('Access-Control-Request-Method: *');
header('Access-Control-Allow-Methods: PUT, POST, OPTIONS,GET');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

class ResizeImagesController extends Controller {
    
    public function actionIndex() {
//        $request_json = file_get_contents('php://input');
//        $request_arr = CJSON::decode($request_json, true);
//        
        $input_string = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAQCAwMDAgQDAwMEBAQEBQkGBQUFBQsICAYJDQsNDQ0LDAwOEBQRDg8TDwwMEhgSExUWFxcXDhEZGxkWGhQWFxb/2wBDAQQEBAUFBQoGBgoWDwwPFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhb/wAARCADEAMQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDzF5LQoAJCPZkqI29u33TE31OK5CDXr2edF/s+VmY4XYTkn6Vcin1OWTaLKSMn+8Rx+tfBz93c+qjC5tSWkW/Cko3';
//        print_r($request_arr);
        $matchs = array();
        preg_match_all('/\:(.*?)\;/', $input_string, $matchs);
        $input_image_string = $this->getInputData($matchs[1][0], $input_string);
        $url = "trendsideas.com/media/article/resize/1111.jpg";
        $this->doS3connection($url, $input_image_string);
        
        exit();
        
//        echo $input_image_string;
//        print_r($matchs);
//        echo $input_string;
//        exit();
//        $url = "http://trendsideas.com/media/article/hero/83014.jpg";
        $width = 100;
//        $image = imagecreatefromjpeg($url);
        $image = imagecreatefromstring($input_image_string);
        
        $orig_width = imagesx($image);
        $orig_height = imagesy($image);

//        if ($image !== false) {
//            header('Content-Type: image/jpg');
//            imagejpeg($image);
//            imagedestroy($image);
//        }
//        echo $orig_width."------".$orig_height;
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
        $this->creatingNewImage($height, $width, $orig_width, $orig_height, $image);
        
    }
    
    public function creatingNewImage($new_height, $new_width, $orig_width, $orig_height, $image){
        // Create new image to display
        $new_image = imagecreatetruecolor($new_height, $new_width);
        
        // Create new image with changed dimensions
        imagecopyresized($new_image, $image,
                0, 0, 0, 0,
                $new_width, $new_height,
                $orig_width, $orig_height);        
        ob_start();
        imagejpeg($new_image);
        $contents = ob_get_contents();
        ob_end_clean();
        echo $contents;
        
    }
    
}































?>
