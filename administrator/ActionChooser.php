<?php

session_start();
/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


if (isset($_POST['action'])) {
    $tempStr = $_POST["action"];
    if ($tempStr == "destroy") {

        unset($_SESSION['tableName']);
        unset($_SESSION['action']);
    } elseif ($tempStr == "editclientclick") {
        $_SESSION['tableName'] = "popup_form2";
        $_SESSION['action'] = $tempStr;
    }
    echo json_encode($_SESSION["tableName"]);
}
?>
