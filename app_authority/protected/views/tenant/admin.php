<?php
/* @var $this TenantController */
/* @var $model Tenant */

$this->breadcrumbs = array(
    'Tenants' => array('index'),
    'Manage',
);

$this->menu = array(
    array('label' => 'List Tenant', 'url' => array('index')),
    array('label' => 'Create Tenant', 'url' => array('create')),
);

Yii::app()->clientScript->registerScript('search', "
$('.search-button').click(function(){
	$('.search-form').toggle();
	return false;
});
$('.search-form form').submit(function(){
	$('#tenant-grid').yiiGridView('update', {
		data: $(this).serialize()
	});
	return false;
});
");
?>

<h1>Manage Tenants</h1>

<!-- search<p>
    You may optionally enter a comparison operator (<b>&lt;</b>, <b>&lt;=</b>, <b>&gt;</b>, <b>&gt;=</b>, <b>&lt;&gt;</b>
    or <b>=</b>) at the beginning of each of your search values to specify how the comparison should be done.
</p>

<?php //echo CHtml::link('Advanced Search', '#', array('class' => 'search-button')); ?>
<div class="search-form" style="display:none">
<?php
//$this->renderPartial('_search', array(
//   'model' => $model,
// ));
?>
</div>-form -->

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

$this->widget('bootstrap.widgets.TbExtendedGridView', array(
    'filter' => $model,
    'fixedHeader' => true,
    'headerOffset' => 0, // 40px is the height of the main navigation at bootstrap
    'type' => 'striped bordered',
    'responsiveTable' => true,
    'dataProvider' => $model->search(),
    'template' => "{items}",
    'columns' => array(
        array('name'=>'REC_ID', 'header'=>'ID', 'htmlOptions'=>array('style'=>'width: 50px'),),
        'NAME',
        'DESCRIPTION',
        'LAST_INVOICE_ID',
        'LAST_ORDER_ID',
        'LAST_TRANSACTION_ID',
        array(
            'class'=>'bootstrap.widgets.TbButtonColumn',
            'htmlOptions'=>array('style'=>'width: 50px'),
        ))
));

$this->endWidget();
?>
