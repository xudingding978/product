<?php

/**
 * This is the model class for table "HeliumMedia".
 *
 * The followings are the available columns in table 'HeliumMedia':
 * @property integer $heliumId
 * @property string $keywords
 * @property integer $mediaType
 * @property string $format
 *
 * The followings are the available model relations:
 * @property Articles[] $articles
 * @property ProjectPages[] $projectPages
 * @property Videos[] $videoses
 * @property Awards[] $awards
 * @property Channels[] $channels
 * @property PropertyListingImages[] $propertyListingImages
 * @property PropertyListings[] $propertyListings
 * @property ArticleImages[] $articleImages
 * @property GalleryImages[] $galleryImages
 * @property HeliumMediaHeliumBrandMaps[] $heliumMediaHeliumBrandMaps
 * @property VideoFiles[] $videoFiles
 * @property IdeasPortals[] $ideasPortals
 */
class HeliumMedia extends CActiveRecord
{
	/**
	 * Returns the static model of the specified AR class.
	 * @param string $className active record class name.
	 * @return HeliumMedia the static model class
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
		return 'HeliumMedia';
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array(
			array('heliumId, keywords', 'required'),
			array('heliumId, mediaType', 'numerical', 'integerOnly'=>true),
			array('keywords', 'length', 'max'=>1073741823),
			array('format', 'length', 'max'=>256),
			// The following rule is used by search().
			// Please remove those attributes that should not be searched.
			array('heliumId, keywords, mediaType, format', 'safe', 'on'=>'search'),
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
			'articles' => array(self::HAS_MANY, 'Articles', 'heliumMediaId'),
			'projectPages' => array(self::HAS_MANY, 'ProjectPages', 'heliumMediaId'),
			'videoses' => array(self::HAS_MANY, 'Videos', 'heliumMediaId'),
			'awards' => array(self::HAS_MANY, 'Awards', 'heliumMediaId'),
			'channels' => array(self::HAS_MANY, 'Channels', 'heliumMediaId'),
			'propertyListingImages' => array(self::HAS_MANY, 'PropertyListingImages', 'heliumMediaId'),
			'propertyListings' => array(self::HAS_MANY, 'PropertyListings', 'heliumMediaId'),
			'articleImages' => array(self::HAS_MANY, 'ArticleImages', 'heliumMediaId'),
			'galleryImages' => array(self::HAS_MANY, 'GalleryImages', 'heliumMediaId'),
			'heliumMediaHeliumBrandMaps' => array(self::HAS_MANY, 'HeliumMediaHeliumBrandMaps', 'heliumMediaId'),
			'videoFiles' => array(self::HAS_MANY, 'VideoFiles', 'heliumMediaId'),
			'ideasPortals' => array(self::HAS_MANY, 'IdeasPortals', 'heliumMediaId'),
		);
	}

	/**
	 * @return array customized attribute labels (name=>label)
	 */
	public function attributeLabels()
	{
		return array(
			'heliumId' => 'Helium',
			'keywords' => 'Keywords',
			'mediaType' => 'Media Type',
			'format' => 'Format',
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

		$criteria->compare('heliumId',$this->heliumId);
		$criteria->compare('keywords',$this->keywords,true);
		$criteria->compare('mediaType',$this->mediaType);
		$criteria->compare('format',$this->format,true);

		return new CActiveDataProvider($this, array(
			'criteria'=>$criteria,
		));
	}
}