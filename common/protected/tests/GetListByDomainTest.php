<?php

Yii::import('common.models.*');

class GetListByDomainTest{ 
    
    public static function test() { 
        
           $input = "develop.devbox3"; 

         $expectedOutputArray = array(
                               "https://s3-ap-southeast-2.amazonaws.com/hubstar-dev/isotope_img/kit_2.jpg"                            
                       );


        echo '<h1>UrlPicker unit test</h1>'; 
        $testResult = Listing::model()->getListingByDomain($input);   

       $resultList['Input'] =$input;  
      $resultList['ActualOutput'] = $testResult[0]['IMAGE_URL']; 
      $resultList['ExpectedOutput'] = $expectedOutputArray[0]; 
        
        if ($expectedOutputArray[0]==$testResult[0]['IMAGE_URL']) {
            $resultList['result']  = 'true'; 
        } else $resultList['result'] = 'false';  
        
        if (count($resultList)>0) { 
            echo'<pre>'; 
            print_r($resultList);  
        }
    }
}
?>
