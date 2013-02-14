<?php

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
require_once $path_doc_root . "/config.php";

abstract class BaseDAO{
    //all DAO will inherit from this base class which inserts the required filter values into each query
    //so that it connect to the right DB, with the right table prefix and the correct Tenant ID. All queries
    //need to be filter parsed to allow for shared schema multi-tenancy architecture. 
    
    public function parseFilterValues($querystring){
        $path_doc_root = $_SERVER["DOCUMENT_ROOT"];
        include $path_doc_root . "/config.php";
        $filter_arr = array('`'.$ADMIN_DB_NAME.'`', '`'.$DB_NAME.'`', $DB_PREFIX, $TENANT_REC_ID);
        $pattern = array('{{ADMIN_DB_NAME}}','{{DB_NAME}}', '{{DB_PREFIX}}', '{{ TENTANT_REC_ID}}');
        $parsedstring = preg_replace($pattern, $filter_arr, $querystring);
        return $parsedstring;        
    }  
}


?>
