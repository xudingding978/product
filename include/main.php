<?php
global $path_doc_root;
$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once "KoolPHPSuite/KoolAjax/koolajax.php";
include_once $path_doc_root . "/config.php";

function GoHome() {
    echo "<script>";
    echo " self.location='/';";
    echo "</script>";
}

function GoToLocation($Location) {
    echo "<script>";
    echo "self.location='$Location';";
    echo "</script>";
}

function BuildPageHead($ATitle, $ADescription, $AKeywords, $ACallbackScript) {
    global $koolajax;
    $path_doc_root = $_SERVER["DOCUMENT_ROOT"];
    require $path_doc_root . "/config.php";
    include_once($path_doc_root . "/dashboard/initialize-callbacks.php");
    ?>
    <head>
        <title>Business Directory - <?php echo $ATitle ?> -  Website</title>
        <META http-equiv="Content-Type" content="text/html; charset=iso-8859-1"/>
        <META NAME="Title" CONTENT="Business Directory - $ATitle"/>
        <META NAME="Description" CONTENT="$ADescription"/>
        <META NAME="Keywords" CONTENT="$AKeywords"/>
        <META NAME="Copyright" CONTENT="Copyright  <?php echo date("Y") ?> MediaWeb Ltd, PO Box 5544, Wellesley, Auckland, New Zealand. Email: it@mediaweb.co.nz Phone: +64 9 521 3000 Fax: +64 9529 3001 MediaWeb Ltd. All rights reserved."/>
        <META HTTP-EQUIV="CONTENT-LANGUAGE" CONTENT="English"/>
        <link rel="shortcut icon" href="/images/icon.ico" type="image/x-icon"/>
        <link href="/site.css" rel="stylesheet" type="text/css"/>
        <script language="javascript">AC_FL_RunContent = 0;</script>
        <script src="/ac.js" language="javascript"></script>
        <link href="/dashboard/ADPMask.css" rel="stylesheet" type="text/css">
        <script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script>
        <script src="http://api.addressfinder.co.nz/af?key=<?php echo $AddressFinderAPIKey; ?>&v=1" type="text/javascript"></script>
        <script type="text/javascript" src="/include/js/address-helper.js"></script>
        <?php
        if ($ACallbackScript != "")
            include_once($ACallbackScript);

        echo $koolajax->Render();
        ?>
        <link rel="stylesheet" type="text/css" href="/dashboard/styles/kooltabs_override.css"/>
    </head>
    <?php
}

function BuildPage($ATitle, $ADescription, $AKeywords, $ACallbackScript, $APageScript) {
    //global $koolajax;
    global $km;
    echo "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n";
    echo "<html>\n";
    BuildPageHead($ATitle, $ADescription, $AKeywords, $ACallbackScript);

    echo "<body bgcolor=\"#f7f7f7\" LeftMargin=\"0\" TopMargin=\"0\" MarginWidth=\"0\" MarginHeight=\"0\" >\n";

    include_once("../dashboard/login-script.php");

    echo "  <center>\n";
    echo "    <table height=\"100%\" width=\"1024px\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">\n";
    echo "      <tr>\n";

    echo "        <td bgcolor=\"#EEEEEE\">\n";
    echo "          <table height=\"100%\" width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">\n";

    echo "            <tr>\n";

    // OK lets draw the left hand line
    echo "              <td background=\"/images/grey_spacer.gif\" style=\"background-repeat:repeat-y\"><img src=\"/images/spacer.gif\"></td>\n";

    // OK lets draw the page content
    echo "              <td valign=\"top\">\n";
    echo "                <table width=\"100%\" border=\"0\" cellpadding=\"2\" cellspacing=\"0\">\n";
    echo "                  <tr>\n";
    echo "                    <td>\n";

    // OK, now lets write the page header
    //include("mainheader.php");

    echo "                    </td>\n";
    echo "                  </tr>\n";
    echo "                  <tr>\n";
    echo "                    <td>\n";

    include_once($APageScript);

    echo "                    </td>\n";
    echo "                  </tr>\n";
    echo "                </table>\n";
    echo "              </td>\n";

    // OK lets draw the right hand line
    echo "              <td background=\"/images/grey_spacer.gif\" style=\"background-repeat:repeat-y\"><img src=\"/images/spacer.gif\"></td>\n";

    echo "            </tr>\n";
    echo "          </table>\n";
    echo "        </td>\n";
    echo "      </tr>\n";

    // OK, now lets write the page footer
  //  include("mainfooter.php");

    echo "    </table>\n";
    echo "  </center>\n";

    echo "</body>\n";

    //includes the addressfind API script for setting the address
//    echo " af_initialise(";
//    echo "	  document.getElementById(\"singleaddress\"), show_address, {";
//    echo "    	search_type: function() {";
//    echo "		return searchType";
//    echo "		}/*,";
//    echo "		extraParams:{";
//    echo "         rule:function(){";
//    echo "          return \"partial\";"; 
//    echo "         }}*/";
//    echo "     }";
//    echo " );";
//		


    echo "</html>\n";
}

function BuildDialog($ATitle, $ADescription, $AKeywords, $ACallbackScript, $APageScript) {
    if (!isset($_SESSION))
        session_start();
    global $koolajax;
    echo "<html>\n";
    echo "<head>\n";
    echo "<META NAME=\"Description\" CONTENT=\"$ADescription\">\n";
    echo "<META NAME=\"Keywords\" CONTENT=\"$AKeywords\">\n";
    echo "<META NAME=\"Copyright\" CONTENT=\"Copyright " . date("Y") . " MediaWeb Ltd.  All rights reserved.\">\n";
    echo "<META HTTP-EQUIV=\"CONTENT-LANGUAGE\" CONTENT=\"English\">\n";
    echo "<link href=\"/site.css\" rel=\"stylesheet\" type=\"text/css\">\n";
    echo "<script language=\"javascript\">AC_FL_RunContent = 0;</script>\n";
    echo "<script src=\"/ac.js\" language=\"javascript\"></script>\n";

    $path_doc_root = $_SERVER["DOCUMENT_ROOT"];
    include_once($path_doc_root . "/dashboard/initialize-callbacks.php");

    if ($ACallbackScript != "")
        include_once($ACallbackScript);

    echo $koolajax->Render();

    echo "</head>\n";
    echo "<body bgcolor=\"#EEEEEE\" LeftMargin=\"0\" TopMargin=\"0\" MarginWidth=\"0\" MarginHeight=\"0\">\n";
    echo "  <center>\n";

    include($APageScript);

    echo "  </center>\n";

    echo "</body>\n";
    echo "</html>\n";
}
?>