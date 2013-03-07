<?php
/**
 * params-private.php
 *
 * @author: antonio ramirez <antonio@clevertech.biz>
 * Date: 7/22/12
 * Time: 5:51 PM
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
    'db_admin.connectionString' => 'mysql:host=localhost;dbname=db_live',
    'db_admin.username' => 'tplweb',
    'db_admin.password' => 'S3cr3t!',
);