<div class="form">
    <h1>Choose a username and an email address</h1>

    <?php
    $form = $this->beginWidget('CActiveForm', array(
        'id' => 'create-user-form',
        'enableAjaxValidation' => false,
    ));
    ?>

    <p class="note">Fields with <span class="required">*</span> are required.</p>



    <div class="row">
        <?php echo $form->labelEx($user, 'USER_NAME'); ?>
        <?php echo $form->textField($user, 'USER_NAME'); ?>
        <?php echo $form->error($user, 'USER_NAME'); ?>
    </div>



    <div class="row">
        <?php echo $form->labelEx($user, 'EMAIL_ADDRESS'); ?>
        <?php echo $form->textField($user, 'EMAIL_ADDRESS'); ?>
        <?php echo $form->error($user, 'EMAIL_ADDRESS'); ?>
    </div>


    <div class="row buttons">
        <?php echo CHtml::submitButton($user->isNewRecord ? 'Create' : 'Save'); ?>
    </div>

    <?php $this->endWidget(); ?>

</div><!-- form -->