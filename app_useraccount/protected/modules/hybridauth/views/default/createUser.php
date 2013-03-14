<div class="form">
    <h1>Choose a username and an email address</h1>

    <?php
    $form = $this->beginWidget('CActiveForm', array(
        'id' => 'create-user-form',
        'enableAjaxValidation' => false,
    ));
    echo  Yii::app()->getBaseUrl().'aaaaaaaaaa.</br>';
    echo  Yii::app()->getBasePath().'bbbbbbbbbbbbbbbbbb</br>';
    
//   $config = '/home/devbox/NetBeansProjects/bds-v3.1/app_useraccount/protected/config/provider_config.php';

  $config = Yii::app()->getBasePath().'/config/provider_config.php';

   require_once(  Yii::app()->getBasePath().'/modules/hybridauth/Hybrid/Auth.php');
//    require_once( '/home/devbox/NetBeansProjects/bds-v3.1/app_useraccount/protected/modules/hybridauth/Hybrid/Auth.php' );

    try {

        $hybridauth = new Hybrid_Auth($config);

        //   $adapter = $hybridauth->authenticate("Facebook");
        $adapter = $hybridauth->authenticate($_GET['provider']);


// return Hybrid_User_Profile object intance
        $user_profile = $adapter->getUserProfile();

       
    } catch (Exception $e) {
        echo "Ooophs, we got an error: " . $e->getMessage();
    }
    ?>

    <p class="note">Fields with <span class="required">*</span> are required.</p>

    <?php echo $form->errorSummary($user); ?>


    <div class="row">
        <?php echo $form->labelEx($user, 'USER_NAME'); ?>
        <?php
        echo $form->textField($user, 'USER_NAME', array(
            'value' => $user_profile->displayName,
                )
        );
        ?>

        <?php echo $form->error($user, 'USER_NAME'); ?>
    </div>



    <div class="row">
        <?php echo $form->labelEx($user, 'EMAIL_ADDRESS'); ?>
        <?php
        echo $form->textField($user, 'EMAIL_ADDRESS', array(
            'value' => $user_profile->email,
                )
        );
        ?>

        <?php echo $form->error($user, 'EMAIL_ADDRESS'); ?>
    </div>






    <div class="row buttons">
        <?php echo CHtml::submitButton($user->isNewRecord ? 'Create' : 'Save'); ?>
    </div>

    <?php $this->endWidget(); ?>

</div><!-- form -->