HubStar.NavigatorView = Ember.View.extend({
    templateName: 'navigator',

    didInsertElement: function() {



        
$(".Navigator-content").click(function() {
         
       $(this).css("background-color","#d2d2d2");
        });
        
    }


    


});
