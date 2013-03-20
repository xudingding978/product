<?php

/**
 * This is the model class for table "tpl_directory".
 *
 * The followings are the available columns in table 'tpl_directory':
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
 * @property TplBrandDirectory[] $tplBrandDirectories
 * @property TplDirectoryPeriod[] $tplDirectoryPeriods
 * @property TplDomainDirectory[] $tplDomainDirectories
 * @property TplListing[] $tplListings
 * @property TplShadowSupplierCategoryProduct[] $tplShadowSupplierCategoryProducts
 * @property TplSupplierCategoryProduct[] $tplSupplierCategoryProducts
 */
class TplDirectory extends CActiveRecord
{
	/**
	 * Returns the static model of the specified AR class.
	 * @param string $className active record class name.
	 * @return TplDirectory the static model class
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
		return 'tpl_directory';
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
			'tplBrandDirectories' => array(self::HAS_MANY, 'TplBrandDirectory', 'DIRECTORY_REC_ID'),
			'tplDirectoryPeriods' => array(self::HAS_MANY, 'TplDirectoryPeriod', 'DIRECTORY_REC_ID'),
			'tplDomainDirectories' => array(self::HAS_MANY, 'TplDomainDirectory', 'DIRECTORY_ID'),
			'tplListings' => array(self::HAS_MANY, 'TplListing', 'DIRECTORY_ID'),
			'tplShadowSupplierCategoryProducts' => array(self::HAS_MANY, 'TplShadowSupplierCategoryProduct', 'DIRECTORY_REC_ID'),
			'tplSupplierCategoryProducts' => array(self::HAS_MANY, 'TplSupplierCategoryProduct', 'DIRECTORY_REC_ID'),
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