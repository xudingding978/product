<?php
/* @var $this ShadowListingController */
/* @var $data ShadowListing */
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

	<b><?php echo CHtml::encode($data->getAttributeLabel('CLIENT_REC_ID')); ?>:</b>
	<?php echo CHtml::encode($data->CLIENT_REC_ID); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('STATE')); ?>:</b>
	<?php echo CHtml::encode($data->STATE); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('LISTING_TYPE_REC_ID')); ?>:</b>
	<?php echo CHtml::encode($data->LISTING_TYPE_REC_ID); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('ITEM_ID')); ?>:</b>
	<?php echo CHtml::encode($data->ITEM_ID); ?>
	<br />

	<?php /*
	<b><?php echo CHtml::encode($data->getAttributeLabel('DESCRIPTION')); ?>:</b>
	<?php echo CHtml::encode($data->DESCRIPTION); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('IMAGE_URL')); ?>:</b>
	<?php echo CHtml::encode($data->IMAGE_URL); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('PROOF_NAME')); ?>:</b>
	<?php echo CHtml::encode($data->PROOF_NAME); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('PROOF_POSITION')); ?>:</b>
	<?php echo CHtml::encode($data->PROOF_POSITION); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('LISTING_COST_EXCL_GST')); ?>:</b>
	<?php echo CHtml::encode($data->LISTING_COST_EXCL_GST); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('LISTING_COST_INCL_GST')); ?>:</b>
	<?php echo CHtml::encode($data->LISTING_COST_INCL_GST); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('TRANSACTION_TOTAL_EXCL_GST')); ?>:</b>
	<?php echo CHtml::encode($data->TRANSACTION_TOTAL_EXCL_GST); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('TRANSACTION_TOTAL_INCL_GST')); ?>:</b>
	<?php echo CHtml::encode($data->TRANSACTION_TOTAL_INCL_GST); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('TOTAL_PAID_TO_DATE')); ?>:</b>
	<?php echo CHtml::encode($data->TOTAL_PAID_TO_DATE); ?>
	<br />

	*/ ?>

</div>