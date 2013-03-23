<?php

/**
 * This is the model class for table "{{directory}}".
 *
 * The followings are the available columns in table '{{directory}}':
 * @property integer $REC_ID
 * @property integer $TENANT_ID
 * @property string $REC_DATETIME
 * @property string $REC_TIMESTAMP
 * @property string $NAME
 * @property integer $IS_PRODUCT_BASED
 * @property string $DIRECTORY_DESC
 * @property integer $IS_DEFAULT
 *
 * The followings are the available model relations:
 * @property BrandDirectory[] $brandDirectories
 * @property DirectoryPeriod[] $directoryPeriods
 * @property DomainDirectory[] $domainDirectories
 * @property Listing[] $listings
 * @property ShadowSupplierCategoryProduct[] $shadowSupplierCategoryProducts
 * @property SupplierCategoryProduct[] $supplierCategoryProducts
 */
class Directory extends CActiveRecord
{
	/**
	 * Returns the static model of the specified AR class.
	 * @param string $className active record class name.
	 * @return Directory the static model class
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
		return '{{directory}}';
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array(
			array('TENANT_ID, REC_DATETIME, REC_TIMESTAMP', 'required'),
			array('TENANT_ID, IS_PRODUCT_BASED, IS_DEFAULT', 'numerical', 'integerOnly'=>true),
			array('NAME', 'length', 'max'=>255),
			array('DIRECTORY_DESC', 'length', 'max'=>2048),
			// The following rule is used by search().
			// Please remove those attributes that should not be searched.
			array('REC_ID, TENANT_ID, REC_DATETIME, REC_TIMESTAMP, NAME, IS_PRODUCT_BASED, DIRECTORY_DESC, IS_DEFAULT', 'safe', 'on'=>'search'),
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
			'brandDirectories' => array(self::HAS_MANY, 'BrandDirectory', 'DIRECTORY_REC_ID'),
			'directoryPeriods' => array(self::HAS_MANY, 'DirectoryPeriod', 'DIRECTORY_REC_ID'),
			'domainDirectories' => array(self::HAS_MANY, 'DomainDirectory', 'DIRECTORY_ID'),
			'listings' => array(self::HAS_MANY, 'Listing', 'DIRECTORY_ID'),
			'shadowSupplierCategoryProducts' => array(self::HAS_MANY, 'ShadowSupplierCategoryProduct', 'DIRECTORY_REC_ID'),
			'supplierCategoryProducts' => array(self::HAS_MANY, 'SupplierCategoryProduct', 'DIRECTORY_REC_ID'),
		);
	}

	/**
	 * @return array customized attribute labels (name=>label)
	 */
	public function attributeLabels()
	{
		return array(
			'REC_ID' => 'Rec',
			'TENANT_ID' => 'Tenant',
			'REC_DATETIME' => 'Rec Datetime',
			'REC_TIMESTAMP' => 'Rec Timestamp',
			'NAME' => 'Name',
			'IS_PRODUCT_BASED' => 'Is Product Based',
			'DIRECTORY_DESC' => 'Directory Desc',
			'IS_DEFAULT' => 'Is Default',
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
		$criteria->compare('TENANT_ID',$this->TENANT_ID);
		$criteria->compare('REC_DATETIME',$this->REC_DATETIME,true);
		$criteria->compare('REC_TIMESTAMP',$this->REC_TIMESTAMP,true);
		$criteria->compare('NAME',$this->NAME,true);
		$criteria->compare('IS_PRODUCT_BASED',$this->IS_PRODUCT_BASED);
		$criteria->compare('DIRECTORY_DESC',$this->DIRECTORY_DESC,true);
		$criteria->compare('IS_DEFAULT',$this->IS_DEFAULT);

		return new CActiveDataProvider($this, array(
			'criteria'=>$criteria,
		));
	}
}