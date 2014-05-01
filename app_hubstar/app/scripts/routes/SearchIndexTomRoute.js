HubStar.SearchIndexTom = Ember.Route.extend({
    setupController: function() {     
        if (localStorage.getItem("loginStatus") === null || (localStorage.loginStatus === "")) {
            HubStar.set('isLogin', false);

        } else {
            HubStar.set('isLogin', true);
        }
        HubStar.set("escVideo",false);
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
        

    },
    events: { 
    },
    redirect: function() {
    },
    activate: function() {
        $('#discovery_search_bar_wrapper').attr('style', "display:block;margin: 0 0 100px 0;");
        $('#masonry_container').attr('style', "display:block;position:relative");
    },
    deactivate: function() {
        //HubStar.set("setHight", $(window).scrollTop());
    },
    renderTemplate: function() {


    }

});
