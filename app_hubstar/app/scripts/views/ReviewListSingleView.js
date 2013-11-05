HubStar.ReviewListSingleView = Ember.View.extend({
    templateName: 'reviewListSingle',
    isDown:false,
    didInsertElement: function() {


        $(document).ready(function() {
            setTimeout(function() {
                $('#masonry_user_container').masonry("reloadItems");
            }, 200);
        });

    },
    
//     click: function(evt) {
//    alert("ClickableView was clicked!");
//  }

    downContent: function(event) {
        var id = "#" + event;
        var up_button = "#up_button_" + event;
        var down_button = "#down_button_" + event;
        var review_reply = "#reviewReplyData_" + event;
       this.get("controller").transitionToRoute('review', {id: event});
        var content = "#review_content_" + event;
        $(up_button).attr("style", "position: relative;  font-size: 18px; color: #888;margin: 0 10px; display:inline-block;");
        $(down_button).attr("style", "position: relative; display: none;  font-size: 18px; color: #888;margin: 0 10px;");
        $(content).animate({width: '420px', height: '120px', position: 'relative', display: 'inline-block', overflow: 'auto'}, 1000);
        $(review_reply).show(10);
        
  // this.showOneReview(event);
        
   
    },
    upContent: function(event) {

        var id = "#" + event;
        var up_button = "#up_button_" + event;
        var down_button = "#down_button_" + event;
        var content = "#review_content_" + event;
          var review_reply = "#reviewReplyData_" + event;
        $(up_button).attr("style", "position: relative;  font-size: 18px; color: #888;margin: 0 10px; display:none");
        $(down_button).attr("style", "position: relative; display: none;  font-size: 18px; color: #888;margin: 0 10px; display:inline-block");
        $(content).animate({width: '390px', height: '20px', position: 'relative', dispaly: 'none', overflow: 'hidden'}, 1000);
         $(review_reply).hide(10);
    },
            
    showOneReview:function(event){
      // for (var i = 0; i <  this.get("controller").get('model').get("length"); i ++) {
            if ( this.get("controller").get('model').get('review_id') === event){
                this.set("isDown", false);
                this.downContent(event);
                console.log(this.get("controller").get('model'));
             //    this.upContent( this.get("controller").get("controllers.profile").get('reviews').get('review_id'));
          //   console.log(HubStar.Review.find(event));
            } else  if ( this.get("controller").get('model').get('review_id') !== event){
                 this.set("isDown", true);
                console.log(this.get("isDown"));
                  this.upContent( this.get("controller").get('reviews').get('review_id'));
            }
     //   }
      }
    
    
});


