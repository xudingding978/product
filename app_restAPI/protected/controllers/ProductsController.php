
<?php

header("Access-Control-Allow-Origin: *");
header('Content-type: *');

header('Access-Control-Request-Method: *');
header('Access-Control-Allow-Methods: PUT, POST, OPTIONS,GET');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

class ProductsController extends Controller {

    const JSON_RESPONSE_ROOT_SINGLE = 'follower';
    const JSON_RESPONSE_ROOT_PLURAL = 'followers';

    public function __construct() {
        
    }

    public function actionIndex() {
        
    }

    public function actionCreate() {
        $this->sendResponse(204);
    }

    public function actionTest() {
        $a = $this->getProducts();
        if ($a === null) {
            $this->sendResponse(204);
        } else {
            $this->sendResponse(200, CJSON::encode($a));
        }
    }

    public function actionSetProductDecs() {
        $request_json = file_get_contents('php://input');
        $request_arr = CJSON::decode($request_json, true);
        $request_arr = CJSON::decode($request_arr, true);
        $Guid = $request_arr[0];
        $decs = $request_arr[1];
        $a = $this->getProducts();
        $Items = $a->Items;
        for ($i = 0; $i < sizeof($Items); $i++) {
            if ($Items[$i]->Guid === $Guid) {
                $Items[$i]->ProductDescription = $decs;
                
                $jsonPost = $this->postProduct($Items[$i]);
                break;
            }
        }
        if ($jsonPost === null) {
            $this->sendResponse(204);
        } else {
            $this->sendResponse(200, CJSON::encode($jsonPost));
        }
    }

    function postProduct($product) {
        $apiId = "1fd6ea0b-13d0-4f3a-9421-872cc0624d4d";
        $apiKey = "oJIRsDS1xUVc6vMqGpNNc876govJ1qFc7gHOEMlJ99jzE9X5GQZz2dkP8lg0XAuBTa8IJ8qpktBfGPlh41Q==";
        return $this->postJson($apiId, $apiKey, "Products", $product->Guid, $product);
    }

    public function actionGetSupplier() {
        $request_json = file_get_contents('php://input');
        $request_arr = CJSON::decode($request_json, true);
        $a = $this->getSupplier($request_arr);
        if ($a === null) {
            $this->sendResponse(204);
        } else {
            $this->sendResponse(200, CJSON::encode($a));
        }
    }

    function postJson($id, $key, $endpoint, $dataId, $data) {
        return $this->post($id, $key, $endpoint, "json", $dataId, json_encode($data));
    }

    function post($id, $key, $endpoint, $format, $dataId, $data) {
        if (!isset($dataId, $data)) {
            return null;
        }
        try {
            $signature = $this->getSignature("", $key);
            // create the curl object.
            // - POST always requires the object's id
            error_log($data);
            $curl = $this->getCurl($id, $key, $signature, "$endpoint/$dataId", "", $format);
            // set extra curl options required by POST
            curl_setopt($curl, CURLOPT_POST, 1);
            curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
            // POST something
            $curl_result = curl_exec($curl);
            error_log($curl_result);
            curl_close($curl);
            return $curl_result;
        } catch (Exception $e) {
            error_log('Error: ' + $e);
        }
    }

    function getSupplier($guid) {
        $apiId = "1fd6ea0b-13d0-4f3a-9421-872cc0624d4d";
        $apiKey = "oJIRsDS1xUVc6vMqGpNNc876govJ1qFc7gHOEMlJ99jzE9X5GQZz2dkP8lg0XAuBTa8IJ8qpktBfGPlh41Q==";
        return $this->getJson($apiId, $apiKey, "Suppliers/$guid", "");
    }

    function getProducts() {
        $apiId = "1fd6ea0b-13d0-4f3a-9421-872cc0624d4d";
        $apiKey = "oJIRsDS1xUVc6vMqGpNNc876govJ1qFc7gHOEMlJ99jzE9X5GQZz2dkP8lg0XAuBTa8IJ8qpktBfGPlh41Q==";
        return $this->getJson($apiId, $apiKey, "Products", "");
    }

    function getJson($id, $key, $endpoint, $request) {
        // GET it, decode it, return it
        return json_decode($this->get($id, $key, $endpoint, $request, "json"));
    }

    function getSignature($request, $key) {
        return "KHoquUo9pGx16swpmOpwL0KfNThoxk0n/DwuavVEXsc=";
    }

    function getCurl($id, $key, $signature, $endpoint, $requestUrl, $format) {
        $api = "https://api.unleashedsoftware.com/";

        $curl = curl_init($api . $endpoint . $requestUrl);
        curl_setopt($curl, CURLOPT_FRESH_CONNECT, true);
        curl_setopt($curl, CURLINFO_HEADER_OUT, true);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, 0);
        curl_setopt($curl, CURLOPT_HTTPHEADER, array("Content-Type: application/$format",
            "Accept: application/$format", "api-auth-id: $id", "api-auth-signature: $signature"));
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_TIMEOUT, 20);
        // these options allow us to read the error message sent by the API
        curl_setopt($curl, CURLOPT_FAILONERROR, false);
        curl_setopt($curl, CURLOPT_HTTP200ALIASES, range(400, 599));

        return $curl;
    }

    function get($id, $key, $endpoint, $request, $format) {
        $requestUrl = "";
        if (!empty($request))
            $requestUrl = "?$request";

        try {
            // calculate API signature
            $signature = $this->getSignature($request, $key);
            // create the curl object
            $curl = $this->getCurl($id, $key, $signature, $endpoint, $requestUrl, $format);
            // GET something
            $curl_result = curl_exec($curl);
            curl_close($curl);
            return $curl_result;
        } catch (Exception $e) {
            error_log('Error: ' + $e);
        }
    }

}

?>
