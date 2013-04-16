<?php

/**
 * This is the model class for table "{{client}}".
 *
 * The followings are the available columns in table '{{client}}':
 * @property integer $REC_ID
 * @property string $REC_DATETIME
 * @property string $REC_TIMESTAMP
 * @property integer $CLIENT_STATUS_REC_ID
 * @property integer $USER_ID
 * @property string $CLIENT_NAME
 * @property integer $IS_DELETED
 * @property string $DELETED_BY
 * @property string $DELETED_DATE
 * @property string $LAST_LOGIN_DATETIME
 * @property string $ACTIVATION_CODE
 * @property string $TRADING_AS_NAME
 * @property string $TELEPHONE_NO
 * @property string $FREE_TELEPHONE_NO
 * @property string $FAX_NO
 * @property string $FREE_FAX_NO
 * @property string $EMAIL_ADDRESS
 * @property string $WEBSITE_ADDRESS
 * @property string $PHYSICAL_ADDRESS_BUILDING_ADDRESS
 * @property string $PHYSICAL_ADDRESS_STREET_ADDRESS
 * @property string $PHYSICAL_ADDRESS_SUBURB
 * @property string $PHYSICAL_ADDRESS_CITY
 * @property string $PHYSICAL_ADDRESS_STATE
 * @property string $PHYSICAL_ADDRESS_COUNTRY
 * @property string $PHYSICAL_ADDRESS_POST_CODE
 * @property string $PHYSICAL_ADDRESS_DPID
 * @property string $PHYSICAL_ADDRESS_PXID
 * @property double $PHYSICAL_ADDRESS_LATITUDE
 * @property double $PHYSICAL_ADDRESS_LONGITUDE
 * @property integer $PHYSICAL_ADDRESS_HEIGHT
 * @property string $PHYSICAL_ADDRESS_COMPLETE
 * @property string $POSTAL_ADDRESS_BUILDING_ADDRESS
 * @property string $POSTAL_ADDRESS_STREET_ADDRESS
 * @property string $POSTAL_ADDRESS_CITY
 * @property string $POSTAL_ADDRESS_SUBURB
 * @property string $POSTAL_ADDRESS_STATE
 * @property string $POSTAL_ADDRESS_COUNTRY
 * @property string $POSTAL_ADDRESS_POST_CODE
 *
 * The followings are the available model relations:
 * @property ClientStatus $cLIENTSTATUSREC
 * @property DbV3.1Admin.User $rEC
 * @property ClientKeyPersonnel[] $clientKeyPersonnels
 * @property ClientUserRelation[] $clientUserRelations
 * @property Orders[] $orders
 * @property ShadowRoot[] $shadowRoots
 * @property ShadowSupplier[] $shadowSuppliers
 * @property Supplier[] $suppliers
 */
class Client extends CActiveRecord {

    /**
     * Returns the static model of the specified AR class.
     * @param string $className active record class name.
     * @return Client the static model class
     */
    public static function model($className = __CLASS__) {
        return parent::model($className);
    }

    /**
     * @return CDbConnection database connection
     */
    public function getDbConnection() {
        return Yii::app()->db_live;
    }

    /**
     * @return string the associated database table name
     */
    public function tableName() {
        return 'client';
    }

    /**
     * @return array validation rules for model attributes.
     */
    public function rules() {
        // NOTE: you should only define rules for those attributes that
        // will receive user inputs.
        return array(
            array('REC_DATETIME, REC_TIMESTAMP, USER_ID,CLIENT_NAME', 'required'),
            array('CLIENT_STATUS_REC_ID, USER_ID, IS_DELETED, PHYSICAL_ADDRESS_HEIGHT', 'numerical', 'integerOnly' => true),
            array('PHYSICAL_ADDRESS_LATITUDE, PHYSICAL_ADDRESS_LONGITUDE', 'numerical'),
            array('CLIENT_NAME, TRADING_AS_NAME, EMAIL_ADDRESS, WEBSITE_ADDRESS, PHYSICAL_ADDRESS_BUILDING_ADDRESS, PHYSICAL_ADDRESS_STREET_ADDRESS, PHYSICAL_ADDRESS_SUBURB, PHYSICAL_ADDRESS_CITY, PHYSICAL_ADDRESS_STATE, PHYSICAL_ADDRESS_COUNTRY, POSTAL_ADDRESS_BUILDING_ADDRESS, POSTAL_ADDRESS_STREET_ADDRESS, POSTAL_ADDRESS_CITY, POSTAL_ADDRESS_SUBURB, POSTAL_ADDRESS_STATE, POSTAL_ADDRESS_COUNTRY', 'length', 'max' => 255),
            array('DELETED_BY, DELETED_DATE, ACTIVATION_CODE, PHYSICAL_ADDRESS_DPID, PHYSICAL_ADDRESS_PXID', 'length', 'max' => 45),
            array('TELEPHONE_NO, FREE_TELEPHONE_NO, FAX_NO, FREE_FAX_NO', 'length', 'max' => 48),
            array('PHYSICAL_ADDRESS_POST_CODE, POSTAL_ADDRESS_POST_CODE', 'length', 'max' => 12),
            array('PHYSICAL_ADDRESS_COMPLETE', 'length', 'max' => 1024),
            array('LAST_LOGIN_DATETIME', 'safe'),
            // The following rule is used by search().
            // Please remove those attributes that should not be searched.
            array('REC_ID, REC_DATETIME, REC_TIMESTAMP, CLIENT_STATUS_REC_ID, USER_ID, CLIENT_NAME, IS_DELETED, DELETED_BY, DELETED_DATE, LAST_LOGIN_DATETIME, ACTIVATION_CODE, TRADING_AS_NAME, TELEPHONE_NO, FREE_TELEPHONE_NO, FAX_NO, FREE_FAX_NO, EMAIL_ADDRESS, WEBSITE_ADDRESS, PHYSICAL_ADDRESS_BUILDING_ADDRESS, PHYSICAL_ADDRESS_STREET_ADDRESS, PHYSICAL_ADDRESS_SUBURB, PHYSICAL_ADDRESS_CITY, PHYSICAL_ADDRESS_STATE, PHYSICAL_ADDRESS_COUNTRY, PHYSICAL_ADDRESS_POST_CODE, PHYSICAL_ADDRESS_DPID, PHYSICAL_ADDRESS_PXID, PHYSICAL_ADDRESS_LATITUDE, PHYSICAL_ADDRESS_LONGITUDE, PHYSICAL_ADDRESS_HEIGHT, PHYSICAL_ADDRESS_COMPLETE, POSTAL_ADDRESS_BUILDING_ADDRESS, POSTAL_ADDRESS_STREET_ADDRESS, POSTAL_ADDRESS_CITY, POSTAL_ADDRESS_SUBURB, POSTAL_ADDRESS_STATE, POSTAL_ADDRESS_COUNTRY, POSTAL_ADDRESS_POST_CODE', 'safe', 'on' => 'search'),
        );
    }

    /**
     * @return array relational rules.
     */
    public function relations() {
        // NOTE: you may need to adjust the relation name and the related
        // class name for the relations automatically generated below.
        return array(
            'cLIENTSTATUSREC' => array(self::BELONGS_TO, 'ClientStatus', 'CLIENT_STATUS_REC_ID'),
            'rEC' => array(self::BELONGS_TO, 'DbV3.1Admin.User', 'REC_ID'),
            'clientKeyPersonnels' => array(self::HAS_MANY, 'ClientKeyPersonnel', 'CLIENT_REC_ID'),
            'clientUserRelations' => array(self::HAS_MANY, 'ClientUserRelation', 'CLIENT_REC_ID'),
            'orders' => array(self::HAS_MANY, 'Orders', 'CLIENT_REC_ID'),
            'shadowRoots' => array(self::HAS_MANY, 'ShadowRoot', 'CLIENT_REC_ID'),
            'shadowSuppliers' => array(self::HAS_MANY, 'ShadowSupplier', 'CLIENT_REC_ID'),
            'suppliers' => array(self::HAS_MANY, 'Supplier', 'CLIENT_ID'),
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
            'CLIENT_STATUS_REC_ID' => 'Client Status Rec',
            'USER_ID' => 'User',
            'CLIENT_NAME' => 'Client Name',
            'IS_DELETED' => 'Is Deleted',
            'DELETED_BY' => 'Deleted By',
            'DELETED_DATE' => 'Deleted Date',
            'LAST_LOGIN_DATETIME' => 'Last Login Datetime',
            'ACTIVATION_CODE' => 'Activation Code',
            'TRADING_AS_NAME' => 'Trading As Name',
            'TELEPHONE_NO' => 'Telephone No',
            'FREE_TELEPHONE_NO' => 'Free Telephone No',
            'FAX_NO' => 'Fax No',
            'FREE_FAX_NO' => 'Free Fax No',
            'EMAIL_ADDRESS' => 'Email Address',
            'WEBSITE_ADDRESS' => 'Website Address',
            'PHYSICAL_ADDRESS_BUILDING_ADDRESS' => 'Physical Address Building Address',
            'PHYSICAL_ADDRESS_STREET_ADDRESS' => 'Physical Address Street Address',
            'PHYSICAL_ADDRESS_SUBURB' => 'Physical Address Suburb',
            'PHYSICAL_ADDRESS_CITY' => 'Physical Address City',
            'PHYSICAL_ADDRESS_STATE' => 'Physical Address State',
            'PHYSICAL_ADDRESS_COUNTRY' => 'Physical Address Country',
            'PHYSICAL_ADDRESS_POST_CODE' => 'Physical Address Post Code',
            'PHYSICAL_ADDRESS_DPID' => 'Physical Address Dpid',
            'PHYSICAL_ADDRESS_PXID' => 'Physical Address Pxid',
            'PHYSICAL_ADDRESS_LATITUDE' => 'Physical Address Latitude',
            'PHYSICAL_ADDRESS_LONGITUDE' => 'Physical Address Longitude',
            'PHYSICAL_ADDRESS_HEIGHT' => 'Physical Address Height',
            'PHYSICAL_ADDRESS_COMPLETE' => 'Physical Address Complete',
            'POSTAL_ADDRESS_BUILDING_ADDRESS' => 'Postal Address Building Address',
            'POSTAL_ADDRESS_STREET_ADDRESS' => 'Postal Address Street Address',
            'POSTAL_ADDRESS_CITY' => 'Postal Address City',
            'POSTAL_ADDRESS_SUBURB' => 'Postal Address Suburb',
            'POSTAL_ADDRESS_STATE' => 'Postal Address State',
            'POSTAL_ADDRESS_COUNTRY' => 'Postal Address Country',
            'POSTAL_ADDRESS_POST_CODE' => 'Postal Address Post Code',
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
        $criteria->compare('CLIENT_STATUS_REC_ID', $this->CLIENT_STATUS_REC_ID);
        $criteria->compare('USER_ID', $this->USER_ID);
        $criteria->compare('CLIENT_NAME', $this->CLIENT_NAME, true);
        $criteria->compare('IS_DELETED', $this->IS_DELETED);
        $criteria->compare('DELETED_BY', $this->DELETED_BY, true);
        $criteria->compare('DELETED_DATE', $this->DELETED_DATE, true);
        $criteria->compare('LAST_LOGIN_DATETIME', $this->LAST_LOGIN_DATETIME, true);
        $criteria->compare('ACTIVATION_CODE', $this->ACTIVATION_CODE, true);
        $criteria->compare('TRADING_AS_NAME', $this->TRADING_AS_NAME, true);
        $criteria->compare('TELEPHONE_NO', $this->TELEPHONE_NO, true);
        $criteria->compare('FREE_TELEPHONE_NO', $this->FREE_TELEPHONE_NO, true);
        $criteria->compare('FAX_NO', $this->FAX_NO, true);
        $criteria->compare('FREE_FAX_NO', $this->FREE_FAX_NO, true);
        $criteria->compare('EMAIL_ADDRESS', $this->EMAIL_ADDRESS, true);
        $criteria->compare('WEBSITE_ADDRESS', $this->WEBSITE_ADDRESS, true);
        $criteria->compare('PHYSICAL_ADDRESS_BUILDING_ADDRESS', $this->PHYSICAL_ADDRESS_BUILDING_ADDRESS, true);
        $criteria->compare('PHYSICAL_ADDRESS_STREET_ADDRESS', $this->PHYSICAL_ADDRESS_STREET_ADDRESS, true);
        $criteria->compare('PHYSICAL_ADDRESS_SUBURB', $this->PHYSICAL_ADDRESS_SUBURB, true);
        $criteria->compare('PHYSICAL_ADDRESS_CITY', $this->PHYSICAL_ADDRESS_CITY, true);
        $criteria->compare('PHYSICAL_ADDRESS_STATE', $this->PHYSICAL_ADDRESS_STATE, true);
        $criteria->compare('PHYSICAL_ADDRESS_COUNTRY', $this->PHYSICAL_ADDRESS_COUNTRY, true);
        $criteria->compare('PHYSICAL_ADDRESS_POST_CODE', $this->PHYSICAL_ADDRESS_POST_CODE, true);
        $criteria->compare('PHYSICAL_ADDRESS_DPID', $this->PHYSICAL_ADDRESS_DPID, true);
        $criteria->compare('PHYSICAL_ADDRESS_PXID', $this->PHYSICAL_ADDRESS_PXID, true);
        $criteria->compare('PHYSICAL_ADDRESS_LATITUDE', $this->PHYSICAL_ADDRESS_LATITUDE);
        $criteria->compare('PHYSICAL_ADDRESS_LONGITUDE', $this->PHYSICAL_ADDRESS_LONGITUDE);
        $criteria->compare('PHYSICAL_ADDRESS_HEIGHT', $this->PHYSICAL_ADDRESS_HEIGHT);
        $criteria->compare('PHYSICAL_ADDRESS_COMPLETE', $this->PHYSICAL_ADDRESS_COMPLETE, true);
        $criteria->compare('POSTAL_ADDRESS_BUILDING_ADDRESS', $this->POSTAL_ADDRESS_BUILDING_ADDRESS, true);
        $criteria->compare('POSTAL_ADDRESS_STREET_ADDRESS', $this->POSTAL_ADDRESS_STREET_ADDRESS, true);
        $criteria->compare('POSTAL_ADDRESS_CITY', $this->POSTAL_ADDRESS_CITY, true);
        $criteria->compare('POSTAL_ADDRESS_SUBURB', $this->POSTAL_ADDRESS_SUBURB, true);
        $criteria->compare('POSTAL_ADDRESS_STATE', $this->POSTAL_ADDRESS_STATE, true);
        $criteria->compare('POSTAL_ADDRESS_COUNTRY', $this->POSTAL_ADDRESS_COUNTRY, true);
        $criteria->compare('POSTAL_ADDRESS_POST_CODE', $this->POSTAL_ADDRESS_POST_CODE, true);

        return new CActiveDataProvider($this, array(
            'criteria' => $criteria,
        ));
    }

}