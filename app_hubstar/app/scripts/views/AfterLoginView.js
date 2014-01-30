
HubStar.AfterLoginView = Ember.View.extend({
    templateName: 'afterLogin',
    willInsertElement: function() {
    },
    logout: function() {
        $.ajax({
            type: 'POST',
            url: getRestAPIURL() + '/logout',
            contentType: 'application/json; charset=uft-8',
            dataType: 'json',
            success: function(param) {
            }
        });
        localStorage.removeItem('loginStatus');
        this.get('controller').transitionTo("indexIndex");

    },
    
    startTour:function(){
     
                  $("#profileDashboard").attr("style", "display:none");
                $("#profilePanel").removeClass("panel");
     //           $("#profileFront").removeClass("front");
                $(".brand").addClass("tour-background");
                $(".Geo-Filter").addClass("tour-background");
                $("#login_detail").addClass("tour-background");
                 $("#profileName").addClass("profileName");
                


                introJs().setOption('doneLabel', 'Next').start().oncomplete(function() {
                    var address = document.URL;
                    var urlName = address.split("#")[1].split("/")[1];
                    var target = address.split("#")[1].split("/")[2];
                    if (urlName === "users")
                    {
                        window.location.href = '/#/users/' + target;
                        $(window).scrollTop(0);
                        
                    }
                    else if (urlName === "profiles") {
                        window.location.href = '/#/profiles/' + target;
                        $(window).scrollTop(500);
                    }
                    else{
                    window.location.href = '/#/search';
                    $(window).scrollTop(0);
                    }
                });
    }
});

