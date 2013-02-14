<?php

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
require_once($path_doc_root  . "/include/KoolPHPSuite/KoolTreeView/kooltreeview.php");
require_once($path_doc_root  . "/config.php");
require_once("dataconnection.php");
require_once("constants.php");

class CategoryTree {
	protected $treeview;
	protected $root;
	private $ConnectionObj;
	
	function __construct()
	{
		global $ADMIN_DB_NAME;
		$this->treeview = new KoolTreeView("treeview");
		$this->ConnectionObj = new DataConnection(MYSQLI, $ADMIN_DB_NAME);
		$this->init();
	}
	
	public function render() {
		return $this->treeview->render();
	}
	
	public function init() {
		if ($this->ConnectionObj->Connect()) {
			$this->treeview->imageFolder="/images";
			$this->treeview->styleFolder="KoolPHPSuite/KoolTreeView/styles/default";
			$this->treeview->selectEnable = true;
			$this->treeview->width="300px";
			$this->treeview->height="500px";
			$this->treeview->overflow="auto";
			$this->treeview->showLines = true;
			$this->root = $this->treeview->getRootNode();
		}
	}
	public function maketree($dir, $yr) {
		global $DB_NAME;
		$result = $this->ConnectionObj->doStoredProcQuery("CALL GetDirByID('".$DB_NAME."',".$dir.")");
		if ( $result && $result->num_rows > 0) {
			$directory = $result->fetch_array(MYSQLI_ASSOC);
			$this->root->text  = $directory["NAME"]." - ".$yr;
			$this->root->id = "root";
			$this->root->expand = true;
			$this->root->image = "blank.png";
			
			$this->ConnectionObj->doFreeResult(); /*free the result to allow new sp call*/
			$this->populateTree($dir, 0, 'root');
			return true;
		}
		else {
			return false;
		}
		$this->ConnectionObj->Disconnect();
	}
	
	public function getTreeControl()
	{
		return $this->treeview;
	}
	
	private function populateTree($dir, $categoryParent, $node) {
		global $DB_NAME;
		$cats = $this->ConnectionObj->doStoredProcQuery("CALL GetDirectoryCategoriesByID('".$DB_NAME."',".$dir.",".$categoryParent.")");
		if ($cats && $cats->num_rows > 0)
		{
			while(($cat = $cats->fetch_array(MYSQLI_ASSOC)) == true)
			{
				//$this->ConnectionObj->doFreeResult(); /*free the result to allow new sp call*/
				//$sub = $this->ConnectionObj->doStoredProcQuery("CALL GetDirectoryCategoriesByID('".$DB_NAME."',".$dir.",".$cat['REC_ID'].")");
				//if ($sub && $sub->num_rows > 0) {
					$newnode = $this->treeview->Add($node, $cat["REC_ID"], $cat["NAME"]);
					$this->ConnectionObj->doFreeResult(); /*free the result to allow new sp call*/
					$this->populateTree($dir, $cat["REC_ID"], $cat["REC_ID"]);
				//}
			}
		}
	}
}

?>