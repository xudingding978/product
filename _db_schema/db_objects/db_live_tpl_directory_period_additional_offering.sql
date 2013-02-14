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
-- Table structure for table `tpl_directory_period_additional_offering`
--

DROP TABLE IF EXISTS `tpl_directory_period_additional_offering`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_directory_period_additional_offering` (
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `REC_DATETIME` datetime NOT NULL,
  `REC_TIMESTAMP` datetime NOT NULL,
  `DIRECTORY_PERIOD_REC_ID` int(11) NOT NULL,
  `CODE` varchar(24) NOT NULL DEFAULT '',
  `NAME` varchar(255) NOT NULL DEFAULT '',
  `DESCRIPTION` text,
  `COST_EXCL_GST` double(15,3) unsigned zerofill NOT NULL,
  `PERIOD_TYPE_COST_EXCL_GST` double(15,3) unsigned zerofill NOT NULL,
  `GST_RATE` double(15,3) unsigned zerofill NOT NULL,
  PRIMARY KEY (`REC_ID`),
  KEY `DIRECTORY_REC_ID` (`DIRECTORY_PERIOD_REC_ID`),
  CONSTRAINT `tpl_directory_additional_offering_fk` FOREIGN KEY (`DIRECTORY_PERIOD_REC_ID`) REFERENCES `tpl_directory_period` (`REC_ID`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
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
