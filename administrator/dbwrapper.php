<?php

require("../config.php"); // this is the configuration of the database
include_once("errorhandler.php");

class DatabaseWrapper {

    private $_connectionHandler, $_host, $_port, $_dbname, $_user, $_pass;
    private $mysql, $mysqli, $_result, $_typedb, $link;

    protected function setConnectionString($dbtype, $host, $port, $dbname, $user, $pass) {
        $this->_typedb = $dbtype;
        if ($this->_typedb == MYSQLI) {
            $this->mysqli = new mysqli();
            $this->mysqli->init();
            $this->mysqli->options(MYSQLI_OPT_CONNECT_TIMEOUT, 9000);
        }
        $this->_host = $host;
        $this->_port = $port == 0 ? "3306" : $port;
        $this->_dbname = $dbname;
        $this->_user = $user;
        $this->_pass = $pass;
    }

    protected function connect() {
        $bResult = true;
        global $dblog;
        if ($this->_typedb == MYSQLI) {            
            $bResult = $this->mysqli->real_connect($this->_host, $this->_user, $this->_pass, $this->_dbname);
            if (!$bResult) {
                //echo('Unable to connect to db.' . mysql_error());
                $dblog->error_withid_log(mysqli_errno(), mysqli_error());
                error_log(mysqli_error());
                $bResult = false;
            }
        } else {
            // connect db
            $this->link = mysql_connect($this->_host . ':' . $this->_port, $this->_user, $this->_pass);
            if (!$this->link) {
                $bResult = false;
                $dblog->error_withid_log(mysql_errno(), mysql_error());
                die('Could not connect: ' . mysql_error());
            }
            // select db
            if (!mysql_select_db($this->_dbname)) {
                $dblog->error_withid_log(mysql_errno(), mysql_error());
                echo('Unable to select to db.' . mysql_error());
                $bResult = false;
            }
        }
        return $bResult;
    }

    protected function disconnect() {
        if ($this->_typedb == MYSQLI) {
            $this->mysqli->close();
        } else {
            mysql_close($this->link);
        }
    }

    protected function selectdb($dbname) {
        $result = false;
        if ($this->_typedb == MYSQLI) {
            $result = $this->mysqli->select_db($dbname);
        } else {
            $result = mysql_select_db($dbname, $this->link);
        }
        return $result;
    }

    protected function mysql_safe($query, $params=false) {
        global $dblog;
        global $QUERY_DUMP_DEBUG;
      
        if ($this->_typedb == MYSQLI) { // MySQLI (support stored procedure)
            if ($params) {
                $v="";
                if (is_array($params)) { // multiple params
                    foreach ($params as &$v) {
                        $v = str_replace("'", "\'", $v);
                        $v = $this->mysqli->real_escape_string($v);
                    }
                } else { //single param only
                    $v = str_replace("'", "\'", $v);
                    $params = $this->mysqli->real_escape_string($params);
                }
                $escaped_query = vsprintf(str_replace("?", "'%s'", $query), $params);               
                if (!$this->_result = $this->mysqli->query($escaped_query, MYSQLI_STORE_RESULT)) {
                    error_log("Strored Procedure Error : ".$this->mysqli->error);
                    $dblog->error_log("mysqli_safe: [" . $escaped_query . "] params count: " . count($params));
                    $dblog->error_withid_log($this->mysqli->errno, $this->mysqli->error);                    
                }else{
                    error_log("Strored Procedure success  ");
                }
                
                  
            } else {  
              
                if (!$this->_result = $this->mysqli->query($query)) {
                    
                    error_log("Strored Procedure Error : ".$this->mysqli->error);
                    
                }else{
                    error_log("Strored Procedure success  "); 
                }
            }
            if (!$this->_result) {
                error_log("Strored Procedure Error : ".$this->mysqli->error); 
                $this->_errHandler = new ErrorHandler(ERR_DB_RESULT);
            }
          
        } else { // MySQL
            if ($params) {
                if (is_array($params)) { // multiple params
                    foreach ($params as &$v)
                        $v = mysql_real_escape_string($v);
                } else { //single param only
                    $params = mysql_real_escape_string($params);
                }
                $escaped_query = vsprintf(str_replace("?", "'%s'", $query), $params);
                if(!$this->_result = mysql_query($escaped_query)){
                    error_log("Strored Procedure Error  ");
                    $dblog->error_withid_log("mysql_safe: [" . $escaped_query . "] params count: " . count($params));
                    $dblog->error_withid_log($this->mysqli->errno, $this->mysqli->error);
                }
            }
            else {
                
                if(!$this->_result = mysql_query($query)){
                    error_log("Strored Procedure Fail  ");
                    $dblog->error_withid_log("mysql_safe: [" . $query . "]");
                    $dblog->error_withid_log($this->mysqli->errno, $this->mysqli->error);
                }
            }

            if (!$this->_result) {
                error_log("Strored Procedure Error : ".$this->mysqli->error); 
                $this->_errHandler = new ErrorHandler(ERR_DB_RESULT);
            }
        }
         
        return $this->_result;
         
    }

    protected function free_result() {
        global $dblog;
        if ($this->_typedb == MYSQLI) {
            while ($this->mysqli->next_result()) {
                $l_result = $this->mysqli->store_result();
                if ($l_result) {
                    $l_result->free();
                }else{
                    //$dblog->error_withid_log('Freeing Result: ' . $this->mysqli->errno, $this->mysqli->error);
                }
            }
        } else {
            mysql_free_result($this->_result);
        }
    }

}

?>