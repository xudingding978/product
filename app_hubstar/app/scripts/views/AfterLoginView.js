
HubStar.AfterLoginView = Ember.View.extend({
    templateName: 'afterLogin',
    newProfile: false,
    profiles: null,
    willInsertElement: function() {
    },
    didInsertElement: function() {


        $(document).ready(function() {
            $("#profiles_display").mCustomScrollbar({
                scrollButtons: {
                    enable: false,
                    scrollSpeed: "auto"
                },
                advanced: {
                    updateOnBrowserResize: true,
                    updateOnContentResize: true,
                    autoScrollOnFocus: false,
                    normalizeMouseWheelDelta: false
                },
                autoHideScrollbar: true,
                mouseWheel: true,
                theme: "dark-2",
                set_height: 100
            });



        });


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
        document.cookie = 'Session=; path=/; domain=.trendsideas.com; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    },
    showUserDropDown: function() {
        if ($('#user-dd-menu').css('display') === 'block') {
            $("#user-dd-menu").attr("style", "padding: inherit; width: 178px; right: 60px; position: relative; top:30px;display:none");

        }
        else {
            $("#user-dd-menu").attr("style", "padding: inherit; width: 178px; right: 60px; position: relative; top:30px;display:block");

        }
        this.loadProfile();

    },
    userDisplaynone: function(checking) {
        if (checking === "myUserProfile") {
            location.href = this.get("controller").get("myUserProfile");
            $("#user-dd-menu").attr("style", "display:none");

        } else if (checking === "myMessageBoard") {
            location.href = this.get("controller").get("myMessageBoard");
            $("#user-dd-menu").attr("style", "display:none");

        } else if (checking === "about") {

            window.open('http://about.trendsideas.com/');
            $("#user-dd-menu").attr("style", "display:none");

        } else if (checking === "new") {
            this.set("newProfile", true);
            this.loadProfile();



            //  location.href = '#/profiles/new';
            // $("#user-dd-menu").attr("style", "display:none");

        }

    },
    cancel: function() {
        this.set("newProfile", false);
    },
    loadProfile: function() {

        this.set("profiles", []);
        var user = HubStar.User.find(localStorage.loginStatus);
        for (var i = 0; i < user.get("profiles").get("length"); i++) {
            var id = user.get("profiles").objectAt(i).get("profile_id");
            var name = user.get("profiles").objectAt(i).get("profile_name");
            var pic = user.get("profiles").objectAt(i).get("profile_pic");
            this.get("profiles").pushObject({'profile_id': id, 'profile_name': name, "profile_pic": pic});

        }

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

