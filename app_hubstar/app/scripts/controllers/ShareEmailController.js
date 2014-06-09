HubStar.ShareEmailController = Ember.Controller.extend({
    needs: ['permission', 'applicationFeedback', 'user', 'profile', "mega", 'article', 'video', 'application'],
    init: function()
    {
    },
    checkAuthority: function() {
        var currentUser = HubStar.User.find(localStorage.loginStatus);
        var current_user_email = currentUser.get('email');
        var profile = this.get("controllers.profile").get("model");
        var permissionController = this.get('controllers.permission');
        var role = permissionController.checkAuthenticEdit(profile.get("profile_creator"), profile.get("profile_administrator"), profile.get("profile_editor"));
        var is_authentic_user = permissionController.checkAuthenticUser(profile.get("owner"), profile.get("profile_editors"), current_user_email);
        if (is_authentic_user) {
            this.set("isCreator", true);
            this.set("isAdministrator", true);
        }
        else
        {
            if (role === "creator")
            {
                this.set("isCreator", true);
                this.set("isAdministrator", true);
            }
            else if (role === "administrator")
            {
                this.set("isCreator", false);
                this.set("isAdministrator", true);
            }
            else {
                this.set("isCreator", false);
                this.set("isAdministrator", false);
            }
        }
    },
    getClientId: function(id) {
        this.checkAuthority();
        this.set('loadingTime', true);
        this.set('clientID', id);
        var profile = this.get("controllers.profile").get("model");
        this.set("administrator", profile.get("profile_administrator"));
        this.set("editor", profile.get("profile_editor"));
        var that = this;
        requiredBackEnd('followers', 'ReadProfilePic', id, 'POST', function(params) {
            that.set("contentFollowerPhoto", []);
            that.set("contentCreatorPhoto", []);
            that.set("contentAdministratorPhoto", []);
            that.set("contentEditorPhoto", []);
            if (params === undefined)
            {
            }
            else
            {
                for (var i = 0; i < params.get("length"); i++)
                {
                    if (profile.get("profile_creator") !== null && ((profile.get("profile_creator").indexOf(params.objectAt(i).record_id) !== -1 &&
                            (profile.get("profile_creator")[profile.get("profile_creator").indexOf(params.objectAt(i).record_id) - 1] === "," ||
                                    profile.get("profile_creator")[profile.get("profile_creator").indexOf(params.objectAt(i).record_id) + params.objectAt(i).record_id.length] === ",")) ||
                            profile.get("profile_creator") === params.objectAt(i).record_id))
                    {
                        that.get("contentCreatorPhoto").pushObject(params.objectAt(i));
                    }
                    else if (profile.get("profile_administrator") !== null && ((profile.get("profile_administrator").indexOf(params.objectAt(i).record_id) !== -1 &&
                            (profile.get("profile_administrator")[profile.get("profile_administrator").indexOf(params.objectAt(i).record_id) - 1] === "," ||
                                    profile.get("profile_administrator")[profile.get("profile_administrator").indexOf(params.objectAt(i).record_id) + params.objectAt(i).record_id.length] === ",")) ||
                            profile.get("profile_administrator") === params.objectAt(i).record_id))
                    {
                        //params.objectAt(i)["isClick"] = true;
                        that.get("contentAdministratorPhoto").pushObject(params.objectAt(i));
                    }
                    else if (profile.get("profile_editor") !== null && ((profile.get("profile_editor").indexOf(params.objectAt(i).record_id) !== -1 &&
                            (profile.get("profile_editor")[profile.get("profile_editor").indexOf(params.objectAt(i).record_id) - 1] === "," ||
                                    profile.get("profile_editor")[profile.get("profile_editor").indexOf(params.objectAt(i).record_id) + params.objectAt(i).record_id.length] === ",")) ||
                            profile.get("profile_editor") === params.objectAt(i).record_id))
                    {
                        //params.objectAt(i)["isClick"] = true;
                        that.get("contentEditorPhoto").pushObject(params.objectAt(i));
                    }
                    else
                    {
                        //params.objectAt(i)["isClick"] = false;
                        that.get("contentFollowerPhoto").pushObject(params.objectAt(i));
                    }
                }
            }
            that.set('loadingTime', false);
        });
    }
});