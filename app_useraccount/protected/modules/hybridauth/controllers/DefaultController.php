<?php

class DefaultController extends CController {

    public function actionIndex() {
        $this->render('index');
    }

    /**
     * Public login action.  It swallows exceptions from Hybrid_Auth. Comment try..catch to bubble exceptions up. 
     */
    public function actionLogin() {
        //try {
        if (!isset(Yii::app()->session['hybridauth-ref'])) {
            Yii::app()->session['hybridauth-ref'] = Yii::app()->request->urlReferrer;
        }
        $this->_doLogin();
        //} catch (Exception $e) {
        //	Yii::app()->user->setFlash('hybridauth-error', "Something went wrong, did you cancel?");
        //	$this->redirect(Yii::app()->session['hybridauth-ref'], true);
        //}
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
            if (Yii::app()->user->isGuest) {
                $this->_loginUser($identity);
            } else {
                //they shouldn't get here because they are already logged in AND have a record for
                // that provider.  Just bounce them on
                $this->redirect(Yii::app()->user->returnUrl);
            }
        } else if ($identity->errorCode == RemoteUserIdentity::ERROR_USERNAME_INVALID) {
            // They have authenticated to their provider but we don't have a matching HaLogin entry
            if (Yii::app()->user->isGuest) {
                // They aren't logged in => display a form to choose their username & email 
                // (we might not get it from the provider)
                if ($this->module->withYiiUser == true) {
                    Yii::import('application.modules.user.models.*');
                } else {
                    Yii::import('application.models.*');
                }

                $user = new User;





                if (isset($_POST['User'])) {
                    //Save the form
                    $user->attributes = $_POST['User'];



                    if ($user->validate() && $user->save()) {
                        if ($this->module->withYiiUser == true) {
//                            $userProfile = new UserProfile;
//                            $userProfile->FIRST_NAME = 'firstname';
//                            $userProfile->GENDER = 'firstname';
//                            $userProfile->save();
                        }


                        $identity->id = $user->REC_ID;
                        $identity->username = $user->USER_NAME;
                        $this->_linkProvider($identity);
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
            } else {
                // They are already logged in, link their user account with new provider
                $identity->id = Yii::app()->user->id;
                $this->_linkProvider($identity);
                $this->redirect(Yii::app()->session['hybridauth-ref']);
                unset(Yii::app()->session['hybridauth-ref']);
            }
        }
    }

    private function _linkProvider($identity) {
//        $config = Yii::app()->getBasePath() . '/config/provider_config.php';
 //       require_once( Yii::app()->getBasePath() . '/modules/hybridauth/Hybrid/Auth.php');
        
       $config = '/home/ubuntu/platform/hubstar/app_useraccount/protected/config/provider_config.php';
        require_once( '/home/ubuntu/platform/hubstar/app_useraccount/protected/modules/hybridauth/Hybrid/Auth.php' );
        
        $hybridauth = new Hybrid_Auth($config);
        $adapter = $hybridauth->authenticate($_GET['provider']);
        $user_profile = $adapter->getUserProfile();

        $userProfile = new UserProfile;
        $userProfile->LOGIN_PROVIDER_IDENTIFIER = $identity->loginProviderIdentifier;
        $userProfile->LOGIN_PROVIDER = $identity->loginProvider;
        $userProfile->USER_REC_ID = $identity->id;
        $userProfile->IDENTIFIER = $user_profile->identifier;
        $userProfile->PROFILE_URL = $user_profile->profileURL;
        $userProfile->WEBSITE_URL = $user_profile->webSiteURL;
        $userProfile->PHOTO_URL = $user_profile->photoURL;
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
        $userProfile->save();
    }

    private function _loginUser($identity) {
        Yii::app()->user->login($identity, 0);
        $this->redirect(Yii::app()->user->returnUrl);
        //   error_log(Yii::app()->user->returnUrl);
        //     $this->redirect('http://'.$_SERVER['SERVER_NAME'].'/hybridauth');
        //  $this->redirect('http://account.business-software.co.nz/hybridauth');
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

}
