<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of domainSetting
 *
 * @author devbox
 */
class DomainSetting {
private $domain;

function __construct() {
    $dot_positon = strpos($_SERVER['HTTP_HOST'], ".");
    $this->domain = substr($_SERVER['HTTP_HOST'], $dot_positon);
    }

//put your code here
    public function getDomain() {

        return $this->domain;
    }

}

?>
