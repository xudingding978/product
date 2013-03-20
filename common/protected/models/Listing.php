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
 *
 * The followings are the available model relations:
 * @property ListingType $lISTINGTYPEREC
 */
class Listing extends CActiveRecord {

    public $listingType;

    /**
     * Returns the static model of the specified AR class.
     * @param string $className active record class name.
     * @return Listing the static model class
     */
    public static function model($className = __CLASS__) {
        return parent::model($className);
    }

    /**
     * @return CDbConnection database connection
     */
    public function getDbConnection() {
        return Yii::app()->db_live;
    }

    /**
     * @return string the associated database table name
     */
    public function tableName() {
        return 'tpl_listing';
    }

    /**
     * @return array validation rules for model attributes.
     */
    public function rules() {
        // NOTE: you should only define rules for those attributes that
        // will receive user inputs.
        return array(
            array('REC_ID', 'required'),
            array('REC_ID, LISTING_TYPE_REC_ID, ITEM_ID', 'numerical', 'integerOnly' => true),
            array('REC_DATETIME, REC_TIMESTAMP', 'safe'),
            // The following rule is used by search().
            // Please remove those attributes that should not be searched.
            array('REC_ID, REC_DATETIME, REC_TIMESTAMP, LISTING_TYPE_REC_ID, ITEM_ID', 'safe', 'on' => 'search'),
        );
    }

    /**
     * @return array relational rules.
     */
    public function relations() {
        // NOTE: you may need to adjust the relation name and the related
        // class name for the relations automatically generated below.
        return array(
            'lISTINGTYPEREC' => array(self::BELONGS_TO, 'ListingType', 'LISTING_TYPE_REC_ID'),
        );
    }

    /**
     * @return array customized attribute labels (name=>label)
     */
    public function attributeLabels() {
        return array(
            'REC_ID' => 'Rec',
            'REC_DATETIME' => 'Rec Datetime',
            'REC_TIMESTAMP' => 'Rec Timestamp',
            'LISTING_TYPE_REC_ID' => 'Listing Type Rec',
            'ITEM_ID' => 'Item',
        );
    }

    /**
     * Retrieves a list of models based on the current search/filter conditions.
     * @return CActiveDataProvider the data provider that can return the models based on the search/filter conditions.
     */
    public function search() {
        // Warning: Please modify the following code to remove attributes that
        // should not be searched.

        $criteria = new CDbCriteria;
        $criteria->compare('REC_ID', $this->REC_ID);
        $criteria->compare('REC_DATETIME', $this->REC_DATETIME, true);
        $criteria->compare('REC_TIMESTAMP', $this->REC_TIMESTAMP, true);
        $criteria->compare('LISTING_TYPE_REC_ID', $this->LISTING_TYPE_REC_ID);
        $criteria->compare('ITEM_ID', $this->ITEM_ID);
        return new CActiveDataProvider($this, array(
            'criteria' => $criteria,
        ));
    }

}