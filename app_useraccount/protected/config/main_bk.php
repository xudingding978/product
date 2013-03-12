

<?php

/* !
 * HybridAuth
 * http://hybridauth.sourceforge.net | http://github.com/hybridauth/hybridauth
 * (c) 2009-2012, HybridAuth authors | http://hybridauth.sourceforge.net/licenses.html
 */

// ----------------------------------------------------------------------------------------
//	HybridAuth Config file: http://hybridauth.sourceforge.net/userguide/Configuration.html
// ----------------------------------------------------------------------------------------

return
        array(
            "base_url" =>  'http://'.$_SERVER['HTTP_HOST'].'/hybridauth',
            "providers" => array(
                "OpenID" => array(
                    "enabled" => true
                ),
                "Yahoo" => array(
                    "enabled" => true
                ),
                "Google" => array(
                    "enabled" => true,
                    "keys" => array("id" => "229536460581.apps.googleusercontent.com", "secret" => "P5ewnNOsUD4a6chOsf-V7C6n"),
                    "scope" => ""
                ),
                "Live" => array(
                    "enabled" => true,
                    "keys" => array("id" => "00000000400ED656", "secret" => "mM8x15UDeuXNbjlBCTFapZfr7G8fizh4"),
                ),
                "Facebook" => array(
                    "enabled" => true,
                    "keys" => array("id" => "351417541640384", "secret" => "545a09525ae4bd0769174d12f6986f7c"),
                    "scope" => "publish_stream",
                    "display" => "page"
                ),
                "Twitter" => array(
                    "enabled" => true,
                    "keys" => array("key" => "T8gsComi9Nt391cKHMJcw", "secret" => "D5jSS3jC7n4kxOdUwYPebgoXqrckbEcFikUppUNA0")
                ),
                "QQ" => array(
                    "enabled" => true,
                    "keys" => array("key" => "801323043", "secret" => "619b9dbc531ebfea8c674d0eb8c03478")
                ),
                "Sina" => array(
                    "enabled" => true,
                    "keys" => array("key" => "1988690508", "secret" => "bd472b4386849450e9287521ba4dd889")
                ),
            ),
// if you want to enable logging, set 'debug_mode' to true  then provide a writable file by the web server on "debug_file"
            "debug_mode" => false,
            "debug_file" => "",
);