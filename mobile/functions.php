<?php

function getParentCategory($rec_id) {
    $db = new Db();
    $result = $db->getrows("REC_ID=" . $rec_id . " LIMIT 1", "tpl_product_category", "");
    if (isset($result[0]['PARENT_PRODUCT_CATEGORY_REC_ID'])) {
        return $result[0]['PARENT_PRODUCT_CATEGORY_REC_ID'];
    } else {
        return 0;
    }
}

function isRootLeaf($category) {
    if (sizeof($category['PARENT_PRODUCT_CATEGORY_REC_ID'])) {
        return false;
    } else {
        return true;
    }
}

function isFinalLeaf($rec_id) {
    $db = new Db();
    $childs = $db->getrows("PARENT_PRODUCT_CATEGORY_REC_ID=" . $rec_id . " LIMIT 1", "tpl_product_category", "");
    if (sizeof($childs)) {
        return false;
    } else {
        return true;
    }
}

function explodeTree($array, $delimiter = '_', $baseval = false) {
    if (!is_array($array))
        return false;
    $returnArr = array();
    foreach ($array as $key => $val) {
        // Get parent parts and the current leaf
        $parts = $array[$key][$val];
        $leafPart = array_pop($parts);

        // Build parent structure
        // Might be slow for really deep and large structures
        $parentArr = &$returnArr;
        foreach ($parts as $part) {
            if (!isset($parentArr[$part])) {
                $parentArr[$part] = array();
            } elseif (!is_array($parentArr[$part])) {
                if ($baseval) {
                    $parentArr[$part] = array('__base_val' => $parentArr[$part]);
                } else {
                    $parentArr[$part] = array();
                }
            }
            $parentArr = &$parentArr[$part];
        }

        // Add the final part to the structure
        if (empty($parentArr[$leafPart])) {
            $parentArr[$leafPart] = $val;
        } elseif ($baseval && is_array($parentArr[$leafPart])) {
            $parentArr[$leafPart]['__base_val'] = $val;
        }
    }
    return $returnArr;
}

function getRootDirectoryCategoriesXML($drec) {
    $tpldb = new tpldb();

    // get all categories in root directory
    $categoryList = $tpldb->GetDirectoryCategoriesByName($drec);

    // port to xml
    $doc = new DOMDocument('1.0');
    $root = $doc->createElement('categories');
    $root = $doc->appendChild($root);
    //-
    foreach ($categoryList as $category) {
        if (isRootLeaf($category)) {
            $newElement = $doc->createElement('category');
            $newElement = $root->appendChild($newElement);
            //--
            $elementREC_ID = $doc->createElement('rec_id', $category['REC_ID']);
            $elementREC_ID = $newElement->appendChild($elementREC_ID);
            //--
            $elementName = $doc->createElement('name', $category['NAME']);
            $elementName = $newElement->appendChild($elementName);
        }
    }
    return $doc->saveXML();
}

function active_categories_array(&$arr, $crec) {
    $arr = new ArrayObject;
    foreach ($arr as $branch)
        $categories_all = getParentCategory($branch['REC_ID']);
}

function array_to_xml($arr, &$xml) {
    foreach ($arr as $key => $value) {
        if (is_array($value)) {
            if (!is_numeric($key)) {
                $subnode = $xml->addChild(strtolower($key));
                array_to_xml($value, $subnode);
            } else {
                array_to_xml($value, $xml);
            }
        } else {
            $xml->addChild(strtolower($key), htmlspecialchars($value));
        }
    }
}

function supplier_array_to_xml($arr, &$xml) {
    foreach ($arr as $key => $value) {
        if (is_array($value)) {
            if (!is_numeric($key)) {
                $subnode = $xml->addChild(strtolower($key));
                supplier_array_to_xml($value, $subnode);
            } else {
                supplier_array_to_xml($value, $xml);
            }
        } else {
            $xml->addChild(strtolower($key), htmlspecialchars($value));
        }
    }
}

function regions_array_to_xml($arr, &$xml) {
    foreach ($arr as $key => $value) {
        if (is_array($value)) {
            if (!is_numeric($key)) {
                $subnode = $xml->addChild("$key");
                regions_array_to_xml($value, $subnode);
            } else {
                regions_array_to_xml($value, $xml);
            }
        } else {
            $element = $xml->addChild("region");
            $element->addChild("$key", htmlspecialchars($value));
        }
    }
}

class ArrayFunctions {

    public static function toString($array) {
        $result = array();
        $depth = 0;
        foreach ($array as $k => $v) {
            $show_val = ( is_array($v) ? "" : $v );

            // show the indents
            $result [] = str_repeat("  ", $depth);
            if ($depth == 0) {
                // this is a root node. no parents
                $result [] = "O ";
            } elseif (is_array($v)) {
                // this is a normal node. parents and children
                $result [] = "+ ";
            } else {
                // this is a leaf node. no children
                $result [] = "- ";
            }

            // show the actual node
            if ($show_val == "") {
                $result [] = "<strong>{$k}</strong>:";
            } else {
                $result [] = $k . " (" . $show_val . ")" . "";
            }

            if (is_array($v)) {
                // this is what makes it recursive, rerun for childs
                $temp = self::toTree($v, ($depth + 1));
                foreach ($temp as $t) {
                    $result [] = $t;
                }
            }
        }
        return implode($result);
    }

    private static function showtype($show_val) {
        // convert bools to text and quote 'text bools'!
        if (is_string($show_val) &&
                ($show_val == "true" || $show_val == "false")) {
            return "\"{$show_val}\"";
        } elseif (is_bool($show_val) && $show_val === true) {
            return "true";
        } elseif (is_bool($show_val) && $show_val === false) {
            return "false";
        } elseif (is_null($show_val)) {
            return "null";
        } else {
            return $show_val;
        }
    }

    private static function toTree($pieces, $depth = 0) {
        foreach ($pieces as $k => $v) {
            // skip the baseval thingy. Not a real node.
            //if($k == "__base_val") continue;
            // determine the real value of this node.
            $show_val = ( is_array($v) ? "" : $v );

            $show_val = self::showtype($show_val);

            // show the indents
            $result [] = str_repeat("  ", $depth);
            if ($depth == 0) {
                // this is a root node. no parents
                $result [] = "O ";
            } elseif (is_array($v)) {
                // this is a normal node. parents and children
                $result [] = "+ ";
            } else {
                // this is a leaf node. no children
                $result [] = "- ";
            }

            // show the actual node
            if ($show_val == "") {
                $result [] = "<strong>{$k}</strong>:";
            } else {
                $result [] = $k . ": <i>{$show_val}</i>";
            }

            if (is_array($v)) {
                // this is what makes it recursive, rerun for childs
                $temp = self::toTree($v, ($depth + 1));
                if (is_array($temp)) {
                    foreach ($temp as $t) {
                        $result [] = $t;
                    }
                } else {
                    $result [] = $t;
                }
            }
        }
        return $result;
    }

}

?>