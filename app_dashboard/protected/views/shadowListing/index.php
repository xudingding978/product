<?php
/* @var $this ShadowListingController */
/* @var $dataProvider CActiveDataProvider */

$this->breadcrumbs=array(
	'Shadow Listings',
);

$this->menu=array(
	array('label'=>'Create ShadowListing', 'url'=>array('create')),
	array('label'=>'Manage ShadowListing', 'url'=>array('admin')),
);
?>

<h1>Shadow Listings</h1>
<?php
    echo "<div name='mydata'>\n";
    echo $dataProvider['id']."\n";
    echo "</div>";
?>
