=============================================== 
Training Video for Managing DB Object Changes
=============================================== 
http://www.screencast.com/t/0oLOeGsmK

Documentation for the DB Patches Folder
=============================================== 
In order to keep track of many developers creating new 
database objects and constant change to the database, this
folder serves as the repository for all other developers to
be able to easily and quickly apply the latest changes to
their DB objects.

When creating some new functionality that involves changing
either a db table or a routine, the sql file for that object
that contains the alter statement must be provided in here.

The file naming convention is alter_<db_name>_<db_object_name>.

This process serves 2 purposes. 

1). It communicates the change out to all other developers
via the Assembla repository update email.

2). Allows FAST updates to their working local database to 
keep in sync with the platform's development.


*** VERY IMPORTANT ***
=============================================== 

DB_OBJECTS
---------------------------------------------------------------
You MUST ALWAYS export the database objects individual create 
statement sql file into the db_object folder. This allows a new
object to be easily created from new and also communicated to
the team that a new or updated object has been committed. 

YOU MUST FOLLOW THIS BUSINESS RULE!

DB_INSTALL
---------------------------------------------------------------
You MUST ALWAYS update the db_install folder with a FULL Export
to Self-Contained File (skip table data)of your new database.
Ensure that Create Dump in Single Transaction is NOT checked 
and Dump Stored Routines options IS checked.
 
If another developer has also committed a new Full Export, then
care will be taken to communicate to that developer and agree on
merging your changes together.

Thank You
Jason Liddiard 
Updated: 30th March 2012