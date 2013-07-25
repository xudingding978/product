<?php

/**
 * This is the model class for table "profiles_gj_gardner".
 *
 * The followings are the available columns in table 'profiles_gj_gardner':
 * @property string $id
 * @property string $ProfileName
 * @property string $ProfileUrl
 * @property string $ProfileContact
 * @property string $ProfileCategory
 * @property string $ProfilePhysicalAddress
 * @property string $ProfileContactNumber
 * @property string $ProfileWebsite
 * @property string $ProfileWebsiteUrl
 * @property string $ClientContact
 * @property string $Country
 * @property string $Region
 * @property string $ProfileContactEmail
 * @property string $ProfileClientName
 * @property string $ProfileHours
 * @property string $ProfileAboutUs
 */
class Profiles_Gj_Gardner extends CActiveRecord
{
	/**
	 * Returns the static model of the specified AR class.
	 * @param string $className active record class name.
	 * @return Profiles_Gj_Gardner the static model class
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
		return 'profiles_gj_gardner';
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array(
			array('id, ClientContact, Country, Region', 'length', 'max'=>50),
			array('ProfileName, ProfileUrl, ProfileContact, ProfileCategory, ProfilePhysicalAddress, ProfileContactNumber, ProfileWebsite, ProfileWebsiteUrl, ProfileContactEmail, ProfileClientName, ProfileHours', 'length', 'max'=>500),
			array('ProfileAboutUs', 'safe'),
			// The following rule is used by search().
			// Please remove those attributes that should not be searched.
			array('id, ProfileName, ProfileUrl, ProfileContact, ProfileCategory, ProfilePhysicalAddress, ProfileContactNumber, ProfileWebsite, ProfileWebsiteUrl, ClientContact, Country, Region, ProfileContactEmail, ProfileClientName, ProfileHours, ProfileAboutUs', 'safe', 'on'=>'search'),
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
			'ProfileName' => 'Profile Name',
			'ProfileUrl' => 'Profile Url',
			'ProfileContact' => 'Profile Contact',
			'ProfileCategory' => 'Profile Category',
			'ProfilePhysicalAddress' => 'Profile Physical Address',
			'ProfileContactNumber' => 'Profile Contact Number',
			'ProfileWebsite' => 'Profile Website',
			'ProfileWebsiteUrl' => 'Profile Website Url',
			'ClientContact' => 'Client Contact',
			'Country' => 'Country',
			'Region' => 'Region',
			'ProfileContactEmail' => 'Profile Contact Email',
			'ProfileClientName' => 'Profile Client Name',
			'ProfileHours' => 'Profile Hours',
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
		$criteria->compare('ProfileName',$this->ProfileName,true);
		$criteria->compare('ProfileUrl',$this->ProfileUrl,true);
		$criteria->compare('ProfileContact',$this->ProfileContact,true);
		$criteria->compare('ProfileCategory',$this->ProfileCategory,true);
		$criteria->compare('ProfilePhysicalAddress',$this->ProfilePhysicalAddress,true);
		$criteria->compare('ProfileContactNumber',$this->ProfileContactNumber,true);
		$criteria->compare('ProfileWebsite',$this->ProfileWebsite,true);
		$criteria->compare('ProfileWebsiteUrl',$this->ProfileWebsiteUrl,true);
		$criteria->compare('ClientContact',$this->ClientContact,true);
		$criteria->compare('Country',$this->Country,true);
		$criteria->compare('Region',$this->Region,true);
		$criteria->compare('ProfileContactEmail',$this->ProfileContactEmail,true);
		$criteria->compare('ProfileClientName',$this->ProfileClientName,true);
		$criteria->compare('ProfileHours',$this->ProfileHours,true);
		$criteria->compare('ProfileAboutUs',$this->ProfileAboutUs,true);

		return new CActiveDataProvider($this, array(
			'criteria'=>$criteria,
		));
	}
}