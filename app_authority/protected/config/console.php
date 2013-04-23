<?php

/**
 *  Search Engine Application Configuration
 *
 * @author: Jason Liddiard <jason@the-ebusiness-company.com>
 * Date: 24/02/13
 * Time: 4:15 PM
 *
 * This file holds the configuration settings of the Search Engine application.
 * */
$app_searchengineConfigDir = dirname(__FILE__);
//
$root = $app_searchengineConfigDir . DIRECTORY_SEPARATOR . '..' . DIRECTORY_SEPARATOR . '..' . DIRECTORY_SEPARATOR . '..';
//
//// Setup some default path aliases. These alias may vary from projects.
Yii::setPathOfAlias('root', $root);
Yii::setPathOfAlias('common', $root . DIRECTORY_SEPARATOR . 'common' . DIRECTORY_SEPARATOR . 'protected');
Yii::setPathOfAlias('app_administrator', $root . DIRECTORY_SEPARATOR . 'app_administrator');
Yii::setPathOfAlias('app_authority', $root . DIRECTORY_SEPARATOR . 'app_authority');
Yii::setPathOfAlias('app_dashboard', $root . DIRECTORY_SEPARATOR . 'app_dashboard');
Yii::setPathOfAlias('app_searchengine', $root . DIRECTORY_SEPARATOR . 'app_searchengine');
Yii::setPathOfAlias('app_useraccount', $root . DIRECTORY_SEPARATOR . 'app_useraccount');
// This is the configuration for yiic console application.
// Any writable CConsoleApplication properties can be configured here.
return array(
    'basePath' => dirname(__FILE__) . DIRECTORY_SEPARATOR . '..',
    'name' => 'My Console Application',
    // preloading 'log' component
//    'preload' => array('log'),
    // autoloading model and component classes
    'import' => array(
//               'common.components.*',
//               'common.components.auth.*',
//        'common.extensions.*',
//        'common.models.*',
//        'application.commands.shell.*',
        'application.models.*',
        'application.components.*',
         'application.modules.auth.*',
    ),
    'modules' => array(
//        'auth' => array(
//            'strictMode' => true, // when enabled authorization items cannot be assigned children of the same type.
//            'userClass' => 'User', // the name of the user model class.
//            'userIdColumn' => 'REC_ID', // the name of the user id column.
//            'userNameColumn' => 'USER_NAME', // the name of the user name column.
//            'appLayout' => 'application.views.layouts.main', // the layout used by the module.
//            'viewDir' => null, // the path to view files to use with this module.  
//        ),
    ),
    // application components
    'components' => array(
//        'authManager' => array(
//            'class' => 'CDbAuthManager',
//            'connectionID' => 'db',
//            'itemTable' => 'tpl_auth_item',
//            'itemChildTable' => 'tpl_auth_item_child',
//            'assignmentTable' => 'tpl_auth_assignment',
//            'behaviors' => array(
//                'auth' => array(
//                    'class' => 'AuthBehavior',
//                    'admins' => array('admin', 'jason', 'foo', 'bar'), // users with full access
//                ),
//            ),
//        ),
        // uncomment the following to use a MySQL database
        'db' => array(
            'connectionString' => 'mysql:host=db.business-software.co.nz;dbname=db_v3.1_admin',
            'username' => 'db_user',
            'password' => 'Pa55word',
            'emulatePrepare' => true,
            'username' => 'root',
            'password' => '',
            'charset' => 'utf8',
        ),
        'log' => array(
            'class' => 'CLogRouter',
            'routes' => array(
                array(
                    'class' => 'CFileLogRoute',
                    'levels' => 'error, warning',
                ),
            ),
        ),
    ),
);