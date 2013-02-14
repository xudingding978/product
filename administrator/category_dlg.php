<?php
	require_once "KoolPHPSuite/KoolAjax/koolajax.php";
	require_once "KoolPHPSuite/KoolAjax/koolajax.php";
	$koolajax->scriptFolder = "./../include/KoolPHPSuite/KoolAjax";
	if ($koolajax->isCallback) sleep(0);
?>
<html> 
	<head> 
		<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" /> 
		<title>Hospitality Administrator</title> 
		
		<link type="text/css" href="styles/themes/redmond/jquery-theme.css" rel="stylesheet" />
		<link type="text/css" href="styles/style.css" media="all" rel="stylesheet" />
		<script type="text/javascript" src="scripts/jquery-min.js"></script>
		<script type="text/javascript" src="scripts/jquery-ui.min.js"></script>
		<script type="text/javascript" src="scripts/administrator.js"></script>
		<?php echo $koolajax->Render();?>
	</head>
	<body>
		<div class="category_dlg_wrapper">
			<div class="category_dlg_left">
				<div id="category_tree">
					<?php
					include_once("category_treeview.php");
					$tree = new CategoryTree();
					if ($tree->maketree(4)) {
						echo $tree->render();
					}
					?>
				</div>
			</div>
			<div class="category_dlg_right">
				<div id="category_path">path</div>
				<div id="category_info"><center>
					<table>
						<tr>
							<td>Category / Sub Category Name:</td>
						</tr>
						<tr>
							<td><input type="text" id="catname" size="37" value=""/></td>
						</tr>
						<tr>
							<td>Print Order:</td>
						</tr>
						<tr>
							<td><input type="text" id="prntorder" size="37" value=""/></td>
						</tr>
						<tr>
							<td>Print Image Location:</td>
						</tr>
						<tr>
							<td><input type="text" id="prntimgloc" size="37" value=""/></td>
						</tr>
						<tr>
							<td>Web Image Location:</td>
						</tr>
						<tr>
							<td><input type="text" id="webimgloc" size="37" value=""/></td>
						</tr>
						<tr>
							<td>Text:</td>
						</tr>
						<tr>
							<td><textarea name="textinfo" rows="4" cols="30"></textarea></textarea></td>
						</tr>
					</center></table>
				</div>
			</div>
		</div>
	</body>
</html>