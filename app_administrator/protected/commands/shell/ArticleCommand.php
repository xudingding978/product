<?php

Yii::import("application.models.*");
Yii::import("application.components.*");

class ArticleCommand extends Controller_admin {

    protected $log_path = '/home/devbox/NetBeansProjects/test/error_loadingarticle.log';

    public function actionIndex($action = null) {              //inhertance of two actions,
        echo (isset($action) ? 'Your are do... ' . $action . "\r\n" : 'No action defined \r\n');
        Yii::import("application.models.*");

        $start_time = microtime(true);
        echo $start_time . "\r\n";

        if ($action == "update") {                //update calls updateArticles function,
            $this->updateArticles();
        } else if ($action == "import") {                //import calls importArticleToProduction function.
            $this->importArticleToProduction();
        }else if ($action == "dis") {                //import calls importArticleToProduction function.
            $this->display();
        } 
        else if ($action == "body") {                //import calls importArticleToProduction function.
            $this->reflexArticleBody();
        }

        echo "All finished: start from: " . "\r\n";
        $end_time = microtime(true);
        echo "totally spend: " . ($end_time - $start_time);      //time spend
    }

    public function reflexArticleBody() {
        $start_time = date('D M d Y H:i:s') . ' GMT' . date('O') . ' (' . date('T') . ')';
        $log_path = "/var/log/yii/$start_time.log";          
        $bucket = "develop";
        $settings['log.enabled'] = true;
        $Sherlock = new \Sherlock\Sherlock($settings);
        $Sherlock->addNode("es1.hubsrv.com", 9200);
        $article_arr=array();
        for ($i = 0; $i < 280; $i++) {
            $request =null;
            $request = $Sherlock->search();
            $must = \Sherlock\Sherlock::queryBuilder()->QueryString()->query("\"article\"")
                    ->default_field("couchbaseDocument.doc.type");
            $bool = \Sherlock\Sherlock::queryBuilder()->Bool()->must($must);
            $request->index($bucket)
                    ->type("couchbaseDocument")
                    ->from(50*$i)
                    ->size(50);
            $request->query($bool);
            $response = $request->execute();
            $progress = 50*$i;           
            foreach ($response as $hit) {        
                $progress+=1;
                echo "Job carrying to: ".$progress;
                    array_push($article_arr, $hit['id']);
                    $message.=$hit['id']."\n";                 
            }                         
       }
                $progress=0;
                   foreach ($article_arr as $article) {
                $progress+=1;
                echo "Job carrying to: ".$progress;
                $message = 'Job carrying to: '.$progress ."\n";
                $timeStamp = $this->setUTC();
                $cb = $this->couchBaseConnection($bucket);
                $result = $cb->get($article);
                $result_arr = CJSON::decode($result, TRUE);           
                $bodyRecord=$result_arr['article'][0]['article_body']; 
                $record_accessed = $result_arr["accessed"];
                $record_updated = $result_arr["updated"];
                $record_accessed_readable = $result_arr["accessed_readable"];
                $record_updated_readable = $result_arr["updated_readable"];
                echo "\n\nBefore: " . $result_arr['article'][0]['article_body'];            
                $result_arr['article'][0]['article_body'] = str_replace("\n", "</p><p>", $result_arr['article'][0]['article_body']);
                $result_arr['article'][0]['article_body'] = str_replace("\r", "</p><p>", $result_arr['article'][0]['article_body']);
                $head=substr($result_arr['article'][0]['article_body'],0,3);
                $end=substr($result_arr['article'][0]['article_body'],-4);
                echo "head is: ".$head."\n";
                echo "end is: ".$end."\n";
                if($head!="<p>"){
                    $result_arr['article'][0]['article_body'] = "<p>" . $result_arr['article'][0]['article_body'] ;
                   
                }
                if($end!="</p>"){
                    $result_arr['article'][0]['article_body'] = $result_arr['article'][0]['article_body'] . "</p>";
                }
                $result_arr["accessed"] = $timeStamp;
                $result_arr["updated"] = $timeStamp;
                $result_arr["accessed_readable"] = date('D M d Y H:i:s') . ' GMT' . date('O') . ' (' . date('T') . ')';
                $result_arr["updated_readable"] = date('D M d Y H:i:s') . ' GMT' . date('O') . ' (' . date('T') . ')';
                $message.=$article . "|" . $result_arr["type"] . "|" . '{"old_article_body": ' . '"' . $bodyRecord . '"' . '; "new_article_body": ' . '"' . $result_arr['article'][0]['article_body'] . '"' . "}\n";
                if ($cb->set($article, CJSON::encode($result_arr))) {
                    echo "\n\nAfter: " . $result_arr['article'][0]['article_body'];
                    echo "\naccessed has been changed from " . $record_accessed . " to " . $result_arr["accessed"] . "\r\n" .
                    "updated has been changed from " . $record_updated . " to " . $result_arr["updated"] . "\r\n" .
                    "accessed_readable has been changed from " . $record_accessed_readable . " to " . $result_arr["accessed_readable"] . "\r\n" .
                    "updated_readable has been changed from " . $record_updated_readable . " to " . $result_arr["updated_readable"] . "\r\n" .
                    "\r\n";
                    echo $article . " update body successful\n";
                    $this->writeToLog($log_path, $message);
                } else {
                    echo $article . " fail to update couchbase record~~~~~~~~~~~~~~~~\n";
                    $message = $article . " fail to update couchbase record~~~~~~~~~~~~~~~~\n";
                    $this->writeToLog($log_path, $message);
                }
            }
    }


    protected function importArticleToProduction() {
        $artical_data_arr = Article::model()->getAll();    //gets all from Trends.dbo.Articles and create array of queries 
        $total_amount = sizeof($artical_data_arr);
        echo "totally: " . $total_amount . "\r\n";

        if ($total_amount > 0) {                      //if there is articles in there
            for ($i = 0; $i < $total_amount; $i++) {   //for each query
//                echo $this->getNewID() . "\r\n";
                $obj = $this->structureArray($artical_data_arr[$i]);  //pass this artical_data_array and return a structured array of aritcle attributes
//                print_r($obj);
//                exit();
                if ($this->importMegaObj($obj)) {   //add $obj to couchbase
                    $id_arr['couchBaseId'] = "trendsideas.com/" . $obj['id'];   //set couchbase id
                    $id_arr['objectId'] = $obj['id'];    //set objectid

                    $update_bool = Article::model()->updateByPk($artical_data_arr[$i]['id'], $id_arr);
                    if ($update_bool) {
                        $message = 'update sql server  is success with article id: ' . $artical_data_arr[$i]['id'] . " ----------------- " . $i . "/" . $total_amount . "\r\n";
                        echo $message; //successful
                        $message = 'update sql server  is NOT success with article id: ' . $artical_data_arr[$i]['id'] . "\r\n";
                        echo $message; //unsuccessful

                        $this->writeToLog($this->log_path, $message);
                    }
                } else {    //import to couchbase failed
                    $message = 'import object to couchbase is fail, id: ' . $artical_data_arr[$i]['id'];
                    echo $message;
                    $this->writeToLog($this->log_path, $message);
                }

//                if($i >1) break;
            }
        } else {   //no article found
            echo "cannot find any articles";
        }
    }

    protected function updateArticles() {
        $utc_now_utc = strtotime(date('Y-m-d H:i:s'));     //start time
        $from_utc = 1372740000;

        $url_str = "http://api.develop.devbox/Articles/update?from=";
        $total_amount_int = 0;

        while (TRUE) {
            $to_utc = $from_utc + 100;
            $new_url_str = $url_str . $from_utc . '&to=' . $to_utc;   //new url
//            echo $new_url_str."\r\n";

            $result_arr = $this->getData($new_url_str, "POST"); //import JSON array, return result
            $amount_int = sizeof($result_arr['article']);   //number of elements in article

            $i = 0;
            if ($amount_int > 0) {
//                echo $amount_int."\r\n";

                foreach ($result_arr['article'] as $var_arr) {
                    $this->updateCouchbaseArticle($var_arr['id']);     //call function to update each article

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
        $id_string = 'trendsideas.com/' . $id;     //sets the id
        $ch = $this->couchBaseConnection("develop");    //connection to develop
        $result = $ch->get($id_string);
        $result_arr = CJSON::decode($result, true);   //result array from given JSON $result string
//        print_r($result_arr);
//        exit();

        $result_arr['creator_title'] = 'Trends Ideas'; //sets attributes
        $result_arr['id'] = $id;
        $result_arr['article'][0]['id'] = $id;
        $result_arr['follower_count'] = null;
        $result_arr['following_count'] = null;

        $result_arr['view_count'] = null;

        if ($ch->set($id_string, CJSON::encode($result_arr))) {    //update couchbase record of $id_string
            echo $id_string . " update successssssssssssssssssssssssss! \r\n";
        } else {
            echo $id_string . " update failllllllllllllllllllllllllllllllllllllllllllllll! \r\n";
        }
    }

//    protected function couchBaseConnection($bucket = "test") {
//        return new Couchbase("cb1.hubsrv.com:8091", "Administrator", "Pa55word", $bucket, true);
//    }

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

        $obj = array(//gets all these attribute as an array 
            "id" => $id,
            "accessed" => $now,
            "boost" => null, // serach engine ranking... integer ie 6(?)
            "created" => $book_arr['date'], // UTC date time timezone format(?)
            "categories" => $category,
            "collection_id" => $val['id'],
            "creator" => $book_arr['title'], //Book Title ie: Home & Architectural Trends - Atlanta(?)
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
            "owner_id" => strtolower(str_replace("&", "and", str_replace(" ", "-", $book_arr['publication']))), //Publication Name lovwer case and '&' replaced with 'and'  ie: home-and-architecture-trends
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
            "updated" => $now, // this will be the UTC for the uploading time
            "uri_url" => null,
            "view_count" => null,
            "article" => array()
        );

        $article_list = array(//gets all these attribute as an array 
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

        array_push($obj['article'], $article_list);   //add articles_list array to article array

        $domains_arr = array("beta.trendsides.com", "trendsideas.com");
        array_push($obj['domains'], $domains_arr);    //add two domains to article domains array

        return $obj;
    }

}

?>
