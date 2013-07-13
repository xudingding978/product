<?php

/**
 * This is the model class for table "Profiles".
 *
 * The followings are the available columns in table 'Profiles':
 * @property integer $id
 * @property string $objectId
 * @property string $couchBaseId
 * @property string $documentContent
 */
class Profiles extends CActiveRecord
{
	/**
	 * Returns the static model of the specified AR class.
	 * @param string $className active record class name.
	 * @return Profiles the static model class
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
		return 'Profiles';
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array(
			array('objectId, couchBaseId', 'length', 'max'=>2048),
			array('documentContent', 'length', 'max'=>8000),
			// The following rule is used by search().
			// Please remove those attributes that should not be searched.
			array('id, objectId, couchBaseId, documentContent', 'safe', 'on'=>'search'),
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
			'objectId' => 'Object',
			'couchBaseId' => 'Couch Base',
			'documentContent' => 'Document Content',
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
		$criteria->compare('objectId',$this->objectId,true);
		$criteria->compare('couchBaseId',$this->couchBaseId,true);
		$criteria->compare('documentContent',$this->documentContent,true);

		return new CActiveDataProvider($this, array(
			'criteria'=>$criteria,
		));
	}
}