<?php

/**
 * This is the model class for table "tenant".
 *
 * The followings are the available columns in table 'tenant':
 * @property integer $REC_ID
 * @property string $REC_DATETIME
 * @property string $REC_TIMESTAMP
 * @property string $NAME
 * @property string $DESCRIPTION
 * @property integer $LAST_INVOICE_ID
 * @property integer $LAST_ORDER_ID
 * @property integer $LAST_TRANSACTION_ID
 *
 * The followings are the available model relations:
 * @property User[] $Users
 */
class Tenant extends CActiveRecord {

    /**
     * Returns the static model of the specified AR class.
     * @param string $className active record class name.
     * @return Tenant the static model class
     */
    public static function model($className = __CLASS__) {
        return parent::model($className);
    }

    /**
     * @return string the associated database table name
     */
    public function tableName() {
        return 'tenant';
    }

    /**
     * @return array validation rules for model attributes.
     */
    public function rules() {
        // NOTE: you should only define rules for those attributes that
        // will receive user inputs.
        return array(
            array('LAST_INVOICE_ID, LAST_ORDER_ID, LAST_TRANSACTION_ID', 'numerical', 'integerOnly' => true),
            array('NAME', 'length', 'max' => 45),
            array('DESCRIPTION', 'length', 'max' => 200),
            array('REC_DATETIME, REC_TIMESTAMP', 'safe'),
            // The following rule is used by search().
            // Please remove those attributes that should not be searched.
            array('REC_ID, REC_DATETIME, REC_TIMESTAMP, NAME, DESCRIPTION, LAST_INVOICE_ID, LAST_ORDER_ID, LAST_TRANSACTION_ID', 'safe', 'on' => 'search'),
        );
    }

    /**
     * @return array relational rules.
     */
    public function relations() {
        // NOTE: you may need to adjust the relation name and the related
        // class name for the relations automatically generated below.
        return array(
            'users' => array(self::HAS_MANY, 'User', 'TENANT_REC_ID'),
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
            'NAME' => 'Name',
            'DESCRIPTION' => 'Description',
            'LAST_INVOICE_ID' => 'Last Invoice',
            'LAST_ORDER_ID' => 'Last Order',
            'LAST_TRANSACTION_ID' => 'Last Transaction',
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
        $criteria->compare('NAME', $this->NAME, true);
        $criteria->compare('DESCRIPTION', $this->DESCRIPTION, true);
        $criteria->compare('LAST_INVOICE_ID', $this->LAST_INVOICE_ID);
        $criteria->compare('LAST_ORDER_ID', $this->LAST_ORDER_ID);
        $criteria->compare('LAST_TRANSACTION_ID', $this->LAST_TRANSACTION_ID);

        return new CActiveDataProvider($this, array(
            'criteria' => $criteria,
        ));
    }

    protected function beforeSave() 
        {
            if (parent::beforeSave()) 
                {
                    if ($this->isNewRecord) 
                        {
                            $this->REC_DATETIME = date('Y-m-d H:i:s');
                            $this->REC_TIMESTAMP = date('Y-m-d H:i:s');
                            return true;
                    } 
                    else {
                        $this->REC_TIMESTAMP = date('Y-m-d H:i:s');
                        return true;
                }
                return false;
            }
        }

}