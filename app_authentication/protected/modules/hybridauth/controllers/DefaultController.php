<?php

class DefaultController extends Controller {

    public function actionIndex() {



        $this->render('index');
    }

    /**
     * Public login action.  It swallows exceptions from Hybrid_Auth. Comment try..catch to bubble exceptions up. 
     */
    public function actionLogin() {
        //try {

        $this->layout = '//layouts/signup';

        if (!isset(Yii::app()->session['hybridauth-ref'])) {

            Yii::app()->session['hybridauth-ref'] = Yii::app()->request->urlReferrer;
        }




        $this->_doLogin();
    }

    /**
     * Main method to handle login attempts.  If the user passes authentication with their
     * chosen provider then it displays a form for them to choose their username and email.
     * The email address they choose is *not* verified.
     * 
     * If they are already logged in then it links the new provider to their account
     * 
     * @throws Exception if a provider isn't supplied, or it has non-alpha characters
     */
    private function _doLogin() {


        if (!isset($_GET['provider']))
            throw new Exception("You haven't supplied a provider");

        if (!ctype_alpha($_GET['provider'])) {
            throw new Exception("Invalid characters in provider string");
        }

        $identity = new RemoteUserIdentity($_GET['provider'], $this->module->getHybridauth());
        if ($identity->authenticate()) {
            // They have authenticated AND we have a user record associated with that provider
            $this->loginWithOldUserFromSocialPlatfrom($identity);
        } else if ($identity->errorCode == RemoteUserIdentity::ERROR_USERNAME_INVALID) {
            $this->loginWithNewUserFromSocialPlatfrom($identity);

            // They have authenticated to their provider but we don't have a matching HaLogin entry
            // 
        }
    }

    private function _linkProvider($identity) {
        $config = Yii::app()->getBasePath() . '/../../app_authentication/protected/modules/hybridauth/config/provider_config.php';
        require_once( Yii::app()->getBasePath() . '/../../app_authentication/protected/modules/hybridauth/Hybrid/Auth.php');

        $hybridauth = new Hybrid_Auth($config);

        $adapter = $hybridauth->authenticate($_GET['provider']);


        $user_profile = $adapter->getUserProfile(true);

        $user = new User;
        $user->attributes = $_POST['User'];
        $user->TENANT_REC_ID = 1;

        $user_profile->email = $user->EMAIL_ADDRESS;
        $user_profile->displayName = $user->USER_NAME;
        $user_profile->lastName = $user->LAST_NAME;
        $user_profile->firstName = $user->FIRST_NAME;
        if ($user_profile->photoURL === null || $user_profile->photoURL === "") {

            $user_profile->photoURL = "https://s3-ap-southeast-2.amazonaws.com/develop.devbox/profile_pic/default/defaultpic1.jpg";
        }
        if ($user_profile->photoURL_large === null || $user_profile->photoURL_large === "") {

            $user_profile->photoURL_large = "https://s3-ap-southeast-2.amazonaws.com/develop.devbox/profile_pic/default/defaultpic1.jpg";
        }
        $userProfile = new UserProfile;
        $userProfile->LOGIN_PROVIDER_IDENTIFIER = $identity->loginProviderIdentifier;
        $userProfile->LOGIN_PROVIDER = $identity->loginProvider;
        $userProfile->USER_REC_ID = $identity->id;
        $userProfile->IDENTIFIER = $user_profile->identifier;
        $userProfile->PROFILE_URL = $user_profile->profileURL;
        $userProfile->WEBSITE_URL = $user_profile->webSiteURL;
        $userProfile->PHOTO_URL = $user_profile->photoURL;
        $userProfile->PHOTO_URL_LARGE = $user_profile->photoURL_large;
        $userProfile->DISPLAY_NAME = $user_profile->displayName;
        $userProfile->DESCRIPTION = $user_profile->description;
        $userProfile->FIRST_NAME = $user_profile->firstName;
        $userProfile->LAST_NAME = $user_profile->lastName;
        $userProfile->GENDER = $user_profile->gender;
        $userProfile->LANGUAGE = $user_profile->language;
        $userProfile->AGE = $user_profile->age;
        $userProfile->BIRTH_DAY = $user_profile->birthDay;
        $userProfile->BIRTH_MONTH = $user_profile->birthMonth;
        $userProfile->BIRTH_YEAR = $user_profile->birthYear;
        $userProfile->EMAIL = $user_profile->email;
        $userProfile->EMAIL_VERIFIED = $user_profile->emailVerified;
        $userProfile->PHONE = $user_profile->phone;
        $userProfile->COUNTRY = $user_profile->country;
        $userProfile->REGION = $user_profile->region;
        $userProfile->CITY = $user_profile->city;
        $userProfile->ZIP = $user_profile->zip;
        $userProfile->POST_CODE = '';

        //   return $user_profile;
        $userProfile->save();
        
        $data_arr = array();
        $data_arr['url'] = $userProfile->PHOTO_URL_LARGE;
        $data_arr['newStyleImageName'] = 'user_picture';
        $data_arr['mode'] = 'user_picture';
        $data_arr['id'] = $user->COUCHBASE_ID;
        $pass_arr = CJSON::encode($data_arr);


        try {
            $ch = curl_init("http://api.test.beta.trendsideas.com/users/saveimtos3");

            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
            curl_setopt($ch, CURLOPT_POSTFIELDS, $pass_arr);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));

            $back = curl_exec($ch);
            curl_close($ch);
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
        
        
        
        $test = explode('.', $_SERVER['HTTP_HOST']);

        if ($test[0] === "test") {
            $cb = new Couchbase("cb1.hubsrv.com:8091", "", "", "test", true);
        } else if ($test[0] === "develop") {
            $cb = new Couchbase("cb1.hubsrv.com:8091", "", "", "develop", true);
        } else if ($test[0] === "my" || $test[0] === "beta") {
            $cb = new Couchbase("cb1.hubsrv.com:8091", "", "", "production", true);
        }

        $rand_id = $user->COUCHBASE_ID;
        $temp = $this->getMega();
        $temp["id"] = $rand_id;
        $temp["created"] = $this->getCurrentUTC();
        $temp["user"][0]["id"] = $rand_id;
        $temp["user"][0]["identifier"] = $userProfile->IDENTIFIER;
        $temp["user"][0]["profile_url"] = $userProfile->PROFILE_URL;
        $temp["user"][0]["website_url"] = $userProfile->WEBSITE_URL;
        $temp["user"][0]["photo_url"] = $userProfile->PHOTO_URL;
        $temp["user"][0]["photo_url_large"] = "http://s3.hubsrv.com/trendsideas.com/users/" . $rand_id . "/user_picture/user_picture";
        $temp["user"][0]["display_name"] = $userProfile->DISPLAY_NAME;
        $temp["user"][0]["description"] = $userProfile->DESCRIPTION;
        $temp["user"][0]["first_name"] = $userProfile->FIRST_NAME;
        $temp["user"][0]["last_name"] = $userProfile->LAST_NAME;
        $temp["user"][0]["gender"] = $userProfile->GENDER;
        $temp["user"][0]["age"] = $userProfile->AGE;
        $temp["user"][0]["birth_day"] = $userProfile->BIRTH_DAY;
        $temp["user"][0]["birth_month"] = $userProfile->BIRTH_MONTH;
        $temp["user"][0]["birth_year"] = $userProfile->BIRTH_YEAR;
        $temp["user"][0]["selected_topics"] = "";
        $temp["user"][0]["email"] = $userProfile->EMAIL;
        $temp["user"][0]["phone"] = $userProfile->PHONE;
        $temp["user"][0]["email_verified"] = $userProfile->EMAIL_VERIFIED;
        $temp["user"][0]["country"] = $userProfile->COUNTRY;
        $temp["user"][0]["region"] = $userProfile->REGION;
        $temp["user"][0]["city"] = $userProfile->CITY;
        $temp["user"][0]["zip"] = $userProfile->ZIP;


        Yii::app()->session['newUser'] = "new";

        $urlController = new UrlController();
        $link = "http://" . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
        $domain = $urlController->getDomain($link);

        $cb->add($domain . "/users/" . $rand_id, CJSON::encode($temp));

        
    }

    /**
     * Action for successful authenication with their SocialMedia provider
     *  
     */
    private function _loginUser($identity) {
        Yii::app()->user->login($identity, 0);
        if (Yii::app()->session['newUser'] == "new") {
            $this->render('welcome');
            unset(Yii::app()->session['newUser']);
        } else {
            $this->render('close');
        }
    }

    /**
     * Action for URL that Hybrid_Auth redirects to when coming back from providers.
     * Calls Hybrid_Auth to process login. 
     */
    public function actionCallback() {
        require dirname(__FILE__) . '/../Hybrid/Endpoint.php';
        Hybrid_Endpoint::process();
    }

    public function actionUnlink() {
        $login = UserProfile::getLogin(Yii::app()->user->getid(), $_POST['hybridauth-unlinkprovider']);
        $login->delete();
        $this->redirect(Yii::app()->getRequest()->urlReferrer);
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

    public function loginWithOldUserFromSocialPlatfrom($identity) {
        if (Yii::app()->user->isGuest) {
            $this->_loginUser($identity);
        } else {
            $this->render('close');
        }
    }

    public function loginWithNewUserFromSocialPlatfrom($identity) {
        if (Yii::app()->user->isGuest) {
            // They aren't logged in => display a form to choose their username & email 
            // (we might not get it from the provider) 
            $this->createNewUser($identity);
        } else {
            // They are already logged in, link their user account with new provider
            $identity->id = Yii::app()->user->id;
            $this->_linkProvider($identity);
            $this->redirect(Yii::app()->session['hybridauth-ref']);
            unset(Yii::app()->session['hybridauth-ref']);
        }
    }

    public function createNewUser($identity) {
        if ($this->module->withYiiUser == true) {
            Yii::import('application.modules.user.models.*');
        } else {
            Yii::import('application.models.*');
        }

        $user = new User;
        if (isset($_POST['User'])) {
            //Save the form
            $user->attributes = $_POST['User'];
            $user->REC_DATETIME = new CDbExpression('NOW()');
            $user->REC_TIMESTAMP = new CDbExpression('NOW()');
            // creating the users record in the Users table - DingDing to investigate
            if ($user->validate() && $user->save()) {
                $identity->id = $user->REC_ID;
                $identity->username = $user->USER_NAME;
                // creates the Users Profile record in the userprofile table
                $this->_linkProvider($identity);
                // post to facebook on successful registration
                // login in the user and redirect 
                $this->_loginUser($identity);
            } // } else { do nothing } => the form will get redisplayed
        } else {
            //Display the form with some entries prefilled if we have the info.
            if (isset($identity->userData->email)) {
                $user->EMAIL_ADDRESS = $identity->userData->email;
                $email = explode('@', $user->email);
                $user->username = $email[0];
            }
        }

        $this->render('createUser', array(
            'user' => $user,
        ));
    }

}
