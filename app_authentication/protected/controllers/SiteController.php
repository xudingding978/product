<?php

header("Access-Control-Allow-Origin: *");
header('Content-type: *');

header('Access-Control-Request-Method: *');
header('Access-Control-Allow-Methods: PUT, POST, OPTIONS,GET');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

class SiteController extends Controller {

    /**
     * Declares class-based actions.
     */
    public $footer;

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

        $this->layout = '//layouts/frontEnd';
        $this->render('index');
    }

    public function actionTest() {
        
  
        // renders the view file 'protected/views/site/index.php'
        // using the default layout 'protected/views/layouts/main.php'
    //    $this->render('test');
    }

    /**
     * This is the action to handle external exceptions.
     */
    public function actionError() {
//        if ($error == Yii::app()->errorHandler->error) {
//            if (Yii::app()->request->isAjaxRequest)
//                echo $error['message'];
//            else
//                $this->render('error', $error);
//        }
    }

    public function actionClose() {
        $this->render('close');
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

//    public function actionLogin() {
//          
//        $this->layout = '//layouts/signup';
//        
//        $this->defaultLogin();
//    }

//    public function actionLogin() {
//        $model = new LoginForm;
//        $this->render('login', array('model' => $model));
//
//
//    }
    
    
    public function actionCreate() {

        // Uncomment the following line if AJAX validation is needed
        // $this->performAjaxValidation($model);
                
//            $newUser = User::model()
//                ->findByAttributes(array('USER_NAME' => 'shuai3'));
//            error_log(var_export($newUser->attributes,true));
//   $model->PWD_HASH='654321';
//    $model->save();


        
             $model = new User;
 
            $request_array = CJSON::decode(file_get_contents('php://input'));
            error_log(var_export($request_array[3],true));
            $model->REC_DATETIME = new CDbExpression('NOW()');
            $model->REC_TIMESTAMP = new CDbExpression('NOW()');
            $model->TENANT_REC_ID = "1";
            $model->FIRST_NAME=$request_array[0];
            $model->LAST_NAME=$request_array[1];
            $model->PWD_HASH =$request_array[2];
            $model->EMAIL_ADDRESS=$request_array[3];
            $model->COUCHBASE_ID = strval(rand(9999999999, 99999999999));
             
            $cb = new Couchbase("cb1.hubsrv.com:8091", "Administrator", "Pa55word", "production", true);
            $rand_id = $model->COUCHBASE_ID;
            $temp = $this->getMega();
            $temp["id"] = $rand_id;
            $temp["user"][0]["id"] = $rand_id;
            $temp["created"] = $this->getCurrentUTC();
            $temp["user"][0]["photo_url"] = "https://s3-ap-southeast-2.amazonaws.com/develop.devbox/profile_pic/default/defaultpic1.jpg";
            $temp["user"][0]["photo_url_large"] = "https://s3-ap-southeast-2.amazonaws.com/develop.devbox/profile_pic/default/defaultpic1.jpg";        
            $temp["user"][0]["display_name"] = $model->USER_NAME;
            $temp["user"][0]["first_name"] = $model->FIRST_NAME;
            $temp["user"][0]["last_name"] = $model->LAST_NAME;
            $temp["user"][0]["email"] = $model->EMAIL_ADDRESS;
error_log('saved');
             error_log(var_export($model->attributes ,true));
   
             if ($cb->add(substr($_SERVER['HTTP_HOST'], strpos($_SERVER['HTTP_HOST'], '.') + 1) . "/users/" . $rand_id, CJSON::encode($temp))) {
                    $model->save(false);
//                    Yii::app()->session['newUser'] = "new";
            $this->sendResponse(200, CJSON::encode($model));
//           if ($model->save(false) ) {
//
//                 error_log(var_export($model->attributes,true));
//                    $identity = new CommonUserIdentity($model->USER_NAME, $model->PWD_HASH);
//                    $identity->authenticate();
//                    Yii::app()->user->login($identity, 0);
//
//                    if (Yii::app()->session['newUser'] == "new") {
//
//                        $this->render('welcome');
//                        unset(Yii::app()->session['newUser']);
//                    } else {
//                        $this->render('close');
//                   }
//               }
           }
         //}
 
    }

    
      public function actionGetmodel() {
         
          $request_array = CJSON::decode(file_get_contents('php://input'));
       
         $currentUser = User::model()
                ->findByAttributes(array('COUCHBASE_ID' => $request_array));
         error_log(var_export($request_array[0],true));
$this->sendResponse(200, CJSON::encode($currentUser));
              
         
     }
    
     
     public function actionGetemail() {
         
          $request_array = CJSON::decode(file_get_contents('php://input'));
     
       error_log(var_export($request_array [0],true));
         $currentUser = User::model()
                ->findByAttributes(array('EMAIL_ADDRESS' => $request_array[0]));
         error_log(var_export($currentUser->COUCHBASE_ID,true));
             if(isset($currentUser) ){
$this->sendResponse(200, true);

error_log('return false');
             }
             else{
                 $this->sendResponse(200, false);
                 error_log('return true');
             }
         
     }
     
    
    
    
    
     public function actionUpdate() {
         
          $request_array = CJSON::decode(file_get_contents('php://input'));
       
         $currentUser = User::model()
                ->findByAttributes(array('COUCHBASE_ID' => $request_array[0]));
        
          
//          if($currentUser->PWD_HASH===$request_array[1]&&$request_array[2]===$request_array[3])
//          {   
          error_log(var_export($request_array[4],true));
              $currentUser->PWD_HASH=$request_array[2];
          
        $currentUser->save($request_array[4]);
         

         
//          }
         
     }
    
    
    
    
    public function getMega() {
        $mega = '{
  "id": "",
  "type": "user",
  "accessed": null,
  "active_yn": null,
  "article_id": null,
  "category": null,
  "created": null,
  "creator": "",
  "deleted": null,
  "domains": null,
  "editors": null,
  "follower_count": null,
  "followers": null,
  "following": null,
  "following_count": null,
  "country": null,
  "region": null,
  "geography": null,
  "indexed_yn": null,
  "object_image_linkto": null,
  "object_image_url": null,
  "object_title": null,
  "owner_profile_pic": null,
  "owner_title": null,
  "owner_url": null,
  "owners": null,
  "status_id": null,
  "updated": null,
  "uri_url": null,
  "view_count": null,
  "keywords": "",
  "photo": [],
  "user": []
}';
        return json_decode($mega, true);
    }
    
    
    

    public function getCurrentUTC() {

        $datetime = date("Y-m-d H:i:s");
        $time_string = strtotime($datetime);
        return $time_string;
    }
    
    
    
    
    
      public function actionLogin() {
          
          
 $request_array = CJSON::decode(file_get_contents('php://input'));
 error_log(var_export($request_array[0],true));
         error_log(var_export($request_array[1],true));
         
   $currentUser = User::model()
                ->findByAttributes(array('EMAIL_ADDRESS' => $request_array[0]));
           
           
           if($currentUser->PWD_HASH===$request_array[1])
           {
               error_log('bbbbbbb');
               $this->sendResponse(200, CJSON::encode($currentUser));
           }
          
         
         
    }

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
//    public function defaultLogin() {
//
//        $model = new LoginForm;
//
//        
//        
//        
//        // if it is ajax validation request
//        if (!Yii::app()->user->isGuest) {
//            $this->redirect(Yii::app()->user->returnUrl);
//        }
//
//        if (isset($_POST['ajax']) && $_POST['ajax'] === 'login-form') {
//            echo CActiveForm::validate($model);
//            Yii::app()->end();
//        }
//
//        // collect user input data
//        if (isset($_POST['LoginForm'])) {
//            $model->attributes = $_POST['LoginForm'];
//        
//            // validate user input and redirect to the previous page if valid
//            if ($model->validate() && $model->login())
//            {
//               $this->render('//user/close');
//            }
////                $this->render('//user/close');
//        }
//        // display the login form                
//        $this->render('login', array('model' => $model));
//    }

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

        //    $this->redirect(Yii::app()->homeUrl);
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
        $dataProvider = ShadowListing::model()->findAll();
        echo CJSON::encode($dataProvider);
    }

    public function actionSearchStart() {
        $cb = new Couchbase("cb1.hubsrv.com:8091", "", "Pa55word", "test", true);
        $result_arr = $cb->getMulti(array('photo_1', 'photo_2', 'photo_3', 'photo_4', 'photo_5', 'photo_6', 'photo_7', 'photo_8', 'photo_9', 'photo_10'));

        foreach ($result_arr as $key => $value) {
            $newvalue = CJSON::decode($value);
            echo CJSON::encode($newvalue);
        }
        //echo var_dump($result_arr);
    }

    public function actionGetSlideImage() {
        $dataProvider = Client::model()->findAll();
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


