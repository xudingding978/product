<?php
/* @var $this TenantController */
/* @var $model Tenant */
/* @var $form CActiveForm */
?>

<div class="form">

<?php $form=$this->beginWidget('CActiveForm', array(
	'id'=>'tenant-form',
	'enableAjaxValidation'=>false,
)); ?>

	<p class="note">Fields with <span class="required">*</span> are required.</p>

	<?php echo $form->errorSummary($model); ?>

	<div class="row">
		<?php echo $form->labelEx($model,'REC_DATETIME'); ?>
		<?php echo $form->textField($model,'REC_DATETIME'); ?>
		<?php echo $form->error($model,'REC_DATETIME'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'REC_TIMESTAMP'); ?>
		<?php echo $form->textField($model,'REC_TIMESTAMP'); ?>
		<?php echo $form->error($model,'REC_TIMESTAMP'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'NAME'); ?>
		<?php echo $form->textField($model,'NAME',array('size'=>45,'maxlength'=>45)); ?>
		<?php echo $form->error($model,'NAME'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'DESCRIPTION'); ?>
		<?php echo $form->textField($model,'DESCRIPTION',array('size'=>60,'maxlength'=>200)); ?>
		<?php echo $form->error($model,'DESCRIPTION'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'LAST_INVOICE_ID'); ?>
		<?php echo $form->textField($model,'LAST_INVOICE_ID'); ?>
		<?php echo $form->error($model,'LAST_INVOICE_ID'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'LAST_ORDER_ID'); ?>
		<?php echo $form->textField($model,'LAST_ORDER_ID'); ?>
		<?php echo $form->error($model,'LAST_ORDER_ID'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'LAST_TRANSACTION_ID'); ?>
		<?php echo $form->textField($model,'LAST_TRANSACTION_ID'); ?>
		<?php echo $form->error($model,'LAST_TRANSACTION_ID'); ?>
	</div>

	<div class="row buttons">
		<?php echo CHtml::submitButton($model->isNewRecord ? 'Create' : 'Save'); ?>
	</div>

<?php $this->endWidget(); ?>

</div><!-- form -->