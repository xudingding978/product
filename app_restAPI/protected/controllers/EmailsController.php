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

    public function linkCategory($sub_category) {

        $description = "";
        for ($i = 0; $i < sizeof($sub_category); $i++) {
            $description = $description . "<li>" . $sub_category[$i] . "</li>";
        }
        return $description;
    }

    public function actionCreate() {




        $request_json = file_get_contents('php://input');
        $request = CJSON::decode($request_json, true);


        $request_arr = $request['email'];

        $display_email = $request_arr['display_email'];

        $email_destination = $request_arr['email_destination'];

        $sub_category = explode(",", $request_arr['project_sub_category_item']);

        $description = $this->linkCategory($sub_category);



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
                        "Data" => $this->getEmailForm($request_arr['email_subject'], $request_arr['email_body'], $request_arr['display_name'], $request_arr['recieve_profile'], $request_arr['project_timeframe'], $request_arr['project_category'], $request_arr['project_budget'], $request_arr['project_experience'], $description
                        )
                    )
                ),
            ),
            "ReplyToAddresses" => array($display_email)
        );
        $response = $amazonSes->sendEmail($args);
        $this->sendResponse(200, $response);
    }

    public function actionForgetpassword() {
        $request_json = file_get_contents('php://input');
        
        $request = CJSON::decode($request_json, true);


        $email = $request[0];
        $username = $request[1];
        $password = $request[2];

        $domain = $this->getDomain();
        $configuration = $this->getProviderConfigurationByName($domain, "SES");
        $amazonSes = Aws\Ses\SesClient::factory($configuration);
        $platformSettings = $this->getProviderConfigurationByName($domain, "Communications");
        $platformEmail = $platformSettings['support']['email'];
        $subject_prefix = 'Forget your password';
        $args = array(
            "Source" => $platformEmail,
            "Destination" => array(
                "ToAddresses" => array(
                    $email),
                "BccAddresses"=>array(
                   $platformEmail)
            ),
            "Message" => array(
                "Subject" => array(
                    "Data" => $subject_prefix
                ),
                "Body" => array(
                    "Html" => array(
                        "Data" => $this->forgetEmailForm($username, $password)
                    )
                ),
            ),
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

    public function getEmailForm($subject, $emailBody, $sendPersonName, $recieveProfile, $timeframe, $category, $budget, $experience, $description) {
        return '
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#E5E5E5;">
                <tbody>
                    <tr>
                        <td align="center">
                            <table cellpadding="0" cellspacing="0" border="0" style="background:#fff;">
                                <tbody>
                                    <tr>
                                        <td>
                                            <img src="https://s3-ap-southeast-2.amazonaws.com/develop.devbox/header.jpg"/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="center">
                                            &nbsp;<br />
                                            <table cellpadding="10" cellspacing="0" width="90%" style="color:#666;font-size:13px;line-height:150%;font-family:Helvetica, Arial, San-Serif;text-align:left;background:#e5e5e5;-webkit-border-radius: 3px;-moz-border-radius: 3px;border-radius: 3px;">
                                                <tr>
                                                    <td valign="top">Project Category:</td>
                                                    <td valign="top">
                                                        <div style="display: block;">
                                                            ' . $category . '
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td valign="top">Project Timeframe:</td>
                                                    <td valign="top">
                                                        <div style="display: block;">
                                                            ' . $timeframe . '
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td valign="top">Project Budget:</td>
                                                    <td valign="top">
                                                        <div style="display: block;">
                                                            ' . $budget . '
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td valign="top">Project Experience:</td>
                                                    <td valign="top">
                                                        <div style="display: block;">
                                                            ' . $experience . '
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td valign="top">I want help in:</td>
                                                    <td valign="top">
                                                        <div style="display: block;">
                                                            <ul style="padding:0;margin:0;">
                                                                ' . $description . '
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
                            &nbsp;<br />
                            <hr style="height:1px;color:#0088CC;background:#0088CC;width:90%;border:0 none;" />
                            &nbsp;<br />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <table cellpadding="10" cellspacing="0" border="0" width="100%" style="color:#363636;font-family:Helvetica, Arial, San-Serif;font-size:14px;line-height:150%;text-align:left;">
                                <tbody>
                                    <tr>
                                        <td>
                                            Subject: ' . $subject . '
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            From: ' . $sendPersonName . '
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            To: ' . $recieveProfile . '
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            ' . $emailBody . '
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            &nbsp;<br />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src="https://s3-ap-southeast-2.amazonaws.com/develop.devbox/contactus-botbar.png"/>
                            <br />&nbsp;
                        </td>
                    </tr>
                </tbody>
            </table>
            </td>
            </tr>
            </tbody>
     </table>
';
    }

    public function forgetEmailForm($username, $password) {
        return '
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#E5E5E5;">
                <tbody>
                    <tr>
                        <td align="center">
                            <table cellpadding="0" cellspacing="0" border="0" style="background:#fff;">
                                <tbody>
                                    <tr>
                                        <td>
                                            <img src="https://s3-ap-southeast-2.amazonaws.com/develop.devbox/header.jpg"/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="center">
                                            &nbsp;<br />
                                            <table cellpadding="10" cellspacing="0" width="90%" style="color:#666;font-size:13px;line-height:150%;font-family:Helvetica, Arial, San-Serif;text-align:left;background:#e5e5e5;-webkit-border-radius: 3px;-moz-border-radius: 3px;border-radius: 3px;">
                                                <tr>
                                                    <td valign="top">Please return to the site and log in using the following information.</td> 
                                                </tr>
                                                <tr>
                                                    <td valign="top">User Name: ' . $username . '</td>
                                                </tr>
                                                 <tr>
                                                    <td valign="top">Password: ' . $password . '</td>
                                                </tr>                        
                                </tbody>
                            </table>
                            &nbsp;<br />
                            <hr style="height:1px;color:#0088CC;background:#0088CC;width:90%;border:0 none;" />
                            &nbsp;<br />
                        </td>
                    </tr>
            
                </tbody>
            </table>
            </td>
            </tr>
            </tbody>
     </table>
';
    }

}

?>
