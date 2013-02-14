USE `bds_live`;
DROP procedure IF EXISTS `do_createClient`;

DELIMITER $$
USE `bds_live`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `do_createClient`(

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

END$$

DELIMITER ;

