<?php

/**
 *  Search Engine Application Configuration
 *
 * @author: Jason Liddiard <jason@the-ebusiness-company.com>
 * Date: 24/02/13
 * Time: 4:15 PM
 *
 * This file holds the configuration settings of the Search Engine application.
 * */
$app_searchengineConfigDir = dirname(__FILE__);
//
$root = $app_searchengineConfigDir . DIRECTORY_SEPARATOR . '..' . DIRECTORY_SEPARATOR . '..' . DIRECTORY_SEPARATOR . '..';
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

$params = require_once($app_searchengineConfigDir . DIRECTORY_SEPARATOR . 'params.php');

$mainLocalFile = $app_searchengineConfigDir . DIRECTORY_SEPARATOR . 'main-local.php';
$mainLocalConfiguration = file_exists($mainLocalFile) ? require($mainLocalFile) : array();

$mainEnvFile = $app_searchengineConfigDir . DIRECTORY_SEPARATOR . 'main-env.php';
$mainEnvConfiguration = file_exists($mainEnvFile) ? require($mainEnvFile) : array();

// This is the main Web application configuration. Any writable
// CWebApplication properties can be configured here.

return CMap::mergeArray(
                array(
            'basePath' => dirname(__FILE__) . DIRECTORY_SEPARATOR . '..',
            // set parameters
            'params' => $params,
            'name' => 'Trends Search Engine',
            'id' => 'develop.devbox3',
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
            ),
            // application components
            'components' => array(
                'user' => array(
                    // enable cookie-based authentication
                    'allowAutoLogin' => true,
                    'class' => 'MyWebUser',
                    'identityCookie' => array(
                        'domain' => '.develop.devbox3',
                    ),
                ),
                'session' => array(
                    'sessionName' => 'Session',
                    'class' => 'CDbHttpSession',
                    //   'autoCreateSessionTable' => true,
                    'connectionID' => 'db',
                    'sessionTableName' => 'MySessionTable',
                    //   'useTransparentSessionID' => ($_POST['PHPSESSID']) ? true : false,
                    'useTransparentSessionID' => true,
                    'autoStart' => 'true',
                    'cookieMode' => 'only',
                    'cookieParams' => array(
                        'path' => '/',
                        'domain' => '.develop.devbox3',
                        'httpOnly' => true,
                    ),
                    'timeout' => 300,
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
                    'rules' => $params['url.rules'],
                ),
                'db' => array(
                    'class' => 'CDbConnection',
                    'connectionString' => 'mysql:host=127.0.0.1;dbname=test',
                    'username' => 'root',
                    'password' => 'Pa55word',
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

            // application-level parameters that can be accessed
            // using Yii::app()->params['paramName']

                ), CMap::mergeArray($mainEnvConfiguration, $mainLocalConfiguration)
);