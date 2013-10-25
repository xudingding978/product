HubStar.GoogleMapPopupView = Ember.View.extend({
    templateName: 'googleMapPopup',
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

        });

        var thatthat = that;
        function calcRoute() {
            var request = {
                origin: thatthat.get('controller').get('fromAddress'),
                destination: thatthat.get('controller').get('toAddress'),
                travelMode: google.maps.DirectionsTravelMode[$("#routeMode").val()]
            };
            directionsService.route(request, function(response, status) {
                if (status === google.maps.DirectionsStatus.OK) {
                    directionsDisplay.setDirections(response);
                }
            });
        }
    }

















});