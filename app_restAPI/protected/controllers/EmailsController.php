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
                "BccAddresses" => array(
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
        $this->sendResponse(200, 1);
    }

    public function actionConfirmationemail() {
        $request_json = file_get_contents('php://input');

        $request = CJSON::decode($request_json, true);


        $username = $request[0];
        $password = $request[1];


        $domain = $this->getDomain();
        $configuration = $this->getProviderConfigurationByName($domain, "SES");
        $amazonSes = Aws\Ses\SesClient::factory($configuration);
        $platformSettings = $this->getProviderConfigurationByName($domain, "Communications");
        $platformEmail = $platformSettings['support']['email'];
        $subject_prefix = 'Confirmation of registration';
        $args = array(
            "Source" => $platformEmail,
            "Destination" => array(
                "ToAddresses" => array(
                    $username),
                "BccAddresses" => array(
                    $platformEmail)
            ),
            "Message" => array(
                "Subject" => array(
                    "Data" => $subject_prefix
                ),
                "Body" => array(
                    "Html" => array(
                        "Data" => $this->confirmationEmailForm($username, $password)
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
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title></title>
    </head>
    <body style="background: #E5E5E5; margin: 0; padding: 0;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0">
            <tbody>
                <tr>
                    <td align="center">
                        <br />
                        &nbsp
                        <table width="600" cellpadding="0" cellspacing="0" border="0" style="background: #fff;">
                            <tbody>
                                <tr>
                                    <td>
                                        <img src="https://s3-ap-southeast-2.amazonaws.com/develop.devbox/header.jpg" alt="Trends"
                                             style="float: left;" />
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center">
                                        &nbsp;<br />
                                        <table cellpadding="0" cellspacing="0" border="0" width="90%" style="color: #666666;
                                               font-family: Helvetica, Arial, San-Serif; font-size: 14px; line-height: 150%;
                                               text-align: left;">
                                            <tbody>
                                                <tr>
                                                    <td align="right" width="56">
                                                        From:&nbsp;
                                                    </td>
                                                    <td align="left" width="484">
                                                        ' . $sendPersonName . '
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td align="right" width="56">
                                                        To:&nbsp;
                                                    </td>
                                                    <td align="left" width="484">
                                                        ' . $recieveProfile . '
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td align="right" width="56">
                                                        Subject:&nbsp;
                                                    </td>
                                                    <td align="left" width="484">
                                                        ' . $subject . '
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colspan="2">
                                                        <br />
                                                        ' . $emailBody . '
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        &nbsp;<br />
                                        <hr style="height: 1px; color: #0088CC; background: #0088CC; width: 90%; border: 0 none;">
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center">
                                        &nbsp;<br />
                                        <table cellpadding="10" cellspacing="0" width="90%" border="0" style="color: #666;
                                               font-size: 13px; line-height: 150%; font-family: Helvetica, Arial, San-Serif;
                                               text-align: left; background: #e5e5e5; -webkit-border-radius: 3px; -moz-border-radius: 3px;
                                               border-radius: 3px;">
                                            <tbody>
                                                <tr>
                                                    <td valign="top">
                                                        Project Category:
                                                    </td>
                                                    <td valign="top">
                                                        <div style="display: block;">
                                                            ' . $category . '
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td valign="top">
                                                        Project Timeframe:
                                                    </td>
                                                    <td valign="top">
                                                        <div style="display: block;">
                                                            ' . $timeframe . '
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td valign="top">
                                                        Project Budget:
                                                    </td>
                                                    <td valign="top">
                                                        <div style="display: block;">
                                                            ' . $budget . '
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td valign="top">
                                                        Project Experience:
                                                    </td>
                                                    <td valign="top">
                                                        <div style="display: block;">
                                                            ' . $experience . '
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td valign="top">
                                                        I want help in:
                                                    </td>
                                                    <td valign="top">
                                                        <div style="display: block;">
                                                            <ul style="padding: 0; margin: 0;">
                                                                ' . $description . '
                                                            </ul>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        &nbsp;<br />
                                        <hr style="height: 1px; color: #0088CC; background: #0088CC; width: 90%; border: 0 none;" />
                                        &nbsp;<br />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src="http://develop.devbox.s3.amazonaws.com/email-bottom.jpg" style="float: left;" />
                                        <br />
                                        &nbsp;
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        &nbsp;<br />
                    </td>
                </tr>
            </tbody>
        </table>
    </body>
</html>
';
    }

    public function forgetEmailForm($username, $password) {
        return '
           <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title></title>
    </head>
    <body style="background: #E5E5E5; margin: 0; padding: 0;">
        <table width="100%" cellpadding="0" cellspacing="0">
            <tbody>
                <tr>
                    <td align="center">
                        &nbsp;<br />
                        <br />&nbsp
                        <table cellpadding="0" cellspacing="0" border="0" style="background: #fff;" width="600">
                            <tbody>
                                <tr>
                                    <td>
                                        <img src="https://s3-ap-southeast-2.amazonaws.com/develop.devbox/header.jpg" style="float:left;" />
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center">
                                        &nbsp;<br />
                                        <table cellpadding="10" cellspacing="0" width="90%" style="color: #666; font-size: 13px;
                                               line-height: 150%; font-family: Helvetica, Arial, San-Serif; text-align: left;">
                                            <tr>
                                                <td valign="top">
                                                    <h1 style="color: #05B1E5;font-size:2em;font-weight:normal;margin:0;line-height:200%;">
                                                        Forgot your password?</h1>
                                                    No problem, your password has now been reset.


                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <table align="left" style="color: #05B1E5; font-size: 13px; line-height: 150%; font-family: Helvetica, Arial, San-Serif;
                                                           text-align: left;" cellpadding="0" cellspacing="0">
                                                        <tr>
                                                            <td valign="top">
                                                                User name: ' . $username . '
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td valign="top">
                                                                New password: <span style="font-weight: bold;">' . $password . '</span>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    If you did not choose to reset your password, please immediately contact:
                                                    <a href="mailto:support@trendsideas.com" style="color: #05B1E5;">support@trendsideas.com</a> &nbsp;<br />&nbsp;<br />
                                                    <hr style="height: 1px; color: #0088CC; background: #0088CC; width: 100%; border: 0 none;margin:0;" />
                                                </td>
                                            </tr>
                                        </table>
                                        &nbsp;<br />
                                        <img src="http://develop.devbox.s3.amazonaws.com/email-bottom.jpg" style="float: left;" />
                                        <br />&nbsp;
                                    </td>
                                </tr>
    
                            </tbody>
                        </table>
                        &nbsp;<br />
                    </td>
                </tr>
            </tbody>
        </table>
    </body>
</html>
';
    }

    public function confirmationEmailForm($username, $password) {
        return '
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title></title>
    </head>
    <body style="background: #E5E5E5; margin: 0; padding: 0;">
        <table width="100%" cellpadding="0" cellspacing="0">
            <tbody>
                <tr>
                    <td align="center">
                        &nbsp;<br />
                        <br />
                        <table cellpadding="0" cellspacing="0" border="0" style="background: #fff;" width="600">
                            <tbody>
                                <tr>
                                    <td>
                                        <img src="https://s3-ap-southeast-2.amazonaws.com/develop.devbox/header.jpg" />
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center">
                                        &nbsp;<br />
                                        <table cellpadding="10" cellspacing="0" width="90%" style="color: #666; font-size: 13px;
                                               line-height: 150%; font-family: Helvetica, Arial, San-Serif; text-align: left;">
                                            <tr>
                                                <td valign="top">
                                                    <h1  align ="center" style="color: #05B1E5; font-size: 2em; font-weight: normal; margin: 0; line-height: 200%;">
                                                        Welcome to myTrends !</h1>
                                                    Here is your registration information – please keep this email in a safe place.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <table align="left" style="color: #05B1E5; font-size: 13px; line-height: 150%; font-family: Helvetica, Arial, San-Serif;
                                                           text-align: left;" cellpadding="0" cellspacing="0">
                                                        <tr>
                                                            <td valign="top">
                                                                User name: ' . $username . '
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td valign="top">
                                                                Password: ' . $password . '
                                                            </td>
                                                        </tr>
                                                    </table>

                                                </td>
                                            </tr>
                                            <tr>
                                                <td valign="top">
                                                    <hr style="text-align:center;height: 1px; color: #0088CC; background: #0088CC; width: 100%; border: 0 none;margin:0;" />
                                                </td>
                                            </tr>
                                                         <tr>
                                                <td valign="top">
                                                   Thank you for signing up to myTrends! To activate your account, simply click on the link below. 
                                                </td>
                                            </tr>
                                                                 <tr>
                                                            <td valign="top">
                                                        <a href="http://develop.trendsideas.com:9000/#/verify/' . $username . '?' . $password . '">  Click here to activate your account  </a>
                                                            </td>
                                                        </tr> 
                                 
                                                            <tr>
                                                <td valign="top">
                                                      Thank you! 
<br/>
                                                    The team @ myTrends 
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center">
                                        &nbsp;<br />
                                        <img src="http://develop.devbox.s3.amazonaws.com/email-bottom.jpg" style="float: left;" />
                                        <br />&nbsp;
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        &nbsp;<br />
                    </td>
                </tr>
            </tbody>
        </table>
    </body>
</html>
';
    }

}

?>
