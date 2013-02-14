
        <?php
        if (!isset($_SESSION)) {
            session_start();
        }
        if (!isset($_SESSION["uid"])) {
            include("login.php");
            return;
        }

        $path_doc_root = $_SERVER["DOCUMENT_ROOT"];
        require_once ($path_doc_root . "/include/KoolPHPSuite/KoolAjax/koolajax.php");
        $koolajax->scriptFolder = "./../include/KoolPHPSuite/KoolAjax";
        include_once("category_treeview.php");
        $koolajax->enableFunction("CB_GetSelectedProductCategory");
        $koolajax->enableFunction("CB_CheckTimeout");
        if ($koolajax->isCallback)
            sleep(0);
        include_once("callbacks.php");
        ?>
  
        <?php
        echo $koolajax->Render();
        $tree = new CategoryTree();
        ?>
            <script type="text/javascript" src="scripts/category-control.js"></script>
        <div class="category_dlg_wrapper">
            <div class="category_dlg_left">
                <div id="category_tree">
                    <?php
                    if ($tree->maketree($_GET['dir'], $_GET['yr'])) {
                        echo $tree->render();
                    }
                    ?>
                </div>
            </div>
            <?php
            $readonly = "";
            if ($_GET['action'] == REMOVE) {
                $readonly = "readonly";
            }
            ?>
            <div class="category_dlg_right">
                <div id="category_path"> </div><hr/>
                <div id="category_info">
                    <center>
                        <table>
                            <tr>
                                <td>Category / Sub Category Name:</td>
                            </tr>
                            <tr>
                                <td><input type="text" id="catname" size="28" value=""  /></td>
                            </tr>
                            <tr>
                                <td>Print Order:</td>
                            </tr>
                            <tr>
                                <td><input type="text" id="prntorder" size="28" value=""  /></td>
                            </tr>
                            <tr>
                                <td>Print Image Location:</td>
                            </tr>
                            <tr>
                                <td><input type="text" id="prntimgloc" size="28" value=""  /></td>
                            </tr>
                            <tr>
                                <td>Web Image Location:</td>
                            </tr>
                            <tr>
                                <td><input type="text" id="webimgloc" size="28" value=""  /></td>
                            </tr>
                            <tr>
                                <td>Code:</td>
                            </tr>
                            <tr>
                                <td><input type="text" id="code" size="28" value="" /></td>
                            </tr>
                            <tr>
                                <td>Text:</td>
                            </tr>
                            <tr>
                                <td><textarea id="textinfo" rows="4" cols="29" style="width: 260px;"  ></textarea></td>
                            </tr>
                        </table>
                        <input type="hidden" id="dir" size="37" value=""/>
                        <input type="hidden" id="action" size="37" value=""/>
                        <input type="hidden" id="recid" size="37" value=""/>
                    </center>
                </div>
            </div>
