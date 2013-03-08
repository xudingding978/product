<?php

/**
 *  User Account Application Configuration
 *
 * @author: Jason Liddiard <jason@the-ebusiness-company.com>
 * Date: 24/02/13
 * Time: 4:15 PM
 *
 * This file holds the configuration settings of the User Account application.
 * */
$app_useraccountConfigDir = dirname(__FILE__);
//
$root = $app_useraccountConfigDir . DIRECTORY_SEPARATOR . '..' . DIRECTORY_SEPARATOR . '..' . DIRECTORY_SEPARATOR . '..';
//
//// Setup some default path aliases. These alias may vary from projects.
Yii::setPathOfAlias('root', $root);
Yii::setPathOfAlias('common', $root . DIRECTORY_SEPARATOR . 'common' . DIRECTORY_SEPARATOR . 'protected');
Yii::setPathOfAlias('app_administrator', $root . DIRECTORY_SEPARATOR . 'app_administrator');
Yii::setPathOfAlias('app_authority', $root . DIRECTORY_SEPARATOR . 'app_authority');
Yii::setPathOfAlias('app_dashboard', $root . DIRECTORY_SEPARATOR . 'app_dashboard');
Yii::setPathOfAlias('app_searchengine', $root . DIRECTORY_SEPARATOR . 'app_searchengine');
Yii::setPathOfAlias('app_useraccount', $root . DIRECTORY_SEPARATOR . 'app_useraccount');

// The configuation tree overides in the following way...
// local settings below > environment specific > main configuration

$params = require_once($app_useraccountConfigDir . DIRECTORY_SEPARATOR . 'params.php');

$mainLocalFile = $app_useraccountConfigDir . DIRECTORY_SEPARATOR . 'main-local.php';
$mainLocalConfiguration = file_exists($mainLocalFile) ? require($mainLocalFile) : array();

$mainEnvFile = $app_useraccountConfigDir . DIRECTORY_SEPARATOR . 'main-env.php';
$mainEnvConfiguration = file_exists($mainEnvFile) ? require($mainEnvFile) : array();

// This is the main Web application configuration. Any writable
// CWebApplication properties can be configured here.

$dot_positon=strpos($_SERVER['HTTP_HOST'],".");

$domain=substr($_SERVER['HTTP_HOST'],$dot_positon);




return CMap::mergeArray(
                array(
            'basePath' => dirname(__FILE__) . DIRECTORY_SEPARATOR . '..',
            // set parameters
            'params' => $params,
            'name' => 'User Account',
            'id' => $domain,
            // preloading 'log' component
            'preload' => array('log', 'bootstrap'),
            // @see http://www.yiiframework.com/doc/api/1.1/CApplication#language-detail
            'language' => 'en',
            // autoloading model and component classes
            'import' => array(
                'common.components.*',
                'common.extensions.*',
                'common.models.*',
                'application.models.*',
                'application.components.*',
            ),
            'modules' => array(
                'hybridauth' => array(
                    'baseUrl' => 'http://' . $_SERVER['HTTP_HOST'] . '/hybridauth',
                    'withYiiUser' => false, // Set to true if using yii-user
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
                            "keys" => array("id" => "", "secret" => ""),
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
                    )
                ),
            ),
            // application components
            'components' => array(
                'user' => array(
                    // enable cookie-based authentication
                    'allowAutoLogin' => true,
                    //        'class' => 'MyWebUser',
                    'class' => 'AuthWebUser',
                    'identityCookie' => array(
                        'domain' =>$domain
                    ),
                ),
                'authManager' => array(
                    'class' => 'CDbAuthManager',
                    'behaviors' => array(
                        'auth' => array(
                            'class' => 'AuthBehavior',
                            'admins' => array('', '', ''), // users with full access
                        ),
                    ),
                ),
//                'session' => array(
//                    'sessionName' => 'Session',
//                    'class' => 'CDbHttpSession',
//                    //  'autoCreateSessionTable' => true,
//                    'connectionID' => 'db',
//                    'sessionTableName' => 'tpl_user_session',
//                    //    'useTransparentSessionID' => ($_POST['PHPSESSID']) ? true : false,
//                    'useTransparentSessionID' => true,
//                    'autoStart' => 'true',
//                    'cookieMode' => 'only',
//                    'cookieParams' => array(
//                        'path' => '/',
//                        'domain' => $domain,
//                        'httpOnly' => true,
//                    ),
//                    'timeout' => 300,
//                ),
                'bootstrap' => array(
                    'class' => 'common.extensions.bootstrap.components.Bootstrap',
                    'responsiveCss' => true,
                ),
                // Url Manager from YiiBoilerPlate
                'urlManager' => array(
                    'urlFormat' => 'path',
                    'showScriptName' => false,
                    'urlSuffix' => '/',
                    'rules' => $params['url.rules']
                ),
                'db' => array(
                    'class' => 'CDbConnection',
                    'connectionString' => $params['db_admin.connectionString'],
                    'username' => $params['db_admin.username'],
                    'password' => $params['db_admin.password'],
                    'schemaCachingDuration' => YII_DEBUG ? 0 : 86400000, // 1000 days
                    'enableParamLogging' => YII_DEBUG,
                    'charset' => 'utf8'
                ),
                'db_live' => array(
                    'class' => 'CDbConnection',
                    'connectionString' => $params['db_live.connectionString'],
                    'username' => $params['db_live.username'],
                    'password' => $params['db_live.password'],
                    'schemaCachingDuration' => YII_DEBUG ? 0 : 86400000, // 1000 days
                    'enableParamLogging' => YII_DEBUG,
                    'charset' => 'utf8'
                ),
                'errorHandler' => array(
                    // use 'site/error' action to display errors
                    'errorAction' => 'site/error',
                ),
                'log' => array(
                    'class' => 'CLogRouter',
                    'routes' => array(
                        array(
                            'class' => 'CFileLogRoute',
                            'levels' => 'error, warning',
                        ),
                        // uncomment the following to show log messages on web pages
                        ///*
                        array(
                            'class' => 'CWebLogRoute',
                        ),
                    //*/
                    ),
                ),
            ),
                ), CMap::mergeArray($mainEnvConfiguration, $mainLocalConfiguration)
);
