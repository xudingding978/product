<?php
include_once("constants.php");
require_once ('../include/debuglog.php');
class ErrorHandler 
{
	private $_errType;
	function __construct($errType) {
		$this->_errType = $errType;
		$this->doHandle();
	}
	
	function __destruct() {
	}
	
	private function doHandle()
	{
		//construct new debug error logger
		//$logme = new debuglog();
		
		//global $ERR_EMPTY_PARAM, $ERR_DB_CONNECT, $ERR_DB_NODIRECTORY;
		switch($this->_errType)
		{
			case ERR_EMPTY_PARAM:
				var_dump("critical: empty parameter.");
				//$logme->debug2log("critical: empty parameter.");
				break;
			case ERR_DB_CONNECT:
				var_dump("critical: database connection.");
				//$logme->debug2log("critical: database connection.");
				break;
			case ERR_DB_NODIRECTORY:
				var_dump("major: no directory found in db.");
				///$logme->debug2log("major: no directory found in db.");
				break;
			case ERR_DB_RESULT:
				var_dump("major: invalid result from query.");
				//$logme->debug2log("major: invalid result from query." . mysql_error());
				break;
			case ERR_DB_NODIRECTORYTABLE:
				var_dump("major: invalid table in query.");
				//$logme->debug2log("major: invalid table in query.");
				break;
			default:
				var_dump("unhandled error ERR[". $this->_errType . "]");
				//$logme->debug2log(var_dump("unhandled error ERR[". $this->_errType . "]"));
				exit;
		}
	}
}

?>