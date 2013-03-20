<?php

/**
* @param is a URL string . 
* @return URL 
*/

class UrlPicker 
{
        public function shortenURL ($url){
            $urlList=  explode(".", $url); 
            //print_r($urlList);     
            $newUrl = ""; 
            if (count($urlList)>0) {
                if ($urlList[0]=="www"||"admin"||"authority"||"dashboard"||"account") {
                    for($n=1; $n<count($urlList); $n++ ) {
                        $newUrl = $newUrl.$urlList[$n]."."; 
                    }
                    
                    $returnUrl = preg_replace('(\.$)', '', $newUrl);
                    return $returnUrl;  
                    
                } else return $url; 
                
            } return null; 
          
        }
                
}