CREATE DATABASE  IF NOT EXISTS `db_live` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `db_live`;
-- MySQL dump 10.13  Distrib 5.5.20, for linux2.6 (x86_64)
--
-- Host: 127.0.0.1    Database: db_live
-- ------------------------------------------------------
-- Server version	5.5.20-log

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
-- Dumping routines for database 'db_live'
--
/*!50003 DROP FUNCTION IF EXISTS `get_weight` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 FUNCTION `get_weight`(
         search_key VARCHAR(255),
         search_pile TEXT
     ) RETURNS tinyint(4)
    DETERMINISTIC
BEGIN
	DECLARE pos,len INT DEFAULT 0;
    DECLARE weight DECIMAL(4,2) default 0.00;
    SET len = CHAR_LENGTH(search_pile);
    
    IF (len > 0)  THEN
       	SET pos = LOCATE(search_key,search_pile);
        IF (pos > 0 ) THEN
	        SET weight = ((len - pos )/len)*100;
        END IF;
    ELSE
    	SET weight = 0;
    END IF;
  RETURN weight;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `strSplit` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 FUNCTION `strSplit`(
              x VARCHAR(255), delim VARCHAR(12), pos TINYINT ) RETURNS varchar(255) CHARSET latin1
    DETERMINISTIC
BEGIN
SET x = TRIM(x);
WHILE (LOCATE('  ', x)>0) DO
	SET x = REPLACE(x, '  ', ' ');
END WHILE;
return replace(substring(substring_index(x, delim, pos), length(substring_index(x, delim, pos - 1)) + 1), delim, '');
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `wordCount` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 FUNCTION `wordCount`(
        x VARCHAR(255),
        delim VaRCHAR(12)
    ) RETURNS tinyint(4)
    DETERMINISTIC
BEGIN
SET x = TRIM(x);
WHILE (LOCATE('  ', x)>0) DO 
	SET x = REPLACE(x, '  ', ' ');
END WHILE;    
IF  (LOCATE(' ',x) > 0) THEN
	return 1+(length(x)-length(REPLACE(x, delim, '')))/length(delim);
ELSE
	IF (LENGTH(x)>0) THEN
    	return 1;
    ELSE
    	return 0;
    END IF;    
END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `do_createClient` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `do_createClient`(

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

  DECLARE exist INT;

  DECLARE client_rec_id INT(11);

  DECLARE shadow_rec_id INT(11);

  DECLARE shadow_supplier_rec_id INT(11);

  DECLARE shadow_directory_offering_rec_id INT(11);
 
  DECLARE transaction_total_excl_gst DOUBLE(11,2);

  DECLARE transaction_total_incl_gst DOUBLE(11,2);  


SET exist = (SELECT count(tpl_client.REC_ID)
            FROM tpl_client
            INNER JOIN tpl_shadow_root ON tpl_client.REC_ID = tpl_shadow_root.CLIENT_REC_ID
            WHERE tpl_client.USERNAME = `USERNAME`
            AND tpl_shadow_root.DIRECTORY_YEAR = `YEAR`
            AND tpl_shadow_root.DIRECTORY_REC_ID = `DIR_REC_ID`);

  IF exist = 0 THEN
   
    SET client_rec_id = (SELECT REC_ID FROM tpl_client WHERE tpl_client.USERNAME = `USERNAME`);
    IF client_rec_id IS NULL THEN       
        INSERT INTO `tpl_client` ( REC_DATETIME, REC_TIMESTAMP, NAME,FIRST_NAME,LAST_NAME,USERNAME,PASSWORD,EMAIL_ADDRESS,IS_DELETED )
        VALUE( NOW(), NOW(), `CLIENTNAME`, `FIRSTNAME`, `LASTNAME`, `USERNAME`, `PASSWORD`, `EMAIL` ,0);
        SET client_rec_id = LAST_INSERT_ID();
    END IF;
   
    

    INSERT INTO `tpl_shadow_root` (REC_DATETIME, REC_TIMESTAMP, CLIENT_REC_ID, DIRECTORY_REC_ID,

                    DIRECTORY_YEAR, STATE, USERNAME, PASSWORD, LISTING_COST_EXCL_GST,

                    LISTING_COST_INCL_GST, TRANSACTION_TOTAL_EXCL_GST, TRANSACTION_TOTAL_INCL_GST,

                    TOTAL_PAID_TO_DATE)

                    VALUE( NOW(), NOW(), `client_rec_id`, `DIR_REC_ID`, `YEAR`, "OPEN", `USERNAME`,

                    `PASSWORD`, 0, 0, 0, 0, 0);

    SET shadow_rec_id = LAST_INSERT_ID();

   

    INSERT INTO `tpl_shadow_supplier` (SHADOW_REC_ID, MASTER_REC_ID, REC_DATETIME,

                    REC_TIMESTAMP, CLIENT_REC_ID, NAME, REC_ACTION)

                    VALUE( `shadow_rec_id`, 0, NOW(), NOW(), `client_rec_id`, `CLIENTNAME`, 'INSERT');

   

    INSERT INTO `tpl_shadow_directory_offering` (SHADOW_REC_ID, MASTER_REC_ID, REC_DATETIME,

                    REC_TIMESTAMP, DIRECTORY_REC_ID, DIRECTORY_YEAR, NAME,

                    DESCRIPTION, COST_EXCL_GST, GST_RATE, MAX_BRANCH_COUNT, MAX_KEY_PERSONNEL_COUNT,

                    MAX_BRAND_COUNT, MAX_PRODUCT_CATEGORY_COUNT) VALUE (`shadow_rec_id`,1,NOW(),

                    NOW(), `DIR_REC_ID`, `YEAR`, "Standard Listing",

                    "A standard listing in the Pack and Print directory for 2010 allows you to list your basic contact details as well as five product and service listings.",

                    60, 15.0, 0, 0, 0, 5);
   IF DIRPACK = "Standard Listing" THEN
		SET shadow_directory_offering_rec_id = LAST_INSERT_ID();
         SET transaction_total_excl_gst =60;
         SET transaction_total_incl_gst =60 * ((15 + 100) / 100);
   END IF;



   

    INSERT INTO `tpl_shadow_directory_offering` (SHADOW_REC_ID, MASTER_REC_ID, REC_DATETIME,

                    REC_TIMESTAMP, DIRECTORY_REC_ID, DIRECTORY_YEAR, NAME,

                    DESCRIPTION, COST_EXCL_GST, GST_RATE, MAX_BRANCH_COUNT, MAX_KEY_PERSONNEL_COUNT,

                    MAX_BRAND_COUNT, MAX_PRODUCT_CATEGORY_COUNT) VALUE (`shadow_rec_id`,2,NOW(),

                    NOW(), `DIR_REC_ID`, `YEAR`, "Advanced Listing",

                    "An advanced listing in the Pack and Print directory for 2010 allows you to list your contact details, company profile, key personnel, five brand listings and twelve product and service listings.",

                    165, 15.0, 0, 100, 5, 12);
	IF DIRPACK = "Advanced Listing" THEN
		SET shadow_directory_offering_rec_id = LAST_INSERT_ID();
         SET transaction_total_excl_gst =165;
         SET transaction_total_incl_gst =165 * ((15 + 100) / 100); 
     END IF;

    

    INSERT INTO `tpl_shadow_directory_offering` (SHADOW_REC_ID, MASTER_REC_ID, REC_DATETIME,

                    REC_TIMESTAMP, DIRECTORY_REC_ID, DIRECTORY_YEAR, NAME,

                    DESCRIPTION, COST_EXCL_GST, GST_RATE, MAX_BRANCH_COUNT, MAX_KEY_PERSONNEL_COUNT,

                    MAX_BRAND_COUNT, MAX_PRODUCT_CATEGORY_COUNT) VALUE (`shadow_rec_id`,3,NOW(),

                    NOW(), `DIR_REC_ID`, `YEAR`, "Premium Listing",

                    "A premium listing in the Pack and Print directory for 2010 allows you to list your company logo, contact details, company profile, key personnel, branches/agents, unlimited brand listings and unlimited product and service listings.",

                    395, 15.0, 1000, 1000, 1000, 100000);
     IF DIRPACK = "Premium Listing" THEN
		SET shadow_directory_offering_rec_id = LAST_INSERT_ID();
		SET transaction_total_excl_gst =395;
         SET transaction_total_incl_gst =395 * ((15 + 100) / 100);
     END IF;
 
          
     UPDATE tpl_shadow_root SET SHADOW_DIRECTORY_OFFERING_REC_ID = `shadow_directory_offering_rec_id`,TRANSACTION_TOTAL_EXCL_GST=`transaction_total_excl_gst`,TRANSACTION_TOTAL_INCL_GST=`transaction_total_incl_gst` WHERE REC_ID = `shadow_rec_id`;      
     IF DIRPACK = "Premium Listing" THEN
		SET shadow_directory_offering_rec_id = LAST_INSERT_ID();
     END IF;

    SELECT 1 as RESULT, REC_ID, `USERNAME`, `PASSWORD` FROM tpl_shadow_root AS S WHERE S.CLIENT_REC_ID = `client_rec_id`;

  ELSE

    SELECT 0 as RESULT, 0 as REC_ID, tpl_shadow_root.USERNAME, tpl_shadow_root.`PASSWORD` FROM tpl_client INNER JOIN tpl_shadow_root ON tpl_client.REC_ID = tpl_shadow_root.CLIENT_REC_ID
      WHERE tpl_client.NAME = `CLIENTNAME` AND tpl_shadow_root.DIRECTORY_YEAR = `YEAR` ;

  END IF;

END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `do_createDirectory` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `do_createDirectory`(
                            IN directoryname VARCHAR(255),
                            IN directoryyear INT(4),
                            IN prodbase TINYINT,
                            IN directoryperiod VARCHAR(1024),
                            IN directoryperiodtype VARCHAR(10),
                            IN directoryperiodstart date,
                            IN directoryperiodend date,
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
                            IN directorydesc VARCHAR(2048), 
                            IN dir_default TINYINT,
                            IN dir_standard TINYINT,
						 IN dir_advanced TINYINT,
						 IN dir_premium TINYINT 
)
BEGIN
  DECLARE exist INT;
  DECLARE directory_rec_id INT(11);
 
  SET directory_rec_id = 0;
 
  SET exist = (SELECT COUNT(REC_ID) FROM tpl_directory WHERE `NAME` = directoryname);
  IF exist = 0 THEN
    
    IF prodbase > 0 THEN
      INSERT INTO tpl_directory(REC_DATETIME, REC_TIMESTAMP, NAME, IS_PRODUCT_BASED, CURRENT_YEAR) VALUE(NOW(),NOW(),directoryname,prodbase,directoryyear,directorydesc,dir_default);
    ELSE
      INSERT INTO tpl_directory(REC_DATETIME, REC_TIMESTAMP, NAME, CURRENT_YEAR,DIRECTORY_DESC,IS_DEFAULT) VALUE(NOW(),NOW(),directoryname,directoryyear,directorydesc,dir_default);
    END IF;
 
    SET directory_rec_id = LAST_INSERT_ID();
    
    INSERT INTO `tpl_directory_period`(REC_DATETIME, DIRECTORY_REC_ID, DIRECTORY_YEAR, DIRECTORY_PERIOD,DIRECTORY_PERIOD_TYPE,
            DIRECTORY_PERIOD_START, DIRECTORY_PERIOD_END) VALUES ( NOW(), directory_rec_id, directoryyear, directoryperiod,
            directoryperiodtype, directoryperiodstart, directoryperiodend);  
    
    INSERT INTO `tpl_directory_offering`(REC_DATETIME, REC_TIMESTAMP, DIRECTORY_REC_ID, 
              DIRECTORY_YEAR, `NAME`, DESCRIPTION, COST_EXCL_GST, GST_RATE, MAX_BRANCH_COUNT, MAX_KEY_PERSONNEL_COUNT,
              MAX_BRAND_COUNT, MAX_PRODUCT_CATEGORY_COUNT,IS_DEFAULT) 
            VALUE( NOW(), NOW(), directory_rec_id, 
              YEAR(CURDATE()),'Standard Listing', std_listingdesc, std_costexclgst, std_gstrate, std_maxbranch, std_maxpersonnel,
              std_maxbrand, std_maxprodcat,dir_standard);
    
    INSERT INTO `tpl_directory_offering`(REC_DATETIME, REC_TIMESTAMP, DIRECTORY_REC_ID, 
              DIRECTORY_YEAR, `NAME`, DESCRIPTION, COST_EXCL_GST, GST_RATE, MAX_BRANCH_COUNT, MAX_KEY_PERSONNEL_COUNT,
              MAX_BRAND_COUNT, MAX_PRODUCT_CATEGORY_COUNT,IS_DEFAULT) 
            VALUE( NOW(), NOW(), directory_rec_id, 
              YEAR(CURDATE()),'Advanced Listing', adv_listingdesc, adv_costexclgst, adv_gstrate, adv_maxbranch, adv_maxpersonnel,
              adv_maxbrand, adv_maxprodcat,dir_advanced);
    
    INSERT INTO `tpl_directory_offering`(REC_DATETIME, REC_TIMESTAMP, DIRECTORY_REC_ID, 
              DIRECTORY_YEAR, `NAME`, DESCRIPTION, COST_EXCL_GST, GST_RATE, MAX_BRANCH_COUNT, MAX_KEY_PERSONNEL_COUNT,
              MAX_BRAND_COUNT, MAX_PRODUCT_CATEGORY_COUNT,IS_DEFAULT) 
            VALUE( NOW(), NOW(), directory_rec_id, 
              YEAR(CURDATE()),'Premium Listing', prem_listingdesc, prem_costexclgst, prem_gstrate, prem_maxbranch, prem_maxpersonnel,
              prem_maxbrand, prem_maxprodcat,dir_premium);
    
    INSERT INTO `tpl_directory_additional_offering`(REC_DATETIME, REC_TIMESTAMP, DIRECTORY_REC_ID, DIRECTORY_YEAR, `CODE`, `NAME`, DESCRIPTION, COST_EXCL_GST, GST_RATE) 
            VALUE( NOW(), NOW(), directory_rec_id, YEAR(CURDATE()), addoffer_code, addoffer_name, addoffer_description, addoffer_costexclgst, addoffer_gstrate);
  END IF;
  SELECT directory_rec_id;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `do_getClient` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `do_getClient`(IN DIR_ID INT, IN KEYWORDS VARCHAR(255))
BEGIN

  SET @words = CONCAT('%',KEYWORDS,'%'); 
    SELECT tpl_client.NAME, tpl_shadow_root.DIRECTORY_REC_ID, tpl_shadow_root.DIRECTORY_YEAR, 
    tpl_shadow_root.STATE, tpl_shadow_root.`USERNAME`, tpl_shadow_root.`PASSWORD` 
    FROM tpl_shadow_root INNER JOIN tpl_client ON tpl_shadow_root.CLIENT_REC_ID = tpl_client.REC_ID
    WHERE tpl_client.NAME like @words AND tpl_shadow_root.DIRECTORY_REC_ID = DIR_ID;

END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `do_numRows` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `do_numRows`(
        IN search_key VARCHAR(255),
        IN sid VARCHAR(50),
        IN tbltype VARCHAR(25)
    )
    READS SQL DATA
    DETERMINISTIC
    COMMENT '\r\nloop through each record in search_params\r\n  call search_1tabl'
BEGIN
DECLARE tbl VARCHAR(20);
DECLARE fld VARCHAR(20);
DECLARE num_rows INT DEFAULT 0;
DECLARE no_more_rows BOOLEAN;
DECLARE search_cur CURSOR FOR
	SELECT `table_name`, `field` FROM tpl_search_params WHERE `table_name`= tbltype;
DECLARE CONTINUE HANDLER FOR NOT FOUND
    SET no_more_rows = TRUE;
DELETE FROM  tpl_search_temp_sessions WHERE `SESSION_ID` =sid;
OPEN search_cur;
select FOUND_ROWS() into num_rows;
the_loop: LOOP
    FETCH  search_cur INTO tbl, fld;
    IF no_more_rows THEN
        LEAVE the_loop;
    END IF;
	call search_1table1field( tbl, fld, search_key, sid) ;
END LOOP the_loop;
CLOSE search_cur;
SET @s = CONCAT('SELECT r FROM `tpl_search_temp_sessions` WHERE `SESSION_ID`="' , sid , '" AND `T`= "',tbltype,'" ORDER BY `W` DESC');
PREPARE stmt FROM @s;
EXECUTE stmt;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `do_search` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `do_search`(
        IN search_key VARCHAR(255),
        IN sid VARCHAR(50)
    )
    READS SQL DATA
    DETERMINISTIC
    COMMENT '\r\nloop through each record in search_params\r\n  call search_1tabl'
BEGIN
DECLARE tbl VARCHAR(20);
DECLARE fld VARCHAR(20);
DECLARE loop_ctr INT DEFAULT 0;
DECLARE num_rows INT DEFAULT 0;
DECLARE no_more_rows BOOLEAN;
DECLARE search_cur CURSOR FOR
	SELECT `table_name`, `field` FROM tpl_search_params;
DECLARE CONTINUE HANDLER FOR NOT FOUND
    SET no_more_rows = TRUE;
DELETE FROM  tpl_search_temp_sessions WHERE `SESSION_ID` =sid;
DELETE FROM  tpl_search_results WHERE `SESSION_ID` =sid;
DELETE FROM  tpl_search_logs WHERE `SESSION_ID` =sid;
OPEN search_cur;
select FOUND_ROWS() into num_rows;
the_loop: LOOP
    FETCH  search_cur   INTO   tbl, fld;
    IF no_more_rows THEN
        LEAVE the_loop;
    END IF;
	call search_1table1field( tbl, fld, search_key, sid) ;
	SET loop_ctr = loop_ctr + 1;
END LOOP the_loop;
CLOSE search_cur;
SET @s = CONCAT('INSERT INTO tpl_search_results(`SESSION_ID`,`TABLE_NAME`,`TABLE_REC_ID`,`WEIGHT`) ',
				        'SELECT ','"', sid, '",',' t, r, ',
                ' CONCAT(count(w),".",round(avg(w),0)) as combined_weight ',
                ' FROM  tpl_search_temp_sessions ',
                ' WHERE `SESSION_ID`="' , sid , '"',
                ' GROUP BY t,r ',
                ' ORDER BY combined_weight DESC');
PREPARE stmt FROM @s;
EXECUTE stmt;
SET @s = CONCAT('SELECT TABLE_NAME, TABLE_REC_ID, WEIGHT ',
				' FROM `tpl_search_results`', ' WHERE `SESSION_ID`="' , sid , '"',' ORDER BY `WEIGHT` DESC');
PREPARE stmt FROM @s;
EXECUTE stmt;
select FOUND_ROWS() into num_rows;
INSERT INTO `tpl_search_logs`(`SESSION_ID`,`SEARCH_TEXT`,`NUM_MATCHES`) values (sid, search_key,num_rows);
SELECT @recid:= REC_ID FROM `tpl_search_logs` WHERE `session_id` = sid;
SET @s = CONCAT('UPDATE tpl_search_results SET SEARCH_LOG_REC_ID = @recid WHERE SESSION_ID="', sid,'"');
PREPARE stmt FROM @s;
EXECUTE stmt;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `do_searchEx` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `do_searchEx`(
        IN search_key VARCHAR(255),
        IN sid VARCHAR(50),
        IN tbltype VARCHAR(25)
    )
    COMMENT '\r\nloop through each record in search_params\r\n  call search_1tabl'
BEGIN
DECLARE tbl VARCHAR(20);
DECLARE fld VARCHAR(20);
DECLARE loop_ctr INT DEFAULT 0;
DECLARE num_rows INT DEFAULT 0;
DECLARE no_more_rows BOOLEAN;
DECLARE search_cur CURSOR FOR
	SELECT `table_name`, `field` FROM tpl_search_params WHERE `table_name`= tbltype;
DECLARE CONTINUE HANDLER FOR NOT FOUND
    SET no_more_rows = TRUE;
DELETE FROM  tpl_search_temp_sessions WHERE `SESSION_ID` =sid;
DELETE FROM  tpl_search_results WHERE `SESSION_ID` =sid;
DELETE FROM  tpl_search_logs WHERE `SESSION_ID` =sid;
OPEN search_cur;
select FOUND_ROWS() into num_rows;
the_loop: LOOP
    FETCH  search_cur   INTO   tbl, fld;
    IF no_more_rows THEN
        LEAVE the_loop;
    END IF;
	call search_1table1field( tbl, fld, search_key, sid) ;
	SET loop_ctr = loop_ctr + 1;
END LOOP the_loop;
CLOSE search_cur;
SET @s = CONCAT('INSERT INTO tpl_search_results(`SESSION_ID`,`TABLE_NAME`,`TABLE_REC_ID`,`WEIGHT`) ',
				        'SELECT ','"', sid, '",',' t, r, ',
                ' CONCAT(count(w),".",round(avg(w),0)) as combined_weight ',
                ' FROM  tpl_search_temp_sessions ',
                ' WHERE `SESSION_ID`="' , sid , '"',
                ' GROUP BY t,r ',
                ' ORDER BY combined_weight DESC');
PREPARE stmt FROM @s;
EXECUTE stmt;
SET @s = CONCAT('SELECT TABLE_NAME, TABLE_REC_ID, WEIGHT ',
				' FROM `tpl_search_results`', ' WHERE `SESSION_ID`="' , sid , '" AND `TABLE_NAME`= "',tbltype,'" ORDER BY `WEIGHT` DESC');
PREPARE stmt FROM @s;
EXECUTE stmt;
select FOUND_ROWS() into num_rows;
INSERT INTO `tpl_search_logs`(`SESSION_ID`,`SEARCH_TEXT`,`NUM_MATCHES`) values (sid, search_key,num_rows);
SELECT @recid:= REC_ID FROM `tpl_search_logs` WHERE `session_id` = sid;
SET @s = CONCAT('UPDATE tpl_search_results SET SEARCH_LOG_REC_ID = @recid WHERE SESSION_ID="', sid,'"');
PREPARE stmt FROM @s;
EXECUTE stmt;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `do_search_supplier` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `do_search_supplier`(
  IN rid INT(11)
)
BEGIN
  SET @s = CONCAT('SELECT * FROM `tpl_supplier` WHERE `REC_ID` IN (SELECT `SUPPLIER_REC_ID` FROM `tpl_supplier_product_category` WHERE `PRODUCT_CATEGORY_REC_ID`=' , rid,') ORDER BY NAME ASC');
  PREPARE stmt FROM @s;
  EXECUTE stmt;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getBrandFromShawsExport` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`tplweb`@`localhost`*/ /*!50003 PROCEDURE `getBrandFromShawsExport`(
    IN DIR_REC_ID INT(11)
)
BEGIN
	SET @s =CONCAT("SELECT tpl_brand.REC_ID, tpl_brand.NAME FROM tpl_brand_directory ",
                 "INNER JOIN tpl_brand ON (tpl_brand_directory.BRAND_REC_ID = tpl_brand.REC_ID) ",
                 "WHERE tpl_brand_directory.DIRECTORY_REC_ID = '",DIR_REC_ID,"' ",
                 "ORDER BY tpl_brand.NAME");
	PREPARE stmt FROM @s;
	EXECUTE stmt;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getCategoriesFromShawsAdmin` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `getCategoriesFromShawsAdmin`(
    IN CATEGORY_REC_ID INT(11),
    IN DIR_REC_ID INT(11)
)
BEGIN
	SET @s =CONCAT("SELECT  tpl_product_category.REC_ID, tpl_product_category.NAME FROM tpl_product_category ",
                "INNER JOIN tpl_product_category_directory ",
                "ON (tpl_product_category.REC_ID = tpl_product_category_directory.PRODUCT_CATEGORY_REC_ID) ",
                "WHERE tpl_product_category.PARENT_PRODUCT_CATEGORY_REC_ID ='",CATEGORY_REC_ID,"' ",
                "AND tpl_product_category_directory.DIRECTORY_REC_ID = '",DIR_REC_ID,"' ",
                "ORDER BY tpl_product_category.NAME");
	PREPARE stmt FROM @s;
	EXECUTE stmt;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getProdCategoryInfo` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`tplweb`@`localhost`*/ /*!50003 PROCEDURE `getProdCategoryInfo`(
        IN PRODCAT_REC_ID INT(11),
        IN DIR_ID INT(11)
    )
    COMMENT '\r\n used by the export utility for product'
BEGIN
    IF PRODCAT_REC_ID = 0 THEN
         SET @s =CONCAT("SELECT tpl_product_category.REC_ID, tpl_product_category.NAME, tpl_product_category.PRINT_ORDER",
					 	" FROM tpl_product_category",
					 	" INNER JOIN tpl_product_category_directory ON (tpl_product_category.REC_ID = tpl_product_category_directory.PRODUCT_CATEGORY_REC_ID)",
					 	" WHERE (tpl_product_category.PARENT_PRODUCT_CATEGORY_REC_ID IS NULL)",
				 		" AND (tpl_product_category_directory.DIRECTORY_REC_ID = ", DIR_ID ,")",
					    " ORDER BY tpl_product_category.PRINT_ORDER, tpl_product_category.NAME");
		PREPARE stmt FROM @s;
		EXECUTE stmt;
    ELSE
		SET @s =CONCAT( "SELECT tpl_product_category.REC_ID, tpl_product_category.NAME, tpl_product_category.PRINT_ORDER",
						" FROM tpl_product_category",
					 	" INNER JOIN tpl_product_category_directory ON (tpl_product_category.REC_ID = tpl_product_category_directory.PRODUCT_CATEGORY_REC_ID)",
					 	" WHERE (tpl_product_category.PARENT_PRODUCT_CATEGORY_REC_ID = ", PRODCAT_REC_ID ,")",
						" AND (tpl_product_category_directory.DIRECTORY_REC_ID = ", DIR_ID ,")",
						" ORDER BY tpl_product_category.PRINT_ORDER, tpl_product_category.NAME");
		PREPARE stmt FROM @s;
		EXECUTE stmt;
	END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getRootCategoriesFromShawsExport` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`tplweb`@`localhost`*/ /*!50003 PROCEDURE `getRootCategoriesFromShawsExport`(
    IN DIR_REC_ID INT(11)
)
BEGIN
	SET @s =CONCAT("SELECT tpl_product_category.REC_ID, tpl_product_category.NAME ","
                FROM tpl_product_category_directory ",
                "INNER JOIN tpl_product_category ",
                "ON (tpl_product_category_directory.PRODUCT_CATEGORY_REC_ID = tpl_product_category.REC_ID) ",
                "WHERE tpl_product_category_directory.DIRECTORY_REC_ID = '",DIR_REC_ID,"' ",
                "AND tpl_product_category.PARENT_PRODUCT_CATEGORY_REC_ID IS NULL");
	PREPARE stmt FROM @s;
	EXECUTE stmt;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getShadowDirAndSupplierInfo` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`tplweb`@`localhost`*/ /*!50003 PROCEDURE `getShadowDirAndSupplierInfo`(
        IN DIR_ID INT(11),
        IN YEAR VARCHAR(4)
    )
BEGIN
	SET @s =CONCAT("SELECT tpl_shadow_supplier.*, tpl_shadow_root.DIRECTORY_YEAR, tpl_shadow_root.DIRECTORY_REC_ID, ",
        
        "tpl_shadow_directory_offering.NAME as OFFERING_NAME, ",
      
        "tpl_shadow_directory_offering.MAX_BRAND_COUNT, ",
			
        "tpl_shadow_directory_offering.MAX_KEY_PERSONNEL_COUNT, ",
        
        "tpl_shadow_directory_offering.MAX_BRANCH_COUNT, ",
        
        "tpl_shadow_directory_offering.MAX_PRODUCT_CATEGORY_COUNT ",
			
        "FROM ",
        
        "tpl_shadow_supplier ",
        
        "INNER JOIN tpl_shadow_root ON (tpl_shadow_supplier.SHADOW_REC_ID = tpl_shadow_root.REC_ID) ",
        
        "INNER JOIN tpl_shadow_directory_offering ON (tpl_shadow_root.SHADOW_DIRECTORY_OFFERING_REC_ID = tpl_shadow_directory_offering.REC_ID) ",
			
        "WHERE (tpl_shadow_root.DIRECTORY_REC_ID = ",DIR_ID, ") AND ",
        
        "(tpl_shadow_root.DIRECTORY_YEAR = ", YEAR,  ") AND ",
        
        "(tpl_shadow_root.STATE = 'CLOSED') ",
        
        "ORDER BY tpl_shadow_supplier.NAME;");
        
	PREPARE stmt FROM @s;
	EXECUTE stmt;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getShadowProductFromShawsAdmin` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`tplweb`@`localhost`*/ /*!50003 PROCEDURE `getShadowProductFromShawsAdmin`(
    IN SUB_REC_ID INT(11),
    IN DIR_REC_ID INT(11),
    IN TARGET_YEAR INT(4),
    IN STATE VARCHAR(20)
)
BEGIN
	SET @s =CONCAT("SELECT tpl_shadow_product.LABEL_NAME, tpl_shadow_product.VARIETAL, tpl_shadow_product.VINTAGE, tpl_shadow_product.REGION_OF_ORIGIN, ",
                "tpl_shadow_product.COUNTRY_OF_ORIGIN, tpl_shadow_supplier.NAME ",
                "FROM tpl_shadow_product ",
                "INNER JOIN tpl_shadow_supplier ON (tpl_shadow_product.SHADOW_REC_ID = tpl_shadow_supplier.SHADOW_REC_ID) ",
                "INNER JOIN tpl_shadow_root ON (tpl_shadow_supplier.SHADOW_REC_ID = tpl_shadow_root.REC_ID) ",
                "WHERE (tpl_shadow_product.PRODUCT_CATEGORY_REC_ID = '",SUB_REC_ID,"' ) ",
                "AND (tpl_shadow_product.DIRECTORY_REC_ID = '",DIR_REC_ID,"' )",
                "AND ((tpl_shadow_product.REC_ACTION <> 'DELETE' ) OR (tpl_shadow_product.REC_ACTION IS NULL)) ",
                "AND tpl_shadow_root.DIRECTORY_YEAR = '",TARGET_YEAR,"' AND tpl_shadow_root.STATE = '",STATE,"' ",
                "ORDER BY tpl_shadow_product.LABEL_NAME, tpl_shadow_product.VARIETAL, tpl_shadow_supplier.NAME");
	PREPARE stmt FROM @s;
	EXECUTE stmt;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getShadowSupplier` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`tplweb`@`localhost`*/ /*!50003 PROCEDURE `getShadowSupplier`(

    IN DIRECTORY_REC_ID INT(11),

    IN TARGET_YEAR INT(11),

    IN BRAND_REC_ID INT(11),

    IN STATE VARCHAR(20)

)
BEGIN

	SET @s =CONCAT("SELECT tpl_shadow_supplier.NAME FROM tpl_shadow_supplier ",

                 "INNER JOIN tpl_shadow_root ON (tpl_shadow_supplier.SHADOW_REC_ID = tpl_shadow_root.REC_ID) ",

                 "INNER JOIN tpl_shadow_supplier_brand ON (tpl_shadow_supplier.SHADOW_REC_ID = tpl_shadow_supplier_brand.SHADOW_REC_ID) ",

                 "WHERE ",

                 "((tpl_shadow_supplier_brand.REC_ACTION IS NULL) OR (tpl_shadow_supplier_brand.REC_ACTION <> 'DELETE')) AND ",

                 "tpl_shadow_supplier_brand.BRAND_REC_ID = '",BRAND_REC_ID,"' AND ",

                 "tpl_shadow_root.STATE = '",STATE,"' AND ",

                 "tpl_shadow_root.DIRECTORY_REC_ID = '",DIRECTORY_REC_ID,"' AND ",

                 "tpl_shadow_root.DIRECTORY_YEAR = '",TARGET_YEAR,"' GROUP BY NAME ORDER BY NAME ASC");

	PREPARE stmt FROM @s;

	EXECUTE stmt;

END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getShadowSupplierBranchFromShawsAdmin` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`tplweb`@`localhost`*/ /*!50003 PROCEDURE `getShadowSupplierBranchFromShawsAdmin`(
        IN SHADOW_REC_ID INT(11),
        IN MASTER_REC_ID VARCHAR(4)
    )
BEGIN
SET @s =CONCAT("SELECT * FROM tpl_shadow_supplier_branch ",
               "WHERE (SHADOW_REC_ID = '",SHADOW_REC_ID,"') ",
               "AND (SUPPLIER_REC_ID = '",MASTER_REC_ID,"') ",
               "AND ((REC_ACTION IS NULL) OR (REC_ACTION <> 'DELETE')) ORDER BY NAME");
	PREPARE stmt FROM @s;
	EXECUTE stmt;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getShadowSupplierDistributorFromShawsAdmin` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`tplweb`@`localhost`*/ /*!50003 PROCEDURE `getShadowSupplierDistributorFromShawsAdmin`(
        IN SHADOW_REC_ID INT(11),
        IN MASTER_REC_ID VARCHAR(4)
    )
BEGIN
SET @s =CONCAT("SELECT * FROM tpl_shadow_supplier_distributor ",
               "WHERE (SHADOW_REC_ID = '",SHADOW_REC_ID,"') ",
               "AND (SUPPLIER_REC_ID = '",MASTER_REC_ID,"') ",
               "AND ((REC_ACTION IS NULL) OR (REC_ACTION <> 'DELETE'))");
	PREPARE stmt FROM @s;
	EXECUTE stmt;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getShadowSupplierInfo` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`tplweb`@`localhost`*/ /*!50003 PROCEDURE `getShadowSupplierInfo`(
        IN SUPPLIER_TYPE_RECID INT(11),
        IN YEAR INT(11),
        IN STATE VARCHAR(20)
    )
    COMMENT '\r\n used by the export utility for product'
BEGIN
	SET @s =CONCAT('SELECT tpl_shadow_supplier.*, tpl_shadow_directory_offering.NAME as DIRECTORY_OFFERING_SELECTION',
					 	' FROM tpl_shadow_root',
					 	' INNER JOIN tpl_shadow_supplier ON (tpl_shadow_root.REC_ID = tpl_shadow_supplier.SHADOW_REC_ID)',
					 	' INNER JOIN tpl_shadow_directory_offering ON (tpl_shadow_root.SHADOW_DIRECTORY_OFFERING_REC_ID = tpl_shadow_directory_offering.REC_ID)',
				 		' WHERE tpl_shadow_root.DIRECTORY_REC_ID = 3',
					    ' AND tpl_shadow_root.STATE = "',STATE,'"',
					    ' AND tpl_shadow_root.DIRECTORY_YEAR = ', YEAR,
					    ' AND	tpl_shadow_supplier.SUPPLIER_TYPE_REC_ID = ', SUPPLIER_TYPE_RECID,
					    ' ORDER BY tpl_shadow_supplier.NAME');
	PREPARE stmt FROM @s;
	EXECUTE stmt;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getShadowSupplierPersonnelFromShawsAdmin` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`tplweb`@`localhost`*/ /*!50003 PROCEDURE `getShadowSupplierPersonnelFromShawsAdmin`(
        IN SHADOW_REC_ID INT(11),
        IN MASTER_REC_ID VARCHAR(4)
    )
BEGIN
SET @s =CONCAT("SELECT * FROM tpl_shadow_supplier_key_personnel ",
               "WHERE (SHADOW_REC_ID = '",SHADOW_REC_ID,"') ",
               "AND (SUPPLIER_REC_ID = '",MASTER_REC_ID,"') ",
               "AND ((REC_ACTION IS NULL) OR (REC_ACTION <> 'DELETE'))");
	PREPARE stmt FROM @s;
	EXECUTE stmt;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getSubCategoriesFromShawsAdmin` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`tplweb`@`localhost`*/ /*!50003 PROCEDURE `getSubCategoriesFromShawsAdmin`(
    IN ROOT_REC_ID INT(11),
    IN DIR_REC_ID INT(11)
)
BEGIN
	SET @s =CONCAT("SELECT  tpl_product_category.REC_ID, tpl_product_category.NAME FROM tpl_product_category ",
                "INNER JOIN tpl_product_category_directory ",
                "ON (tpl_product_category.REC_ID = tpl_product_category_directory.PRODUCT_CATEGORY_REC_ID) ",
                "WHERE tpl_product_category.PARENT_PRODUCT_CATEGORY_REC_ID ='",ROOT_REC_ID,"' ",
                "AND tpl_product_category_directory.DIRECTORY_REC_ID = '",DIR_REC_ID,"' ",
                "ORDER BY tpl_product_category.NAME");
	PREPARE stmt FROM @s;
	EXECUTE stmt;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getSupplierBrandInfo` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`tplweb`@`localhost`*/ /*!50003 PROCEDURE `getSupplierBrandInfo`(

        IN BRAND_REC_ID INT(11),

        IN DIR_ID INT(11),

        IN YEAR VARCHAR(4)

    )
BEGIN

	SET @s =CONCAT("SELECT tpl_shadow_supplier.NAME, tpl_shadow_supplier_brand.IS_LOGO_LISTING "
    
        "FROM tpl_shadow_supplier_brand ",
        
        "INNER JOIN tpl_shadow_root ON (tpl_shadow_supplier_brand.SHADOW_REC_ID = tpl_shadow_root.REC_ID) ",

        "INNER JOIN tpl_shadow_supplier ON (tpl_shadow_root.REC_ID = tpl_shadow_supplier.SHADOW_REC_ID) ",

        "INNER JOIN tpl_shadow_directory_offering ON (tpl_shadow_root.SHADOW_DIRECTORY_OFFERING_REC_ID = tpl_shadow_directory_offering.REC_ID) ",

        "WHERE (tpl_shadow_supplier_brand.BRAND_REC_ID =",BRAND_REC_ID," ) ",
        
        "AND ((tpl_shadow_supplier_brand.REC_ACTION IS NULL) OR (tpl_shadow_supplier_brand.REC_ACTION <> 'DELETE')) ", -- added to fix the issue reported by tpl on 31/05/2011

        "AND (tpl_shadow_root.DIRECTORY_REC_ID =",DIR_ID," ) ",
        
        "AND (tpl_shadow_root.STATE = 'CLOSED' ) ",

        "AND (tpl_shadow_root.DIRECTORY_YEAR ='",YEAR,"' ) ",

        "AND (tpl_shadow_directory_offering.MAX_BRAND_COUNT > 0) ORDER BY tpl_shadow_supplier.NAME;");

	PREPARE stmt FROM @s;

	EXECUTE stmt;

END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getSupplierBrands` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`tplweb`@`localhost`*/ /*!50003 PROCEDURE `getSupplierBrands`(

    IN SHADOW_REC_ID INT(11),

    IN MASTER_REC_ID INT(11)

)
BEGIN

	SET @s =CONCAT("SELECT tpl_brand.NAME as BRAND_NAME, tpl_shadow_supplier_brand.* FROM tpl_shadow_supplier_brand ",

    "INNER JOIN tpl_brand ON (tpl_shadow_supplier_brand.BRAND_REC_ID = tpl_brand.REC_ID) ",

    "WHERE (SHADOW_REC_ID = ", SHADOW_REC_ID ,") AND (SUPPLIER_REC_ID = ", MASTER_REC_ID,

    ") AND ((REC_ACTION IS NULL) OR (REC_ACTION <> 'DELETE')) ORDER BY BRAND_NAME ASC");

	PREPARE stmt FROM @s;

	EXECUTE stmt;

END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getSupplierFromCode` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`tplweb`@`localhost`*/ /*!50003 PROCEDURE `getSupplierFromCode`(



    IN SUPPLIER_CODE VARCHAR(24)



)
BEGIN



	SET @s =CONCAT("SELECT * FROM tpl_supplier_type WHERE CODE = '", SUPPLIER_CODE,"'");



	PREPARE stmt FROM @s;



	EXECUTE stmt;



END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getSupplierProdCatInfo` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`tplweb`@`localhost`*/ /*!50003 PROCEDURE `getSupplierProdCatInfo`(
        IN PRODCAT_REC_ID INT(11),
        IN DIR_ID INT(11),
        IN YEAR VARCHAR(4)
    )
    COMMENT '\r\n used by the export utility for product'
BEGIN
-- make changes from tpl_shadow_supplier.REC_ID to tpl_shadow_supplier.MASTER_REC_ID (bug reported from tpl 'ref.email' - 26/05/2011)
		SET @s =CONCAT("SELECT tpl_shadow_supplier.NAME, tpl_shadow_supplier_product_category.IS_LOGO_LISTING",
								 	" FROM tpl_shadow_supplier_product_category",
								 	" INNER JOIN tpl_shadow_supplier ON (tpl_shadow_supplier_product_category.SUPPLIER_REC_ID = tpl_shadow_supplier.MASTER_REC_ID)",
                  " INNER JOIN tpl_shadow_root ON (tpl_shadow_supplier.SHADOW_REC_ID = tpl_shadow_root.REC_ID)",
								 	" WHERE (tpl_shadow_supplier_product_category.PRODUCT_CATEGORY_REC_ID = ", PRODCAT_REC_ID ,")",
                  " AND (tpl_shadow_root.REC_ID = tpl_shadow_supplier_product_category.SHADOW_REC_ID)", -- this line is added due to duplicate result as reported by tpl (6/8/2011) refer to email
								  " AND (tpl_shadow_root.DIRECTORY_REC_ID = ", DIR_ID ,")",
								  " AND (tpl_shadow_root.DIRECTORY_YEAR = '", YEAR ,"')",
                  " AND (tpl_shadow_root.STATE = 'CLOSED')",
                  " AND ((tpl_shadow_supplier_product_category.REC_ACTION = 'INSERT')",
                  " OR (tpl_shadow_supplier_product_category.REC_ACTION = 'UPDATE')",
                  " OR (tpl_shadow_supplier_product_category.REC_ACTION IS NULL))",
								  " ORDER BY tpl_shadow_supplier.NAME");
		PREPARE stmt FROM @s;
		EXECUTE stmt;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_popular_tags` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`tplweb`@`localhost`*/ /*!50003 PROCEDURE `get_popular_tags`(
        IN num_tags INTEGER(11)
    )
BEGIN
SET @s = CONCAT('select `SEARCH_TEXT` ',
	'from tpl_popular_tags ',
    'order by `COUNT` DESC ',
    'LIMIT 0, ' , num_tags );
PREPARE stmt FROM @s;
EXECUTE stmt;
    
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_search_page` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `get_search_page`(
        IN sid VARCHAR(50),
        IN page INTEGER,
        IN no_rows INTEGER
    )
BEGIN
DECLARE row_start int DEFAULT 0;
SET row_start= (page-1) * no_rows;
SET @s = CONCAT('SELECT TABLE_NAME, TABLE_REC_ID, WEIGHT ',
				' FROM `tpl_search_results`',
        ' WHERE `SESSION_ID`="' , sid , '"',
        ' ORDER BY `WEIGHT` DESC',
        ' LIMIT ', row_start, ' , ', no_rows
        );
PREPARE stmt FROM @s;
EXECUTE stmt;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_supplier_brand_list` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `get_supplier_brand_list`(
  IN rid INT(11)
)
    READS SQL DATA
BEGIN
DECLARE brid INT(11);
DECLARE haslogo TINYINT(1);
DECLARE loop_ctr INT DEFAULT 0;
DECLARE no_more_rows BOOLEAN;
DECLARE search_cur CURSOR FOR
  select `BRAND_REC_ID`, `IS_LOGO_LISTING` from tpl_supplier_brand WHERE tpl_supplier_brand.SUPPLIER_REC_ID = rid;
DECLARE CONTINUE HANDLER FOR NOT FOUND
    SET no_more_rows = TRUE;
drop table if exists `#temp1`;
create temporary table `#temp1`(BRAND_REC_ID INT(11), NAME VARCHAR(128) ,WEB_LOGO_LOCATION VARCHAR(256));
OPEN search_cur;
the_loop: LOOP
    FETCH search_cur INTO brid, haslogo;
    IF no_more_rows THEN
        LEAVE the_loop;
    END IF;
    insert into `#temp1`(BRAND_REC_ID, NAME, WEB_LOGO_LOCATION) SELECT REC_ID, NAME, WEB_LOGO_LOCATION FROM tpl_brand WHERE REC_ID = brid;
    SET loop_ctr = loop_ctr + 1;
END LOOP the_loop;
CLOSE search_cur;
SET @s = "SELECT * FROM `#temp1` ORDER BY NAME ASC";
PREPARE stmt FROM @s;
EXECUTE stmt;
DROP TABLE `#temp1`;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_supplier_product_list` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `get_supplier_product_list`(
  IN rid VARCHAR(50)
  )
    DETERMINISTIC
BEGIN
 SET @s = CONCAT('SELECT * FROM `tpl_supplier_product`', ' WHERE `SUPPLIER_REC_ID`="' , rid , '"');
 PREPARE stmt FROM @s;
 EXECUTE stmt;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `search_1table1field` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `search_1table1field`(
        IN tbl VARCHAR(255),
        IN col VARCHAR(255),
        IN search_key VARCHAR(255),
        iN sid VARCHAR(50)
    )
    DETERMINISTIC
    COMMENT 'search for matches give the following parameters:\r\nsearch table,'
BEGIN
DECLARE i INT DEFAULT 1;
DECLARE str_len INT;
DECLARE where_str text default '';
DECLARE num_words INT;
DECLARE sSplit VARCHAR(255);
DECLARE nWeight tinyint(4);
SET num_words= wordCount(search_key,' ');
SET sSplit = strSplit(search_key,' ',i);
SET where_str = CONCAT( col, ' LIKE \'%', sSplit ,'%\'');
WHILE(i<num_words) DO
	SET i=i+1;
  SET sSplit = strSplit(search_key,' ',i);
	SET where_str = CONCAT(where_str, ' AND ',col, ' LIKE \'%',sSplit,'%\'');
END WHILE;
SET nWeight = get_weight( CONCAT('\'', search_key, '\''), col );
SET @s = CONCAT('INSERT INTO tpl_search_temp_sessions(`SESSION_ID`,t,c,r,w)',
				' SELECT ','"', sid, '", "' ,	tbl , '" as source_table, ' , '"', col , '" as column_name, ' ,
        ' `rec_id` as rec_id, ' , nWeight, ' as weight ' ,
        ' FROM ' , tbl , ' where ' , col , ' is NOT NULL  ' , 'AND ', where_str
				);
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

-- Dump completed on 2012-10-05 15:54:54
