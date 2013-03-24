<?php

class LoadAuthCommand extends CConsoleCommand {

    public function run($args) {
        $auth = Yii::app()->authManager;

        $auth->clearAll();

// user actions
        $auth->createOperation('UserIndex', 'index of users');
        $auth->createOperation('UserCreate', 'create a user');
        $auth->createOperation('UserView', 'read a user');
        $auth->createOperation('UserUpdate', 'update a user');
        $auth->createOperation('UserDelete', 'delete a user');
        $auth->createOperation('UserAclist', 'autocomplete list for user');
        
// user profile actions
        $auth->createOperation('UserProfileAdmin', 'admin of user profiles');
        $auth->createOperation('UserProfileCreate', 'create a user profiles');
        $auth->createOperation('UserProfileDelete', 'delete a user profiles');   
        $auth->createOperation('UserProfileIndex', 'index of user profiles');
        $auth->createOperation('UserProfileUpdate', 'update a user profiles');
        $auth->createOperation('UserProfileView', 'read a user profiles');
        
//tenant actions
        $auth->createOperation('TenantAdmin','admin of tenants');
        $auth->createOperation('TenantCreate', 'create a tenants');
        $auth->createOperation('TenantDelete', 'delete a tenants');
        $auth->createOperation('TenantIndex', 'index of tenants');
        $auth->createOperation('TenantUpdate', 'update a tenants');
        $auth->createOperation('TenantView', 'read a tenants');
        
// directory actions
        $auth->createOperation('DirectoryAdmin', 'admin access to directory');
        $auth->createOperation('DirectoryCreate', 'create a directory');
        $auth->createOperation('DirectoryDelete', 'delete a directory');
        $auth->createOperation('DirectoryIndex', 'index of directory');
        $auth->createOperation('DirectoryUpdate', 'update a directory');
        $auth->createOperation('DirectoryView', 'read a directory');

        //$auth->createOperation('BookRemoveAuthor','remove an author from a book');
        //$auth->createOperation('BookCreateAuthor','create an author for a book');
        
// directory period actions
        $auth->createOperation('DirectoryPeriodAdmin', 'admin access to directory periods');
        $auth->createOperation('DirectoryPeriodIndex', 'index of directory periods');
        $auth->createOperation('DirectoryPeriodCreate', 'create a directory periods');
        $auth->createOperation('DirectoryPeriodView', 'read a directory periods');
        $auth->createOperation('DirectoryPeriodUpdate', 'update a directory periods');
        $auth->createOperation('DirectoryPeriodDelete', 'delete a directory periods');
        
// directory period offers actions
        $auth->createOperation('DirectoryPeriodAdmin', 'admin access to directory period offers');
        $auth->createOperation('DirectoryPeriodIndex', 'index of directory period offers');
        $auth->createOperation('DirectoryPeriodCreate', 'create a directory period offers');
        $auth->createOperation('DirectoryPeriodView', 'read a directory period offers');
        $auth->createOperation('DirectoryPeriodUpdate', 'update a directory period offers');
        $auth->createOperation('DirectoryPeriodDelete', 'delete a directory period offers');

// directory domains actions
        $auth->createOperation('DirectoryDomainAdmin', 'admin access to directory domains');
        $auth->createOperation('DirectoryDomainIndex', 'index of directory domains');
        $auth->createOperation('DirectoryDomainCreate', 'create a directory domains');
        $auth->createOperation('DirectoryDomainView', 'read a directory domains');
        $auth->createOperation('DirectoryDomainUpdate', 'update a directory domains');
        $auth->createOperation('DirectoryDomainDelete', 'delete a directory domains');

        // library actions
        $auth->createOperation('LibraryIndex', 'index of library');
        $auth->createOperation('LibraryRequest', 'request item from library');
        $auth->createOperation('LibraryLend', 'lend item from library, and remove request');

        // user task of updating own entry
        $bizRule = 'return (Yii::app()->user->id==Yii::app()->getRequest()->getQuery(\'id\') || Yii::app()->user->id == $params[\'id\']);';
        $task = $auth->createTask('UpdateOwnUser', 'update own user entry', $bizRule);
        $task->addChild('UserUpdate');

        $role = $auth->createRole('wishlistAccess');
        $role->addChild('WishIndex');
        $role->addChild('WishView');
        $role->addChild('WishClaim');
        $role->addChild('UpdateOwnUser');

        $role = $auth->createRole('viewer');
        $role->addChild('wishlistAccess');
        $role->addChild('BookIndex');
        $role->addChild('BookView');

        $role = $auth->createRole('borrower');
        $role->addChild('viewer');
        $role->addChild('LibraryIndex');
        $role->addChild('LibraryRequest');

        $role = $auth->createRole('admin');
        $role->addChild('borrower');
        $role->addChild('LibraryLend');

        $task = $auth->createTask('manageWish', 'manage wish entries');
        $task->addChild('WishCreate');
        $task->addChild('WishUpdate');
        $task->addChild('WishDelete');
        $task->addChild('WishAdmin');
        $task->addChild('WishCreateAuthor');
        $task->addChild('WishRemoveAuthor');
        $role->addChild('manageWish');

        $task = $auth->createTask('manageUser', 'manage user entries');
        $task->addChild('UserIndex');
        $task->addChild('UserCreate');
        $task->addChild('UserView');
        $task->addChild('UserUpdate');
        $task->addChild('UserDelete');
        $task->addChild('UserAclist');
        $role->addChild('manageUser');

        $task = $auth->createTask('manageBook', 'manage book entries');
        $task->addChild('BookAdmin');
        $task->addChild('BookCreate');
        $task->addChild('BookUpdate');
        $task->addChild('BookDelete');
        $task->addChild('BookCreateAuthor');
        $task->addChild('BookRemoveAuthor');
        $role->addChild('manageBook');

        $task = $auth->createTask('managePublisher', 'manage publisher entries');
        $task->addChild('PublisherAdmin');
        $task->addChild('PublisherIndex');
        $task->addChild('PublisherView');
        $task->addChild('PublisherCreate');
        $task->addChild('PublisherUpdate');
        $task->addChild('PublisherDelete');
        $role->addChild('managePublisher');

        $auth->assign('wishlistAccess', 54);
        $auth->assign('viewer', 53);
        $auth->assign('borrower', 52);
        $auth->assign('admin', 1);

        echo "Authorisation Module Initialized.\n";
    }

}

?>
