HubStar.ProfileRoute = Ember.Route.extend({
    setupController: function(ProfileController, model) {
        HubStar.set('editingMode', 'profile');
        if (localStorage.getItem("loginStatus") === null || (localStorage.loginStatus === ""))
        {
            HubStar.set("isLogin", false);
        } else {
            HubStar.set("isLogin", true);
            if (HubStar.User.find(localStorage.loginStatus).get("isLoaded")) {
                if (HubStar.User.find(localStorage.loginStatus).get("email").match(/@trendsideas.com/g) !== ""
                        && HubStar.User.find(localStorage.loginStatus).get("email").match(/@trendsideas.com/g) !== "undefined"
                        && HubStar.User.find(localStorage.loginStatus).get("email").match(/@trendsideas.com/g) !== null) {

                    this.controllerFor('application').set("is_trends_user", true);
                } else {
                    this.controllerFor('application').set("is_trends_user", false);
                }
            }
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
        /*************************            partner cehcking           ***********8*/
        this.controllerFor('mega').set("from", "profile");
        this.controllerFor('application').set('islogin', true);
        this.controllerFor('application').set('popup', false);
        this.controllerFor('application').set('isotherpage', true);
        this.controllerFor('searchs').setLoginImge();
        this.controllerFor('profile').set('switchPhoto', true);
        $('#user-stats > li').removeClass('selected-user-stats');
        $('#defualt').addClass('selected-user-stats');
//        if (model.get('profile_analytics_code') !== null && model.get('profile_analytics_code') !== '' && model.get('profile_analytics_code') !== undefined) {
//            var analytics_array = model.get('profile_analytics_code').split(',');
//            for (var i = 0; i < analytics_array.length; i ++) {
//                this.sendGAMessage(analytics_array[i], model.get('id').split('-').join('')+i.toString());
//            }
//        }

        var lastPositionId = HubStar.get('lastPositionId');
        var lastPosition = HubStar.get("scrollPartenerPosition");


        $("#top-about-menu").css('display', 'none');
        $("#search-bar").css('display', 'block');
        $(".navbar").css("background", " url(../../images/landingpagebg.jpg)");

        ProfileController.setProfile(model.id);
        setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 1000);
    },
    model: function(params) {
        
        return HubStar.Profile.find(params.profile_id);
    },

    events: {
        transitionToCollectionPhoto: function(collection_id) {
            HubStar.set("scrollCollectionPosition", $(window).scrollTop());
            var address = document.URL;
            var user_id = address.split("#")[1].split("/")[2];
            var profile = HubStar.Profile.find(user_id);
            for (var i = 0; i < profile.get('collections').get("length"); i++) {
                var data = profile.get('collections').objectAt(i);
                if (data.id === collection_id) {
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

//            var address = document.URL;
//            var owner_id = address.split("#")[1].split("/")[2];
//
//
//            var collection_id = address.split("#")[1].split("/")[4];
//            var profile = HubStar.Profile.find(owner_id);
//            for (var i = 0; i < profile.get('collections').get("length"); i++) {
//                var data = profile.get('collections').objectAt(i);
//                if (data.id === collection_id) {
//                    break;
//                }
//            }
//            this.transitionTo("profileCollection", data);
            //           this.controllerFor('masonryCollectionItems').set('isUser', true);
            //var model = HubStar.Profile.find(video_id);
            this.transitionTo("videoVideo", {id: video_id});
        }
    },
    redirect: function() {


    },
    deactivate: function() {

    },
    activate: function() {
        $(window).scrollTop(0);

        $('#discovery_search_bar_wrapper').attr('style', "display:none");
        $('#masonry_container').attr('style', "display:none");
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
