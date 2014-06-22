HubStar.UserEditView = Ember.View.extend({
    templateName: 'userEdit',
    didInsertElement: function() {
      var u = HubStar.User.find(localStorage.loginStatus);
        var that =this;
            u.then(function() {
                if ((u.get("email")).match(/@trendsideas.com/g) !== "undefined"
                        && (u.get("email")).match(/@trendsideas.com/g) !== ""
                        && (u.get("email")).match(/@trendsideas.com/g) !== null)
                {
                    that.set("is_trends_user", true);
                }
                else {
                    that.set("is_trends_user", false);
                }
            });
        $(document).ready(function() {
            if (HubStar.get("userCreator") >= 3) {
                $("#user-profile-creator").mCustomScrollbar({
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
                    autoHideScrollbar: false,
                    mouseWheel: true,
                    theme: "dark-2",
                    set_height: 70
                });
            }
            if (HubStar.get("userAdministrator") >= 3) {
                $("#user-profile-admin").mCustomScrollbar({
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
                    autoHideScrollbar: false,
                    mouseWheel: true,
                    theme: "dark-2",
                    set_height: 70
                });
            }
            if (HubStar.get("userEditor") >= 3) {
                $("#user-profile-editor").mCustomScrollbar({
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
                    autoHideScrollbar: false,
                    mouseWheel: true,
                    theme: "dark-2",
                    set_height: 70
                });
            }
        });
    }
});