<div class="form">
    <h1>Choose a username and an email address</h1>

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

    <p class="note">Fields with <span class="required">*</span> are required.</p>


    <?php echo $form->errorSummary($user); ?>
    

    <div class="row">
        <?php echo $form->labelEx($user, 'USER_NAME'); ?>
        <?php echo $form->textField($user, 'USER_NAME'); ?>
        <?php echo $form->error($user, 'USER_NAME'); ?>
    </div>

    <div class="row">
        <?php echo $form->labelEx($user, 'LAST_NAME'); ?>
        <?php echo $form->textField($user, 'LAST_NAME'); ?>
        <?php echo $form->error($user, 'LAST_NAME'); ?>
    </div>


    <div class="row">
        <?php echo $form->labelEx($user, 'FIRST_NAME'); ?>
        <?php echo $form->textField($user, 'FIRST_NAME'); ?>
        <?php echo $form->error($user, 'FIRST_NAME'); ?>
    </div>

    <div class="row">
        <?php echo $form->labelEx($user, 'EMAIL_ADDRESS'); ?>
        <?php echo $form->textField($user, 'EMAIL_ADDRESS'); ?>
        <?php echo $form->error($user, 'EMAIL_ADDRESS'); ?>
    </div>


    <div class="row" style="opacity:0">
   
        <?php echo $form->textField($user, 'COUCHBASE_ID'); ?>

    </div>



    <div class="row buttons">
        <?php echo CHtml::submitButton($user->isNewRecord ? 'Create' : 'Save'); ?>
    </div>

    <?php $this->endWidget(); ?>

</div><!-- form -->
