<?php

/**
 * This is the model class for table "SparkJobNotes".
 *
 * The followings are the available columns in table 'SparkJobNotes':
 * @property integer $id
 * @property integer $sparkJobId
 * @property integer $type
 * @property boolean $reported
 * @property string $dateCreated
 * @property string $user
 * @property string $comment
 * @property string $text
 *
 * The followings are the available model relations:
 * @property SparkJobs $sparkJob
 */
class SparkJobNotes extends CActiveRecord
{
	/**
	 * Returns the static model of the specified AR class.
	 * @param string $className active record class name.
	 * @return SparkJobNotes the static model class
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
		return 'SparkJobNotes';
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array(
			array('sparkJobId, type, reported, dateCreated, user, comment, text', 'required'),
			array('sparkJobId, type', 'numerical', 'integerOnly'=>true),
			array('user', 'length', 'max'=>256),
			array('comment, text', 'length', 'max'=>1073741823),
			// The following rule is used by search().
			// Please remove those attributes that should not be searched.
			array('id, sparkJobId, type, reported, dateCreated, user, comment, text', 'safe', 'on'=>'search'),
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
			'type' => 'Type',
			'reported' => 'Reported',
			'dateCreated' => 'Date Created',
			'user' => 'User',
			'comment' => 'Comment',
			'text' => 'Text',
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
		$criteria->compare('type',$this->type);
		$criteria->compare('reported',$this->reported);
		$criteria->compare('dateCreated',$this->dateCreated,true);
		$criteria->compare('user',$this->user,true);
		$criteria->compare('comment',$this->comment,true);
		$criteria->compare('text',$this->text,true);

		return new CActiveDataProvider($this, array(
			'criteria'=>$criteria,
		));
	}
}