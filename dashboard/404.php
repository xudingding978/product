<?php
  if(!isset($_SESSION)) session_start();
  include("main.php");
  $lsPageDescription = "";
  $lsPageKeywords = "";
  BuildPage("Page not found", $lsPageDescription, $lsPageKeywords, "", "ui/404.php")
?>