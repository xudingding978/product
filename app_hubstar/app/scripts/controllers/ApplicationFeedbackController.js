HubStar.ApplicationFeedbackController = Ember.Controller.extend({
    needs: ['application'],
    photo_url: '',
    is_remove:false,

    
    setFeedback: function(status) {
     
          this.set('is_remove',false);
       if(this.get('is_remove')===false){
             
           this.set('status', status);
        this.set('feedback', true);
        Ember.run.later(function() {

    
          $('.fresh-message').show().animate({
                    top:45      
                }, 400);
              $('.fresh-profile-pic').show().animate({
                    top:25      
                }, 400);
    
                $('.fresh-message').show().delay(5000).animate({
                  top:-20              
                }, 400);        
                $('.fresh-profile-pic').show().delay(5000).animate({
                    top:-40                 
                }, 400);
           
          
          /*  $('#appfeedback').fadeOut(1000, function() {

                that.set('feedback', false); 
            });*/
        }, 500);
       }
        this.set('is_remove',true);
       // console.log("true");
        Ember.run.next(function() {

        });

    },
    
     removeButton:function(){

       if(this.get('is_remove')===true){
   
            $('.fresh-message').hide("slow").animate({
        
                }, 400);
             $('.fresh-profile-pic').hide("slow").animate({
                               
                }, 400);        
          this.set('is_remove',false);

     }},
            
            
            
            
    statusObserver: function(record, infoChecking) {
        var that = this;
        var noError = true;

        if (infoChecking !== null)
        {
            that.set("info", false);
            that.set("succeed", true);
            that.set("warnning", false);
            that.set("failed", false);
            that.setFeedback(infoChecking);
        } else {
            record.addObserver("isError", function() {
                if (record.get("isError")) {
                    that.set("info", false);
                    that.set("succeed", false);
                    that.set("warnning", false);
                    that.set("failed", true);
                    that.setFeedback("There is error");

                    noError = false;
                }
                else {
                }

                record.removeObserver("isError");
            });
            if (noError) {
                record.addObserver("isSaving", function() {
                    if (record.get("isSaving")) {
                        that.set("info", false);
                        that.set("succeed", true);
                        that.set("warnning", false);
                        that.set("failed", false);
                        that.setFeedback("updateSucess");

                    }
                    else {
                        //    console.log('isSaving:   false');
                    }

                    record.removeObserver("isSaving");
                });

            }

        }
    }

});

