<?php
/* @var $this UserProfileController */
/* @var $model UserProfile */
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
		<?php echo $form->label($model,'USER_REC_ID'); ?>
		<?php echo $form->textField($model,'USER_REC_ID'); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'LOGIN_PROVIDER'); ?>
		<?php echo $form->textField($model,'LOGIN_PROVIDER',array('size'=>60,'maxlength'=>80)); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'LOGIN_PROVIDER_IDENTIFIER'); ?>
		<?php echo $form->textField($model,'LOGIN_PROVIDER_IDENTIFIER',array('size'=>60,'maxlength'=>100)); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'IDENTIFIER'); ?>
		<?php echo $form->textField($model,'IDENTIFIER',array('size'=>60,'maxlength'=>255)); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'PROFILE_URL'); ?>
		<?php echo $form->textField($model,'PROFILE_URL',array('size'=>60,'maxlength'=>2048)); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'WEBSITE_URL'); ?>
		<?php echo $form->textField($model,'WEBSITE_URL',array('size'=>60,'maxlength'=>2048)); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'PHOTO_URL'); ?>
		<?php echo $form->textField($model,'PHOTO_URL',array('size'=>60,'maxlength'=>2048)); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'DISPLAY_NAME'); ?>
		<?php echo $form->textField($model,'DISPLAY_NAME',array('size'=>60,'maxlength'=>255)); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'DESCRIPTION'); ?>
		<?php echo $form->textArea($model,'DESCRIPTION',array('rows'=>6, 'cols'=>50)); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'FIRST_NAME'); ?>
		<?php echo $form->textField($model,'FIRST_NAME',array('size'=>55,'maxlength'=>55)); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'LAST_NAME'); ?>
		<?php echo $form->textField($model,'LAST_NAME',array('size'=>55,'maxlength'=>55)); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'GENDER'); ?>
		<?php echo $form->textField($model,'GENDER',array('size'=>10,'maxlength'=>10)); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'LANGUAGE'); ?>
		<?php echo $form->textField($model,'LANGUAGE',array('size'=>45,'maxlength'=>45)); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'AGE'); ?>
		<?php echo $form->textField($model,'AGE'); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'BIRTH_DAY'); ?>
		<?php echo $form->textField($model,'BIRTH_DAY'); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'BIRTH_MONTH'); ?>
		<?php echo $form->textField($model,'BIRTH_MONTH'); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'BIRTH_YEAR'); ?>
		<?php echo $form->textField($model,'BIRTH_YEAR'); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'EMAIL'); ?>
		<?php echo $form->textField($model,'EMAIL',array('size'=>60,'maxlength'=>255)); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'EMAIL_VERIFIED'); ?>
		<?php echo $form->textField($model,'EMAIL_VERIFIED',array('size'=>60,'maxlength'=>255)); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'PHONE'); ?>
		<?php echo $form->textField($model,'PHONE',array('size'=>45,'maxlength'=>45)); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'COUNTRY'); ?>
		<?php echo $form->textField($model,'COUNTRY',array('size'=>60,'maxlength'=>255)); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'REGION'); ?>
		<?php echo $form->textField($model,'REGION',array('size'=>60,'maxlength'=>255)); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'CITY'); ?>
		<?php echo $form->textField($model,'CITY',array('size'=>60,'maxlength'=>255)); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'ZIP'); ?>
		<?php echo $form->textField($model,'ZIP'); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'POST_CODE'); ?>
		<?php echo $form->textField($model,'POST_CODE',array('size'=>45,'maxlength'=>45)); ?>
	</div>

	<div class="row buttons">
		<?php echo CHtml::submitButton('Search'); ?>
	</div>

<?php $this->endWidget(); ?>

</div><!-- search-form -->