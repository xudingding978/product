<?php
/* @var $this ClientController */
/* @var $model Client */
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
		<?php echo $form->label($model,'CLIENT_STATUS_REC_ID'); ?>
		<?php echo $form->textField($model,'CLIENT_STATUS_REC_ID'); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'USER_ID'); ?>
		<?php echo $form->textField($model,'USER_ID'); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'CLIENT_NAME'); ?>
		<?php echo $form->textField($model,'CLIENT_NAME',array('size'=>60,'maxlength'=>255)); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'IS_DELETED'); ?>
		<?php echo $form->textField($model,'IS_DELETED'); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'DELETED_BY'); ?>
		<?php echo $form->textField($model,'DELETED_BY',array('size'=>45,'maxlength'=>45)); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'DELETED_DATE'); ?>
		<?php echo $form->textField($model,'DELETED_DATE',array('size'=>45,'maxlength'=>45)); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'LAST_LOGIN_DATETIME'); ?>
		<?php echo $form->textField($model,'LAST_LOGIN_DATETIME'); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'ACTIVATION_CODE'); ?>
		<?php echo $form->textField($model,'ACTIVATION_CODE',array('size'=>45,'maxlength'=>45)); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'TRADING_AS_NAME'); ?>
		<?php echo $form->textField($model,'TRADING_AS_NAME',array('size'=>60,'maxlength'=>255)); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'TELEPHONE_NO'); ?>
		<?php echo $form->textField($model,'TELEPHONE_NO',array('size'=>48,'maxlength'=>48)); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'FREE_TELEPHONE_NO'); ?>
		<?php echo $form->textField($model,'FREE_TELEPHONE_NO',array('size'=>48,'maxlength'=>48)); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'FAX_NO'); ?>
		<?php echo $form->textField($model,'FAX_NO',array('size'=>48,'maxlength'=>48)); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'FREE_FAX_NO'); ?>
		<?php echo $form->textField($model,'FREE_FAX_NO',array('size'=>48,'maxlength'=>48)); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'EMAIL_ADDRESS'); ?>
		<?php echo $form->textField($model,'EMAIL_ADDRESS',array('size'=>60,'maxlength'=>255)); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'WEBSITE_ADDRESS'); ?>
		<?php echo $form->textField($model,'WEBSITE_ADDRESS',array('size'=>60,'maxlength'=>255)); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'PHYSICAL_ADDRESS_BUILDING_ADDRESS'); ?>
		<?php echo $form->textField($model,'PHYSICAL_ADDRESS_BUILDING_ADDRESS',array('size'=>60,'maxlength'=>255)); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'PHYSICAL_ADDRESS_STREET_ADDRESS'); ?>
		<?php echo $form->textField($model,'PHYSICAL_ADDRESS_STREET_ADDRESS',array('size'=>60,'maxlength'=>255)); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'PHYSICAL_ADDRESS_SUBURB'); ?>
		<?php echo $form->textField($model,'PHYSICAL_ADDRESS_SUBURB',array('size'=>60,'maxlength'=>255)); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'PHYSICAL_ADDRESS_CITY'); ?>
		<?php echo $form->textField($model,'PHYSICAL_ADDRESS_CITY',array('size'=>60,'maxlength'=>255)); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'PHYSICAL_ADDRESS_STATE'); ?>
		<?php echo $form->textField($model,'PHYSICAL_ADDRESS_STATE',array('size'=>60,'maxlength'=>255)); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'PHYSICAL_ADDRESS_COUNTRY'); ?>
		<?php echo $form->textField($model,'PHYSICAL_ADDRESS_COUNTRY',array('size'=>60,'maxlength'=>255)); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'PHYSICAL_ADDRESS_POST_CODE'); ?>
		<?php echo $form->textField($model,'PHYSICAL_ADDRESS_POST_CODE',array('size'=>12,'maxlength'=>12)); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'PHYSICAL_ADDRESS_DPID'); ?>
		<?php echo $form->textField($model,'PHYSICAL_ADDRESS_DPID',array('size'=>45,'maxlength'=>45)); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'PHYSICAL_ADDRESS_PXID'); ?>
		<?php echo $form->textField($model,'PHYSICAL_ADDRESS_PXID',array('size'=>45,'maxlength'=>45)); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'PHYSICAL_ADDRESS_LATITUDE'); ?>
		<?php echo $form->textField($model,'PHYSICAL_ADDRESS_LATITUDE'); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'PHYSICAL_ADDRESS_LONGITUDE'); ?>
		<?php echo $form->textField($model,'PHYSICAL_ADDRESS_LONGITUDE'); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'PHYSICAL_ADDRESS_HEIGHT'); ?>
		<?php echo $form->textField($model,'PHYSICAL_ADDRESS_HEIGHT'); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'PHYSICAL_ADDRESS_COMPLETE'); ?>
		<?php echo $form->textField($model,'PHYSICAL_ADDRESS_COMPLETE',array('size'=>60,'maxlength'=>1024)); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'POSTAL_ADDRESS_BUILDING_ADDRESS'); ?>
		<?php echo $form->textField($model,'POSTAL_ADDRESS_BUILDING_ADDRESS',array('size'=>60,'maxlength'=>255)); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'POSTAL_ADDRESS_STREET_ADDRESS'); ?>
		<?php echo $form->textField($model,'POSTAL_ADDRESS_STREET_ADDRESS',array('size'=>60,'maxlength'=>255)); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'POSTAL_ADDRESS_CITY'); ?>
		<?php echo $form->textField($model,'POSTAL_ADDRESS_CITY',array('size'=>60,'maxlength'=>255)); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'POSTAL_ADDRESS_SUBURB'); ?>
		<?php echo $form->textField($model,'POSTAL_ADDRESS_SUBURB',array('size'=>60,'maxlength'=>255)); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'POSTAL_ADDRESS_STATE'); ?>
		<?php echo $form->textField($model,'POSTAL_ADDRESS_STATE',array('size'=>60,'maxlength'=>255)); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'POSTAL_ADDRESS_COUNTRY'); ?>
		<?php echo $form->textField($model,'POSTAL_ADDRESS_COUNTRY',array('size'=>60,'maxlength'=>255)); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'POSTAL_ADDRESS_POST_CODE'); ?>
		<?php echo $form->textField($model,'POSTAL_ADDRESS_POST_CODE',array('size'=>12,'maxlength'=>12)); ?>
	</div>

	<div class="row buttons">
		<?php echo CHtml::submitButton('Search'); ?>
	</div>

<?php $this->endWidget(); ?>

</div><!-- search-form -->