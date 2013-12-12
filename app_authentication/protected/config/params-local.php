<?php

/**
 * params-local.php
 *
 * @author: antonio ramirez <antonio@clevertech.biz>
 * Date: 7/22/12
 * Time: 5:59 PM
 */
/**
 * Put any configuration parameters here for your local development
 */
return array(
    'gii' => array(
        'class' => 'system.gii.GiiModule',
        'password' => 'Enter Your Password Here',
        // If removed, Gii defaults to localhost only. Edit carefully to taste.
        'ipFilters' => array('127.0.0.1', '::1'),
    ),
    
      'env.code' => 'private',
    
    //ElasticSearch Configurations
    'elasticSearch.node' => 'es1.hubsrv.com',
    'elasticSearch.index' => 'develop',
    
    //CouchBase Configurations
    'couchBase.node'=>'cb1.hubsrv.com:8091',
    'couchBase.bucket'=>'develop',
    
      //MySQL Database Configurations
    'db_live.name' => 'db_live',
    'db_live.connectionString' => 'mysql:host=db1.hubsrv.com;dbname=hubstar_live',
    'db_live.username' => 'db_user',
    'db_live.password' => 'Pa55word',
    
    //Platform Administrator Email
    'adminEmail' => 'localwebmaster@example.com',  
    
    
    
    
    
);