<?php
/* @var $this TenantController */
/* @var $model Tenant */

$this->breadcrumbs = array(
    'Tenants' => array('index'),
    $model->NAME,
);
?>
<h1>View Tenant <?php echo $model->REC_ID . '  -  ' . $model->NAME; ?></h1>
<?php
$this->beginwidget('bootstrap.widgets.TbBox', array(
    'title' => 'Tenants',
    'headerIcon' => 'icon-th-list',
    'headerButtons' => array(
        array(
            'class' => 'bootstrap.widgets.TbButtonGroup',
            'type' => 'success', // '', 'primary', 'info', 'success', 'warning', 'danger' or 'inverse'
            'buttons' => array(
                array('label' => 'Actions', 'items' => array(
                        array('label' => 'View Tenant', 'url' => array('index')),
                        array('label' => 'Create Tenant', 'url' => array('create')),
                        array('label' => 'Manage Tenant', 'url' => array('admin')),
                        array('label' => 'Update Tenant', 'url' => array('update', 'id' => $model->REC_ID)),
                        array('label' => 'Delete Tenant', 'url' => '#', 'linkOptions' => array('submit' => array('delete', 'id' => $model->REC_ID), 'confirm' => 'Are you sure you want to delete this item?')),
                    )))
))));

$this->widget('zii.widgets.CDetailView', array(
    'data' => $model,
    'attributes' => array(
        'REC_ID',
        'REC_DATETIME',
        'REC_TIMESTAMP',
        'NAME',
        'DESCRIPTION',
        'LAST_INVOICE_ID',
        'LAST_ORDER_ID',
        'LAST_TRANSACTION_ID',
    ),
));

$this->endWidget();
?>
