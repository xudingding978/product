<?php

class RayCommand extends CConsoleCommand {
    
    public function actionIndex($day,$hour){
        echo 'hello ray. Today is.... '. $day . ' and it is hour of '. $hour;
    }
    
    public function actionLastName(){
        echo 'My last name is Zhang..';
    }
    
}
?>
