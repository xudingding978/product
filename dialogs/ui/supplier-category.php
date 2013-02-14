<?php
$supplierid = $_GET["supplierid"];
$categoryid = $_GET["categoryid"];
?>
<link rel="stylesheet" type="text/css" href="/common/ui/css/smoothness/jquery-ui.css"/>
<script>
    var rec_id=0;
//    $(function(){
//
//        // Tabs
//        $('#categorytab').tabs();
//        $('#awardssubtab').tabs();
//        $('#supdetailssubtab').tabs();
//        $('#mediasubtab').tabs();
//        $('#uploadertab').tabs();
//                
//        //hover states on the static widgets
//        $('#dialog_link, ul#icons li').hover(
//        function() { $(this).addClass('ui-state-hover'); },
//        function() { $(this).removeClass('ui-state-hover'); }
//    );

   $(document).ready(function(){
       
//         var css=JQuery("<link>");
//       css.attr({
//          rel:"stylesheet",
//          type:"text/css",
//          href:"/common/ui/css/smoothness/jquery-ui.css"
//           
//       });
//       $("").append(css);
       
        
        $( "#categorytab" ).tabs({
           
            select: function(event, ui){
                
                if(ui.index==1){                   
                    $("#categorytab").tabs("url", ui.index, "/dialogs/ui/product.php?rec_id="+rec_id+"&supplierid=<?PHP echo $supplierid; ?>&categoryid=<?PHP echo $categoryid; ?>");
                }              
                if(ui.index==5){                   
                    $("#categorytab").tabs("url", ui.index, "/dialogs/ui/supplier-video.php?rec_id="+rec_id+"&supplierid=<?PHP echo $supplierid; ?>&categoryid=<?PHP echo $categoryid; ?>");
                }
                if(ui.index==7){                   
                    $("#categorytab").tabs("url", ui.index, "/dialogs/ui/supplier-images.php?rec_id="+rec_id+"&supplierid=<?PHP echo $supplierid; ?>&categoryid=<?PHP echo $categoryid; ?>");
                }
                if(ui.index==3){                   
                    $("#categorytab").tabs("url", ui.index, "/dialogs/ui/category-brand.php?rec_id="+rec_id+"&supplierid=<?PHP echo $supplierid; ?>&categoryid=<?PHP echo $categoryid; ?>");
                }
             rec_id=0;
        
            }

        });
    });

</script>

<table width="100%" border="0"  cellpadding="0" cellspacing="0" style="background-repeat: repeat-y;">
    <tr>
        <td colspan="3" background="/images/tab_top.gif" style="background-repeat:repeat-x">
            <div class="indent indent_right topspacing bottomspacing" >	
                <div id="categorytab">
                    <ul>
                        <li><a href="/dialogs/ui/product-list.php?supplierid=<?PHP echo $supplierid; ?>&categoryid=<?PHP echo $categoryid; ?>">List Product</a> </li>
                        <li><a href="/dialogs/ui/product.php?rec_id=0& supplierid=<?PHP echo $supplierid; ?>&categoryid=<?PHP echo $categoryid; ?>">Add Product</a> </li>
                        <li><a href="/dialogs/ui/category-brand-list.php?supplierid=<?PHP echo $supplierid; ?>&categoryid=<?PHP echo $categoryid; ?>">List Brand</a> </li>
                        <li><a href="/dialogs/ui/category-brand.php?supplierid=<?PHP echo $supplierid; ?>&categoryid=<?PHP echo $categoryid; ?>">Add Brand</a> </li>
                        <li><a href="/dialogs/ui/supplier-video-list.php?supplierid=<?PHP echo $supplierid; ?>&categoryid=<?PHP echo $categoryid; ?>">List Video</a> </li>
                        <li><a href="/dialogs/ui/supplier-video.php?rec_id=0&supplierid=<?PHP echo $supplierid; ?>&categoryid=<?PHP echo $categoryid; ?>">Add Video</a> </li>
                        <li><a href="/dialogs/ui/supplier-images-list.php?supplierid=<?PHP echo $supplierid; ?>&categoryid=<?PHP echo $categoryid; ?>">List Image</a> </li>
                        <li><a href="/dialogs/ui/supplier-images.php?supplierid=<?PHP echo $supplierid; ?>&categoryid=<?PHP echo $categoryid; ?>">Add Image</a> </li>                                  
                    </ul>
                </div>
            </div>
        </td>
    </tr>
</table>

