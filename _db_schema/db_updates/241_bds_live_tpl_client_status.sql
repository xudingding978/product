CREATE  TABLE `bds_live`.`tpl_client_status` (
  `REC_ID` INT NOT NULL ,
  `CLIENT_STATUS` CHAR(1)  NOT NULL ,
  PRIMARY KEY (`REC_ID`) )
ENGINE = InnoDB;

ALTER TABLE `bds_live`.`tpl_client_status` ADD COLUMN `CLIENT_STATUS_DESC` VARCHAR(45) NOT NULL  AFTER `CLIENT_STATUS` ;
