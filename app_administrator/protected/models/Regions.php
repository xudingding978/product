<?php

/**
 * This is the model class for table "Regions".
 *
 * The followings are the available columns in table 'Regions':
 * @property integer $id
 * @property integer $parentId
 * @property string $name
 * @property string $prefix
 * @property string $suffix
 * @property boolean $visible
 * @property integer $currencyId
 * @property string $taxNumber
 * @property integer $fontSizePercent
 * @property string $salesSupportContactEmail
 *
 * The followings are the available model relations:
 * @property ProjectPageRegionMaps[] $projectPageRegionMaps
 * @property CacheIdeasPortalPromotions[] $cacheIdeasPortalPromotions
 * @property CacheAwardRegions[] $cacheAwardRegions
 * @property CacheArticleSearches[] $cacheArticleSearches
 * @property DisabledEditorialDeliveries[] $disabledEditorialDeliveries
 * @property CacheSubRegions[] $cacheSubRegions
 * @property CacheSubRegions[] $cacheSubRegions1
 * @property Users[] $users
 * @property VideoRegionMaps[] $videoRegionMaps
 * @property CacheLinkRegions[] $cacheLinkRegions
 * @property CacheProjectPageRegions[] $cacheProjectPageRegions
 * @property CacheArticleRegions[] $cacheArticleRegions
 * @property CmsUserRegionMaps[] $cmsUserRegionMaps
 * @property CacheProjectPagePromotions[] $cacheProjectPagePromotions
 * @property CacheVideoRegions[] $cacheVideoRegions
 * @property CacheArticleTopicRegions[] $cacheArticleTopicRegions
 * @property RegionBanners[] $regionBanners
 * @property RegionCategoryTypes[] $regionCategoryTypes
 * @property RegionFooterLinks[] $regionFooterLinks
 * @property RegionRightSections[] $regionRightSections
 * @property Subscriptions[] $subscriptions
 * @property Currencies $currency
 * @property Regions $parent
 * @property Regions[] $regions
 * @property RegionTopicTypes[] $regionTopicTypes
 * @property CachePropertyListingRegions[] $cachePropertyListingRegions
 * @property RegionEmailTemplates[] $regionEmailTemplates
 * @property InternalReferences[] $internalReferences
 * @property OrderItems[] $orderItems
 * @property RegionBuildingTypes[] $regionBuildingTypes
 * @property PropertyListings[] $propertyListings
 * @property RegionCategories[] $regionCategories
 * @property RegionRightLinks[] $regionRightLinks
 * @property RegionTopics[] $regionTopics
 * @property Associations[] $associations
 * @property Specials[] $specials
 * @property ArticleTopicMaps[] $articleTopicMaps
 * @property AwardRegionMaps[] $awardRegionMaps
 * @property GroupRules[] $groupRules
 * @property LinkRegionMaps[] $linkRegionMaps
 * @property RegionContentSwitcher[] $regionContentSwitchers
 * @property CacheGalleryRegions[] $cacheGalleryRegions
 * @property RegionSubCategories[] $regionSubCategories
 * @property GalleryRegionMaps[] $galleryRegionMaps
 * @property RegionCmsPages[] $regionCmsPages
 * @property RegionText[] $regionTexts
 * @property CacheIdeasPortalRegions[] $cacheIdeasPortalRegions
 * @property BannerRegions[] $bannerRegions
 * @property IdeasPortalRegionMaps[] $ideasPortalRegionMaps
 * @property DestinationGroups[] $destinationGroups
 */
class Regions extends CActiveRecord {

    /**
     * Returns the static model of the specified AR class.
     * @param string $className active record class name.
     * @return Regions the static model class
     */
    public static function model($className = __CLASS__) {
        return parent::model($className);
    }

    /**
     * @return string the associated database table name
     */
    public function tableName() {
        return 'Regions';
    }

    /**
     * @return array validation rules for model attributes.
     */
    public function rules() {
        // NOTE: you should only define rules for those attributes that
        // will receive user inputs.
        return array(
            array('name, prefix, suffix, currencyId', 'required'),
            array('parentId, currencyId, fontSizePercent', 'numerical', 'integerOnly' => true),
            array('name, salesSupportContactEmail', 'length', 'max' => 256),
            array('prefix', 'length', 'max' => 2),
            array('suffix', 'length', 'max' => 32),
            array('taxNumber', 'length', 'max' => 50),
            array('visible', 'safe'),
            // The following rule is used by search().
            // Please remove those attributes that should not be searched.
            array('id, parentId, name, prefix, suffix, visible, currencyId, taxNumber, fontSizePercent, salesSupportContactEmail', 'safe', 'on' => 'search'),
        );
    }

    /**
     * @return array relational rules.
     */
    public function relations() {
        // NOTE: you may need to adjust the relation name and the related
        // class name for the relations automatically generated below.
        return array(
            'projectPageRegionMaps' => array(self::HAS_MANY, 'ProjectPageRegionMaps', 'regionId'),
            'cacheIdeasPortalPromotions' => array(self::HAS_MANY, 'CacheIdeasPortalPromotions', 'regionId'),
            'cacheAwardRegions' => array(self::HAS_MANY, 'CacheAwardRegions', 'regionId'),
            'cacheArticleSearches' => array(self::HAS_MANY, 'CacheArticleSearches', 'regionId'),
            'disabledEditorialDeliveries' => array(self::HAS_MANY, 'DisabledEditorialDeliveries', 'regionId'),
            'cacheSubRegions' => array(self::HAS_MANY, 'CacheSubRegions', 'rootRegionId'),
            'cacheSubRegions1' => array(self::HAS_MANY, 'CacheSubRegions', 'regionId'),
            'users' => array(self::HAS_MANY, 'Users', 'regionId'),
            'videoRegionMaps' => array(self::HAS_MANY, 'VideoRegionMaps', 'regionId'),
            'cacheLinkRegions' => array(self::HAS_MANY, 'CacheLinkRegions', 'regionId'),
            'cacheProjectPageRegions' => array(self::HAS_MANY, 'CacheProjectPageRegions', 'regionId'),
            'cacheArticleRegions' => array(self::HAS_MANY, 'CacheArticleRegions', 'regionId'),
            'cmsUserRegionMaps' => array(self::HAS_MANY, 'CmsUserRegionMaps', 'regionId'),
            'cacheProjectPagePromotions' => array(self::HAS_MANY, 'CacheProjectPagePromotions', 'regionId'),
            'cacheVideoRegions' => array(self::HAS_MANY, 'CacheVideoRegions', 'regionId'),
            'cacheArticleTopicRegions' => array(self::HAS_MANY, 'CacheArticleTopicRegions', 'regionId'),
            'regionBanners' => array(self::HAS_MANY, 'RegionBanners', 'regionId'),
            'regionCategoryTypes' => array(self::HAS_MANY, 'RegionCategoryTypes', 'regionId'),
            'regionFooterLinks' => array(self::HAS_MANY, 'RegionFooterLinks', 'regionId'),
            'regionRightSections' => array(self::HAS_MANY, 'RegionRightSections', 'regionId'),
            'subscriptions' => array(self::HAS_MANY, 'Subscriptions', 'RegionId'),
            'currency' => array(self::BELONGS_TO, 'Currencies', 'currencyId'),
            'parent' => array(self::BELONGS_TO, 'Regions', 'parentId'),
            'regions' => array(self::HAS_MANY, 'Regions', 'parentId'),
            'regionTopicTypes' => array(self::HAS_MANY, 'RegionTopicTypes', 'regionId'),
            'cachePropertyListingRegions' => array(self::HAS_MANY, 'CachePropertyListingRegions', 'regionId'),
            'regionEmailTemplates' => array(self::HAS_MANY, 'RegionEmailTemplates', 'regionId'),
            'internalReferences' => array(self::HAS_MANY, 'InternalReferences', 'regionId'),
            'orderItems' => array(self::HAS_MANY, 'OrderItems', 'regionId'),
            'regionBuildingTypes' => array(self::HAS_MANY, 'RegionBuildingTypes', 'regionId'),
            'propertyListings' => array(self::HAS_MANY, 'PropertyListings', 'regionId'),
            'regionCategories' => array(self::HAS_MANY, 'RegionCategories', 'regionId'),
            'regionRightLinks' => array(self::HAS_MANY, 'RegionRightLinks', 'regionId'),
            'regionTopics' => array(self::HAS_MANY, 'RegionTopics', 'regionId'),
            'associations' => array(self::HAS_MANY, 'Associations', 'regionId'),
            'specials' => array(self::HAS_MANY, 'Specials', 'regionId'),
            'articleTopicMaps' => array(self::HAS_MANY, 'ArticleTopicMaps', 'regionId'),
            'awardRegionMaps' => array(self::HAS_MANY, 'AwardRegionMaps', 'regionId'),
            'groupRules' => array(self::HAS_MANY, 'GroupRules', 'targetRegionId'),
            'linkRegionMaps' => array(self::HAS_MANY, 'LinkRegionMaps', 'regionId'),
            'regionContentSwitchers' => array(self::HAS_MANY, 'RegionContentSwitcher', 'regionId'),
            'cacheGalleryRegions' => array(self::HAS_MANY, 'CacheGalleryRegions', 'regionId'),
            'regionSubCategories' => array(self::HAS_MANY, 'RegionSubCategories', 'regionId'),
            'galleryRegionMaps' => array(self::HAS_MANY, 'GalleryRegionMaps', 'regionId'),
            'regionCmsPages' => array(self::HAS_MANY, 'RegionCmsPages', 'regionId'),
            'regionTexts' => array(self::HAS_MANY, 'RegionText', 'regionId'),
            'cacheIdeasPortalRegions' => array(self::HAS_MANY, 'CacheIdeasPortalRegions', 'regionId'),
            'bannerRegions' => array(self::HAS_MANY, 'BannerRegions', 'regionId'),
            'ideasPortalRegionMaps' => array(self::HAS_MANY, 'IdeasPortalRegionMaps', 'regionId'),
            'destinationGroups' => array(self::HAS_MANY, 'DestinationGroups', 'regionId'),
        );
    }

    /**
     * @return array customized attribute labels (name=>label)
     */
    public function attributeLabels() {
        return array(
            'id' => 'ID',
            'parentId' => 'Parent',
            'name' => 'Name',
            'prefix' => 'Prefix',
            'suffix' => 'Suffix',
            'visible' => 'Visible',
            'currencyId' => 'Currency',
            'taxNumber' => 'Tax Number',
            'fontSizePercent' => 'Font Size Percent',
            'salesSupportContactEmail' => 'Sales Support Contact Email',
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
        $criteria->compare('parentId', $this->parentId);
        $criteria->compare('name', $this->name, true);
        $criteria->compare('prefix', $this->prefix, true);
        $criteria->compare('suffix', $this->suffix, true);
        $criteria->compare('visible', $this->visible);
        $criteria->compare('currencyId', $this->currencyId);
        $criteria->compare('taxNumber', $this->taxNumber, true);
        $criteria->compare('fontSizePercent', $this->fontSizePercent);
        $criteria->compare('salesSupportContactEmail', $this->salesSupportContactEmail, true);

        return new CActiveDataProvider($this, array(
            'criteria' => $criteria,
        ));
    }

    public function selectCountryNameByID($id) {
        $sql = "select dbo.Regions.* from dbo.Regions where id = " . $id;
        $region = "";
        try {
            $data_list = Yii::app()->db->createCommand($sql)->queryAll();
            if (sizeof($data_list) > 0) {
                $region = $data_list[0]['name']; 
                $parent_id = $data_list[0]['parentId'];
                
                while (true) {
                    if ($parent_id === null || $parent_id ==="") {
                        break;
                    } else {
                        $sql = "select dbo.Regions.* from dbo.Regions where id = " . $parent_id;
                        $region_arr = Yii::app()->db->createCommand($sql)->queryAll();              
                        if (sizeof ($region_arr>0)) {
                            $region = $region .', '. $region_arr[0]['name'];
                            $parent_id = $region_arr[0]['parentId'];
                        }
                    }
                }
            }
        } catch (Exception $e) {
            $response = $e->getMessage();
            $message = date("Y-m-d H:i:s") . " ----cannot get photo from region -> selectCountryNameByID!! \r\n" . $response;
            $this->writeToLog('/home/devbox/NetBeansProjects/test/error.log', $message);
        }

        return $region;
    }

    public function selectRegionByArtical($id) {
        $data_list = array();
        $region = "";
        $sql = "select 
                        dbo.Regions.* 
                    from 
                        dbo.Regions 
                    inner join 
                        dbo.ArticleTopicMaps 
                    on 
                        dbo.ArticleTopicMaps.regionId = dbo.Regions.id 
                    inner join 
                        dbo.Articles
                    on 
                        dbo.Articles.id = dbo.ArticleTopicMaps.articleId
                    where 
                        dbo.Articles.id = " . $id;
//                    error_log($sql); 
        try {
            $data_list = Yii::app()->db->createCommand($sql)->queryAll();
            if (sizeof($data_list) > 0) {
                $region = $data_list[0]['name'];
                while (true) {
                    $parent_id = $data_list[0]['parentId'];
                    if ($parent_id == null) {
                        break;
                    } else {                        
                        $data_list = $this->getParentRegionData($parent_id);
                        $region = $region . ", " . $data_list[0]['name'];
                    }
                }
            }
        } catch (Exception $e) {
            $response = $e->getMessage();
            $message = date("Y-m-d H:i:s") . " ----cannot get photo from region -> selectRegionByArtical!! \r\n" . $response;
            $this->writeToLog('/home/devbox/NetBeansProjects/test/error.log', $message);
        }
        return $region;
    }

    public function getParentRegionData($parent_id) {
        $data_list = array();
        try {
            $sql = "select dbo.Regions.* from dbo.Regions where id = " . $parent_id;
            $data_list = Yii::app()->db->createCommand($sql)->queryAll();
        } catch (Exception $e) {
            $response = $e->getMessage();
            $message = date("Y-m-d H:i:s") . " ----cannot get photo from region -> getParentRegionData!! \r\n" . $response;
            $this->writeToLog('/home/devbox/NetBeansProjects/test/error.log', $message);
        }
        return $data_list;
    }

    public function selectRegionByImage($id) {
        $data_list = array();
        $region = "";
        $sql = "select dbo.Regions.* from dbo.Regions 
                                    inner join dbo.ArticleTopicMaps 
                                    on dbo.ArticleTopicMaps.regionId = dbo.Regions.id 
                                    inner join dbo.Articles
                                    on dbo.Articles.id = dbo.ArticleTopicMaps.articleId
                                    inner join dbo.ArticleImages
                                    on dbo.Articles.id = dbo.ArticleImages.articleId
                                    where dbo.ArticleImages.id = " . $id;
//                    error_log($sql); 
        try {
            $data_list = Yii::app()->db->createCommand($sql)->queryAll();
            echo "size of region: ". sizeof($data_list)."\n";
            if (sizeof($data_list) > 1) {
                foreach($data_list as $regionFound){
                    echo "this is region: ".$regionFound['name']."\n";
                    $region .=$regionFound['name'].', ' ;
          //          $region .=" ".$regionFound['name'];
                }
            }
            elseif (sizeof($data_list) ===1 ) {
                $region = $data_list[0]['name'];
                
                while (true) {
                    $parent_id = $data_list[0]['parentId'];
                    if ($parent_id == null) {
//                                    echo "222222222222222";
                        break;
                    } else {
//                                    echo "33333333333333333";
                        $data_list = array();
                        $sql = "select dbo.Regions.* from dbo.Regions where id = " . $parent_id;
                        $data_list = Yii::app()->db->createCommand($sql)->queryAll();
                        $region = $region . ", " . $data_list[0]['name'];
                    }
                }
            }
        } catch (Exception $e) {
            $response = $e->getMessage();
            $message = date("Y-m-d H:i:s") . " ----cannot get photo from region -> selectRegionByImage!!---------------------------- \r\n" . $response;
            $this->writeToLog('/home/devbox/NetBeansProjects/test/error.log', $message);
        }
        return $region;
    }
    
      public function writeToLog($fileName, $content) {
        //   $my_file = '/home/devbox/NetBeansProjects/test/addingtocouchbase_success.log';
        $handle = fopen($fileName, 'a') or die('Cannot open file:  ' . $fileName);
        $output = "\n" . $content;
        fwrite($handle, $output);
        fclose($handle);

        unset($fileName, $content, $handle, $output);
    }
    
     

}