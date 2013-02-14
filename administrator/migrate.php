<?php
include_once("document.php"); // this is the configuration of the database
include_once("errorhandler.php");
include_once("dataconnection.php");
include_once ("../include/debuglog.php");
include_once ("../config.php");


abstract class Migrate
{
	protected $_sourceDB, $_targetDB, $_targetDirectory, $_sourceperiod, $_targetperiod, $_clientShadowRoot;
	protected $_errHandler;
	protected $_dbConnectionHandler;
	protected $_dbConnectionObj;
	protected $_template;
	protected $_isClientSpecific;
	
	private $_isTestingOperation = false;
	private $_SourceConnected = false;
	private $_TargetConnected = false;
	
	function __construct() {
		$argv = func_get_args();
		switch (func_num_args()) {
			case 3:
				self::__construct1($argv[0], $argv[1], $argv[2]); // type
				break;
			case 4:
				self::__construct2($argv[0], $argv[1], $argv[2], $argv[3]); // type
				break;
		}
	}
	function __construct1($targetDB, $directory, $year)
	{
		require("../config.php");
		$this->_isClientSpecific = false;
		if ($targetDB == null) $targetDB = $DB_NAME;
		$this->_sourceDB = $DB_NAME;
		$this->_targetDB = $targetDB;
		$this->_targetDirectory = $directory;
		$this->_sourceperiod = $year;
		// all stored procedure are located in admin db - connect to admindb
		$this->_dbConnectionObj = new DataConnection($this->getsqlext(), $DB_HOST, $DB_PORT, $ADMIN_DB_NAME, $DB_USER, $DB_PASS);
	}
	function __construct2($targetDB, $directory, $year, $clientShadowRootId) {
		require("../config.php");
		$this->_isClientSpecific = true;
		$this->_sourceDB = $DB_NAME;
		if ($targetDB == null) $targetDB = $DB_NAME;
		$this->_targetDB = $targetDB;
		$this->_targetDirectory = $directory;
		$this->_clientShadowRoot = $clientShadowRootId;
 		$this->_sourceperiod = $year;
		// all stored procedure are located in admin db - connect to admindb
		$this->_dbConnectionObj = new DataConnection($this->getsqlext(), $DB_HOST, $DB_PORT, $ADMIN_DB_NAME, $DB_USER, $DB_PASS);
	}
	function __destruct() {
		// close the connection
	}
	protected function IsClientSpecific() {
		return $this->_isClientSpecific;
	}
	// the argument isReal will determine if the source and target are same db
	// if isReal is false that means the target db is only
	// a temporary db for testing purposes.
	protected function openDbConnection() {
		//$bReal = true;
		$bResult = true;
		// identify if the db is dummy or real
		//if ($this->_targetDB != $DB_NAME) $bReal = false;
		$bResult = $this->_dbConnectionObj->Connect();
		if (!$bResult)
		{
			$this->_errHandler = new ErrorHandler(ERR_DB_RESULT); 
			$bResult = false;
			$this->_SourceConnected = false; 
		}
		else $this->_SourceConnected = true; 
		
		//if (!$bReal) /*this is a test - dump to tmp db*/
		//{
			/*$this->_isTestingOperation = true;
			$this->_dbTargetConnectionObj = new DataConnection($this->getsqlext(), $this->_targetDB);
			$this->openTempTargetDBConnection();*/
		//}
		
		return $bResult;
	}
	
	/* This is for testing operation only - to avoid changes on the primary DB*/
	protected function openTempTargetDBConnection() {
		$bResult = true;
		//var_dump("Connecting to db...");
		$bResult = $this->_dbTargetConnectionObj->Connect();
		if (!$bResult)
		{
			$this->_errHandler = new ErrorHandler(ERR_DB_RESULT); 
			$bResult = false;
			$this->_TargetConnected = false; 
		}
		else $this->_TargetConnected = true; 
		return $bResult;
	}
	
	protected function closeDbConnection() {
		//var_dump("Disconnecting to db...");
		if ($this->_isTestingOperation == true){	
			$this->_dbTargetConnectionObj->Disconnect();
			$this->_isTestingOperation = false;
		}
		$this->_dbConnectionObj->Disconnect();
	}
	protected function constructPhysicalAddress($query_result) { // 12 entries  - including entries for Address finder details
		$physicalAddInfos1 = array(
                                    $query_result['PHYSICAL_ADDRESS_BUILDING_ADDRESS'], 
                                    $query_result['PHYSICAL_ADDRESS_STREET_ADDRESS'],
		$query_result['PHYSICAL_ADDRESS_SUBURB'], 
                                    $query_result['PHYSICAL_ADDRESS_CITY'], 
                                    $this->checkIfNull($query_result['PHYSICAL_ADDRESS_STATE']), 
		$query_result['PHYSICAL_ADDRESS_COUNTRY'],
                                    $this->checkIfNull($query_result['PHYSICAL_ADDRESS_POST_CODE']));
		$physicalAddLocation = array( 
                                    $this->checkIfNull($query_result['PHYSICAL_ADDRESS_PXID']), 
                                    $this->checkIfNull($query_result['PHYSICAL_ADDRESS_DPID']), 
                                    $this->checkIfNull($query_result['PHYSICAL_ADDRESS_LATITUDE']), 
		$this->checkIfNull($query_result['PHYSICAL_ADDRESS_LONGITUDE']), 
                                    $this->checkIfNull($query_result['PHYSICAL_ADDRESS_HEIGHT']), 
                                    $this->checkIfNull($query_result['PHYSICAL_ADDRESS_COMPLETE']));
		$physicalAddInfos = array_merge($physicalAddInfos1, $physicalAddLocation);
		return $physicalAddInfos;
	}
                         function checkIfNull($arrayToCheck) {
                                if ($arrayToCheck != '' && $arrayToCheck != null) {
                                    return $arrayToCheck;
                                } else {
                                    if($arrayToCheck = null){
                                         $arrayToCheck = '0';
                                        return $arrayToCheck;
                                    } else {
                                        $arrayToCheck = '0';
                                        return $arrayToCheck;
                                    }
                                }
                        }

                    
	protected function constructPostalAddress($query_result) { // 7 entres
		$postalAddInfos1 = Array(
                                    $query_result['POSTAL_ADDRESS_BUILDING_ADDRESS'], 
                                    $query_result['POSTAL_ADDRESS_STREET_ADDRESS'], 
		$query_result['POSTAL_ADDRESS_SUBURB'], 
                                    $query_result['POSTAL_ADDRESS_CITY'], 
                                    $query_result['POSTAL_ADDRESS_STATE'],
		$query_result['POSTAL_ADDRESS_COUNTRY'],
		$query_result['POSTAL_ADDRESS_POST_CODE']); 
		return $postalAddInfos1;
	}
	// child class should implement the following funcs
	abstract protected function exec();
	abstract protected function getsqlext();
}
?>