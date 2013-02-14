<?php
	function XMLTransform($sxml, $xsl_template) {
		if (strlen($sxml) != 0) {
			// load xml
			$xml = new DOMDocument(); 
			$xml->loadXML( $sxml ); 
			
			// load xsl
			$xsl = new DOMDocument();
			$xsl->load($xsl_template, LIBXML_NOCDATA);
			
			// start xslt
			$xslt = new XSLTProcessor();
			$xslt->importStylesheet($xsl);
			
			// transform and return
			return $xslt->transformToXML($xml);
		} else {
			return "";	
		}
	}
?>
