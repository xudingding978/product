<p><?php echo sizeof($headline) ?></p>
<ul>
<?PHP 
        for($i=0; $i<sizeof($headline); $i++) {
?>
        
    <li><?PHP echo $i; ?> <p>------</p>  <?PHP print_r($headline[$i]); ?> </li>
            
<?PHP } ?>
</ul>

<?php phpinfo(); ?>