<?php

/**
 *  Administration Control Panel Application Configuration
 *
 * @author: Jason Liddiard <jason@the-ebusiness-company.com>
 * Date: 24/02/13
 * Time: 4:15 PM
 *
 *         <?php $this->widget('common.modules.hybridauth.widgets.renderProviders'); ?>
 * 
 * This file holds the configuration settings of the Administration Control Panel application.
 * */
$app_administratorConfigDir = dirname(__FILE__);
//
$root = $app_administratorConfigDir . DIRECTORY_SEPARATOR . '..' . DIRECTORY_SEPARATOR . '..' . DIRECTORY_SEPARATOR . '..';
//
//// Setup some default path aliases. These alias may vary from projects.
Yii::setPathOfAlias('root', $root);
Yii::setPathOfAlias('common', $root . DIRECTORY_SEPARATOR . 'common' . DIRECTORY_SEPARATOR . 'protected');
Yii::setPathOfAlias('app_administrator', $root . DIRECTORY_SEPARATOR . 'app_administrator');
//Yii::setPathOfAlias('app_dashboard', $root . DIRECTORY_SEPARATOR . 'app_dashboard');
//Yii::setPathOfAlias('app_authentication', $root . DIRECTORY_SEPARATOR . 'app_authentication');
//Yii::setPathOfAlias('app_useraccount', $root . DIRECTORY_SEPARATOR . 'app_useraccount');
// The configuation tree overides in the following way...
// local settings below > environment specific > main configuration

$params = require_once($app_administratorConfigDir . DIRECTORY_SEPARATOR . 'params.php');
$mainLocalFile = $app_administratorConfigDir . DIRECTORY_SEPARATOR . 'main-local.php';
$mainLocalConfiguration = file_exists($mainLocalFile) ? require($mainLocalFile) : array();
$mainEnvFile = $app_administratorConfigDir . DIRECTORY_SEPARATOR . 'main-env.php';
$mainEnvConfiguration = file_exists($mainEnvFile) ? require($mainEnvFile) : array();

// This is the main Web application configuration. Any writable
// CWebApplication properties can be configured here.

$dot_positon = strpos($_SERVER['HTTP_HOST'], ".");

$domain = substr($_SERVER['HTTP_HOST'], $dot_positon);
//require_once  ('/home/devbox/NetBeansProjects/bds-v3.1/common/protected/config/domainSetting.php');
//$domainSetting = new DomainSetting();

return CMap::mergeArray(
                array(
            'basePath' => dirname(__FILE__) . DIRECTORY_SEPARATOR . '..',
            // set parameters
            'params' => $params,
            'name' => 'Administration Control Panel',
            'id' => $domain,
            // preloading 'log' component
            'preload' => array('log', 'bootstrap'),
            // @see http://www.yiiframework.com/doc/api/1.1/CApplication#language-detail
            'language' => 'en',
            // autoloading model and component classes
            'import' => array(
                'common.components.*',
                'common.components.auth.*',
                'common.extensions.*',
                'common.models.*',
                'common.modules.*',
                'application.vendor.autoload',
                'application.models.*',
                'application.components.app_restAPI',
                'application.controllers.*'
            ),
            'modules' => array(
                'gii' => array(
                    'class' => 'system.gii.GiiModule',
                    'password' => 'Pa55word',
                    // If removed, Gii defaults to localhost only. Edit carefully to taste. 
                    'ipFilters' => array('127.0.0.1', '::1', '192.168.2.217'),
                ),
            ),
            // application components
            'components' => array(
//                'user' => array(
//                    'allowAutoLogin' => true,
//                    'class' => 'AuthWebUser',
//                    'identityCookie' => array(
//                        'domain' => $domain,
//                    ),
//                ),
//                'authManager' => array(
//                    'class' => 'CDbAuthManager',
//                    'behaviors' => array(
//                        'auth' => array(
//                            'class' => 'AuthBehavior',
//                            'admins' => array('', '', ''), // users with full access
//                        ),
//                    ),
//                ),
//                'session' => array(
//                    'sessionName' => 'Session',
//                    'class' => 'CDbHttpSession',
//                    //  'autoCreateSessionTable' => true,
//                    'connectionID' => 'db',
//                    'sessionTableName' => 'usersession',
//                    //    'useTransparentSessionID' => ($_POST['PHPSESSID']) ? true : false,
//                    'useTransparentSessionID' => true,
//                    'autoStart' => 'true',
//                    'cookieMode' => 'only',
//                    'cookieParams' => array(
//                        'path' => '/',
//                        'domain' => $domain,
//                        'httpOnly' => true,
//                    ),
//                //       'timeout' => 1800,
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
                    'connectionString' => 'dblib:host=125.236.58.231;dbname=Trends2012;port:1433;',
                    'username' => 'platform',
                    'password' => 'L86wBWVeKYKuqKZQ',
                    // 'tablePrefix'=>'dbo',
//                    'schemaCachingDuration' => YII_DEBUG ? 0 : 86400000, // 1000 days
//                    'enableParamLogging' => YII_DEBUG,
                    'charset' => 'utf8'
                ),
                'db_hubsrv' => array(
                    'class' => 'CDbConnection',
                    'connectionString' => 'mysql:host=db1.hubsrv.com;dbname=hubstar_import_logger;',
                    'username' => 'db_user',
                    'password' => 'Pa55word',
                    // 'tablePrefix'=>'dbo',
//                    'schemaCachingDuration' => YII_DEBUG ? 0 : 86400000, // 1000 days
//                    'enableParamLogging' => YII_DEBUG,
                    'charset' => 'utf8')
//                'db' => array(
//                    'class' => 'CDbConnection',
//                    'connectionString' => $params['db_admin.connectionString'],
//                    'username' => $params['db_admin.username'],
//                    'password' => $params['db_admin.password'],
//                    'schemaCachingDuration' => YII_DEBUG ? 0 : 86400000, // 1000 days
//                    'enableParamLogging' => YII_DEBUG,
//                    'charset' => 'utf8'
//                ),
//                'db_live' => array(
//                    'class' => 'CDbConnection',
//                    'connectionString' => $params['db_live.connectionString'],
//                    'username' => $params['db_live.username'],
//                    'password' => $params['db_live.password'],
//                    'schemaCachingDuration' => YII_DEBUG ? 0 : 86400000, // 1000 days
//                    'enableParamLogging' => YII_DEBUG,
//                    'charset' => 'utf8'
//                ),
//                'errorHandler' => array(
//                    'errorAction' => 'site/error',
//                ),
//                'log' => array(
//                    'class' => 'CLogRouter',
//                    'routes' => array(
//                        array(
//                            'class' => 'CFileLogRoute',
//                            'levels' => 'error, warning',
//                        ),
//                        // uncomment the following to show log messages on web pages
//                        array(
//                            'class' => 'CWebLogRoute',
//                        ),
//                    ),
//                ),
            ),
                ), CMap::mergeArray($mainEnvConfiguration, $mainLocalConfiguration)
);
