<?php
$content = $content;
$row= $row;
switch ($content) {
    case "orderentry_end":
        $buttonactivelogo = "ui-silk-basket-delete";
        $buttonactivetitle = "Deactivate";
        $buttoninactivelogo = "ui-silk-basket-add";
        $buttoninactivetitle = "Activate";
        
        if ($row["STATUS"] == 0) {
            $status = true;
        } else {
            $status = false;
        }
        ?>
        <td valign=top width=4% class=BodyText><?php if ($status) { ?><div class="icn"  title="Edit"> <a href="#"  onclick="orderEdit('<?php echo $row["REC_ID"] ?>');return false" class="ui-silk ui-silk-basket-edit" ><b>Edit</b></a></div><?php } ?></td><td valign=top width=4% class=BodyText><div class="icn"  title="<?php
        if ($status) {
            echo $buttonactivetitle;
        } else {
            echo $buttoninactivetitle;
        }
        ?>"><a href="#"  onclick="changeOrderStatus('<?php echo $row["STATUS"] ?>','<?php echo $row["REC_ID"] ?>');return false"class="ui-silk <?php
        if ($status) {
             echo $buttonactivelogo;
        } else {
             echo $buttoninactivelogo;
        }
        ?>"><b>Delete</b></a></div></td>

        
        
        
        
        
        
        
        <?php
       
        break;
    case "1":
        echo "";
        break;
    case "2":
        echo "";
        break;
}
?>
