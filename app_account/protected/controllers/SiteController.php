<?php

class SiteController extends Controller {

    /**
     * Declares class-based actions.
     */
    public function actions() {
        return array(
            // captcha action renders the CAPTCHA image displayed on the contact page
            'captcha' => array(
                'class' => 'CCaptchaAction',
                'backColor' => 0xFFFFFF,
            ),
            // page action renders "static" pages stored under 'protected/views/site/pages'
            // They can be accessed via: index.php?r=site/page&view=FileName
            'page' => array(
                'class' => 'CViewAction',
            ),
        );
    }

    /**
     * This is the default 'index' action that is invoked
     * when an action is not explicitly requested by users.
     */
    public function actionIndex() {

        // renders the view file 'protected/views/site/index.php'
        // using the default layout 'protected/views/layouts/main.php'
        if (!Yii::app()->user->isGuest) {
            $this->redirect('user/view/' . Yii::app()->user->id);
        } else {
            $this->render('index');
        }
        //   $this->defaultLogin();
    }

    /**
     * This is the action to handle external exceptions.
     */
    public function actionError() {
        if ($error == Yii::app()->errorHandler->error) {
            if (Yii::app()->request->isAjaxRequest)
                echo $error['message'];
            else
                $this->render('error', $error);
        }
    }

    /**
     * Displays the login page
     */
    public function actionLogin() {
        $this->defaultLogin();
    }

    /**
     * Logs out the current user and redirect to homepage.
     */
    public function actionLogout() {
        Yii::app()->user->logout();
        $this->redirect(Yii::app()->user->returnUrl);
    }

    public function actionTest() {

        require_once('rb.php');
//require_once('rb.php');
        /* @var $this SiteController */
        /* @var $error array */

//This creates an SQLite database in /tmp
//R::setup('database.txt'); -- for other systems
//Ready. Now insert a bean!
//
        spl_autoload_unregister(array('YiiBase', 'autoload'));
        Yii::import('application.vendors.*');
        R::setup('mysql:host=127.0.0.1;dbname=redbean_test', 'root', 'Pa55word');
        $model = new TestForm;
        if (isset($_POST['TestForm'])) {
            $model->attributes = $_POST['TestForm'];
            $test = R::dispense('test');
            $test->username = $model->username;
            $test->message = $model->message;
            echo 'Thanks ' . $model->username . ' for your: ' . $model->message;
            R::store($test);
        }

// Once we have finished using the library, give back the 
// power to Yii... 
        spl_autoload_register(array('YiiBase', 'autoload'));

        $this->render('test');
    }

    public function defaultLogin() {

        $model = new LoginForm;

        // if it is ajax validation request
        if (!Yii::app()->user->isGuest) {
            $this->redirect(Yii::app()->user->returnUrl);
        }

        if (isset($_POST['ajax']) && $_POST['ajax'] === 'login-form') {
            echo CActiveForm::validate($model);
            Yii::app()->end();
        }

        // collect user input data
        if (isset($_POST['LoginForm'])) {
            $model->attributes = $_POST['LoginForm'];
            // validate user input and redirect to the previous page if valid
            if ($model->validate() && $model->login())
                $this->redirect(Yii::app()->user->returnUrl);
        }
        // display the login form                
        $this->render('login', array('model' => $model));
    }

    /**
     * Displays the login_model page
     */
    public function actionLogin_model() {
        $model = new LoginForm;

        // if it is ajax validation request
        if (!Yii::app()->user->isGuest) {
            $this->redirect(Yii::app()->user->returnUrl);
        }

        if (isset($_POST['ajax']) && $_POST['ajax'] === 'login-form') {
            echo CActiveForm::validate($model);
            Yii::app()->end();
        }

        // collect user input data
        if (isset($_POST['LoginForm'])) {
            $model->attributes = $_POST['LoginForm'];
            // validate user input and redirect to the previous page if valid
            if ($model->validate() && $model->login())
                $this->redirect(Yii::app()->user->returnUrl);
        }
        // display the login form                
        $this->render('login_model', array('model' => $model));
    }

}