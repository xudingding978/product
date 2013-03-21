<?php

/**
 * This is the model class for table "tpl_tenant_profile".
 *
 * The followings are the available columns in table 'tpl_tenant_profile':
 * @property integer $REC_ID
 * @property string $REC_DATETIME
 * @property string $REC_TIMESTAMP
 * @property integer $TENANT_REC_ID
 * @property string $LEGAL_ENTITY_NAME
 * @property string $TRADING_AS_NAME
 * @property string $DESCRIPTION
 * @property string $CONTACT_NAME
 * @property string $CONTACT_POSITION
 * @property string $CONTACT_NUMBER
 * @property string $CONTACT_EMAIL
 * @property string $EMAIL_ADDRESS
 * @property string $TELEPHONE_NO
 * @property string $FAX_NO
 * @property string $FREE_TELEPHONE_NO
 * @property string $FREE_FAX_NO
 * @property string $WEBSITE_ADDRESS
 * @property string $GOOGLE_ANALYTICS_CODE
 * @property string $PHYSICAL_ADDRESS_BUILDING_ADDRESS
 * @property string $PHYSICAL_ADDRESS_STREET_ADDRESS
 * @property string $PHYSICAL_ADDRESS_SUBURB
 * @property string $PHYSICAL_ADDRESS_CITY
 * @property string $PHYSICAL_ADDRESS_STATE
 * @property string $PHYSICAL_ADDRESS_COUNTRY
 * @property string $PHYSICAL_ADDRESS_POST_CODE
 * @property string $POSTAL_ADDRESS_BUILDING_ADDRESS
 * @property string $POSTAL_ADDRESS_STREET_ADDRESS
 * @property string $POSTAL_ADDRESS_SUBURB
 * @property string $POSTAL_ADDRESS_CITY
 * @property string $POSTAL_ADDRESS_STATE
 * @property string $POSTAL_ADDRESS_COUNTRY
 * @property string $POSTAL_ADDRESS_POST_CODE
 */
class TenantProfile extends CActiveRecord
{
	/**
	 * Returns the static model of the specified AR class.
	 * @param string $className active record class name.
	 * @return TenantProfile the static model class
	 */
	public static function model($className=__CLASS__)
	{
		return parent::model($className);
	}

	/**
	 * @return string the associated database table name
	 */
	public function tableName()
	{
		return 'tpl_tenant_profile';
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array(
			array('REC_ID', 'required'),
			array('REC_ID, TENANT_REC_ID', 'numerical', 'integerOnly'=>true),
			array('LEGAL_ENTITY_NAME, TRADING_AS_NAME, EMAIL_ADDRESS, WEBSITE_ADDRESS, PHYSICAL_ADDRESS_BUILDING_ADDRESS, PHYSICAL_ADDRESS_STREET_ADDRESS, PHYSICAL_ADDRESS_SUBURB, PHYSICAL_ADDRESS_CITY, PHYSICAL_ADDRESS_STATE, POSTAL_ADDRESS_BUILDING_ADDRESS, POSTAL_ADDRESS_STREET_ADDRESS, POSTAL_ADDRESS_SUBURB, POSTAL_ADDRESS_CITY, POSTAL_ADDRESS_STATE', 'length', 'max'=>255),
			array('CONTACT_NAME, CONTACT_POSITION, CONTACT_NUMBER, CONTACT_EMAIL, TELEPHONE_NO, FAX_NO, FREE_TELEPHONE_NO, FREE_FAX_NO, GOOGLE_ANALYTICS_CODE, PHYSICAL_ADDRESS_COUNTRY, POSTAL_ADDRESS_COUNTRY', 'length', 'max'=>45),
			array('PHYSICAL_ADDRESS_POST_CODE, POSTAL_ADDRESS_POST_CODE', 'length', 'max'=>12),
			array('REC_DATETIME, REC_TIMESTAMP, DESCRIPTION', 'safe'),
			// The following rule is used by search().
			// Please remove those attributes that should not be searched.
			array('REC_ID, REC_DATETIME, REC_TIMESTAMP, TENANT_REC_ID, LEGAL_ENTITY_NAME, TRADING_AS_NAME, DESCRIPTION, CONTACT_NAME, CONTACT_POSITION, CONTACT_NUMBER, CONTACT_EMAIL, EMAIL_ADDRESS, TELEPHONE_NO, FAX_NO, FREE_TELEPHONE_NO, FREE_FAX_NO, WEBSITE_ADDRESS, GOOGLE_ANALYTICS_CODE, PHYSICAL_ADDRESS_BUILDING_ADDRESS, PHYSICAL_ADDRESS_STREET_ADDRESS, PHYSICAL_ADDRESS_SUBURB, PHYSICAL_ADDRESS_CITY, PHYSICAL_ADDRESS_STATE, PHYSICAL_ADDRESS_COUNTRY, PHYSICAL_ADDRESS_POST_CODE, POSTAL_ADDRESS_BUILDING_ADDRESS, POSTAL_ADDRESS_STREET_ADDRESS, POSTAL_ADDRESS_SUBURB, POSTAL_ADDRESS_CITY, POSTAL_ADDRESS_STATE, POSTAL_ADDRESS_COUNTRY, POSTAL_ADDRESS_POST_CODE', 'safe', 'on'=>'search'),
		);
	}

	/**
	 * @return array relational rules.
	 */
	public function relations()
	{
		// NOTE: you may need to adjust the relation name and the related
		// class name for the relations automatically generated below.
		return array(
		);
	}

	/**
	 * @return array customized attribute labels (name=>label)
	 */
	public function attributeLabels()
	{
		return array(
			'REC_ID' => 'Rec',
			'REC_DATETIME' => 'Rec Datetime',
			'REC_TIMESTAMP' => 'Rec Timestamp',
			'TENANT_REC_ID' => 'Tenant Rec',
			'LEGAL_ENTITY_NAME' => 'Legal Entity Name',
			'TRADING_AS_NAME' => 'Trading As Name',
			'DESCRIPTION' => 'Description',
			'CONTACT_NAME' => 'Contact Name',
			'CONTACT_POSITION' => 'Contact Position',
			'CONTACT_NUMBER' => 'Contact Number',
			'CONTACT_EMAIL' => 'Contact Email',
			'EMAIL_ADDRESS' => 'Email Address',
			'TELEPHONE_NO' => 'Telephone No',
			'FAX_NO' => 'Fax No',
			'FREE_TELEPHONE_NO' => 'Free Telephone No',
			'FREE_FAX_NO' => 'Free Fax No',
			'WEBSITE_ADDRESS' => 'Website Address',
			'GOOGLE_ANALYTICS_CODE' => 'Google Analytics Code',
			'PHYSICAL_ADDRESS_BUILDING_ADDRESS' => 'Physical Address Building Address',
			'PHYSICAL_ADDRESS_STREET_ADDRESS' => 'Physical Address Street Address',
			'PHYSICAL_ADDRESS_SUBURB' => 'Physical Address Suburb',
			'PHYSICAL_ADDRESS_CITY' => 'Physical Address City',
			'PHYSICAL_ADDRESS_STATE' => 'Physical Address State',
			'PHYSICAL_ADDRESS_COUNTRY' => 'Physical Address Country',
			'PHYSICAL_ADDRESS_POST_CODE' => 'Physical Address Post Code',
			'POSTAL_ADDRESS_BUILDING_ADDRESS' => 'Postal Address Building Address',
			'POSTAL_ADDRESS_STREET_ADDRESS' => 'Postal Address Street Address',
			'POSTAL_ADDRESS_SUBURB' => 'Postal Address Suburb',
			'POSTAL_ADDRESS_CITY' => 'Postal Address City',
			'POSTAL_ADDRESS_STATE' => 'Postal Address State',
			'POSTAL_ADDRESS_COUNTRY' => 'Postal Address Country',
			'POSTAL_ADDRESS_POST_CODE' => 'Postal Address Post Code',
		);
	}

	/**
	 * Retrieves a list of models based on the current search/filter conditions.
	 * @return CActiveDataProvider the data provider that can return the models based on the search/filter conditions.
	 */
	public function search()
	{
		// Warning: Please modify the following code to remove attributes that
		// should not be searched.

		$criteria=new CDbCriteria;

		$criteria->compare('REC_ID',$this->REC_ID);
		$criteria->compare('REC_DATETIME',$this->REC_DATETIME,true);
		$criteria->compare('REC_TIMESTAMP',$this->REC_TIMESTAMP,true);
		$criteria->compare('TENANT_REC_ID',$this->TENANT_REC_ID);
		$criteria->compare('LEGAL_ENTITY_NAME',$this->LEGAL_ENTITY_NAME,true);
		$criteria->compare('TRADING_AS_NAME',$this->TRADING_AS_NAME,true);
		$criteria->compare('DESCRIPTION',$this->DESCRIPTION,true);
		$criteria->compare('CONTACT_NAME',$this->CONTACT_NAME,true);
		$criteria->compare('CONTACT_POSITION',$this->CONTACT_POSITION,true);
		$criteria->compare('CONTACT_NUMBER',$this->CONTACT_NUMBER,true);
		$criteria->compare('CONTACT_EMAIL',$this->CONTACT_EMAIL,true);
		$criteria->compare('EMAIL_ADDRESS',$this->EMAIL_ADDRESS,true);
		$criteria->compare('TELEPHONE_NO',$this->TELEPHONE_NO,true);
		$criteria->compare('FAX_NO',$this->FAX_NO,true);
		$criteria->compare('FREE_TELEPHONE_NO',$this->FREE_TELEPHONE_NO,true);
		$criteria->compare('FREE_FAX_NO',$this->FREE_FAX_NO,true);
		$criteria->compare('WEBSITE_ADDRESS',$this->WEBSITE_ADDRESS,true);
		$criteria->compare('GOOGLE_ANALYTICS_CODE',$this->GOOGLE_ANALYTICS_CODE,true);
		$criteria->compare('PHYSICAL_ADDRESS_BUILDING_ADDRESS',$this->PHYSICAL_ADDRESS_BUILDING_ADDRESS,true);
		$criteria->compare('PHYSICAL_ADDRESS_STREET_ADDRESS',$this->PHYSICAL_ADDRESS_STREET_ADDRESS,true);
		$criteria->compare('PHYSICAL_ADDRESS_SUBURB',$this->PHYSICAL_ADDRESS_SUBURB,true);
		$criteria->compare('PHYSICAL_ADDRESS_CITY',$this->PHYSICAL_ADDRESS_CITY,true);
		$criteria->compare('PHYSICAL_ADDRESS_STATE',$this->PHYSICAL_ADDRESS_STATE,true);
		$criteria->compare('PHYSICAL_ADDRESS_COUNTRY',$this->PHYSICAL_ADDRESS_COUNTRY,true);
		$criteria->compare('PHYSICAL_ADDRESS_POST_CODE',$this->PHYSICAL_ADDRESS_POST_CODE,true);
		$criteria->compare('POSTAL_ADDRESS_BUILDING_ADDRESS',$this->POSTAL_ADDRESS_BUILDING_ADDRESS,true);
		$criteria->compare('POSTAL_ADDRESS_STREET_ADDRESS',$this->POSTAL_ADDRESS_STREET_ADDRESS,true);
		$criteria->compare('POSTAL_ADDRESS_SUBURB',$this->POSTAL_ADDRESS_SUBURB,true);
		$criteria->compare('POSTAL_ADDRESS_CITY',$this->POSTAL_ADDRESS_CITY,true);
		$criteria->compare('POSTAL_ADDRESS_STATE',$this->POSTAL_ADDRESS_STATE,true);
		$criteria->compare('POSTAL_ADDRESS_COUNTRY',$this->POSTAL_ADDRESS_COUNTRY,true);
		$criteria->compare('POSTAL_ADDRESS_POST_CODE',$this->POSTAL_ADDRESS_POST_CODE,true);

		return new CActiveDataProvider($this, array(
			'criteria'=>$criteria,
		));
	}
}