<?php

/**
 * This is the model class for table "{{domains}}".
 *
 * The followings are the available columns in table '{{domains}}':
 * @property integer $REC_ID
 * @property string $DOMAIN_NAME
 * @property string $JSON_DATA
 * @property string $PAYPAL_EMAIL
 * @property string $TITLE
 *
 * The followings are the available model relations:
 * @property DomainDirectory[] $domainDirectories
 */
class Domains extends CActiveRecord
{
	/**
	 * Returns the static model of the specified AR class.
	 * @param string $className active record class name.
	 * @return Domains the static model class
	 */
	public static function model($className=__CLASS__)
	{
		return parent::model($className);
	}

	/**
	 * @return CDbConnection database connection
	 */
	public function getDbConnection()
	{
		return Yii::app()->db_live;
	}

	/**
	 * @return string the associated database table name
	 */
	public function tableName()
	{
		return '{{domains}}';
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array(
			array('DOMAIN_NAME', 'required'),
			array('DOMAIN_NAME', 'length', 'max'=>100),
			array('JSON_DATA', 'length', 'max'=>1000),
			array('PAYPAL_EMAIL, TITLE', 'length', 'max'=>45),
			// The following rule is used by search().
			// Please remove those attributes that should not be searched.
			array('REC_ID, DOMAIN_NAME, JSON_DATA, PAYPAL_EMAIL, TITLE', 'safe', 'on'=>'search'),
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
			'domainDirectories' => array(self::HAS_MANY, 'DomainDirectory', 'DOMAIN_ID'),
		);
	}

	/**
	 * @return array customized attribute labels (name=>label)
	 */
	public function attributeLabels()
	{
		return array(
			'REC_ID' => 'Rec',
			'DOMAIN_NAME' => 'Domain Name',
			'JSON_DATA' => 'Json Data',
			'PAYPAL_EMAIL' => 'Paypal Email',
			'TITLE' => 'Title',
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

		$criteria->compare('REC_ID',$this->REC_ID);
		$criteria->compare('DOMAIN_NAME',$this->DOMAIN_NAME,true);
		$criteria->compare('JSON_DATA',$this->JSON_DATA,true);
		$criteria->compare('PAYPAL_EMAIL',$this->PAYPAL_EMAIL,true);
		$criteria->compare('TITLE',$this->TITLE,true);

		return new CActiveDataProvider($this, array(
			'criteria'=>$criteria,
		));
	}
}