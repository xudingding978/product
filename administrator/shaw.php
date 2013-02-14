<?php

require_once ('export.php');
class Shaw extends Export {
	
	protected $_documentObj = null;
	private $_filename = "output\\shaws.txt";
	private $tag = Array();
	
	public function exec() {
		$bRet = true;
		$this->tag = $this->_template;
		if ( isset($this->_targetDirectory) && isset($this->_targetYear) )
		{
			//var_dump("Connecting to db...");
			if ($this->openDbConnection()) 
			{
				//var_dump("Connection to database successful.");
				// { OK, firstly, lets produce the supplier type documents }
				$this->doBuildSupplierType('SUPPLIER-TYPE-BREWERIES.HEADER', 'BREWERY', $this->_targetYear);
				$this->doBuildSupplierType('SUPPLIER-TYPE-MANUFACTURER.HEADER', 'MANUFACTURER', $this->_targetYear);
		        $this->doBuildSupplierType('SUPPLIER-TYPE-DISTRIBUTORS.HEADER', 'DISTRIBUTOR', $this->_targetYear);
		        $this->doBuildSupplierType('SUPPLIER-TYPE-WINERIES.HEADER', 'WINERY', $this->_targetYear);
		        $this->doBuildSupplierType('SUPPLIER-TYPE-OTHERALCOHOLIC.HEADER', 'OTHER-ALCOHOLIC', $this->_targetYear);
				$this->doBuildSupplierType('SUPPLIER-TYPE-NONALCOHOLIC.HEADER', 'NON-ALCOHOLIC', $this->_targetYear);
		        // { Now, lets produce the Brand Name document }
		        $this->doBuildBrandList('BRAND-LIST.HEADER');
		        // { Now, lets produce the Product Category Index Listing }
		        $this->doBuildDrinkTypesIndex('DRINK-TYPE-INDEX.HEADER');
		        // { And lastly, lets produce the drink types file }
		        $this->doBuildDrinkTypes('DRINK-TYPES.HEADER');
				$this->closeDbConnection();
				$bRet = true;
			}
			else {
				$this->_errHandler = new ErrorHandler(ERR_DB_CONNECT);
				$bRet = false;
			}
		}
		else {
			//$this->_errHandler = new ErrorHandler(ERR_EMPTY_PARAM);
			$bRet = false;
		}
		return $bRet;
	}
	
	private function doBuildSupplierType($templatefile, $typeCode, $year) {
		$bRet = true;
		include "../config.php";
		if ( file_exists($SHAWS_HEADER . "\\". $templatefile))
		{
			if ( !$this->isDBConnected() ) {
				//$this->_errHandler = new ErrorHandler(ERR_DB_NOTCONNECTED);
				return false;
			}
			$this->_documentObj = new document();
			$data = file_get_contents ( $templatefile );
			$this->_documentObj->add($data); //Load From File
			$records = $this->_dbConnectionObj->doStoredProcQuery("CALL getSupplierFromCode('".$typeCode."')");
			if ($records->num_rows >= 1) // it should only be one otherwise this is not valid result 
			{
				$supplerType_record = $records->fetch_array(MYSQLI_ASSOC);
				$this->_dbConnectionObj->doFreeResult();
				$state = "CLOSED";
				$shadow_supplier_infos = $this->_dbConnectionObj->doStoredProcQuery("CALL getShadowSupplierInfo(".$supplerType_record['REC_ID'].",".$this->_targetYear.",'".$state."')");
				if ($shadow_supplier_infos && $shadow_supplier_infos->num_rows > 0)
				{
					while(($supplier = $shadow_supplier_infos->fetch_array(MYSQLI_ASSOC)) == true)
					{
						if ( strtoupper($supplier['DIRECTORY_OFFERING_SELECTION']) == strtoupper('Premium Listing') )
						{
							//$this->_documentObj->add('<ParaStyle:Hidden>****LOGO****');
							$this->_documentObj->add($this->tag['COMMENT_TAG']);
						}
						// COMPANY NAME
						$this->_documentObj->add($this->tag['SUPPLIERNAME_TAG'] . $this->getName($supplier));
						
						if ( strtoupper($supplier['DIRECTORY_OFFERING_SELECTION']) == strtoupper('Premium Listing') 
							|| strtoupper($supplier['DIRECTORY_OFFERING_SELECTION']) == strtoupper('Advanced Listing')) 
						{
							// COMPANY PROFILE
							$tmpProfile = $this->getCompanyProfile($supplier);
							if ($tmpProfile != "") {
								$this->_documentObj->add($this->tag['COMPANYSTATEMENT_TAG'] . $tmpProfile);
							}
						}
						// PHYSICAL ADDRESS
						$tmpPhAddress = $this->getPhysicalAddress($supplier);
						if ($tmpPhAddress != "") {
							$this->_documentObj->add($this->tag['PHYSICAL_ADDRESS_TAG'] . $tmpPhAddress);
						}
						// POSTAL ADDRESS
						$tmpPostAddress = $this->getPostAddress($supplier);
						if ($tmpPostAddress != "") {
							$this->_documentObj->add($this->tag['POSTAL_ADDRESS_TAG'] . $tmpPostAddress);
						}
						// TELEPHONE
						$tmpBPhone = $this->getTelephone($supplier);
						if ( $tmpBPhone != '0' && $tmpBPhone != '') {
							$this->_documentObj->add($this->tag["PHONE_TAG"] . $tmpBPhone);
						}
						// FREE TELEPHONE
						$tmpBFPhone = $this->getFreeTelephone($supplier);
						if ( $tmpBFPhone != '0' && $tmpBFPhone != '') {
							$this->_documentObj->add($this->tag["FREEPHONE_TAG"] . $tmpBFPhone);
						}
						// FAX
						$tmpFax = $this->getFax($supplier);
						if ( $tmpFax != '0' && $tmpFax != '') {
							$this->_documentObj->add($this->tag["FAX_TAG"] . $tmpFax);
						}
						// FREE FAX
						$tmpFFax = $this->getFreeFax($supplier);
						if ( $tmpFFax != '0' && $tmpFFax != '') {
							$this->_documentObj->add($this->tag["FREEFAX_TAG"] . $tmpFFax);
						}
						// EMAIL ADDRESS
						$tmpEmail = $this->getEmail($supplier);
						if ( $tmpEmail != '' ) {
							$this->_documentObj->add($this->tag["EMAIL_TAG"] . $tmpEmail);
						}
						// WEBSITE
						$tmpWeb = $this->getWebsite($supplier);
						if ( $tmpWeb != '' ) {
							$this->_documentObj->add($this->tag["WEBSITE_TAG"] . $tmpWeb);
						}
						/* { OK, lets list the distributors } */
						$this->_dbConnectionObj->doFreeResult();
						$qSupplierDistributors = $this->_dbConnectionObj->doQuery("CALL getShadowSupplierDistributorFromShawsAdmin(?,?)", Array($supplier['SHADOW_REC_ID'], $supplier['MASTER_REC_ID']));
						while(($distributor = $qSupplierDistributors->fetch_array(MYSQLI_ASSOC)) == true)
						{
							// from lazarus they use '#9' (???) I change to '>'
							$this->_documentObj->add($this->tag["DISTRIBUTORSNAME_TAG"] . $this->getName($distributor) . '>' . $this->getTelephone($distributor));
						}
						/* { OK, if we're in an advanced or premium listing, then lets list the key personnel } */
						$this->_dbConnectionObj->doFreeResult();
						if ( $supplier['DIRECTORY_OFFERING_SELECTION'] == 'Premium Listing' ||
							$supplier['DIRECTORY_OFFERING_SELECTION'] == 'Advanced Listing' ) {
							
							$qSupplierPersonnels = $this->_dbConnectionObj->doQuery("CALL getShadowSupplierPersonnelFromShawsAdmin(?,?)", Array($supplier['SHADOW_REC_ID'], $supplier['MASTER_REC_ID']));
							while(($personnel = $qSupplierPersonnels->fetch_array(MYSQLI_ASSOC)) == true) {
								$this->_documentObj->add($this->tag["PERSONNELNAME_TAG"] . $this->getPersonPosition($personnel) . ': <0x000A>' . $this->getName($personnel));
								// TELEPHONE
								$tmpPhone = $this->getTelephone($personnel);
								if ( $tmpPhone != '0' && $tmpPhone != '') {
									$this->_documentObj->add($this->tag["PERSONNELPHONE_TAG"] . $tmpPhone);
								}
								// FAX
								$tmpFax = $this->getFax($personnel);
								if ( $tmpFax != '0' && $tmpFax != '') {
									$this->_documentObj->add($this->tag["PERSONNEL_FAX_TAG"] . $tmpFax);
								}
								// EMAIL ADDRESS
								$tmpEmail = $this->getEmail($personnel);
								if ( $tmpEmail != '' ) {
									$this->_documentObj->add($this->tag["PERSONNEL_EMAIL_TAG"] . $tmpEmail);
								}
							}
						}
						$this->_dbConnectionObj->doFreeResult();
						if ( $supplier['DIRECTORY_OFFERING_SELECTION'] == 'Premium Listing' ) {
							$qSupplierBranch = $this->_dbConnectionObj->doQuery("CALL getShadowSupplierBranchFromShawsAdmin(?, ?)", Array($supplier['SHADOW_REC_ID'], $supplier['MASTER_REC_ID']));
							if ( $qSupplierBranch->num_rows > 0) {
								$this->_documentObj->add($this->tag["BRANCHES_TAG"]);
								while(($branch = $qSupplierBranch->fetch_array(MYSQLI_ASSOC)) == true) {
									// NAME
									$tmpName = $this->getName($branch);
									$this->_documentObj->add($this->tag["BRANCH_NAME_TAG"] . $tmpName);
									// PHYSICAL ADDRESS
									$tmpPhAddress = $this->getPhysicalAddress($branch);
									if ($tmpPhAddress != "") {
										$this->_documentObj->add($this->tag["BRANCH_PHYSICAL_ADDRESS_TAG"] . $tmpPhAddress);
									}
									// POSTAL ADDRESS
									$tmpPostAddress = "";
									$tmpPostAddress = $this->getPostAddress($branch);
									if ($tmpPostAddress != "") {
										$this->_documentObj->add($this->tag["BRANCH_POSTAL_ADDRESS_TAG"] . $tmpPostAddress);
									}
									// TELEPHONE
									$tmpBPhone = $this->getTelephone($branch);
									if ( $tmpBPhone != '0' && $tmpBPhone != '') {
										$this->_documentObj->add($this->tag["BRANCH_PHONE_TAG"] . $tmpBPhone);
									}
									// FREE TELEPHONE
									$tmpBFPhone = $this->getFreeTelephone($branch);
									if ( $tmpBFPhone != '0' && $tmpBFPhone != '') {
										$this->_documentObj->add($this->tag["BRANCH_FREEPHONE_TAG"] . $tmpBFPhone);
									}
									// FAX
									$tmpFax = $this->getFax($branch);
									if ( $tmpFax != '0' && $tmpFax != '') {
										$this->_documentObj->add($this->tag["BRANCH_FAX_TAG"] . $tmpFax);
									}
									// FREE FAX
									$tmpFFax = $this->getFreeFax($branch);
									if ( $tmpFFax != '0' && $tmpFFax != '') {
										$this->_documentObj->add($this->tag["BRANCH_FREEFAX_TAG"] . $tmpFFax);
									}
									// EMAIL ADDRESS
									$tmpEmail = $this->getEmail($branch);
									if ( $tmpEmail != '' ) {
										$this->_documentObj->add($this->tag["BRANCH_EMAIL_TAG"] . $tmpEmail);
									}
								}
							}
							else {
								$this->_dbConnectionObj->doFreeResult();
							}
						}
						/* OK, if we're in an advanced or premium listing, then lets list the brands */
						$this->_dbConnectionObj->doFreeResult();
						if ( $supplier['DIRECTORY_OFFERING_SELECTION'] == 'Premium Listing' ||
							$supplier['DIRECTORY_OFFERING_SELECTION'] == 'Advanced Listing' ) {
							// call a stored procedure here
							$supplier_brands = $this->_dbConnectionObj->doStoredProcQuery("CALL getSupplierBrands(".$supplier['SHADOW_REC_ID'].",".$supplier['MASTER_REC_ID'].")");
							if ( $supplier_brands->num_rows > 0) {
								$this->_documentObj->add($this->tag["BRAND_HEADING_TAG"]);
								while(($brands = $supplier_brands->fetch_array(MYSQLI_ASSOC)) == true) {
									$this->_documentObj->add($this->tag["BRAND_NAME_TAG"] . $brands['BRAND_NAME']);
								}
							}
							$this->_dbConnectionObj->doFreeResult();
						}
					}
				}
				else
				{
					$this->_dbConnectionObj->doFreeResult();
					//$this->_errHandler = new ErrorHandler(ERR_DB_RESULT);
					$bRet = false;
				}
			}
			else
			{
				$this->_dbConnectionObj->doFreeResult();
			}
			//var_dump("Saving information to ".$typeCode.".OUT");
				$this->_documentObj->save($OUTPUT . "\\". $typeCode . "-" . $this->_targetYear .'.OUT');
		        $this->setDocContent($this->_documentObj->getContent());
                        
                }
		else 
		{
			//$this->_errHandler = new ErrorHandler(ERR_FILE_NOTFOUND);
			$bRet = false;
		}
		return $bRet;
	}
	
	private function doBuildBrandList($templatefile) {
		$bRet = true;
		include "../config.php";
                $this->_documentObj = new document();
		if ( file_exists($SHAWS_HEADER . "\\". $templatefile))
		{
			
			if ( !$this->isDBConnected() ) {
				//$this->_errHandler = new ErrorHandler(ERR_DB_NOTCONNECTED);
				return false;
			}
			$data = file_get_contents ( $templatefile );
			$this->_documentObj->add($data); //Load From File
			$brandlist = $this->_dbConnectionObj->doStoredProcQuery("CALL getBrandFromShawsExport(?)", Array($this->_targetDirectory));
			// { OK, lets go through the brands and write out }
			if ($brandlist->num_rows > 0)
			{
				$this->_dbConnectionObj->doFreeResult();
				$state = "CLOSED";
				while(($brand = $brandlist->fetch_array(MYSQLI_ASSOC)) == true) {
					$suppliers = $this->_dbConnectionObj->doStoredProcQuery("CALL getShadowSupplier('" . $this->_targetDirectory . "','" . $this->_targetYear . "','" . $brand['REC_ID'] . "','" . $state . "')");
					if ($suppliers && $suppliers->num_rows > 0) {
						$this->_documentObj->add($this->tag["BRAND_LIST_NAME_TAG"] . $brand['NAME']);
						while(($supplier = $suppliers->fetch_array(MYSQLI_ASSOC)) == true) {
							$this->_documentObj->add($this->tag["BRAND_LIST_SUPPLIER_TAG"] . $supplier['NAME']);
						}
					}
					$this->_dbConnectionObj->doFreeResult();
				}
			}
			//var_dump("Saving information to BRAND-LIST.OUT");
				$this->_documentObj->save($OUTPUT . "\BRAND-LIST". "-" . $this->_targetYear .'.OUT');
		                 $this->setDocContent($this->_documentObj->getContent());
                                
                }
		else
		{
			//$this->_errHandler = new ErrorHandler(ERR_FILE_NOTFOUND);
			$bRet = false;
		}
		return $bRet;
	}
	
	private function doBuildDrinkTypesIndex($templatefile) {
		$bRet = true;
		include "../config.php";
		if ( file_exists($SHAWS_HEADER . "\\". $templatefile))
		{
			//$this->_documentObj = new document();
			if ( !$this->isDBConnected() ) {
				//$this->_errHandler = new ErrorHandler(ERR_DB_NOTCONNECTED);
				return false;
			}
			$data = file_get_contents ( $templatefile );
			$this->_documentObj->add($data); //Load From File
			$this->_dbConnectionObj->doFreeResult();
			$rootCategories = $this->_dbConnectionObj->doStoredProcQuery("CALL getRootCategoriesFromShawsExport(?)", Array($this->_targetDirectory));
			if ($rootCategories->num_rows > 0) // it should only be one otherwise this is not valid result 
			{
				$this->_dbConnectionObj->doFreeResult();
				while(($rootCategory = $rootCategories->fetch_array(MYSQLI_ASSOC)) == true) {
					$subCategories = $this->_dbConnectionObj->doStoredProcQuery("CALL getSubCategoriesFromShawsAdmin(?,?)",Array($rootCategory['REC_ID'] ,$this->_targetDirectory));
					if ($subCategories->num_rows > 0)
					{
						$this->_documentObj->add($this->tag["DRINK_TYPE_INDEX_CATEGORY_NAME_TAG"] . $rootCategory['NAME']);
						while(($subCategory = $subCategories->fetch_array(MYSQLI_ASSOC)) == true) {
							$this->_documentObj->add($this->tag["DRINK_TYPE_INDEX_NAME_TAG"] . $subCategory['NAME']);
						}
					}
					$this->_dbConnectionObj->doFreeResult();
				}
			}
			//var_dump("Saving information to DRINK-TYPE-INDEX.OUT");
			$this->_documentObj->save($OUTPUT . "\\DRINK-TYPE-INDEX". "-" . $this->_targetYear .'.OUT');							   
		        $this->setDocContent($this->_documentObj->getContent());
                        
                }
	}
	
	private function doBuildDrinkTypes($templatefile) {
		$bRet = true;
		include "../config.php";
		if ( file_exists($SHAWS_HEADER . "\\". $templatefile))
		{
			//$this->_documentObj = new document();
			if ( !$this->isDBConnected() ) {
				//$this->_errHandler = new ErrorHandler(ERR_DB_NOTCONNECTED);
				return false;
			}
			$data = file_get_contents ( $templatefile );
			$this->_documentObj->add($data); //Load From File
			$this->_dbConnectionObj->doFreeResult();
			$rootCategories = $this->_dbConnectionObj->doStoredProcQuery("CALL getRootCategoriesFromShawsExport(?)", Array($this->_targetDirectory));
			if ($rootCategories->num_rows > 0) // it should only be one otherwise this is not valid result 
			{
				while(($rootCategory = $rootCategories->fetch_array(MYSQLI_ASSOC)) == true) 
				{
					$this->_dbConnectionObj->doFreeResult();
					$Categories = $this->_dbConnectionObj->doStoredProcQuery("CALL getCategoriesFromShawsAdmin(?,?)",Array($rootCategory['REC_ID'] ,$this->_targetDirectory));
					if ($Categories->num_rows > 0)
					{
						$this->_documentObj->add($this->tag["DRINK_TYPE_CATEGORY_NAME_TAG"] . $rootCategory['NAME']);
						while(($Category = $Categories->fetch_array(MYSQLI_ASSOC)) == true) 
						{
							$this->_dbConnectionObj->doFreeResult();
							$subCategories = $this->_dbConnectionObj->doStoredProcQuery("CALL getSubCategoriesFromShawsAdmin(?,?)",Array($Category['REC_ID'] ,$this->_targetDirectory));
							if ($subCategories->num_rows > 0)
							{
								while(($subCategory = $subCategories->fetch_array(MYSQLI_ASSOC)) == true) 
								{
									$this->_documentObj->add($this->tag["DRINK_TYPE_NAME_TAG"] . $Category['NAME'] . ' >> ' . $subCategory['NAME']);
									$this->_dbConnectionObj->doFreeResult();
									$state = "CLOSED";
									$shadowProducts = $this->_dbConnectionObj->doStoredProcQuery("CALL getShadowProductFromShawsAdmin(?,?,?,?)",Array($subCategory['REC_ID'] ,$this->_targetDirectory ,$this->_targetYear, $state));
									if ($shadowProducts && $shadowProducts->num_rows > 0)
									{
										while(($shadowProduct = $shadowProducts->fetch_array(MYSQLI_ASSOC)) == true) 
										{
											$origin = $shadowProduct['REGION_OF_ORIGIN'];
											if ($shadowProduct['COUNTRY_OF_ORIGIN'] != '') {
												if ($origin == "" || $origin == null) {
													$origin = $shadowProduct['COUNTRY_OF_ORIGIN'];
												}
												else {
													$origin = $origin . ", " . $shadowProduct['COUNTRY_OF_ORIGIN'];
												}
											}
											$this->_documentObj->add($this->tag["DRINK_TYPE_PRODUCT_INFO_TAG"] . $shadowProduct['LABEL_NAME'] . ' ' . $shadowProduct['VARIETAL'] . ' ' . $shadowProduct['VINTAGE'] . ' > ' . $origin);
											$this->_documentObj->add($this->tag["DRINK_TYPE_PRODUCT_NAME_TAG"] . $shadowProduct['NAME']);
										}
									}
								}
							}
						}
					}
					else
					{
						// free before going back to while
						$this->_dbConnectionObj->doFreeResult();
					}
				}
			}
			//var_dump("Saving information to DRINK-TYPES.OUT");
			$this->_documentObj->save($OUTPUT . "\\DRINK-TYPES". "-" . $this->_targetYear .'.OUT');	
		
                        $this->setDocContent($this->_documentObj->getContent());
                }
	}
	public function setfile($filename) {
		$this->_filename = $filename;
	}
	
	public function getsqlext() {
		return MYSQLI;
	}
}

?>