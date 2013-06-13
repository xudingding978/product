<?php
/* @var $this C4SClientsController */
/* @var $data C4SClients */
?>

<div class="view">

	<b><?php echo CHtml::encode($data->getAttributeLabel('C4S_ClientID')); ?>:</b>
	<?php echo CHtml::link(CHtml::encode($data->C4S_ClientID), array('view', 'id'=>$data->C4S_ClientID)); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('DateCreated')); ?>:</b>
	<?php echo CHtml::encode($data->DateCreated); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('ClientName')); ?>:</b>
	<?php echo CHtml::encode($data->ClientName); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('ArticleID')); ?>:</b>
	<?php echo CHtml::encode($data->ArticleID); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('SortOrder')); ?>:</b>
	<?php echo CHtml::encode($data->SortOrder); ?>
	<br />


</div>