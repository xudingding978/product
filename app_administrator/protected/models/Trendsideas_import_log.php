<?php

/**
 * This is the model class for table "Trendsideas_import_log".
 *
 * The followings are the available columns in table 'Trendsideas_import_log':
 * @property integer $id
 * @property string $REC_DATETIME
 * @property string $REC_TIMESTAMP
 * @property integer $TENANT_ID
 * @property string $CouchBaseID
 * @property string $objectId
 * @property string $type
 * @property string $spark_job_id
 * @property string $helium_media_id
 * @property string $article_id
 * @property string $photo_image_hero_url
 * @property string $photo_image_original_url
 * @property string $photo_image_thumbnail_url
 * @property string $photo_image_preview_url
 * @property string $article_image_url
 */
class Trendsideas_import_log extends CActiveRecord
{
	/**
	 * Returns the static model of the specified AR class.
	 * @param string $className active record class name.
	 * @return Trendsideas_import_log the static model class
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
		return Yii::app()->db_hubsrv;
	}

	/**
	 * @return string the associated database table name
	 */
	public function tableName()
	{
		return 'Trendsideas_import_log';
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array(
			array('TENANT_ID', 'numerical', 'integerOnly'=>true),
			array('CouchBaseID', 'length', 'max'=>255),
			array('objectId', 'length', 'max'=>245),
			array('type, spark_job_id, helium_media_id, article_id', 'length', 'max'=>45),
			array('REC_DATETIME, REC_TIMESTAMP, photo_image_hero_url, photo_image_original_url, photo_image_thumbnail_url, photo_image_preview_url, article_image_url', 'safe'),
			// The following rule is used by search().
			// Please remove those attributes that should not be searched.
			array('id, REC_DATETIME, REC_TIMESTAMP, TENANT_ID, CouchBaseID, objectId, type, spark_job_id, helium_media_id, article_id, photo_image_hero_url, photo_image_original_url, photo_image_thumbnail_url, photo_image_preview_url, article_image_url', 'safe', 'on'=>'search'),
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
			'REC_DATETIME' => 'Rec Datetime',
			'REC_TIMESTAMP' => 'Rec Timestamp',
			'TENANT_ID' => 'Tenant',
			'CouchBaseID' => 'Couch Base',
			'objectId' => 'Object',
			'type' => 'Type',
			'spark_job_id' => 'Spark Job',
			'helium_media_id' => 'Helium Media',
			'article_id' => 'Article',
			'photo_image_hero_url' => 'Photo Image Hero Url',
			'photo_image_original_url' => 'Photo Image Original Url',
			'photo_image_thumbnail_url' => 'Photo Image Thumbnail Url',
			'photo_image_preview_url' => 'Photo Image Preview Url',
			'article_image_url' => 'Article Image Url',
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
		$criteria->compare('REC_DATETIME',$this->REC_DATETIME,true);
		$criteria->compare('REC_TIMESTAMP',$this->REC_TIMESTAMP,true);
		$criteria->compare('TENANT_ID',$this->TENANT_ID);
		$criteria->compare('CouchBaseID',$this->CouchBaseID,true);
		$criteria->compare('objectId',$this->objectId,true);
		$criteria->compare('type',$this->type,true);
		$criteria->compare('spark_job_id',$this->spark_job_id,true);
		$criteria->compare('helium_media_id',$this->helium_media_id,true);
		$criteria->compare('article_id',$this->article_id,true);
		$criteria->compare('photo_image_hero_url',$this->photo_image_hero_url,true);
		$criteria->compare('photo_image_original_url',$this->photo_image_original_url,true);
		$criteria->compare('photo_image_thumbnail_url',$this->photo_image_thumbnail_url,true);
		$criteria->compare('photo_image_preview_url',$this->photo_image_preview_url,true);
		$criteria->compare('article_image_url',$this->article_image_url,true);

		return new CActiveDataProvider($this, array(
			'criteria'=>$criteria,
		));
	}
        
        public function queryByHeiliummediaId($heiliumId){
                    $data_list = array();
               $sql = "SELECT  * FROM hubstar_import_logger.Trendsideas_import_log
    where hubstar_import_logger.Trendsideas_import_log.helium_media_id= "."'".$heiliumId."'"." 
    order by hubstar_import_logger.Trendsideas_import_log.REC_DATETIME ASC
    limit 1
    ";
               echo "\n",$sql."\n";
        
            $data_list = Yii::app() ->db_hubsrv->createCommand($sql)->queryAll();
            echo "\n",  var_export($data_list)."\n";
        return $data_list;
        }
}