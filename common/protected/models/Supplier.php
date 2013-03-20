<?php

/**
 * This is the model class for table "tpl_supplier".
 *
 * The followings are the available columns in table 'tpl_supplier':
 * @property integer $REC_ID
 * @property string $REC_DATETIME
 * @property string $REC_TIMESTAMP
 * @property integer $SUPPLIER_TYPE_REC_ID
 * @property integer $CLIENT_ID
 * @property string $NAME
 * @property string $TRADING_AS_NAME
 * @property string $CONTACT_NAME
 * @property string $CONTACT_POSITION
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
 * @property string $PHYSICAL_ADDRESS_PXID
 * @property string $PHYSICAL_ADDRESS_DPID
 * @property double $PHYSICAL_ADDRESS_LATITUDE
 * @property double $PHYSICAL_ADDRESS_LONGITUDE
 * @property integer $PHYSICAL_ADDRESS_HEIGHT
 * @property string $PHYSICAL_ADDRESS_COMPLETE
 * @property string $POSTAL_ADDRESS_BUILDING_ADDRESS
 * @property string $POSTAL_ADDRESS_STREET_ADDRESS
 * @property string $POSTAL_ADDRESS_SUBURB
 * @property string $POSTAL_ADDRESS_CITY
 * @property string $POSTAL_ADDRESS_STATE
 * @property string $POSTAL_ADDRESS_COUNTRY
 * @property string $POSTAL_ADDRESS_POST_CODE
 * @property string $COMPANY_PROFILE_TEXT
 * @property string $PRINT_LOGO_LOCATION
 * @property string $WEB_LOGO_LOCATION
 * @property string $FACEBOOK_ADDRESS_URL
 * @property string $TWITTER_ADDRESS_URL
 * @property string $LINKEDIN_ADDRESS_URL
 * @property string $YOUTUBE_ADDRESS_URL
 * @property string $FOURSQUARE_ADDRESS_URL
 *
 * The followings are the available model relations:
 * @property Client $cLIENT
 * @property SupplierType $sUPPLIERTYPEREC
 * @property SupplierBranch[] $supplierBranches
 * @property SupplierBrand[] $supplierBrands
 * @property SupplierCategoryProduct[] $supplierCategoryProducts
 * @property SupplierDistributor[] $supplierDistributors
 * @property SupplierKeyPersonnel[] $supplierKeyPersonnels
 * @property SupplierShadowRoot[] $supplierShadowRoots
 */
class Supplier extends CActiveRecord {

    /**
     * Returns the static model of the specified AR class.
     * @param string $className active record class name.
     * @return Supplier the static model class
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
        return 'tpl_supplier';
    }

    /**
     * @return array validation rules for model attributes.
     */
    public function rules() {
// NOTE: you should only define rules for those attributes that
// will receive user inputs.
        return array(
            array('REC_DATETIME, REC_TIMESTAMP, SUPPLIER_TYPE_REC_ID, CLIENT_ID', 'required'),
            array('SUPPLIER_TYPE_REC_ID, CLIENT_ID, PHYSICAL_ADDRESS_HEIGHT', 'numerical', 'integerOnly' => true),
            array('PHYSICAL_ADDRESS_LATITUDE, PHYSICAL_ADDRESS_LONGITUDE', 'numerical'),
            array('NAME, TRADING_AS_NAME, CONTACT_NAME, CONTACT_POSITION, EMAIL_ADDRESS, WEBSITE_ADDRESS, PHYSICAL_ADDRESS_BUILDING_ADDRESS, PHYSICAL_ADDRESS_STREET_ADDRESS, PHYSICAL_ADDRESS_SUBURB, PHYSICAL_ADDRESS_CITY, PHYSICAL_ADDRESS_STATE, PHYSICAL_ADDRESS_COUNTRY, POSTAL_ADDRESS_BUILDING_ADDRESS, POSTAL_ADDRESS_STREET_ADDRESS, POSTAL_ADDRESS_SUBURB, POSTAL_ADDRESS_CITY, POSTAL_ADDRESS_STATE, POSTAL_ADDRESS_COUNTRY, PRINT_LOGO_LOCATION, WEB_LOGO_LOCATION', 'length', 'max' => 255),
            array('TELEPHONE_NO, FREE_TELEPHONE_NO, FAX_NO, FREE_FAX_NO', 'length', 'max' => 48),
            array('PHYSICAL_ADDRESS_POST_CODE, POSTAL_ADDRESS_POST_CODE', 'length', 'max' => 12),
            array('PHYSICAL_ADDRESS_PXID, PHYSICAL_ADDRESS_DPID', 'length', 'max' => 45),
            array('PHYSICAL_ADDRESS_COMPLETE, FACEBOOK_ADDRESS_URL, TWITTER_ADDRESS_URL, LINKEDIN_ADDRESS_URL, YOUTUBE_ADDRESS_URL, FOURSQUARE_ADDRESS_URL', 'length', 'max' => 1024),
            array('COMPANY_PROFILE_TEXT', 'safe'),
// The following rule is used by search().
// Please remove those attributes that should not be searched.
            array('REC_ID, REC_DATETIME, REC_TIMESTAMP, SUPPLIER_TYPE_REC_ID, CLIENT_ID, NAME, TRADING_AS_NAME, CONTACT_NAME, CONTACT_POSITION, TELEPHONE_NO, FREE_TELEPHONE_NO, FAX_NO, FREE_FAX_NO, EMAIL_ADDRESS, WEBSITE_ADDRESS, PHYSICAL_ADDRESS_BUILDING_ADDRESS, PHYSICAL_ADDRESS_STREET_ADDRESS, PHYSICAL_ADDRESS_SUBURB, PHYSICAL_ADDRESS_CITY, PHYSICAL_ADDRESS_STATE, PHYSICAL_ADDRESS_COUNTRY, PHYSICAL_ADDRESS_POST_CODE, PHYSICAL_ADDRESS_PXID, PHYSICAL_ADDRESS_DPID, PHYSICAL_ADDRESS_LATITUDE, PHYSICAL_ADDRESS_LONGITUDE, PHYSICAL_ADDRESS_HEIGHT, PHYSICAL_ADDRESS_COMPLETE, POSTAL_ADDRESS_BUILDING_ADDRESS, POSTAL_ADDRESS_STREET_ADDRESS, POSTAL_ADDRESS_SUBURB, POSTAL_ADDRESS_CITY, POSTAL_ADDRESS_STATE, POSTAL_ADDRESS_COUNTRY, POSTAL_ADDRESS_POST_CODE, COMPANY_PROFILE_TEXT, PRINT_LOGO_LOCATION, WEB_LOGO_LOCATION, FACEBOOK_ADDRESS_URL, TWITTER_ADDRESS_URL, LINKEDIN_ADDRESS_URL, YOUTUBE_ADDRESS_URL, FOURSQUARE_ADDRESS_URL', 'safe', 'on' => 'search'),
        );
    }

    /**
     * @return array relational rules.
     */
    public function relations() {
// NOTE: you may need to adjust the relation name and the related
// class name for the relations automatically generated below.
        return array(
            'cLIENT' => array(self::BELONGS_TO, 'Client', 'CLIENT_ID'),
            'sUPPLIERTYPEREC' => array(self::BELONGS_TO, 'SupplierType', 'SUPPLIER_TYPE_REC_ID'),
            'supplierBranches' => array(self::HAS_MANY, 'SupplierBranch', 'SUPPLIER_REC_ID'),
            'supplierBrands' => array(self::HAS_MANY, 'SupplierBrand', 'SUPPLIER_REC_ID'),
            'supplierCategoryProducts' => array(self::HAS_MANY, 'SupplierCategoryProduct', 'SUPPLIER_REC_ID'),
            'supplierDistributors' => array(self::HAS_MANY, 'SupplierDistributor', 'SUPPLIER_REC_ID'),
            'supplierKeyPersonnels' => array(self::HAS_MANY, 'SupplierKeyPersonnel', 'SUPPLIER_REC_ID'),
            'supplierShadowRoots' => array(self::HAS_MANY, 'SupplierShadowRoot', 'SUPPLIER_REC_ID'),
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
            'SUPPLIER_TYPE_REC_ID' => 'Supplier Type Rec',
            'CLIENT_ID' => 'Client',
            'NAME' => 'Name',
            'TRADING_AS_NAME' => 'Trading As Name',
            'CONTACT_NAME' => 'Contact Name',
            'CONTACT_POSITION' => 'Contact Position',
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
            'PHYSICAL_ADDRESS_PXID' => 'Physical Address Pxid',
            'PHYSICAL_ADDRESS_DPID' => 'Physical Address Dpid',
            'PHYSICAL_ADDRESS_LATITUDE' => 'Physical Address Latitude',
            'PHYSICAL_ADDRESS_LONGITUDE' => 'Physical Address Longitude',
            'PHYSICAL_ADDRESS_HEIGHT' => 'Physical Address Height',
            'PHYSICAL_ADDRESS_COMPLETE' => 'Physical Address Complete',
            'POSTAL_ADDRESS_BUILDING_ADDRESS' => 'Postal Address Building Address',
            'POSTAL_ADDRESS_STREET_ADDRESS' => 'Postal Address Street Address',
            'POSTAL_ADDRESS_SUBURB' => 'Postal Address Suburb',
            'POSTAL_ADDRESS_CITY' => 'Postal Address City',
            'POSTAL_ADDRESS_STATE' => 'Postal Address State',
            'POSTAL_ADDRESS_COUNTRY' => 'Postal Address Country',
            'POSTAL_ADDRESS_POST_CODE' => 'Postal Address Post Code',
            'COMPANY_PROFILE_TEXT' => 'Company Profile Text',
            'PRINT_LOGO_LOCATION' => 'Print Logo Location',
            'WEB_LOGO_LOCATION' => 'Web Logo Location',
            'FACEBOOK_ADDRESS_URL' => 'Facebook Address Url',
            'TWITTER_ADDRESS_URL' => 'Twitter Address Url',
            'LINKEDIN_ADDRESS_URL' => 'Linkedin Address Url',
            'YOUTUBE_ADDRESS_URL' => 'Youtube Address Url',
            'FOURSQUARE_ADDRESS_URL' => 'Foursquare Address Url',
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
        $criteria->compare('SUPPLIER_TYPE_REC_ID', $this->SUPPLIER_TYPE_REC_ID);
        $criteria->compare('CLIENT_ID', $this->CLIENT_ID);
        $criteria->compare('NAME', $this->NAME, true);
        $criteria->compare('TRADING_AS_NAME', $this->TRADING_AS_NAME, true);
        $criteria->compare('CONTACT_NAME', $this->CONTACT_NAME, true);
        $criteria->compare('CONTACT_POSITION', $this->CONTACT_POSITION, true);
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
        $criteria->compare('PHYSICAL_ADDRESS_PXID', $this->PHYSICAL_ADDRESS_PXID, true);
        $criteria->compare('PHYSICAL_ADDRESS_DPID', $this->PHYSICAL_ADDRESS_DPID, true);
        $criteria->compare('PHYSICAL_ADDRESS_LATITUDE', $this->PHYSICAL_ADDRESS_LATITUDE);
        $criteria->compare('PHYSICAL_ADDRESS_LONGITUDE', $this->PHYSICAL_ADDRESS_LONGITUDE);
        $criteria->compare('PHYSICAL_ADDRESS_HEIGHT', $this->PHYSICAL_ADDRESS_HEIGHT);
        $criteria->compare('PHYSICAL_ADDRESS_COMPLETE', $this->PHYSICAL_ADDRESS_COMPLETE, true);
        $criteria->compare('POSTAL_ADDRESS_BUILDING_ADDRESS', $this->POSTAL_ADDRESS_BUILDING_ADDRESS, true);
        $criteria->compare('POSTAL_ADDRESS_STREET_ADDRESS', $this->POSTAL_ADDRESS_STREET_ADDRESS, true);
        $criteria->compare('POSTAL_ADDRESS_SUBURB', $this->POSTAL_ADDRESS_SUBURB, true);
        $criteria->compare('POSTAL_ADDRESS_CITY', $this->POSTAL_ADDRESS_CITY, true);
        $criteria->compare('POSTAL_ADDRESS_STATE', $this->POSTAL_ADDRESS_STATE, true);
        $criteria->compare('POSTAL_ADDRESS_COUNTRY', $this->POSTAL_ADDRESS_COUNTRY, true);
        $criteria->compare('POSTAL_ADDRESS_POST_CODE', $this->POSTAL_ADDRESS_POST_CODE, true);
        $criteria->compare('COMPANY_PROFILE_TEXT', $this->COMPANY_PROFILE_TEXT, true);
        $criteria->compare('PRINT_LOGO_LOCATION', $this->PRINT_LOGO_LOCATION, true);
        $criteria->compare('WEB_LOGO_LOCATION', $this->WEB_LOGO_LOCATION, true);
        $criteria->compare('FACEBOOK_ADDRESS_URL', $this->FACEBOOK_ADDRESS_URL, true);
        $criteria->compare('TWITTER_ADDRESS_URL', $this->TWITTER_ADDRESS_URL, true);
        $criteria->compare('LINKEDIN_ADDRESS_URL', $this->LINKEDIN_ADDRESS_URL, true);
        $criteria->compare('YOUTUBE_ADDRESS_URL', $this->YOUTUBE_ADDRESS_URL, true);
        $criteria->compare('FOURSQUARE_ADDRESS_URL', $this->FOURSQUARE_ADDRESS_URL, true);

        return new CActiveDataProvider($this, array(
            'criteria' => $criteria,
        ));
    }

}