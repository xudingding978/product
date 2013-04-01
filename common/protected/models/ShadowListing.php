<?php

/**
 * This is the model class for table "{{shadow_listing}}".
 *
 * The followings are the available columns in table '{{shadow_listing}}':
 * @property integer $REC_ID
 * @property string $REC_DATETIME
 * @property string $REC_TIMESTAMP
 * @property integer $CLIENT_REC_ID
 * @property string $STATE
 * @property integer $LISTING_TYPE_REC_ID
 * @property integer $ITEM_ID
 * @property string $DESCRIPTION
 * @property string $IMAGE_URL
 * @property string $PROOF_NAME
 * @property string $PROOF_POSITION
 * @property double $LISTING_COST_EXCL_GST
 * @property double $LISTING_COST_INCL_GST
 * @property double $TRANSACTION_TOTAL_EXCL_GST
 * @property double $TRANSACTION_TOTAL_INCL_GST
 * @property double $TOTAL_PAID_TO_DATE
 *
 * The followings are the available model relations:
 * @property ShadowAdditionalOfferingTransactionDetail[] $shadowAdditionalOfferingTransactionDetails
 * @property ShadowDirectoryPeriodAdditionalOffering[] $shadowDirectoryPeriodAdditionalOfferings
 * @property ShadowDirectoryPeriodOffering[] $shadowDirectoryPeriodOfferings
 * @property Client $cLIENTREC
 * @property ListingType $lISTINGTYPEREC
 * @property ShadowPaymentHistory[] $shadowPaymentHistories
 * @property ShadowSupplierShadowRoot[] $shadowSupplierShadowRoots
 * @property SupplierShadowRoot[] $supplierShadowRoots
 */
class ShadowListing extends CActiveRecord {

    /**
     * Returns the static model of the specified AR class.
     * @param string $className active record class name.
     * @return ShadowListing the static model class
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
        return 'tpl_shadow_listing';
    }

    /**
     * @return array validation rules for model attributes.
     */
    public function rules() {
        // NOTE: you should only define rules for those attributes that
        // will receive user inputs.
        return array(
            array('REC_DATETIME, REC_TIMESTAMP, CLIENT_REC_ID, LISTING_TYPE_REC_ID, LISTING_COST_EXCL_GST, LISTING_COST_INCL_GST, TRANSACTION_TOTAL_EXCL_GST, TRANSACTION_TOTAL_INCL_GST, TOTAL_PAID_TO_DATE', 'required'),
            array('CLIENT_REC_ID, LISTING_TYPE_REC_ID, ITEM_ID', 'numerical', 'integerOnly' => true),
            array('LISTING_COST_EXCL_GST, LISTING_COST_INCL_GST, TRANSACTION_TOTAL_EXCL_GST, TRANSACTION_TOTAL_INCL_GST, TOTAL_PAID_TO_DATE', 'numerical'),
            array('STATE', 'length', 'max' => 12),
            array('DESCRIPTION, IMAGE_URL, PROOF_NAME, PROOF_POSITION', 'length', 'max' => 255),
            // The following rule is used by search().
            // Please remove those attributes that should not be searched.
            array('REC_ID, REC_DATETIME, REC_TIMESTAMP, CLIENT_REC_ID, STATE, LISTING_TYPE_REC_ID, ITEM_ID, DESCRIPTION, IMAGE_URL, PROOF_NAME, PROOF_POSITION, LISTING_COST_EXCL_GST, LISTING_COST_INCL_GST, TRANSACTION_TOTAL_EXCL_GST, TRANSACTION_TOTAL_INCL_GST, TOTAL_PAID_TO_DATE', 'safe', 'on' => 'search'),
        );
    }

    /**
     * @return array relational rules.
     */
    public function relations() {
        // NOTE: you may need to adjust the relation name and the related
        // class name for the relations automatically generated below.
        return array(
            'shadowAdditionalOfferingTransactionDetails' => array(self::HAS_MANY, 'ShadowAdditionalOfferingTransactionDetail', 'SHADOW_REC_ID'),
            'shadowDirectoryPeriodAdditionalOfferings' => array(self::HAS_MANY, 'ShadowDirectoryPeriodAdditionalOffering', 'SHADOW_ROOT_REC_ID'),
            'shadowDirectoryPeriodOfferings' => array(self::HAS_MANY, 'ShadowDirectoryPeriodOffering', 'SHADOW_ROOT_REC_ID'),
            'cLIENTREC' => array(self::BELONGS_TO, 'Client', 'CLIENT_REC_ID'),
            'lISTINGTYPEREC' => array(self::BELONGS_TO, 'ListingType', 'LISTING_TYPE_REC_ID'),
            'shadowPaymentHistories' => array(self::HAS_MANY, 'ShadowPaymentHistory', 'SHADOW_REC_ID'),
            'shadowSupplierShadowRoots' => array(self::HAS_MANY, 'ShadowSupplierShadowRoot', 'SHADOW_ROOT_REC_ID'),
            'supplierShadowRoots' => array(self::HAS_MANY, 'SupplierShadowRoot', 'SHADOW_ROOT_REC_ID'),
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
            'CLIENT_REC_ID' => 'Client Rec',
            'STATE' => 'State',
            'LISTING_TYPE_REC_ID' => 'Listing Type Rec',
            'ITEM_ID' => 'Item',
            'DESCRIPTION' => 'Description',
            'IMAGE_URL' => 'Image Url',
            'PROOF_NAME' => 'Proof Name',
            'PROOF_POSITION' => 'Proof Position',
            'LISTING_COST_EXCL_GST' => 'Listing Cost Excl Gst',
            'LISTING_COST_INCL_GST' => 'Listing Cost Incl Gst',
            'TRANSACTION_TOTAL_EXCL_GST' => 'Transaction Total Excl Gst',
            'TRANSACTION_TOTAL_INCL_GST' => 'Transaction Total Incl Gst',
            'TOTAL_PAID_TO_DATE' => 'Total Paid To Date',
        );
    }

    /**
     * Retrieves a list of models based on the current search/filter conditions.
     * @return CActiveDataProvider the data provider that can return the models based on the search/filter conditions.
     */
    public function search($id) {
        // Warning: Please modify the following code to remove attributes that
        // should not be searched.

        $criteria = new CDbCriteria;

        $criteria->compare('REC_ID', $this->REC_ID);
        $criteria->compare('REC_DATETIME', $this->REC_DATETIME, true);
        $criteria->compare('REC_TIMESTAMP', $this->REC_TIMESTAMP, true);
      //  $criteria->compare('CLIENT_REC_ID', $this->CLIENT_REC_ID);
        $criteria->compare('STATE', $this->STATE, true);
        $criteria->compare('LISTING_TYPE_REC_ID', $this->LISTING_TYPE_REC_ID);
        $criteria->compare('ITEM_ID', $this->ITEM_ID);
        $criteria->compare('DESCRIPTION', $this->DESCRIPTION, true);
        $criteria->compare('IMAGE_URL', $this->IMAGE_URL, true);
        $criteria->compare('PROOF_NAME', $this->PROOF_NAME, true);
        $criteria->compare('PROOF_POSITION', $this->PROOF_POSITION, true);
        $criteria->compare('LISTING_COST_EXCL_GST', $this->LISTING_COST_EXCL_GST);
        $criteria->compare('LISTING_COST_INCL_GST', $this->LISTING_COST_INCL_GST);
        $criteria->compare('TRANSACTION_TOTAL_EXCL_GST', $this->TRANSACTION_TOTAL_EXCL_GST);
        $criteria->compare('TRANSACTION_TOTAL_INCL_GST', $this->TRANSACTION_TOTAL_INCL_GST);
        $criteria->compare('TOTAL_PAID_TO_DATE', $this->TOTAL_PAID_TO_DATE);
        $criteria->compare('CLIENT_REC_ID', $id);
        return new CActiveDataProvider($this, array(
            'criteria' => $criteria,
        ));
    }

}
