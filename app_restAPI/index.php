<?php

// change the following paths if necessary
$yii = dirname(__FILE__) . '/../common/protected/lib/Yii/yiilite.php';
$config = dirname(__FILE__) . '/protected/config/main.php';

// remove the following lines when in production mode
defined('YII_DEBUG') or define('YII_DEBUG', true);
// specify how many levels of call stack should be shown in each log message
defined('YII_TRACE_LEVEL') or define('YII_TRACE_LEVEL', 3);

// register composer autoloader
require_once dirname(__FILE__) . '/protected/vendor/autoload.php';

use \Sherlock\Sherlock;
use Aws\Common\Aws;
use Aws\S3\S3Client;
use Aws\S3\Enum\CannedAcl;
use Aws\S3\Exception\S3Exception;
use Aws\Ses\SesClient;


require_once($yii);
Yii::createWebApplication($config)->run();
