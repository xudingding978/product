<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link media="screen, projection" rel="stylesheet" href="styles/screen-new.css"/>
<title>Advertise</title>
</head>
<body>
<div id="wrapenquiry">

<div id="headerenquiry" class="group">
	<div id="icon_contactus">
    	<img width="237" height="66" src="images/icon_advertise.gif" alt="advertise" />
    </div>
</div><!--header-->

<div class="group">
	<div class="main">
    <form id="ContactUs" class="group" method="post" action="contact.php">
    	<fieldset id="contact">
            <ul id="enquiryform">
                <li>
                    <label for="Name" title="Name">NAME:</label>
                    <input id="Name" name="Name" type="text"/>
                </li>
                <li>
                    <label for="Company" title="Company">COMPANY:</label>
                    <input id="Company" name="Company" type="text" />
                </li>
                <li>
                    <label for="Email" title="Email">EMAIL:</label>
                    <input id="Email" name="Email" type="text" />
                </li>
                <li>
                    <label for="Phone" title="Phone">PHONE:</label>
                    <input id="Phone" name="Phone" type="text" />
                </li>
                <li>
                    <label for="Message" title="Message">MESSAGE:</label>
                    <textarea id="Message" name="Message" type="text" width="340px" rows="8" cols="55" onclick="this.focus();this.select()">Enter your message here.</textarea> 
                </li>
                <fieldset id="submit">
                    <input class="submitbutton" type="submit" id="submitbutton" src="images/submit.gif" alt="click to send message" title="click to send message" />
                </fieldset>
            </ul>
        </fieldset>
    </form>
    </div>
</div>

</div><!--div-->
</body>
</html>
