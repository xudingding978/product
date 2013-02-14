<?php
$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once($path_doc_root . "/config.php");



include_once $path_doc_root . "/common/util/DBTransaction.php";
include_once $path_doc_root . "/common/dao/TplClientDAO.php";
include_once $path_doc_root . "/common/dao/TplDirectoryPeriodDAO.php";
include_once ($path_doc_root . "/common/util/DurationCalculator.php");

//global $session_maintain;
$email = $_GET['email'];
//$email = "rsusasene@gmail.com";
//$tpl_db = new tpldb;
$dbtrans = new DBTransaction();
$dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
$tplclientdao = new TplClientDAO();
$firstName = "";
$lastName = "";
$array = array($email);
$records = $tplclientdao->selectEmail($dbconn, $array);
error_log("before for each......................." . $email);
foreach ($records as $client) {
    error_log("IN...........before for each.......................");
    $firstName = $client["FIRST_NAME"];
    $lastName = $client["LAST_NAME"];
    $client_id = $client["REC_ID"];
}
//$session_maintain->add_client_field("first_name", $firstName, $instanceID, "client_data");
//$session_maintain->add_client_field('client_id', $client_id, $instanceID, 'client_data');
//
//$_SESSION["first_name"] = $firstName;
//$_SESSION["last_name"] = $lastName;
//$_SESSION["user"] = $email;
//$_SESSION["user_type"] = IS_SHADOW_USER;
//$_SESSION['client_active_tab'] = "client_profile";
//$_SESSION["role"] = "dummy";
//$_SESSION["email"] = $email;
//$_SESSION["name"] = $firstName . " " . $lastName;
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="content-type" content="text/html; charset=ISO-8859-1">
            <title>Client Cart - Hubstar</title>

            <meta name="description" content="Smart Cart - a javascript shopping cart control for jQuery">


                <script type="text/javascript" src="js/jquery-1.js"></script>
                <script type="text/javascript" src="js/jquery-ui-1.js"></script>
                <script type="text/javascript" src="js/jquery.js"></script>
                <script type="text/javascript" src="js/shoppingcart.js"></script>
                <script type="text/javascript" src="/common/ui/js/json2.js"></script>
                <script type="text/javascript">
                    var from = "NZD";
                    var result =1;
                    var scItemList;
                    
                    //      
                        
                    function packageHandling(thisobj){                            
                        //var to = $('#toCurrency').val();
                        //alert("packageHandling");
                        var toCurrency=$('#toCurrency').val();
                        $('#convertcurruncy').val(toCurrency);
                        
                        //tocur
                        // alert(to);
                        $('#cartaction').val('curruncyconversion');
                        //var resultNZD = koolajax.callback(getConvertCurruncy("NZD",to)); 
                        // alert( $('#cartaction').val());
                        var selectedVal=$("#pay"+$(thisobj).attr("dirid")).attr("selected","selected").val(); 
                        //alert(selectedVal);
                        $.post("/common/callbacks/clientregistration.php",
                        $("#cartform").serialize(),
                        function(resultNZD) {
                            exchangeRate=resultNZD;
                            if(selectedVal=="one_off"){
                                $("#prod_price"+$(thisobj).attr("dirid")).html(($(thisobj).attr("rel") *resultNZD ).toFixed(2));
                            }else{
                                $("#prod_price"+$(thisobj).attr("dirid")).html(($(thisobj).attr("typerel") *resultNZD ).toFixed(2)); 
                            }
                            $('#curruncyLabel').html(" "+toCurrency+" ");
                        }
                    );  
                            
                         
                    }
                   
                    function paymentMethodHandling(thisobj){                            
                        //var to = $('#toCurrency').val();
                        //paymentmathod
                        
                        var toCurrency=$('#toCurrency').val();
                        $('#convertcurruncy').val(toCurrency);
                            
                        //tocur
                        // alert(to);
                        $('#cartaction').val('curruncyconversion');
                        //var resultNZD = koolajax.callback(getConvertCurruncy("NZD",to)); 
                        // alert( $('#cartaction').val());
                        var startid=0; 
                        var endid=0;
                        
                        
                         $.ajax({
                                url: '/common/callbacks/clientregistration.php',
                                type: 'POST',
                                data: $("#cartform").serialize(),                           
                                async: false,
                                success:  function(resultNZD) {
                            //alert($(thisobj).attr("dirid"));
                            exchangeRate=resultNZD;
                            startid=eval($("#paymentmathod"+$(thisobj).attr("dirid")).attr("startid"));
                            endid=eval($("#paymentmathod"+$(thisobj).attr("dirid")).attr("endid"));
                            //                            alert("Start ID:"+$("#paymentmathod"+$(thisobj).attr("dirid")).attr("startid"));
                            //                            alert("End ID:"+$("#paymentmathod"+$(thisobj).attr("dirid")).attr("endid"));

                            // alert("Selected:"+$(thisobj).attr("selected","selected").val());
                            var selectedVal=$(thisobj).attr("selected","selected").val();   
                           
                            var initid=startid;
                            for(startid;startid<=endid;startid++){
                                //alert(startid);
                                if(initid==startid){                            
                                   
                                    
                                    if(selectedVal=="one_off"){
                                      //  alert("11");
                                        $("#scItemButton"+startid).attr("payment_method",selectedVal);
                                       
                                        $("#prod_price"+startid).html(($("input[name=package"+startid+ "]:checked").attr("rel") *resultNZD ).toFixed(2));
                                    }else{
                                       // alert("22");
                                        $("#scItemButton"+startid).attr("payment_method",selectedVal);
                                        $("#prod_price"+startid).html(($("input[name=package"+startid+ "]:checked").attr("typerel") *resultNZD ).toFixed(2));  
                                    }
                                   
                                }else{
                                    
                                    if(selectedVal=="one_off"){
                                        //alert("1");
                                         $("#scAddiItemButton"+startid).attr("payment_method",selectedVal);
                                        $("#prod_price"+startid).html(($("#prod_price"+startid).attr("rel") *resultNZD ).toFixed(2));
                                    }else{
                                      //alert("2");
                                         $("#scAddiItemButton"+startid).attr("payment_method",selectedVal);
                                        $("#prod_price"+startid).html(($("#prod_price"+startid).attr("typerel") *resultNZD ).toFixed(2));  
                                    }                                    
                                }
                                
                            }
                            
                            //$("#prod_price"+$(thisobj).attr("dirid")).html(($(thisobj).attr("rel") *resultNZD ).toFixed(2));
                            //$('#curruncyLabel').html(" "+toCurrency+" ");
                        }
                         });  
                            
                     // alert("End :paymentMethodHandling");   
                    }
                        
                        
                        
                        
                    function addData(){
                            
                        var firsttime=0;
                        var json_string="";
                        var actprice="";
                        //alert("1");  
                        if(scItemList.children("option").length > 0){
                            var tmpRelVal;
                            scItemList.children("option").each(function(n) {
                                var productname=$(this,scItemList).attr('text');
                                var tmpRel = $(this,scItemList).attr('value');                             
                                var objectid = $(this).attr('rel');  
                                var rec_id = $(this).attr('rec_id');  
                                var parentid= $(this).attr('parentid');
                                var dirid= $(this).attr('dirid');
                                var startdate= $(this).attr('startdate');
                                var enddate= $(this).attr('enddate');
                                //enddate startdate
                                
                                var payment_method= $(this).attr('payment_method');
                                var actpriceeval=0;
                                tmpRelVal = tmpRel.split('|'); 
                                if(parentid==0){
                                  actprice=$("input[name=package"+tmpRelVal[0]+ "]").attr("actprice");
                                }else{
                                  actprice=$("#prod_price"+tmpRelVal[0]).attr("actprice");    
                                }
                                actpriceeval=parseFloat(actprice).toFixed(2);
                                
                                $("#curruncy_code").val(from);                               
                                if(firsttime==0){
                                    firsttime=1;                              
                                    json_string= '{"startdate":"'+startdate+'","enddate":"'+enddate+'","objectid":"'+objectid+'","productname":"'+productname+'","parentid":"'+parentid+'","payment_method":"'+payment_method+'","rec_id":'+rec_id+',"dirid":'+dirid+', "packagename":"'+tmpRelVal[1]+'", "year":2012 ,"price":'+actpriceeval+' , "packageid":'+firsttime+' , "linetotal":'+$("#prod_price"+tmpRelVal[0]).html()+'}'
                                }else{
                                    json_string= json_string+ ',{"startdate":"'+startdate+'","enddate":"'+enddate+'","objectid":"'+objectid+'","productname":"'+productname+'","parentid":"'+parentid+'","payment_method":"'+payment_method+'","rec_id":'+rec_id+',"dirid" :'+dirid+',"packagename":"'+tmpRelVal[1]+'","year":2012,"price":'+actpriceeval+' ,"packageid":'+firsttime+',"linetotal":'+$("#prod_price"+tmpRelVal[0]).html()+'}';
                                }                             
                              
                            });
                        }
                         
                        var client_data = '{"client_cart": ['+json_string +'] }';
                        console.log("client_data...............................:"+client_data);
                        $("#total_amount").val($("#sc_subtotal").text());  
                        $("#client_cart").val(client_data);
                        localStorage.clientcart=client_data;
                        localStorage.totalamount=$("#sc_subtotal").text();
                        localStorage.curruncyid=from;  
                       // localStorage.selectedpanel=2;
                                            
                          
                        //return false;
                    }
                </script>

                <link rel="stylesheet" type="text/css" href="styles/shopping_cart.css">

                    <script type="text/javascript">

                        var _gaq = _gaq || [];
                        _gaq.push(['_setAccount', 'UA-18629864-1']);
                        _gaq.push(['_trackPageview']);

                        (function() {
                            var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
                            ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
                            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
                        })();
                        //SELECT dir.REC_ID,dir.NAME,dir.DIRECTORY_DESC,offer.NAME,offer.COST_EXCL_GST,offer.GST_RATE   FROM tpl_directory  dir inner join tpl_directory_offering offer on dir.REC_ID= offer.DIRECTORY_REC_ID ;
                    </script>

                    </head>
                    <body>

                        <table align="center" border="0" cellpadding="0" cellspacing="0">
                            <tbody>


                                <tr><td>       
                                        <div class="data">
                                            <label for="toCurrency">Currency:</label>
                                            <select name="toCurrency" id="toCurrency">
                                                <option value="USD">United States Dollars - USD</option>
                                                <option value="GBP">United Kingdom Pounds - GBP</option>
                                                <option value="CAD">Canada Dollars - CAD</option>
                                                <option value="AUD">Australia Dollars - AUD</option>
                                                <option value="JPY">Japan Yen - JPY</option>
                                                <option value="INR">India Rupees - INR</option>
                                                <option value="NZD">New Zealand Dollars - NZD</option>
                                                <option value="CHF">Switzerland Francs - CHF</option>
                                                <option value="ZAR">South Africa Rand - ZAR</option>
                                                <option value="DZD">Algeria Dinars - DZD</option>
                                                <option value="USD">America (United States) Dollars - USD</option>
                                                <option value="ARS">Argentina Pesos - ARS</option>
                                                <option value="AUD">Australia Dollars - AUD</option>
                                                <option value="BHD">Bahrain Dinars - BHD</option>
                                                <option value="BRL">Brazil Reais - BRL</option>
                                                <option value="BGN">Bulgaria Leva - BGN</option>
                                                <option value="CAD">Canada Dollars - CAD</option>
                                                <option value="CLP">Chile Pesos - CLP</option>
                                                <option value="CNY">China Yuan Renminbi - CNY</option>
                                                <option value="CNY">RMB (China Yuan Renminbi) - CNY</option>
                                                <option value="COP">Colombia Pesos - COP</option>
                                                <option value="CRC">Costa Rica Colones - CRC</option>
                                                <option value="HRK">Croatia Kuna - HRK</option>
                                                <option value="CZK">Czech Republic Koruny - CZK</option>
                                                <option value="DKK">Denmark Kroner - DKK</option>
                                                <option value="DOP">Dominican Republic Pesos - DOP</option>
                                                <option value="EGP">Egypt Pounds - EGP</option>
                                                <option value="EEK">Estonia Krooni - EEK</option>
                                                <option value="EUR">Euro - EUR</option>
                                                <option value="FJD">Fiji Dollars - FJD</option>
                                                <option value="HKD">Hong Kong Dollars - HKD</option>
                                                <option value="HUF">Hungary Forint - HUF</option>
                                                <option value="ISK">Iceland Kronur - ISK</option>
                                                <option value="INR">India Rupees - INR</option>
                                                <option value="IDR">Indonesia Rupiahs - IDR</option>
                                                <option value="ILS">Israel New Shekels - ILS</option>
                                                <option value="JMD">Jamaica Dollars - JMD</option>
                                                <option value="JPY">Japan Yen - JPY</option>
                                                <option value="JOD">Jordan Dinars - JOD</option>
                                                <option value="KES">Kenya Shillings - KES</option>
                                                <option value="KRW">Korea (South) Won - KRW</option>
                                                <option value="KWD">Kuwait Dinars - KWD</option>
                                                <option value="LBP">Lebanon Pounds - LBP</option>
                                                <option value="MYR">Malaysia Ringgits - MYR</option>
                                                <option value="MUR">Mauritius Rupees - MUR</option>
                                                <option value="MXN">Mexico Pesos - MXN</option>
                                                <option value="MAD">Morocco Dirhams - MAD</option>
                                                <option value="NZD" selected>New Zealand Dollars - NZD</option>
                                                <option value="NOK">Norway Kroner - NOK</option>
                                                <option value="OMR">Oman Rials - OMR</option>
                                                <option value="PKR">Pakistan Rupees - PKR</option>
                                                <option value="PEN">Peru Nuevos Soles - PEN</option>
                                                <option value="PHP">Philippines Pesos - PHP</option>
                                                <option value="PLN">Poland Zlotych - PLN</option>
                                                <option value="QAR">Qatar Riyals - QAR</option>
                                                <option value="RON">Romania New Lei - RON</option>
                                                <option value="RUB">Russia Rubles - RUB</option>
                                                <option value="SAR">Saudi Arabia Riyals - SAR</option>
                                                <option value="SGD">Singapore Dollars - SGD</option>
                                                <option value="SKK">Slovakia Koruny - SKK</option>
                                                <option value="ZAR">South Africa Rand - ZAR</option>
                                                <option value="KRW">South Korea Won - KRW</option>
                                                <option value="LKR">Sri Lanka Rupees - LKR</option>
                                                <option value="SEK">Sweden Kronor - SEK</option>
                                                <option value="CHF">Switzerland Francs - CHF</option>
                                                <option value="TWD">Taiwan New Dollars - TWD</option>
                                                <option value="THB">Thailand Baht - THB</option>
                                                <option value="TTD">Trinidad and Tobago Dollars - TTD</option>
                                                <option value="TND">Tunisia Dinars - TND</option>
                                                <option value="TRY">Turkey Lira - TRY</option>
                                                <option value="AED">United Arab Emirates Dirhams - AED</option>
                                                <option value="GBP">United Kingdom Pounds - GBP</option>
                                                <option value="USD">United States Dollars - USD</option>
                                                <option value="VEB">Venezuela Bolivares - VEB</option>
                                                <option value="VND">Vietnam Dong - VND</option>
                                                <option value="ZMK">Zambia Kwacha - ZMK</option>
                                            </select>
                                        </div>

                                    </td></tr>



                                <tr><td>

                                        <form name="cartform" id="cartform" ction="./paypal.php" method="post" onSubmit="return addData();">                                              
                                            <div id="smartcart" class="scContainer">                
                                                <div id="sc_productlist" class="scProductList">
                                                    <?php
                                                    $dbtrans = new DBTransaction();
                                                    $dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
                                                    $tpldirPerioddao = new TplDirectoryPeriodDAO();
                                                    $param_arr = array();
                                                    $directory_packages = $tpldirPerioddao->selectDirPeriodsDetail($dbconn, $param_arr);


                                                    $sequence = 0;
                                                    $dir_id = 0;
                                                    $objectid = 0;
                                                    $parentid = 0;
                                                    $startid = 0;
                                                    $periodcost = 0;
                                                    $isperiodstart = 'false';
                                                    $currentdate = new DateTime("now");
                                                   //  $currentdate = new DateTime("now");
                                                    $duration = new DurationCalculator();
                                                    $remainperiodcount = 0;
                                                    $packagecost = 0;
                                                    //$actualcost=0;
//                                                    echo  $duration->monthDifference('2013-02-01')."---------------------------";
//                                                    echo  $duration->dayDifference('2012-09-25')."-----------------------------";
//                                                    echo  $duration->weekDifference('2012-10-01')."----------------------------";
                                                    if ($directory_packages) {
                                                        //error_log("directory_packages ...............2");
                                                        $arraysize = count($directory_packages);
                                                        //foreach ($directory_packages as $key => $directory_package) {
                                                        //error_log("Before for Loop Is Period Start..................................:".$isperiodstart);
                                                        for ($i = 0; $i < $arraysize; $i++) {
                                                            $directory_package = $directory_packages[$i];
                                                            $sequence = $sequence + 1;
                                                            $dir_id = $directory_package["REC_ID"];
                                                            $standardpack;
                                                            $objectid = $objectid + 1;
                                                            $startid = $objectid;
                                                            $parentid = $objectid;
                                                           // error_log("Startttttttttttt..........................:".$directory_package["DIRECTORY_PERIOD_START"] );
                                                           // error_log("Endddddddddd..........................:".$directory_package["DIRECTORY_PERIOD_END"] );
                                                            if ((new DateTime($directory_package["DIRECTORY_PERIOD_START"]) < $currentdate) && (new DateTime($directory_package["DIRECTORY_PERIOD_END"]) > $currentdate)) {
                                                                $isperiodstart = 'true';
                                                                error_log("Inside IF:Is Period Start..................................:".$isperiodstart);
                                                            }
                                                            //error_log("Start Date..................................:".$directory_package["DIRECTORY_PERIOD_START"]);
                                                            ?>
                                                            <div class="scProductListItem">
                                                                <table border="0" cellpadding="2" cellspacing="2">
                                                                    <tbody><tr>
                                                                            <td rowspan="6" width="5px" height="150px"></td>
                                                                            <td width="35px" colspan="3"><strong><span id="prod_name<?php echo $objectid ?>"><?php echo $directory_package["NAME"]; ?></span></strong></td>

                                                                            <td>
                                                                                <strong><span id="yearStatus<?php echo $objectid ?>"><?php echo $directory_package["YEAR"]; ?></span></strong>  
                                                                            </td>

                                                                        </tr>
                                                                        <tr>
                                                                            <td colspan="3"><span id="des<?php echo $objectid ?>" colspan="3"><?php echo $directory_package["DESCRI"]; ?></span></td>
                                                                        </tr>
                                                                        <tr>                                                           
                                                                            <td colspan="3"><span>Payment Method</span>
                                                                                <strong>:<span id="paymentMethod<?php echo $dir_id ?>">
                                                                                        <select id="pay<?php echo $dir_id ?>" dirid="<?php echo $dir_id ?>"  onChange="paymentMethodHandling(this)">
                                                                                            <option value="one_off">One-Off</option>
                                                                                            <?php if ($directory_package["IS_MULTI_PAYMENT"] == 1) { ?>
                                                                                                <option value="<?PHP echo $directory_package["PAY_TYPE"] ?>"> <?PHP echo $directory_package["PAY_TYPE"] ?></option>    
                                                                                            <?php } ?>
                                                                                        </select> 
                                                                                    </span>
                                                                                </strong>  
                                                                            </td>

                                                                        </tr>

                                                                        <tr>
                                                                            <td colspan="3">
                                                                                <?php
                                                                                if ($directory_package["PACK_NAME"] == "Standard Listing") {
                                                                                    //error_log("Is Period Start..................................:".$isperiodstart);
                                                                                    if ($isperiodstart=='true') {
                                                                                       
                                                                                        $remainperiodcount = $duration->calculateNumberOfPeriodTypes($directory_package["DIRECTORY_PERIOD_END"], $directory_package["PAY_TYPE"]);
                                                                                        $packagecost = $directory_package["PERIOD_TYPE_COST_EXCL_GST"] * $remainperiodcount;
                                                                                        $standardpack = $packagecost * (($directory_package["TAX_RATE"] + 100) / 100);
                                                                                    } else {
                                                                                        $packagecost = $directory_package["COST_EXCL_GST"];
                                                                                        $standardpack = $packagecost * (($directory_package["TAX_RATE"] + 100) / 100);
                                                                                    }
                                                                                    ?>    
                                                                                    <input onclick="packageHandling(this)" dirid="<?php echo $dir_id ?>" actprice="<?php echo $packagecost; ?>" paymenttype="<?php echo $directory_package["PERIOD_TYPE_COST_EXCL_GST"]; ?>" typerel="<?php echo $directory_package["PERIOD_TYPE_COST_EXCL_GST"] * (($directory_package["TAX_RATE"] + 100) / 100); ?>" rel="<?php echo $standardpack; ?>" type="radio" name="package<?php echo $objectid ?>" id="standard<?php echo $objectid ?>" value="Standard" checked> <span >Standard</span></input>
                                                                                    <?php
                                                                                    if ($i < ($arraysize - 1) && ($dir_id == $directory_packages[$i + 1]["REC_ID"])) {
                                                                                        $directory_package = $directory_packages[$i + 1];
                                                                                        $i = $i + 1;
                                                                                    }
                                                                                }
                                                                                ?> 
                                                                                <?php
                                                                                if ($directory_package["PACK_NAME"] == "Advanced Listing") {
                                                                                    if ($isperiodstart=='true') {
                                                                                        $remainperiodcount = $duration->calculateNumberOfPeriodTypes($directory_package["DIRECTORY_PERIOD_END"], $directory_package["PAY_TYPE"]);
                                                                                        $packagecost = $directory_package["PERIOD_TYPE_COST_EXCL_GST"] * $remainperiodcount;
                                                                                        //error_log("PERIOD_TYPE_COST_EXCL_GST:". $directory_package["PERIOD_TYPE_COST_EXCL_GST"]);
                                                                                        //error_log("remainperiodcount:". $remainperiodcount);
                                                                                        //error_log("packagecost:". $packagecost);
                                                                                    } else {
                                                                                        
                                                                                        $packagecost = $directory_package["COST_EXCL_GST"];
                                                                                        //error_log("Second Package Cost :".$packagecost);
                                                                                    }
                                                                                    ?> 
                                                                                    <input onclick="packageHandling(this)" dirid="<?php echo $dir_id ?>" actprice="<?php echo $packagecost; ?>" paymenttype="<?php echo $directory_package["PERIOD_TYPE_COST_EXCL_GST"]; ?>"  typerel="<?php echo $directory_package["PERIOD_TYPE_COST_EXCL_GST"] * (($directory_package["TAX_RATE"] + 100) / 100); ?>" rel="<?php echo $packagecost * (($directory_package["TAX_RATE"] + 100) / 100); ?>" type="radio" name="package<?php echo $objectid ?>" id="advanced<?php echo $objectid ?>" value="Advanced"> <span >Advanced</span></input>
                                                                                    <?php
                                                                                    if ($i < ($arraysize - 1) && ($dir_id == $directory_packages[$i + 1]["REC_ID"])) {
                                                                                        $directory_package = $directory_packages[$i + 1];
                                                                                        $i = $i + 1;
                                                                                    }
                                                                                }
                                                                                ?>
                                                                                <?php
                                                                                if ($directory_package["PACK_NAME"] == "Premium Listing") {
                                                                                    if ($isperiodstart=='true') {
                                                                                        $remainperiodcount = $duration->calculateNumberOfPeriodTypes($directory_package["DIRECTORY_PERIOD_END"], $directory_package["PAY_TYPE"]);
                                                                                        $packagecost = $directory_package["PERIOD_TYPE_COST_EXCL_GST"] * $remainperiodcount;
                                                                                    } else {
                                                                                        $packagecost = $directory_package["COST_EXCL_GST"];
                                                                                    }
                                                                                    ?>
                                                                                    <input onclick="packageHandling(this)"  dirid="<?php echo $dir_id ?>" actprice="<?php echo $packagecost; ?>" paymenttype="<?php echo $directory_package["PERIOD_TYPE_COST_EXCL_GST"]; ?>" typerel="<?php echo $directory_package["PERIOD_TYPE_COST_EXCL_GST"] * (($directory_package["TAX_RATE"] + 100) / 100); ?>" rel="<?php echo $packagecost * (($directory_package["TAX_RATE"] + 100) / 100); ?>" type="radio" name="package<?php echo $objectid ?>" id="premium<?php echo $objectid ?>" value="Premium"> <span >Premium</span></input>
                                                                                    <?php
                                                                                    if ($i < ($arraysize - 1) && ($dir_id == $directory_packages[$i + 1]["REC_ID"])) {
                                                                                        $directory_package = $directory_packages[$i + 1];
                                                                                        $i = $i + 1;
                                                                                    }
                                                                                }
                                                                                ?>


                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td colspan="3"><label>Price:</label><span  name="curruncyLabel" id="curruncyLabel"> NZD </span><span id="prod_price<?php echo $objectid ?>"  name="prod_price" ><?php echo $standardpack; ?></span></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <input  startdate="<?php echo $directory_package["DIRECTORY_PERIOD_START"]; ?>" enddate="<?php echo $directory_package["DIRECTORY_PERIOD_END"]; ?>" dirid="<?php echo $dir_id ?>" rel="<?php echo $objectid ?>" parentid="0" payment_method="one_off" cate="directory" rec_id="<?php echo $dir_id ?>" id="scItemButton<?php echo $objectid ?>" class="scItemButton scBtn" value="Add Product" type="button"></td>
                                                                        </tr>
                                                                    </tbody></table>
        <?php
        $param_arr = array($dir_id);
        $dir_per_addi_offers = $tpldirPerioddao->selectDirPeriodsAdditionalOffers($dbconn, $param_arr);
        if (count($dir_per_addi_offers) > 0) {
            foreach ($dir_per_addi_offers as $dir_per_addi_offer) {
                $objectid = $objectid + 1;

                if ($isperiodstart=='true') {
                   // error_log("Additional Offers..........TRUEEEEEEEEEEEEEEEEEEEEEEEEE........................:");
                    $remainperiodcount = $duration->calculateNumberOfPeriodTypes($directory_package["DIRECTORY_PERIOD_END"], $directory_package["PAY_TYPE"]);
                    $packagecost = $dir_per_addi_offer["PERIOD_TYPE_COST_EXCL_GST"] * $remainperiodcount;
                } else {
                    error_log("Additional Offers..........FALSEeeeeeeeeeeeeeeeeeeeeeeeeee........................:");
                    $packagecost = $dir_per_addi_offer["COST_EXCL_GST"];
                }
                ?>
                                                                        <div class="scProductOfferListItem">
                                                                            <table border="0" cellpadding="5" cellspacing="5">
                                                                                <tbody><tr>

                                                                                        <td  valign="top"><strong><span id="add_prod_name<?php echo $objectid ?>"><?php echo $dir_per_addi_offer["NAME"]; ?></span></strong>

                                                                                        </td>

                                                                                        <td>
                <?php echo $dir_per_addi_offer["DESCRIPTION"]; ?>  
                                                                                        </td>

                                                                                    </tr>
                                                                                    <tr>

                                                                                        <td colspan="2">
                                                                                            <label>Price:</label><span  name="curruncyLabel" id="curruncyLabel"> NZD </span><span id="prod_price<?php echo $objectid ?>" name="prod_price"  actprice="<?php echo $packagecost ?>"  paymenttype="<?php echo $dir_per_addi_offer["PERIOD_TYPE_COST_EXCL_GST"]; ?>" typerel="<?php echo $dir_per_addi_offer["PERIOD_TYPE_COST_EXCL_GST"] * (($directory_package["TAX_RATE"] + 100) / 100); ?>"   rel="<?php echo $packagecost * (($directory_package["TAX_RATE"] + 100) / 100); ?>"><?php echo $packagecost * (($directory_package["TAX_RATE"] + 100) / 100); ?></span>
                                                                                        </td>

                                                                                    </tr>
                                                                                    <tr>

                                                                                        <td>
                                                                                            <input  startdate="<?php echo $directory_package["DIRECTORY_PERIOD_START"]; ?>" enddate="<?php echo $directory_package["DIRECTORY_PERIOD_END"]; ?>" rel="<?php echo $objectid ?>" dirid="<?php echo $dir_id ?>" proname="<?php echo $dir_per_addi_offer["NAME"]; ?>" payment_method="one_off" rel="<?php echo $objectid ?>" parentid="<?php echo $parentid ?>" cate="additinaloffer" id="scAddiItemButton<?php echo $objectid ?>" rec_id="<?php echo $dir_per_addi_offer["REC_ID"] ?>" class="scItemButton scBtn" value="Add Product" type="button">
                                                                                        </td>
                                                                                    </tr>
                                                                                    <td>

                                                                                    </td>
                                                                                </tbody></table>
                                                                        </div>
                <?php
            }
        }
        ?>

                                                                <span id="paymentmathod<?php echo $dir_id ?>" startid="<?php echo $startid ?>" endid="<?php echo $objectid ?>"></span>

                                                            </div>
                                                            </br>


        <?php
    }
}
?>





                                                </div>  
                                                <!-- End Product list HTML -->

                                                <!-- Cart HTML -->
                                                <div id="sc_cart" class="scCart">
                                                    <select class="scProductSelect" id="product_list" name="product_list[]" style="display:none;" multiple="multiple">
                                                    </select>              
                                                    <div class="scCartListHead">
                                                        <table width="100%"><tbody><tr>
                                                                    <td>&nbsp;&nbsp;Directory</td>
                                                                    <td width="80px">Year</td>
                                                                    <td width="80px">Package</td>
                                                                    <td width="140px">Amount ($)</td>
                                                                </tr></tbody></table>
                                                    </div>
                                                    <!-- Cart List: Selected Products are listed inside div below -->
                                                    <div id="sc_cartlist" class="scCartList"></div>

                                                    <div class="scCartListHead">
                                                        <table width="100%"><tbody><tr>
                                                                    <td>
                                                                        <!-- Message Label -->
                                                                        <span id="sc_message"></span></td>
                                                                    <td width="100px">Subtotal ($):</td>
                                                                    <td width="100px"  align='right'>

                                                                        <span id="sc_subtotal">0.00</span>
                                                                    </td>
                                                                    <td width='75px' align='left'></td>
                                                                </tr></tbody></table>
                                                    </div>
                                                    <br>

                                                        <input type="hidden" value="" id="total_amount" name="total_amount">
                                                            <input type="hidden" value="" id="client_cart" name="client_cart">
                                                                <input type="hidden" value="" id="curruncy_code" name="curruncy_code">
                                                                    <input type="hidden" value="" id="cartaction" name="action"/>
                                                                    <input type="hidden" value="NZD" id="fromcurruncy" name="fromcurruncy"/>
                                                                    <input type="hidden" value="" id="convertcurruncy" name="convertcurruncy"/>

                                                                    </div>
                                                                    <!-- End Cart HTML -->
                                                                    </div>
                                                                    </form>
                                                                    </td></tr>
                                                                    </tbody></table>
                                                                    </body></html>