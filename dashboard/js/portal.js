/* All callback functions for portal.php*/

var funtype="";
var embededSource="";
var popupwidth=0;
var popupheight=0;


function DoChangeListingType(newID)
{
  // alert("");
    if(old_offering_id==newID){
        alert("Selected listing type is same to existing one.");
        return false;
    }
    old_offering_id=newID;   
    if (newID == "0")
    {
        alert("Please select a valid listing type");
        transactionpanel.update();
    }
    else
    {
        var IsDowngrading;
        IsDowngrading=koolajax.callback(DoTPLIsCustomerDowngrading(newID),'');

        if (IsDowngrading)
        {
            alert('Downgrading');
            koolajax.callback(DoTPLChangeListingType(newID,instanceID),'');
            //transactionpanel.setContent("transaction-details.php");
            //transactionpanel.update();
            
            mainpanel.update("/dashboard/client_profile.php?instanceID="+instanceID);
            
             
        }
        else
        {   
            koolajax.callback(DoTPLChangeListingType(newID,instanceID),'');
            //transactionpanel.setContent("transaction-details.php");
            //transactionpanel.update();
            mainpanel.update("/dashboard/client_profile.php?instanceID="+instanceID);
        }      
    }
//location = location;
}
function resetForm(id) {
    $('#'+id).each(function(){
        this.reset();
    });
}
function checkEmail(emailadd) {
    var email = emailadd;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(email)) {               
        return false;
    }else{
        return true;
    }
    
}
var digitsOnly = /[1234567890]/g;
var integerOnly = /[0-9\.]/g;
var alphaOnly = /[A-Z]/g;

function restrictCharacters(myfield, e, restrictionType) {
    if (!e) var e = window.event
    if (e.keyCode) code = e.keyCode;
    else if (e.which) code = e.which;
    var character = String.fromCharCode(code);

    // if they pressed esc... remove focus from field...
    if (code==27) {
        this.blur();
        return false;
    }
 
    if (!e.ctrlKey && code!=9 && code!=8 && code!=36 && code!=37 && code!=38 && code!=39  && code!=40) {
        if (character.match(restrictionType)) {
            return true;
        } else {
            return false;
        }
                		
    }
}
function DoConfirmOrder() {
    var result;
    result=confirm("Are you sure that you want to confirm this order?  Changes will only be possible after your listing has been re-opened.");

    if (result)
    {
        mainpanel.update('/dashboard/proof-sheet.php?instanceID='+instanceID);

    }
}

function DoSubmitForApproval(directory, year, clientShadowRootId)
{
    var result;
    result=confirm("Are you sure you want to proceed for online posting approval?");
    if (result)
    {
        doShadow2Live(directory, year, clientShadowRootId);
    }
}

function doShadow2Live(directory, year, clientShadowRootId) {
    var result = false;
    result = koolajax.callback(CB_PrepareLiveData(directory, year, clientShadowRootId));
    if (result == true) {
        alert("Successful");
        window.location.reload();
    }
    else {
        alert("Failed");
    }
}

function DoSubmitForOpening(directory, year, clientShadowRootId)
{
    var result;
    result=confirm("Are you sure you want to open and edit your entry?");
    if (result)
    {
        doLive2Shadow(directory, year, clientShadowRootId);
    }
}

function doLive2Shadow(directory, year, clientShadowRootId) {
    var result = false;
    //alert("doLive2Shadow: [" + directory + "," + year + "," + clientShadowRootId + "]");
    result = koolajax.callback(CB_PrepareShadowData(directory, year, clientShadowRootId));
    //alert(result);
    if (result == true) {
        alert("Listing Opened Successfully");
        window.location.reload();
    }
    else {
        alert("Failed");
    }
}
     
    
    function DoSaveSupplierDetails(thisform)
    {  
             
        if (thisform.name.value != "" && thisform.trading_as_name.value != "")
        {
        	
            // OK, lets check if the supplier type even exists on the page
            if (thisform.supplier_type)
            {
                // OK, it looks as though it does ... lets call the server method
                if (thisform.supplier_type.selectedIndex == 0)
                {
                    alert("Please select a valid Supplier Type for this client before saving your changes.");
                }
                else
                {
                   
                    koolajax.callback(DoTPLUpdateSupplierDetails(thisform.name.value, thisform.trading_as_name.value, thisform.contact_name.value, thisform.contact_position.value, thisform.supplier_type[thisform.supplier_type.selectedIndex].value,instanceID));
                    tabpanel.update("/dashboard/supplier-details.php?instanceID="+instanceID);
                }
            }
            else
            {
              
                koolajax.callback(DoTPLUpdateSupplierDetails(thisform.name.value, thisform.trading_as_name.value, thisform.contact_name.value, thisform.contact_position.value, 0,instanceID));
                tabpanel.update("/dashboard/supplier-details.php?instanceID="+instanceID);
            }
        }
        else
        {
            alert("Please complete all of the mandatory fields before clicking the save changes button.");
        }
    }

    function DoSaveSupplierCompanyProfile(thisform)
    {       
       
        var result=koolajax.callback(DoTPLUpdateSupplierCompanyProfile(thisform.company_profile_text.value, $("#company_strapline_text").val(),$("#company_aboutus_text").val(),instanceID));
        	
        tabpanel.update("/dashboard/supplier-company-profile.php?instanceID="+instanceID);
        
    }
      
    function DoSaveSupplierPhysicalAddress(thisform)
    {
        if (thisform.physical_address_street_address.value != "" && thisform.physical_address_city.value != "")
        {
            koolajax.callback(DoTPLUpdateSupplierPhysicalAddress(thisform.physical_address_complete.value, thisform.physical_address_building_address.value, thisform.physical_address_street_address.value, thisform.physical_address_suburb.value, thisform.physical_address_city.value, thisform.physical_address_state.value, thisform.physical_address_post_code.value, thisform.physical_address_country.value, thisform.physical_address_dpid.value, thisform.physical_address_pxid.value, thisform.physical_address_longitude.value, thisform.physical_address_latitude.value, thisform.physical_address_height.value,instanceID));  	
            tabpanel.update("/dashboard/supplier-physical-address.php?instanceID="+instanceID);
        }
        else
        {
            alert("Please complete all of the mandatory fields before clicking the save changes button.");
        }
    }

    function DoSaveSupplierPostalAddress(thisform)
    {
               
        if (thisform.postal_address_street_address.value != "" && thisform.postal_address_city.value != "" && thisform.postal_address_post_code.value != "")
        {
            koolajax.callback(DoTPLUpdateSupplierPostalAddress(thisform.postal_address_building_address.value, thisform.postal_address_street_address.value, thisform.postal_address_suburb.value, thisform.postal_address_city.value, thisform.postal_address_state.value, thisform.postal_address_post_code.value, thisform.postal_address_country.value,instanceID));  	
            tabpanel.update("/dashboard/supplier-postal-address.php?instanceID="+instanceID);
        }
        else
        {
            alert("Please complete all of the mandatory fields before clicking the save changes button.");
        }
    }

    function DoSaveSupplierContactDetails(thisform)
    {
       
        if(!checkEmail(thisform.email_address.value)){
            alert("Please enter valid email address."); 
            return false;
        }
        if (thisform.telephone_no.value != "")
        {
            koolajax.callback(DoTPLUpdateSupplierContactDetails(thisform.telephone_no.value, thisform.free_telephone_no.value, thisform.fax_no.value, thisform.free_fax_no.value, thisform.email_address.value,instanceID));  	
            tabpanel.update("/dashboard/supplier-contact-details.php?instanceID="+instanceID);
        }
        else
        {
            alert("A4_Please complete all of the mandatory fields before clicking the save changes button.");
        }
    }

    function DoSaveSupplierWebsiteDetails(thisform){
        koolajax.callback(DoTPLUpdateSupplierWebsiteDetails(thisform.website_address.value, thisform.facebook_address.value, thisform.twitter_address.value, thisform.linkedin_address.value, thisform.youtube_address.value, thisform.foursquare_address.value,instanceID));  	
        tabpanel.update("/dashboard/supplier-website-details.php?instanceID="+instanceID);
    }

    function DoSupplierCategoryCheckChange(thischeckbox)
    {
        if (thischeckbox.checked)
        {
            var allowed;

            allowed = koolajax.callback(DoTPLCanCreateShadowProductCategoryAssociation(thischeckbox.name,instanceID));

            if (allowed == "SUCCESS")
            {
                allowed = koolajax.callback(DoTPLCreateShadowProductCategoryAssociation(thischeckbox.name,instanceID));  	
            }
            else
            {
                alert(allowed);
                thischeckbox.checked = false;
            }
        }
        else
        {
            koolajax.callback(DoTPLDeleteShadowProductCategoryAssociation(thischeckbox.name,instanceID));  	
        }
    }

  	 
    function DoSupplierCategoryLogoListingChange(thischeckbox)
    {
        if (thischeckbox.checked)
        {
            var allowed;

            allowed = koolajax.callback(DoTPLCanCreateShadowProductCategoryLogoListing(thischeckbox.name,instanceID));

            if (allowed == "SUCCESS")
            {
                allowed = koolajax.callback(DoTPLCreateShadowProductCategoryLogoListing(thischeckbox.name,instanceID));  	
            }
            else
            {
                alert(allowed);
                thischeckbox.checked = false;
            }
        }
        else
        {
            koolajax.callback(DoTPLDeleteShadowProductCategoryLogoListing(thischeckbox.name,instanceID));  	
        }
    }
  	  
    function DoSupplierBranchDelete(recid, name)
    {
        var result;
        result=confirm("Are you sure that you want to delete the branch '" + name + "'?");
d
        if (result)
        {  	  	  
            koolajax.callback(DoTPLDeleteSupplierBranchDetails(recid,instanceID));
        }
  	  	
        tabpanel.update("/dashboard/supplier-branches.php?instanceID="+instanceID);
    }	  

    function DoSupplierBranchUpdate(recid)
    {
        branchrecID=recid;
        koolajax.callback(DoTPLSetActiveSupplierBranch(recid,instanceID));
        activetab=tabpanel;
        //alert(instanceID);
        activedoc="/dashboard/supplier-branches.php?instanceID="+instanceID;
        adpSize('adpModal', 750, 620);
        adpContent('adpModal', '<iframe src=\"/dialogs/branch.php\" name=\"dialogframe\" id=\"dialogframe\" width=100% height=100% align=\"center\" Frameborder=\"0\" Scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\"></iframe>');
        adpShowMask('adpMask');
        adpShow('adpModal');
    }	  

    function DoSupplierDistributorDelete(recid, name)
    {
        var result;
        result=confirm("Are you sure that you want to delete the distributor '" + name + "'?");

        if (result)
        {  	  	  
            koolajax.callback(DoTPLDeleteSupplierDistributorDetails(recid,instanceID));
        }
  	  	
        tabpanel.update("/dashboard/supplier-distributors.php?instanceID="+instanceID);
    }	  

    function DoSupplierDistributorUpdate(recid)
    {
        
        koolajax.callback(DoTPLSetActiveSupplierDistributor(recid));       
        activetab=tabpanel;   
        activedoc="/dashboard/supplier-distributors.php?instanceID="+instanceID;
        
        adpSize('adpModal', 650,160);
      
        adpContent('adpModal', '<iframe src=\"/dialogs/distributor.php\" name=\"dialogframe\" id=\"dialogframe\" width=100% height=100% align=\"center\" Frameborder=\"0\" Scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\"></iframe>');
        
        adpShowMask('adpMask');
        
        adpShow('adpModal');
    }	  
  	  
    function DoSupplierPersonDelete(recid, name)
    {
        var result;
        result=confirm("Are you sure that you want to delete the person '" + name + "'?");

        if (result)
        {  	  	  
            koolajax.callback(DoTPLDeleteSupplierPersonDetails(recid,instanceID));
        }
  	  	
        tabpanel.update("/dashboard/supplier-personnel.php?instanceID="+instanceID);
    }	  

    function DoSupplierPersonUpdate(recid)
    {
        koolajax.callback(DoTPLSetActiveSupplierPerson(recid));
        activetab=tabpanel;           
        activedoc="/dashboard/supplier-personnel.php?instanceID="+instanceID;
        adpSize('adpModal', 700, 586);
        adpContent('adpModal', '<iframe src=\"/dialogs/person.php\" name=\"dialogframe\" id=\"dialogframe\" width=100% height=100% align=\"center\" Frameborder=\"0\" Scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\"></iframe>');
        adpShowMask('adpMask');
        adpShow('adpModal');
    }	  
  	  
    function DoSupplierBrandDelete(recid, name)
    {
        var result;
        result=confirm("Are you sure that you want to delete the brand '" + name + "'?");

        if (result)
        {  	  	  
            koolajax.callback(DoTPLDeleteSupplierBrandDetails(recid,instanceID));
        }
  	  	
        tabpanel.update("/dashboard/supplier-brands.php?instanceID="+instanceID);
    }	  

    function DoSupplierBrandUpdate(recid)
    {
        koolajax.callback(DoTPLSetActiveSupplierBrand(recid,instanceID));
        activetab=tabpanel;
        activedoc="/dashboard/supplier-brands.php?instanceID="+instanceID;
        adpSize('adpModal', 750, 300);
        adpContent('adpModal', '<iframe src=\"/dialogs/brand.php\" name=\"dialogframe\" id=\"dialogframe\" width=100% height=100% align=\"center\" Frameborder=\"0\" Scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\"></iframe>');
        adpShowMask('adpMask');
        adpShow('adpModal');
    }	  
    /* Logo Handling Mathods Start*/
    
    /* Logo Deleting*/
    function DoSupplierAwardDelete(recid, name)
    {
        var result;
        result=confirm("Are you sure that you want to delete the award '" + name + "'?");
                
        if (result)
        {  	  	  
            koolajax.callback(DoTPLDeleteSupplierAwardDetails(recid,instanceID));  
                    
        }
        tabpanel.update("/dashboard/supplier-awards.php?instanceID="+instanceID);
   	   
    }
    function DoSupplierPhotoGalleryRefresh()
    { 
        //tabpanel.update("/dashboard/supplier-awards.php");
        tabpanel.update("/dashboard/dm/supplier-photo-gallery.php?instanceID="+instanceID);
        
    }
    /* Photo Gallery Adding and Updating*/   
    function DoSupplierPhotoGalleryUpdate()
    {       
        //koolajax.callback(DoTPLSetActiveSupplierLogo(recid));
        activetab=tabpanel;
        activedoc="/dashboard/dm/supplier-photo-gallery.php?instanceID="+instanceID;       
        adpSize('adpModal', 690, 430);
        adpContent('adpModal', '<iframe src=\"/dialogs/supplier-photo-gallery.php\" name=\"dialogframe\" id=\"dialogframe\" width=100% height=100% align=\"center\" Frameborder=\"0\" Scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\"></iframe>');
        adpShowMask('adpMask');       
        adpShow('adpModal');
    }   
    /* Logo Adding and Updating*/   
    function DoSupplierMediaUpdate(recid,process)
    {  
        this.funtype=process;
        koolajax.callback(DoTPLSetActiveSupplierLogo(recid,this.funtype,instanceID));
        activetab=tabpanel;
       
        if(process=='logos'){        
            activedoc="/dashboard/dm/supplier-logos.php?instanceID="+instanceID;             
        }else if(process=='header'){
            activedoc="/dashboard/dm/supplier-header.php?instanceID="+instanceID;    
        }else{
            activedoc="/dashboard/dm/supplier-pdf.php?instanceID="+instanceID;    
        }        
             
        adpSize('adpModal', 690, 430);
        adpContent('adpModal', '<iframe src=\"/dialogs/mediaupload.php?instanceID='+instanceID+'\" name=\"dialogframe\" id=\"dialogframe\" width=100% height=100% align=\"center\" Frameborder=\"0\" Scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\"></iframe>');
        adpShowMask('adpMask');       
        adpShow('adpModal');
    }	
    function DoSupplierVideoUpdate(recid,process)
    {  
        this.funtype=process;
        koolajax.callback(DoTPLSetActiveSupplierLogo(recid,this.funtype,instanceID));       
        activedoc="/dashboard/dm/supplier-video.php";
        adpSize('adpModal', 690, 400);
        adpContent('adpModal', '<iframe src=\"/dialogs/supplier-video.php\" name=\"dialogframe\" id=\"dialogframe\" width=100% height=100% align=\"center\" Frameborder=\"0\" Scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\"></iframe>');
        adpShowMask('adpMask');       
        adpShow('adpModal');
    }
   
    function  playvideo(embededSource)
    {  
        var parseheight=embededSource.match(/height=\s*\"*\d*\"*\s+/g);
        var parsewidth=embededSource.match(/width=\s*\"*\d*\"*\s+/g);
        popupwidth=parsewidth[0].replace(/width=\s*\"*/g, "").replace(/"/g, "");
        popupheight=parseheight[0].replace(/height=\s*\"*/g, "").replace(/"/g, "");        
        this.embededSource=embededSource;
     
        activedoc="/dashboard/dm/supplier-video.php";
        adpSize('adpModal', eval(eval(popupwidth)+40) , eval(eval(popupheight)+50));
        adpContent('adpModal', '<iframe src=\"/dialogs/supplier-video-play.php\" name=\"dialogframe\" id=\"dialogframe\" width=100% height=100% align=\"center\" Frameborder=\"0\" Scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\"></iframe>');
        adpShowMask('adpMask');       
        adpShow('adpModal');
    }
    function DoSupplierMediaDelete(recid, name,actual_file_name,locfolder,returnURL)
    {
        var result;
        result=confirm("Are you sure that you want to delete the '" + name + "' in '" + locfolder + "' ?");             
        if (result)
        {  
            //alert("recid"+recid);
            koolajax.callback(DoTPLDeleteSupplierMediaDetails(recid,actual_file_name,locfolder));  
            //alert("true");
                    
        }
        tabpanel.update(returnURL);
   	   
    }    

    /* Award Handling Mathods Start*/
    
    /* Award Deleting*/
    function DoSupplierAwardDelete(recid, name)
    {
        var result;
        result=confirm("Are you sure that you want to delete the award '" + name + "'?");
                
        if (result)
        {  	  	  
            koolajax.callback(DoTPLDeleteSupplierAwardDetails(recid,instanceID));  
                    
        }
        tabpanel.update("/dashboard/dm/supplier-logos.php?instanceID="+instanceID);
   	   
    }	  
    /* Award Adding and Updating*/   
    function DoSupplierAwardUpdate(recid)
    {
        koolajax.callback(DoTPLSetActiveSupplierAward(recid));
        activetab=tabpanel;
        activedoc="/dashboard/supplier-awards.php?instanceID="+instanceID;
        adpSize('adpModal', 670, 380);
        adpContent('adpModal', '<iframe src=\"/dialogs/award.php\" name=\"dialogframe\" id=\"dialogframe\" width=100% height=100% align=\"center\" Frameborder=\"0\" Scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\"></iframe>');
        adpShowMask('adpMask');
        adpShow('adpModal');
    }	  
    
    /* Acreditations Handling Mathods Start*/
    
    /* Acreditation Deleting*/
    function DoSupplierAccredDelete(recid, name)
    {
        var result;
        result=confirm("Are you sure that you want to delete the accreditations '" + name + "'?");
                
        if (result)
        {  	  	  
            koolajax.callback(DoTPLDeleteSupplierAccredDetails(recid,instanceID));  
                    
        }
        tabpanel.update("/dashboard/supplier-accreditations.php?instanceID="+instanceID);
   	   
    }	  
    /* Acreditation Adding and Updating*/   
    function DoSupplierAccredUpdate(recid)
    {
        koolajax.callback(DoTPLSetActiveSupplierAccred(recid,instanceID));
        activetab=tabpanel;
        activedoc="/dashboard/supplier-accreditations.php?instanceID="+instanceID;
        adpSize('adpModal', 700, 520);
        adpContent('adpModal', '<iframe src=\"/dialogs/accreditation.php\" name=\"dialogframe\" id=\"dialogframe\" width=100% height=100% align=\"center\" Frameborder=\"0\" Scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\"></iframe>');
        adpShowMask('adpMask');
        adpShow('adpModal');
    }	  
    /* Acreditations Handling Mathods Finish*/

   

    function DoSupplierProductDelete(recid, name, tab)
    {
        var result;
        result=confirm("Are you sure that you want to delete the product '" + name + "'?");

        if (result)
        {  	  	  
            koolajax.callback(DoTPLDeleteSupplierProductDetails(recid,instanceID));
            tab.update("/dashboard/supplier-category-product-panel.php?instanceID="+instanceID);
        }
    }	  
  	  
    function DoSupplierProductCatogoryUpdate(recid, tab,funtype)
    {   this.funtype=funtype;      
        koolajax.callback(DoTPLSetActiveSupplierProduct(recid,funtype));
        //alert("this.funtype:"+this.funtype);
        activetab=tab;
        activedoc="/dashboard/supplier-category-product-panel.php?instanceID="+instanceID;
        adpSize('adpModal', 750, 495);
        adpContent('adpModal', '<iframe src=\"/dialogs/supplier-category_product.php\" name=\"dialogframe\" id=\"dialogframe\" width=100% height=100% align=\"center\" Frameborder=\"0\" Scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\"></iframe>');
        adpShowMask('adpMask');
        adpShow('adpModal');
    }
    
  var old_offering_id="<?php echo $_SESSION['shadow_root']['SHADOW_DIRECTORY_OFFERING_REC_ID']; ?>";