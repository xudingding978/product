<?php
/* @var $this ArticleImagesController */
/* @var $model ArticleImages */
/* @var $form CActiveForm */
?>

<div class="form">

<?php $form=$this->beginWidget('CActiveForm', array(
	'id'=>'article-images-form',
	'enableAjaxValidation'=>false,
)); ?>

	<p class="note">Fields with <span class="required">*</span> are required.</p>

	<?php echo $form->errorSummary($model); ?>

	<div class="row">
		<?php echo $form->labelEx($model,'articleId'); ?>
		<?php echo $form->textField($model,'articleId'); ?>
		<?php echo $form->error($model,'articleId'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'heliumMediaId'); ?>
		<?php echo $form->textField($model,'heliumMediaId'); ?>
		<?php echo $form->error($model,'heliumMediaId'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'caption'); ?>
		<?php echo $form->textArea($model,'caption',array('rows'=>6, 'cols'=>50)); ?>
		<?php echo $form->error($model,'caption'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'technicalSpecification'); ?>
		<?php echo $form->textArea($model,'technicalSpecification',array('rows'=>6, 'cols'=>50)); ?>
		<?php echo $form->error($model,'technicalSpecification'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'sequence'); ?>
		<?php echo $form->textField($model,'sequence'); ?>
		<?php echo $form->error($model,'sequence'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'isExtra'); ?>
		<?php echo $form->checkBox($model,'isExtra'); ?>
		<?php echo $form->error($model,'isExtra'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'hero'); ?>
		<?php echo $form->textField($model,'hero',array('size'=>60,'maxlength'=>256)); ?>
		<?php echo $form->error($model,'hero'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'thumbnail'); ?>
		<?php echo $form->textField($model,'thumbnail',array('size'=>60,'maxlength'=>256)); ?>
		<?php echo $form->error($model,'thumbnail'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'preview'); ?>
		<?php echo $form->textField($model,'preview',array('size'=>60,'maxlength'=>256)); ?>
		<?php echo $form->error($model,'preview'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'infoLink'); ?>
		<?php echo $form->textField($model,'infoLink',array('size'=>60,'maxlength'=>256)); ?>
		<?php echo $form->error($model,'infoLink'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'original'); ?>
		<?php echo $form->textField($model,'original',array('size'=>60,'maxlength'=>256)); ?>
		<?php echo $form->error($model,'original'); ?>
	</div>

	<div class="row buttons">
		<?php echo CHtml::submitButton($model->isNewRecord ? 'Create' : 'Save'); ?>
	</div>

<?php $this->endWidget(); ?>

</div><!-- form -->