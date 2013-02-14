<?php
	if(!isset($_SESSION)) { session_start(); }
	if(!isset($_SESSION["uid"])) { include("login.php"); return; }

	include_once("basepage.php");
	$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
	require_once($path_doc_root . "/include/KoolPHPSuite/KoolAjax/koolajax.php");
	$koolajax->scriptFolder = "./../include/KoolPHPSuite/KoolAjax";
	if ($koolajax->isCallback) sleep(0);
	echo $koolajax->Render();
	
	class ProductTab extends BasePage
	{
		function Name() {
			return "Product"; // name of the class
		}
		
		function ID() { //this is the value reference of this class
			return 2;
		}
		
		function showPage() {
			$this->buildMainControlPage();
		}
		
		function buildTemplateEditor() {
			$hasValue = false;
			$tag = null;
			if (isset($this->directory) && isset($this->year) && isset($this->tversion))
			{
				$tags = $this->getTags();
				if ($tags && $tags->num_rows > 0) {
					$tag = $tags->fetch_array(MYSQLI_ASSOC);
					$hasValue = true;
				}
			}
			?>
			<?php echo KoolScripting::Start();?>
				<updatepanel id="tabpanel_product">
					<content>
						<![CDATA[
							<script type="text/javascript">
								jQuery(document).ready(function($) {
									$(".export-product-panel #producttabs").tabs();			
								});
							</script>
							<div class="export-product-panel">
								<div id="producttabs">
									<ul>
										<li><a href="#product-content-1">Product Information</a></li>
									</ul>
									<div id="product-content-1">
										<table width="100%" border="0">
											<tr>
												<td>Header</td>
												<td><textarea id='headerTag<?php echo $this->ID(); ?>' name='headerTag<?php echo $this->ID(); ?>' cols='72' rows='5'><?php if ($hasValue) echo $tag["HEADER_TAG"];?> </textarea></td>
											</tr>
											<tr>
												<td>Product Name</td>
												<td><input id='productNameTag<?php echo $this->ID(); ?>' name='productNameTag<?php echo $this->ID(); ?>' type='text' size='100' value='<?php if ($hasValue) echo $tag["PRODUCTNAME_TAG"];?>'/></td>
											</tr>
											<tr>
												<td>Supplier Name</td>
												<td><input id='supplierNameTag<?php echo $this->ID(); ?>' name='supplierNameTag<?php echo $this->ID(); ?>' type='text' size='100' value='<?php if ($hasValue) echo $tag["SUPPLIERNAME_TAG"];?>'/></td>
											</tr>
											<tr>
												<td>Supplier Product Logo</td>
												<td><input id='supplierProductLogoTag<?php echo $this->ID(); ?>' name='supplierProductLogoTag<?php echo $this->ID(); ?>' type='text' size='100' value='<?php if ($hasValue) echo $tag["PRODUCTLOGO_TAG"];?>'/></td>
											</tr>
											<tr>
												<td>Hidden Type <i>(like Comment)</i></td>
												<td><input id='commentTag<?php echo $this->ID(); ?>' name='commentTag<?php echo $this->ID(); ?>' type='text' size='100' value='<?php if ($hasValue) echo $tag["COMMENT_TAG"];?>'/></td>
											</tr>
											<tr><td colspan='2'>
												<input type='hidden' id='template_id<?php echo $this->ID(); ?>' name='template_id<?php echo $this->ID(); ?>' value='<?php if ($hasValue) echo $tag["REC_ID"];?>'/>
											</td></tr>
										</table>
									</div>
								</div>
							</div>
						]]>
					</content>
					<loading image="../KoolPHPSuite/KoolAjax/loading/11.gif"/>
				</updatepanel>
			<?php echo KoolScripting::End();?>
			<?php
		}
		
		protected function getTags() {
			global $ADMIN_DB_NAME;
			$result = $this->ConnectionObj->doQuery("SELECT * from ".$ADMIN_DB_NAME.".tpl_admin_product_template WHERE RELEASE_YEAR = ? AND TEMPLATE_REC_ID = ? AND DIRECTORY_REC_ID = ?", array($this->year, $this->tversion, $this->directory));
			return $result;
		}
	}
	
	$object = new ProductTab();
	$object->showPage();
	$object->Destroy();
?>