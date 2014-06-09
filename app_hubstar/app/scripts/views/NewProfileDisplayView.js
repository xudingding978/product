

HubStar.NewProfileDisplayView = Ember.View.extend({
    templateName: 'newProfileDisplay',
    didInsertElement: function() {
        $(document).ready(function() {
            if (HubStar.get("userCreator") >= 6) {
                $("#profile-creator").mCustomScrollbar({
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
                    set_height: 200
                });
            }
            if (HubStar.get("userAdministrator") >= 6) {
                $("#profile-admin").mCustomScrollbar({
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
                    set_height: 200
                });
            }
            if (HubStar.get("userEditor") >= 6) {
                $("#profile-editor").mCustomScrollbar({
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
                    set_height: 200
                });
            }
        });
    },
    cancel: function() {
        this.get("controller").get("controllers.application").set("newProfile", false);
        $("#user-dd-menu").hide();
        $("#cancel").css("display", "none");
    },
    clickToDisplay: function(checking) {

        if (checking === "Creator") {
            console.log("crteaterir");
            $('#profile-admin').css({"display": 'none'}, 500);
            $('#profile-editor').css({"display": 'none'}, 500);
            $('#profile-creator').css({"display": 'block'}, 500);
            $('#profile-creator-title > div > i').addClass("fa-caret-up");
            $('#profile-admin-title > div > i').removeClass("fa-caret-up");
            $('#profile-editor-title > div > i').removeClass("fa-caret-up");
            $('#profile-creator-title').addClass("title-list-selected");
            $('#profile-admin-title').removeClass("title-list-selected");
            $('#profile-editor-title').removeClass("title-list-selected");
        }
        else if (checking === "Admin") {
            console.log("Admin");
            $('#profile-creator').css({"display": 'none'}, 500);
            $('#profile-admin').css({"display": 'block'}, 10);
            $('#profile-editor').css({"display": 'none'}, 500);
            $('#profile-creator-title > div > i').removeClass("fa-caret-up");
            $('#profile-admin-title > div > i').addClass("fa-caret-up");
            $('#profile-editor-title > div > i').removeClass("fa-caret-up");
            $('#profile-creator-title').removeClass("title-list-selected");
            $('#profile-admin-title').addClass("title-list-selected");
            $('#profile-editor-title').removeClass("title-list-selected");

        }
        else if (checking === "Editor") {
            console.log("Editor");
            $('#profile-creator').css({"display": 'none'}, 500);
            $('#profile-admin').css({'display': 'none'}, 500);
            $('#profile-editor').css({"display": 'block'}, 10);
            $('#profile-creator-title > div > i').removeClass("fa-caret-up");
            $('#profile-admin-title > div > i').removeClass("fa-caret-up");
            $('#profile-editor-title > div > i').addClass("fa-caret-up");
            $('#profile-creator-title').removeClass("title-list-selected");
            $('#profile-admin-title').removeClass("title-list-selected");
            $('#profile-editor-title').addClass("title-list-selected");
        }

    }
});

