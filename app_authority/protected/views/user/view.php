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
?>

<h1>View User #<?php echo $model->REC_ID; ?></h1>

<?php
$this->beginwidget('bootstrap.widgets.TbBox', array(
    'title' => 'Users',
    'headerIcon' => 'icon-th-list',
    'headerButtons' => array(
        array(
            'class' => 'bootstrap.widgets.TbButtonGroup',
            'type' => 'success', // '', 'primary', 'info', 'success', 'warning', 'danger' or 'inverse'
            'buttons' => array(
                array('label' => 'Actions', 'items' => array(
                        array('label' => 'View User', 'url' => array('index')),
                        array('label' => 'Create User', 'url' => array('create')),
                        array('label' => 'Manage User', 'url' => array('admin')),
                        array('label' => 'Update User', 'url' => array('update', 'id' => $model->REC_ID)),
                        array('label' => 'Delete User', 'url' => '#', 'linkOptions' => array('submit' => array('delete', 'id' => $model->REC_ID), 'confirm' => 'Are you sure you want to delete this item?')),
                    )))
))));

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
$this->endWidget();
?>
