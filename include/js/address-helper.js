// JavaScript Document
// Item is returned from address API, extract items from object
function show_address(item) {
	
    //map_address(item);
    //console.debug(item);     
    var postalAddress1;
    var suburb;
    var city;
    var postcode;
	

    $('#physical_address_street_address').val(item.number + " " + item.street);
    $('#physical_address_building_address').val(item.building_name);
    $('#physical_address_suburb').val(item.suburb);
    $('#physical_address_city').val(item.city);
    $('#physical_address_state').val(item.region);
    $('#physical_address_post_code').val(item.postcode);
    $('#physical_address_country').val('New Zealand');
    $('#dpid').val(item.dpid);
    $('#pxid').val(item.pxid);
    $('#longitude').val(item.x);
    $('#latitude').val(item.y);
    $('#height').val(item.z);    
    map_address(item);    
    initialize_map();  
    //if (item.region) { document.getElementById('physical_address_state').value = item.region; }
	
    //if (item.region) { document.getElementById('physical_address_state').value = item.region; }
	
    //if (item.pxid) { document.getElementById('pxid').value = item.pxid; }
	
    //if (item.dpid) { document.getElementById('dpid').value = item.dpid; }
	
	
    if (searchType == "combined_address") {
        // if item is a postal address
        if (item.number != null && item.street != null) {
            postalAddress1 = "";
            if (item.unit_type != null && item.unit_identifier != null) {
                postalAddress1 = item.unit_type + " " + item.unit_identifier + ", ";
            }
            if (item.building_name != null) {
                postalAddress1 += item.building_name + ", ";
            }
            if (item.street != null && item.number != null) {
                postalAddress1 += item.number;
                if (item.alpha != null) {
                    postalAddress1 += item.alpha;
                }
                postalAddress1 += " " + item.street;
            }
        } else if (item.street != null) {
            postalAddress1 = item.street;
        } else if (item.number != null) {
            postalAddress1 = item.number;
        } else {
            postalAddress1 = null;
        }
		
        if (item.rd_number != null && item.rd_number != "") {
            // For rural areas
            suburb = "RD " + item.rd_number;
        } else if (item.post_suburb != null) {
            suburb = (item.post_suburb).charAt(0).toUpperCase() + (item.post_suburb).slice(1);
        } else {
            suburb = '';
        }
    } else {
        // if item is a PO Box
        postalAddress1 = item.box_type + " " + item.number;
        if (item.lobby_name != null) {
            suburb = item.lobby_name;
        } else {
            suburb = '';
        }
    }
	
    if (item.mailtown != null) {
        city = item.mailtown;
    } else if (item.city != null) {
        city = item.city;
    } else {
        city = null;
    }
	
    if (item.postcode != null) {
        postcode = item.postcode;
    } else {
        postcode = null;
    }

    // if suburb and city are the same, only show one
    if (suburb == city){
        suburb = '';
    }

    if (suburb != ''){ 
        $(".address-label").html(postalAddress1 + "<br/>" + suburb + "<br/>" + city + " " + postcode);
    }else{
        $(".address-label").html(postalAddress1 + "<br/>" + city + " " + postcode); 
    } 
   	
}

function initialize_map() {   
    var map;
    var marker;	
    if (document.getElementById($('#pxid').val) == null) {                    
			
        var mapOptions = {
            zoom: 3,
            center: new google.maps.LatLng(-40.896906,174.880371),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
    } else{}
      
    
		
    map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
        
    var longitude = document.getElementById("longitude").value;
    var latitude = document.getElementById("latitude").value;
    
    if(x!=""&& y!=""){
        var y=eval(longitude);
        var x=eval(latitude);
        if (marker) marker.setMap(null);	
        var zoom = eval(document.getElementById("height").value);
        
        var point = new google.maps.LatLng(x, y);
        map.setCenter(point);
        map.setZoom(zoom);
        marker = new google.maps.Marker({
            position:point,
            map:map
        }); 
       
    }

}


function map_address(item) {   	
    var map;
    var marker;
    var mapOptions = {
        zoom: 3,
        center: new google.maps.LatLng(item.x,item.y),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
    if (marker) marker.setMap(null);
    var y = item.y
    var x = item.x
    var zoom = item.z;   
    var point = new google.maps.LatLng(x, y);
    map.setCenter(point);
    map.setZoom(zoom);
    marker = new google.maps.Marker({
        position:point,
        map:map
    });
		
    return null;
}


