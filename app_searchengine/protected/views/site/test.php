<div class="form">
    <?php
    $form = $this->beginWidget('CActiveForm', array(
        'id' => 'test-form',
        'enableClientValidation' => true,
        'clientOptions' => array(
            'validateOnSubmit' => true,
        ),
    ));

    $model = new TestForm;
    ?>

    <p class="note">Fields with <span class="required">*</span> are required.</p>

    <div class="row">
        <?php echo $form->labelEx($model, 'username'); ?>
        <?php echo $form->textField($model, 'username'); ?>
        <?php echo $form->error($model, 'username'); ?>
    </div>

    <div class="row">
        <?php echo $form->labelEx($model, 'message'); ?>
        <?php echo $form->textField($model, 'message'); ?>
        <?php echo $form->error($model, 'message'); ?>
    </div>


    <div class="row buttons">
        <?php echo CHtml::submitButton('summit'); ?>
    </div>

    <?php $this->endWidget(); ?>
</div><!-- form -->


<?php

?>

