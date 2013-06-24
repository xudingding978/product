<?php
header("Access-Control-Allow-Origin: *");
header('Content-type: *');

header('Access-Control-Request-Method: *');
header('Access-Control-Allow-Methods: PUT, POST, OPTIONS,GET');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

class PhotoMovingController extends Controller {
    
    public function actionIndex() {
        
//        $client = new AmazonS3('AKIAJKVKLIJWCJBKMJUQ', '1jTYFQbeYlYFrGhNcP65tWkMRgIdKIAqPRVojTYI');
        $client = $this->connectToS3();
        $url="https://s3-ap-southeast-2.amazonaws.com/hubstar-dev/trendsideas.com/media/article/thumbnail/21123_132x132.jpg";
        $header = "PUT /111111.jpg HTTP/1.1
            Host: trendsideas.com.s3.amazonaws.com 
            x-amz-copy-source: /develop.devbox/hbg.jpg";
        
        $data_array = array(
            'Bucket'=>'trendsideas.com',
            'CopySource'=>'hubstar-dev/trendsideas.com/media/article/preview/100000_105x118.jpg',
            'Key'=>'media/article/preview/14205_350x118.jpg',
            'ACL' => 'public-read'
        );
        
        $response=$client->copyObject($data_array);
//        $response=$client->getObject(array(
//            'Bucket'=>'hubstar-dev',
//            'Key'=>'trendsideas.com/media/article/thumbnail/21123_132x132.jpg'            
//        ));
        
        //put($url,  http_parse_headers($header));
        
//            $ops = array();
//            $ops['obj'] = $client->getCommand()
        
//        $response = $client->listBuckets();
//        $response = $client->doesObjectExist('hubstar-dev', 'trendsideas.com/media/article/preview/100000_105x118.jpg');
        
        echo $response;
    }
    
    
    
    
    
}



?>
