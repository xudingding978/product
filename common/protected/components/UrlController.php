<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */



 class UrlController {



    function getDomain($url) {
        
        

        $pieces = parse_url($url);
        $domain = isset($pieces['host']) ? $pieces['host'] : '';
        if (preg_match('/(?P<domain>[a-z0-9][a-z0-9\-]{1,63}\.[a-z\.]{2,6})$/i', $domain, $regs)) {
            return $regs['domain'];
        }
        return false;
    }
    

}

?>
