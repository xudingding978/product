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
    // live database
    'db_live.name' => 'db_live',
    'db_live.connectionString' => 'mysql:host=localhost;dbname=db_live',
    'db_live.username' => 'tplweb',
    'db_live.password' => 'S3cr3t!',
    // admin database
    'db_admin.name' => 'db_admin',
    'db_admin.connectionString' => 'mysql:host=localhost;dbname=db_admin',
    'db_admin.username' => 'tplweb',
    'db_admin.password' => 'S3cr3t!',
//
//	// test database {
//	'testdb.name' => '',
//	'testdb.connectionString' => 'mysql:host={DATABASE-HOST};dbname={DATABASE-NAME}_test',
//	'testdb.username' => '{DATABASE-USERNAME}',
//	'testdb.password' => '{DATABASE-PASSWORD}',
);