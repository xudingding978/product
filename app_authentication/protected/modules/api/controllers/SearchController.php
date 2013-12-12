<?php
class SearchController extends Controller{
    
    function actionIndex(){
       echo 'search list results from sunday';
    }
    
    function actionList(){
        //$qs = Yii::app()->request->url;
       echo var_export($qs);
    }
}
