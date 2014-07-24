

HubStar.ItemProfilesController = Ember.Controller.extend({
    profiles: null,
    partnerRemove: "",
    profile_partner_ids: null,
    collections: [],
    itemProfileCollectionStatistics: "",
    itemProfilePartnerStatistics: "",
    isPartner: false,
    profileUrl: "",
    is_authentic_user: false,
    is_profile_editing_mode: false,
    follow_status: false,
    needs: ['profile', 'permission', 'profilePartners', 'userFollowings', 'checkingLoginStatus'],
    actions: {
        dropdownPhotoSetting: function(id) {
            var s = '#dropdown_id_' + id;
            $(s).toggleClass('hideClass');
            $(s).click(function() {
                $(this).removeClass('hideClass');
            }).mouseleave(function() {
                $(this).addClass('hideClass');
            });
        },
        removeCollectedItem: function(idDel) {
            this.get('controllers.profilePartners').send("deleteSelectedPartner",idDel);
        },
        toProfilePage: function(model) {
            HubStar.set("scrollPartenerPosition", $(window).scrollTop());
            this.transitionToRoute('profile', model);
            $(window).scrollTop(0);
        },
        followThisUser: function(profile)
        {
            if (this.get("controllers.checkingLoginStatus").popupLogin()) {
                if (profile.get("isFollowCurrentUser") === false)
                {
                    this.get("controllers.userFollowings").followProfile(profile.get("id"));
                    profile.set('isFollowCurrentUser', true);
                }
                else
                {
                    this.get("controllers.userFollowings").unFollowProfile(profile.get("id"));
                    profile.set('isFollowCurrentUser', false);
                }
            }
        }
    },
    init: function() {
        var address = document.URL;
        var isPartner = false;
        if (address.indexOf('profile') !== -1)
        {
            isPartner = true;
            this.checkEditingMode();
        }
        this.set("profiles", HubStar.Mega.find([]));
        var temp = address.indexOf("profiles");
        temp = address.substr(0, temp + 8);
        this.set("profileUrl", temp);
    },
    checkAuthenticUser: function() {
        var currentUser = HubStar.User.find(localStorage.loginStatus);
        var current_user_email = currentUser.get('email');
        var permissionController = this.get('controllers.permission');
        var that = this;
        var role = permissionController.checkAuthenticEdit(that.get("pageModel").get("profile_creator"), that.get("pageModel").get("profile_administrator"), that.get("pageModel").get("profile_editor"));
        var is_edit = false;
        if (role !== "")
        {
            is_edit = true;
        }
        currentUser.then(function() {
            var current_user_email = currentUser.get('email');
            var is_authentic_user = permissionController.checkAuthenticUser(that.get("pageModel").get("owner"), that.get("pageModel").get("profile_editors"), current_user_email);
            that.set("is_authentic_user", is_authentic_user || is_edit);
        });
    },
    checkEditingMode: function()
    {
        this.set('is_profile_editing_mode', false);
        if (HubStar.get('editingMode') === 'profile') {
            this.set('is_profile_editing_mode', true);
            var proController = this.get('controllers.profile');
            this.set('pageModel', proController.get('model'));
            this.checkAuthenticUser();
        }
        else {
            this.set('is_profile_editing_mode', false);
        }
    },
    setPartnerRemove: function() {
        this.set('partnerRemove', false);
    },
    collectionStatistic: function() {
        if (this.get("collections").get("length") !== 0) {
            this.set('itemProfileCollectionStatistics', this.get("collections").get("length"));
        }
        else
        {
            this.set('itemProfileCollectionStatistics', 0);
        }
    },
    partnerStatistic: function() {
        //  this.set("profile_partner_ids", profile.get("profile_partner_ids"));
        if (this.get('profile_partner_ids') !== null) {
            var ids = this.get('profile_partner_ids').split(",");
            this.set('itemProfilePartnerStatistics', ids.get('length'));
        }
        else
        {
            this.set('itemProfilePartnerStatistics', 0);
        }
    }
});
