<?php
header("Access-Control-Allow-Origin: *");
header('Content-type: *');
header('Access-Control-Request-Method: *');
header('Access-Control-Allow-Methods: PUT, POST, OPTIONS,GET');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

class LoginController extends Controller {

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
        //$this->layout = '//layouts/frontEnd';
        if (Yii::app()->user->isGuest) {
            $this->actionLogin();
        } else {
            $this->render('index');
        }
    }


    /**
     * This is the action to handle external exceptions.
     */
    public function actionError() {

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

    public function actionRead() {
        
    }

    public function actionCreate() {
 

        $model = new User;

        $request_array = CJSON::decode(file_get_contents('php://input'));

        $model->REC_DATETIME = new CDbExpression('NOW()');
        $model->REC_TIMESTAMP = new CDbExpression('NOW()');
        $model->TENANT_REC_ID = "1";
        $model->USER_NAME = $request_array[3];
        $model->FIRST_NAME = $request_array[0];
        $model->LAST_NAME = $request_array[1];
        $model->PWD_HASH = $request_array[2];
        $model->EMAIL_ADDRESS = $request_array[3];
        $model->COUCHBASE_ID = strval(rand(9999999999, 99999999999));

        $cb = $this->couchBaseConnection();
        $rand_id = $model->COUCHBASE_ID;
        $temp = $this->getMega();
        $temp["id"] = $rand_id;
        $temp["user"][0]["id"] = $rand_id;
        $temp["created"] = $this->getCurrentUTC();
        $temp["user"][0]["photo_url"] = "https://s3-ap-southeast-2.amazonaws.com/develop.devbox/profile_pic/default/defaultpic1.jpg";
        $temp["user"][0]["photo_url_large"] = "https://s3-ap-southeast-2.amazonaws.com/develop.devbox/profile_pic/default/defaultpic1.jpg";
        $temp["user"][0]["display_name"] = $model->FIRST_NAME;
        $temp["user"][0]["first_name"] = $model->FIRST_NAME;
        $temp["user"][0]["last_name"] = $model->LAST_NAME;
        $temp["user"][0]["email"] = $model->EMAIL_ADDRESS;
        $temp['user'][0]['selected_topics'] = "";
        $temp['user'][0]['gender'] = $request_array[5];
        $temp['user'][0]['age'] = $request_array[6];
        $temp['user'][0]['description'] = null;
        $temp['user'][0]['about_me'] = null;
        $temp['user'][0]['facebook_link'] = null;
        $temp['user'][0]['twitter_link'] = null;
        $temp['user'][0]['linkedin_link'] = null;
        $temp['user'][0]['googleplus_link'] = null;
        $temp['user'][0]['pinterest_link'] = null;
        $temp['user'][0]['youtube_link'] = null;
        $temp['user'][0]['region'] = $request_array[4];
        $temp['user'][0]['password'] = null;

        $urlController = new UrlController();
        $link = "http://" . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
        $domain = $urlController->getDomain($link);

        if ($cb->add($domain . "/users/" . $rand_id, CJSON::encode($temp))) {
            if ($model->save(false)) {

                $this->sendResponse(200, CJSON::encode($model));
            }
        }
    }

    public function actionGetmodel() {


        $request_array = CJSON::decode(file_get_contents('php://input'));
        $currentUser = User::model()
                ->findByAttributes(array('COUCHBASE_ID' => $request_array));
        $this->sendResponse(200, CJSON::encode($currentUser));
    }

    public function actionGetemail() {

        $request_array = CJSON::decode(file_get_contents('php://input'));
        $currentUser = User::model()
                ->findByAttributes(array('EMAIL_ADDRESS' => $request_array[0]));
        if (isset($currentUser)) {
            if ($currentUser->PWD_HASH === "blankblankblank") {
                $this->sendResponse(200, 0);
            } else {
                $this->sendResponse(200, 2);
            }
        } else {
            $this->sendResponse(200, 1);
        }
    }

    public function actionResetemail() {

        $request_array = CJSON::decode(file_get_contents('php://input'));
        $currentUser = User::model()
                ->findByAttributes(array('EMAIL_ADDRESS' => $request_array[0]));
        if (isset($currentUser)) {
            if ($currentUser->PWD_HASH === "blankblankblank") {
                $this->sendResponse(200, 0);
            } else {
                $chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
                $count = mb_strlen($chars);

                for ($i = 0, $result = ''; $i < 8; $i++) {
                    $index = rand(0, $count - 1);
                    $result .= mb_substr($chars, $index, 1);
                }
                $currentUser->PWD_HASH = $result;

                $currentUser->save(false);
                $this->sendResponse(200, CJSON::encode($currentUser));
            }
        } else {
            $this->sendResponse(200, 1);
        }
    }

    public function actionUpdate() {

        $request_array = CJSON::decode(file_get_contents('php://input'));
        $currentUser = User::model()
                ->findByAttributes(array('COUCHBASE_ID' => $request_array[0]));
  
        $currentUser->PWD_HASH = $request_array[2];
        $currentUser->save($request_array[4]);

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
// store session data
       Yii::app()->session['couchbase_id'] = "value";
        $request_array = CJSON::decode(file_get_contents('php://input'));

        if ($request_array[2] === true) {
            $currentUser = User::model()
                    ->findByAttributes(array('EMAIL_ADDRESS' => $request_array[0]));
            if (isset($currentUser)) {
                if ($currentUser->PWD_HASH === "blankblankblank") {
                    $this->sendResponse(200, 0);
                } else if ($currentUser->PWD_HASH === $request_array[1]) {
               //     $_SESSION['couchbase_id'] = $currentUser->COUCHBASE_ID;
                    $this->sendResponse(200, CJSON::encode($currentUser));
                }
            } else {
                $this->sendResponse(200, 1);
            }
        }
        if ($request_array[2] === false) {
            $currentUser = User::model()
                    ->findByAttributes(array('USER_NAME' => $request_array[0]));
            if (isset($currentUser)) {
                if ($currentUser->PWD_HASH === "blankblankblank") {
                    $this->sendResponse(200, 0);
                } else if ($currentUser->PWD_HASH === $request_array[1]) {
                 //   $_SESSION['couchbase_id'] = $currentUser->COUCHBASE_ID;
                 error_log(  Yii::app()->session['couchbase_id']);
                    $this->sendResponse(200, CJSON::encode($currentUser));
                }
            } else {
                $this->sendResponse(200, 1);
            }
        }
    }

    public function actionAjax() {
        $model = new LoginForm;

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

