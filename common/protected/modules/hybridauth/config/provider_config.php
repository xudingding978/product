

<?php

/* !
 * HybridAuth
 * http://hybridauth.sourceforge.net | http://github.com/hybridauth/hybridauth
 * (c) 2009-2012, HybridAuth authors | http://hybridauth.sourceforge.net/licenses.html
 */

// ----------------------------------------------------------------------------------------
//	HybridAuth Config file: http://hybridauth.sourceforge.net/userguide/Configuration.html
// ----------------------------------------------------------------------------------------

$cb = new Couchbase("cb1.hubsrv.com:8091", "", "", "default", true);
$result = $cb->get($_SERVER['HTTP_HOST']);
$result_arr = CJSON::decode($result, true);


return $result_arr;