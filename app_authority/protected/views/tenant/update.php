<?php
/* @var $this TenantController */
/* @var $model Tenant */

$this->breadcrumbs=array(
	'Tenants'=>array('index'),
	$model->NAME=>array('view','id'=>$model->REC_ID),
	'Update',
);

$this->menu=array(
	array('label'=>'List Tenant', 'url'=>array('index')),
	array('label'=>'Create Tenant', 'url'=>array('create')),
	array('label'=>'View Tenant', 'url'=>array('view', 'id'=>$model->REC_ID)),
	array('label'=>'Manage Tenant', 'url'=>array('admin')),
);
?>

<h1>Update Tenant <?php echo $model->REC_ID; ?></h1>
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
echo $this->renderPartial('_form', array('model'=>$model)); 
$this->endWidget();
?>