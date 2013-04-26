<?php
/* @var $this UserController */
/* @var $model User */

$this->breadcrumbs=array(
	'Users'=>array('index'),
	'Create',
);

?>

<h1>Create User</h1>

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

echo $this->renderPartial('_form', array('model'=>$model)); 

$this->endWidget();
?>