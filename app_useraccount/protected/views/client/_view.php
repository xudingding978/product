<?php
/* @var $this ClientController */
/* @var $data Client */
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

	<b><?php echo CHtml::encode($data->getAttributeLabel('CLIENT_STATUS_REC_ID')); ?>:</b>
	<?php echo CHtml::encode($data->CLIENT_STATUS_REC_ID); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('USER_ID')); ?>:</b>
	<?php echo CHtml::encode($data->USER_ID); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('BUSINESS_NAME')); ?>:</b>
	<?php echo CHtml::encode($data->BUSINESS_NAME); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('USERNAME')); ?>:</b>
	<?php echo CHtml::encode($data->USERNAME); ?>
	<br />

	<?php /*
	<b><?php echo CHtml::encode($data->getAttributeLabel('TRADING_AS_NAME')); ?>:</b>
	<?php echo CHtml::encode($data->TRADING_AS_NAME); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('IS_DELETED')); ?>:</b>
	<?php echo CHtml::encode($data->IS_DELETED); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('DELETED_BY')); ?>:</b>
	<?php echo CHtml::encode($data->DELETED_BY); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('DELETED_DATE')); ?>:</b>
	<?php echo CHtml::encode($data->DELETED_DATE); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('ACTIVATION_CODE')); ?>:</b>
	<?php echo CHtml::encode($data->ACTIVATION_CODE); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('TELEPHONE_NO')); ?>:</b>
	<?php echo CHtml::encode($data->TELEPHONE_NO); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('FREE_TELEPHONE_NO')); ?>:</b>
	<?php echo CHtml::encode($data->FREE_TELEPHONE_NO); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('FAX_NO')); ?>:</b>
	<?php echo CHtml::encode($data->FAX_NO); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('FREE_FAX_NO')); ?>:</b>
	<?php echo CHtml::encode($data->FREE_FAX_NO); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('EMAIL_ADDRESS')); ?>:</b>
	<?php echo CHtml::encode($data->EMAIL_ADDRESS); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('WEBSITE_ADDRESS')); ?>:</b>
	<?php echo CHtml::encode($data->WEBSITE_ADDRESS); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('PHYSICAL_ADDRESS_BUILDING_ADDRESS')); ?>:</b>
	<?php echo CHtml::encode($data->PHYSICAL_ADDRESS_BUILDING_ADDRESS); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('PHYSICAL_ADDRESS_STREET_ADDRESS')); ?>:</b>
	<?php echo CHtml::encode($data->PHYSICAL_ADDRESS_STREET_ADDRESS); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('PHYSICAL_ADDRESS_SUBURB')); ?>:</b>
	<?php echo CHtml::encode($data->PHYSICAL_ADDRESS_SUBURB); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('PHYSICAL_ADDRESS_CITY')); ?>:</b>
	<?php echo CHtml::encode($data->PHYSICAL_ADDRESS_CITY); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('PHYSICAL_ADDRESS_STATE')); ?>:</b>
	<?php echo CHtml::encode($data->PHYSICAL_ADDRESS_STATE); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('PHYSICAL_ADDRESS_COUNTRY')); ?>:</b>
	<?php echo CHtml::encode($data->PHYSICAL_ADDRESS_COUNTRY); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('PHYSICAL_ADDRESS_POST_CODE')); ?>:</b>
	<?php echo CHtml::encode($data->PHYSICAL_ADDRESS_POST_CODE); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('PHYSICAL_ADDRESS_DPID')); ?>:</b>
	<?php echo CHtml::encode($data->PHYSICAL_ADDRESS_DPID); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('PHYSICAL_ADDRESS_PXID')); ?>:</b>
	<?php echo CHtml::encode($data->PHYSICAL_ADDRESS_PXID); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('PHYSICAL_ADDRESS_LATITUDE')); ?>:</b>
	<?php echo CHtml::encode($data->PHYSICAL_ADDRESS_LATITUDE); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('PHYSICAL_ADDRESS_LONGITUDE')); ?>:</b>
	<?php echo CHtml::encode($data->PHYSICAL_ADDRESS_LONGITUDE); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('PHYSICAL_ADDRESS_HEIGHT')); ?>:</b>
	<?php echo CHtml::encode($data->PHYSICAL_ADDRESS_HEIGHT); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('PHYSICAL_ADDRESS_COMPLETE')); ?>:</b>
	<?php echo CHtml::encode($data->PHYSICAL_ADDRESS_COMPLETE); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('POSTAL_ADDRESS_BUILDING_ADDRESS')); ?>:</b>
	<?php echo CHtml::encode($data->POSTAL_ADDRESS_BUILDING_ADDRESS); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('POSTAL_ADDRESS_STREET_ADDRESS')); ?>:</b>
	<?php echo CHtml::encode($data->POSTAL_ADDRESS_STREET_ADDRESS); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('POSTAL_ADDRESS_CITY')); ?>:</b>
	<?php echo CHtml::encode($data->POSTAL_ADDRESS_CITY); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('POSTAL_ADDRESS_SUBURB')); ?>:</b>
	<?php echo CHtml::encode($data->POSTAL_ADDRESS_SUBURB); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('POSTAL_ADDRESS_STATE')); ?>:</b>
	<?php echo CHtml::encode($data->POSTAL_ADDRESS_STATE); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('POSTAL_ADDRESS_COUNTRY')); ?>:</b>
	<?php echo CHtml::encode($data->POSTAL_ADDRESS_COUNTRY); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('POSTAL_ADDRESS_POST_CODE')); ?>:</b>
	<?php echo CHtml::encode($data->POSTAL_ADDRESS_POST_CODE); ?>
	<br />

	*/ ?>

</div>