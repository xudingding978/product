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
-- Table structure for table `tpl_transaction_invoice`
--

DROP TABLE IF EXISTS `tpl_transaction_invoice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_transaction_invoice` (
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `REC_TIMESTAMP` datetime DEFAULT NULL,
  `REC_DATETIME` datetime DEFAULT NULL,
  `TRANSACTION_INVOICE_ID` int(11) NOT NULL,
  `INVOICE_ID` int(11) NOT NULL,
  PRIMARY KEY (`REC_ID`),
  KEY `fk_tpl_transaction_invoice_1_idx` (`TRANSACTION_INVOICE_ID`),
  KEY `fk_invoice_idx` (`INVOICE_ID`),
  CONSTRAINT `fk_invoice` FOREIGN KEY (`INVOICE_ID`) REFERENCES `tpl_invoices` (`REC_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_transaction` FOREIGN KEY (`TRANSACTION_INVOICE_ID`) REFERENCES `tpl_transactions` (`REC_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;
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
