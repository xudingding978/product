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
    // DB connection configurations
    'tablePrefix' => 'tpl_',
    // live database
    'db_live.name' => 'db_live',
       'db_live.connectionString' => 'mysql:host=db.business-software.co.nz;dbname=db_v3.1_live',
    //'db_live.connectionString' => 'mysql:host=127.0.0.1;dbname=db_v3.2_live',
    'db_live.username' => 'db_user',
    'db_live.password' => 'Pa55word',
    // admin database
    'db_admin.name' => 'db_admin',
    'db_admin.connectionString' => 'mysql:host=db.business-software.co.nz;dbname=db_v3.1_admin',
  //  'db_admin.connectionString' => 'mysql:host=127.0.0.1;dbname=db_v3.2_admin',
    'db_admin.username' => 'db_user',
    'db_admin.password' => 'Pa55word',
    'adminEmail' => 'localwebmaster@example.com',
);