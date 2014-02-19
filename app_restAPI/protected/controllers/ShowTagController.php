<?php

header("Access-Control-Allow-Origin: *");
header('Content-type: *');
header('Access-Control-Request-Method: *');
header('Access-Control-Allow-Methods: PUT, POST, OPTIONS, GET, DELETE');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

class ShowTagController extends Controller {

    const JSON_RESPONSE_ROOT_SINGLE = 'tag';
    const JSON_RESPONSE_ROOT_PLURAL = 'tags';

    public function actionReadTag() {
        $request_array = CJSON::decode(file_get_contents('php://input'));
        $request_array = CJSON::decode($request_array);
        $photo_id = $request_array[0];  //selected photo's id
        try {
            $docIDDeep = $this->getDomain() . "/" . $photo_id; //$id  is the page owner
            $cb = $this->couchBaseConnection();
            $oldDeep = $cb->get($docIDDeep); // get the old user record from the database according to the docID string
            $oldRecordDeep = CJSON::decode($oldDeep, true);

            //create the new tag

            if (isset($oldRecordDeep["photo"][0]['tags'])) {
                for ($i = 0; $i < sizeof($oldRecordDeep["photo"][0]['tags']); $i++) {
                    $pic_url = "";
                    $profile_id = $oldRecordDeep["photo"][0]['tags'][$i]["profile_id"];


                    $domain = $this->getDomain();
                    $docID = $domain . "/profiles/" . $profile_id;
                    $tempMega = $cb->get($docID);
                    $mega = CJSON::decode($tempMega, true);
                    $oldRecordDeep["photo"][0]['tags'][$i]["pic_url"] = $mega['profile'][0]['profile_hero_cover_url'];
                }
            }

            if (!isset($oldRecordDeep["photo"][0]['tags'])) {
                $this->sendResponse(204);
            } else {
                $this->sendResponse(200, CJSON::encode($oldRecordDeep["photo"][0]['tags']));
            }
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
            echo json_decode(file_get_contents('php://input'));
        }
    }

    public function actionViewCount() {
        $request_array = CJSON::decode(file_get_contents('php://input'));
        $request_array = CJSON::decode($request_array);
        $tag_id = $request_array[0]; // it is the selected profile
        $photo_id = $request_array[1];
        try {
            $docIDDeep = $this->getDomain() . "/" . $photo_id; //$id  is the page owner
            $cb = $this->couchBaseConnection();
            $oldDeep = $cb->get($docIDDeep); // get the old user record from the database according to the docID string
            $oldRecordDeep = CJSON::decode($oldDeep, true);

            //create the new tag

            if (isset($oldRecordDeep["photo"][0]['tags'])) {
                for($i = 0;$i<sizeof($oldRecordDeep["photo"][0]['tags']);$i++) {
                    if ($oldRecordDeep["photo"][0]['tags'][$i]["tag_id"] === $tag_id) {
                        $oldRecordDeep["photo"][0]['tags'][$i]["link_to_click_count"] = $oldRecordDeep["photo"][0]['tags'][$i]["link_to_click_count"] + 1;
                        break;
                    }
                }
            }
            if ($cb->set($docIDDeep, CJSON::encode($oldRecordDeep))) {
                $this->sendResponse(204);
            } else {
                echo $this->sendResponse(409, 'A record with id: "' . substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI'] . '/' . '" already exists');
            }
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
            echo json_decode(file_get_contents('php://input'));
        }
    }

    public function actionResizeWindow() {
        $request_array = CJSON::decode(file_get_contents('php://input'));
        $request_array = CJSON::decode($request_array);
        $tags = $request_array[0]; // it is the selected profile
        $photo_id = $request_array[1];
        try {
            $docIDDeep = $this->getDomain() . "/" . $photo_id; //$id  is the page owner
            $cb = $this->couchBaseConnection();
            $oldDeep = $cb->get($docIDDeep); // get the old user record from the database according to the docID string
            $oldRecordDeep = CJSON::decode($oldDeep, true);

            //create the new tag

            if (isset($oldRecordDeep["photo"][0]['tags'])) {
                $oldRecordDeep["photo"][0]['tags'] = $tags;
            }


            if ($cb->set($docIDDeep, CJSON::encode($oldRecordDeep))) {
                $this->sendResponse(200, CJSON::encode($oldRecordDeep["photo"][0]['tags']));
            } else {
                echo $this->sendResponse(409, 'A record with id: "' . substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI'] . '/' . '" already exists');
            }
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
            echo json_decode(file_get_contents('php://input'));
        }
    }

    public function actionSentRequestEmail() {
        $request_array = CJSON::decode(file_get_contents('php://input'));
        $request_array = CJSON::decode($request_array);
        $selectedProfile = $request_array[0]; // it is the selected profile
        $product_name = $request_array[1]; // it is the product name
        $linkAddress = $request_array[2]; // it is the descript of the  product
        $time_stamp = $request_array[3]; // it is the x axias of the picture 
        $photo_id = $request_array[4];
        $requestEmail = $request_array[5]; // it is the content link  address
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
                $oldRecordDeep["photo"][0]['tags'] = array();
                array_unshift($oldRecordDeep["photo"][0]['tags'], $tag);
            } else {
                array_unshift($oldRecordDeep["photo"][0]['tags'], $tag);
            }


            if ($cb->set($docIDDeep, CJSON::encode($oldRecordDeep))) {
                $this->sendResponse(204);
            } else {
                echo $this->sendResponse(409, 'A record with id: "' . substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI'] . '/' . '" already exists');
            }
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
            echo json_decode(file_get_contents('php://input'));
        }
    }

    public function actionUpdateTag() {
        $request_array = CJSON::decode(file_get_contents('php://input'));
        $request_array = CJSON::decode($request_array);
        $tag_id = $request_array[0];  //tag id : consists of time and photo id
        $product_name = $request_array[1]; // it is the product name
        $desc = $request_array[2]; // it is the descript of the  product
        $linkAddress = $request_array[3]; // it is the content link  address
        $time_stamp = $request_array[4]; // it is create time      
        $profile_id = $request_array[5];
        $photo_id = $request_array[6];  //selected photo's id

        try {
            $docIDDeep = $this->getDomain() . "/" . $photo_id; //$id  is the page owner
            $cb = $this->couchBaseConnection();
            $oldDeep = $cb->get($docIDDeep); // get the old user record from the database according to the docID string
            $oldRecordDeep = CJSON::decode($oldDeep, true);
            for ($i = 0; $i < sizeof($oldRecordDeep["photo"][0]['tags']); $i++) {
                if ($oldRecordDeep["photo"][0]['tags'][$i]["tag_id"] === $tag_id) {
                    $oldRecordDeep["photo"][0]['tags'][$i]["profile_id"] = $profile_id;
                    $oldRecordDeep["photo"][0]['tags'][$i]["product_name"] = $product_name;
                    $oldRecordDeep["photo"][0]['tags'][$i]["desc"] = $desc;
                    $oldRecordDeep["photo"][0]['tags'][$i]["linkto"] = $linkAddress;
                    $oldRecordDeep["photo"][0]['tags'][$i]["tag_time"] = $time_stamp;
                }
            }

            if ($cb->set($docIDDeep, CJSON::encode($oldRecordDeep))) {
                $this->sendResponse(200, CJSON::encode($oldRecordDeep["photo"][0]['tags']));
            } else {
                echo $this->sendResponse(409, 'A record with id: "' . substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI'] . '/' . '" already exists');
            }
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
            echo json_decode(file_get_contents('php://input'));
        }
    }

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
                $oldRecordDeep["photo"][0]['tags'] = array();
                array_unshift($oldRecordDeep["photo"][0]['tags'], $tag);
            } else {
                array_unshift($oldRecordDeep["photo"][0]['tags'], $tag);
            }


            if ($cb->set($docIDDeep, CJSON::encode($oldRecordDeep))) {
                $this->sendResponse(204);
            } else {
                echo $this->sendResponse(409, 'A record with id: "' . substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI'] . '/' . '" already exists');
            }
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
            echo json_decode(file_get_contents('php://input'));
        }
    }

    public function actionDeleteTag() {
        $request_array = CJSON::decode(file_get_contents('php://input'));
        $request_array = CJSON::decode($request_array);
        $tag_id = $request_array[0]; //photo owner
        $photo_id = $request_array[1]; //current login user

        try {
            $docIDDeep = $this->getDomain() . "/" . $photo_id; //$id  is the page owner
            $cb = $this->couchBaseConnection();
            $oldDeep = $cb->get($docIDDeep); // get the old user record from the database according to the docID string
            $oldRecordDeep = CJSON::decode($oldDeep, true);
            //  $tags = $oldRecordDeep["photo"][0]['tags'];
            for ($i = 0; $i < sizeof($oldRecordDeep["photo"][0]['tags']); $i++) {
                if ($oldRecordDeep["photo"][0]['tags'][$i]["tag_id"] === $tag_id) {

                    array_splice($oldRecordDeep["photo"][0]['tags'], $i, 1);
                    break;
                }
            }

            if ($cb->set($docIDDeep, CJSON::encode($oldRecordDeep))) {
                $this->sendResponse(204);
            } else {
                echo $this->sendResponse(409, 'A record with id: "' . substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI'] . '/' . '" already exists');
            }
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
            echo json_decode(file_get_contents('php://input'));
        }
    }

    public function actionActivateTag() {
        $request_array = CJSON::decode(file_get_contents('php://input'));
        $request_array = CJSON::decode($request_array);
        $tag_id = $request_array[0]; //photo owner
        $photo_id = $request_array[1]; //current login user

        try {
            $docIDDeep = $this->getDomain() . "/" . $photo_id; //$id  is the page owner
            $cb = $this->couchBaseConnection();
            $oldDeep = $cb->get($docIDDeep); // get the old user record from the database according to the docID string
            $oldRecordDeep = CJSON::decode($oldDeep, true);
            //  $tags = $oldRecordDeep["photo"][0]['tags'];
            for ($i = 0; $i < sizeof($oldRecordDeep["photo"][0]['tags']); $i++) {
                if ($oldRecordDeep["photo"][0]['tags'][$i]["tag_id"] === $tag_id) {
                    $oldRecordDeep["photo"][0]['tags'][$i]["tag_approved"] = true;
                }
            }

            if ($cb->set($docIDDeep, CJSON::encode($oldRecordDeep))) {
                $this->sendResponse(204);
            } else {
                echo $this->sendResponse(409, 'A record with id: "' . substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI'] . '/' . '" already exists');
            }
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
            echo json_decode(file_get_contents('php://input'));
        }
    }

    public function actionCreateNotification() {
        $request_array = CJSON::decode(file_get_contents('php://input'));
        $request_array = CJSON::decode($request_array);
        $owner_ids = explode(",", $request_array[0]); //photo owners
        $currentUser = $request_array[1]; //current login user
        $time_stamp = $request_array[2];
        $photo_id = $request_array[3];
        $photo_url = $request_array[4];
        $currentUserName = $request_array[5];       //get the user's name of tagging  
        $linkToCompany = $request_array[6];

        $notification_id = (string) (rand(10000, 99999)) . $time_stamp . $currentUser;
        $receiveEmail1 = "linzw07@gmail.com";
        for ($i = 0; $i < sizeof($owner_ids); $i++) {

            $ownerId = $owner_ids[$i];
            $notificationObject = array();
            $timeID = date_timestamp_get(new DateTime());

            $notification_id = (string) (rand(10000, 99999)) . $timeID . $currentUser;

            $notificationObject["notification_id"] = $notification_id;
            $notificationObject["user_id"] = $currentUser;
            $notificationObject["time"] = $time_stamp;
            $notificationObject["type"] = "addTag";
            $notificationObject["content"] = $photo_url;
            $notificationObject["action_id"] = $photo_id;
            $notificationObject["isRead"] = false;


            $notificationInfo = $this->getDomain() . "/users/" . $ownerId;

            $cbs = $this->couchBaseConnection();
            $notificationInfoDeep = $cbs->get($notificationInfo); // get the old user record from the database according to the docID string
            $userInfo = CJSON::decode($notificationInfoDeep, true);
            if (!isset($userInfo['user'][0]['notifications'])) {
                $userInfo['user'][0]['notifications'] = array();
            }
            array_unshift($userInfo['user'][0]["notifications"], $notificationObject);
            if ($cbs->set($notificationInfo, CJSON::encode($userInfo))) {
                if (!isset($userInfo['user'][0]['notification_setting']) || strpos($userInfo['user'][0]['notification_setting'], "email") !== false) {

                    //  $receiveEmail = $userInfo['user'][0]['email'];
                    $receiveName = $userInfo['user'][0]['display_name'];

                    $this->sendEmail($receiveEmail1, $receiveName, $photo_url, $currentUserName, $linkToCompany);
                }
            } else {
                echo $this->sendResponse(409, 'A record with id: "' . substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI'] . '/' . '" already exists');
            }
        }
    }

    public function sendEmail($receiveEmail, $receiveName, $photo_url, $currentUserName, $linkToCompany) {

        //$receiveEmail = "dingding@hubstar.co";
        $domain = $this->getDomain();
        // $domainWithoutAPI = $this->getDomainWihoutAPI();
        $configuration = $this->getProviderConfigurationByName($domain, "SES");
        $amazonSes = Aws\Ses\SesClient::factory($configuration);
        $platformSettings = $this->getProviderConfigurationByName($domain, "Communications");
        $platformEmail = $platformSettings['support']['email'];
        $subject_prefix = $receiveName . "  you have tag avtivated pending ";
        $args = array(
            "Source" => $platformEmail,
            "Destination" => array(
                "ToAddresses" => array(
                    $receiveEmail),
//                "BccAddresses" => array(
//                    $platformEmail)
            ),
            "Message" => array(
                "Subject" => array(
                    "Data" => $subject_prefix
                ),
                "Body" => array(
                    "Html" => array(
                        "Data" => $this->confirmationEmailForm($receiveName, $photo_url, $currentUserName, $linkToCompany)
                    )
                ),
            ),
        );
        $amazonSes->sendEmail($args);
    }

    public function confirmationEmailForm($receiveName, $photo_url, $currentUserName, $linkToCompany) {
        return '

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

    <body style="background: #E5E5E5; margin: 0 auto; padding: 0;">
        <div style="width: 600px;  box-shadow: 0 0 5px #888; margin: 50px auto;background-color: white;">
            <img src="https://s3-ap-southeast-2.amazonaws.com/develop.devbox/header.jpg" />
            <div style="position: relative; padding: 15px 30px;">
                <h1 style=" font-size: 2em;   line-height: 200%;font-weight: 700;margin-bottom: 10px">Hi   ' . $receiveName . ' ,</h1>
                <p style="font-size: 1.5em;">You have new notifications on myTrends!</p>
                <div style="margin: 20px 10px;font-size: 1.2em;line-height: 30px;height: 90px;">
                    <div style="height: 45px;">
                        <div style="margin: 0 5px;float: left;">
                            <div style="width: 30px;height:30px;">         
                                <img src="http://develop.devbox.s3.amazonaws.com/followers-icon-for-email.png"  style="width: 30px;height:30px; float: left"/> 
                            </div>
                        </div>
                        <div style="float: left;">' . $currentUserName . '  has tag on your photo </div>
                    </div>

                </div>

                <div style="font-size: 1.2em;margin: 20px 0;"><a style="cursor: pointer;color: #05B1E5;" href=' . $photo_url . '>View the tag detail on the photo and activate the tag</a> on myTrends</div>
                                    <div style="font-size: 1.2em;margin: 20px 0;"><a style="cursor: pointer;color: #05B1E5;" href=' . $linkToCompany . '>View the  company detail about the tagging product</div>

                <hr  style="margin-bottom: 5px; color: #333"/>
                <p>If you do not want to receive these emails from myTrends, please <a style="cursor: pointer;color: #05B1E5;">unsubscribe</a>.</p>
            </div>

            <div style="margin-top: 20px"><img src="http://develop.devbox.s3.amazonaws.com/email-bottom.jpg"  /></div>

        </div>
    </body>
</html>
';
    }

}

?>
