<?php
/* @var $this ShadowListingController */
/* @var $model ShadowListing */
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
		<?php echo $form->label($model,'CLIENT_REC_ID'); ?>
		<?php echo $form->textField($model,'CLIENT_REC_ID'); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'STATE'); ?>
		<?php echo $form->textField($model,'STATE',array('size'=>12,'maxlength'=>12)); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'LISTING_TYPE_REC_ID'); ?>
		<?php echo $form->textField($model,'LISTING_TYPE_REC_ID'); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'ITEM_ID'); ?>
		<?php echo $form->textField($model,'ITEM_ID'); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'DESCRIPTION'); ?>
		<?php echo $form->textField($model,'DESCRIPTION',array('size'=>60,'maxlength'=>255)); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'IMAGE_URL'); ?>
		<?php echo $form->textField($model,'IMAGE_URL',array('size'=>60,'maxlength'=>255)); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'PROOF_NAME'); ?>
		<?php echo $form->textField($model,'PROOF_NAME',array('size'=>60,'maxlength'=>255)); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'PROOF_POSITION'); ?>
		<?php echo $form->textField($model,'PROOF_POSITION',array('size'=>60,'maxlength'=>255)); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'LISTING_COST_EXCL_GST'); ?>
		<?php echo $form->textField($model,'LISTING_COST_EXCL_GST'); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'LISTING_COST_INCL_GST'); ?>
		<?php echo $form->textField($model,'LISTING_COST_INCL_GST'); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'TRANSACTION_TOTAL_EXCL_GST'); ?>
		<?php echo $form->textField($model,'TRANSACTION_TOTAL_EXCL_GST'); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'TRANSACTION_TOTAL_INCL_GST'); ?>
		<?php echo $form->textField($model,'TRANSACTION_TOTAL_INCL_GST'); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'TOTAL_PAID_TO_DATE'); ?>
		<?php echo $form->textField($model,'TOTAL_PAID_TO_DATE'); ?>
	</div>

	<div class="row buttons">
		<?php echo CHtml::submitButton('Search'); ?>
	</div>

<?php $this->endWidget(); ?>

</div><!-- search-form -->