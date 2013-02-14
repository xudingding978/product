<html> 
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>Hospitality Administrator</title> 
        <link type="text/css" href="styles/themes/redmond/jquery-theme.css" rel="stylesheet" />
        <link type="text/css" href="styles/style.css" media="all" rel="stylesheet" />
        <script type="text/javascript" src="scripts/jquery-min.js"></script>
        <script type="text/javascript" src="scripts/jquery-ui.min.js"></script>
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
        <script type="text/javascript">

            var digitsOnly = /[1234567890]/g;
            var integerOnly = /[0-9\.]/g;
            var alphaOnly = /[A-Z]/g;

            function restrictCharacters(myfield, e, restrictionType) {
                if (!e)
                    var e = window.event
                if (e.keyCode)
                    code = e.keyCode;
                else if (e.which)
                    code = e.which;
                var character = String.fromCharCode(code);

                // if they pressed esc... remove focus from field...
                if (code == 27) {
                    this.blur();
                    return false;
                }

                // ignore if they are press other keys
                // strange because code: 39 is the down key AND ' key...
                // and DEL also equals .

                //if (!e.ctrlKey && code!=9 && code!=8 && code!=36 && code!=37 && code!=38 && (code!=39 || (code==39 && character=="'")) && code!=40) {
                if (!e.ctrlKey && code != 9 && code != 8 && code != 36 && code != 37 && code != 38 && code != 39 && code != 40) {
                    if (character.match(restrictionType)) {
                        return true;
                    } else {
                        return false;
                    }

                }
            }

        </script>
        <?php
        echo $koolajax->Render();
        $tree = new CategoryTree();
        ?>
    </head>
    <body>
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
                <div id="category_path"><?php echo 'root' ?> </div><hr/>
                <div id="category_info">
                    <center>
                        <table>
                            <tr>
                                <td>Category / Sub Category Name:</td>
                            </tr>
                            <tr>
                                <td><input type="text" id="catname" size="28" value="" <?php echo $readonly; ?> /></td>
                            </tr>
                            <tr>
                                <td>Print Order:</td>
                            </tr>
                            <tr>
                                <td><input type="text" id="prntorder" size="28" onkeypress="return restrictCharacters(this, event, integerOnly);" value="" <?php echo $readonly; ?> /></td>
                            </tr>
                            <tr>
                                <td>Print Image Location:</td>
                            </tr>
                            <tr>
                                <td><input type="text" id="prntimgloc" size="28" value="" <?php echo $readonly; ?> /></td>
                            </tr>
                            <tr>
                                <td>Web Image Location:</td>
                            </tr>
                            <tr>
                                <td><input type="text" id="webimgloc" size="28" value="" <?php echo $readonly; ?> /></td>
                            </tr>
                            <tr>
                                <td>Code:</td>
                            </tr>
                            <tr>
                                <td><input type="text" id="code" size="28" value="" <?php echo $readonly; ?> /></td>
                            </tr>
                            <tr>
                                <td>Text:</td>
                            </tr>
                            <tr>
                                <td><textarea id="textinfo" rows="4" cols="29" style="width: 260px;" <?php echo $readonly; ?> ></textarea></td>
                            </tr>
                        </table>
                        <input type="hidden" id="dir" size="37" value="<?php echo $_GET['dir'] ?>"/>
                        <input type="hidden" id="action" size="37" value="<?php echo $_GET['action'] ?>"/>
                        <input type="hidden" id="recid" size="37" value=""/>
                    </center>
                </div>
            </div>
            <script type="text/javascript" src="scripts/category-control.js"></script>
    </body>
</html>