<?php
Yii::import("application.models.*");
Yii::import("application.components.*");

class ArticleCommand extends Controller_admin {
    protected $log_path = '/home/devbox/NetBeansProjects/test/error_loadingarticle.log';
    
    public function actionIndex ($action=null) {
        echo (isset($action) ? 'Your are do... ' . $action."\r\n" : 'No action defined \r\n');
        Yii::import("application.models.*");
        
        $start_time = microtime(true);
        echo $start_time . "\r\n";        
        
        if ($action == "update") {
            $this->updateArticles ();
        } else if ($action =="import") {
            $this->importArticleToProduction();
        }
        
        echo "All finished: start from: " . "\r\n";
        $end_time = microtime(true);
        echo "totally spend: " . ($end_time - $start_time);
        
    }
    
    protected function importArticleToProduction() {
        $artical_data_arr = Article::model()->getAll();
        $total_amount = sizeof($artical_data_arr);
        echo "totally: ". $total_amount . "\r\n";

        if ($total_amount > 0) {
            for ($i=0; $i<$total_amount; $i++) {
//                echo $this->getNewID() . "\r\n";
                
                $obj = $this->structureArray($artical_data_arr[$i]);
//                print_r($obj);
//                exit();
                if ($this->importMegaObj($obj)) {
                    $id_arr['couchBaseId'] = "trendsideas.com/".$obj['id'];
                    $id_arr['objectId'] = $obj['id'];
                    
                    $update_bool = Article::model()->updateByPk($artical_data_arr[$i]['id'], $id_arr);
                     if($update_bool) {
                        $message = 'update sql server  is success with article id: '.$artical_data_arr[$i]['id'] . " ----------------- ".$i."/".$total_amount. "\r\n";
                        echo $message;
                    } else {
                        $message = 'update sql server  is NOT success with article id: '.$artical_data_arr[$i]['id']."\r\n";
                        echo $message;
                        
                        $this->writeToLog($this->log_path, $message);
                    }
                    
                } else {
                    $message = 'import object to couchbase is fail, id: '. $artical_data_arr[$i]['id'];
                    echo $message;
                    $this->writeToLog($this->log_path, $message);
                }
                
                if($i >1) break;
            }
        } else {
            echo "cannot find any articles";
        }

    }
        
    protected function  updateArticles () {
        $utc_now_utc = strtotime(date('Y-m-d H:i:s'));
        $from_utc = 1372740000;
        
        $url_str = "http://api.develop.devbox/Articles/update?from=";
        $total_amount_int = 0;
        
        while (TRUE) {
            $to_utc = $from_utc + 100;
            $new_url_str = $url_str . $from_utc . '&to=' . $to_utc;

//            echo $new_url_str."\r\n";

            $result_arr = $this->getData($new_url_str, "POST");
            $amount_int = sizeof($result_arr['article']);
            
            $i = 0;
            if ($amount_int > 0) {
//                echo $amount_int."\r\n";
                
                foreach ($result_arr['article'] as $var_arr) {
                    $this->updateCouchbaseArticle($var_arr['id']);
           
                    $i++;
                    echo ($total_amount_int + $i) . " / " . ($total_amount_int + $amount_int) . "\r\n";
                    
                }

                $total_amount_int += $amount_int;
            }

            $from_utc = $to_utc;

            echo $to_utc . '/' . $utc_now_utc . "---------------------------------------------\r\n";
            if ($to_utc > $utc_now_utc)
                break;
        }
    }
    
    public function updateCouchbaseArticle($id) {
         $id_string = 'trendsideas.com/' . $id;
        $ch = $this->couchBaseConnection("develop");
        $result = $ch->get($id_string);
        $result_arr = CJSON::decode($result, true);
        
//        print_r($result_arr);
//        exit();
        
        $result_arr['creator_title'] = 'Trends Ideas';
        $result_arr['id'] = $id;
        $result_arr['article'][0]['id']=$id;
        $result_arr['follower_count'] = null;
        $result_arr['following_count'] =null;
        
        $result_arr['view_count'] = null;

        if ($ch->set($id_string, CJSON::encode($result_arr))) {
            echo $id_string . " update successssssssssssssssssssssssss! \r\n";
        } else {
            echo $id_string . " update failllllllllllllllllllllllllllllllllllllllllllllll! \r\n";
        }
    }
    
    protected function couchBaseConnection($bucket = "test") {
        return new Couchbase("cb1.hubsrv.com:8091", "Administrator", "Pa55word", $bucket, true);
    }
    
    public function structureArray($val) {
        //get id 
        $id = $this->getNewID();
        
        // get topic
        $topic_list = TopicSearchNames::model()->selectTopicNameByArticalID($val['id']);

        //get subcategory
        $subcategory = SubCategorySearchNames::model()->selectSubCategoryByArticalID($val['id']);

        // get category 
        $category = Categories::model()->selectCategoryByArticalID($val['id']);

        //get book details
        $book_arr = $this->getBookDetails($val['id']);

        // get current datetime
        $now = strtotime(date('Y-m-d H:i:s'));

        // get photography
        $photography = "";
        if (strstr($val['photography'], 'Photography by')) {
            $photography = str_replace("Photography by", "", $val['photography']);
        }

        //get writer
        $writer = "";
        if (strstr($val['writer'], 'Story by')) {
            $writer = str_replace("Story by", "", $val['writer']);
        }

        //get object cover
        $cover = "";
        $cover_arr = Article::model()->getCoverPage($val['id']);
        if (sizeof($cover_arr)) {
            $cover = $cover_arr[0]['photo_image_hero_url'];
            
//            print_r($cover_arr);
//            exit();
        }
        
         $obj = array(
            "id" => $id,
            "accessed" => $now,
            "boost" => null,  // serach engine ranking... integer ie 6
            "created" => $book_arr['date'],  // UTC date time timezone format
            "categories" => $category,
            "collection_id" => $val['id'],
            "creator" => $book_arr['title'],  //Book Title ie: Home & Architectural Trends - Atlanta
            "creator_type" => 'user', 
            "creator_profile_pic" => "http://s3.hubsrv.com/trendsideas.com/users/1000000000/profile/profile_pic_small.jpg",
            "country" => $book_arr['country'],
            "collection_count" => null,
            "deleted" => null,
            "domains" => array(),
            "editors" => "*@trendsideas.com, support@trendsideas.com",
            "geography" => null,
            "like_count" => null,
            "is_indexed" => true,
             "is_active" => true,
            "keywords" => $val['headline'],
            "object_image_linkto" => null,
            "object_image_url" => $cover,
            "object_title" => $val['headline'],
            "object_description" => $val['subHeadline'],
            "owner_profile_pic" => "http://s3.hubsrv.com/trendsideas.com/users/1000000000/profile/profile_pic_small.jpg",
            "owner_type" => 'profile',  
            "owner_title" => str_replace("& ", "", $book_arr['publication']), //Publication Name  ie: Home Architecture Trends
            "owner_id" => strtolower(str_replace("&", "and", str_replace(" ", "-", $book_arr['publication']))),  //Publication Name lovwer case and '&' replaced with 'and'  ie: home-and-architecture-trends
            "owner_contact_email" => "enquiries@trendsideas.com",
            "owner_contact_cc_emails" => null,
            "owner_contact_bcc_emails" => null,
            "people_like" => array(),
            "region" => $book_arr['region'],
            "suburb" => null,
            "status_id" => null,
            "subcategories" => $subcategory,
            "timezone" => $book_arr['timezone'],
            "topics" => $topic_list,
            "type" => "article",
            "updated" => $now,  // this will be the UTC for the uploading time
            "uri_url" => null,
            "view_count" => null,
            "article" => array()
        );

        $article_list = array(
            "id" => $id,
            "article_id" => $val['id'],
            "article_spark_job_id" => $val['sparkJobId'],
            "article_helium_media_id" => $val['heliumMediaId'],
            "article_type" => $val['type'],
            "article_headline" => $val['headline'],
            "article_sub_headline" => $val['subHeadline'],
            "article_body" => $val['body'],
            "article_credits_text" => $val['creditText'],
            "article_photography" => $photography,
            "article_feature_name" => $val['featureName'],
            "article_channel_id" => $val['channelId'],
            "article_reports" => $val['reports'],
            "article_delivered" => $val['delivered'],
            "article_homepage_url" => $val['homepageUrl'],
            "article_contact_details" => $val['contactDetails'],
            "article_project" => $val['projectName'],
            "article_sequence" => $val['sequence'],
            "article_supplier" => $val['supplierName'],
            "article_category" => $val['serviceCategory'],
            "article_writer" => $writer,
            "article_writer_user_id" => null,
            "article_book_id" => $book_arr['id'],
            "article_image_url" => $cover,
        );

        array_push($obj['article'], $article_list);
        
        $domains_arr = array("beta.trendsides.com", "trendsideas.com");        
        array_push($obj['domains'], $domains_arr);
        
        return $obj;
    }

}
?>
