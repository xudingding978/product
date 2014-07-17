HubStar.UserRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        HubStar.set('editingMode', 'user');
        if (localStorage.getItem("loginStatus") === null || (localStorage.loginStatus === ""))
        {
            HubStar.set("isLogin", false);
        } else {
            HubStar.set("isLogin", true);
        }
        this.controllerFor('application').set('islogin', true);
        this.controllerFor('application').set('popup', false);
        this.controllerFor('application').set('isotherpage', true);
        this.controllerFor('searchs').setLoginImge();
        this.controllerFor('application').set('isotherpage', true);
        this.controller.set('switchPhoto', true);
        this.controller.set('collectionTag', true);
        //  this.controller.set('partnerTag', false);
        HubStar.set("showDiscoveryBar", false);
        if (localStorage.checkUser === "newUser") {
            setTimeout(function() {
                window.location.href = 'JavaScript:void(0)';
                $(".brand").addClass("tour-background");
                $(".Geo-Filter").addClass("tour-background");
                $("#login_detail").addClass("tour-background");
                $("#user-dd-menu").attr("style", "display:none");
                introJs().setOption('doneLabel', 'Skip').start().oncomplete(function() {
                    window.location.href = '/#/profiles/new-home-trends';
                    $(window).scrollTop(0);
                });
            }, 500);
        }
        else {
            localStorage.checkUser = "";
        }
        $('#default').toggle('selected-user-stats');
        this.controller.set('followerTag', false);
        this.controller.set('followingTag', false);
        this.controller.set('messageTag', false);
        this.controller.set('messageTag', false);
        this.controller.set('postTag', false);
        $(window).scrollTop(0);
        this.controllerFor('user').set("model", model);
        this.controllerFor('user').setUser();
        if (HubStar.get("checkLoginStatus")) {
            if (HubStar.get('showDiscoveryBar') === false) {
                HubStar.set('ctaView', false);
            }
        }

    },
    model: function(params) {

        return HubStar.User.find(params.user_id);

    },
//    beforeModel: function(transition) {
//        var model = HubStar.User.find(transition.params.user.user_id);
//        var that = this;
//        model.then(function() {
//        }, function() {
//            that.transitionTo('fourOhFour', "404");
//        });
//    },
    actions: {
        transitionToCollectionPhoto: function(collection_id) {

            var address = document.URL;
            var user_id = address.split("#")[1].split("/")[2];
            var user = HubStar.User.find(user_id);

            for (var i = 0; i < user.get('collections').get("length"); i++) {
                var data = user.get('collections').objectAt(i);
                if (data.get("id") === collection_id) {
                    break;
                }
            }
            this.transitionTo("collection", data);

            if (HubStar.get("checkLoginStatus")) {
                if (HubStar.get('showDiscoveryBar') === false) {
                    HubStar.set('ctaView', true);
                } else {
                    HubStar.set('ctaView', false);
                }
            }
        },
        transitionToArticle: function(article_id) {
            this.transitionTo("article", article_id);
            this.transitionTo("articlePhoto");

            if (HubStar.get("checkLoginStatus")) {
                if (HubStar.get('showDiscoveryBar') === false) {
                    HubStar.set('ctaView', true);
                } else {
                    HubStar.set('ctaView', false);
                }
            }
        },
        error: function(error, transition) {
//            if (error && error.status === 400) {
//                // error substate and parent routes do not handle this error 
//                return this.transitionTo('modelNotFound');
//            }

            // Return true to bubble this event to any parent route.
            return  this.transitionTo('fourOhFour', "404");
        }
    },
    redirect: function(params) {

    },
    deactivate: function() {
    },
    activate: function() {

        $(window).scrollTop(0);
        $('#discovery_search_bar_wrapper').css('display', "none");
        $('#masonry_wrapper').css('display', "none");
        $(function() {
            $('#masonry_container').masonry('remove', $('.noStyle1'));
        });

    },
    renderTemplate: function() {

        this.render('user', {
            outlet: "user",
            into: "application"
        });

    }

});
