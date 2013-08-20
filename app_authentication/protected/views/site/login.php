<?php
/* @var $this SiteController */
/* @var $model LoginForm */
/* @var $form CActiveForm  */

$this->pageTitle = Yii::app()->name . ' - Login';
$this->breadcrumbs = array(
    'Login',
);
?>




<!--<h1>Login</h1>-->

<!--<p>Please fill out the following form with your login credentials:</p>-->

<div class="form" style="width: 250px;">
    <?php
    $form = $this->beginWidget('CActiveForm', array(
        'id' => 'login-form',
        'enableClientValidation' => true,
        'clientOptions' => array(
            'validateOnSubmit' => true,
        ),
    ));
    ?>

<!--    <p class="note">Fields with <span class="required">*</span> are required.</p>-->
    <div style="text-align: right;">
        <div class="row">
            <?php echo $form->labelEx($model, 'username', array('class' => '', 'style' => 'display:inline-block;')); ?>
            <?php echo $form->textField($model, 'username', array('class' => 'inputbox')); ?>

        </div>

        <div class="row">
            <?php echo $form->labelEx($model, 'password', array('class' => '', 'style' => 'display:inline-block;')); ?>
            <?php echo $form->passwordField($model, 'password', array('class' => 'inputbox')); ?>

    <!--        <p class="hint">
                Hint: You may login with <kbd>demo</kbd>/<kbd>demo</kbd> or <kbd>admin</kbd>/<kbd>admin</kbd>.
            </p>-->
        </div>
    </div>
    <div class="row rememberMe" style='text-align:center;'>
        <?php echo $form->checkBox($model, 'rememberMe'); ?>
        <?php echo $form->label($model, 'rememberMe'); ?>
        <?php echo $form->error($model, 'rememberMe'); ?>
    </div>

    <div class="row buttons" style="text-align: center; margin: 10px 0 10px 75px;">
        <?php echo CHtml::submitButton('Login', array('class' => 'ifame_login new-btn green-btn')); ?>
    </div>

    <?php $this->endWidget(); ?>
</div><!-- form -->
