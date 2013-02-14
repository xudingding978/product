<?php
if (!isset($_SESSION))
    session_start();
$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once($path_doc_root . "/common/sessionhandler.php");
include_once($path_doc_root . "/include/config.php");
include_once($path_doc_root . "/include/db_class.php");
include_once($path_doc_root . "/include/tpldb_class.php");
include_once($path_doc_root . "/include/KoolPHPSuite/KoolAjax/koolajax.php");
?>
<table width="100%" border="0" cellpadding="0" cellspacing="8">
    <tr valign="top">
        <td width="60%" valign="top" class="BodyText">
            <table border="0" cellpadding="0" cellspacing="4">
                <tr valign="top">
                    <td valign="top" class="BodyText">
                        Welcome to the Hospitalitybiz.co.nz portal.  This portal interface allows you to update your directory listing details and submit your changes to our production team. <br /> MediaWeb offer three different listing levels. Premium, Advanced, and Standard.
                    </td>
                </tr>
                <tr valign="top">
                    <td valign="top" class="BodyText">
                        <br />
                        <table border="0" cellpadding="1" cellspacing="1">
                            <tr>
                                <td>
                                </td>
                                <td> 	
                                    <form id="supplier_listing">
                                        <?php
                                        $tpl_db = new tpldb;
                                        $directory_offerings = $tpl_db->getDirectoryOfferings($shadow_root_id);

                                        if ($directory_offerings) {
                                            foreach ($directory_offerings as $key => $directory_offering) {
                                                if ($directory_offering["NAME"] == 'Premium Listing')
                                                    echo "<input TYPE=\"button\" VALUE=\"Premium\" onClick=\"DoChangeListingType('" . $directory_offering["REC_ID"] . "');return false\">";
                                            }
                                        }
                                        ?>
                                    </form>
                                </td>
                                <td> 
                                    <form>
                                        <?php
                                        $tpl_db = new tpldb;
                                        $directory_offerings = $tpl_db->getDirectoryOfferings($shadow_root_id);

                                        if ($directory_offerings) {
                                            foreach ($directory_offerings as $key => $directory_offering) {
                                                if ($directory_offering["NAME"] == 'Advanced Listing')
                                                    echo "<input TYPE=\"button\" VALUE=\"Advanced\" onClick=\"DoChangeListingType('" . $directory_offering["REC_ID"] . "');return false\">";
                                            }
                                        }
                                        ?>
                                    </form>
                                </td>
                                <td>
                                    <form>
<?php
$tpl_db = new tpldb;
$directory_offerings = $tpl_db->getDirectoryOfferings($shadow_root_id);

if ($directory_offerings) {
    foreach ($directory_offerings as $key => $directory_offering) {
        if ($directory_offering["NAME"] == 'Standard Listing')
            echo "<input TYPE=\"button\" VALUE=\"Standard\" onClick=\"DoChangeListingType('" . $directory_offering["REC_ID"] . "');return false\">";
    }
}
?>
                                    </form>
                                </td>
                            </tr>
                            <tr>
                                <td class="BodyText"> Company Logo
                                </td>
                                <td class="BodyText"><center> <img src="/images/tick-black.png"> </img> </center>
                    </td>
                    <td class="BodyText"><center> - </center>
        </td>
        <td class="BodyText"><center> - </center>
</td>
</tr>                    
<tr>
    <td class="BodyText"> Company Profile (25 Words)
    </td>
    <td class="BodyText"><center> <img src="/images/tick-black.png"> </img> </center>
</td>
<td class="BodyText"><center> <img src="/images/tick-black.png"> </img> </center>
</td>
<td class="BodyText"><center> - </center>
</td>                  
</tr>
<tr>
    <td class="BodyText"> Contact Details
    </td>
    <td class="BodyText"><center> <img src="/images/tick-black.png"> </img> </center>
</td>
<td class="BodyText"><center> <img src="/images/tick-black.png"> </img> </center>
</td>
<td class="BodyText"><center> <img src="/images/tick-black.png"> </img> </center>
</td>                  
</tr>
<tr>
    <td class="BodyText"> Key Executives Contact
    </td>
    <td class="BodyText"><center> <img src="/images/tick-black.png"> </img> </center>
</td>
<td class="BodyText"><center> <img src="/images/tick-black.png"> </img> </center>
</td>
<td class="BodyText"><center> - </center>
</td>                  
</tr>
<tr>
    <td class="BodyText"> Branches/Agents
    </td>
    <td class="BodyText"> <center> <img src="/images/tick-black.png"> </img> </center>
</td>
<td class="BodyText"><center> - </center>
</td>
<td class="BodyText"><center> - </center>
</td>                  
</tr>
<tr>
    <td class="BodyText"> Product & Service Listings
    </td>
    <td class="BodyText"><center>UNLIMITED!</center>
</td>
<td class="BodyText"><center> 12 </center>
</td>
<td class="BodyText"><center> 5 </center>
</td>                  
</tr>
<tr>
    <td class="BodyText"> Brand Listings
    </td>
    <td class="BodyText"><center>UNLIMITED!</center> 
</td>
<td class="BodyText"><center> 5 </center>
</td>
<td class="BodyText"><center> - </center>
</td>                  
</tr>
</table>
</td>
</tr>
</table>
</td>  
<td abswidth="40%" valign="top" class="BodyText">
    <table border="0" cellpadding="8" cellspacing="0">
        <tr>
            <td height="100%">
<?php echo KoolScripting::Start(); ?>
        <updatepanel id="transactionpanel" class="cssframe">
            <content>
<?php
//include $path_doc_root . "/dashboard/transaction-details.php";
include "transaction-details.php";
?>
            </content>										
            <loading image=<?php $path_doc_root ?>"/include/KoolPHPSuite/KoolAjax/loading/5.gif"/>
        </updatepanel>
                <?php echo KoolScripting::End(); ?>	
</td>
</tr>              
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>