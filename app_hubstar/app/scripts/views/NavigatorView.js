HubStar.NavigatorView = Ember.View.extend({
    templateName: 'navigator',

    didInsertElement: function() {
  $(document).ready(function() {
                 $("#switchbar").mouseup(function( event ) {
                      var mousedownX =   event.pageX;
                      var middle = 1056;
                      console.log(mousedownX);
                      var d = 23;
                      if(mousedownX < middle - d/2){
                          $('#switchbarBtn').attr("style", "margin-left:0px;");
                      }else if (mousedownX >= (middle - d/2)&&mousedownX < (middle + d/2)){
                          $('#switchbarBtn').attr("style", "margin-left:13px;");
                      }
                      else if (mousedownX >= (middle + d/2)){
                           $('#switchbarBtn').attr("style", "margin-left:28px;");
                          
                      }
                      
                      
                      
                 });
        
    });
    
    }

});
