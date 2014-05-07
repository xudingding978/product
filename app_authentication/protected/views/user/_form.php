<?php
/* @var $this UserController */
/* @var $model User */
/* @var $form CActiveForm */
?>

<div class="form" style=" width: 300px; overflow: hidden; text-align: right;">
    <?php
    $form = $this->beginWidget('CActiveForm', array(
        'id' => 'create-user-form',
        'enableAjaxValidation' => false,
    ));
    ?>
    <!--
        <p class="note">Fields with <span class="required">*</span> are required.</p>-->



    <div class="row">

        <?php echo $form->labelEx($model, 'USER_NAME', array('class' => '', 'style' => 'display:inline-block;')); ?>
        <?php echo $form->textField($model, 'USER_NAME', array('class' => 'inputbox', 'style' => 'display:inline-block;')); ?>
        <?php echo $form->error($model, 'USER_NAME'); ?>
    </div>

    <div class="row">
        <?php echo $form->labelEx($model, 'PWD_HASH', array('class' => '', 'style' => 'display:inline-block;')); ?>
        <?php echo $form->passwordField($model, 'PWD_HASH', array('class' => 'inputbox', 'style' => 'display:inline-block;', 'placeholder' => "Minimum 6 characters")); ?>

    </div>

    <div class="row">
        <?php echo $form->labelEx($model, 'repeat_password', array('class' => '', 'style' => 'display:inline-block;')); ?>
        <?php echo $form->passwordField($model, 'repeat_password', array('class' => 'inputbox', 'style' => 'display:inline-block;', 'placeholder' => "Minimum 6 characters")); ?>

    </div>

    <div class="row">
        <?php echo $form->labelEx($model, 'EMAIL_ADDRESS', array('class' => '', 'style' => 'display:inline-block;')); ?>
        <?php echo $form->textField($model, 'EMAIL_ADDRESS', array('class' => 'inputbox', 'style' => 'display:inline-block;')); ?>
        <?php echo $form->error($model, 'EMAIL_ADDRESS'); ?>
    </div>


    <div style="font-size: 11px; width: 250px; margin: auto;">

        By clicking Sign Up you indicate that you have read and agreed to the <a href='#'>Terms of Use</a> and <a href='#'>Privacy Policy </a>.
    </div>

    <!-- Facebook Conversion Code for Lead -->
    <script type="text/javascript">
        var fb_param = {};
        fb_param.pixel_id = '6013885366274';
        fb_param.value = '0.01';
        fb_param.currency = 'USD';
        (function() {
            var fpw = document.createElement('script');
            fpw.async = true;
            fpw.src = '//connect.facebook.net/en_US/fp.js';
            var ref = document.getElementsByTagName('script')[0];
            ref.parentNode.insertBefore(fpw, ref);
        })();
    </script>
    <noscript><img height="1" width="1" alt="" style="display:none" src="https://www.facebook.com/offsite_event.php?id=6013885366274&amp;value=0.01&amp;currency=USD" /></noscript>

    <div class="row">
        <?php echo CHtml::submitButton($model->isNewRecord ? ' Sign Up' : 'Save', array('class' => 'new-btn green-btn', 'style' => 'text-align: center;margin-right: 75px;')); ?>
    </div>

    <?php $this->endWidget(); ?>

</div><!-- form -->
