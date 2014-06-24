
HubStar.AfterLoginView = Ember.View.extend({
    templateName: 'afterLogin',
    newProfile: false,
    profiles: null,
    willInsertElement: function() {
    },
    didInsertElement: function() {
    },
    logout: function() {
        this.resetTopAd();
        localStorage.removeItem('loginStatus');
        document.cookie = 'Session=; path=/; domain=.trendsideas.com; expires=Thu, 01 Jan 1970 00:00:00 GMT';
        location.reload();       
    },
    resetTopAd: function() {
        var tempComment = [localStorage.loginStatus];
        requiredBackEnd('users', 'ResetTopAds', tempComment, 'POST', function() {
            HubStar.set("isTopAdDisplay", true);
        });
    },
    showUserDropDown: function() {
        if ($('#user-dd-menu').css('display') === 'block') {
            $("#user-dd-menu").hide();
            $("#cancel").css("display", "none");
        }
        else if ($('#user-dd-menu').css('display') === 'none') {
            this.set("newProfile", false);
            $("#user-dd-menu").show();
            $("#cancel").css("display", "block");
        }
    },
    userDisplaynone: function(checking) {
        if (checking === "myUserProfile") {
            location.href = this.get("controller").get("myUserProfile");
           // $("#user-dd-menu").attr("style", "display:none");
            this.get("controller").set('userProfile', false);
            $("#cancel").css("display", "none");
            $(window).scrollTop(0);
        } else if (checking === "myMessageBoard") {
            location.href = this.get("controller").get("myMessageBoard");
            //$("#user-dd-menu").attr("style", "display:none");
            this.get("controller").set('userProfile', false);
            $("#cancel").css("display", "none");

        } else if (checking === "about") {

            window.open('http://about.trendsideas.com/');
            $("#user-dd-menu").attr("style", "display:none");
            $("#cancel").css("display", "none");

        } else if (checking === "new") {
             $("#cancel").css("display", "none");
              this.get("controller").set("newProfile", true);
        }
        else if (checking === "newGroup") {
            location.href = "#/groups/new";           
            this.get("controller").set('userProfile', false);
            //$("#user-dd-menu").attr("style", "display:none");
            $("#cancel").css("display", "none");
        }
    },
    cancel: function() {
        this.set("newProfile", false);
        $("#user-dd-menu").attr("style", "display:none");
        $("#cancel").css("display", "none");
    },
    startTour: function() {

        $("#user-dd-menu").attr("style", "display:none");
        $("#profileDashboard").attr("style", "display:none");
       $("#profilePanel").removeClass("panel");
        $(".brand").addClass("tour-background");
        $(".Geo-Filter").addClass("tour-background");
        $("#login_detail").addClass("tour-background");
        var address = document.URL;
        var urlName = address.split("#")[1].split("/")[1];
        if (urlName === "search") {
            this.get("controller").set("isNavigatorDropdown", true);
        }
        var that = this;
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
                window.location.href = '/#/search/default';
                $(window).scrollTop(0);
                that.get("controller").set("isNavigatorDropdown", false);
            }
            that.get("controller").set('userProfile', false);

        });
    }
});

