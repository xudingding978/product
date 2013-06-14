<?php

/**
 * This is the model class for table "ArticleTopicMaps".
 *
 * The followings are the available columns in table 'ArticleTopicMaps':
 * @property integer $id
 * @property integer $articleId
 * @property integer $topicId
 * @property integer $regionId
 *
 * The followings are the available model relations:
 * @property Articles $article
 * @property Regions $region
 * @property Topics $topic
 */
class ArticleTopicMaps extends CActiveRecord
{
	/**
	 * Returns the static model of the specified AR class.
	 * @param string $className active record class name.
	 * @return ArticleTopicMaps the static model class
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
		return 'ArticleTopicMaps';
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array(
			array('articleId, topicId, regionId', 'required'),
			array('articleId, topicId, regionId', 'numerical', 'integerOnly'=>true),
			// The following rule is used by search().
			// Please remove those attributes that should not be searched.
			array('id, articleId, topicId, regionId', 'safe', 'on'=>'search'),
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
			'article' => array(self::BELONGS_TO, 'Articles', 'articleId'),
			'region' => array(self::BELONGS_TO, 'Regions', 'regionId'),
			'topic' => array(self::BELONGS_TO, 'Topics', 'topicId'),
		);
	}

	/**
	 * @return array customized attribute labels (name=>label)
	 */
	public function attributeLabels()
	{
		return array(
			'id' => 'ID',
			'articleId' => 'Article',
			'topicId' => 'Topic',
			'regionId' => 'Region',
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

		$criteria->compare('id',$this->id);
		$criteria->compare('articleId',$this->articleId);
		$criteria->compare('topicId',$this->topicId);
		$criteria->compare('regionId',$this->regionId);

		return new CActiveDataProvider($this, array(
			'criteria'=>$criteria,
		));
	}
}