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
    
    public function actionCouch() {
        // renders the view file 'protected/views/site/index.php'
        // using the default layout 'protected/views/layouts/main.php'
        $this->render('couch');
    }


    /**
     * This is the default 'index' action that is invoked
     * when an action is not explicitly requested by users.
     */
    public function actionIndex() {
        // renders the view file 'protected/views/site/index.php'
        // using the default layout 'protected/views/layouts/main.php'
        $this->render('index');
    }

    public function actionTest() {
        // renders the view file 'protected/views/site/index.php'
        // using the default layout 'protected/views/layouts/main.php'
        $this->render('test');
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
     * Displays the contact page
     */
    public function actionContact() {
        $model = new ContactForm;
        if (isset($_POST['ContactForm'])) {
            $model->attributes = $_POST['ContactForm'];
            if ($model->validate()) {
                $name = '=?UTF-8?B?' . base64_encode($model->name) . '?=';
                $subject = '=?UTF-8?B?' . base64_encode($model->subject) . '?=';
                $headers = "From: $name <{$model->email}>\r\n" .
                        "Reply-To: {$model->email}\r\n" .
                        "MIME-Version: 1.0\r\n" .
                        "Content-type: text/plain; charset=UTF-8";

                mail(Yii::app()->params['adminEmail'], $subject, $model->body, $headers);
                Yii::app()->user->setFlash('contact', 'Thank you for contacting us. We will respond to you as soon as possible.');
                $this->refresh();
            }
        }
        $this->render('contact', array('model' => $model));
    }

//    /**
//     * Displays the login page
//     */
//    public function actionLogin() {
//        // require_once  ('/home/devbox/NetBeansProjects/bds-v3.1/common/protected/config/domainSetting.php');
//        $domainSetting = new DomainSetting();
//        Yii::app()->user->setReturnUrl($_SERVER['HTTP_REFERER']);
//        $this->redirect('http://account' . $domainSetting->getDomain() . '/site/login/');
//    }

    public function actionLogin() {

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
                $this->redirect('index');
        }
    }

    public function actionAjax() {
        $model = new LoginForm;

        // uncomment the following code to enable ajax-based validation
//        if (isset($_POST['ajax']) && $_POST['ajax'] === 'login-form') {
//            echo CActiveForm::validate($model);
//            Yii::app()->end();
//        }



        if (isset($_POST['LoginForm'])) {
            $model->attributes = $_POST['LoginForm'];

            if ($model->validate() && $model->login()) {

                    return;

            } else {
                echo CActiveForm::validate($model);
                return;
            }
        }
    }

    /**
     * Logs out the current user and redirect to homepage.
     */
    public function actionLogout() {
        Yii::app()->user->logout();
        $this->redirect(Yii::app()->homeUrl);
    }

    public function actionSet() {
        $class = new A();
        Yii::app()->cache->set('set', $class, 30);
    }

    public function actionGet() {
        $value = Yii::app()->cache->get('set');

        echo CJSON::encode($value);
    }

    public function actionGetDataFromItemtable() {
        $dataProvider =  ShadowListing::model()->findAll();
        echo CJSON::encode($dataProvider);
    }

}

class ListingCast {

    public $REC_ID;
    public $REC_DATETIME;
    public $REC_TIMESTAMP;
    public $LISTING_TYPE_REC_ID;
    public $ITEM_ID;
    public $listingDetail;

    function __construct($rec_id, $recDataTime, $recTimeStamp, $listing_type_rec_id, $item_id) {

        $this->REC_ID = $rec_id;
        $this->REC_DATETIME = $recDataTime;
        $this->REC_TIMESTAMP = $recTimeStamp;
        $this->LISTING_TYPE_REC_ID = $listing_type_rec_id;
        $this->ITEM_ID = $item_id;
    }

    public function setListDetail() {
        if ($this->LISTING_TYPE_REC_ID == 2) {
            $supplier = Supplier::model()->findByPk($this->ITEM_ID);
            $this->listingDetail = $supplier->NAME;
        } else {
            $this->listingDetail = 'something wrong';
        }
    }

}

