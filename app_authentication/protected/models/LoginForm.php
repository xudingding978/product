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
<<<<<<< HEAD
        if (!$this->hasErrors()) {
            $this->_identity = new CommonUserIdentity($this->username, $this->password);
            if (!$this->_identity->authenticate())
                $this->addError('password', 'Incorrect username or password.');
        }
    }

=======
    
        
        if (!$this->hasErrors()) {
            $this->_identity = new CommonUserIdentity($this->username, $this->password);
           
            if (!$this->_identity->authenticate())
               
                $this->addError('password', 'Incorrect username or password.');
        }
    }
 
>>>>>>> ed315fc14a8beac3817aeda2b1bf7f03e6b5c01d
    /**
     * Logs in the user using the given username and password in the model.
     * @return boolean whether login is successful
     */
    public function login() {
<<<<<<< HEAD
        if ($this->_identity === null) {
            $this->_identity = new CommonUserIdentity($this->username, $this->password);
            $this->_identity->authenticate();
        }
        if ($this->_identity->errorCode === CommonUserIdentity::ERROR_NONE) {
            $duration = $this->rememberMe ? 3600 * 24 * 30 : 300; // 30 days
            Yii::app()->user->login($this->_identity, $duration);
            return true;
        }
=======
     
         
        if ($this->_identity === null) {
            $this->_identity = new CommonUserIdentity($this->username, $this->password);
            $this->_identity->authenticate();
            
        }
      if ($this->_identity->errorCode === CommonUserIdentity::ERROR_NONE) {
       
            $duration = $this->rememberMe ? 3600 * 24 * 30 : 300; // 30 days
            Yii::app()->user->login($this->_identity, $duration);
            return true;
          }
>>>>>>> ed315fc14a8beac3817aeda2b1bf7f03e6b5c01d
        else
            return false;
    }

}
