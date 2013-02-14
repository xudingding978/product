<?php

function get_ads( $what)
{
	switch($what){
		case "leaderboard":
			$path = "content/leaderboards/"; break;
		case "skyscraper": 
			$path = "content/skyscrapers/"; break;
	}

	$dir_handle = @opendir($path) or die("Unable to open $path");
	
	//running the while loop
	while (false !== ($file = readdir($dir_handle)))
	{
		$display = FALSE;
		$tmp=explode(".",$file);
		$ext=strtolower($tmp[sizeof($tmp)-1]);
		if ($ext=="jpeg" || $ext=="jpg" || $ext=="png" || $ext=="gif") $display=TRUE;
		if (strpos($file,".html")) $display=FALSE;
		if ($file=="." || $file=="..") $display=FALSE;
		if ($file=="." || $file=="..") $display=FALSE;
		if ($display) 
		{
			$files[]=$file;
			$lfiles[]=strtolower($file);
		}
	}
	if ($files)
	{
		asort($lfiles);
		foreach($lfiles as $key => $file)
		{
			$filepath=$files[$key];
			$filename = basename($filepath);
			$realpath=$path.$filename;
		  $ads[]=$realpath;
		}
	}	
	//closing the directory
	closedir($dir_handle);
	return $ads;
	}	
?>
