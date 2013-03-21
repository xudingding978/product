<?php

Yii::import('common.models.*');

class UrlPickerTest{
    
    public static function test() { 
        
           $inputArrary = array(
                               "www.google.com", 
                               "kitchens.trendsideas.co.nz", 
                               "kitchens.trendsideas.co.au", 
                               "kitchens.trendsideas.com.cn",
                               "kitchens.trendsideas.com",
                               "www.develop.devbox3", 
                               "www.develop.devbox3", 
                               "admin.develop.devbox3", 
                               "authority.develop.devbox3", 
                               "dashboard.develop.devbox3"
                       );

         $expectedOutputArray = array(
                               "google.com", 
                               "trendsideas.co.nz", 
                               "trendsideas.co.au", 
                               "trendsideas.com.cn",
                               "trendsideas.com", 
                               "develop.devbox3", 
                               "develop.devbox3", 
                               "develop.devbox3", 
                               "develop.devbox3", 
                               "develop.devbox3"
                       );

            $testResult = array();  
            $resultList = array(); 
        echo '<h1>UrlPicker unit test</h1>'; 
        
        $result = ""; 
        
        for ($i = 0; $i < sizeof($inputArrary); $i++) {       
 
            
             $urlPicker = new UrlPicker;   
            $result = $urlPicker->shortenURL($inputArrary[$i]);  
            $testResult['ActurlOutput'] = $result; 
            $testResult['ExpectedOutput'] = $expectedOutputArray[$i];    
             if ($result == $expectedOutputArray[$i]) {
                 $testResult['result']= 'true'; 
            } else {
                 $testResult['result']= 'false';  
            }
            array_push($resultList, $testResult); 
        }  

        
        if (count($resultList)>0) { 
            echo'<pre>'; 
            print_r($resultList);  
        }
    }
}
?>
