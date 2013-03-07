<?php

/**
 * This is the model class for table "user".
 *
 * The followings are the available columns in table 'user':
 * @property string $id
 * @property string $USER_NAME
 * @property string $pwd_hash
 */
class User extends CActiveRecord {

    /**
     * Returns the static model of the specified AR class.
     * @param string $className active record class name.
     * @return User the static model class
     */
    public static function model($className = __CLASS__) {
        return parent::model($className);
    }

    /**
     * @return string the associated database table name
     */

    public function tableName() {
        return 'tpl_user';
    }

    /**
     * @return array validation rules for model attributes.
     */
    public function rules() {
        // NOTE: you should only define rules for those attributes that
        // will receive user inputs.
        return array(
            array('USER_NAME, pwd_hash', 'required'),
            array('USER_NAME', 'length', 'max' => 20),
            array('pwd_hash', 'length', 'max' => 34),
            // The following rule is used by search().
            // Please remove those attributes that should not be searched.
            array('id, USER_NAME, pwd_hash', 'safe', 'on' => 'search'),
        );
    }

    /**
     * @return array relational rules.
     */
    public function relations() {
        // NOTE: you may need to adjust the relation name and the related
        // class name for the relations automatically generated below.
        return array(
        );
    }

    /**
     * @return array customized attribute labels (name=>label)
     */
    public function attributeLabels() {
        return array(
            'id' => 'ID',
            'USER_NAME' => 'Username',
            'pwd_hash' => 'Pwd Hash',
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

        $criteria->compare('id', $this->id, true);
        $criteria->compare('USER_NAME', $this->USER_NAME, true);
        $criteria->compare('pwd_hash', $this->pwd_hash, true);

        return new CActiveDataProvider($this, array(
            'criteria' => $criteria,
        ));
    }

    public function check($value) {
        //   $new_hash = crypt($value, $this->pwd_hash);
        if ($value == $this->pwd_hash) {
            return true;
        }
        return false;
    }

}