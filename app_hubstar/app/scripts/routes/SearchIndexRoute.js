HubStar.SearchIndexRoute = Ember.Route.extend({
    setupController: function() {
        if (localStorage.getItem("loginStatus") === null || (localStorage.loginStatus === "")) {
            HubStar.set('isLogin', false);

        } else {
            HubStar.set('isLogin', true);
        }
        this.controllerFor('article').set("accessFromSearchBoard", true);
        this.controllerFor('searchs').defaultSearch();
        this.controllerFor('index').setLogin();
        this.controllerFor('application').set('islogin', true);
        this.controllerFor('status').set('islogin', true);
        this.controllerFor('application').set('popup', false);
        this.controllerFor('application').set('isotherpage', false);
              localStorage.checkUser = "";
        $(".navbar").css("box-shadow", "");
        $(".navbar").css("background", " url(../../images/landingpagebg.jpg)");
        $('#masonry_wrapper').attr('style', "top:100px;position:relative");
        setTimeout(function() {
            $('#masonry_container').masonry();  //masonry();
        }, 300);
    },
    events: {
//        transitionToPhoto: function(id) {
//            this.controllerFor('mega').set("selectPhoto", false);
//            this.controllerFor('masonryCollectionItems').set("type", "profile");
//            this.transitionTo("photo", HubStar.Mega.find(id));
//        },
//        transitionToProfile: function(id) {
//
//            this.transitionTo("profileCollections", HubStar.Profile.find(id));
//        },
//        transitionToArticle: function(id) {
//            this.controllerFor('article').set("accessFromSearchBoard", true);
//            this.transitionTo("article", HubStar.Article.find(id));
//        }
    },
    redirect: function() {

        if (localStorage.getItem("loginStatus") === null || (localStorage.loginStatus === "")) {
            this.transitionTo('indexIndex');

        } else {
            //   this.transitionTo('searchIndex');
        }

    },
    activate: function() {
        $('#discovery_search_bar_wrapper').attr('style', "display:block;margin: 0 0 100px 0;");
        $('#masonry_container').attr('style', "display:block;position:relative");
        if (HubStar.get("setHight") === null || HubStar.get("setHight") === "null") {
            HubStar.set("setHight", 0);
        }

        $(function() {
            $('#masonry_container').masonry({
                itemSelector: '.box',
                columnWidth: 185,
                isInitLayout: false,
                isFitWidth: true
            });
        });

        $(window).scrollTop(HubStar.get("setHight"));
        HubStar.set("setHight", 0);

    //    localStorage.checkUser = "";
    },
    deactivate: function() {
        HubStar.set("setHight", $(window).scrollTop());
    },
    renderTemplate: function() {


    }

});
