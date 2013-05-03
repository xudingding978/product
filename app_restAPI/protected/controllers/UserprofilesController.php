<?php

class UserProfilesController extends Controller {

    /**
     * @return array action filters
     */
    public function filters() {
        return array(
            'accessControl', // perform access control for CRUD operations
            'postOnly + delete', // we only allow deletion via POST request
        );
    }

    public function actionIndex() {
        echo Yii::app()->request->baseUrl;
        //echo '{response from userProfileController}';
        
        
    }
}

?>
