HubStar.SearchRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        if (localStorage.getItem("loginStatus") === null || (localStorage.loginStatus === "")) {
            HubStar.set('isLogin', false);

        } else {
            HubStar.set('isLogin', true);
        }
//        HubStar.set('isLogin', true);
        this.controllerFor('searchs').set("loginInfo", localStorage.loginStatus);
        this.controllerFor('searchs').setLoginImge();
        console.log(model);
        this.controllerFor('application').set('search_string',model.id);
        this.controllerFor('application').newSearch();        
        this.controllerFor('index').setLogin();

        this.controllerFor('application').set('islogin', true);
        this.controllerFor('status').set('islogin', true);
        this.controllerFor('application').set('popup', false);
        this.controllerFor('application').set('isotherpage', false);
        localStorage.checkUser = "newUser";

    },
    model: function(params) {
        var address = document.URL;
        var search_id = address.split("#")[1].split("/")[2];
        if (search_id === null || search_id === undefined || search_id === '') {
            search_id = '';
        }
        return {id:search_id};
    },
    events: {
        transitionToPhoto: function(id) {
            this.transitionTo("photo", HubStar.Mega.find(id));
        },
        transitionToProfile: function(id) {
            this.transitionTo("profile", HubStar.Profile.find(id));
        },
        transitionToArticle: function(id) {

            this.transitionTo("article", HubStar.Article.find(id));
        }
    },
    redirect: function() {
        
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

        localStorage.checkUser = "";
    },
    deactivate: function() {
        HubStar.set("setHight", $(window).scrollTop());

    },
    renderTemplate: function() {


    }
});
