<?php
/* @var $this UserProfileController */
/* @var $data UserProfile */
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

	<b><?php echo CHtml::encode($data->getAttributeLabel('USER_REC_ID')); ?>:</b>
	<?php echo CHtml::encode($data->USER_REC_ID); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('LOGIN_PROVIDER')); ?>:</b>
	<?php echo CHtml::encode($data->LOGIN_PROVIDER); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('LOGIN_PROVIDER_IDENTIFIER')); ?>:</b>
	<?php echo CHtml::encode($data->LOGIN_PROVIDER_IDENTIFIER); ?>
	<br />

	<?php /*
	<b><?php echo CHtml::encode($data->getAttributeLabel('IDENTIFIER')); ?>:</b>
	<?php echo CHtml::encode($data->IDENTIFIER); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('PROFILE_URL')); ?>:</b>
	<?php echo CHtml::encode($data->PROFILE_URL); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('WEBSITE_URL')); ?>:</b>
	<?php echo CHtml::encode($data->WEBSITE_URL); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('PHOTO_URL')); ?>:</b>
	<?php echo CHtml::encode($data->PHOTO_URL); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('DISPLAY_NAME')); ?>:</b>
	<?php echo CHtml::encode($data->DISPLAY_NAME); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('DESCRIPTION')); ?>:</b>
	<?php echo CHtml::encode($data->DESCRIPTION); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('FIRST_NAME')); ?>:</b>
	<?php echo CHtml::encode($data->FIRST_NAME); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('LAST_NAME')); ?>:</b>
	<?php echo CHtml::encode($data->LAST_NAME); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('GENDER')); ?>:</b>
	<?php echo CHtml::encode($data->GENDER); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('LANGUAGE')); ?>:</b>
	<?php echo CHtml::encode($data->LANGUAGE); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('AGE')); ?>:</b>
	<?php echo CHtml::encode($data->AGE); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('BIRTH_DAY')); ?>:</b>
	<?php echo CHtml::encode($data->BIRTH_DAY); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('BIRTH_MONTH')); ?>:</b>
	<?php echo CHtml::encode($data->BIRTH_MONTH); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('BIRTH_YEAR')); ?>:</b>
	<?php echo CHtml::encode($data->BIRTH_YEAR); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('EMAIL')); ?>:</b>
	<?php echo CHtml::encode($data->EMAIL); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('EMAIL_VERIFIED')); ?>:</b>
	<?php echo CHtml::encode($data->EMAIL_VERIFIED); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('PHONE')); ?>:</b>
	<?php echo CHtml::encode($data->PHONE); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('COUNTRY')); ?>:</b>
	<?php echo CHtml::encode($data->COUNTRY); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('REGION')); ?>:</b>
	<?php echo CHtml::encode($data->REGION); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('CITY')); ?>:</b>
	<?php echo CHtml::encode($data->CITY); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('ZIP')); ?>:</b>
	<?php echo CHtml::encode($data->ZIP); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('POST_CODE')); ?>:</b>
	<?php echo CHtml::encode($data->POST_CODE); ?>
	<br />

	*/ ?>

</div>