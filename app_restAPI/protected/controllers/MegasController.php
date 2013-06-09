<?php

header("Access-Control-Allow-Origin: *");
header('Content-type: *');

header('Access-Control-Request-Method: *');
header('Access-Control-Allow-Methods: PUT, POST, OPTIONS,GET');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

class MegasController extends Controller {

    const JSON_RESPONSE_ROOT_SINGLE = 'mega';
    const JSON_RESPONSE_ROOT_PLURAL = 'megas';

    public function actionIndex() {
        //   $this->setImage("http://trendsideas.com/media/article/35013.jpg");

//        $ch = curl_init($url);
//        curl_setopt($ch, CURLOPT_HEADER, 0);
//        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
//        curl_setopt($ch, CURLOPT_BINARYTRANSFER, 1);
//        $data = curl_exec($ch);


//        $temp = explode("/", $_SERVER['REQUEST_URI']);
//        $id = $temp [sizeof($temp) - 1];
//
//        echo $this->sendResponse(200, $id);

        try {
            $settings['log.enabled'] = true;
            $sherlock = new Sherlock\Sherlock($settings);
            $sherlock->addNode(Yii::app()->params['elasticSearchNode']);
//Build a new search request
            $request = $sherlock->search();
//populate a Term query to start
            $termQuery = Sherlock\Sherlock::queryBuilder()
                    ->QueryString()
                    ->fields(["couchbaseDocument.doc.keywords"])
                    ->query("photo OR article")
                    ->boost(2.5);
            $request->index(Yii::app()->params['elasticSearchIndex'])
                    ->type("couchbaseDocument")
                    ->from(0)
                    ->to(10)
                    ->size(100)
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
//Execute the search and return results
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
//            $cb = $this->couchBaseConnection();           
//            $reponse_1 = $cb->get(substr($_SERVER['HTTP_HOST'], 4) . "/" . '889131370378289753');
//            $reponse_2 = $cb->get(substr($_SERVER['HTTP_HOST'], 4) . "/" . '9717991370317029955');
//            $results = '{"' . self::JSON_RESPONSE_ROOT_PLURAL . '":[' . $reponse_1 . "," . $reponse_2;
//            $results .= ']}';
//            echo $this->sendResponse(200, $results);
//        } catch (Exception $exc) {
//            echo $exc->getTraceAsString();
//        }
    }

    public function actionCreate() {
        $request_json = file_get_contents('php://input');
        $request_arr = CJSON::decode($request_json, true);
        $request_arr["mega"]["id"] = str_replace('test', '', $request_arr["mega"]["id"]);
        $path = 'this_is/folder_path/';
//      $s3response = $this->photoSavingToS3($request_arr, $path);
        $response = "ok";
        error_log(var_export($request_arr, true));
//      if ($s3response) {
// $fileName = explode('.', $request_arr['photo']['photo_title'])[0];
//           $request_arr["mega"]['photos'][0]['image_url'] = "https://s3-ap-southeast-2.amazonaws.com/" . $path . $request_arr["mega"]['photos'][0]['photo_title'];
        $request_arr["mega"]['type'] = "photos";
        $request_arr["mega"]['photos'][0]['id'] = $request_arr["mega"]["id"];
//        try {
//            $cb = $this->couchBaseConnection();
//            if ($cb->add(substr($_SERVER['HTTP_HOST'], 4) . '/' . $request_arr["mega"]["id"], CJSON::encode($request_arr["mega"]))) {
//                echo $this->sendResponse(200, var_dump($request_arr));
//            } else {
//                echo $this->sendResponse(409, 'A record with id: "' . substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI'] . '/' . '"rrrrr  rrrr already exists');
//            }
//        } catch (Exception $exc) {
//            echo $exc->getTraceAsString();
//            echo json_decode(file_get_contents('php://input'));
//        }
//        } else {
//            echo $this->sendResponse(409, 'A record with id: "' . substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI'] . '/' . '" already exists');
//        }

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
            $cb = $this->couchBaseConnection();
            $temp = explode("/", $_SERVER['REQUEST_URI']);
            $id = $temp [sizeof($temp) - 1];
            $reponse = $cb->get(substr($_SERVER['HTTP_HOST'], 4) . "/" . $id);
            $result = '{"' . self::JSON_RESPONSE_ROOT_SINGLE . '":' . $reponse . '}';
            echo $this->sendResponse(200, $result);
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

    public function photoSavingToS3($request_arr, $path) {
        $cb = new Couchbase("cb1.hubsrv.com:8091", "", "", "default", true);
        $key = explode(".", $_SERVER['HTTP_HOST']);
        $key = $key[1] . '.' . $key[2];
        $result = $cb->get($key);
        $result_arr = CJSON::decode($result, true);
        $response = false;
        error_log(var_export($request_arr ["mega"]['photos'][0], true));
        $data = $this->getInputData($request_arr ["object"]['photos'][0]['photo_type'], $request_arr ["object"]['photos'][0]['photo_url']);
        $client = Aws\S3\S3Client::factory(
                        $result_arr["providers"]["S3Client"]
        );
//        if ($client->doesObjectExist('hubstar-dev', $path . $request_arr ["object"]['photos'][0]['photo_title'])) {
//            $response = false;
//        } else {
//            $client->putObject(array(
//                'Bucket' => "hubstar-dev",
//                'Key' => $path . $request_arr ["object"]['photos'][0]['photo_title'],
//                'Body' => $data,
//                'ACL' => 'public-read'
//            ));
//            $response = true;
//        }



        return $response;
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

    public function putImagetoS3($url, $data) {
        $cb = new Couchbase("cb1.hubsrv.com:8091", "", "", "default", true);
        $key = explode(".", $_SERVER['HTTP_HOST']);
        $key = $key[1] . '.' . $key[2];
        $result = $cb->get($key);
        $result_arr = CJSON::decode($result, true);
        $client = Aws\S3\S3Client::factory(
                        $result_arr["providers"]["S3Client"]
        );
        $client->putObject(array(
            'Bucket' => "hubstar-dev",
            'Key' => $url,
            'Body' => $data,
            'ACL' => 'public-read'
        ));
    }

}

?>
