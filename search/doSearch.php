<?php
	if(!isset($_SESSION)) session_start();
                    $path_doc_root = $_SERVER["DOCUMENT_ROOT"];
	include_once($path_doc_root."/include/ads_class.php");
                     include_once($path_doc_root."/config.php");
	include_once("search_funcs.php");
	require($path_doc_root. "/include/KoolPHPSuite/KoolAjax/koolajax.php");
	
	$sid=session_id();
	$MAXLEN = 255; // Maximum length for text display for every field;
	$MAXPAGEMATCHES = 10; // Max matches displayed per page
	$page = 1;
	
	if ($koolajax->isCallback) sleep(0);
	$db = new Db;
	$mysqli = new mysqli($DB_HOST,$DB_USER,$DB_PASS,$DB_NAME);
	
	if (mysqli_connect_errno()) 
	{
	    printf("<br />Connect failed: %s\n", mysqli_connect_error());
	    exit();
	}

	
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" >
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"></meta>
    <title>doSearch.php</title> 
    <link rel="stylesheet" href="styles/style.css"/>
    <?php echo $koolajax->Render(); ?>
</head>
<body>

<div id="content_container">
<?php
	$search_key = $_REQUEST["search_key"];
	$tbl_type = 'tpl_product_category';
	if ( isset($_REQUEST["p"]) &&  $_REQUEST["p"] != "")
		$page = $_REQUEST["p"];
	if ( isset($_REQUEST["tt"]) &&  $_REQUEST["tt"] != "")
	{
		switch($_REQUEST["tt"])
		{
			case 'p':
				$tbl_type = 'tpl_product';
				$MAXPAGEMATCHES = 10;
				break;
			case 'b': $tbl_type = 'tpl_brand';
				$MAXPAGEMATCHES = 15;
				break;
			case 's': $tbl_type = 'tpl_supplier';
				$MAXPAGEMATCHES = 8;
				break;
			default:
				$tbl_type = 'tpl_product_category';
				break;
		}
	}
	$total_rows = 0;
	$result = $mysqli->query("CALL do_searchEx('".$search_key."','".$sid."','".$tbl_type."')");
	if ($result)
	{
		$total_rows = $result->num_rows;
		//echo '<script type="text/javascript">parent.document.tabform.text1.value = "'.$total_rows.'";
		$_SESSION["search_results.num_rows"]=$total_rows;
	}
	$mysqli->close();
	display_search_results($sid,$page,$MAXPAGEMATCHES);
?>
</div>
 </body>
</html>