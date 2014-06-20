<?php

/**
 *  Client Dashboard Application Configuration
 *
 * @author: Jason Liddiard <jason@the-ebusiness-company.com>
 * Date: 24/02/13
 * Time: 4:15 PM
 *
 * This file holds the configuration settings of the Client Dashboard application.
 * */
$app_dashboardConfigDir = dirname(__FILE__);
//
$root = $app_dashboardConfigDir . DIRECTORY_SEPARATOR . '..' . DIRECTORY_SEPARATOR . '..' . DIRECTORY_SEPARATOR . '..';
//
//// Setup some default path aliases. These alias may vary from projects.
Yii::setPathOfAlias('root', $root);
Yii::setPathOfAlias('common', $root . DIRECTORY_SEPARATOR . 'common' . DIRECTORY_SEPARATOR . 'protected');
Yii::setPathOfAlias('app_dashboard', $root . DIRECTORY_SEPARATOR . 'app_dashboard');

// The configuation tree overides in the following way...
// local settings below > environment specific > main configuration

$params = require_once($app_dashboardConfigDir . DIRECTORY_SEPARATOR . 'params.php');

$mainLocalFile = $app_dashboardConfigDir . DIRECTORY_SEPARATOR . 'main-local.php';
$mainLocalConfiguration = file_exists($mainLocalFile) ? require($mainLocalFile) : array();

$mainEnvFile = $app_dashboardConfigDir . DIRECTORY_SEPARATOR . 'main-env.php';
$mainEnvConfiguration = file_exists($mainEnvFile) ? require($mainEnvFile) : array();

// This is the main Web application configuration. Any writable
// CWebApplication properties can be configured here.

$dot_positon = strpos($_SERVER['HTTP_HOST'], ".");

$domain = substr($_SERVER['HTTP_HOST'], $dot_positon);

return CMap::mergeArray(
                array(
            'basePath' => dirname(__FILE__) . DIRECTORY_SEPARATOR . '..',
            // set parameters
            'params' => $params,
            'name' => 'Client Dashboard',
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
                'application.models.*',
                'application.components.*',
            ),
            'modules' => array(
                'gii' => array(
                    'class' => 'system.gii.GiiModule',
                    'password' => 'Pa55word',
                    // If removed, Gii defaults to localhost only. Edit carefully to taste.
                    'ipFilters' => array('127.0.0.1', '::1'),
                    'generatorPaths' => array(
                        'bootstrap.gii'
                    ),
                ),
            ),
            // application components
            'components' => array(
                'user' => array(
                    // enable cookie-based authentication
                    'allowAutoLogin' => true,
                    'class' => 'AuthWebUser',
                    'identityCookie' => array(
                        'domain' => $domain,
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
                'session' => array(
                    'sessionName' => 'Session',
                    'class' => 'CDbHttpSession',
                    //  'autoCreateSessionTable' => true,
                    'connectionID' => 'db',
                    'sessionTableName' => 'usersession',
                    //    'useTransparentSessionID' => ($_POST['PHPSESSID']) ? true : false,
                    'useTransparentSessionID' => true,
                    'autoStart' => 'true',
                    'cookieMode' => 'only',
                    'cookieParams' => array(
                        'path' => '/',
                        'domain' => $domain,
                        'httpOnly' => true,
                    ),
                //   'timeout' => 1800,
                ),
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
                    ),
                ),
            ),
            'params' => array(
// this is used in contact page
                'adminEmail' => 'webmaster@example.com',
                // this the primary elastic search server and index
                'elasticSearchNode' => $params['elasticSearch.node'], //'es1.hubsrv.com'
                'elasticSearchIndex' => $params['elasticSearch.index'], //test
                'couchBaseNode' => $params['couchBase.node'],
                'couchBaseBucket' => $params['couchBase.bucket'],
                'couchBaseAccount' => $params['couchBase.account'],
                'couchBasePasswrd' => $params['couchBase.password'],
                //---------------------------
                'couchBaseDefaultNode' => $params['couchBase.defaultNode'],
                'couchBaseDefaultBucket' => $params['couchBase.defaultBucket'],
                'couchBaseDefaultAccount' => $params['couchBase.defaultAccount'],
                'couchBaseDefaultPasswrd' => $params['couchBase.defaultPassword'],
            ),
                ), CMap::mergeArray($mainEnvConfiguration, $mainLocalConfiguration)
);
