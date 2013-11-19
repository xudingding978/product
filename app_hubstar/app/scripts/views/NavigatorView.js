HubStar.NavigatorView = Ember.View.extend({
    templateName: 'navigator',

    didInsertElement: function() {



        
$(".Navigator-content ul").click(function() {
         alert('click');
       $(this).css("background-color","#d2d2d2");
       //$(this).addClass('active-item');
        });
        
    }


    


});
