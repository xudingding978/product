<?php
/* @var $this C4SClientsController */
/* @var $model C4SClients */
/* @var $form CActiveForm */
?>

<div class="form">

<?php $form=$this->beginWidget('CActiveForm', array(
	'id'=>'c4-sclients-form',
	'enableAjaxValidation'=>false,
)); ?>

	<p class="note">Fields with <span class="required">*</span> are required.</p>

	<?php echo $form->errorSummary($model); ?>

	<div class="row">
		<?php echo $form->labelEx($model,'DateCreated'); ?>
		<?php echo $form->textField($model,'DateCreated'); ?>
		<?php echo $form->error($model,'DateCreated'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'ClientName'); ?>
		<?php echo $form->textField($model,'ClientName',array('size'=>50,'maxlength'=>50)); ?>
		<?php echo $form->error($model,'ClientName'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'ArticleID'); ?>
		<?php echo $form->textField($model,'ArticleID'); ?>
		<?php echo $form->error($model,'ArticleID'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'SortOrder'); ?>
		<?php echo $form->textField($model,'SortOrder'); ?>
		<?php echo $form->error($model,'SortOrder'); ?>
	</div>

	<div class="row buttons">
		<?php echo CHtml::submitButton($model->isNewRecord ? 'Create' : 'Save'); ?>
	</div>

<?php $this->endWidget(); ?>

</div><!-- form -->