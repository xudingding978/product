HubStar.UserRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        console.log('5555555555555555');
        var that = this;
        //var model = HubStar.User.find(model);
        //model.then(function() 
        console.log(model);
        if(model!==undefined)
        {
            console.log("aaaaaa");
            HubStar.set('editingMode', 'user');
            if (localStorage.getItem("loginStatus") === null || (localStorage.loginStatus === ""))
            {
                HubStar.set("isLogin", false);
            } else {
                HubStar.set("isLogin", true);
            }

            that.controllerFor('application').set('islogin', true);
            that.controllerFor('application').set('popup', false);
            that.controllerFor('application').set('isotherpage', true);
            that.controllerFor('searchs').setLoginImge();
            that.controllerFor('application').set('isotherpage', true);
            that.controller.set('switchPhoto', true);
            that.controller.set('collectionTag', true);
            //  this.controller.set('partnerTag', false);

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
            that.controller.set('followerTag', false);
            that.controller.set('followingTag', false);
            that.controller.set('messageTag', false);
            that.controller.set('messageTag', false);
            that.controller.set('postTag', false);

            that.controllerFor('user').set("model", model);
            that.controllerFor('user').setUser();
            $("#top-about-menu").css('display', 'none');
            $("#search-bar").css('display', 'block');
      }
       // , function() {
      //      that.transitionTo('fourOhFour');
      //  });
    },
    model: function(params) {
        var model = HubStar.User.find(params.user_id);
        var that = this;
        model.then(function() {
            return model;
        }, function() {
            that.transitionTo('fourOhFour');
            return null;
        });

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
