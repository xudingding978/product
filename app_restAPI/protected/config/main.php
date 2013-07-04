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
return array(
    'basePath' => dirname(__FILE__) . DIRECTORY_SEPARATOR . '..',
    'name' => 'API Application',
    // preloading 'log' component
    // 'preload' => array('log'),
    // autoloading model and component classes
    'import' => array(
        'application.components.Controller',
        'application.components.RestController',
        'application.components.HttpRequest',
        'application.vendor.autoload',
        'application.components.SearchEngine',
          'application.controllers.*'
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

        'elasticSearchNode' => $params['elasticSearch.node'],
        'elasticSearchIndex' => $params['elasticSearch.index'],
        'couchBaseNode'=>$params['couchBase.bucket'],
        'couchBaseBucket' => $params['couchBase.node'],

//        'elasticSearchNode' => 'es1.hubsrv.com',
//        'elasticSearchIndex' => 'test', 
        
        'elasticSearchNode' => 'es1.hubsrv.com',
        'elasticSearchIndex' => 'develop'

    ),
    
    
);
