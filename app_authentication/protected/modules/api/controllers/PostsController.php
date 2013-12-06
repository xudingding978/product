<?php

class PostsController extends Controller {

    const JSON_RESPONSE_ROOT_SINGLE = 'post';
    const JSON_RESPONSE_ROOT_PLURAL = 'posts';

    public function actionList() {
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
        //$this->sendResponse(200, $cb->getMulti(array('0644399d2b4abe892fdbd7e7be5c1ed5')));
    }

}

?>
