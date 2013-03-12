<?php

/**
 * This is the model class for table "tpl_user".
 *
 * The followings are the available columns in table 'tpl_user':
 * @property integer $REC_ID
 * @property string $REC_DATETIME
 * @property string $REC_TIMESTAMP
 * @property integer $TENANT_REC_ID
 * @property string $USER_NAME
 * @property string $PWD_HASH
 * @property string $EMAIL_ADDRESS
 */
class User extends CActiveRecord {

    /**
     * Returns the static model of the specified AR class.
     * @return User the static model class
     */
    public static function model($className = __CLASS__) {
        return parent::model($className);
    }

    /**
     * @return string the associated database table name
     */
    public function tableName() {
        return 'tpl_user';
    }

    /**
     * @return array validation rules for model attributes.
     */
    public function rules() {
        // NOTE: you should only define rules for those attributes that
        // will receive user inputs.
        return array(
            array('TENANT_REC_ID', 'numerical', 'integerOnly' => true),
            array('USER_NAME, EMAIL_ADDRESS', 'length', 'max' => 255),
      //      array('USER_NAME', 'unique'),
    //        array('USER_NAME', 'required'),
     //       array('EMAIL_ADDRESS', 'unique','required'),
            
      //     array('EMAIL_ADDRESS','email','allowEmpty'=>true,'fullPattern'=>'^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$'),
            array('PWD_HASH', 'length', 'max' => 512),
            array('REC_DATETIME, REC_TIMESTAMP', 'safe'),
            // The following rule is used by search().
            // Please remove those attributes that should not be searched.
            array('REC_ID, REC_DATETIME, REC_TIMESTAMP, TENANT_REC_ID, USER_NAME, PWD_HASH, EMAIL_ADDRESS', 'safe', 'on' => 'search'),
        );
    }

    /**
     * @return array relational rules.
     */
    public function relations() {
        // NOTE: you may need to adjust the relation name and the related
        // class name for the relations automatically generated below.
        return array(
            'rEC' => array(self::BELONGS_TO, 'TplTenant', 'REC_ID'),
            'tpl_user_profiles' => array(self::HAS_MANY, 'TplUserProfile', 'USER_REC_ID'),
        );
    }

    /**
     * @return array customized attribute labels (name=>label)
     */
    public function attributeLabels() {
        return array(
            'REC_ID' => 'Rec',
            'REC_DATETIME' => 'Rec Datetime',
            'REC_TIMESTAMP' => 'Rec Timestamp',
            'TENANT_REC_ID' => 'Tenant Rec',
            'USER_NAME' => 'User Name',
            'PWD_HASH' => 'Pwd Hash',
            'EMAIL_ADDRESS' => 'Email Address',
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

        $criteria->compare('REC_ID', $this->REC_ID);

        $criteria->compare('REC_DATETIME', $this->REC_DATETIME, true);

        $criteria->compare('REC_TIMESTAMP', $this->REC_TIMESTAMP, true);

        $criteria->compare('TENANT_REC_ID', $this->TENANT_REC_ID);

        $criteria->compare('USER_NAME', $this->USER_NAME, true);

        $criteria->compare('PWD_HASH', $this->PWD_HASH, true);

        $criteria->compare('EMAIL_ADDRESS', $this->EMAIL_ADDRESS, true);

        return new CActiveDataProvider('User', array(
            'criteria' => $criteria,
        ));
    }

    public function check($value) {
        //     $new_hash = crypt($value, $this->pwd_hash);
        if ($value == $this->PWD_HASH) {
            return true;
        }
        return false;
    }

}