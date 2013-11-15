var directionsDisplay = new google.maps.DirectionsRenderer({draggable: true});
HubStar.GoogleMapPopupView = Ember.View.extend({
    templateName: 'googleMapPopup',
    routeModeSelection: "DRIVING",
    didInsertElement: function() {
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
                      var marker = new google.maps.Marker({
                    map: map,
                    position: results[0].geometry.location,
                    title: 'Destination'
                });
                directionsDisplay.setMap(map);
              directionsDisplay.setPanel(document.getElementById("directionsPanel"));
          

            });

            $("#routeMode").on("change", function() {
                that.calcRoute(that.get('routeModeSelection'));
            });

            $('#routeModeDropdown > .ite').click(function() {
                that.set('routeModeSelection', $(this).text());
                that.set('routeModeDropdown', false);
            });
        });

    },
    setGooglePopup: function() {
  this.get('controller').set('fromAddress', "");
        this.get('controller').set('popUpMap', false);
           $('#directionsPanel').attr({"style": "display:none; position: absolute; width: 265px; direction: ltr; height: 425px; overflow: auto; overflow-x: hidden;right: 0px; top: 0px; border-left-width: 1px; border-left-style: solid; border-left-color: rgb(221, 221, 221); border-bottom: 1px solid #ddd;"});
      directionsDisplay.setDirections({routes: []});
    },
    routeClear: function() {
        $("#map_canvas_pop").animate({width: "800px"}, 1000, 'linear');
        $('#routeClear').attr({"style": "display:none;width: 33%;height: 45px;line-height: 45px;'"});
        $('#routeGo').attr({"style": "display:block; width: 33%;height: 45px;line-height: 45px;'"});
        directionsDisplay.setDirections({routes: []});
        $('#directionsPanel').attr({"style": "display:none; "});
    },
    routeGo: function() {
        $("#map_canvas_pop").animate({width: "535px"}, 1000, 'linear');
directionsDisplay.setPanel(document.getElementById("directionsPanel"));
        $('#routeGo').attr({"style": "display:none; width: 33%;height: 45px;line-height: 45px;'"});
        $('#routeClear').attr({"style": "display:block;width: 33%;height: 45px;line-height: 45px;'"});

        setTimeout(function() {
            $('#directionsPanel').attr({"style": "display:block; position: absolute; width: 265px; direction: ltr; height: 425px; overflow: auto; overflow-x: hidden;right: 0px; top: 0px; border-left-width: 1px; border-left-style: solid; border-left-color: rgb(221, 221, 221); border-bottom: 1px solid #ddd;"});

        }, 1000);
        this.calcRoute(this.get('routeModeSelection'));
    },
    calcRoute: function(routeModeSelection) {
        var directionsService = new google.maps.DirectionsService();
        var request = {
            origin: this.get('controller').get('fromAddress'),
            destination: this.get('controller').get('toAddress'),
            provideRouteAlternatives: true,

            travelMode: google.maps.DirectionsTravelMode[routeModeSelection]
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