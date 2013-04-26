<?php
/* @var $this UserController */
/* @var $dataProvider CActiveDataProvider */

$this->breadcrumbs=array(
	'Users',
);
?>

<h1>Users</h1>

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
                    )))
))));

$this->widget('zii.widgets.CListView', array(
	'dataProvider'=>$dataProvider,
	'itemView'=>'_view',
)); 

$this->endWidget();
?>
