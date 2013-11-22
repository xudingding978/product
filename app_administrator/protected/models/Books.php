<?php

/**
 * This is the model class for table "Books".
 *
 * The followings are the available columns in table 'Books':
 * @property integer $id
 * @property integer $publicationId
 * @property string $internalReferenceId
 * @property string $title
 * @property string $dateLive
 * @property boolean $visible
 * @property string $cover
 * @property string $thumbnail
 * @property integer $heliumMediaId
 * @property string $Price
 * @property string $DisPrice
 * @property integer $Weight
 * @property integer $BandedID
 * @property boolean $useBT
 *
 * The followings are the available model relations:
 * @property CacheArticleSearches[] $cacheArticleSearches
 * @property BandedBooks $banded
 * @property InternalReferences $internalReference
 * @property Publications $publication
 * @property BookSpecialMaps[] $bookSpecialMaps
 * @property FeaturedContent[] $featuredContents
 */
class Books extends CActiveRecord
{
	/**
	 * Returns the static model of the specified AR class.
	 * @param string $className active record class name.
	 * @return Books the static model class
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
		return 'Books';
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array(
			array('publicationId, internalReferenceId, title, dateLive, visible, Price', 'required'),
			array('publicationId, heliumMediaId, Weight, BandedID', 'numerical', 'integerOnly'=>true),
			array('internalReferenceId, title, cover, thumbnail', 'length', 'max'=>256),
			array('Price, DisPrice', 'length', 'max'=>18),
			array('useBT', 'safe'),
			// The following rule is used by search().
			// Please remove those attributes that should not be searched.
			array('id, publicationId, internalReferenceId, title, dateLive, visible, cover, thumbnail, heliumMediaId, Price, DisPrice, Weight, BandedID, useBT', 'safe', 'on'=>'search'),
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
			'cacheArticleSearches' => array(self::HAS_MANY, 'CacheArticleSearches', 'bookId'),
			'banded' => array(self::BELONGS_TO, 'BandedBooks', 'BandedID'),
			'internalReference' => array(self::BELONGS_TO, 'InternalReferences', 'internalReferenceId'),
			'publication' => array(self::BELONGS_TO, 'Publications', 'publicationId'),
			'bookSpecialMaps' => array(self::HAS_MANY, 'BookSpecialMaps', 'bookId'),
			'featuredContents' => array(self::HAS_MANY, 'FeaturedContent', 'bookId'),
		);
	}

	/**
	 * @return array customized attribute labels (name=>label)
	 */
	public function attributeLabels()
	{
		return array(
			'id' => 'ID',
			'publicationId' => 'Publication',
			'internalReferenceId' => 'Internal Reference',
			'title' => 'Title',
			'dateLive' => 'Date Live',
			'visible' => 'Visible',
			'cover' => 'Cover',
			'thumbnail' => 'Thumbnail',
			'heliumMediaId' => 'Helium Media',
			'Price' => 'Price',
			'DisPrice' => 'Dis Price',
			'Weight' => 'Weight',
			'BandedID' => 'Banded',
			'useBT' => 'Use Bt',
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
		$criteria->compare('publicationId',$this->publicationId);
		$criteria->compare('internalReferenceId',$this->internalReferenceId,true);
		$criteria->compare('title',$this->title,true);
		$criteria->compare('dateLive',$this->dateLive,true);
		$criteria->compare('visible',$this->visible);
		$criteria->compare('cover',$this->cover,true);
		$criteria->compare('thumbnail',$this->thumbnail,true);
		$criteria->compare('heliumMediaId',$this->heliumMediaId);
		$criteria->compare('Price',$this->Price,true);
		$criteria->compare('DisPrice',$this->DisPrice,true);
		$criteria->compare('Weight',$this->Weight);
		$criteria->compare('BandedID',$this->BandedID);
		$criteria->compare('useBT',$this->useBT);

		return new CActiveDataProvider($this, array(
			'criteria'=>$criteria,
		));
	}
        
        public function getBookTitlebyId($id){
              $data_list = array();
                    $sql = "select * from dbo.Books 
                     where dbo.Books.id = ".$id; 
//                    error_log($sql); 
                    try {
                         $data_list = Yii::app() ->db->createCommand($sql)->queryAll(); 
                         return $data_list['title'];
                    } catch (Exception $e) {
                         $response = $e->getMessage();
                        $message = date("Y-m-d H:i:s")." ----cannot get owner from book -> getBookTitlebyId!! \r\n".$response;
                        $this->writeToLog('/home/devbox/NetBeansProjects/test/error.log', $message);
                    }        
                }
        
                
                public function getBookByPhotoID($id) {
                    $data_list = array();
                    $sql = "select 
                                    Bs.*, IR.regionId as region, Pu.name as publication
                                 from 
                                    dbo.Books as Bs,
                                    dbo.Publications as Pu,
                                    dbo.SparkJobInternalReferenceMaps as SJIRM,
                                    dbo.Articles as Ar,
                                    dbo.ArticleImages as AI,
                                    dbo.InternalReferences as IR
                                where 
                                    Bs.internalReferenceId = SJIRM.internalReferenceId 
                                and
                                    Bs.PublicationId = Pu.id
                                and
                                    IR.id = SJIRM.internalReferenceId
                                and
                                    SJIRM.sparkJobId = Ar.sparkJobId
                                and
                                    Ar.id = AI.articleId
                                and 
                                    AI.id =".$id; 
//                    error_log($sql); 
                    try {
                         $data_list = Yii::app() ->db->createCommand($sql)->queryAll(); 
                         return $data_list;
                    } catch (Exception $e) {
                         $response = $e->getMessage();
                        $message = date("Y-m-d H:i:s")." ----cannot get photo from book -> getBookByPhotoID!! \r\n".$response;
                        $this->writeToLog('/home/devbox/NetBeansProjects/test/error.log', $message);
                    }        
                }
                
                public function getBookByArticalID($id) {
                    $data_list = array();
                    $sql = "select 
                                    Bs.*, IR.regionId as region, Pu.name as publication
                                 from 
                                    dbo.Publications as Pu,
                                    dbo.Books as Bs,
                                    dbo.SparkJobInternalReferenceMaps as SJIRM,
                                    dbo.Articles as Ar,
                                    dbo.InternalReferences as IR
                                where 
                                    Bs.internalReferenceId = SJIRM.internalReferenceId 
                                and
                                    IR.id = SJIRM.internalReferenceId
                                and
                                    Bs.PublicationId = Pu.id
                                and
                                    SJIRM.sparkJobId = Ar.sparkJobId
                                and
                                    Ar.id = ".$id; 
                    
//                    error_log($sql); 
                    try {
                         $data_list = Yii::app() ->db->createCommand($sql)->queryAll(); 
//                         print_r($data_list);
                    } catch (Exception $e) {
                         $response = $e->getMessage();
                        $message = date("Y-m-d H:i:s")." ----cannot get photo from book -> getBookByArticalID!! \r\n".$response;
                        error_log($message);
                    }
                    
                    
                    return $data_list;
                }
}