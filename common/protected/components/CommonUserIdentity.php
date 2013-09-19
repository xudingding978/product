<?php

/**
 * UserIdentity represents the data needed to identity a user.
 * It contains the authentication method that checks if the provided
 * data can identity the user.
 */
class CommonUserIdentity extends CUserIdentity {

    private $_id;
    /**
     * Authenticates a user.
     * The example implementation makes sure if the username and password
     * are both 'demo'.
     * In practical applications, this should be changed to authenticate
     * against some persistent user identity storage (e.g. database).
     * @return boolean whether authentication succeeds.
     */
    public function authenticate() {

        $user = User::model()
                ->findByAttributes(array(
            'USER_NAME' => $this->username
        ));
        
        
        if ($user === null)
            $this->errorCode = self::ERROR_USERNAME_INVALID;
        else
        if ($user->PWD_HASH===$this->password) {
            
            error_log(var_export($user->check($this->password),true));
            $this->_id = $user->REC_ID;
            $this->errorCode = self::ERROR_NONE;
        } else {
            //         $_SESSION['user_REC_ID'] = $user->REC_ID;
            $this->errorCode = self::ERROR_PASSWORD_INVALID;
        }

        return !$this->errorCode;
    }

    public function getId() {
        return $this->_id;
    }


}
