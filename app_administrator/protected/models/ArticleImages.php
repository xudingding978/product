<?php

/**
 * This is the model class for table "ArticleImages".
 *
 * The followings are the available columns in table 'ArticleImages':
 * @property integer $id
 * @property integer $articleId
 * @property integer $heliumMediaId
 * @property string $caption
 * @property string $technicalSpecification
 * @property integer $sequence
 * @property boolean $isExtra
 * @property string $hero
 * @property string $thumbnail
 * @property string $preview
 * @property string $infoLink
 * @property string $original
 *
 * The followings are the available model relations:
 * @property HeliumMedia $heliumMedia
 * @property Articles $article
 */
class ArticleImages extends CActiveRecord {

    /**
     * Returns the static model of the specified AR class.
     * @param string $className active record class name.
     * @return ArticleImages the static model class
     */
    public static function model($className = __CLASS__) {
        return parent::model($className);
    }

    /**
     * @return string the associated database table name
     */
    public function tableName() {
        return 'ArticleImages';
    }

    /**
     * @return array validation rules for model attributes.
     */
    public function rules() {
        // NOTE: you should only define rules for those attributes that
        // will receive user inputs.
        return array(
            array('articleId, heliumMediaId, caption, technicalSpecification, sequence, isExtra, hero, thumbnail, preview', 'required'),
            array('articleId, heliumMediaId, sequence', 'numerical', 'integerOnly' => true),
            array('caption, technicalSpecification', 'length', 'max' => 1073741823),
            array('hero, thumbnail, preview, infoLink, original', 'length', 'max' => 256),
            // The following rule is used by search().
            // Please remove those attributes that should not be searched.
            array('id, articleId, heliumMediaId, caption, technicalSpecification, sequence, isExtra, hero, thumbnail, preview, infoLink, original', 'safe', 'on' => 'search'),
        );
    }

    /**
     * @return array relational rules.
     */
    public function relations() {
        // NOTE: you may need to adjust the relation name and the related
        // class name for the relations automatically generated below.
        return array(
            'heliumMedia' => array(self::BELONGS_TO, 'HeliumMedia', 'heliumMediaId'),
            'article' => array(self::BELONGS_TO, 'Articles', 'articleId'),
        );
    }

    /**
     * @return array customized attribute labels (name=>label)
     */
    public function attributeLabels() {
        return array(
            'id' => 'ID',
            'articleId' => 'Article',
            'heliumMediaId' => 'Helium Media',
            'caption' => 'Caption',
            'technicalSpecification' => 'Technical Specification',
            'sequence' => 'Sequence',
            'isExtra' => 'Is Extra',
            'hero' => 'Hero',
            'thumbnail' => 'Thumbnail',
            'preview' => 'Preview',
            'infoLink' => 'Info Link',
            'original' => 'Original',
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
        $criteria->compare('heliumMediaId', $this->heliumMediaId);
        $criteria->compare('caption', $this->caption, true);
        $criteria->compare('technicalSpecification', $this->technicalSpecification, true);
        $criteria->compare('sequence', $this->sequence);
        $criteria->compare('isExtra', $this->isExtra);
        $criteria->compare('hero', $this->hero, true);
        $criteria->compare('thumbnail', $this->thumbnail, true);
        $criteria->compare('preview', $this->preview, true);
        $criteria->compare('infoLink', $this->infoLink, true);
        $criteria->compare('original', $this->original, true);

        return new CActiveDataProvider($this, array(
            'criteria' => $criteria,
        ));
    }

    function getImageRange($from, $to) {
        $data_list = array();
        $sql = "select dbo.ArticleImages.*, dbo.HeliumMedia.keywords from dbo.ArticleImages
                                    inner join  dbo.HeliumMedia on
                                    dbo.ArticleImages.heliumMediaId = dbo.HeliumMedia.heliumId
                                    where dbo.ArticleImages.id between " . $from . " and " . $to;

        $data_list = Yii::app()->db->createCommand($sql)->queryAll();
        return $data_list;
    }

    function getAll() {
        $data_list = array();
        try {
            $sql = "select dbo.ArticleImages.*, dbo.HeliumMedia.keywords from dbo.ArticleImages
                                    inner join  dbo.HeliumMedia on
                                    dbo.ArticleImages.heliumMediaId = dbo.HeliumMedia.heliumId
                                    order by dbo.ArticleImages.id asc";
            $data_list = Yii::app()->db->createCommand($sql)->queryAll();
        } catch (Exception $e) {
            $response = $e->getMessage();
            $message = date("Y-m-d H:i:s") . " ----cannot get photo from db!! \r\n" . $response;
            $this->writeToLog('/home/devbox/NetBeansProjects/test/error.log', $message);
        }
        return $data_list;
    }

    function getDatabyid($startId) {
        
        $data_list = array();
        try {
            $sql = "select dbo.ArticleImages.*, dbo.HeliumMedia.keywords from dbo.ArticleImages
                                    inner join  dbo.HeliumMedia on 
                                    dbo.ArticleImages.heliumMediaId = dbo.HeliumMedia.heliumId
                                    where dbo.ArticleImages.id >$startId
                                    order by dbo.ArticleImages.id asc";
            echo $sql;
            $data_list = Yii::app()->db->createCommand($sql)->queryAll();
        } catch (Exception $e) {
            $response = $e->getMessage();
            $message = date("Y-m-d H:i:s") . " ----cannot get photo from db!! \r\n" . $response;
            $this->writeToLog('/home/devbox/NetBeansProjects/test/error.log', $message);
        }
        return $data_list;
    } 
    
    function getExtra () {
        $data_list = array();
        try {
            $sql = "select dbo.ArticleImages.*, dbo.HeliumMedia.keywords from dbo.ArticleImages
                                    inner join  dbo.HeliumMedia on
                                    dbo.ArticleImages.heliumMediaId = dbo.HeliumMedia.heliumId
                                    where dbo.ArticleImages.couchBaseId is null
                                    order by dbo.ArticleImages.id asc";
            $data_list = Yii::app()->db->createCommand($sql)->queryAll();
        } catch (Exception $e) {
            $response = $e->getMessage();
            $message = date("Y-m-d H:i:s") . " ----cannot get photo from db!! \r\n" . $response;
            $this->writeToLog('/home/devbox/NetBeansProjects/test/error.log', $message);
        }
        return $data_list;
        
    }
    
     function startFrom ($start_id) {
        $data_list = array();
        try {
            $sql = "select * from Trends.dbo.ArticleImages WHERE dbo.ArticleImages.id > " . $start_id . " order by dbo.ArticleImages.id asc";
//            error_log($sql);
            $data_list = Yii::app()->db->createCommand($sql)->queryAll();
        } catch (Exception $e) {
            $response = $e->getMessage();
            $message = date("Y-m-d H:i:s") . " ----cannot get photo from db by function startFrom()!! \r\n" . $response;
            $this->writeToLog('/home/devbox/NetBeansProjects/test/error.log', $message);
        }
        return $data_list;
        
    }
    

}