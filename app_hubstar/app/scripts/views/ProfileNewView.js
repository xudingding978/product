HubStar.ProfileNewView = Ember.View.extend({
    templateName: 'profileNew',
    added: true,
    didInsertElement: function() {
        if (localStorage.loginStatus === null || (localStorage.loginStatus === ""))
        {
            HubStar.set("isLogin", false);
            this.get("controller").transitionTo("index");
        } else {
            HubStar.set("isLogin", true);

            if (HubStar.User.find(localStorage.loginStatus).get("email").match(/@trendsideas.com/g) !== ""
                    && HubStar.User.find(localStorage.loginStatus).get("email").match(/@trendsideas.com/g) !== "undefined"
                    && HubStar.User.find(localStorage.loginStatus).get("email").match(/@trendsideas.com/g) !== null) {

                this.get("controller").get('controllers.application').set("is_trends_user", true);
            } else {
                this.get("controller").get('controllers.application').set("is_trends_user", false);
                this.get("controller").transitionTo("searchIndexTom");
            }
        }
        
          
        var that = this;
        $(document).ready(function(){
             console.log(that.get("controller").get("regionSelection"));
             if (that.get("controller").get("regionSelection") === "Region/State") {
            
             setTimeout(function(){
                  $('.dashdiv').css('display','none');
             },1);

        } else { 
//            console.log("Ally is big");
//            setTimeout(function(){
//                  $('.dashdiv').css('display','inline-block');
//             },1);
        }
            
        });
    },
    addSecond: function() {
        $("#secondEmail").css("display", "table-row");
        $("#firstAdd").css("display", "none");
        this.set("added", true);

    },
    addThird: function() {
        $("#thirdEmail").css("display", "table-row");
        this.set("added", false);
    },
    deleteSecond: function() {
        this.set("added", false);
        $("#secondEmail").css("display", "none");
        $("#firstAdd").css("display", "inline-block");
    },
    deleteThird: function() {
        $("#thirdEmail").css("display", "none");
        this.set("added", true);

    }




});


