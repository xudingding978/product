
<script type="text/javascript" src="/common/ui/js/jquery-ui.min.js"></script>

<script type="text/javascript" src="/common/ui/js/jquery-1.7.2.min.js"></script>
<script type="text/javascript" src="/common/ui/js/jquery-ui-1.8.22.custom.min.js"></script>
<link type="text/css" href="/common/ui/css/jquery-ui-1.8.22.custom.css" rel="stylesheet" />
<link rel="stylesheet" type="text/css" href="/common/ui/css/smoothness/jquery-ui.css"/>
<link rel="stylesheet" type="text/css" href="/dashboard/styles/dashboard.css"/>
<script>
    $(function() {
        $( "#uploadertab" ).tabs();
    });
    
</script>

<table width="100%" border="0" cellpadding="0" cellspacing="0" style="background-repeat: repeat-y;">
    <tr>
        <td colspan="3" background="/images/tab_top.gif" style="background-repeat:repeat-x">
            <div class="indent indent_right topspacing bottomspacing" >	
                <div id="uploadertab">
                    <ul>
                        <li><a href="/dashboard/dm/supplier-photo-gallery-upload.php?supplierid=<?php echo $_GET["supplierid"]; ?>">Photo Upload</a> </li>
                        <li><a href="/dashboard/dm/supplier-photo-gallery-view.php?supplierid=<?php echo $_GET["supplierid"]; ?>">Photo Gallery</a></li>                        
                    </ul>
                </div>
            </div>
        </td>
    </tr>
</table>