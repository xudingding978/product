<?php
/* @var $this UserController */
/* @var $model User */

$this->breadcrumbs = array(
    'Users' => array('index'),
    'Manage',
);

Yii::app()->clientScript->registerScript('search', "
$('.search-button').click(function(){
	$('.search-form').toggle();
	return false;
});
$('.search-form form').submit(function(){
	$('#user-grid').yiiGridView('update', {
		data: $(this).serialize()
	});
	return false;
});
");
?>

<h1>Manage Users</h1>

<p>
    You may optionally enter a comparison operator (<b>&lt;</b>, <b>&lt;=</b>, <b>&gt;</b>, <b>&gt;=</b>, <b>&lt;&gt;</b>
    or <b>=</b>) at the beginning of each of your search values to specify how the comparison should be done.
</p>

<?php echo CHtml::link('Advanced Search', '#', array('class' => 'search-button')); ?>
<div class="search-form" style="display:none">
    <?php
    $this->renderPartial('_search', array(
        'model' => $model,
    ));
    ?>
</div><!-- search-form -->

<?php
//$gridColumns = array(
//    array(
//        'REC_ID',
//        'REC_DATETIME',
//        'REC_TIMESTAMP',
//        'TENANT_REC_ID',
//        'Tenant.NAME',
//        'USER_NAME',
//        'PWD_HASH',
//    )
//);
//$groupGridColumns = $gridColumns;
//$groupGridColumns[] = array(
//    'name' => 'firstLetter',
//    'value' => 'substr($data->USER_NAME, 0, 1)',
//    'headerHtmlOptions' => array('style' => 'display:none'),
//    'htmlOptions' => array('style' => 'display:none')
//);
//$this->widget('bootstrap.widgets.TbGroupGridView', array(
//   //'filter' => $model,
//    'type' => 'striped bordered',
//    'dataProvider' => $dataProvider,
//    'template' => "{items}",
//    'extraRowColumns' => array('firstLetter'),
//    'extraRowExpression' => '"<b style=\"font-size: 3em; color: #333;\">".substr($data->USER_NAME 0, 1)."</b>"',
//    'extraRowHtmlOptions' => array('style' => 'padding:10px'),
//    'columns' => $groupGridColumns
//));

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
                    )))
))));

//$this->widget('bootstrap.widgets.TbJsonGridView', array(
//    'dataProvider' => $model->search(),
//    'filter' => $model,
//    'type' => 'striped bordered condensed',
//    'summaryText' => false,
//    'cacheTTL' => 10, // cache will be stored 10 seconds (see cacheTTLType)
//    'cacheTTLType' => 's', // type can be of seconds, minutes or hours
//    'columns' => array(
//        'REC_ID',
//        'REC_DATETIME',
//        'REC_TIMESTAMP',
//        'TENANT_REC_ID',
//        'Tenant.NAME',
//        'USER_NAME',
//        'PWD_HASH',
//        array(
//            'header' => Yii::t('ses', 'Edit'),
//            'class' => 'bootstrap.widgets.TbJsonButtonColumn',
//            'template' => '{view}{update}{delete}',
//        ),
//    ),
//));


$this->widget('bootstrap.widgets.TbExtendedGridView', array(
    'filter' => $model,
    'fixedHeader' => true,
    'headerOffset' => 0, // 40px is the height of the main navigation at bootstrap
    'type' => 'striped bordered',
    'responsiveTable' => true,
    'dataProvider' => $model->search(),
    'template' => "{items}",
    'bulkActions' => array(
        'actionButtons' => array(
            array(
                'buttonType' => 'button',
                'type' => 'primary',
                'size' => 'small',
                'label' => 'Bulk Actions',
                'click' => 'js:function(values){console.log(values);}'
            )
        ),
// if grid doesn't have a checkbox column type, it will attach
// one and this configuration will be part of it
        'checkBoxColumnConfig' => array(
            'name' => 'id'
        ),
    ),
    'columns' => array(
        array('name' => 'REC_ID', 'header' => 'ID', 'htmlOptions' => array('style' => 'width: 50px'),),
        'Tenant.NAME',
        'UserProfiles.LOGIN_PROVIDER',
        'UserProfiles.PHOTO_URL',
        //array('name'=>'PHOTO_URL', 'value'=>'$data->UserProfiles->PHOTO_URL'),
        'USER_NAME',
        'PWD_HASH',
        array(
            'class' => 'bootstrap.widgets.TbButtonColumn',
            'htmlOptions' => array('style' => 'width: 50px'),
        ))
));

//$this->widget('zii.widgets.grid.CGridView', array(
//    'id' => 'user-grid',
//    'dataProvider' => $model->search(),
//    'filter' => $model,
//    'columns' => array(
//        'REC_ID',
//        'REC_DATETIME',
//        'REC_TIMESTAMP',
//        'TENANT_REC_ID',
//        'USER_NAME',
//        'PWD_HASH',
//        /*
//          'EMAIL_ADDRESS',
//         */
//        array(
//            'class' => 'CButtonColumn',
//        ),
//    ),
//));

$this->endWidget();
?>
