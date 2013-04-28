<?php
/* @var $this ClientController */
/* @var $model Client */

$this->breadcrumbs = array(
    'Clients' => array('index'),
    $model->REC_ID,
);
$items = array();
if (!Yii::app()->user->isGuest) {
    $listings = ShadowListing::model()->findAllByAttributes(array('CLIENT_REC_ID' => $model->REC_ID));
    foreach ($listings as $c) {
        array_push($items, array('label' => $c->DESCRIPTION, 'url' => '#' . $c->REC_ID));
    }
}

$this->menu = array(
//array('label'=>'List Client', 'url'=>array('index')),
//array('label'=>'Create Client', 'url'=>array('create')),
    array('label' => 'Update Client', 'url' => array('update', 'id' => $model->REC_ID)),
    array('label' => 'Manage Your Listings', 'url' => array('ShadowListing/admin', 'id' => $model->REC_ID))
);

//array('label'=>'Delete Client', 'url'=>'#', 'linkOptions'=>array('submit'=>array('delete','id'=>$model->REC_ID),'confirm'=>'Are you sure you want to delete this item?')),
//array('label'=>'Manage Client', 'url'=>array('admin')),
?>

<h1>View Client <?php echo $model->REC_ID; ?></h1>

<?php
$this->widget('zii.widgets.CDetailView', array(
    'data' => $model,
    'attributes' => array(
        'REC_ID',
        'REC_DATETIME',
        'REC_TIMESTAMP',
        'CLIENT_STATUS_REC_ID',
        'USER_ID',
        'CLIENT_NAME',
        'TRADING_AS_NAME',
        'TELEPHONE_NO',
        'FREE_TELEPHONE_NO',
        'FAX_NO',
        'FREE_FAX_NO',
        'EMAIL_ADDRESS',
        'WEBSITE_ADDRESS',
        'PHYSICAL_ADDRESS_BUILDING_ADDRESS',
        'PHYSICAL_ADDRESS_STREET_ADDRESS',
        'PHYSICAL_ADDRESS_SUBURB',
        'PHYSICAL_ADDRESS_CITY',
        'PHYSICAL_ADDRESS_STATE',
        'PHYSICAL_ADDRESS_COUNTRY',
        'PHYSICAL_ADDRESS_POST_CODE',
        'PHYSICAL_ADDRESS_DPID',
        'PHYSICAL_ADDRESS_PXID',
        'PHYSICAL_ADDRESS_LATITUDE',
        'PHYSICAL_ADDRESS_LONGITUDE',
        'PHYSICAL_ADDRESS_HEIGHT',
        'PHYSICAL_ADDRESS_COMPLETE',
        'POSTAL_ADDRESS_BUILDING_ADDRESS',
        'POSTAL_ADDRESS_STREET_ADDRESS',
        'POSTAL_ADDRESS_CITY',
        'POSTAL_ADDRESS_SUBURB',
        'POSTAL_ADDRESS_STATE',
        'POSTAL_ADDRESS_COUNTRY',
        'POSTAL_ADDRESS_POST_CODE',
    ),
));
?>
