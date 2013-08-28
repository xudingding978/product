<<<<<<< HEAD

=======
>>>>>>> 571b9323af3ee01f095a246edb64c5157070ef46
<?php
header("Access-Control-Allow-Origin: *");
header('Content-type: *');

header('Access-Control-Request-Method: *');
header('Access-Control-Allow-Methods: PUT, POST, OPTIONS,GET');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

class CollectionsController extends Controller {

    const JSON_RESPONSE_ROOT_SINGLE = 'collection';
    const JSON_RESPONSE_ROOT_PLURAL = 'collections';

    public function actionIndex() {
        //error_log("aaaaaaaaaaaaaaaaaaaaaa");
        $infoRefresh = explode("?", $_SERVER['REQUEST_URI']);
        $infoRefreshDeep = explode("&", $infoRefresh[1]);
        $profile_id = explode("=", $infoRefreshDeep[1]);
        $collection_id = explode("=", $infoRefreshDeep[2]);
        //error_log(var_export($infoRefreshDeep, true));

        try {
            $cb = $this->couchBaseConnection();
            $docID = $this->getDomain() . "/profiles/" . $profile_id[1];
            $profileOwn = $cb->get($docID);
            $owner = CJSON::decode($profileOwn, true);
            for ($i = 0; $i < sizeof($owner["profile"][0]["collections"]); $i++) {
                if ($owner["profile"][0]["collections"][$i]["id"] === $collection_id[1]) {
                    $title = $owner["profile"][0]["collections"][$i];
                    //  $title = $owner["profile"][0]["collections"][$i]["title"];
                    //error_log(var_export($owner["profile"][0]["collections"][$i],true));
                    //$collectionName = $owner["profile"][0]["collections"][$i]["id"][""];
                    break;
                }
            }
            $title = CJSON::encode($title, true);
            //error_log(var_export($title, true));
            $title = '{"'.self::JSON_RESPONSE_ROOT_PLURAL.'":['.$title.']}';
      //      $response = '{"' . self::JSON_RESPONSE_ROOT_PLURAL . '":' . CJSON::encode($topicSelection, true) . '}';
            
            echo $this->sendResponse(200, $title);
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
    }

    public function actionCreate() {
        try {
            $request_json = file_get_contents('php://input');
            $request_arr = CJSON::decode($request_json, true);
            //    $tempProfile = $request_arr['profile'];
            // $id = $tempProfile['id'];

            $tempCollection = $request_arr['collection'];
            $id = $tempCollection['optional'];
            //error_log("sssssssssssssssssssssss");
            //error_log($id);
            //$cid=$tempCollection['id'];
            //error_log("this is a error");
            //  error_log(var_export($request_arr, true));
            $cb = $this->couchBaseConnection();
            $domain = $this->getDomain();
            $docID = $domain . "/profiles/" . $id;
            $tempMega = $cb->get($docID);
            //error_log(var_export($tempMega, true));


            $mega = CJSON::decode($tempMega, true);
            if (!isset($mega['profile'][0]['collections'])) {
                $mega['profile'][0]['collections'] = array();
            }
//      error_log(var_export($mega['profile'], true));
            array_unshift($mega['profile'][0]['collections'], $tempCollection);
            //$mega['profile'][0]['collections']=$tempCollection;
            //   error_log(var_export($mega['profile']['collections'][0], true));
            // $mega['optional'][0] = $tempCollection ;
            // error_log(var_export($mega['profile']['collections'], true));
            // $tempProfile = $request_arr['profile'];
            //$newmega=$mega['profile']['collections'][0];

            if ($cb->set($docID, CJSON::encode($mega))) {
                $this->sendResponse(204);
            } else {
                echo $this->sendResponse(409, 'A record with id: "' . substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI'] . '/' . '" already exists');
            }




            //$this->sendResponse(200, $request_json);
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
            echo json_decode(file_get_contents('php://input'));
        }
    }

    public function actionRead() {
        //error_log("aaaaaaaaaaaaaaaaaaaaaa");
        echo "aaaaaaaaaaa";
    }

    public function actionUpdate() {

        $temp = explode("/", $_SERVER['REQUEST_URI']);
        $id = $temp [sizeof($temp) - 1];
        $request_json = file_get_contents('php://input');
        $newRecord = CJSON::decode($request_json, true);
        $newRecord['collection']['id'] = $id;
        $owner_id = $newRecord ['collection']['optional'];

        try {
            $cb = $this->couchBaseConnection();
            $docID = $this->getDomain() . "/profiles/" . $owner_id;
            $oldRecord = $cb->get($docID); // get the old profile record from the database according to the docID string
            $oldRecord = CJSON::decode($oldRecord, true);

            $collection_num = 0;

            /*             * *Find the  changed  collection and replace the old vaule in collection with the new record value** */
            foreach ($oldRecord["profile"][0]["collections"] as $record_id) {//assign each collection in profile's collections to record_id
                if ($record_id["id"] == $id) {
                    $oldRecord["profile"][0]["collections"] [$collection_num] = $newRecord["collection"]; //replace the old collection with the new record's collection
                }
                $collection_num++;
            }
            if ($cb->set($docID, CJSON::encode($oldRecord))) {
                $this->sendResponse(204);
            } else {
                $this->sendResponse(500, "some thing wrong");
            }
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
    }

    public function actionDelete() {

        $info = CJSON::decode(file_get_contents('php://input'));
        $infoDel = CJSON::decode($info, true);
        $collectionDel_id = $infoDel[0];
        $collectionDelProfile = $infoDel[1];
        //error_log(var_export($collectionDelProfile,true));
        try {
            $cb = $this->couchBaseConnection();
            $docID = $this->getDomain() . "/profiles/" . $collectionDelProfile;
            $profileOwn = $cb->get($docID);
            $owner = CJSON::decode($profileOwn, true);
            for ($i = 0; $i < sizeof($owner["profile"][0]["collections"]); $i++) {
                if ($owner["profile"][0]["collections"][$i]["id"] === $collectionDel_id) {
                    //error_log(var_export($owner["profile"][0]["collections"][$i],true));
                    array_splice($owner["profile"][0]["collections"], $i, 1);
                }
            }
            if ($cb->set($docID, CJSON::encode($owner))) {
                $this->sendResponse(204);
            } else {
                $this->sendResponse(500, "some thing wrong");
            }
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
        //error_log(var_export($infoDel,true));
    }

    public function actionTest() {
        
    }

}



?>
