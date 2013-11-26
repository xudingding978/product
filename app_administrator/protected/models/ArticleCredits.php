<?php

/**
 * This is the model class for table "ArticleCredits".
 *
 * The followings are the available columns in table 'ArticleCredits':
 * @property integer $id
 * @property integer $articleId
 * @property integer $sequence
 * @property integer $categoryId
 * @property integer $subCategoryId
 * @property string $categoryText
 * @property string $clientText
 */
class ArticleCredits extends CActiveRecord
{
	/**
	 * Returns the static model of the specified AR class.
	 * @param string $className active record class name.
	 * @return ArticleCredits the static model class
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
		return 'ArticleCredits';
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array(
			array('articleId, sequence, categoryText, clientText', 'required'),
			array('articleId, sequence, categoryId, subCategoryId', 'numerical', 'integerOnly'=>true),
			array('categoryText', 'length', 'max'=>256),
			array('clientText', 'length', 'max'=>1073741823),
			// The following rule is used by search().
			// Please remove those attributes that should not be searched.
			array('id, articleId, sequence, categoryId, subCategoryId, categoryText, clientText', 'safe', 'on'=>'search'),
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
			'articleId' => 'Article',
			'sequence' => 'Sequence',
			'categoryId' => 'Category',
			'subCategoryId' => 'Sub Category',
			'categoryText' => 'Category Text',
			'clientText' => 'Client Text',
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
		$criteria->compare('articleId',$this->articleId);
		$criteria->compare('sequence',$this->sequence);
		$criteria->compare('categoryId',$this->categoryId);
		$criteria->compare('subCategoryId',$this->subCategoryId);
		$criteria->compare('categoryText',$this->categoryText,true);
		$criteria->compare('clientText',$this->clientText,true);

		return new CActiveDataProvider($this, array(
			'criteria'=>$criteria,
		));
	}
        
        
        /*
         * Example of out put credit list data:
         * 
         * Array(
    [0] => Array
        (
            [id] => 62755
            [articleId] => 7684
            [sequence] => 0
            [categoryId] => 
            [subCategoryId] => 739
            [categoryText] => Architect
            [clientText] => Robert Andary, RAIA, Robert Andary Architecture (Perth)
        )

    [1] => Array
        (
            [id] => 62756
            [articleId] => 7684
            [sequence] => 1
            [categoryId] => 
            [subCategoryId] => 735
            [categoryText] => Interior designers
            [clientText] => Robert Andary, Julie-Anne Smith
        )
)
         */
        public function getCreditListbyId($id){
             $data_list = array();
                    $creditList_arr = array();
                    $sql = "select dbo.ArticleCredits.*
                                from 
                                    dbo.ArticleCredits 
                                where
                                    
                                    dbo.ArticleCredits.articleId = ".$id;
                    try {
                        $data_list = Yii::app() ->db->createCommand($sql)->queryAll(); 
                  //      echo "found ".sizeof($data_list)."row of creditlist";
                 //        print_r($data_list);

                            }

                            
                            
                            
                        
                     catch (Exception $e) {
                        error_log("Cannot get creditlist infor: ".$e->getMessage());
                    }
                    
                    return $data_list;
        }
        
        
        
}