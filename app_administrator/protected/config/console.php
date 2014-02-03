<?php

// This is the configuration for yiic console application.
// Any writable CConsoleApplication properties can be configured here.
return array(
    'basePath' => dirname(__FILE__) . DIRECTORY_SEPARATOR . '..',
    'name' => 'My Console Application',
    // preloading 'log' component
    'preload' => array('log'),
    // application components
    'components' => array(
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
            'charset' => 'utf8'),
         'db_hubsrv_temp' => array(
            'class' => 'CDbConnection',
            'connectionString' => 'mysql:host=db1.hubsrv.com;dbname=temp;',
            'username' => 'db_user',
            'password' => 'Pa55word',
            // 'tablePrefix'=>'dbo',
//                    'schemaCachingDuration' => YII_DEBUG ? 0 : 86400000, // 1000 days
//                    'enableParamLogging' => YII_DEBUG,
            'charset' => 'utf8'),
         'db_hubsrv_import' => array(
            'class' => 'CDbConnection',
            'connectionString' => 'mysql:host=db1.hubsrv.com;dbname=import_profile_trends_Hunter_Douglas_Partners;',
            'username' => 'db_user',
            'password' => 'Pa55word',
            // 'tablePrefix'=>'dbo',
//                    'schemaCachingDuration' => YII_DEBUG ? 0 : 86400000, // 1000 days
//                    'enableParamLogging' => YII_DEBUG,
            'charset' => 'utf8'),
// uncomment the following to use a MySQL database
        /*
          'db'=>array(
          'connectionString' => 'mysql:host=localhost;dbname=testdrive',
          'emulatePrepare' => true,
          'username' => 'root',
          'password' => '',
          'charset' => 'utf8',
          ),
         */
        'log' => array(
            'class' => 'CLogRouter',
            'routes' => array(
                array(
                    'class' => 'CFileLogRoute',
                    'levels' => 'error, warning',
                ),
            ),
        ),
    ),
);