<?php

	// file that contains general functions
	include_once("../functions.php");
	
	function reg_getRegionsBySearchString($region) {
		$ret = '';
		$tpldb = new tpldb();
		if ($region == "%") {
			$results = $tpldb->getRegions();
			
			array_shift($results);
			
			// get xml representation of data
			$xml = new SimpleXMLElement("<?xml version=\"1.0\"?><regions></regions>");
			regions_array_to_xml($results, $xml);
			$ret = $xml->asXML();
		} else {
			$results = $tpldb->getSuppliersByRegion($region);
			
			// get xml representation of data
			$xml = new SimpleXMLElement("<?xml version=\"1.0\"?><suppliers></suppliers>");
			supplier_array_to_xml($results, $xml);
			$ret = $xml->asXML();
		}
		return $ret;
	}
	
	function reg_getSupplierXML($srec){
		$db = new Db();
		
		$results = $db->getrows("REC_ID=" . $srec, "tpl_supplier", "");
		$results = $results[0];
		
		// get xml representation of data
		$xml = new SimpleXMLElement("<?xml version=\"1.0\"?><suppliers></suppliers>");
		supplier_array_to_xml($results, $xml);
		$ret = $xml->asXML();
		return $ret;
	}
?>