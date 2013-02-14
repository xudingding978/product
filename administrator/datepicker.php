<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
            
            
    
?>

    <body>
        <form id="form9000">
            
            <?php 
            $path_doc_root = $_SERVER["DOCUMENT_ROOT"];
            require($path_doc_root."/config.php");
            
            require $KoolPHPSuiteDir."/KoolCalendar/koolcalendar.php";
            $datepicker = new KoolDatePicker("datepicker"); //Create calendar object
            $datepicker->scriptFolder = "../include/KoolPHPSuite/KoolCalendar"; //Set scriptFolder
            $datepicker->styleFolder = "default";
            $datepicker->Init();
            
            echo $datepicker->render();?>
        </form>
        
    </body>
