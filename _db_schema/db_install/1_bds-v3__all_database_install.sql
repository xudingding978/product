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
-- Table structure for table `tpl_associated_product_category`
--

DROP TABLE IF EXISTS `tpl_associated_product_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_associated_product_category` (
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `REC_DATETIME` datetime NOT NULL,
  `REC_TIMESTAMP` datetime NOT NULL,
  `CATEGORY_REC_ID` int(11) NOT NULL,
  `ASSOCIATED_PRODUCT_CATEGORY_REC_ID` int(11) NOT NULL,
  PRIMARY KEY (`REC_ID`),
  KEY `PRODUCT_CATEGORY_REC_ID` (`CATEGORY_REC_ID`),
  KEY `ASSOCIATED_PRODUCT_CATEGORY_REC_ID` (`ASSOCIATED_PRODUCT_CATEGORY_REC_ID`),
  CONSTRAINT `TPL_ASSOCIATED_PRODUCT_CATEGORY_fk` FOREIGN KEY (`CATEGORY_REC_ID`) REFERENCES `tpl_category` (`REC_ID`) ON UPDATE CASCADE,
  CONSTRAINT `TPL_ASSOCIATED_PRODUCT_CATEGORY_fk1` FOREIGN KEY (`ASSOCIATED_PRODUCT_CATEGORY_REC_ID`) REFERENCES `tpl_category` (`REC_ID`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='InnoDB free: 184320 kB; (`PRODUCT_CATEGORY_REC_ID`) REFER `t';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tpl_brand`
--

DROP TABLE IF EXISTS `tpl_brand`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_brand` (
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `REC_DATETIME` datetime NOT NULL,
  `REC_TIMESTAMP` datetime NOT NULL,
  `NAME` varchar(128) NOT NULL DEFAULT '',
  `PRINT_LOGO_LOCATION` varchar(255) DEFAULT NULL,
  `WEB_LOGO_LOCATION` varchar(255) DEFAULT NULL,
  `TENANT_ID` int(11) DEFAULT NULL,
  PRIMARY KEY (`REC_ID`),
  UNIQUE KEY `NAME` (`NAME`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='InnoDB free: 5120 kB; InnoDB free: 184320 kB; InnoDB free: 1';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tpl_brand_directory`
--

DROP TABLE IF EXISTS `tpl_brand_directory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_brand_directory` (
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `REC_DATETIME` datetime NOT NULL,
  `REC_TIMESTAMP` datetime NOT NULL,
  `BRAND_REC_ID` int(11) NOT NULL,
  `DIRECTORY_REC_ID` int(11) NOT NULL,
  PRIMARY KEY (`REC_ID`),
  UNIQUE KEY `BRAND_DIRECTORY_IDX` (`BRAND_REC_ID`,`DIRECTORY_REC_ID`),
  KEY `DIRECTORY_REC_ID` (`DIRECTORY_REC_ID`),
  KEY `BRAND_REC_ID` (`BRAND_REC_ID`),
  CONSTRAINT `tpl_brand_directory_fk` FOREIGN KEY (`DIRECTORY_REC_ID`) REFERENCES `tpl_directory` (`REC_ID`) ON UPDATE CASCADE,
  CONSTRAINT `tpl_brand_directory_fk1` FOREIGN KEY (`BRAND_REC_ID`) REFERENCES `tpl_brand` (`REC_ID`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tpl_category`
--

DROP TABLE IF EXISTS `tpl_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_category` (
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `REC_DATETIME` datetime NOT NULL,
  `REC_TIMESTAMP` datetime NOT NULL,
  `PARENT_CATEGORY_REC_ID` int(11) NOT NULL,
  `NAME` varchar(255) NOT NULL DEFAULT '',
  `PRINT_ORDER` int(11) DEFAULT NULL,
  `PRINT_IMAGE_LOCATION` varchar(255) DEFAULT NULL,
  `WEB_IMAGE_LOCATION` varchar(255) DEFAULT NULL,
  `CODE` varchar(64) NOT NULL DEFAULT '',
  `HEADING` varchar(2024) DEFAULT NULL,
  `SUB_HEADING` varchar(4048) DEFAULT NULL,
  `TEXT` text,
  `TENANT_ID` int(11) DEFAULT NULL,
  `TREE_LEVEL` tinyint(2) NOT NULL,
  `NODE_ID` varchar(45) NOT NULL,
  `PARENT_NODE_ID` varchar(45) NOT NULL,
  PRIMARY KEY (`REC_ID`),
  KEY `PARENT_PRODUCT_CATEGORY_REC_ID` (`PARENT_CATEGORY_REC_ID`),
  KEY `fk_tpl_product_category_1` (`PARENT_CATEGORY_REC_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tpl_category_brand`
--

DROP TABLE IF EXISTS `tpl_category_brand`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_category_brand` (
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `REC_DATETIME` datetime NOT NULL,
  `REC_TIMESTAMP` datetime NOT NULL,
  `CATEGORY_REC_ID` int(11) NOT NULL,
  `BRAND_REC_ID` int(11) NOT NULL,
  PRIMARY KEY (`REC_ID`),
  KEY `BRAND_REC_ID` (`BRAND_REC_ID`),
  KEY `TPL_CATEGORY_BRAND_fk1` (`CATEGORY_REC_ID`),
  CONSTRAINT `TPL_CATEGORY_BRAND_fk` FOREIGN KEY (`BRAND_REC_ID`) REFERENCES `tpl_brand` (`REC_ID`) ON UPDATE CASCADE,
  CONSTRAINT `TPL_CATEGORY_BRAND_fk1` FOREIGN KEY (`CATEGORY_REC_ID`) REFERENCES `tpl_category` (`REC_ID`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tpl_category_directory`
--

DROP TABLE IF EXISTS `tpl_category_directory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_category_directory` (
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `REC_DATETIME` datetime NOT NULL,
  `REC_TIMESTAMP` datetime NOT NULL,
  `CATEGORY_REC_ID` int(11) NOT NULL,
  `DIRECTORY_REC_ID` int(11) NOT NULL,
  PRIMARY KEY (`REC_ID`),
  KEY `PRODUCT_CATEGORY_REC_ID` (`CATEGORY_REC_ID`),
  KEY `DIRECTORY_REC_ID` (`DIRECTORY_REC_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tpl_client`
--

DROP TABLE IF EXISTS `tpl_client`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_client` (
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `REC_DATETIME` datetime NOT NULL,
  `REC_TIMESTAMP` datetime NOT NULL,
  `NAME` varchar(255) NOT NULL DEFAULT '',
  `FIRST_NAME` varchar(45) NOT NULL,
  `LAST_NAME` varchar(45) NOT NULL,
  `USERNAME` varchar(255) NOT NULL DEFAULT '',
  `PASSWORD` varchar(255) NOT NULL DEFAULT '',
  `TRADING_AS_NAME` varchar(255) DEFAULT NULL,
  `TELEPHONE_NO` varchar(48) DEFAULT NULL,
  `FREE_TELEPHONE_NO` varchar(48) DEFAULT NULL,
  `FAX_NO` varchar(48) DEFAULT NULL,
  `FREE_FAX_NO` varchar(48) DEFAULT NULL,
  `EMAIL_ADDRESS` varchar(255) DEFAULT NULL,
  `WEBSITE_ADDRESS` varchar(255) DEFAULT NULL,
  `PHYSICAL_ADDRESS_BUILDING_ADDRESS` varchar(255) DEFAULT NULL,
  `PHYSICAL_ADDRESS_STREET_ADDRESS` varchar(255) DEFAULT NULL,
  `PHYSICAL_ADDRESS_SUBURB` varchar(255) DEFAULT NULL,
  `PHYSICAL_ADDRESS_CITY` varchar(255) DEFAULT NULL,
  `PHYSICAL_ADDRESS_STATE` varchar(255) DEFAULT NULL,
  `PHYSICAL_ADDRESS_COUNTRY` varchar(255) DEFAULT NULL,
  `PHYSICAL_ADDRESS_POST_CODE` varchar(12) DEFAULT NULL,
  `PHYSICAL_ADDRESS_DPID` varchar(45) DEFAULT NULL,
  `PHYSICAL_ADDRESS_PXID` varchar(45) DEFAULT NULL,
  `PHYSICAL_ADDRESS_LATITUDE` float(16,12) DEFAULT NULL,
  `PHYSICAL_ADDRESS_LONGITUDE` float(16,12) DEFAULT NULL,
  `PHYSICAL_ADDRESS_HEIGHT` int(11) DEFAULT NULL,
  `PHYSICAL_ADDRESS_COMPLETE` varchar(1024) DEFAULT NULL,
  `POSTAL_ADDRESS_BUILDING_ADDRESS` varchar(255) DEFAULT NULL,
  `POSTAL_ADDRESS_STREET_ADDRESS` varchar(255) DEFAULT NULL,
  `POSTAL_ADDRESS_CITY` varchar(255) DEFAULT NULL,
  `POSTAL_ADDRESS_SUBURB` varchar(255) DEFAULT NULL,
  `POSTAL_ADDRESS_STATE` varchar(255) DEFAULT NULL,
  `POSTAL_ADDRESS_COUNTRY` varchar(255) DEFAULT NULL,
  `POSTAL_ADDRESS_POST_CODE` varchar(12) DEFAULT NULL,
  `IS_DELETED` tinyint(1) DEFAULT NULL,
  `DELETED_BY` varchar(45) DEFAULT NULL,
  `DELETED_DATE` varchar(45) DEFAULT NULL,
  `CLIENT_STATUS_REC_ID` int(11) NOT NULL DEFAULT '2',
  `LAST_LOGIN_DATETIME` datetime DEFAULT NULL,
  `ACTIVATION_CODE` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`REC_ID`),
  KEY `fk_client_status` (`CLIENT_STATUS_REC_ID`),
  CONSTRAINT `fk_client_status` FOREIGN KEY (`CLIENT_STATUS_REC_ID`) REFERENCES `tpl_client_status` (`REC_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tpl_client_key_personnel`
--

DROP TABLE IF EXISTS `tpl_client_key_personnel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_client_key_personnel` (
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `REC_DATETIME` datetime NOT NULL,
  `REC_TIMESTAMP` datetime NOT NULL,
  `CLIENT_REC_ID` int(11) NOT NULL,
  `ORDER` int(11) DEFAULT NULL,
  `NAME` varchar(255) NOT NULL DEFAULT '',
  `POSITION` varchar(255) DEFAULT NULL,
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
  `POSTAL_ADDRESS_BUILDING_ADDRESS` varchar(255) DEFAULT NULL,
  `POSTAL_ADDRESS_STREET_ADDRESS` varchar(255) DEFAULT NULL,
  `POSTAL_ADDRESS_SUBURB` varchar(255) DEFAULT NULL,
  `POSTAL_ADDRESS_CITY` varchar(255) DEFAULT NULL,
  `POSTAL_ADDRESS_STATE` varchar(255) DEFAULT NULL,
  `POSTAL_ADDRESS_COUNTRY` varchar(255) DEFAULT NULL,
  `POSTAL_ADDRESS_POST_CODE` varchar(12) DEFAULT NULL,
  PRIMARY KEY (`REC_ID`),
  KEY `CLIENT_REC_ID` (`CLIENT_REC_ID`),
  CONSTRAINT `TPL_CLIENT_KEY_PERSONNEL_fk` FOREIGN KEY (`CLIENT_REC_ID`) REFERENCES `tpl_client` (`REC_ID`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='InnoDB free: 184320 kB; (`CLIENT_REC_ID`) REFER `tpl/tpl_cli';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tpl_client_status`
--

DROP TABLE IF EXISTS `tpl_client_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_client_status` (
  `REC_ID` int(11) NOT NULL,
  `CLIENT_STATUS` char(1) NOT NULL,
  `CLIENT_STATUS_DESC` varchar(45) NOT NULL,
  PRIMARY KEY (`REC_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tpl_directory`
--

DROP TABLE IF EXISTS `tpl_directory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_directory` (
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `REC_DATETIME` datetime NOT NULL,
  `REC_TIMESTAMP` datetime NOT NULL,
  `NAME` varchar(255) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `IS_PRODUCT_BASED` tinyint(1) DEFAULT NULL,
  `DIRECTORY_DESC` varchar(2048) CHARACTER SET utf8 DEFAULT NULL,
  `IS_DEFAULT` tinyint(1) DEFAULT '0',
  `TENANT_ID` int(11) NOT NULL,
  PRIMARY KEY (`REC_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COMMENT='InnoDB free: 184320 kB; InnoDB free: 12288 kB; InnoDB free: ';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tpl_directory_period`
--

DROP TABLE IF EXISTS `tpl_directory_period`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_directory_period` (
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `REC_DATETIME` datetime NOT NULL,
  `REC_TIMESTAMP` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `DIRECTORY_REC_ID` int(11) NOT NULL,
  `DIRECTORY_YEAR` year(4) NOT NULL,
  `DIRECTORY_PERIOD_CODE` varchar(25) DEFAULT NULL,
  `DIRECTORY_PERIOD_NAME` varchar(100) NOT NULL,
  `DIRECTORY_PERIOD` varchar(10) DEFAULT NULL,
  `DIRECTORY_PERIOD_TYPE` varchar(10) DEFAULT NULL,
  `DIRECTORY_PERIOD_START` date DEFAULT NULL,
  `DIRECTORY_PERIOD_END` date DEFAULT NULL,
  `IS_DEFAULT` tinyint(4) DEFAULT '0',
  `IS_MULTI_PAYMENT` varchar(4) DEFAULT '0',
  PRIMARY KEY (`REC_ID`),
  KEY `fk_tpl_directory` (`DIRECTORY_REC_ID`),
  CONSTRAINT `fk_tpl_directory` FOREIGN KEY (`DIRECTORY_REC_ID`) REFERENCES `tpl_directory` (`REC_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tpl_directory_period_additional_offering_discount`
--

DROP TABLE IF EXISTS `tpl_directory_period_additional_offering_discount`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_directory_period_additional_offering_discount` (
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `REC_DATETIME` datetime NOT NULL,
  `REC_TIMESTAMP` datetime NOT NULL,
  `DIRECTORY_ADDITIONAL_OFFERING_REC_ID` int(11) NOT NULL,
  `VOLUME` int(11) NOT NULL,
  `DISCOUNT_PER_UNIT` double(15,3) NOT NULL,
  PRIMARY KEY (`REC_ID`),
  KEY `DIRECTORY_ADDITIONAL_OFFERING_REC_ID` (`DIRECTORY_ADDITIONAL_OFFERING_REC_ID`),
  CONSTRAINT `tpl_directory_additional_offering_discount_fk` FOREIGN KEY (`DIRECTORY_ADDITIONAL_OFFERING_REC_ID`) REFERENCES `tpl_directory_period_additional_offering` (`REC_ID`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tpl_directory_period_offering`
--

DROP TABLE IF EXISTS `tpl_directory_period_offering`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_directory_period_offering` (
  `TENANT_REC_ID` int(11) NOT NULL,
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `REC_DATETIME` datetime NOT NULL,
  `REC_TIMESTAMP` datetime NOT NULL,
  `DIRECTORY_PERIOD_REC_ID` int(11) NOT NULL,
  `NAME` varchar(255) NOT NULL DEFAULT '',
  `DESCRIPTION` text,
  `COST_EXCL_GST` double(15,3) unsigned zerofill NOT NULL,
  `PERIOD_TYPE_COST_EXCL_GST` double(15,3) unsigned zerofill NOT NULL,
  `TAX_RATE` double(15,3) unsigned zerofill NOT NULL,
  `MAX_BRANCH_COUNT` int(11) NOT NULL,
  `MAX_KEY_PERSONNEL_COUNT` int(11) NOT NULL,
  `MAX_BRAND_COUNT` int(11) NOT NULL,
  `MAX_PRODUCT_CATEGORY_COUNT` int(11) NOT NULL,
  `IS_DEFAULT` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`REC_ID`),
  KEY `fk_dir_per` (`DIRECTORY_PERIOD_REC_ID`),
  CONSTRAINT `fk_dir_per` FOREIGN KEY (`DIRECTORY_PERIOD_REC_ID`) REFERENCES `tpl_directory_period` (`REC_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tpl_directory_period_order_items`
--

DROP TABLE IF EXISTS `tpl_directory_period_order_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_directory_period_order_items` (
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `REC_DATETIME` datetime DEFAULT NULL,
  `REC_TIMESTAMP` datetime DEFAULT NULL,
  `DIRECTORY_PERIOD_ORDER_REC_ID` int(11) NOT NULL,
  `SHADOW_DIR_PER_OFF_REC_ID` int(11) NOT NULL,
  `SHADOW_DIR_PER_ADD_OFF_REC_ID` int(11) NOT NULL DEFAULT '0',
  `EXCL_TAX_TOTAL` float DEFAULT NULL,
  `TAX_RATE` float DEFAULT NULL,
  `LINE_TOTAL` float DEFAULT NULL,
  `PAYMENT_TERMS` varchar(45) DEFAULT 'one-off',
  `PACKAGE` varchar(45) DEFAULT NULL,
  `STATUS` int(11) DEFAULT NULL,
  PRIMARY KEY (`REC_ID`),
  KEY `fssad` (`SHADOW_DIR_PER_ADD_OFF_REC_ID`),
  KEY `fk_tpl_qq` (`SHADOW_DIR_PER_OFF_REC_ID`),
  KEY `fk_tpl_order_items_1_idx` (`DIRECTORY_PERIOD_ORDER_REC_ID`),
  KEY `fk_tpl_directory_period_order_items_1_idx` (`DIRECTORY_PERIOD_ORDER_REC_ID`),
  CONSTRAINT `fk_dir_per_orders` FOREIGN KEY (`DIRECTORY_PERIOD_ORDER_REC_ID`) REFERENCES `tpl_directory_period_orders` (`REC_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_shadow_dir_per_add_offer` FOREIGN KEY (`SHADOW_DIR_PER_ADD_OFF_REC_ID`) REFERENCES `tpl_shadow_directory_period_additional_offering` (`REC_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_shadow_dir_per_offer` FOREIGN KEY (`SHADOW_DIR_PER_OFF_REC_ID`) REFERENCES `tpl_shadow_directory_period_offering` (`REC_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=71 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tpl_directory_period_orders`
--

DROP TABLE IF EXISTS `tpl_directory_period_orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_directory_period_orders` (
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `REC_DATETIME` datetime DEFAULT NULL,
  `REC_TIMESTAMP` datetime DEFAULT NULL,
  `ORDER_ID` int(11) NOT NULL,
  `DIRE_PERIOD_ID` int(11) DEFAULT NULL,
  `NEXT_INVOICE_DATE` datetime DEFAULT NULL,
  `LAST_INVOICE_DATE` datetime DEFAULT NULL,
  `STATUS` int(11) DEFAULT NULL,
  `PAYMENT_TERMS` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`REC_ID`),
  KEY `fk_orders_11idx` (`ORDER_ID`),
  CONSTRAINT `fk_tpl_orders` FOREIGN KEY (`ORDER_ID`) REFERENCES `tpl_orders` (`REC_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tpl_domains`
--

DROP TABLE IF EXISTS `tpl_domains`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_domains` (
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `DOMAIN_NAME` varchar(100) NOT NULL,
  `JSON_DATA` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`REC_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tpl_invoice_items`
--

DROP TABLE IF EXISTS `tpl_invoice_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_invoice_items` (
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `REC_DATETIME` datetime DEFAULT NULL,
  `REC_TIMESTAMP` datetime DEFAULT NULL,
  `INVOICE_ID` int(11) NOT NULL,
  `DIRECTORY_PERIOD_ORDER_ITEMS_ID` int(11) NOT NULL,
  `SUB_TOTAL` float DEFAULT NULL,
  PRIMARY KEY (`REC_ID`),
  KEY `fk_tpl_invoice_idx` (`INVOICE_ID`),
  KEY `fk_tpl_dir_per_order_items_idx` (`DIRECTORY_PERIOD_ORDER_ITEMS_ID`),
  CONSTRAINT `fk_tpl_dir_per_order_items` FOREIGN KEY (`DIRECTORY_PERIOD_ORDER_ITEMS_ID`) REFERENCES `tpl_directory_period_order_items` (`REC_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_tpl_invoice` FOREIGN KEY (`INVOICE_ID`) REFERENCES `tpl_invoices` (`REC_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tpl_invoices`
--

DROP TABLE IF EXISTS `tpl_invoices`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_invoices` (
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `REC_TIMESTAMP` datetime DEFAULT NULL,
  `REC_DATETIME` datetime DEFAULT NULL,
  `PAYMENT_METHOD_REC_ID` int(11) NOT NULL,
  `PAYMENT_STATUS_ID` int(11) NOT NULL,
  `ORDER_ID` int(11) NOT NULL,
  `INVOICE_NUMBER` varchar(45) DEFAULT NULL,
  `INVOICE_SEQ` int(4) DEFAULT NULL,
  `AMOUNT` float DEFAULT NULL,
  `TAX_RATE` float DEFAULT NULL,
  `DUE_DATE` datetime DEFAULT NULL,
  `DESCRIPTION` varchar(100) DEFAULT NULL,
  `NOTES` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`REC_ID`),
  KEY `fk_tpl_invoices_1_idx` (`ORDER_ID`),
  KEY `fk_tpl_invoices_1_idx1` (`PAYMENT_STATUS_ID`),
  KEY `fk_tpl_invoices_1_idx2` (`PAYMENT_METHOD_REC_ID`),
  CONSTRAINT `fk_order` FOREIGN KEY (`ORDER_ID`) REFERENCES `tpl_orders` (`REC_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_payment_method` FOREIGN KEY (`PAYMENT_METHOD_REC_ID`) REFERENCES `tpl_payment_method` (`REC_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_payment_status` FOREIGN KEY (`PAYMENT_STATUS_ID`) REFERENCES `tpl_payment_status` (`REC_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tpl_media_types`
--

DROP TABLE IF EXISTS `tpl_media_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_media_types` (
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `REC_DATETIME` datetime NOT NULL,
  `MEDIA_TYPE` varchar(10) NOT NULL,
  `MEDIA_CATEGORY` varchar(10) NOT NULL,
  `MEDIA_DESC` varchar(45) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`REC_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tpl_orders`
--

DROP TABLE IF EXISTS `tpl_orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_orders` (
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `REC_DATETIME` datetime DEFAULT NULL,
  `REC_TIMESTAMP` datetime DEFAULT NULL,
  `CLIENT_REC_ID` int(11) NOT NULL,
  `ORDER_NUMBER` varchar(45) DEFAULT NULL,
  `EXCL_GST_TOTAL` float DEFAULT NULL,
  `GST_RATE` float DEFAULT NULL,
  `ORDER_AMOUNT` float DEFAULT NULL,
  `CURRENCY_CODE` varchar(10) DEFAULT NULL,
  `STATUS` int(11) DEFAULT '0',
  PRIMARY KEY (`REC_ID`),
  KEY `fk_tpl_ww` (`CLIENT_REC_ID`),
  CONSTRAINT `fk_clients` FOREIGN KEY (`CLIENT_REC_ID`) REFERENCES `tpl_client` (`REC_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tpl_payment_method`
--

DROP TABLE IF EXISTS `tpl_payment_method`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_payment_method` (
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `REC_TIMESTAMP` datetime DEFAULT NULL,
  `REC_DATETIME` datetime DEFAULT NULL,
  `NAME` varchar(45) DEFAULT NULL,
  `DESCRIPTION` varchar(200) DEFAULT NULL,
  `STATUS` tinytext,
  PRIMARY KEY (`REC_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tpl_payment_status`
--

DROP TABLE IF EXISTS `tpl_payment_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_payment_status` (
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `REC_TIMESTAMP` datetime DEFAULT NULL,
  `REC_DATETIME` datetime DEFAULT NULL,
  `NAME` varchar(45) DEFAULT NULL,
  `STATUS` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`REC_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tpl_popular_tags`
--

DROP TABLE IF EXISTS `tpl_popular_tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_popular_tags` (
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `REC_DATETIME` datetime DEFAULT NULL,
  `REC_TIMESTAMP` datetime DEFAULT NULL,
  `SEARCH_TEXT` varchar(255) DEFAULT NULL,
  `COUNT` int(11) unsigned DEFAULT NULL,
  PRIMARY KEY (`REC_ID`),
  UNIQUE KEY `SEARCH_TEXT` (`SEARCH_TEXT`),
  UNIQUE KEY `SEARCH_TEXT_2` (`SEARCH_TEXT`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='InnoDB free: 184320 kB; InnoDB free: 12288 kB; InnoDB free: ';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tpl_product_category_brand`
--

DROP TABLE IF EXISTS `tpl_product_category_brand`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_product_category_brand` (
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `REC_DATETIME` datetime NOT NULL,
  `REC_TIMESTAMP` datetime NOT NULL,
  `PRODUCT_CATEGORY_REC_ID` int(11) NOT NULL,
  `BRAND_REC_ID` int(11) NOT NULL,
  PRIMARY KEY (`REC_ID`),
  KEY `BRAND_REC_ID` (`BRAND_REC_ID`),
  KEY `TPL_PRODUCT_CATEGORY_BRAND_fk1` (`PRODUCT_CATEGORY_REC_ID`),
  CONSTRAINT `TPL_PRODUCT_CATEGORY_BRAND_fk` FOREIGN KEY (`BRAND_REC_ID`) REFERENCES `tpl_brand` (`REC_ID`) ON UPDATE CASCADE,
  CONSTRAINT `TPL_PRODUCT_CATEGORY_BRAND_fk1` FOREIGN KEY (`PRODUCT_CATEGORY_REC_ID`) REFERENCES `tpl_category` (`REC_ID`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tpl_search_logs`
--

DROP TABLE IF EXISTS `tpl_search_logs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_search_logs` (
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `REC_DATETIME` datetime DEFAULT NULL,
  `REC_TIMESTAMP` datetime DEFAULT NULL,
  `SEARCH_TEXT` varchar(255) NOT NULL DEFAULT '',
  `SESSION_ID` varchar(50) DEFAULT NULL,
  `NUM_MATCHES` int(11) unsigned DEFAULT '0',
  PRIMARY KEY (`REC_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='InnoDB free: 184320 kB; InnoDB free: 12288 kB; InnoDB free: ';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tpl_search_params`
--

DROP TABLE IF EXISTS `tpl_search_params`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_search_params` (
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `REC_DATETIME` datetime NOT NULL,
  `REC_TIMESTAMP` datetime NOT NULL,
  `TABLE_NAME` varchar(50) NOT NULL DEFAULT '',
  `FIELD` varchar(50) NOT NULL DEFAULT '',
  `WEIGHT` int(11) NOT NULL,
  `SEQUENCE` int(11) NOT NULL,
  PRIMARY KEY (`REC_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='InnoDB free: 184320 kB; InnoDB free: 12288 kB; InnoDB free: ';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tpl_search_results`
--

DROP TABLE IF EXISTS `tpl_search_results`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_search_results` (
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `REC_DATETIME` datetime DEFAULT NULL,
  `REC_TIMESTAMP` datetime DEFAULT NULL,
  `SESSION_ID` varchar(50) DEFAULT NULL,
  `SEARCH_LOG_REC_ID` int(11) NOT NULL DEFAULT '0',
  `TABLE_NAME` varchar(50) DEFAULT NULL,
  `TABLE_REC_ID` int(11) NOT NULL,
  `WEIGHT` double(15,3) DEFAULT NULL,
  PRIMARY KEY (`REC_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='InnoDB free: 184320 kB; InnoDB free: 12288 kB; InnoDB free: ';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tpl_search_temp_sessions`
--

DROP TABLE IF EXISTS `tpl_search_temp_sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_search_temp_sessions` (
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `SESSION_ID` varchar(50) DEFAULT NULL,
  `T` varchar(50) DEFAULT NULL COMMENT 'SEARCH TABLE',
  `C` varchar(50) DEFAULT NULL COMMENT 'SEARCH COLUMN',
  `R` int(10) unsigned DEFAULT NULL COMMENT 'SEARCH_TABLE_REC_ID',
  `W` int(11) DEFAULT NULL COMMENT 'SEARCH_COLUMN_WEIGHT',
  PRIMARY KEY (`REC_ID`),
  KEY `session_id` (`SESSION_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='InnoDB free: 184320 kB; InnoDB free: 12288 kB; InnoDB free: ';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tpl_shadow_additional_offering_transaction_detail`
--

DROP TABLE IF EXISTS `tpl_shadow_additional_offering_transaction_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_shadow_additional_offering_transaction_detail` (
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `REC_DATETIME` datetime NOT NULL,
  `REC_TIMESTAMP` datetime NOT NULL,
  `SHADOW_REC_ID` int(11) NOT NULL,
  `SHADOW_DIRECTORY_ADDITIONAL_OFFERING_REC_ID` int(11) NOT NULL,
  `QUANTITY` int(11) NOT NULL,
  `LINE_PRICE_EXCL_GST` double(15,3) NOT NULL,
  `LINE_PRICE_INCL_GST` double(15,3) NOT NULL,
  `LINE_DISCOUNT_EXCL_GST` double(15,3) NOT NULL,
  `LINE_DISCOUNT_INCL_GST` double(15,3) NOT NULL,
  PRIMARY KEY (`REC_ID`),
  KEY `SHADOW_REC_ID` (`SHADOW_REC_ID`),
  CONSTRAINT `tpl_shadow_additional_offering_transaction_detail_fk` FOREIGN KEY (`SHADOW_REC_ID`) REFERENCES `tpl_shadow_root` (`REC_ID`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tpl_shadow_directory_period_additional_offering`
--

DROP TABLE IF EXISTS `tpl_shadow_directory_period_additional_offering`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_shadow_directory_period_additional_offering` (
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `SHADOW_ROOT_REC_ID` int(11) NOT NULL,
  `REC_DATETIME` datetime NOT NULL,
  `REC_TIMESTAMP` datetime NOT NULL,
  `REC_ACTION` varchar(8) DEFAULT NULL,
  `CODE` varchar(24) NOT NULL DEFAULT '',
  `NAME` varchar(255) NOT NULL DEFAULT '',
  `DESCRIPTION` text,
  `COST_EXCL_GST` double(15,3) unsigned zerofill NOT NULL,
  `GST_RATE` double(15,3) unsigned zerofill NOT NULL,
  PRIMARY KEY (`REC_ID`),
  KEY `SHADOW_REC_ID` (`SHADOW_ROOT_REC_ID`),
  KEY `SHADOW_IDX` (`SHADOW_ROOT_REC_ID`),
  CONSTRAINT `tpl_shadow_directory_additional_offering_fk` FOREIGN KEY (`SHADOW_ROOT_REC_ID`) REFERENCES `tpl_shadow_root` (`REC_ID`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=74 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tpl_shadow_directory_period_additional_offering_discount`
--

DROP TABLE IF EXISTS `tpl_shadow_directory_period_additional_offering_discount`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_shadow_directory_period_additional_offering_discount` (
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `REC_DATETIME` datetime NOT NULL,
  `REC_TIMESTAMP` datetime NOT NULL,
  `REC_ACTION` varchar(8) DEFAULT NULL,
  `SHADOW_DIRECTORY_ADDITIONAL_OFFERING_REC_ID` int(11) NOT NULL,
  `VOLUME` int(11) NOT NULL,
  `DISCOUNT_PER_UNIT` double(15,3) NOT NULL,
  PRIMARY KEY (`REC_ID`),
  KEY `SHADOW_DIRECTORY_ADDITIONAL_OFFERING_REC_ID` (`SHADOW_DIRECTORY_ADDITIONAL_OFFERING_REC_ID`),
  CONSTRAINT `tpl_shadow_directory_additional_offering_discount_fk` FOREIGN KEY (`SHADOW_DIRECTORY_ADDITIONAL_OFFERING_REC_ID`) REFERENCES `tpl_shadow_directory_period_additional_offering` (`REC_ID`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tpl_shadow_directory_period_offering`
--

DROP TABLE IF EXISTS `tpl_shadow_directory_period_offering`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_shadow_directory_period_offering` (
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `SHADOW_ROOT_REC_ID` int(11) NOT NULL DEFAULT '1',
  `REC_DATETIME` datetime NOT NULL,
  `REC_TIMESTAMP` datetime NOT NULL,
  `REC_ACTION` varchar(8) DEFAULT NULL,
  `NAME` varchar(255) NOT NULL DEFAULT '',
  `DESCRIPTION` text,
  `COST_EXCL_GST` double(15,3) unsigned zerofill NOT NULL,
  `GST_RATE` double(15,3) unsigned zerofill NOT NULL,
  `MAX_BRANCH_COUNT` int(11) NOT NULL,
  `MAX_KEY_PERSONNEL_COUNT` int(11) NOT NULL,
  `MAX_BRAND_COUNT` int(11) NOT NULL,
  `MAX_PRODUCT_CATEGORY_COUNT` int(11) NOT NULL,
  `DIR_PER_OFFER_REC_ID` int(11) DEFAULT NULL,
  PRIMARY KEY (`REC_ID`),
  KEY `fk_tpl_shadow_directory_period_offering_1` (`SHADOW_ROOT_REC_ID`),
  CONSTRAINT `fk_tpl_shadow_directory_period_offering_1` FOREIGN KEY (`SHADOW_ROOT_REC_ID`) REFERENCES `tpl_shadow_root` (`REC_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=82 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tpl_shadow_payment_history`
--

DROP TABLE IF EXISTS `tpl_shadow_payment_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_shadow_payment_history` (
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `REC_DATETIME` datetime NOT NULL,
  `REC_TIMESTAMP` datetime NOT NULL,
  `SHADOW_REC_ID` int(10) NOT NULL,
  `PAYMENT_TYPE` varchar(24) NOT NULL DEFAULT '',
  `AMOUNT_PAID` double(15,3) NOT NULL,
  PRIMARY KEY (`REC_ID`),
  KEY `SHADOW_REC_ID` (`SHADOW_REC_ID`,`REC_DATETIME`),
  CONSTRAINT `tpl_shadow_payment_history_fk` FOREIGN KEY (`SHADOW_REC_ID`) REFERENCES `tpl_shadow_root` (`REC_ID`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='InnoDB free: 13312 kB; (`SHADOW_REC_ID`) REFER `tpl_design/t';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tpl_shadow_root`
--

DROP TABLE IF EXISTS `tpl_shadow_root`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_shadow_root` (
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `REC_DATETIME` datetime NOT NULL,
  `REC_TIMESTAMP` datetime NOT NULL,
  `DIRECTORY_PERIOD_REC_ID` int(11) NOT NULL,
  `CLIENT_REC_ID` int(11) NOT NULL,
  `STATE` varchar(12) NOT NULL DEFAULT '',
  `PROOF_NAME` varchar(255) DEFAULT NULL,
  `PROOF_POSITION` varchar(255) DEFAULT NULL,
  `LISTING_COST_EXCL_GST` double(15,3) NOT NULL,
  `LISTING_COST_INCL_GST` double(15,3) NOT NULL,
  `TRANSACTION_TOTAL_EXCL_GST` double(15,3) NOT NULL,
  `TRANSACTION_TOTAL_INCL_GST` double(15,3) NOT NULL,
  `TOTAL_PAID_TO_DATE` double(15,3) NOT NULL,
  PRIMARY KEY (`REC_ID`),
  KEY `fk_client` (`CLIENT_REC_ID`),
  KEY `fk_directory_period` (`DIRECTORY_PERIOD_REC_ID`),
  CONSTRAINT `fk_client` FOREIGN KEY (`CLIENT_REC_ID`) REFERENCES `tpl_client` (`REC_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_directory_period` FOREIGN KEY (`DIRECTORY_PERIOD_REC_ID`) REFERENCES `tpl_directory_period` (`REC_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=90 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tpl_shadow_supplier`
--

DROP TABLE IF EXISTS `tpl_shadow_supplier`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_shadow_supplier` (
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `SHADOW_REC_ID` int(11) DEFAULT NULL,
  `MASTER_REC_ID` int(11) DEFAULT NULL,
  `REC_DATETIME` datetime NOT NULL,
  `REC_TIMESTAMP` datetime NOT NULL,
  `REC_ACTION` varchar(8) DEFAULT NULL,
  `SUPPLIER_TYPE_REC_ID` int(11) NOT NULL DEFAULT '0',
  `NAME` varchar(255) NOT NULL DEFAULT '',
  `TRADING_AS_NAME` varchar(255) DEFAULT NULL,
  `CONTACT_NAME` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `CONTACT_POSITION` varchar(255) DEFAULT NULL,
  `TELEPHONE_NO` varchar(100) DEFAULT NULL,
  `FREE_TELEPHONE_NO` varchar(100) DEFAULT NULL,
  `FAX_NO` varchar(100) DEFAULT NULL,
  `FREE_FAX_NO` varchar(100) DEFAULT NULL,
  `EMAIL_ADDRESS` varchar(255) DEFAULT NULL,
  `WEBSITE_ADDRESS` varchar(255) DEFAULT NULL,
  `PHYSICAL_ADDRESS_BUILDING_ADDRESS` varchar(255) DEFAULT NULL,
  `PHYSICAL_ADDRESS_STREET_ADDRESS` varchar(255) DEFAULT NULL,
  `PHYSICAL_ADDRESS_SUBURB` varchar(255) DEFAULT NULL,
  `PHYSICAL_ADDRESS_CITY` varchar(255) DEFAULT NULL,
  `PHYSICAL_ADDRESS_STATE` varchar(255) DEFAULT NULL,
  `PHYSICAL_ADDRESS_COUNTRY` varchar(255) DEFAULT NULL,
  `PHYSICAL_ADDRESS_POST_CODE` varchar(12) DEFAULT NULL,
  `POSTAL_ADDRESS_BUILDING_ADDRESS` varchar(255) DEFAULT NULL,
  `POSTAL_ADDRESS_STREET_ADDRESS` varchar(255) DEFAULT NULL,
  `POSTAL_ADDRESS_SUBURB` varchar(255) DEFAULT NULL,
  `POSTAL_ADDRESS_CITY` varchar(255) DEFAULT NULL,
  `POSTAL_ADDRESS_STATE` varchar(255) DEFAULT NULL,
  `POSTAL_ADDRESS_COUNTRY` varchar(255) DEFAULT NULL,
  `POSTAL_ADDRESS_POST_CODE` varchar(12) DEFAULT NULL,
  `COMPANY_PROFILE_TEXT` text,
  `PRINT_LOGO_LOCATION` varchar(255) DEFAULT NULL,
  `WEB_LOGO_LOCATION` varchar(255) DEFAULT NULL,
  `PHYSICAL_ADDRESS_PXID` varchar(45) DEFAULT NULL,
  `PHYSICAL_ADDRESS_DPID` varchar(45) DEFAULT NULL,
  `PHYSICAL_ADDRESS_LATITUDE` float(16,12) DEFAULT NULL,
  `PHYSICAL_ADDRESS_LONGITUDE` float(16,12) DEFAULT NULL,
  `PHYSICAL_ADDRESS_HEIGHT` int(11) DEFAULT NULL,
  `PHYSICAL_ADDRESS_COMPLETE` varchar(1024) DEFAULT NULL,
  `FACEBOOK_ADDRESS_URL` varchar(1024) DEFAULT NULL,
  `TWITTER_ADDRESS_URL` varchar(1024) DEFAULT NULL,
  `LINKEDIN_ADDRESS_URL` varchar(1024) DEFAULT NULL,
  `YOUTUBE_ADDRESS_URL` varchar(1024) DEFAULT NULL,
  `FOURSQUARE_ADDRESS_URL` varchar(1024) DEFAULT NULL,
  `COMPANY_STRAPLINE_TEXT` varchar(1024) DEFAULT NULL,
  `COMPANY_ABOUTUS_TEXT` varchar(1024) DEFAULT NULL,
  `CLIENT_REC_ID` int(11) NOT NULL,
  `IS_DEFAULT` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`REC_ID`),
  KEY `SHADOW_ID` (`SHADOW_REC_ID`,`MASTER_REC_ID`),
  KEY `fk_tpl_client` (`CLIENT_REC_ID`),
  CONSTRAINT `fk_tpl_client` FOREIGN KEY (`CLIENT_REC_ID`) REFERENCES `tpl_client` (`REC_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tpl_shadow_supplier_branch_key_personnel`
--

DROP TABLE IF EXISTS `tpl_shadow_supplier_branch_key_personnel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_shadow_supplier_branch_key_personnel` (
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `REC_DATETIME` datetime NOT NULL,
  `REC_TIMESTAMP` datetime NOT NULL,
  `REC_ACTION` varchar(8) DEFAULT NULL,
  `MASTER_REC_ID` int(11) DEFAULT NULL,
  `SHADOW_SUPPLIER_BRANCH_REC_ID` int(11) NOT NULL,
  `SUPPLIER_KEY_PERSONNEL_REC_ID` int(11) NOT NULL,
  `ORDER` int(11) DEFAULT NULL,
  PRIMARY KEY (`REC_ID`),
  KEY `fk_tpl_supplier_branch` (`SHADOW_SUPPLIER_BRANCH_REC_ID`),
  KEY `fk_supplier_keypersonnel` (`SUPPLIER_KEY_PERSONNEL_REC_ID`),
  CONSTRAINT `fk_supplier_keypersonnel` FOREIGN KEY (`SUPPLIER_KEY_PERSONNEL_REC_ID`) REFERENCES `tpl_supplier_key_personnel` (`REC_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_tpl_supplier_branch` FOREIGN KEY (`SHADOW_SUPPLIER_BRANCH_REC_ID`) REFERENCES `tpl_supplier_branch` (`REC_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='InnoDB free: 184320 kB;; InnoDB free: 13312 kB; (`SHADOW_REC';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tpl_shadow_supplier_brand`
--

DROP TABLE IF EXISTS `tpl_shadow_supplier_brand`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_shadow_supplier_brand` (
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `REC_DATETIME` datetime NOT NULL,
  `REC_TIMESTAMP` datetime NOT NULL,
  `REC_ACTION` varchar(8) DEFAULT NULL,
  `MASTER_REC_ID` int(11) DEFAULT NULL,
  `SUPPLIER_REC_ID` int(11) NOT NULL,
  `SHADOW_ROOT_REC_ID` int(11) NOT NULL,
  `BRAND_REC_ID` int(11) NOT NULL,
  `IS_LOGO_LISTING` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`REC_ID`),
  KEY `fk_tpl_shadow_supplier_brand_1` (`SUPPLIER_REC_ID`),
  KEY `fk_tpl_shadow_supplier_brand_2` (`BRAND_REC_ID`),
  CONSTRAINT `fk_tpl_shadow_supplier_brand_1` FOREIGN KEY (`SUPPLIER_REC_ID`) REFERENCES `tpl_shadow_supplier` (`REC_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_tpl_shadow_supplier_brand_2` FOREIGN KEY (`BRAND_REC_ID`) REFERENCES `tpl_brand` (`REC_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tpl_shadow_supplier_brand_media`
--

DROP TABLE IF EXISTS `tpl_shadow_supplier_brand_media`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_shadow_supplier_brand_media` (
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `REC_DATETIME` datetime DEFAULT NULL,
  `REC_TIMESTAMP` datetime NOT NULL,
  `REC_ACTION` varchar(8) DEFAULT NULL,
  `MASTER_REC_ID` int(11) DEFAULT NULL,
  `SHADOW_SUPPLIER_BRAND_ID` int(11) DEFAULT NULL,
  `SUPPLIER_MEDIA_ID` int(11) DEFAULT NULL,
  PRIMARY KEY (`REC_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tpl_shadow_supplier_category`
--

DROP TABLE IF EXISTS `tpl_shadow_supplier_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_shadow_supplier_category` (
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `REC_DATETIME` datetime NOT NULL,
  `REC_TIMESTAMP` datetime NOT NULL,
  `REC_ACTION` varchar(8) DEFAULT NULL,
  `MASTER_REC_ID` int(11) DEFAULT NULL,
  `SHADOW_ROOT_REC_ID` int(11) NOT NULL,
  `SHADOW_SUPPLIER_REC_ID` int(11) NOT NULL,
  `CATEGORY_REC_ID` int(11) NOT NULL,
  `IS_LOGO_LISTING` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`REC_ID`),
  KEY `fk_tpl_shadow_supplier_product_category_1` (`SHADOW_SUPPLIER_REC_ID`),
  KEY `fk_category` (`CATEGORY_REC_ID`),
  KEY `fk__idx` (`SHADOW_SUPPLIER_REC_ID`),
  KEY `fk_shadowsupplier_idx` (`SHADOW_SUPPLIER_REC_ID`),
  CONSTRAINT `fk_category` FOREIGN KEY (`CATEGORY_REC_ID`) REFERENCES `tpl_category` (`REC_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_shadowsupplier` FOREIGN KEY (`SHADOW_SUPPLIER_REC_ID`) REFERENCES `tpl_shadow_supplier` (`REC_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tpl_shadow_supplier_category_brand`
--

DROP TABLE IF EXISTS `tpl_shadow_supplier_category_brand`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_shadow_supplier_category_brand` (
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `REC_DATETIME` datetime DEFAULT NULL,
  `REC_TIMESTAMP` datetime NOT NULL,
  `REC_ACTION` varchar(8) DEFAULT NULL,
  `MASTER_REC_ID` int(11) DEFAULT NULL,
  `SUPPLIER_CATEGORY_ID` int(11) DEFAULT NULL,
  `SHADOW_SUPPLIER_BRAND_ID` int(11) DEFAULT NULL,
  PRIMARY KEY (`REC_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tpl_shadow_supplier_category_brand_media`
--

DROP TABLE IF EXISTS `tpl_shadow_supplier_category_brand_media`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_shadow_supplier_category_brand_media` (
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `REC_DATETIME` datetime DEFAULT NULL,
  `REC_TIMESTAMP` datetime NOT NULL,
  `REC_ACTION` varchar(8) DEFAULT NULL,
  `MASTER_REC_ID` int(11) DEFAULT NULL,
  `SHADOW_SUPPLIER_CATEGORY_BRAND_ID` int(11) DEFAULT NULL,
  `SUPPLIER_MEDIA_ID` int(11) DEFAULT NULL,
  PRIMARY KEY (`REC_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tpl_shadow_supplier_category_product`
--

DROP TABLE IF EXISTS `tpl_shadow_supplier_category_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_shadow_supplier_category_product` (
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `REC_DATETIME` datetime NOT NULL,
  `REC_TIMESTAMP` datetime NOT NULL,
  `REC_ACTION` varchar(8) DEFAULT NULL,
  `MASTER_REC_ID` int(11) DEFAULT NULL,
  `CATEGORY_REC_ID` int(11) NOT NULL,
  `SHADOW_SUPPLIER_REC_ID` int(11) NOT NULL,
  `DIRECTORY_REC_ID` int(11) NOT NULL,
  `BRAND_REC_ID` int(11) NOT NULL DEFAULT '0',
  `PRODUCT_TITLE` varchar(255) NOT NULL DEFAULT '',
  `PRODUCT_DESCRIPTION` varchar(255) DEFAULT NULL,
  `PRODUCT_VALUE_PRICE` float(9,2) DEFAULT '0.00',
  `PRODUCT_OFFER_PRICE` float(9,2) DEFAULT '0.00',
  `PRODUCT_CHECKOUT_URL` varchar(255) DEFAULT NULL,
  `IS_LOGO_LISTING` tinyint(1) DEFAULT NULL,
  `TEXT` text,
  `PRINT_IMAGE_LOCATION` varchar(255) DEFAULT NULL,
  `WEB_IMAGE_LOCATION` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`REC_ID`),
  KEY `fk_tpl_shadow_product_1_idx` (`DIRECTORY_REC_ID`),
  KEY `fk_brand_idx` (`BRAND_REC_ID`),
  KEY `fk_shadow_supplier1` (`SHADOW_SUPPLIER_REC_ID`),
  CONSTRAINT `fk_directory` FOREIGN KEY (`DIRECTORY_REC_ID`) REFERENCES `tpl_directory` (`REC_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_shadow_supplier1` FOREIGN KEY (`SHADOW_SUPPLIER_REC_ID`) REFERENCES `tpl_shadow_supplier` (`REC_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tpl_shadow_supplier_categoryproduct_media`
--

DROP TABLE IF EXISTS `tpl_shadow_supplier_categoryproduct_media`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_shadow_supplier_categoryproduct_media` (
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `REC_DATETIME` datetime DEFAULT NULL,
  `REC_TIMESTAMP` datetime NOT NULL,
  `REC_ACTION` varchar(8) DEFAULT NULL,
  `MASTER_REC_ID` int(11) DEFAULT NULL,
  `SHADOW_SUPPLIER_CATEGORYPRODUCT_ID` int(11) DEFAULT NULL,
  `SUPPLIER_MEDIA_REC_ID` int(11) DEFAULT NULL,
  `IS_MANDOTORY` tinyint(1) DEFAULT NULL,
  `SHADOW_SUPPLIER_ID` int(11) DEFAULT NULL,
  PRIMARY KEY (`REC_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tpl_shadow_supplier_directory`
--

DROP TABLE IF EXISTS `tpl_shadow_supplier_directory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_shadow_supplier_directory` (
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `REC_DATETIME` datetime NOT NULL,
  `REC_TIMESTAMP` datetime NOT NULL,
  `SHADOW_SUPPLIER_REC_ID` int(11) NOT NULL,
  `DIRECTORY_REC_ID` int(11) NOT NULL,
  `DIRECTORY_PERIOD_REC_ID` varchar(4) CHARACTER SET utf8 DEFAULT NULL,
  `SHADOW_ROOT_REC_ID` int(11) DEFAULT NULL,
  PRIMARY KEY (`REC_ID`),
  KEY `SHADOW_SUPPLIER_REC_ID` (`SHADOW_SUPPLIER_REC_ID`),
  KEY `DIRECTORY_REC_ID` (`DIRECTORY_REC_ID`),
  CONSTRAINT `TPL_SHADOW_SUPPLIER_DIRECTORY_fk` FOREIGN KEY (`SHADOW_SUPPLIER_REC_ID`) REFERENCES `tpl_shadow_supplier` (`REC_ID`) ON UPDATE CASCADE,
  CONSTRAINT `TPL_SHADOW_SUPPLIER_DIRECTORY_fk1` FOREIGN KEY (`DIRECTORY_REC_ID`) REFERENCES `tpl_directory` (`REC_ID`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Table structure for table `tpl_shadow_supplier_distributor`
--

DROP TABLE IF EXISTS `tpl_shadow_supplier_distributor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_shadow_supplier_distributor` (
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `REC_DATETIME` datetime NOT NULL,
  `REC_TIMESTAMP` datetime NOT NULL,
  `REC_ACTION` varchar(8) DEFAULT NULL,
  `MASTER_REC_ID` int(11) DEFAULT NULL,
  `SHADOW_ROOT_REC_ID` int(11) NOT NULL,
  `SHADOW_SUPPLIER_REC_ID` int(11) NOT NULL,
  `SUPPLIER_REC_ID` int(11) NOT NULL,
  `NAME` varchar(255) NOT NULL DEFAULT '',
  `ORDER` int(11) DEFAULT NULL,
  `TELEPHONE_NO` varchar(48) DEFAULT NULL,
  PRIMARY KEY (`REC_ID`),
  KEY `fk_tpl_shadow_supplier_distributor_1` (`SHADOW_SUPPLIER_REC_ID`),
  CONSTRAINT `fk_tpl_shadow_supplier_distributor_1` FOREIGN KEY (`SHADOW_SUPPLIER_REC_ID`) REFERENCES `tpl_shadow_supplier` (`REC_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tpl_shadow_supplier_key_personnel`
--

DROP TABLE IF EXISTS `tpl_shadow_supplier_key_personnel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_shadow_supplier_key_personnel` (
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `REC_DATETIME` datetime NOT NULL,
  `REC_TIMESTAMP` datetime NOT NULL,
  `REC_ACTION` varchar(8) DEFAULT NULL,
  `MASTER_REC_ID` int(11) DEFAULT NULL,
  `SHADOW_ROOT_REC_ID` int(11) DEFAULT NULL,
  `SHADOW_SUPPLIER_REC_ID` int(11) NOT NULL,
  `SUPPLIER_REC_ID` int(11) NOT NULL,
  `ORDER` int(11) DEFAULT NULL,
  `NAME` varchar(255) NOT NULL DEFAULT '',
  `POSITION` varchar(255) DEFAULT NULL,
  `TELEPHONE_NO` varchar(100) DEFAULT NULL,
  `FAX_NO` varchar(48) DEFAULT NULL,
  `EMAIL_ADDRESS` varchar(255) DEFAULT NULL,
  `PHYSICAL_ADDRESS_BUILDING_ADDRESS` varchar(255) DEFAULT NULL,
  `PHYSICAL_ADDRESS_STREET_ADDRESS` varchar(255) DEFAULT NULL,
  `PHYSICAL_ADDRESS_SUBURB` varchar(255) DEFAULT NULL,
  `PHYSICAL_ADDRESS_CITY` varchar(255) DEFAULT NULL,
  `PHYSICAL_ADDRESS_STATE` varchar(255) DEFAULT NULL,
  `PHYSICAL_ADDRESS_COUNTRY` varchar(255) DEFAULT NULL,
  `PHYSICAL_ADDRESS_POST_CODE` varchar(12) DEFAULT NULL,
  `POSTAL_ADDRESS_BUILDING_ADDRESS` varchar(255) DEFAULT NULL,
  `POSTAL_ADDRESS_STREET_ADDRESS` varchar(255) DEFAULT NULL,
  `POSTAL_ADDRESS_SUBURB` varchar(255) DEFAULT NULL,
  `POSTAL_ADDRESS_CITY` varchar(255) DEFAULT NULL,
  `POSTAL_ADDRESS_STATE` varchar(255) DEFAULT NULL,
  `POSTAL_ADDRESS_COUNTRY` varchar(255) DEFAULT NULL,
  `POSTAL_ADDRESS_POST_CODE` varchar(12) DEFAULT NULL,
  PRIMARY KEY (`REC_ID`),
  KEY `fk_tpl_shadow_supplier_key_personnel_1` (`SHADOW_SUPPLIER_REC_ID`),
  CONSTRAINT `fk_tpl_shadow_supplier_key_personnel_1` FOREIGN KEY (`SHADOW_SUPPLIER_REC_ID`) REFERENCES `tpl_shadow_supplier` (`REC_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tpl_shadow_supplier_key_personnel_brand`
--

DROP TABLE IF EXISTS `tpl_shadow_supplier_key_personnel_brand`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_shadow_supplier_key_personnel_brand` (
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `REC_DATETIME` datetime NOT NULL,
  `REC_TIMESTAMP` datetime NOT NULL,
  `REC_ACTION` varchar(8) DEFAULT NULL,
  `MASTER_REC_ID` int(11) DEFAULT NULL,
  `SHADOW_SUPPLIER_KEY_PERSONNEL_REC_ID` int(11) NOT NULL,
  `SUPPLIER_BRAND_REC_ID` int(11) NOT NULL,
  `ROLE` varchar(255) DEFAULT NULL,
  `ORDER` int(11) DEFAULT NULL,
  PRIMARY KEY (`REC_ID`),
  KEY `fk_tpl_shadow_supplier_key_personnel_brand_1` (`SHADOW_SUPPLIER_KEY_PERSONNEL_REC_ID`),
  KEY `fk_tpl_shadow_supplier_key_personnel_brand_2` (`SUPPLIER_BRAND_REC_ID`),
  CONSTRAINT `fk_tpl_shadow_supplier_key_personnel_brand_1` FOREIGN KEY (`SHADOW_SUPPLIER_KEY_PERSONNEL_REC_ID`) REFERENCES `tpl_shadow_supplier_key_personnel` (`REC_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_tpl_shadow_supplier_key_personnel_brand_2` FOREIGN KEY (`SUPPLIER_BRAND_REC_ID`) REFERENCES `tpl_supplier_brand` (`REC_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tpl_shadow_supplier_shadow_root`
--

DROP TABLE IF EXISTS `tpl_shadow_supplier_shadow_root`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_shadow_supplier_shadow_root` (
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `REC_DATETIME` datetime NOT NULL,
  `REC_TIMESTAMP` datetime NOT NULL,
  `SHADOW_SUPPLIER_REC_ID` int(11) NOT NULL,
  `SHADOW_ROOT_REC_ID` int(11) NOT NULL,
  PRIMARY KEY (`REC_ID`),
  KEY `fk_tpl_shadow_root` (`SHADOW_ROOT_REC_ID`),
  KEY `fk_tpl_shadow_supplier` (`SHADOW_SUPPLIER_REC_ID`),
  KEY `fk_shadow_supplier` (`SHADOW_SUPPLIER_REC_ID`),
  KEY `fk_tpl_shadow_supplier_shadow_root_1` (`SHADOW_ROOT_REC_ID`),
  CONSTRAINT `fk_shadow_supplier` FOREIGN KEY (`SHADOW_SUPPLIER_REC_ID`) REFERENCES `tpl_shadow_supplier` (`REC_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_tpl_shadow_supplier_shadow_root_1` FOREIGN KEY (`SHADOW_ROOT_REC_ID`) REFERENCES `tpl_shadow_root` (`REC_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=82 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tpl_supplier`
--

DROP TABLE IF EXISTS `tpl_supplier`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_supplier` (
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `REC_DATETIME` datetime NOT NULL,
  `REC_TIMESTAMP` datetime NOT NULL,
  `SUPPLIER_TYPE_REC_ID` int(11) NOT NULL,
  `CLIENT_REC_ID` int(11) NOT NULL,
  `NAME` varchar(255) NOT NULL DEFAULT '',
  `TRADING_AS_NAME` varchar(255) DEFAULT NULL,
  `CONTACT_NAME` varchar(255) DEFAULT NULL,
  `CONTACT_POSITION` varchar(255) DEFAULT NULL,
  `TELEPHONE_NO` varchar(48) DEFAULT NULL,
  `FREE_TELEPHONE_NO` varchar(48) DEFAULT NULL,
  `FAX_NO` varchar(48) DEFAULT NULL,
  `FREE_FAX_NO` varchar(48) DEFAULT NULL,
  `EMAIL_ADDRESS` varchar(255) DEFAULT NULL,
  `WEBSITE_ADDRESS` varchar(255) DEFAULT NULL,
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
  `COMPANY_STRAPLINE_TEXT` text,
  `COMPANY_PROFILE_TEXT` text,
  `COMPANY_ABOUTUS_TEXT` text,
  `PRINT_LOGO_LOCATION` varchar(255) DEFAULT NULL,
  `WEB_LOGO_LOCATION` varchar(255) DEFAULT NULL,
  `FACEBOOK_ADDRESS_URL` varchar(1024) DEFAULT NULL,
  `TWITTER_ADDRESS_URL` varchar(1024) DEFAULT NULL,
  `LINKEDIN_ADDRESS_URL` varchar(1024) DEFAULT NULL,
  `YOUTUBE_ADDRESS_URL` varchar(1024) DEFAULT NULL,
  `FOURSQUARE_ADDRESS_URL` varchar(1024) DEFAULT NULL,
  PRIMARY KEY (`REC_ID`),
  KEY `fk_tpl_supplier_type` (`SUPPLIER_TYPE_REC_ID`),
  KEY `fk_tpl_supplier_1` (`CLIENT_REC_ID`),
  CONSTRAINT `fk_tpl_supplier_1` FOREIGN KEY (`CLIENT_REC_ID`) REFERENCES `tpl_client` (`REC_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_tpl_supplier_type` FOREIGN KEY (`SUPPLIER_TYPE_REC_ID`) REFERENCES `tpl_supplier_type` (`REC_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tpl_supplier_accreditations`
--

DROP TABLE IF EXISTS `tpl_supplier_accreditations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_supplier_accreditations` (
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `REC_DATETIME` datetime NOT NULL,
  `REC_TIMESTAMP` datetime NOT NULL,
  `NAME` varchar(1000) NOT NULL,
  `TYPE` varchar(1000) NOT NULL,
  `DATE_ACHIEVED` datetime NOT NULL,
  `ISSUED_BY` varchar(255) NOT NULL,
  `YEAR_WON` tinyint(4) NOT NULL,
  `CERTIFICATE_NUMBER` varchar(255) DEFAULT NULL,
  `ACCRED_LOGO_URL` varchar(2560) DEFAULT NULL,
  `ACCRED_LOGO_LINK` varchar(2560) DEFAULT NULL,
  `SUPPLIER_REC_ID` int(11) NOT NULL,
  PRIMARY KEY (`REC_ID`),
  KEY `fk_tpl_supplier` (`SUPPLIER_REC_ID`),
  CONSTRAINT `fk_tpl_supplier` FOREIGN KEY (`SUPPLIER_REC_ID`) REFERENCES `tpl_shadow_supplier` (`REC_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tpl_supplier_awards`
--

DROP TABLE IF EXISTS `tpl_supplier_awards`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_supplier_awards` (
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `REC_DATETIME` datetime NOT NULL,
  `REC_TIMESTAMP` datetime NOT NULL,
  `NAME` varchar(1000) NOT NULL,
  `ISSUED_BY` varchar(255) NOT NULL,
  `YEAR_WON` smallint(6) NOT NULL,
  `AWARD_LOGO_URL` varchar(2560) DEFAULT NULL,
  `AWARD_LOGO_LINK` varchar(2560) DEFAULT NULL,
  `SUPPLIER_REC_ID` int(11) NOT NULL,
  PRIMARY KEY (`REC_ID`),
  KEY `fk_tpl_supplier_REC_ID` (`SUPPLIER_REC_ID`),
  CONSTRAINT `fk_tpl_supplier_REC_ID` FOREIGN KEY (`SUPPLIER_REC_ID`) REFERENCES `tpl_shadow_supplier` (`REC_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tpl_supplier_branch`
--

DROP TABLE IF EXISTS `tpl_supplier_branch`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_supplier_branch` (
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `REC_DATETIME` datetime NOT NULL,
  `REC_TIMESTAMP` datetime NOT NULL,
  `SUPPLIER_REC_ID` int(11) NOT NULL,
  `ORDER` int(11) DEFAULT '0',
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
  KEY `SUPPLIER_REC_ID` (`SUPPLIER_REC_ID`),
  CONSTRAINT `TPL_SUPPLIER_BRANCH_fk` FOREIGN KEY (`SUPPLIER_REC_ID`) REFERENCES `tpl_supplier` (`REC_ID`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tpl_supplier_branch_key_personnel`
--

DROP TABLE IF EXISTS `tpl_supplier_branch_key_personnel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_supplier_branch_key_personnel` (
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `REC_DATETIME` datetime NOT NULL,
  `REC_TIMESTAMP` datetime NOT NULL,
  `SUPPLIER_BRANCH_REC_ID` int(11) NOT NULL,
  `SUPPLIER_KEY_PERSONNEL_REC_ID` int(11) NOT NULL,
  `ORDER` int(11) DEFAULT NULL,
  PRIMARY KEY (`REC_ID`),
  KEY `SUPPLIER_BRANCH_REC_ID` (`SUPPLIER_BRANCH_REC_ID`),
  KEY `SUPPLIER_KEY_PERSONNEL_REC_ID` (`SUPPLIER_KEY_PERSONNEL_REC_ID`),
  CONSTRAINT `TPL_SUPPLIER_BRANCH_KEY_PERSONNEL_fk` FOREIGN KEY (`SUPPLIER_BRANCH_REC_ID`) REFERENCES `tpl_supplier_branch` (`REC_ID`) ON UPDATE CASCADE,
  CONSTRAINT `TPL_SUPPLIER_BRANCH_KEY_PERSONNEL_fk1` FOREIGN KEY (`SUPPLIER_KEY_PERSONNEL_REC_ID`) REFERENCES `tpl_supplier_key_personnel` (`REC_ID`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tpl_supplier_brand`
--

DROP TABLE IF EXISTS `tpl_supplier_brand`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_supplier_brand` (
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `REC_DATETIME` datetime NOT NULL,
  `REC_TIMESTAMP` datetime NOT NULL,
  `SUPPLIER_REC_ID` int(11) NOT NULL,
  `BRAND_REC_ID` int(11) NOT NULL,
  `IS_LOGO_LISTING` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`REC_ID`),
  KEY `SUPPLIER_REC_ID` (`SUPPLIER_REC_ID`),
  KEY `BRAND_REC_ID` (`BRAND_REC_ID`),
  KEY `fk_tpl_supplier_brand_1_idx` (`SUPPLIER_REC_ID`),
  CONSTRAINT `fk_tplsupplier` FOREIGN KEY (`SUPPLIER_REC_ID`) REFERENCES `tpl_supplier` (`REC_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_TPL_BRAND` FOREIGN KEY (`BRAND_REC_ID`) REFERENCES `tpl_brand` (`REC_ID`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tpl_supplier_brand_media`
--

DROP TABLE IF EXISTS `tpl_supplier_brand_media`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_supplier_brand_media` (
  `REC_ID` int(11) NOT NULL,
  `REC_DATETIME` datetime DEFAULT NULL,
  `SHADOW_SUPPLIER_BRAND_ID` int(11) DEFAULT NULL,
  `SUPPLIER_MEDIA_ID` int(11) DEFAULT NULL,
  PRIMARY KEY (`REC_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tpl_supplier_category`
--

DROP TABLE IF EXISTS `tpl_supplier_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_supplier_category` (
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `REC_DATETIME` datetime NOT NULL,
  `REC_TIMESTAMP` datetime NOT NULL,
  `SUPPLIER_REC_ID` int(11) NOT NULL,
  `CATEGORY_REC_ID` int(11) NOT NULL,
  `IS_LOGO_LISTING` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`REC_ID`),
  KEY `PRODUCT_CATEGORY_REC_ID` (`CATEGORY_REC_ID`),
  KEY `SUPPLIER_REC_ID` (`SUPPLIER_REC_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tpl_supplier_category_media`
--

DROP TABLE IF EXISTS `tpl_supplier_category_media`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_supplier_category_media` (
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `SUPPLIER_CATEGORY_REC_ID` int(11) DEFAULT NULL,
  `SUPPLIER_MEDIA_REC_ID` int(11) DEFAULT NULL,
  `REC_DATETIME` datetime DEFAULT NULL,
  PRIMARY KEY (`REC_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tpl_supplier_category_product`
--

DROP TABLE IF EXISTS `tpl_supplier_category_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_supplier_category_product` (
  `REC_ID` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `REC_DATETIME` datetime NOT NULL,
  `REC_TIMESTAMP` datetime NOT NULL,
  `CATEGORY_REC_ID` int(11) NOT NULL,
  `SUPPLIER_REC_ID` int(11) NOT NULL,
  `DIRECTORY_REC_ID` int(11) NOT NULL,
  `BRAND_REC_ID` int(11) NOT NULL,
  `PRODUCT_TITLE` varchar(255) NOT NULL DEFAULT '',
  `PRODUCT_DESCRIPTION` varchar(255) DEFAULT NULL,
  `PRODUCT_VALUE_PRICE` float(9,2) DEFAULT NULL,
  `PRODUCT_OFFER_PRICE` float(9,2) DEFAULT NULL,
  `PRODUCT_CHECKOUT_URL` varchar(255) DEFAULT NULL,
  `IS_LOGO_LISTING` tinyint(1) DEFAULT NULL,
  `TEXT` text,
  `PRINT_IMAGE_LOCATION` varchar(255) DEFAULT NULL,
  `WEB_IMAGE_LOCATION` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`REC_ID`),
  KEY `fk_supplier_idx` (`CATEGORY_REC_ID`),
  KEY `fk__idx` (`SUPPLIER_REC_ID`),
  KEY `fk_directory_idx` (`DIRECTORY_REC_ID`),
  CONSTRAINT `fk_directory_id` FOREIGN KEY (`DIRECTORY_REC_ID`) REFERENCES `tpl_directory` (`REC_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_product_category` FOREIGN KEY (`CATEGORY_REC_ID`) REFERENCES `tpl_category` (`REC_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_suppier` FOREIGN KEY (`SUPPLIER_REC_ID`) REFERENCES `tpl_supplier` (`REC_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tpl_supplier_categoryproduct_media`
--

DROP TABLE IF EXISTS `tpl_supplier_categoryproduct_media`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_supplier_categoryproduct_media` (
  `REC_ID` int(11) NOT NULL,
  `SUPPLIER_CATEGORYPRODUCT_ID` int(11) DEFAULT NULL,
  `SUPPLIER_MEDIA_REC_ID` int(11) DEFAULT NULL,
  `IS_MANDOTORY` tinyint(1) DEFAULT NULL,
  `REC_DATETIME` datetime DEFAULT NULL,
  PRIMARY KEY (`REC_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tpl_supplier_directory`
--

DROP TABLE IF EXISTS `tpl_supplier_directory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_supplier_directory` (
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `REC_DATETIME` datetime NOT NULL,
  `REC_TIMESTAMP` datetime NOT NULL,
  `SUPPLIER_REC_ID` int(11) NOT NULL,
  `DIRECTORY_REC_ID` int(11) NOT NULL,
  `DIRECTORY_YEAR` varchar(4) DEFAULT NULL,
  `SHADOW_ROOT_REC_ID` int(11) DEFAULT NULL,
  PRIMARY KEY (`REC_ID`),
  KEY `SUPPLIER_REC_ID` (`SUPPLIER_REC_ID`),
  KEY `DIRECTORY_REC_ID` (`DIRECTORY_REC_ID`),
  CONSTRAINT `tpl_supplier_directory_fk` FOREIGN KEY (`SUPPLIER_REC_ID`) REFERENCES `tpl_supplier` (`REC_ID`) ON UPDATE CASCADE,
  CONSTRAINT `tpl_supplier_directory_fk1` FOREIGN KEY (`DIRECTORY_REC_ID`) REFERENCES `tpl_directory` (`REC_ID`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tpl_supplier_distributor`
--

DROP TABLE IF EXISTS `tpl_supplier_distributor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_supplier_distributor` (
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `REC_DATETIME` datetime NOT NULL,
  `REC_TIMESTAMP` datetime NOT NULL,
  `SUPPLIER_REC_ID` int(11) NOT NULL,
  `NAME` varchar(255) NOT NULL DEFAULT '',
  `ORDER` int(11) unsigned DEFAULT NULL,
  `TELEPHONE_NO` varchar(48) DEFAULT NULL,
  PRIMARY KEY (`REC_ID`),
  KEY `SUPPLIER_REC_ID` (`SUPPLIER_REC_ID`),
  CONSTRAINT `tpl_supplier_distributor_fk` FOREIGN KEY (`SUPPLIER_REC_ID`) REFERENCES `tpl_supplier` (`REC_ID`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tpl_supplier_key_personnel`
--

DROP TABLE IF EXISTS `tpl_supplier_key_personnel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_supplier_key_personnel` (
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `REC_DATETIME` datetime NOT NULL,
  `REC_TIMESTAMP` datetime NOT NULL,
  `SUPPLIER_REC_ID` int(11) NOT NULL,
  `ORDER` int(11) DEFAULT NULL,
  `NAME` varchar(255) NOT NULL DEFAULT '',
  `POSITION` varchar(255) DEFAULT NULL,
  `TELEPHONE_NO` varchar(48) DEFAULT NULL,
  `FAX_NO` varchar(48) DEFAULT NULL,
  `EMAIL_ADDRESS` varchar(255) DEFAULT NULL,
  `PHYSICAL_ADDRESS_BUILDING_ADDRESS` varchar(255) DEFAULT NULL,
  `PHYSICAL_ADDRESS_STREET_ADDRESS` varchar(255) DEFAULT NULL,
  `PHYSICAL_ADDRESS_SUBURB` varchar(255) DEFAULT NULL,
  `PHYSICAL_ADDRESS_CITY` varchar(255) DEFAULT NULL,
  `PHYSICAL_ADDRESS_STATE` varchar(255) DEFAULT NULL,
  `PHYSICAL_ADDRESS_COUNTRY` varchar(255) DEFAULT NULL,
  `PHYSICAL_ADDRESS_POST_CODE` varchar(12) DEFAULT NULL,
  `POSTAL_ADDRESS_BUILDING_ADDRESS` varchar(255) DEFAULT NULL,
  `POSTAL_ADDRESS_STREET_ADDRESS` varchar(255) DEFAULT NULL,
  `POSTAL_ADDRESS_SUBURB` varchar(255) DEFAULT NULL,
  `POSTAL_ADDRESS_CITY` varchar(255) DEFAULT NULL,
  `POSTAL_ADDRESS_STATE` varchar(255) DEFAULT NULL,
  `POSTAL_ADDRESS_COUNTRY` varchar(255) DEFAULT NULL,
  `POSTAL_ADDRESS_POST_CODE` varchar(12) DEFAULT NULL,
  PRIMARY KEY (`REC_ID`),
  KEY `SUPPLIER_REC_ID` (`SUPPLIER_REC_ID`),
  CONSTRAINT `TPL_SUPPLIER_KEY_PERSONEL_fk` FOREIGN KEY (`SUPPLIER_REC_ID`) REFERENCES `tpl_supplier` (`REC_ID`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tpl_supplier_key_personnel_brand`
--

DROP TABLE IF EXISTS `tpl_supplier_key_personnel_brand`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_supplier_key_personnel_brand` (
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `REC_DATETIME` datetime NOT NULL,
  `REC_TIMESTAMP` datetime NOT NULL,
  `SUPPLIER_KEY_PERSONNEL_REC_ID` int(11) NOT NULL,
  `SUPPLIER_BRAND_REC_ID` int(11) NOT NULL,
  `ROLE` varchar(255) DEFAULT NULL,
  `ORDER` int(11) DEFAULT NULL,
  PRIMARY KEY (`REC_ID`),
  KEY `ORDER` (`ORDER`,`SUPPLIER_KEY_PERSONNEL_REC_ID`),
  KEY `SUPPLIER_BRAND_REC_ID` (`SUPPLIER_BRAND_REC_ID`),
  KEY `SUPPLIER_KEY_PERSONNEL_REC_ID` (`SUPPLIER_KEY_PERSONNEL_REC_ID`),
  CONSTRAINT `TPL_SUPPLIER_KEY_PERSONNEL_BRAND_fk` FOREIGN KEY (`SUPPLIER_BRAND_REC_ID`) REFERENCES `tpl_supplier_brand` (`REC_ID`) ON UPDATE CASCADE,
  CONSTRAINT `TPL_SUPPLIER_KEY_PERSONNEL_BRAND_fk1` FOREIGN KEY (`SUPPLIER_KEY_PERSONNEL_REC_ID`) REFERENCES `tpl_supplier_key_personnel` (`REC_ID`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tpl_supplier_media`
--

DROP TABLE IF EXISTS `tpl_supplier_media`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_supplier_media` (
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `REC_DATETIME` datetime NOT NULL,
  `REC_TIMESTAMP` datetime NOT NULL,
  `SUPPLIER_REC_ID` int(11) NOT NULL,
  `MEDIA_NAME` varchar(50) CHARACTER SET latin1 NOT NULL,
  `MEDIA_URL` varchar(200) CHARACTER SET latin1 NOT NULL,
  `MEDIA_TYPE_REC_ID` int(11) NOT NULL,
  `MEDIA_EMBED_SOURCE` varchar(2560) CHARACTER SET latin1 NOT NULL,
  `PRINT_ORDER` int(11) NOT NULL,
  `NAME` varchar(50) NOT NULL,
  `DESCRIPTION` varchar(100) CHARACTER SET latin1 NOT NULL,
  `MEDIA_FILE_SIZE` int(11) NOT NULL,
  `IS_INTERNAL_SOURCE` tinyint(1) NOT NULL,
  `IS_EMBED_SOURCE` tinyint(1) NOT NULL,
  `IS_HIGH_RESO` tinyint(1) NOT NULL,
  `IS_FEATURED` tinyint(1) NOT NULL,
  PRIMARY KEY (`REC_ID`),
  KEY `fk_supplier` (`SUPPLIER_REC_ID`),
  KEY `fk_media_type` (`MEDIA_TYPE_REC_ID`),
  CONSTRAINT `fk_media_type` FOREIGN KEY (`MEDIA_TYPE_REC_ID`) REFERENCES `tpl_media_types` (`REC_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_supplier` FOREIGN KEY (`SUPPLIER_REC_ID`) REFERENCES `tpl_shadow_supplier` (`REC_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tpl_supplier_product_media`
--

DROP TABLE IF EXISTS `tpl_supplier_product_media`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_supplier_product_media` (
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `SUPPLIER_PRODUCT_REC_ID` int(11) NOT NULL,
  `SUPPLIER_MEDIA_REC_ID` int(11) NOT NULL,
  `IS_MANDATORY_MEDIA` tinyint(1) NOT NULL,
  `REC_DATETIME` datetime NOT NULL,
  PRIMARY KEY (`REC_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tpl_supplier_shadow_root`
--

DROP TABLE IF EXISTS `tpl_supplier_shadow_root`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_supplier_shadow_root` (
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `REC_DATETIME` datetime NOT NULL,
  `REC_TIMESTAMP` datetime NOT NULL,
  `SUPPLIER_REC_ID` int(11) NOT NULL,
  `SHADOW_ROOT_REC_ID` int(11) NOT NULL,
  PRIMARY KEY (`REC_ID`),
  KEY `SUPPLIER_REC_ID` (`SUPPLIER_REC_ID`),
  KEY `fk_shadow_root` (`SHADOW_ROOT_REC_ID`),
  CONSTRAINT `fk_shadow_root` FOREIGN KEY (`SHADOW_ROOT_REC_ID`) REFERENCES `tpl_shadow_root` (`REC_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `tpl_supplier` FOREIGN KEY (`SUPPLIER_REC_ID`) REFERENCES `tpl_supplier` (`REC_ID`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tpl_supplier_type`
--

DROP TABLE IF EXISTS `tpl_supplier_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_supplier_type` (
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `REC_DATETIME` datetime NOT NULL,
  `REC_TIMESTAMP` datetime NOT NULL,
  `CODE` varchar(24) NOT NULL DEFAULT '',
  `NAME` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`REC_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

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

--
-- Table structure for table `tpl_transactions`
--

DROP TABLE IF EXISTS `tpl_transactions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_transactions` (
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `REC_TIMESTAMP` datetime DEFAULT NULL,
  `REC_DATETIME` datetime DEFAULT NULL,
  `TRANSACTION_ID` varchar(45) NOT NULL,
  `PAYMENT_METHOD` int(11) DEFAULT NULL,
  `AMOUNT` float DEFAULT NULL,
  `DESCRIPTION` varchar(100) DEFAULT NULL,
  `PAYMENT_RESPONSE_STATUS` varchar(45) DEFAULT NULL,
  `PAYMENT_RESPONSE_IDENTIFICATION` varchar(45) DEFAULT NULL,
  `PAYMENT_REFERENCE_NUMBER` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`REC_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tpl_website_visitor`
--

DROP TABLE IF EXISTS `tpl_website_visitor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_website_visitor` (
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`REC_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='InnoDB free: 184320 kB; InnoDB free: 12288 kB; InnoDB free: ';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tpl_website_visitor_subscription`
--

DROP TABLE IF EXISTS `tpl_website_visitor_subscription`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_website_visitor_subscription` (
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`REC_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='InnoDB free: 184320 kB; InnoDB free: 12288 kB; InnoDB free: ';
/*!40101 SET character_set_client = @saved_cs_client */;

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
              x VARCHAR(255), delim VARCHAR(12), pos TINYINT ) RETURNS varchar(255) CHARSET utf8
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

-- Dump completed on 2012-10-07 15:32:03
CREATE DATABASE  IF NOT EXISTS `db_admin` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `db_admin`;
-- MySQL dump 10.13  Distrib 5.5.20, for linux2.6 (x86_64)
--
-- Host: 127.0.0.1    Database: db_admin
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
-- Table structure for table `tpl_admin_brand_template`
--

DROP TABLE IF EXISTS `tpl_admin_brand_template`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_admin_brand_template` (
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `DIRECTORY_REC_ID` int(11) DEFAULT NULL,
  `TEMPLATE_REC_ID` int(11) DEFAULT NULL,
  `MODIFIED_DATE` datetime DEFAULT NULL,
  `RELEASE_YEAR` year(4) NOT NULL,
  `COMMENT_TAG` varchar(255) DEFAULT NULL,
  `HEADER_TAG` text,
  `BRANDNAME_TAG` text,
  `SUPPLIERNAME_TAG` varchar(255) DEFAULT NULL,
  `SUPPLIERBRANDLOGO_TAG` text,
  PRIMARY KEY (`REC_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tpl_admin_product_template`
--

DROP TABLE IF EXISTS `tpl_admin_product_template`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_admin_product_template` (
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `DIRECTORY_REC_ID` int(11) DEFAULT NULL,
  `TEMPLATE_REC_ID` int(11) DEFAULT NULL,
  `MODIFIED_DATE` datetime DEFAULT NULL,
  `RELEASE_YEAR` year(4) NOT NULL,
  `COMMENT_TAG` varchar(255) DEFAULT NULL,
  `HEADER_TAG` text,
  `PRODUCTNAME_TAG` varchar(255) DEFAULT NULL,
  `SUPPLIERNAME_TAG` varchar(255) DEFAULT NULL,
  `PRODUCTLOGO_TAG` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`REC_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tpl_admin_roles`
--

DROP TABLE IF EXISTS `tpl_admin_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_admin_roles` (
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `ROLE` varchar(255) DEFAULT NULL,
  `DESCRIPTION` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`REC_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 AVG_ROW_LENGTH=8192;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tpl_admin_shaws_template`
--

DROP TABLE IF EXISTS `tpl_admin_shaws_template`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_admin_shaws_template` (
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `DIRECTORY_REC_ID` int(11) DEFAULT NULL,
  `TEMPLATE_REC_ID` int(11) DEFAULT NULL,
  `MODIFIED_DATE` datetime DEFAULT NULL,
  `RELEASE_YEAR` year(4) DEFAULT NULL,
  `COMMENT_TAG` varchar(255) DEFAULT NULL,
  `HEADER_TAG` text,
  `SUPPLIERNAME_TAG` varchar(255) DEFAULT NULL,
  `COMPANYSTATEMENT_TAG` text,
  `PHYSICAL_ADDRESS_TAG` text,
  `POSTAL_ADDRESS_TAG` text,
  `PHONE_TAG` varchar(255) DEFAULT NULL,
  `FREEPHONE_TAG` varchar(255) DEFAULT NULL,
  `FAX_TAG` varchar(255) DEFAULT NULL,
  `FREEFAX_TAG` varchar(255) DEFAULT NULL,
  `EMAIL_TAG` varchar(255) DEFAULT NULL,
  `WEBSITE_TAG` varchar(255) DEFAULT NULL,
  `DISTRIBUTORSNAME_TAG` varchar(255) DEFAULT NULL,
  `PERSONNELNAME_TAG` varchar(255) DEFAULT NULL,
  `PERSONNELPHONE_TAG` varchar(255) DEFAULT NULL,
  `PERSONNEL_FAX_TAG` varchar(255) DEFAULT NULL,
  `PERSONNEL_EMAIL_TAG` varchar(255) DEFAULT NULL,
  `BRANCHES_TAG` text,
  `BRANCH_NAME_TAG` varchar(255) DEFAULT NULL,
  `BRANCH_PHYSICAL_ADDRESS_TAG` varchar(255) DEFAULT NULL,
  `BRANCH_POSTAL_ADDRESS_TAG` varchar(255) DEFAULT NULL,
  `BRANCH_PHONE_TAG` varchar(255) DEFAULT NULL,
  `BRANCH_FREEPHONE_TAG` varchar(255) DEFAULT NULL,
  `BRANCH_FAX_TAG` varchar(255) DEFAULT NULL,
  `BRANCH_FREEFAX_TAG` varchar(255) DEFAULT NULL,
  `BRANCH_EMAIL_TAG` varchar(255) DEFAULT NULL,
  `BRAND_HEADING_TAG` text,
  `BRAND_NAME_TAG` varchar(255) DEFAULT NULL,
  `BRAND_LIST_HEADING_TAG` text,
  `BRAND_LIST_NAME_TAG` varchar(255) DEFAULT NULL,
  `BRAND_LIST_SUPPLIER_TAG` varchar(255) DEFAULT NULL,
  `DRINK_TYPE_INDEX_HEADING_TAG` text,
  `DRINK_TYPE_INDEX_CATEGORY_NAME_TAG` varchar(255) DEFAULT NULL,
  `DRINK_TYPE_INDEX_NAME_TAG` varchar(255) DEFAULT NULL,
  `DRINK_TYPE_HEADING_TAG` text,
  `DRINK_TYPE_CATEGORY_NAME_TAG` varchar(255) DEFAULT NULL,
  `DRINK_TYPE_NAME_TAG` varchar(255) DEFAULT NULL,
  `DRINK_TYPE_PRODUCT_INFO_TAG` varchar(255) DEFAULT NULL,
  `DRINK_TYPE_PRODUCT_NAME_TAG` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`REC_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AVG_ROW_LENGTH=16384;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tpl_admin_supplier_template`
--

DROP TABLE IF EXISTS `tpl_admin_supplier_template`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_admin_supplier_template` (
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `DIRECTORY_REC_ID` int(11) DEFAULT NULL,
  `TEMPLATE_REC_ID` int(11) DEFAULT NULL,
  `MODIFIED_DATE` datetime DEFAULT NULL,
  `RELEASE_YEAR` year(4) NOT NULL,
  `COMMENT_TAG` varchar(255) DEFAULT NULL,
  `HEADER_TAG` text,
  `SUPPLIERNAME_TAG` varchar(255) DEFAULT NULL,
  `COMPANYSTATEMENT_TAG` text,
  `PHYSICAL_ADDRESS_TAG` text,
  `POSTAL_ADDRESS_TAG` text,
  `PHONE_TAG` varchar(255) DEFAULT NULL,
  `FREEPHONE_TAG` varchar(255) DEFAULT NULL,
  `FAX_TAG` varchar(255) DEFAULT NULL,
  `FREEFAX_TAG` varchar(255) DEFAULT NULL,
  `EMAIL_TAG` varchar(255) DEFAULT NULL,
  `WEBSITE_TAG` varchar(255) DEFAULT NULL,
  `CONTACTNAME_TAG` varchar(255) DEFAULT NULL,
  `BRANCHES_TAG` varchar(255) DEFAULT NULL,
  `BRANCH_NAME_TAG` varchar(255) DEFAULT NULL,
  `BRANCH_PHYSICAL_ADDRESS_TAG` text,
  `BRANCH_POSTAL_ADDRESS_TAG` text,
  `BRANCH_PHONE_TAG` varchar(255) DEFAULT NULL,
  `BRANCH_FREEPHONE_TAG` varchar(255) DEFAULT NULL,
  `BRANCH_FAX_TAG` varchar(255) DEFAULT NULL,
  `BRANCH_FREEFAX_TAG` varchar(255) DEFAULT NULL,
  `BRANCH_EMAIL_TAG` varchar(255) DEFAULT NULL,
  `SUB_HEADER_TAG` varchar(255) DEFAULT NULL,
  `LOGO_TAG` varchar(255) DEFAULT NULL,
  `KEYPERSONNEL_TAG` varchar(255) DEFAULT NULL,
  `KEYPERSONNEL_NAME_TAG` varchar(255) DEFAULT NULL,
  `KEYPERSONNEL_POSITION_TAG` varchar(255) DEFAULT NULL,
  `KEYPERSONNEL_EMAIL_TAG` varchar(255) DEFAULT NULL,
  `KEYPERSONNEL_PHONE_TAG` varchar(255) DEFAULT NULL,
  `KEYPERSONNEL_FAX_TAG` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`REC_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tpl_admin_template`
--

DROP TABLE IF EXISTS `tpl_admin_template`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_admin_template` (
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `NAME` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`REC_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tpl_admin_users`
--

DROP TABLE IF EXISTS `tpl_admin_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_admin_users` (
  `TENANT_ID` int(11) DEFAULT '0',
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `SESSIONID` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `USERNAME` varchar(100) CHARACTER SET utf8 NOT NULL COMMENT 'Use for login',
  `PASSWORD` varchar(100) CHARACTER SET utf8 NOT NULL COMMENT 'Use for login',
  `ROLE_ID` int(11) NOT NULL COMMENT 'Account rights',
  `USER_ORG_REC_ID` int(11) DEFAULT NULL,
  `DIRECTORY_PERIOD_REC_ID` smallint(6) DEFAULT NULL,
  `FRONTGRID_ID` smallint(6) DEFAULT '1',
  `FIRSTNAME` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `LASTNAME` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `EMAIL_ADDRESS` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `CREATED` datetime NOT NULL,
  `CREATEDBY` int(11) DEFAULT NULL,
  `MODIFIED` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `LASTLOGIN` datetime DEFAULT NULL,
  PRIMARY KEY (`REC_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AVG_ROW_LENGTH=8192;
/*!40101 SET character_set_client = @saved_cs_client */;

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

--
-- Table structure for table `tpl_tenant`
--

DROP TABLE IF EXISTS `tpl_tenant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpl_tenant` (
  `REC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `REC_DATETIME` datetime DEFAULT NULL,
  `REC_TIMESTAMP` datetime DEFAULT NULL,
  `NAME` varchar(45) DEFAULT NULL,
  `DESCRIPTION` varchar(200) DEFAULT NULL,
  `LAST_INVOICE_ID` int(11) DEFAULT '0',
  `LAST_ORDER_ID` int(11) DEFAULT '0',
  `LAST_TRANSACTION_ID` int(11) DEFAULT '0',
  PRIMARY KEY (`REC_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

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
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_swedish_ci */ ;
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
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_swedish_ci */ ;
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
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_swedish_ci */ ;
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

-- Dump completed on 2012-10-07 15:32:03
