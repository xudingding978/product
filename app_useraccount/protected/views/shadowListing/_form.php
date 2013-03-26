<?php
/* @var $this ShadowListingController */
/* @var $model ShadowListing */
/* @var $form CActiveForm */
?>

<div class="form">

<?php $form=$this->beginWidget('CActiveForm', array(
	'id'=>'shadow-listing-form',
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
		<?php echo $form->labelEx($model,'CLIENT_REC_ID'); ?>
		<?php echo $form->textField($model,'CLIENT_REC_ID'); ?>
		<?php echo $form->error($model,'CLIENT_REC_ID'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'STATE'); ?>
		<?php echo $form->textField($model,'STATE',array('size'=>12,'maxlength'=>12)); ?>
		<?php echo $form->error($model,'STATE'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'LISTING_TYPE_REC_ID'); ?>
		<?php echo $form->textField($model,'LISTING_TYPE_REC_ID'); ?>
		<?php echo $form->error($model,'LISTING_TYPE_REC_ID'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'ITEM_ID'); ?>
		<?php echo $form->textField($model,'ITEM_ID'); ?>
		<?php echo $form->error($model,'ITEM_ID'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'DESCRIPTION'); ?>
		<?php echo $form->textField($model,'DESCRIPTION',array('size'=>60,'maxlength'=>255)); ?>
		<?php echo $form->error($model,'DESCRIPTION'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'IMAGE_URL'); ?>
		<?php echo $form->textField($model,'IMAGE_URL',array('size'=>60,'maxlength'=>255)); ?>
		<?php echo $form->error($model,'IMAGE_URL'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'PROOF_NAME'); ?>
		<?php echo $form->textField($model,'PROOF_NAME',array('size'=>60,'maxlength'=>255)); ?>
		<?php echo $form->error($model,'PROOF_NAME'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'PROOF_POSITION'); ?>
		<?php echo $form->textField($model,'PROOF_POSITION',array('size'=>60,'maxlength'=>255)); ?>
		<?php echo $form->error($model,'PROOF_POSITION'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'LISTING_COST_EXCL_GST'); ?>
		<?php echo $form->textField($model,'LISTING_COST_EXCL_GST'); ?>
		<?php echo $form->error($model,'LISTING_COST_EXCL_GST'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'LISTING_COST_INCL_GST'); ?>
		<?php echo $form->textField($model,'LISTING_COST_INCL_GST'); ?>
		<?php echo $form->error($model,'LISTING_COST_INCL_GST'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'TRANSACTION_TOTAL_EXCL_GST'); ?>
		<?php echo $form->textField($model,'TRANSACTION_TOTAL_EXCL_GST'); ?>
		<?php echo $form->error($model,'TRANSACTION_TOTAL_EXCL_GST'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'TRANSACTION_TOTAL_INCL_GST'); ?>
		<?php echo $form->textField($model,'TRANSACTION_TOTAL_INCL_GST'); ?>
		<?php echo $form->error($model,'TRANSACTION_TOTAL_INCL_GST'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'TOTAL_PAID_TO_DATE'); ?>
		<?php echo $form->textField($model,'TOTAL_PAID_TO_DATE'); ?>
		<?php echo $form->error($model,'TOTAL_PAID_TO_DATE'); ?>
	</div>

	<div class="row buttons">
		<?php echo CHtml::submitButton($model->isNewRecord ? 'Create' : 'Save'); ?>
	</div>

<?php $this->endWidget(); ?>

</div><!-- form -->