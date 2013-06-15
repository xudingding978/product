<div class="form" style="margin: 10% 0;box-shadow: 0 0 50px 10px #999;">


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






    <div style="width: 250px; margin: 0 auto; height: 80%;">

        <div style=" font-size: 30px; line-height: 30px; font-weight: bold; margin: 40px 0; top: 20px; position: relative;">Hi Jason!! </div>
        <div>One step to start!</div>
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

        <div class="row" style="opacity:0">

            <?php echo $form->textField($user, 'COUCHBASE_ID'); ?>

        </div>
    </div>




    <?php $this->endWidget(); ?>

</div><!-- form -->
