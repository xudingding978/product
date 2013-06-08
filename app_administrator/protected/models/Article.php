<?php

/**
 * This is the model class for table "Articles".
 *
 * The followings are the available columns in table 'Articles':
 * @property integer $id
 * @property integer $sparkJobId
 * @property integer $heliumMediaId
 * @property integer $type
 * @property string $headline
 * @property string $subHeadline
 * @property string $body
 * @property string $creditText
 * @property string $photography
 * @property string $featureName
 * @property integer $channelId
 * @property integer $reports
 * @property integer $delivered
 * @property string $homepageUrl
 * @property string $contactDetails
 * @property string $projectName
 * @property integer $sequence
 * @property string $supplierName
 * @property string $serviceCategory
 * @property string $writer
 * @property boolean $pendingDelivery
 *
 * The followings are the available model relations:
 * @property CacheIdeasPortalPromotions[] $cacheIdeasPortalPromotions
 * @property SparkJobs $sparkJob
 * @property HeliumMedia $heliumMedia
 * @property Features $featureName0
 * @property Projects $projectName0
 * @property CacheArticleSearches[] $cacheArticleSearches
 * @property CacheArticleRegions[] $cacheArticleRegions
 * @property CacheProjectPagePromotions[] $cacheProjectPagePromotions
 * @property ArticleCredits[] $articleCredits
 * @property CacheArticleTopicRegions[] $cacheArticleTopicRegions
 * @property ArticleImages[] $articleImages
 * @property ArticleEmails[] $articleEmails
 * @property ArticleLinkMaps[] $articleLinkMaps
 * @property ArticleSubCategoryMaps[] $articleSubCategoryMaps
 * @property ArticleTopicMaps[] $articleTopicMaps
 * @property DeliveredArticles[] $deliveredArticles
 * @property IdeasPortalArticleMaps[] $ideasPortalArticleMaps
 * @property SuperGalleryMaps[] $superGalleryMaps
 * @property DeliveryTimeframes[] $deliveryTimeframes
 */
class Article extends CActiveRecord {

    /**
     * Returns the static model of the specified AR class.
     * @param string $className active record class name.
     * @return Article the static model class
     */
    public static function model($className = __CLASS__) {
        return parent::model($className);
    }

    /**
     * @return string the associated database table name
     */
    public function tableName() {
        return 'Articles';
    }

    /**
     * @return array validation rules for model attributes.
     */
    public function rules() {
        // NOTE: you should only define rules for those attributes that
        // will receive user inputs.
        return array(
            array('sparkJobId, heliumMediaId, type, headline, subHeadline, body, creditText, photography, reports', 'required'),
            array('sparkJobId, heliumMediaId, type, channelId, reports, delivered, sequence', 'numerical', 'integerOnly' => true),
            array('headline, photography, featureName, homepageUrl, projectName, supplierName, serviceCategory, writer', 'length', 'max' => 256),
            array('subHeadline', 'length', 'max' => 1024),
            array('body, creditText', 'length', 'max' => 1073741823),
            array('contactDetails', 'length', 'max' => 500),
            array('pendingDelivery', 'safe'),
            // The following rule is used by search().
            // Please remove those attributes that should not be searched.
            array('id, sparkJobId, heliumMediaId, type, headline, subHeadline, body, creditText, photography, featureName, channelId, reports, delivered, homepageUrl, contactDetails, projectName, sequence, supplierName, serviceCategory, writer, pendingDelivery', 'safe', 'on' => 'search'),
        );
    }

    /**
     * @return array relational rules.
     */
    public function relations() {
        // NOTE: you may need to adjust the relation name and the related
        // class name for the relations automatically generated below.
        return array(
            'cacheIdeasPortalPromotions' => array(self::HAS_MANY, 'CacheIdeasPortalPromotions', 'articleId'),
            'sparkJob' => array(self::BELONGS_TO, 'SparkJobs', 'sparkJobId'),
            'heliumMedia' => array(self::BELONGS_TO, 'HeliumMedia', 'heliumMediaId'),
            'featureName0' => array(self::BELONGS_TO, 'Features', 'featureName'),
            'projectName0' => array(self::BELONGS_TO, 'Projects', 'projectName'),
            'cacheArticleSearches' => array(self::HAS_MANY, 'CacheArticleSearches', 'articleId'),
            'cacheArticleRegions' => array(self::HAS_MANY, 'CacheArticleRegions', 'articleId'),
            'cacheProjectPagePromotions' => array(self::HAS_MANY, 'CacheProjectPagePromotions', 'articleId'),
            'articleCredits' => array(self::HAS_MANY, 'ArticleCredits', 'articleId'),
            'cacheArticleTopicRegions' => array(self::HAS_MANY, 'CacheArticleTopicRegions', 'articleId'),
            'articleImages' => array(self::HAS_MANY, 'ArticleImages', 'articleId'),
            'articleEmails' => array(self::HAS_MANY, 'ArticleEmails', 'articleId'),
            'articleLinkMaps' => array(self::HAS_MANY, 'ArticleLinkMaps', 'articleId'),
            'articleSubCategoryMaps' => array(self::HAS_MANY, 'ArticleSubCategoryMaps', 'articleId'),
            'articleTopicMaps' => array(self::HAS_MANY, 'ArticleTopicMaps', 'articleId'),
            'deliveredArticles' => array(self::HAS_MANY, 'DeliveredArticles', 'articleId'),
            'ideasPortalArticleMaps' => array(self::HAS_MANY, 'IdeasPortalArticleMaps', 'articleId'),
            'superGalleryMaps' => array(self::HAS_MANY, 'SuperGalleryMaps', 'articleId'),
            'deliveryTimeframes' => array(self::HAS_MANY, 'DeliveryTimeframes', 'articleId'),
        );
    }

    /**
     * @return array customized attribute labels (name=>label)
     */
    public function attributeLabels() {
        return array(
            'id' => 'ID',
            'sparkJobId' => 'Spark Job',
            'heliumMediaId' => 'Helium Media',
            'type' => 'Type',
            'headline' => 'Headline',
            'subHeadline' => 'Sub Headline',
            'body' => 'Body',
            'creditText' => 'Credit Text',
            'photography' => 'Photography',
            'featureName' => 'Feature Name',
            'channelId' => 'Channel',
            'reports' => 'Reports',
            'delivered' => 'Delivered',
            'homepageUrl' => 'Homepage Url',
            'contactDetails' => 'Contact Details',
            'projectName' => 'Project Name',
            'sequence' => 'Sequence',
            'supplierName' => 'Supplier Name',
            'serviceCategory' => 'Service Category',
            'writer' => 'Writer',
            'pendingDelivery' => 'Pending Delivery',
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
        $criteria->compare('sparkJobId', $this->sparkJobId);
        $criteria->compare('heliumMediaId', $this->heliumMediaId);
        $criteria->compare('type', $this->type);
        $criteria->compare('headline', $this->headline, true);
        $criteria->compare('subHeadline', $this->subHeadline, true);
        $criteria->compare('body', $this->body, true);
        $criteria->compare('creditText', $this->creditText, true);
        $criteria->compare('photography', $this->photography, true);
        $criteria->compare('featureName', $this->featureName, true);
        $criteria->compare('channelId', $this->channelId);
        $criteria->compare('reports', $this->reports);
        $criteria->compare('delivered', $this->delivered);
        $criteria->compare('homepageUrl', $this->homepageUrl, true);
        $criteria->compare('contactDetails', $this->contactDetails, true);
        $criteria->compare('projectName', $this->projectName, true);
        $criteria->compare('sequence', $this->sequence);
        $criteria->compare('supplierName', $this->supplierName, true);
        $criteria->compare('serviceCategory', $this->serviceCategory, true);
        $criteria->compare('writer', $this->writer, true);
        $criteria->compare('pendingDelivery', $this->pendingDelivery);

        return new CActiveDataProvider($this, array(
            'criteria' => $criteria,
        ));
    }
    
    public function  getObjData(){
          
                 $data_list = array();  
                 $sql = "select dbo.Articles.id, dbo.ArticleCredits.categoryText, dbo.ArticleImages.hero  from dbo.Articles
                             inner join dbo.ArticleCredits 
                             on dbo.Articles.id = dbo.ArticleCredits.articleId
                             inner join dbo.ArticleImages
                             on dbo.Articles.id = dbo.ArticleImages.articleId";
                 $data_list = Yii::app() ->db->createCommand($sql)->queryAll(); 
                 return $data_list;
         }
}