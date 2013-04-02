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
 *
 * The followings are the available model relations:
 * @property DbV3.2Admin.tenant $tENANTREC
 */
class User extends CActiveRecord {

    public $repeatPassword;

    /**
     * Returns the static model of the specified AR class.
     * @param string $className active record class name.
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
            array('TENANT_REC_ID', 'required'),
       //     array('TENANT_REC_ID', 'numerical', 'integerOnly' => true),
            array('USER_NAME, EMAIL_ADDRESS', 'length', 'max' => 255),
            array('PWD_HASH', 'length', 'max' => 512),
            array('REC_DATETIME, REC_TIMESTAMP', 'safe'),
            // The following rule is used by search().
            // Please remove those attributes that should not be searched.
            array('REC_ID, TENANT_REC_ID, REC_DATETIME, REC_TIMESTAMP, USER_NAME, PWD_HASH, EMAIL_ADDRESS', 'safe', 'on' => 'search'),
        );
    }

    /**
     * @return array relational rules.
     */
    public function relations() {
        // NOTE: you may need to adjust the relation name and the related
        // class name for the relations automatically generated below.
        return array(
            'tENANTREC' => array(self::BELONGS_TO, 'DbV3.2Admin.tenant', 'TENANT_REC_ID'),
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

        $criteria->compare('REC_ID', $this->REC_ID, true);
        $criteria->compare('TENANT_REC_ID', $this->TENANT_REC_ID);
        $criteria->compare('REC_DATETIME', $this->REC_DATETIME, true);
        $criteria->compare('REC_TIMESTAMP', $this->REC_TIMESTAMP, true);
        $criteria->compare('USER_NAME', $this->USER_NAME, true);
        $criteria->compare('PWD_HASH', $this->PWD_HASH, true);
        $criteria->compare('EMAIL_ADDRESS', $this->EMAIL_ADDRESS, true);

        return new CActiveDataProvider($this, array(
            'criteria' => $criteria,
        ));
    }

}