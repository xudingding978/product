HubStar.UserEditView = Ember.View.extend({
    templateName: 'userEdit',
    is_trends_user: false,
    aa:"!2321321321",
    didInsertElement: function() {
        var u = HubStar.User.find(localStorage.loginStatus);
        var that = this;
        console.log("111111111111");
        u.then(function() {
            if ((u.get("email")).match(/@trendsideas.com/g) !== "undefined"
                    && (u.get("email")).match(/@trendsideas.com/g) !== ""
                    && (u.get("email")).match(/@trendsideas.com/g) !== null)
            {
                console.log("22222222222222");
                that.set("is_trends_user", true);
            }
            else {
                console.log("333333333333333");
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