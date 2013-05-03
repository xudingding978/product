<?php

class PostsController extends Controller {

    const JSON_RESPONSE_ROOT_SINGLE = 'post';
    const JSON_RESPONSE_ROOT_PLURAL = 'posts';

    public function actionIndex() {

        $cb = $this->couchBaseConnection();
       $keys = array('post_1', 'post_2');
       // $keys = array('develop.devbox1/userprofiles/jason_liddiard', 'trendsideas.com/userprofiles/jason_liddiard');
        $results_arr = ($cb->getMulti($keys));
        
//        foreach ($results_arr as $key => $value){
//            $value = CJSON::decode($value);
//        }
         $results_arr = json_encode(array(self::JSON_RESPONSE_ROOT_PLURAL => $results_arr),JSON_UNESCAPED_UNICODE);
       
        echo $this->sendResponse(200, $results_arr);       
    }
        /**
     * This is the action to handle external exceptions.
     */
    public function actionError() {
        if ($error = Yii::app()->errorHandler->error) {
            if (Yii::app()->request->isAjaxRequest)
                echo $error['message'];
            else
                $this->render('error', $error);
        }
    }

}