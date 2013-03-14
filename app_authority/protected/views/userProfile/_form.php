<?php
/* @var $this UserProfileController */
/* @var $model UserProfile */
/* @var $form CActiveForm */
?>

<div class="form">

<?php $form=$this->beginWidget('CActiveForm', array(
	'id'=>'user-profile-form',
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
		<?php echo $form->labelEx($model,'TENANT_REC_ID'); ?>
		<?php echo $form->textField($model,'TENANT_REC_ID'); ?>
		<?php echo $form->error($model,'TENANT_REC_ID'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'USER_REC_ID'); ?>
		<?php echo $form->textField($model,'USER_REC_ID'); ?>
		<?php echo $form->error($model,'USER_REC_ID'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'LOGIN_PROVIDER'); ?>
		<?php echo $form->textField($model,'LOGIN_PROVIDER',array('size'=>60,'maxlength'=>80)); ?>
		<?php echo $form->error($model,'LOGIN_PROVIDER'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'LOGIN_PROVIDER_IDENTIFIER'); ?>
		<?php echo $form->textField($model,'LOGIN_PROVIDER_IDENTIFIER',array('size'=>60,'maxlength'=>100)); ?>
		<?php echo $form->error($model,'LOGIN_PROVIDER_IDENTIFIER'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'IDENTIFIER'); ?>
		<?php echo $form->textField($model,'IDENTIFIER',array('size'=>60,'maxlength'=>255)); ?>
		<?php echo $form->error($model,'IDENTIFIER'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'PROFILE_URL'); ?>
		<?php echo $form->textField($model,'PROFILE_URL',array('size'=>60,'maxlength'=>2048)); ?>
		<?php echo $form->error($model,'PROFILE_URL'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'WEBSITE_URL'); ?>
		<?php echo $form->textField($model,'WEBSITE_URL',array('size'=>60,'maxlength'=>2048)); ?>
		<?php echo $form->error($model,'WEBSITE_URL'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'PHOTO_URL'); ?>
		<?php echo $form->textField($model,'PHOTO_URL',array('size'=>60,'maxlength'=>2048)); ?>
		<?php echo $form->error($model,'PHOTO_URL'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'DISPLAY_NAME'); ?>
		<?php echo $form->textField($model,'DISPLAY_NAME',array('size'=>60,'maxlength'=>255)); ?>
		<?php echo $form->error($model,'DISPLAY_NAME'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'DESCRIPTION'); ?>
		<?php echo $form->textArea($model,'DESCRIPTION',array('rows'=>6, 'cols'=>50)); ?>
		<?php echo $form->error($model,'DESCRIPTION'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'FIRST_NAME'); ?>
		<?php echo $form->textField($model,'FIRST_NAME',array('size'=>55,'maxlength'=>55)); ?>
		<?php echo $form->error($model,'FIRST_NAME'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'LAST_NAME'); ?>
		<?php echo $form->textField($model,'LAST_NAME',array('size'=>55,'maxlength'=>55)); ?>
		<?php echo $form->error($model,'LAST_NAME'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'GENDER'); ?>
		<?php echo $form->textField($model,'GENDER',array('size'=>10,'maxlength'=>10)); ?>
		<?php echo $form->error($model,'GENDER'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'LANGUAGE'); ?>
		<?php echo $form->textField($model,'LANGUAGE',array('size'=>45,'maxlength'=>45)); ?>
		<?php echo $form->error($model,'LANGUAGE'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'AGE'); ?>
		<?php echo $form->textField($model,'AGE'); ?>
		<?php echo $form->error($model,'AGE'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'BIRTH_DAY'); ?>
		<?php echo $form->textField($model,'BIRTH_DAY'); ?>
		<?php echo $form->error($model,'BIRTH_DAY'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'BIRTH_MONTH'); ?>
		<?php echo $form->textField($model,'BIRTH_MONTH'); ?>
		<?php echo $form->error($model,'BIRTH_MONTH'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'BIRTH_YEAR'); ?>
		<?php echo $form->textField($model,'BIRTH_YEAR'); ?>
		<?php echo $form->error($model,'BIRTH_YEAR'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'EMAIL'); ?>
		<?php echo $form->textField($model,'EMAIL',array('size'=>60,'maxlength'=>255)); ?>
		<?php echo $form->error($model,'EMAIL'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'EMAIL_VERIFIED'); ?>
		<?php echo $form->textField($model,'EMAIL_VERIFIED',array('size'=>60,'maxlength'=>255)); ?>
		<?php echo $form->error($model,'EMAIL_VERIFIED'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'PHONE'); ?>
		<?php echo $form->textField($model,'PHONE',array('size'=>45,'maxlength'=>45)); ?>
		<?php echo $form->error($model,'PHONE'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'COUNTRY'); ?>
		<?php echo $form->textField($model,'COUNTRY',array('size'=>60,'maxlength'=>255)); ?>
		<?php echo $form->error($model,'COUNTRY'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'REGION'); ?>
		<?php echo $form->textField($model,'REGION',array('size'=>60,'maxlength'=>255)); ?>
		<?php echo $form->error($model,'REGION'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'CITY'); ?>
		<?php echo $form->textField($model,'CITY',array('size'=>60,'maxlength'=>255)); ?>
		<?php echo $form->error($model,'CITY'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'ZIP'); ?>
		<?php echo $form->textField($model,'ZIP'); ?>
		<?php echo $form->error($model,'ZIP'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'POST_CODE'); ?>
		<?php echo $form->textField($model,'POST_CODE',array('size'=>45,'maxlength'=>45)); ?>
		<?php echo $form->error($model,'POST_CODE'); ?>
	</div>

	<div class="row buttons">
		<?php echo CHtml::submitButton($model->isNewRecord ? 'Create' : 'Save'); ?>
	</div>

<?php $this->endWidget(); ?>

</div><!-- form -->