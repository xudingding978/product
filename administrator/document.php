<?php
	// document
	class Document
	{
		private $_timeFormat;
		private $_contents = Array();
		
		function __construct() {
			$_contents = Array();
		}
		function __destruct() {
			unset($this->_contents);
		}
		
		private function doFormatDateTime($dTime) {
			return '"' . date('Y-m-d H:i:s', $dTime) . '"';
		}
		private function doFormatDouble($fVal) {
			return sprintf("%.6f", $fVal);
		}
		private function doFormatInteger($dVal) {
			return sprintf("%d", $dVal);
		}
		
		public function add($stringval) {
			$count = array_push($this->_contents, $stringval);
			return $count;			
		}
		
		public function delete($del_indexes) {
			if (is_array($del_indexes)) { 
		        $indexes = $del_indexes; 
		    } elseif(is_string($del_indexes)) { 
		        $indexes = explode($del_indexes, " "); 
		    } elseif(is_numeric($del_indexes)) { 
		        $indexes[0] = (integer)$del_indexes; 
		    } else return; 
		    unset($del_indexes);
		    
		    for($i=0; $i < count($indexes); $i++) { 
		        unset($this->_contents[$indexes[$i]]); 
		    } 
		    return $this->_contents; 
		}
		
		public function addDateTimeType($datetimeval) {
			$content = $this->doFormatDateTime($datetimeval);
			$count = array_push($this->_contents, $content);
		}
		
		public function addFloatType($floatval) {
			$content = $this->doFormatDouble($floatval);
			$count = array_push($this->_contents, $content);
		}
		
		public function addIntType($intval) {
			$content = $this->doFormatInteger($intval);
			$count = array_push($this->_contents, $content);
		}
		
		public function save($fname) {
			file_put_contents($fname,implode("\r\n",$this->_contents));
			//$this->close();
		}
                public function getContent() {
			return $this->_contents;			
		}
		/*public function close() {
			var_dump("array count: " . count($this->_contents));
			for($i=0; $i < count($this->_contents); $i++) { 
		        unset($this->_contents[$i]); 
		    } 
			
		}*/
	}
?>