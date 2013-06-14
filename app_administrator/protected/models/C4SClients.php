<?php

/**
 * This is the model class for table "C4S_Clients".
 *
 * The followings are the available columns in table 'C4S_Clients':
 * @property integer $C4S_ClientID
 * @property string $DateCreated
 * @property string $ClientName
 * @property integer $ArticleID
 * @property integer $SortOrder
 *
 * The followings are the available model relations:
 * @property C4SClientSecondaryMenuSettings[] $c4SClientSecondaryMenuSettings
 * @property C4SClientActions[] $c4SClientActions
 * @property C4SWebStats[] $c4SWebStats
 * @property C4SClientSEOSettings[] $c4SClientSEOSettings
 * @property C4SClientVideos[] $c4SClientVideoses
 * @property C4SClientMainMenuSettings[] $c4SClientMainMenuSettings
 * @property C4SClientBrochures[] $c4SClientBrochures
 */
class C4SClients extends CActiveRecord
{
	/**
	 * Returns the static model of the specified AR class.
	 * @param string $className active record class name.
	 * @return C4SClients the static model class
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
		return 'C4S_Clients';
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array(
			array('ClientName, ArticleID', 'required'),
			array('ArticleID, SortOrder', 'numerical', 'integerOnly'=>true),
			array('ClientName', 'length', 'max'=>50),
			array('DateCreated', 'safe'),
			// The following rule is used by search().
			// Please remove those attributes that should not be searched.
			array('C4S_ClientID, DateCreated, ClientName, ArticleID, SortOrder', 'safe', 'on'=>'search'),
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
			'c4SClientSecondaryMenuSettings' => array(self::HAS_MANY, 'C4SClientSecondaryMenuSettings', 'lkC4S_ClientID'),
			'c4SClientActions' => array(self::HAS_MANY, 'C4SClientActions', 'lkC4S_ClientID'),
			'c4SWebStats' => array(self::HAS_MANY, 'C4SWebStats', 'lkC4S_ClientID'),
			'c4SClientSEOSettings' => array(self::HAS_MANY, 'C4SClientSEOSettings', 'lkC4S_ClientID'),
			'c4SClientVideoses' => array(self::HAS_MANY, 'C4SClientVideos', 'lkC4S_ClientID'),
			'c4SClientMainMenuSettings' => array(self::HAS_MANY, 'C4SClientMainMenuSettings', 'lkC4S_ClientID'),
			'c4SClientBrochures' => array(self::HAS_MANY, 'C4SClientBrochures', 'lkC4S_ClientID'),
		);
	}

	/**
	 * @return array customized attribute labels (name=>label)
	 */
	public function attributeLabels()
	{
		return array(
			'C4S_ClientID' => 'C4 S Client',
			'DateCreated' => 'Date Created',
			'ClientName' => 'Client Name',
			'ArticleID' => 'Article',
			'SortOrder' => 'Sort Order',
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

		$criteria->compare('C4S_ClientID',$this->C4S_ClientID);
		$criteria->compare('DateCreated',$this->DateCreated,true);
		$criteria->compare('ClientName',$this->ClientName,true);
		$criteria->compare('ArticleID',$this->ArticleID);
		$criteria->compare('SortOrder',$this->SortOrder);

		return new CActiveDataProvider($this, array(
			'criteria'=>$criteria,
		));
	}
   
}