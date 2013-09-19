

HubStar.ItemProfilesController = Ember.Controller.extend({
    profiles: null,
    partnerRemove: "",
    profile_partner_ids: null,
    collections: [],
    itemProfileCollectionStatistics: "",
    itemProfilePartnerStatistics: "",
    isPartner: false,
    is_authentic_user: false,
    is_profile_editing_mode: false,
    follow_status:false,
    needs: ['profile', 'permission','profilePartners','userFollowings'],
    init: function() {      
        var address = document.URL;
        if (address.indexOf('profile') !== -1)
        {
            isPartner = true;
            this.checkEditingMode();
        }
        this.set("profiles", HubStar.Mega.find([]));
    },

    followThisUser:function(profile)
    {       
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
    },
     
    checkAuthenticUser: function() {
        var currentUser = HubStar.User.find(localStorage.loginStatus);
        var current_user_email = currentUser.get('email');
        var permissionController = this.get('controllers.permission');
        var that = this;      
        var is_authentic_user = permissionController.checkAuthenticUser(that.get("pageModel").get("owner"), that.get("pageModel").get("profile_editors"), current_user_email);

        currentUser.addObserver('isLoaded', function() {
            var current_user_email = currentUser.get('email');
            if (currentUser.get('isLoaded')) {
                is_authentic_user = permissionController.checkAuthenticUser(that.get("pageModel").get("owner"), that.get("pageModel").get("profile_editors"), current_user_email);
            }
        });
        //console.log(is_authentic_user);
        return is_authentic_user;
    },
    dropdownPhotoSetting: function(id) {

        $('#dropdown_id_' + id).toggleClass('hideClass');
    },
    checkEditingMode: function()
    {
        this.set('is_profile_editing_mode', false);
        if (HubStar.get('editingMode') === 'profile') {
            this.set('is_profile_editing_mode', true);
            var proController = this.get('controllers.profile');
            this.set('pageModel', proController.get('model'));
            this.set("is_authentic_user", this.checkAuthenticUser());
        }
        else {
            this.set('is_profile_editing_mode', false);
        }

    },
    removeCollectedItem: function(idDel) {
        
        this.get('controllers.profilePartners').deleteSelectedPartner(idDel);
        //console.log();
    },
    toProfilePage: function(model) {

        HubStar.set("scrollPartenerPosition", $(window).scrollTop());      
        this.transitionToRoute('profile', model);
         console.log(model);
        $(window).scrollTop(0);
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
