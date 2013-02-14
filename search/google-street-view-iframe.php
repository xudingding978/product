<!DOCTYPE html>
<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=utf-8"/>
<title>Google Maps JavaScript API Example: Street View Controls</title>
<link href="http://code.google.com/apis/maps/documentation/javascript/examples/default.css" rel="stylesheet" type="text/css" />
<script type="text/javascript"
    src="http://maps.googleapis.com/maps/api/js?key=AIzaSyAJwWLlUMUjx6LW7yOGSUh1VbvFM0Ly-GE&sensor=false&v=3.4">
</script>
<script type="text/javascript">
function initialize() {
	var geocoder = new google.maps.Geocoder();
	var address = parent.document.getElementById('address').value;
	geocoder.geocode( { 'address': address}, 
	    function(results, status) {
	        //alert (results);
	    if (status == google.maps.GeocoderStatus.OK) {
	        //alert(results[0].geometry.location);
	        myStreetView = new google.maps.StreetViewPanorama(document.getElementById("pano"));
	        myStreetView.setPosition(results[0].geometry.location);
	        var marker = new google.maps.Marker({
	            position: results[0].geometry.location, 
	            map: myStreetView, 
	            title:address
	        });
	        //alert ("yay");
	    } else {
	        alert("Geocode was not successful for the following reason: " + status);
	    }
	});
}
</script>
</head>
<body onload="initialize()">
  <div id="pano" style="width:100%; height: 390px;margin-top:35px"></div>
</body>
</html>
