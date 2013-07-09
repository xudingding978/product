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
    //    error_log(var_export($request_arr,true));
        
        $display_email = $request_arr['display_email'];
        $email_destination = $request_arr['email_destination'];
        $domain = $this->getDomain();
        $configuration = $this->getProviderConfigurationByName($domain, "SES");
        $amazonSes = Aws\Ses\SesClient::factory($configuration);
        $platformSettings = $this->getProviderConfigurationByName($domain, "Communications");
        $platformEmail = $platformSettings['direct_enquiries']['email'];
        $subject_prefix = $platformSettings['direct_enquiries']['subject_prefix'];    
        $args = array(
            "Source" => $platformEmail,
            "Destination" => array(
                "ToAddresses" => array(
                    $email_destination
                )
            ),
            "Message" => array(
                "Subject" => array(
                    "Data" => $subject_prefix. $request_arr['email_subject']
                ),
                "Body" => array(
                    "Text" => array(
                        "Data" =>$request_arr['email_body']
                    )
                ),
            ),
            "ReplyToAddresses" => array($display_email)
        );
        $response = $amazonSes->sendEmail($args);
          $this->sendResponse(200, $response);
     //   $this->sendResponse(204);
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
