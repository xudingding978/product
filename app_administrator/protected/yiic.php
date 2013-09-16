<?php

// change the following paths if necessary
$yiic=dirname(__FILE__).'/../../common/protected/lib/Yii/yiic.php';
$config=dirname(__FILE__).'/config/console.php';

// adding in Sherlock Library

// register composer autoloader
require_once dirname(__FILE__) . '/vendor/autoload.php';

use \Sherlock\Sherlock;


require_once($yiic);
