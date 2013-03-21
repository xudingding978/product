<?php
/* @var $this UserController */
/* @var $data User */
?>

<div class="view">
    <b>
        <?php echo CHtml::encode($data->getAttributeLabel('REC_ID')); ?>:
    </b>
    <?php echo CHtml::link(CHtml::encode($data->REC_ID), array('view', 'id' => $data->REC_ID)); ?>
    <br />

    <b>
        <?php echo CHtml::encode($data->getAttributeLabel('USER_NAME')); ?>:
    </b>
    <?php echo CHtml::encode($data->USER_NAME); ?>
    <br />

    <b>
        <?php echo CHtml::encode($data->getAttributeLabel('PWD_HASH')); ?>:
    </b>
    <?php echo CHtml::encode($data->PWD_HASH); ?>
    <br />
    <b>
        <?php echo CHtml::encode('Social Profiles'); ?>:
    </b>
        <?php
        foreach ($data->userprofile as $prof) {
            echo CHtml::link(CHtml::encode($prof->DISPLAY_NAME . " " . $prof->LOGIN_PROVIDER), array('/userProfile/' . $prof->REC_ID))."<br />";
        };
        ?>
    <br />
</div>
