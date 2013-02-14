CREATE DATABASE  IF NOT EXISTS `db_live` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `db_live`;
-- MySQL dump 10.13  Distrib 5.5.16, for Win32 (x86)
--
-- Host: 192.168.1.50    Database: bds_live
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
-- Table structure for table `tpl_shadow_supplier_directory`
--

DROP TABLE IF EXISTS `tpl_shadow_supplier_directory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_shadow_supplier_directory` (
  `REC_ID` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `REC_DATETIME` datetime NOT NULL,
  `REC_TIMESTAMP` datetime NOT NULL,
  `SHADOW_SUPPLIER_REC_ID` int(11) unsigned NOT NULL,
  `DIRECTORY_REC_ID` int(11) unsigned NOT NULL,
  `DIRECTORY_PERIOD_REC_ID` varchar(4) CHARACTER SET latin1 DEFAULT NULL,
  `SHADOW_ROOT_REC_ID` int(11) unsigned DEFAULT NULL,
  PRIMARY KEY (`REC_ID`),
  KEY `SHADOW_SUPPLIER_REC_ID` (`SHADOW_SUPPLIER_REC_ID`),
  KEY `DIRECTORY_REC_ID` (`DIRECTORY_REC_ID`),
  CONSTRAINT `TPL_SHADOW_SUPPLIER_DIRECTORY_fk` FOREIGN KEY (`SHADOW_SUPPLIER_REC_ID`) REFERENCES `tpl_shadow_supplier` (`REC_ID`) ON UPDATE CASCADE,
  CONSTRAINT `TPL_SHADOW_SUPPLIER_DIRECTORY_fk1` FOREIGN KEY (`DIRECTORY_REC_ID`) REFERENCES `tpl_directory` (`REC_ID`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2012-10-07 16:06:14