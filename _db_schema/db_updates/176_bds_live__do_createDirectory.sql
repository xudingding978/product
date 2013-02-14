-- --------------------------------------------------------------------------------
-- Routine DDL
-- --------------------------------------------------------------------------------
DELIMITER $$

CREATE DEFINER=`root`@`localhost` PROCEDURE `do_createDirectory`(
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
                         IN dir_pac_default TINYINT
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
              std_maxbrand, std_maxprodcat,dir_pac_default);
    
    INSERT INTO `tpl_directory_offering`(REC_DATETIME, REC_TIMESTAMP, DIRECTORY_REC_ID, 
              DIRECTORY_YEAR, `NAME`, DESCRIPTION, COST_EXCL_GST, GST_RATE, MAX_BRANCH_COUNT, MAX_KEY_PERSONNEL_COUNT,
              MAX_BRAND_COUNT, MAX_PRODUCT_CATEGORY_COUNT,IS_DEFAULT) 
            VALUE( NOW(), NOW(), directory_rec_id, 
              YEAR(CURDATE()),'Advanced Listing', adv_listingdesc, adv_costexclgst, adv_gstrate, adv_maxbranch, adv_maxpersonnel,
              adv_maxbrand, adv_maxprodcat,dir_pac_default);
    
    INSERT INTO `tpl_directory_offering`(REC_DATETIME, REC_TIMESTAMP, DIRECTORY_REC_ID, 
              DIRECTORY_YEAR, `NAME`, DESCRIPTION, COST_EXCL_GST, GST_RATE, MAX_BRANCH_COUNT, MAX_KEY_PERSONNEL_COUNT,
              MAX_BRAND_COUNT, MAX_PRODUCT_CATEGORY_COUNT,IS_DEFAULT) 
            VALUE( NOW(), NOW(), directory_rec_id, 
              YEAR(CURDATE()),'Premium Listing', prem_listingdesc, prem_costexclgst, prem_gstrate, prem_maxbranch, prem_maxpersonnel,
              prem_maxbrand, prem_maxprodcat,dir_pac_default);
    
    INSERT INTO `tpl_directory_additional_offering`(REC_DATETIME, REC_TIMESTAMP, DIRECTORY_REC_ID, DIRECTORY_YEAR, `CODE`, `NAME`, DESCRIPTION, COST_EXCL_GST, GST_RATE) 
            VALUE( NOW(), NOW(), directory_rec_id, YEAR(CURDATE()), addoffer_code, addoffer_name, addoffer_description, addoffer_costexclgst, addoffer_gstrate);
  END IF;
  SELECT directory_rec_id;
END


