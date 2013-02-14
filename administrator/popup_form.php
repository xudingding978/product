<?php

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
require $path_doc_root . '/config.php';
require_once 'constants.php';
require_once 'dataconnection.php';
require_once 'callbacks.php';

abstract class PopupForm {

    protected $_dbConnectionObj;
    protected $_dbAdminConnectionObj;

    public function showPage($VIEW_PAGE) {
        // if ($this->_dbConnectionObj->Connect()) {

        switch ($VIEW_PAGE) {
            case VIEW: //action = 0
                $this->viewPage();
                break;
            case ADD: //action = 1
                $this->addPage();
                break;
            case EDIT: //action = 2
                $this->editPage();
                break;
            case REMOVE: //action = 3
                $this->removePage();
                break;
            case SEARCH: //action = 4
                $this->searchPage();
                break;
            case RESERVE1: //action = 5
                $this->reserve1Page();
                break;
            // }
            //$this->_dbConnectionObj->Disconnect();
        }
        return true;
    }

    protected function viewPage() {
        
    }

    protected function addPage() {
        
    }

    protected function editPage() {
        
    }

    protected function removePage() {
        
    }

    protected function searchPage() {
        
    }

    protected function reserve1Page() {
        
    }

}

?>