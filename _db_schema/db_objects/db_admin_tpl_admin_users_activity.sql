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
-- Table structure for table `tpl_admin_users_activity`
--

DROP TABLE IF EXISTS `tpl_admin_users_activity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_admin_users_activity` (
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `REC_DATETIME` datetime NOT NULL,
  `REC_TIMESTAMP` datetime NOT NULL,
  `USERS_REC_ID` int(11) DEFAULT NULL,
  `PHP_FCGI_MAX_REQUESTS` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `PHP_FCGI_CHILDREN` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `PWD` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `FCGI_ROLE` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `SERVER_SOFTWARE` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `SERVER_SIGNATURE` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `GATEWAY_INTERFACE` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `PATH` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `DOCUMENT_ROOT` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `REMOTE_ADDR` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `REMOTE_PORT` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `HTTP_HOST` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `SERVER_NAME` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `QUERY_STRING` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `SERVER_PROTOCOL` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `REQUEST_METHOD` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `PATH_INFO` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `REQUEST_URI` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `SCRIPT_URL` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `HTTPS` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `SERVER_PORT` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `SERVER_ADDR` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `HTTP_ACCEPT` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `HTTP_ACCEPT_ENCODING` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `HTTP_ACCEPT_LANGUAGE` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `HTTP_CONNECTION` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `HTTP_COOKIE` varchar(4048) COLLATE utf8_unicode_ci DEFAULT NULL,
  `PHPSESSID` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `HTTP_USER_AGENT` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `SCRIPT_NAME` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `SCRIPT_FILENAME` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `PHP_SELF` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `REQUEST_TIME` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`REC_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2012-10-05 15:54:52
