<?php
/**
 * params-env.php
 *
 * @author: antonio ramirez <antonio@clevertech.biz>
 * Date: 7/22/12
 * Time: 6:26 PM
 */
return array(
    'env.code' => 'prod',
    //ElasticSearch Configurations
    'elasticSearch.node' => 'es1.hubsrv.com',
    'elasticSearch.index' => 'develop',
    
    //CouchBase Configurations
    'couchBase.node' => 'cb1.hubsrv.com:8091',
    'couchBase.account' => '',
    'couchBase.password' => '',
    'couchBase.bucket' => 'develop',
    
    //CouchBase default bucket  Configurations
    'couchBase.defaultNode' => 'cb1.hubsrv.com:8091',
    'couchBase.defaultAccount' => '',
    'couchBase.defaultPassword' => '',
    'couchBase.defaultBucket' => 'default',

    //MySQL Database Configurations
    'db_live.name' => 'db_live',
    'db_live.connectionString' => 'mysql:host=db1.hubsrv.com;dbname=hubstar_live',
    'db_live.username' => 'db_user',
    'db_live.password' => 'Pa55word',
    
    //Platform Administrator Email
    'adminEmail' => 'localwebmaster@example.com',
);
