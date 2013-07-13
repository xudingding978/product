<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * ProfileCommand reads, cleans and moves Profile data from the Test CouchBase bucket to the Production CouchBase bucket 
 *
 * @Jason-Liddiard devbox
 */
class ProfileCommand extends CConsoleCommand {

        public function actionIndex ($action=null) {
        echo (isset($action) ? 'Your are do... ' . $action."\r\n" : 'No action defined \r\n');
        Yii::import("application.models.*");
        
        $start_time = microtime(true);
        echo $start_time . "\r\n";        
        
        if ($action == "update") {
            echo 'updating...';
            //$this->updateArticles ();
        } else if ($action =="import") {
            echo 'importing...';
            //$this->importProfilesToProduction();
        }
        if(isset($profile['domain'])){
            
        }
        echo "All finished: start from: " . "\r\n";
        $end_time = microtime(true);
        echo "totally spend: " . ($end_time - $start_time);
        
    }
    
}

?>
