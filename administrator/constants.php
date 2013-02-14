<?php
	// Account Role Type
	define ('SUPERADMIN',1);
	define ('ADMIN',2);
	// Category Types
	define ('BRAND_TYPE', 1);
	define ('PRODUCT_TYPE', 2);
	define ('SUPPLIER_TYPE', 3);
	define ('SHAWS_SPECIAL_TYPE', 4);
	// Error Types
	define ('ERR_EMPTY_PARAM', -1);
	define ('ERR_DB_CONNECT', -2);
	define ('ERR_DB_NODIRECTORY', -3);
	define ('ERR_REC_NOBRANDS', -4);
	define ('ERR_REC_NOBRANDSINFO', -5);
	define ('ERR_OBJ_UNITIALIZED', -6);
	define ('ERR_DB_NODIRECTORYTABLE', -7);
	define ('ERR_DB_RESULT', -8);
	define ('ERR_DB_SUP_EMPTY_RESULT', -9);
	define ('ERR_FILE_NOTFOUND', -10);
	define ('ERR_DB_NOTCONNECTED', -11);
	// VIEW ID
	define ('ACCOUNT',0);
	define ('CLIENT',1);
	define ('CATEGORY',2);
	define ('DIRECTORY',3);
	define ('S2L2S',4);
	define ('FRONTGRID',5);
	// ACTION ID
	define ('VIEW',0);
	define ('ADD',1);
	define ('EDIT',2);
	define ('REMOVE',3);
	define ('SEARCH',4);
	define ('RESERVE1',5);
	// DB TYPE
	define ('MYSQL', 1);
	define ('MYSQLI', 2);
?>