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
        var that = this;
         $(document).ready(function() {
             setTimeout(function() {
        that.controllerFor('application').searchSmallScreen();
             },50);
         });
       // $(".navbar").css("background", " url(../../images/landingpagebg.jpg)");
       // $('#masonry_wrapper').attr('style', "top:100px;position:relative");
        
    },
    events: { 
    },
    redirect: function() {
    },
    activate: function() {
    },
    deactivate: function() {
        //HubStar.set("setHight", $(window).scrollTop());
    },
    renderTemplate: function() {


    }

});
