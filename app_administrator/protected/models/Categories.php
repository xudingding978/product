<?php

/**
 * This is the model class for table "Categories".
 *
 * The followings are the available columns in table 'Categories':
 * @property integer $id
 * @property integer $categoryTypeId
 * @property boolean $isVisible
 * @property integer $ordering
 *
 * The followings are the available model relations:
 * @property DisabledEditorialDeliveries[] $disabledEditorialDeliveries
 * @property CategoryTypes $categoryType
 * @property ArticleCredits[] $articleCredits
 * @property ArticleSubscriptions[] $articleSubscriptions
 * @property CategorySearchNames[] $categorySearchNames
 * @property RegionCategories[] $regionCategories
 * @property SubCategories[] $subCategories
 * @property FeaturedContent[] $featuredContents
 * @property LinkCategoryMaps[] $linkCategoryMaps
 * @property GroupRules[] $groupRules
 * @property PromotionCategoryMaps[] $promotionCategoryMaps
 * @property BannerCategories[] $bannerCategories
 */
class Categories extends CActiveRecord
{
	/**
	 * Returns the static model of the specified AR class.
	 * @param string $className active record class name.
	 * @return Categories the static model class
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
		return 'Categories';
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array(
			array('categoryTypeId', 'required'),
			array('categoryTypeId, ordering', 'numerical', 'integerOnly'=>true),
			array('isVisible', 'safe'),
			// The following rule is used by search().
			// Please remove those attributes that should not be searched.
			array('id, categoryTypeId, isVisible, ordering', 'safe', 'on'=>'search'),
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
			'disabledEditorialDeliveries' => array(self::HAS_MANY, 'DisabledEditorialDeliveries', 'categoryId'),
			'categoryType' => array(self::BELONGS_TO, 'CategoryTypes', 'categoryTypeId'),
			'articleCredits' => array(self::HAS_MANY, 'ArticleCredits', 'categoryId'),
			'articleSubscriptions' => array(self::HAS_MANY, 'ArticleSubscriptions', 'categoryId'),
			'categorySearchNames' => array(self::HAS_MANY, 'CategorySearchNames', 'categoryId'),
			'regionCategories' => array(self::HAS_MANY, 'RegionCategories', 'categoryId'),
			'subCategories' => array(self::HAS_MANY, 'SubCategories', 'categoryId'),
			'featuredContents' => array(self::HAS_MANY, 'FeaturedContent', 'categoryId'),
			'linkCategoryMaps' => array(self::HAS_MANY, 'LinkCategoryMaps', 'categoryId'),
			'groupRules' => array(self::HAS_MANY, 'GroupRules', 'targetCategoryId'),
			'promotionCategoryMaps' => array(self::HAS_MANY, 'PromotionCategoryMaps', 'categoryId'),
			'bannerCategories' => array(self::HAS_MANY, 'BannerCategories', 'categoryId'),
		);
	}

	/**
	 * @return array customized attribute labels (name=>label)
	 */
	public function attributeLabels()
	{
		return array(
			'id' => 'ID',
			'categoryTypeId' => 'Category Type',
			'isVisible' => 'Is Visible',
			'ordering' => 'Ordering',
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
		$criteria->compare('categoryTypeId',$this->categoryTypeId);
		$criteria->compare('isVisible',$this->isVisible);
		$criteria->compare('ordering',$this->ordering);

		return new CActiveDataProvider($this, array(
			'criteria'=>$criteria,
		));
	}
        
                public function selectCategory($id) {
                    $data_list = array();
                    $topic_list = array();
                    $sql = "select DISTINCT 
                                    dbo.CategorySearchNames.*
                                from 
                                    dbo.ArticleImages,
                                    dbo.ArticleSubCategoryMaps,
                                    dbo.CategorySearchNames,
                                    dbo.SubCategories 
                                where
                                    dbo.CategorySearchNames.categoryId = dbo.SubCategories.categoryId
                                AND
                                    dbo.ArticleSubCategoryMaps.subCategoryId=dbo.SubCategories.id
                                AND
                                    dbo.ArticleImages.articleId = dbo.ArticleSubCategoryMaps.articleId
                                AND
                                    dbo.ArticleImages.id = ".$id;
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
                        error_log("Cannot get topic infor: ".$e->getMessage());
                    }
                    
                    return $category_list;
                }
                
                
                public function selectCategoryByArticalID($id) {
                    $data_list = array();
                    $topic_list = array();
                    $sql = "select 
                                    CSN.*
                                from 
                                    dbo.Articles as Ar,
                                    dbo.ArticleSubCategoryMaps as ASCM,
                                    dbo.CategorySearchNames as CSN,
                                    dbo.SubCategories as SC
                                where
                                    CSN.categoryId = SC.categoryId
                                AND
                                    ASCM.subCategoryId=SC.id
                                AND
                                    Ar.id = ASCM.articleId
                                AND
                                    Ar.id = ".$id;
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
}