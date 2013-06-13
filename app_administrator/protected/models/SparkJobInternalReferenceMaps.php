<?php

/**
 * This is the model class for table "SparkJobInternalReferenceMaps".
 *
 * The followings are the available columns in table 'SparkJobInternalReferenceMaps':
 * @property integer $id
 * @property integer $sparkJobId
 * @property string $internalReferenceId
 * @property boolean $trueRegion
 *
 * The followings are the available model relations:
 * @property SparkJobs $sparkJob
 * @property InternalReferences $internalReference
 */
class SparkJobInternalReferenceMaps extends CActiveRecord
{
	/**
	 * Returns the static model of the specified AR class.
	 * @param string $className active record class name.
	 * @return SparkJobInternalReferenceMaps the static model class
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
		return 'SparkJobInternalReferenceMaps';
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array(
			array('sparkJobId, internalReferenceId', 'required'),
			array('sparkJobId', 'numerical', 'integerOnly'=>true),
			array('internalReferenceId', 'length', 'max'=>256),
			array('trueRegion', 'safe'),
			// The following rule is used by search().
			// Please remove those attributes that should not be searched.
			array('id, sparkJobId, internalReferenceId, trueRegion', 'safe', 'on'=>'search'),
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
			'sparkJob' => array(self::BELONGS_TO, 'SparkJobs', 'sparkJobId'),
			'internalReference' => array(self::BELONGS_TO, 'InternalReferences', 'internalReferenceId'),
		);
	}

	/**
	 * @return array customized attribute labels (name=>label)
	 */
	public function attributeLabels()
	{
		return array(
			'id' => 'ID',
			'sparkJobId' => 'Spark Job',
			'internalReferenceId' => 'Internal Reference',
			'trueRegion' => 'True Region',
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
		$criteria->compare('sparkJobId',$this->sparkJobId);
		$criteria->compare('internalReferenceId',$this->internalReferenceId,true);
		$criteria->compare('trueRegion',$this->trueRegion);

		return new CActiveDataProvider($this, array(
			'criteria'=>$criteria,
		));
	}
}