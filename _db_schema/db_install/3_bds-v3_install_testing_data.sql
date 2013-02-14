USE `bds-v3_live`;
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
-- Dumping data for table `tpl_brand`
--
LOCK TABLES `tpl_brand` WRITE;
/*!40000 ALTER TABLE `tpl_brand` DISABLE KEYS */;
REPLACE INTO `tpl_brand` (`REC_ID`, `REC_DATETIME`, `REC_TIMESTAMP`, `NAME`,  `PRINT_LOGO_LOCATION`, `WEB_LOGO_LOCATION`) 
VALUES 
    (1,'2012-04-21 17:23:19','2012-04-21 17:23:19','Taylormade',NULL,NULL),
    (2,'2012-06-21 13:57:07','2012-06-21 13:57:07','Ping',NULL,NULL),
    (3,'2012-06-21 14:19:14','2012-06-21 14:19:14','Calloway',NULL,NULL),   
    (4,'2012-06-21 14:19:14','2012-06-21 14:19:14','Titleist',NULL,NULL);
/*!40000 ALTER TABLE `tpl_brand` ENABLE KEYS */;
UNLOCK TABLES;
--
-- Dumping data for table `tpl_brand_directory`
--
LOCK TABLES `tpl_brand_directory` WRITE;
/*!40000 ALTER TABLE `tpl_brand_directory` DISABLE KEYS */;
REPLACE INTO `tpl_brand_directory` (`REC_ID`, `REC_DATETIME`, `REC_TIMESTAMP`, `BRAND_REC_ID`, `DIRECTORY_REC_ID`) 
VALUES 
    (1,'2012-04-21 17:23:19','2012-04-21 17:23:19',1,2),
    (2,'2012-06-21 13:56:19','2012-06-21 13:56:19',1,1),
    (3,'2012-06-21 13:57:07','2012-06-21 13:57:07',2,1),
    (4,'2012-06-21 14:19:15','2012-06-21 14:19:15',3,1);
/*!40000 ALTER TABLE `tpl_brand_directory` ENABLE KEYS */;
UNLOCK TABLES;
--
-- Dumping data for table `tpl_client`
--
LOCK TABLES `tpl_client` WRITE;
/*!40000 ALTER TABLE `tpl_client` DISABLE KEYS */;
REPLACE INTO `tpl_client` (`REC_ID`, `REC_DATETIME`, `REC_TIMESTAMP`, `NAME`, `FIRST_NAME`, `LAST_NAME`, `USERNAME`, `PASSWORD`, 
`TRADING_AS_NAME`, `TELEPHONE_NO`, `FREE_TELEPHONE_NO`, `FAX_NO`, `FREE_FAX_NO`, `EMAIL_ADDRESS`, `WEBSITE_ADDRESS`, 
`PHYSICAL_ADDRESS_BUILDING_ADDRESS`, `PHYSICAL_ADDRESS_STREET_ADDRESS`, `PHYSICAL_ADDRESS_SUBURB`, `PHYSICAL_ADDRESS_CITY`, 
`PHYSICAL_ADDRESS_STATE`, `PHYSICAL_ADDRESS_COUNTRY`, `PHYSICAL_ADDRESS_POST_CODE`, `PHYSICAL_ADDRESS_DPID`, `PHYSICAL_ADDRESS_PXID`, 
`PHYSICAL_ADDRESS_LATITUDE`, `PHYSICAL_ADDRESS_LONGITUDE`, `PHYSICAL_ADDRESS_HEIGHT`, `PHYSICAL_ADDRESS_COMPLETE`, 
`POSTAL_ADDRESS_BUILDING_ADDRESS`, `POSTAL_ADDRESS_STREET_ADDRESS`, `POSTAL_ADDRESS_CITY`, `POSTAL_ADDRESS_SUBURB`, 
`POSTAL_ADDRESS_STATE`, `POSTAL_ADDRESS_COUNTRY`, `POSTAL_ADDRESS_POST_CODE`, `IS_DELETED`, `DELETED_BY`, `DELETED_DATE`, 
`CLIENT_STATUS_REC_ID`) 
VALUES 
    (1,'2012-04-16 21:11:01','2012-04-16 21:29:38','Bob Charles','Bob','Charles','bob.charles@australia.com','f23c9a5dca7aef19a3db264c5c21a2f8','Bob Charles Golf Suppliers','+44 5 632 147','','','','bob@bocharles.co.uk','','','','','','0','','0','0','0',0.000000000000,0.000000000000,0,'0','','','','','','','',0,NULL,NULL,2),
    (2,'2012-04-21 13:03:45','2012-05-20 16:10:22','Tiger Woods','Tiger','Woods','tiger.woods@golf.com','f23c9a5dca7aef19a3db264c5c21a2f8','Tiger Woods Suppliers','+61 987 654 321','0800 TIGERGOLF','+61 9 222 2222','0800 TIGER GOLF','tiger.woods@tgerwoodsgolfing.com','www.tigerwoods.com','Level 123','123 SomeReallyLongName Street','Greenlane','Auckland','North Island','New Zealand','1234','0','0',0.000000000000,0.000000000000,0,'0','Level 12','PO Box 123ABC456DEF','Auckland','Greenlane','NI','New Zealand','7894',0,NULL,NULL,2),
    (3,'2012-04-22 21:00:57','2012-04-22 21:00:57','Jason Liddiard','Jason','Liddiard','letsgetjase@gmail.com','f23c9a5dca7aef19a3db264c5c21a2f8','Liddiard Golfing','+64 9 589 1052',NULL,NULL,NULL,'letsgetjase@gmail.com',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,2),
    (4,'2012-04-23 19:02:01','2012-04-23 19:02:01','Greg Norman','Greg','Norman','greg.norman@gregnorman.com','f23c9a5dca7aef19a3db264c5c21a2f8','Shark Golfing Supplies','+60 555 546 894',NULL,NULL,NULL,'greg.norman@aussiegolfinglegend.com',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,2),
    (5,'2012-04-23 20:32:15','2012-04-28 17:32:10','Jack Nicklaus','Jack','Nicklaus ','jack.nicklaus@gmail.com','f23c9a5dca7aef19a3db264c5c21a2f8','Jack\'s Really Awesome Golfing Shop for Australia','+60 555 254 149','','','','jack@nicklaus.com','','','','','','0','','0','0','0',0.000000000000,0.000000000000,0,'0','','','','','','','',1,NULL,NULL,2),
    (6,'2012-04-23 21:30:40','2012-04-23 21:30:40','Arnold Palmer','Arnold','Palmer','arnold.palmer@palmer.com','f23c9a5dca7aef19a3db264c5c21a2f8','West Coast Golfers','+60 525 587 225',NULL,NULL,NULL,'harry.potter@hobbitville.com',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,2),
    (7,'2012-05-14 07:34:37','2012-05-14 07:34:37','Nick Faldo','Nick','Faldo','nick.faldo@golf.com','f23c9a5dca7aef19a3db264c5c21a2f8','New York Golf Shop','+59 554 223 211 ',NULL,NULL,NULL,'jsmith@gmail.com',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,2),
    (8,'2012-05-14 18:34:33','2012-05-14 18:34:33','Michael Campbell','Michael','Campbell','michael.campbell@michaelcampbellgolf.com','f23c9a5dca7aef19a3db264c5c21a2f8','Kiwi Golfers United','+64 9 255 6584',NULL,NULL,NULL,'michael.campbell@michaelcgolf.com',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,2),
    (9,'2012-05-17 16:53:14','2012-05-17 16:53:14','Tommy Aaron','Tommy','Aaron','tom.aaron@gmail.com','f23c9a5dca7aef19a3db264c5c21a2f8','Ironworks by Tommy Aaron','+44 21 548 543 ',NULL,NULL,NULL,'tom.aaron@gmail.com',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,2),
    (10,'2012-07-15 08:28:21','2012-07-15 08:28:21','Francisco Abery','Francisco','Abery','francisco@espoanogolfing.com.es','f23c9a5dca7aef19a3db264c5c21a2f8','Spain Golfing Supplies Ltd','+44 258 614',NULL,NULL,NULL,'francisco@espoanogolfing.com.es',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,2);
/*!40000 ALTER TABLE `tpl_client` ENABLE KEYS */;
UNLOCK TABLES;
--
-- Dumping data for table `tpl_shadow_root`
--
LOCK TABLES `tpl_shadow_root` WRITE;
/*!40000 ALTER TABLE `tpl_shadow_root` DISABLE KEYS */;
REPLACE INTO `tpl_shadow_root` (`REC_ID`, `REC_DATETIME`, `REC_TIMESTAMP`, `CLIENT_REC_ID`, `DIRECTORY_PERIOD_REC_ID`,  `STATE`, `PROOF_NAME`, `PROOF_POSITION`, `LISTING_COST_EXCL_GST`, `LISTING_COST_INCL_GST`, `TRANSACTION_TOTAL_EXCL_GST`, 
`TRANSACTION_TOTAL_INCL_GST`, `TOTAL_PAID_TO_DATE`) 
VALUES 
    (1,'2012-04-16 21:11:01','2012-05-24 23:44:14',1,2,'OPEN',NULL,NULL,0.000,0.000,395.000,454.250,0.000),
    (2,'2012-04-21 13:03:45','2012-06-20 17:12:32',2,2,'OPEN',NULL,NULL,0.000,0.000,295.000,339.250,0.000),
    (3,'2012-04-22 21:00:57','2012-06-06 10:45:03',3,2,'OPEN',NULL,NULL,0.000,0.000,60.000,69.000,0.000),
    (4,'2012-04-23 19:02:01','2012-05-14 06:41:12',4,2,'OPEN',NULL,NULL,0.000,0.000,60.000,69.000,0.000),
    (5,'2012-04-23 20:32:15','2012-05-22 07:32:21',5,2,'OPEN',NULL,NULL,0.000,0.000,395.000,454.250,0.000),
    (6,'2012-04-23 21:30:40','2012-05-14 18:33:08',6,3,'OPEN',NULL,NULL,0.000,0.000,60.000,69.000,0.000),
    (7,'2012-05-14 07:34:38','2012-07-16 20:17:51',7,2,'OPEN',NULL,NULL,0.000,0.000,395.000,454.250,0.000),
    (8,'2012-05-14 07:34:38','2012-07-16 20:17:51',7,2,'OPEN',NULL,NULL,0.000,0.000,395.000,454.250,0.000),
    (9,'2012-05-14 07:34:38','2012-07-16 20:17:51',7,2,'OPEN',NULL,NULL,0.000,0.000,395.000,454.250,0.000),
    (10,'2012-05-14 18:34:33','2012-05-14 18:34:33',8,1,'OPEN',NULL,NULL,0.000,0.000,0.000,0.000,0.000);
   
/*!40000 ALTER TABLE `tpl_shadow_root` ENABLE KEYS */;
UNLOCK TABLES;
--
-- Dumping data for table `tpl_client_key_personnel`
--
LOCK TABLES `tpl_client_key_personnel` WRITE;
/*!40000 ALTER TABLE `tpl_client_key_personnel` DISABLE KEYS */;
/*!40000 ALTER TABLE `tpl_client_key_personnel` ENABLE KEYS */;
UNLOCK TABLES;
--
-- Dumping data for table `tpl_client_status`
--
LOCK TABLES `tpl_client_status` WRITE;
/*!40000 ALTER TABLE `tpl_client_status` DISABLE KEYS */;
/*!40000 ALTER TABLE `tpl_client_status` ENABLE KEYS */;
UNLOCK TABLES;
--
-- Dumping data for table `tpl_directory`
--
LOCK TABLES `tpl_directory` WRITE;
/*!40000 ALTER TABLE `tpl_directory` DISABLE KEYS */;
REPLACE INTO `tpl_directory` (`REC_ID`, `REC_DATETIME`, `REC_TIMESTAMP`, `NAME`, `IS_PRODUCT_BASED`, `DIRECTORY_DESC`, `IS_DEFAULT`, `TENANT_ID`) 
VALUES 
    (1,'2012-04-16 20:47:54','2012-04-16 20:47:54','Golfing Guide NZ',NULL,'The No# New Zealand Online Golfing Guide',1,1),
    (2,'2012-04-16 21:07:00','2012-04-16 21:07:00','Golfing Guide AUD',NULL,'Australian Golfing Guide',0,1),
    (3,'2012-04-23 21:04:30','2012-04-23 21:04:30','Golfing Guide USA',NULL,'This is a Golfing Guide for America',0,1),
    (4,'2012-06-24 12:27:17','2012-06-24 12:27:17','Golfing Guide UK',NULL,'Golfing Guide UK',0,1),
    (5,'2012-06-24 12:36:59','2012-06-24 12:36:59','Golfing Guide France',NULL,'Golfing Guide France',0,1),
    (6,'2012-06-24 12:43:10','2012-06-24 12:43:10','Golfing Guide Germany',NULL,'Golfing Guide Germany',0,1),
    (7,'2012-06-24 15:20:18','2012-06-24 15:20:18','Golfing Guide Ireland',NULL,'Golfing Guide Irish',0,1),
    (8,'2012-06-24 15:58:27','2012-06-24 15:58:27','Golfing Guide Scotland',NULL,'Golfing Guide Scotland',0,1),
    (9,'2012-06-26 19:03:58','2012-06-26 19:03:58','Golfing Guide Spain',NULL,'Golfing Guide Spain',0,1),
    (10,'2012-06-27 11:43:38','2012-06-27 11:43:38','Golfing Guide Poland',NULL,'Golfing Guide Poland',0,1);
/*!40000 ALTER TABLE `tpl_directory` ENABLE KEYS */;
UNLOCK TABLES;
--
-- Dumping data for table `tpl_directory_period`
--
LOCK TABLES `tpl_directory_period` WRITE;
/*!40000 ALTER TABLE `tpl_directory_period` DISABLE KEYS */;
REPLACE INTO `tpl_directory_period` (`REC_ID`, `REC_DATETIME`, `REC_TIMESTAMP`, `DIRECTORY_REC_ID`, `DIRECTORY_YEAR`, `DIRECTORY_PERIOD_NAME`, `DIRECTORY_PERIOD_CODE`, `DIRECTORY_PERIOD`, 
`DIRECTORY_PERIOD_TYPE`, `DIRECTORY_PERIOD_START`, `DIRECTORY_PERIOD_END`, `IS_DEFAULT`, `IS_MULTI_PAYMENT`) 
VALUES 
    (1,'2012-04-16 20:47:54','2012-07-07 21:42:17',1,2012,'New Zealand 2012','NZ12','12','monthly','2012-04-01','2013-03-31',1,1),
    (2,'2012-04-16 21:07:00','2012-07-07 03:47:13',2,2012,'Australian 2012','AUD12','12','monthly','2012-04-02','2013-03-31',1,1),
    (3,'2012-04-23 21:04:30','2012-07-07 03:47:13',3,2012,'United State 2012','USA12','12','monthly','2012-04-03','2013-03-31',1,1),
    (4,'2012-06-24 12:27:17','2012-07-07 03:47:13',4,2012,'United Kingdom 2012','UK2012','12','monthly','2012-06-01','2013-05-31',1,1),
    (5,'2012-06-24 12:36:59','2012-07-07 03:47:13',5,2012,'France 2012','FRA2012','12','monthly','2012-06-10','2013-06-09',1,1),
    (6,'2012-06-24 12:43:10','2012-07-07 03:47:13',6,2012,'Germany Guide 2012','GER2012','12','monthly','2012-06-01','2012-06-02',1,1),
    (7,'2012-06-24 15:58:27','2012-07-06 22:06:50',7,2012,'Ireand 2012','2012IRE','12','monthly','2012-06-01','2013-05-31',1,1),
    (8,'2012-06-24 15:58:27','2012-07-06 22:06:50',8,2012,'Scottish 2012','2012Scott','12','monthly','2012-06-01','2013-05-31',1,1),
    (9,'2012-06-26 19:03:58','2012-07-07 03:47:13',9,2012,'Spain 2012','ES2012','12','monthly','2012-06-01','2012-06-30',1,1),
    (10,'2012-06-27 11:43:38','2012-07-07 03:47:13',10,2012,'Poland 2012','POL_2012','12','monthly','2012-06-01','2012-06-30',1,1),
    (11,'2012-07-08 00:00:00','2012-07-11 09:15:14',1,2013,'New Zealand 2013','NZ2014','12','monthly','2013-04-01','2014-03-31',0,1),
    (12,'2012-07-08 00:00:00','2012-07-11 09:15:14',1,2014,'New Zealand 2014','NZ2015','12','monthly','2014-04-01','2015-03-31',0,1),
    (13,'2012-07-08 00:00:00','2012-07-11 09:15:14',1,2015,'New Zealand 2015','NZ2016','12','monthly','2016-04-01','2017-03-31',0,1),
    (14,'2012-07-08 00:00:00','2012-07-11 09:15:14',1,2016,'New Zealand 2016','NZ2015','12','monthly','2017-04-01','2018-03-31',0,1);

/*!40000 ALTER TABLE `tpl_directory_period` ENABLE KEYS */;
UNLOCK TABLES;
--
-- Dumping data for table `tpl_directory_additional_offering`
--
LOCK TABLES `tpl_directory_period_additional_offering` WRITE;
/*!40000 ALTER TABLE `tpl_directory_period_additional_offering` DISABLE KEYS */;
REPLACE INTO `tpl_directory_period_additional_offering` (`REC_ID`, `REC_DATETIME`, `REC_TIMESTAMP`, `DIRECTORY_PERIOD_REC_ID`,  `CODE`, `NAME`, `DESCRIPTION`, `COST_EXCL_GST`, `GST_RATE`) 
VALUES 
    (1,'2012-04-16 20:47:54','2013-04-16 20:47:54',1,'','','',00000000050.000,00000000015.000),
    (2,'2012-04-16 21:07:00','2013-04-16 21:07:00',2,'','','',00000000050.000,00000000015.000),
    (3,'2012-04-23 21:04:30','2013-04-23 21:04:30',3,'','','',00000000050.000,00000000015.000),
    (4,'2012-06-24 12:27:17','2013-06-24 12:27:17',4,'','','',00000000050.000,00000000015.000),
    (5,'2012-06-24 12:36:59','2013-06-24 12:36:59',5,'','','',00000000050.000,00000000015.000),
    (6,'2012-06-24 12:43:10','2013-06-24 12:43:10',6,'','','',00000000050.000,00000000015.000),
    (7,'2012-06-24 15:58:27','2013-06-24 15:58:27',8,'','','',00000000050.000,00000000015.000),
    (8,'2012-06-26 19:03:58','2013-06-26 19:03:58',9,'','','',00000000050.000,00000000015.000),
    (9,'2012-06-27 11:43:38','2013-06-27 11:43:38',10,'','','',00000000050.000,00000000015.000);
/*!40000 ALTER TABLE `tpl_directory_period_additional_offering` ENABLE KEYS */;
UNLOCK TABLES;
--
-- Dumping data for table `tpl_directory_offering`
--
LOCK TABLES `tpl_directory_period_offering` WRITE;
/*!40000 ALTER TABLE `tpl_directory_period_offering` DISABLE KEYS */;
REPLACE INTO `tpl_directory_period_offering` (`TENANT_REC_ID`, `REC_ID`, `REC_DATETIME`, `REC_TIMESTAMP`, `DIRECTORY_PERIOD_REC_ID`,  `NAME`, `DESCRIPTION`, `COST_EXCL_GST`,  PERIOD_TYPE_COST_EXCL_GST,
`TAX_RATE`, `MAX_BRANCH_COUNT`, `MAX_KEY_PERSONNEL_COUNT`, `MAX_BRAND_COUNT`, `MAX_PRODUCT_CATEGORY_COUNT`, `IS_DEFAULT`) 
VALUES 
    (1,1,'2012-04-16 20:47:54','2013-04-16 20:47:54',1,'Standard Listing','A standard listing for this directory.'        ,00000000997.000,00000000097.000,00000000015.000,0,0,0,5,0),
    (1,2,'2012-04-16 20:47:54','2013-04-16 20:47:54',1,'Advanced Listing','An advanced listing for this directory.'    ,00000001497.000,00000000140.000,00000000015.000,0,100,5,12,0),
    (1,3,'2012-04-16 20:47:54','2013-04-16 20:47:54',1,'Premium Listing','A premium listing for this directory.'        ,00000002997.000,00000000270.000,00000000015.000,1000,1000,1000,100000,1),
    (1,4,'2012-04-16 21:07:00','2013-04-16 21:07:00',2,'Standard Listing','A standard listing for this directory.'        ,00000000290.000,00000000997.000,00000000015.000,0,0,0,5,0),
    (1,5,'2012-04-16 21:07:00','2013-04-16 21:07:00',2,'Advanced Listing','An advanced listing for this directory.'    ,00000000960.000,00000000997.000,00000000015.000,0,100,5,12,0),
    (1,6,'2012-04-16 21:07:00','2013-04-16 21:07:00',2,'Premium Listing','A premium listing for this directory.'        ,00000001460.000,00000000997.000,00000000015.000,1000,1000,1000,100000,1),
    (1,7,'2012-04-23 21:04:30','2013-04-23 21:04:30',3,'Standard Listing','A standard listing for this directory.'        ,00000000860.000,00000000997.000,00000000015.000,0,0,0,5,0),
    (1,8,'2012-04-23 21:04:30','2013-04-23 21:04:30',3,'Advanced Listing','An advanced listing for this directory.'    ,00000001860.000,00000000997.000,00000000015.000,0,100,5,12,0),
    (1,9,'2012-04-23 21:04:30','2013-04-23 21:04:30',3,'Premium Listing','A premium listing for this directory.'        ,00000003660.000,00000000997.000,00000000015.000,1000,1000,1000,100000,1),
    (1,10,'2012-06-24 12:27:17','2013-06-24 12:27:17',4,'Standard Listing','A standard listing for this directory.'      ,00000001460.000,00000000997.000,00000000015.000,0,0,0,5,1),
    (1,11,'2012-06-24 12:27:17','2013-06-24 12:27:17',4,'Advanced Listing','An advanced listing for this directory.'  ,00000002860.000,00000000997.000,00000000015.000,0,100,5,12,0),
    (1,12,'2012-06-24 12:27:17','2013-06-24 12:27:17',4,'Premium Listing','A premium listing for this directory.'      ,00000005460.000,00000000997.000,00000000015.000,1000,1000,1000,100000,0),
    (1,13,'2012-06-24 12:36:59','2013-06-24 12:36:59',5,'Standard Listing','A standard listing for this directory.'      ,00000000660.000,00000000997.000,00000000015.000,0,0,0,5,1),
    (1,14,'2012-06-24 12:36:59','2013-06-24 12:36:59',5,'Advanced Listing','An advanced listing for this directory.'  ,00000001260.000,00000000997.000,00000000015.000,0,100,5,12,0),
    (1,15,'2012-06-24 12:36:59','2013-06-24 12:36:59',5,'Premium Listing','A premium listing for this directory.'      ,00000002960.000,00000000997.000,00000000015.000,1000,1000,1000,100000,0),
    (1,16,'2012-06-24 12:43:10','2013-06-24 12:43:10',6,'Standard Listing','A standard listing for this directory.'      ,00000000960.000,00000000997.000,00000000015.000,0,0,0,5,1),
    (1,17,'2012-06-24 12:43:10','2013-06-24 12:43:10',6,'Advanced Listing','An advanced listing for this directory.'  ,00000001760.000,00000000997.000,00000000015.000,0,100,5,12,0),
    (1,18,'2012-06-24 12:43:10','2013-06-24 12:43:10',6,'Premium Listing','A premium listing for this directory.'      ,00000002860.000,00000000997.000,00000000015.000,1000,1000,1000,100000,0),
    (1,19,'2012-06-24 15:58:27','2013-06-24 15:58:27',7,'Standard Listing','A standard listing for this directory.'      ,00000000360.000,00000000997.000,00000000015.000,0,0,0,5,1),
    (1,20,'2012-06-24 15:58:27','2013-06-24 15:58:27',7,'Advanced Listing','An advanced listing for this directory.'  ,00000000960.000,00000000997.000,00000000015.000,0,100,5,12,0),
    (1,21,'2012-06-24 15:58:27','2013-06-24 15:58:27',7,'Premium Listing','A premium listing for this directory.'      ,00000001960.000,00000000997.000,00000000015.000,1000,1000,1000,100000,0),
    (1,22,'2012-06-26 19:03:58','2013-06-26 19:03:58',8,'Standard Listing','A standard listing for this directory.'      ,00000000960.000,00000000997.000,00000000015.000,0,0,0,5,1),
    (1,23,'2012-06-26 19:03:58','2013-06-26 19:03:58',8,'Advanced Listing','An advanced listing for this directory.'  ,00000001260.000,00000000997.000,00000000015.000,0,100,5,12,0),
    (1,24,'2012-06-26 19:03:58','2013-06-26 19:03:58',8,'Premium Listing','A premium listing for this directory.'      ,00000002460.000,00000000997.000,00000000015.000,1000,1000,1000,100000,0),
    (1,25,'2012-06-27 11:43:38','2013-06-27 11:43:38',9,'Standard Listing','A standard listing for this directory.'      ,00000000880.000,00000000997.000,00000000015.000,0,0,0,5,1),
    (1,26,'2012-06-27 11:43:38','2013-06-27 11:43:38',9,'Advanced Listing','An advanced listing for this directory.'  ,00000001260.000,00000000997.000,00000000015.000,0,100,5,12,0),
    (1,27,'2012-06-27 11:43:38','2013-06-27 11:43:38',9,'Premium Listing','A premium listing for this directory.'      ,00000002997.000,00000000997.000,00000000015.000,1000,1000,1000,100000,0),
    (1,28,'2012-06-27 11:43:38','2013-06-27 11:43:38',10,'Standard Listing','A standard listing for this directory.'      ,00000000680.000,00000000997.000,00000000015.000,0,0,0,5,1),
    (1,29,'2012-06-27 11:43:38','2013-06-27 11:43:38',10,'Advanced Listing','An advanced listing for this directory.'  ,00000001460.000,00000000997.000,00000000015.000,0,100,5,12,0),
    (1,30,'2012-06-27 11:43:38','2013-06-27 11:43:38',10,'Premium Listing','A premium listing for this directory.'      ,00000004997.000,00000000997.000,00000000015.000,1000,1000,1000,100000,0);
/*!40000 ALTER TABLE `tpl_directory_period_offering` ENABLE KEYS */;
UNLOCK TABLES;
--
-- Dumping data for table `tpl_domains`
--
LOCK TABLES `tpl_domains` WRITE;
/*!40000 ALTER TABLE `tpl_domains` DISABLE KEYS */;
REPLACE INTO `tpl_domains` (`REC_ID`, `DOMAIN_NAME`, `JSON_DATA`) 
VALUES 
    (1,'golfingguidenz.com','{\"dir_ids\":[\"1\",\"2\",\"3\",\"8\"],\"domain_name\":\"golfingguidenz.com\",\"title\":\"Golfing Guide New Zealand\",\"paypal_email\":\"nz@golfingguidenz.com\"}'),
    (2,'mygolfinguideuk.co.uk','{\"dir_ids\":[\"1\",\"2\"],\"domain_name\":\"mygolfinguideuk.co.uk\",\"title\":\"Golfing Guide United Kingdom\",\"paypal_email\":\"sales@uk-golfinguide.co.uk\"}'),
    (3,'testing.local','{\"dir_ids\":[],\"domain_name\":\"testing.local\",\"title\":\"Testing Directory\",\"paypal_email\":\"letsgetjase@gmail.com\"}'),
    (4,'golfingguideglobal.com','{\"dir_ids\":[\"1\",\"2\",\"3\",\"4\",\"5\",\"6\",\"7\",\"8\",\"9\",\"10\"],\"domain_name\":\"golfingguideglobal.com\",\"title\":\"Global\",\"paypal_email\":\"letsgetjase@gmail.com\"}'),
    (5,'golfingguide.com.au','{\"dir_ids\":[\"2\",\"3\"],\"domain_name\":\"golfingguide.com.au\",\"title\":\"Golfing Guide Australia\",\"paypal_email\":\"letsgetjase@gmail.com\"}');
/*!40000 ALTER TABLE `tpl_domains` ENABLE KEYS */;
UNLOCK TABLES;
--
-- Dumping data for table `tpl_product_category`
--
LOCK TABLES `tpl_category` WRITE;
/*!40000 ALTER TABLE `tpl_category` DISABLE KEYS */;
REPLACE INTO `tpl_category` (`REC_ID`, `REC_DATETIME`, `REC_TIMESTAMP`, `PARENT_CATEGORY_REC_ID`, `NAME`, `PRINT_ORDER`, `PRINT_IMAGE_LOCATION`, `WEB_IMAGE_LOCATION`, 
`CODE`, `HEADING`, `SUB_HEADING`, `TEXT`)
VALUES 
    (1,'2012-05-01 06:17:06','2012-05-01 06:17:06',NULL,'Golf Clubs',11,'','/media/categories/author-services.jpg','GC',NULL,NULL,''),
    (2,'2012-05-01 06:17:26','2012-05-01 06:17:26',1,'North Island',11,'','','GCNI',NULL,NULL,''),
    (3,'2012-05-01 06:17:45','2012-05-01 06:17:45',1,'South Island',2,'','','SIGC',NULL,NULL,''),
    (4,'2012-05-01 06:18:40','2012-05-01 06:18:40',NULL,'Golf Courses',2,'','/media/categories/business-services.jpg','GC2',NULL,NULL,''),
    (5,'2012-05-01 06:19:00','2012-05-01 06:19:00',NULL,'Golf Trainers',5,'','/media/categories/professional-speakers.jpg','GT',NULL,NULL,''),
    (6,'2012-05-01 06:19:46','2012-05-01 06:19:46',NULL,'Golf Equipment',4,'','/media/categories/consults-facilitators.png','GE',NULL,NULL,''),
    (7,'2012-05-01 06:20:27','2012-05-01 06:20:27',NULL,'Golf Events',3,'','/media/categories/web-services.png','GEV',NULL,NULL,''),
    (8,'2012-05-06 13:12:05','2012-05-06 13:12:05',NULL,'Web Services',6,'','/media/categories/trainers-coaches.jpg','WSC',NULL,NULL,''),
    (9,'2012-08-08 07:24:30','2012-08-08 07:24:30',1,'Club Wholesalers',3,'','','CW',NULL,NULL,''),
    (10,'2012-08-08 07:24:51','2012-08-08 07:24:51',1,'Club Repairers',4,'','','CR',NULL,NULL,''),
    (11,'2012-08-08 07:25:12','2012-08-08 07:25:12',1,'Custom Clubs',5,'','','CC',NULL,NULL,''),
    (12,'2012-08-08 07:25:39','2012-08-08 07:25:39',1,'Club Distributors',0,'','','CD',NULL,NULL,''),
    (13,'2012-08-08 07:25:55','2012-08-08 07:25:55',1,'Club Importers',0,'','','CI',NULL,NULL,''),
    (14,'2012-08-08 07:28:09','2012-08-08 07:28:09',12,'Club Exporter',0,'','','CE',NULL,NULL,'');
/*!40000 ALTER TABLE `tpl_category` ENABLE KEYS */;
UNLOCK TABLES;
--
-- Dumping data for table `tpl_product_category_brand`
--
LOCK TABLES `tpl_product_category_brand` WRITE;
/*!40000 ALTER TABLE `tpl_product_category_brand` DISABLE KEYS */;
/*!40000 ALTER TABLE `tpl_product_category_brand` ENABLE KEYS */;
UNLOCK TABLES;
--
-- Dumping data for table `tpl_product_category_directory`
--
LOCK TABLES `tpl_category_directory` WRITE;
/*!40000 ALTER TABLE `tpl_category_directory` DISABLE KEYS */;
REPLACE INTO `tpl_category_directory` (`REC_ID`, `REC_DATETIME`, `REC_TIMESTAMP`, `CATEGORY_REC_ID`, `DIRECTORY_REC_ID`) 
VALUES 
    (1,'2012-05-01 06:17:06','2012-05-01 06:17:06',1,2),
    (2,'2012-05-01 06:17:26','2012-05-01 06:17:26',2,2),
    (3,'2012-05-01 06:17:45','2012-05-01 06:17:45',3,2),
    (4,'2012-05-01 06:18:40','2012-05-01 06:18:40',4,2),
    (5,'2012-05-01 06:19:00','2012-05-01 06:19:00',5,2),
    (6,'2012-05-01 06:19:46','2012-05-01 06:19:46',6,2),
    (7,'2012-05-01 06:20:27','2012-05-01 06:20:27',7,2),
    (8,'2012-05-06 13:12:05','2012-05-06 13:12:05',8,2),
    (9,'2012-08-08 07:24:30','2012-08-08 07:24:30',9,2),
    (10,'2012-08-08 07:24:51','2012-08-08 07:24:51',10,2),
    (11,'2012-08-08 07:25:12','2012-08-08 07:25:12',11,2),
    (12,'2012-08-08 07:25:39','2012-08-08 07:25:39',12,2),
    (13,'2012-08-08 07:25:55','2012-08-08 07:25:55',13,2),
    (14,'2012-08-08 07:28:09','2012-08-08 07:28:09',14,2);
/*!40000 ALTER TABLE `tpl_category_directory` ENABLE KEYS */;
UNLOCK TABLES;
--
-- Dumping data for table `tpl_shadow_directory_additional_offering`
--
LOCK TABLES `tpl_shadow_directory_period_additional_offering` WRITE;
/*!40000 ALTER TABLE `tpl_shadow_directory_period_additional_offering` DISABLE KEYS */;
REPLACE INTO `tpl_shadow_directory_period_additional_offering` (`REC_ID`, `SHADOW_ROOT_REC_ID`, `REC_DATETIME`, `REC_TIMESTAMP`, `REC_ACTION`,  `CODE`, `NAME`, `DESCRIPTION`, `COST_EXCL_GST`, `GST_RATE`) 
VALUES 
    (1,9,'2012-05-29 06:45:02','2012-05-29 06:45:02',NULL,'','','',00000000050.000,00000000015.000),
    (2,10,'2012-05-29 06:45:02','2012-05-29 06:45:02',NULL,'','','',00000000050.000,00000000015.000),
    (3,11,'2012-05-29 06:45:03','2012-05-29 06:45:03',NULL,'','','',00000000050.000,00000000015.000),
    (4,9,'2012-05-29 07:03:48','2012-05-29 07:03:48',NULL,'','','',00000000050.000,00000000015.000),
    (5,10,'2012-05-29 07:03:48','2012-05-29 07:03:48',NULL,'','','',00000000050.000,00000000015.000),
    (6,11,'2012-05-29 07:03:48','2012-05-29 07:03:48',NULL,'','','',00000000050.000,00000000015.000),
    (7,12,'2012-05-29 07:03:53','2012-05-29 07:03:53',NULL,'','','',00000000050.000,00000000015.000),
    (8,13,'2012-05-29 07:03:53','2012-05-29 07:03:53',NULL,'','','',00000000050.000,00000000015.000),
    (9,14,'2012-05-29 07:03:53','2012-05-29 07:03:53',NULL,'','','',00000000050.000,00000000015.000),
    (10,9,'2012-06-06 10:31:01','2012-06-06 10:31:01',NULL,'','','',00000000050.000,00000000015.000),
    (11,10,'2012-06-06 10:31:01','2012-06-06 10:31:01',NULL,'','','',00000000050.000,00000000015.000),
    (12,11,'2012-06-06 10:31:01','2012-06-06 10:31:01',NULL,'','','',00000000050.000,00000000015.000);
/*!40000 ALTER TABLE `tpl_shadow_directory_period_additional_offering` ENABLE KEYS */;
UNLOCK TABLES;
--
-- Dumping data for table `tpl_shadow_directory_period_offering`
--
LOCK TABLES `tpl_shadow_directory_period_offering` WRITE;
/*!40000 ALTER TABLE `tpl_shadow_directory_period_offering` DISABLE KEYS */;
REPLACE INTO `tpl_shadow_directory_period_offering` (`REC_ID`, `SHADOW_ROOT_REC_ID`, `REC_DATETIME`, `REC_TIMESTAMP`, `REC_ACTION`, 
`NAME`, `DESCRIPTION`, `COST_EXCL_GST`, `GST_RATE`, `MAX_BRANCH_COUNT`, `MAX_KEY_PERSONNEL_COUNT`, `MAX_BRAND_COUNT`, `MAX_PRODUCT_CATEGORY_COUNT`) 
VALUES 
    (1,1,'2012-04-16 21:11:01','2012-04-16 21:11:01',NULL,'Standard Listing','A standard listing in the Pack and Print directory for 2010 allows you to list your basic contact details as well as five product and service listings.',00000000060.000,00000000015.000,0,0,0,5),
    (2,1,'2012-04-16 21:11:01','2012-04-16 21:11:01',NULL,'Advanced Listing','An advanced listing in the Pack and Print directory for 2010 allows you to list your contact details, company profile, key personnel, five brand listings and twelve product and service listings.',00000000165.000,00000000015.000,0,100,5,12),
    (3,1,'2012-04-16 21:11:01','2012-04-16 21:11:01',NULL,'Premium Listing','A premium listing in the Pack and Print directory for 2010 allows you to list your company logo, contact details, company profile, key personnel, branches/agents, unlimited brand listings and unlimited product and service listings.',00000000395.000,00000000015.000,1000,1000,1000,100000),
    (4,2,'2012-04-21 13:03:45','2012-04-21 13:03:45',NULL,'Standard Listing','A standard listing in the Pack and Print directory for 2010 allows you to list your basic contact details as well as five product and service listings.',00000000019.000,00000000015.000,0,0,0,5),
    (5,2,'2012-04-21 13:03:45','2012-04-21 13:03:45',NULL,'Advanced Listing','An advanced listing in the Pack and Print directory for 2010 allows you to list your contact details, company profile, key personnel, five brand listings and twelve product and service listings.',00000049000.000,00000000015.000,0,100,5,12),
    (6,2,'2012-04-21 13:03:45','2012-04-21 13:03:45',NULL,'Premium Listing','A premium listing in the Pack and Print directory for 2010 allows you to list your company logo, contact details, company profile, key personnel, branches/agents, unlimited brand listings and unlimited product and service listings.',00000000295.000,00000000015.000,1000,1000,1000,100000),
    (7,3,'2012-04-22 21:00:57','2012-04-22 21:00:57',NULL,'Standard Listing','A standard listing in the Pack and Print directory for 2010 allows you to list your basic contact details as well as five product and service listings.',00000000060.000,00000000015.000,0,0,0,5),
    (8,3,'2012-04-22 21:00:57','2012-04-22 21:00:57',NULL,'Advanced Listing','An advanced listing in the Pack and Print directory for 2010 allows you to list your contact details, company profile, key personnel, five brand listings and twelve product and service listings.',00000000165.000,00000000015.000,0,100,5,12),
    (9,3,'2012-04-22 21:00:57','2012-04-22 21:00:57',NULL,'Premium Listing','A premium listing in the Pack and Print directory for 2010 allows you to list your company logo, contact details, company profile, key personnel, branches/agents, unlimited brand listings and unlimited product and service listings.',00000000395.000,00000000015.000,1000,1000,1000,100000),
    (10,4,'2012-04-23 19:02:01','2012-04-23 19:02:01',NULL,'Standard Listing','A standard listing in the Pack and Print directory for 2010 allows you to list your basic contact details as well as five product and service listings.',00000000060.000,00000000015.000,0,0,0,5),
    (11,4,'2012-04-23 19:02:01','2012-04-23 19:02:01',NULL,'Advanced Listing','An advanced listing in the Pack and Print directory for 2010 allows you to list your contact details, company profile, key personnel, five brand listings and twelve product and service listings.',00000000165.000,00000000015.000,0,100,5,12),
    (12,4,'2012-04-23 19:02:01','2012-04-23 19:02:01',NULL,'Premium Listing','A premium listing in the Pack and Print directory for 2010 allows you to list your company logo, contact details, company profile, key personnel, branches/agents, unlimited brand listings and unlimited product and service listings.',00000000395.000,00000000015.000,1000,1000,1000,100000),
    (13,5,'2012-04-23 20:32:15','2012-04-23 20:32:15',NULL,'Standard Listing','A standard listing in the Pack and Print directory for 2010 allows you to list your basic contact details as well as five product and service listings.',00000000060.000,00000000015.000,0,0,0,5),
    (14,5,'2012-04-23 20:32:15','2012-04-23 20:32:15',NULL,'Advanced Listing','An advanced listing in the Pack and Print directory for 2010 allows you to list your contact details, company profile, key personnel, five brand listings and twelve product and service listings.',00000000165.000,00000000015.000,0,100,5,12),
    (15,5,'2012-04-23 20:32:15','2012-04-23 20:32:15',NULL,'Premium Listing','A premium listing in the Pack and Print directory for 2010 allows you to list your company logo, contact details, company profile, key personnel, branches/agents, unlimited brand listings and unlimited product and service listings.',00000000395.000,00000000015.000,1000,1000,1000,100000),
    (16,6,'2012-04-23 21:30:40','2012-04-23 21:30:40',NULL,'Standard Listing','A standard listing in the Pack and Print directory for 2010 allows you to list your basic contact details as well as five product and service listings.',00000000060.000,00000000015.000,0,0,0,5),
    (17,6,'2012-04-23 21:30:40','2012-04-23 21:30:40',NULL,'Advanced Listing','An advanced listing in the Pack and Print directory for 2010 allows you to list your contact details, company profile, key personnel, five brand listings and twelve product and service listings.',00000000165.000,00000000015.000,0,100,5,12),
    (18,6,'2012-04-23 21:30:40','2012-04-23 21:30:40',NULL,'Premium Listing','A premium listing in the Pack and Print directory for 2010 allows you to list your company logo, contact details, company profile, key personnel, branches/agents, unlimited brand listings and unlimited product and service listings.',00000000395.000,00000000015.000,1000,1000,1000,100000),
    (19,7,'2012-05-14 07:34:38','2012-05-14 07:34:38',NULL,'Standard Listing','A standard listing in the Pack and Print directory for 2010 allows you to list your basic contact details as well as five product and service listings.',00000000060.000,00000000015.000,0,0,0,5),
    (20,7,'2012-05-14 07:34:38','2012-05-14 07:34:38',NULL,'Advanced Listing','An advanced listing in the Pack and Print directory for 2010 allows you to list your contact details, company profile, key personnel, five brand listings and twelve product and service listings.',00000000165.000,00000000015.000,0,100,5,12),
    (21,7,'2012-05-14 07:34:38','2012-05-14 07:34:38',NULL,'Premium Listing','A premium listing in the Pack and Print directory for 2010 allows you to list your company logo, contact details, company profile, key personnel, branches/agents, unlimited brand listings and unlimited product and service listings.',00000000395.000,00000000015.000,1000,1000,1000,100000),
    (22,8,'2012-05-14 18:34:33','2012-05-14 18:34:33',NULL,'Standard Listing','A standard listing in the Pack and Print directory for 2010 allows you to list your basic contact details as well as five product and service listings.',00000000060.000,00000000015.000,0,0,0,5),
    (23,8,'2012-05-14 18:34:33','2012-05-14 18:34:33',NULL,'Advanced Listing','An advanced listing in the Pack and Print directory for 2010 allows you to list your contact details, company profile, key personnel, five brand listings and twelve product and service listings.',00000000165.000,00000000015.000,0,100,5,12),
    (24,8,'2012-05-14 18:34:33','2012-05-14 18:34:33',NULL,'Premium Listing','A premium listing in the Pack and Print directory for 2010 allows you to list your company logo, contact details, company profile, key personnel, branches/agents, unlimited brand listings and unlimited product and service listings.',00000000395.000,00000000015.000,1000,1000,1000,100000),
    (25,18,'2012-07-15 08:28:21','2012-07-15 08:28:21',NULL,'Standard Listing','A standard listing in the Pack and Print directory for 2010 allows you to list your basic contact details as well as five product and service listings.',00000000060.000,00000000015.000,0,0,0,5),
    (26,18,'2012-07-15 08:28:21','2012-07-15 08:28:21',NULL,'Advanced Listing','An advanced listing in the Pack and Print directory for 2010 allows you to list your contact details, company profile, key personnel, five brand listings and twelve product and service listings.',00000000165.000,00000000015.000,0,100,5,12),
    (27,18,'2012-07-15 08:28:21','2012-07-15 08:28:21',NULL,'Premium Listing','A premium listing in the Pack and Print directory for 2010 allows you to list your company logo, contact details, company profile, key personnel, branches/agents, unlimited brand listings and unlimited product and service listings.',00000000395.000,00000000015.000,1000,1000,1000,100000);
/*!40000 ALTER TABLE `tpl_shadow_directory_period_offering` ENABLE KEYS */;
UNLOCK TABLES;
--
-- Dumping data for table `tpl_shadow_supplier`
--
LOCK TABLES `tpl_shadow_supplier` WRITE;
/*!40000 ALTER TABLE `tpl_shadow_supplier` DISABLE KEYS */;
REPLACE INTO `tpl_shadow_supplier` (`REC_ID`, `SHADOW_REC_ID`, `MASTER_REC_ID`, `REC_DATETIME`, `REC_TIMESTAMP`, `REC_ACTION`, `CLIENT_REC_ID`, `SUPPLIER_TYPE_REC_ID`, `NAME`, `TRADING_AS_NAME`, 
`CONTACT_NAME`, `CONTACT_POSITION`, `TELEPHONE_NO`, `FREE_TELEPHONE_NO`, `FAX_NO`, `FREE_FAX_NO`, `EMAIL_ADDRESS`, `WEBSITE_ADDRESS`, `PHYSICAL_ADDRESS_BUILDING_ADDRESS`, 
`PHYSICAL_ADDRESS_STREET_ADDRESS`, `PHYSICAL_ADDRESS_SUBURB`, `PHYSICAL_ADDRESS_CITY`, `PHYSICAL_ADDRESS_STATE`, `PHYSICAL_ADDRESS_COUNTRY`, `PHYSICAL_ADDRESS_POST_CODE`, 
`COMPANY_STRAPLINE_TEXT`, `COMPANY_PROFILE_TEXT`, `COMPANY_ABOUTUS_TEXT`, `POSTAL_ADDRESS_BUILDING_ADDRESS`, `POSTAL_ADDRESS_STREET_ADDRESS`, `POSTAL_ADDRESS_SUBURB`, 
`POSTAL_ADDRESS_CITY`, `POSTAL_ADDRESS_STATE`, `POSTAL_ADDRESS_COUNTRY`, `POSTAL_ADDRESS_POST_CODE`, `PRINT_LOGO_LOCATION`, `WEB_LOGO_LOCATION`, `PHYSICAL_ADDRESS_PXID`, 
`PHYSICAL_ADDRESS_DPID`, `PHYSICAL_ADDRESS_LATITUDE`, `PHYSICAL_ADDRESS_LONGITUDE`, `PHYSICAL_ADDRESS_HEIGHT`, `PHYSICAL_ADDRESS_COMPLETE`, `FACEBOOK_ADDRESS_URL`, `TWITTER_ADDRESS_URL`, 
`LINKEDIN_ADDRESS_URL`, `YOUTUBE_ADDRESS_URL`, `FOURSQUARE_ADDRESS_URL`) 
VALUES 
    (1,1,0,'2012-04-16 21:11:01','2012-04-16 21:29:38',NULL,1,NULL,'Aussie Golfing Limited','ABC Suppliers','Bob Smith','Marketing and Brand Manager',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
    (2,2,0,'2012-06-04 19:06:54','2012-06-04 19:06:54',NULL,2,NULL,'Tiger Woods','ABC Suppliers','Bob Smith','Marketing and Brand Manager','+61 987 654 321','0800 TIGERGOLF','+61 9 222 2222','0800 ABC ABC','tiger.woods@tgerwoodsgolfing.com','www.tigerwoods.com','Level 123','123 SomeReallyLongName Street','Greenlane','Auckland','North Island','New Zealand','1234',NULL,NULL,NULL,'Level 12','PO Box 123ABC456DEF','Greenlane','Auckland','NI','New Zealand','7894',NULL,NULL,'','',0.000000000000,0.000000000000,0,'','www.facebook.com/tigerwoods','twitter.com/tigerwoods','linkedin.com/tigerwoods','youtube.com/tigerwoods','www.fousquare.com/tigerwoodsglofing'),
    (3,3,0,'2012-04-22 21:00:57','2012-06-06 10:50:58',NULL,3,NULL,'Jason\'s Golf Guide NZ','ABC Suppliers','Jason Liddiard','Marketing and Brand Manager',NULL,NULL,NULL,NULL,NULL,NULL,'','48 Mount Taylor Drive','Glendowie','Auckland','Auckland Region','New Zealand','1071','Get the best golfing guides from Jason\'s!','Want to find out where the best golf courses in New Zealand are?\n\nWant to learn the best times to tee off on some of the busiest courses?\n\nThen you are looking for Jason\'s Golf Guide.','Started by Jason back in 1999, Jason prides himself on getting the best golf guide for NZ together every year. Travelling around the country and playing on every course, accuracy and factual information is guarnteed. ','','PO Box 123 45','Greenlane','Auckland','North Island','New Zealand','1740',NULL,NULL,'.1.4.9.b.1B','',-36.864788055420,174.862731933594,15,'48 Mount Taylor Drive, Glendowie, Auckland 1071',NULL,NULL,NULL,NULL,NULL),
    (4,4,0,'2012-04-23 19:02:01','2012-05-14 21:58:31',NULL,4,NULL,'Tom','ABC Suppliers','','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(5,5,1,'2012-05-01 06:31:59','2012-05-19 11:51:02','UPDATE',5,NULL,'Tom Jones Golfing Shop','Tom\'s Really Awesome Golfing Shop for Australia','','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
    (6,6,0,'2012-04-23 21:30:40','2012-05-23 21:35:36',NULL,6,NULL,'Harry Potter','Harry Potter Suppliers','','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
    (7,7,0,'2012-05-14 07:34:38','2012-06-12 22:18:31',NULL,7,NULL,'John Smith','ABC Suppliers','John Smith','Marketing Director',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'This is the best company ever!','','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
    (8,8,0,'2012-05-14 18:34:33','2012-05-23 22:47:01',NULL,8,NULL,'Michael Campbell','Michael Campbell Ltd','Michael Campbell','Director',NULL,NULL,NULL,NULL,NULL,NULL,'','48 Abbot Street','Gonville','Wanganui','Manawatu-Wanganui Region','New Zealand','4501','fdsfsd','fsdfds','sdfsdf',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'.6.2A.6.1.1','',-39.941970825195,175.022781372070,15,'48 Abbot Street, Gonville, Wanganui 4501',NULL,NULL,NULL,NULL,NULL),
    (9,9,2,'2012-05-29 06:45:02','2012-05-29 06:45:02',NULL,1,0,'Aussie Golfing Limited','ABC Suppliers','Bob Smith','Marketing and Brand Manager','','','','','','','','','','','0','','0',NULL,'',NULL,'','','','','','','','0','0','0','0',0.000000000000,0.000000000000,0,'0',NULL,NULL,NULL,NULL,NULL),
    (10,10,0,'2012-05-29 06:45:02','2012-05-29 06:45:02',NULL,2,0,'Tiger Woods','ABC Suppliers','Bob Smith','Marketing and Brand Manager','+61 987 654 321','0800 TIGERGOLF','+61 9 222 2222','0800 ABC ABC','tiger.woods@tgerwoodsgolfing.com','www.tigerwoods.com','Level 123','123 SomeReallyLongName Street','Greenlane','Auckland','North Island','New Zealand','1234',NULL,'',NULL,'Level 12','PO Box 123ABC456DEF','Greenlane','Auckland','NI','New Zealand','7894','0','0','0','0',0.000000000000,0.000000000000,0,'0',NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `tpl_shadow_supplier` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `tpl_shadow_supplier_branch`
--

LOCK TABLES `tpl_shadow_supplier_branch` WRITE;
/*!40000 ALTER TABLE `tpl_shadow_supplier_branch` DISABLE KEYS */;
REPLACE INTO `tpl_shadow_supplier_branch` (`REC_ID`, `SHADOW_SUPPLIER_REC_ID`, `MASTER_REC_ID`, `REC_DATETIME`, `REC_TIMESTAMP`, `REC_ACTION`, `SUPPLIER_REC_ID`, `ORDER`, `NAME`, `TELEPHONE_NO`, 
`FREE_TELEPHONE_NO`, `FAX_NO`, `FREE_FAX_NO`, `EMAIL_ADDRESS`, `PHYSICAL_ADDRESS_BUILDING_ADDRESS`, `PHYSICAL_ADDRESS_STREET_ADDRESS`, `PHYSICAL_ADDRESS_SUBURB`, 
`PHYSICAL_ADDRESS_CITY`, `PHYSICAL_ADDRESS_STATE`, `PHYSICAL_ADDRESS_COUNTRY`, `PHYSICAL_ADDRESS_POST_CODE`, `PHYSICAL_ADDRESS_PXID`, `PHYSICAL_ADDRESS_DPID`, 
`PHYSICAL_ADDRESS_LATITUDE`, `PHYSICAL_ADDRESS_LONGITUDE`, `PHYSICAL_ADDRESS_HEIGHT`, `PHYSICAL_ADDRESS_COMPLETE`, `POSTAL_ADDRESS_BUILDING_ADDRESS`, 
`POSTAL_ADDRESS_STREET_ADDRESS`, `POSTAL_ADDRESS_SUBURB`, `POSTAL_ADDRESS_CITY`, `POSTAL_ADDRESS_STATE`, `POSTAL_ADDRESS_COUNTRY`, `POSTAL_ADDRESS_POST_CODE`, 
`FACEBOOK_ADDRESS_URL`, `TWITTER_ADDRESS_URL`, `LINKEDIN_ADDRESS_URL`, `YOUTUBE_ADDRESS_URL`, `FOURSQUARE_ADDRESS_URL`) 
VALUES 
    (1,1,0,'2012-04-17 18:13:33','2012-04-17 18:13:33','INSERT',0,NULL,'Hamilton','',NULL,'',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Level 12','PO Box 12345','Greenlane','Auckland','NSW','New Zealand','1182',NULL,NULL,NULL,NULL,NULL),
    (2,1,0,'2012-05-15 21:35:11','2012-05-15 21:35:11','INSERT',0,NULL,'Auckland','+64 9 222 2222',NULL,'+64 9 222 2222',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Level 6','66 Wyndham Street','Centeral Auckland','Auckland','AKL','New Zealand','1234',NULL,NULL,NULL,NULL,NULL),
    (3,4,0,'2012-05-19 13:07:27','2012-05-19 13:07:27','INSERT',0,NULL,'Hamilton','',NULL,'',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','1182',NULL,NULL,NULL,NULL,NULL),
    (4,4,0,'2012-05-19 13:07:44','2012-05-19 13:07:44','INSERT',0,NULL,'Hamilton22222222','',NULL,'',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','1182',NULL,NULL,NULL,NULL,NULL),
    (5,2,12,'2012-06-04 19:06:54','2012-06-04 19:06:54','INSERT',7,NULL,'Hamilton','',NULL,'',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','1182',NULL,NULL,NULL,NULL,NULL),
    (6,2,12,'2012-06-04 19:06:54','2012-06-04 19:06:54','INSERT',7,NULL,'Auckland','+64 9 222 2222',NULL,'+64 9 222 2222',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Level 8','456 Queens St','Central','Auckland','NI','New Zealand','8522',NULL,NULL,NULL,NULL,NULL),
    (7,2,12,'2012-06-04 19:06:54','2012-06-04 19:06:54','INSERT',7,NULL,'Hamilton','+64 9 1111 1111',NULL,'+64 9 1111 1111',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Level 12','PO Box 12345','Greenlane','Auckland','NI','New Zealand','1182',NULL,NULL,NULL,NULL,NULL),
    (8,8,0,'2012-05-23 22:13:44','2012-06-21 22:45:28','INSERT',0,NULL,'undefined','+64 4 123 45655',NULL,'+64 9 123 4567',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Level 12','456 Queens St','Mount Manganui','Auckland','North Island','New Zealand','1254',NULL,NULL,NULL,NULL,NULL),
    (9,9,1,'2012-05-29 06:45:02','2012-05-29 06:45:02','INSERT',2,0,'Hamilton','','','','','','','','','','0','','0',NULL,NULL,NULL,NULL,NULL,NULL,'0','0','0','0','0','0','Level 12',NULL,NULL,NULL,NULL,NULL),
    (10,9,2,'2012-05-29 06:45:02','2012-05-29 06:45:02','INSERT',2,0,'Auckland','+64 9 222 2222','','+64 9 222 2222','','','','','','','0','','0',NULL,NULL,NULL,NULL,NULL,NULL,'0','0','0','0','0','0','Level 6',NULL,NULL,NULL,NULL,NULL),
    (11,10,7,'2012-05-29 06:45:02','2012-05-29 06:45:02','INSERT',5,0,'Auckland','+64 9 222 2222','','+64 9 222 2222','','','','','','','0','','0',NULL,NULL,NULL,NULL,NULL,NULL,'0','0','0','0','0','0','Level 8',NULL,NULL,NULL,NULL,NULL),
    (12,10,8,'2012-05-29 06:45:02','2012-05-29 06:45:02','INSERT',5,0,'Hamilton','+64 9 1111 1111','','+64 9 1111 1111','','','','','','','0','','0',NULL,NULL,NULL,NULL,NULL,NULL,'0','0','0','0','0','0','Level 12',NULL,NULL,NULL,NULL,NULL),
    (13,8,0,'2012-06-21 12:11:23','2012-06-21 12:31:28','INSERT',0,NULL,'Tauranga','+64 9 222 2222',NULL,'+64 9 123 4567',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'','','Mount Manganui','','North Island','New Zealand','1254',NULL,NULL,NULL,NULL,NULL),
    (14,8,0,'2012-06-21 12:26:29','2012-06-21 12:32:35','INSERT',0,NULL,'Wellington','+64 4 123 45655',NULL,'+64 4 444 4444',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'','888 Parliment Avenue','Hopetown','Wellington','','','1234',NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `tpl_shadow_supplier_branch` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `tpl_shadow_supplier_branch_key_personnel`
--

LOCK TABLES `tpl_shadow_supplier_branch_key_personnel` WRITE;
/*!40000 ALTER TABLE `tpl_shadow_supplier_branch_key_personnel` DISABLE KEYS */;
/*!40000 ALTER TABLE `tpl_shadow_supplier_branch_key_personnel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `tpl_shadow_supplier_brand`
--

LOCK TABLES `tpl_shadow_supplier_brand` WRITE;
/*!40000 ALTER TABLE `tpl_shadow_supplier_brand` DISABLE KEYS */;
REPLACE INTO `tpl_shadow_supplier_brand` (`REC_ID`, `SHADOW_ROOT_REC_ID`, `MASTER_REC_ID`, `REC_DATETIME`, `REC_TIMESTAMP`, `REC_ACTION`, `SUPPLIER_REC_ID`, `BRAND_REC_ID`, `IS_LOGO_LISTING`) 
VALUES 
    (1,1,0,'2012-04-21 17:23:19','2012-04-21 17:23:19','INSERT',0,1,1),
    (2,9,0,'2012-05-29 06:45:02','2012-05-29 06:45:02','INSERT',2,1,1),
    (3,12,0,'2012-05-29 06:57:44','2012-05-29 06:57:44','INSERT',2,1,1),
    (4,15,0,'2012-06-19 09:22:13','2012-06-19 09:22:13','INSERT',2,1,1),
    (5,8,0,'2012-06-21 13:56:19','2012-06-21 13:57:01','INSERT',0,1,1),
    (6,8,0,'2012-06-21 13:56:47','2012-06-21 13:56:47','INSERT',0,1,1),
    (7,8,0,'2012-06-21 13:57:07','2012-06-21 13:57:23','INSERT',0,2,1),
    (8,8,0,'2012-06-21 13:57:24','2012-06-21 13:57:24','INSERT',0,2,1),
    (9,8,0,'2012-06-21 14:19:15','2012-06-21 14:19:15','INSERT',0,3,1),
    (10,8,0,'2012-06-21 14:19:15','2012-06-21 14:19:15','INSERT',0,3,1);
/*!40000 ALTER TABLE `tpl_shadow_supplier_brand` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `tpl_shadow_supplier_directory`
--

LOCK TABLES `tpl_shadow_supplier_directory` WRITE;
/*!40000 ALTER TABLE `tpl_shadow_supplier_directory` DISABLE KEYS */;
/*!40000 ALTER TABLE `tpl_shadow_supplier_directory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `tpl_shadow_supplier_distributor`
--

LOCK TABLES `tpl_shadow_supplier_distributor` WRITE;
/*!40000 ALTER TABLE `tpl_shadow_supplier_distributor` DISABLE KEYS */;
REPLACE INTO `tpl_shadow_supplier_distributor` (`REC_ID`, `SHADOW_ROOT_REC_ID`, `MASTER_REC_ID`, `REC_DATETIME`, `REC_TIMESTAMP`, `REC_ACTION`, `SUPPLIER_REC_ID`, `NAME`, `ORDER`, `TELEPHONE_NO`) 
VALUES 
    (1,1,0,'2012-04-21 17:23:07','2012-04-21 17:23:07','INSERT',0,'Mainline Distributors',NULL,'+64 9 222 2222'),
    (2,1,0,'2012-05-19 09:52:46','2012-05-19 09:52:51','DELETE',0,'Mainline Distributors',NULL,''),
    (3,1,0,'2012-05-19 09:52:57','2012-05-19 09:52:57','INSERT',0,'Mainline Distributors',NULL,'+64 9 222 2222'),
    (4,2,0,'2012-05-20 16:02:40','2012-05-20 16:02:40','INSERT',7,'T.Woods Distrubtors',NULL,'+61 123456789'),
    (5,8,0,'2012-05-23 22:19:03','2012-05-23 22:19:03','INSERT',0,'Mainline Distributors',NULL,'+64 9 222 2222'),
    (6,8,0,'2012-05-23 22:19:23','2012-05-23 22:19:23','INSERT',0,'Quick One Distributors',NULL,'09 222 2222'),
    (7,8,0,'2012-05-23 22:19:47','2012-05-23 22:19:47','INSERT',0,'Southland Distributors',NULL,'+64 123456789');
/*!40000 ALTER TABLE `tpl_shadow_supplier_distributor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `tpl_shadow_supplier_key_personnel`
--

LOCK TABLES `tpl_shadow_supplier_key_personnel` WRITE;
/*!40000 ALTER TABLE `tpl_shadow_supplier_key_personnel` DISABLE KEYS */;
REPLACE INTO `tpl_shadow_supplier_key_personnel` (`REC_ID`, `SHADOW_ROOT_REC_ID`, `MASTER_REC_ID`, `REC_DATETIME`, `REC_TIMESTAMP`, `REC_ACTION`, `SUPPLIER_REC_ID`, `ORDER`, `NAME`, `POSITION`, `TELEPHONE_NO`, 
`FAX_NO`, `EMAIL_ADDRESS`, `PHYSICAL_ADDRESS_BUILDING_ADDRESS`, `PHYSICAL_ADDRESS_STREET_ADDRESS`, `PHYSICAL_ADDRESS_SUBURB`, `PHYSICAL_ADDRESS_CITY`, `PHYSICAL_ADDRESS_STATE`, 
`PHYSICAL_ADDRESS_COUNTRY`, `PHYSICAL_ADDRESS_POST_CODE`, `POSTAL_ADDRESS_BUILDING_ADDRESS`, `POSTAL_ADDRESS_STREET_ADDRESS`, `POSTAL_ADDRESS_SUBURB`, `POSTAL_ADDRESS_CITY`, 
`POSTAL_ADDRESS_STATE`, `POSTAL_ADDRESS_COUNTRY`, `POSTAL_ADDRESS_POST_CODE`) 
VALUES 
    (1,1,0,'2012-04-21 17:22:53','2012-05-15 21:45:13','UPDATE',0,NULL,'Bob Smith','Brand Manager','+64 9 222 222','+64 9 222 2222','bob@aussiegolfing.com.au',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Level 12','PO Box 12345','Greenlane','Auckland',NULL,'New Zealand','1182'),
    (2,9,1,'2012-05-29 06:45:02','2012-05-29 06:45:02',NULL,2,0,'Bob Smith','Brand Manager','+64 9 222 222','+64 9 222 2222','bob@aussiegolfing.com.au','','','','','0','','0','0','0','0','0','0','0','Level 12'),
    (5,12,1,'2012-05-29 06:57:44','2012-05-29 06:57:44',NULL,2,0,'Bob Smith','Brand Manager','+64 9 222 222','+64 9 222 2222','bob@aussiegolfing.com.au','','','','','0','','0','0','0','0','0','0','0','Level 12'),
    (6,15,1,'2012-06-19 09:22:13','2012-06-19 09:22:13',NULL,2,0,'Bob Smith','Brand Manager','+64 9 222 222','+64 9 222 2222','bob@aussiegolfing.com.au','','','','','0','','0','0','0','0','0','0','0','Level 12');
/*!40000 ALTER TABLE `tpl_shadow_supplier_key_personnel` ENABLE KEYS */;
UNLOCK TABLES;
--
-- Dumping data for table `tpl_shadow_supplier_category`
--
LOCK TABLES `tpl_shadow_supplier_category` WRITE;
/*!40000 ALTER TABLE `tpl_shadow_supplier_category` DISABLE KEYS */;
REPLACE INTO `tpl_shadow_supplier_category` (`REC_ID`, `SHADOW_ROOT_REC_ID`, `MASTER_REC_ID`, `REC_DATETIME`, `REC_TIMESTAMP`, `REC_ACTION`, `SHADOW_SUPPLIER_REC_ID`, `CATEGORY_REC_ID`, `IS_LOGO_LISTING`) 
VALUES 
    (1,5,1,'2012-05-01 06:31:59','2012-05-01 06:31:59',NULL,1,2,1),
    (2,5,1,'2012-05-01 06:31:59','2012-05-01 06:31:59',NULL,1,3,NULL),
    (3,4,0,'2012-05-15 20:26:12','2012-05-15 20:26:12','INSERT',0,4,NULL),
    (4,1,0,'2012-05-15 21:17:36','2012-05-15 21:17:45','UPDATE',0,4,1),
    (5,1,0,'2012-05-15 21:17:37','2012-05-15 21:17:45','UPDATE',0,7,1),
    (6,1,0,'2012-05-15 21:17:38','2012-05-15 21:17:46','UPDATE',0,6,1),
    (7,1,0,'2012-05-15 21:17:38','2012-05-15 21:17:46','UPDATE',0,5,1),
    (8,1,0,'2012-05-15 21:17:38','2012-05-15 21:17:47','UPDATE',0,8,1),
    (9,1,0,'2012-05-15 21:17:39','2012-05-15 21:17:47','UPDATE',0,1,1),
    (10,5,1,'2012-05-19 11:51:59','2012-05-19 11:51:59','INSERT',1,4,NULL),
    (11,5,1,'2012-05-19 11:52:00','2012-05-19 11:52:00','INSERT',1,7,NULL),
    (12,5,1,'2012-05-19 11:52:00','2012-05-19 11:52:00','INSERT',1,6,NULL),
    (13,5,1,'2012-05-19 11:52:01','2012-05-19 11:52:01','INSERT',1,5,NULL),
    (14,5,1,'2012-05-19 11:52:02','2012-05-19 11:52:02','INSERT',1,8,NULL),
    (15,5,1,'2012-05-19 11:52:03','2012-05-19 11:52:03','INSERT',1,1,NULL),
    (16,2,7,'2012-06-04 19:06:54','2012-06-04 19:06:54',NULL,7,4,NULL),
    (17,2,7,'2012-06-04 19:06:54','2012-06-04 19:06:54',NULL,7,7,NULL),
    (18,9,3,'2012-05-29 06:45:02','2012-05-29 06:45:02',NULL,2,4,1)
    ,(19,9,4,'2012-05-29 06:45:02','2012-05-29 06:45:02',NULL,2,7,1),
    (20,9,5,'2012-05-29 06:45:02','2012-05-29 06:45:02',NULL,2,6,1),
    (21,9,6,'2012-05-29 06:45:02','2012-05-29 06:45:02',NULL,2,5,1),
    (22,9,7,'2012-05-29 06:45:02','2012-05-29 06:45:02',NULL,2,8,1),
    (23,9,8,'2012-05-29 06:45:02','2012-05-29 06:45:02',NULL,2,1,1),
    (24,10,21,'2012-05-29 06:45:02','2012-05-29 06:45:02',NULL,5,4,0),
    (25,10,22,'2012-05-29 06:45:02','2012-05-29 06:45:02',NULL,5,7,0),
    (26,11,1,'2012-05-29 06:45:03','2012-05-29 06:45:03',NULL,1,2,1),
    (27,11,2,'2012-05-29 06:45:03','2012-05-29 06:45:03',NULL,1,3,0),
    (28,12,3,'2012-05-29 06:57:44','2012-05-29 06:57:44',NULL,2,4,1),
    (29,12,4,'2012-05-29 06:57:44','2012-05-29 06:57:44',NULL,2,7,1),
    (30,12,5,'2012-05-29 06:57:44','2012-05-29 06:57:44',NULL,2,6,1),
    (31,12,6,'2012-05-29 06:57:44','2012-05-29 06:57:44',NULL,2,5,1),
    (32,12,7,'2012-05-29 06:57:44','2012-05-29 06:57:44',NULL,2,8,1),
    (33,12,8,'2012-05-29 06:57:44','2012-05-29 06:57:44',NULL,2,1,1),
    (34,13,21,'2012-05-29 06:57:44','2012-05-29 06:57:44',NULL,5,4,0),
    (35,13,22,'2012-05-29 06:57:44','2012-05-29 06:57:44',NULL,5,7,0),
    (36,14,1,'2012-05-29 06:57:44','2012-05-29 06:57:44',NULL,1,2,1),
    (37,14,2,'2012-05-29 06:57:44','2012-05-29 06:57:44',NULL,1,3,0),
    (38,3,0,'2012-06-06 10:51:54','2012-06-06 10:51:54','INSERT',0,4,NULL),
    (39,3,0,'2012-06-06 10:51:54','2012-06-06 10:51:54','INSERT',0,7,NULL),
    (40,3,0,'2012-06-06 10:51:55','2012-06-06 10:51:55','INSERT',0,6,NULL),
    (41,3,0,'2012-06-06 10:51:55','2012-06-06 10:51:55','INSERT',0,5,NULL),
    (42,3,0,'2012-06-06 10:51:56','2012-06-06 10:51:56','INSERT',0,8,NULL),
    (43,15,3,'2012-06-19 09:22:13','2012-06-19 09:22:13',NULL,2,4,1),
    (44,15,4,'2012-06-19 09:22:13','2012-06-19 09:22:13',NULL,2,7,1),
    (45,15,5,'2012-06-19 09:22:13','2012-06-19 09:22:13',NULL,2,6,1),
    (46,15,6,'2012-06-19 09:22:13','2012-06-19 09:22:13',NULL,2,5,1),
    (47,15,7,'2012-06-19 09:22:13','2012-06-19 09:22:13',NULL,2,8,1),
    (48,15,8,'2012-06-19 09:22:13','2012-06-19 09:22:13',NULL,2,1,1),
    (49,16,21,'2012-06-19 09:22:14','2012-06-19 09:22:14',NULL,5,4,0),
    (50,16,22,'2012-06-19 09:22:14','2012-06-19 09:22:14',NULL,5,7,0),
    (51,17,1,'2012-06-19 09:22:14','2012-06-19 09:22:14',NULL,1,2,1),
    (52,17,2,'2012-06-19 09:22:14','2012-06-19 09:22:14',NULL,1,3,0),
    (53,7,0,'2012-07-22 21:46:15','2012-07-22 21:46:17','DELETE',0,4,0);
/*!40000 ALTER TABLE `tpl_shadow_supplier_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `tpl_supplier`
--

LOCK TABLES `tpl_supplier` WRITE;
/*!40000 ALTER TABLE `tpl_supplier` DISABLE KEYS */;
REPLACE INTO `tpl_supplier` (`REC_ID`, `REC_DATETIME`, `REC_TIMESTAMP`, `CLIENT_REC_ID`, `SUPPLIER_TYPE_REC_ID`, `NAME`, `TRADING_AS_NAME`, `CONTACT_NAME`, `CONTACT_POSITION`, `TELEPHONE_NO`, `FREE_TELEPHONE_NO`, 
`FAX_NO`, `FREE_FAX_NO`, `EMAIL_ADDRESS`, `WEBSITE_ADDRESS`, `PHYSICAL_ADDRESS_BUILDING_ADDRESS`, `PHYSICAL_ADDRESS_STREET_ADDRESS`, `PHYSICAL_ADDRESS_SUBURB`, `PHYSICAL_ADDRESS_CITY`, `PHYSICAL_ADDRESS_STATE`, 
`PHYSICAL_ADDRESS_COUNTRY`, `PHYSICAL_ADDRESS_POST_CODE`, `COMPANY_STRAPLINE_TEXT`, `COMPANY_PROFILE_TEXT`, `COMPANY_ABOUTUS_TEXT`, `PHYSICAL_ADDRESS_PXID`, `PHYSICAL_ADDRESS_DPID`, `PHYSICAL_ADDRESS_LATITUDE`, 
`PHYSICAL_ADDRESS_LONGITUDE`, `PHYSICAL_ADDRESS_HEIGHT`, `PHYSICAL_ADDRESS_COMPLETE`, `POSTAL_ADDRESS_BUILDING_ADDRESS`, `POSTAL_ADDRESS_STREET_ADDRESS`, `POSTAL_ADDRESS_SUBURB`, `POSTAL_ADDRESS_CITY`, 
`POSTAL_ADDRESS_STATE`, `POSTAL_ADDRESS_COUNTRY`, `POSTAL_ADDRESS_POST_CODE`, `PRINT_LOGO_LOCATION`, `WEB_LOGO_LOCATION`, `FACEBOOK_ADDRESS_URL`, `TWITTER_ADDRESS_URL`, `LINKEDIN_ADDRESS_URL`, 
`YOUTUBE_ADDRESS_URL`, `FOURSQUARE_ADDRESS_URL`) 
VALUES 
    (1,'2012-04-23 20:32:15','2012-04-28 17:32:10',5,NULL,'Tom\'s Golfing Shop','Tom\'s Really Awesome Golfing Shop for Australia','','','','','','','','','','','','','0','','0',NULL,'',NULL,'0','0',0.000000000000,0.000000000000,0,'0','','','','','','','','','',NULL,NULL,NULL,NULL,NULL),
    (2,'2012-04-16 21:11:01','2012-04-16 21:29:38',1,NULL,'Aussie Golfing Limited','ABC Suppliers','Bob Smith','Marketing and Brand Manager','','','','','','','','','','','0','','0',NULL,'',NULL,'0','0',0.000000000000,0.000000000000,0,'0','','','','','','','','','',NULL,NULL,NULL,NULL,NULL),
    (3,'2012-04-16 21:11:01','2012-04-16 21:29:38',1,NULL,'Aussie Golfing Limited','ABC Suppliers','Bob Smith','Marketing and Brand Manager','','','','','','','','','','','0','','0',NULL,'',NULL,'0','0',0.000000000000,0.000000000000,0,'0','','','','','','','','','',NULL,NULL,NULL,NULL,NULL),
    (4,'2012-04-16 21:11:01','2012-04-16 21:29:38',1,NULL,'Aussie Golfing Limited','ABC Suppliers','Bob Smith','Marketing and Brand Manager','','','','','','','','','','','0','','0',NULL,'',NULL,'0','0',0.000000000000,0.000000000000,0,'0','','','','','','','','','',NULL,NULL,NULL,NULL,NULL),
    (5,'2012-04-21 13:03:45','2012-05-20 16:10:22',2,NULL,'Tiger Woods','ABC Suppliers','Bob Smith','Marketing and Brand Manager','+61 987 654 321','0800 TIGERGOLF','+61 9 222 2222','0800 ABC ABC','tiger.woods@tgerwoodsgolfing.com','www.tigerwoods.com','Level 123','123 SomeReallyLongName Street','Greenlane','Auckland','North Island','New Zealand','1234',NULL,'',NULL,'0','0',0.000000000000,0.000000000000,0,'0','Level 12','PO Box 123ABC456DEF','Greenlane','Auckland','NI','New Zealand','7894','','',NULL,NULL,NULL,NULL,NULL),
    (6,'2012-04-16 21:11:01','2012-04-16 21:29:38',1,NULL,'Aussie Golfing Limited','ABC Suppliers','Bob Smith','Marketing and Brand Manager','','','','','','','','','','','0','','0',NULL,'',NULL,'0','0',0.000000000000,0.000000000000,0,'0','','','','','','','','','',NULL,NULL,NULL,NULL,NULL),
    (7,'2012-04-21 13:03:45','2012-05-20 16:10:22',2,NULL,'Tiger Woods','ABC Suppliers','Bob Smith','Marketing and Brand Manager','+61 987 654 321','0800 TIGERGOLF','+61 9 222 2222','0800 ABC ABC','tiger.woods@tgerwoodsgolfing.com','www.tigerwoods.com','Level 123','123 SomeReallyLongName Street','Greenlane','Auckland','North Island','New Zealand','1234',NULL,'',NULL,'0','0',0.000000000000,0.000000000000,0,'0','Level 12','PO Box 123ABC456DEF','Greenlane','Auckland','NI','New Zealand','7894','','',NULL,NULL,NULL,NULL,NULL),
    (8,'2012-04-16 21:11:01','2012-04-16 21:29:38',1,NULL,'Aussie Golfing Limited','ABC Suppliers','Bob Smith','Marketing and Brand Manager','','','','','','','','','','','0','','0',NULL,'',NULL,'0','0',0.000000000000,0.000000000000,0,'0','','','','','','','','','',NULL,NULL,NULL,NULL,NULL),
    (9,'2012-04-16 21:11:01','2012-04-16 21:29:38',1,NULL,'Aussie Golfing Limited','ABC Suppliers','Bob Smith','Marketing and Brand Manager','','','','','','','','','','','0','','0',NULL,'',NULL,'0','0',0.000000000000,0.000000000000,0,'0','','','','','','','','','',NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `tpl_supplier` ENABLE KEYS */;
UNLOCK TABLES;
--
-- Dumping data for table `tpl_supplier_accreditations`
--
LOCK TABLES `tpl_supplier_accreditations` WRITE;
/*!40000 ALTER TABLE `tpl_supplier_accreditations` DISABLE KEYS */;
REPLACE INTO `tpl_supplier_accreditations` (`REC_ID`, `REC_DATETIME`, `REC_TIMESTAMP`, `NAME`, `TYPE`, `DATE_ACHIEVED`, `ISSUED_BY`, `YEAR_WON`, `CERTIFICATE_NUMBER`, `ACCRED_LOGO_URL`, `ACCRED_LOGO_LINK`, `SUPPLIER_REC_ID`) 
VALUES 
    (1,'2012-06-21 12:54:30','2012-06-21 12:54:30','Golfing Excellence Award',' Degree','2012-06-01 00:00:00','Professional Golfing Association',127,'12345','http://www.pg.com/images/logo.gif','http://www.pg.com',8),
    (2,'2012-06-21 13:51:01','2012-06-21 13:51:01','PGA2',' Degree','2012-06-01 00:00:00','  ',127,'  ','  ','',8);
/*!40000 ALTER TABLE `tpl_supplier_accreditations` ENABLE KEYS */;
UNLOCK TABLES;
--
-- Dumping data for table `tpl_supplier_awards`
--
LOCK TABLES `tpl_supplier_awards` WRITE;
/*!40000 ALTER TABLE `tpl_supplier_awards` DISABLE KEYS */;
REPLACE INTO `tpl_supplier_awards` (`REC_ID`, `REC_DATETIME`, `REC_TIMESTAMP`, `NAME`, `ISSUED_BY`, `YEAR_WON`, `AWARD_LOGO_URL`, `AWARD_LOGO_LINK`, `SUPPLIER_REC_ID`) 
VALUES 
    (1,'2012-05-15 20:20:12','2012-05-15 20:20:12','Gold','TVNZ',2012,'','',4),
    (2,'2012-06-21 11:31:52','2012-06-21 11:31:52','PGA','PGA',2011,'','',8),
    (3,'2012-06-21 11:56:46','2012-06-21 11:56:46','PGA2','PGA',2011,'','',8);
/*!40000 ALTER TABLE `tpl_supplier_awards` ENABLE KEYS */;
UNLOCK TABLES;
--
-- Dumping data for table `tpl_supplier_branch`
--
LOCK TABLES `tpl_supplier_branch` WRITE;
/*!40000 ALTER TABLE `tpl_supplier_branch` DISABLE KEYS */;
REPLACE INTO `tpl_supplier_branch` (`REC_ID`, `REC_DATETIME`, `REC_TIMESTAMP`, `SUPPLIER_REC_ID`, `ORDER`, `NAME`, `TELEPHONE_NO`, `FREE_TELEPHONE_NO`, `FAX_NO`, `FREE_FAX_NO`, `EMAIL_ADDRESS`, `PHYSICAL_ADDRESS_BUILDING_ADDRESS`, 
`PHYSICAL_ADDRESS_STREET_ADDRESS`, `PHYSICAL_ADDRESS_SUBURB`, `PHYSICAL_ADDRESS_CITY`, `PHYSICAL_ADDRESS_STATE`, `PHYSICAL_ADDRESS_COUNTRY`, `PHYSICAL_ADDRESS_POST_CODE`, `PHYSICAL_ADDRESS_PXID`, `PHYSICAL_ADDRESS_DPID`, 
`PHYSICAL_ADDRESS_LATITUDE`, `PHYSICAL_ADDRESS_LONGITUDE`, `PHYSICAL_ADDRESS_HEIGHT`, `PHYSICAL_ADDRESS_COMPLETE`, `POSTAL_ADDRESS_BUILDING_ADDRESS`, `POSTAL_ADDRESS_STREET_ADDRESS`, `POSTAL_ADDRESS_SUBURB`, 
`POSTAL_ADDRESS_CITY`, `POSTAL_ADDRESS_STATE`, `POSTAL_ADDRESS_COUNTRY`, `POSTAL_ADDRESS_POST_CODE`, `FACEBOOK_ADDRESS_URL`, `TWITTER_ADDRESS_URL`, `LINKEDIN_ADDRESS_URL`, `YOUTUBE_ADDRESS_URL`, `FOURSQUARE_ADDRESS_URL`) 
VALUES 
    (1,'2012-04-17 18:13:33','2012-04-17 18:13:33',2,NULL,'Hamilton','','','','','','','','','','0','','0',NULL,NULL,NULL,NULL,NULL,NULL,'0','0','0','0','0','0','Level 12',NULL,NULL,NULL,NULL,NULL),
    (2,'2012-05-15 21:35:11','2012-05-15 21:35:11',2,NULL,'Auckland','+64 9 222 2222','','+64 9 222 2222','','','','','','','0','','0',NULL,NULL,NULL,NULL,NULL,NULL,'0','0','0','0','0','0','Level 6',NULL,NULL,NULL,NULL,NULL),
    (3,'2012-04-17 18:13:33','2012-04-17 18:13:33',3,NULL,'Hamilton','','','','','','','','','','0','','0',NULL,NULL,NULL,NULL,NULL,NULL,'0','0','0','0','0','0','Level 12',NULL,NULL,NULL,NULL,NULL),
    (4,'2012-05-15 21:35:11','2012-05-15 21:35:11',3,NULL,'Auckland','+64 9 222 2222','','+64 9 222 2222','','','','','','','0','','0',NULL,NULL,NULL,NULL,NULL,NULL,'0','0','0','0','0','0','Level 6',NULL,NULL,NULL,NULL,NULL),
    (5,'2012-04-17 18:13:33','2012-04-17 18:13:33',4,NULL,'Hamilton','','','','','','','','','','0','','0',NULL,NULL,NULL,NULL,NULL,NULL,'0','0','0','0','0','0','Level 12',NULL,NULL,NULL,NULL,NULL),
    (6,'2012-05-15 21:35:11','2012-05-15 21:35:11',4,NULL,'Auckland','+64 9 222 2222','','+64 9 222 2222','','','','','','','0','','0',NULL,NULL,NULL,NULL,NULL,NULL,'0','0','0','0','0','0','Level 6',NULL,NULL,NULL,NULL,NULL),
    (7,'2012-05-20 18:44:41','2012-05-20 18:44:41',5,NULL,'Auckland','+64 9 222 2222','','+64 9 222 2222','','','','','','','0','','0',NULL,NULL,NULL,NULL,NULL,NULL,'0','0','0','0','0','0','Level 8',NULL,NULL,NULL,NULL,NULL),
    (8,'2012-05-20 18:45:45','2012-05-20 18:45:45',5,NULL,'Hamilton','+64 9 1111 1111','','+64 9 1111 1111','','','','','','','0','','0',NULL,NULL,NULL,NULL,NULL,NULL,'0','0','0','0','0','0','Level 12',NULL,NULL,NULL,NULL,NULL),
    (9,'2012-04-17 18:13:33','2012-04-17 18:13:33',6,NULL,'Hamilton','','','','','','','','','','0','','0',NULL,NULL,NULL,NULL,NULL,NULL,'0','0','0','0','0','0','Level 12',NULL,NULL,NULL,NULL,NULL),
    (10,'2012-05-15 21:35:11','2012-05-15 21:35:11',6,NULL,'Auckland','+64 9 222 2222','','+64 9 222 2222','','','','','','','0','','0',NULL,NULL,NULL,NULL,NULL,NULL,'0','0','0','0','0','0','Level 6',NULL,NULL,NULL,NULL,NULL),
    (11,'2012-05-20 18:44:41','2012-05-20 18:44:41',7,NULL,'Auckland','+64 9 222 2222','','+64 9 222 2222','','','','','','','0','','0',NULL,NULL,NULL,NULL,NULL,NULL,'0','0','0','0','0','0','Level 8',NULL,NULL,NULL,NULL,NULL),
    (12,'2012-05-20 18:45:45','2012-05-20 18:45:45',7,NULL,'Hamilton','+64 9 1111 1111','','+64 9 1111 1111','','','','','','','0','','0',NULL,NULL,NULL,NULL,NULL,NULL,'0','0','0','0','0','0','Level 12',NULL,NULL,NULL,NULL,NULL),
    (13,'2012-04-17 18:13:33','2012-04-17 18:13:33',8,NULL,'Hamilton','','','','','','','','','','0','','0',NULL,NULL,NULL,NULL,NULL,NULL,'0','0','0','0','0','0','Level 12',NULL,NULL,NULL,NULL,NULL),
    (14,'2012-05-15 21:35:11','2012-05-15 21:35:11',8,NULL,'Auckland','+64 9 222 2222','','+64 9 222 2222','','','','','','','0','','0',NULL,NULL,NULL,NULL,NULL,NULL,'0','0','0','0','0','0','Level 6',NULL,NULL,NULL,NULL,NULL),
    (15,'2012-04-17 18:13:33','2012-04-17 18:13:33',9,NULL,'Hamilton','','','','','','','','','','0','','0',NULL,NULL,NULL,NULL,NULL,NULL,'0','0','0','0','0','0','Level 12',NULL,NULL,NULL,NULL,NULL),
    (16,'2012-05-15 21:35:11','2012-05-15 21:35:11',9,NULL,'Auckland','+64 9 222 2222','','+64 9 222 2222','','','','','','','0','','0',NULL,NULL,NULL,NULL,NULL,NULL,'0','0','0','0','0','0','Level 6',NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `tpl_supplier_branch` ENABLE KEYS */;
UNLOCK TABLES;
--
-- Dumping data for table `tpl_supplier_branch_key_personnel`
--

LOCK TABLES `tpl_supplier_branch_key_personnel` WRITE;
/*!40000 ALTER TABLE `tpl_supplier_branch_key_personnel` DISABLE KEYS */;
/*!40000 ALTER TABLE `tpl_supplier_branch_key_personnel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `tpl_supplier_brand`
--

LOCK TABLES `tpl_supplier_brand` WRITE;
/*!40000 ALTER TABLE `tpl_supplier_brand` DISABLE KEYS */;
REPLACE INTO `tpl_supplier_brand` (`REC_ID`, `REC_DATETIME`, `REC_TIMESTAMP`, `SUPPLIER_REC_ID`, `BRAND_REC_ID`, `IS_LOGO_LISTING`) 
VALUES 
    (1,'2012-04-21 17:23:19','2012-04-21 17:23:19',2,1,1),
    (2,'2012-04-21 17:23:19','2012-04-21 17:23:19',3,1,1),
    (3,'2012-04-21 17:23:19','2012-04-21 17:23:19',4,1,1),
    (4,'2012-04-21 17:23:19','2012-04-21 17:23:19',6,1,1),
    (5,'2012-04-21 17:23:19','2012-04-21 17:23:19',8,1,1),
    (6,'2012-04-21 17:23:19','2012-04-21 17:23:19',9,1,1);
/*!40000 ALTER TABLE `tpl_supplier_brand` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `tpl_supplier_directory`
--

LOCK TABLES `tpl_supplier_directory` WRITE;
/*!40000 ALTER TABLE `tpl_supplier_directory` DISABLE KEYS */;
REPLACE INTO `tpl_supplier_directory` (`REC_ID`, `REC_DATETIME`, `REC_TIMESTAMP`, `SUPPLIER_REC_ID`, `DIRECTORY_REC_ID`, `DIRECTORY_YEAR`, `SHADOW_ROOT_REC_ID`) 
VALUES 
    (1,'2012-05-01 06:27:14','2012-05-01 06:27:14',1,2,'2012',5),
    (2,'2012-05-24 23:44:19','2012-05-24 23:44:19',2,2,'2012',1),
    (3,'2012-05-29 06:42:25','2012-05-29 06:42:25',3,2,'2012',1),
    (4,'2012-05-29 06:43:07','2012-05-29 06:43:07',4,2,'2012',1),
    (5,'2012-05-29 06:43:41','2012-05-29 06:43:41',5,2,'2012',2),
    (6,'2012-05-29 06:58:11','2012-05-29 06:58:11',6,2,'2012',1),
    (7,'2012-05-29 06:58:11','2012-05-29 06:58:11',7,2,'2012',2),
    (8,'2012-06-06 10:41:48','2012-06-06 10:41:48',8,2,'2012',1),
    (9,'2012-06-06 10:52:25','2012-06-06 10:52:25',9,2,'2012',1);
/*!40000 ALTER TABLE `tpl_supplier_directory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `tpl_supplier_distributor`
--

LOCK TABLES `tpl_supplier_distributor` WRITE;
/*!40000 ALTER TABLE `tpl_supplier_distributor` DISABLE KEYS */;
/*!40000 ALTER TABLE `tpl_supplier_distributor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `tpl_supplier_key_personnel`
--

LOCK TABLES `tpl_supplier_key_personnel` WRITE;
/*!40000 ALTER TABLE `tpl_supplier_key_personnel` DISABLE KEYS */;
REPLACE INTO `tpl_supplier_key_personnel` (`REC_ID`, `REC_DATETIME`, `REC_TIMESTAMP`, `SUPPLIER_REC_ID`, `ORDER`, `NAME`, `POSITION`, `TELEPHONE_NO`, `FAX_NO`, `EMAIL_ADDRESS`, `PHYSICAL_ADDRESS_BUILDING_ADDRESS`, 
`PHYSICAL_ADDRESS_STREET_ADDRESS`, `PHYSICAL_ADDRESS_SUBURB`, `PHYSICAL_ADDRESS_CITY`, `PHYSICAL_ADDRESS_STATE`, `PHYSICAL_ADDRESS_COUNTRY`, `PHYSICAL_ADDRESS_POST_CODE`, `POSTAL_ADDRESS_BUILDING_ADDRESS`, 
`POSTAL_ADDRESS_STREET_ADDRESS`, `POSTAL_ADDRESS_SUBURB`, `POSTAL_ADDRESS_CITY`, `POSTAL_ADDRESS_STATE`, `POSTAL_ADDRESS_COUNTRY`, `POSTAL_ADDRESS_POST_CODE`) 
VALUES 
    (1,'2012-04-21 17:22:53','2012-05-15 21:45:13',2,NULL,'Bob Smith','Brand Manager','+64 9 222 222','+64 9 222 2222','bob@aussiegolfing.com.au','','','','','0','','0','0','0','0','0','0','0','Level 12'),
    (2,'2012-04-21 17:22:53','2012-05-15 21:45:13',3,NULL,'Bob Smith','Brand Manager','+64 9 222 222','+64 9 222 2222','bob@aussiegolfing.com.au','','','','','0','','0','0','0','0','0','0','0','Level 12'),
    (3,'2012-04-21 17:22:53','2012-05-15 21:45:13',4,NULL,'Bob Smith','Brand Manager','+64 9 222 222','+64 9 222 2222','bob@aussiegolfing.com.au','','','','','0','','0','0','0','0','0','0','0','Level 12'),
    (4,'2012-04-21 17:22:53','2012-05-15 21:45:13',6,NULL,'Bob Smith','Brand Manager','+64 9 222 222','+64 9 222 2222','bob@aussiegolfing.com.au','','','','','0','','0','0','0','0','0','0','0','Level 12'),
    (5,'2012-04-21 17:22:53','2012-05-15 21:45:13',8,NULL,'Bob Smith','Brand Manager','+64 9 222 222','+64 9 222 2222','bob@aussiegolfing.com.au','','','','','0','','0','0','0','0','0','0','0','Level 12'),
    (6,'2012-04-21 17:22:53','2012-05-15 21:45:13',9,NULL,'Bob Smith','Brand Manager','+64 9 222 222','+64 9 222 2222','bob@aussiegolfing.com.au','','','','','0','','0','0','0','0','0','0','0','Level 12');
/*!40000 ALTER TABLE `tpl_supplier_key_personnel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `tpl_supplier_key_personnel_brand`
--

LOCK TABLES `tpl_supplier_key_personnel_brand` WRITE;
/*!40000 ALTER TABLE `tpl_supplier_key_personnel_brand` DISABLE KEYS */;
/*!40000 ALTER TABLE `tpl_supplier_key_personnel_brand` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `tpl_supplier_media`
--

-- LOCK TABLES `tpl_supplier_media` WRITE;
-- /*!40000 ALTER TABLE `tpl_supplier_media` DISABLE KEYS */;
-- REPLACE INTO `tpl_supplier_media` (`REC_ID`, `REC_DATETIME`, `SUPPLIER_REC_ID`, `NAME`, `DESCRIPTION`, `MEDIA_NAME`, `MEDIA_URL`, `MEDIA_TYPE_REC_ID`, `MEDIA_FILE_SIZE`, `MEDIA_EMBED_SOURCE`, `IS_INTERNAL_SOURCE`, 
-- `IS_EMBED_SOURCE`, `IS_FEATURED`, `IS_HIGH_RESO`, `PRINT_ORDER`) 
-- VALUES 
--    (1,'2012-05-15 20:23:51',0,'Main Logo','Use this for branding','Main Logo_0.pdf','',7,0,'',0,0,0,0,0),
--    (2,'2012-05-15 21:36:23',0,'standard_video ','The Basics of Web Video File Formats','','',8,0,'&lt;iframe width=&quot;560&quot; height=&quot;315&quot; src=&quot;http://www.youtube.com/embed/aTCp6o-EIkM&quot; frameborder=&quot;0&quot; allowfullscreen&gt;&lt;/iframe&gt;',0,1,0,0,0),
--    (3,'2012-05-15 21:39:21',1,'golfing_course1','Photo gallery Image','golfing_course1_1.jpg','/media/photo_gallery/golfing_course1_1.jpg',1,32032,'',1,0,0,0,0),
--   (4,'2012-05-15 21:42:40',0,'Aussie Golfer','The weekend\'s golf from the PGA Tour offered up a few interesting stories. Matt Kuchar\'s victory at ','','',8,0,'&lt;iframe width=&quot;560&quot; height=&quot;315&quot; src=&quot;http://www.youtube.com/embed/oRKH4nIWRUg&quot; frameborder=&quot;0&quot; allowfullscreen&gt;&lt;/iframe&gt;',0,1,0,0,0),
--    (5,'2012-05-16 18:39:32',0,'Aussie Golfer Logo','Come Golfing with us today...','Aussie Golfer Logo_0.png','',0,21197,'',1,0,0,0,0),(21,'2012-05-16 18:40:39',0,3,'golfing_course1','Photo gallery Image','golfing_course1_3.jpg','/media/photo_gallery/golfing_course1_3.jpg',1,32032,'',1,0,0,0,0),
--    (6,'2012-05-20 08:12:25',2,'Tiger-Woods4','Photo gallery Image','Tiger-Woods4_2.jpg','/media/photo_gallery/Tiger-Woods4_2.jpg',1,19019,'',1,0,1,0,0),
--    (7,'2012-05-20 08:12:25',2,'tigerwoodsandstevewilliams','Photo gallery Image','tigerwoodsandstevewilliams_2.jpg','/media/photo_gallery/tigerwoodsandstevewilliams_2.jpg',1,17191,'',1,0,0,0,0),
--    (8,'2012-05-20 08:12:25',2,'tiger-woods-masters','Photo gallery Image','tiger-woods-masters_2.jpg','/media/photo_gallery/tiger-woods-masters_2.jpg',1,18799,'',1,0,0,0,0),
--    (9,'2012-05-20 08:12:25',2,'tiger-woods-pga-tour-11-box-sm','Photo gallery Image','tiger-woods-pga-tour-11-box-sm_2.jpg','/media/photo_gallery/tiger-woods-pga-tour-11-box-sm_2.jpg',1,44517,'',1,0,0,0,0),
--    (10,'2012-06-05 06:24:47',7,'tigerwoods_logo ','The pictorial logo for the main banner logo','tigerwoods_logo _7.jpg','',4,9532,'',1,0,0,0,0),
--    (11,'2012-06-05 06:36:51',1,'Tiger-Woods-Masters','Photo gallery Image','Tiger-Woods-Masters_1.jpg','/media/photo_gallery/Tiger-Woods-Masters_1.jpg',1,18106,'',1,0,0,0,0),
--    (12,'2012-06-05 06:38:36',7,'tw_logo2','Tiger\'s Logo','tw_logo2_7.jpg','/media/logos/tw_logo2_7.jpg',4,9532,'',1,0,1,0,0),(31,'2012-06-05 06:50:06',2,7,'Header Image','Main Listing Header','Header Image_7.jpg','',6,62126,'',1,0,0,0,0);
-- /*!40000 ALTER TABLE `tpl_supplier_media` ENABLE KEYS */;
-- UNLOCK TABLES;
--
-- Dumping data for table `tpl_supplier_product_category`
--
LOCK TABLES `tpl_supplier_category` WRITE;
/*!40000 ALTER TABLE `tpl_supplier_category` DISABLE KEYS */;
REPLACE INTO `tpl_supplier_category` (`REC_ID`, `REC_DATETIME`, `REC_TIMESTAMP`, `SUPPLIER_REC_ID`, `CATEGORY_REC_ID`, `IS_LOGO_LISTING`) 
VALUES 
    (1,'2012-05-01 06:21:43','2012-05-01 06:26:06',1,2,1),
    (2,'2012-05-01 06:21:44','2012-05-01 06:21:44',1,3,0),
    (3,'2012-05-15 21:17:36','2012-05-15 21:17:45',2,4,1),
    (4,'2012-05-15 21:17:37','2012-05-15 21:17:45',2,7,1),
    (5,'2012-05-15 21:17:38','2012-05-15 21:17:46',2,6,1),
    (6,'2012-05-15 21:17:38','2012-05-15 21:17:46',2,5,1),
    (7,'2012-05-15 21:17:38','2012-05-15 21:17:47',2,8,1),
    (8,'2012-05-15 21:17:39','2012-05-15 21:17:47',2,1,1),
    (9,'2012-05-15 21:17:36','2012-05-15 21:17:45',3,4,1),
    (10,'2012-05-15 21:17:37','2012-05-15 21:17:45',3,7,1),
    (11,'2012-05-15 21:17:38','2012-05-15 21:17:46',3,6,1),
    (12,'2012-05-15 21:17:38','2012-05-15 21:17:46',3,5,1),
    (13,'2012-05-15 21:17:38','2012-05-15 21:17:47',3,8,1),
    (14,'2012-05-15 21:17:39','2012-05-15 21:17:47',3,1,1),
    (15,'2012-05-15 21:17:36','2012-05-15 21:17:45',4,4,1),
    (16,'2012-05-15 21:17:37','2012-05-15 21:17:45',4,7,1),
    (17,'2012-05-15 21:17:38','2012-05-15 21:17:46',4,6,1),
    (18,'2012-05-15 21:17:38','2012-05-15 21:17:46',4,5,1),
    (19,'2012-05-15 21:17:38','2012-05-15 21:17:47',4,8,1),
    (20,'2012-05-15 21:17:39','2012-05-15 21:17:47',4,1,1),
    (21,'2012-05-20 15:44:56','2012-05-20 15:44:56',5,4,0),
    (22,'2012-05-20 19:41:28','2012-05-20 19:41:28',5,7,0),
    (23,'2012-05-15 21:17:36','2012-05-15 21:17:45',6,4,1),
    (24,'2012-05-15 21:17:37','2012-05-15 21:17:45',6,7,1),
    (25,'2012-05-15 21:17:38','2012-05-15 21:17:46',6,6,1),
    (26,'2012-05-15 21:17:38','2012-05-15 21:17:46',6,5,1),
    (27,'2012-05-15 21:17:38','2012-05-15 21:17:47',6,8,1),
    (28,'2012-05-15 21:17:39','2012-05-15 21:17:47',6,1,1),
    (29,'2012-05-20 15:44:56','2012-05-20 15:44:56',7,4,0),
    (30,'2012-05-20 19:41:28','2012-05-20 19:41:28',7,7,0),
    (31,'2012-05-15 21:17:36','2012-05-15 21:17:45',8,4,1),
    (32,'2012-05-15 21:17:37','2012-05-15 21:17:45',8,7,1),
    (33,'2012-05-15 21:17:38','2012-05-15 21:17:46',8,6,1),
    (34,'2012-05-15 21:17:38','2012-05-15 21:17:46',8,5,1),
    (35,'2012-05-15 21:17:38','2012-05-15 21:17:47',8,8,1),
    (36,'2012-05-15 21:17:39','2012-05-15 21:17:47',8,1,1),
    (37,'2012-05-15 21:17:36','2012-05-15 21:17:45',9,4,1),
    (38,'2012-05-15 21:17:37','2012-05-15 21:17:45',9,7,1),
    (39,'2012-05-15 21:17:38','2012-05-15 21:17:46',9,6,1),
    (40,'2012-05-15 21:17:38','2012-05-15 21:17:46',9,5,1),
    (41,'2012-05-15 21:17:38','2012-05-15 21:17:47',9,8,1),
    (42,'2012-05-15 21:17:39','2012-05-15 21:17:47',9,1,1);
/*!40000 ALTER TABLE `tpl_supplier_category` ENABLE KEYS */;
UNLOCK TABLES;
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2012-09-29 12:14:44
