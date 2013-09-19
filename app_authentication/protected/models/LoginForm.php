<?php

/**
 * LoginForm class.
 * LoginForm is the data structure for keeping
 * user login form data. It is used by the 'login' action of 'SiteController'.
 */
class LoginForm extends CFormModel {

    public $username;
    public $password;
    public $rememberMe;
    private $_identity;

    /**
     * Declares the validation rules.
     * The rules state that username and password are required,
     * and password needs to be authenticated.
     */
    public function rules() {
        return array(
            // username and password are required
            array('username, password', 'required'),
            // rememberMe needs to be a boolean
            array('rememberMe', 'boolean'),
            // password needs to be authenticated
            array('password', 'authenticate'),
        );
    }

    /**
     * Declares attribute labels.
     */
    public function attributeLabels() {
        return array(
            'rememberMe' => 'Remember me next time',
        );
    }

    /**
     * Authenticates the password.
     * This is the 'authenticate' validator as declared in rules().
     */
    public function authenticate($attribute, $params) {
        error_log('hello');
        
        if (!$this->hasErrors()) {
            $this->_identity = new CommonUserIdentity($this->username, $this->password);
             error_log('authenticate'.var_export( $this->_identity,true));
             error_log('authenticate'.var_export( $this->_identity->authenticate(),true));
            if (!$this->_identity->authenticate())
               
                $this->addError('password', 'Incorrect username or password.');
        }
    }
 
    /**
     * Logs in the user using the given username and password in the model.
     * @return boolean whether login is successful
     */
    public function login() {
          error_log('login'.var_export( $this->username,true));
//         $user = User::model()
//                ->findByAttributes(array('USER_NAME'=>$this->username));
//         error_log(var_export($user->PWD_HASH,true));
//         
//              if ($this->password !== $user->PWD_HASH) {
//                  error_log('false');
//            return false;
//            
//        }
//      else  if ($this->password === $user->PWD_HASH) {
//        error_log('true');
//            $duration = $this->rememberMe ? 3600 * 24 * 30 : 300; // 30 days
//            Yii::app()->user->login($this->_identity, $duration);
//            return true;
//          }
//         
         
         
        if ($this->_identity === null) {
            $this->_identity = new CommonUserIdentity($this->username, $this->password);
            $this->_identity->authenticate();
            
        }
      if ($this->_identity->errorCode === CommonUserIdentity::ERROR_NONE) {
          error_log('true'.var_export( CommonUserIdentity::ERROR_NONE,true));
            $duration = $this->rememberMe ? 3600 * 24 * 30 : 300; // 30 days
            Yii::app()->user->login($this->_identity, $duration);
            return true;
          }
        else
            return false;
    }

}
