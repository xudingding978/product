<?php

/**
 * params.php
 *
 * @author: antonio ramirez <antonio@clevertech.biz>
 * Date: 7/22/12
 * Time: 1:39 PM
 */
/**
 * Parameters shared by all applications.
 * Please put environment-sensitive parameters in env/params-{environmentcode}.php
 */
$commonConfigDir = dirname(__FILE__);

// get local parameters in
$commonParamsLocalFile = $commonConfigDir . DIRECTORY_SEPARATOR . 'params-local.php';
$commonParamsLocal = file_exists($commonParamsLocalFile) ? require ($commonParamsLocalFile) : array();

// if exists, include it, otherwise set as an empty array
$commonEnvParamsFile = $commonConfigDir . DIRECTORY_SEPARATOR . 'params-env.php';
$commonEnvParams = file_exists($commonEnvParamsFile) ? require($commonEnvParamsFile) : array();

return CMap::mergeArray(array(
// cache settings -if APC is not loaded, then use CDbCache
            'cache.core' => extension_loaded('apc') ?
                    array(
                'class' => 'CApcCache',
                    ) :
                    array(
                'class' => 'CDbCache',
                'connectionID' => 'db',
                'autoCreateCacheTable' => true,
                'cacheTableName' => 'cache',
                    ),
            'cache.content' => array(
                'class' => 'CDbCache',
                'connectionID' => 'db',
                'autoCreateCacheTable' => true,
                'cacheTableName' => 'cache',
            ),
            // standard memcache configuration - added by JL 24-02-2013  
            'cache' => array(
                'class' => 'CMemCache',
                'useMemcached' => 'true',
                'servers' => array(
                    array('host' => '127.0.0.1', 'port' => 11211, 'weight' => 100),
                ),
            ),
            // url rules needed by CUrlManager
            'urlFormat' => 'path',
            'showScriptName' => false,
            'url.rules' => array(
                //REST API
                array('api/<controller>/list', 'pattern' => 'api/<controller>', 'verb' => 'GET'),
                array('api/<controller>/list', 'pattern' => 'api/<controller>/<id:\d+>', 'verb' => 'GET'),
                array('api/<controller>/create', 'pattern' => 'api/<controller>', 'verb' => 'POST'),
                array('api/<controller>/read', 'pattern' => 'api/<controller>/<id:\d+>', 'verb' => 'GET'),
                array('api/<controller>/update', 'pattern' => 'api/<controller>/<id:\d+>', 'verb' => 'PUT'),
                array('api/<controller>/delete', 'pattern' => 'api/<controller>/<id:\d+>', 'verb' => 'DELETE'),
                '<controller:\w+>/<id:\d+>' => '<controller>/view',
                '<controller:\w+>/<action:\w+>/<id:\d+>' => '<controller>/<action>',
                '<controller:\w+>/<action:\w+>' => '<controller>/<action>',
            ),
            'php.exePath' => '/usr/bin/php'
                ), CMap::mergeArray($commonEnvParams, $commonParamsLocal));