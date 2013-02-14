CREATE DATABASE  IF NOT EXISTS `db_admin` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `db_admin`;
-- MySQL dump 10.13  Distrib 5.6.6-m9, for linux2.6 (i686)
--
-- Host: localhost    Database: db_admin
-- ------------------------------------------------------
-- Server version	5.6.6-m9-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping routines for database 'db_admin'
--
/*!50003 DROP PROCEDURE IF EXISTS `account_DeleteUser` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `account_DeleteUser`(
IN userid INT(11))
BEGIN
  DECLARE retval INT;
  DECLARE counter INT;
  SET retval = 0;
  IF userid IS NULL THEN
    SET userid = 0;
  END IF;
  SET counter = (SELECT COUNT(REC_ID) FROM tpl_admin_users WHERE REC_ID = userid);
  IF counter > 0 THEN /* funtion is for update existing user */
      DELETE FROM tpl_admin_users WHERE REC_ID = userid;
      SELECT 1 as retval;
  ELSE
    SELECT retval;
  END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `account_GetDefaultDirectory` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `account_GetDefaultDirectory`(IN uid INT(11))
BEGIN
    SELECT DIRECTORY_REC_ID AS DEFAULT_DIR_ID, DIRECTORY_YEAR AS DEFAULT_DIR_YEAR FROM tpl_admin_users WHERE REC_ID = uid;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `account_GetUserFrontGridDefault` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `account_GetUserFrontGridDefault`(IN uid INT(11))
BEGIN
  SELECT FRONTGRID_ID AS ITEM_ID FROM tpl_admin_users WHERE REC_ID = uid;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `account_SaveDefaultDirectory` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `account_SaveDefaultDirectory`(IN uid VARCHAR(100), IN directory_rec_id SMALLINT, IN directory_year SMALLINT)
BEGIN
  DECLARE counter INT;
  SET counter = (SELECT COUNT(REC_ID) FROM tpl_admin_users WHERE REC_ID = uid);
  IF counter > 0 THEN
    UPDATE tpl_admin_users SET DIRECTORY_REC_ID = directory_rec_id, DIRECTORY_YEAR = directory_year WHERE REC_ID = uid;
  END IF;
  SELECT uid FROM tpl_admin_users WHERE REC_ID = uid;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `account_SaveUser` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `account_SaveUser`(
  IN userid INT,
  IN role INT,
  IN usr VARCHAR(100),
  IN pwd VARCHAR(100),
  IN fname VARCHAR(100),
  IN lname VARCHAR(100),
  IN createdby INT
)
BEGIN
  DECLARE retval INT;
  DECLARE counter INT;
  SET retval = 0;
  IF userid IS NULL THEN
    SET userid = 0;
  END IF;
  SET counter = (SELECT COUNT(REC_ID) FROM tpl_admin_users WHERE REC_ID = userid);
  IF counter > 0 THEN
      IF pwd <> '' THEN
        UPDATE tpl_admin_users SET ROLE_ID = role, USERNAME = usr, `PASSWORD` = pwd, FIRSTNAME = fname, LASTNAME = lname WHERE REC_ID = userid;
      ELSE
        UPDATE tpl_admin_users SET ROLE_ID = role, USERNAME = usr, FIRSTNAME = fname, LASTNAME = lname WHERE REC_ID = userid;
      END IF;
      SELECT 1 as retval;
  ELSE
    SET counter = (SELECT COUNT(REC_ID) FROM tpl_admin_users WHERE USERNAME = usr);
    IF counter > 0 THEN /*existing username please request for change*/
      SELECT retval;
    ELSE
      INSERT INTO tpl_admin_users(ROLE_ID, USERNAME, PASSWORD, FIRSTNAME, LASTNAME, CREATED, CREATEDBY)
        VALUE(role, usr, pwd, fname, lname, NOW(), createdby);
      SELECT 1 as retval;
    END IF;
  END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `account_SaveUserFrontGridDefault` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `account_SaveUserFrontGridDefault`(IN uid VARCHAR(100), IN frontgrid INT)
BEGIN
  DECLARE counter INT;
  SET counter = (SELECT COUNT(REC_ID) FROM tpl_admin_users WHERE REC_ID = uid);
  IF counter > 0 THEN
    UPDATE tpl_admin_users SET FRONTGRID_ID = frontgrid WHERE REC_ID = uid;
  END IF;
  SELECT uid FROM tpl_admin_users WHERE REC_ID = uid;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `admin_Login` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `admin_Login`(
    IN dbname VARCHAR(100),
    IN usr VARCHAR(100), 
    IN pwd VARCHAR(100)
)
BEGIN
  DECLARE role INT;
  
  SET @user = usr;
  SET @pass = pwd;
  SET @s = CONCAT('SELECT ROLE_ID INTO @role FROM ',dbname,'.tpl_admin_users WHERE USERNAME = ? AND PASSWORD = ?');

  PREPARE stmt FROM @s;

  EXECUTE stmt USING @user, @pass;

  IF @role IS NOT NULL THEN
    UPDATE tpl_admin_users SET SESSIONID = MD5(RAND()), LASTLOGIN = NOW() WHERE `USERNAME` =  @user AND `PASSWORD` = @pass;
    SELECT rec_id as id, sessionid, role_id as role, firstname, lastname, FRONTGRID_ID as griditem, DIRECTORY_REC_ID as default_dir, DIRECTORY_YEAR as default_year FROM tpl_admin_users WHERE `USERNAME` =  @user AND `PASSWORD` = @pass;
  ELSE
    SELECT 0 as sessionid, 0 as role, 0 as id, '' as firstname, '' as lastname, '' as griditem, '' as default_dir, '' as default_year; 
  END IF;

END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `admin_Login2` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `admin_Login2`(
    IN usr VARCHAR(100), 
    IN pwd VARCHAR(100)
)
BEGIN
  DECLARE role INT;
    
  SET @s = CONCAT('SELECT ROLE_ID INTO role FROM ctb_admin.tpl_admin_users WHERE USERNAME = ? AND PASSWORD = ?');

  PREPARE stmt FROM @s;

  SET @user = usr;
  SET @pass = pwd;

  EXECUTE stmt USING @user,@pass;
    
  IF role IS NOT NULL THEN
    UPDATE tpl_admin_users SET SESSIONID = MD5(RAND()), LASTLOGIN = NOW() WHERE `USERNAME` =  usr AND `PASSWORD` = pwd;
    SELECT rec_id as id, sessionid, role, firstname, lastname, FRONTGRID_ID as griditem, DIRECTORY_REC_ID as default_dir, DIRECTORY_YEAR as default_year FROM tpl_admin_users WHERE `USERNAME` =  usr AND `PASSWORD` = pwd;
  ELSE
    SELECT 0 as sessionid, 0 as role, 0 as id, '' as firstname, '' as lastname, '' as griditem, '' as default_dir, '' as default_year; -- return this value to caller
  END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `admin_VerifySession` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `admin_VerifySession`(IN sessid VARCHAR(100), IN uid VARCHAR(100))
BEGIN
  SELECT USERNAME as usr, ROLE_ID as role FROM tpl_admin.tpl_admin_users WHERE `REC_ID` = uid AND `SESSIONID` = sessid;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `category_AddCategory` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `category_AddCategory`(
  IN dbname VARCHAR(255),
  IN dir INT,
  IN parentid INT,
  IN catname VARCHAR(255),
  IN prnorder INT,
  IN prnimage VARCHAR(255),
  IN webimage VARCHAR(255),
  IN cde VARCHAR(64),
  IN txt TEXT
)
BEGIN
    DECLARE cat_id INT;
    IF txt IS NULL THEN
      SET txt = '';
    END IF;
    IF webimage IS NULL THEN
      SET webimage = '';
    END IF;
    IF prnimage IS NULL THEN
      SET prnimage = '';
    END IF;
    IF cde IS NULL THEN
      SET cde = '';
    END IF;
    IF parentid IS NULL OR parentid = 0 THEN
      SET @s = CONCAT("INSERT INTO ",dbname,".tpl_product_category(REC_DATETIME, REC_TIMESTAMP, NAME,TEXT,PRINT_ORDER,PRINT_IMAGE_LOCATION,WEB_IMAGE_LOCATION,CODE) 
      VALUE('",NOW(),"','",NOW(),"','",catname,"','",txt,"',",prnorder,",'",prnimage,"','",webimage,"','",cde,"')");
    ELSE
      SET @s = CONCAT("INSERT INTO ",dbname,".tpl_product_category(`REC_DATETIME`, `REC_TIMESTAMP`,
      `PARENT_PRODUCT_CATEGORY_REC_ID`,`NAME`,`TEXT`,`PRINT_ORDER`,`PRINT_IMAGE_LOCATION`,
      `WEB_IMAGE_LOCATION`,`CODE`) VALUE('",NOW(),"','",NOW(),"',",parentid,",'",catname,"','",txt,"',",prnorder,",
      '",prnimage,"','",webimage,"','",cde,"')");
    END IF;   
    PREPARE stmt FROM @s;
    EXECUTE stmt;
    
    SET cat_id = LAST_INSERT_ID();
    SET @s = CONCAT("INSERT INTO ",dbname,".tpl_product_category_directory(`REC_DATETIME`, `REC_TIMESTAMP`,
      `PRODUCT_CATEGORY_REC_ID`,`DIRECTORY_REC_ID`) VALUE('",NOW(),"','",NOW(),"',",LAST_INSERT_ID(),",",dir,")");
    PREPARE stmt FROM @s;
    EXECUTE stmt;

    SELECT cat_id;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `category_EditCategory` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `category_EditCategory`(
  IN dbname VARCHAR(255),
  IN id INT,
  IN catname VARCHAR(255),
  IN prnorder INT,
  IN prnimage VARCHAR(255),
  IN webimage VARCHAR(255),
  IN cde VARCHAR(64),
  IN txt TEXT
)
BEGIN
    IF catname IS NOT NULL THEN
      SET @s = CONCAT("UPDATE ",dbname,".tpl_product_category SET `NAME`='",catname,"' WHERE REC_ID = ",id);
      PREPARE stmt FROM @s;
      EXECUTE stmt;
    END IF;

    IF prnorder <> 0 THEN
      SET @s = CONCAT("UPDATE ",dbname,".tpl_product_category SET PRINT_ORDER = ",prnorder," WHERE REC_ID = ",id);
      PREPARE stmt FROM @s;
      EXECUTE stmt;
    ELSE
      SET @s = CONCAT("UPDATE ",dbname,".tpl_product_category SET PRINT_ORDER = NULL WHERE REC_ID = ",id);
      PREPARE stmt FROM @s;
      EXECUTE stmt;
    END IF;

    IF prnimage IS NOT NULL THEN
      SET @s = CONCAT("UPDATE ",dbname,".tpl_product_category SET PRINT_IMAGE_LOCATION='",prnimage,"' WHERE REC_ID = ",id);
      PREPARE stmt FROM @s;
      EXECUTE stmt;
    ELSE
      SET @s = CONCAT("UPDATE ",dbname,".tpl_product_category SET PRINT_IMAGE_LOCATION = NULL WHERE REC_ID = ",id);
      PREPARE stmt FROM @s;
      EXECUTE stmt;
    END IF;

    IF webimage IS NOT NULL THEN
      SET @s = CONCAT("UPDATE ",dbname,".tpl_product_category SET WEB_IMAGE_LOCATION = '",webimage,"' WHERE REC_ID = ",id);
      PREPARE stmt FROM @s;
      EXECUTE stmt;
    ELSE
      SET @s = CONCAT("UPDATE ",dbname,".tpl_product_category SET WEB_IMAGE_LOCATION = NULL WHERE REC_ID = ",id);
      PREPARE stmt FROM @s;
      EXECUTE stmt;
    END IF;

    IF cde IS NOT NULL THEN
      SET @s = CONCAT("UPDATE ",dbname,".tpl_product_category SET CODE = '",cde,"' WHERE REC_ID = ",id);
      PREPARE stmt FROM @s;
      EXECUTE stmt;
    END IF;
    
    IF txt IS NOT NULL THEN
      SET @s = CONCAT("UPDATE ",dbname,".tpl_product_category SET TEXT='",txt,"' WHERE REC_ID = ",id);
      PREPARE stmt FROM @s;
      EXECUTE stmt;
    ELSE
      SET @s = CONCAT("UPDATE ",dbname,".tpl_product_category SET TEXT = NULL WHERE REC_ID = ",id);
      PREPARE stmt FROM @s;
      EXECUTE stmt;
    END IF;
    
    SELECT 1;
    -- OLD IMPLEMENTATION HAVE ISSUES IF ONE ITEM IS NULL :|
    -- SET @s = CONCAT("UPDATE ",dbname,".tpl_product_category SET `NAME` = '",catname,"'
    --  ,`TEXT` = '",txt,"',`PRINT_ORDER` = ",prnorder,", `PRINT_IMAGE_LOCATION` ='",prnimage,"'
    --  ,`WEB_IMAGE_LOCATION` = '",webimage,"',`CODE` = '",cde,"' WHERE REC_ID = ",id);
    -- PREPARE stmt FROM @s;
    -- EXECUTE stmt;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `category_RemoveCategory` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `category_RemoveCategory`(
  IN dbname VARCHAR(255),
  IN dir INT,
  IN recid INT
)
BEGIN
    SET @s = CONCAT("DELETE FROM ",dbname,".tpl_product_category_directory WHERE PRODUCT_CATEGORY_REC_ID = ",recid," AND DIRECTORY_REC_ID = ",dir);
    PREPARE stmt FROM @s;
    EXECUTE stmt;
    SET @s = CONCAT("DELETE FROM ",dbname,".tpl_product_category WHERE REC_ID = ",recid);
    PREPARE stmt FROM @s;
    EXECUTE stmt;
    SET @s = CONCAT("SELECT REC_ID FROM ",dbname,".tpl_product_category WHERE REC_ID = ",recid);
    PREPARE stmt FROM @s;
    EXECUTE stmt;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `client_AddClient` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `client_AddClient`(
IN `DBNAME` VARCHAR(100),
IN `DIR_REC_ID` INT(11),
IN `YEAR` VARCHAR(4),
IN `CLIENTNAME` VARCHAR(255),
IN `USERNAME` VARCHAR(64),
IN `PASSWORD` VARCHAR(64),
IN `FIRSTNAME` VARCHAR(45), 
IN `LASTNAME` VARCHAR(45), 
IN `EMAIL` VARCHAR(100),
IN `DIRPACK` VARCHAR(50)
)
BEGIN
  SET @s = CONCAT("CALL ",DBNAME,".do_createClient('",DIR_REC_ID,"','",YEAR,"','",CLIENTNAME,"','",USERNAME,"','",PASSWORD,"','",FIRSTNAME,"','",LASTNAME,"','",EMAIL,"','",DIRPACK,"')");
  PREPARE stmt FROM @s;
  EXECUTE stmt;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `client_RemoveToShadow` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `client_RemoveToShadow`(IN DBNAME VARCHAR(100), IN DIR_REC_ID INT(11), IN `YEAR` VARCHAR(4), IN CLIENT_ID INT(11), IN ROOT_ID INT(11))
BEGIN
SET @s = CONCAT("DELETE FROM ",`DBNAME`,".tpl_shadow_payment_history WHERE SHADOW_REC_ID = ",`ROOT_ID`);
    PREPARE stmt FROM @s;
    EXECUTE stmt;
SET @s = CONCAT("DELETE FROM ",`DBNAME`,".tpl_shadow_additional_offering_transaction_detail WHERE SHADOW_REC_ID = ",`ROOT_ID`);
    PREPARE stmt FROM @s;
    EXECUTE stmt;
SET @s = CONCAT("DELETE FROM ",`DBNAME`,".tpl_shadow_directory_additional_offering_discount WHERE SHADOW_REC_ID = ",`ROOT_ID`);
    PREPARE stmt FROM @s;
    EXECUTE stmt;
SET @s = CONCAT("DELETE FROM ",`DBNAME`,".tpl_shadow_directory_additional_offering WHERE SHADOW_REC_ID = ",`ROOT_ID`);
    PREPARE stmt FROM @s;
    EXECUTE stmt;
SET @s = CONCAT("DELETE FROM ",`DBNAME`,".tpl_shadow_directory_offering WHERE SHADOW_REC_ID = ",`ROOT_ID`);
    PREPARE stmt FROM @s;
    EXECUTE stmt;
SET @s = CONCAT("DELETE FROM ",`DBNAME`,".tpl_shadow_product WHERE SHADOW_REC_ID = ",`ROOT_ID`);
    PREPARE stmt FROM @s;
    EXECUTE stmt;
SET @s = CONCAT("DELETE FROM ",`DBNAME`,".tpl_shadow_supplier_product_category WHERE SHADOW_REC_ID = ",`ROOT_ID`);
    PREPARE stmt FROM @s;
    EXECUTE stmt;
SET @s = CONCAT("DELETE FROM ",`DBNAME`,".tpl_shadow_supplier_key_personnel_brand WHERE SHADOW_REC_ID = ",`ROOT_ID`);
    PREPARE stmt FROM @s;
    EXECUTE stmt;
SET @s = CONCAT("DELETE FROM ",`DBNAME`,".tpl_shadow_supplier_key_personnel WHERE SHADOW_REC_ID = ",`ROOT_ID`);
    PREPARE stmt FROM @s;
    EXECUTE stmt;
SET @s = CONCAT("DELETE FROM ",`DBNAME`,".tpl_shadow_supplier_distributor WHERE SHADOW_REC_ID = ",`ROOT_ID`);
    PREPARE stmt FROM @s;
    EXECUTE stmt;
SET @s = CONCAT("DELETE FROM ",`DBNAME`,".tpl_shadow_supplier_brand WHERE SHADOW_REC_ID = ",`ROOT_ID`);
    PREPARE stmt FROM @s;
    EXECUTE stmt;
SET @s = CONCAT("DELETE FROM ",`DBNAME`,".tpl_shadow_supplier_branch_key_personnel WHERE SHADOW_REC_ID = ",`ROOT_ID`);
    PREPARE stmt FROM @s;
    EXECUTE stmt;
SET @s = CONCAT("DELETE FROM ",`DBNAME`,".tpl_shadow_supplier_branch WHERE SHADOW_REC_ID = ",`ROOT_ID`);
    PREPARE stmt FROM @s;
    EXECUTE stmt;
SET @s = CONCAT("DELETE FROM ",`DBNAME`,".tpl_shadow_supplier WHERE SHADOW_REC_ID = ",`ROOT_ID`);
    PREPARE stmt FROM @s;
    EXECUTE stmt;
SET @s = CONCAT("DELETE FROM ",`DBNAME`,".tpl_shadow_root WHERE CLIENT_REC_ID = ",`CLIENT_ID`," AND REC_ID = ",`ROOT_ID`);
    PREPARE stmt FROM @s;
    EXECUTE stmt;
SELECT 1 AS RETVAL;

END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `directory_AddDirectory` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `directory_AddDirectory`(
  IN dbname VARCHAR(100),
  IN directoryname VARCHAR(255),
  IN directoryyear INT(4),
  IN prodbase TINYINT,
  IN directoryperiodname VARCHAR(100),
  IN directoryperiodcode VARCHAR(25),
  IN directoryperiod VARCHAR(10),
  IN directoryperiodtype VARCHAR(10),
  IN directoryperiodstart DATE,
  IN directoryperiodend DATE,
  IN std_listingdesc TEXT,
  IN std_costexclgst DOUBLE(15,3),
  IN std_gstrate DOUBLE(15,3),
  IN std_maxbranch INT(11),
  IN std_maxpersonnel INT(11),
  IN std_maxbrand INT(11),
  IN std_maxprodcat INT(11),
  IN adv_listingdesc TEXT,
  IN adv_costexclgst DOUBLE(15,3),
  IN adv_gstrate DOUBLE(15,3),
  IN adv_maxbranch INT(11),
  IN adv_maxpersonnel INT(11),
  IN adv_maxbrand INT(11),
  IN adv_maxprodcat INT(11),
  IN prem_listingdesc TEXT,
  IN prem_costexclgst DOUBLE(15,3),
  IN prem_gstrate DOUBLE(15,3),
  IN prem_maxbranch INT(11),
  IN prem_maxpersonnel INT(11),
  IN prem_maxbrand INT(11),
  IN prem_maxprodcat INT(11),
  IN addoffer_name VARCHAR(255),
  IN addoffer_description VARCHAR(255),
  IN addoffer_code VARCHAR(24),
  IN addoffer_costexclgst DOUBLE(15,3),
  IN addoffer_gstrate DOUBLE(15,3),
  IN directory_desc VARCHAR(2048),
  IN dir_default TINYINT,
  IN dir_standard TINYINT,
  IN dir_advanced TINYINT,
  IN dir_premium TINYINT 
)
BEGIN

  SET @s = CONCAT("CALL ",dbname,".do_createDirectory('",

                    directoryname,"',",

                    directoryyear,",",

                    prodbase,",'",
                    
                    directoryperiodname, "','",
                    
                    directoryperiodcode, "',",                    

                    directoryperiod,",'",

                    directoryperiodtype,"','",

                    directoryperiodstart,"','",

                    directoryperiodend,"','",

                    std_listingdesc,"',",

                    std_costexclgst,",",

                    std_gstrate,",",

                    std_maxbranch,",",

                    std_maxpersonnel,",",

                    std_maxbrand,",",

                    std_maxprodcat,",'",

                    adv_listingdesc,"',",

                    adv_costexclgst,",",

                    adv_gstrate,",",

                    adv_maxbranch,",",

                    adv_maxpersonnel,",",

                    adv_maxbrand,",",

                    adv_maxprodcat,",'",

                    prem_listingdesc,"',",

                    prem_costexclgst,",",

                    prem_gstrate,",",

                    prem_maxbranch,",",

                    prem_maxpersonnel,",",

                    prem_maxbrand,",",

                    prem_maxprodcat,",'",

                    addoffer_name,"','",

                    addoffer_description,"','",

                    addoffer_code,"',",

                    addoffer_costexclgst,",",

                    addoffer_gstrate,",'",

                    directory_desc,"',",

                    dir_default,",", 
  
		    dir_standard,",",
                 
                    dir_advanced,",",

                    dir_premium,")");

  PREPARE stmt FROM @s; 

  EXECUTE stmt;

  DEALLOCATE PREPARE stmt;

END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetAllClient` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `GetAllClient`(IN dbname VARCHAR(100))
BEGIN
    SET @s = CONCAT("SELECT * FROM ",dbname,".tpl_client");

    PREPARE stmt FROM @s;

    EXECUTE stmt;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetChildCountProductCategory` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `GetChildCountProductCategory`(
IN dbname VARCHAR(255),
IN dir INT,
IN recid INT
)
BEGIN
  SET @s = CONCAT("SELECT COUNT(*) as COUNTER FROM ",dbname,".tpl_product_category ",
            "INNER JOIN ",dbname,".tpl_product_category_directory ", 
            "ON (tpl_product_category.REC_ID = tpl_product_category_directory.PRODUCT_CATEGORY_REC_ID) ",
            "WHERE (tpl_product_category_directory.DIRECTORY_REC_ID = ",dir,") ",
            "AND (tpl_product_category.PARENT_PRODUCT_CATEGORY_REC_ID =", recid, ")");
  PREPARE stmt FROM @s;
  EXECUTE stmt;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetClientSupplierType` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `GetClientSupplierType`(
IN db_name varchar(100),
IN clientname varchar(255),
IN dir_year varchar(4)
)
BEGIN
  SET @s = CONCAT('SELECT root.REC_ID, (select NAME from ',db_name,'.tpl_client where REC_ID = root.CLIENT_REC_ID) as SUPPLIER_NAME, root.PROOF_NAME, (select CODE from ',db_name,'.tpl_supplier_type WHERE rec_id = supplier.SUPPLIER_TYPE_REC_ID) as SUPPLIER_TYPE, root.STATE FROM ',db_name,'.tpl_shadow_root as root INNER JOIN ',db_name,'.tpl_shadow_supplier as supplier
    ON root.REC_ID = supplier.SHADOW_REC_ID WHERE root.CLIENT_REC_ID = (select REC_ID from ',db_name,'.tpl_client where name = "',clientname,'" AND root.DIRECTORY_YEAR = "',dir_year,'")');
  PREPARE stmt FROM @s;
  EXECUTE stmt;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetDirByID` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `GetDirByID`(IN dbname VARCHAR(100), IN DIR_REC_ID INT)
BEGIN

    SET @s = CONCAT("SELECT * FROM ",dbname,".tpl_directory WHERE REC_ID ='", DIR_REC_ID,"'");

    PREPARE stmt FROM @s;

    EXECUTE stmt;

END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetDirectoryCategoriesByID` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `GetDirectoryCategoriesByID`(
IN dbname VARCHAR(100),
IN directory_id INT(11),
IN category_parent_id INT(11)
)
BEGIN

/*IF category_parent_id = '0' THEN
  SET @category_parent_id = NULL;
END IF;*/
IF category_parent_id = '0' THEN
  SET @s = CONCAT("SELECT tpl_product_category.REC_ID, tpl_product_category.NAME, tpl_product_category.PARENT_PRODUCT_CATEGORY_REC_ID FROM ",dbname,
                  ".tpl_product_category INNER JOIN ",dbname,".tpl_product_category_directory ON ", 
                  "(tpl_product_category.REC_ID = tpl_product_category_directory.PRODUCT_CATEGORY_REC_ID) ",
                  "WHERE (tpl_product_category_directory.DIRECTORY_REC_ID = ",directory_id,") ",
                  "AND (tpl_product_category.PARENT_PRODUCT_CATEGORY_REC_ID IS NULL) ORDER BY tpl_product_category.NAME ASC");
ELSE
  SET @s = CONCAT("SELECT tpl_product_category.REC_ID, tpl_product_category.NAME, tpl_product_category.PARENT_PRODUCT_CATEGORY_REC_ID FROM ",dbname,
                  ".tpl_product_category INNER JOIN ",dbname,".tpl_product_category_directory ON ", 
                  "(tpl_product_category.REC_ID = tpl_product_category_directory.PRODUCT_CATEGORY_REC_ID) ",
                  "WHERE (tpl_product_category_directory.DIRECTORY_REC_ID = ",directory_id,") ",
                  "AND (tpl_product_category.PARENT_PRODUCT_CATEGORY_REC_ID =", category_parent_id, ") ORDER BY tpl_product_category.NAME ASC");
END IF;
PREPARE stmt FROM @s;
EXECUTE stmt;

END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetLiveClientCountProductCategory` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `GetLiveClientCountProductCategory`(
IN dbname VARCHAR(255),
IN dir INT,
IN recid INT
)
BEGIN
  SET @s = CONCAT("SELECT COUNT(*) as COUNTER FROM ",dbname,".tpl_supplier_product_category AS pc ",
            "INNER JOIN ",dbname,".tpl_supplier AS sr ", 
            "ON (sr.REC_ID = pc.SUPPLIER_REC_ID) ",
            "WHERE (pc.PRODUCT_CATEGORY_REC_ID = ",recid,")");
  PREPARE stmt FROM @s;
  EXECUTE stmt;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetProductCategoryByID` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `GetProductCategoryByID`(IN dbname VARCHAR(100), IN recId INT(11))
BEGIN
    SET @s = CONCAT("SELECT * from ",dbname,".tpl_product_category where REC_ID = '",recId,"'");
    PREPARE stmt FROM @s;
    EXECUTE stmt;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetProductCategoryParentByID` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `GetProductCategoryParentByID`(IN dbname VARCHAR(100), IN recId INT(11))
BEGIN
  SET @s = CONCAT("SELECT PARENT_PRODUCT_CATEGORY_REC_ID, NAME, REC_ID from ",dbname,".tpl_product_category where REC_ID = '",recId,"'");
  PREPARE stmt FROM @s;
  EXECUTE stmt;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetRecords` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `GetRecords`(
IN dbname VARCHAR(255),
IN tblname VARCHAR(255),
IN cond TEXT)
BEGIN
  SET @s = CONCAT("SELECT * FROM ",dbname,".",tblname,"  WHERE ",cond);
  PREPARE stmt FROM @s;
  EXECUTE stmt;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetShadowClientCountProductCategory` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `GetShadowClientCountProductCategory`(
IN dbname VARCHAR(255),
IN dir INT,
IN recid INT
)
BEGIN
  SET @s = CONCAT("SELECT COUNT(*) as COUNTER FROM ",dbname,".tpl_shadow_supplier_product_category AS pc ",
            "INNER JOIN ",dbname,".tpl_shadow_root AS sr ", 
            "ON (sr.REC_ID = pc.SHADOW_REC_ID) ",
            "WHERE (pc.PRODUCT_CATEGORY_REC_ID = ",recid,") ",
            "AND (sr.DIRECTORY_REC_ID =", dir, ")");
  PREPARE stmt FROM @s;
  EXECUTE stmt;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `l2s_GetDirectoryAdditionalOffering` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`tplweb`@`localhost`*/ /*!50003 PROCEDURE `l2s_GetDirectoryAdditionalOffering`(IN dbname VARCHAR(100), 
    IN targetdir INT(11), IN targetyear VARCHAR(4))
BEGIN
    SET @s = CONCAT("SELECT * FROM ",dbname,".tpl_directory_additional_offering WHERE (DIRECTORY_REC_ID =", targetdir,") AND (DIRECTORY_YEAR = '",targetyear,"')");
    PREPARE stmt FROM @s;
    EXECUTE stmt;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `l2s_GetDirectoryAdditionalOfferingDiscount` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`tplweb`@`localhost`*/ /*!50003 PROCEDURE `l2s_GetDirectoryAdditionalOfferingDiscount`(
    IN dbname VARCHAR(100), IN diraddofferid INT(11)
    )
BEGIN
    SET @s = CONCAT("SELECT * FROM ",dbname,".tpl_directory_additional_offering_discount WHERE (DIRECTORY_ADDITIONAL_OFFERING_REC_ID =", diraddofferid,")");
    PREPARE stmt FROM @s;
    EXECUTE stmt;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `l2s_GetDirectoryOffering` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `l2s_GetDirectoryOffering`(IN dbname VARCHAR(100), 
    IN targetdir INT(11), IN targetyear VARCHAR(4))
BEGIN
    SET @s = CONCAT("SELECT * FROM ",dbname,".tpl_directory_offering WHERE (DIRECTORY_REC_ID =", targetdir,") AND (DIRECTORY_YEAR = '",targetyear,"')");
    PREPARE stmt FROM @s;
    EXECUTE stmt;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `l2s_GetShadowRootByTargetYear` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`tplweb`@`localhost`*/ /*!50003 PROCEDURE `l2s_GetShadowRootByTargetYear`(
    IN dbname VARCHAR(100), 
    IN targetYear VARCHAR(4), 
    IN targetDir INT(11))
BEGIN
SET @s = CONCAT("SELECT * FROM ",dbname,".tpl_shadow_root WHERE DIRECTORY_YEAR = ", targetYear, " AND DIRECTORY_REC_ID= ",targetDir,";");
    
    PREPARE stmt FROM @s;
    
    EXECUTE stmt;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `l2s_GetSupplier` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`tplweb`@`localhost`*/ /*!50003 PROCEDURE `l2s_GetSupplier`(IN dbname VARCHAR(100), IN CLIENT_ID INT)
BEGIN
    SET @s = CONCAT("SELECT * FROM ",dbname,".tpl_supplier WHERE CLIENT_REC_ID ='", CLIENT_ID,"'");
    PREPARE stmt FROM @s;
    EXECUTE stmt;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `l2s_GetSupplierBranchBySupplierID` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`tplweb`@`localhost`*/ /*!50003 PROCEDURE `l2s_GetSupplierBranchBySupplierID`(IN dbname VARCHAR(100), IN supplierrecid INT(11))
BEGIN
    SET @s = CONCAT("SELECT * FROM ",dbname,".tpl_supplier_branch WHERE (SUPPLIER_REC_ID = ", supplierrecid,")");
    PREPARE stmt FROM @s;
    EXECUTE stmt;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `l2s_GetSupplierBranchKeyPersonnelByPKeyID` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`tplweb`@`localhost`*/ /*!50003 PROCEDURE `l2s_GetSupplierBranchKeyPersonnelByPKeyID`(
    IN dbname VARCHAR(100), 
    IN supplierkeypersonid INT(11))
BEGIN
    SET @s = CONCAT("SELECT * FROM ",dbname,".tpl_supplier_branch_key_personnel WHERE (SUPPLIER_KEY_PERSONNEL_REC_ID = ", supplierkeypersonid,")");
    PREPARE stmt FROM @s;
    EXECUTE stmt;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `l2s_GetSupplierBrandBySupplierID` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`tplweb`@`localhost`*/ /*!50003 PROCEDURE `l2s_GetSupplierBrandBySupplierID`(IN dbname VARCHAR(100), IN supplierrecid INT)
BEGIN
    SET @s = CONCAT("SELECT * FROM ",dbname,".tpl_supplier_brand WHERE (SUPPLIER_REC_ID = ",supplierrecid,")");
    PREPARE stmt FROM @s;
    EXECUTE stmt;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `l2s_GetSupplierByClientID` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`tplweb`@`localhost`*/ /*!50003 PROCEDURE `l2s_GetSupplierByClientID`(
    IN dbname VARCHAR(100), 
    IN clientid INT)
BEGIN
    SET @s = CONCAT("SELECT * FROM ",dbname,".tpl_supplier WHERE (CLIENT_REC_ID = ",clientid,")");
    PREPARE stmt FROM @s;
    EXECUTE stmt;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `l2s_GetSupplierDirectory` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `l2s_GetSupplierDirectory`(IN dbname VARCHAR(100), IN SUPPLIER_ID INT, IN DIRECTORY_ID INT)
BEGIN
    SET @s = CONCAT("SELECT * FROM ",dbname,".tpl_supplier_directory WHERE (SUPPLIER_REC_ID ='", SUPPLIER_ID,"') AND (DIRECTORY_REC_ID = '", DIRECTORY_ID,"')");
    PREPARE stmt FROM @s;
    EXECUTE stmt;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `l2s_GetSupplierDistributorBySupplierID` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`tplweb`@`localhost`*/ /*!50003 PROCEDURE `l2s_GetSupplierDistributorBySupplierID`(
    IN dbname VARCHAR(100), 
    IN supplierid INT(11))
BEGIN
    SET @s = CONCAT("SELECT * FROM ",dbname,".tpl_supplier_distributor WHERE (SUPPLIER_REC_ID = ",supplierid,")");
    PREPARE stmt FROM @s;
    EXECUTE stmt;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `l2s_GetSupplierKeyPersonnelBrandBySupplierID` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`tplweb`@`localhost`*/ /*!50003 PROCEDURE `l2s_GetSupplierKeyPersonnelBrandBySupplierID`(
    IN dbname VARCHAR(100), 
    IN supplierkeypersonid INT(11))
BEGIN
    SET @s = CONCAT("SELECT * FROM ",dbname,".tpl_supplier_key_personnel_brand WHERE (SUPPLIER_KEY_PERSONNEL_REC_ID = ", supplierkeypersonid,")");
    PREPARE stmt FROM @s;
    EXECUTE stmt;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `l2s_GetSupplierKeyPersonnelBySupplierID` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`tplweb`@`localhost`*/ /*!50003 PROCEDURE `l2s_GetSupplierKeyPersonnelBySupplierID`(
    IN dbname VARCHAR(100), 
    IN supplierrecid INT(11))
BEGIN
    SET @s = CONCAT("SELECT * FROM ",dbname,".tpl_supplier_key_personnel WHERE(SUPPLIER_REC_ID = ",supplierrecid,")");
    PREPARE stmt FROM @s;
    EXECUTE stmt;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `l2s_GetSupplierProductBySupplierID` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`tplweb`@`localhost`*/ /*!50003 PROCEDURE `l2s_GetSupplierProductBySupplierID`(
    IN dbname VARCHAR(100), 
    IN supplierrecid INT(11))
BEGIN
    SET @s = CONCAT("SELECT * FROM ",dbname,".tpl_product WHERE(SUPPLIER_REC_ID = ",supplierrecid,")");
    PREPARE stmt FROM @s;
    EXECUTE stmt;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `l2s_GetSupplierProductCategoryBySupplierID` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`tplweb`@`localhost`*/ /*!50003 PROCEDURE `l2s_GetSupplierProductCategoryBySupplierID`(
    IN dbname VARCHAR(100), 
    IN supplierrecid INT(11))
BEGIN
    SET @s = CONCAT("SELECT * FROM ",dbname,".tpl_supplier_product_category WHERE(SUPPLIER_REC_ID = ",supplierrecid,")");
    PREPARE stmt FROM @s;
    EXECUTE stmt;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `l2s_Insert2ShadowDirectoryAdditionalOffering` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`tplweb`@`localhost`*/ /*!50003 PROCEDURE `l2s_Insert2ShadowDirectoryAdditionalOffering`(
    IN dbname VARCHAR(100), IN rootid INT(11), IN dirAddOfferingid INT(11),
    IN targetdir INT(11),IN targetyear VARCHAR(4), IN AddOfferCode VARCHAR(50), 
    IN AddOfferName VARCHAR(255), IN description TEXT, IN costgst FLOAT, IN gstrate FLOAT)
BEGIN
    SET @s = CONCAT("INSERT INTO ",dbname,".tpl_shadow_directory_additional_offering (`SHADOW_REC_ID`,
    `MASTER_REC_ID`, `REC_DATETIME`, `REC_TIMESTAMP`, `REC_ACTION`, `DIRECTORY_REC_ID`,
    `DIRECTORY_YEAR`, `CODE`, `NAME`, `DESCRIPTION`, `COST_EXCL_GST`, `GST_RATE`) VALUE(
    ",rootid,",",dirAddOfferingid,",NOW(), NOW(), NULL,",targetdir,",'",targetyear,"','",AddOfferCode,"'
    ,'",AddOfferName,"','",description,"',",costgst,",",gstrate,")" );
    
    PREPARE stmt FROM @s;
    EXECUTE stmt;

    SET @execq = CONCAT("SELECT REC_ID FROM ",dbname,".tpl_shadow_directory_additional_offering WHERE REC_ID = ",LAST_INSERT_ID() );
    PREPARE stmt FROM @execq;
    EXECUTE stmt;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `l2s_Insert2ShadowDirectoryAdditionalOfferingDiscount` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`tplweb`@`localhost`*/ /*!50003 PROCEDURE `l2s_Insert2ShadowDirectoryAdditionalOfferingDiscount`(
    IN dbname VARCHAR(100), IN rootid INT(11), IN diraddofferdisid INT(11),
    IN shadowaddofferid INT(11), IN volume INT(10), IN discountperunit FLOAT)
BEGIN
    SET @s = CONCAT("INSERT INTO ",dbname,".tpl_shadow_directory_additional_offering_discount (`SHADOW_REC_ID`,
    `MASTER_REC_ID`, `REC_DATETIME`, `REC_TIMESTAMP`, `REC_ACTION`, `SHADOW_DIRECTORY_ADDITIONAL_OFFERING_REC_ID`,
    `VOLUME`, `DISCOUNT_PER_UNIT`) VALUE(
    ",rootid,",",diraddofferdisid,",NOW(), NOW(), NULL, ",shadowaddofferid,", ",volume,", ",discountperunit,")" );
    
    PREPARE stmt FROM @s;
    EXECUTE stmt;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `l2s_Insert2ShadowDirectoryOffering` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `l2s_Insert2ShadowDirectoryOffering`(
    IN dbname VARCHAR(100), 
    IN rootid INT(11), 
    IN dirOfferingid INT(11),
    IN targetdir INT(11),
    IN targetyear VARCHAR(4), 
    IN offerName VARCHAR(255),
    IN description TEXT, 
    IN costgst FLOAT, 
    IN gstrate FLOAT, 
    IN maxbranchcnt INT(10), 
    IN maxkeypersonnelcnt INT(10),
    IN maxbrandcnt INT(10), 
    IN maxprodcatcnt INT(10) )
BEGIN

    SET @s1 = CONCAT("SET @exist = (SELECT REC_ID FROM ",dbname,".tpl_shadow_directory_offering ",
                        "WHERE SHADOW_REC_ID = ",rootid," AND MASTER_REC_ID = ",dirOfferingid,
                        " AND DIRECTORY_REC_ID = ",targetdir,
                        " AND DIRECTORY_YEAR = ",targetyear, 
                        ");");

    PREPARE stmt2 FROM @s1;
    
    EXECUTE stmt2;


     IF @exist IS NULL THEN

         SET @s = CONCAT("INSERT INTO ",dbname,".tpl_shadow_directory_offering (`SHADOW_REC_ID`,
         `MASTER_REC_ID`, `REC_DATETIME`, `REC_TIMESTAMP`, `REC_ACTION`, `DIRECTORY_REC_ID`,
         `DIRECTORY_YEAR`, `NAME`, `DESCRIPTION`, `COST_EXCL_GST`, `GST_RATE`, `MAX_BRANCH_COUNT`,
         `MAX_KEY_PERSONNEL_COUNT`, `MAX_BRAND_COUNT`, `MAX_PRODUCT_CATEGORY_COUNT`) VALUE(",rootid,"
         ,",dirOfferingid,",NOW(), NOW(), NULL,",targetdir,",'",targetyear,"','",offerName,"'
         ,'",description,"',",costgst,",",gstrate,",",maxbranchcnt,",",maxkeypersonnelcnt,"
         ,",maxbrandcnt,",",maxprodcatcnt,")" );
         
         PREPARE stmt FROM @s;

         EXECUTE stmt;
         
        SET @execq = CONCAT("SELECT REC_ID FROM ",dbname,".tpl_shadow_directory_offering WHERE REC_ID = ",LAST_INSERT_ID() );
        PREPARE stmt3 FROM @execq;
        EXECUTE stmt3;
     
     ELSE
        
        SELECT @exist REC_ID;
     
     END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `l2s_Insert2ShadowRootDefaultDirectoryOffer` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `l2s_Insert2ShadowRootDefaultDirectoryOffer`()
BEGIN

END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `l2s_InsertClient2Root` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `l2s_InsertClient2Root`(
	IN dbname VARCHAR(100), 
	IN cid INT(11), 
	IN targetdir INT(11),
	IN targetyear VARCHAR(4), 
	IN usr VARCHAR(50), 
	IN pwd VARCHAR(50), 
	IN email VARCHAR(255))
    MODIFIES SQL DATA
    DETERMINISTIC
BEGIN

	SET @s3 = CONCAT("SET @exist = (SELECT REC_ID FROM ",dbname,".tpl_shadow_root WHERE ",
                                "DIRECTORY_YEAR = ", targetyear, " AND ",
                                "DIRECTORY_REC_ID = ",targetdir, " AND ",
                                "CLIENT_REC_ID = ",cid,");");

	PREPARE stmt3 FROM @s3;
	EXECUTE stmt3;

	IF @exist IS NULL THEN
	
	    SET @s = CONCAT("INSERT INTO ",dbname,".tpl_shadow_root (`REC_DATETIME`, `REC_TIMESTAMP`, `CLIENT_REC_ID`
		,`DIRECTORY_REC_ID`, `DIRECTORY_YEAR`, `STATE`, `USERNAME`, `PASSWORD`, `USER_EMAIL_ADDRESS`,
		`LISTING_COST_EXCL_GST`,`LISTING_COST_INCL_GST`,
		`TRANSACTION_TOTAL_EXCL_GST`,`TRANSACTION_TOTAL_INCL_GST`,`TOTAL_PAID_TO_DATE`) VALUE(NOW(),NOW(),",cid,",
		",targetdir,",'",targetyear,"','OPEN','",usr,"','",pwd,"','",email,"',0.00,0.00,0.00,0.00,0.00)");

	    PREPARE stmt FROM @s;
	    EXECUTE stmt;

	    SET @execq = CONCAT("SELECT REC_ID FROM ",dbname,".tpl_shadow_root WHERE REC_ID = ",LAST_INSERT_ID() );
	    PREPARE stmt FROM @execq;
	    EXECUTE stmt;

	ELSE
	
		SELECT @exist REC_ID;

	END IF;
	
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `l2s_InsertP2SProduct` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `l2s_InsertP2SProduct`(
    IN dbname VARCHAR(100), 
    IN rootid INT(11), 
    IN recid INT(11), 
    IN supplierrecid INT(11),
    IN targetdir INT(11), 
    IN prodcatid INT(11), 
    IN label VARCHAR(255), 
    IN varietal VARCHAR(255),
    IN vintage VARCHAR(255), 
    IN region_origin VARCHAR(255), 
    IN country_origin VARCHAR(255),
    IN product_text TEXT, 
    IN prn_img_location VARCHAR(255), 
    IN web_img_location VARCHAR(255))
BEGIN

   	SET @s3 = CONCAT("SET @exist = (SELECT REC_ID FROM ",dbname,".tpl_shadow_product WHERE ",
                                "MASTER_REC_ID = ", recid, " AND ",
                                "SHADOW_REC_ID = ",rootid,
                                ");");

    PREPARE stmt3 FROM @s3;
    
    EXECUTE stmt3;

    IF @exist IS NULL THEN

    SET @s = CONCAT_WS('',"INSERT INTO ",dbname,".tpl_shadow_product(",
                        "`SHADOW_REC_ID`, ",
                        "`MASTER_REC_ID`, ",
                        "`REC_DATETIME`, ",
                        "`REC_TIMESTAMP`, ",
                        "`REC_ACTION`, ",
                        "`SUPPLIER_REC_ID`, ",
                        "`DIRECTORY_REC_ID`, ",
                        "`PRODUCT_CATEGORY_REC_ID`, ",
                        "`LABEL_NAME`, ",
                        "`VARIETAL`, ",
                        "`VINTAGE`, ",
                        "`REGION_OF_ORIGIN`, ",
                        "`COUNTRY_OF_ORIGIN`, ",
                        "`TEXT`, ",
                        "`PRINT_IMAGE_LOCATION`, ",
                        "`WEB_IMAGE_LOCATION`)",
                    " VALUE (",
                        rootid,",",
                        recid,
                        ",NOW(),",
                        "NOW(),",
                        "NULL,",
                        supplierrecid,
                        ",",targetdir,
                        ",",prodcatid,
                        ",'",label,
                        "','",varietal,
                        "','",vintage,
                        "','",region_origin,
                        "','",country_origin,
                        "','",product_text,
                        "','",prn_img_location,
                        "','",web_img_location,
                        "')");
    -- SELECT @s;
    
    PREPARE stmt FROM @s;
    
    EXECUTE stmt;
    
    ELSE
    
        SELECT @exist AS REC_ID;
    
    END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `l2s_InsertSBKP2SSBKPersonnel` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`tplweb`@`localhost`*/ /*!50003 PROCEDURE `l2s_InsertSBKP2SSBKPersonnel`(
    IN dbname VARCHAR(100), IN rootid INT(11), IN recid INT(11), IN supplierbranchid INT(11), 
    IN keypersonnelid INT(11), IN personnelorder INT(11))
BEGIN
    SET @s = CONCAT("INSERT INTO ",dbname,".tpl_shadow_supplier_branch_key_personnel(`SHADOW_REC_ID`, `MASTER_REC_ID`, ",
                    " `REC_DATETIME`, `REC_TIMESTAMP`, `REC_ACTION`, `SUPPLIER_BRANCH_REC_ID`, `SUPPLIER_KEY_PERSONNEL_REC_ID`, `ORDER`)",
                    " VALUE (",rootid,",",recid,",NOW(),NOW(),NULL,",supplierbranchid,",",keypersonnelid,",",personnelorder,")");
    PREPARE stmt FROM @s;
    EXECUTE stmt;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `l2s_InsertSKPBrand2ShadowSKPBrand` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `l2s_InsertSKPBrand2ShadowSKPBrand`(
    IN dbname VARCHAR(100), 
    IN rootid INT(11), 
    IN recid INT(11), 
    IN keypersonnelid INT(11), 
    IN supplierbrandid INT(11), 
    IN role VARCHAR(255), 
    IN keypersonbrandorder INT(11))
BEGIN
    SET @s = CONCAT_WS('',"INSERT INTO ",dbname,".tpl_shadow_supplier_key_personnel_brand(",
                    "`SHADOW_REC_ID`, ",
                    "`MASTER_REC_ID`, ",
                    "`REC_DATETIME`, ",
                    "`REC_TIMESTAMP`, ",
                    "`REC_ACTION`, ",
                    "`SUPPLIER_KEY_PERSONNEL_REC_ID`, ",
                    "`SUPPLIER_BRAND_REC_ID`, ",
                    "`ROLE`, ",
                    "`ORDER`)",
                    "VALUES (",
                    " rootid,",
                    " recid,",
                    " NOW(),",
                    " NOW(),",
                    " NULL,",
                    " keypersonnelid,",
                    " supplierbrandid ",
                    ",'",role,
                    "',",keypersonbrandorder,
                    ")");
    PREPARE stmt FROM @s;
    EXECUTE stmt;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `l2s_InsertSPC2SSPCategory` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `l2s_InsertSPC2SSPCategory`(
    IN dbname VARCHAR(100), 
    IN rootid INT(11), 
    IN recid INT(11), 
    IN supplierrecid INT(11), 
    IN prodcatrecid INT(11), 
    IN haslogo TINYINT(1))
BEGIN
    
    SET @s3 = CONCAT("SET @exist = (SELECT REC_ID FROM ",dbname,".tpl_shadow_supplier_product_category ",
                                    "WHERE SHADOW_REC_ID = ",rootid,
                                    " AND PRODUCT_CATEGORY_REC_ID = ", prodcatrecid, 
                                    ");");

    PREPARE stmt3 FROM @s3;
    
    EXECUTE stmt3;

    IF @exist IS NULL THEN
    
    
    SET @s = CONCAT_WS('',"INSERT INTO ",dbname,".tpl_shadow_supplier_product_category(",
                    "`SHADOW_REC_ID`, ",
                    "`MASTER_REC_ID`, ",
                    "`REC_DATETIME`, ",
                    "`REC_TIMESTAMP`, ",
                    "`REC_ACTION`, ",
                    "`SUPPLIER_REC_ID`, ",
                    "`PRODUCT_CATEGORY_REC_ID`, ",
                    "`IS_LOGO_LISTING`) ",
                    "VALUES (",
                     rootid,",",
                     recid,",",
                    " NOW(),",
                    " NOW(),",
                    " NULL,",
                     supplierrecid,",",
                     prodcatrecid,",",
                     haslogo,
                    ")");
    
    PREPARE stmt FROM @s;
    
    EXECUTE stmt;
    
    ELSE
    
        SELECT @exist AS REC_ID;
    
    END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `l2s_InsertSupplier2ShadowSupplier` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `l2s_InsertSupplier2ShadowSupplier`(
        IN dbname VARCHAR(100), 
        IN rootid INT(11), 
        IN supplierid INT(11),
        IN supplierclientid INT(11),
        IN suppliername VARCHAR(255), 
        IN tradingname VARCHAR(255), 
        IN contactname VARCHAR(255), 
        IN contactposition VARCHAR(255), 
        IN phone VARCHAR(48), 
        IN fphone VARCHAR(48), 
        IN fax VARCHAR(48), 
        IN ffax VARCHAR(48), 
        IN email VARCHAR(255), 
        IN web VARCHAR(255), 
        IN paba VARCHAR(255), 
        IN pasa VARCHAR(255), 
        IN pasub VARCHAR(255), 
        IN pacity VARCHAR(255), 
        IN pastate VARCHAR(255), 
        IN pacountry VARCHAR(255), 
        IN papcode VARCHAR(12),
        IN papxid VARCHAR(45),
        IN padpid VARCHAR(45),
        IN palat FLOAT(16,12),
        IN palng FLOAT(16,12),
        IN paheight INT(11),
        IN pacomplete VARCHAR(1024),
        IN poabaddress VARCHAR(255), 
        IN poasaddress VARCHAR(255),
        IN poasub VARCHAR(255), 
        IN poacity VARCHAR(255), 
        IN poastate VARCHAR(255), 
        IN poacountry VARCHAR(255), 
        IN poapcode VARCHAR(12), 
        IN cprofile TEXT, 
        IN plogo VARCHAR(255), 
        IN wlogoloc VARCHAR(255), 
        IN suptrecid INT(11))
BEGIN

    SET @s3 = CONCAT("SET @exist = (SELECT REC_ID FROM ",dbname,".tpl_shadow_supplier ",
                                    "WHERE SHADOW_REC_ID = ",rootid,
                                    ");");

    PREPARE stmt3 FROM @s3;
    
    EXECUTE stmt3;


     IF @exist IS NULL THEN

        SET @s = CONCAT("INSERT INTO ",dbname,".tpl_shadow_supplier(",
                        " `SHADOW_REC_ID`, ",
                        " `MASTER_REC_ID`, ",
                        " `REC_DATETIME`, ",
                        " `REC_TIMESTAMP`, ",
                        " `REC_ACTION`, ",
                        " `CLIENT_REC_ID`, ",
                        " `NAME`, ",
                        " `TRADING_AS_NAME`, ",
                        " `CONTACT_NAME`, ",
                        " `CONTACT_POSITION`, ",
                        " `TELEPHONE_NO`, ",
                        " `FREE_TELEPHONE_NO`, ",
                        " `FAX_NO`, ",
                        " `FREE_FAX_NO`, ",
                        " `EMAIL_ADDRESS`, ",
                        " `WEBSITE_ADDRESS`, ",
                        " `PHYSICAL_ADDRESS_BUILDING_ADDRESS`, ",
                        " `PHYSICAL_ADDRESS_STREET_ADDRESS`, ",
                        " `PHYSICAL_ADDRESS_SUBURB`, ",
                        " `PHYSICAL_ADDRESS_CITY`, ",
                        " `PHYSICAL_ADDRESS_STATE`, ",
                        " `PHYSICAL_ADDRESS_COUNTRY`, ",
                        " `PHYSICAL_ADDRESS_POST_CODE`, ",
                        " `PHYSICAL_ADDRESS_PXID`, ",
                        " `PHYSICAL_ADDRESS_DPID`, ",
                        " `PHYSICAL_ADDRESS_LATITUDE`, ",
                        " `PHYSICAL_ADDRESS_LONGITUDE`, ",
                        " `PHYSICAL_ADDRESS_HEIGHT`, ",
                        " `PHYSICAL_ADDRESS_COMPLETE`, ",
                        " `POSTAL_ADDRESS_BUILDING_ADDRESS`, ",
                        " `POSTAL_ADDRESS_STREET_ADDRESS`, ",
                        " `POSTAL_ADDRESS_SUBURB`, ",
                        " `POSTAL_ADDRESS_CITY`, ",
                        " `POSTAL_ADDRESS_STATE`, ",
                        " `POSTAL_ADDRESS_COUNTRY`, ",
                        " `POSTAL_ADDRESS_POST_CODE`,",
                        " `COMPANY_PROFILE_TEXT`, ",
                        " `PRINT_LOGO_LOCATION`, ",
                        " `WEB_LOGO_LOCATION`, ",
                        " `SUPPLIER_TYPE_REC_ID`) ",
                " VALUES (",rootid,
                        ",",supplierid,
                        ", NOW()",
                        ", NOW()",
                        ", NULL",
                        ", ",supplierclientid,
                        ",'",suppliername,
                        "','",tradingname,
                        "','",contactname,
                        "','",contactposition,
                        "','",phone,
                        "','",fphone,
                        "','",fax,
                        "','",ffax,
                        "','",email,
                        "','",web,
                        "','",paba,
                        "','",pasa,
                        "','",pasub,
                        "','",pacity,
                        "','",pastate,
                        "','",pacountry,
                        "','",papcode,
                        "','",papxid,
                        "','",padpid,
                        "',",palat,
                        ",",palng,
                        ",",paheight,
                        ",'",pacomplete,
                        "','",poabaddress,
                        "','",poasaddress,
                        "','",poasub,
                        "','",poacity,
                        "','",poastate,
                        "','",poacountry,
                        "','",poapcode,
                        "','",cprofile,
                        "','",plogo,
                        "','",wlogoloc,
                        "',",suptrecid,
                        ");");

         PREPARE stmt FROM @s;

         EXECUTE stmt;

        -- SELECT @s;

        SET @execq = CONCAT("SELECT REC_ID FROM ",dbname,".tpl_shadow_supplier WHERE REC_ID = ",LAST_INSERT_ID() );

        PREPARE stmt FROM @execq;

        EXECUTE stmt;
        
    ELSE
    
        SELECT @exist AS REC_ID;
    
    END IF;

END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `l2s_InsertSupplierBranch2ShadowSupplierBranch` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `l2s_InsertSupplierBranch2ShadowSupplierBranch`(
    IN dbname VARCHAR(100), 
    IN rootid INT(11), 
    IN supplierbranchid INT(11),
    IN supplierid INT(11), 
    IN sorder INT(10), 
    IN branchname VARCHAR(255), 
    IN phone VARCHAR(48),
    IN fphone VARCHAR(48), 
    IN fax VARCHAR(48), 
    IN ffax VARCHAR(48), 
    IN email VARCHAR(255),
    IN paba VARCHAR(255), 
    IN pasa VARCHAR(255), 
    IN pasub VARCHAR(255), 
    IN pacity VARCHAR(255), 
    IN pastate VARCHAR(255), 
    IN pacountry VARCHAR(255), 
    IN papcode VARCHAR(12),
    IN papxid VARCHAR(45),
    IN padpid VARCHAR(45),
    IN palat FLOAT(16,12),
    IN palng FLOAT(16,12),
    IN paheight INT(11),
    IN pacomplete VARCHAR(1024),
    IN poabaddress VARCHAR(255), 
    IN poasaddress VARCHAR(255),
    IN poasub VARCHAR(255), 
    IN poacity VARCHAR(255), 
    IN poastate VARCHAR(255), 
    IN poacountry VARCHAR(255), 
    IN poapcode VARCHAR(12))
BEGIN

    SET @s2 = CONCAT("SET @exist = (SELECT REC_ID FROM ",dbname,".tpl_shadow_supplier_branch ",
                                "WHERE MASTER_REC_ID = ",supplierbranchid, 
                                " AND SHADOW_REC_ID = ", rootid,
                                ");");

    PREPARE stmt2 FROM @s2;
    
    EXECUTE stmt2;
    
    IF @exist IS NULL THEN

    SET @s = CONCAT_WS('',"INSERT INTO ",dbname,".tpl_shadow_supplier_branch(",
                    " `SHADOW_REC_ID`, ",
                    " `MASTER_REC_ID`, ",
                    " `REC_DATETIME`, ",
                    " `REC_TIMESTAMP`, ",
                    " `REC_ACTION`, ",
                    " `SUPPLIER_REC_ID`, ",
                    " `ORDER`, ",
                    " `NAME`, ",
                    " `TELEPHONE_NO`, ",
                    " `FREE_TELEPHONE_NO`, ",
                    " `FAX_NO`, `FREE_FAX_NO`, ",
                    " `EMAIL_ADDRESS`, ",
                    " `PHYSICAL_ADDRESS_BUILDING_ADDRESS`, ",
                    " `PHYSICAL_ADDRESS_STREET_ADDRESS`, ",
                    " `PHYSICAL_ADDRESS_SUBURB`, ",
                    " `PHYSICAL_ADDRESS_CITY`, ",
                    " `PHYSICAL_ADDRESS_STATE`, ",
                    " `PHYSICAL_ADDRESS_COUNTRY`, ",
                    " `PHYSICAL_ADDRESS_POST_CODE`, ",
                    " `POSTAL_ADDRESS_BUILDING_ADDRESS`, ",
                    " `POSTAL_ADDRESS_STREET_ADDRESS`, ",
                    " `POSTAL_ADDRESS_SUBURB`, ",
                    " `POSTAL_ADDRESS_CITY`, ",
                    " `POSTAL_ADDRESS_STATE`, ",
                    " `POSTAL_ADDRESS_COUNTRY`, ",
                    " `POSTAL_ADDRESS_POST_CODE`) ", "\n",
                    " VALUE (",
                    rootid,
                    ",",supplierbranchid,
                    ",NOW()",
                    ",NOW()",
                    ",NULL",
                    ",",supplierid,
                    ",",sorder,
                    ",'",branchname,
                    "','",phone,
                    "','",fphone,
                    "','",fax,
                    "','",ffax,
                    "','",email,
                    "','",paba,
                    "','",pasa,
                    "','",pasub,
                    "','",pacity,
                    "','",pastate,
                    "','",pacountry,
                    "','",papcode,
                    "','",poabaddress,
                    "','",poasaddress,
                    "','",poasub,
                    "','",poacity,
                    "','",poastate,
                    "','",poacountry,
                    "','",poapcode,
                    "')");
     SELECT @s;

     PREPARE stmt FROM @s;

     EXECUTE stmt;
    
    ELSE
    
        SELECT @exist AS REC_ID;
    
    END IF;
    
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `l2s_InsertSupplierBrand2ShadowSupplierBrand` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`tplweb`@`localhost`*/ /*!50003 PROCEDURE `l2s_InsertSupplierBrand2ShadowSupplierBrand`(
    IN dbname VARCHAR(100), 
    IN rootid INT(11), 
    IN masterrecid INT(11), 
    IN supplierrecid INT(11),
    IN supplierbrandid INT(11), 
    IN hasLogo TINYINT(1) )
BEGIN

    SET @s2 = CONCAT("SET @exist = (SELECT REC_ID FROM ",dbname,".tpl_shadow_supplier_brand ",
                                "WHERE MASTER_REC_ID = ",masterrecid, 
                                " AND SHADOW_REC_ID = ", rootid,
                                " AND BRAND_REC_ID = ", supplierbrandid, 
                                ");");

    PREPARE stmt2 FROM @s2;
    
    EXECUTE stmt2;
    
    IF @exist IS NULL THEN

    SET @s = CONCAT("INSERT INTO ",dbname,".tpl_shadow_supplier_brand(",
                    "`SHADOW_REC_ID`, ",
                    "`MASTER_REC_ID`, ",
                    "`REC_DATETIME`, ",
                    "`REC_TIMESTAMP`, ",
                    "`REC_ACTION`, ",
                    "`SUPPLIER_REC_ID`, ",
                    "`BRAND_REC_ID`, ",
                    "`IS_LOGO_LISTING`)",
                    " VALUE (",
                    rootid,",",
                    masterrecid,",",
                    " NOW(),",
                    " NOW(),",
                    " NULL,",
                    supplierrecid,
                    ",",supplierbrandid,
                    ",",hasLogo,
                    ")");
                    
     PREPARE stmt FROM @s;
     
     EXECUTE stmt;
      
    SET @execq = CONCAT("SELECT REC_ID FROM ",dbname,".tpl_shadow_supplier_brand WHERE REC_ID = ",LAST_INSERT_ID() );
    
    PREPARE stmt FROM @execq;
    
    EXECUTE stmt;
    
    ELSE
    
        SELECT @exist AS REC_ID;
    
    END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `l2s_InsertSupplierDistrib2ShadowSupplierDistrib` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `l2s_InsertSupplierDistrib2ShadowSupplierDistrib`(
    IN dbname VARCHAR(100), 
    IN rootid INT(11), 
    IN sdistribid INT(11),
    IN supplierid INT(11), 
    IN targetdir INT(11), 
    IN distname VARCHAR(255),
    IN dorder INT(11), 
    IN phone VARCHAR(48))
BEGIN
    SET @s3 = CONCAT("SET @exist = (SELECT REC_ID FROM ", dbname, ".tpl_shadow_supplier_distributor ",
                                        "WHERE MASTER_REC_ID = ",recid, 
                                        " AND SHADOW_REC_ID = ", rootid,
                                        " AND SUPPLIER_REC_ID = ", supplierid, 
                                        ");");
    
    PREPARE stmt3 FROM @s3;
    
    EXECUTE stmt3;
    
    IF @exist IS NULL THEN

    SET @s = CONCAT_WS('',"INSERT INTO ",dbname,".tpl_shadow_supplier_distributor (",
                "`SHADOW_REC_ID`,",
                "`MASTER_REC_ID`, ",
                "`REC_DATETIME`, ",
                "`REC_TIMESTAMP`, ",
                "`REC_ACTION`, ",
                "`SUPPLIER_REC_ID`, ",
                "`DIRECTORY_REC_ID`, ",
                "`NAME`, ",
                "`ORDER`, ",
                "`TELEPHONE_NO`) ",
                "VALUE(",
                rootid,",",
                sdistribid,
                ",NOW(), ",
                "NOW(), ",
                "NULL,",
                supplierid,
                ",",targetdir,
                ",'",distname,
                "',",dorder,
                ",'",phone,
                "')" );
    
    PREPARE stmt FROM @s;
    EXECUTE stmt;
    
    ELSE
    
        SELECT @exist AS REC_ID;
        
    END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `l2s_InsertSupplierPersonnel2ShadowSupplierPersonnel` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `l2s_InsertSupplierPersonnel2ShadowSupplierPersonnel`(
    IN dbname VARCHAR(100), 
    IN rootid INT(11), 
    IN recid INT(11),
    IN supplierid INT(11), 
    IN sorder INT(10), 
    IN personnelname VARCHAR(255), 
    IN position VARCHAR(255),
    IN phone VARCHAR(48), 
    IN fax VARCHAR(48), 
    IN email VARCHAR(255),
    IN paba VARCHAR(255), 
    IN pasa VARCHAR(255), 
    IN pasub VARCHAR(255), 
    IN pacity VARCHAR(255), 
    IN pastate VARCHAR(255), 
    IN pacountry VARCHAR(255), 
    IN papcode VARCHAR(12), 
    IN poabaddress VARCHAR(255), 
    IN poasaddress VARCHAR(255),
    IN poasub VARCHAR(255), 
    IN poacity VARCHAR(255), 
    IN poastate VARCHAR(255), 
    IN poacountry VARCHAR(255), 
    IN poapcode VARCHAR(12))
BEGIN
    SET @s3 = CONCAT("SET @exist = (SELECT REC_ID FROM ", dbname, ".tpl_shadow_supplier_key_personnel ",
                                        "WHERE MASTER_REC_ID = ",recid, 
                                        " AND SHADOW_REC_ID = ", rootid,
                                        " AND SUPPLIER_REC_ID = ", supplierid, 
                                        ");");
    
    PREPARE stmt3 FROM @s3;
    
    EXECUTE stmt3;
    
    IF @exist IS NULL THEN

    SET @s = CONCAT_WS('',"INSERT INTO ",dbname,".tpl_shadow_supplier_key_personnel(",
                    "`SHADOW_REC_ID`, ",
                    "`MASTER_REC_ID`, ",
                    "`REC_DATETIME`, ",
                    "`REC_TIMESTAMP`, ",
                    "`REC_ACTION`, ",
                    "`SUPPLIER_REC_ID`, ",
                    "`ORDER`, ",
                    "`NAME`, ",
                    "`POSITION`, ",
                    "`TELEPHONE_NO`, ",
                    "`FAX_NO`, ",
                    "`EMAIL_ADDRESS`, ",
                    "`PHYSICAL_ADDRESS_BUILDING_ADDRESS`, ",
                    "`PHYSICAL_ADDRESS_STREET_ADDRESS`, ",
                    "`PHYSICAL_ADDRESS_SUBURB`, ",
                    "`PHYSICAL_ADDRESS_CITY`, ",
                    "`PHYSICAL_ADDRESS_STATE`, ",
                    "`PHYSICAL_ADDRESS_COUNTRY`, ",
                    "`PHYSICAL_ADDRESS_POST_CODE`, ",
                    "`POSTAL_ADDRESS_BUILDING_ADDRESS`, ",
                    "`POSTAL_ADDRESS_STREET_ADDRESS`, ",
                    "`POSTAL_ADDRESS_SUBURB`, ",
                    "`POSTAL_ADDRESS_CITY`, ",
                    "`POSTAL_ADDRESS_STATE`, ",
                    "`POSTAL_ADDRESS_COUNTRY`, ",
                    "`POSTAL_ADDRESS_POST_CODE`) ",
                    " VALUE (",
                    rootid,",
                    ",recid,",
                    NOW(),
                    NOW(),NULL,",
                    supplierid,
                    ",",sorder,
                    ",'",personnelname,
                    "','",position,
                    "','",phone,
                    "','",fax,
                    "','",email,
                    "','",paba,
                    "','",pasa,
                    "','",pasub,
                    "','",pacity,
                    "','",pastate,
                    "','",pacountry,
                    "','",papcode,
                    "','",poabaddress,
                    "','",poasaddress,
                    "','",poasub,
                    "','",poacity,
                    "','",poastate,
                    "','",poacountry,
                    "','",poapcode,"')");

     PREPARE stmt FROM @s;
     
     EXECUTE stmt;
     
     ELSE
     
        SELECT @exist AS REC_ID;
    
    END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `l2s_StepReset` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `l2s_StepReset`(IN dbname VARCHAR(100), IN targetYear VARCHAR(4), IN step INT(1))
BEGIN

  IF step = 3 THEN

    SET @s1 = CONCAT("DELETE FROM ",dbname,".tpl_shadow_supplier_product_category WHERE YEAR(REC_TIMESTAMP) = '",targetYear,"'");

    PREPARE stmt FROM @s1;

    EXECUTE stmt;

    SET @s2 = CONCAT("DELETE FROM ",dbname,".tpl_shadow_supplier_key_personnel_brand WHERE YEAR(REC_TIMESTAMP) = '",targetYear,"'");

    PREPARE stmt FROM @s2;

    EXECUTE stmt;

    SET @s3 = CONCAT("DELETE FROM ",dbname,".tpl_shadow_supplier_branch_key_personnel WHERE YEAR(REC_TIMESTAMP) = '",targetYear,"'");

    PREPARE stmt FROM @s3;

    EXECUTE stmt;

    SET @s4 = CONCAT("DELETE FROM ",dbname,".tpl_shadow_supplier_key_personnel WHERE YEAR(REC_TIMESTAMP) = '",targetYear,"'");

    PREPARE stmt FROM @s4;

    EXECUTE stmt;

    SET @s5 = CONCAT("DELETE FROM ",dbname,".tpl_shadow_supplier_brand WHERE YEAR(REC_TIMESTAMP) = '",targetYear,"'");

    PREPARE stmt FROM @s5;

    EXECUTE stmt;

    SET @s6 = CONCAT("DELETE FROM ",dbname,".tpl_shadow_supplier_distributor WHERE YEAR(REC_TIMESTAMP) = '",targetYear,"'");

    PREPARE stmt FROM @s6;

    EXECUTE stmt;

    SET @s7 = CONCAT("DELETE FROM ",dbname,".tpl_shadow_supplier_branch WHERE YEAR(REC_TIMESTAMP) = '",targetYear,"'");

    PREPARE stmt FROM @s7;

    EXECUTE stmt;

    SET @s8 = CONCAT("DELETE FROM ",dbname,".tpl_shadow_supplier WHERE YEAR(REC_TIMESTAMP) = '",targetYear,"'");

    PREPARE stmt FROM @s8;

    EXECUTE stmt;

    SET @s9 = CONCAT("DELETE FROM ",dbname,".tpl_shadow_directory_additional_offering_discount WHERE YEAR(REC_TIMESTAMP) = '",targetYear,"'");

    PREPARE stmt FROM @s9;

    EXECUTE stmt;

    SET @s10 = CONCAT("DELETE FROM ",dbname,".tpl_shadow_directory_additional_offering WHERE YEAR(REC_TIMESTAMP) = '",targetYear,"'");

    PREPARE stmt FROM @s10;

    EXECUTE stmt;

    SET @s11 = CONCAT("DELETE FROM ",dbname,".tpl_shadow_directory_offering WHERE YEAR(REC_TIMESTAMP) = '",targetYear,"'");

    PREPARE stmt FROM @s11;

    EXECUTE stmt;

    SET @s12 = CONCAT("DELETE FROM ",dbname,".tpl_shadow_root WHERE YEAR(REC_TIMESTAMP) = '",targetYear,"'");

    PREPARE stmt FROM @s12;

    EXECUTE stmt;

  ELSE

    SET @s13 = CONCAT("DELETE FROM ",dbname,".tpl_shadow_product WHERE YEAR(REC_TIMESTAMP) = '",targetYear,"'");

    PREPARE stmt FROM @s13;

    EXECUTE stmt;

  END IF;

END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `s2l_DeleteSupplierBranch` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `s2l_DeleteSupplierBranch`(IN dbname VARCHAR(100), IN masterRecId INT(11))
BEGIN
    SET @s = CONCAT("DELETE FROM ",dbname,".tpl_supplier_branch WHERE REC_ID = '",masterRecId,"'");
    PREPARE stmt FROM @s;
    EXECUTE stmt;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `s2l_DeleteSupplierBrand` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `s2l_DeleteSupplierBrand`(IN dbname VARCHAR(100), IN recId INT(11))
BEGIN
    SET @s = CONCAT("DELETE FROM ",dbname,".tpl_supplier_brand WHERE REC_ID = '",recId,"'");
    PREPARE stmt FROM @s;
    EXECUTE stmt;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `s2l_DeleteSupplierKeyPersonnel` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `s2l_DeleteSupplierKeyPersonnel`(IN dbname VARCHAR(100),IN recId INT(11))
BEGIN
    SET @s = CONCAT("DELETE FROM ",dbname,".tpl_supplier_key_personnel WHERE REC_ID = '",recId,"'");
    PREPARE stmt FROM @s;
    EXECUTE stmt;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `s2l_DeleteSupplierProduct` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `s2l_DeleteSupplierProduct`(IN dbname VARCHAR(100), IN masterId INT(11))
BEGIN
    SET @s = CONCAT("DELETE FROM ",dbname,".tpl_product WHERE REC_ID = '",masterId,"'");
    PREPARE stmt FROM @s;
    EXECUTE stmt;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `s2l_DeleteSupplierProductCategory` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = latin1 */ ;
/*!50003 SET character_set_results = latin1 */ ;
/*!50003 SET collation_connection  = latin1_swedish_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `s2l_DeleteSupplierProductCategory`(
        IN dbname VARCHAR(100),
        IN masterId INTEGER(11),
        IN prodcatid INTEGER(11)
    )
BEGIN
    SET @s = CONCAT("DELETE FROM ",dbname,
    				".tpl_supplier_product_category ",
                    "WHERE (SUPPLIER_REC_ID = ",masterId,
                    " AND PRODUCT_CATEGORY_REC_ID = ",prodcatid,")");
    PREPARE stmt FROM @s;
    EXECUTE stmt;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `s2l_GetRootShadowStateClosedFromDir` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `s2l_GetRootShadowStateClosedFromDir`(IN dbname VARCHAR(100),IN DIR_ID INT, IN TARGET_YEAR VARCHAR(4))
BEGIN

  SET @s = CONCAT("SELECT * FROM ",dbname,".tpl_shadow_root where (STATE = 'MERGED') AND (DIRECTORY_REC_ID = '",DIR_ID,"') AND (DIRECTORY_YEAR = '",TARGET_YEAR,"')");

  PREPARE stmt FROM @s;

	EXECUTE stmt;

END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `s2l_GetShadowSupplier` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `s2l_GetShadowSupplier`(IN dbname VARCHAR(100), IN REC_ID INT)
BEGIN

     SET @s = CONCAT("SELECT * FROM ",dbname,".tpl_shadow_supplier WHERE SHADOW_REC_ID = ",REC_ID,";");

     PREPARE stmt FROM @s;

     EXECUTE stmt;

END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `s2l_Insert2Client` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `s2l_Insert2Client`(IN dbname VARCHAR(100),IN rec_dT DateTime, IN rec_tS DateTime, IN clientname VARCHAR(255), IN tname VARCHAR(255),

IN tel VARCHAR(48), IN ftel VARCHAR(48),IN faxn VARCHAR(48), 

IN ffaxn VARCHAR(48), IN ea VARCHAR(255), IN wa VARCHAR(255), IN paba VARCHAR(255), IN pasa VARCHAR(255), 

IN pasub VARCHAR(255), IN pacity VARCHAR(255), IN pastate VARCHAR(255), IN pacountry VARCHAR(255), IN papcode VARCHAR(12), 

IN papxid VARCHAR(45), IN padpid VARCHAR(45), IN palat FLOAT(16,12), IN palng FLOAT(16,12), IN paheight INT(11), IN pacomplete VARCHAR(1024),

IN poaba VARCHAR(255), IN poasa VARCHAR(255), IN poasub VARCHAR(255), IN poacity VARCHAR(255), IN poastate VARCHAR(255), 

IN poacountry VARCHAR(255), IN poapcode VARCHAR(12)

)
BEGIN

     SET @s = CONCAT("INSERT INTO ",dbname,".TABLEtpl_client (`REC_DATETIME`, `REC_TIMESTAMP`, `NAME`, `TRADING_AS_NAME`, `TELEPHONE_NO`, `FREE_TELEPHONE_NO`, `FAX_NO`, ",

                " `FREE_FAX_NO`, `EMAIL_ADDRESS`, `WEBSITE_ADDRESS`, `PHYSICAL_ADDRESS_BUILDING_ADDRESS`, `PHYSICAL_ADDRESS_STREET_ADDRESS`, ",

                " `PHYSICAL_ADDRESS_SUBURB`, `PHYSICAL_ADDRESS_CITY`, `PHYSICAL_ADDRESS_STATE`, `PHYSICAL_ADDRESS_COUNTRY`, `PHYSICAL_ADDRESS_POST_CODE`, ",
                
                " `PHYSICAL_ADDRESS_PXID`, `PHYSICAL_ADDRESS_DPID`, `PHYSICAL_ADDRESS_LATITUDE`, `PHYSICAL_ADDRESS_LONGITUDE`, `PHYSICAL_ADDRESS_HEIGHT`, `PHYSICAL_ADDRESS_COMPLETE`,  ",

                " `POSTAL_ADDRESS_BUILDING_ADDRESS`, `POSTAL_ADDRESS_STREET_ADDRESS`, `POSTAL_ADDRESS_SUBURB`, `POSTAL_ADDRESS_CITY`, `POSTAL_ADDRESS_STATE`, ",

                " `POSTAL_ADDRESS_COUNTRY`, `POSTAL_ADDRESS_POST_CODE`)" 

                " VALUE ('",rec_dT,"','",rec_tS,"','",clientname,"','",tname,"','",tel,"','",ftel,"','",faxn,
                
                " ','",ffaxn,"','",ea,"','",wa,"','",paba,"','",pasa,
                
                " ','",pasub,"','",pacity, "','",pastate,"','",pacountry,"','",papcode,
                
                " ','",papxid,"','",padpid,"','",palat,"','",palng,"','",paheight,"','",pacomplete,
                
                " ','",poaba,"','",poasa,"','",poasub,"','",poacity,"','",poastate,
                
                " ','",poacountry,"','",poapcode,"')");

     PREPARE stmt FROM @s;

     EXECUTE stmt;

     

     SET @execq = CONCAT("SELECT REC_ID FROM ",dbname,".tpl_client WHERE REC_ID = ",LAST_INSERT_ID() );

     PREPARE stmt FROM @execq;

     EXECUTE stmt;

END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `s2l_Insert2Supplier` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = latin1 */ ;
/*!50003 SET character_set_results = latin1 */ ;
/*!50003 SET collation_connection  = latin1_swedish_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `s2l_Insert2Supplier`(
        IN dbname VARCHAR(100),
        IN rec_dT DATETIME,
        IN rec_tS DATETIME,
        IN crid INT(11),
        IN clientname VARCHAR(255),
        IN tname VARCHAR(255),
        IN conname VARCHAR(255),
        IN conpos VARCHAR(255),
        IN tel VARCHAR(48),
        IN ftel VARCHAR(48),
        IN faxn VARCHAR(48),
        IN ffaxn VARCHAR(48),
        IN ea VARCHAR(255),
        IN wa VARCHAR(255),
        IN paba VARCHAR(255),
        IN pasa VARCHAR(255),
        IN pasub VARCHAR(255),
        IN pacity VARCHAR(255),
        IN pastate VARCHAR(255),
        IN pacountry VARCHAR(255),
        IN papcode VARCHAR(12),
        IN papxid VARCHAR(45),
        IN padpid VARCHAR(45),
        IN palat FLOAT(16,12),
        IN palng FLOAT(16,12),
        IN paheight INT(11),
        IN pacomplete VARCHAR(1024),
        IN poaba VARCHAR(255),
        IN poasa VARCHAR(255),
        IN poasub VARCHAR(255),
        IN poacity VARCHAR(255),
        IN poastate VARCHAR(255),
        IN poacountry VARCHAR(255),
        IN poapcode VARCHAR(12),
        IN cptext TEXT,
        IN plogoloc VARCHAR(255),
        IN wlogoloc VARCHAR(255),
        IN suptyperecid INT(11)
    )
BEGIN

    IF suptyperecid <> '0' THEN

       SET @s = CONCAT("INSERT INTO ",dbname,".tpl_supplier(",
            "REC_DATETIME, ",
            "REC_TIMESTAMP, ",
            "CLIENT_REC_ID, ",
            "NAME, ",
            "TRADING_AS_NAME, ",
            "CONTACT_NAME, ",
            "CONTACT_POSITION, ",
            "TELEPHONE_NO, ",
            "FREE_TELEPHONE_NO, ",
            "FAX_NO, ",
            "FREE_FAX_NO, ",
            "EMAIL_ADDRESS, ",
            "WEBSITE_ADDRESS, ",
            "PHYSICAL_ADDRESS_BUILDING_ADDRESS, ",
            "PHYSICAL_ADDRESS_STREET_ADDRESS, ",
            "PHYSICAL_ADDRESS_SUBURB, ",
            "PHYSICAL_ADDRESS_CITY, ",
            "PHYSICAL_ADDRESS_STATE, ",
            "PHYSICAL_ADDRESS_COUNTRY, ",
            "PHYSICAL_ADDRESS_POST_CODE, ",
            "PHYSICAL_ADDRESS_PXID, ",
            "PHYSICAL_ADDRESS_DPID, ",
            "PHYSICAL_ADDRESS_LATITUDE, ",
            "PHYSICAL_ADDRESS_LONGITUDE, ",
            "PHYSICAL_ADDRESS_HEIGHT, ",
            "PHYSICAL_ADDRESS_COMPLETE, ",
            "POSTAL_ADDRESS_BUILDING_ADDRESS, ",
            "POSTAL_ADDRESS_STREET_ADDRESS, ",
            "POSTAL_ADDRESS_SUBURB, ",
            "POSTAL_ADDRESS_CITY, ",
            "POSTAL_ADDRESS_STATE, ",
            "POSTAL_ADDRESS_COUNTRY, ",
            "POSTAL_ADDRESS_POST_CODE,",
            "COMPANY_PROFILE_TEXT, ",
            "PRINT_LOGO_LOCATION, ",
            "WEB_LOGO_LOCATION, ",
            "SUPPLIER_TYPE_REC_ID)",
       " VALUES ('",rec_dT,
            "','",rec_tS,
            "',",crid,
            ",'",clientname,
            "','",tname,
            "','",conname,
            "','",conpos,
            "','",tel,
            "','",ftel,
            "','",faxn,
            "','",ffaxn,
            "','",ea,
            "','",wa,
            "','",paba,
            "','",pasa,
            "','",pasub,
            "','",pacity,
            "','",pastate,
            "','",pacountry,
            "','",papcode,
            "','",papxid,
            ",'",padpid,
            "',",palat,
            ",",palng,
            ",",paheight,
            ",'",pacomplete,
            "','",poaba,
            "','",poasa,
            "','",poasub,
            "','",poacity,
            "','",poastate,
            "','",poacountry,
            "','",poapcode,
            "','",cptext,
            "','",plogoloc,
            "','",wlogoloc,
            "',",suptyperecid,")");

     ELSE

        SET @s = CONCAT("INSERT INTO ",dbname,".tpl_supplier(",
           	"REC_DATETIME, ",
            "REC_TIMESTAMP, ",
            "CLIENT_REC_ID, ",
            "NAME, ",
            "TRADING_AS_NAME, ",
            "CONTACT_NAME, ",
            "CONTACT_POSITION, ",
            "TELEPHONE_NO, ",
            "FREE_TELEPHONE_NO, ",
            "FAX_NO, ",
            "FREE_FAX_NO, ",
            "EMAIL_ADDRESS, ",
            "WEBSITE_ADDRESS, ",
            "PHYSICAL_ADDRESS_BUILDING_ADDRESS, ",
            "PHYSICAL_ADDRESS_STREET_ADDRESS, ",
            "PHYSICAL_ADDRESS_SUBURB, ",
            "PHYSICAL_ADDRESS_CITY, ",
            "PHYSICAL_ADDRESS_STATE, ",
            "PHYSICAL_ADDRESS_COUNTRY, ",
            "PHYSICAL_ADDRESS_POST_CODE, ",
            "PHYSICAL_ADDRESS_PXID, ",
            "PHYSICAL_ADDRESS_DPID, ",
            "PHYSICAL_ADDRESS_LATITUDE, ",
            "PHYSICAL_ADDRESS_LONGITUDE, ",
            "PHYSICAL_ADDRESS_HEIGHT, ",
            "PHYSICAL_ADDRESS_COMPLETE, ",
            "POSTAL_ADDRESS_BUILDING_ADDRESS, ",
            "POSTAL_ADDRESS_STREET_ADDRESS, ",
            "POSTAL_ADDRESS_SUBURB, ",
            "POSTAL_ADDRESS_CITY, ",
            "POSTAL_ADDRESS_STATE, ",
            "POSTAL_ADDRESS_COUNTRY, ",
            "POSTAL_ADDRESS_POST_CODE,",
            "COMPANY_PROFILE_TEXT, ",
            "PRINT_LOGO_LOCATION, ",
            "WEB_LOGO_LOCATION) ",
        " VALUES ('",rec_dT,
            "','",rec_tS,
            "',",crid,
            ",'",clientname,
            "','",tname,
            "','",conname,
            "','",conpos,
            "','",tel,
            "','",ftel,
            "','",faxn,
            "','",ffaxn,
            "','",ea,
            "','",wa,
            "','",paba,
            "','",pasa,
            "','",pasub,
            "','",pacity,
            "','",pastate,
            "','",pacountry,
            "','",papcode,
            "','",papxid,
            "','",padpid,
            "',",palat,
            ",",palng,
            ",",paheight,
            ",'",pacomplete,
            "','",poaba,
            "','",poasa,
            "','",poasub,
            "','",poacity,
            "','",poastate,
            "','",poacountry,
            "','",poapcode,
            "','",cptext,
            "','",plogoloc,
            "','",wlogoloc,
            "')");

     END IF;

     PREPARE stmt FROM @s;

     EXECUTE stmt;

     

     SET @execq = CONCAT("SELECT REC_ID FROM ",dbname,".tpl_supplier WHERE REC_ID = ",LAST_INSERT_ID() );

     PREPARE stmt FROM @execq;

     EXECUTE stmt;

END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `s2l_Insert2SupplierDirectory` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `s2l_Insert2SupplierDirectory`(IN dbname VARCHAR(100),

IN suprecid INT(11), IN dirrecid INT(11), IN diryear VARCHAR(4), IN shadowrootrecid INT(11))
BEGIN

     SET @s = CONCAT("INSERT INTO ",dbname,".tpl_supplier_directory(`REC_DATETIME`, `REC_TIMESTAMP`, `SUPPLIER_REC_ID`, `DIRECTORY_REC_ID`, `DIRECTORY_YEAR`, `SHADOW_ROOT_REC_ID`) 

        VALUE ('",NOW(),"','",NOW(),"','",suprecid,"','",dirrecid,"','",diryear,"','",shadowrootrecid,"')");

     PREPARE stmt FROM @s;

     EXECUTE stmt;

END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `s2l_Insert2Supplier_new` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `s2l_Insert2Supplier_new`(
        IN dbname VARCHAR(100),
         IN rec_dT DATETIME,
         IN rec_tS DATETIME,
         IN crid INT(11),
         IN clientname VARCHAR(255),
         IN tradename VARCHAR(255),
         IN conname VARCHAR(255),
         IN conpos VARCHAR(255),
         IN tel VARCHAR(48),
         IN ftel VARCHAR(48),
         IN faxn VARCHAR(48),
         IN ffaxn VARCHAR(48),
         IN ea VARCHAR(255),
         IN wa VARCHAR(255),
         IN paba VARCHAR(255),
         IN pasa VARCHAR(255),
         IN pasub VARCHAR(255),
         IN pacity VARCHAR(255),
         IN pastate VARCHAR(255),
         IN pacountry VARCHAR(255),
         IN papcode VARCHAR(12),
         IN papxid VARCHAR(45),
         IN padpid VARCHAR(45),
         IN palat FLOAT(16,12),
         IN palng FLOAT(16,12),
         IN paheight INT(11),
         IN pacomplete VARCHAR(1024),
         IN poaba VARCHAR(255),
         IN poasa VARCHAR(255),
         IN poasub VARCHAR(255),
         IN poacity VARCHAR(255),
         IN poastate VARCHAR(255),
         IN poacountry VARCHAR(255),
         IN poapcode VARCHAR(12),
         IN cptext TEXT,
         IN plogoloc VARCHAR(255),
         IN wlogoloc VARCHAR(255),
         IN suptyperecid INT(11)
    )
BEGIN
       SET @s = CONCAT("INSERT INTO ",dbname,".tpl_supplier(",
            "REC_DATETIME, ",
            "REC_TIMESTAMP, ",
            "CLIENT_REC_ID, ",
            "NAME, ",
            "TRADING_AS_NAME)",
       " VALUES ('",rec_dT,
            "','",rec_tS,
            "',",crid,
            ",'",clientname,
            "','",tradename,
            "')");

     PREPARE stmt FROM @s;

     EXECUTE stmt;

     
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `s2l_Insert2Supplier_Orginal` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `s2l_Insert2Supplier_Orginal`(IN dbname VARCHAR(100),

IN rec_dT DATETIME, IN rec_tS DATETIME, IN crid INT(11), IN clientname VARCHAR(255), 

IN tname VARCHAR(255), IN conname VARCHAR(255), IN conpos VARCHAR(255), IN tel VARCHAR(48), IN ftel VARCHAR(48),

IN faxn VARCHAR(48), IN ffaxn VARCHAR(48), IN ea VARCHAR(255), IN wa VARCHAR(255), IN paba VARCHAR(255), IN pasa VARCHAR(255),

IN pasub VARCHAR(255),IN pacity VARCHAR(255),IN pastate VARCHAR(255),IN pacountry VARCHAR(255),IN papcode VARCHAR(12),

IN poaba VARCHAR(255),IN poasa VARCHAR(255),IN poasub VARCHAR(255),IN poacity VARCHAR(255),IN poastate VARCHAR(255),

IN poacountry VARCHAR(255),IN poapcode VARCHAR(12),IN cptext TEXT,IN plogoloc VARCHAR(255),IN wlogoloc VARCHAR(255),

IN suptyperecid INT(11)

)
BEGIN

    IF suptyperecid <> '0' THEN

       SET @s = CONCAT("INSERT INTO ",dbname,".tpl_supplier(`REC_DATETIME`, `REC_TIMESTAMP`, ",

                       " `CLIENT_REC_ID`, `NAME`, `TRADING_AS_NAME`, `CONTACT_NAME`, ",

                       " `CONTACT_POSITION`, `TELEPHONE_NO`, `FREE_TELEPHONE_NO`, `FAX_NO`, `FREE_FAX_NO`, `EMAIL_ADDRESS`, ",

                       " `WEBSITE_ADDRESS`, `PHYSICAL_ADDRESS_BUILDING_ADDRESS`, `PHYSICAL_ADDRESS_STREET_ADDRESS`, `PHYSICAL_ADDRESS_SUBURB`, ",

                       " `PHYSICAL_ADDRESS_CITY`, `PHYSICAL_ADDRESS_STATE`, `PHYSICAL_ADDRESS_COUNTRY`, `PHYSICAL_ADDRESS_POST_CODE`, `POSTAL_ADDRESS_BUILDING_ADDRESS`, ",

                       " `POSTAL_ADDRESS_STREET_ADDRESS`, `POSTAL_ADDRESS_SUBURB`, `POSTAL_ADDRESS_CITY`, `POSTAL_ADDRESS_STATE`, `POSTAL_ADDRESS_COUNTRY`, `POSTAL_ADDRESS_POST_CODE`,",

                       " `COMPANY_PROFILE_TEXT`, `PRINT_LOGO_LOCATION`, `WEB_LOGO_LOCATION`, `SUPPLIER_TYPE_REC_ID`) ",

                       " VALUE ('",rec_dT,"','",rec_tS,"',",crid,",'",clientname,"','",tname,"','",conname,"','",conpos,"','",tel,

                       " ','",ftel,"','",faxn,"','",ffaxn,"','",ea,"','",wa,"','",paba,"','",pasa,"','",pasub,

                       " ','",pacity,"','",pastate,"','",pacountry,"','",papcode,"','",poaba,"','",poasa,"','",poasub,"','",poacity,"','",poastate,

                       " ','",poacountry,"','",poapcode,"','",cptext,"','",plogoloc,"','",wlogoloc,"',",suptyperecid,")");

     ELSE

        SET @s = CONCAT("INSERT INTO ",dbname,".tpl_supplier(`REC_DATETIME`, `REC_TIMESTAMP`, ",

                       " `CLIENT_REC_ID`, `NAME`, `TRADING_AS_NAME`, `CONTACT_NAME`, ",

                       " `CONTACT_POSITION`, `TELEPHONE_NO`, `FREE_TELEPHONE_NO`, `FAX_NO`, `FREE_FAX_NO`, `EMAIL_ADDRESS`, ",

                       " `WEBSITE_ADDRESS`, `PHYSICAL_ADDRESS_BUILDING_ADDRESS`, `PHYSICAL_ADDRESS_STREET_ADDRESS`, `PHYSICAL_ADDRESS_SUBURB`, ",

                       " `PHYSICAL_ADDRESS_CITY`, `PHYSICAL_ADDRESS_STATE`, `PHYSICAL_ADDRESS_COUNTRY`, `PHYSICAL_ADDRESS_POST_CODE`, `POSTAL_ADDRESS_BUILDING_ADDRESS`, ",

                       " `POSTAL_ADDRESS_STREET_ADDRESS`, `POSTAL_ADDRESS_SUBURB`, `POSTAL_ADDRESS_CITY`, `POSTAL_ADDRESS_STATE`, `POSTAL_ADDRESS_COUNTRY`, `POSTAL_ADDRESS_POST_CODE`,",

                       " `COMPANY_PROFILE_TEXT`, `PRINT_LOGO_LOCATION`, `WEB_LOGO_LOCATION`) ",

                       " VALUE ('",rec_dT,"','",rec_tS,"',",crid,",'",clientname,"','",tname,"','",conname,"','",conpos,"','",tel,

                       " ','",ftel,"','",faxn,"','",ffaxn,"','",ea,"','",wa,"','",paba,"','",pasa,"','",pasub,

                       " ','",pacity,"','",pastate,"','",pacountry,"','",papcode,"','",poaba,"','",poasa,"','",poasub,"','",poacity,"','",poastate,

                       " ','",poacountry,"','",poapcode,"','",cptext,"','",plogoloc,"','",wlogoloc,"')");

     END IF;

     PREPARE stmt FROM @s;

     EXECUTE stmt;

     

     SET @execq = CONCAT("SELECT REC_ID FROM ",dbname,".tpl_supplier WHERE REC_ID = ",LAST_INSERT_ID() );

     PREPARE stmt FROM @execq;

     EXECUTE stmt;

END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `s2l_InsertSupplierBranch` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `s2l_InsertSupplierBranch`(IN dbname VARCHAR(100), IN recDtTm DATETIME, IN rectmStmp DATETIME, IN supRecId INT(11), IN ordr INT(11), IN bname VARCHAR(255), 

IN tel VARCHAR(48), IN ftel VARCHAR(48), IN fax VARCHAR(48), IN ffax VARCHAR(48), IN email VARCHAR(255), IN paba VARCHAR(255), IN pasa VARCHAR(255), IN paSub VARCHAR(255),

IN paCity VARCHAR(255), IN paState VARCHAR(255), IN paCountry VARCHAR(255), IN papCode VARCHAR(12), IN poaba VARCHAR(255), IN poasa VARCHAR(255),

IN poaSub VARCHAR(255), IN poaCity VARCHAR(255), IN poaState VARCHAR(255), IN poaCountry VARCHAr(255), IN poapCode VARCHAR(12))
BEGIN

    

    IF ordr <> '0' THEN

      SET @s = CONCAT("INSERT INTO ",dbname,".tpl_supplier_branch (REC_DATETIME, REC_TIMESTAMP, SUPPLIER_REC_ID, `ORDER`, NAME, TELEPHONE_NO, FREE_TELEPHONE_NO, FAX_NO, FREE_FAX_NO, ", 

          " EMAIL_ADDRESS, PHYSICAL_ADDRESS_BUILDING_ADDRESS, PHYSICAL_ADDRESS_STREET_ADDRESS, PHYSICAL_ADDRESS_SUBURB, PHYSICAL_ADDRESS_CITY, PHYSICAL_ADDRESS_STATE, ",

          " PHYSICAL_ADDRESS_COUNTRY, PHYSICAL_ADDRESS_POST_CODE, POSTAL_ADDRESS_BUILDING_ADDRESS, POSTAL_ADDRESS_STREET_ADDRESS, POSTAL_ADDRESS_SUBURB, ",

          " POSTAL_ADDRESS_CITY, POSTAL_ADDRESS_STATE, POSTAL_ADDRESS_COUNTRY, POSTAL_ADDRESS_POST_CODE) ",

          " VALUE ('",recDtTm,"','",rectmStmp,"',",supRecId,",",ordr,",'",bname,"','",tel,"','",ftel,"','",fax,"','",ffax,"','",email,"','",paba,"','",pasa,"','",paSub,"','",paCity,"','",paState,"','",paCountry,"','",papCode,"','",poaba,"','",poasa,"','",poaSub,"','",poaCity,"','",poaState,"','",poaCountry,"','",poapCode,"')");

    ELSE

      SET @s = CONCAT("INSERT INTO ",dbname,".tpl_supplier_branch (REC_DATETIME, REC_TIMESTAMP, SUPPLIER_REC_ID, NAME, TELEPHONE_NO, FREE_TELEPHONE_NO, FAX_NO, FREE_FAX_NO, ", 

          " EMAIL_ADDRESS, PHYSICAL_ADDRESS_BUILDING_ADDRESS, PHYSICAL_ADDRESS_STREET_ADDRESS, PHYSICAL_ADDRESS_SUBURB, PHYSICAL_ADDRESS_CITY, PHYSICAL_ADDRESS_STATE, ",

          " PHYSICAL_ADDRESS_COUNTRY, PHYSICAL_ADDRESS_POST_CODE, POSTAL_ADDRESS_BUILDING_ADDRESS, POSTAL_ADDRESS_STREET_ADDRESS, POSTAL_ADDRESS_SUBURB, ",

          " POSTAL_ADDRESS_CITY, POSTAL_ADDRESS_STATE, POSTAL_ADDRESS_COUNTRY, POSTAL_ADDRESS_POST_CODE) ",

          " VALUE ('",recDtTm,"','",rectmStmp,"',",supRecId,",'",bname,"','",tel,"','",ftel,"','",fax,"','",ffax,"','",email,"','",paba,"','",pasa,"','",paSub,"','",paCity,"','",paState,"','",paCountry,"','",papCode,"','",poaba,"','",poasa,"','",poaSub,"','",poaCity,"','",poaState,"','",poaCountry,"','",poapCode,"')");

    END IF;

    

    PREPARE stmt FROM @s;

    EXECUTE stmt;

END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `s2l_InsertSupplierBrand` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `s2l_InsertSupplierBrand`(IN dbname VARCHAR(100), IN recDtTm DATETIME, IN rectmStmp DATETIME,

IN supRecId INT(11), IN brandRecId INT(11), IN isLogoListing TINYINT(1))
BEGIN

    SET @s = CONCAT("INSERT INTO ",dbname,".tpl_supplier_brand (REC_DATETIME,REC_TIMESTAMP,SUPPLIER_REC_ID,BRAND_REC_ID,IS_LOGO_LISTING)",

            "VALUE ('",recDtTm,"','",rectmStmp,"',",supRecId,",",brandRecId,",",isLogoListing,")");

    PREPARE stmt FROM @s;

    EXECUTE stmt;

END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `s2l_InsertSupplierKeyPersonnel` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `s2l_InsertSupplierKeyPersonnel`(IN dbname VARCHAR(100), IN recDtTm DATETIME, IN rectmStmp DATETIME, IN supRecId INT(11), IN ordr INT(11), IN pname VARCHAR(255), 

IN pos VARCHAR(255), IN tel VARCHAR(255), IN fax VARCHAR(255), IN email VARCHAR(255), IN paba VARCHAR(255), IN pasa VARCHAR(255), IN paSub VARCHAR(255),

IN paCity VARCHAR(255), IN paState VARCHAR(255), IN paCountry VARCHAR(255), IN papCode VARCHAR(12), IN poaba VARCHAR(255), IN poasa VARCHAR(255),

IN poaSub VARCHAR(255), IN poaCity VARCHAR(255), IN poaState VARCHAR(255), IN poaCountry VARCHAr(255), IN poapCode VARCHAR(12)

)
BEGIN

    IF ordr <> '0' THEN

      SET @s = CONCAT("INSERT INTO ",dbname,".tpl_supplier_key_personnel (REC_DATETIME, REC_TIMESTAMP, SUPPLIER_REC_ID, `ORDER`, NAME, POSITION, TELEPHONE_NO, FAX_NO, ",

          " EMAIL_ADDRESS, PHYSICAL_ADDRESS_BUILDING_ADDRESS, PHYSICAL_ADDRESS_STREET_ADDRESS, PHYSICAL_ADDRESS_SUBURB, PHYSICAL_ADDRESS_CITY, PHYSICAL_ADDRESS_STATE, ",

          " PHYSICAL_ADDRESS_COUNTRY, PHYSICAL_ADDRESS_POST_CODE, POSTAL_ADDRESS_BUILDING_ADDRESS, POSTAL_ADDRESS_STREET_ADDRESS, POSTAL_ADDRESS_SUBURB, ",

          " POSTAL_ADDRESS_CITY, POSTAL_ADDRESS_STATE, POSTAL_ADDRESS_COUNTRY, POSTAL_ADDRESS_POST_CODE) ",

          " VALUE ('",recDtTm,"','",rectmStmp,"','",supRecId,"','",ordr,"','",pname,"','",pos,"','",tel,"','",fax,"','",email,"','",paba,"','",pasa,"','",paSub,"',

          '",paCity,"','",paState,"','",paCountry,"','",papCode,"','",poaba,"','",poasa,"','",poaSub,"','",poaCity,"','",poaState,"','",poaCountry,"','",poapCode,"')");

    ELSE

      SET @s = CONCAT("INSERT INTO ",dbname,".tpl_supplier_key_personnel (REC_DATETIME, REC_TIMESTAMP, SUPPLIER_REC_ID, NAME, POSITION, TELEPHONE_NO, FAX_NO, ",

          " EMAIL_ADDRESS, PHYSICAL_ADDRESS_BUILDING_ADDRESS, PHYSICAL_ADDRESS_STREET_ADDRESS, PHYSICAL_ADDRESS_SUBURB, PHYSICAL_ADDRESS_CITY, PHYSICAL_ADDRESS_STATE, ",

          " PHYSICAL_ADDRESS_COUNTRY, PHYSICAL_ADDRESS_POST_CODE, POSTAL_ADDRESS_BUILDING_ADDRESS, POSTAL_ADDRESS_STREET_ADDRESS, POSTAL_ADDRESS_SUBURB, ",

          " POSTAL_ADDRESS_CITY, POSTAL_ADDRESS_STATE, POSTAL_ADDRESS_COUNTRY, POSTAL_ADDRESS_POST_CODE) ",

          " VALUE ('",recDtTm,"','",rectmStmp,"','",supRecId,"','",pname,"','",pos,"','",tel,"','",fax,"','",email,"','",paba,"','",pasa,"','",paSub,"',

          '",paCity,"','",paState,"','",paCountry,"','",papCode,"','",poaba,"','",poasa,"','",poaSub,"','",poaCity,"','",poaState,"','",poaCountry,"','",poapCode,"')");

    END IF;

    PREPARE stmt FROM @s;

    EXECUTE stmt;

END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `s2l_InsertSupplierProduct` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `s2l_InsertSupplierProduct`(
    IN dbname VARCHAR(100),
    IN recDtTm DATETIME, 
    IN rectmStmp DATETIME, 
    IN prodCatRecId INT(11), 
    IN supRecId INT(11), 
    IN dirRecId INT(11), 
    IN lblName VARCHAR(255), 
    IN varietal VARCHAR(255), 
    IN vintage VARCHAR(255), 
    IN regofOrig VARCHAR(255), 
    IN countryOrig VARCHAR(255)
)
BEGIN
    SET @s = CONCAT_WS('',"INSERT INTO ",dbname,".tpl_product (",
                    "REC_DATETIME, ",
                    "REC_TIMESTAMP, ",
                    "PRODUCT_CATEGORY_REC_ID, ",
                    "SUPPLIER_REC_ID, ",
                    "DIRECTORY_REC_ID, ",
                    "LABEL_NAME, ",
                    "VARIETAL, ",
                    "VINTAGE, ",
                    "REGION_OF_ORIGIN, ",
                    "COUNTRY_OF_ORIGIN",
                ") VALUES (",
                "NOW(),",
                "NOW()",
                ",",prodCatRecId,
                ",",supRecId,
                ",",dirRecId,
                ",'",lblName,
                "','",varietal,
                "','",vintage,
                "','",regofOrig,
                "','",countryOrig,
                "');");
    SELECT @s;
    
    -- PREPARE stmt FROM @s;
    -- EXECUTE stmt;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `s2l_InsertSupplierProductCategory` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `s2l_InsertSupplierProductCategory`(IN dbname VARCHAR(100), IN recDtTm DATETIME, IN rectmStmp DATETIME, IN supRecId INT(11), IN prodCatRecId INT(11), IN logoListing INT)
BEGIN
    SET @s = CONCAT("INSERT INTO ",dbname,".tpl_supplier_product_category (REC_DATETIME, REC_TIMESTAMP, SUPPLIER_REC_ID, PRODUCT_CATEGORY_REC_ID, IS_LOGO_LISTING)",
            "VALUE ('",recDtTm,"','",rectmStmp,"','",supRecId,"','",prodCatRecId,"','",logoListing,"')");
    PREPARE stmt FROM @s;
    EXECUTE stmt;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `s2l_SelectSProduct` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `s2l_SelectSProduct`(IN dbname VARCHAR(100), IN shadRootRecId INT(11))
BEGIN
    SET @s = CONCAT("SELECT * FROM ",dbname,".tpl_shadow_product WHERE (SHADOW_REC_ID = '",shadRootRecId,"')");
    PREPARE stmt FROM @s;
    EXECUTE stmt;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `s2l_SelectSSupplierBranch` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `s2l_SelectSSupplierBranch`(IN dbname VARCHAR(100), IN recId INT(11))
BEGIN
    SET @s = CONCAT("SELECT * FROM ",dbname,".tpl_shadow_supplier_branch WHERE (SHADOW_REC_ID = '",recId,"')");
    PREPARE stmt FROM @s;
    EXECUTE stmt;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `s2l_SelectSSupplierBrand` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `s2l_SelectSSupplierBrand`(IN dbname VARCHAR(100),IN shadowrootid INT(11))
BEGIN

    SET @s = CONCAT("SELECT * FROM ",dbname,".tpl_shadow_supplier_brand WHERE (SHADOW_REC_ID = '",shadowrootid,"') ORDER BY REC_ID");

    PREPARE stmt FROM @s;

    EXECUTE stmt;

END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `s2l_SelectSSupplierKeyPersonnel` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `s2l_SelectSSupplierKeyPersonnel`(IN dbname VARCHAR(100), IN recId INT(11))
BEGIN
    SET @s = CONCAT("SELECT * FROM ",dbname,".tpl_shadow_supplier_key_personnel where (SHADOW_REC_ID = '",recId,"')");
    PREPARE stmt FROM @s;
    EXECUTE stmt;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `s2l_SelectSSupplierProdCategory` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = latin1 */ ;
/*!50003 SET character_set_results = latin1 */ ;
/*!50003 SET collation_connection  = latin1_swedish_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `s2l_SelectSSupplierProdCategory`(
        IN dbname VARCHAR(100),
        IN recId INT(11)
    )
BEGIN
    SET @s = CONCAT("SELECT * ",
    				"FROM  ",dbname,
                    ".tpl_shadow_supplier_product_category ",
                    "WHERE (SHADOW_REC_ID = '",recId,"') ",
                    "ORDER BY REC_ID");
    PREPARE stmt FROM @s;
    EXECUTE stmt;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `s2l_Update2Client` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `s2l_Update2Client`(
        IN dbname_1 VARCHAR(100),
        IN rec_dT_2 DATETIME,
        IN rec_tS_3 DATETIME,
        IN clientname_4 VARCHAR(255),
        IN tname_5 VARCHAR(255),
        IN tel_6 VARCHAR(48),
        IN ftel_7 VARCHAR(48),
        IN faxn_8 VARCHAR(48),
        IN ffaxn_9 VARCHAR(48),
        IN ea_10 VARCHAR(255),
        IN wa_11 VARCHAR(255),
        IN paba_12 VARCHAR(255),
        IN pasa_13 VARCHAR(255),
        IN pasub_14 VARCHAR(255),
        IN pacity_15 VARCHAR(255),
        IN pastate_16 VARCHAR(255),
        IN pacountry_17 VARCHAR(255),
        IN papcode_18 VARCHAR(12),
        IN papxid_19 VARCHAR(45),
        IN padpid_20 VARCHAR(45),
        IN palat_21 FLOAT(16,12),
        IN palng_22 FLOAT(16,12),
        IN paheight_23 INT(11),
        IN pacomplete_24 VARCHAR(1024),
        IN poaba_25 VARCHAR(255),
        IN poasa_26 VARCHAR(255),
        IN poasub_27 VARCHAR(255),
        IN poacity_28 VARCHAR(255),
        IN poastate_29 VARCHAR(255),
        IN poacountry_30 VARCHAR(255),
        IN poapcode_31 VARCHAR(12),
        IN cli_rec_id_32 INT(11)
    )
BEGIN 

	SET @s = CONCAT("UPDATE ",dbname_1,".tpl_client SET REC_DATETIME = '",rec_dT_2,
    	"', REC_TIMESTAMP = '",rec_tS_3,
        "', NAME = '",clientname_4,
        "', TRADING_AS_NAME = '",tname_5,
        "', TELEPHONE_NO = '",tel_6,
        "', FREE_TELEPHONE_NO = '",ftel_7,
        "', FAX_NO = '",faxn_8,
        "', FREE_FAX_NO = '",ffaxn_9,
        "', EMAIL_ADDRESS = '",ea_10,
        "', WEBSITE_ADDRESS = '",wa_11 ,
        "', PHYSICAL_ADDRESS_BUILDING_ADDRESS = '",paba_12,
        "', PHYSICAL_ADDRESS_STREET_ADDRESS = '",pasa_13,
        "', PHYSICAL_ADDRESS_SUBURB = '",pasub_14,
        "', PHYSICAL_ADDRESS_CITY = '",pacity_15,
        "', PHYSICAL_ADDRESS_STATE = '",pastate_16,
        "', PHYSICAL_ADDRESS_COUNTRY = '",pacountry_17,
        "', PHYSICAL_ADDRESS_POST_CODE = '",papcode_18,
        "', PHYSICAL_ADDRESS_PXID = '",papxid_19,
        "', PHYSICAL_ADDRESS_DPID = '",padpid_20,
        "', PHYSICAL_ADDRESS_LATITUDE = '",palat_21,
        "', PHYSICAL_ADDRESS_LONGITUDE = '",palng_22,
        "', PHYSICAL_ADDRESS_HEIGHT = '",paheight_23,
        "', PHYSICAL_ADDRESS_COMPLETE = '",pacomplete_24,
        "', POSTAL_ADDRESS_BUILDING_ADDRESS = '",poaba_25 ,
        "', POSTAL_ADDRESS_STREET_ADDRESS = '",poasa_26,
        "', POSTAL_ADDRESS_SUBURB = '",poasub_27,
        "', POSTAL_ADDRESS_CITY = '",poacity_28,
        "', POSTAL_ADDRESS_STATE = '",poastate_29,
        "', POSTAL_ADDRESS_COUNTRY = '",poacountry_30,
        "', POSTAL_ADDRESS_POST_CODE = '",poapcode_31,
        "'  WHERE REC_ID = '",cli_rec_id_32,"'");

     PREPARE stmt FROM @s;

     EXECUTE stmt;     

     SELECT LAST_INSERT_ID();

END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `s2l_Update2Supplier` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `s2l_Update2Supplier`(

        IN dbname VARCHAR(100),

        IN rec_dtTime DATETIME,

        IN rec_tStamp DATETIME,

        IN crid INT(11),

        IN sname VARCHAR(255),

        IN tname VARCHAR(255),

        IN cname VARCHAR(255),

        IN cpos VARCHAR(255),

        IN telno VARCHAR(48),

        IN ftelno VARCHAR(48),

        IN faxno VARCHAR(48),

        IN ffaxno VARCHAR(48),

        IN email VARCHAR(255),

        IN website VARCHAR(255),

        IN paba VARCHAR(255),

        IN pasa VARCHAR(255),

        IN pasub VARCHAR(255),

        IN pacity VARCHAR(255),

        IN pastate VARCHAR(255),

        IN pacountry VARCHAR(255),

        IN papcode VARCHAR(12),

        IN papxid VARCHAR(45),

        IN padpid VARCHAR(45),

        IN palat FLOAT(16,12),

        IN palng FLOAT(16,12),

        IN paheight INT(11),

        IN pacomplete VARCHAR(1024),

        IN poabaddress VARCHAR(255),

        IN poasaddress VARCHAR(255),

        IN poasub VARCHAR(255),

        IN poacity VARCHAR(255),

        IN poastate VARCHAR(255),

        IN poacountry VARCHAR(255),

        IN poapcode VARCHAR(12),

        IN cprofile TEXT,

        IN plogo VARCHAR(255),

        IN wlogoloc VARCHAR(255),

        IN suptrecid INT(11),

        IN recid INT(11)

    )
BEGIN



     IF suptrecid <> '0' THEN



         SET @s = CONCAT("UPDATE ",dbname,".tpl_supplier SET REC_DATETIME = '",rec_dtTime,

         				"', REC_TIMESTAMP = '",rec_tStamp,

                        "', CLIENT_REC_ID = '",crid,

                        "', NAME = '",sname,

                        "', TRADING_AS_NAME = '",tname,

                        "', CONTACT_NAME = '",cname,

                        "', CONTACT_POSITION = '",cpos,

                        "', TELEPHONE_NO = '",telno,

                        "', FREE_TELEPHONE_NO = '",ftelno,

                        "', FAX_NO = '",faxno,

                        "', FREE_FAX_NO = '",ffaxno,

                        "', EMAIL_ADDRESS = '",email,

                        "', WEBSITE_ADDRESS = '",website,

                        "', PHYSICAL_ADDRESS_BUILDING_ADDRESS = '",paba,

                        "', PHYSICAL_ADDRESS_STREET_ADDRESS = '",pasa,

                        "', PHYSICAL_ADDRESS_SUBURB = '",pasub,

                        "', PHYSICAL_ADDRESS_CITY = '",pacity,

                        "', PHYSICAL_ADDRESS_STATE = '",pastate,

                        "', PHYSICAL_ADDRESS_COUNTRY = '",pacountry,

                        "', PHYSICAL_ADDRESS_POST_CODE = '",papcode,

                        "', PHYSICAL_ADDRESS_PXID = ",papxid,

                        ", PHYSICAL_ADDRESS_DPID = '",padpid,

                        "', PHYSICAL_ADDRESS_LATITUDE = '",palat,

                        "', PHYSICAL_ADDRESS_LONGITUDE = '",palng,

                        "', PHYSICAL_ADDRESS_HEIGHT = '",paheight,

                        "', PHYSICAL_ADDRESS_COMPLETE = '",pacomplete,

                        "', POSTAL_ADDRESS_BUILDING_ADDRESS = '",poabaddress,

                        "', POSTAL_ADDRESS_STREET_ADDRESS = '",poasaddress,

                        "', POSTAL_ADDRESS_SUBURB = '",poasub,

                        "', POSTAL_ADDRESS_CITY = '",poacity,

                        "', POSTAL_ADDRESS_STATE = '",poastate,

                        "', POSTAL_ADDRESS_COUNTRY = '",poacountry,

                        "', POSTAL_ADDRESS_POST_CODE = '",poapcode,

                        "', COMPANY_PROFILE_TEXT = '",cprofile,

                        "', PRINT_LOGO_LOCATION = '",plogo,

                        "', WEB_LOGO_LOCATION = '",wlogoloc,

                        "', SUPPLIER_TYPE_REC_ID = '",suptrecid,

                        "'  WHERE REC_ID = '",recid,"'");



     ELSE



          SET @s = CONCAT("UPDATE ",dbname,".tpl_supplier SET REC_DATETIME = '",rec_dtTime,

          				"', REC_TIMESTAMP = '",rec_tStamp,

                        "', CLIENT_REC_ID = '",crid,

                        "', NAME = '",sname,

                        "', TRADING_AS_NAME = '",tname,

                        "', CONTACT_NAME = '",cname,

                        "', CONTACT_POSITION = '",cpos,

                        "', TELEPHONE_NO = '",telno,

                        "', FREE_TELEPHONE_NO = '",ftelno,

                        "', FAX_NO = '",faxno,

                        "', FREE_FAX_NO = '",ffaxno,

                        "', EMAIL_ADDRESS = '",email,

                        "', WEBSITE_ADDRESS = '",website,

                        "', PHYSICAL_ADDRESS_BUILDING_ADDRESS = '",paba,

                        "', PHYSICAL_ADDRESS_STREET_ADDRESS = '",pasa,

                        "', PHYSICAL_ADDRESS_SUBURB = '",pasub,

                        "', PHYSICAL_ADDRESS_CITY = '",pacity,

                        "', PHYSICAL_ADDRESS_STATE = '",pastate,

                        "', PHYSICAL_ADDRESS_COUNTRY = '",pacountry,

                        "', PHYSICAL_ADDRESS_POST_CODE = '",papcode,

                        "', PHYSICAL_ADDRESS_PXID = '",papxid,

                        "', PHYSICAL_ADDRESS_DPID = '",padpid,

                        "', PHYSICAL_ADDRESS_LATITUDE = '",palat,

                        "', PHYSICAL_ADDRESS_LONGITUDE = '",palng,

                        "', PHYSICAL_ADDRESS_HEIGHT = '",paheight,

                        "', PHYSICAL_ADDRESS_COMPLETE = '",pacomplete,

                        "', POSTAL_ADDRESS_BUILDING_ADDRESS = '",poabaddress,

                        "', POSTAL_ADDRESS_STREET_ADDRESS = '",poasaddress,

                        "', POSTAL_ADDRESS_SUBURB = '",poasub,

                        "', POSTAL_ADDRESS_CITY = '",poacity,

                        "', POSTAL_ADDRESS_STATE = '",poastate,

                        "', POSTAL_ADDRESS_COUNTRY = '",poacountry,

                        "', POSTAL_ADDRESS_POST_CODE = '",poapcode,

                        "', COMPANY_PROFILE_TEXT = '",cprofile,

                        "', PRINT_LOGO_LOCATION = '",plogo,

                        "', WEB_LOGO_LOCATION = '",wlogoloc,

                        "'  WHERE REC_ID = '",recid,"'");



     END IF;



     PREPARE stmt FROM @s;

	
	-- SELECT @s;


     EXECUTE stmt;



     SET @r = CONCAT("SELECT REC_ID FROM ",dbname,".tpl_supplier WHERE REC_ID = ",recid,";");



	PREPARE stmt FROM @r;


	EXECUTE stmt;

END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `s2l_Update2SupplierDirectory` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `s2l_Update2SupplierDirectory`(
		IN dbname VARCHAR(100),
		IN diryear VARCHAR(4), 
		IN shadowrootrecid INT(11), 
		IN suprecid INT(11), 
		IN dirrecid INT(11)
	)
BEGIN

    SET @s = CONCAT("UPDATE ",dbname,".tpl_supplier_directory SET 
				DIRECTORY_YEAR = '",diryear,"', 
				SHADOW_ROOT_REC_ID = '",shadowrootrecid,"' 
				WHERE (SUPPLIER_REC_ID = '",suprecid,"') AND (DIRECTORY_REC_ID = '",dirrecid,"')");

    PREPARE stmt FROM @s;
	
	-- SELECT @s;

    EXECUTE stmt;

END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `s2l_UpdateShadowRoot` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `s2l_UpdateShadowRoot`(IN dbname VARCHAR(100), IN state VARCHAR(15),IN recId INT(11))
BEGIN

    SET @s = CONCAT("UPDATE ",dbname,".tpl_shadow_root SET STATE='",state,"' WHERE REC_ID = ",recId);

    PREPARE stmt FROM @s;

    EXECUTE stmt;

END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `s2l_UpdateSupplierBranch` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `s2l_UpdateSupplierBranch`(IN dbname VARCHAR(100), IN recDtTm DATETIME, IN rectmStmp DATETIME, IN supRecId INT(11), IN ordr INT(11), IN name VARCHAR(255), 

IN tel VARCHAR(255), IN ftel VARCHAR(255), IN fax VARCHAR(255), IN ffax VARCHAR(255), IN email VARCHAR(255), IN paba VARCHAR(255), IN pasa VARCHAR(255), IN paSub VARCHAR(255),

IN paCity VARCHAR(255), IN paState VARCHAR(255), IN paCountry VARCHAR(255), IN papCode VARCHAR(12), IN poaba VARCHAR(255), IN poasa VARCHAR(255),

IN poaSub VARCHAR(255), IN poaCity VARCHAR(255), IN poaState VARCHAR(255), IN poaCountry VARCHAr(255), IN poapCode VARCHAR(12), IN recId INT(11)

)
BEGIN

    SET @s = CONCAT("UPDATE ",dbname,".tpl_supplier_branch SET REC_DATETIME = '",recDtTm,"', REC_TIMESTAMP = '",rectmStmp,"', 

		SUPPLIER_REC_ID = '",supRecId,"', `ORDER` = '",ordr,"', NAME = '",name,"', TELEPHONE_NO = '",tel,"', FREE_TELEPHONE_NO = '",ftel,"', 

		FAX_NO = '",fax,"', FREE_FAX_NO = '",ffax,"', EMAIL_ADDRESS = '",email,"', PHYSICAL_ADDRESS_BUILDING_ADDRESS = '",paba,"', PHYSICAL_ADDRESS_STREET_ADDRESS = '",pasa,"',

		PHYSICAL_ADDRESS_SUBURB = '",paSub,"', PHYSICAL_ADDRESS_CITY = '",paCity,"', PHYSICAL_ADDRESS_STATE = '",paState,"', 

		PHYSICAL_ADDRESS_COUNTRY = '",paCountry,"', PHYSICAL_ADDRESS_POST_CODE = '",papCode,"', POSTAL_ADDRESS_BUILDING_ADDRESS = '",poaba,"',

		POSTAL_ADDRESS_STREET_ADDRESS = '",poasa,"', POSTAL_ADDRESS_SUBURB = '",poaSub,"', POSTAL_ADDRESS_CITY = '",poaCity,"', 

		POSTAL_ADDRESS_STATE = '",poaState,"', POSTAL_ADDRESS_COUNTRY = '",poaCountry,"', POSTAL_ADDRESS_POST_CODE = '",poapCode,"' 

		WHERE REC_ID = '",recId,"'");

    PREPARE stmt FROM @s;

    EXECUTE stmt;

END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `s2l_UpdateSupplierBrand` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `s2l_UpdateSupplierBrand`(
IN dbname VARCHAR(100),
IN recDtTm DATETIME, 
IN rectmStmp DATETIME,
IN supRecId INT(11), 
IN brandRecId INT(11), 
IN isLogoListing TINYINT(1),
IN recId INT(11)
)
BEGIN
    SET @s = CONCAT("UPDATE ",dbname,".tpl_supplier_brand SET 
		REC_DATETIME = '",recDtTm,"', 
		REC_TIMESTAMP = '",rectmStmp,"', 
		SUPPLIER_REC_ID = '",supRecId,"', 
		BRAND_REC_ID = '",brandRecId,"',
		IS_LOGO_LISTING = '",isLogoListing,"'
		WHERE REC_ID = ",recId,";");
    
	PREPARE stmt FROM @s;

	EXECUTE stmt;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `s2l_UpdateSupplierKeyPersonnel` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `s2l_UpdateSupplierKeyPersonnel`(IN dbname VARCHAR(100),

IN recDtTm DATETIME, IN rectmStmp DATETIME, IN supRecId INT(11), IN ordr INT(11), IN name VARCHAR(255), 

IN pos VARCHAR(255), IN tel VARCHAR(255), IN fax VARCHAR(255), IN email VARCHAR(255), IN paba VARCHAR(255), IN pasa VARCHAR(255), IN paSub VARCHAR(255),

IN paCity VARCHAR(255), IN paState VARCHAR(255), IN paCountry VARCHAR(255), IN papCode VARCHAR(12), IN poaba VARCHAR(255), IN poasa VARCHAR(255),

IN poaSub VARCHAR(255), IN poaCity VARCHAR(255), IN poaState VARCHAR(255), IN poaCountry VARCHAr(255), IN poapCode VARCHAR(12), IN recId INT(11)

)
BEGIN

    SET @s = CONCAT("UPDATE ",dbname,".tpl_supplier_key_personnel SET REC_DATETIME = '",recDtTm,"', REC_TIMESTAMP = '",rectmStmp,"', 

            SUPPLIER_REC_ID = '",supRecId,"', `ORDER` = '",ordr,"', NAME = '",name,"', POSITION = '",pos,"', TELEPHONE_NO = '",tel,"',

            FAX_NO = '",fax,"', EMAIL_ADDRESS = '",email,"', PHYSICAL_ADDRESS_BUILDING_ADDRESS = '",paba,"', PHYSICAL_ADDRESS_STREET_ADDRESS = '",pasa,"',

            PHYSICAL_ADDRESS_SUBURB = '",paSub,"', PHYSICAL_ADDRESS_CITY = '",paCity,"', PHYSICAL_ADDRESS_STATE = '",paState,"', 

            PHYSICAL_ADDRESS_COUNTRY = '",paCountry,"', PHYSICAL_ADDRESS_POST_CODE = '",papCode,"', POSTAL_ADDRESS_BUILDING_ADDRESS = '",poaba,"',

            POSTAL_ADDRESS_STREET_ADDRESS = '",poasa,"', POSTAL_ADDRESS_SUBURB = '",poaSub,"', POSTAL_ADDRESS_CITY = '",poaCity,"', 

            POSTAL_ADDRESS_STATE = '",poaState,"', POSTAL_ADDRESS_COUNTRY = '",poaCountry,"', POSTAL_ADDRESS_POST_CODE = '",poapCode,"' 

            WHERE REC_ID = '",recId,"'");

    PREPARE stmt FROM @s;

    EXECUTE stmt;

END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `s2l_UpdateSupplierProduct` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `s2l_UpdateSupplierProduct`(IN dbname VARCHAR(100),
  IN recDtTm DATETIME, IN rectmStmp DATETIME, 
	IN prodCatRecId INT(11), IN supRecId INT(11), IN dirRecId INT(11), IN lblName VARCHAR(255), 
	IN varietal VARCHAR(255), IN vintage VARCHAR(255), IN regofOrig VARCHAR(255), 
	IN countryOrig VARCHAR(255), IN masterRecId INT(11)
)
BEGIN
    SET @s = CONCAT("UPDATE ",dbname,".tpl_product SET REC_DATETIME = '",recDtTm,"', REC_TIMESTAMP = '",rectmStmp,"', 
            PRODUCT_CATEGORY_REC_ID = '",prodCatRecId,"', SUPPLIER_REC_ID='",supRecId,"', DIRECTORY_REC_ID = '",dirRecId,"', 
            LABEL_NAME = '",lblName,"', VARIETAL = '",varietal,"', VINTAGE = '",vintage,"', REGION_OF_ORIGIN = '",regofOrig,"', 
            COUNTRY_OF_ORIGIN = '",countryOrig,"' WHERE REC_ID = '",masterRecId,"'");
    PREPARE stmt FROM @s;
    EXECUTE stmt;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `s2l_UpdateSupplierProductCategory` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `s2l_UpdateSupplierProductCategory`(IN dbname VARCHAR(100),
IN recDtTm DATETIME, IN rectmStmp DATETIME, IN supRecId INT(11), 
IN prodCatRecId INT(11), IN logoListing INT, IN masterId INT(11)
)
BEGIN
    SET @s = CONCAT("UPDATE ",dbname,".tpl_supplier_product_category SET REC_DATETIME = '",recDtTm,"', REC_TIMESTAMP = '",rectmStmp,"', 
            SUPPLIER_REC_ID = '",supRecId,"', PRODUCT_CATEGORY_REC_ID = '",prodCatRecId,"', IS_LOGO_LISTING = '",logoListing,"' 
            WHERE REC_ID = '",masterId,"'");
    PREPARE stmt FROM @s;
    EXECUTE stmt;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `ul2s_UpdateP2SProduct` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `ul2s_UpdateP2SProduct`(
    IN dbname VARCHAR(100), IN rootid INT(11), IN recid INT(11), IN supplierrecid INT(11),IN targetdir INT(11), IN prodcatid INT(11))
BEGIN
 SET @s = CONCAT("UPDATE ",dbname,".tpl_shadow_product SET `MASTER_REC_ID` = ",recid,",
                    `REC_DATETIME` = NOW(), `REC_TIMESTAMP` = NOW(), `REC_ACTION` = NULL
                    WHERE `SHADOW_REC_ID` = ",rootid," AND `SUPPLIER_REC_ID` = ",supplierrecid,",
                    `DIRECTORY_REC_ID` = ",targetdir," AND `PRODUCT_CATEGORY_REC_ID` = ",prodcatid);
    PREPARE stmt FROM @s;
    EXECUTE stmt;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `ul2s_UpdateSBKP2SSBKPersonnel` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `ul2s_UpdateSBKP2SSBKPersonnel`(
    IN dbname VARCHAR(100), IN rootid INT(11), IN recid INT(11), IN supplierbranchid INT(11), 
    IN keypersonnelid INT(11))
BEGIN
SET @s = CONCAT("UPDATE ",dbname,".tpl_shadow_supplier_branch_key_personnel SET `MASTER_REC_ID` = ",recid,",
                    `REC_DATETIME` = NOW(), `REC_TIMESTAMP` = NOW(), `REC_ACTION` = NULL 
                    WHERE `SHADOW_REC_ID` = ",rootid," 
                      AND `SUPPLIER_BRANCH_REC_ID` = ",supplierbranchid," 
                      AND `SUPPLIER_KEY_PERSONNEL_REC_ID` = ",keypersonnelid);
    PREPARE stmt FROM @s;
    EXECUTE stmt;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `ul2s_UpdateShadowRoot` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `ul2s_UpdateShadowRoot`(IN dbname VARCHAR(100), IN state VARCHAR(15),IN recId INT(11))
BEGIN
SET @s = CONCAT("UPDATE ",dbname,".tpl_shadow_root SET STATE='",state,"' WHERE REC_ID = ",recId);
    PREPARE stmt FROM @s;
    EXECUTE stmt;

    SET @s = CONCAT("SELECT * FROM ",dbname,".tpl_shadow_root WHERE REC_ID = ",recId);
    PREPARE stmt FROM @s;
    EXECUTE stmt;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `ul2s_UpdateSKPBrand2ShadowSKPBrand` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `ul2s_UpdateSKPBrand2ShadowSKPBrand`(
    IN dbname VARCHAR(100), IN rootid INT(11), IN recid INT(11), 
    IN keypersonnelid INT(11), IN supplierbrandid INT(11))
BEGIN
SET @s = CONCAT("UPDATE ",dbname,".tpl_shadow_supplier_key_personnel_brand SET `MASTER_REC_ID`=",recid,",
                    `REC_DATETIME` = NOW(), `REC_TIMESTAMP` = NOW(), `REC_ACTION` = NULL 
                    WHERE `SHADOW_REC_ID` = ",rootid," AND `SUPPLIER_KEY_PERSONNEL_REC_ID` = ",keypersonnelid," AND `SUPPLIER_BRAND_REC_ID` = ",supplierbrandid);
    PREPARE stmt FROM @s;
    EXECUTE stmt;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `ul2s_UpdateSPC2SSPCategory` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `ul2s_UpdateSPC2SSPCategory`(
    IN dbname VARCHAR(100), IN rootid INT(11), IN recid INT(11), IN supplierrecid INT(11), 
    IN prodcatrecid INT(11), IN haslogo TINYINT(1))
BEGIN
SET @s = CONCAT("UPDATE ",dbname,".tpl_shadow_supplier_product_category SET `MASTER_REC_ID` = ",recid,",
                    `REC_DATETIME` = NOW(), `REC_TIMESTAMP` = NOW(), `REC_ACTION` = NULL
                    WHERE `SHADOW_REC_ID` = ",rootid," 
                      AND `SUPPLIER_REC_ID` = ",supplierrecid," 
                      AND `PRODUCT_CATEGORY_REC_ID` = ",prodcatrecid);
    PREPARE stmt FROM @s;
    EXECUTE stmt;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `ul2s_UpdateSupplier2ShadowSupplier` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `ul2s_UpdateSupplier2ShadowSupplier`(
    IN dbname VARCHAR(100), IN rootid INT(11), IN supplierid INT(11))
BEGIN
SET @s = CONCAT("UPDATE ",dbname,".tpl_shadow_supplier 
                      SET `MASTER_REC_ID` = ",supplierid,", 
                          `REC_DATETIME` = NOW(), 
                          `REC_TIMESTAMP` = NOW(), 
                          `REC_ACTION` = NULL WHERE `SHADOW_REC_ID` = ",rootid);
    PREPARE stmt FROM @s;
    EXECUTE stmt;

    SET @execq = CONCAT("SELECT REC_ID FROM ",dbname,".tpl_shadow_supplier WHERE `SHADOW_REC_ID` = ",rootid );
    PREPARE stmt FROM @execq;
    EXECUTE stmt;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `ul2s_UpdateSupplierBranch2ShadowSupplierBranch` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `ul2s_UpdateSupplierBranch2ShadowSupplierBranch`(
    IN dbname VARCHAR(100), IN rootid INT(11), IN supplierbranchid INT(11),
    IN supplierid INT(11))
BEGIN
SET @s = CONCAT("UPDATE ",dbname,".tpl_shadow_supplier_branch SET `MASTER_REC_ID` = ",supplierbranchid,",
                    `REC_DATETIME`=NOW(), `REC_TIMESTAMP`=NOW(), `REC_ACTION` = NULL 
                    WHERE `SHADOW_REC_ID` = ",rootid," AND `SUPPLIER_REC_ID` = ",supplierid);

     PREPARE stmt FROM @s;

     EXECUTE stmt;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `ul2s_UpdateSupplierBrand2ShadowSupplierBrand` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `ul2s_UpdateSupplierBrand2ShadowSupplierBrand`(
    IN dbname VARCHAR(100), IN rootid INT(11), IN recid INT(11), IN supplierrecid INT(11))
BEGIN
SET @s = CONCAT("UPDATE ",dbname,".tpl_shadow_supplier_brand SET `MASTER_REC_ID` = ",recid,",
                    `REC_DATETIME` = NOW(), `REC_TIMESTAMP` = NOW(), `REC_ACTION` = NULL 
                    WHERE `SHADOW_REC_ID` = ",rootid," AND `SUPPLIER_REC_ID` = ",supplierrecid);
    PREPARE stmt FROM @s;
    EXECUTE stmt;
      
    SET @execq = CONCAT("SELECT REC_ID FROM ",dbname,".tpl_shadow_supplier_brand WHERE `SHADOW_REC_ID` = ",rootid," AND `SUPPLIER_REC_ID` = ",supplierrecid );
    PREPARE stmt FROM @execq;
    EXECUTE stmt; 
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `ul2s_UpdateSupplierDistrib2ShadowSupplierDistrib` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `ul2s_UpdateSupplierDistrib2ShadowSupplierDistrib`(
    IN dbname VARCHAR(100), IN rootid INT(11), IN sdistribid INT(11),
    IN supplierid INT(11))
BEGIN
SET @s = CONCAT("UPDATE ",dbname,".tpl_shadow_supplier_distributor SET `MASTER_REC_ID` = ",sdistribid,", 
      `REC_DATETIME` = NOW(), `REC_TIMESTAMP` = NOW(), `REC_ACTION` = NULL 
      WHERE `SHADOW_REC_ID` = ",rootid," AND `SUPPLIER_REC_ID` = ",supplierid);
    
    PREPARE stmt FROM @s;
    EXECUTE stmt;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `ul2s_UpdateSupplierPersonnel2ShadowSupplierPersonnel` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `ul2s_UpdateSupplierPersonnel2ShadowSupplierPersonnel`(
    IN dbname VARCHAR(100), IN rootid INT(11), IN recid INT(11),
    IN supplierid INT(11))
BEGIN
SET @s = CONCAT("UPDATE ",dbname,".tpl_shadow_supplier_key_personnel SET `MASTER_REC_ID` = ",recid,",
                    `REC_DATETIME` = NOW(), `REC_TIMESTAMP` = NOW(), `REC_ACTION` = NULL 
                    WHERE `SHADOW_REC_ID` = ",rootid," AND `SUPPLIER_REC_ID` = ",supplierid);

     PREPARE stmt FROM @s;
     EXECUTE stmt;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2012-10-05 15:54:52
