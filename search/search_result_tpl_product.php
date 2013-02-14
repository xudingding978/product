<?PHP
$rec_id=$row[r];
$weight=$row[combined_wt];
$product = $db->getrow("REC_ID",$rec_id,"tpl_product","");
$content=file_get_contents("templates/search_tpl_product.html");

$content= str_replace("[WEIGHT]",$weight,$content);
$fieldnames=array("NAME","TEXT");
foreach($fieldnames as $fieldname){
 	$content= str_replace("[$fieldname]",$product[$fieldname],$content);
} 
print $content;
?>