HubStar.ProfileRoute = Ember.Route.extend({
    setupController: function(ProfileController, model) {
        HubStar.set('editingMode', 'profile');
        if (localStorage.getItem("loginStatus") === null || (localStorage.loginStatus === ""))
        {
            HubStar.set("isLogin", false);
        } else {
            HubStar.set("isLogin", true);
        }
        if (ProfileController.get('goBackType') === true)
        {
            model = HubStar.Profile.find(model.id);
            ProfileController.set('goBackType', false);
        }
        ProfileController.setLocalLoginRecrod();
        /******************  partner cehcking*******************/
        ProfileController.set('contactChecking', false);
        ProfileController.set('collectionTag', true);
        ProfileController.set('partnerTag', false);
        ProfileController.set('reviewTag', false);
        ProfileController.set('videoTag', false);

        if (localStorage.checkUser === "newUser") {
           var that= this;
            setTimeout(function() {
                window.location.href = 'JavaScript:void(0)';
                $(".brand").addClass("tour-background");
                $(".Geo-Filter").addClass("tour-background");
                $("#login_detail").addClass("tour-background");
                $("#profileDashboard").attr("style", "display:none");
                $("#user-dd-menu").attr("style", "display:none");
                $("#profilePanel").removeClass("panel");
                var thats =that;
                introJs().setOption('doneLabel', 'Skip').start().oncomplete(function() {
                    $(window).scrollTop(0);
                     thats.transitionTo("searchIndexTom");
                     thats.controllerFor('application').defaultSearch();
                    localStorage.checkUser = "";
                     $("#search-bar").css('display', "none");
                $("#topResidentialCommerical").css('display', "none");
                });
            }, 3000);

        }
        else {
            localStorage.checkUser = "";
        }

        /*************************            partner cehcking           ***********8*/
        this.controllerFor('mega').set("from", "profile");
        this.controllerFor('application').set('islogin', true);
        this.controllerFor('application').set('popup', false);
        this.controllerFor('application').set('isotherpage', true);
        this.controllerFor('searchs').setLoginImge();
        HubStar.set("showDiscoveryBar",false);
        this.controllerFor('profile').set('switchPhoto', true);
        $('#user-stats > li').removeClass('selected-user-stats');
        $('#defualt').addClass('selected-user-stats');
        if (model.get('profile_analytics_code') !== null && model.get('profile_analytics_code') !== '' && model.get('profile_analytics_code') !== undefined) {
            var analytics_array = model.get('profile_analytics_code').split(',');
            for (var i = 0; i < analytics_array.length; i++) {
                this.sendGAMessage(analytics_array[i], model.get('id').split('-').join('') + i.toString());
            }
        }
        this.controllerFor('application').set("newProfile", false);
        $("#user-dd-menu").attr("style", "display:none");
      
        ProfileController.setProfile(model.id); 
        
         if (HubStar.get('ctaView') === true) {
            this.controllerFor("checkingLoginStatus").popupLogin();
            HubStar.set('ctaView', false);
        }
    },
    model: function(params) {

        return HubStar.Profile.find(params.profile_id);
    },
    beforeModel: function(transition) {
        var model = HubStar.Profile.find(transition.params.profile_id);
        var that = this;
        model.then(function() {
        }, function() {
            that.transitionTo('fourOhFour', "404");
        });
    },
    events: {
        transitionToCollectionPhoto: function(collection_id) {
            HubStar.set("scrollCollectionPosition", $(window).scrollTop());
            var address = document.URL;
            var user_id = address.split("#")[1].split("/")[2];
            var profile = HubStar.Profile.find(user_id);
            for (var i = 0; i < profile.get('collections').get("length"); i++) {
                var data = profile.get('collections').objectAt(i);
                if (data.get("id") === collection_id) {
                    break;
                }
            }
            this.transitionTo("profileCollection", data);
        },
        transitionToArticle: function(article_id) {

            this.transitionTo("profileArticle", article_id);
            this.transitionTo("profileArticlePhoto");
        },
        transitionToVideo: function(video_id) {
            this.transitionTo("videoVideo", {id: video_id});
        }
    },
    redirect: function(params) {
        var p= HubStar.Profile.find(params.id);
        var address = document.URL;
        var page = address.split("#")[1].split("/");
        if(page.length === 3)
        {
            var that =this;
            p.then(function(){    
                that.controllerFor('profile').selectCollectionFake(); 
            });       
        }
    },
    deactivate: function() {

    },
    activate: function() {

        $(window).scrollTop(0);
        
        $('#discovery_search_bar_wrapper').attr('style', "display:none");
        $('#masonry_wrapper').attr('style', "display:none");
        $(function() {
            $('#masonry_container').masonry('remove', $('.noStyle1'));
        });        
    },
    renderTemplate: function() {
        this.render('profile', {
            outlet: "profile",
            into: "application"
        });
    },
    sendGAMessage: function(profile_analytics_code, dom_url) {
        try {
            ga('create', profile_analytics_code, {'name': dom_url});
            ga(dom_url + '.send', 'pageview');
            this.controller.set('isTracking', true);
        } catch (err) {
            this.controller.set('isTracking', false);

        }
    }

});
