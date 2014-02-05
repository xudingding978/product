HubStar.ProfilePartnersController = Ember.Controller.extend({
    content: [],
    clientID: "",
    partnerID: "",
    model: "",
    delID: "",
    addPartner: true,
    currentAddPartnerPic: null,
    selectedPartnerPic: "",
    partnerNew: "",
    is_authentic_user: false,
    needs: ['permission', 'applicationFeedback', 'profile'],
    addingPartnerObserver: function() {
        var addProfilePic = this.get('currentAddPartnerPic').split("/profiles/")[1];
        this.set('selectedPartnerPic', HubStar.Profile.find(addProfilePic).get('profile_pic_url'));
    }.observes('currentAddPartnerPic'),
    getClientId: function(model) {
        this.set("partnerNew", "");
        this.set('content', []);
        this.set("model", model);
        this.set('clientID', model.id);
        this.set('loadingTime', false);
        this.set('partnerID', model.get('profile_partner_ids'));
        if (this.get('partnerID') !== null && this.get('partnerID') !== 'undefined' && this.get('partnerID') !== "") {
            this.set('loadingTime', true);
            var data = HubStar.Mega.find({RequireType: "partner", profile_partner_ids: this.get('partnerID')});
            var that = this;
            data.addObserver('isLoaded', function() {
                that.checkAuthenticUser();
                if (data.get('isLoaded')) {
                    that.setContent(data);
                    that.get('controllers.profile').paternsStatistics(this.get('content').get("length"));
                    var lastPositionId = HubStar.get('lastPositionId');
                    var lastPosition = HubStar.get("scrollPartenerPosition");
                    if (model.id === lastPositionId) {
                        $(window).scrollTop(lastPosition);
                    }
                    that.set('loadingTime', false);
                    setTimeout(function() {
                        $('#masonry_user_container').masonry("reload");
                    }, 200);
                }
            });
        }
//        var lastPositionId = HubStar.get('lastPositionId');
//        var lastPosition = HubStar.get("scrollPartenerPosition");
//        if (model.id === lastPositionId)
//        {
//
//            $(window).scrollTop(lastPosition);
//
//        }
        this.checkAuthenticUser();
    }
    ,
    deleteSelectedPartner: function(idDel) {
        if (idDel !== undefined)
        {
            this.set("delID", idDel);
        }
        else
        {
            idDel = this.get("delID");
        }
        var message = "Remove this partner?";
        this.set("message", message);
        this.set('makeSureDelete', true);
        if (this.get('willDelete')) {
            var ids = this.get("partnerID").split(",");
            var delResult = "";
            for (var i = 0; i < ids.length; i++)
            {
                if (idDel !== ids[i])
                {
                    delResult = delResult + ids[i] + ",";
                }
            }
            delResult = delResult.substr(0, delResult.length - 1);
            this.set('partnerID', delResult);
            var profileOwner = HubStar.Profile.find(this.get('clientID'));
            profileOwner.set('profile_partner_ids', this.get('partnerID'));
            this.removePartnerObject(idDel);
            profileOwner.store.commit();
            this.get('controllers.profile').paternsStatistics(this.get('content').get("length"));
            $('#masonry_user_container').masonry("reload");
            this.cancelDelete();
        } else {
            this.set('willDelete', true);
            //HubStar.set('data', model);
        }
    },
    removePartnerObject: function(partner_id)
    {
        var data = this.get('content');
        for (var i = 0; i < data.get("length"); i++) {
            var tempmega = data.objectAt(i);
            if (tempmega.get('id') === partner_id) {
                data.removeObject(tempmega);
                break;
            }
        }
    },
    cancelDelete: function() {
        this.set('willDelete', false);
        this.set('makeSureDelete', false);
    },
    submit: function() {
        var client_input = this.get("currentAddPartnerPic");
        if (client_input.indexOf("/profiles/") !== -1) {
            var client_id = client_input.split("/profiles/")[1];
            var temp = this.get('partnerID');
            if (temp === null || temp === "") {
                this.set('partnerID', client_id);
                this.pushUptoBackend(client_id);
            } else {
                if (temp.indexOf(client_id) !== -1) {

                    this.get('controllers.applicationFeedback').statusObserver(null, "This partner is already in your list", "warnning");
                }
                else if (this.get("clientID") === client_id) {
                    this.get('controllers.applicationFeedback').statusObserver(null, "Please do not add yourself", "warnning");
                }
                else {
                    this.set('partnerID', client_id + "," + temp);
                    this.pushUptoBackend(client_id);
                }
            }

            this.get('controllers.profile').paternsStatistics(this.get('content').get("length"));

        } else {
            this.get('controllers.applicationFeedback').statusObserver(null, "Please input valid url", "warnning");
        }
    },
    pushUptoBackend: function(client_id)
    {
        var profileOwner = HubStar.Profile.find(this.get('clientID'));
        profileOwner.set('profile_partner_ids', this.get('partnerID'));
        profileOwner.store.commit();
        var newPartner = HubStar.Mega.find(client_id);
        this.get("content").pushObject(newPartner);
        $('#masonry_user_container').masonry("reload");

        $('#masonry_user_container').imagesLoaded(function() {
            var container = document.querySelector('#masonry_user_container');
            var msnry = new Masonry(container, {
                itemSelector: '.box',
                columnWidth: 185,
              
                isFitWidth: true
            });
//            $('#masonry_user_container').masonry({
//                itemSelector: '.box',
//                columnWidth: 185,
//                isFitWidth: true
//            });
        });

    },
    checkAuthenticUser: function() {
        var currentUser = HubStar.User.find(localStorage.loginStatus);
        var current_user_email = currentUser.get('email');
        var permissionController = this.get('controllers.permission');
        var that = this;
        var is_authentic_user = permissionController.checkAuthenticUser(that.get("model").get("owner"), that.get("model").get("profile_editors"), current_user_email);
        that.set("is_authentic_user", is_authentic_user);
        currentUser.addObserver('isLoaded', function() {
            var current_user_email = currentUser.get('email');
            if (currentUser.get('isLoaded')) {
                var is_authentic_user = permissionController.checkAuthenticUser(that.get("model").get("owner"), that.get("model").get("profile_editors"), current_user_email);
                that.set("is_authentic_user", is_authentic_user);
            }
        });
    },
    searchPartner: function(searchKeyWord) {
        this.set('content', []);
        var data = HubStar.Mega.find({RequireType: "partnerSearch", profile_partner_ids: this.get('partnerID'), "keyword": searchKeyWord});
        var that = this;
        this.set('loadingTime', true);
        data.addObserver('isLoaded', function() {
            that.checkAuthenticUser();
            if (data.get('isLoaded')) {
                that.setContent(data);
                that.set('loadingTime', false);
                setTimeout(function() {
                    $('#masonry_user_container').masonry("reload");
                }, 200);
            }
        });
    },
    setContent: function(data)
    {
        var that = this;
        for (var i = 0; i < data.get("length"); i++) {
            var tempmega = data.objectAt(i);
            if (i !== data.get("length") - 1) {
                that.set("partnerNew", that.get('partnerNew') + tempmega.get("profile").objectAt(0).get("id") + ",");
            }
            else
            {
                that.set("partnerNew", that.get('partnerNew') + tempmega.get("profile").objectAt(0).get("id"));
            }
            var isFollow = false;
            for (var j = 0; j < tempmega.get("profile").objectAt(0).get("followers").get("length"); j++)
            {
                if (tempmega.get("profile").objectAt(0).get("followers").objectAt(j).get("follower_id") === localStorage.loginStatus)
                {
                    isFollow = true;
                    break;
                }
            }
            tempmega.get("profile").objectAt(0).set("isFollowCurrentUser", isFollow);
            that.get("content").pushObject(tempmega);
        }
    }

}
);
