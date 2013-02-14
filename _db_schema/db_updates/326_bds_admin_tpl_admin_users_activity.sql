CREATE  TABLE `bds_admin`.`tpl_admin_users_activity` (
  `REC_ID` INT(11) NOT NULL AUTO_INCREMENT ,
  `REC_DATETIME` DATETIME NOT NULL ,
  `REC_TIMESTAMP` DATETIME NOT NULL ,
  `USERS_REC_ID` INT(11) NULL ,
  `PHP_FCGI_MAX_REQUESTS` VARCHAR(45) NULL ,
  `PHP_FCGI_CHILDREN` VARCHAR(45) NULL ,
  `PWD` VARCHAR(45) NULL ,
  `FCGI_ROLE` VARCHAR(45) NULL ,
  `SERVER_SOFTWARE` VARCHAR(45) NULL ,
  `SERVER_SIGNATURE` VARCHAR(45) NULL ,
  `GATEWAY_INTERFACE` VARCHAR(45) NULL ,
  `PATH` VARCHAR(45) NULL ,
  `DOCUMENT_ROOT` VARCHAR(45) NULL ,
  `REMOTE_ADDR` VARCHAR(45) NULL ,
  `REMOTE_PORT` VARCHAR(45) NULL ,
  `HTTP_HOST` VARCHAR(45) NULL ,
  `SERVER_NAME` VARCHAR(45) NULL ,
  `QUERY_STRING` VARCHAR(45) NULL ,
  `SERVER_PROTOCOL` VARCHAR(45) NULL ,
  `REQUEST_METHOD` VARCHAR(45) NULL ,
  `PATH_INFO` VARCHAR(45) NULL ,
  `REQUEST_URI` VARCHAR(45) NULL ,
  `SCRIPT_URL` VARCHAR(45) NULL ,
  `HTTPS` VARCHAR(45) NULL ,
  `SERVER_PORT` VARCHAR(45) NULL ,
  `SERVER_ADDR` VARCHAR(45) NULL ,
  `HTTP_ACCEPT` VARCHAR(255) NULL ,
  `HTTP_ACCEPT_ENCODING` VARCHAR(45) NULL ,
  `HTTP_ACCEPT_LANGUAGE` VARCHAR(45) NULL ,
  `HTTP_CONNECTION` VARCHAR(45) NULL ,
  `HTTP_COOKIE` VARCHAR(4048) NULL ,
  `PHPSESSID` VARCHAR(45) NULL ,
  `HTTP_USER_AGENT` VARCHAR(45) NULL ,
  `SCRIPT_NAME` VARCHAR(45) NULL ,
  `SCRIPT_FILENAME` VARCHAR(45) NULL ,
  `PHP_SELF` VARCHAR(45) NULL ,
  `REQUEST_TIME` VARCHAR(45) NULL ,
  PRIMARY KEY (`REC_ID`) )
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;