<?php

//session_start();

class ShadowListingController extends Controller {

    /**
     * @var string the default layout for the views. Defaults to '//layouts/column2', meaning
     * using two-column layout. See 'protected/views/layouts/column2.php'.
     */
    public $layout = '//layouts/column2';

    /**
     * @return array action filters
     */
    public function filters() {
        return array(
            'accessControl', // perform access control for CRUD operations
            'postOnly + read', // we only allow deletion via POST request
        );
    }

    /**
     * Specifies the access control rules.
     * This method is used by the 'accessControl' filter.
     * @return array access control rules
     */
    public function accessRules() {
        return array(
            array('allow', // allow all users to perform 'index' and 'view' actions
                'actions' => array('index', 'view'),
                'users' => array('*'),
            ),
            array('allow', // allow authenticated user to perform 'create' and 'update' actions
                'actions' => array('create', 'update', 'GetFromToTime'),
                'users' => array('*'),
            ),
            array('allow', // allow admin user to perform 'admin' and 'delete' actions
                'actions' => array('admin', 'delete', ''),
                'users' => array('admin'),
            ),
            array('deny', // deny all users
                'users' => array('*'),
            ),
        );
    }

    /**
     * Displays a particular model.
     * @param integer $id the ID of the model to be displayed
     */
    public function actionView($id) {
        $this->render('view', array(
            'model' => $this->loadModel($id),
        ));
    }

    /**
     * Creates a new model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     */
    public function actionCreate() {
        $model = new ShadowListing;

        // Uncomment the following line if AJAX validation is needed
        // $this->performAjaxValidation($model);

        if (isset($_POST['ShadowListing'])) {
            $model->attributes = $_POST['ShadowListing'];
            if ($model->save())
                $this->redirect(array('view', 'id' => $model->REC_ID));
        }

        $this->render('create', array(
            'model' => $model,
        ));
    }

    /**
     * Updates a particular model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param integer $id the ID of the model to be updated
     */
    public function actionUpdate($id) {
        $model = $this->loadModel($id);

        // Uncomment the following line if AJAX validation is needed
        // $this->performAjaxValidation($model);

        if (isset($_POST['ShadowListing'])) {
            $model->attributes = $_POST['ShadowListing'];
            if ($model->save())
                $this->redirect(array('view', 'id' => $model->REC_ID));
        }

        $this->render('update', array(
            'model' => $model,
        ));
    }

    /**
     * Deletes a particular model.
     * If deletion is successful, the browser will be redirected to the 'admin' page.
     * @param integer $id the ID of the model to be deleted
     */
    public function actionDelete($id) {
        $this->loadModel($id)->delete();

        // if AJAX request (triggered by deletion via admin grid view), we should not redirect the browser
        if (!isset($_GET['ajax']))
            $this->redirect(isset($_POST['returnUrl']) ? $_POST['returnUrl'] : array('admin'));
    }

    /**
     * Lists all models.
     */
    public function actionIndex() {

        $dataProvider = array();

        $this->render('index', array(
            'dataProvider' => $dataProvider,
        ));
    }

    protected function getGroup($ids) {
        $cb = $this->couchBaseConnection();
        $groups = array();
        foreach ($ids as $id) {
            $oldDeep = $cb->get($id); // get the old user record from the database according to the docID string
            $dataProvider = CJSON::decode($oldDeep, true);                    
            if (isset($dataProvider['groups'][0])) {
                $group = array();
                $group['id'] = $dataProvider['id'];
                $group['user_id'] = $dataProvider['creator'];
                $group['category'] = $dataProvider['groups'][0]['group_category'];
                $group['subcategory'] = $dataProvider['groups'][0]['group_subcategory'];
                $user_url = $this->getDomain() . "/users/" . $group['user_id'];
                $user = CJSON::decode($cb->get($user_url), true);
                if ($user !== null) {
                    $group['user_name'] = $user['user'][0]['display_name'];
                    $group['user_photo'] = (isset($user['user'][0]['photo_url_large'])) ? $user['user'][0]['photo_url_large'] : $user['user'][0]['photo_url'];
                } else {
                    $group['user_name'] = "";
                    $group['user_photo'] = "";
                }
                error_log(var_export($group, true));
                $partner = $this->getPartner($dataProvider['groups'][0]['group_partner_ids']);
                $group['$partner'] = $partner;
                array_push($groups, $group);
            }
        }
        return $groups;
    }

    protected function getPartner($ids) {
        $cb = $this->couchBaseConnection();
        $id_array = explode(",", $ids);
        $profiles = array();
        foreach ($id_array as $id) {
            if ($id !== "") {
                $profile_url = $this->getDomain() . "/profiles/" . $id;
                $profile = CJSON::decode($cb->get($profile_url), true);
                if ($profile !== null) {
                    $item = array();
                    $item['id'] = $id;
                    $item['profile_photo'] = $profile['profile'][0]['profile_pic_url'];
                    $item['name'] = $profile['profile'][0]['profile_name'];
                    array_push($profiles, $item);
                }
            }
        }
        return $profiles;
    }

    protected function groupSearch($from, $to, $page) {
        $page = ($page - 1) * 2;
        $termQuery = '{
            "query": {
                "bool": {
                    "must": [
                        {
                            "query_string": {
                            "default_field": "couchbaseDocument.doc.type",
                            "query": "group"
                            }
                        }
                    ],
                "must_not": [],
                "should": []
                }
            },
            "from": ' . $page . ',
            "size": 2,
            "sort": [
                {
                    "created": {
                        "order": "asc"
                    }
                }
            ],
            "filter": {
                "range": {
                    "created": {
                        "gte": ' . $from . ',
                        "lte": ' . $to . '
                    }
                }
            },
            "facets": {}
        }';

        $index = Yii::app()->params['elasticSearchIndex'];
        //       $ch = curl_init("http://es1.hubsrv.com:9200/develop/_search");
        $ch = curl_init("http://es1.hubsrv.com:9200/" . $index . "/_search");
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
        curl_setopt($ch, CURLOPT_POSTFIELDS, $termQuery);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
        $result = curl_exec($ch);
        $result_arr = CJSON::decode($result, true);
        $record_arr = $result_arr['hits']['hits'];
        $new_arr = array();
        $new_arr['total'] = $result_arr['hits']['total'];
        foreach ($record_arr as $return) {
            $temp = array();
            $temp['index'] = $return['_index'];
            $temp['type'] = $return['_type'];
            $temp['id'] = $return['_id'];
            $temp['score'] = $return['_score'];
            $temp['source'] = $return['_source'];
            array_push($new_arr, $temp);
        }

        $new_return_arr = array();
        $new_return_arr['took'] = $result_arr['took'];
        $new_return_arr['timed_out'] = $result_arr['timed_out'];
        $new_return_arr['total'] = $result_arr['hits']['total'];
        $new_return_arr['max_score'] = $result_arr['hits']['max_score'];
        $new_return_arr['hits'] = $new_arr;
        return $new_arr;
    }

    protected function getDomain() {
        $host = $_SERVER['HTTP_HOST'];
        preg_match("/[^\.\/]+\.[^\.\/]+$/", $host, $matches);

        return trim($matches[0]);
    }

    protected function couchBaseConnection() {
        $bucket = Yii::app()->params['couchBaseBucket'];
        $account = Yii::app()->params['couchBaseAccount'];
        $password = Yii::app()->params['couchBasePassword'];
        $node = Yii::app()->params['couchBaseNode'];
        return new Couchbase($node, $account, $password, $bucket, true);
    }

    public function actionGetFromToTime() {
        $groups = array();
        $pages = array();
        if (sizeof($_POST) !== 0) {
            if (strtotime($_POST['from']) !== false && strtotime($_POST['to']) !== false) {
                Yii::app()->session['time'] = $_POST;
                $dataProvider = $this->groupSearch(strtotime(Yii::app()->session['time']['from']), strtotime(Yii::app()->session['time']['to']), 1);
                $ids = array();
                $i = 0;
                foreach ($dataProvider as $return) {
                    if ($i > 0) {
                        $ids[$i] = $return['id'];
                    }
                    $i++;
                }               
                $groups = $this->getGroup($ids);
                $pages = new CPagination($dataProvider['total']);

                $pages->pageSize = 2;
            }
        } else {
            if (isset(Yii::app()->session['time'])) {
                error_log(var_export(Yii::app()->session['time'], true));
                $page_no = $_GET['page'];
                $dataProvider = $this->groupSearch(strtotime(Yii::app()->session['time']['from']), strtotime(Yii::app()->session['time']['to']), $page_no);
                $ids = array();
                $i = 0;
                foreach ($dataProvider as $return) {
                    if ($i > 0) {
                        $ids[$i] = $return['id'];
                    }
                    $i++;
                }
                $groups = $this->getGroup($ids);

                $pages = new CPagination($dataProvider['total']);

                $pages->pageSize = 2;
            }
        }
        $this->render('getFromToTime', array(
            'dataProvider' => $groups,
            'pages' => $pages
        ));
    }

    /**
     * Manages all models.
     */
    public function actionAdmin() {
//		$model=new ShadowListing('search');
//		$model->unsetAttributes();  // clear any default values
//		if(isset($_GET['ShadowListing']))
//			$model->attributes=$_GET['ShadowListing'];
//
//		$this->render('admin',array(
//			'model'=>$model,
//		));
        error_log("aaaa");
        $model = ShadowListing::model()->findByPk(112);
    }

    /**
     * Returns the data model based on the primary key given in the GET variable.
     * If the data model is not found, an HTTP exception will be raised.
     * @param integer $id the ID of the model to be loaded
     * @return ShadowListing the loaded model
     * @throws CHttpException
     */
    public function loadModel($id) {
        $model = ShadowListing::model()->findByPk($id);
        if ($model === null)
            throw new CHttpException(404, 'The requested page does not exist.');
        return $model;
    }

    /**
     * Performs the AJAX validation.
     * @param ShadowListing $model the model to be validated
     */
    protected function performAjaxValidation($model) {
        error_log("aaaaaaaaaaaaaaa");
        if (isset($_POST['ajax']) && $_POST['ajax'] === 'shadow-listing-form') {
            echo CActiveForm::validate($model);
            Yii::app()->end();
        }
    }

}
