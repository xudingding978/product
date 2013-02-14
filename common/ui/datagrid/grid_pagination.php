
<?php

if (!isset($_SESSION)) {
    session_start();
}
$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once($path_doc_root . '/config.php');
include_once $path_doc_root . "/common/util/DBTransaction.php";
$daoname = $_POST["daoname"];
include_once $path_doc_root . "/common/dao/" . $daoname . ".php";

$daoclass = new $daoname();
$clickhandle = $_POST["clickhandle"];
$doubleclickhandle = $_POST["doubleclickhandle"];
$itemperpage = $_POST["itemperpage"];
$numerofpages = $_POST["numberofpages"];
$currentpagenumber = $_POST["currentpagenumber"];
$daomethod = $_POST["daomethod"];
$dbname = $_POST["dbname"];
$gridnumber = $_POST["gridnumber"];


$endcustomheader = $_POST["endcustomheader"];
$endcustomcontent = $_POST["endcustomcontent"];
$endcustomspan = $_POST["endcustomspan"];
$startcustomheader = $_POST["startcustomheader"];
$startcustomcontent = $_POST["startcustomcontent"];
$startcustomspan = $_POST["startcustomspan"];

//$daoclass=$_SESSION["daoclass"];
$col_headers = $_SESSION["col_headers"];

$dbtrans = new DBTransaction();
$dbconn = $dbtrans->getConnection($dbname);
$para_array = $_SESSION["para_array"];
error_log("Starting place..........................:" . ($itemperpage * $currentpagenumber));
$limit = " LIMIT " . ($itemperpage * $currentpagenumber) . "," . $itemperpage;
$daoresult = call_user_func(array($daoclass, $daomethod), array($dbconn, $para_array, $limit));

echo '<table id="grid" cellpadding="5" cellspacing="0" width="100%">';
echo ' <tr>';
if ($startcustomheader != "") {
    echo ' <th class=BodyText colspan="' . $startcustomspan . '">' . $startcustomheader . '</th>';
}
$headerlength = count($col_headers);
for ($i = 0; $i < $headerlength; $i++) {
    echo ' <th class=BodyText>' . $col_headers[$i] . '</th>';
}
if ($endcustomheader != "") {
    echo ' <th class=BodyText colspan="' . $endcustomspan . '">' . $endcustomheader . '</th>';
}
echo '</tr>';
foreach ($daoresult as $key => $row) {
    echo ' <tr >';
    if ($startcustomheader != "") {
        $content = $startcustomcontent;
        include $_SERVER["DOCUMENT_ROOT"] . "/common/ui/datagrid/grid_customize_column_content.php";
    }
    for ($i = 0; $i < $headerlength; $i++) {
        echo ' <td class=BodyText>' . $row[$i] . '</td>';
    }
    if ($endcustomheader != "") {
        $content = $endcustomcontent;
        include $_SERVER["DOCUMENT_ROOT"] . "/common/ui/datagrid/grid_customize_column_content.php";
    }
    echo '</tr>';
}





echo '</table>';
echo '<table id="gridfooter" cellpadding="5" cellspacing="0"  width="100%">';
echo '<tr><td colspan="8"></td><tr>';
echo '<tr bgcolor="lightskyblue">';
echo '<td ><a href="#"  onclick="first(' . $gridnumber . ');return false" class="ui-silk ui-silk-resultset-first" ><b>First</b></a></td>';
echo '<td ><a href="#"  onclick="previous(' . $gridnumber . ');return false" class="ui-silk ui-silk-resultset-previous" ><b>Previos</b></a></td>';
echo '<td ><span> Page </span></td>';
echo '<td ><span><input type="text" name="pagenumber" id="pagenumber" value="" size="2"> </span></td>';
echo '<td ><span> of ' . $numerofpages . ' </span></td>';
echo '<td ><a href="#"  onclick="next(' . $gridnumber . ');return false" class="ui-silk ui-silk-resultset-next" ><b>Next</b></a></td>';
echo '<td ><a href="#"  onclick="last(' . $gridnumber . ');return false" class="ui-silk ui-silk-resultset-last" ><b>Last</b></a></td>';
echo '<td width="70%"></td>';
echo '</tr>';
echo '</table>';
echo '<form name="gridform' . $gridnumber . '"  id="gridform' . $gridnumber . '">';
echo '<input type="hidden" name="clickhandle" id="clickhandle" value="' . $clickhandle . '">';
 echo '<input type="hidden" name="doubleclickhandle" id="doubleclickhandle" value="' . $doubleclickhandle . '">';
echo '<input type="hidden" name="itemperpage" id="itemperpage" value="' . $itemperpage . '">';
echo '<input type="hidden" name="numberofpages" id="numberofpages" value="' . $numerofpages . '">';
echo '<input type="hidden" name="currentpagenumber" id="currentpagenumber" value="' . $currentpagenumber . '">';
echo '<input type="hidden" name="daomethod" id="daomethod" value="' . $daomethod . '">';
echo '<input type="hidden" name="dbname" id="dbname" value="' . $dbname . '">';
echo '<input type="hidden" name="gridnumber" id="gridnumber" value="' . $gridnumber . '">';
echo '<input type="hidden" name="daoname" id="daoname" value="' . $daoname . '">';

echo '<input type="hidden" name="endcustomheader" id="endcustomheader" value="' . $endcustomheader . '">';
echo '<input type="hidden" name="endcustomcontent" id="endcustomcontent" value="' . $endcustomcontent . '">';
echo '<input type="hidden" name="endcustomspan" id="endcustomspan" value="' . $endcustomspan . '">';
echo '<input type="hidden" name="startcustomheader" id="startcustomheader" value="' . $startcustomheader . '">';
echo '<input type="hidden" name="startcustomcontent" id="startcustomcontent" value="' . $startcustomcontent . '">';
echo '<input type="hidden" name="startcustomspan" id="startcustomspan" value="' . $startcustomspan . '">';
echo '</form>';
?>
