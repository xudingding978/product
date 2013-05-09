<?php

class ProfilesController extends Controller {

    const JSON_RESPONSE_ROOT_SINGLE = 'profile';
    const JSON_RESPONSE_ROOT_PLURAL = 'profiles';

    public function actionIndex() {
        $this->sendResponse(200, '{"profiles":[
            {"id":"leo", "profile_name":"Leo Interior Designer", "email":"leo@mail.com","about": "<p>I love interior design and all things houses. It has been my great privilege to create spaces over the last eleven years for a varied and loyal clientele. The collaborative nature of projects with clients is my favorite part. I like spaces that I design to read like a biography of the clients needs, experiences and travels. I consider it sport to have every detail of the room give a perspective on the client.</p> <p>Molly Brandenburg Interiors is a full-service, high-end residential design office with a full-time staff and ten years of experience. We are based in Pasadena, CA and have projects throughout Southern California.</p><p><b>Services Provided:</b><br/> Full Service</p><p><b>Areas Served:</b><br/>Pasadena, South Pasadena, San Marino, La Canada, Altadena, San Gabriel, Sierra Madre, Los Angeles, Santa Barbara, Montecito, Summerland, Carpinteria</p>"}, 
            {"id":"colin","profile_name":"Colourful Kitchens by Colin", "email":"colin@colurkitchens.com","about":"<h1>I am a designer</h1>"}
            ]}');
    }

}

?>