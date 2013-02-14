<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="initial-scale=1.0, user-scalable=no"/>
<meta http-equiv="content-type" content="text/html; charset=UTF-8"/>
<title>Google Maps JavaScript API v3 Example: Geocoding Simple</title>
<style type="text/css">
    html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

#map_canvas {
  height: 100%;
}

@media print {
  html, body {
    height: auto;
  }

  #map_canvas {
    height: 650px;
  }
}
</style>
<script type="text/javascript"
    src="http://maps.googleapis.com/maps/api/js?key=AIzaSyDwl8LT_S7FsRP_yDcoxM72-U8x15l-alw&sensor=false">
</script>
<script type="text/javascript">
  var geocoder;
  var map;
  function initialize() {
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(-36.84846,174.763332);
    var myOptions = {
      zoom: 16,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: true,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        position: google.maps.ControlPosition.TOP_LEFT
      },
      panControl: true,
      panControlOptions: {
        position: google.maps.ControlPosition.LEFT_TOP
      },
      zoomControl: true,
      zoomControlOptions: {
        style: google.maps.ZoomControlStyle.LARGE,
        position: google.maps.ControlPosition.LEFT_TOP
      },
      scaleControl: false,
      scaleControlOptions: {
        position: google.maps.ControlPosition.TOP_LEFT
      },
      streetViewControl: true,
      streetViewControlOptions: {
        position: google.maps.ControlPosition.LEFT_TOP
      }
    };
    map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
  }

  function codeAddress() {
    //var address = document.getElementById('content_target').document.getElementById('address').value;
    var address = parent.document.getElementById('address').value;
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
            map: map, 
            position: results[0].geometry.location
        });
      } else {
        /*alert("Geocode was not successful for the following reason: " + status);*/
      }
    });
  }
</script>
</head>
<body onload="initialize(), codeAddress()">
  <div>
    <input type="button" value="Geocode" onclick="codeAddress()" id="google-maps-button" style="display:none;">
  </div>
<div id="map_canvas" style="height:100%; width:100%;/*margin-top:35px*/"></div>
</body>
</html>