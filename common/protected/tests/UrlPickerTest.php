<?php

Yii::import('common.models.*');

class UrlPickerTest {

    private $inputArrary = array("www.google.com/file", "kitchens.trendsideas.co.nz", "kitchens.trendsideas.co.au", "kitchens.trendsideas.com.cn",
        "kitchens.trendsideas.com", "www.develop.devbox3", "www.develop.devbox3", "admin.develop.devbox3", "authority.develop.devbox3", "dashboard.develop.devbox3");
    private $expectedOutputArray = array("google.com", "trendsideas.co.nz", "trendsideas.co.au", "trendsideas.com.cn",
        "trendsideas.com", "develop.devbox3", "develop.devbox3", "develop.devbox3", "develop.devbox3", "develop.devbox3");
    public $outputArray = array();

    public function __construct() {
        echo '<h1>UrlPicker unit test</h1>';
        $tempOutputArray = array();
        for ($i = 0; $i < sizeof($this->inputArrary); $i++) {
            $urlPicker = new UrlPicker;
            array_push($tempOutputArray, $urlPicker->shortenURL($this->inputArrary[$i]));
        }
        for ($i = 0; $i < sizeof($this->expectedOutputArray); $i++) {
            if ($this->expectedOutputArray[$i] === $tempOutputArray[$i])
                array_push($this->outputArray, $this->expectedOutputArray[$i] . ' true');
            else {
                array_push($this->outputArray, $this->expectedOutputArray[$i] . ' false');
            }
        }
    }

    public function printOut() {
        for ($i = 0; $i < sizeof($this->outputArray); $i++) {
            echo $this->outputArray[$i] . '</br>';
        }
    }

}

?>
