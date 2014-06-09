<?php

/**
 * params-local.php
 *
 * @author: antonio ramirez <antonio@clevertech.biz>
 * Date: 7/22/12
 * Time: 5:59 PM
 *
 *
 * ANY CONFIGURATION OPTIONS HERE WILL REPLACE THOSE INCLUDED ON THE params-env.php file!!!
 * It holds your local configuration settings.
 *
 * Replace following tokens for your local correspondent configuration data
 *
 * {DATABASE-NAME} ->   database name
 * {DATABASE-HOST} -> database server host name or ip address
 * {DATABASE-USERNAME} -> user name access
 * {DATABASE-PASSWORD} -> user password
 *
 * {DATABASE-TEST-NAME} ->   Test database name
 * {DATABASE-TEST-HOST} -> Test database server host name or ip address
 * {DATABASE-USERNAME} -> Test user name access
 * {DATABASE-PASSWORD} -> Test user password
 */
return array(
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
