HubStar.SearchRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        if (localStorage.getItem("loginStatus") === null || (localStorage.loginStatus === "")) {
            HubStar.set('isLogin', false);

        } else {
            HubStar.set('isLogin', true);
        }
        


        this.controllerFor('searchs').set("loginInfo", localStorage.loginStatus);
        this.controllerFor('searchs').setLoginImge();
        this.controllerFor('application').set('search_string', model.id);
        if (HubStar.get("escVideo") !== true)
        {
            this.controllerFor('application').newSearch();
            HubStar.set("scrollDownSearch", true);
        }
        else {
            HubStar.set("escVideo", false);
        }      
        this.controllerFor('index').setLogin();

        this.controllerFor('application').set('islogin', true);
        this.controllerFor('status').set('islogin', true);
        this.controllerFor('application').set('popup', false);
        this.controllerFor('application').set('isotherpage', false);
        localStorage.checkUser = "";
//        $('#masonry_wrapper').attr('style', "top:100px;position:relative");
//        setTimeout(function() {
//            $('#masonry_container').masonry();  //masonry();
//        }, 300);
    },
    model: function(params) {
        var address=decodeURIComponent(document.URL);       
        var search_id = address.split("#")[1].split("/")[2];
        if (search_id === null || search_id === undefined || search_id === '') {
            search_id = '';
        }
        HubStar.set("escVideo", false);
        return {id: search_id};
    },
    events: {
        transitionToPhoto: function(id) {
            this.controllerFor('masonryCollectionItems').set("type", "profile");

            var address = document.URL;
            var search_id = address.split("#")[1].split("/")[2];
            this.controllerFor('article').set("accessFromSearchBoard", true);

            if (search_id === "articles" || search_id === "photos" || search_id === "videos") //it is the search index
            {

            }
            else
            {
                this.controllerFor('mega').set("type", "profile");
                this.transitionTo("newSearchPhoto", HubStar.Mega.find(id));
            }
        },
        transitionToProfile: function(id) {
            this.transitionTo("profileCollections", HubStar.Profile.find(id));
        },
        transitionToVideo: function(id)
        {
            var address = document.URL;
            var search_id = address.split("#")[1].split("/")[2];
            this.controllerFor('article').set("accessFromSearchBoard", true);

            if (search_id === "articles" || search_id === "photos" || search_id === "videos") //it is the search index
            {
                this.transitionTo("video", HubStar.Mega.find(id));
            }
            else
            {
                this.transitionTo("newSearchVideo", HubStar.Mega.find(id));
            }
        },
        transitionToArticle: function(id) {
            var address = document.URL;
            var search_id = address.split("#")[1].split("/")[2];
            this.controllerFor('article').set("accessFromSearchBoard", true);

            if (search_id === "articles" || search_id === "photos" || search_id === "videos") //it is the search index
            {

                this.transitionTo("article", HubStar.Article.find(id));
            }
            else
            {
                this.transitionTo("searchIndexArticle", HubStar.Article.find(id));
            }
        }
    },
    redirect: function() {
        if (localStorage.getItem("loginStatus") === null || (localStorage.loginStatus === "")) {
            this.transitionTo('indexIndex');

        } else {
            // this.transitionTo('searchIndex');
        }
    },
    activate: function() {
        $('#discovery_search_bar_wrapper').attr('style', "display:block;margin: 0 0 100px 0;");
        $('#masonry_container').attr('style', "display:block;position:relative");
        if (HubStar.get("setHight") === null || HubStar.get("setHight") === "null") {
            HubStar.set("setHight", 0);
        }
//        var container = document.querySelector('#masonry_container');
//        var msnry = new Masonry(container, {
//             itemSelector: '.box',
//                columnWidth: 185,
//                isInitLayout: false,
//                isFitWidth: true
//        });
////
//        $(function() {
//            $('#masonry_container').masonry({
//                itemSelector: '.box',
//                columnWidth: 185,
//                isInitLayout: false,
//                isFitWidth: true
//            });
//        });
        $(window).scrollTop(HubStar.get("setHight"));
        HubStar.set("setHight", 0);

        //     localStorage.checkUser = "";
    },
    deactivate: function() {
        HubStar.set("setHight", $(window).scrollTop());

    },
    renderTemplate: function() {


    }
});
