<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
</head>


<?php

//
// Get the data
//
	include_once("functions.php");
	include_once("../config.php");
	include_once("../include/debuglog.php");
	include_once("../include/tpldb_class.php");

	$results_categories = tpldb::getAllCategoriesForDir(6);

	if (is_array($results_categories))
		//print_r($results_categories);
		print ArrayFunctions::toString($results_categories);
		//explodeTree($results_categories)


?>

<body>
</body>
</html>