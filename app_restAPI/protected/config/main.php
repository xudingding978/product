<?php

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
    ),
    // application components
    'components' => array(
        // url rules needed by CUrlManager
        'urlManager' => array(
            'urlFormat' => 'path',
            'showScriptName' => false,
            'rules' => array(
                //REST API
//                array('<controller>', 'pattern' => '<controller>', 'verb' => 'GET'),
//                array('<controller>/list', 'pattern' => '<controller>/<id:\d+>', 'verb' => 'GET'),
//                array('<controller>/create', 'pattern' => '<controller>', 'verb' => 'POST'),
//                array('<controller>/read', 'pattern' => '<controller>/<id:\d+>', 'verb' => 'GET'),
//                array('<controller>/update', 'pattern' => '<controller>/<id:\d+>', 'verb' => 'PUT'),
//                array('<controller>/delete', 'pattern' => '<controller>/<id:\d+>', 'verb' => 'DELETE'),
                '<controller:\w+>/index' => '<controller>',
                '<controller:\w+>/<id:\d+>' => '<controller>/view',
                '<controller:\w+>/<action:\w+>/<id:\d+>' => '<controller>/<action>',
                '<controller:\w+>/<action:\w+>' => '<controller>/<action>',
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
    ),
);