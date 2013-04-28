<?php

// This is the configuration for yiic console application.
// Any writable CConsoleApplication properties can be configured here.
return array(
	'basePath'=>dirname(__FILE__).DIRECTORY_SEPARATOR.'..',
	'name'=>'My Console Application',

	// preloading 'log' component
	'preload'=>array('log'),

	// application components
	'components'=>array(
//		'db'=>array(
//			'connectionString' => 'sqlite:'.dirname(__FILE__).'/../data/testdrive.db',
//		),
            
            		'db'=>array(
			'connectionString' => 'mysql:host=db.business-software.co.nz;dbname=db_v3.1_admin',
			'emulatePrepare' => true,
			'username' =>  'db_user',
			'password' => 'Pa55word',
			'charset' => 'utf8',
		),
		// uncomment the following to use a MySQL database
		'db'=>array(
			'connectionString' => 'mysql:host=db.business-software.co.nz;dbname=db_v3.1_admin',
			'emulatePrepare' => true,
			'username' =>  'db_user',
			'password' => 'Pa55word',
			'charset' => 'utf8',
		),
		'log'=>array(
			'class'=>'CLogRouter',
			'routes'=>array(
				array(
					'class'=>'CFileLogRoute',
					'levels'=>'error, warning',
				),
			),
		),
	),
);