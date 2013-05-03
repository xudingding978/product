<?php

class SiteController extends Controller {

    const JSON_RESPONSE_ROOT_SINGLE = 'post';
    const JSON_RESPONSE_ROOT_PLURAL = 'posts';

    /**
     * This is the default 'index' action that is invoked
     * when an action is not explicitly requested by users.
     */
    public function actionIndex() {
        // renders the view file 'protected/views/site/index.php'
        // using the default layout 'protected/views/layouts/main.php'
        // $this->layout = '//layouts/api';
        //$this->render('index');
//        $payload = '{"posts":{ "id":"1", "title":"My First Post"}}';
//        $this->sendResponse(200, $payload);

//        $cb = $this->couchBaseConnection();
//        $keys = array('post_1', 'post_2');
//        //$keys = array('develop.devbox1/userprofiles/jason_liddiard', 'trendsideas.com/userprofiles/jason_liddiard');
//        $results_arr = ($cb->getMulti($keys));
//        
//        foreach ($results_arr as $key => $value){
//            $value = CJSON::decode($value);
//        }
//         $results_arr = CJSON::encode(array(self::JSON_RESPONSE_ROOT_PLURAL => $results_arr));
//       
////        $numItems = count($results_arr);
////        $i = 0;
////        $result = '{"' . self::JSON_RESPONSE_ROOT_PLURAL . '":[';
////        foreach ($results_arr as $key => $value) {
////            if (++$i === $numItems) {
////                $result .= $value;
////            } else {
////                $result .= $value . ',';
////            }
////        }
////        $result .= ']}';
//
//        echo $this->sendResponse(200, $results_arr);       
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
    
    public function actionTest() {
        echo 'test';
    }
}