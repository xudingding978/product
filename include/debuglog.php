

<?php

class debuglog {
    //Singleton Object
    private static $instance;
    // define default log file
    private $log_file = '';
    // define file pointer
    private $fp = null;    

    private function __construct() {
        
    }

    public static function getInstance() {      
        if (self::$instance === null) {
            self::$instance = new debuglog();
        }
        return self::$instance;
    }

    // set log file (path and name)
    public function setlogfile($path) {
        $today = date('Y-m-d');
        $this->log_file = $path."/".$today.".log";
    }

    // write message to the log file
    function error_log($message) {
        // if file pointer doesn't exist, then open log file
       // error_log("error_log######################################");
        if (!$this->fp)
            $this->lopen();
        // define script name
        $script_name = pathinfo($_SERVER['PHP_SELF'], PATHINFO_FILENAME);
        // define current time
        $time = date('H:i:s');
        // write current time, script name and message to the log file
        fwrite($this->fp, "$time $script_name $message\n");
    }
    
    function error_withid_log($error_id , $message) {
        // if file pointer doesn't exist, then open log file
        if (!$this->fp)
            $this->lopen();
        error_log($message);
        // define script name
        $exceptionstring = " Error no: ".$error_id." Error : ".$message; 
        $script_name = pathinfo($_SERVER['PHP_SELF'], PATHINFO_FILENAME);
        // define current time
        $time = date('H:i:s');
        // write current time, script name and message to the log file
        fwrite($this->fp, "$time  $script_name  $exceptionstring\n");
    }

    // open log file
    private function lopen() {
        // define log file path and name      
        $lfile = $this->log_file;
        // define the current date (it will be appended to the log file name)
        $today = date('Y-m-d');
        // open log file for writing only; place the file pointer at the end of the file
        // if the file does not exist, attempt to create it
        $this->fp = fopen($lfile , 'a') or exit("Can't open $lfile!");
    }

}
?>


