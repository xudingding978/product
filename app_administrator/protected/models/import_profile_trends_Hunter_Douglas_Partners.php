<?php

/**
 * This is the model class for table "import_profile_trends_Hunter_Douglas_Partners".
 *
 * The followings are the available columns in table 'import_profile_trends_Hunter_Douglas_Partners':
 * @property string $id
 * @property string $profile_name
 * @property string $profile_url
 * @property string $suburb
 * @property string $country
 * @property string $address
 * @property string $region
 * @property string $Zip
 * @property string $contact_no
 * @property string $Fax
 * @property string $website_url
 * @property string $profile_contact
 * @property string $admin
 * @property string $direct_inquiry_email
 * @property string $opening_hours
 * @property string $ProfileAboutUs
 */
class import_profile_trends_Hunter_Douglas_Partners extends CActiveRecord
{
	/**
	 * Returns the static model of the specified AR class.
	 * @param string $className active record class name.
	 * @return import_profile_trends_Hunter_Douglas_Partners the static model class
	 */
	public static function model($className=__CLASS__)
	{
		return parent::model($className);
	}

	/**
	 * @return CDbConnection database connection
	 */
	public function getDbConnection()
	{
		return Yii::app()->db_hubsrv;
	}

	/**
	 * @return string the associated database table name
	 */
	public function tableName()
	{
		return 'import_profile_trends_Hunter_Douglas_Partners';
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array(
			array('id', 'required'),
			array('id, suburb, country, region, Zip, contact_no, Fax', 'length', 'max'=>45),
			array('profile_name, address, website_url, profile_contact, direct_inquiry_email, opening_hours', 'length', 'max'=>455),
			array('profile_url', 'length', 'max'=>425),
			array('admin', 'length', 'max'=>555),
			array('ProfileAboutUs', 'length', 'max'=>500),
			// The following rule is used by search().
			// Please remove those attributes that should not be searched.
			array('id, profile_name, profile_url, suburb, country, address, region, Zip, contact_no, Fax, website_url, profile_contact, admin, direct_inquiry_email, opening_hours, ProfileAboutUs', 'safe', 'on'=>'search'),
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
			'id' => 'ID',
			'profile_name' => 'Profile Name',
			'profile_url' => 'Profile Url',
			'suburb' => 'Suburb',
			'country' => 'Country',
			'address' => 'Address',
			'region' => 'Region',
			'Zip' => 'Zip',
			'contact_no' => 'Contact No',
			'Fax' => 'Fax',
			'website_url' => 'Website Url',
			'profile_contact' => 'Profile Contact',
			'admin' => 'Admin',
			'direct_inquiry_email' => 'Direct Inquiry Email',
			'opening_hours' => 'Opening Hours',
			'ProfileAboutUs' => 'Profile About Us',
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

		$criteria->compare('id',$this->id,true);
		$criteria->compare('profile_name',$this->profile_name,true);
		$criteria->compare('profile_url',$this->profile_url,true);
		$criteria->compare('suburb',$this->suburb,true);
		$criteria->compare('country',$this->country,true);
		$criteria->compare('address',$this->address,true);
		$criteria->compare('region',$this->region,true);
		$criteria->compare('Zip',$this->Zip,true);
		$criteria->compare('contact_no',$this->contact_no,true);
		$criteria->compare('Fax',$this->Fax,true);
		$criteria->compare('website_url',$this->website_url,true);
		$criteria->compare('profile_contact',$this->profile_contact,true);
		$criteria->compare('admin',$this->admin,true);
		$criteria->compare('direct_inquiry_email',$this->direct_inquiry_email,true);
		$criteria->compare('opening_hours',$this->opening_hours,true);
		$criteria->compare('ProfileAboutUs',$this->ProfileAboutUs,true);

		return new CActiveDataProvider($this, array(
			'criteria'=>$criteria,
		));
	}
}