<?php

/**
 * This is the model class for table "CategorySearchNames".
 *
 * The followings are the available columns in table 'CategorySearchNames':
 * @property integer $id
 * @property integer $categoryId
 * @property string $name
 *
 * The followings are the available model relations:
 * @property Categories $category
 */
class CategorySearchNames extends CActiveRecord
{
	/**
	 * Returns the static model of the specified AR class.
	 * @param string $className active record class name.
	 * @return CategorySearchNames the static model class
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
		return 'CategorySearchNames';
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array(
			array('categoryId, name', 'required'),
			array('categoryId', 'numerical', 'integerOnly'=>true),
			array('name', 'length', 'max'=>256),
			// The following rule is used by search().
			// Please remove those attributes that should not be searched.
			array('id, categoryId, name', 'safe', 'on'=>'search'),
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
			'category' => array(self::BELONGS_TO, 'Categories', 'categoryId'),
		);
	}

	/**
	 * @return array customized attribute labels (name=>label)
	 */
	public function attributeLabels()
	{
		return array(
			'id' => 'ID',
			'categoryId' => 'Category',
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
		$criteria->compare('categoryId',$this->categoryId);
		$criteria->compare('name',$this->name,true);

		return new CActiveDataProvider($this, array(
			'criteria'=>$criteria,
		));
	}
        
        public function findCategoryNamebyCategoryId($categoryId){
                   $data_list = array();
                   
                    $sql = "select dbo.CategorySearchNames.*
                         from
                        dbo.CategorySearchNames
                        where 
                        dbo.CategorySearchNames.categoryId= ".$categoryId;
                    try {
                        $data_list = Yii::app() ->db->createCommand($sql)->queryAll(); 
                        echo "found ".sizeof($data_list)."row of creditlist";
                        if(sizeof($data_list)>0){
                            foreach($data_list as $list){
                                $category_str .= $list['name'] .", ";
                               
                            }
                             $category_str= substr($category_str, 0,  -2);
                           echo $category_str; 
                        } 

                            }

                            
                            
                            
                        
                     catch (Exception $e) {
                        error_log("Cannot get creditlist infor: ".$e->getMessage());
                    }
                    
                    return $category_str;
            
        }
        
        public function findCategoryNamebySubCategoryId($subCategoryId){
                   $data_list = array();
                   
                    $sql = "select dbo.CategorySearchNames.* from dbo.CategorySearchNames, dbo.SubCategories
                    where dbo.CategorySearchNames.categoryId = dbo.SubCategories.categoryId
                    and 
                    dbo.SubCategories.id= ".$subCategoryId;
                    try {
                        $data_list = Yii::app() ->db->createCommand($sql)->queryAll(); 
                        echo "found ".sizeof($data_list)."row of creditlist";
                        if(sizeof($data_list)>0){
                            foreach($data_list as $list){
                                $category_str .= $list['name'] .", ";
                               
                            }
                             $category_str= substr($category_str, 0,  -2);
                           echo $category_str; 
                        } 

                            }

                            
                            
                            
                        
                     catch (Exception $e) {
                        error_log("Cannot get creditlist infor: ".$e->getMessage());
                    }
                    
                    return $category_str;
            
        }
        
        
}