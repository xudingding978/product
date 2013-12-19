<div class="form" style="color: white; text-shadow: 0 0 10px #333;">
    <div style="width: 100%;height: 100%;position: absolute;z-index: -1;overflow: hidden;">
        <img style="width: 100%;" src="../../../../../../../images/defaultbg6.jpg" />
    </div>

    <?php
    $form = $this->beginWidget('CActiveForm', array(
        'id' => 'create-user-form',
        'enableAjaxValidation' => false,
    ));

    $config = Yii::app()->getBasePath() . '/config/provider_config.php';

    try {
        $config = Yii::app()->getBasePath() . '/../../app_authentication/protected/modules/hybridauth/config/provider_config.php';
        require_once( Yii::app()->getBasePath() . '/../../app_authentication/protected/modules/hybridauth/Hybrid/Auth.php');

        $hybridauth = new Hybrid_Auth($config);
        $adapter = $hybridauth->authenticate($_GET['provider']);
        $user_profile = $adapter->getUserProfile(false);
       
        
        $rand_id = strval(rand(9999999999, 99999999999));

        $user->COUCHBASE_ID = $rand_id;
        $user->PWD_HASH = "blankblankblank";
        $user->repeat_password = "blankblankblank";
        $user->USER_NAME = $user_profile->displayName;
        $user->EMAIL_ADDRESS = $user_profile->email;
        $user->LAST_NAME = $user_profile->lastName;
        $user->FIRST_NAME = $user_profile->firstName;
    } catch (Exception $e) {
        echo "Ooophs, we got an error: " . $e->getMessage();
    }
    ?>






    <div style="width:100%; margin: auto; height: 100%;padding: 30px 0; text-align: center;">

        <div style="font-size: 32px; line-height: 30px; font-weight: bold; margin-bottom: 20px; top: 20px; position: relative;">Hi <?PHP echo $user->USER_NAME; ?></div>
        <div style="padding: 10px 0 20px; font-size: 13px;">Please enter your email address to create your profile.</div>
        <div class="row">
            <?php echo $form->labelEx($user, 'USER_NAME', array('style' => 'margin-bottom:10px; font-size:16px;')); ?>
            <?php echo $form->textField($user, 'USER_NAME', array('class' => 'inputbox')); ?>
            <?php echo $form->error($user, 'USER_NAME'); ?>
        </div>

        <div class="row">
            <?php echo $form->labelEx($user, 'EMAIL_ADDRESS', array('style' => 'margin-bottom:10px; font-size:16px;')); ?>
            <?php echo $form->textField($user, 'EMAIL_ADDRESS', array('class' => 'inputbox')); ?>
            <?php echo $form->error($user, 'EMAIL_ADDRESS'); ?>
        </div>



        <div class="row" >
            <?php echo CHtml::submitButton($user->isNewRecord ? 'Create' : 'Save', array('class' => 'new-btn green-btn', 'style' => 'width:170px; margin-top:20px')); ?>
        </div>

        <div class="row"  style="opacity:0">
            <?php echo $form->labelEx($user, 'LAST_NAME'); ?>
            <?php echo $form->textField($user, 'LAST_NAME'); ?>
            <?php echo $form->error($user, 'LAST_NAME'); ?>
        </div>


        <div class="row"  style="opacity:0">
            <?php echo $form->labelEx($user, 'FIRST_NAME'); ?>
            <?php echo $form->textField($user, 'FIRST_NAME'); ?>
            <?php echo $form->error($user, 'FIRST_NAME'); ?>
        </div>



        <div class="row" style="opacity:0">

            <?php echo $form->textField($user, 'COUCHBASE_ID'); ?>

        </div>
        <div class="row" style="opacity:0">

            <?php echo $form->textField($user, 'PWD_HASH'); ?>

        </div>
        <div class="row" style="opacity:0">

            <?php echo $form->textField($user, 'repeat_password'); ?>

        </div>


    </div>




    <?php $this->endWidget(); ?>

</div><!-- form -->
