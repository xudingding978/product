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

    public function linkCategory($sub_category){
        
         $description="";
        for ($i=0;$i<sizeof($sub_category);$i++)
        {
            $description=$description . "<li>".$sub_category[$i]."</li>";
        }
        return $description;
    }
    public function actionCreate() {
        $request_json = file_get_contents('php://input');
        $request = CJSON::decode($request_json, true);
     
        
        $request_arr = $request['email'];
              
        $display_email = $request_arr['display_email'];
   
        $email_destination = $request_arr['email_destination'];

       $sub_category=explode(",", $request_arr['project_sub_category_item']);
              // error_log(var_export($sub_category , true));
        
       $description=$this->linkCategory($sub_category);
               
        
         
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
                    $email_destination, 'enquiries@trendsideas.com', $display_email
                )
            ),
            "Message" => array(
                "Subject" => array(
                    "Data" => $subject_prefix . $request_arr['email_subject']
                ),
                "Body" => array(
                    "Html" => array(
                        "Data" => $this->getEmailForm($request_arr['email_subject'], $request_arr['email_body'], $request_arr['display_name'], $request_arr['recieve_profile'],
                                $request_arr['project_timeframe'],$request_arr['project_category'],$request_arr['project_budget'] ,$request_arr['project_experience'],$description
                             
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

    public function getEmailForm($subject, $emailBody, $sendPersonName, $recieveProfile,$timeframe,$category,$budget,$experience,$description) {
        return '<div>
    <div style="position: relative;background: #fff; width: 600px; height: auto; margin: auto; box-shadow: 0px 0px 8px #555; border-radius: 3px 3px 0 0;">
        <div style="width:600px; height:132px;overflow:hidden; margin-bottom:20px;">
            <img src="https://s3-ap-southeast-2.amazonaws.com/develop.devbox/header.jpg"/>
        </div>
        <table style="padding: 0 80px 0 130px; width: 100%;  display: table;border-collapse: separate;border-spacing: 4px;color: #666; font-family: Arial; margin-bottom: 5px; font-size: 13px; line-height: 16px;">
            <tbody style="display: table-row-group; vertical-align: middle; border-color: inherit;">
                <tr>
                    <td>Project Category:</td>
                    <td> 
                        <div style="display: block;">
                            ' . $category . '
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Project Timeframe:</td>
                    <td> 
                        <div style="display: block;">
                            ' . $timeframe . '
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Project Budget:</td>
                    <td> 
                        <div style="display: block;">
                              ' . $budget . '
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Project Experience:</td>
                    <td>
                        <div style="display: block;">
                             ' . $experience . '
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>I want help in:</td>
                    <td>
                        <div style="display: block;">
                        <ul style="padding:0;">                               
                               '. $description.'                                              
                         </ul>
                                
                        </div>
                        <div style="display: block;">
                                                
                        </div>
                        <div style="display: block;">
                                       
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>   
        <div style="width:350px;margin: auto;padding: 20px 0;">
            <div style="color: #555;font-family:Arial;margin-bottom: 5px;font-size: 15px;line-height:16px;font-weight: bold;">Subject: ' . $subject . '</div>
                <div style="color: #555;font-family:Arial;margin-bottom: 5px;font-size: 15px;line-height:16px;font-weight: bold;">From: ' . $sendPersonName . '</div>
                    <div style="color: #555;font-family:Arial;margin-bottom: 5px;font-size: 15px;line-height:16px;font-weight: bold;">To: ' . $recieveProfile . '</div>
            <div style="color:#666;font-family:Arial;margin:0;font-size:11px;line-height:16px">' .
                $emailBody . '
            </div> 
        </div>
        
   <div style="width:600px; height: 20px;overflow:hidden;">
            <img src="https://s3-ap-southeast-2.amazonaws.com/develop.devbox/contactus-botbar.png"/>
        </div>
        
    </div>
</div>';
    }

}

?>
