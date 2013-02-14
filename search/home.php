<?php
if (!isset($_SESSION))
    session_start();
$sid = session_id();
$MAXLEN = 255;    // Maximum length for text display for every field;
$MAXPAGEMATCHES = 5; // Max matches displayed per page
$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once($path_doc_root . "/config.php");
//include_once($path_doc_root . "/include/db_class.php");
include_once($path_doc_root . "/include/tpldb_class.php");
include_once($path_doc_root . "/include/KoolPHPSuite/KoolAjax/koolajax.php");
//include_once($path_doc_root."/include/popular_tag_funcs.php");
//include_once($path_doc_root."/include/ads_funcs.php");
//$db = new Db;
//$skyscrapers=get_ads("skyscraper");

$mysqli = new mysqli($DB_HOST, $DB_USER, $DB_PASS, $DB_NAME);
/* check connection */
if (mysqli_connect_errno()) {
    printf("<br />Connect failed: %s\n", mysqli_connect_error());
    exit();
}

$tpldb = new tpldb();
?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"></meta>
        <title>iframe for search home page</title> 
        <link rel="stylesheet" href="styles/screen-new.css"/>
        <link rel="stylesheet" href="../custom.css"/>

<!--<script language="javascript">
    parent.document.getElementById('browse_container_group').style.display='true';
    parent.document.getElementById('content_zone').className = 'content_zone group';
</script>-->
        <?php echo $koolajax->Render(); ?>
    </head>
    <body onload="parent.document.getElementById('content_zone').className = 'content_zone group';"><!--style="overflow: auto;"-->
        <div id="wrap" class="group">
            <?php

            function sortArray(&$arr, $fields) {
                if (count($fields) == 0 || count($arr) <= 1)
                    return;
                if (!is_array($fields))
                    $fields = Array($fields);
                $code = '$retval = strnatcmp($a["' . $fields[0] . '"], $b["' . $fields[0] . '"]);';
                for ($i = 1; $i < count($fields); $i++) {
                    $code .= 'if(!$retval) $retval = strnatcmp($a["' . $fields[$i] . '"], $b["' . $fields[$i] . '"]);';
                }
                $code .= 'return $retval;';
                uasort($arr, create_function('$a,$b', $code));
            }

            $xml_data = '<?xml version="1.0" encoding="ISO-8859-1"?>';
            $xml_data .= '<frontpage-listing>';
            $xml_data .= '<slider-listing>';
            // construct xml data for featured front-page listings
            foreach ($DIRECTORIES as $DIRECTORY_ID) {
                $suppliermedia_result = $tpldb->getSupplierMediaByFeatured($DIRECTORY_ID, 'pg');
                if ($suppliermedia_result) {
                    $directory_featured[] = $suppliermedia_result;
                    foreach ($directory_featured as $directory_listings) {
                        foreach ($directory_listings as $listing) {
                            $xml_data .= '<listing>';
                            $xml_data .= '<title>' . $listing['TRADING_AS_NAME'] . '</title>';
                            $xml_data .= '<desc>' . $listing['COMPANY_PROFILE_TEXT'] . '</desc>';
                            $xml_data .= '<image>' . $listing['MEDIA_URL'] . '</image>';
                            $xml_data .= '</listing>';
                        }
                    }
                }
            }
            $xml_data .= '</slider-listing>';

            // construct xml data for categories
            foreach ($DIRECTORIES as $DIRECTORY_ID) {
                $directory_categories[] = tpldb::GetDirectoryCategoriesByName($DIRECTORY_ID);
            }
            $xml_data .='<category-listing>';
            foreach ($directory_categories as $categories) {
                // sort the array by print order
                $order = array('PRINT_ORDER', 'NAME');
                sortArray($categories, $order);
                foreach ($categories as $category) {
                    if ($category['WEB_IMAGE_LOCATION']) {
                        $xml_data .='<category>';
                        $xml_data .='<rec_id>' . $category['REC_ID'] . '</rec_id>';
                        $xml_data .='<name>' . $category['NAME'] . '</name>';
                        $xml_data .='<web_image_location>' . $category['WEB_IMAGE_LOCATION'] . '</web_image_location>';
                        $xml_data .='</category>';
                    }
                }
            }
            $xml_data .='</category-listing>';
            $xml_data .= '<featured-listing>';
            $xml_data .= '<listing>';
            $xml_data .= '<title>Corporate Speaker Company</title>';
            $xml_data .= '<category>Professional Speakers</category>';
            $xml_data .= '<desc>Let us help you with finding your next amazing speaker.</desc>';
            $xml_data .= '<image>/media/photo_gallery/stephbarney_keynote-speaker.jpg</image>';
            $xml_data .= '</listing>';
            $xml_data .= '<listing>';
            $xml_data .= '<title>Corporate Events Company</title>';
            $xml_data .= '<category>Business Services</category>';
            $xml_data .= '<desc>Get your next event underway with our team of experts.</desc>';
            $xml_data .= '<image>/media/photo_gallery/corp-event.jpg</image>';
            $xml_data .= '</listing>';
            $xml_data .= '<listing>';
            $xml_data .= '<title>Corporate Trainer Company</title>';
            $xml_data .= '<category>Trainers and Coaches</category>';
            $xml_data .= '<desc>Need to find the right trainer for your business.</desc>';
            $xml_data .= '<image>/media/photo_gallery/corporate_training.jpg</image>';
            $xml_data .= '</listing>';
//            $xml_data .= '<listing>';
//            $xml_data .= '<title>Ann Hotel </title>';
//            $xml_data .= '<category>Travel</category>';
//            $xml_data .= '<desc>Description on Ann Hotel</desc>';
//            $xml_data .= '<image>http://images.hotels-world.com/2//org/825/hotelPhoto/425_Barcelo_Edinburgh_Carlton_Hotel.jpg</image>';
//            $xml_data .= '</listing>';
            $xml_data .= '</featured-listing>';
//            $xml_data .= '<featured-deals>';
//            $xml_data .= '<listing>';
//            $xml_data .= '<dc-amount>$2</dc-amount>';
//            $xml_data .= '<dc-detail>Delivery -90% off</dc-detail>';
//            $xml_data .= '<business>Tayu</business>';
//            $xml_data .= '<image>http://www.bigoven.com/pics/rs/256/salmon-sushi-2.jpg</image>';
//            $xml_data .= '</listing>';
//            $xml_data .= '<listing>';
//            $xml_data .= '<dc-amount>$12</dc-amount>';
//            $xml_data .= '<dc-detail>60% off for a dessert at Mexican</dc-detail>';
//            $xml_data .= '<business>Mexican</business>';
//            $xml_data .= '</listing>';
//            $xml_data .= '<listing>';
//            $xml_data .= '<dc-amount>$58,100</dc-amount>';
//            $xml_data .= '<dc-detail>Testing Deals</dc-detail>';
//            $xml_data .= '<business>Japanese Restaurant</business>';
//            $xml_data .= '</listing>';
//            $xml_data .= '<listing>';
//            $xml_data .= '<dc-amount>$30</dc-amount>';
//            $xml_data .= '<dc-detail>Theater -40% off</dc-detail>';
//            $xml_data .= '<business>Theater</business>';
//            $xml_data .= '</listing>';
//            $xml_data .= '</featured-deals>';
            $xml_data .= '</frontpage-listing>';




            // process through xsl template

            $xp = new XSLTProcessor();
            $xsl = new DomDocument();

            $xsl->load('templates/view_home.xsl');
            $xp->importStylesheet($xsl);
            // Prepare XML data
            $xml_doc = new DomDocument();
            //encode the UTF-8 to handle TM & (C) & (R) etc
            $xml_data_encoded = utf8_encode($xml_data);
            //print $xmlDat;
            //load the xml into DOM Object $xml_doc
            $xml_doc->loadXML($xml_data_encoded);
            // transform the XML into HTML using the XSL file
            $html = $xp->transformToXML($xml_doc);
            if ($html) {
                print $html;
            } else {
                trigger_error('XSL transformation failed.', E_USER_ERROR);
            } // if
            ?>    
        </div><!--/wrap-->    
    </body>
</html>
