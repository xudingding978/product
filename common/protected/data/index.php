<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title></title>
    </head>
    <body>
        <?php
        require_once('rb.php');
        /* @var $this SiteController */
        /* @var $error array */
//This creates an SQLite database in /tmp
//R::setup('database.txt'); -- for other systems
//Ready. Now insert a bean!
        //be careful the naming system. redbean is not allowed any special letter in the table name, such as '_', and even any upper case

        R::setup('mysql:host=127.0.0.1;
        dbname=redbean_test', 'root', 'Pa55word');
        R::nuke(); //empties the entire database

        $tenant = R::dispense('tenant');
        $tenant->REC_ID;
        R::store($tenant); //create tenant table

        $user = R::dispense('user');
        $user->TENANT_REC_ID = $tenant;
        R::store($user);
        $client = R::dispense('client');
        $client->TENANT_REC_ID = $tenant;
        $client->USER_REC_ID = $user;
        R::store($client);

        $domain = R::dispense('domain');
        $domain->TENANT_REC_ID = R::dispense('tenant'); // 1 to n relationship without create to table
        $domain->REC_DATETIME = new DateTime(date('d-m-Y'));
        $domain->REC_TIMESTAMP = new DateTime(date('d-m-Y'));
        R::store($domain);

        $domainName = R::dispense('domainname');
        $domainName->TENANT_REC_ID = R::dispense('tenant');
        $domainName->REC_DATETIME = new DateTime(date('d-m-Y'));
        $domainName->REC_TIMESTAMP = new DateTime(date('d-m-Y'));
        R::store($domainName);
        R::associate(R::dispense('domainname'), R::dispense('domain')); // n to n relationship

        $shadowListingType = R::dispense('shadowlistingtype');
        $shadowListingType->TENANT_REC_ID = R::dispense('tenant');
        $shadowListingType->REC_DATETIME = new DateTime(date('d-m-Y'));
        $shadowListingType->REC_TIMESTAMP = new DateTime(date('d-m-Y'));
        $shadowListingType->TABLE_NAME = 'tablename';
        R::store($shadowListingType);

        $shadowListing = R::dispense('shadowlisting');
        $shadowListing->TENANT_REC_ID = R::dispense('tenant');
        $shadowListing->REC_DATETIME = new DateTime(date('d-m-Y'));
        $shadowListing->REC_TIMESTAMP = new DateTime(date('d-m-Y'));
        $shadowListing->ITEM_ID;
        $shadowListing->ITEM_TYPE = $shadowListingType;
        $shadowListing->NAME = 'name';
        $shadowListing->DESCRIPTION = 'description';
        $shadowListing->IMAGE_URL = 'image_url';
        R::store($shadowListing);
        R::associate(R::dispense('shadowlisting'), R::dispense('domainname')); // n to n relationship
        ?>

        <div>

        </div>
    </body>
</html>
