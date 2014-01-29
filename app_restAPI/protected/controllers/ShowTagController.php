<?php

header("Access-Control-Allow-Origin: *");
header('Content-type: *');
header('Access-Control-Request-Method: *');
header('Access-Control-Allow-Methods: PUT, POST, OPTIONS, GET, DELETE');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

class ShowTagController extends Controller {

    const JSON_RESPONSE_ROOT_SINGLE = 'tag';
    const JSON_RESPONSE_ROOT_PLURAL = 'tags';

    public function actionSaveTag() {
        $request_array = CJSON::decode(file_get_contents('php://input'));
        $request_array = CJSON::decode($request_array);
        $selectedProfile = $request_array[0]; // it is the selected profile
        $product_name = $request_array[1]; // it is the product name
        $desc = $request_array[2]; // it is the descript of the  product
        $pic_x = $request_array[3]; // it is the x axias of the picture 
        $pic_y = $request_array[4];
        $linkAddress = $request_array[5]; // it is the content link  address
        $time_stamp = $request_array[6]; // it is create time
        $photo_id = $request_array[7];  //selected photo's id
        $tag_id = $request_array[8];  //tag id : consists of time and photo id
        $linkto_click_count = 0;
        $tag_approve = false;
        try {
            $docIDDeep = $this->getDomain() . "/" . $photo_id; //$id  is the page owner
            $cb = $this->couchBaseConnection();
            $oldDeep = $cb->get($docIDDeep); // get the old user record from the database according to the docID string
            $oldRecordDeep = CJSON::decode($oldDeep, true);

            //create the new tag
            $tag = array();
            $tag["tag_id"] = $tag_id;
            $tag["profile_id"] = $selectedProfile;
            $tag["product_name"] = $product_name;
            $tag["desc"] = $desc;
            $tag["pic_x"] = $pic_x;
            $tag["pic_y"] = $pic_y;
            $tag["linkto"] = $linkAddress;
            $tag["link_to_click_count"] = $linkto_click_count;
            $tag["tag_time"] = $time_stamp;
            $tag["tag_approved"] = $tag_approve;
            //put the tag into the end of tags array
            if (!isset($oldRecordDeep["photo"][0]['tags'])) {
                $oldRecordDeep["photo"][0]['tags'] =  array();
                array_unshift($oldRecordDeep["photo"][0]['tags'], $tag);
            } else {
                array_unshift($oldRecordDeep["photo"][0]['tags'], $tag);
            }


            if ($cb->set($docIDDeep, CJSON::encode($oldRecordDeep))) {
                $this->sendResponse(200, CJSON::encode($oldRecordDeep));
            } else {
                echo $this->sendResponse(409, 'A record with id: "' . substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI'] . '/' . '" already exists');
            }
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
            echo json_decode(file_get_contents('php://input'));
        }
    }
}

?>
