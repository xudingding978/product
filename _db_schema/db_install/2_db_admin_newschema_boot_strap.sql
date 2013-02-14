-- This file imports all required data for the booting of the application 

-- MySQL dump 10.13  Distrib 5.1.58, for debian-linux-gnu (x86_64)
--
-- Host: 127.0.0.1    Database: db_admin and db_live
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



-- **** ADMIN_DB **** ADMIN_DB **** ADMIN_DB **** ADMIN_DB **** ADMIN_DB **** ADMIN_DB **** ADMIN_DB **** ADMIN_DB **** ADMIN_DB **** ADMIN_DB ****
USE `bds-v3_admin`;
/*!40000 ALTER TABLE `tpl_admin_roles` DISABLE KEYS */;
INSERT INTO `tpl_admin_roles` (`REC_ID`, `ROLE`, `DESCRIPTION`) 
VALUES  
    (1,'SuperAdmin','Super Administrator Account - Full Access'),
    (2,'Admin','Standard Administrator Account');
/*!40000 ALTER TABLE `tpl_admin_roles` ENABLE KEYS */;

/*!40000 ALTER TABLE `tpl_admin_users` DISABLE KEYS */;
INSERT INTO `tpl_admin_users` (`REC_ID` , `TENANT_ID` `USERNAME` , `PASSWORD` , `ROLE_ID` ,  `FIRSTNAME` , `LASTNAME`, `CREATED`, `CREATEDBY`, `MODIFIED`, `LASTLOGIN`, `SESSIONID`, `FRONTGRID_ID`) 
VALUES 
    (1,1,'superadmin','f23c9a5dca7aef19a3db264c5c21a2f8',1,'Super','Administrator','2011-11-11 11:11:11','DB_BootStrap','2012-02-13 02:48:22','2012-03-03 16:09:21','2bbd1d79a63d06d81fb4f45001f47c8a',1),
    (2,1,'admin','f23c9a5dca7aef19a3db264c5c21a2f8',2,'System','Administrator','2011-11-11 11:11:11','DB_BootStrap','2012-02-13 02:48:22','2012-03-03 16:09:21','2bbd1d79a63d06d81fb4f45001f47c8a',1);
/*!40000 ALTER TABLE `tpl_admin_users` ENABLE KEYS */;

-- **** ADMIN_DB **** ADMIN_DB **** ADMIN_DB **** ADMIN_DB **** ADMIN_DB **** ADMIN_DB **** ADMIN_DB **** ADMIN_DB **** ADMIN_DB **** ADMIN_DB ****