<?php

/**
 * This is the model class for table "SubCategories".
 *
 * The followings are the available columns in table 'SubCategories':
 * @property integer $id
 * @property integer $categoryId
 * @property boolean $isVisible
 * @property integer $ordering
 *
 * The followings are the available model relations:
 * @property ArticleCredits[] $articleCredits
 * @property Categories $category
 * @property ArticleSubCategoryMaps[] $articleSubCategoryMaps
 * @property FeaturedContent[] $featuredContents
 * @property TopicSubCategoryMaps[] $topicSubCategoryMaps
 * @property LinkSubCategoryMaps[] $linkSubCategoryMaps
 * @property MigrationTopCategoryCategoryMaps[] $migrationTopCategoryCategoryMaps
 * @property RegionSubCategories[] $regionSubCategories
 * @property SubCategorySearchNames[] $subCategorySearchNames
 * @property VideoSubCategoryMaps[] $videoSubCategoryMaps
 * @property PromotionSubCategoryMaps[] $promotionSubCategoryMaps
 */
class SubCategories extends CActiveRecord
{
	/**
	 * Returns the static model of the specified AR class.
	 * @param string $className active record class name.
	 * @return SubCategories the static model class
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
		return 'SubCategories';
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array(
			array('categoryId, ordering', 'numerical', 'integerOnly'=>true),
			array('isVisible', 'safe'),
			// The following rule is used by search().
			// Please remove those attributes that should not be searched.
			array('id, categoryId, isVisible, ordering', 'safe', 'on'=>'search'),
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
			'articleCredits' => array(self::HAS_MANY, 'ArticleCredits', 'subCategoryId'),
			'category' => array(self::BELONGS_TO, 'Categories', 'categoryId'),
			'articleSubCategoryMaps' => array(self::HAS_MANY, 'ArticleSubCategoryMaps', 'subCategoryId'),
			'featuredContents' => array(self::HAS_MANY, 'FeaturedContent', 'subCategoryId'),
			'topicSubCategoryMaps' => array(self::HAS_MANY, 'TopicSubCategoryMaps', 'subCategoryId'),
			'linkSubCategoryMaps' => array(self::HAS_MANY, 'LinkSubCategoryMaps', 'subCategoryId'),
			'migrationTopCategoryCategoryMaps' => array(self::HAS_MANY, 'MigrationTopCategoryCategoryMaps', 'newSubCategoryId'),
			'regionSubCategories' => array(self::HAS_MANY, 'RegionSubCategories', 'subcategoryId'),
			'subCategorySearchNames' => array(self::HAS_MANY, 'SubCategorySearchNames', 'subCategoryId'),
			'videoSubCategoryMaps' => array(self::HAS_MANY, 'VideoSubCategoryMaps', 'subCategoryId'),
			'promotionSubCategoryMaps' => array(self::HAS_MANY, 'PromotionSubCategoryMaps', 'subCategoryId'),
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
		$criteria->compare('categoryId',$this->categoryId);
		$criteria->compare('isVisible',$this->isVisible);
		$criteria->compare('ordering',$this->ordering);

		return new CActiveDataProvider($this, array(
			'criteria'=>$criteria,
		));
	}
}