<?PHP
function display_popular_tags($no_tags){
	$mysqli = new mysqli("localhost","tplweb","S3cr3t!","tpl");
	
	$query= "CALL get_popular_tags($no_tags);";
	if ($result = $mysqli->query($query) ) {
		/* free result set */
		$links="";
		while ($row = $result->fetch_array()) {
			$search_key=$row[SEARCH_TEXT];
			$size = rand(11,20);
			$style="font-size:".$size."px;";
			print "<a href='search.php?search_key=$search_key' class='popular_tag_link' style='$style'> ".$search_key." </a>";
		}
	}else{
		die("error:".$mysqli->error);
	}
	$result->close();
	print "<br><br>".$links;
}
?>