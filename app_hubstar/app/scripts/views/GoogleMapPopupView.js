HubStar.GoogleMapPopupView = Ember.View.extend({
    templateName: 'googleMapPopup',
   
    routeModeSelection: "DRIVING",
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
            $("#routeGo").click(function() {
                $("#map_canvas_pop").animate({width: "535px"}, 1000, 'linear');

                $('#routeGo').attr({"style": "display:none; width: 33%;height: 45px;line-height: 45px;'"});
                $('#routeClear').attr({"style": "display:block;width: 33%;height: 45px;line-height: 45px;'"});
              
                setTimeout(function() {
               $('#directionsPanel').attr({"style": "display:block; position: absolute; width: 265px; direction: ltr; height: 425px; overflow: auto; overflow-x: hidden;right: 0px; top: 0px; border-left-width: 1px; border-left-style: solid; border-left-color: rgb(221, 221, 221); border-bottom: 1px solid #ddd;"});
            
                },1000);
                calcRoute();
            });
            
            $("#routeClear").click(function() {
                $("#map_canvas_pop").animate({width: "800px"}, 1000, 'linear');
                $('#routeClear').attr({"style": "display:none;width: 33%;height: 45px;line-height: 45px;'"});
                $('#routeGo').attr({"style": "display:block; width: 33%;height: 45px;line-height: 45px;'"});
               directionsDisplay.setDirections({routes: []});
                $('#directionsPanel').attr({"style": "display:none; "});
            });

            $("#google_pop").on("click", function() {
                that.get('controller').set('popUpMap', false);
            });

            $('#routeModeDropdown > .ite').click(function() {
                that.set('routeModeSelection', $(this).text());
                that.set('routeModeDropdown', false);
            });
        });


      
        function calcRoute() {
        
            var request = {
                origin: that.get('controller').get('fromAddress'),
                destination: that.get('controller').get('toAddress'),
                travelMode: google.maps.DirectionsTravelMode[that.get('routeModeSelection')]
            };
            directionsService.route(request, function(response, status) {
                if (status === google.maps.DirectionsStatus.OK) {
                    directionsDisplay.setDirections(response);
                }
            });
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
        $('#routeModeDropdown > .ite').click(function() {
            that.set('routeModeSelection', $(this).text());
        });
        $("#routeModeDropdown").toggleClass('hideClass');

    }


});