<?php
/* @var $this UserController */
/* @var $data User */
?>

<div class="view">

	<b><?php echo CHtml::encode($data->getAttributeLabel('REC_ID')); ?>:</b>
	<?php echo CHtml::link(CHtml::encode($data->REC_ID), array('view', 'id'=>$data->REC_ID)); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('REC_DATETIME')); ?>:</b>
	<?php echo CHtml::encode($data->REC_DATETIME); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('REC_TIMESTAMP')); ?>:</b>
	<?php echo CHtml::encode($data->REC_TIMESTAMP); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('TENANT_REC_ID')); ?>:</b>
	<?php echo CHtml::encode($data->TENANT_REC_ID); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('USER_NAME')); ?>:</b>
	<?php echo CHtml::encode($data->USER_NAME); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('PWD_HASH')); ?>:</b>
	<?php echo CHtml::encode($data->PWD_HASH); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('EMAIL_ADDRESS')); ?>:</b>
	<?php echo CHtml::encode($data->EMAIL_ADDRESS); ?>
	<br />


</div>