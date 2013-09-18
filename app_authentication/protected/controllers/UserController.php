<?php

class UserController extends Controller {

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
            'postOnly + delete', // we only allow deletion via POST request
        );
    }

    /**
     * Specifies the access control rules.
     * This method is used by the 'accessControl' filter.
     * @return array access control rules
     */
    public function accessRules() {
        return array(
        );
    }

    /**
     * Displays a particular model.
     * @param integer $id the ID of the model to be displayed
     */
    public function actionView($id) {
        if (Yii::app()->user->id == $id) {
//            $user = User::model()->findByPk($id);
//            //$userprofile = UserProfile::model()->findAllByAttributes(array('USER_REC_ID'=>$id));
//            $userprofile = UserProfile::model()->findByPk(35);
            $this->render('view', array(
//                'user' => $user,
//                'userprofile' => $userprofile,
                'model' => $this->loadModel($id),
            ));
        } else {
            $this->redirect(array('view', 'id' => Yii::app()->user->id));
        }
    }

    /**
     * Creates a new model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     */
    public function actionCreate() {


        // Uncomment the following line if AJAX validation is needed
        // $this->performAjaxValidation($model);
        $model = new User;
        if (isset($_POST['User'])) {

            $model->attributes = $_POST['User'];
            $model->REC_DATETIME = new CDbExpression('NOW()');
            $model->REC_TIMESTAMP = new CDbExpression('NOW()');
            $model->TENANT_REC_ID = "1";
            $model->PWD_HASH = $_POST['User']['PWD_HASH'];
            $model->COUCHBASE_ID = strval(rand(9999999999, 99999999999));
            $cb = new Couchbase("cb1.hubsrv.com:8091", "Administrator", "Pa55word", "production", true);
            $rand_id = $model->COUCHBASE_ID;
            $temp = $this->getMega();
            $temp["id"] = $rand_id;
            $temp["user"][0]["id"] = $rand_id;
            $temp["created"] = $this->getCurrentUTC();
            $temp["user"][0]["photo_url"] = "https://s3-ap-southeast-2.amazonaws.com/develop.devbox/profile_pic/default/defaultpic1.jpg";
            $temp["user"][0]["photo_url_large"] = "https://s3-ap-southeast-2.amazonaws.com/develop.devbox/profile_pic/default/defaultpic1.jpg";
            $temp["user"][0]["display_name"] = $model->USER_NAME;
            $temp["user"][0]["email"] = $model->EMAIL_ADDRESS;
            $temp["user"][0]["first_name"] = $model->FIRST_NAME;
            $temp["user"][0]["last_name"] = $model->LAST_NAME;

           if( $cb->add(substr($_SERVER['HTTP_HOST'], strpos($_SERVER['HTTP_HOST'], '.') + 1) . "/users/" . $rand_id, CJSON::encode($temp)))
           {
            Yii::app()->session['newUser'] = "new";

            if ($model->save()) {


                $identity = new CommonUserIdentity($model->USER_NAME, $model->PWD_HASH);
                $identity->authenticate();
                Yii::app()->user->login($identity, 0);

                if (Yii::app()->session['newUser'] == "new") {

                    $this->render('welcome');
                    unset(Yii::app()->session['newUser']);
                } else {

                    $this->render('close');
                }
            }
        }
        $this->render('create', array(
            'model' => $model,
        ));
        }
    }

    /**
     * Updates a particular model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param integer $id the ID of the model to be updated
     */
    public function actionUpdate($id) {

        $model = $this->loadModel($id);

        if (isset($_POST['User'])) {
            $model->attributes = $_POST['User'];
            $model->REC_TIMESTAMP = new CDbExpression('NOW()');
            if ($model->save()) {
                $this->redirect(array('view', 'id' => $model->REC_ID));
            }
        }
        if (Yii::app()->user->id == $id) {
            $this->render('update', array(
                'model' => $model,
            ));
        } else {
            $this->redirect(array('update', 'id' => Yii::app()->user->id));
        }

        // Uncomment the following line if AJAX validation is needed
        // $this->performAjaxValidation($model);
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

        $dataProvider = new CActiveDataProvider('User');
        $this->render('index', array(
            'dataProvider' => $dataProvider,
        ));
    }

    /**
     * Manages all models.
     */
    public function actionAdmin() {
        $model = new User('search');
        $model->unsetAttributes();  // clear any default values
        if (isset($_GET['User']))
            $model->attributes = $_GET['User'];

        $this->render('admin', array(
            'model' => $model,
        ));
    }

    /**
     * Returns the data model based on the primary key given in the GET variable.
     * If the data model is not found, an HTTP exception will be raised.
     * @param integer $id the ID of the model to be loaded
     * @return User the loaded model
     * @throws CHttpException
     */
    public function loadModel($id) {
        $model = User::model()
                ->findByPk($id);
        if ($model === null)
            throw new CHttpException(404, 'The requested page does not exist.');
        return $model;
    }

    /**
     * Performs the AJAX validation.
     * @param User $model the model to be validated
     */
    protected function performAjaxValidation($model) {
        if (isset($_POST['ajax']) && $_POST['ajax'] === 'user-form') {
            echo CActiveForm::validate($model);
            Yii::app()->end();
        }
    }

    public function getMega() {
        $mega = '{
  "id": "",
  "type": "user",
  "accessed": null,
  "active_yn": null,
  "article_id": null,
  "category": null,
  "created": null,
  "creator": "",
  "deleted": null,
  "domains": null,
  "editors": null,
  "follower_count": null,
  "followers": null,
  "following": null,
  "following_count": null,
  "country": null,
  "region": null,
  "geography": null,
  "indexed_yn": null,
  "object_image_linkto": null,
  "object_image_url": null,
  "object_title": null,
  "owner_profile_pic": null,
  "owner_title": null,
  "owner_url": null,
  "owners": null,
  "status_id": null,
  "updated": null,
  "uri_url": null,
  "view_count": null,
  "keywords": "",
  "photo": [],
  "user": []
}';
        return json_decode($mega, true);
    }

    public function getCurrentUTC() {

        $datetime = date("Y-m-d H:i:s");
        $time_string = strtotime($datetime);
        return $time_string;
    }

    public function actionTest() {
        
        error_log("aaaaaaaaaaaaaaaa");
      $this->render('test');
    }


}

