<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<?php
$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
require_once $path_doc_root . '/include/recaptchalib.php';
$geo_data = json_decode(file_get_contents('http://api.geoio.com/q.php?key=ZNDbVJwPNJvyjDMb&qt=geoip&d=json&q=' . $_SERVER['REMOTE_ADDR']), true);
?>  
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="shortcut icon" href="/images/icon.ico" type="image/x-icon"/>        
        <link href="../administrator/styles/themes/redmond/jquery-theme.css" type="text/css" rel="stylesheet">
            <link href="/site.css" rel="stylesheet" type="text/css"/>
            <link href="/dashboard/styles/register.css" rel="stylesheet" type="text/css"/>
            <link href="/custom.css" rel="stylesheet" type="text/css"/>
            <script type="text/javascript" src="../administrator/scripts/jquery-min.js"></script>
            <script type="text/javascript" src="../administrator/scripts/jquery-ui.min.js"></script>
            <title>Online Directory System | Login | Register</title>      
            <script language="javascript">
                
                var correctHTML="<img class='imgVerfication' src='/dashboard/image/correct.ico' height='30' width='30'/>";
                var incorrectHTML="<img class='imgVerfication' src='/dashboard/image/icorrect.ico' height='30' width='30'/>";
                var processingHTML="<img class='imgVerfication' src='/dashboard/image/loading.ico' height='30' width='30'/>";
                var invalidHTML="<img class='imgVerfication' src='/dashboard/image/icorrect.ico' height='30' width='30'/>";
                
                function checkEmail(emailadd,isinsert) {
                    var email = emailadd;
                    var filter = /^([a-zA-Z0-9_+\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                    if (!filter.test(email)) {
                        if(isinsert){
                            $('#emailinfo').html(invalidHTML); 
                        }
                        return false;
                    }else{
                        if(isinsert){                                            
                            $('#emailinfo').html(correctHTML); 
                        }
                        return true;
                    }

                }

                var RecaptchaOptions = {
                    theme: 'clean',
                    tabindex : 5
                };
                
                var emailok = false;
                $(document).ready(function(){
                    var boxes = $(".input_s1_normal");
                    jQuery("#country option").each(function(){
                        if(jQuery(this).text() == '<?php echo $geo_data[0][2] ?>'){
                            jQuery(this).attr("selected","selected");               
                            return false;
                        }
                    }); 
                    if(localStorage.selectedpanel==0){
                        $('#email').blur(function() {
                            var result=checkEmail(email.attr("value"),true);
                            if(!result){
                                return;
                            }
                            $('#emailinfo').html(processingHTML);                       
                            $('#action').val('checkemailexist');
                            $.post("/common/callbacks/clientregistration.php",
                            $("#registrationform").serialize(),
                            function(data) {                
                                if($.trim(data)=="Email OK"){
                                    $('#emailinfo').html(correctHTML);
                                    emailok = true;
                                }else{
                                    $('#emailinfo').html(incorrectHTML); 
                                }
                            }
                        );            
           
                        }); 
                    }

                    boxes.focus(function(){                       
                        $(this).addClass("input_s1_focus");
                    });
                    //reset on blur
                    boxes.blur(function(){                       
                        $(this).removeClass("input_s1_focus");
                    });
                });


                

                function DoReLogin()
                {    
                    $.post( 
                    "/common/callbacks/clientregistration.php",
                    $("#registrationform").serialize(),
                    function(data) {
                        if($.trim(data)=='Success'){ 
                            parent.location='/dashboard';
                        }else{    
                            document.getElementById("errormsg").innerHTML = "&nbsp;</br><b>Invalid user name or password.  Please try again.</b></br><i>(Please note: Both fields are case sensitive)</i></br>&nbsp;";
                        }     
           
                    }
                );
        
                    return false;
                }
    
            </script>

    </head>
    <body class="registration">
        <div class="nav"></div>
        <div class="document" style="width: 100%; background-color: white; ">
            <div class="forms" style="width: 500px; margin: 0 auto; float:none;">
                <table border="0" cellpadding="2" cellspacing="0">
                    <tr>
                        <td>
                            <img src="../images/spacer.gif" height="28px" width="100%" border="0"/>
                        </td>
                    </tr>
                    <tr>
                        <td class="BodyText">
                            <h2 class="StepTitle">Step 1 :Create your new account</h2>

                            <div id="submitform" >
                                <form id="registrationform" action="registrationprocess.php" method="post">
                                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                        <tr>
                                            <td>
                                                <img src="../images/spacer.gif" height="10px" width="10px" border="0"/>
                                            </td>
                                            <td>
                                                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                    <tr>
                                                        <td>
                                                            <img src="image/secure.gif" height="16px" width="16px"/>
                                                            <b><font color="#C00000">Secure Registration Form</font></b>
                                                        </td>
                                                        <td>
                                                            <img src="../images/spacer.gif" height="8px" width="60%" border="0"/>
                                                        </td>
                                                        <td width="8">&nbsp;</td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan="3" width="100%">
                                                            <img src="../images/spacer.gif" height="28px" width="100%" border="0"/>
                                                        </td>                
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <table>
                                                                <tr>
                                                                    <td class="lablesRegister" width="100" align="left">
                                                                        First Name&nbsp;&nbsp;
                                                                    </td>
                                                                    <td width="8">&nbsp;</td>
                                                                    <td  class="lablesRegister" width="100" align="left">
                                                                        Last Name&nbsp;&nbsp;
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="lablesRegister" align="left">
                                                                        <input class="register_input firstname" type="text" name="firstname" id="firstname" tabindex="1"  maxlength="255" autofocus="autofocus" class="input_s1_normal"/>
                                                                    </td>
                                                                    <td width="8">&nbsp;</td>
                                                                    <td class="lablesRegister" align="left">
                                                                        <input class="register_input lastname" type="text" name="lastname" id="lastname" tabindex="2"  maxlength="255" autofocus="autofocus" class="input_s1_normal"/>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan="3" width="100%">
                                                            <img src="../images/spacer.gif" height="15px" width="100%" border="0"/>
                                                        </td>                
                                                    </tr>
                                                    <tr>
                                                        <td class="lablesRegister" width="100" align="left" colspan="3">
                                                            Email Address
                                                        </td>
                                                        <td width="8">
                                                            &nbsp;
                                                        </td>
                                                        <td width="8">
                                                            &nbsp;
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <table>

                                                                <tr>
                                                                    <td class="lablesRegister" align="left">
                                                                        <input  width="100px" id="email" name="email" class="register_input email" tabindex="3"  maxlength="255"  class="input_s1_normal"/>
                                                                    </td>
                                                                    <td width="2">&nbsp;</td>
                                                                    <td class="lablesRegister" align="left" valign="middle">
                                                                        <div id="emailinfo" class="emailinfo"> </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>                                                   
                                                    <tr>
                                                        <td colspan="3" width="100%">
                                                            <img src="../images/spacer.gif" height="15px" width="100%" border="0"/>
                                                        </td>                
                                                    </tr>
                                                    <tr>
                                                        <td class="lablesRegister" width="100" align="left">
                                                            Password&nbsp;&nbsp;
                                                        </td>
                                                        <td width="8">
                                                            &nbsp;
                                                        </td>
                                                        <td width="8">
                                                            &nbsp;
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="lablesRegister">
                                                            <input type="password" id="password" name="password" class="register_input password" tabindex="4"  maxlength="64" class="input_s1_normal"/>
                                                        </td>
                                                        <td width="8">
                                                            &nbsp;
                                                        </td>
                                                        <td width="8">
                                                            &nbsp;
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan="3" width="100%">
                                                            <img src="../images/spacer.gif" height="15px" width="100%" border="0"/>
                                                        </td>                
                                                    </tr>
                                                    <tr>
                                                        <td class="lablesRegister" width="100" align="left">
                                                            Confirm Password&nbsp;&nbsp;
                                                        </td>
                                                        <td width="8">
                                                            &nbsp;
                                                        </td>
                                                        <td width="8">
                                                            &nbsp;
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="lablesRegister">
                                                            <input type="password" id="confirmpassword" name="confirmpassword" class="register_input password" tabindex="4"  maxlength="64" class="input_s1_normal"/>
                                                        </td>
                                                        <td width="8">
                                                            &nbsp;
                                                        </td>
                                                        <td width="8">
                                                            &nbsp;
                                                        </td>
                                                    </tr> 



                                                    <?php if ($_GET["displaystate"] != 0) { ?>

                                                        <tr>
                                                            <td colspan="3" width="100%">
                                                                <img src="../images/spacer.gif" height="25px" width="100%" border="0"/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td colspan="3">
                                                                <table>
                                                                    <tr>
                                                                        <td> 

                                                                            <div id="recaptcha">

                                                                            </div>

                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    <?php } ?>
                                                    <tr>
                                                        <td colspan="3" width="100%">
                                                            <img src="../images/spacer.gif" height="20px" width="100%" border="0"/>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td>
                                                            <?php

                                                            function get_ip_address() {
                                                                foreach (array('HTTP_CLIENT_IP', 'HTTP_X_FORWARDED_FOR', 'HTTP_X_FORWARDED', 'HTTP_X_CLUSTER_CLIENT_IP', 'HTTP_FORWARDED_FOR', 'HTTP_FORWARDED', 'REMOTE_ADDR') as $key) {
                                                                    if (array_key_exists($key, $_SERVER) === true) {
                                                                        foreach (explode(',', $_SERVER[$key]) as $ip) {
                                                                            if (filter_var($ip, FILTER_VALIDATE_IP) !== false) {
                                                                                return $ip;
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }

//                                                            echo file_get_contents('http://api.geoio.com/q.php?key=ZNDbVJwPNJvyjDMb&qt=geoip&d=json&q=' . $_SERVER['REMOTE_ADDR']);
//                                                            echo 'ISP:' . $geo_data[0][3];
//                                                            echo 'Lat' . $geo_data[0][4];
//                                                            echo 'Lng' . $geo_data[0][5];
//                                                            echo 'CountryCode:' . $geo_data[0][6];
                                                            ?>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="lablesRegister" width="100" align="left" colspan="3">
                                                            Country&nbsp;&nbsp;
                                                        </td>
                                                        <td width="8">
                                                            &nbsp;
                                                        </td>
                                                        <td width="8">
                                                            &nbsp;
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <select class="selectCountry register_input" id="country" name="country">
                                                                <option value="1">Afghanistan</option>
                                                                <option value="2">Albania</option>
                                                                <option value="3">Algeria</option>
                                                                <option value="4">American Samoa</option>
                                                                <option value="5">Andorra</option>
                                                                <option value="6">Angola</option>
                                                                <option value="7">Anguilla</option>
                                                                <option value="8">Antarctica</option>
                                                                <option value="9">Antigua and Barbuda</option>
                                                                <option value="10">Argentina</option>
                                                                <option value="11">Armenia</option>
                                                                <option value="12">Armenia</option>
                                                                <option value="13">Aruba</option>
                                                                <option value="14">Australia</option>
                                                                <option value="15">Austria</option>
                                                                <option value="16">Azerbaijan</option>
                                                                <option value="17">Azerbaijan</option>
                                                                <option value="18">Bahamas</option>
                                                                <option value="19">Bahrain</option>
                                                                <option value="20">Bangladesh</option>
                                                                <option value="21">Barbados</option>
                                                                <option value="22">Belarus</option>
                                                                <option value="23">Belgium</option>
                                                                <option value="24">Belize</option>
                                                                <option value="25">Benin</option>
                                                                <option value="26">Bermuda</option>
                                                                <option value="27">Bhutan</option>
                                                                <option value="28">Bolivia</option>
                                                                <option value="29">Bosnia and Herzegovina</option>
                                                                <option value="30">Botswana</option>
                                                                <option value="31">Bouvet Island</option>
                                                                <option value="32">Brazil</option>
                                                                <option value="33">British Indian Ocean Territory</option>
                                                                <option value="34">Brunei Darussalam</option>
                                                                <option value="35">Bulgaria</option>
                                                                <option value="36">Burkina Faso</option>
                                                                <option value="37">Burundi</option>
                                                                <option value="38">Cambodia</option>
                                                                <option value="39">Cameroon</option>
                                                                <option value="40">Canada</option>
                                                                <option value="41">Cape Verde</option>
                                                                <option value="42">Cayman Islands</option>
                                                                <option value="43">Central African Republic</option>
                                                                <option value="44">Chad</option>
                                                                <option value="45">Chile</option>
                                                                <option value="46">China</option>
                                                                <option value="47">Christmas Island</option>
                                                                <option value="48">Cocos (Keeling) Islands</option>
                                                                <option value="49">Colombia</option>
                                                                <option value="50">Comoros</option>
                                                                <option value="51">Congo</option>
                                                                <option value="52">Congo, The Democratic Republic of The</option>
                                                                <option value="53">Cook Islands</option>
                                                                <option value="54">Costa Rica</option>
                                                                <option value="55">Cote D'ivoire</option>
                                                                <option value="56">Croatia</option>
                                                                <option value="57">Cuba</option>
                                                                <option value="58">Cyprus</option>
                                                                <option value="59">Cyprus</option>
                                                                <option value="60">Czech Republic</option>
                                                                <option value="61">Denmark</option>
                                                                <option value="62">Djibouti</option>
                                                                <option value="63">Dominica</option>
                                                                <option value="64">Dominican Republic</option>
                                                                <option value="65">Easter Island</option>
                                                                <option value="66">Ecuador</option>
                                                                <option value="67">Egypt</option>
                                                                <option value="68">El Salvador</option>
                                                                <option value="69">Equatorial Guinea</option>
                                                                <option value="70">Eritrea</option>
                                                                <option value="71">Estonia</option>
                                                                <option value="72">Ethiopia</option>
                                                                <option value="73">Falkland Islands (Malvinas)</option>
                                                                <option value="74">Faroe Islands</option>
                                                                <option value="75">Fiji</option>
                                                                <option value="76">Finland</option>
                                                                <option value="77">France</option>
                                                                <option value="78">French Guiana</option>
                                                                <option value="79">French Polynesia</option>
                                                                <option value="80">French Southern Territories</option>
                                                                <option value="81">Gabon</option>
                                                                <option value="82">Gambia</option>
                                                                <option value="83">Georgia</option>
                                                                <option value="84">Georgia</option>
                                                                <option value="85">Germany</option>
                                                                <option value="86">Ghana</option>
                                                                <option value="87">Gibraltar</option>
                                                                <option value="88">Greece</option>
                                                                <option value="89">Greenland</option>
                                                                <option value="90">Greenland</option>
                                                                <option value="91">Grenada</option>
                                                                <option value="92">Guadeloupe</option>
                                                                <option value="93">Guam</option>
                                                                <option value="94">Guatemala</option>
                                                                <option value="95">Guinea</option>
                                                                <option value="96">Guinea-bissau</option>
                                                                <option value="97">Guyana</option>
                                                                <option value="98">Haiti</option>
                                                                <option value="99">Heard Island and Mcdonald Islands</option>
                                                                <option value="100">Honduras</option>
                                                                <option value="101">Hong Kong</option>
                                                                <option value="102">Hungary</option>
                                                                <option value="103">Iceland</option>
                                                                <option value="104">India</option>
                                                                <option value="105">Indonesia</option>
                                                                <option value="106">Indonesia</option>
                                                                <option value="107">Iran</option>
                                                                <option value="108">Iraq</option>
                                                                <option value="109">Ireland</option>
                                                                <option value="110">Israel</option>
                                                                <option value="111">Italy</option>
                                                                <option value="112">Jamaica</option>
                                                                <option value="113">Japan</option>
                                                                <option value="114">Jordan</option>
                                                                <option value="115">Kazakhstan</option>
                                                                <option value="116">Kazakhstan</option>
                                                                <option value="117">Kenya</option>
                                                                <option value="118">Kiribati</option>
                                                                <option value="119">Korea, North</option>
                                                                <option value="120">Korea, South</option>
                                                                <option value="121">Kosovo</option>
                                                                <option value="122">Kuwait</option>
                                                                <option value="123">Kyrgyzstan</option>
                                                                <option value="124">Laos</option>
                                                                <option value="125">Latvia</option>
                                                                <option value="126">Lebanon</option>
                                                                <option value="127">Lesotho</option>
                                                                <option value="128">Liberia</option>
                                                                <option value="129">Libyan Arab Jamahiriya</option>
                                                                <option value="130">Liechtenstein</option>
                                                                <option value="131">Lithuania</option>
                                                                <option value="132">Luxembourg</option>
                                                                <option value="133">Macau</option>
                                                                <option value="134">Macedonia</option>
                                                                <option value="135">Madagascar</option>
                                                                <option value="136">Malawi</option>
                                                                <option value="137">Malaysia</option>
                                                                <option value="138">Maldives</option>
                                                                <option value="139">Mali</option>
                                                                <option value="140">Malta</option>
                                                                <option value="141">Marshall Islands</option>
                                                                <option value="142">Martinique</option>
                                                                <option value="143">Mauritania</option>
                                                                <option value="144">Mauritius</option>
                                                                <option value="145">Mayotte</option>
                                                                <option value="146">Mexico</option>
                                                                <option value="147">Micronesia, Federated States of</option>
                                                                <option value="148">Moldova, Republic of</option>
                                                                <option value="149">Monaco</option>
                                                                <option value="150">Mongolia</option>
                                                                <option value="151">Montenegro</option>
                                                                <option value="152">Montserrat</option>
                                                                <option value="153">Morocco</option>
                                                                <option value="154">Mozambique</option>
                                                                <option value="155">Myanmar</option>
                                                                <option value="156">Namibia</option>
                                                                <option value="157">Nauru</option>
                                                                <option value="158">Nepal</option>
                                                                <option value="159">Netherlands</option>
                                                                <option value="160">Netherlands Antilles</option>
                                                                <option value="161">New Caledonia</option>
                                                                <option value="162">New Zealand</option>
                                                                <option value="163">Nicaragua</option>
                                                                <option value="164">Niger</option>
                                                                <option value="165">Nigeria</option>
                                                                <option value="166">Niue</option>
                                                                <option value="167">Norfolk Island</option>
                                                                <option value="168">Northern Mariana Islands</option>
                                                                <option value="169">Norway</option>
                                                                <option value="170">Oman</option>
                                                                <option value="171">Pakistan</option>
                                                                <option value="172">Palau</option>
                                                                <option value="173">Palestinian Territory</option>
                                                                <option value="174">Panama</option>
                                                                <option value="175">Papua New Guinea</option>
                                                                <option value="176">Paraguay</option>
                                                                <option value="177">Peru</option>
                                                                <option value="178">Philippines</option>
                                                                <option value="179">Pitcairn</option>
                                                                <option value="180">Poland</option>
                                                                <option value="181">Portugal</option>
                                                                <option value="182">Puerto Rico</option>
                                                                <option value="183">Qatar</option>
                                                                <option value="184">Reunion</option>
                                                                <option value="185">Romania</option>
                                                                <option value="186">Russia</option>
                                                                <option value="187">Russia</option>
                                                                <option value="188">Rwanda</option>
                                                                <option value="189">Saint Helena</option>
                                                                <option value="190">Saint Kitts and Nevis</option>
                                                                <option value="191">Saint Lucia</option>
                                                                <option value="192">Saint Pierre and Miquelon</option>
                                                                <option value="193">Saint Vincent and The Grenadines</option>
                                                                <option value="194">Samoa</option>
                                                                <option value="195">San Marino</option>
                                                                <option value="196">Sao Tome and Principe</option>
                                                                <option value="197">Saudi Arabia</option>
                                                                <option value="198">Senegal</option>
                                                                <option value="199">Serbia and Montenegro</option>
                                                                <option value="200">Seychelles</option>
                                                                <option value="201">Sierra Leone</option>
                                                                <option value="202">Singapore</option>
                                                                <option value="203">Slovakia</option>
                                                                <option value="204">Slovenia</option>
                                                                <option value="205">Solomon Islands</option>
                                                                <option value="206">Somalia</option>
                                                                <option value="207">South Africa</option>
                                                                <option value="208">South Georgia and The South Sandwich Islands</option>
                                                                <option value="209">Spain</option>
                                                                <option value="210">Sri Lanka</option>
                                                                <option value="211">Sudan</option>
                                                                <option value="212">Suriname</option>
                                                                <option value="213">Svalbard and Jan Mayen</option>
                                                                <option value="214">Swaziland</option>
                                                                <option value="215">Sweden</option>
                                                                <option value="216">Switzerland</option>
                                                                <option value="217">Syria</option>
                                                                <option value="218">Taiwan</option>
                                                                <option value="219">Tajikistan</option>
                                                                <option value="220">Tanzania, United Republic of</option>
                                                                <option value="221">Thailand</option>
                                                                <option value="222">Timor-leste</option>
                                                                <option value="223">Togo</option>
                                                                <option value="224">Tokelau</option>
                                                                <option value="225">Tonga</option>
                                                                <option value="226">Trinidad and Tobago</option>
                                                                <option value="227">Tunisia</option>
                                                                <option value="228">Turkey</option>
                                                                <option value="229">Turkey</option>
                                                                <option value="230">Turkmenistan</option>
                                                                <option value="231">Turks and Caicos Islands</option>
                                                                <option value="232">Tuvalu</option>
                                                                <option value="233">Uganda</option>
                                                                <option value="234">Ukraine</option>
                                                                <option value="235">United Arab Emirates</option>
                                                                <option value="236">United Kingdom</option>
                                                                <option value="237">United States</option>
                                                                <option value="238">United States Minor Outlying Islands</option>
                                                                <option value="239">Uruguay</option>
                                                                <option value="240">Uzbekistan</option>
                                                                <option value="241">Vanuatu</option>
                                                                <option value="242">Vatican City</option>
                                                                <option value="243">Venezuela</option>
                                                                <option value="244">Vietnam</option>
                                                                <option value="245">Virgin Islands, British</option>
                                                                <option value="246">Virgin Islands, U.S.</option>
                                                                <option value="247">Wallis and Futuna</option>
                                                                <option value="248">Western Sahara</option>
                                                                <option value="249">Yemen</option>
                                                                <option value="250">Yemen</option>
                                                                <option value="251">Zambia</option>
                                                                <option value="252">Zimbabwe</option>
                                                            </select>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td colspan="3" class="ErrorText" id="errormsg">&nbsp;<br/>&nbsp;<br/>&nbsp;</td>
                                                    </tr>
                                                </table>
                                            </td>
                                            <td>
                                                <img src="../images/spacer.gif" height="10px" width="10px" border="0"/>
                                            </td>
                                        </tr>
                                    </table>
                                    <input type="hidden" value="clientregiter" id="action" name="action"> 
                                </form>
                            </div>
                            <div id="registrationSuccess" style="display:none;">
                                <div id="title">
                                    <h2>Please check your email account</h2>
                                </div>
                                <div>
                                    <p>
                                        Thank you for registering with us. We have sent you an email
                                        that contains your a link to activate to your account.
                                    </p>
                                </div>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </body>
</html>
<script language="javascript">
    var myForm = $("#registrationform"), password = $("#password"),confirmpassword = $("#confirmpassword"), email = $("#email"),firstname = $("#firstname"),lastname = $("#lastname"), emailInfo = $("#emailInfo");                                   
    email.val("");
    firstname.val("");
    lastname.val("");
</script>