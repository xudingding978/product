<?php
global $instanceID;
$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
require_once $path_doc_root . '/common/sessionhandler.php';
include_once ($path_doc_root . "/config.php");
include_once ($path_doc_root . "/include/db_class.php");
include_once ($path_doc_root . "/include/tpldb_class.php");
include_once ($path_doc_root . "/include/fpdf/fpdf.php");

try {
    $tpl_db = new tpldb;
   
    if ($client_user) {
        $user = $client_user;
        $shadow_root = $tpl_db->getShadowRootOfUser($client_user);
        $shadow_offering = $tpl_db->getShadowRecord('tpl_shadow_directory_offering', $shadow_root["SHADOW_DIRECTORY_OFFERING_REC_ID"]);
        $supplier = $tpl_db->getShadowSuppliersByRoot($shadow_root['REC_ID']);
        
        $directory = $tpl_db->getDirectoryDetails($shadow_root['DIRECTORY_REC_ID']);    
        
        $session_maintain = new session_maintain();
        $session_maintain->add_client_field('shadow_root', $shadow_root, $instanceID, 'client_data');
        $session_maintain->add_client_field('shadow_root_id', $shadow_root['REC_ID'], $instanceID, 'client_data');
        $session_maintain->add_client_field('shadow_directory_id', $shadow_root['DIRECTORY_REC_ID'], $instanceID, 'client_data');
        $session_maintain->add_client_field('shadow_state', $shadow_root['STATE'], $instanceID, 'client_data');

        $pdf = new FPDF();
        $pdf->AddPage();
        $pdf->Image($path_doc_root . '/media/logos/logo_2012_web.jpg', 4, 4, 120, 20);

        $liTopPos = 40;
        $liDefaultFont = 'Arial';
        $liDefaultFontSize = 10;
        $liDefaultLineHeight = 5;
        
        
        // Write out the header area
        $pdf->SetFont($liDefaultFont, 'B', 20);
        $pdf->Write($liDefaultLineHeight, $supplier['NAME']);
        //$pdf->Write($liDefaultLineHeight, var_export($supplier, true));
        $pdf->SetFont($liDefaultFont, '', $liDefaultFontSize);
        $pdf->SetY($liTopPos);
        //$pdf->Write($liDefaultLineHeight, var_export($user,true));
        $pdf->Write($liDefaultLineHeight, "The ");
        $pdf->SetFont($liDefaultFont, 'i', $liDefaultFontSize);
        $pdf->Write($liDefaultLineHeight, "CorporateToolBox ", "http://www.theccorporatetoolbox.com");
        $pdf->SetFont($liDefaultFont, '', $liDefaultFontSize);
        $pdf->Write($liDefaultLineHeight, " Directory Listing:  ");
        $pdf->SetFont($liDefaultFont, 'i', $liDefaultFontSize);
        $pdf->Write($liDefaultLineHeight, "The online resource centre of excellence.");
        $pdf->SetFont($liDefaultFont, '', $liDefaultFontSize);
//        $pdf->Write($liDefaultLineHeight, " and ");
//        $pdf->SetFont($liDefaultFont, 'i', $liDefaultFontSize);
//        $pdf->Write($liDefaultLineHeight, "Wine Technology Directory");
        $pdf->SetFont($liDefaultFont, '', $liDefaultFontSize);
        $pdf->Write($liDefaultLineHeight, " Oiling The Wheels Of Business Growth.");
        
        // OK, now lets write out the Directory Proof Sheet header
        $pdf->Ln(20);
        $pdf->SetFont($liDefaultFont, 'BU', 14);
        $pdf->Write($liDefaultLineHeight, "Directory Listing Proof Sheet for:   ");
        $pdf->SetFont($liDefaultFont, 'B', 14);
        $pdf->Write($directory["NAME"]);
        $pdf->Ln(10);
        $pdf->SetFont($liDefaultFont, '', $liDefaultFontSize);
        $pdf->Write($liDefaultLineHeight, "Please check the following proof sheet to ensure all the details of your listing are correct and present. This is just confirmation that the data entered is correct and your listings layout will be different in the directory.  If you have any changes please mark below or sign your acceptance form, at the bottom of the sheet and email this ASAP to info@thecorporatetoolbox.com.");
        $pdf->Ln(10);
        $pdf->Write($liDefaultLineHeight, "If you have any questions please email support on info@thecorporatetoolbox.com.");
        
        // Company Details - General
        $liColWidth = 50;
        $pdf->Ln(15);
        $pdf->SetFont($liDefaultFont, 'BU', 14);
        $pdf->Write($liDefaultLineHeight, "Company Details - General");
        $pdf->Ln(10);
        $pdf->SetFont($liDefaultFont, '', $liDefaultFontSize);
        // Company Name
        $pdf->Cell($liColWidth, $liDefaultLineHeight, 'Company Name');
        $pdf->Cell(2, $liDefaultLineHeight, ':');
        $pdf->Cell(180 - $liColWidth, $liDefaultLineHeight, $supplier["NAME"]);
        $pdf->Ln();
        // Trading As
        $pdf->Cell($liColWidth, $liDefaultLineHeight, 'Trading As');
        $pdf->Cell(2, $liDefaultLineHeight, ':');
        $pdf->Cell(180 - $liColWidth, $liDefaultLineHeight, $supplier["TRADING_AS_NAME"]);
        $pdf->Ln();
        // Contact Person
        $pdf->Cell($liColWidth, $liDefaultLineHeight, 'Contact Person');
        $pdf->Cell(2, $liDefaultLineHeight, ':');
        $pdf->Cell(180 - $liColWidth, $liDefaultLineHeight, $supplier["CONTACT_NAME"]);
        $pdf->Ln();
        // Contact Job Title
        $pdf->Cell($liColWidth, $liDefaultLineHeight, 'Contact Job Title');
        $pdf->Cell(2, $liDefaultLineHeight, ':');
        $pdf->Cell(180 - $liColWidth, $liDefaultLineHeight, $supplier["CONTACT_POSITION"]);
        $pdf->Ln();
        
        if ($shadow_offering["NAME"] != "Standard Listing") {
            // Company Profile
            $pdf->Cell($liColWidth, $liDefaultLineHeight, 'Company Profile');
            $pdf->Cell(2, $liDefaultLineHeight, ':');
            $pdf->MultiCell(180 - $liColWidth, $liDefaultLineHeight, $supplier["COMPANY_PROFILE_TEXT"], 0, 'L');
        }
        //$pdf->Ln();    
        // Company Details - Physical Address
        $pdf->Ln(10);
        $pdf->SetFont($liDefaultFont, 'BU', 14);
        $pdf->Write($liDefaultLineHeight, "Company Details - Physical Address");
        $pdf->Ln(10);
        $pdf->SetFont($liDefaultFont, '', $liDefaultFontSize);
        // Physical Building Address
        $pdf->Cell($liColWidth, $liDefaultLineHeight, 'Physical Building Address');
        $pdf->Cell(2, $liDefaultLineHeight, ':');
        $pdf->Cell(180 - $liColWidth, $liDefaultLineHeight, $supplier["PHYSICAL_ADDRESS_BUILDING_ADDRESS"]);
        $pdf->Ln();
        // Physical Building Address
        $pdf->Cell($liColWidth, $liDefaultLineHeight, 'Physical Street Address');
        $pdf->Cell(2, $liDefaultLineHeight, ':');
        $pdf->Cell(180 - $liColWidth, $liDefaultLineHeight, $supplier["PHYSICAL_ADDRESS_STREET_ADDRESS"]);
        $pdf->Ln();
        // Physical Building Address
        $pdf->Cell($liColWidth, $liDefaultLineHeight, 'Physical Suburb');
        $pdf->Cell(2, $liDefaultLineHeight, ':');
        $pdf->Cell(180 - $liColWidth, $liDefaultLineHeight, $supplier["PHYSICAL_ADDRESS_SUBURB"]);
        $pdf->Ln();
        // Physical Building Address
        $pdf->Cell($liColWidth, $liDefaultLineHeight, 'Physical City/Town');
        $pdf->Cell(2, $liDefaultLineHeight, ':');
        $pdf->Cell(180 - $liColWidth, $liDefaultLineHeight, $supplier["PHYSICAL_ADDRESS_CITY"]);
        $pdf->Ln();
        // Physical Building Address
        $pdf->Cell($liColWidth, $liDefaultLineHeight, 'Physical State');
        $pdf->Cell(2, $liDefaultLineHeight, ':');
        $pdf->Cell(180 - $liColWidth, $liDefaultLineHeight, $supplier["PHYSICAL_ADDRESS_STATE"]);
        $pdf->Ln();
        // Physical Building Address
        $pdf->Cell($liColWidth, $liDefaultLineHeight, 'Physical Post Code');
        $pdf->Cell(2, $liDefaultLineHeight, ':');
        $pdf->Cell(180 - $liColWidth, $liDefaultLineHeight, $supplier["PHYSICAL_ADDRESS_POST_CODE"]);
        $pdf->Ln();
        // Physical Building Address
        $pdf->Cell($liColWidth, $liDefaultLineHeight, 'Physical Country');
        $pdf->Cell(2, $liDefaultLineHeight, ':');
        $pdf->Cell(180 - $liColWidth, $liDefaultLineHeight, $supplier["PHYSICAL_ADDRESS_COUNTRY"]);
        //$pdf->Ln();    
        // Company Details - Postal Address
        $pdf->Ln(10);
        $pdf->SetFont($liDefaultFont, 'BU', 14);
        $pdf->Write($liDefaultLineHeight, "Company Details - Postal Address");
        $pdf->Ln(10);
        $pdf->SetFont($liDefaultFont, '', $liDefaultFontSize);
        // Physical Building Address
        $pdf->Cell($liColWidth, $liDefaultLineHeight, 'Postal Building Address');
        $pdf->Cell(2, $liDefaultLineHeight, ':');
        $pdf->Cell(180 - $liColWidth, $liDefaultLineHeight, $supplier["POSTAL_ADDRESS_BUILDING_ADDRESS"]);
        $pdf->Ln();
        // Physical Building Address
        $pdf->Cell($liColWidth, $liDefaultLineHeight, 'Postal Street Address');
        $pdf->Cell(2, $liDefaultLineHeight, ':');
        $pdf->Cell(180 - $liColWidth, $liDefaultLineHeight, $supplier["POSTAL_ADDRESS_STREET_ADDRESS"]);
        $pdf->Ln();
        // Physical Building Address
        $pdf->Cell($liColWidth, $liDefaultLineHeight, 'Postal Suburb');
        $pdf->Cell(2, $liDefaultLineHeight, ':');
        $pdf->Cell(180 - $liColWidth, $liDefaultLineHeight, $supplier["POSTAL_ADDRESS_SUBURB"]);
        $pdf->Ln();
        // Physical Building Address
        $pdf->Cell($liColWidth, $liDefaultLineHeight, 'Postal City/Town');
        $pdf->Cell(2, $liDefaultLineHeight, ':');
        $pdf->Cell(180 - $liColWidth, $liDefaultLineHeight, $supplier["POSTAL_ADDRESS_CITY"]);
        $pdf->Ln();
        // Physical Building Address
        $pdf->Cell($liColWidth, $liDefaultLineHeight, 'Postal State');
        $pdf->Cell(2, $liDefaultLineHeight, ':');
        $pdf->Cell(180 - $liColWidth, $liDefaultLineHeight, $supplier["POSTAL_ADDRESS_STATE"]);
        $pdf->Ln();
        // Physical Building Address
        $pdf->Cell($liColWidth, $liDefaultLineHeight, 'Postal Post Code');
        $pdf->Cell(2, $liDefaultLineHeight, ':');
        $pdf->Cell(180 - $liColWidth, $liDefaultLineHeight, $supplier["POSTAL_ADDRESS_POST_CODE"]);
        $pdf->Ln();
        // Physical Building Address
        $pdf->Cell($liColWidth, $liDefaultLineHeight, 'Postal Country');
        $pdf->Cell(2, $liDefaultLineHeight, ':');
        $pdf->Cell(180 - $liColWidth, $liDefaultLineHeight, $supplier["POSTAL_ADDRESS_COUNTRY"]);
        $pdf->Ln();

        $pdf->AddPage();

        // Company Details - Contact Details
        //$pdf->Ln(10);    
        $pdf->SetFont($liDefaultFont, 'BU', 14);
        $pdf->Write($liDefaultLineHeight, "Company Details - Contact Details");
        $pdf->Ln(10);
        $pdf->SetFont($liDefaultFont, '', $liDefaultFontSize);
        // Telephone Number
        $pdf->Cell($liColWidth, $liDefaultLineHeight, 'Telephone Number');
        $pdf->Cell(2, $liDefaultLineHeight, ':');
        $pdf->Cell(180 - $liColWidth, $liDefaultLineHeight, $supplier["TELEPHONE_NO"]);
        $pdf->Ln();
        // Freephone Number
        $pdf->Cell($liColWidth, $liDefaultLineHeight, 'Freephone Number');
        $pdf->Cell(2, $liDefaultLineHeight, ':');
        $pdf->Cell(180 - $liColWidth, $liDefaultLineHeight, $supplier["FREE_TELEPHONE_NO"]);
        $pdf->Ln();
        // Fax Number
        $pdf->Cell($liColWidth, $liDefaultLineHeight, 'Fax Number');
        $pdf->Cell(2, $liDefaultLineHeight, ':');
        $pdf->Cell(180 - $liColWidth, $liDefaultLineHeight, $supplier["FAX_NO"]);
        $pdf->Ln();
        // Freefax Number
        $pdf->Cell($liColWidth, $liDefaultLineHeight, 'Freefax Number');
        $pdf->Cell(2, $liDefaultLineHeight, ':');
        $pdf->Cell(180 - $liColWidth, $liDefaultLineHeight, $supplier["FREE_FAX_NO"]);
        $pdf->Ln();
        // Email Address
        $pdf->Cell($liColWidth, $liDefaultLineHeight, 'Email Address');
        $pdf->Cell(2, $liDefaultLineHeight, ':');
        $pdf->Cell(180 - $liColWidth, $liDefaultLineHeight, $supplier["EMAIL_ADDRESS"]);
        $pdf->Ln();
        // Website Address
        $pdf->Cell($liColWidth, $liDefaultLineHeight, 'Website Address');
        $pdf->Cell(2, $liDefaultLineHeight, ':');
        $pdf->Cell(180 - $liColWidth, $liDefaultLineHeight, $supplier["WEBSITE_ADDRESS"]);
        $pdf->Ln();
        // Facebook Address
        $pdf->Cell($liColWidth, $liDefaultLineHeight, 'Facebook Address');
        $pdf->Cell(2, $liDefaultLineHeight, ':');
        $pdf->Cell(180 - $liColWidth, $liDefaultLineHeight, $supplier["FACEBOOK_ADDRESS_URL"]);
        $pdf->Ln();
        // Twitter Address
        $pdf->Cell($liColWidth, $liDefaultLineHeight, 'Twitter Address');
        $pdf->Cell(2, $liDefaultLineHeight, ':');
        $pdf->Cell(180 - $liColWidth, $liDefaultLineHeight, $supplier["TWITTER_ADDRESS_URL"]);
        $pdf->Ln();
        // LinkedIn Address
        $pdf->Cell($liColWidth, $liDefaultLineHeight, 'LinkedIn Address');
        $pdf->Cell(2, $liDefaultLineHeight, ':');
        $pdf->Cell(180 - $liColWidth, $liDefaultLineHeight, $supplier["LINKEDIN_ADDRESS_URL"]);
        $pdf->Ln();
        // YouTube Address
        $pdf->Cell($liColWidth, $liDefaultLineHeight, 'YouTube Address');
        $pdf->Cell(2, $liDefaultLineHeight, ':');
        $pdf->Cell(180 - $liColWidth, $liDefaultLineHeight, $supplier["YOUTUBE_ADDRESS_URL"]);
        $pdf->Ln();
        // FourSquare Address
        $pdf->Cell($liColWidth, $liDefaultLineHeight, 'FourSquare Address');
        $pdf->Cell(2, $liDefaultLineHeight, ':');
        $pdf->Cell(180 - $liColWidth, $liDefaultLineHeight, $supplier["FOURSQUARE_ADDRESS_URL"]);
        //$pdf->Ln();     
        //BRANCH LIST

        if (($shadow_offering) AND ($shadow_offering["MAX_BRANCH_COUNT"] > 0)) {
            $pdf->Ln(10);
            $pdf->SetFont($liDefaultFont, 'BU', 14);
            $pdf->Write($liDefaultLineHeight, "Branch Details");
            $pdf->Ln(10);
            $pdf->SetFont($liDefaultFont, '', $liDefaultFontSize);

            $supplierbranches = $tpl_db->getShadowRecordsBySupplier("tpl_shadow_supplier_branch", $_SESSION["shadow_root_id"], $_SESSION["shadow_supplier_id"], "NAME", "");

            // Branch Header
            //$pdf->SetFont($liDefaultFont,'BU',$liDefaultFontSize);
            //$pdf->Cell(30, $liDefaultLineHeight, 'Name');
            //$pdf->Cell(100, $liDefaultLineHeight, 'Address');
            //$pdf->Cell(30, $liDefaultLineHeight, 'Phone');
            //$pdf->Cell(30, $liDefaultLineHeight, 'Fax');
            //$pdf->SetFont($liDefaultFont,'',$liDefaultFontSize);
            //$pdf->Ln();    

            if ($supplierbranches) {
                $recordcounter = 1;
                foreach ($supplierbranches as $key => $supplierbranch) {
                    if ($recordcounter <= $shadow_offering["MAX_BRANCH_COUNT"]) {
                        $pdf->SetFont($liDefaultFont, 'B', $liDefaultFontSize);
                        $pdf->Cell(30, $liDefaultLineHeight, 'Name:');
                        $pdf->SetFont($liDefaultFont, '', $liDefaultFontSize);
                        $pdf->Cell(50, $liDefaultLineHeight, $supplierbranch["NAME"]);
                        $pdf->Ln();
                        $address = '';
                        if ($supplierbranch["POSTAL_ADDRESS_BUILDING_ADDRESS"] != "")
                            $address = $supplierbranch["POSTAL_ADDRESS_BUILDING_ADDRESS"] . ", ";

                        $address = $address . $supplierbranch["POSTAL_ADDRESS_STREET_ADDRESS"] . ", " . $supplierbranch["POSTAL_ADDRESS_SUBURB"] . ", " . $supplierbranch["POSTAL_ADDRESS_CITY"] . ", ";

                        if ($supplierbranch["POSTAL_ADDRESS_STATE"] != "")
                            $address = $address . $supplierbranch["POSTAL_ADDRESS_STATE"] . ", ";

                        $address = $address . $supplierbranch["POSTAL_ADDRESS_POST_CODE"];

                        if ($supplierbranch["POSTAL_ADDRESS_COUNTRY"] != "")
                            $address = $address . ", " . $supplierbranch["POSTAL_ADDRESS_COUNTRY"];
                        $pdf->SetFont($liDefaultFont, 'B', $liDefaultFontSize);
                        $pdf->Cell(30, $liDefaultLineHeight, 'Address:');
                        $pdf->SetFont($liDefaultFont, '', $liDefaultFontSize);
                        $pdf->Cell(10, $liDefaultLineHeight, $address);
                        $pdf->Ln();
                        //$xpos = $pdf->GetX();
                        //$ypos = $pdf->GetY();
                        //$pdf->SetX($xpos + 100);
                        $pdf->SetFont($liDefaultFont, 'B', $liDefaultFontSize);
                        $pdf->Cell(30, $liDefaultLineHeight, 'Phone:');
                        $pdf->SetFont($liDefaultFont, '', $liDefaultFontSize);
                        $pdf->Cell(30, $liDefaultLineHeight, $supplierbranch["TELEPHONE_NO"]);
                        $pdf->SetFont($liDefaultFont, 'B', $liDefaultFontSize);
                        $pdf->Cell(30, $liDefaultLineHeight, 'Fax:');
                        $pdf->SetFont($liDefaultFont, '', $liDefaultFontSize);
                        $pdf->Cell(10, $liDefaultLineHeight, $supplierbranch["FAX_NO"]);
                        //$pdf->SetXY($xpos, $ypos);
                        //$pdf->SetFont($liDefaultFont,'B',$liDefaultFontSize);
                        //$pdf->Cell(30, $liDefaultLineHeight, 'Address:');
                        //$pdf->Cell(10, $liDefaultLineHeight, $supplierbranch["NAME"]);
                        //$pdf->MultiCell(95, $liDefaultLineHeight, $address, 0, 'L');
                        $pdf->Ln();
                        $pdf->Ln();
                    }

                    $recordcounter = $recordcounter + 1;
                }
            }
        }

        //PERSONNEL LIST
        if (($shadow_offering) AND ($shadow_offering["MAX_KEY_PERSONNEL_COUNT"] > 0)) {
            $pdf->Ln(10);
            $pdf->SetFont($liDefaultFont, 'BU', 14);
            $pdf->Write($liDefaultLineHeight, "Key Personnel");
            $pdf->Ln(10);
            $pdf->SetFont($liDefaultFont, '', $liDefaultFontSize);

            $keypersons = $tpl_db->getShadowRecordsBySupplier("tpl_shadow_supplier_key_personnel", $_SESSION["shadow_root_id"], $_SESSION["shadow_supplier_id"], "NAME", "");

            // Personnel Header
            $pdf->SetFont($liDefaultFont, 'BU', $liDefaultFontSize);
            $pdf->Cell(30, $liDefaultLineHeight, 'Name');
            $pdf->Cell(60, $liDefaultLineHeight, 'Position');
            $pdf->Cell(50, $liDefaultLineHeight, 'Email Address');
            $pdf->Cell(25, $liDefaultLineHeight, 'Phone');
            $pdf->Cell(25, $liDefaultLineHeight, 'Fax');
            $pdf->SetFont($liDefaultFont, '', $liDefaultFontSize);
            $pdf->Ln();
         

            if ($keypersons) {
                $recordcounter = 1;
                foreach ($keypersons as $key => $keyperson) {
                    if ($recordcounter <= $shadow_offering["MAX_KEY_PERSONNEL_COUNT"]) {
                        $pdf->Cell(30, $liDefaultLineHeight, $keyperson["NAME"]);

                        $xpos = $pdf->GetX();
                        $ypos = $pdf->GetY();
                        $pdf->SetX($xpos + 60);
                        $pdf->Cell(50, $liDefaultLineHeight, $keyperson["EMAIL_ADDRESS"]);
                        $pdf->Cell(25, $liDefaultLineHeight, $keyperson["TELEPHONE_NO"]);
                        $pdf->Cell(25, $liDefaultLineHeight, $keyperson["FAX_NO"]);

                        $pdf->SetXY($xpos, $ypos);
                        $pdf->MultiCell(55, $liDefaultLineHeight, $keyperson["POSITION"], 0, 'L');
                    }

                    $recordcounter = $recordcounter + 1;
                }
            }
        }

        //BRAND LIST

        if (($shadow_offering) AND ($shadow_offering["MAX_BRAND_COUNT"] > 0)) {
            $pdf->Ln(10);
            $pdf->SetFont($liDefaultFont, 'BU', 14);
            $pdf->Write($liDefaultLineHeight, "Brands");
            $pdf->Ln(10);
            $pdf->SetFont($liDefaultFont, '', $liDefaultFontSize);

            $supplierbrands = $tpl_db->getShadowRecordsBySupplier("tpl_shadow_supplier_brand", $_SESSION["shadow_root_id"], $_SESSION["shadow_supplier_id"], "tpl_brand.NAME", "INNER JOIN tpl_brand ON (tpl_shadow_supplier_brand.BRAND_REC_ID = tpl_brand.REC_ID)");

            if ($supplierbrands) {
                $recordcounter = 1;
                foreach ($supplierbrands as $key => $supplierbrand) {
                    if ($recordcounter <= $shadow_offering["MAX_BRAND_COUNT"]) {
                        $brand = $tpl_db->getRecord("tpl_brand", $supplierbrand["BRAND_REC_ID"]);

                        if ($supplierbrand["IS_LOGO_LISTING"] == 1)
                            $pdf->Cell(200, $liDefaultLineHeight, $brand["NAME"] . ' (***Logo Listing***)');
                        else
                            $pdf->Cell(200, $liDefaultLineHeight, $brand["NAME"]);

                        $pdf->Ln();
                    }

                    $recordcounter = $recordcounter + 1;
                }
            }
        }

        //CATEGORY LIST
        $pdf->Ln(10);
        $pdf->SetFont($liDefaultFont, 'BU', 14);
        $pdf->Write($liDefaultLineHeight, "Category / Product Listings");
        $pdf->Ln(10);
        $pdf->SetFont($liDefaultFont, '', $liDefaultFontSize);

        $tpl_db = new tpldb;
        $directory = $tpl_db->getRecord('tpl_directory', $shadow_directory_id);
        if ($directory["IS_PRODUCT_BASED"] == 1) {

            function TPLProductPanelDrawPath($recid) {

                $tpl_db = new tpldb;
                $productcategory = $tpl_db->getRecord('tpl_product_category', $recid);

                $result = "";
                if ($productcategory["PARENT_PRODUCT_CATEGORY_REC_ID"] != 0) {
                    $result = TPLProductPanelDrawPath($productcategory["PARENT_PRODUCT_CATEGORY_REC_ID"]);
                }

                return $result . " > " . $productcategory["NAME"];
            }

            $tpl_db = new tpldb;
            $categories = $tpl_db->GetProductBasedCategorySummary($shadow_root_id, $supplier["MASTER_REC_ID"]);

            if ($categories) {
                foreach ($categories as $key => $category) {
                    $path = TPLProductPanelDrawPath($category["PRODUCT_CATEGORY_REC_ID"]);

                    $pdf->Ln(10);
                    $pdf->SetFont($liDefaultFont, 'BU', $liDefaultFontSize);
                    $pdf->Write($liDefaultLineHeight, $path);
                    $pdf->Ln(10);
                    $pdf->SetFont($liDefaultFont, '', $liDefaultFontSize);

                    $products = $tpl_db->getShadowProductsByCategory($shadow_root_id, $shadow_supplier_id, $category["PRODUCT_CATEGORY_REC_ID"]);
                    if ($products) {
                        foreach ($products as $key => $product) {
                            $xpos = $pdf->GetX();
                            $ypos = $pdf->GetY();
                            $pdf->Cell(75, $liDefaultLineHeight, $product["LABEL_NAME"]);
                            $pdf->Cell(25, $liDefaultLineHeight, $product["VARIETAL"]);
                            $pdf->Cell(25, $liDefaultLineHeight, $product["VINTAGE"]);
                            $pdf->Cell(50, $liDefaultLineHeight, $product["REGION_OF_ORIGIN"] . "," . $product["COUNTRY_OF_ORIGIN"]);
                            if ($product["IS_LOGO_LISTING"] == 1)
                                $pdf->Cell(10, $liDefaultLineHeight, "**Logo**");
                            $pdf->Ln();

                            
                        }
                    }
                }
            }
        }
        else {

            function DoHasSelectedChildren($directory_rec_id, $parent_rec_id) {
                $tpl_db = new tpldb;
                $categories = $tpl_db->GetDirectoryCategories($directory_rec_id, $parent_rec_id);
                $result = FALSE;

                if ($categories) {
                    foreach ($categories as $key => $category) {
                        if ($result != TRUE) {
                            $isdirectorycategory = $tpl_db->IsDirectoryCategory($directory_rec_id, $category["REC_ID"]);
                            if ($isdirectorycategory == TRUE) {
                                $result = $tpl_db->IsShadowDirectoryCategoryListed($shadow_root_id, $category["REC_ID"]);

                                if ($result != TRUE) {
                                    $result = DoHasSelectedChildren($directory_rec_id, $category["REC_ID"]);
                                }
                            }
                        }
                    }
                }

                return $result;
            }
             
            function DoBuildCategories($directory_rec_id, $parent_rec_id, $level) {
                global $pdf;

                $liTopPos = 40;
                $liDefaultFont = 'Arial';
                $liDefaultFontSize = 10;
                $liDefaultLineHeight = 5;

                $tpl_db = new tpldb;
                $categories = $tpl_db->GetDirectoryCategories($directory_rec_id, $parent_rec_id);
                $disabled = "disabled";

                if ($categories) {
                    foreach ($categories as $key => $category) {
                        $isdirectorycategory = $tpl_db->IsDirectoryCategory($directory_rec_id, $category["REC_ID"]);
                        if ($isdirectorycategory == TRUE) {
                            $ischecked = $tpl_db->IsShadowDirectoryCategoryListed($shadow_root_id, $category["REC_ID"]);
                            $islogolisted = $tpl_db->IsShadowDirectoryCategoryLogoListed($shadow_root_id, $category["REC_ID"]);

                            $lineout = FALSE;
                            if (($ischecked == TRUE) or (DoHasSelectedChildren($directory_rec_id, $category["REC_ID"]))) {
                                $lineout = TRUE;

                                if ($ischecked == TRUE) {
                                    $pdf->SetX(10 + ($level * 5));
                                    $pdf->SetFont($liDefaultFont, '', $liDefaultFontSize);
                                    $pdf->Write($liDefaultLineHeight, "- ");
                                    $pdf->SetFont($liDefaultFont, 'B', $liDefaultFontSize);
                                    $pdf->Write($liDefaultLineHeight, $category["NAME"]);

                                    if ($islogolisted) {
                                        $pdf->SetFont($liDefaultFont, '', $liDefaultFontSize);
                                        $pdf->Write($liDefaultLineHeight, ' (***Logo Listing***)');
                                    }

                                    $pdf->Ln(5);
                                } else {
                                    $pdf->SetX(10 + ($level * 5));
                                    $pdf->SetFont($liDefaultFont, '', $liDefaultFontSize);
                                    $pdf->Write($liDefaultLineHeight, "+ ");
                                    $pdf->Write($liDefaultLineHeight, $category["NAME"]);
                                    $pdf->Ln(5);
                                }
                            }

                            $nextlevel = $level + 1;
                            DoBuildCategories($directory_rec_id, $category["REC_ID"], $nextlevel);
                        }

                        if (($parent_rec_id == 0) AND ($lineout == TRUE)) {
                            $pdf->SetY($pdf->GetY() + 4);
                        }
                    }
                }
            }
          
            DoBuildCategories($shadow_directory_id, 0, 0);
        }
         
        $pdf->AddPage();
        $pdf->SetFont($liDefaultFont, 'BU', 14);
        $pdf->Write($liDefaultLineHeight, "Acceptance");
        $pdf->SetFont($liDefaultFont, '', $liDefaultFontSize);
        $pdf->Ln(10);

        $pdf->MultiCell(180, $liDefaultLineHeight, "The information provided here from companies listing in this directory is accepted in good faith by MediaWeb and on the basis that it does not knowingly infringe any other organizations' copyrights, intellectual property rights or agency agreements. In the case of any disputes the listings will be removed until a resolution is reached.", 0, 'L');
        $pdf->Ln();
        $pdf->MultiCell(180, $liDefaultLineHeight, "I hereby confirm I have checked my listing details and I have read and understand the above statement and am happy for this information to be published.", 0, 'L');
        $pdf->Ln(25);
        $pdf->Cell(20, $liDefaultLineHeight, "Full Name");
        $pdf->SetLineWidth(0.25);
        $pdf->Line($pdf->GetX(), $pdf->GetY() + 5, 95, $pdf->GetY() + 5);

        $pdf->SetX(100);
        $pdf->Cell(20, $liDefaultLineHeight, "Position");
        $pdf->SetLineWidth(0.25);
        $pdf->Line($pdf->GetX(), $pdf->GetY() + 5, 195, $pdf->GetY() + 5);

        $pdf->SetY(265);
        $pdf->MultiCell(180, $liDefaultLineHeight, "The CorporateToolbox - Phone: +64 27 246 5585; http://www.thecorporatetoolbox.com \nPO Box 28731, Remuera, Auckland 1541, New Zealand.", 0, 'L');

        $pdf->SetAuthor('MediaWeb Limited');
        $pdf->SetCreator('hospitalitybiz.co.nz');
        $pdf->SetTitle('"' . $directory["NAME"] . '" proof sheet for "' . $supplier["NAME"] . '"');
       
        $pdf->Output();
        
        
//    $pdf->Output(str_replace(' ', '-', preg_replace('/[^a-zA-Z0-9\s!&@_-|:;\"\',.?]/', '', $supplier["NAME"])).'.pdf', 'I');
    } else {
        include($path_doc_root . "/dashboard/login.php");
    }
} catch (Exception $e) {
    error_log('Message: ' . $e->getMessage());
}
?>
