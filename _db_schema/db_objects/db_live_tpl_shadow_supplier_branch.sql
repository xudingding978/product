CREATE DATABASE  IF NOT EXISTS `db_live` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `db_live`;
-- MySQL dump 10.13  Distrib 5.6.6-m9, for linux2.6 (i686)
--
-- Host: localhost    Database: db_live
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
-- Table structure for table `tpl_shadow_supplier_branch`
--

DROP TABLE IF EXISTS `tpl_shadow_supplier_branch`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_shadow_supplier_branch` (
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `REC_DATETIME` datetime NOT NULL,
  `REC_TIMESTAMP` datetime NOT NULL,
  `REC_ACTION` varchar(8) DEFAULT NULL,  
  `MASTER_REC_ID` int(11) DEFAULT NULL,
  `SHADOW_SUPPLIER_REC_ID` int(11) NOT NULL,
  `SUPPLIER_REC_ID` int(11) DEFAULT NULL,
  `ORDER` int(11) DEFAULT NULL,
  `NAME` varchar(255) NOT NULL DEFAULT '',
  `TELEPHONE_NO` varchar(48) DEFAULT NULL,
  `FREE_TELEPHONE_NO` varchar(48) DEFAULT NULL,
  `FAX_NO` varchar(48) DEFAULT NULL,
  `FREE_FAX_NO` varchar(48) DEFAULT NULL,
  `EMAIL_ADDRESS` varchar(255) DEFAULT NULL,
  `PHYSICAL_ADDRESS_BUILDING_ADDRESS` varchar(255) DEFAULT NULL,
  `PHYSICAL_ADDRESS_STREET_ADDRESS` varchar(255) DEFAULT NULL,
  `PHYSICAL_ADDRESS_SUBURB` varchar(255) DEFAULT NULL,
  `PHYSICAL_ADDRESS_CITY` varchar(255) DEFAULT NULL,
  `PHYSICAL_ADDRESS_STATE` varchar(255) DEFAULT NULL,
  `PHYSICAL_ADDRESS_COUNTRY` varchar(255) DEFAULT NULL,
  `PHYSICAL_ADDRESS_POST_CODE` varchar(12) DEFAULT NULL,
  `PHYSICAL_ADDRESS_PXID` varchar(45) DEFAULT NULL,
  `PHYSICAL_ADDRESS_DPID` varchar(45) DEFAULT NULL,
  `PHYSICAL_ADDRESS_LATITUDE` float(16,12) DEFAULT NULL,
  `PHYSICAL_ADDRESS_LONGITUDE` float(16,12) DEFAULT NULL,
  `PHYSICAL_ADDRESS_HEIGHT` int(11) DEFAULT NULL,
  `PHYSICAL_ADDRESS_COMPLETE` varchar(1024) DEFAULT NULL,
  `POSTAL_ADDRESS_BUILDING_ADDRESS` varchar(255) DEFAULT NULL,
  `POSTAL_ADDRESS_STREET_ADDRESS` varchar(255) DEFAULT NULL,
  `POSTAL_ADDRESS_SUBURB` varchar(255) DEFAULT NULL,
  `POSTAL_ADDRESS_CITY` varchar(255) DEFAULT NULL,
  `POSTAL_ADDRESS_STATE` varchar(255) DEFAULT NULL,
  `POSTAL_ADDRESS_COUNTRY` varchar(255) DEFAULT NULL,
  `POSTAL_ADDRESS_POST_CODE` varchar(12) DEFAULT NULL,
  `FACEBOOK_ADDRESS_URL` varchar(1024) DEFAULT NULL,
  `TWITTER_ADDRESS_URL` varchar(1024) DEFAULT NULL,
  `LINKEDIN_ADDRESS_URL` varchar(1024) DEFAULT NULL,
  `YOUTUBE_ADDRESS_URL` varchar(1024) DEFAULT NULL,
  `FOURSQUARE_ADDRESS_URL` varchar(1024) DEFAULT NULL,
  PRIMARY KEY (`REC_ID`),
  KEY `fk_tpl_shadow_supplier` (`SHADOW_SUPPLIER_REC_ID`),
  CONSTRAINT `fk_tpl_shadow_supplier` FOREIGN KEY (`SHADOW_SUPPLIER_REC_ID`) REFERENCES `tpl_shadow_supplier` (`REC_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2012-10-05 15:54:53
