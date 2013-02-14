<?php
global $instanceID;
$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
//$KoolControlsFolder = $path_doc_root . "/include/KoolPHPSuite";
//require($path_doc_root . "/include/KoolPHPSuite/KoolAjax/koolajax.php");
//$koolajax->scriptFolder = "./../include/KoolPHPSuite/KoolAjax";
//include_once($path_doc_root . "/include/KoolPHPSuite/KoolTabs/kooltabs.php");

//$kts = new KoolTabs("kts");
//$kts->styleFolder = $KoolControlsFolder . "/KoolTabs/styles/silver";
//$kts->addTab("root", "supplier-listing", "Listing Summary", "javascript:tabpanel.update(\"/dashboard/supplier-listing-details.php?instanceID=".$instanceID."\")", true);
//$kts->addTab("root", "supplier-details", "Listing Details", "javascript:tabpanel.update(\"/dashboard/supplier-details.php?instanceID=".$instanceID."\")");
//$kts->addTab("root", "supplier-branches", "Branches", "javascript:tabpanel.update(\"/dashboard/supplier-branches.php?instanceID=".$instanceID."\")");
//$kts->addTab("root", "supplier-distributors", "Distributors", "javascript:tabpanel.update(\"/dashboard/supplier-distributors.php?instanceID=".$instanceID."\")");
//$kts->addTab("root", "supplier-personnel", "Key Personnel", "javascript:tabpanel.update(\"/dashboard/supplier-personnel.php?instanceID=".$instanceID."\")");
//$kts->addTab("root", "supplier-brands", "Brands", "javascript:tabpanel.update(\"/dashboard/supplier-brands.php?instanceID=".$instanceID."\")");
//$kts->addTab("root", "supplier-categories", "Categories", "javascript:tabpanel.update(\"/dashboard/supplier-categories.php?instanceID=".$instanceID."\")");
//$kts->addTab("root", "awards", "Awards", "javascript:tabpanel.update(\"/dashboard/supplier-awards.php?instanceID=".$instanceID."\")");
//
//$kts->addTab("supplier-details", "supplier-trading-details", "Company Details", "javascript:tabpanel.update(\"/dashboard/supplier-details.php?instanceID=".$instanceID."\")", true);
//$kts->addTab("supplier-details", "supplier-company-profile", "Business Profile", "javascript:tabpanel.update(\"/dashboard/supplier-company-profile.php?instanceID=".$instanceID."\")");
//$kts->addTab("supplier-details", "supplier-physical-address", "Physical Address", "javascript:tabpanel.update(\"/dashboard/supplier-physical-address.php?instanceID=".$instanceID."\")");
//$kts->addTab("supplier-details", "supplier-postal-address", "Postal Address", "javascript:tabpanel.update(\"/dashboard/supplier-postal-address.php?instanceID=".$instanceID."\")");
//$kts->addTab("supplier-details", "supplier-contact-details", "Contact Details", "javascript:tabpanel.update(\"/dashboard/supplier-contact-details.php?instanceID=".$instanceID."\")");
//$kts->addTab("supplier-details", "supplier-website-details", "Website Details", "javascript:tabpanel.update(\"/dashboard/supplier-website-details.php?instanceID=".$instanceID."\")");
//$kts->addTab("supplier-details", "digital-media", "Digital Media", "javascript:tabpanel.update(\"/dashboard/dm/supplier-header.php?instanceID=".$instanceID."\");DoSelectTab(\"header\")");
//$kts->addTab("awards", "awards-details", "Awards", "javascript:tabpanel.update(\"/dashboard/supplier-awards.php?instanceID=".$instanceID."\")", true);
//$kts->addTab("awards", "accreditions-details", "Accreditions", "javascript:tabpanel.update(\"/dashboard/supplier-accreditations.php?instanceID=".$instanceID."\")");
//
//$kts->addTab("digital-media", "header", "Header", "javascript:tabpanel.update(\"/dashboard/dm/supplier-header.php?instanceID=".$instanceID."\")");
//$kts->addTab("digital-media", "logo", "Logo", "javascript:tabpanel.update(\"/dashboard/dm/supplier-logos.php?instanceID=".$instanceID."\")");
//$kts->addTab("digital-media", "photo-gallery-images", "Photo Gallery Images", "javascript:tabpanel.update(\"/dashboard/dm/supplier-photo-gallery_init.php?instanceID=".$instanceID."\")");
//$kts->addTab("digital-media", "advertisements", "Advertisements", "javascript:tabpanel.update(\"/dashboard/dm/supplier-advertisements.php?instanceID=".$instanceID."\")");
//$kts->addTab("digital-media", "pdf", "PDF", "javascript:tabpanel.update(\"/dashboard/dm/supplier-pdf.php?instanceID=".$instanceID."\")");
//$kts->addTab("digital-media", "profile", "Profile", "javascript:tabpanel.update(\"/dashboard/dm/supplier-profile.php?instanceID=".$instanceID."\")");
//$kts->addTab("digital-media", "video", "Video", "javascript:tabpanel.update(\"/dashboard/dm/supplier-video.php?instanceID=".$instanceID."\")");
//$kts->scroll = "scrolling";
//$kts->height = "500px";
?>
    
        
<table width="100%" border="0" cellpadding="0" cellspacing="0" style="background-repeat: repeat-y;">
    <tr>
        <td colspan="3" background="/images/tab_top.gif" style="background-repeat:repeat-x">
            <div class="indent indent_right topspacing bottomspacing" >	
                <div id="tabs">
                    <ul>
                        <li><a href="/dashboard/supplier-listing-details.php?instanceID=<?php echo $instanceID ?>">Listing Summary</a> </li>
                        <li><a href="#supdetail">Listing Details</a></li>
                        <li><a href="/dashboard/supplier-branches.php?instanceID=<?php echo $instanceID ?>">Branches</a></li>                                
                        <li><a href="/dashboard/supplier-distributors.php?instanceID=<?php echo $instanceID ?>">Distributors</a></li>
                        <li><a href="/dashboard/supplier-personnel.php?instanceID=<?php echo $instanceID ?>">Key Personnel</a></li>
                        <li><a href="/dashboard/supplier-brands.php?instanceID=<?php echo $instanceID ?>">Brands</a></li>
                        <li><a href="/dashboard/suppliercategoryselection.php?supplierid=<?php echo $GLOBALS["shadow_supplier_rec_id"]; ?>&instanceID=<?php echo $instanceID ?>">Categories</a></li>
                        <li><a href="#awards">Awards</a></li>
                    </ul>
                    <div id="supdetail">
                        <div id="supdetailssubtab">
                            <ul>
                                <li><a href="/dashboard/supplier-details.php?instanceID=<?php echo $instanceID ?>">Trading Details</a> </li>
                                <li><a href="/dashboard/supplier-company-profile.php?instanceID=<?php echo $instanceID ?>">Business Profile</a></li>  
                                <li><a href="/dashboard/supplier-physical-address.php?instanceID=<?php echo $instanceID ?>">Physical Address</a> </li>
                                <li><a href="/dashboard/supplier-postal-address.php?instanceID=<?php echo $instanceID ?>">Postal Address</a></li>
                                <li><a href="/dashboard/supplier-contact-details.php?instanceID=<?php echo $instanceID ?>">Contact Details</a> </li>
                                <li><a href="/dashboard/supplier-website-details.php?instanceID=<?php echo $instanceID ?>">Website Details</a></li>
                                <li><a href="#media">Digital Media</a> </li>                              
                            </ul>  
                            <div id="media">
                                <div id="mediasubtab">
                                    <ul>
                                        <li><a href="/dashboard/dm/supplier-header.php?instanceID=<?php echo $instanceID ?>">Header</a> </li>
                                        <li><a href="/dashboard/dm/supplier-logos.php?instanceID=<?php echo $instanceID ?>">Logo</a></li> 
                                        <li><a href="/dashboard/dm/supplier-photo-gallery_init.php?instanceID=<?php echo $instanceID ?>">Photos</a> </li>
                                        <li><a href="/dashboard/dm/supplier-advertisements.php?instanceID=<?php echo $instanceID ?>">advertisements</a></li>
                                        <li><a href="/dashboard/dm/supplier-pdf.php?instanceID=<?php echo $instanceID ?>">pdf</a> </li>
                                        <li><a href="/dashboard/dm/supplier-profile.php?instanceID=<?php echo $instanceID ?>">profile</a></li>
                                        <li><a href="/dashboard/dm/supplier-video.php?instanceID=<?php echo $instanceID ?>">video</a></li>
                                    </ul>                            
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="awards">
                        <div id="awardssubtab">
                            <ul>
                                <li><a href="/dashboard/supplier-awards.php?instanceID=<?php echo $instanceID ?>">Awards</a> </li>
                                <li><a href="/dashboard/supplier-accreditations.php?instanceID=<?php echo $instanceID ?>">Accreditations</a></li>                                
                            </ul>                            
                        </div>
                    </div>



                </div>
            </div>
        </td>
    </tr>


</table>
