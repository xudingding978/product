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
    init: function()
    {

    },
    getClientId: function(id) {
        this.set('loadingTime', true);
        this.set('clientID', id);
        var dataNew = new Array();
        var profile = this.get("controllers.profile").get("model");
        this.set("administrator", profile.get("administrator"));
        this.set("editor", profile.get("editor"));
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
                    if ((profile.get("creator").indexOf(params.objectAt(i)["record_id"]) !== -1 &&
                            (profile.get("creator")[profile.get("creator").indexOf(params.objectAt(i)["record_id"]) - 1] === "," ||
                                    profile.get("creator")[profile.get("creator").indexOf(params.objectAt(i)["record_id"]) + params.objectAt(i)["record_id"].length] === ",")) ||
                            profile.get("creator") === params.objectAt(i)["record_id"])
                    {
                        that.get("contentCreatorPhoto").pushObject(params.objectAt(i));
                    }
                    else if ((profile.get("administrator").indexOf(params.objectAt(i)["record_id"]) !== -1 &&
                            (profile.get("administrator")[profile.get("administrator").indexOf(params.objectAt(i)["record_id"]) - 1] === "," ||
                                    profile.get("administrator")[profile.get("administrator").indexOf(params.objectAt(i)["record_id"]) + params.objectAt(i)["record_id"].length] === ",")) ||
                            profile.get("administrator") === params.objectAt(i)["record_id"])
                    {
                        //params.objectAt(i)["isClick"] = true;
                        that.get("contentAdministratorPhoto").pushObject(params.objectAt(i));
                    }
                    else if ((profile.get("editor").indexOf(params.objectAt(i)["record_id"]) !== -1 &&
                            (profile.get("editor")[profile.get("editor").indexOf(params.objectAt(i)["record_id"]) - 1] === "," ||
                                    profile.get("editor")[profile.get("editor").indexOf(params.objectAt(i)["record_id"]) + params.objectAt(i)["record_id"].length] === ",")) ||
                            profile.get("editor") === params.objectAt(i)["record_id"])
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
    addToAdministrator: function(id) {
        var profile = this.get("controllers.profile").get("model");
        var tempid = 0;
        for (var i = 0; i < this.get("contentFollowerPhoto").get('length'); i++) {
            if (id === this.get("contentFollowerPhoto").objectAt(i)["record_id"])
            {
                this.get("contentAdministratorPhoto").pushObject(this.get("contentFollowerPhoto").objectAt(i));
                if (profile.get("administrator") !== "") {
                    profile.set("administrator", profile.get("administrator") + "," + id);
                }
                else
                {
                    profile.set("administrator", profile.get("administrator") + id);
                }
                break;
            }
        }
        var temp = this.get("contentFollowerPhoto");
        this.set("contentFollowerPhoto", []);
        for (var j = 0; j < temp.get("length"); j++) {
            if (id === temp.objectAt(j)["record_id"])
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
        var tempid = 0;
        for (var i = 0; i < this.get("contentFollowerPhoto").get('length'); i++) {
            if (id === this.get("contentFollowerPhoto").objectAt(i)["record_id"])
            {
                this.get("contentEditorPhoto").pushObject(this.get("contentFollowerPhoto").objectAt(i));
                if (profile.get("editor") !== "") {
                    profile.set("editor", profile.get("editor") + "," + id);
                }
                else
                {
                    profile.set("editor", profile.get("editor") + id);
                }
                break;
            }
        }
        var temp = this.get("contentFollowerPhoto");
        this.set("contentFollowerPhoto", []);
        for (var j = 0; j < temp.get("length"); j++) {
            if (id === temp.objectAt(j)["record_id"])
            {
            }
            else
            {
                this.get("contentFollowerPhoto").pushObject(temp.objectAt(j));
            }
        }
    },
    checkAdministratorsOrEditorsChange: function(newResults, oldResults, type) {
        var profile = this.get("controllers.profile").get("model");
        var administrators_change = [];
        var dataDel = [];
        var dataAdd = [];
        var administrators = newResults;
        var oldAdministrators = oldResults.split(",");
        for (var j = 0; j < oldAdministrators.length; j++)
        {
            var flagDel = false;
            for (var i = 0; i < administrators.get("length"); i++)
            {
                if (oldAdministrators[j] === administrators.objectAt(i)["record_id"])
                {
                    flagDel = true;
                    administrators.objectAt(i)["isChange"] = true;
                }
            }
            if (flagDel === false && oldAdministrators[j] !== "")
            {
                var item = [];
                item["profile_id"] = profile.get("id");
                item["user_id"] = oldAdministrators[j];
                item["type"] = "administrator";
                dataDel.pushObject(item);
            }
        }
        for (var i = 0; i < administrators.get("length"); i++)
        {
            if (administrators.objectAt(i)["isChange"] === false)
            {
                var item = [];
                item["profile_id"] = profile.get("id");
                item["user_id"] = administrators.objectAt(i)["record_id"];
                item["type"] = type;
                dataAdd.pushObject(item);
            }
        }
        administrators_change["dataDel"]=dataDel;
        administrators_change["dataAdd"]=dataAdd;
        return administrators_change;
    },
    save: function() {
        var profile = this.get("controllers.profile").get("model");
        profile.store.save();
        profile.get('isSaving');
        var that = this;
        profile.then(function() {
            {
                var administrators = that.checkAdministratorsOrEditorsChange(that.get("contentAdministratorPhoto"), that.get("administrator"), "administrator");
                var editors = that.checkAdministratorsOrEditorsChange(that.get("contentEditorPhoto"), that.get("editor"), "editor");
                var data  = [];
                data["administrators"] = administrators;
                data["editors"] = editors;
                var tempComment = "";
                tempComment = JSON.stringify({data:data});
                console.log(data);
                console.log(tempComment);
                requiredBackEnd('users', 'sendNotification', data, 'POST', function(params) {

                });
                that.get("controllers.profile").set("editorAdd", false);
                that.set("administrator", profile.get("administrator"));
                that.set("editor", profile.get("editor"));
            }
        });
    },
    removeEditor: function(id) {
        var profile = this.get("controllers.profile").get("model");
        for (var i = 0; i < this.get("contentEditorPhoto").get('length'); i++) {
            if (id === this.get("contentEditorPhoto").objectAt(i)["record_id"])
            {
                this.get("contentFollowerPhoto").pushObject(this.get("contentEditorPhoto").objectAt(i));
                var s = profile.get("editor").replace(id, "");
                s = s.replace(",,", ",");
                if (s[0] === ",")
                {
                    s = s.substr(1);
                }
                if (s[s.length - 1] === ",")
                {
                    s = s.substr(0, s.length - 1);
                }
                profile.set("editor", s);
                break;
            }
        }
        var temp = this.get("contentEditorPhoto");
        this.set("contentEditorPhoto", []);
        for (var j = 0; j < temp.get("length"); j++) {
            if (id === temp.objectAt(j)["record_id"])
            {
            }
            else
            {

                this.get("contentEditorPhoto").pushObject(temp.objectAt(j));
            }
        }
    },
    removeAdministrator: function(id) {
        var profile = this.get("controllers.profile").get("model");
        var tempid = 0;
        for (var i = 0; i < this.get("contentAdministratorPhoto").get('length'); i++) {
            if (id === this.get("contentAdministratorPhoto").objectAt(i)["record_id"])
            {
                this.get("contentFollowerPhoto").pushObject(this.get("contentAdministratorPhoto").objectAt(i));
                var s = profile.get("administrator").replace(id, "");
                s = s.replace(",,", ",");
                if (s[0] === ",") {
                    s = s.substr(1);
                }
                if (s[s.length - 1] === ",")
                {
                    s = s.substr(0, s.length - 1);
                }
                profile.set("administrator", s);
                break;
            }
        }
        var temp = this.get("contentAdministratorPhoto");
        this.set("contentAdministratorPhoto", []);
        for (var j = 0; j < temp.get("length"); j++) {
            if (id === temp.objectAt(j)["record_id"])
            {
            }
            else
            {
                this.get("contentAdministratorPhoto").pushObject(temp.objectAt(j));
            }
        }
    },
    reviewCancel: function() {
        this.get("controllers.profile").set("editorAdd", false);
        this.set("contentFollowerPhoto", null);
        this.set("contentCreatorPhoto", null);
        this.set("contentAdministratorPhoto", null);
        this.set("contentEditorPhoto", null);
        var profile = this.get("controllers.profile").get("model");
        profile.set("administrator", this.get("administrator"));
        profile.set("editor", this.get("editor"));
    }
}
);
