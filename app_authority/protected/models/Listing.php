<?php

/**
 * This is the model class for table "tpl_listing".
 *
 * The followings are the available columns in table 'tpl_listing':
 * @property integer $REC_ID
 * @property string $REC_DATETIME
 * @property string $REC_TIMESTAMP
 * @property integer $LISTING_TYPE_REC_ID
 * @property integer $ITEM_ID
 * @property string $IMAGE_URL
 * @property string $DESCRIPTION
 */
class Listing extends CActiveRecord
{
	/**
	 * Returns the static model of the specified AR class.
	 * @param string $className active record class name.
	 * @return Tpl the static model class
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
		return 'tpl_listing';
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array(
			array('LISTING_TYPE_REC_ID, ITEM_ID', 'numerical', 'integerOnly'=>true),
			array('IMAGE_URL, DESCRIPTION', 'length', 'max'=>255),
			array('REC_DATETIME, REC_TIMESTAMP', 'safe'),
			// The following rule is used by search().
			// Please remove those attributes that should not be searched.
			array('REC_ID, REC_DATETIME, REC_TIMESTAMP, LISTING_TYPE_REC_ID, ITEM_ID, IMAGE_URL, DESCRIPTION', 'safe', 'on'=>'search'),
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
			'REC_ID' => 'Rec',
			'REC_DATETIME' => 'Rec Datetime',
			'REC_TIMESTAMP' => 'Rec Timestamp',
			'LISTING_TYPE_REC_ID' => 'Listing Type Rec',
			'ITEM_ID' => 'Item',
			'IMAGE_URL' => 'Image Url',
			'DESCRIPTION' => 'Description',
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
		$criteria->compare('REC_DATETIME',$this->REC_DATETIME,true);
		$criteria->compare('REC_TIMESTAMP',$this->REC_TIMESTAMP,true);
		$criteria->compare('LISTING_TYPE_REC_ID',$this->LISTING_TYPE_REC_ID);
		$criteria->compare('ITEM_ID',$this->ITEM_ID);
		$criteria->compare('IMAGE_URL',$this->IMAGE_URL,true);
		$criteria->compare('DESCRIPTION',$this->DESCRIPTION,true);

		return new CActiveDataProvider($this, array(
			'criteria'=>$criteria,
		));
	}
        
       /**
        * 
        * @param type $domain: a string as a domain name from database. 
        * @return type array of listing
        */

        
            public function getListingByDomain($domain) 
            {
                   $rows = Yii::app()->db->createCommand('SELECT * FROM tpl_listing l 
                    INNER JOIN tpl_domain_directory dd 
                    ON l.DIRECTORY_ID = dd.DIRECTORY_ID 
                    INNER JOIN tpl_domains d 
                    ON dd.DOMAIN_ID = d.REC_ID 
                    WHERE d.DOMAIN_NAME =:domain')->bindValue('domain', $domain)->queryAll();  
                   
                     return  $rows;  
            }
}