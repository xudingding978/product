<!DOCTYPE HTML>
<?php
if (!isset($_SESSION)) {
    session_start();
}
$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once $path_doc_root . "/include/messaging.php";
?>

<html xmlns="http://www.w3.org/1999/xhtml"><head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
            <title>Hubstar Registration Process</title>


            <link href="/common/ui/css/smart_wizard.css" rel="stylesheet" type="text/css">
                <script type="text/javascript" src="/common/ui/js/jquery-1.4.2.min.js"></script>
                <script type="text/javascript" src="/common/ui/js/json2.js"></script>
                <script type="text/javascript" src="/common/ui/js/jquery.smartWizard-2.0.min.js"></script>
                <script type="text/javascript" src="js/shoppingcart.js"></script> 
                <script src ="https://www.paypalobjects.com/js/external/dg.js" type="text/javascript"></script>

                <!-- Susantha to check-->
                <script type="text/javascript">
                    var emailaddress="";
                    var cartvalue='';
                    var exchangeRate=0;
                    //localStorage.clientcart="";
                    var selectedpanel=0;
                    var displaystate=1;
                    
                    clearLocalStorage();
                    if((localStorage.selectedpanel!=null)&&(localStorage.selectedpanel!="")){                        
                        selectedpanel=eval(localStorage.selectedpanel);
                        // selectedpanel=1;
                        if(selectedpanel!=0){
                            displaystate=0;
                        }else{  
                            displaystate=1;  
                        }
                    }
                    $(document).ready(function(){                                                                     
                        $('#wizard').smartWizard({selected:selectedpanel,enableFinishButton: false,hideButtonsOnDisabled: false,labelFinish:'Checkout', contentCache:false,transitionEffect:'slideleft',onLeaveStep:leaveAStepCallback,onShowStep:showAStepCallback,onFinish:onFinishCallback,enableFinishButton:true,onFinish: checkout });
                        //$("#your_wizard").smartWizard('goToStep', '1');
                        //  $("#your_wizard").smartWizard('enableStep', 0);
                        function leaveAStepCallback(obj){
                          
                            var step_num= obj.attr('rel');
                            // alert("step_num:"+step_num);
                            validateSteps(step_num);
                            return true;
                        }
                        function showAStepCallback(obj){
                             
                            var step_num= obj.attr('rel');
                            //alert(step_num);
                            if(step_num==1){                                
                                $('#step-1').load("register.php?displaystate="+displaystate , function() {                                   

                                    if(localStorage.hasCheckRecaptcha==="false")
                                    {        
                                        $.getScript('http://www.google.com/recaptcha/api/js/recaptcha_ajax.js',          
                                        function() {
                                            Recaptcha.create("6Ld_hNkSAAAAABvxeegvmQZDjrA8O-eKDlsuO1t2", 
                                            "recaptcha",
                                            {
                                                theme: "white", 
                                                callback: Recaptcha.focus_response_field
                                            }
                                        );
                                        });
                                    }
        
                                    $("#firstname").val(localStorage.firstname);
                                    $("#lastname").val(localStorage.lastname);
                                    $("#email").val(localStorage.email);
                                    $("#password").val(localStorage.password); 
                                    $("#confirmpassword").val(localStorage.confirmpassword);
                  
                                });
                               
                            }
                            if(step_num==2){
                              
                                localStorage.selectedpanel=1;
                                $('#step-2').load("shoppingcart.php?email="+emailaddress , function() {                                   
                                    $("#sc_cart").smartCart(); 
                                    
                                    var JSON_object=eval( '(' +localStorage.clientcart+ ')');
                                    //console.log("localStorage.clientcart:"+localStorage.clientcart);
                                    
                                    var elementlength=JSON_object.client_cart.length;
                                    var itemname='';
                                    var optionid='';
                                    var thisobj;
                                    //console.log("Aaaaaaaaaaaaaaaaaaaaaaaaa");
                                 
                                    for(var i=1;i<=elementlength;i++){                                       
                                        if(JSON_object.client_cart[i-1].parentid==0){             
                                            
                                            
                                            optionid=JSON_object.client_cart[i-1].objectid; 
                                            if(JSON_object.client_cart[i-1].packagename=="Standard"){
                                                thisobj="standard"+optionid;                                               
                                            }else if(JSON_object.client_cart[i-1].packagename=="Advanced"){
                                                thisobj='advanced'+optionid+'';
                                            }else if(JSON_object.client_cart[i-1].packagename=="Premium"){
                                                thisobj='premium'+optionid+'';
                                            }
                                            document.getElementById(thisobj).checked=true;
                                            if(JSON_object.client_cart[i-1].payment_method!=="one_off"){
                                                document.getElementById("pay"+i).selectedIndex =1;
                                            }
                                            paymentMethodHandling(document.getElementById("pay"+i));
                                            //alert(JSON_object.client_cart[i-1].payment_method);
                                            //document.getElementById(thisobj).checked=true;
                                            //     $("#prod_price"+optionid).html(JSON_object.client_cart[i-1].linetotal);                                           

                                        }
                                    }
                                   //alert("");
                                   
                                   
                                    for(var i=1;i<=elementlength;i++){
                                         
                                        optionid=JSON_object.client_cart[i-1].objectid; 
                                        
                                        //JSON_object.client_cart[i-1].dirid;
                                        //console.log("parentid:"+JSON_object.client_cart[i-1].parentid);
                                        if(JSON_object.client_cart[i-1].parentid==0){
                                            itemname='scItemButton'+optionid+'';  
                                           //alert(itemname);
                                           // console.log(itemname);
                                            document.getElementById(itemname).click(); 
                                        }else{            
                                            itemname='scAddiItemButton'+optionid+''; 
                                            //alert("Else:"+itemname);
                                            //console.log(itemname);
                                            document.getElementById(itemname).click();
                                        }
                                    
                                    }                                    
                                    
                                    
                                });
                                
                            } 
                            if(step_num==3){   
                                // alert("1");
                                var localstorageval=eval(localStorage.selectedpanel);
                                                             
                                if(localstorageval!=2){
                                    addData();
                                    localStorage.selectedpanel=2;
                                }
                                $('#step-3').load("checkout.php" , function() { 
                                    
                                    var JSON_object=eval( '(' +localStorage.clientcart+ ')'); 
                                    console.log(JSON_object.client_cart[0].dirid);                                  
                                    //alert(JSON_object.client_cart.length);
                                    var elementlength=JSON_object.client_cart.length;
                                  
                                    var htmlstring='<table width="100%">';
                                    for(var i=0;i<elementlength;i++){
                                     
                                        htmlstring=htmlstring+'<tr><td>';
                                        htmlstring=htmlstring+JSON_object.client_cart[i].productname;
                                        htmlstring=htmlstring+'</td>';                                 
                                        htmlstring=htmlstring+'<td width="80px">'+JSON_object.client_cart[i].year+'</td>';
                                        htmlstring=htmlstring+'<td width="80px">'+JSON_object.client_cart[i].packagename+'</td>';
                                        htmlstring=htmlstring+'<td width="140px">'+JSON_object.client_cart[i].linetotal+'</td>';
                                        htmlstring=htmlstring+'</tr>';
                                    }
                                    htmlstring=htmlstring+'</table>';    
                                  
                                  
                                    document.getElementById('checkoutcart').innerHTML= htmlstring;
                                    //localStorage.totalamount
                                    //alert(localStorage.totalamount);
                                    document.getElementById('tot_amount').innerHTML=localStorage.totalamount;
                                    document.getElementById('curruncyid').innerHTML=localStorage.curruncyid;
                                    
                                                                      
                                });
                               
                            }  
                       
                            // alert("step_num:"+step_num);
                            //validateSteps(step_num);
                            return true;
                        }
                        function onFinishCallback(){
                            if(validateAllSteps()){
                                $('#checkout_email').val(emailaddress);                                
                                $('form').submit();
                            }
                        }
                        $('#wizard').smartWizard('setError',{stepnum:2,iserror:false});
                        
                       
                    });
                    // clearLocalStorage();   
                    function clearLocalStorage(){
                        localStorage.selectedpanel=0;
                        localStorage.clientcart="";
                        localStorage.firstname="";
                        localStorage.lastname="";
                        localStorage.email="";
                        localStorage.password=""; 
                        localStorage.confirmpassword="";       
                        localStorage.hasCheckRecaptcha=false;
                    }
                    function checkout(){
                        $('#checkout_client_cart').val(localStorage.clientcart);
                        $('#checkout_total_amount').val(localStorage.totalamount);
                        $('#checkout_curruncy_code').val(localStorage.curruncyid);
                        $('#checkout_email').val(localStorage.email);
                        
                        //alert(emailaddress);
                        //alert(localStorage.totalamount);
                        document.forms["shoppingcartform"].submit();  
                        //url: '/dashboard/payKeyGenerator.php',
                        //                        $.ajax({
                        //                            url: '/dashboard/paypal.php',
                        //                            type: 'POST',
                        //                            data: $("#registrationform").serialize(),
                        //                            async: false,
                        //                            success: function(response) {                               
                        //                                if($.trim(response)=="FAIL"){                                                    
                        //                                    alert("Fail:"+response);
                        //                                }else{                                    
                        //                                   / //$('#paykey').val(response);
                        //                                    console.log("--------------");
                        //                                    console.log(response);                                    
                        //                                   // document.getElementById("submitBtn").click();
                        //                                   // alert("Key:"+response); 
                        //                                }
                        //                            }
                        //                        });
                        
                        
                        
                    }
		
                    function validateSteps(step){
                        var isStepValid = true;
                        // validate step 1"
                        if(step == 1){                          
                            if(!registrationSubmit(step)){
                                $('#wizard').smartWizard('setError',{stepnum:step,iserror:true});
                            }
                            
                        }
                        
                        
                        return isStepValid;
                    }
		
                    
                    /*  Registration Submit Validation            */
                
                    function registrationSubmit(step){  
                        checkUserInput();
                        var returnValue=false;
                        if(localStorage.hasCheckRecaptcha=="false")
                        { 
                            returnValue = captchaValidation();
                        }else{
                            returnValue=true;
                        }
                        if(returnValue){
                            if(localStorage.selectedpanel==0){
                                $('#action').val('clientregister');
                                $.ajax({
                                    url: '/common/callbacks/clientregistration.php',
                                    type: 'POST',
                                    data: $("#registrationform").serialize(),                           
                                    async: false,
                                    success: function(response) {      
                                        // alert(response);
                                        if($.trim(response)=="Registered"){
                                            localStorage.selectedpanel=1;
                                            selectedpanel=1;
                                            showMessage("success","Client was Registered");                                    
                                        }else{                                
                                            showMessage("error","Registration Fail");
                                            $('#wizard').smartWizard('setError',{stepnum:step,iserror:true});
                                        }
                                    }
                                }); 
                            }
                            emailaddress=email.attr("value");
                            var returnValue=true;
                            localTempStore();
                        }
                       

                       
                        
                        return returnValue;
                      
                    };
                     
                    function checkUserInput ()
                    {
                        if(firstname.attr("value") == "")
                        {                       
                            showMessage("error","Enter First name");
                            firstname.focus();
                            $('#wizard').smartWizard('setError',{stepnum:step,iserror:true});
                            return;
                        }    
                        
                        if(lastname.attr("value") == "")
                        {        
                            showMessage("error","Enter Last name");
                            lastname.focus();
                            $('#wizard').smartWizard('setError',{stepnum:step,iserror:true});
                            return;
                        }
                        
                        if((email.attr("value") == "")||(!checkEmail(email.attr("value"),false)))
                        {    
                            
                            showMessage("error","Enter Valid Email");
                            email.focus();
                            $('#wizard').smartWizard('setError',{stepnum:step,iserror:true});
                            return;
                        }
      
                        if(localStorage.selectedpanel==0){
                            if(!emailok)
                            {       
                           
                                showMessage("error","Check Email");
                                email.attr("value","");
                                email.focus();
                                $('#wizard').smartWizard('setError',{stepnum:step,iserror:true});
                                return;
                            }
                        }
                        if( $("#confirmpassword").attr("value")!=$("#password").attr("value") )
                        {
                             
                            showMessage("error","Your Passwords do not matched");
                            $("#confirmpassword").focus();
                            $('#wizard').smartWizard('setError',{stepnum:step,iserror:true});
                            return;
                        }
                    }
                     
                    function  localTempStore(){
                        localStorage.firstname=$("#firstname").val();
                        localStorage.lastname=$("#lastname").val();
                        localStorage.email=$("#email").val();
                        localStorage.password=$("#password").val();
                        localStorage.confirmpassword=$("#password").val(); 
                        localStorage.hasCheckRecaptcha=true;  
                    }
 
                    function captchaValidation(){ 
                        $('#action').val('captchaVerify');
                        //lert("captchaValidation:1");
                        //captchaverify
                        var returnvalue=false;                  
                        $.ajax({
                            url: '/common/callbacks/clientregistration.php',
                            type: 'POST',
                            data: $("#registrationform").serialize(),
                            async: false,
                            success: function(response) {         
                                // alert(response);
                                if($.trim(response)=="FAIL"){ 
                                    showMessage("error","Enter correct text code");
                                    Recaptcha.reload();                                            
                                    returnvalue= false;
                                }else{                                    
                                    returnvalue= true; 
                                }
                      
                            }
                        });
                        return returnvalue;
             
                    } 
                    // payKeyRequest();
                   
                    function payKeyRequest(){
                        var pay_request_json_ob={
                            "returnUrl":"http://192.168.200/dashboard",
                            "requestEnvelope":{"errorLanguage":"en_US"},"currencyCode":"USD",
                            "receiverList":{"receiver":[{"email":"rsusasene@gmail.com",
                                        "amount":"1.00"}]},"cancelUrl":"http://192.168.200/dashboard/index.php",
                            "actionType":"PAY",
                            "paymentType":"DIGITALGOODS"
                        };                  
                        /*
                         *  Testing Env URL     : "https://svcs.sandbox.paypal.com/AdaptivePayments/Pay"
                         *  Production Level URL: "https://svcs.paypal.com/AdaptivePayments/API_operation"
                         */
                        jQuery.ajax({
                            url: "https://svcs.sandbox.paypal.com/AdaptivePayments/Pay",
                            type: "POST",
                            data: pay_request_json_ob,
                            dataType: "json",
                            success: function(result) {
                                // alert(result);
                            }
                        });
                   
                   
                   
                   
                   
                    }
                

		
                </script>
                </head><body>


                    <table align="center" border="0" cellpadding="0" cellspacing="0">
                        <tr><td>


                                <form action="#" method="POST">
                                    <input type='hidden' name="issubmit" value="1">
                                        <!-- Tabs -->
                                        <div id="wizard" class="swMain">
                                            <ul>
                                                <li><a href="#step-1">
                                                        <label class="stepNumber">1</label>
                                                        <span class="stepDesc">
                                                            Create Account<br />
                                                            <small>Fill your account details</small>
                                                        </span>
                                                    </a></li>
                                                <li><a href="#step-2">
                                                        <label class="stepNumber">2</label>
                                                        <span class="stepDesc">
                                                            Shopping Cart<br />
                                                            <small>Select your products</small>
                                                        </span>
                                                    </a></li>
                                                <li><a href="#step-3">
                                                        <label class="stepNumber">3</label>
                                                        <span class="stepDesc">
                                                            Checkout<br />
                                                            <small>Payment Process</small>
                                                        </span>
                                                    </a></li>

                                            </ul>
                                            <div id="step-1" style="height:650px">	

                                            </div>
                                            <div id="step-2" style="height:380px">

                                            </div>                      
                                            <div id="step-3" style="height:355px">

                                            </div>

                                        </div>

                                </form> 

                            </td></tr>
                    </table> 
                    <div id="test">
                    </div>
                </body>
                </html>
