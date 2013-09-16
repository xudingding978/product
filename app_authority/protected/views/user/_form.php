<?php
/* @var $this UserController */
/* @var $model User */
/* @var $form CActiveForm */
?>

<div class="form">

    <?php
    $form = $this->beginWidget('CActiveForm', array(
        'id' => 'user-form',
        'enableAjaxValidation' => false,
    ));
    ?>

    <p class="note">Fields with <span class="required">*</span> are required.</p>

        <?php echo $form->errorSummary($model); ?>

    <div class="row">
        <?php echo $form->labelEx($model, 'TENANT_REC_ID'); ?>
<?php echo $form->textField($model, 'TENANT_REC_ID'); ?>
<?php echo $form->error($model, 'TENANT_REC_ID'); ?>
    </div>

    <div class="row">
        <?php echo $form->labelEx($model, 'USER_NAME'); ?>
<?php echo $form->textField($model, 'USER_NAME', array('size' => 60, 'maxlength' => 255)); ?>
<?php echo $form->error($model, 'USER_NAME'); ?>
    </div>

    <div class="row">
        <?php echo $form->labelEx($model, 'PWD_HASH'); ?>
<?php echo $form->textField($model, 'PWD_HASH', array('size' => 60, 'maxlength' => 512)); ?>
<?php echo $form->error($model, 'PWD_HASH'); ?>
    </div>

    <div class="row">
        <?php echo $form->labelEx($model, 'repeat_password'); ?>
        <?php echo $form->textField($model, 'repeat_password', array('size' => 60, 'maxlength' => 512)); ?>
        <?php echo $form->error($model, 'repeat_password'); ?>
    </div>

    <div class="row">
        <?php echo $form->labelEx($model, 'EMAIL_ADDRESS'); ?>
<?php echo $form->textField($model, 'EMAIL_ADDRESS', array('size' => 60, 'maxlength' => 255)); ?>
<?php echo $form->error($model, 'EMAIL_ADDRESS'); ?>
    </div>

    <div class="row buttons">
    <?php echo CHtml::submitButton($model->isNewRecord ? 'Create' : 'Save'); ?>
    </div>

<?php $this->endWidget(); ?>

</div><!-- form -->
