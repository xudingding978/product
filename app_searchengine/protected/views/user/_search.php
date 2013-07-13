<?php
/* @var $this UserController */
/* @var $model User */
/* @var $form CActiveForm */
?>

<div class="wide form">

<?php $form=$this->beginWidget('CActiveForm', array(
	'action'=>Yii::app()->createUrl($this->route),
	'method'=>'get',
)); ?>

	<div class="row">
		<?php echo $form->label($model,'REC_ID'); ?>
		<?php echo $form->textField($model,'REC_ID'); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'REC_DATETIME'); ?>
		<?php echo $form->textField($model,'REC_DATETIME'); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'REC_TIMESTAMP'); ?>
		<?php echo $form->textField($model,'REC_TIMESTAMP'); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'TENANT_REC_ID'); ?>
		<?php echo $form->textField($model,'TENANT_REC_ID'); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'USER_NAME'); ?>
		<?php echo $form->textField($model,'USER_NAME',array('size'=>60,'maxlength'=>255)); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'PWD_HASH'); ?>
		<?php echo $form->textField($model,'PWD_HASH',array('size'=>60,'maxlength'=>512)); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'EMAIL_ADDRESS'); ?>
		<?php echo $form->textField($model,'EMAIL_ADDRESS',array('size'=>60,'maxlength'=>255)); ?>
	</div>

	<div class="row buttons">
		<?php echo CHtml::submitButton('Search'); ?>
	</div>

<?php $this->endWidget(); ?>

</div><!-- search-form -->