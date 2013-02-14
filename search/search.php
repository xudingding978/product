<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" >
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"></meta>
        <link rel="stylesheet" href="styles/style.css"/>
        <!--<link rel="stylesheet" href="styles/screen-new.css"/>-->
    </head>

    <?php
    $path_doc_root = $_SERVER["DOCUMENT_ROOT"];
    include_once($path_doc_root . "/config.php");
    if (isset($_REQUEST["ref"]) && $_REQUEST["ref"] == "tree") {
        include_once($path_doc_root . "/include/ads_class.php");
        include_once("search_funcs.php");
        require ($path_doc_root . "/include/KoolPHPSuite/KoolAjax/koolajax.php");
        global $db, $DB_HOST, $DB_NAME, $DB_USER, $DB_PASS;
        if ($koolajax->isCallback)
            sleep(0);
        $db = new Db;
        $mysqli = new mysqli($DB_HOST, $DB_USER, $DB_PASS, $DB_NAME);
        /* check connection */
        if (mysqli_connect_errno()) {
            printf("<br />Connect failed: %s\n", mysqli_connect_error());
            exit();
        }
        //echo $koolajax->Render();
        echo '<body >';
        echo '<div id="content_container">';
        $search_key = $_REQUEST["search_key"];
        // if the search is from tree then this is requesting for supplier only
        if (isset($_REQUEST["last"]) && $_REQUEST["last"] == "n") {
            header("Location: view.php?key=c," . $search_key . ",tree");
            exit;
        } else {
            display_search_results_from_tree($search_key, 1, 20);
        }
    } else {

        require_once($path_doc_root . "/include/KoolPHPSuite/KoolTabs/kooltabs.php");

        $kts = new KoolTabs("kts");
        $kts->height = "40px";
        $kts->styleFolder = "KoolPHPSuite/KoolTabs/styles/silver";
        $kts->scriptFolder = "./../include/KoolPHPSuite/KoolTabs";
        $kts->styleFolder = "vista";


        $sid = session_id();
        $ctotal_rows = getNumRows($_REQUEST["search_key"], $sid, 'tpl_category');
        $category_tab = $kts->addTab("root", "tcategory", "Categories (" . $ctotal_rows . ")" . $sid);
        $category_tab->height = "40px";
        $btotal_rows = getNumRows($_REQUEST["search_key"], $sid, 'tpl_brand');
        $brand_tab = $kts->addTab("root", "tbrand", "Brand (" . $btotal_rows . ")");
        $brand_tab->height = "40px";
        $stotal_rows = getNumRows($_REQUEST["search_key"], $sid, 'tpl_supplier');
        $supplier_tab = $kts->addTab("root", "tsupplier", "Supplier (" . $stotal_rows . ")");
        $supplier_tab->height = "40px";
        $ptotal_rows = getNumRows($_REQUEST["search_key"], $sid, 'tpl_product');
        $product_tab = $kts->addTab("root", "tproduct", "Product (" . $ptotal_rows . ")");
        $product_tab->height = "40px";

        if (isset($_POST["kts_selected"])) { // if post with user defined selection
            $_select_tab = $_POST["kts_selected"];
        } else { // this is the first time to display the result
            if ($ctotal_rows == 0) { // if category is empty then check for highest tab and select.
                $highest = max($ctotal_rows, $btotal_rows, $stotal_rows, $ptotal_rows);
                if ($highest == $ptotal_rows)
                    $_select_tab = "tproduct";
                else if ($highest == $btotal_rows)
                    $_select_tab = "tbrand";
                else if ($highest == $stotal_rows)
                    $_select_tab = "tsupplier";
                else
                    $_select_tab = "tcategory";
            }
            else { // if category contains something then select category tab
                $_select_tab = "tcategory";
            }
        }


        $kts->getTab($_select_tab)->selected = true;
        ?>
        <body>

            <form name="tabform" id="tabform" method="post">
                <!-- <INPUT type="text" name="text1" size="25" value="">  -->

                <div id="content_container_kooltabs">

    <?php
    echo $kts->Render();
    //echo $koolajax->Render();
    $kts->getTab($_select_tab)->selected = true;
    $keyword = "";
    ?>
                </div>
                <div class="multipages">

                    <?php
                    $page = 1;
                    if ($_select_tab == "tcategory") {
                        ?>
                        <div id="category_page" class="categoryPage" style="display:block;">

                        <?php
                        if (isset($_REQUEST["search_key"]) && strlen($_REQUEST["search_key"]) > 0) {
                            $keyword = $_REQUEST["search_key"];
                        }
                        print '<iframe id="search_target" src="doSearch.php?search_key=' . $keyword . '&tt=c&p=' . $page . '" scrolling="no" frameborder="0"></iframe>';
                        ?>

                        </div>
                            <?php
                        } else if ($_select_tab == "tbrand") {
                            ?>
                        <div id="brand_page" class="brandPage">
                            <?php
                            if (isset($_REQUEST["search_key"]) && strlen($_REQUEST["search_key"]) > 0) {
                                $keyword = $_REQUEST["search_key"];
                            }
                            print '<iframe id="search_target" src="doSearch.php?search_key=' . $keyword . '&tt=b&p=' . $page . '" scrolling="no" frameborder="0"></iframe>';
                            ?>			
                        </div>
                        <?php
                    } else if ($_select_tab == "tsupplier") {
                        ?>
                        <div id="supplier_page" class="supplierPage">

                            <?php
                            if (isset($_REQUEST["search_key"]) && strlen($_REQUEST["search_key"]) > 0) {
                                $keyword = $_REQUEST["search_key"];
                            }
                            print '<iframe id="search_target" src="doSearch.php?search_key=' . $keyword . '&tt=s&p=' . $page . '" scrolling="no" frameborder="0"></iframe>';
                            ?>	
                        </div>
                        <?php
                    } else {
                        ?>
                        <div id="product_page" class="productPage">
                        <?php
                        if (isset($_REQUEST["search_key"]) && strlen($_REQUEST["search_key"]) > 0) {
                            $keyword = $_REQUEST["search_key"];
                        }
                        print '<iframe id="search_target" src="doSearch.php?search_key=' . $keyword . '&tt=p&p=' . $page . '" scrolling="no" frameborder="0"></iframe>';
                        ?>
                        </div>
                            <?php
                        }
                        ?>	

                </div>
                <script type="text/javascript">
                    kts.registerEvent("OnSelect", function(sender, arg)
                    {
                        document.getElementById("tabform").submit();
                    });
                </script>
            </form>
        </body>
                        <?php
                    }

                    function getNumRows($search_key, $sid, $table) {
                        global $DB_HOST, $DB_NAME, $DB_USER, $DB_PASS, $isBeverages;
                        $total_rows = 0;
                        $mysqli = new mysqli($DB_HOST, $DB_USER, $DB_PASS, $DB_NAME);
                        if (mysqli_connect_errno()) {
                            printf("<br />Connect failed: %s\n", mysqli_connect_error());
                            exit();
                        }
                        $result = $mysqli->query("CALL do_numRows ('" . $search_key . "','" . $sid . "','" . $table . "')");
                        if ($result) {
                            $total_rows = $result->num_rows;
                            $mysqli->close();
                        }
                        return $total_rows;
                    }
                    ?>
</html>
