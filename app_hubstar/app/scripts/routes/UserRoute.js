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
        
        if (localStorage.checkUser === "newUser") {
            setTimeout(function() {
                window.location.href = '/#';
                $(".brand").addClass("tour-background");
                $(".Geo-Filter").addClass("tour-background");
                $("#login_detail").addClass("tour-background");
                introJs().setOption('doneLabel', 'Skip').start().oncomplete(function() {
                    window.location.href = '/#/profiles/iu';
                $(window).scrollTop(500);
                });
            }, 5500);
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
        
        this.controllerFor('user').set("model", model);
        this.controllerFor('user').setUser();
        $("#top-about-menu").css('display', 'none');
        $("#search-bar").css('display', 'block');
    },
    model: function(params) {
        return HubStar.User.find(params.user_id);
    },
    events: {
        transitionToCollectionPhoto: function(collection_id) {
            
            var address = document.URL;
            var user_id = address.split("#")[1].split("/")[2];
            var user = HubStar.User.find(user_id);

            for (var i = 0; i < user.get('collections').get("length"); i++) {
                var data = user.get('collections').objectAt(i);
                if (data.id === collection_id) {
                    break;
                }
            }
            this.transitionTo("collection", data);
        },
        transitionToArticle: function(article_id) {

            this.transitionTo("article", article_id);
            this.transitionTo("articlePhoto");
        }
//        transitionToVideo: function(video_id) {
//            this.transitionTo("userVideo", video_id);
//        }
    },
    redirect: function() {

        if ((localStorage.getItem("loginStatus") === null) || (localStorage.loginStatus === "")) {

//            this.transitionTo('indexIndex');
//            this.controllerFor('application').set('popup', true);
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

        this.render('user', {
            outlet: "user",
            into: "application"
        });

    }

});
