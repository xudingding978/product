<?php
/* @var $this ArticleImagesController */
/* @var $model ArticleImages */
/* @var $form CActiveForm */
?>

<div class="wide form">

<?php $form=$this->beginWidget('CActiveForm', array(
	'action'=>Yii::app()->createUrl($this->route),
	'method'=>'get',
)); ?>

	<div class="row">
		<?php echo $form->label($model,'id'); ?>
		<?php echo $form->textField($model,'id'); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'articleId'); ?>
		<?php echo $form->textField($model,'articleId'); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'heliumMediaId'); ?>
		<?php echo $form->textField($model,'heliumMediaId'); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'caption'); ?>
		<?php echo $form->textArea($model,'caption',array('rows'=>6, 'cols'=>50)); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'technicalSpecification'); ?>
		<?php echo $form->textArea($model,'technicalSpecification',array('rows'=>6, 'cols'=>50)); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'sequence'); ?>
		<?php echo $form->textField($model,'sequence'); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'isExtra'); ?>
		<?php echo $form->checkBox($model,'isExtra'); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'hero'); ?>
		<?php echo $form->textField($model,'hero',array('size'=>60,'maxlength'=>256)); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'thumbnail'); ?>
		<?php echo $form->textField($model,'thumbnail',array('size'=>60,'maxlength'=>256)); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'preview'); ?>
		<?php echo $form->textField($model,'preview',array('size'=>60,'maxlength'=>256)); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'infoLink'); ?>
		<?php echo $form->textField($model,'infoLink',array('size'=>60,'maxlength'=>256)); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'original'); ?>
		<?php echo $form->textField($model,'original',array('size'=>60,'maxlength'=>256)); ?>
	</div>

	<div class="row buttons">
		<?php echo CHtml::submitButton('Search'); ?>
	</div>

<?php $this->endWidget(); ?>

</div><!-- search-form -->