<?php

/**
 *  Search Engine Application Configuration
 *
 * @author: Jason Liddiard <jason@the-ebusiness-company.com>
 * Date: 29/06/13
 * Time: 8:20 PM
 *
 * This file holds the configuration settings of the REST API  application.
 * */
$app_restAPIConfigDir = dirname(__FILE__);
//
$root = $app_restAPIConfigDir . DIRECTORY_SEPARATOR . '..' . DIRECTORY_SEPARATOR . '..' . DIRECTORY_SEPARATOR . '..';
//
//// Setup some default path aliases. These alias may vary from projects.
Yii::setPathOfAlias('root', $root);
Yii::setPathOfAlias('common', $root . DIRECTORY_SEPARATOR . 'common' . DIRECTORY_SEPARATOR . 'protected');
Yii::setPathOfAlias('app_restAPI', $root . DIRECTORY_SEPARATOR . 'app_restAPI');

// The configuation tree overides in the following way...
// local settings below > environment specific > main configuration

$params = require_once($app_restAPIConfigDir . DIRECTORY_SEPARATOR . 'params.php');

$mainLocalFile = $app_restAPIConfigDir . DIRECTORY_SEPARATOR . 'main-local.php';
$mainLocalConfiguration = file_exists($mainLocalFile) ? require($mainLocalFile) : array();

$mainEnvFile = $app_restAPIConfigDir . DIRECTORY_SEPARATOR . 'main-env.php';
$mainEnvConfiguration = file_exists($mainEnvFile) ? require($mainEnvFile) : array();

// This is the main Web application configuration. Any writable
// CWebApplication properties can be configured here.

$dot_positon = strpos($_SERVER['HTTP_HOST'], ".");

$domain = substr($_SERVER['HTTP_HOST'], $dot_positon);
// uncomment the following to define a path alias
// Yii::setPathOfAlias('local','path/to/local-folder');
// This is the main Web application configuration. Any writable
// CWebApplication properties can be configured here.
return CMap::mergeArray(
                array(
            'basePath' => dirname(__FILE__) . DIRECTORY_SEPARATOR . '..',
            'name' => 'API Application',
            // preloading 'log' component
// 'preload' => array('log'),
// autoloading model and component classes
            'import' => array(
                'common.components.*',
                'common.components.auth.*',
                'common.models.User',
                'common.models.UserProfile',
                'application.components.Controller',
                'application.components.RestController',
                'application.components.HttpRequest',
                'application.vendor.autoload',
                'application.controllers.*',
                'application.components.*'
            ),
            // application components
            'components' => array(
// url rules needed by CUrlManager
                'urlManager' => array(
                    'urlFormat' => 'path',
                    'showScriptName' => false,
                    'rules' => array(
//REST AP
                        array('<controller>/options', 'pattern' => '<controller>', 'verb' => 'OPTIONS'),
                        array('<controller>/options', 'pattern' => '<controller>/<id>', 'verb' => 'OPTIONS'),
                        array('<controller>/', 'pattern' => '<controller>', 'verb' => 'GET'),
                        array('<controller>/create', 'pattern' => '<controller>', 'verb' => 'POST'),
                        array('<controller>/read', 'pattern' => '<controller>/<id>', 'verb' => 'GET'),
                        array('<controller>/update', 'pattern' => '<controller>/<id>', 'verb' => 'PUT'),
                        array('<controller>/delete', 'pattern' => '<controller>/<id>', 'verb' => 'DELETE'),
                    )
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
//                //        'timeout' => 1800,
//                ),
                
                                'user' => array(
// enable cookie-based authentication
                    'allowAutoLogin' => true,
                    //        'class' => 'MyWebUser',
                    'class' => 'AuthWebUser',
                    'identityCookie' => array(
                        'domain' => $domain
                    ),
                ),
                

//        'errorHandler' => array(
//            // use 'site/error' action to display errors
//            'errorAction' => 'site/error',
//        ),
            ),
            // application-level parameters that can be accessed
// using Yii::app()->params['paramName']
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
