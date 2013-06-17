<div class="form" style="color: white; text-shadow: 0 0 10px #333;">
    <div style="width: 100%;height: 100%;position: absolute;z-index: -1;overflow: hidden;">
        <img style="width: 100%;" src="../../../../../../../images/defaultbg6.jpg" />
    </div>

    <?php
    $form = $this->beginWidget('CActiveForm', array(
        'id' => 'create-user-form',
        'enableAjaxValidation' => false,
    ));

//   $config = '/home/devbox/NetBeansProjects/bds-v3.1/app_useraccount/protected/config/provider_config.php';

    $config = Yii::app()->getBasePath() . '/config/provider_config.php';

    try {



        $config = Yii::app()->getBasePath() . '/../../common/protected/modules/hybridauth/config/provider_config.php';
        require_once( Yii::app()->getBasePath() . '/../../common/protected/modules/hybridauth/Hybrid/Auth.php');

        $hybridauth = new Hybrid_Auth($config);
        $adapter = $hybridauth->authenticate($_GET['provider']);
        $user_profile = $adapter->getUserProfile();


        $rand_id = strval(rand(99999999999999, 999999999999999));
        $user->COUCHBASE_ID = $rand_id;
        $user->USER_NAME = $user_profile->displayName;
        $user->EMAIL_ADDRESS = $user_profile->email;
        $user->LAST_NAME = $user_profile->lastName;
        $user->FIRST_NAME = $user_profile->firstName;
    } catch (Exception $e) {
        echo "Ooophs, we got an error: " . $e->getMessage();
    }
    ?>






    <div style="width: 250px; margin: auto; height: 100%;padding: 40px 0; text-align: center;">

        <div style="font-size: 32px; line-height: 30px; font-weight: bold; margin-bottom: 20px; top: 20px; position: relative;">Hi Jason!! </div>
        <div style="padding: 10px 0 20px; font-size: 13px;">Please enter your email address to create your profile.</div>
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
        <div class="row" >
            <?php echo CHtml::submitButton($user->isNewRecord ? 'Create' : 'Save', array('class' => 'new-btn green-btn',)); ?>
        </div>

        <div class="row" style="opacity:0">

            <?php echo $form->textField($user, 'COUCHBASE_ID'); ?>

        </div>
    </div>




    <?php $this->endWidget(); ?>

</div><!-- form -->
