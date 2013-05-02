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

        $cb = new Couchbase("cb1.hubsrv.com:8091", "", "Pa55word", "test", true);
        //header('Content-type: application/json');
        //echo json_encode($cb->getMulti(array('post_1','post_2')));
        $keys = array('post_1', 'post_2');
        $results_arr = ($cb->getMulti($keys));
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

        echo $this->sendResponse(200, $result);
    }

}