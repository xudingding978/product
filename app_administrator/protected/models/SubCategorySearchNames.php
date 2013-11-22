<?php

/**
 * This is the model class for table "SubCategorySearchNames".
 *
 * The followings are the available columns in table 'SubCategorySearchNames':
 * @property integer $id
 * @property integer $subCategoryId
 * @property string $name
 *
 * The followings are the available model relations:
 * @property SubCategories $subCategory
 */
class SubCategorySearchNames extends CActiveRecord
{
	/**
	 * Returns the static model of the specified AR class.
	 * @param string $className active record class name.
	 * @return SubCategorySearchNames the static model class
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
		return 'SubCategorySearchNames';
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array(
			array('subCategoryId, name', 'required'),
			array('subCategoryId', 'numerical', 'integerOnly'=>true),
			array('name', 'length', 'max'=>256),
			// The following rule is used by search().
			// Please remove those attributes that should not be searched.
			array('id, subCategoryId, name', 'safe', 'on'=>'search'),
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
			'subCategory' => array(self::BELONGS_TO, 'SubCategories', 'subCategoryId'),
		);
	}

	/**
	 * @return array customized attribute labels (name=>label)
	 */
	public function attributeLabels()
	{
		return array(
			'id' => 'ID',
			'subCategoryId' => 'Sub Category',
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
		$criteria->compare('subCategoryId',$this->subCategoryId);
		$criteria->compare('name',$this->name,true);

		return new CActiveDataProvider($this, array(
			'criteria'=>$criteria,
		));
	}
        
                public function selectSubCategory($id) {
                    $data_list = array();
                    $topic_list = array();
                    $sql = "select 
                                     DISTINCT SCSN.*
                                from 
                                    dbo.ArticleImages as AI,
                                    dbo.ArticleSubCategoryMaps as ASCM,
                                    dbo.SubCategorySearchNames as SCSN
                                where
                                    SCSN.subCategoryId = ASCM.subCategoryId
                                AND
                                    AI.articleId = ASCM.articleId
                                AND
                                    AI.id = ".$id;
                    try {
                        $data_list = Yii::app() ->db->createCommand($sql)->queryAll(); 
                        
//                        print_r("<pre>");
//                        print_r($data_list);
                        $category_list=array();
                        if(sizeof($data_list)>0) {
                            foreach($data_list as $val) {
                                array_push($category_list, $val['name']);                       
                            }
                        }
                    } catch (Exception $e) {
                        error_log("Cannot get category infor: ".$e->getMessage());
                    }
                    
                    return $category_list;
                }
                
                public function selectSubCategoryByArticalID($id) {
                    $data_list = array();
                    $topic_list = array();
                    $sql = "select 
                                  dbo.ArticleSubCategoryMaps.*
                                from 
                                   dbo.Articles,
                                   dbo.ArticleSubCategoryMaps,
                                   dbo.SubCategorySearchNames 
                                where
                                   SubCategorySearchNames.subCategoryId = ArticleSubCategoryMaps.subCategoryId
                                AND
                                   dbo.Articles.id = ArticleSubCategoryMaps.articleId
                                AND
                                   dbo.Articles.id = ".$id;
                    try {
                        $data_list = Yii::app() ->db->createCommand($sql)->queryAll(); 
                        
//                        print_r("<pre>");
//                        print_r($data_list);
                        
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
                
                public function findSubCategorybyId($subCategoryId){
                     $data_list = array();
                   
                    $sql = "select dbo.SubCategorySearchNames.*
                           from
                           dbo.SubCategorySearchNames
                           where 
                           dbo.SubCategorySearchNames.subCategoryId= ".$subCategoryId;
                    try {
                        $data_list = Yii::app() ->db->createCommand($sql)->queryAll(); 
                        if(sizeof($data_list)>0){
                            foreach($data_list as $list){
                                $SubCategory_str .= $list['name'] .", ";
                               
                            }
                             $SubCategory_str= substr($SubCategory_str, 0,  -2);

                        } 

                            }

                            
                            
                            
                        
                     catch (Exception $e) {
                        error_log("Cannot get SubCategory infor: ".$e->getMessage());
                    }
                    
                    return $SubCategory_str;
            
                }
                
                      public function getArticleSubCategorybyId($article_id){
        
        $data_arr = array();
        $sql = 'select DISTINCT dbo.SubCategorySearchNames.* from 
dbo.ArticleSubCategoryMaps,
dbo.SubCategorySearchNames 
                    where 
dbo.SubCategorySearchNames.subCategoryId=dbo.ArticleSubCategoryMaps.subCategoryId
and
dbo.ArticleSubCategoryMaps.articleId= '. $article_id;
        $data_arr = Yii::app()->db->createCommand($sql)->queryAll();
        
        return $data_arr;
        
        
    }
        
}