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
        //   $this->setImage("http://trendsideas.com/media/article/35013.jpg");
        $this->setImage("trendsideas.com/media/article/original/35013.jpg");
        try {
            $settings['log.enabled'] = true;
            $sherlock = new Sherlock\Sherlock($settings);
            $sherlock->addNode(Yii::app()->params['elasticSearchNode']);
//Build a new search request
            $request = $sherlock->search();

//populate a Term query to start
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
        }

    }
    public function actionCreate() {
        $request_json = file_get_contents('php://input');
        $request_arr = CJSON::decode($request_json, true);

        $id = $this->getNewID();
        $request_arr["id"] = $id;
        $response = "fail";
        $type = $request_arr['type'];
        $request_arr[$type][0]['id'] = $id;
        $url = substr($_SERVER['HTTP_HOST'], 4) . '/' . $request_arr["id"];

        try {
            $cb = $this->couchBaseConnection();
            
            if ($cb->add($url, CJSON::encode($request_arr))) {
                $response="ok";
            } else {
                $my_file = '/home/devbox/NetBeansProjects/test/addingtocouchbase_error.log';
                $handle = fopen($my_file, 'a') or die('Cannot open file:  ' . $my_file);
                $output = "\n" . 'New data ';
                $output = "\n" . $url . ' has error';
                fwrite($handle, $output);
                fclose($handle);
            }
            unset($cb);
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
            echo json_decode(file_get_contents('php://input'));
        }

        $statusHeader = 'HTTP/1.1 ' . 200 . ' ' . $this->getStatusCodeMessage(200);
        header($statusHeader);
        header('Content-type: *');
        header("Access-Control-Allow-Origin: *");
        header('Access-Control-Request-Method: *');
        header('Access-Control-Allow-Methods: PUT, POST, OPTIONS, GET');
        header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
        echo $id;
        unset($request_json, $request_arr, $id, $response, $type, $url, $statusHeader);
        Yii::app()->end();
    }

    public function actionRead() {
        try {
            $cb = $this->couchBaseConnection();
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

    public function setCouchBaseRecord($record, $id = null) {
        if (is_null($id)) {
            $id = rand(99999999999999, 999999999999999);
        }
        try {
            $cb = $this->couchBaseConnection();

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
        }
    }

}

?>
