<?php
/* @var $this UserController */
/* @var $model User */

$this->breadcrumbs = array(
    'Users' => array('index'),
    $model->REC_ID,
);

$this->menu = array(
    array('label' => 'List User', 'url' => array('index')),
    array('label' => 'Create User', 'url' => array('create')),
    array('label' => 'Update User', 'url' => array('update', 'id' => $model->REC_ID)),
    array('label' => 'Delete User', 'url' => '#', 'linkOptions' => array('submit' => array('delete', 'id' => $model->REC_ID), 'confirm' => 'Are you sure you want to delete this item?')),
    array('label' => 'Manage User', 'url' => array('admin')),
);

error_log(Yii::app()->user->isGuest);
?>
<div style="width:100%">
    <div style="width:200px; height: 200px; float:left; padding:0 0 15px 0;">
        <img class="img-polaroid" width="200" heigh="200" src="<?php echo $model->UserProfile->PHOTO_URL_LARGE; ?>"/>
    </div>
    <div style="width:60%; height: 30px; float:left; margin-left:50px;">
        <h1><?php echo $model->UserProfile->FIRST_NAME . ' ' . $model->UserProfile->LAST_NAME ?></h1>
    </div>
</div>

<?php
$this->widget('zii.widgets.CDetailView', array(
    'data' => $model,
    'attributes' => array(
        'REC_ID',
        'REC_DATETIME',
        'REC_TIMESTAMP',
        'TENANT_REC_ID',
        'USER_NAME',
        'PWD_HASH',
        'EMAIL_ADDRESS',
    ),
));
?>
<h2> User Profile</h2>
<?php 
$this->widget('zii.widgets.CDetailView', array(
    'data' => $model->UserProfile,
    'attributes' => array(
        'REC_ID',
        'REC_DATETIME',
        'REC_TIMESTAMP',
        'TENANT_REC_ID',
        'FIRST_NAME',
        'LAST_NAME',
        'EMAIL_ADDRESS',
    ),
));
?>
