<?php

/**
 * This is the model class for table "ArticleSubCategoryMaps".
 *
 * The followings are the available columns in table 'ArticleSubCategoryMaps':
 * @property integer $id
 * @property integer $articleId
 * @property integer $subCategoryId
 *
 * The followings are the available model relations:
 * @property Articles $article
 * @property SubCategories $subCategory
 */
class ArticleSubCategoryMaps extends CActiveRecord {

    /**
     * Returns the static model of the specified AR class.
     * @param string $className active record class name.
     * @return ArticleSubCategoryMaps the static model class
     */
    public static function model($className = __CLASS__) {
        return parent::model($className);
    }

    /**
     * @return string the associated database table name
     */
    public function tableName() {
        return 'ArticleSubCategoryMaps';
    }

    /**
     * @return array validation rules for model attributes.
     */
    public function rules() {
        // NOTE: you should only define rules for those attributes that
        // will receive user inputs.
        return array(
            array('articleId, subCategoryId', 'required'),
            array('articleId, subCategoryId', 'numerical', 'integerOnly' => true),
            // The following rule is used by search().
            // Please remove those attributes that should not be searched.
            array('id, articleId, subCategoryId', 'safe', 'on' => 'search'),
        );
    }

    /**
     * @return array relational rules.
     */
    public function relations() {
        // NOTE: you may need to adjust the relation name and the related
        // class name for the relations automatically generated below.
        return array(
            'article' => array(self::BELONGS_TO, 'Articles', 'articleId'),
            'subCategory' => array(self::BELONGS_TO, 'SubCategories', 'subCategoryId'),
        );
    }

    /**
     * @return array customized attribute labels (name=>label)
     */
    public function attributeLabels() {
        return array(
            'id' => 'ID',
            'articleId' => 'Article',
            'subCategoryId' => 'Sub Category',
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

        $criteria->compare('id', $this->id);
        $criteria->compare('articleId', $this->articleId);
        $criteria->compare('subCategoryId', $this->subCategoryId);

        return new CActiveDataProvider($this, array(
            'criteria' => $criteria,
        ));
    }

    public function findArticleSubCategorybyId($id) {
        $data_list = array();
        $sql = " select dbo.SubCategorySearchNames.* from 
                      dbo.ArticleSubCategoryMaps,
                      dbo.SubCategorySearchNames 
                        where 
                      dbo.SubCategorySearchNames.subCategoryId=dbo.ArticleSubCategoryMaps.subCategoryId
                          and
                      dbo.ArticleSubCategoryMaps.articleId=" . $id;

//                        echo $sql;
        $data_list = Yii::app()->db->createCommand($sql)->queryAll();

//            print_r("<pre>");
//            echo sizeof($data_list);

        return $data_list;
    }

}