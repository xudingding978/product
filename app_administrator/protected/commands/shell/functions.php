<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

    class functions {
        
        public function getUTC($datetime, $region) {
            $time_zone = '';
            switch ($region) {
                case "New Zealand": 
                    $time_zone = 'NZ';
                case "Australia": 
                    $time_zone = 'Australia/Sydney';
                case "United States": 
                    $time_zone = 'America/New_York';
                case "South Africa": 
                    $time_zone = 'Africa/Johannesburg';    
                case "The Gulf": 
                    $time_zone = 'Asia/Dubai'; 
                case "The Gulf & Asia":
                    $time_zone = 'Asia/Dubai';
                case "中国": 
                    $time_zone = 'Asia/Shanghai';
                case "India":
                    $time_zone = 'Asia/Kolkata';
            };

            date_default_timezone_set($time_zone);
            $time_string = strtotime($datetime);

            return $time_string;
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


        protected function writeToLog($fileName, $content) {
            //   $my_file = '/home/devbox/NetBeansProjects/test/addingtocouchbase_success.log';
            $handle = fopen($fileName, 'a') or die('Cannot open file:  ' . $fileName);
            $output = "\n" . $content;
            fwrite($handle, $output);
            fclose($handle);

            unset($fileName, $content, $handle, $output);
        }
        
        
        
        
        
    }

?>
