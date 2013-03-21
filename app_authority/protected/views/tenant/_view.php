<?php
/* @var $this TenantController */
/* @var $data Tenant */
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

	<b><?php echo CHtml::encode($data->getAttributeLabel('NAME')); ?>:</b>
	<?php echo CHtml::encode($data->NAME); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('DESCRIPTION')); ?>:</b>
	<?php echo CHtml::encode($data->DESCRIPTION); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('LAST_INVOICE_ID')); ?>:</b>
	<?php echo CHtml::encode($data->LAST_INVOICE_ID); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('LAST_ORDER_ID')); ?>:</b>
	<?php echo CHtml::encode($data->LAST_ORDER_ID); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('LAST_TRANSACTION_ID')); ?>:</b>
	<?php echo CHtml::encode($data->LAST_TRANSACTION_ID); ?>
	<br />

</div>
<div style="float:right;">
    right
</div>