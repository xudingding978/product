<?php

header("Access-Control-Allow-Origin: *");
header('Content-type: *');

header('Access-Control-Request-Method: *');
header('Access-Control-Allow-Methods: PUT, POST, OPTIONS,GET');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

class EmailsController extends Controller {

    const JSON_RESPONSE_ROOT_SINGLE = 'email';
    const JSON_RESPONSE_ROOT_PLURAL = 'emails';

    public function actionIndex() {
        
    }

    public function actionCreate() {
        $request_json = file_get_contents('php://input');
        $request_arr = CJSON::decode($request_json, true);
        $request_arr = $request_arr['email'];
        error_log(var_export($request_arr, true));
        $AWS_KEY = "AKIAJKVKLIJWCJBKMJUQ";
        $AWS_SECRET_KEY = "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";
        $amazonSes = Aws\Ses\SesClient::factory(
                        array("key" => $AWS_KEY, "secret" => $AWS_SECRET_KEY, 'region' => 'us-east-1')
        );
        
        
     $args=array(
        "Source"=>"support@the-ebusiness-company.com",
         "Destination"=>array(
             "ToAddresses"=>array(
           "huangkingsley@gmail.com"
             )
         ),
    "Message"=>array(
        "Subject"=>array(
            "Data"=>"first email from ses"
        ),
        "Body"=>array(
          "Text"=>array(
              "Data"=>"dddddddddddd"
          )  
        ),
    ),
         "ReplyToAddresses"=>array("jason@the-ebusiness-company.com")
           
         
     );


        
        $response = $amazonSes->sendEmail($args
   
        );
//        $email = $_REQUEST['email'];
//        $subject = $_REQUEST['subject']; display_email
//        $message = $_REQUEST['message'];
        //       mail($request_arr["email_destination"], $subject, $message, "From:" . $email);
        //       mail($request_arr["email_destination"], $request_arr["email_subject"], $request_arr["email_subject"], "From:" . $request_arr["display_email"]);
        $this->sendResponse(200, $response);
    }

    public function actionRead() {
        
    }

    public function actionUpdate() {
        
    }

    public function actionDelete() {
        try {
            
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
    }

}

?>
