<?php

header("Access-Control-Allow-Origin: *");
header('Content-type: *');

header('Access-Control-Request-Method: *');
header('Access-Control-Allow-Methods: PUT, POST, OPTIONS,GET');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

class CommentsController extends Controller {

    const JSON_RESPONSE_ROOT_SINGLE = 'comment';
    const JSON_RESPONSE_ROOT_PLURAL = 'comments';

    public function actionIndex() {
        $this->sendResponse(204, "aaaaaaaaaaaaa");
    }

    public function actionDeletePhotoComment() {
        $request_array = CJSON::decode(file_get_contents('php://input'));
        $request_array = CJSON::decode($request_array);
        $pic_id = $request_array[0]; // it is the  login in user
        $id = $request_array[1];

        try {
            $docIDDeep = $this->getDomain() . "/" . $pic_id; //$id  is the page owner
            $cb = $this->couchBaseConnection();
            $oldDeep = $cb->get($docIDDeep); // get the old user record from the database according to the docID string
            $oldRecordDeep = CJSON::decode($oldDeep, true);
            for ($i = 0; $i < sizeof($oldRecordDeep['comments']); $i++) {
                $uid = $oldRecordDeep['comments'][$i]["message_id"];
                if ($uid === $id) {
                    array_splice($oldRecordDeep['comments'], $i, 1);
                    $oldRecordDeep['comment_count'] = sizeof($oldRecordDeep['comments']);
                    break;
                }
            }
            if ($cb->set($docIDDeep, CJSON::encode($oldRecordDeep))) {
                $this->sendResponse(204);
            }
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
            echo json_decode(file_get_contents('php://input'));
        }
    }

    public function actionDeleteProfileComment() {
        $request_array = CJSON::decode(file_get_contents('php://input'));
        $request_array = CJSON::decode($request_array);
        $profile_id = $request_array[0]; // it is the  login in user
        $id = $request_array[1];

        try {
            $docIDDeep = $this->getDomain() . "/profiles/" . $profile_id; //$id  is the page owner
            $cb = $this->couchBaseConnection();
            $oldDeep = $cb->get($docIDDeep); // get the old user record from the database according to the docID string
            $oldRecordDeep = CJSON::decode($oldDeep, true);
            for ($i = 0; $i < sizeof($oldRecordDeep['comments']); $i++) {
                $uid = $oldRecordDeep['comments'][$i]["message_id"];
                if ($uid === $id) {
                    array_splice($oldRecordDeep['comments'], $i, 1);
                     $oldRecordDeep['comment_count'] = sizeof($oldRecordDeep['comments']);
                    break;
                }
            }
            if ($cb->set($docIDDeep, CJSON::encode($oldRecordDeep))) {
                $this->sendResponse(204);
            }
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
            echo json_decode(file_get_contents('php://input'));
        }
    }

    public function actionDeleteArticleComment() {
        $request_array = CJSON::decode(file_get_contents('php://input'));
        $request_array = CJSON::decode($request_array);
        $article_id = $request_array[0]; // it is the  login in user
        $id = $request_array[1];

        try {
            $docIDDeep = $this->getDomain() . "/" . $article_id; //$id  is the page owner
            $cb = $this->couchBaseConnection();
            $oldDeep = $cb->get($docIDDeep); // get the old user record from the database according to the docID string
            $oldRecordDeep = CJSON::decode($oldDeep, true);
            for ($i = 0; $i < sizeof($oldRecordDeep['comments']); $i++) {
                $uid = $oldRecordDeep['comments'][$i]["message_id"];
                if ($uid === $id) {
                    array_splice($oldRecordDeep['comments'], $i, 1);
                     $oldRecordDeep['comment_count'] =sizeof($oldRecordDeep['comments']);
                    break;
                }
            }
            if ($cb->set($docIDDeep, CJSON::encode($oldRecordDeep))) {
                $this->sendResponse(204);
            }
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
            echo json_decode(file_get_contents('php://input'));
        }
    }
    
    public function actionDeleteVideoComment() {
        $request_array = CJSON::decode(file_get_contents('php://input'));
        $request_array = CJSON::decode($request_array);
        $video_id = $request_array[0]; // it is the  login in user
        $id = $request_array[1];

        try {
            $docIDDeep = $this->getDomain() . "/" . $video_id; //$id  is the page owner
            $cb = $this->couchBaseConnection();
            $oldDeep = $cb->get($docIDDeep); // get the old user record from the database according to the docID string
            $oldRecordDeep = CJSON::decode($oldDeep, true);
            for ($i = 0; $i < sizeof($oldRecordDeep['comments']); $i++) {
                $uid = $oldRecordDeep['comments'][$i]["message_id"];
                if ($uid === $id) {
                    array_splice($oldRecordDeep['comments'], $i, 1);
                     $oldRecordDeep['comment_count'] = sizeof($oldRecordDeep['comments']);
                    break;
                }
            }
            if ($cb->set($docIDDeep, CJSON::encode($oldRecordDeep))) {
                $this->sendResponse(204);
            }
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
            echo json_decode(file_get_contents('php://input'));
        }
    }
    
    public function actionUpdatePhotoComment() {
        $request_array = CJSON::decode(file_get_contents('php://input'));
        $request_array = CJSON::decode($request_array);
        $pic_id = $request_array[0]; // it is the  login in user
        $id = $request_array[1];
        $content = $request_array[2];

        try {
            $docIDDeep = $this->getDomain() . "/" . $pic_id; //$id  is the page owner
            $cb = $this->couchBaseConnection();
            $oldDeep = $cb->get($docIDDeep); // get the old user record from the database according to the docID string
            $oldRecordDeep = CJSON::decode($oldDeep, true);
            for ($i = 0; $i < sizeof($oldRecordDeep['comments']); $i++) {
                $uid = $oldRecordDeep['comments'][$i]["message_id"];
                if ($uid === $id) {
                    $oldRecordDeep['comments'][$i]["content"] = $content;
                    break;
                }
            }
            if ($cb->set($docIDDeep, CJSON::encode($oldRecordDeep))) {
                $this->sendResponse(204);
            }
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
            echo json_decode(file_get_contents('php://input'));
        }
    }

    public function actionUpdateProfileComment() {
        $request_array = CJSON::decode(file_get_contents('php://input'));
        $request_array = CJSON::decode($request_array);
        $profile_id = $request_array[0]; // it is the  login in user
        $id = $request_array[1];
        $content = $request_array[2];

        try {
            $docIDDeep = $this->getDomain() . "/profiles/" . $profile_id; //$id  is the page owner
            $cb = $this->couchBaseConnection();
            $oldDeep = $cb->get($docIDDeep); // get the old user record from the database according to the docID string
            $oldRecordDeep = CJSON::decode($oldDeep, true);
            for ($i = 0; $i < sizeof($oldRecordDeep['comments']); $i++) {
                $uid = $oldRecordDeep['comments'][$i]["message_id"];
                if ($uid === $id) {
                    $oldRecordDeep['comments'][$i]["content"] = $content;
                    break;
                }
            }
            if ($cb->set($docIDDeep, CJSON::encode($oldRecordDeep))) {
                $this->sendResponse(204);
            }
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
            echo json_decode(file_get_contents('php://input'));
        }
    }

    public function actionUpdateArticleComment() {
        $request_array = CJSON::decode(file_get_contents('php://input'));
        $request_array = CJSON::decode($request_array);
        $article_id = $request_array[0]; // it is the  login in user
        $id = $request_array[1];
        $content = $request_array[2];

        try {
            $docIDDeep = $this->getDomain() . "/" . $article_id; //$id  is the page owner
            $cb = $this->couchBaseConnection();
            $oldDeep = $cb->get($docIDDeep); // get the old user record from the database according to the docID string
            $oldRecordDeep = CJSON::decode($oldDeep, true);
            for ($i = 0; $i < sizeof($oldRecordDeep['comments']); $i++) {
                $uid = $oldRecordDeep['comments'][$i]["message_id"];
                if ($uid === $id) {
                    $oldRecordDeep['comments'][$i]["content"] = $content;
                    break;
                }
            }
            if ($cb->set($docIDDeep, CJSON::encode($oldRecordDeep))) {
                $this->sendResponse(204);
            }
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
            echo json_decode(file_get_contents('php://input'));
        }
    }
    
    public function actionUpdateVideoComment() {
        $request_array = CJSON::decode(file_get_contents('php://input'));
        $request_array = CJSON::decode($request_array);
        $video_id = $request_array[0]; // it is the  login in user
        $id = $request_array[1];
        $content = $request_array[2];

        try {
            $docIDDeep = $this->getDomain() . "/" . $video_id; //$id  is the page owner
            $cb = $this->couchBaseConnection();
            $oldDeep = $cb->get($docIDDeep); // get the old user record from the database according to the docID string
            $oldRecordDeep = CJSON::decode($oldDeep, true);
            for ($i = 0; $i < sizeof($oldRecordDeep['comments']); $i++) {
                $uid = $oldRecordDeep['comments'][$i]["message_id"];
                if ($uid === $id) {
                    $oldRecordDeep['comments'][$i]["content"] = $content;
                    break;
                }
            }
            if ($cb->set($docIDDeep, CJSON::encode($oldRecordDeep))) {
                $this->sendResponse(204);
            }
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
            echo json_decode(file_get_contents('php://input'));
        }
    }
    
    public function actionCreate() {
        $request_json = file_get_contents('php://input');
        $newRecord = CJSON::decode($request_json, true);
        $typeAndID = $newRecord['comment']['optional'];
     //   error_log(var_export($newRecord, true));
        $typeAndID = explode("/", $typeAndID);
        $docID = $this->getDocId($typeAndID[0], $typeAndID[1]);
        $cb = $this->couchBaseConnection();
        $oldRecord_arr = $cb->get($docID);
        $oldRecord = CJSON::decode($oldRecord_arr, true);
        if (!isset($oldRecord['comments'])) {
            $oldRecord['comments'] = array();
            $oldRecord['comment_count'] = 1;
        }
        else
        {
             $profile_comment_num =  sizeof($oldRecord['comments']);
             $oldRecord['comment_count'] = $profile_comment_num+1;  //profile, video, article, photo coment_count setting
        }
        array_unshift($oldRecord['comments'], $newRecord['comment']);
        if ($cb->set($docID, CJSON::encode($oldRecord))) {
            $this->sendResponse(204);
        } else {
            $this->sendResponse(500, "some thing wrong");
        }
    }

    public function actionRead() {
        
    }

    public function actionUpdate() {
        $this->sendResponse(204);
    }

    public function actionDelete() {
        
    }

    public function actionTest() {
        
    }

}

?>
