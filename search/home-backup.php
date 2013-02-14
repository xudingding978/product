<?php 
	if(!isset($_SESSION)) session_start();
	$sid=session_id();
	$MAXLEN = 255; 		 // Maximum length for text display for every field;
	$MAXPAGEMATCHES = 5; // Max matches displayed per page
    include_once("includes/config.php");
	include_once("includes/db_class.php");
	include_once("includes/popular_tag_funcs.php");
	include_once("KoolPHPSuite/KoolTreeView/koolajax.php");
	include_once("includes/ads_funcs.php");
	
	$db = new Db;
	$skyscrapers=get_ads("skyscraper");

	$mysqli = new mysqli("localhost","tplweb","S3cr3t!","tpl");
	/* check connection */
	if (mysqli_connect_errno()) 
	{
   		printf("<br />Connect failed: %s\n", mysqli_connect_error());
    	exit();
	}
?>
<head>
	<META http-equiv=Content-Type content="text/html; charset=utf-8">
	<title></title> 
	<link rel="stylesheet" href="styles/style.css"/>
	<?php echo $koolajax->Render();?>
</head>
<body style="overflow: auto;">
	<!--  <div id="content_container"> -->
		<table border="0" width="100%" cellspacing="0" cellpadding="0">
			<tr>
				<td valign="top">
					<table border="0" width="100%" cellspacing="0" cellpadding="0">
						<tr>
							<td>
								<?php 
									$announcement=file_get_contents("content/home/announcement.html");
									print $announcement; 
								?>
							</td>
						</tr>
						<tr>
							<td>
								<div id="hline" style="width:340px; ">
									<img src="images/horzline.gif" width=487>
								</div>
								<img src="images/most_popular.png">
								<?PHP
									$test=file_get_contents("content/test.html");
									print $test;
								?>
								<!-- <div id="most_popular">
									<div id="hline" style="width:340px; ">
										<img src="images/horzline.gif" width=487>
									</div></br>
									<img src="images/most_popular.png">
								</div> -->
							</td>
						</tr>
						<tr>
							<td>
								<div id="hline" style="width:340px; ">
									<img src="images/horzline.gif" width=487>
								</div>
								<img src="images/recently_added.png">
								<?PHP 
									$test=file_get_contents("content/test2.html");
									print $test; 
								?>
								<!--  <div id="recently_added">
									<div id="hline" style="width:340px; ">
										<img src="images/horzline.gif" width=487>
									</div></br>
									<img src="images/recently_added.png">
								</div> -->
							</td>
						</tr>
					</table>
				</td>
				<td align="right">
					<div id="skyscraper">
						<?php echo KoolScripting::Start();?>
							<updatepanel id="skyscraper_panel" > 
								<content>
									<?PHP  
										 $idx=rand(0,sizeof($skyscrapers)-1);
										 print "<a href='http://www.arrowuniforms.co.nz' target='_blank'><img border='0' src='".$skyscrapers[$idx]."'/></a>";
									?>
								</content>										
								<loading image="KoolPHPSuite/KoolAjax/loading/5.gif"/>
							</updatepanel>
						<?php echo KoolScripting::End();?>
						<script type = "text/javascript">
							function SUpdate()
							{
								skyscraper_panel.update();
								setTimeout("SUpdate()",15000);
							}
							SUpdate();
						</script>
					</div>
				</td>
			</tr>
		</table>
	<!-- </div> -->
</body>
</html>
