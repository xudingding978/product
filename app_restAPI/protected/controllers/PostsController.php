<?php

class PostsController extends Controller {

    const JSON_RESPONSE_ROOT_SINGLE = 'post';
    const JSON_RESPONSE_ROOT_PLURAL = 'posts';

    public function actionIndex() {

        $cb = $this->couchBaseConnection();
        $keys = array('post_1', 'post_2');
        // $keys = array('develop.devbox1/userprofiles/jason_liddiard', 'trendsideas.com/userprofiles/jason_liddiard');
        $results_arr = ($cb->getMulti($keys));
        
       // $results_arr = $cb->get('post_1');
//        $json_values = null;
//
//        foreach ($results_arr as $key => $value){
//            $json_values .= $value;
//        }

        $numItems = count($results_arr);
        $i = 0;
        $result = '{"' . self::JSON_RESPONSE_ROOT_PLURAL . '":[';
        foreach ($results_arr as $key => $value) {
            if (++$i === $numItems) {
                $result .= $value;
            } else {
                $result .= $value . ',';
            }
        }
        $result .= ']}';


        //$results_arr = json_encode(array(self::JSON_RESPONSE_ROOT_PLURAL => $results_arr), JSON_UNESCAPED_UNICODE);

        //echo $this->sendResponse(200, json_encode($results_arr, JSON_UNESCAPED_SLASHES));
        
        echo $this->sendResponse(200, $result);
        
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