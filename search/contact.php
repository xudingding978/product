<?php 
$to = $_REQUEST['sendto'] ; 
$requesters_email = $_REQUEST['email'] ; 
$name = $_REQUEST['firstname'] ; 
$headers = "From: URGENT Website Enquiry <website-enquires@catherinenewton.com>";
//$headers .= "MIME-Version: 1.0\r\n";
//$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n"; 
$subject = "URGENT " . $_REQUEST['emailsubject'] . " from " . $requesters_email; 

$fields = array(); 
$fields{"firstname"} = "Name"; 
$fields{"email"} = "Email"; 
$fields{"message"} = "Message"; 

$body = "We have received the following information:\n\n"; 
foreach($fields as $a => $b){ 
	$body .= sprintf("%20s: %s\n",$b,$_REQUEST[$a]); 
	} 

$headers2 = "From: Catherine Newton <catherine@catherinenewton.com>"; 
$subject2 = "Your Website enquiry for CatherineNewton.com has been sent.";
$autoreply = "Hi " . $name . ".\n\n";
$autoreply .= "Thank you for contacting us at CatherineNewton.com.\n\n"; 
$autoreply .= "We love helping entrepreneurs like you to accelerate their business through \n";
$autoreply .= "easy Mindset and Marketing how-to's so you can gain clarity, gain clients and gain cashflow!\n\n";
$autoreply .= "You will hear from us very soon.\n\n";
$autoreply .= "In the meantime we hope your day is going splendidly!\n\n";
$autoreply .= "--\n With joy,\n Catherine Newton\n\n\n Soul Intentions\n \"Enriching you to create enough money, enough time and enough energy for what's truly important in life\"\n\n";
$autoreply .= "=======================================================\n";
$autoreply .= "email:         catherine@catherinenewton.com\n";
$autoreply .= "web:           http://catherinenewton.com\n";
$autoreply .= "mobile:       +6421360891\n";
$autoreply .= "phone:        +6495752277\n\n";
$autoreply .= "postal:         P.O Box 25-132\n";
$autoreply .= "                   St Heliers\n";
$autoreply .= "                   Auckland 1740\n\n\n";

function msmtp($To, $Subject, $Body, $Headers, $From) {
	$Email = "To: ".$To."\nSubject: ".$Subject."\n".$Headers."\n\n".$Body."\n";
	exec("echo '".$Email."' | msmtp --from=".$From." ".$To);
	return true;
}


if($requesters_email == '') {print "You have not entered an email, please go back and try again";} 
else { 
if($name == '') {print "You have not entered a name, please go back and try again";} 
else {
//send email to Catherine 
$send = msmtp($to, $subject, $body, $headers, 'catherine@catherinenewton.com');

// send email to the requester
$send2 = msmtp($requesters_email, $subject2, $autoreply, $headers2, 'catherine@catherinenewton.com');

if($send2) 
{header( "Location: http://catherinenewton.com/forms/thankyou.php?firstname=".$name);} 
else 
{print "We encountered an error sending your mail, please notify support@catherinenewton.com"; } 
}
}
?>
