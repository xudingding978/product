<?php

//turn php errors on
ini_set("track_errors", true);

//set PayPal Endpoint to sandbox
$url = trim("https://svcs.sandbox.paypal.com/AdaptivePayments/Pay");

$api_appid = 'APP-80W284485P519543T';   // para sandbox
//PayPal API Credentials
$API_UserName = "jason_1349140660_biz_api1.gmail.com"; //TODO
$API_Password = "1349140682"; //TODO
$API_Signature = "AWqdrmyd0Kjoj-1d.rAX4nUxxg2tATO6lEzMSA7OMlw4q9mre8A-HKuS"; //TODO
$receiver_email = "rsusasene@gmail.com"; //TODO
$amount = 25; //TODO
//Default App ID for Sandbox    
$API_AppID = "APP-80W284485P519543T";

$API_RequestFormat = "NV";
$API_ResponseFormat = "NV";


//Create request payload with minimum required parameters
$bodyparams = array("requestEnvelope.errorLanguage" => "en_US",
    "actionType" => "PAY",
    "cancelUrl" => "http://192.168.1.254/dashboard/registration.php",
    "returnUrl" => "http://192.168.1.254/dashboard/registration.php",
    "currencyCode" => "EUR",
    "receiverList.receiver.email" => $receiver_email,
    "receiverList.receiver.amount" => $amount,
    "paymentType"=>"DIGITALGOODS"
);

// convert payload array into url encoded query string
$body_data = http_build_query($bodyparams, "", chr(38));

// "X-PAYPAL-SECURITY-SIGNATURE: " . $API_Signature . "\r\n" .
try {

//create request and add headers
    $params = array("http" => array(
            "method" => "POST",
            "content" => $body_data,
            "header" => "X-PAYPAL-SECURITY-USERID: " . $API_UserName . "\r\n" .
            "X-PAYPAL-SECURITY-PASSWORD: " . $API_Password . "\r\n" .
            "X-PAYPAL-SECURITY-SIGNATURE: " . $API_Signature . "\r\n" .
            "X-PAYPAL-APPLICATION-ID: " . $API_AppID . "\r\n" .
            "X-PAYPAL-REQUEST-DATA-FORMAT: " . $API_RequestFormat . "\r\n" .
            "X-PAYPAL-RESPONSE-DATA-FORMAT: " . $API_ResponseFormat . "\r\n"
            ));


//create stream context
    $ctx = stream_context_create($params);


//open the stream and send request
    $fp = @fopen($url, "r", false, $ctx);

//get response
    $response = stream_get_contents($fp);

//check to see if stream is open
    if ($response === false) {
        throw new Exception("php error message = " . "$php_errormsg");
    }

//close the stream
    fclose($fp);

//parse the ap key from the response

    $keyArray = explode("&", $response);

    foreach ($keyArray as $rVal) {
        list($qKey, $qVal) = explode("=", $rVal);
        $kArray[$qKey] = $qVal;
    }
 
//print the response to screen for testing purposes
    If ($kArray["responseEnvelope.ack"] == "Success") {

        foreach ($kArray as $key => $value) {
            //echo $key . ": " . $value . "<br/>";
            if($key=="payKey"){
               echo  $value;
            }
        }
        
    } else {
        echo "FAIL";
        //echo 'ERROR Code: ' . $kArray["error(0).errorId"] . " <br/>";
        //echo 'ERROR Message: ' . urldecode($kArray["error(0).message"]) . " <br/>";
    }
} catch (Exception $e) {
    echo "FAIL";
    error_log("Message: ||" . $e->getMessage() . "||");
}
?>
