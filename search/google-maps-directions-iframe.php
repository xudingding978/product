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

  var rendererOptions = {
    draggable: false
  };
  var directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);;
  var directionsService = new google.maps.DirectionsService();
  var map;

  var newzealand = new google.maps.LatLng(-36.848565, 174.762332);

  function initialize() {

    var myOptions = {
      zoom: 7,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      center: newzealand
    };
    map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    directionsDisplay.setMap(map);
    directionsDisplay.setPanel(document.getElementById("directionsPanel"));

    google.maps.event.addListener(directionsDisplay, 'directions_changed', function() {
      computeTotalDistance(directionsDisplay.directions);
    });
    
    calcRoute();
  }

  function calcRoute() {
    var businessaddress = parent.document.getElementById('address').value;
    var useraddress = document.getElementById('useraddress').value;
    var request = {
      origin: useraddress,
      destination: businessaddress,
      //waypoints:[{location: "Bourke, NSW"}, {location: "Broken Hill, NSW"}],
      travelMode: google.maps.DirectionsTravelMode.DRIVING
    };
    directionsService.route(request, function(response, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
      }
    });
  }

  function computeTotalDistance(result) {
    var total = 0;
    var myroute = result.routes[0];
    for (i = 0; i < myroute.legs.length; i++) {
      total += myroute.legs[i].distance.value;
    }
    total = total / 1000.
    document.getElementById("total").innerHTML = total + " km";
  }   
</script>
</head>
<body onload="initialize()">
<div id="map_canvas" style="float:left;width:70%; height:100%"></div>
<div id="directionsPanel" style="float:right;width:30%;height :620px; overflow:auto">
    <input type="text" id="useraddress"  onkeydown="calcRoute()" />
    <input type="submit" value="Search" onclick="calcRoute()"/>
<p>Total Distance: <span id="total"></span></p>
</div>
</body>
</html>