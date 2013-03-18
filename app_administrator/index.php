<?php

// change the following paths if necessary
$yii=dirname(__FILE__).'/../common/protected/lib/Yii/yii.php';
$config=dirname(__FILE__).'/protected/config/main.php';

// remove the following lines when in production mode
defined('YII_DEBUG') or define('YII_DEBUG',true);
// specify how many levels of call stack should be shown in each log message
defined('YII_TRACE_LEVEL') or define('YII_TRACE_LEVEL',3);

chdir(dirname(__FILE__) . DIRECTORY_SEPARATOR . '..');

//require_once('common' . DIRECTORY_SEPARATOR . 'protected' . DIRECTORY_SEPARATOR . 'lib' . DIRECTORY_SEPARATOR . 'Yii' . DIRECTORY_SEPARATOR . 'yii.php');
//$config = require('app_administrator' . DIRECTORY_SEPARATOR .  'protected' . DIRECTORY_SEPARATOR . 'config' . DIRECTORY_SEPARATOR . 'main.php');
//require_once('common' . DIRECTORY_SEPARATOR .  'protected' . DIRECTORY_SEPARATOR . 'components' . DIRECTORY_SEPARATOR . 'WebApplication.php');
//require_once('common' . DIRECTORY_SEPARATOR .  'protected' . DIRECTORY_SEPARATOR . 'lib' . DIRECTORY_SEPARATOR . 'global.php');

require_once($yii);
Yii::createWebApplication($config)->run();

//$app = Yii::createApplication('WebApplication', $config);
//$app->run();