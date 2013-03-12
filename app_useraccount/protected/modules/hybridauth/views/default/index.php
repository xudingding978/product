<?php // $this->widget('application.modules.hybridauth.widgets.renderProviders');  ?>



<?php

// start a new session (required for Hybridauth)
//session_start();
 
//$config = '/home/ubuntu/platform/hubstar/app_useraccount/protected/config/main_bk.php';
$config = '/home/ubuntu/platform/hubstar/app_useraccount/protected/config/main.php';
echo dirname(__FILE__);
require_once( '/home/ubuntu/platform/hubstar/app_useraccount/protected/modules/hybridauth/Hybrid/Auth.php' );


$hybridauth = new Hybrid_Auth( $config );
 

 
 // try to authenticate with twitter
$adapter = $hybridauth->authenticate( "Twitter" );
 
// return Hybrid_User_Profile object intance
$user_profile = $adapter->getUserProfile();
 
echo "Hi there! " . $user_profile->displayName;