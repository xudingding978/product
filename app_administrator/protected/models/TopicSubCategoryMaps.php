<?php

/**
 * This is the model class for table "TopicSubCategoryMaps".
 *
 * The followings are the available columns in table 'TopicSubCategoryMaps':
 * @property integer $id
 * @property integer $topicId
 * @property integer $subCategoryId
 *
 * The followings are the available model relations:
 * @property Topics $topic
 * @property SubCategories $subCategory
 */
class TopicSubCategoryMaps extends CActiveRecord
{
	/**
	 * Returns the static model of the specified AR class.
	 * @param string $className active record class name.
	 * @return TopicSubCategoryMaps the static model class
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
		return 'TopicSubCategoryMaps';
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array(
			array('topicId, subCategoryId', 'required'),
			array('topicId, subCategoryId', 'numerical', 'integerOnly'=>true),
			// The following rule is used by search().
			// Please remove those attributes that should not be searched.
			array('id, topicId, subCategoryId', 'safe', 'on'=>'search'),
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
			'topic' => array(self::BELONGS_TO, 'Topics', 'topicId'),
			'subCategory' => array(self::BELONGS_TO, 'SubCategories', 'subCategoryId'),
		);
	}

	/**
	 * @return array customized attribute labels (name=>label)
	 */
	public function attributeLabels()
	{
		return array(
			'id' => 'ID',
			'topicId' => 'Topic',
			'subCategoryId' => 'Sub Category',
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
		$criteria->compare('topicId',$this->topicId);
		$criteria->compare('subCategoryId',$this->subCategoryId);

		return new CActiveDataProvider($this, array(
			'criteria'=>$criteria,
		));
	}
}