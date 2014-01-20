<?php

/**
 * This is the model class for table "user".
 *
 * The followings are the available columns in table 'user':
 * @property string $REC_ID
 * @property integer $TENANT_REC_ID
 * @property string $REC_DATETIME
 * @property string $REC_TIMESTAMP
 * @property string $USER_NAME
 * @property string $PWD_HASH
 * @property string $EMAIL_ADDRESS
 * @property string $LAST_LOGIN
 * @property string $FIRST_NAME
 * @property string $LAST_NAME
 * @property string $COUCHBASE_ID
 */
class User extends CActiveRecord {

    /**
     * Returns the static model of the specified AR class.
     * @param string $className active record class name.
     * @return User the static model class
     */
    public $repeat_password;
    public $COUCHBASE_ID;

    public static function model($className = __CLASS__) {
        return parent::model($className);
    }

    /**
     * @return string the associated database table name
     */
    public function tableName() {
        return 'user';
    }

    /**
     * @return array validation rules for model attributes.
     */
    public function rules() {
        // NOTE: you should only define rules for those attributes that
        // will receive user inputs.
        return array(
            array('TENANT_REC_ID', 'numerical', 'integerOnly' => true),
//            array('EMAIL_ADDRESS', 'email', 'message' => "The email isn't correct"),
//            array('EMAIL_ADDRESS', 'unique', 'message' => 'Email already exists!'),
//            array('USER_NAME', 'unique', 'message' => 'User Name already exists!'),
//            array('USER_NAME, EMAIL_ADDRESS', 'length', 'max' => 255),
//            array('EMAIL_ADDRESS, USER_NAME', 'required'),
//            array('PWD_HASH, repeat_password', "required", 'on' => 'insert'),
//            array('PWD_HASH, repeat_password', 'length', 'min' => 6, 'max' => 40),
//            array('PWD_HASH', 'compare', 'compareAttribute' => 'repeat_password'),
            
            
            array('EMAIL_ADDRESS', 'email', 'message' => "The email isn't correct"),
            array('EMAIL_ADDRESS', 'unique', 'message' => 'Email already exists!'),
            array('USER_NAME', 'unique', 'message' => 'User Name already exists!'),
            array('USER_NAME, EMAIL_ADDRESS', 'length', 'max' => 255, 'message' => ""),
            array('EMAIL_ADDRESS, USER_NAME', 'required', 'message' => ""),
            array('PWD_HASH, repeat_password', "required", 'on' => 'insert', 'message' => ""),
            array('PWD_HASH, repeat_password', 'length', 'min' => 6, 'max' => 40),
            array('PWD_HASH', 'compare', 'compareAttribute' => 'repeat_password', 'message' => ""),
            
            array('FIRST_NAME, LAST_NAME, COUCHBASE_ID', 'length', 'max' => 45),
            array('REC_DATETIME, REC_TIMESTAMP, LAST_LOGIN', 'safe'),
            // The following rule is used by search().
            // Please remove those attributes that should not be searched.
            array('REC_ID, TENANT_REC_ID, REC_DATETIME, REC_TIMESTAMP, USER_NAME, PWD_HASH, EMAIL_ADDRESS, LAST_LOGIN, FIRST_NAME, LAST_NAME, COUCHBASE_ID', 'safe', 'on' => 'search'),
        );
    }

    /**
     * @return array relational rules.
     */
    public function relations() {
        // NOTE: you may need to adjust the relation name and the related
        // class name for the relations automatically generated below.
        return array(
        );
    }

    /**
     * @return array customized attribute labels (name=>label)
     */
    public function attributeLabels() {
        return array(
            'REC_ID' => 'Rec',
            'TENANT_REC_ID' => 'Tenant Rec',
            'REC_DATETIME' => 'Rec Datetime',
            'REC_TIMESTAMP' => 'Rec Timestamp',
            'USER_NAME' => 'User Name',
            'PWD_HASH' => 'Password',
            'EMAIL_ADDRESS' => 'Email Address',
            'LAST_LOGIN' => 'Last Login',
            'FIRST_NAME' => 'First Name',
            'LAST_NAME' => 'Last Name',
            'COUCHBASE_ID' => 'Couchbase',
        );
    }
    

    /**
     * Retrieves a list of models based on the current search/filter conditions.
     * @return CActiveDataProvider the data provider that can return the models based on the search/filter conditions.
     */
    public function search() {
        // Warning: Please modify the following code to remove attributes that
        // should not be searched.

        $criteria = new CDbCriteria;

        $criteria->compare('REC_ID', $this->REC_ID, true);
        $criteria->compare('TENANT_REC_ID', $this->TENANT_REC_ID);
        $criteria->compare('REC_DATETIME', $this->REC_DATETIME, true);
        $criteria->compare('REC_TIMESTAMP', $this->REC_TIMESTAMP, true);
        $criteria->compare('USER_NAME', $this->USER_NAME, true);
        $criteria->compare('PWD_HASH', $this->PWD_HASH, true);
        $criteria->compare('EMAIL_ADDRESS', $this->EMAIL_ADDRESS, true);
        $criteria->compare('LAST_LOGIN', $this->LAST_LOGIN, true);
        $criteria->compare('FIRST_NAME', $this->FIRST_NAME, true);
        $criteria->compare('LAST_NAME', $this->LAST_NAME, true);
        $criteria->compare('COUCHBASE_ID', $this->COUCHBASE_ID, true);

        return new CActiveDataProvider($this, array(
            'criteria' => $criteria,
        ));
    }

    public function check($content) {

        return true;
    }
  

}