<?php

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once($path_doc_root . "/include/db_class.php");

class CBreadcrumb {

    private $breadcrumb = array();
    private $excludeLast = false;
    private $isConvertEntity = true; //allow html type entity like & should be &amp;

    function __construct() {
        
    }

    function __destruct() {
        
    }

    public function gettreefromproduct($rec_id) {

        return "test breadcrumb from gettreefromproduct";
    }

    public function gettreefromsupplier($rec_id) {
        return "test breadcrumb from gettreefromsupplier";
    }

    public function get($rec_id, $type) {
        
    }

    public function gettreefrombrand($rec_id) {
        return "test breadcrumb from gettreefrombrand";
    }

    public function convert_entity($istrue) {
        $this->isConvertEntity = $istrue;
    }

    public function process($type, $rec_id) {
        $err = false;
        $db = new Db;
        switch ($type) {
            case 'c':
                $table = 'tpl_category';
                break;
            case 'p':
                $table = 'tpl_product';
                break;
            case 's':
                //$record = $db->getrow("SUPPLIER_REC_ID", $rec_id, "tpl_supplier_category","");
                $record = $db->getrow("SUPPLIER_REC_ID = " . $rec_id, "tpl_supplier_category");
                if ($record)
                    $rec_id = $record["CATEGORY_REC_ID"];
                else {
                    $err = true;
                }
                break;
            case 'b': $table = 'tpl_brand';
                break;
        }
        if ($err == false) {
            $records = $db->getrows("REC_ID = " . $rec_id, "tpl_category", "");
            if ($records) {
                foreach ($records as $record) {
                    if ($this->isConvertEntity == true) {
                        $name = str_replace('&', '&amp;', $record["NAME"]);
                    } else {
                        $name = $record["NAME"];
                    }
                    $this->breadcrumb[count($this->breadcrumb) + 1] = $name;
                    if (!is_null($record["PARENT_CATEGORY_REC_ID"])) {
                        $this->process($type, $record["PARENT_CATEGORY_REC_ID"]);
                    }
                }
            }
        } else {
            $bc = "no referrence from the tree.";
        }
        unset($db);
    }

    public function excLastLevel($exc) {
        $this->excludeLast = $exc;
    }

    public function getText() {
        $parents = array_reverse($this->breadcrumb);
        $cntr = 0;
        $len = count($parents);
        $bc = "";
        foreach ($parents as $parent) {
            $cntr++;
            if ($cntr < $len) {
                $bc .= ' > ' . $parent;
            } else {
                if ($this->excludeLast == false)
                    $bc .= ' > ' . $parent;
            }
        }
        return $bc;
    }

}

?>