#!/bin/bash
# Installs BDS New Schema and Loads Data
# =======================================================================
# **** Warning - this script drops the bds-v3_live and bds-v3_admin Database ****
# =======================================================================

echo "Dropping current bds-v3_admin database...."
if mysql -u root -pPa55word -e 'USE bds-v3_admin'; then
	mysqladmin -u root -pPa55word drop bds-v3_admin;
fi
echo "Dropping current bds-v3_live database...."
if mysql -u root -pPa55word -e 'USE bds-v3_live'; then
	mysqladmin -u root -pPa55word drop bds-v3_live;
fi

echo "Creating new db from 1_bds-v3_all_database_install.sql"
mysql -u root -pPa55word < 1_bds-v3_all_database_install.sql;

mysql -u root -pPa55word -e "SHOW DATABASES LIKE 'bds-v3%'";
mysql -u root -pPa55word -e "SHOW TABLES FROM \`bds-v3_admin\`";
mysql -u root -pPa55word -e "SHOW TABLES FROM \`bds-v3_live\`";

echo "Loading bds-v3_admin with boot strapper... processing 2_bds-v3_admin_newschema_boot_strap.sql"
mysql -u root -pPa55word bds-v3_admin < 2_bds-v3_install_boot_strap.sql;

#echo "Loading bds-v3_live with boot strapper... processing 2_bds-v3_live_newschema_boot_strap.sql"
#mysql -u root -pPa55word bds-v3_live < 2_bds-v3_boot_strap.sql;

echo "Importing testing data.... processing 3_bds-v3_install_testing_data.sql"
mysql -u root -pPa55word bds-v3_live < 3_bds-v3_install_testing_data.sql


