<?php

class session_maintain {
 
    function __construct() {
        
    }

    public function add_client_field($field, $value, $clientid, $client_data_name) {
        $client_data = null;
        if (isset($_SESSION[$client_data_name])) {
            $client_data = $_SESSION[$client_data_name];
        }
        if ($client_data == null) {
            $client_info = array($field => $value);
            $client_data[$clientid] = $client_info;
        } else {
            if (!isset($client_data[$clientid])) {
                $client_info = array($field => $value);
                $client_data[$clientid] = $client_info;
            } else {
                $client_info = $client_data[$clientid];
                $client_info[$field] = $value;
                $client_data[$clientid] = $client_info;
            }
        }
        //var_dump($client_data);
        $_SESSION[$client_data_name] = $client_data;
        return true;
    }

    public function get_client_field($field, $client_instance_id, $client_data_name) {

        if (!isset($_SESSION[$client_data_name])) {
            return null;
        }
        $client_data = $_SESSION[$client_data_name];
        //var_dump($client_data);

        //clientid refers to the instance ID of the request for a client
        if (!isset($client_data[$client_instance_id])) {
            return null;
        } else {
            $client_info = $client_data[$client_instance_id];
            if (!isset($client_info[$field])) {
                return null;
            } else {
                return $client_info[$field];
            }
        }
    }

}

//if (!isset($_SESSION))
//    session_start();
//$session_maintain = new session_maintain();
////echo "---------------------------------------------------- \n";
//$array_client = $session_maintain->add_client_field("ee", "rr", 11, "client_data");
////echo "---------------------------------------------------- \n";
//$array_client = $session_maintain->add_client_field("bb", "kk", 11, "client_data");
////echo "---------------------------------------------------- \n";
//$array_client = $session_maintain->add_client_field("bb", "kk", 13, "client_data");
//echo "---------------------------------------------------- \n";
//echo $session_maintain->get_client_field("ee", 11, "client_data");
?>
