<?php

require_once ('export.php');

class Supplier extends Export {
	protected $_documentObj = null;
	private $_filename = "suppliers.txt";
	
	public function exec() {
                                    
		$bRet = true;
		$tag = $this->_template;
		$this->_dblog->error_log("Processing brand export...");
		$this->_documentObj = new document();
		if ( isset($this->_targetDirectory) && isset($this->_targetYear) )
		{
			if ($this->openDbConnection()) 
			{
				$this->_dblog->error_log("Connected [Successful].");
				$records = $this->_dbConnectionObj->doQuery("SELECT * from tpl_directory where REC_ID = ?", $this->_targetDirectory);
				// do other things here
				if (count($records) == 1) // it should only be one otherwise this is not valid result
				{
					$this->_documentObj->add($tag['HEADER_TAG']);
					
					$this->_dblog->error_log("Collecting information...");
                                                                                          $this->_dblog->error_log("CALL getShadowDirAndSupplierInfo(" . $this->_targetDirectory . " , " . $this->_targetYear .")");
					$qSupplierResult = $this->_dbConnectionObj->doStoredProcQuery("CALL getShadowDirAndSupplierInfo(".$this->_targetDirectory.",".$this->_targetYear.")");
					if (count($qSupplierResult) > 0) {
						$this->_dblog->error_log("CALL getShadowDirAndSupplierInfo: num_rows = " . $qSupplierResult->num_rows);
						while( ($supplier = $qSupplierResult->fetch_array(MYSQLI_ASSOC)) == true )	{
                                                                                                                            $this->_dblog->error_log(var_export($supplier, true));	
                                                                                                                            if ( $supplier['OFFERING_NAME'] == "Premium Listing" ) {
								$this->_documentObj->add($tag['LOGO_TAG']);
							}
							$this->_documentObj->add($tag['SUPPLIERNAME_TAG'] . $supplier['NAME']);
							if ($supplier['OFFERING_NAME'] == 'Premium Listing' || $supplier['OFFERING_NAME'] == 'Advanced Listing') {
								if ($supplier['COMPANY_PROFILE_TEXT'] != '' ) {
									$tmpString = $supplier['COMPANY_PROFILE_TEXT'];
									$tmpString = str_replace("\r\n", '', $tmpString);
									$tmpString = str_replace("\n", ' ', $tmpString);
									$tmpString = str_replace("  ", ' ', $tmpString);
									$this->_documentObj->add($tag['COMPANYSTATEMENT_TAG'] . $tmpString);
								}
							}
							// PHYSICAL ADDRESS
							$tmpPhAddress = $this->getPhysicalAddress($supplier);
							if ($tmpPhAddress != "") {
								$this->_documentObj->add($tag['PHYSICAL_ADDRESS_TAG'] . $tmpPhAddress);
							}
							// POSTAL ADDRESS
							$tmpPostAddress = "";
							$tmpPostAddress = $this->getPostAddress($supplier);
							if ($tmpPostAddress != "") {
								$this->_documentObj->add($tag['POSTAL_ADDRESS_TAG'] . $tmpPostAddress);
							}
							// TELEPHONE
							$tmpPhone = ""; $tmp = "";
							$tmp = $supplier['FREE_TELEPHONE_NO'] . ' ';
							if ( $tmp{0} != '0' || $tmp{0} != '+') {
								$tmpPhone = $supplier['TELEPHONE_NO'];
							}
							else {
								$tmpPhone = '0' . $supplier['TELEPHONE_NO'];
							}
							if ( $tmpPhone != '0' && $tmpPhone != '') {
								$this->_documentObj->add($tag['PHONE_TAG'] . $tmpPhone);
							}
							// FREE TELEPHONE
							$tmpFPhone = ""; $tmp = "";
							$tmp = $supplier['FREE_TELEPHONE_NO'] . ' ';
							if ( $tmp{0} != '0' || $tmp{0} != '+') {
								$tmpFPhone = $supplier['FREE_TELEPHONE_NO'];
							}
							else {
								$tmpFPhone = '0' . $supplier['FREE_TELEPHONE_NO'];
							}
							if ( $tmpFPhone != '0' && $tmpFPhone != '') {
								$this->_documentObj->add($tag['FREEPHONE_TAG'] . $tmpFPhone);
							}
							// FAX
							$tmpFax = ""; $tmp = "";
							$tmp = $supplier['FAX_NO'] . ' ';
							if ( $tmp{0} != '0' || $tmp{0} != '+') {
								$tmpFax = $supplier['FAX_NO'];
							}
							else {
								$tmpFax = '0' . $supplier['FAX_NO'];
							}
							if ( $tmpFax != '0' && $tmpFax != '') {
								$this->_documentObj->add($tag['FAX_TAG'] . $tmpFax);
							}
							// FREE FAX
							$tmpFFax = ""; $tmp = "";
							$tmp = $supplier['FREE_FAX_NO'] . ' ';
							if ( $tmp{0} != '0' || $tmp{0} != '+') {
								$tmpFFax = $supplier['FREE_FAX_NO'];
							}
							else {
								$tmpFFax = '0' . $supplier['FREE_FAX_NO'];
							}
							if ( $tmpFFax != '0' && $tmpFFax != '') {
								$this->_documentObj->add($tag['FREEFAX_TAG'] . $tmpFFax);
							}
							// EMAIL ADDRESS
							$tmpEmail = $supplier['EMAIL_ADDRESS'];
							if ( $tmpEmail != '' ) {
								$this->_documentObj->add($tag['EMAIL_TAG'] . $tmpEmail);
							}
							// WEBSITE
							$tmpWeb = $supplier['WEBSITE_ADDRESS'];
							if ( $tmpWeb != '' ) {
								$this->_documentObj->add($tag['WEBSITE_TAG'] . $tmpWeb);
							}
							// CONTACT NAME
							$tmpContactName = $supplier['CONTACT_NAME'];
							$tmpContactPos = $supplier['CONTACT_POSITION'];
							if ( $tmpContactName != '' &&  $tmpContactPos != '') {
								$tmpContactName = $tmpContactName . ' - ' . $tmpContactPos;
							}
							if ( $tmpContactName != '' ) $this->_documentObj->add($tag['CONTACTNAME_TAG'] . $tmpContactName);
							
							if ( $supplier['OFFERING_NAME'] == 'Premium Listing' )
							{
								$this->_dbConnectionObj->doFreeResult();
								// line modified by Jason
								// $qBranches = $this->_dbConnectionObj->doQuery("SELECT * FROM tpl_supplier_branch WHERE (SUPPLIER_REC_ID = ? )", $supplier['REC_ID']);
								$qBranches = $this->_dbConnectionObj->doQuery("SELECT * FROM tpl_shadow_supplier_branch WHERE (SHADOW_REC_ID = ? )", $supplier['SHADOW_REC_ID']);
								if (count($qBranches) > 0)
								{
									$this->_documentObj->add($tag['BRANCHES_TAG']);
									while ( ($branch = $qBranches->fetch_array(MYSQLI_ASSOC)) == true ) {
										$this->_documentObj->add($tag['BRANCH_NAME_TAG'] . $branch['NAME']);
										// PHYSICAL ADDRESS
										/* -- reported by TPL during winetech export (refer email on 26/05/2011)
										$tmpBPhAddress = $this->getPhysicalAddress($branch);
										if ($tmpBPhAddress != "") {
											$this->_documentObj->add($tag['BRANCH_PHYSICAL_ADDRESS_TAG'] . $tmpBPhAddress);
										}
										*/
										// POSTAL ADDRESS
										$tmpBPostAddress = $this->getPostAddress($branch);
										if ($tmpBPostAddress != "") {
											$this->_documentObj->add($tag['BRANCH_POSTAL_ADDRESS_TAG'] . $tmpBPostAddress);
										}
										
										// TELEPHONE
										$tmpBPhone = ""; $tmp = "";
										$tmp = $branch['TELEPHONE_NO'] . ' ';
										if ( $tmp{0} != '0' || $tmp{0} != '+') {
											$tmpBPhone = $branch['TELEPHONE_NO'];
										}
										else {
											$tmpBPhone = '0' . $branch['TELEPHONE_NO'];
										}
										if ( $tmpBPhone != '0' && $tmpBPhone != '') {
											$this->_documentObj->add($tag['BRANCH_PHONE_TAG'] . $tmpBPhone);
										}
										// FREE TELEPHONE
										$tmpBFPhone = ""; $tmp = "";
										$tmp = $branch['FREE_TELEPHONE_NO'] . ' ';
										if ( $tmp{0} != '0' || $tmp{0} != '+') {
											$tmpBFPhone = $branch['FREE_TELEPHONE_NO'];
										}
										else {
											$tmpBFPhone = '0' . $branch['FREE_TELEPHONE_NO'];
										}
										if ( $tmpBFPhone != '0' && $tmpBFPhone != '') {
											$this->_documentObj->add($tag['BRANCH_FREEPHONE_TAG'] . $tmpBFPhone);
										}
										// FAX
										$tmpBFax = ""; $tmp = "";
										$tmp = $branch['FREE_TELEPHONE_NO'] . ' ';
										if ( $tmp{0} != '0' || $tmp{0} != '+') {
											$tmpBFax = $branch['FAX_NO'];
										}
										else {
											$tmpBFax = '0' . $branch['FAX_NO'];
										}
										if ( $tmpBFax != '0' && $tmpBFax != '') {
											$this->_documentObj->add($tag['BRANCH_FAX_TAG'] . $tmpBFax);
										}
										// FREE FAX
										$tmpBFFax = ""; $tmp = "";
										$tmp = $branch['FREE_FAX_NO'] . ' ';
										if ( $tmp{0} != '0' || $tmp{0} != '+') {
											$tmpBFFax = $branch['FREE_FAX_NO'];
										}
										else {
											$tmpBFFax = '0' . $branch['FREE_FAX_NO'];
										}
										if ( $tmpBFFax != '0' && $tmpBFFax != '') {
											$this->_documentObj->add($tag['BRANCH_FREEFAX_TAG'] . $tmpBFFax);
										}
										// EMAIL ADDRESS
										$tmpBEmail = $branch['EMAIL_ADDRESS'];
										if ( $tmpBEmail != '' ) {
											$this->_documentObj->add($tag['BRANCH_EMAIL_TAG'] . $tmpBEmail);
										}
									}
								}
								
								$this->_dbConnectionObj->doFreeResult();
								$qKeyPersonnel = $this->_dbConnectionObj->doQuery("SELECT * FROM tpl_shadow_supplier_key_personnel WHERE (SHADOW_REC_ID = ? )", $supplier['SHADOW_REC_ID']);
								if ($qKeyPersonnel->num_rows > 0)
								{
									$this->_documentObj->add($tag['KEYPERSONNEL_TAG']);
									while ( ($keypersonnel = $qKeyPersonnel->fetch_array(MYSQLI_ASSOC)) == true ) {
										// NAME
										$this->_documentObj->add($tag['KEYPERSONNEL_NAME_TAG'] . $keypersonnel['NAME']);
										// POSITION
										$tmpKPPosition = $keypersonnel['POSITION'];
										if ( $tmpKPPosition != '' ) {
											$this->_documentObj->add($tag['KEYPERSONNEL_POSITION_TAG'] . $tmpKPPosition);
										}
										// EMAIL ADDRESS
										$tmpBEmail = $keypersonnel['EMAIL_ADDRESS'];
										if ( $tmpBEmail != '' ) {
											$this->_documentObj->add($tag['KEYPERSONNEL_EMAIL_TAG'] . $tmpBEmail);
										}
										// TELEPHONE
										$tmpBPhone = ""; $tmp = "";
										$tmp = $keypersonnel['TELEPHONE_NO'] . ' ';
										if ( $tmp{0} != '0' || $tmp{0} != '+') {
											$tmpBPhone = $keypersonnel['TELEPHONE_NO'];
										}
										else {
											$tmpBPhone = '0' . $keypersonnel['TELEPHONE_NO'];
										}
										if ( $tmpBPhone != '0' && $tmpBPhone != '') {
											$this->_documentObj->add($tag['KEYPERSONNEL_PHONE_TAG'] . $tmpBPhone);
										}
										// FAX
										$tmpBFax = ""; $tmp = "";
										$tmp = $keypersonnel['FREE_TELEPHONE_NO'] . ' ';
										if ( $tmp{0} != '0' || $tmp{0} != '+') {
											$tmpBFax = $keypersonnel['FAX_NO'];
										}
										else {
											$tmpBFax = '0' . $keypersonnel['FAX_NO'];
										}
										if ( $tmpBFax != '0' && $tmpBFax != '') {
											$this->_documentObj->add($tag['KEYPERSONNEL_FAX_TAG'] . $tmpBFax);
										}
									}
								}
							}
						}
						$this->_dblog->error_log("Saving information to ".$this->_filename);
						//$this->_documentObj->save($this->_filename);
                                                $this->setDocContent($this->_documentObj->getContent());
					}
					else {
						$this->_errHandler = new ErrorHandler(ERR_DB_SUP_EMPTY_RESULT);
                                                                                                            $this->_dblog->error_log("Error: No result found");
						$bRet = false;
					}
				}
				$this->closeDbConnection();
			}
			else {
				$this->_errHandler = new ErrorHandler(ERR_DB_CONNECT);
				$bRet = false;
			}
		}
		else {
			$this->_errHandler = new ErrorHandler(ERR_EMPTY_PARAM);
			$bRet = false;
		}
		return $bRet;
	}

	public function setfile($filename) {
		$this->_filename = $filename;
	}
	
	public function getsqlext() {
		return MYSQLI;
	}
}

?>