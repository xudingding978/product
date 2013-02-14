<?php
include_once("document.php"); // this is the configuration of the database
include_once("errorhandler.php");
require("dataconnection.php");

abstract class Export
{
	protected $_categoryType, $_targetDirectory, $_targetYear, $_dblog;
	protected $_errHandler;
	protected $_dbConnectionHandler;
	protected $_dbConnectionObj;
	protected $_template;
	private $_connected = false;
        protected $_doc_content= Array();
	
        protected function setDocContent($doccontent) {               
		$this->_doc_content = $doccontent;
	}
	public function getDocContent() {
		return $this->_doc_content;
	}                
	function __construct($directory, $year) {
		
		$this->_targetDirectory = $directory;
		$this->_targetYear = $year;
		include("../config.php");
		$this->_dbConnectionObj = new DataConnection(MYSQLI, $DB_HOST, $DB_PORT, $DB_NAME, $DB_USER, $DB_PASS);
                                    $this->_dblog = $dblog;
	}
	function __destruct() {
		// close the connection
	}

	protected function openDbConnection() {
		$bResult = true;
		//var_dump("Connecting to db...");
		$bResult = $this->_dbConnectionObj->Connect();
		if (!$bResult)
		{
			$this->_errHandler = new ErrorHandler(ERR_DB_RESULT); 
			$bResult = false;
			$this->_connected = false; 
		}
		else $this->_connected = true; 
		return $bResult;
	}
	
	protected function isDBConnected() {
		return $this->_connected;
	}
	
	protected function closeDbConnection() {
		//var_dump("Disconnecting to db...");
		$this->_dbConnectionObj->Disconnect();
	}
	public function settemplate($template) {
		$this->_template = $template;
		//var_dump($template);
	}
	// functions that are common on some category - the benefit is to minimize duplication of codes
	protected function getName($query_result) {
		return $query_result['NAME'];
	}
	protected function getCompanyProfile($query_result) {
		$tmpString = "";
		if ( $query_result['COMPANY_PROFILE_TEXT'] != '' ) {
			$tmpString = $query_result['COMPANY_PROFILE_TEXT'];
			$tmpString = str_replace("\r\n", '', $tmpString);
			$tmpString = str_replace("\n", ' ', $tmpString);
			$tmpString = str_replace("  ", ' ', $tmpString);
		}
		return $tmpString;
	}
	protected function getPhysicalAddress($query_result) {
		$tmpPhAddress = "";
		if ( trim($query_result['PHYSICAL_ADDRESS_BUILDING_ADDRESS']) != '' ) {
			 $tmpPhAddress = trim($query_result['PHYSICAL_ADDRESS_BUILDING_ADDRESS']);
		}
		if ( trim($query_result['PHYSICAL_ADDRESS_STREET_ADDRESS']) != '' ) {
			$tmpPhAddress .= $tmpPhAddress == "" ? trim($query_result['PHYSICAL_ADDRESS_STREET_ADDRESS']) : ', '.trim($query_result['PHYSICAL_ADDRESS_STREET_ADDRESS']);
		}
		if ( trim($query_result['PHYSICAL_ADDRESS_SUBURB']) != '' ) {
			$tmpPhAddress .= $tmpPhAddress == "" ? trim($query_result['PHYSICAL_ADDRESS_SUBURB']) : ', '.trim($query_result['PHYSICAL_ADDRESS_SUBURB']);
		}
		if ( trim($query_result['PHYSICAL_ADDRESS_CITY']) != '' ) {
			$tmpPhAddress .= $tmpPhAddress == "" ? trim($query_result['PHYSICAL_ADDRESS_CITY']) : ', '.trim($query_result['PHYSICAL_ADDRESS_CITY']);
		}
		if ( trim($query_result['PHYSICAL_ADDRESS_STATE']) != '' ) {
			$tmpPhAddress .= $tmpPhAddress == "" ? trim($query_result['PHYSICAL_ADDRESS_STATE']) : ', '.trim($query_result['PHYSICAL_ADDRESS_STATE']);
		}
		if ( trim($query_result['PHYSICAL_ADDRESS_POST_CODE']) != '' ) {
			$tmpPhAddress .= $tmpPhAddress == "" ? trim($query_result['PHYSICAL_ADDRESS_POST_CODE']) : ', '.trim($query_result['PHYSICAL_ADDRESS_POST_CODE']);
		}
		if ( trim($query_result['PHYSICAL_ADDRESS_COUNTRY']) != '' ) {
			$tmpPhAddress .= $tmpPhAddress == "" ? trim($query_result['PHYSICAL_ADDRESS_COUNTRY']) : ', '.trim($query_result['PHYSICAL_ADDRESS_COUNTRY']);
		}
		return $tmpPhAddress;
	}
	
	protected function getPostAddress($query_result) {
		$tmpPostAddress = "";
		if ( trim($query_result['POSTAL_ADDRESS_BUILDING_ADDRESS']) != '' ) {
			 $tmpPostAddress = trim($query_result['POSTAL_ADDRESS_BUILDING_ADDRESS']);
		}
		if ( trim($query_result['POSTAL_ADDRESS_STREET_ADDRESS']) != '' ) {
			$tmpPostAddress .= $tmpPostAddress == "" ? trim($query_result['POSTAL_ADDRESS_STREET_ADDRESS']) : ', '.trim($query_result['POSTAL_ADDRESS_STREET_ADDRESS']);
		}
		if ( trim($query_result['POSTAL_ADDRESS_SUBURB']) != '' ) {
			$tmpPostAddress .= $tmpPostAddress == "" ? trim($query_result['POSTAL_ADDRESS_SUBURB']) : ', '.trim($query_result['POSTAL_ADDRESS_SUBURB']);
		}
		if ( trim($query_result['POSTAL_ADDRESS_CITY']) != '' ) {
			$tmpPostAddress .= $tmpPostAddress == "" ? trim($query_result['POSTAL_ADDRESS_CITY']) : ', '.trim($query_result['POSTAL_ADDRESS_CITY']);
		}
		if ( trim($query_result['POSTAL_ADDRESS_STATE']) != '' ) {
			$tmpPostAddress .= $tmpPostAddress == "" ? trim($query_result['POSTAL_ADDRESS_STATE']) : ', '.trim($query_result['POSTAL_ADDRESS_STATE']);
		}
		if ( trim($query_result['POSTAL_ADDRESS_POST_CODE']) != '' ) {
			$tmpPostAddress .= $tmpPostAddress == "" ? trim($query_result['POSTAL_ADDRESS_POST_CODE']) : ', '.trim($query_result['POSTAL_ADDRESS_POST_CODE']);
		}
		if ( trim($query_result['POSTAL_ADDRESS_COUNTRY']) != '' ) {
			$tmpPostAddress .= $tmpPostAddress == "" ? trim($query_result['POSTAL_ADDRESS_COUNTRY']) : ', '.trim($query_result['POSTAL_ADDRESS_COUNTRY']);
		}
		return $tmpPostAddress;			
	}
	protected function getTelephone($query_result) {
		$tmpBPhone = ""; $tmp = "";
		$tmp = $query_result['TELEPHONE_NO'] . ' ';
		if ( $tmp{0} != '0' || $tmp{0} != '+') {
			$tmpBPhone = $query_result['TELEPHONE_NO'];
		}
		else {
			$tmpBPhone = '0' . $query_result['TELEPHONE_NO'];
		}
		return $tmpBPhone;
	}
	protected function getFreeTelephone($query_result) {
		$tmpBFPhone = ""; $tmp = "";
		$tmp = $query_result['FREE_TELEPHONE_NO'] . ' ';
		if ( $tmp{0} != '0' || $tmp{0} != '+') {
			$tmpBFPhone = $query_result['FREE_TELEPHONE_NO'];
		}
		else {
			$tmpBFPhone = '0' . $query_result['FREE_TELEPHONE_NO'];
		}
		return $tmpBFPhone;
	}
	protected function getFax($query_result) {
		$tmpFax = ""; $tmp = "";
		$tmp = $query_result['FAX_NO'] . ' ';
		if ( $tmp{0} != '0' || $tmp{0} != '+') {
			$tmpFax = $query_result['FAX_NO'];
		}
		else {
			$tmpFax = '0' . $query_result['FAX_NO'];
		}
		return $tmpFax;
	}
	protected function getFreeFax($query_result) {
		$tmpFFax = ""; $tmp = "";
		$tmp = $query_result['FREE_FAX_NO'] . ' ';
		if ( $tmp{0} != '0' || $tmp{0} != '+') {
			$tmpFFax = $query_result['FREE_FAX_NO'];
		}
		else {
			$tmpFFax = '0' . $query_result['FREE_FAX_NO'];
		}
		return $tmpFFax;
	}
	protected function getEmail($query_result) {
		return $query_result['EMAIL_ADDRESS'];
	}
	protected function getWebsite($query_result) {
		return $query_result['WEBSITE_ADDRESS'];
	}
	protected function getPersonPosition($query_result) {
		return $query_result['POSITION'];
	}

	// child class should implement the following funcs
	abstract protected function exec();
	abstract protected function setfile($filename);
	abstract protected function getsqlext();
}
?>
