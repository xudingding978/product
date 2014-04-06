
HubStar.AfterLoginView = Ember.View.extend({
    templateName: 'afterLogin',
    newProfile: false,
    profiles: null,
    willInsertElement: function() {
    },
    didInsertElement: function() {
    },
    logout: function() {

        localStorage.removeItem('loginStatus');
        this.get('controller').transitionTo("indexIndex");
        document.cookie = 'Session=; path=/; domain=.trendsideas.com; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    },
    showUserDropDown: function() {
        if ($('#user-dd-menu').attr('display') === 'block') {
            $("#user-dd-menu").hide();
           $("#cancel").css("display", "none");
        }
        else  if ($('#user-dd-menu').css('display') === 'none'){
            this.set("newProfile", false);
              $("#user-dd-menu").show();
             $("#cancel").css("display", "block");

        }
        this.loadProfile();
    },
    userDisplaynone: function(checking) {
        if (checking === "myUserProfile") {
            location.href = this.get("controller").get("myUserProfile");
            $("#user-dd-menu").attr("style", "display:none");
            $("#cancel").css("display", "none");
            $(window).scrollTop(0);
        } else if (checking === "myMessageBoard") {
            location.href = this.get("controller").get("myMessageBoard");
            $("#user-dd-menu").attr("style", "display:none");
             $("#cancel").css("display", "none");

        } else if (checking === "about") {

            window.open('http://about.trendsideas.com/');
            $("#user-dd-menu").attr("style", "display:none");
             $("#cancel").css("display", "none");

        } else if (checking === "new") {
          //  this.get("controller").set("newProfile", true);
           // this.loadProfile();
             location.href ="#/profiles/new";
            $("#user-dd-menu").attr("style", "display:none");
             $("#cancel").css("display", "none");
        }

    },
    cancel: function() {
        this.set("newProfile", false);
         $("#user-dd-menu").attr("style", "display:none");
          $("#cancel").css("display", "none");
    },
    loadProfile: function() {
        var user = HubStar.User.find(localStorage.loginStatus);
        this.set("profiles", user.get("profiles"));
    },
    startTour: function() {

        $("#user-dd-menu").attr("style", "display:none");
        $("#profileDashboard").attr("style", "display:none");
        $("#profilePanel").removeClass("panel");
        $(".brand").addClass("tour-background");
        $(".Geo-Filter").addClass("tour-background");
        $("#login_detail").addClass("tour-background");
        introJs().setOption('doneLabel', 'Skip').start().oncomplete(function() {
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
            else {
                window.location.href = '/#/search';
                $(window).scrollTop(0);
            }
        });
    }
});

