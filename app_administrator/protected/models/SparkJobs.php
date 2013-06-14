<?php

/**
 * This is the model class for table "SparkJobs".
 *
 * The followings are the available columns in table 'SparkJobs':
 * @property integer $sparkId
 * @property integer $clientId
 * @property integer $importStatus
 * @property integer $reports
 *
 * The followings are the available model relations:
 * @property AssociationMembers[] $associationMembers
 * @property Articles[] $articles
 * @property ProjectPages[] $projectPages
 * @property SparkJobInternalReferenceMaps[] $sparkJobInternalReferenceMaps
 * @property Videos[] $videoses
 * @property Awards[] $awards
 * @property Channels[] $channels
 * @property SparkClients $client
 * @property Deliveries[] $deliveries
 * @property Links[] $links
 * @property PropertyListings[] $propertyListings
 * @property DeliverySparkJobMaps[] $deliverySparkJobMaps
 * @property Galleries[] $galleries
 * @property SparkJobNotes[] $sparkJobNotes
 * @property IdeasPortals[] $ideasPortals
 * @property AdvertorialDeliveries[] $advertorialDeliveries
 */
class SparkJobs extends CActiveRecord
{
	/**
	 * Returns the static model of the specified AR class.
	 * @param string $className active record class name.
	 * @return SparkJobs the static model class
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
		return 'SparkJobs';
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array(
			array('sparkId, importStatus, reports', 'required'),
			array('sparkId, clientId, importStatus, reports', 'numerical', 'integerOnly'=>true),
			// The following rule is used by search().
			// Please remove those attributes that should not be searched.
			array('sparkId, clientId, importStatus, reports', 'safe', 'on'=>'search'),
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
			'associationMembers' => array(self::HAS_MANY, 'AssociationMembers', 'sparkJobId'),
			'articles' => array(self::HAS_MANY, 'Articles', 'sparkJobId'),
			'projectPages' => array(self::HAS_MANY, 'ProjectPages', 'sparkJobId'),
			'sparkJobInternalReferenceMaps' => array(self::HAS_MANY, 'SparkJobInternalReferenceMaps', 'sparkJobId'),
			'videoses' => array(self::HAS_MANY, 'Videos', 'sparkJobId'),
			'awards' => array(self::HAS_MANY, 'Awards', 'sparkJobId'),
			'channels' => array(self::HAS_MANY, 'Channels', 'sparkJobId'),
			'client' => array(self::BELONGS_TO, 'SparkClients', 'clientId'),
			'deliveries' => array(self::HAS_MANY, 'Deliveries', 'sparkJobId'),
			'links' => array(self::HAS_MANY, 'Links', 'sparkJobId'),
			'propertyListings' => array(self::HAS_MANY, 'PropertyListings', 'sparkJobId'),
			'deliverySparkJobMaps' => array(self::HAS_MANY, 'DeliverySparkJobMaps', 'sparkJobId'),
			'galleries' => array(self::HAS_MANY, 'Galleries', 'sparkJobId'),
			'sparkJobNotes' => array(self::HAS_MANY, 'SparkJobNotes', 'sparkJobId'),
			'ideasPortals' => array(self::HAS_MANY, 'IdeasPortals', 'sparkJobId'),
			'advertorialDeliveries' => array(self::HAS_MANY, 'AdvertorialDeliveries', 'sparkJobId'),
		);
	}

	/**
	 * @return array customized attribute labels (name=>label)
	 */
	public function attributeLabels()
	{
		return array(
			'sparkId' => 'Spark',
			'clientId' => 'Client',
			'importStatus' => 'Import Status',
			'reports' => 'Reports',
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

		$criteria->compare('sparkId',$this->sparkId);
		$criteria->compare('clientId',$this->clientId);
		$criteria->compare('importStatus',$this->importStatus);
		$criteria->compare('reports',$this->reports);

		return new CActiveDataProvider($this, array(
			'criteria'=>$criteria,
		));
	}
}