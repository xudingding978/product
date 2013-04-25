<?php
/* @var $this TenantController */
/* @var $dataProvider CActiveDataProvider */

$this->breadcrumbs = array(
    'Tenants',
);

//$this->menu = array(
//    array('label' => 'Create Tenant', 'url' => array('create')),
//    array('label' => 'Manage Tenant', 'url' => array('admin')),
//);
?>
<h1>View Tenants</h1>
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
                    )))
))));

$this->widget('zii.widgets.CListView', array(
    'dataProvider' => $dataProvider,
    'itemView' => '_view',
));

$this->endWidget();
?>
