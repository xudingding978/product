<?php
/* @var $this ClientController */
/* @var $model Client */
/* @var $form CActiveForm */
?>

<div class="form">

<?php $form=$this->beginWidget('CActiveForm', array(
	'id'=>'client-form',
	'enableAjaxValidation'=>false,
)); ?>

	<p class="note">Fields with <span class="required">*</span> are required.</p>

	<?php echo $form->errorSummary($model); ?>

	<div class="row">
		<?php echo $form->labelEx($model,'CLIENT_NAME'); ?>
		<?php echo $form->textField($model,'CLIENT_NAME',array('size'=>60,'maxlength'=>255)); ?>
		<?php echo $form->error($model,'CLIENT_NAME'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'TRADING_AS_NAME'); ?>
		<?php echo $form->textField($model,'TRADING_AS_NAME',array('size'=>60,'maxlength'=>255)); ?>
		<?php echo $form->error($model,'TRADING_AS_NAME'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'TELEPHONE_NO'); ?>
		<?php echo $form->textField($model,'TELEPHONE_NO',array('size'=>48,'maxlength'=>48)); ?>
		<?php echo $form->error($model,'TELEPHONE_NO'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'FREE_TELEPHONE_NO'); ?>
		<?php echo $form->textField($model,'FREE_TELEPHONE_NO',array('size'=>48,'maxlength'=>48)); ?>
		<?php echo $form->error($model,'FREE_TELEPHONE_NO'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'FAX_NO'); ?>
		<?php echo $form->textField($model,'FAX_NO',array('size'=>48,'maxlength'=>48)); ?>
		<?php echo $form->error($model,'FAX_NO'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'FREE_FAX_NO'); ?>
		<?php echo $form->textField($model,'FREE_FAX_NO',array('size'=>48,'maxlength'=>48)); ?>
		<?php echo $form->error($model,'FREE_FAX_NO'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'EMAIL_ADDRESS'); ?>
		<?php echo $form->textField($model,'EMAIL_ADDRESS',array('size'=>60,'maxlength'=>255)); ?>
		<?php echo $form->error($model,'EMAIL_ADDRESS'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'WEBSITE_ADDRESS'); ?>
		<?php echo $form->textField($model,'WEBSITE_ADDRESS',array('size'=>60,'maxlength'=>255)); ?>
		<?php echo $form->error($model,'WEBSITE_ADDRESS'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'PHYSICAL_ADDRESS_BUILDING_ADDRESS'); ?>
		<?php echo $form->textField($model,'PHYSICAL_ADDRESS_BUILDING_ADDRESS',array('size'=>60,'maxlength'=>255)); ?>
		<?php echo $form->error($model,'PHYSICAL_ADDRESS_BUILDING_ADDRESS'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'PHYSICAL_ADDRESS_STREET_ADDRESS'); ?>
		<?php echo $form->textField($model,'PHYSICAL_ADDRESS_STREET_ADDRESS',array('size'=>60,'maxlength'=>255)); ?>
		<?php echo $form->error($model,'PHYSICAL_ADDRESS_STREET_ADDRESS'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'PHYSICAL_ADDRESS_SUBURB'); ?>
		<?php echo $form->textField($model,'PHYSICAL_ADDRESS_SUBURB',array('size'=>60,'maxlength'=>255)); ?>
		<?php echo $form->error($model,'PHYSICAL_ADDRESS_SUBURB'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'PHYSICAL_ADDRESS_CITY'); ?>
		<?php echo $form->textField($model,'PHYSICAL_ADDRESS_CITY',array('size'=>60,'maxlength'=>255)); ?>
		<?php echo $form->error($model,'PHYSICAL_ADDRESS_CITY'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'PHYSICAL_ADDRESS_STATE'); ?>
		<?php echo $form->textField($model,'PHYSICAL_ADDRESS_STATE',array('size'=>60,'maxlength'=>255)); ?>
		<?php echo $form->error($model,'PHYSICAL_ADDRESS_STATE'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'PHYSICAL_ADDRESS_COUNTRY'); ?>
		<?php echo $form->textField($model,'PHYSICAL_ADDRESS_COUNTRY',array('size'=>60,'maxlength'=>255)); ?>
		<?php echo $form->error($model,'PHYSICAL_ADDRESS_COUNTRY'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'PHYSICAL_ADDRESS_POST_CODE'); ?>
		<?php echo $form->textField($model,'PHYSICAL_ADDRESS_POST_CODE',array('size'=>12,'maxlength'=>12)); ?>
		<?php echo $form->error($model,'PHYSICAL_ADDRESS_POST_CODE'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'PHYSICAL_ADDRESS_DPID'); ?>
		<?php echo $form->textField($model,'PHYSICAL_ADDRESS_DPID',array('size'=>45,'maxlength'=>45)); ?>
		<?php echo $form->error($model,'PHYSICAL_ADDRESS_DPID'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'PHYSICAL_ADDRESS_PXID'); ?>
		<?php echo $form->textField($model,'PHYSICAL_ADDRESS_PXID',array('size'=>45,'maxlength'=>45)); ?>
		<?php echo $form->error($model,'PHYSICAL_ADDRESS_PXID'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'PHYSICAL_ADDRESS_LATITUDE'); ?>
		<?php echo $form->textField($model,'PHYSICAL_ADDRESS_LATITUDE'); ?>
		<?php echo $form->error($model,'PHYSICAL_ADDRESS_LATITUDE'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'PHYSICAL_ADDRESS_LONGITUDE'); ?>
		<?php echo $form->textField($model,'PHYSICAL_ADDRESS_LONGITUDE'); ?>
		<?php echo $form->error($model,'PHYSICAL_ADDRESS_LONGITUDE'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'PHYSICAL_ADDRESS_HEIGHT'); ?>
		<?php echo $form->textField($model,'PHYSICAL_ADDRESS_HEIGHT'); ?>
		<?php echo $form->error($model,'PHYSICAL_ADDRESS_HEIGHT'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'PHYSICAL_ADDRESS_COMPLETE'); ?>
		<?php echo $form->textField($model,'PHYSICAL_ADDRESS_COMPLETE',array('size'=>60,'maxlength'=>1024)); ?>
		<?php echo $form->error($model,'PHYSICAL_ADDRESS_COMPLETE'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'POSTAL_ADDRESS_BUILDING_ADDRESS'); ?>
		<?php echo $form->textField($model,'POSTAL_ADDRESS_BUILDING_ADDRESS',array('size'=>60,'maxlength'=>255)); ?>
		<?php echo $form->error($model,'POSTAL_ADDRESS_BUILDING_ADDRESS'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'POSTAL_ADDRESS_STREET_ADDRESS'); ?>
		<?php echo $form->textField($model,'POSTAL_ADDRESS_STREET_ADDRESS',array('size'=>60,'maxlength'=>255)); ?>
		<?php echo $form->error($model,'POSTAL_ADDRESS_STREET_ADDRESS'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'POSTAL_ADDRESS_CITY'); ?>
		<?php echo $form->textField($model,'POSTAL_ADDRESS_CITY',array('size'=>60,'maxlength'=>255)); ?>
		<?php echo $form->error($model,'POSTAL_ADDRESS_CITY'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'POSTAL_ADDRESS_SUBURB'); ?>
		<?php echo $form->textField($model,'POSTAL_ADDRESS_SUBURB',array('size'=>60,'maxlength'=>255)); ?>
		<?php echo $form->error($model,'POSTAL_ADDRESS_SUBURB'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'POSTAL_ADDRESS_STATE'); ?>
		<?php echo $form->textField($model,'POSTAL_ADDRESS_STATE',array('size'=>60,'maxlength'=>255)); ?>
		<?php echo $form->error($model,'POSTAL_ADDRESS_STATE'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'POSTAL_ADDRESS_COUNTRY'); ?>
		<?php echo $form->textField($model,'POSTAL_ADDRESS_COUNTRY',array('size'=>60,'maxlength'=>255)); ?>
		<?php echo $form->error($model,'POSTAL_ADDRESS_COUNTRY'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'POSTAL_ADDRESS_POST_CODE'); ?>
		<?php echo $form->textField($model,'POSTAL_ADDRESS_POST_CODE',array('size'=>12,'maxlength'=>12)); ?>
		<?php echo $form->error($model,'POSTAL_ADDRESS_POST_CODE'); ?>
	</div>

	<div class="row buttons">
		<?php echo CHtml::submitButton($model->isNewRecord ? 'Create' : 'Save'); ?>
	</div>

<?php $this->endWidget(); ?>

</div><!-- form -->