<?php
class LoadAuthCommand extends CConsoleCommand {

    public function run($args) {
        $auth = Yii::app()->authManager;
        $auth->clearAll();

// user actions
        $auth->createOperation('UserAdmin', 'admin of users');
        $auth->createOperation('UserIndex', 'index of users');
        $auth->createOperation('UserCreate', 'create a user');
        $auth->createOperation('UserView', 'read a user');
        $auth->createOperation('UserUpdate', 'update a user');
        $auth->createOperation('UserDelete', 'delete a user');
//        $auth->createOperation('UserAclist', 'autocomplete list for user');
// user profile actions
        $auth->createOperation('UserProfileAdmin', 'admin of user profiles');
        $auth->createOperation('UserProfileCreate', 'create a user profiles');
        $auth->createOperation('UserProfileDelete', 'delete a user profiles');
        $auth->createOperation('UserProfileIndex', 'index of user profiles');
        $auth->createOperation('UserProfileUpdate', 'update a user profiles');
        $auth->createOperation('UserProfileView', 'read a user profiles');

//tenant actions
        $auth->createOperation('TenantAdmin', 'admin of tenants');
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

// directory period actions
        $auth->createOperation('DirectoryPeriodAdmin', 'admin access to directory periods');
        $auth->createOperation('DirectoryPeriodIndex', 'index of directory periods');
        $auth->createOperation('DirectoryPeriodCreate', 'create a directory periods');
        $auth->createOperation('DirectoryPeriodView', 'read a directory periods');
        $auth->createOperation('DirectoryPeriodUpdate', 'update a directory periods');
        $auth->createOperation('DirectoryPeriodDelete', 'delete a directory periods');

// directory period offers actions
        $auth->createOperation('DirectoryPeriodOffersAdmin', 'admin access to directory period offers');
        $auth->createOperation('DirectoryPeriodOffersIndex', 'index of directory period offers');
        $auth->createOperation('DirectoryPeriodOffersCreate', 'create a directory period offers');
        $auth->createOperation('DirectoryPeriodOffersView', 'read a directory period offers');
        $auth->createOperation('DirectoryPeriodOffersUpdate', 'update a directory period offers');
        $auth->createOperation('DirectoryPeriodOffersDelete', 'delete a directory period offers');

// client actions
        $auth->createOperation('ClientAdmin', 'admin of clients');
        $auth->createOperation('ClientCreate', 'create a clients');
        $auth->createOperation('ClientDelete', 'delete a clients');
        $auth->createOperation('ClientIndex', 'index of clients');
        $auth->createOperation('ClientUpdate', 'update a clients');
        $auth->createOperation('ClientView', 'read a clients');

// user task of updating own entry
        $bizRule = 'return (Yii::app()->user->id==Yii::app()->getRequest()->getQuery(\'id\') || Yii::app()->user->id == $params[\'id\']);';
        $task = $auth->createTask('UpdateOwnUser', 'update own user entry', $bizRule);
        $task->addChild('UserUpdate');

// Users access to view and manage their own data
        $role_uA = $auth->createRole('userlistAccess');
        $role_uA->addChild('UserIndex');
        $role_uA->addChild('UserView');
        $role_uA->addChild('UserUpdate');
        $role_uA->addChild('UpdateOwnUser');


// *** Directory Authorisations ***
        $role_dV = $auth->createRole('directoryViewer');
        $role_dV->addChild('DirectoryIndex');
        $role_dV->addChild('DirectoryView');

        $role_dE = $auth->createRole('directoryEditor');
        $role_dE->addChild('directoryViewer');
        $role_dE->addChild('DirectoryUpdate');

        $role_dO = $auth->createRole('directoryOwner');
        $role_dO->addChild('directoryEditor');
        $role_dO->addChild('DirectoryDelete');

        $role_dA = $auth->createRole('directoryAdministrator');
        $role_dA->addChild('directoryOwner');
        $role_dA->addClild('DirectoryAdmin');

// *** Client Authorisations ***
        $role_cV = $auth->createRole('clientViewer');
        $role_cV->addChild('ClientIndex');
        $role_cV->addChild('ClientView');

        $role_cE = $auth->createRole('clientEditor');
        $role_cE->addChild('clientViewer');
        $role_cE->addChild('ClientUpdate');

        $role_cO = $auth->createRole('clientOwner');
        $role_cO->addChild('clientEditor');
        $role_cO->addChild('ClientDelete');

        $role_cA = $auth->createRole('clientAdministrator');
        $role_cA->addChild('clientOwner');
        $role_cA->addClild('ClientAdmin');

        $role_tA = $auth->createRole('tenantAdministrator');
        $role_tA->addChild('clientAdministrator');
        $role_tA->addChild('directoryAdministrator');

        $role_aA = $auth->createRole('authorityAdministrator');
        $role_aA->addChild('tenantAdministrator');

        $task_mU = $auth->createTask('manageUser', 'manage user entries');
        $task_mU->addChild('UserCreate');
        $task_mU->addChild('UserUpdate');
        $task_mU->addChild('UserDelete');
        $task_mU->addChild('UserAdmin');
        $role_tA->addChild('manageUser');

        // Manage Client Tasks and Role
        $task_mC = $auth->createTask('manageClient', 'manage client entries');
        $task_mC->addChild('ClientIndex');
        $task_mC->addChild('ClientCreate');
        $task_mC->addChild('ClientView');
        $task_mC->addChild('ClientUpdate');
        $task_mC->addChild('ClientDelete');
        $task_mC->addChild('ClientAclist');
        $role_tA->addChild('manageClient');

        $task_mD = $auth->createTask('manageDirectory', 'manage directory entries');
        $task_mD->addChild('DirectoriesAdmin');
        $task_mD->addChild('DirectoriesCreate');
        $task_mD->addChild('DirectoriesUpdate');
        $task_mD->addChild('DirectoriesDelete');
        $task_mD->addChild('DirectoriesCreateAuthor');
        $task_mD->addChild('DirectoriesRemoveAuthor');
        $role_tA->addChild('manageDirectories');

        echo "Authorisation Module Initialized.\n";
    }

}

?>
