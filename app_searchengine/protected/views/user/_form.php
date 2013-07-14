<?php
/* @var $this UserController */
/* @var $model User */
/* @var $form CActiveForm */
?>

<div class="form" style=" width: 300px; overflow: hidden; text-align: right;">
    <?php
    $form = $this->beginWidget('CActiveForm', array(
        'id' => 'user-form',
        'enableAjaxValidation' => false,
    ));
    ?>
    <!--
        <p class="note">Fields with <span class="required">*</span> are required.</p>-->

    <?php echo $form->errorSummary($model); ?>

    <div class="row">

        <?php echo $form->labelEx($model, 'USER_NAME', array('class' => '', 'style' => 'display:inline-block;')); ?>
        <?php echo $form->textField($model, 'USER_NAME', array('class' => 'inputbox', 'style' => 'display:inline-block;')); ?>
        <?php echo $form->error($model, 'USER_NAME'); ?>
    </div>

    <div class="row">
        <?php echo $form->labelEx($model, 'PWD_HASH', array('class' => '', 'style' => 'display:inline-block;')); ?>
        <?php echo $form->passwordField($model, 'PWD_HASH', array('class' => 'inputbox', 'style' => 'display:inline-block;')); ?>
        <?php echo $form->error($model, 'PWD_HASH'); ?>
    </div>

    <div class="row">
        <?php echo $form->labelEx($model, 'repeat_password', array('class' => '', 'style' => 'display:inline-block;')); ?>
        <?php echo $form->passwordField($model, 'repeat_password', array('class' => 'inputbox', 'style' => 'display:inline-block;')); ?>
        <?php echo $form->error($model, 'repeat_password'); ?>
    </div>

    <div class="row">
        <?php echo $form->labelEx($model, 'EMAIL_ADDRESS', array('class' => '', 'style' => 'display:inline-block;')); ?>
        <?php echo $form->textField($model, 'EMAIL_ADDRESS', array('class' => 'inputbox', 'style' => 'display:inline-block;')); ?>
        <?php echo $form->error($model, 'EMAIL_ADDRESS'); ?>
    </div>


    <div style="font-size: 11px; width: 250px; margin: auto;">
        By clicking Sign Up you indicate that you have read and agreed to the <a href='#'>Terms of Use</a> and <a href='#'>Privacy Policy </a>.
    </div>



    <div class="row">
        <?php echo CHtml::submitButton($model->isNewRecord ? ' Sign Up' : 'Save', array('class' => 'new-btn green-btn', 'style' => 'text-align: center;margin-right: 75px;')); ?>
    </div>

    <?php $this->endWidget(); ?>

</div><!-- form -->
