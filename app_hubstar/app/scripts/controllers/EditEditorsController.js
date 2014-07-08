/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.EditEditorsController = Ember.Controller.extend({
    contentFollowerPhoto: null,
    contentCreatorPhoto: null,
    contentAdministratorPhoto: null,
    contentEditorPhoto: null,
    commenter_photo_url: null,
    needs: ['permission', 'applicationFeedback', 'user', 'userFollowings', 'profile'],
    isUploadPhoto: false,
    isInvitePeople: false,
    editorSelection: "",
    administrator: "",
    editor: "",
    isCreator: false,
    isAdministrator: false,
    actions: {
        reviewCancel: function() {
            this.get("controllers.profile").set("editorAdd", false);
            this.set("contentFollowerPhoto", null);
            this.set("contentCreatorPhoto", null);
            this.set("contentAdministratorPhoto", null);
            this.set("contentEditorPhoto", null);
            var profile = this.get("controllers.profile").get("model");
            profile.set("profile_administrator", this.get("administrator"));
            profile.set("profile_editor", this.get("editor"));
        },
        removeAdministrator: function(id) {
            var profile = this.get("controllers.profile").get("model");
            for (var i = 0; i < this.get("contentAdministratorPhoto").get('length'); i++) {
                if (id === this.get("contentAdministratorPhoto").objectAt(i).record_id)
                {
                    this.get("contentFollowerPhoto").pushObject(this.get("contentAdministratorPhoto").objectAt(i));
                    var s = profile.get("profile_administrator").replace(id, "");
                    s = s.replace(",,", ",");
                    if (s[0] === ",") {
                        s = s.substr(1);
                    }
                    if (s[s.length - 1] === ",")
                    {
                        s = s.substr(0, s.length - 1);
                    }
                    profile.set("profile_administrator", s);
                    break;
                }
            }
            var temp = this.get("contentAdministratorPhoto");
            this.set("contentAdministratorPhoto", []);
            for (var j = 0; j < temp.get("length"); j++) {
                if (id === temp.objectAt(j).record_id)
                {
                }
                else
                {
                    this.get("contentAdministratorPhoto").pushObject(temp.objectAt(j));
                }
            }
        },
        removeEditor: function(id) {
            var profile = this.get("controllers.profile").get("model");
            for (var i = 0; i < this.get("contentEditorPhoto").get('length'); i++) {
                if (id === this.get("contentEditorPhoto").objectAt(i).record_id)
                {
                    this.get("contentFollowerPhoto").pushObject(this.get("contentEditorPhoto").objectAt(i));
                    var s = profile.get("profile_editor").replace(id, "");
                    s = s.replace(",,", ",");
                    if (s[0] === ",")
                    {
                        s = s.substr(1);
                    }
                    if (s[s.length - 1] === ",")
                    {
                        s = s.substr(0, s.length - 1);
                    }
                    profile.set("profile_editor", s);
                    break;
                }
            }
            var temp = this.get("contentEditorPhoto");
            this.set("contentEditorPhoto", []);
            for (var j = 0; j < temp.get("length"); j++) {
                if (id === temp.objectAt(j).record_id)
                {
                }
                else
                {

                    this.get("contentEditorPhoto").pushObject(temp.objectAt(j));
                }
            }
        },
        addToAdministrator: function(id) {
            var profile = this.get("controllers.profile").get("model");
            for (var i = 0; i < this.get("contentFollowerPhoto").get('length'); i++) {
                if (id === this.get("contentFollowerPhoto").objectAt(i).record_id)
                {
                    this.get("contentAdministratorPhoto").pushObject(this.get("contentFollowerPhoto").objectAt(i));
                    if (profile.get("profile_administrator") !== "" && profile.get("profile_administrator") !== null) {
                        profile.set("profile_administrator", profile.get("profile_administrator") + "," + id);
                    }
                    else
                    {
                        profile.set("profile_administrator", id);
                    }
                    break;
                }
            }
            var temp = this.get("contentFollowerPhoto");
            this.set("contentFollowerPhoto", []);
            for (var j = 0; j < temp.get("length"); j++) {
                if (id === temp.objectAt(j).record_id)
                {
                }
                else
                {
                    this.get("contentFollowerPhoto").pushObject(temp.objectAt(j));
                }
            }
        },
        addToEditor: function(id) {
            var profile = this.get("controllers.profile").get("model");
            for (var i = 0; i < this.get("contentFollowerPhoto").get('length'); i++) {
                if (id === this.get("contentFollowerPhoto").objectAt(i).record_id)
                {
                    this.get("contentEditorPhoto").pushObject(this.get("contentFollowerPhoto").objectAt(i));
                    if (profile.get("profile_editor") !== "" && profile.get("profile_editor") !== null) {
                        profile.set("profile_editor", profile.get("profile_editor") + "," + id);
                    }
                    else
                    {
                        profile.set("profile_editor", id);
                    }
                    break;
                }
            }
            var temp = this.get("contentFollowerPhoto");
            this.set("contentFollowerPhoto", []);
            for (var j = 0; j < temp.get("length"); j++) {
                if (id === temp.objectAt(j).record_id)
                {
                }
                else
                {
                    this.get("contentFollowerPhoto").pushObject(temp.objectAt(j));
                }
            }
        },
        save: function() {
            var profile = this.get("controllers.profile").get("model");
            if (profile.get("profile_administrator") !== this.get("administrator") || profile.get("profile_editor") !== this.get("editor")) {
                var a = profile.save();
                //profile.get('isSaving');
                var that = this;
                a.then(function() {
                    {
                        var administrators = that.checkAdministratorsOrEditorsChange(that.get("contentAdministratorPhoto"), that.get("administrator"), "administrator");
                        var editors = that.checkAdministratorsOrEditorsChange(that.get("contentEditorPhoto"), that.get("editor"), "editor");
                        var data = [];
                        data[0] = administrators;
                        data[1] = editors;
                        var tempComment = "";
                        tempComment = JSON.stringify(data);
                        requiredBackEnd('users', 'sendNotification', data, 'POST', function() {
                            that.get('controllers.applicationFeedback').statusObserver(null, "the requests have been sent", "warnning");
                        });
                        that.get("controllers.profile").set("editorAdd", false);
                        that.set("administrator", profile.get("profile_administrator"));
                        that.set("editor", profile.get("profile_editor"));
                    }
                }, function() {
                    that.get('controllers.applicationFeedback').statusObserver(null, "Fail", "warnning");
                });
            }
            else
            {
                this.get('controllers.applicationFeedback').statusObserver(null, "Sorry, there is no change", "warnning");
            }
        }

    },
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
    },
    checkAdministratorsOrEditorsChange: function(newResults, oldResults, type) {
        var profile = this.get("controllers.profile").get("model");
        var administrators_change = [];
        var dataDel = [];
        var dataAdd = [];
        var administrators = newResults;
        var oldAdministrators = "";
        if (oldResults !== null) {
            oldAdministrators = oldResults.split(",");
        }
        var item = [];
        var j = 0;
        var i = 0;
        for (j = 0; j < oldAdministrators.length; j++)
        {
            var flagDel = false;
            for (i = 0; i < administrators.get("length"); i++)
            {
                if (oldAdministrators[j] === administrators.objectAt(i).record_id)
                {
                    flagDel = true;
                    administrators.objectAt(i).isChange = true;
                }
            }
            if (flagDel === false && oldAdministrators[j] !== "")
            {
                item = [];
                item[0] = profile.get("id");
                item[1] = oldAdministrators[j];
                item[2] = type;
                dataDel.pushObject(item);
            }
        }
        for (i = 0; i < administrators.get("length"); i++)
        {
            if (administrators.objectAt(i).isChange === false)
            {
                item = [];
                item[0] = profile.get("id");
                item[1] = administrators.objectAt(i).record_id;
                item[2] = type;
                dataAdd.pushObject(item);
            }
        }
        administrators_change[0] = dataDel;
        administrators_change[1] = dataAdd;
        return administrators_change;
    }



}
);
