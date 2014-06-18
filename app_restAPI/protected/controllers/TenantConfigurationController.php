<?php

header("Access-Control-Allow-Origin: *");
header('Content-type: *');

header('Access-Control-Request-Method: *');
header('Access-Control-Allow-Methods: PUT, POST, OPTIONS,GET');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

class TenantConfigurationController extends Controller {

    const JSON_RESPONSE_ROOT_SINGLE = 'mega';
    const JSON_RESPONSE_ROOT_PLURAL = 'megas';

    public function actionIndex() {
        
    }

    public function actionCreate() {
        
    }

    public function actionRead() {
        
    }

    public function actionUpdate() {
        
    }

    public function actionDelete() {
        
    }

    public function actionGetRequireIamgeSize() {
        $request_json = file_get_contents('php://input');

        $request_arr = CJSON::decode($request_json, true);

        $requireType = $request_arr['RequireIamgeType'];

        if ($requireType == "Background") {
            $requireType = 'profile_bg';
        } elseif ($requireType == "Profile Hero") {
            $requireType = 'profile_hero';
        } elseif ($requireType == "Profile Picture") {
            $requireType = 'profile_pic';
        } elseif ($requireType == "User Picture") {
            $requireType = 'photo_url_large';
        } elseif ($requireType == "User Cover") {
            $requireType = 'cover_url';
        }
        $domain = $this->getDomain();
        $configuration = $this->getProviderConfigurationByName($domain, "image_required_sizes");
        $feedback = CJSON::encode($configuration[$requireType], true);
        $this->sendResponse(200, $feedback);
    }

    public function actionDoesAdDisplay() {

        $request_json = file_get_contents('php://input');
        $request = CJSON::decode($request_json, true);
        $feedback = null;
        $domain = $this->getDomainWihoutAPI();
        $configuration = $this->getProviderConfigurationByName($domain, "ads");
        if (isset($request['adPageNo'])) {
            $adPageNo = $request['adPageNo'];
            if ($adPageNo < sizeof($configuration)) {
                $feedback = CJSON::encode($configuration[$adPageNo]);
            }
        } else {
            $feedback = CJSON::encode($configuration);
        }
        $this->sendResponse(200, $feedback);
    }

    public function actionobjectAdDisplay() {

        $request_json = file_get_contents('php://input');
        $request = CJSON::decode($request_json, true);
        $feedback = null;
        $domain = $this->getDomainWihoutAPI();
        $configuration = $this->getProviderConfigurationByName($domain, "object_view_ads");
        if (isset($request['adPageNo'])) {
            $adPageNo = $request['adPageNo'];
            if ($adPageNo < sizeof($configuration)) {
                $feedback = CJSON::encode($configuration[$adPageNo]);
            }
        } else {
            $feedback = CJSON::encode($configuration);
        }
        $this->sendResponse(200, $feedback);
    }

    public function actionPdfDisplay() {


        $domainWithoutAPI = $this->getDomainWihoutAPI();
        $configuration1 = $this->getProviderConfigurationByName($domainWithoutAPI, "pdf_display");
        $configuration2 = $this->getProviderConfigurationByName($domainWithoutAPI, "tagging_display");
        $configuration3 = $this->getProviderConfigurationByName($domainWithoutAPI, "profile_manager");
        $configuration4 = $this->getProviderConfigurationByName($domainWithoutAPI, "top_ad_display");
        $configuration5 = $this->getProviderConfigurationByName($domainWithoutAPI, "object_ad_display");

        
        $configuration[0] = $configuration1;
        $configuration[1] = $configuration2;
        $configuration[2] = $configuration3;
        $configuration[3] = $configuration4;
        $configuration[4] = $configuration5;
        $feedback = CJSON::encode($configuration);

        $this->sendResponse(200, $feedback);
    }

}

?>