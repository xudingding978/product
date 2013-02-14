<?PHP
$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
require $path_doc_root . "/config.php";
mysql_connect($DB_HOST, $DB_USER, $DB_PASS) or die('Could not connect: ' . mysql_error());
mysql_select_db($DB_NAME);

class Db {
    /* function __construct() {
      mysql_connect($dbhost, $dbuser, $dbpassword) or die('Could not connect: ' . mysql_error());
      mysql_select_db($dbname);
      } */

    public static function exec($query) {
        $result = mysql_query($query) or die(mysql_error());
        $rows = mysql_fetch_assoc($result);
        return $rows;
//                                                      if($result)
//                                                    {
//                                                            $rows = mysql_fetch_assoc($result);
//                                                            mysql_free_result($result);
//                                                    }
//                                                    return $rows;
    }

    public static function getrow($condition, $table) {
        $row = NULL;
        $query = "select * from $table where $condition";
        error_log("000000000000|".$query);
        
        $result = mysql_query($query) or die(mysql_error());
       
        $row = mysql_fetch_assoc($result);
        return $row;
    }

    public static function getcount($where, $table) {
        // return the 1st row with the column name $column with the parameter $value
        // return value is an Array
        //	$table=strtolower($table);
        $row = NULL;
        $query = "select count(REC_ID) as REC_COUNT from $table where $where";
        $result = mysql_query($query) or die(mysql_error());
        $row = mysql_fetch_assoc($result);
        return $row["REC_COUNT"];
    }

    public static function getrows($condition, $table, $extra) {
        // return the all rows that meets the contiion.  $extra is for filters
        // return value is an Array of rews
        //	$table=strtolower($table);
        // declare empty array

        $rows = array(); //added by archer to avoid notice
        $row = NULL;
        $query = "select * from $table where $condition $extra";
        error_log("Query..................................:".$query);
        $result = mysql_query($query) or die(mysql_error());
        while ($row = mysql_fetch_assoc($result)) {
            $rows[] = $row;
        }
        return $rows;
//                                                                if ($result)
//			{
//				while($row = mysql_fetch_assoc($result)){
//					$rows[]=$row;
//				}
//				mysql_free_result($result);
//			}
//			return $rows;
    }

    public static function getjoinrows($condition, $table, $extra, $select) {
        // return the all rows that meets the contiion.  
        // $extra is for filters
        // return value is an Array of rews
        //	$table=strtolower($table);
        // declare empty array

        $rows = array(); //added by archer to avoid notice
        $row = NULL;
        $query = "select $select from $table where $condition $extra";

        $result = mysql_query($query) or die(mysql_error());
        while ($row = mysql_fetch_assoc($result)) {
            $rows[] = $row;
        }
        return $rows;
//                                                                if ($result)
//			{
//				while($row = mysql_fetch_assoc($result)){
//					$rows[]=$row;
//				}
//				mysql_free_result($result);
//			}
//			return $rows;
    }

    public static function getrows_key($condition, $table, $extra, $keyColname) {
        // same as getRows except the the Index is the key or the row
        //	$table=strtolower($table);
        $row = NULL;
        if ($condition)
            $condition = "where $condition";
        $query = "select * from $table $condition $extra";
        $result = mysql_query($query) or die(mysql_error());
        while ($row = mysql_fetch_array($result)) {
            $ID = $row[$keyColname];
            $rows[$ID] = $row;
        }
        return $rows;
    }

    public static function openquery($query) {
        $rows = Array();
        $result = mysql_query($query) or die(mysql_error());
        while ($row = mysql_fetch_assoc($result)) {
            $rows[] = $row;
        }
        return $rows;
    }

    function runquery($query) {
        $result = mysql_query($query) or die(mysql_error());
    }
    function runquerywithid($query) {
        $result = mysql_query($query) or die(mysql_error());
        return mysql_insert_id();
    }

    function ExecQuery($query) {
        $link = $this->OpenLink();

        $result = mysql_query($query) or die(mysql_error());
        return $result;

        mysql_close($link);
    }

    function findDBRow($column, $value, $table) {
        $link = $this->OpenLink();

        $table = strtolower($table);
        $row = NULL;
        //	$query = "select * from $table where $column='$value' and (status is null or status='')";
        $query = "select * from $table where $column='$value'";
        //echo "<!--$query-->";
        $result = mysql_query($query) or die(mysql_error());
        $row = mysql_fetch_array($result);

        return $row;

        mysql_close($link);
    }

    function findRows($condition, $table, $extra) {
        $link = $this->OpenLink();

        $table = strtolower($table);
        $row = NULL;
        $query = "select * from $table where $condition $extra";
//			echo "$query";
        $result = mysql_query($query) or die(mysql_error());
        //print "<pre>";
        $i = 0;
        while ($row = mysql_fetch_array($result)) {
            $rows[] = $row;
        }

        return $rows;

        mysql_close($link);
    }

  function OpenLink() {
        $dbServer = "localhost";
        $CurrentUrl = $_SERVER['HTTP_HOST'];
        $rootdir = "/arete_server";
        $contentroot = "content";
        if ($CurrentUrl == "localhost") {
            $dbUser = "root";
            $dbPassword = "";
            $rootdir = "/wamp/www/arete";
        } else {
            $dbUser = "admin";
            $dbPassword = "michael29";
        }
//			$dbName = "wellzone";

        if ($_REQUEST["debug"] == "on")
            echo "dbName: $dbName";

        $link = mysql_connect($dbServer, $dbUser, $dbPassword) or die("Could not connect : " . mysql_error());
        mysql_select_db($dbName);

        return $link;
    }

}

?>