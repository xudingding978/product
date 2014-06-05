
<?php
echo "<div name='mydata'>\n";

for ($i = 0; $i < sizeof($dataProvider); $i++) {
    echo "<div id='";
    echo $dataProvider[$i]['id'];
    echo "' style='height: 180px; padding: 10px;margin: 10px; border: 2px solid #ccc;'>\n";
    echo "<div style='height:150px;width: 35%;float:left;'>\n";
    echo "<div style='height:100px;width: 100%;'>\n";
    echo "<div style='display: inline-block; width: 100px; border-radius: 50%; height: 100px; overflow: hidden; float: left;margin-right: 3%;'>\n";
    echo "<img src='";
    echo $dataProvider[$i]['user_photo'];
    echo "'style='width:100%'/>";
    echo "</div>";
    echo "<div style='display: inline-block;margin: 10px auto;width: 50%;'>\n";
    echo "<div style='font-size: 24px;line-height: 30px;font-weight:bold;'>\n";
    echo $dataProvider[$i]['user_name'] . "\n";
    echo "</div>";
    echo "<div style='font-size: 15px;font-weight:bold;line-height: 20px;'>\n";
    echo $dataProvider[$i]['category'] . "\n";
    echo "</div>";
    echo "</div>";
    echo "</div>";
    echo "<div style='font-size: 12px;font-weight:bold; float: left; padding: 10px; word-break: break-word;width: 80%;overflow-y: auto;height: 60px;'>\n";
    echo $dataProvider[$i]['subcategory'] . "\n";
    echo "</div>";
    echo "</div>";
    echo "<div style='overflow:auto; height:190px;'>\n";
    for ($j = 0; $j < sizeof($dataProvider[$i]['$partner']); $j++) {
        echo "<div id='";
        echo $dataProvider[$i]['$partner'][$j]['id'];
        echo "' style='display: inline-block; float: left; padding:5px; width: 45%;'>\n";
        echo "<div style='display: inline-block; width: 50px;  height: 50px; float: left;'>\n";
        echo "<img src='";
        echo $dataProvider[$i]['$partner'][$j]['profile_photo'] . "\n";
        echo "' style='width:100%'/>";
        echo "</div>";
        echo "<div style='font-size: 15px;font-weight:bold; position: relative;left: 3%;'>\n";
        echo $dataProvider[$i]['$partner'][$j]['name'] . "\n";
        echo "</div>";
        echo "</div>";
    }
    echo "</div>";
    echo "</div>";
}
echo "</div>";
?>
<DIV class=pagination> 
    <?php 
    $this->widget('CLinkPager', array( 
        'pages' => $pages, 
        'selectedPageCssClass' => 'active',
        'hiddenPageCssClass' => 'disabled',
        'header' => '',
        'maxButtonCount' => 10,
        'htmlOptions' => array('class' => ''), 
        'firstPageLabel' => 'First', 
        'nextPageLabel' => 'Next', 
        'prevPageLabel' => 'Previous', 
        'lastPageLabel' => 'Last', 
            ) 
    ); 
    ?> 
</DIV>


<div style="position: relative;left: 75%;">
    <a href="/">Back</a>
    </div>