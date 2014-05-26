HubStar.SearchRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        if (localStorage.getItem("loginStatus") === null || (localStorage.loginStatus === "")) {
            HubStar.set('isLogin', false);

        } else {
            HubStar.set('isLogin', true);
        }
        this.controllerFor('searchs').set("loginInfo", localStorage.loginStatus);
        //this.controllerFor('searchs').setLoginImge();
        this.controllerFor('application').set('search_string', model.id);
        var that = this;
         $(document).ready(function() {
             setTimeout(function() {
        that.controllerFor('application').searchSmallScreen();
             },50);
         });
        
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

        $('#footer').css("display", "none");
    },
    model: function(params) {
        var address = decodeURIComponent(document.URL);
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
    },
    activate: function() {

        $(document).ready(function() {
            setTimeout(function() {
         //       $('#discovery_search_bar_wrapper').attr('style', "display:block;margin: 0 0 100px 0;");
            
                if ($(window).width() > 1200) {
                    $("#search-bar").css('display', "block");
                    $("#topResidentialCommerical").css('display', "block");
                    $(".search-bar-on-small-screen").css('display', "none");
                   
                } else {
                    $("#search-bar").css('display', "none");
                    $("#topResidentialCommerical").css('display', "none");
                    $(".search-bar-on-small-screen").css('display', "block");
                   
                }
                if(HubStar.get('showDiscoveryBar') === true){
                     $('#masonry_container').css('top', "50px");
                }else {
                     $('#masonry_container').css('top', "100px");
                }                  
                             
                $('#footer').attr("style", "display:none");
            }, 10);
        });
    },
    deactivate: function() {
        $('#footer').attr("style", "display:block");

    },
    renderTemplate: function() {


    }
});
