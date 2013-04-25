<?php

if (Yii::app()->user->isGuest) {
    $_user_label = 'Login';
    $_user_url = '/site/login';
} else {
    $_user_label = 'Logout (' . Yii::app()->user->name . ') (uid:' . Yii::app()->user->id . ')';
    $_user_url = '/site/logout';
}

$menu_top = array(
    'brand' => 'Authority',
    'brandOptions' => array('style' => 'width:auto;margin-left: 0px;'),
    'brandUrl' => '#',
    'collapse' => true,
    'fixed' => 'top',
    'htmlOptions' => array('style' => 'position:absolute'),
    'items' => array(
        array(
            'class' => 'bootstrap.widgets.TbMenu',
            'items' => array(
                array('label' => 'Apps', 'url' => '/', 'active' => true, 'items' => array(
                        array('label' => 'Applications'),
                        '---',
                        array('label' => Yii::app()->user->checkAccess('userUpdate') ? Yii::app()->user->checkAccess('user') : 'FalseTest', 'url' => '/text'),
                        array('label' => 'User Account', 'url' => 'http://account.' . $_SERVER['REQUEST_URI']),
                        array('label' => 'Search Engine', 'url' => 'http://www.' . $_SERVER['HTTP_HOST']),
                        array('label' => 'Dashboard', 'url' => 'http://dashboard.' . $_SERVER['HTTP_HOST']),
                        array('label' => 'Administrator', 'url' => 'http://admin.' . $_SERVER['HTTP_HOST']),
                    )),
                array('label' => 'Users', 'url' => '/user/admin', 'items' => array(
                        array('label' => 'Actions'),
                        '---',
                        array('label' => 'View Users', 'url' => '/user/'),
                        array('label' => 'Create Users', 'url' => '/user/create'),
                        array('label' => 'Manage Users', 'url' => '/user/admin'),
                        array('label' => 'Manage User Profiles', 'url' => '/userProfile/admin'),
                    )),
                array('label' => 'Tenants', 'url' => '/tenant', 'items' => array(
                        array('label' => 'Actions'),
                        '---',
                        array('label' => 'View Tenants', 'url' => '/tenant/'),
                        array('label' => 'Create Tenants', 'url' => '/tenant/create'),
                        array('label' => 'Manage Tenants', 'url' => '/tenant/admin'),
                    )),
                array('label' => 'Authority', 'url' => '/auth', 'items' => array(
                        array('label' => 'Actions'),
                        '---',
                        array('label' => 'Assignments', 'url' => '/auth/assignment'),
                        array('label' => 'Roles', 'url' => '/auth/role'),
                        array('label' => 'Tasks', 'url' => '/auth/task'),
                        array('label' => 'Operations', 'url' => '/auth/operation'),
                    )),
                array('label' => $_user_label, 'url' => $_user_url)
            )
        )));

$this->widget('bootstrap.widgets.TbNavbar', $menu_top);
?>
