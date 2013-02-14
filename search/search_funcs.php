<?PHP
include_once("breadcrumb.php");
$isBeverages = "false";

function display_search_results($sid, $page, $no_rows) {
    if ($_SESSION["search_results.num_rows"] > 0) {
        $xmlDat = construct_search_data($sid, $page, $no_rows);
        // prepare XSLT processor
        $xp = new XsltProcessor();
        $xsl = new DomDocument;
        $xsl->load('templates/search.xsl');
        $xp->importStylesheet($xsl);
        // Prepare XML data
        $xml_doc = new DomDocument;
        //echo print_r($xmlDat, false);
        $xml_doc->loadXML($xmlDat);
        $params['searchWord'] = $_REQUEST["search_key"];
        $params['target'] = '_parent';
        $params['count'] = $_SESSION["search_results.num_rows"];
        $params['pos'] = '1';
        $xp->setParameter('', $params);
        $html = $xp->transformToXML($xml_doc);
    } else {
        $html = getSearchNoMatched($_REQUEST["search_key"]);
    }
    print '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">';
    print '<html xmlns="http://www.w3.org/1999/xhtml" >';
    print '<head>';
    print '<META http-equiv=Content-Type content="text/html; charset=iso-8859-1">';
    print '<title>getSearchNoMatched</title>';
    print '<link rel="stylesheet" href="styles/search.css" type="text/css"/>';
    print '</head>';
    print '<body style="overflow: auto;">';
    //showSkycraper();
    print '<table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td valign="top">';
    print $html;
    print '</td></tr></table>';
    print '</body>';
    print '</html>';
}

function display_search_results_from_tree($search_key, $page, $no_rows) {
    $xmlDat = construct_search_data_from_tree($search_key, $page, $no_rows);
    // prepare XSLT processor
    $xp = new XsltProcessor();
    $xsl = new DomDocument;
    $xsl->load('templates/search.xsl');
    $xp->importStylesheet($xsl);
    // Prepare XML data
    $xml_doc = new DomDocument;
    //$xml_doc->load("search.xml");
    $xml_doc->loadXML($xmlDat);

    $bc = new CBreadcrumb();
    $bc->convert_entity(false);
    $bc->process('c', $search_key);
    $bcrumb = $bc->getText();
    $params['bc'] = $bcrumb;
    $params['morepage'] = 'view.php';
    $xp->setParameter('', $params);

    // transform the XML into HTML using the XSL file
    $html = $xp->transformToXML($xml_doc);
    if ($html) {
        ?><head>
            <META http-equiv=Content-Type content="text/html; charset=utf-8">
            <title></title> 
            <link rel="stylesheet" href="styles/style.css"/>
        </head>
        <?php
        print '<body style="overflow: auto;"><table width="100%" border="0"><tr><td valign="top">';
        print $html;
        print '</td><td align="right" valign="top">';
        showSkycraper();
        print '</td></tr></table></body>';
    } else {
        trigger_error('XSL transformation failed.', E_USER_ERROR);
    } // if
}

function construct_search_data_from_tree($search_key, $page, $no_rows) {
    global $db, $DB_HOST, $DB_NAME, $DB_USER, $DB_PASS;
    $mysqli = new mysqli($DB_HOST, $DB_USER, $DB_PASS, $DB_NAME);
    $result = $mysqli->query("CALL do_search_supplier('" . $search_key . "')");
    if ($result) {    
        $cnt = 0;
        $xml = '<?xml version="1.0" encoding="ISO-8859-1"?>';
        $xml .= '<result>';
        while ($record = $result->fetch_array()) {
            $limit = 220;
            $name = str_replace('&', '&amp;', $record["NAME"]);
            $tname = str_replace('&', '&amp;', $record["TRADING_AS_NAME"]);
            $text = "";
            if ($record["COMPANY_PROFILE_TEXT"] != "") {
                if (strlen($record["COMPANY_PROFILE_TEXT"]) > $limit) {
                    $text = substr($record["COMPANY_PROFILE_TEXT"], 0, strrpos(substr($record["COMPANY_PROFILE_TEXT"], 0, $limit), ' ')) . '...';
                    $text = str_replace('&', '&amp;', $text);
                }
            }
            $address = $record["PHYSICAL_ADDRESS_BUILDING_ADDRESS"] . " " . $record["PHYSICAL_ADDRESS_STREET_ADDRESS"];
            $address .= $record["PHYSICAL_ADDRESS_SUBURB"] != "" ? ", " . $record["PHYSICAL_ADDRESS_SUBURB"] : "";
            $address .= $record["PHYSICAL_ADDRESS_CITY"] != "" ? ", " . $record["PHYSICAL_ADDRESS_CITY"] : "";
            $address .= $record["PHYSICAL_ADDRESS_COUNTRY"] != "" ? " " . $record["PHYSICAL_ADDRESS_COUNTRY"] : "";
            $address = str_replace('&', '&amp;', $address);
            $more = 'view.php?key=s,' . $record["REC_ID"] . ',search';
            $xml .= '<item table="s" rid="' . $record["REC_ID"] . '" name="' . $name . '" address="' . $address . '" tname="' . $tname . '" ';

            if (trim($record["TELEPHONE_NO"]) != "") {
                $xml .= 'tel="' . $record["TELEPHONE_NO"] . '" ';
            }
            if (trim($record["EMAIL_ADDRESS"]) != "") {
                $xml .= 'email="' . $record["EMAIL_ADDRESS"] . '" ';
            }
            if (trim($record["WEBSITE_ADDRESS"]) != "") {
                $xml .= 'web="' . $record["WEBSITE_ADDRESS"] . '" ';
            }
            if (trim($record["WEB_LOGO_LOCATION"]) != "") {
                $xml .= 'logo="' . $record["WEB_LOGO_LOCATION"] . '" ';
            }
            $xml .='more="' . $more . '">' . $text . '</item>';
        } // while
        $xml .= '</result>';
    } // if
    else {
        die("error:" . $mysqli->error);
    } // else
    return $xml;
}

function construct_search_data($sid, $page, $no_rows) {
    global $db, $DB_HOST, $DB_NAME, $DB_USER, $DB_PASS;
    $isBeverages;
    $mysqli = new mysqli($DB_HOST, $DB_USER, $DB_PASS, $DB_NAME);
    $tbl_type = 'c';
    $query = "CALL get_search_page('$sid',$page,$no_rows);";
    $xml = '<?xml version="1.0" encoding="ISO-8859-1"?>';
    $total_rows = $_SESSION["search_results.num_rows"];
    $result = $mysqli->query($query);
    if ($result) {
        $xml .= '<result>';
        while ($row = $result->fetch_array()) {
            $tbl = strtolower($row["TABLE_NAME"]);
            $rec_id = strtolower($row["TABLE_REC_ID"]);
            $record = $db->getrow("REC_ID = " . $rec_id, $tbl);
            switch ($tbl) {
                case "tpl_supplier":
                    $tbl_type = 's';
                    $limit = 80;
                    $name = str_replace("&", "&amp;", $record["NAME"]);
                    $tname = str_replace("&", "&amp;", $record["NAME"]);
                    $text = "";
                    if ($record["COMPANY_PROFILE_TEXT"] != "") {
                        if (strlen($record["COMPANY_PROFILE_TEXT"]) > $limit) {
                            $text = substr($record["COMPANY_PROFILE_TEXT"], 0, strrpos(substr($record["COMPANY_PROFILE_TEXT"], 0, $limit), ' ')) . '...';
                            $text = str_replace('&', '&amp;', $text);
                        }
                    }
                    $address = $record["PHYSICAL_ADDRESS_BUILDING_ADDRESS"] . " " . $record["PHYSICAL_ADDRESS_STREET_ADDRESS"];
                    $address .= $record["PHYSICAL_ADDRESS_SUBURB"] != "" ? ", " . $record["PHYSICAL_ADDRESS_SUBURB"] : "";
                    $address .= $record["PHYSICAL_ADDRESS_CITY"] != "" ? ", " . $record["PHYSICAL_ADDRESS_CITY"] : "";
                    $address .= $record["PHYSICAL_ADDRESS_COUNTRY"] != "" ? " " . $record["PHYSICAL_ADDRESS_COUNTRY"] : "";
                    $address = str_replace('&', '&amp;', $address);
                    //$xml .= '<item table="s" rid="'.$rec_id.'" name="'.$name.'" address="'.$address.'" tname="'.$record["TRADING_AS_NAME"].'" tel="'.$record["TELEPHONE_NO"].'" ';
                    $xml .= '<item table="s" rid="' . $rec_id . '" name="' . $name . '" address="' . $address . '" tname="' . $tname . '" tel="' . $record["TELEPHONE_NO"] . '" ';
                    if ($record["EMAIL_ADDRESS"] != "") {
                        $xml .= 'email="' . $record["EMAIL_ADDRESS"] . '" ';
                    }
                    if ($record["WEBSITE_ADDRESS"] != "") {
                        $xml .= 'web="' . $record["WEBSITE_ADDRESS"] . '" ';
                    }
                    if ($record["WEB_LOGO_LOCATION"] != "") {
                        $xml .= 'logo="' . $record["WEB_LOGO_LOCATION"] . '" ';
                    }
                    $xml .= 'more="view.php?key=s,' . $rec_id . ',search">' . $text . '</item>';
                    break;
                case "tpl_product":
                    $tbl_type = 'p';
                    $name = str_replace('&', '&amp;', $record["LABEL_NAME"]);
                    $text = str_replace('&', '&amp;', $record["TEXT"]);
                    $xml .= '<item table="p" rid="' . $rec_id . '" name="' . $name . '" more="view.php?key=p,' . $rec_id . ',search" ';
                    if ($record["WEB_IMAGE_LOCATION"] != "") {
                        $xml .= 'logo="' . $record["WEB_IMAGE_LOCATION"] . '" ';
                    }
                    $res = $db->getrow("REC_ID = " . $rec_id, $tbl);
                    $catID = $res["PRODUCT_CATEGORY_REC_ID"];

                    $bc = new CBreadcrumb();
                    $bc->process($tbl_type, $catID);
                    $bc->excLastLevel(false);
                    $bcrumb = $bc->getText();
                    $xml .='bc="' . $bcrumb . '" ';

                    $xml .='>' . $text . '</item>';
                    break;
                case "tpl_brand":
                    $tbl_type = 'b';
                    $name = str_replace('&', '&amp;', $record["NAME"]);
                    $xml .= '<item table="b" rid="' . $rec_id . '" name="' . $name . '" more="view.php?key=b,' . $rec_id . ',search"';
                    if ($record["WEB_LOGO_LOCATION"] != "") {
                        $xml .= 'logo="' . $record["WEB_LOGO_LOCATION"] . '" ';
                    }
                    $xml .='></item>';
                    break;
                case "tpl_product_category":
                    $tbl_type = 'c';
                    $name = str_replace('&', '&amp;', $record["NAME"]);
                    $text = str_replace('&', '&amp;', $record["TEXT"]);
                    $bc = new CBreadcrumb();
                    $bc->process('c', $record["REC_ID"]);
                    $bc->excLastLevel(true);
                    $bcrumb = $bc->getText();
                    if (isFinalLeaf($rec_id) == "false") {
                        $more = 'search.php?search_key=' . $rec_id . '&#38;ref=tree&#38;last=n';
                    } else {
                        CheckBeverages($rec_id);
                        if ($isBeverages == "true") {
                            $more = 'view.php?key=c,' . $rec_id . ',tree&#38;cat=bevc';
                            $isBeverages = "false"; //reset back after assignment
                        } else {
                            $more = 'search.php?search_key=' . $rec_id . '&#38;ref=tree';
                        }
                    }
                    $xml .= '<item bc="' . $bcrumb . '" rid="' . $rec_id . '" name="' . $name . '" more="' . $more . '">' . $text . '</item>';
                    break;
            } //switch
        } // while
        $totalpages = $total_rows / $no_rows;
        if ($total_rows % $no_rows > 1)
            $totalpages++;
        $startIdx = GetNewSetPaging($totalpages, $page);
        $xml .= '<nav pages="' . $totalpages . '" cur="' . $page . '" startind="' . $startIdx . '" limit="10" href="doSearch.php?search_key=' . $_REQUEST["search_key"] . '&#38;tt=' . $tbl_type . '&#38;p="/>';
        $xml .= '</result>';
    } // if
    else {
        die("error:" . $mysqli->error);
    } // else
    return $xml;
}

function isFinalLeaf($catID) {
    global $db;
    $isLeaf = "false";
    $childs = db::getrows("PARENT_PRODUCT_CATEGORY_REC_ID=" . $catID . " LIMIT 1", "tpl_product_category", "");
    if (sizeof($childs) == 0)
        $isLeaf = "true";
    return $isLeaf;
}

function GetNewSetPaging($totalpages, $page) {
    $PAGELIMIT = 10;
    if ($page <= $PAGELIMIT) {
        if ($page > ($PAGELIMIT / 2)) { // 1 2 3 4 5 {6 7 8 9 10}
            $page = $PAGELIMIT / 2;
        } else if ($page <= ($PAGELIMIT / 2)) { // {1 2 3 4 5} 6 7 8 9 10
            $page = 1;
        }
    } else {
        $quo = intval($page / $PAGELIMIT);
        $rem = $page % $PAGELIMIT;
        if ($quo <= 0) {
            if ($rem > ($PAGELIMIT / 2)) { // 21 22 23 24 25 {26 27 28 29} 30
                $page = $page - $rem + $PAGELIMIT / 2; // 27 - 7 = 20 + 5 = 25
            } else { // {21 22 23 24 25} 26 27 28 29 30
                $page = $page - $rem - $PAGELIMIT / 2; // 22 - 2 = 20 - 5 = 15
            }
        } else {
            $page = $page - $PAGELIMIT / 2;
        }
    }
    return $page;
}

function CheckBeverages($catID) {
    global $db, $isBeverages;
    $record = $db->getrow("REC_ID = " . $catID, "tpl_product_category");
    if (!is_null($record["PARENT_PRODUCT_CATEGORY_REC_ID"]))
        CheckBeverages($record["PARENT_PRODUCT_CATEGORY_REC_ID"]);
    else {
        if ($record["NAME"] == "Beverages") {
            $isBeverages = "true";
        }
    }
}

function showSkycraper() {
    ?>			

    <?php
}

function getSearchNoMatched($keyword) {
    $html = "";
    $html .= "<div id='searchNoMatched'>";
    $html .= "You searched for <i>\"" . $keyword . "\"</i><br/><br/>";
    $html .= "<b>No matches found.</b><br/>";
    $html .= "<br/>";
    $html .= "Search Tips:<br/>";
    $html .= "<br/>";
    $html .= "<ul>";
    $html .= "<li>Try typing more general keyword in the search box.</li>";
    $html .= "<li>Try using the navigational tree on the left.</li>";
    $html .= "<li>Try fewer keywords.</li>";
    $html .= "<li>Try different keywords.</li>";
    $html .= "<li>Make sure all the words are spelt correctly.</li>";
    $html .= "<li>Contact us if your company needs to be listed here.</li>";
    $html .= "</ul>";
    $html .= "</div>";
    return $html;
}
?>