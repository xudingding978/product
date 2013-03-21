<?php
/* @var $this TenantController */
/* @var $model Tenant */
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
		<?php echo $form->label($model,'NAME'); ?>
		<?php echo $form->textField($model,'NAME',array('size'=>45,'maxlength'=>45)); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'DESCRIPTION'); ?>
		<?php echo $form->textField($model,'DESCRIPTION',array('size'=>60,'maxlength'=>200)); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'LAST_INVOICE_ID'); ?>
		<?php echo $form->textField($model,'LAST_INVOICE_ID'); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'LAST_ORDER_ID'); ?>
		<?php echo $form->textField($model,'LAST_ORDER_ID'); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'LAST_TRANSACTION_ID'); ?>
		<?php echo $form->textField($model,'LAST_TRANSACTION_ID'); ?>
	</div>

	<div class="row buttons">
		<?php echo CHtml::submitButton('Search'); ?>
	</div>

<?php $this->endWidget(); ?>

</div><!-- search-form -->