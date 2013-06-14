<?php
/* @var $this ArticleImagesController */
/* @var $data ArticleImages */
?>

<div class="view">

	<b><?php echo CHtml::encode($data->getAttributeLabel('id')); ?>:</b>
	<?php echo CHtml::link(CHtml::encode($data->id), array('view', 'id'=>$data->id)); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('articleId')); ?>:</b>
	<?php echo CHtml::encode($data->articleId); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('heliumMediaId')); ?>:</b>
	<?php echo CHtml::encode($data->heliumMediaId); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('caption')); ?>:</b>
	<?php echo CHtml::encode($data->caption); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('technicalSpecification')); ?>:</b>
	<?php echo CHtml::encode($data->technicalSpecification); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('sequence')); ?>:</b>
	<?php echo CHtml::encode($data->sequence); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('isExtra')); ?>:</b>
	<?php echo CHtml::encode($data->isExtra); ?>
	<br />

	<?php /*
	<b><?php echo CHtml::encode($data->getAttributeLabel('hero')); ?>:</b>
	<?php echo CHtml::encode($data->hero); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('thumbnail')); ?>:</b>
	<?php echo CHtml::encode($data->thumbnail); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('preview')); ?>:</b>
	<?php echo CHtml::encode($data->preview); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('infoLink')); ?>:</b>
	<?php echo CHtml::encode($data->infoLink); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('original')); ?>:</b>
	<?php echo CHtml::encode($data->original); ?>
	<br />

	*/ ?>

</div>