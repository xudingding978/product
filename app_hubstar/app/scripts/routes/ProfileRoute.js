HubStar.ProfileRoute = Ember.Route.extend({
    setupController: function(ProfileController, model) {

        HubStar.set('editingMode', 'profile');
        ProfileController.setLocalLoginRecrod();
        /******************  partner cehcking*******************/
        ProfileController.set('contactChecking', false);
        ProfileController.set('collectionTag', true);
        ProfileController.set('partnerTag', false);
        /*************************            partner cehcking           ***********8*/

        this.controllerFor('application').set('islogin', true);
        this.controllerFor('application').set('popup', false);
        this.controllerFor('application').set('isotherpage', true);
        this.controllerFor('searchs').setLoginImge();
        this.controllerFor('profile').set('switchPhoto', true);
      $('#user-stats > li').removeClass('selected-user-stats');
        $('#defualt').addClass('selected-user-stats');
//            $('#user-stats > li').click(function() {
//                $('#user-stats > li').removeClass('selected-user-stats');
//                $(this).addClass('selected-user-stats');
//            });
        if (model.get('profile_analytics_code') !== null && model.get('profile_analytics_code') !== '' && model.get('profile_analytics_code') !== undefined) {
            this.sendGAMessage(model.get('profile_analytics_code'), model.get('id').split('-').join(''));
        }


        var lastPositionId = HubStar.get('lastPositionId');
        var lastPosition = HubStar.get("scrollPartenerPosition");
        if (model.id === lastPositionId)
        {
            this.controllerFor('profile').selectPartner(model);
            ProfileController.setProfile(lastPositionId);
        }
        else {
            ProfileController.setProfile(model.id);
        }

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
        }
    },
    redirect: function() {
        if ((localStorage.getItem("loginStatus") === null) || (localStorage.loginStatus === "")) {

            this.transitionTo('indexIndex');
            this.controllerFor('application').set('popup', true);

        }


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
            (function(i, s, o, g, r, a, m) {
                i['GoogleAnalyticsObject'] = r;
                i[r] = i[r] || function() {
                    (i[r].q = i[r].q || []).push(arguments)
                }, i[r].l = 1 * new Date();
                a = s.createElement(o),
                        m = s.getElementsByTagName(o)[0];
                a.async = 1;
                a.src = g;
                m.parentNode.insertBefore(a, m)
            })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
            ga('create', profile_analytics_code, {'name': dom_url});
            ga(dom_url+'.send', 'pageview');
            this.controller.set('isTracking',true);
        } catch (err) {
            this.controller.set('isTracking', false);
            console.log('error out');
        }
    }

});
