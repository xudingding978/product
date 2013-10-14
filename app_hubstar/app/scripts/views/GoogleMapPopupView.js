HubStar.GoogleMapPopupView = Ember.View.extend({
      templateName: 'googleMapPopup',
 
        didInsertElement: function() {
            
            $(document).ready(function() {
$("#popupmap").fancybox({
'frameWidth': 600, 'frameHeight': 500
});
});

 

        }
    });