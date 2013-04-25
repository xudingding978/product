<?php
/* @var $this TenantController */
/* @var $model Tenant */

$this->breadcrumbs=array(
	'Tenants'=>array('index'),
	'Create',
);?>

<h1>Create Tenant</h1>

<?php $this->beginwidget('bootstrap.widgets.TbBox', array(
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

echo $this->renderPartial('_form', array('model'=>$model)); 

$this->endWidget();
?>
