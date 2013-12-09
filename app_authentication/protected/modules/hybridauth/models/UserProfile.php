<?php

/**
 * This is the model class for table "userprofile".
 *
 * The followings are the available columns in table 'userprofile':
 * @property integer $REC_ID
 * @property string $REC_DATETIME
 * @property string $REC_TIMESTAMP
 * @property integer $TENANT_REC_ID
 * @property integer $USER_REC_ID
 * @property string $LOGIN_PROVIDER
 * @property string $LOGIN_PROVIDER_IDENTIFIER
 * @property string $IDENTIFIER
 * @property string $PROFILE_URL
 * @property string $WEBSITE_URL
 * @property string $PHOTO_URL
 * @property string $PHOTO_URL_LARGE
 * @property string $DISPLAY_NAME
 * @property string $DESCRIPTION
 * @property string $FIRST_NAME
 * @property string $LAST_NAME
 * @property string $GENDER
 * @property string $LANGUAGE
 * @property integer $AGE
 * @property integer $BIRTH_DAY
 * @property integer $BIRTH_MONTH
 * @property integer $BIRTH_YEAR
 * @property string $EMAIL
 * @property string $EMAIL_VERIFIED
 * @property string $PHONE
 * @property string $COUNTRY
 * @property string $REGION
 * @property string $CITY
 * @property integer $ZIP
 * @property string $POST_CODE
 */
class UserProfile extends CActiveRecord {

    /**
     * Returns the static model of the specified AR class.
     * @param string $className active record class name.
     * @return UserProfile the static model class
     */
    public static function model($className = __CLASS__) {
        return parent::model($className);
    }

    /**
     * @return string the associated database table name
     */
    public function tableName() {
        return 'userprofile';
    }

    /**
     * @return array validation rules for model attributes.
     */
    public function rules() {
        // NOTE: you should only define rules for those attributes that
        // will receive user inputs.
        return array(
            array('TENANT_REC_ID, USER_REC_ID, AGE, BIRTH_DAY, BIRTH_MONTH, BIRTH_YEAR, ZIP', 'numerical', 'integerOnly' => true),
            array('LOGIN_PROVIDER', 'length', 'max' => 80),
            array('LOGIN_PROVIDER_IDENTIFIER', 'length', 'max' => 100),
            array('IDENTIFIER, DISPLAY_NAME, EMAIL, EMAIL_VERIFIED, COUNTRY, REGION, CITY', 'length', 'max' => 255),
            array('PROFILE_URL, WEBSITE_URL, PHOTO_URL, PHOTO_URL_LARGE', 'length', 'max' => 2048),
            array('FIRST_NAME, LAST_NAME', 'length', 'max' => 55),
            array('GENDER', 'length', 'max' => 10),
            array('LANGUAGE, PHONE, POST_CODE', 'length', 'max' => 45),
            array('REC_DATETIME, REC_TIMESTAMP, DESCRIPTION', 'safe'),
            // The following rule is used by search().
            // Please remove those attributes that should not be searched.
            array('REC_ID, REC_DATETIME, REC_TIMESTAMP, TENANT_REC_ID, USER_REC_ID, LOGIN_PROVIDER, LOGIN_PROVIDER_IDENTIFIER, IDENTIFIER, PROFILE_URL, WEBSITE_URL, PHOTO_URL, PHOTO_URL_LARGE, DISPLAY_NAME, DESCRIPTION, FIRST_NAME, LAST_NAME, GENDER, LANGUAGE, AGE, BIRTH_DAY, BIRTH_MONTH, BIRTH_YEAR, EMAIL, EMAIL_VERIFIED, PHONE, COUNTRY, REGION, CITY, ZIP, POST_CODE', 'safe', 'on' => 'search'),
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
            'REC_DATETIME' => 'Rec Datetime',
            'REC_TIMESTAMP' => 'Rec Timestamp',
            'TENANT_REC_ID' => 'Tenant Rec',
            'USER_REC_ID' => 'User Rec',
            'LOGIN_PROVIDER' => 'Login Provider',
            'LOGIN_PROVIDER_IDENTIFIER' => 'Login Provider Identifier',
            'IDENTIFIER' => 'Identifier',
            'PROFILE_URL' => 'Profile Url',
            'WEBSITE_URL' => 'Website Url',
            'PHOTO_URL' => 'Photo Url',
            'PHOTO_URL_LARGE' => 'Photo Url Large',
            'DISPLAY_NAME' => 'Display Name',
            'DESCRIPTION' => 'Description',
            'FIRST_NAME' => 'First Name',
            'LAST_NAME' => 'Last Name',
            'GENDER' => 'Gender',
            'LANGUAGE' => 'Language',
            'AGE' => 'Age',
            'BIRTH_DAY' => 'Birth Day',
            'BIRTH_MONTH' => 'Birth Month',
            'BIRTH_YEAR' => 'Birth Year',
            'EMAIL' => 'Email',
            'EMAIL_VERIFIED' => 'Email Verified',
            'PHONE' => 'Phone',
            'COUNTRY' => 'Country',
            'REGION' => 'Region',
            'CITY' => 'City',
            'ZIP' => 'Zip',
            'POST_CODE' => 'Post Code',
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
        $criteria->compare('USER_REC_ID', $this->USER_REC_ID);
        $criteria->compare('LOGIN_PROVIDER', $this->LOGIN_PROVIDER, true);
        $criteria->compare('LOGIN_PROVIDER_IDENTIFIER', $this->LOGIN_PROVIDER_IDENTIFIER, true);
        $criteria->compare('IDENTIFIER', $this->IDENTIFIER, true);
        $criteria->compare('PROFILE_URL', $this->PROFILE_URL, true);
        $criteria->compare('WEBSITE_URL', $this->WEBSITE_URL, true);
        $criteria->compare('PHOTO_URL', $this->PHOTO_URL, true);
        $criteria->compare('PHOTO_URL_LARGE', $this->PHOTO_URL_LARGE, true);
        $criteria->compare('DISPLAY_NAME', $this->DISPLAY_NAME, true);
        $criteria->compare('DESCRIPTION', $this->DESCRIPTION, true);
        $criteria->compare('FIRST_NAME', $this->FIRST_NAME, true);
        $criteria->compare('LAST_NAME', $this->LAST_NAME, true);
        $criteria->compare('GENDER', $this->GENDER, true);
        $criteria->compare('LANGUAGE', $this->LANGUAGE, true);
        $criteria->compare('AGE', $this->AGE);
        $criteria->compare('BIRTH_DAY', $this->BIRTH_DAY);
        $criteria->compare('BIRTH_MONTH', $this->BIRTH_MONTH);
        $criteria->compare('BIRTH_YEAR', $this->BIRTH_YEAR);
        $criteria->compare('EMAIL', $this->EMAIL, true);
        $criteria->compare('EMAIL_VERIFIED', $this->EMAIL_VERIFIED, true);
        $criteria->compare('PHONE', $this->PHONE, true);
        $criteria->compare('COUNTRY', $this->COUNTRY, true);
        $criteria->compare('REGION', $this->REGION, true);
        $criteria->compare('CITY', $this->CITY, true);
        $criteria->compare('ZIP', $this->ZIP);
        $criteria->compare('POST_CODE', $this->POST_CODE, true);

        return new CActiveDataProvider($this, array(
            'criteria' => $criteria,
        ));
    }

    public static function getUser($loginProvider, $loginProviderIdentity) {
        $criteria = new CDbCriteria;
        $criteria->compare('LOGIN_PROVIDER', $loginProvider, true);
        $criteria->compare('LOGIN_PROVIDER_IDENTIFIER', $loginProviderIdentity, true);

        $login = new CActiveDataProvider('UserProfile', array(
            'criteria' => $criteria,
        ));

        if ($login->itemCount == 0) {
            return null;
        } else {
            // TODO - Can't seem to get this to work with relations properly....
            $tmp = $login->getData();
            $user = new User();
            return $user->findByPk($tmp[0]->USER_REC_ID);
        }
    }

    public static function getLogins($userId) {
        $criteria = new CDbCriteria;
        $criteria->compare('USER_REC_ID', $userId, true);
        $data = new CActiveDataProvider('UserProfile', array(
            'criteria' => $criteria,
        ));
        return $data->getData();
    }

    public static function getLogin($userId, $provider) {
        $criteria = new CDbCriteria;
        $criteria->compare('USER_REC_ID', $userId, true);
        $criteria->compare('LOGIN_PROVIDER', $provider, true);
        $data = new CActiveDataProvider('UserProfile', array(
            'criteria' => $criteria,
        ));
        $tmp = $data->getData();
        return $tmp[0];
    }

}