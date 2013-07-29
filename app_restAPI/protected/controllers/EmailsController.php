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
        $request = CJSON::decode($request_json, true);
        $request_arr = $request['email'];

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
                    "Data" => $subject_prefix . $request_arr['email_subject']
                ),
                "Body" => array(
                    "Html" => array(
                        "Data" => $this->getEmailForm($request_arr['email_subject'], $request_arr['email_body'],$request_arr['display_name'],
                                $request_arr['recieve_profile']
                                )
                    )
                ),
            ),
            "ReplyToAddresses" => array($display_email)
        );
        $response = $amazonSes->sendEmail($args);
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

    public function getEmailForm($subject, $emailBody,$sendPersonName,$recieveProfile) {
        return '<div>
    <div style="position: relative;background: #fff; width: 600px; height: auto; margin: auto; box-shadow: 0px 0px 8px #555; border-radius: 3px 3px 0 0;">
        <div style="width:600px; height:132px;overflow:hidden; margin-bottom:20px;">
            <img src="https://s3-ap-southeast-2.amazonaws.com/develop.devbox/header2.jpg"/>
        </div>
        <table style="padding: 0 80px 0 130px; width: 100%;font-size: 14px;  display: table;border-collapse: separate;border-spacing: 4px;">
            <tbody style="display: table-row-group; vertical-align: middle; border-color: inherit;">
                <tr>
                    <td>Project Category:</td>
                    <td> 
                        <div style="display: block;">
                            Bathrooms
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Project Timeframe:</td>
                    <td> 
                        <div style="display: block;">
                            1-2 months
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Project Budget:</td>
                    <td> 
                        <div style="display: block;">
                            Less than 5k
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Project Experience:</td>
                    <td>
                        <div style="display: block;">
                            First Time 
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>I want help in:</td>
                    <td>
                        <div style="display: block;">
                            Appliances                           
                        </div>
                        <div style="display: block;">
                            Design                            
                        </div>
                        <div style="display: block;">
                            Products                          
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>   
        <div style="width:350px;margin: auto;padding: 20px 0;">
            <div style="color:#666;font-family:Arial;margin-bottom: 5px;font-size:13px;line-height:16px">Subject: ' . $subject . ' </div>
                <div style="color:#666;font-family:Arial;margin-bottom: 5px;font-size:13px;line-height:16px">From: ' . $sendPersonName . ' </div>
                    <div style="color:#666;font-family:Arial;margin-bottom: 5px;font-size:13px;line-height:16px">To: ' . $recieveProfile . ' </div>
            <div style="color:#666;font-family:Arial;margin:0;font-size:11px;line-height:16px">
               ' . $emailBody . '
            </div> 
        </div>
        
   <div style="width:600px; height:132px;overflow:hidden; margin-bottom:20px;">
            <img src="https://s3-ap-southeast-2.amazonaws.com/develop.devbox/contactus-botbar.png"/>
        </div>
        
    </div>
</div>';
    }

}

?>
