<?php

/**
 * This is the model class for table "InternalReferences".
 *
 * The followings are the available columns in table 'InternalReferences':
 * @property string $id
 * @property integer $type
 * @property integer $regionId
 * @property integer $topicId
 *
 * The followings are the available model relations:
 * @property SparkJobInternalReferenceMaps[] $sparkJobInternalReferenceMaps
 * @property Books[] $books
 * @property Regions $region
 * @property Topics $topic
 */
class InternalReferences extends CActiveRecord
{
	/**
	 * Returns the static model of the specified AR class.
	 * @param string $className active record class name.
	 * @return InternalReferences the static model class
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
		return 'InternalReferences';
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array(
			array('id, type, regionId', 'required'),
			array('type, regionId, topicId', 'numerical', 'integerOnly'=>true),
			array('id', 'length', 'max'=>256),
			// The following rule is used by search().
			// Please remove those attributes that should not be searched.
			array('id, type, regionId, topicId', 'safe', 'on'=>'search'),
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
			'sparkJobInternalReferenceMaps' => array(self::HAS_MANY, 'SparkJobInternalReferenceMaps', 'internalReferenceId'),
			'books' => array(self::HAS_MANY, 'Books', 'internalReferenceId'),
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
			'type' => 'Type',
			'regionId' => 'Region',
			'topicId' => 'Topic',
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
		$criteria->compare('type',$this->type);
		$criteria->compare('regionId',$this->regionId);
		$criteria->compare('topicId',$this->topicId);

		return new CActiveDataProvider($this, array(
			'criteria'=>$criteria,
		));
	}
}