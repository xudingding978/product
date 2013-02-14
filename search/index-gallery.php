<?php
$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once($path_doc_root . '/config.php');
global $KoolControlsFolder;
require $KoolControlsFolder . '/KoolAjax/koolajax.php';
$koolajax->scriptFolder = $KoolControlsFolder . 'KoolAjax';
include_once($path_doc_root . "/administrator/category_summary_builder.php");
//if ($koolajax->isCallback)
//    sleep(10);
$koolajax->enableFunction("getRowsFromDataBase");
$koolajax->enableFunction("CB_getRootAndchildrenNode");
$mysqli = new mysqli($DB_HOST, $DB_USER, $DB_PASS, $DB_NAME);
$treeBuilder = new treeBuilder();
?>
<div id="" class="group">
    <div class="group"> 
        <div id='categories'>
            
            <div id="container" class="variable-sizes clearfix isotope">
                <div class="corner-stamp"> 
                    <a href="index.php" title="Hospitality Business Directory" alt="NZ's Number 1 Hospitality Search Engine" id="index">
                        <div class="browseicon">
                        </div>
                    </a>
                    <div id="treeview" class="group"> 
                        <?php echo $treeBuilder->getCurrentTreeView()->Render(); ?> 
                    </div>
                </div>
                <div class="element alkali metal width2 height2 isotope-item">Food Products and Supplies</div>
                <div class="element alkaline-earth metal width2 height2 isotope-item" data-category="alkali-earth" data-symbol="Li">Hospitality Equipment &amp; Products</div>
                <div class="element noble-gas metal isotope-item">Beverages</div>
                <div class="element alkali metal isotope-item">Food Products and Supplies</div>
                <div class="element halogen metal width2 isotope-item">Hospitality Equipment &amp; Products</div>
                <div class="element metalloid metal isotope-item">Beverages</div>
                <div class="element alkali metal isotope-item">Food Products and Supplies</div>
                <div class="element alkali metal width2 isotope-item">Hospitality Equipment &amp; Products</div>
                <div class="element noble-gas metal width2 height2 isotope-item">test11111111</div>
            </div>
        </div>
    </div>
</div>
<script type="text/javascript" src="scripts/treeloader.js"> </script>
<script type="text/javascript" language="JavaScript" src="scripts/home.js"> </script>
<script type="text/javascript" language="JavaScript" src="scripts/search.js"> </script>


