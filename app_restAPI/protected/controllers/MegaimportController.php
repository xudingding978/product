<?php

header("Access-Control-Allow-Origin: *");
header('Content-type: *');
header('Access-Control-Request-Method: *');
header('Access-Control-Allow-Methods: PUT, POST, OPTIONS,GET');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

class MegaimportController extends Controller {

    const JSON_RESPONSE_ROOT_SINGLE = 'mega';
    const JSON_RESPONSE_ROOT_PLURAL = 'megas';

    public function actionIndex() {

        $this->setImage("trendsideas.com/media/article/original/35013.jpg");
        try {
            $settings['log.enabled'] = true;
            $sherlock = new Sherlock\Sherlock($settings);
            $sherlock->addNode(Yii::app()->params['elasticSearchNode']);
            $request = $sherlock->search();

            $termQuery = Sherlock\Sherlock::queryBuilder()
                    ->QueryStringMultiField()
                    ->fields(["couchbaseDocument.doc.keywords", "couchbaseDocument.doc.desc"])
                    ->query("work kitchen")
                    ->boost(2.5);

            $request->index(Yii::app()->params['elasticSearchIndex'])
                    ->type("couchbaseDocument")
                    ->from(0)
                    ->to(10)
                    ->size(10)
                    ->query($termQuery);
            $response = $request->execute();
            $results = '{"' . self::JSON_RESPONSE_ROOT_PLURAL . '":[';
            $i = 0;
            foreach ($response as $hit) {
                $results .= CJSON::encode($hit['source']['doc']);
                if (++$i < count($response)) {
                    $results .= ',';
                }
            }
            $results .= ']}';

            echo $this->sendResponse(200, $results);
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();

            $message = $exc->getTraceAsString();
            $this->writeToLog('/home/devbox/NetBeansProjects/test/error.log', $message);

//            $this->writeToLog("/home/devbox/NetBeansProjects/test/AddImage_unsucces.log", $message);
        }
    }

// add new obj id to image urls;
    public function modifyArrayProperty($request_arr, $id) {
        $request_arr["id"] = $id;
//        $request_arr["object_image_url"] = str_replace("object_id", $id, $request_arr["object_image_url"]);

        $type = $request_arr['type'];
        $request_arr[$type][0]['id'] = $id;

//        $request_arr[$type][0]['photo_image_url'] = str_replace("object_id", $id, $request_arr[$type][0]['photo_image_url']);
//        $request_arr[$type][0]['photo_image_original_url'] = str_replace("object_id", $id, $request_arr[$type][0]['photo_image_original_url']);
//        $request_arr[$type][0]['photo_image_hero_url'] = str_replace("object_id", $id, $request_arr[$type][0]['photo_image_hero_url']);
//        $request_arr[$type][0]['photo_image_thumbnail_url'] = str_replace("object_id", $id, $request_arr[$type][0]['photo_image_thumbnail_url']);
//        $request_arr[$type][0]['photo_image_preview_url'] = str_replace("object_id", $id, $request_arr[$type][0]['photo_image_preview_url']);

        return $request_arr;
    }
    // Method is called on a POST request to the megaimport controller
    public function actionCreate() {
        $request_json = file_get_contents('php://input');
        $request_arr = CJSON::decode($request_json, true);

        if (isset($request_arr['id'])) {
            $id = 'trendsideas.com/' . $request_arr['id'];
            if ($request_arr['type'] == 'profile') {
                $id = 'trendsideas.com/profiles/' . $request_arr['id'];
            }
            try {
                $cb = $this->couchBaseConnection();
                if ($cb->add($id, CJSON::encode($request_arr))) {
                    $response = 'Successfully added doc ' . $id . ' to Couchbase';
                } else {

                }
            } catch (Exception $exc) {
                echo $exc->getTraceAsString();
                echo json_decode(file_get_contents('php://input'));

                $message = file_get_contents('php://input');
                $this->writeToLog('/home/devbox/NetBeansProjects/test/error.log', $message);
//            $this->writeToLog("/home/devbox/NetBeansProjects/test/AddImage_unsucces.log", $message);
            }
        } else {
             $response = 'No ID found for the object in the POST request.';
        }

        $statusHeader = 'HTTP/1.1 ' . 200 . ' ' . $this->getStatusCodeMessage(200);
        header($statusHeader);
        header('Content-type: *');
        header("Access-Control-Allow-Origin: *");
        header('Access-Control-Request-Method: *');
        header('Access-Control-Allow-Methods: PUT, POST, OPTIONS, GET');
        header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

        echo $response;

        Yii::app()->end();
    }

    public function actionRead() {
        try {
            $cb = $this->couchBaseConnection_production();
            $temp = explode("/", $_SERVER['REQUEST_URI']);
            $id = $temp [sizeof($temp) - 1];
            echo $this->sendResponse(200, $id);
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
    }

    public function actionUpdate() {
        try {
            
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
    }

    public function actionDelete() {
        try {
            
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
    }

    public function actionTest() {

        header('Content-type: application/json');

        echo CJSON::encode("dddddddd");
    }

    public function actionOptions() {

        $statusHeader = 'HTTP/1.1 ' . 200 . ' ' . $this->getStatusCodeMessage(200);
        header($statusHeader);
// Set the content type
        header('Content-type:*');
// Set the Access Control for permissable domains
        header("Access-Control-Allow-Origin:*");
        header('Access-Control-Request-Method:*');
        header('Access-Control-Allow-Methods:*');
        header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

        echo "";
        Yii::app()->end();


//                echo $this->sendResponse(200, "OK");
    }

    public function getInputData($inputDataType, $inputData) {
        $tempInput = "";
        if ($inputDataType == "image/jpeg") {
            $tempInput = str_replace('data:image/jpeg;base64,', '', $inputData);
        } elseif ($inputDataType == "application/pdf") {
            $tempInput = str_replace('data:application/pdf;base64,', '', $inputData);
        } elseif ($inputDataType == "image/png") {
            $tempInput = str_replace('data:image/png;base64,', '', $inputData);
        } elseif ($inputDataType == "image/gif") {
            $tempInput = str_replace('data:image/gif;base64,', '', $inputData);
        }
        $data = base64_decode($tempInput);
        return $data;
    }

    public function setImage($url) {

        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_HEADER, 0);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_BINARYTRANSFER, 1);
        $data = curl_exec($ch);

        if (is_null($data) || strpos($data, '404') || empty($data)) {
            $my_file = '/home/devbox/NetBeansProjects/test/error.log';
            $handle = fopen($my_file, 'a') or die('Cannot open file:  ' . $my_file);
            $output = "\n" . 'New data ';
            $output = "\n" . $url . ' has error';
            fwrite($handle, $output);
            fclose($handle);
        } else {
            $my_file = '/home/devbox/NetBeansProjects/test/sucess.log';
            $handle = fopen($my_file, 'a') or die('Cannot open file:  ' . $my_file);
            $output = "\n" . $url . ' is create';
            fwrite($handle, $output);
            fclose($handle);
            $this->putImagetoS3($url, $data);
        }
    }

    public function setCouchBaseRecord($record, $id = null) {
        if (is_null($id)) {
            $id = rand(99999999999999, 999999999999999);
        }
        try {
            $cb = $this->couchBaseConnection_production();

            $url = substr($_SERVER['HTTP_HOST'], 4) . '/' . $id;
            if ($cb->add($url, CJSON::encode($record))) {
                $my_file = '/home/devbox/NetBeansProjects/test/addingtocouchbase_sucess.log';
                $handle = fopen($my_file, 'a') or die('Cannot open file:  ' . $my_file);
                $output = "\n" . $url . ' is create';
                fwrite($handle, $output);
                fclose($handle);
//      echo $this->sendResponse(200, var_dump($record));
            } else {
                $my_file = '/home/devbox/NetBeansProjects/test/addingtocouchbase_error.log';
                $handle = fopen($my_file, 'a') or die('Cannot open file:  ' . $my_file);
                $output = "\n" . 'New data ';
                $output = "\n" . $url . ' has error';
                fwrite($handle, $output);
                fclose($handle);
//    echo $this->sendResponse(409, 'A record with id: "' . substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI'] . '/' . '"rrrrr  rrrr already exists');
            }
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
            echo json_decode(file_get_contents('php://input'));

            $message = file_get_contents('php://input');
            $this->writeToLog("/home/devbox/NetBeansProjects/test/AddImage_unsucces.log", $message);
        }
    }

    protected function writeToLog($fileName, $content) {
//   $my_file = '/home/devbox/NetBeansProjects/test/addingtocouchbase_success.log';
        $handle = fopen($fileName, 'a') or die('Cannot open file:  ' . $fileName);
        $output = "\n" . $content;
        fwrite($handle, $output);
        fclose($handle);

        unset($fileName, $content, $handle, $output);
    }

}

?>
