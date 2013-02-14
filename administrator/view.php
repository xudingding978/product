<?php

if (!isset($_SESSION)) {
    session_start();
}
if (!isset($_SESSION["uid"])) {
    include("login.php");
    return;
}


$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once $path_doc_root . "/config.php";
include $path_doc_root . "/common/ui/datagrid/datagridController.php";
include_once $path_doc_root . "/common/dao/TplClientDAO.php";
include_once $path_doc_root . "/common/dao/TplProduct.php";
include_once $path_doc_root . "/common/dao/TplSearchLogosDAO.php";
include_once("constants.php");


if (isset($_GET["view"])) {
    switch ($_GET["view"]) {

        case CLIENT: {

                break;
            }
        case ACCOUNT: {
                include_once("account_form.php");
                $AccountObj = new AccountForm();
                $AccountObj->showPage($_GET["action"]);
                break;
            }
        case CATEGORY: {
                include_once("category_form.php");
                $CategoryObj = new CategoryForm();
                $CategoryObj->showPage($_GET["action"]);
                break;
            }
        case DIRECTORY: {
                include_once("directory_form.php");
                $DirectoryObj = new DirectoryForm();
                $DirectoryObj->showPage($_GET["action"]);
                break;
            }
        case S2L2S: {
                include_once("s2l2s_form.php");
                $s2l2sFormObj = new S2L2SForm();
                $s2l2sFormObj->setDirectorystatus($_GET["param2"]);
                $s2l2sFormObj->setDirectoryID($_GET["param3"]);
                $s2l2sFormObj->showPage($_GET["action"]);
                break;
            }
        /* case FRONTGRID:
          {
          include "frontgrid.php";
          $fgrid = new FrontGrid();
          switch($_GET["action"])
          {
          case 1: //top 10 new client
          $q = "SELECT REC_ID,NAME,TELEPHONE_NO,TRADING_AS_NAME FROM tpl_dev.tpl_client ORDER BY REC_ID DESC LIMIT 10";
          $fgrid->datasource($q);
          $fgrid->columnHide('REC_ID');
          $fgrid->columnAlias('NAME','Company Name');
          $fgrid->columnAlias('TELEPHONE_NO','Contact Number');
          $fgrid->process();
          break;
          case 2: //top 10 search keywork
          break;
          }
          } */
        default:
            break;
    }
}

class pagination {

    private $maxRowNumber, $rowPerPage;

    public function __construct($maxRowNumber, $rowPerPage) {
        $this->maxRowNumber = $maxRowNumber;
        $this->rowPerPage = $rowPerPage;
    }

    public function getStartRows($currentPageNumber) {
        $currentPageNumber = $currentPageNumber - 1;
        $startRow = $currentPageNumber * $this->rowPerPage;
        return $startRow;
    }

    public function getMaxPageNumber() {
        $maxPageNumber = $this->maxRowNumber / $this->rowPerPage;
        if (intval($maxPageNumber) < $maxPageNumber) {
            $maxPageNumber = intval($maxPageNumber) + 1;
        }
        return $maxPageNumber;
    }

}

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


if (isset($_POST['rowsPage'])) {

    $rowsPerPage = $_POST['rowsPage'];
    $currentPageNumber = $_POST['pageNum'];

    if ($_SESSION["tableName"] == 'popup_form2') {

        if ($_SESSION["action"] == "editclientclick") {
            unset($_SESSION['TableData']);
            $datagridController = new datagridController();
            $tplclientdao = new TplClientDAO();
            $datagridController->setDAOClass($tplclientdao);
            $rowPerpage = 5;
            $tmpMaxRow = $datagridController->getRowNumber("countForFrontGrid");
            $maxRow = $tmpMaxRow[0];
            $pagination = new pagination($maxRow, $rowPerpage);
            $param_arr = array('rowStart' => $pagination->getStartRows($currentPageNumber), 'rowPerPage' => $rowPerpage);
            $_SESSION["TableData"]["MaxRows"] = $maxRow;
            $_SESSION["TableData"]["MaxPageNumber"] = $pagination->getMaxPageNumber();
            $_SESSION["TableData"]["currentPageNumber"] = $currentPageNumber;
            $_SESSION["TableData"]["col_headers"] = "Client Name, Trading Name, Contact Number, Email Addddddddddddress, User Name,Action";
            $_SESSION['TableData']['dataGrid'] = $datagridController->prepareDataGrid('selectAllClients', $param_arr);
            $_SESSION["TableData"]["tableLocation"] = 'popup_form2';
            echo json_encode($_SESSION["TableData"]);
        }
    } elseif ($_SESSION["tableName"] == null) {
        unset($_SESSION['TableData']);
        $datagridController = new datagridController();
        $tplclientdao = new TplClientDAO();
        $datagridController->setDAOClass($tplclientdao);
        $rowPerpage = 5;
        $currentPageNumber = $_POST['pageNum'];
        $tmpMaxRow = $datagridController->getRowNumber("countForFrontGrid");
        $maxRow = $tmpMaxRow[0];
        $pagination = new pagination($maxRow, $rowPerpage);
        $param_arr = array('rowStart' => $pagination->getStartRows($currentPageNumber), 'rowPerPage' => $rowPerpage);
        $_SESSION["TableData"]["MaxRows"] = $maxRow;
        $_SESSION["TableData"]["MaxPageNumber"] = $pagination->getMaxPageNumber();
        $_SESSION["TableData"]["currentPageNumber"] = $currentPageNumber;
        $_SESSION["TableData"]["col_headers"] = "Client Name, Trading Name, Contact Number, Email Address, User Name, Action";
        $_SESSION['TableData']['dataGrid'] = $datagridController->prepareDataGrid('selectAllClients', $param_arr);
        $_SESSION["TableData"]["tableLocation"] = 'query-result';
        echo json_encode($_SESSION["TableData"]);
    }
}
?>

