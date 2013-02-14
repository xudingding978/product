<!DOCTYPE html PUBLIC "-//WAPFORUM//DTD XHTML Mobile 1.0//EN" "http://www.wapforum.org/DTD/xhtml-mobile10.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
    <head>
        <meta http-equiv="Content-Type" content="application/xhtml+xml; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" type="text/css" href="mobile.css" />
        <title>TONZ Test Site</title>
    </head>

    <body>
        <?php
        $path_doc_root = $_SERVER["DOCUMENT_ROOT"];
        // db connections & credentials, drec, maxr, page and rad
        include_once("../config.php");
        // class for db functions
        include_once("../include/tpldb_class.php");
        // xml parser
        //include_once("xml_parser.php");
        include_once("xml_transform.php");
        // class for performing all searches
        include_once("search_funcs.php");

        if (isset($_GET['mode'])) {
            if ($_GET['mode'] == 'debug') {
                // get header for mobile site
                include_once("m.header.php");
                // get header for mobile site
                include_once("m.navigation.php");
            }
        }

        //if (!isset($_GET['sreg'])) {
//		$region = "%";
//	} else {
//		$region = $_GET['sreg'];
//		$region_ret = reg_getRegionsBySearchString($region);
//		echo parseXML($region_ret['reg_xml'], $region_ret['reg_xml'], $drec, $maxr, $page);
//		echo "<div class=\"LinkListHeader\">Regions</div>";
//		echo "<div class=\"LinkList\">";
//		echo "</div>";
//	}
        // check for a search type and get the search type and call proper function
        if (isset($_GET['stype'])) {
            switch ($_GET['stype']) {
                case 'cat': // CATEGORY SEARCH
                    if (isset($_GET['crec'])) {
                        $crec = $_GET['crec'];
                        // display back button
                        echo '<a onClick="history.go(-1);return true;"><div id="back_button">Go Back</div></a>';
                    } else {
                        $crec = 0;
                        echo XMLTransform("<xml/>","templates/view_tpl_search.xsl");
                    }
                    $search_ret = cat_search($crec, $drec);
                    echo XMLTransform($search_ret['sup_xml'], "templates/view_tpl_supplier_summary.xsl");
                    echo "<br />";
                    echo XMLTransform($search_ret['cat_xml'], "templates/view_tpl_categories.xsl");
 
                    break;
                case 'sup':
                    if (isset($_GET['crec'])) {
                        $crec = $_GET['crec'];
                    } else {
                        $crec = 0;
                    }
                    // display back button
                    echo '<a onClick="history.go(-1);return true;"><div id="back_button">Go Back</div></a>';
                    if ($_GET['srec']) {
                        $search_ret = sup_search($_GET['srec'], $crec);
                        echo XMLTransform($search_ret, "templates/view_tpl_supplier.xsl");
                    } else {
                        $search_ret = sup_search($crec, $drec);
                        echo XMLTransform($search_ret, "templates/view_tpl_supplier_summary.xsl");
                    }
                    break;
                case 'reg':
                    // searching via regions for suppliers
                    if (isset($_GET['srec'])) {
                        // we have a supplier for the region, return supplier data
                        echo '<a onClick="history.go(-1);return true;"><div id="back_button">Go Back</div></a>';
                        $search_ret = reg_getSupplierXML($_GET['srec']);
                        echo XMLTransform($search_ret, "templates/view_tpl_supplier.xsl");
                    } else {
                        if (!isset($_GET['sreg'])) {
                            // no region defined, return all regions in the database
                            $search_ret = reg_getRegionsBySearchString("%", $drec);
                            echo XMLTransform($search_ret, "templates/view_tpl_regions.xsl");
                        } else {
                            // we have a region string to search with, lets use that
                            echo '<a onClick="history.go(-1);return true;"><div id="back_button">Go Back</div></a>';
                            $search_ret = reg_getRegionsBySearchString($_GET['sreg'], $drec);
                            echo XMLTransform($search_ret, "templates/view_tpl_supplier_summary.xsl");
                        }
                    }
                    break;
            }
        } else if (isset($_GET['lat']) && isset($_GET['lng'])) {
            $search_ret = loc_search($_GET['lat'], $_GET['lng'], $rad);
            echo XMLTransform($search_ret, "templates/view_tpl_supplier_summary.xsl");
            
        } else if (isset($_GET['lat']) || isset($_GET['lng'])) { // error: only one of lat or lng was set
            echo "self.location='/mobile/?stype=cat';"; // redirect to category search
            
        } else if (isset($_GET['key'])) {
            echo '<a onClick="history.go(-1);return true;"><div id="back_button">Go Back</div></a>';
            echo 'You searched for "' . $_GET['key'] . "\"";
            echo "<div class=\"hr\"/>";
            $keyword = $_GET['key'];
            $search_ret = key_getResultsByKeyword($drec, $keyword );
            //export_var($search_ret);
            print_r($search_ret['reg_xml']);
            echo XMLTransform($search_ret['cat_xml'], "templates/view_tpl_search_summary.xsl");
            echo XMLTransform($search_ret['reg_xml'], "templates/view_tpl_regions.xsl");

        } else {
            // this is the catch all for all request NON Matching
            echo "<script>";
            //echo "self.location='/mobile/?stype=cat';";
            echo "</script>";
        }
        ?>

        <?php
        // get footer for mobile site
        include_once("m.footer.php");
        ?>
    </body>
</html>
