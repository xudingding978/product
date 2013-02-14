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

-- **** LIVE_DB **** LIVE_DB **** LIVE_DB **** LIVE_DB **** LIVE_DB **** LIVE_DB **** LIVE_DB **** LIVE_DB **** LIVE_DB **** LIVE_DB **** LIVE_DB **** LIVE_DB **** 
USE `bds-v3_live`;
/*!40000 ALTER TABLE `tpl_media_types` DISABLE KEYS */;
INSERT INTO `tpl_media_types` (`REC_ID` , `REC_DATETIME` , `MEDIA_TYPE` , `MEDIA_CATEGORY` , `MEDIA_DESC`) 
VALUES 
    (1,'2012-01-01 00:00:00','gif','pg','Photo Gallery  GIF image'),
    (2,'2012-01-01 00:00:00','jpg','pg','Photo Gallery  JPEG image'),
    (3,'2010-01-01 00:00:00','gif','logos','Logos GIF image'),
    (4,'2012-01-01 00:00:00','jpg','logos','Logos JPEG image'),
    (5,'2012-01-01 00:00:00','gif','headers','Header GIF image'),
    (6,'2012-01-01 00:00:00','jpg','headers','Header JPEG image'),
    (7,'2012-01-01 00:00:00','pdf','pdf','PDF Document'),
    (8,'2012-01-01 00:00:00','avi','video','Audio Video Interleave File');
/*!40000 ALTER TABLE `tpl_media_types` ENABLE KEYS */;


/*!40000 ALTER TABLE `tpl_client_status` DISABLE KEYS */; 

INSERT INTO `tpl_client_status` (`REC_ID`, `CLIENT_STATUS`, `CLIENT_STATUS_DESC`) VALUES (1, 'P', 'Client is Registered, Pending Activation');
INSERT INTO `tpl_client_status` (`REC_ID`, `CLIENT_STATUS`, `CLIENT_STATUS_DESC`) VALUES (2, 'A', 'Client Activated');
INSERT INTO `tpl_client_status` (`REC_ID`, `CLIENT_STATUS`, `CLIENT_STATUS_DESC`) VALUES (3, 'C', 'Payment Completed');
INSERT INTO `tpl_client_status` (`REC_ID`, `CLIENT_STATUS`, `CLIENT_STATUS_DESC`) VALUES (4, 'I', 'Client Inactive');
INSERT INTO `tpl_client_status` (`REC_ID`, `CLIENT_STATUS`, `CLIENT_STATUS_DESC`) VALUES (5, 'D', 'Client Deactivated');
INSERT INTO `tpl_client_status` (`REC_ID`, `CLIENT_STATUS`, `CLIENT_STATUS_DESC`) VALUES (6, 'B', 'Client Blocked');
/*!40000 ALTER TABLE `tpl_client_status` ENABLE KEYS */;

/*!40000 ALTER TABLE `tpl_supplier_type` DISABLE KEYS */;
INSERT INTO `tpl_supplier_type` (`REC_ID`,`REC_DATETIME`,`REC_TIMESTAMP`,`CODE`,`NAME`)
VALUES 
    (1,'2010-02-13 12:00:00','2010-02-13 12:00:00','BREWERY','Brewery'),
    (2,'2010-02-13 12:00:00','2010-02-13 12:00:00','MANUFACTURER','Cider/Spirit/Liqueur Manufacturer'),
    (3,'2010-02-13 12:00:00','2010-02-13 12:00:00','DISTRIBUTOR','Distributor/Importer'),
    (4,'2010-02-13 12:00:00','2010-02-13 12:00:00','OTHER-ALCOHOLIC','Other Alcoholic Drink Type'),
    (5,'2010-02-13 12:00:00','2010-02-13 12:00:00','WINERY','Winery/Vineyard'),
    (6,'2010-02-22 10:00:00','2010-02-22 10:00:00','NON-ALCOHOLIC','Non Alcoholic Beverage');
/*!40000 ALTER TABLE `tpl_supplier_type` ENABLE KEYS */;

/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- **** LIVE_DB **** LIVE_DB **** LIVE_DB **** LIVE_DB **** LIVE_DB **** LIVE_DB **** LIVE_DB **** LIVE_DB **** LIVE_DB **** LIVE_DB **** LIVE_DB **** LIVE_DB **** 