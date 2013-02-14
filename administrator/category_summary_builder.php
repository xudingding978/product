<?php

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once($path_doc_root . "/config.php");
global $KoolControlsFolder;
global $KoolControlsFolderName;
require_once($KoolControlsFolder . 'KoolGrid/koolgrid.php');
require_once($KoolControlsFolder . 'KoolAjax/koolajax.php');


include_once($path_doc_root . "/include/db_class.php");
require($KoolControlsFolder . "KoolTreeView/kooltreeview.php");
require($KoolControlsFolder . "KoolAjax/koolajax.php");


$koolajax->scriptFolder = './../include/' . $KoolControlsFolderName . '/KoolAjax';

if ($koolajax->isCallback)
    sleep(0);

function CB_buildTpl_category_Summary() {
    $treeBuilder = new treeBuilder();
    $treeBuilder->addDataToTpl_category_Summary();
}

class treeBuilder {

    private $db;
    private $tempTreeModel;

    function __construct() {
        $this->db = new Db;
        $this->tempTreeModel = array();
    }

    function buidtreeRoot() {
        $root_categories = $this->db->getrows("PARENT_PRODUCT_CATEGORY_REC_ID is NULL AND PRINT_ORDER is not NULL ORDER BY PRINT_ORDER ASC", "tpl_product_category", "");
        foreach ($root_categories as $category) {
            $this->temptotalNumber = 0;
            $parent_id = $category["REC_ID"];
            $children = $this->db->getrows("PARENT_PRODUCT_CATEGORY_REC_ID=" . $parent_id, "tpl_product_category", "");
            if (sizeof($children) > 0) {
//edit tree model
                $childrenTreeNode = new tNode('root', $category['NAME'], $category['REC_ID'], 0, false, '');
                array_push($this->tempTreeModel, $childrenTreeNode);
//-------------------------------
                $this->addChildren($children);
            }
        }
        $this->sumSupplierNumberForParent();
        $this->cutZeroTree();
    }

    function addChildren($children) {
        foreach ($children as $child) {
            $parent_id = $child["REC_ID"];
            $children = $this->db->getrows("PARENT_PRODUCT_CATEGORY_REC_ID=" . $parent_id, "tpl_product_category", "");
            if (sizeof($children) > 0) {
// edit tree model
                $childrenTreeNode = new tNode($child['PARENT_PRODUCT_CATEGORY_REC_ID'], $child['NAME'], $child['REC_ID'], 0, false, '');
                array_push($this->tempTreeModel, $childrenTreeNode);
//-----------------------
                $this->addChildren($children);
            } else {
                $amount = $this->db->getSuppliersByRecID($parent_id);
                if ($amount['count'] == null) {
                    $amount['count'] = 0;
                }
// edit tree model
                $childrenTreeNode = new tNode($child['PARENT_PRODUCT_CATEGORY_REC_ID'], $child['NAME'], $child['REC_ID'], $amount['count'], true, '');
                array_push($this->tempTreeModel, $childrenTreeNode);
//-----------------------
            }
        }
    }

    function sumSupplierNumberForParent() {
        for ($i = sizeof($this->tempTreeModel) - 1; $i > 0; $i--) {
            $tempNode = $this->tempTreeModel[$i];
            $targetParentID = $tempNode->PARENT_ID;
            $numberOfSuppliers = $tempNode->numberOfSuppliers;
            if ($tempNode->finalLeaf) {
                for ($j = $i - 1; $j > 0; $j--) {
                    $tagartNode = $this->tempTreeModel[$j];
                    if ($tagartNode->REC_ID == $targetParentID) {
                        $tagartNode->numberOfSuppliers = $tagartNode->numberOfSuppliers + $numberOfSuppliers;
                        $targetParentID = $tagartNode->PARENT_ID;
                    }
                }
            }
        }
    }

    function cutZeroTree() {
        for ($i = sizeof($this->tempTreeModel) - 1; $i >= 0; $i--) {
            $tempNode = $this->tempTreeModel[$i];
            if ($tempNode->numberOfSuppliers == 0) {
                unset($this->tempTreeModel[$i]);
            }
        }
    }

    function addDataToTpl_category_Summary() {
        $this->buidtreeRoot();
        $this->db->emptyTpl_category_summary();
        foreach ($this->tempTreeModel as $tnode) {

            $this->db->addDataToTpl_category_Summary($tnode->REC_ID, $tnode->PARENT_ID, $tnode->NAME, $tnode->finalLeaf, $tnode->numberOfSuppliers, $tnode->imageURL);
        }
    }

    function getCurrentTreeView() {
        $treeTable = $this->db->getrows("PARENT_PRODUCT_CATEGORY_REC_ID='root'", 'tpl_category_summary', '');
        $currentTreeView = $this->getTreeModel();
        foreach ($treeTable as $tnode) {
            $node = $currentTreeView->Add($tnode['PARENT_PRODUCT_CATEGORY_REC_ID'], $tnode['NODE_ID'], htmlspecialchars($tnode['NAME']) . '  (' . $tnode['NUMBER_OF_SUPPLIERS'] . ')', false, $tnode['IMAGEURl'], "");
            //$node = $this->treeview->Add($parent_id, "~" . $parent_id, "", false, "blank.png", "");
            $node->addData("NAME", $tnode['NAME']);
            $node->addData("REC_ID", $tnode['NODE_ID']);
            $node->addData("isFinalLeaf", $tnode['IS_FINAL_LEAF']);
            $node = $currentTreeView->Add($tnode['NODE_ID'], "~" . $tnode['NODE_ID'], "", false, "", "");
        }
        return $currentTreeView;
    }

    function getFullTreeView() {

        $treeTable = $this->db->getrows("PARENT_PRODUCT_CATEGORY_REC_ID!=''", 'tpl_category_summary', '');
        $currentTreeView = $this->getTreeModel();
        foreach ($treeTable as $tnode) {
            $node = $currentTreeView->Add($tnode['PARENT_PRODUCT_CATEGORY_REC_ID'], $tnode['NODE_ID'], $tnode['NAME'] . '  (' . $tnode['NUMBER_OF_SUPPLIERS'] . ')', false, $tnode['IMAGEURl'], "");
            $node->addData("NAME", $tnode['NAME']);
            $node->addData("REC_ID", $tnode['NODE_ID']);
            $node->addData("isFinalLeaf", $tnode['IS_FINAL_LEAF']);
            $node = $currentTreeView->Add($tnode['NODE_ID'], $tnode['NODE_ID'], $tnode['NAME'], true, "", "");
        }
        return $currentTreeView;
    }

    function getDataBaseTreeView() {
        $currentTreeView = $this->getTreeModel();
        foreach ($this->tempTreeModel as $tnode) {
            $node = $currentTreeView->Add($tnode->PARENT_ID, $tnode->REC_ID, $tnode->NAME . '  (' . $tnode->numberOfSuppliers . ')', true, $tnode->imageURL, "");
            $node->addData("NAME", $tnode->NAME);
            $node->addData("REC_ID", $tnode->REC_ID);
            $node->addData("isFinalLeaf", $tnode->finalLeaf);
        }
        return $currentTreeView;
    }

    function getTreeModel() {
        global $KoolControlsFolderName;
        $treeview = new KoolTreeView("treeview");
        //       $treeview->imageFolder = './../include/' . $KoolControlsFolderName . '/KoolTreeView/icons';
        $treeview->styleFolder = './../include/' . $KoolControlsFolderName . '/KoolTreeView/styles/default';
        $treeview->selectEnable = true;
        $treeview->width = "345px";
        $treeview->height = "auto";
        $treeview->overflow = "auto";
        $treeview->showLines = true;
        $root = $treeview->getRootNode();
        $root->expand = true;
        $root->showPlusMinus = false;
        $root->visible = false;
        //  $root->image = "blank.png";
        return $treeview;
    }

}

class tNode {

    public $PARENT_ID;
    public $NAME;
    public $REC_ID;
    public $numberOfSuppliers = 0;
    public $finalLeaf;
    public $imageURL;

    function __construct($PARENT_ID, $NAME, $REC_ID, $numberOfSuppliers, $finalLeaf, $imageURL) {
        $this->NAME = $NAME;
        $this->PARENT_ID = $PARENT_ID;
        $this->REC_ID = $REC_ID;
        $this->numberOfSuppliers = $numberOfSuppliers;
        $this->finalLeaf = $finalLeaf;
        $this->imageURL = $imageURL;
    }

}

?>