<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of MyWebUser
 *
 * @author devbox
 */
class MyWebUser extends CWebUser {

    public function init() {
        $conf = Yii::app()->session->cookieParams;
        $this->identityCookie = array(
            'path' => $conf['path'],
            'domain' => $conf['domain'],
        );
        parent::init();
    }

}
