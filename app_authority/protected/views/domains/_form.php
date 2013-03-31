<?php
/* @var $this DomainsController */
/* @var $model Domains */
/* @var $form CActiveForm */
?>

<div class="form">

<?php $form=$this->beginWidget('CActiveForm', array(
	'id'=>'domains-form',
	'enableAjaxValidation'=>false,
)); ?>

	<p class="note">Fields with <span class="required">*</span> are required.</p>

	<?php echo $form->errorSummary($model); ?>

	<div class="row">
		<?php echo $form->labelEx($model,'DOMAIN_NAME'); ?>
		<?php echo $form->textField($model,'DOMAIN_NAME',array('size'=>60,'maxlength'=>100)); ?>
		<?php echo $form->error($model,'DOMAIN_NAME'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'JSON_DATA'); ?>
		<?php echo $form->textField($model,'JSON_DATA',array('size'=>60,'maxlength'=>1000)); ?>
		<?php echo $form->error($model,'JSON_DATA'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'PAYPAL_EMAIL'); ?>
		<?php echo $form->textField($model,'PAYPAL_EMAIL',array('size'=>45,'maxlength'=>45)); ?>
		<?php echo $form->error($model,'PAYPAL_EMAIL'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'TITLE'); ?>
		<?php echo $form->textField($model,'TITLE',array('size'=>45,'maxlength'=>45)); ?>
		<?php echo $form->error($model,'TITLE'); ?>
	</div>

	<div class="row buttons">
		<?php echo CHtml::submitButton($model->isNewRecord ? 'Create' : 'Save'); ?>
	</div>

<?php $this->endWidget(); ?>

</div><!-- form -->