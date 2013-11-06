HubStar.GoogleMapPopupView = Ember.View.extend({
    templateName: 'googleMapPopup',
   // routeModeDropdown: false,
    routeModeSelection: "Driving",
    didInsertElement: function() {
        var directionsDisplay = new google.maps.DirectionsRenderer({draggable: true});
        var directionsService = new google.maps.DirectionsService();
        var map;
        var that = this;
        $(document).ready(function() {

            geocoder = new google.maps.Geocoder();

            var address = that.get('controller').get('toAddress');

            geocoder.geocode({'address': address}, function(results) {
                var map_options = {
                    center: results[0].geometry.location,
                    zoom: 15,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                }
                map = new google.maps.Map(document.getElementById('map_canvas_pop'), map_options);
                directionsDisplay.setMap(map);
                directionsDisplay.setPanel(document.getElementById("directionsPanel"));
                var marker = new google.maps.Marker({
                    map: map,
                    position: results[0].geometry.location,
                    title: 'Destination'
                });

            });
            $("#routeMode").on("change", function() {
                calcRoute();
            });
            $("#routeGo").on("click", function() {
                calcRoute();
            });
            $("#routeClear").on("click", function() {
                directionsDisplay.setDirections({routes: []});
            });

            $("#google_pop").on("click", function() {
                that.get('controller').set('popUpMap', false);
            });

 $('#routeModeDropdown > .ite').click(function() {
            console.log("2");
            that.set('routeModeSelection', $(this).text());    
            console.log("3");
            that.set('routeModeDropdown',false);
            console.log("4");
        });


        });

        var thatthat = that;
        console.log(thatthat.get('routeModeSelection'));
        function calcRoute() {
            var request = {
                origin: thatthat.get('controller').get('fromAddress'),
                destination: thatthat.get('controller').get('toAddress'),
                 
                travelMode: google.maps.DirectionsTravelMode[$("#routeModeDropdown >,ite").text()]
            };
            directionsService.route(request, function(response, status) {
                if (status === google.maps.DirectionsStatus.OK) {
                    directionsDisplay.setDirections(response);
                }
            });

            $("#map_canvas_pop").animate({width: "535px"}, 1000, 'linear');
            document.getElementById('directionsPanel').style.display = 'block';
            setTimeout(function() {

                $("#directionsPanel").mCustomScrollbar({
                    scrollButtons: {
                        enable: false,
                        scrollSpeed: "auto"
                    },
                    advanced: {
                        updateOnBrowserResize: true,
                        updateOnContentResize: true,
                        autoScrollOnFocus: false,
                        normalizeMouseWheelDelta: false
                    },
                    autoHideScrollbar: true,
                    mouseWheel: true,
                    theme: "dark-2",
                    set_height: 425
                });
            }, 800);
        }
    },
    dropdownRoute: function() {
        $("#routeModeDropdown").toggleClass('hideClass');
    },
    selectRoute: function() {
        var that = this;    
        console.log("1");
        $('#routeModeDropdown > .ite').click(function() {
            console.log("2");
            that.set('routeModeSelection', $(this).text());  

            console.log("4");
        });
        $("#routeModeDropdown").toggleClass('hideClass');
        console.log("5");
       // 
    }


});