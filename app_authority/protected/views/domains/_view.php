<?php
/* @var $this DomainsController */
/* @var $data Domains */
?>

<div class="view">

	<b><?php echo CHtml::encode($data->getAttributeLabel('REC_ID')); ?>:</b>
	<?php echo CHtml::link(CHtml::encode($data->REC_ID), array('view', 'id'=>$data->REC_ID)); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('DOMAIN_NAME')); ?>:</b>
	<?php echo CHtml::encode($data->DOMAIN_NAME); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('JSON_DATA')); ?>:</b>
	<?php echo CHtml::encode($data->JSON_DATA); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('PAYPAL_EMAIL')); ?>:</b>
	<?php echo CHtml::encode($data->PAYPAL_EMAIL); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('TITLE')); ?>:</b>
	<?php echo CHtml::encode($data->TITLE); ?>
	<br />


</div>