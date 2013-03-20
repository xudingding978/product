<?php

/**
 * This is the model class for table "tpl_domain_directory".
 *
 * The followings are the available columns in table 'tpl_domain_directory':
 * @property integer $REC_ID
 * @property integer $DOMAIN_ID
 * @property integer $DIRECTORY_ID
 *
 * The followings are the available model relations:
 * @property TplDomains $dOMAIN
 * @property TplDirectory $dIRECTORY
 */
class TplDomainDirectory extends CActiveRecord
{
	/**
	 * Returns the static model of the specified AR class.
	 * @param string $className active record class name.
	 * @return TplDomainDirectory the static model class
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
		return 'tpl_domain_directory';
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array(
			array('DOMAIN_ID, DIRECTORY_ID', 'numerical', 'integerOnly'=>true),
			// The following rule is used by search().
			// Please remove those attributes that should not be searched.
			array('REC_ID, DOMAIN_ID, DIRECTORY_ID', 'safe', 'on'=>'search'),
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
			'dOMAIN' => array(self::BELONGS_TO, 'TplDomains', 'DOMAIN_ID'),
			'dIRECTORY' => array(self::BELONGS_TO, 'TplDirectory', 'DIRECTORY_ID'),
		);
	}

	/**
	 * @return array customized attribute labels (name=>label)
	 */
	public function attributeLabels()
	{
		return array(
			'REC_ID' => 'Rec',
			'DOMAIN_ID' => 'Domain',
			'DIRECTORY_ID' => 'Directory',
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
		$criteria->compare('DOMAIN_ID',$this->DOMAIN_ID);
		$criteria->compare('DIRECTORY_ID',$this->DIRECTORY_ID);

		return new CActiveDataProvider($this, array(
			'criteria'=>$criteria,
		));
	}
}