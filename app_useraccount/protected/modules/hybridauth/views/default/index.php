<?php // $this->widget('application.modules.hybridauth.widgets.renderProviders');  ?>



<?php

// start a new session (required for Hybridauth)
//session_start();
// change the following paths if necessary
//$config = dirname(__FILE__) . '/library/config.php';
$config = '/home/ubuntu/platform/hubstar/app_useraccount/protected/config/main.php';
echo dirname(__FILE__);
require_once( '/home/ubuntu/platform/hubstar/app_useraccount/protected/modules/hybridauth/Hybrid/Auth.php' );

try{
$hybridauth = new Hybrid_Auth( $config );
 
# try to authenticate with some providers
 
$facebook = $hybridauth->authenticate( "Facebook" );
 
$twitter = $hybridauth->authenticate( "Twitter" );
 
# now try to play with theses social apis
# Facebook: https://developers.facebook.com/docs/reference/api/
// ask facebook for friends list
$response = $facebook->api()->api('/me/friends');
// Post to the user wall
$response = $facebook->api()->api("/me/feed", "post", array(
message => "Hi there",
picture => "http://www.mywebsite.com/path/to/an/image.jpg",
link => "http://www.mywebsite.com/path/to/a/page/",
name => "My page name",
caption => "And caption"
));
# Twitter: https://dev.twitter.com/docs/api
// Returns the current count of friends, followers, updates (statuses) ...
$response = $twitter->api()->get( 'account/totals.json' );
 
// You get the point
}
catch( Exception $e ){
echo "Ooophs, we got an error: " . $e->getMessage();
}