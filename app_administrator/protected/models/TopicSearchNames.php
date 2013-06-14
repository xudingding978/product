<?php

/**
 * This is the model class for table "TopicSearchNames".
 *
 * The followings are the available columns in table 'TopicSearchNames':
 * @property integer $id
 * @property integer $topicId
 * @property string $name
 */
class TopicSearchNames extends CActiveRecord
{
	/**
	 * Returns the static model of the specified AR class.
	 * @param string $className active record class name.
	 * @return TopicSearchNames the static model class
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
		return 'TopicSearchNames';
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array(
			array('topicId, name', 'required'),
			array('topicId', 'numerical', 'integerOnly'=>true),
			array('name', 'length', 'max'=>256),
			// The following rule is used by search().
			// Please remove those attributes that should not be searched.
			array('id, topicId, name', 'safe', 'on'=>'search'),
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
			'topicId' => 'Topic',
			'name' => 'Name',
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
		$criteria->compare('topicId',$this->topicId);
		$criteria->compare('name',$this->name,true);

		return new CActiveDataProvider($this, array(
			'criteria'=>$criteria,
		));
	}
        
                public function selectTopicName($id) {
                    $data_list = array();
                    $topic_list = array();
                    $sql = "select dbo.TopicSearchNames.* from dbo.TopicSearchNames
                                inner join dbo.ArticleTopicMaps
                                on dbo.TopicSearchNames.topicId = dbo.ArticleTopicMaps.topicId 
                                inner join dbo.ArticleImages
                                on dbo.ArticleTopicMaps.articleId = dbo.ArticleImages.articleId
                                where dbo.ArticleImages.id = ".$id;
                    try {
                        $data_list = Yii::app() ->db->createCommand($sql)->queryAll(); 
                        if(sizeof($data_list)>0) {
                            foreach($data_list as $val) {
                                array_push($topic_list, $val['name']);                       
                            }
                        }
                    } catch (Exception $e) {
                        error_log("Cannot get topic infor: ".$e->getMessage());
                    }
                    
                    return $topic_list;
                }
        
}