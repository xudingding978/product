<?php
if (!isset($_SESSION))
    session_start();
$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once($path_doc_root . "/config.php");
include_once("breadcrumb.php");
//include_once($path_doc_root."/include/db_class.php");
include_once($path_doc_root . "/include/KoolPHPSuite/KoolAjax/koolajax.php");
include_once($path_doc_root . "/include/ads_class.php");

$db = new Db;

echo $koolajax->Render();

if (isset($_REQUEST["key"])) {
    $key = $_REQUEST["key"];
    $params = explode(",", $key);
    $t = $params[0];     // table name
    $rec_id = $params[1];                                     // record id
    $from = $params[2];    // referrer
    //$active=$params[3];                                         //active user interface element
    switch ($t) {
        case "p":
            $xmlDat = construct_product_supplier_info($rec_id);
            display_view_result($t, $xmlDat);
            break;
        case "c":
            if ($from == "tree") { // this comes from tree node selection
                if (isset($_REQUEST['cat']) && $_REQUEST['cat'] == "bevc") { // beverages
                    // bevc = beverages last child or leaf
                    $xmlDat = construct_beverages_data_from_tree($rec_id);
                    display_view_result_from_tree($xmlDat); // the target is product
                } else if (isset($_REQUEST['cat']) && $_REQUEST['cat'] == "bevp") { // beverages
                    // bevc = beverages parent node
                    $xmlDat = construct_prodcategory_data_from_tree($rec_id, "bevp");
                    display_view_result_from_tree($xmlDat); // the target is category
                } else {
                    // this is the default that covers other product category or a parent beverages but not the leaf.
                    $xmlDat = construct_prodcategory_data_from_tree($rec_id, "");
                    display_view_result_from_tree($xmlDat); // the target is category
                }
            } else { // this is comes from search box
                $xmlDat = construct_prodcategory_data_from_search($rec_id);
                display_view_result($t, $xmlDat);
            }
            break;
        case "s":
            $xmlDat = construct_supplier_info($rec_id);
            display_view_result($t, $xmlDat);
            break;
        case "b":
            $xmlDat = construct_brand_supplier_info($rec_id);
            display_view_result($t, $xmlDat);
            break;
    }
}

function construct_beverages_data_from_tree($catID) {
    global $db;
    $bc = new CBreadcrumb();
    $bc->process('c', $catID);
    $bcrumb = $bc->getText();
    $xml = '<?xml version="1.0" encoding="ISO-8859-1"?>';
    $xml .= '<result bc="' . $bcrumb . '">';
    $products = $db->getrows("CATEGORY_REC_ID=" . $catID . " ORDER BY LABEL_NAME ASC", "tpl_product", "");
    foreach ($products as $product) {
        $name = str_replace('&', '&amp;', $product["LABEL_NAME"]);
        $name = str_replace('"', '\'', $name);
        $more = "view.php?key=p," . $product["REC_ID"] . ",leaf";
        $xml .= '<item rid="' . $product["REC_ID"] . '" name="' . $name . '" more="' . $more . '"/>';
    }
    $xml .= '</result>';
    return $xml;
}

function construct_prodcategory_data_from_tree($catID, $ref) {
    global $db;

    $bc = new CBreadcrumb();
    $bc->process('c', $catID);
    $bcrumb = $bc->getText();
    $categories = $db->getrows("PARENT_CATEGORY_REC_ID=" . $catID . " ORDER BY NAME ASC", "tpl_category", "");
    $xml = '<?xml version="1.0" encoding="ISO-8859-1"?>';
    $xml .= '<result bc="' . $bcrumb . '">';
    foreach ($categories as $category) {
        $recID = $category["REC_ID"];
        $name = str_replace('&', '&amp;', $category["NAME"]);
        $childs = $db->getrows("PARENT_CATEGORY_REC_ID=" . $recID . " ORDER BY NAME ASC", "tpl_category", "");
        if (sizeof($childs) == 0) { // display only the leaf
            if ($ref == "bevp") {
                $record = $db->getrows("CATEGORY_REC_ID=" . $recID . " LIMIT 1", "tpl_product", "");
                if ($record) { //check first - only beverage with product should be listed.
                    $more = "view.php?key=c," . $recID . ",tree&#38;cat=bevc";
                    $xml .= '<item rid="' . $recID . '" name="' . $name . '" more="' . $more . '"/>';
                }
            } else {
                $record = $db->getrows("CATEGORY_REC_ID=" . $recID . " LIMIT 1", "tpl_supplier_category", "");
                if ($record) { //check first - only category with supplier should be listed.
                    $more = "search.php?search_key=" . $recID . "&#38;ref=tree";
                    $xml .= '<item rid="' . $recID . '" name="' . $name . '" more="' . $more . '"/>';
                }
            }
        }
    }
    $xml .= '</result>';
    return $xml;
}

function construct_product_supplier_info($rec_id) {
    global $db;
    $xml = "";
    $record = $db->getrow("REC_ID = " . $rec_id, "tpl_product");
    if ($record) {
        $rec_id = $record["SUPPLIER_REC_ID"];
        $xml .= construct_supplier_info($rec_id);
    } else {
        $xml = '<?xml version="1.0" encoding="ISO-8859-1"?>';
        $xml .= '<result></result>';
    }
    return $xml;
}

function construct_prodcategory_data_from_search($rec_id) {
    global $db;
    $xml = "";
    $record = $db->getrow("CATEGORY_REC_ID = " . $rec_id, "tpl_supplier_category");
    if ($record) {
        $rec_id = $record["SUPPLIER_REC_ID"];
        $xml .= construct_supplier_info($rec_id);
    } else {
        $xml = '<?xml version="1.0" encoding="ISO-8859-1"?>';
        $xml .= '<result></result>';
    }
    return $xml;
}

function construct_supplier_info($rec_id) {
    global $db, $DB_HOST, $DB_NAME, $DB_USER, $DB_PASS;
    $mysqli = new mysqli($DB_HOST, $DB_USER, $DB_PASS, $DB_NAME);

    /* $bc = new CBreadcrumb();
      $bc->process('s', $rec_id);
      $bcrumb = $bc->getText(); */

    $xml = '<?xml version="1.0" encoding="ISO-8859-1"?>';
    $record = $db->getrow("REC_ID = " . $rec_id, "tpl_supplier");
    if ($record) {
        $cnt = 0;
        //$xml = '<result bc="'.$bcrumb.'">';
        $xml = '<result>';
        //while ($row = $result->fetch_array())  // loop though only expect 1 result
        //******************************************************
        // begin supplier information
        $name = str_replace('&', '&amp;', $record["NAME"]);
        $xml .= '<supplier name="' . $name . '">';
        //$xml .= '<activeui="'.$active.'">';
        $address = $record["PHYSICAL_ADDRESS_BUILDING_ADDRESS"] . " " . $record["PHYSICAL_ADDRESS_STREET_ADDRESS"];
        $address .= $record["PHYSICAL_ADDRESS_SUBURB"] != "" ? ", " . $record["PHYSICAL_ADDRESS_SUBURB"] : "";
        $address .= $record["PHYSICAL_ADDRESS_CITY"] != "" ? ", " . $record["PHYSICAL_ADDRESS_CITY"] : "";
        $address .= $record["PHYSICAL_ADDRESS_COUNTRY"] != "" ? " " . $record["PHYSICAL_ADDRESS_COUNTRY"] : "";
        if (trim($address) != "") {
            $address .= $record["POSTAL_ADDRESS_POST_CODE"] != "" ? " " . $record["POSTAL_ADDRESS_POST_CODE"] : "";
        }
        $address = str_replace('&', '&amp;', $address);
        $xml .= '<address>' . $address . '</address>';
        if (trim($record["TELEPHONE_NO"]) != "") {
            $xml .= '<tel>' . $record["TELEPHONE_NO"] . '</tel>';
        }
        if (trim($record["WEBSITE_ADDRESS"]) != "") {
            $xml .= '<website>' . $record["WEBSITE_ADDRESS"] . '</website>';
        }
        if (trim($record["EMAIL_ADDRESS"]) != "") {
            $xml .= '<email>' . $record["EMAIL_ADDRESS"] . '</email>';
        }
        if (trim($record["FREE_TELEPHONE_NO"]) != "") {
            $xml .= '<ftel>' . $record["FREE_TELEPHONE_NO"] . '</ftel>';
        }
        if (trim($record["FAX_NO"]) != "") {
            $xml .= '<fax>' . $record["FAX_NO"] . '</fax>';
        }
        if (trim($record["FREE_FAX_NO"]) != "") {
            $xml .= '<ffax>' . $record["FREE_FAX_NO"] . '</ffax>';
        }
        if (trim($record["COMPANY_PROFILE_TEXT"]) != "") {
            $txtProfile = str_replace('&', '&amp;', $record["COMPANY_PROFILE_TEXT"]);
            $xml .= '<profile>' . $txtProfile . '</profile>';
        }

        $postal_address = $record["POSTAL_ADDRESS_BUILDING_ADDRESS"] . " " . $record["POSTAL_ADDRESS_STREET_ADDRESS"];
        $postal_address .= $record["POSTAL_ADDRESS_SUBURB"] != "" ? ", " . $record["POSTAL_ADDRESS_SUBURB"] : "";
        $postal_address .= $record["POSTAL_ADDRESS_CITY"] != "" ? ", " . $record["POSTAL_ADDRESS_CITY"] : "";
        $postal_address .= $record["POSTAL_ADDRESS_COUNTRY"] != "" ? " " . $record["POSTAL_ADDRESS_COUNTRY"] : "";
        if (trim($postal_address) != "") {
            $postal_address .= $record["POSTAL_ADDRESS_POST_CODE"] != "" ? " " . $record["POSTAL_ADDRESS_POST_CODE"] : "";
            $postal_address = str_replace('&', '&amp;', $postal_address);
            $xml .= '<postal>' . $postal_address . '</postal>';
        }
        $xml .= '<weblogo>' . $record["WEB_LOGO_LOCATION"] . '</weblogo>';

        $xml .= '<physical_address_latitude>' . $record["PHYSICAL_ADDRESS_LATITUDE"] . '</physical_address_latitude>';
        $xml .= '<physical_address_longitude>' . $record["PHYSICAL_ADDRESS_LONGITUDE"] . '</physical_address_longitude>';


        if (isset($_REQUEST["tab"])) {
            $tab = $_REQUEST["tab"];
            switch ($tab) {
                case "map":
                    break;
                case "streetview":
                    $xml .= '<defaulttab>' . "streetview" . '</defaulttab>';
                    break;
                case "contact":
                    $xml .= '<defaulttab>' . "contact" . '</defaulttab>';
                    break;
            }
        }



        $supplier_rid = $record["REC_ID"];
        // end supplier information
        // *****************************************************
        // begin supplier images list

        $records = $db->getrows("SUPPLIER_REC_ID =" . $supplier_rid . " ORDER BY NAME ASC", "tpl_supplier_media", "");
        foreach ($records as $record) {
            $xml .= '<brand>' . $brandname . '</brand>';
        }


        // *****************************************************
        // begin supplier brand list
        $query = "CALL get_supplier_brand_list(" . $supplier_rid . ");";
        $result = $mysqli->query($query);
        if ($result) {
            while ($brandlist = $result->fetch_array()) {  // loop brand list
                $brandname = str_replace('&', '&amp;', $brandlist['NAME']);
                $xml .= '<brand>' . $brandname . '</brand>';
            }
            // end supplier product list
            $result->free();
        }

        //print $record["REC_ID"];			
        $records = $db->getrows("SUPPLIER_REC_ID =" . $supplier_rid . " ORDER BY NAME ASC", "tpl_supplier_branch", "");
        foreach ($records as $record) {
            $branch_name = str_replace('&', '&amp;', $record['NAME']);
            $xml .= '<branch name="' . $branch_name . '">';
            $address = $record["PHYSICAL_ADDRESS_BUILDING_ADDRESS"] . " " . $record["PHYSICAL_ADDRESS_STREET_ADDRESS"];
            $address .= ($record["PHYSICAL_ADDRESS_SUBURB"] != "" && $address != "") ? ", " . $record["PHYSICAL_ADDRESS_SUBURB"] : $record["PHYSICAL_ADDRESS_SUBURB"];
            $address .= ($record["PHYSICAL_ADDRESS_CITY"] != "" && $record["PHYSICAL_ADDRESS_SUBURB"] != "") ? ", " . $record["PHYSICAL_ADDRESS_CITY"] : $record["PHYSICAL_ADDRESS_CITY"];
            $address .= $record["PHYSICAL_ADDRESS_COUNTRY"] != "" ? " " . $record["PHYSICAL_ADDRESS_COUNTRY"] : "";
            if (trim($address) != "") {
                $address .= $record["POSTAL_ADDRESS_POST_CODE"] != "" ? " " . $record["POSTAL_ADDRESS_POST_CODE"] : "";
                $address = str_replace('&', '&amp;', $address);
                $xml .= '<address>' . $address . '</address>';
            }
            if (trim($record["TELEPHONE_NO"]) != "") {
                $xml .= '<tel>' . $record["TELEPHONE_NO"] . '</tel>';
            }
            if (trim($record["EMAIL_ADDRESS"]) != "") {
                $xml .= '<email>' . $record["EMAIL_ADDRESS"] . '</email>';
            }
            if (trim($record["FREE_TELEPHONE_NO"]) != "") {
                $xml .= '<ftel>' . $record["FREE_TELEPHONE_NO"] . '</ftel>';
            }
            if (trim($record["FAX_NO"]) != "") {
                $xml .= '<fax>' . $record["FAX_NO"] . '</fax>';
            }
            if (trim($record["FREE_FAX_NO"]) != "") {
                $xml .= '<ffax>' . $record["FREE_FAX_NO"] . '</ffax>';
            }
            $postal_address = $record["POSTAL_ADDRESS_BUILDING_ADDRESS"] . " " . $record["POSTAL_ADDRESS_STREET_ADDRESS"];
            $postal_address .= ($record["POSTAL_ADDRESS_SUBURB"] != "" && $postal_address != "") ? ", " . $record["POSTAL_ADDRESS_SUBURB"] : $record["POSTAL_ADDRESS_SUBURB"];
            $postal_address .= ($record["POSTAL_ADDRESS_CITY"] != "" && $record["POSTAL_ADDRESS_SUBURB"] != "" ) ? ", " . $record["POSTAL_ADDRESS_CITY"] : $record["POSTAL_ADDRESS_CITY"];
            $postal_address .= $record["POSTAL_ADDRESS_COUNTRY"] != "" ? " " . $record["POSTAL_ADDRESS_COUNTRY"] : "";
            if (trim($postal_address) != "") {
                $postal_address .= $record["POSTAL_ADDRESS_POST_CODE"] != "" ? " " . $record["POSTAL_ADDRESS_POST_CODE"] : "";
                $postal_address = str_replace('&', '&amp;', $postal_address);
                $xml .= '<postal>' . $postal_address . '</postal>';
            }
            $xml .= '</branch>';
        }

        $xml .= '</supplier>';
        //}
        $xml .= '</result>';
    } else {
        $xml .= '<result></result>';
    }
    return $xml;
}

function construct_brand_supplier_info($rec_id) {
    global $db;
    $xml = "";
    $record = $db->getrow("BRAND_REC_ID = " . $rec_id, "tpl_supplier_brand");
    if ($record) {
        $rec_id = $record["SUPPLIER_REC_ID"];
        $xml .= construct_supplier_info($rec_id);
    } else {
        $xml = '<?xml version="1.0" encoding="ISO-8859-1"?>';
        $xml .= '<result></result>';
    }
    return $xml;
}

function display_view_result($template, $xmlDat) {
    // prepare XSLT processor
    $xp = new XSLTProcessor();
    $xsl = new DomDocument();
    switch ($template) {
        case "p":
            $xsl->load('templates/view_tpl_supplier.xsl');
            break;
        case "c":
            $xsl->load('templates/view_tpl_supplier.xsl');
            break;
        case "s":
            $xsl->load('templates/view_tpl_supplier.xsl');
            break;
        case "b":
            $xsl->load('templates/view_tpl_supplier.xsl');
            break;
    }
    $xp->importStylesheet($xsl);
    // Prepare XML data
    $xml_doc = new DomDocument();
    //encode the UTF-8 to handle TM & (C) & (R) etc
    $xmlDat = utf8_encode($xmlDat);
    //print $xmlDat;
    $xml_doc->loadXML($xmlDat);
    // transform the XML into HTML using the XSL file
    $html = $xp->transformToXML($xml_doc);
    if ($html) {
        print $html;
    } else {
        trigger_error('XSL transformation failed.', E_USER_ERROR);
    } // if
}

function display_view_result_from_tree($xmlDat) {
    // prepare XSLT processor
    $xp = new XSLTProcessor();
    $xsl = new DomDocument;
    $xsl->load('templates/view_tpl_leaf.xsl');
    $xp->importStylesheet($xsl);
    // Prepare XML data
    $xml_doc = new DomDocument;
    //print $xmlDat;
    $xml_doc->loadXML($xmlDat);
    $xp->setParameter('', 'row', '1');
    $xp->setParameter('', 'col', '1');

    // transform the XML into HTML using the XSL file
    $html = $xp->transformToXML($xml_doc);
    if ($html) {
        ?>
        <html>
            <head>
                <META http-equiv=Content-Type content="text/html; charset=iso-8859-1">
                <title>view.php</title> 
                <link rel="stylesheet" href="styles/screen-new.css"/>
            </head>
            <body>
                <script type='text/javascript'>
                    activeselect(active);
                    // selectactivetab
                    var tabtoselect = active;
                </script>
                <!--<div id="wrap" class="group"> -->			
                <div style="width: 652px; margin-left: 5px; margin-top: 2px;">
        <?php print $html; ?>
                </div>
                <!--</div>wrap-->
            </body>
        </html>
        <?php
    } else {
        trigger_error('XSL transformation failed.', E_USER_ERROR);
    } // if
}
?>
            



