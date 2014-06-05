<?php
/* @var $this ShadowListingController */
/* @var $dataProvider CActiveDataProvider */

$this->breadcrumbs = array(
    'Shadow Listings',
);

$this->menu = array(
    array('label' => 'Create ShadowListing', 'url' => array('create')),
    array('label' => 'Manage ShadowListing', 'url' => array('admin')),
);
?>

<h1>Shadow Listings</h1>

<form  action="getFromToTime" method="post">
  <span>  From: </span><input type="text" id="from" name ="from" value="2010-01-01"><br>
   <span>  To: &emsp;</span>  <input type="text" id="to" value="2014-07-09" name ="to">
    <br><br>
    <button type="submit" class="round">SUBMIT</button>&emsp;
</form>
