<script type="text/javascript"> 
    function validateFormInputs()
    {  
        var filePath=document.forms["supplier_media_upload"]["fileuploader"].value;
       // var media_category=document.forms["supplier_media_upload"]["media_category"].value;
        
       
        //return false;
        //var media_category=document.forms["supplier_media_upload"]["media_category"].value
        if(filePath==""){
            document.getElementById('messagebox').innerHTML = '<div class="msgWarning"><span>Please fill the required fields.</span></div>';
            return false;
        }
        var ext = filePath.substring(filePath.lastIndexOf('.') + 1).toLowerCase();
       
        if(!((ext=='jpg')||(ext=='jpeg')||(ext=='gif'))){
            document.getElementById('messagebox').innerHTML = '<div class="msgWarning"><span>Please select the correct file format.</span></div>'; 
            return false;
        }            
      //alert("Stop");
     // return false;
         
    }
    function load() {    
//        parent.document.getElementById("media_name").value="";
//        parent.document.getElementById("media_desc").value="";
//        parent.document.getElementById("media_url").value="";
        parent.document.getElementById("fileuploader").value="";     
        parent.document.getElementById('messagebox').innerHTML = '<div class="msgSuccess"><span>Successfully Uploaded.</span></div>';
//        parent.document.getElementById("rec_id").value="0"; 
//        parent.document.getElementById('uploadedimege').innerHTML = '';
        
        
    }
  
</script>   
<style type="text/css">
    .msgError, .msgSuccess, .msgInfo, .msgWarning {
        padding: 3px 8px 3px 6px;
        border-style: solid;
        border-width: 1px;
        margin-bottom: 20px;
        font-weight: bold;
    }
    .msgError span, .msgSuccess span, .msgInfo span, .msgWarning span {
        background-repeat: no-repeat;
        background-position: top left;
        display: block;
        padding: 1px 0 1px 20px;
        line-height: 1.2;
    }
    .msgError {
        background-image: url(/images/msg_error_bg.png); border-color: #DF7D7D;
    }
    .msgError span { background-image: url(/images/fffsicons/cross.png); }
    .msgSuccess { background-image: url(/images/msg_success_bg.png); border-color: #82CE76; }
    .msgSuccess span { background-image: url(/images/fffsicons/tick.png); }
    .msgInfo { background-image: url(/images/msg_info_bg.png); border-color: #6B99C7; }
    .msgInfo span { background-image: url(/images/fffsicons/information.png); }
    .msgWarning { background-image: url(/images/msg_warning_bg.png); border-color: #E4964D; }
    .msgWarning span { background-image: url(/images/fffsicons/warning.png); }

</style>
<body onload="load()">
<form id="supplier_media_upload" name="supplier_media_upload" target="results" method="post" enctype="multipart/form-data" action="/dashboard/dm/media_upload_handler.php" onsubmit="return validateFormInputs()"> 
    <table border="0">
        <tbody>
            
            <tr>
                <td valign=top height="30">
                    <div id="messagebox">                                          
                    </div>
                </td>  
            </tr>
            <tr>
                <td>
                    <div class="box">    
                        <form name="supplier_photo_gallery" >
                            <content>
                                <b>Digital Media > Photo Gallery</b>
                                <hr/><center>
                                    All messages must be in web ready format and no larger than 5MB.
                                </center>
                                <center>Photo Upload allowed types: .jpg , .png , .gif , .bmp .</center>
                                <br/>    

                            </content>  
                        </form>    
                    </div>   

                </td>
            </tr>
            <tr>
                <td></td>
            </tr>





            <tr>
                <td>
                    <input type="file" id="fileuploader" name="fileuploader">                

                </td>
            </tr>
            <tr>
                <td height="20">
                     
                </td>
            </tr>
            <tr>
                <td>
                    <input type="submit" value="Submit" > 
                </td>
            </tr>
        </tbody>
    </table>
    <input type="hidden" id="supplierid" name="supplierid" size=32 maxlength=200  value="<?php echo $_GET["supplierid"]; ?>"/>
    <input type="hidden" id="media_category" name="media_category" size=32 maxlength=200  value="pg"/>
</form>
</body>
 <iframe width="0" id="results" name="results" height="0" border="0" frameborder="0" scrolling="auto" align="center" hspace="0" vspace="">Results</iframe>