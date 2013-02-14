<?php
	$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
                   include_once("functions.php");
	include_once("../config.php");
	include_once("../include/debuglog.php");
	include_once("../include/tpldb_class.php");
	
        function key_getResultsByKeyword($drec, $keyword){
            $results = array('cat_xml' => '', '$reg_xml' =>'');
            //if($keyword != 0){
                $results['cat_xml'] = key_getCategories($drec,$keyword);
                $results['reg_xml'] = reg_getRegionsBySearchString($keyword,$drec);
            //}
            return $results;            
        }
        
     // ------------------------------------------------------------
    // cat search functions
    // ------------------------------------------------------------

	
    function key_getCategories($drec, $keyword) {
            $results_categories = tpldb::getDirectoryCategoriesByKeyword($drec, $keyword);
            debuglog::debug2log('Starting keyword search for categories');
            debuglog::debug2log(print_r($results_categories,true));
            foreach ($results_categories as $key => $value) {
                    $results_supplier_product_categories = tpldb::getSuppliersByCategory($results_categories[$key]['REC_ID']); 	// get Suppliers for each category found
                    if ($results_supplier_product_categories)
                           foreach ($results_supplier_product_categories as $key1 => $value1) {
                            $results_categories[$key]['SUPPLIERS'][]['SUPPLIER'] = $value1;
                            //$results_categories[$key]['SUPPLIERS']['SUPPLIER'] = $results_supplier_product_categories[$supplier];
                           }
                    
            }

            $xml = new SimpleXMLElement("<?xml version=\"1.0\"?><categories></categories>");
                    foreach ($results_categories as $key => $value) {
                            $category = $xml->addChild("category");
                            array_to_xml($results_categories[$key], $category);
                    }
            //debuglog::debug2log('Adding Suppliers for found categories');        
            //debuglog::debug2log(print_r($results_categories,true));

            //$xml->asXML("categorieswithsuppliers.xml");
            
            $ret = $xml->asXML();
            return $ret;
    }
        
        
	// will return a string representing results in xml format
	function cat_search($crec, $drec) {
		$ret = array('cat_xml' => '', 'sup_xml' => '');
		if ($crec != 0) { // specific directory requested
			// get all categories in directory
			$ret['cat_xml'] = cat_getCategories($crec, $drec);
			// get all suppliers in directory
			$ret['sup_xml'] = cat_getSuppliersXML($crec);
		} else { // display root directory
			$ret['cat_xml'] = cat_getRootDirectoryCategoriesXML($drec);
		}
		debuglog::debug2log(print_r($ret['cat_xml'],true));
		return $ret;
	}
	
	// will return XML with info about the specified supplier
	function sup_search($srec, $crec) {
		$result_supplier = tpldb::getSupplierByID($srec);
		$xml = new SimpleXMLElement("<?xml version=\"1.0\"?><supplier></supplier>");
		array_to_xml($result_supplier, $xml);
		$xml->asXML("supplier.xml");
		return $xml->asXML();
	}
	
	function loc_search($lat, $lng, $rad) {
                global $drec;
		$results_suppliers = tpldb::getSuppliersByLocation($lat, $lng, $rad, $drec);										// get suppliers within the radius
		
		foreach ($results_suppliers as $key => $value) {
			$results_categories = tpldb::getCategoriesBySupplier($results_suppliers[$key]['SUPPLIER_REC_ID']);		// get categories for each supplier
			$results_suppliers[$key]['PRODUCT_CATEGORIES'] = $results_categories;
		}
		//debuglog::debug2log(print_r($results_suppliers,true));														// used for seeing the array structure in debuglog file
		$xml = new SimpleXMLElement("<?xml version=\"1.0\" encoding=\"utf-8\" ?><suppliers></suppliers>");
		foreach ($results_suppliers as $key => $value){
			$supplier = $xml->addChild("supplier");
				array_to_xml($results_suppliers[$key], $supplier);
			}
		$xml->asXML("suppliers.xml");
		return $xml->asXML();
	}
	
	function sup_getSupplierXML($srec, $crec) {
		$db = new Db();
		
		$supplier = $db->getrows("REC_ID=" . $srec, "tpl_supplier", "");
		
		$supplier = $supplier[0];
		
		// port to xml
		$xml = new SimpleXMLElement("<?xml version=\"1.0\"?><suppliers></suppliers>");
		array_to_xml($supplier, $xml);
		$xml->asXML("supplier.xml");
		return $xml->asXML();
	}
	
	
	// ------------------------------------------------------------
	// regions search functions
	// ------------------------------------------------------------
	
	
	function reg_getRegionsBySearchString($region, $drec) {
		$ret = '';
		$tpldb = new tpldb();
		if ($region == "%") {
			$results = $tpldb->getRegions();			
			$xml = new SimpleXMLElement("<?xml version=\"1.0\"?><regions></regions>");						// get xml representation of data
			regions_array_to_xml($results, $xml);
			$xml->asXML("regions.xml");
			$ret = $xml->asXML();
		} else {
			$results = $tpldb->getSuppliersByRegion($region, $drec);
			
			foreach ($results as $key => $value) {
				$results_categories = $tpldb->getCategoriesBySupplier($results[$key]['SUPPLIER_REC_ID']); 	// get categories for each supplier
				$results[$key]['PRODUCT_CATEGORIES'] = $results_categories;
			}
			 
			
			$xml = new SimpleXMLElement("<?xml version=\"1.0\"?><suppliers></suppliers>");  				// get xml representation of data
			foreach ($results as $key => $value) {
				$supplier = $xml->addChild("supplier");
				array_to_xml($results[$key], $supplier);
			}
			//debuglog::debug2log(print_r($results,true));													// used for seeing the array structure in debuglog file
			$xml->asXML("suppliersbyregion.xml");
			$ret = $xml->asXML();
		}
		return $ret;
	}
	
	function reg_getSupplierXML($srec){
		$results = db::getrows("REC_ID=" . $srec, "tpl_supplier", "");
		$results = $results[0];
		
		$xml = new SimpleXMLElement("<?xml version=\"1.0\"?><suppliers></suppliers>");						// get xml representation of data
		supplier_array_to_xml($results, $xml);
		$ret = $xml->asXML();
		return $ret;
	}
	
	// ------------------------------------------------------------
	// cat search functions
	// ------------------------------------------------------------
	
	
	function cat_getCategories(&$crec, $drec) {
		$results_categories = tpldb::getTONZADirectoryCategories($drec, $crec);
	
		foreach ($results_categories as $key => $value) {
			$results_supplier_product_categories = tpldb::getSuppliersByCategory($results_categories[$key]['REC_ID']); 	// get categories for each supplier
			if ($results_supplier_product_categories)
			$results_categories[$key]['SUPPLIERS'] = $results_supplier_product_categories;
		}
		
		$xml = new SimpleXMLElement("<?xml version=\"1.0\"?><categories></categories>");
			foreach ($results_categories as $key => $value) {
				$category = $xml->addChild("category");
				array_to_xml($results_categories[$key], $category);
			}
		debuglog::debug2log(print_r($results_categories,true));
		
		
		//$xml->asXML("categorieswithsuppliers.xml");
		$ret = $xml->asXML();
		return $ret;
	}
	
	function cat_getSuppliersXML($crec){
		$results_suppliers = tpldb::getSuppliersByCategory($crec);
		if ($results_suppliers){
			
			foreach ($results_suppliers as $key => $value) {
				$results_categories = tpldb::getCategoriesBySupplier($results_suppliers[$key]['SUPPLIER_REC_ID']); 	// get categories for each supplier
				$results_suppliers[$key]['PRODUCT_CATEGORIES'] = $results_categories;
			}
						
			$xml = new SimpleXMLElement("<?xml version=\"1.0\"?><suppliers></suppliers>");
			foreach ($results_suppliers as $key => $value) {
				$supplier_category = $xml->addChild("supplier");
				array_to_xml($results_suppliers[$key], $supplier_category);
			}
			return $xml->asXML();
		}
	}
	
	function cat_getRootDirectoryCategoriesXML($drec) {
		$tpldb = new tpldb();
		$results_categories = $tpldb->getDirectoryRootCategoriesByName($drec);										// get all categories in root directory
		if ($results_categories > 0) {
			$xml = new SimpleXMLElement("<?xml version=\"1.0\"?><categories></categories>");
			$xml->addAttribute('type','root');
			foreach ($results_categories as $key => $value) {	
					$category = $xml->addChild("category");
					array_to_xml($results_categories[$key], $category);
					//$results_category_tree_nodes = db::getrows("PARENT_PRODUCT_CATEGORY_REC_ID=".$results_categories[$key]['PRODUCT_CATEGORY_REC_ID']." ORDER BY NAME ASC LIMIT 1","tpl_product_category","");
					//$category_nodes					
				}
			}
		//$xml->asXML("category_root.xml");
		return $xml->asXML();
	}

	// ------------------------------------------------------------
	
//	function cat_getCategories(&$crec, $drec) {
//		$results_categories = tpldb::getTONZADirectoryCategories($drec, $crec);
//		if ($results_categories){
//			foreach ($results_categories as $key => $value) {
//				$results_category_tree = tpldb::GetDirectoryCategories($drec, $results_categories[$key]['PRODUCT_CATEGORY_REC_ID']);
//				if ($results_category_tree){
//					//check for category node
//					$results_category_tree_nodes = db::getrows("PARENT_PRODUCT_CATEGORY_REC_ID=".$results_categories[$key]['PRODUCT_CATEGORY_REC_ID']." ORDER BY NAME ASC LIMIT 1","tpl_product_category","");
//					if($results_category_tree_nodes){
//						//check for supplier on that node
//						foreach ($results_category_tree_nodes as $key => $value){
//							$results_supplier_product_category = db::getrows("PRODUCT_CATEGORY_REC_ID=".$results_category_tree_nodes[$key]['REC_ID']." LIMIT 1", "tpl_supplier_product_category","");
//							if ($results_supplier_product_category){
//								// if this has supplier information then add in the list
//								$results_categories[$key]['PRODUCT_CATEGORY_NODE'] = $results_supplier_product_category;
//								$results_categories[$key]['SUPPLIER_COUNT'] = sizeof($results_supplier_product_category);
//							} 	//else do not
//						}
//					}
//				}
//			}
//		}

?>
