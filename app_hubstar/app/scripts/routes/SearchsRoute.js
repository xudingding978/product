HubStar.SearchsRoute = Ember.Route.extend({
    setupController: function() {
        if (localStorage.getItem("loginStatus") === null || (localStorage.loginStatus === "")) {
            HubStar.set('isLogin', false);

        } else {
            HubStar.set('isLogin', true);
        }
        this.controllerFor('searchs').defaultSearch();
        this.controllerFor('index').setLogin();
        this.controllerFor('application').set('islogin', true);
        this.controllerFor('status').set('islogin', true);

        if (localStorage.checkUser === "newUser") {
            var that = this;
            setTimeout(function() {
                window.location.href = 'JavaScript:void(0)';
                $(".brand").addClass("tour-background");
                $(".Geo-Filter").addClass("tour-background");
                $("#login_detail").addClass("tour-background");
                var address = document.URL;
                var urlName = address.split("#")[1].split("/")[1];
                if (urlName === "search") {
                    that.controllerFor('application').set("isNavigatorDropdown", true);
                }
                var thatthat = that;
                introJs().setOption('doneLabel', 'Skip').start().oncomplete(function() {


                    if (localStorage.loginStatus !== "" && localStorage.loginStatus !== null && localStorage.loginStatus !== "undefined") {
                        window.location.href = '/#/users/' + localStorage.loginStatus;
                        $(window).scrollTop(0);
                    }


                    thatthat.controllerFor('application').set("isNavigatorDropdown", false);
                });
            }, 5500);
        }
        else {
            localStorage.checkUser = "";
        }
        this.controllerFor('application').set('popup', false);
        this.controllerFor('application').set('isotherpage', false);
        this.controllerFor('mega').set('from', "search");
        $(".navbar").css("box-shadow", "");
        if (HubStar.get("checkLoginStatus")) {
                if (HubStar.get('showDiscoveryBar') === false) {
                    HubStar.set('ctaView', true);
                } else {
                    HubStar.set('ctaView', false);
                }
            }
    },
    events: {
        transitionToPhoto: function(id) {
            this.controllerFor('article').set("accessFromSearchBoard", true);
            this.transitionTo("searchDefaultPhoto", HubStar.Mega.find(id)); //it will got to default search without go to the new search
            if (HubStar.get("checkLoginStatus")) {
                if (HubStar.get('showDiscoveryBar') === false) {
                    HubStar.set('ctaView', true);
                } else {
                    HubStar.set('ctaView', false);
                }
            }

        },
        transitionToVideo: function(id) {
            this.controllerFor('article').set("accessFromSearchBoard", true);
            this.transitionTo("searchDefaultVideo", HubStar.Mega.find(id)); //it will got to default search without go to the new search
            if (HubStar.get("checkLoginStatus")) {
                if (HubStar.get('showDiscoveryBar') === false) {
                    HubStar.set('ctaView', true);
                } else {
                    HubStar.set('ctaView', false);
                }
            }

        },
        transitionToProfile: function(id) {
            this.transitionTo("profileCollections", HubStar.Profile.find(id));
        },
        transitionToArticle: function(id) {
            this.controllerFor('article').set("accessFromSearchBoard", true);
            this.transitionTo("searchDefaultArticle", HubStar.Article.find(id)); //it will got to default search without go to the new search

           if (HubStar.get("checkLoginStatus")) {
                if (HubStar.get('showDiscoveryBar') === false) {
                    HubStar.set('ctaView', true);
                } else {
                    HubStar.set('ctaView', false);
                }
            }
        }
    },
    redirect: function() {
        if (localStorage.getItem("loginStatus") === null || (localStorage.loginStatus === "")) {
            var address = decodeURIComponent(document.URL);
            if (address.split("#").length > 1) {
                var type = address.split("#")[1].split("/")[3];
                var id = address.split("#")[1].split("/")[4];
                var that = this;
                var model = {id: id};
                if (type === "articles")
                {
                    if (address.split("#")[1].split("/").length >= 7)
                    {
                        HubStar.set("photoID", address.split("#")[1].split("/")[6]);
                    }
                    that.transitionTo("article", id);
                }
                else if (type === "photos")
                {
                    if (HubStar.get("closeArticlePhoto")) {
                        HubStar.set("closeArticlePhoto", false);
                    }
                    else
                    {
                        this.transitionTo("photo", id);
                    }
                }
                else if (type === "videos")
                {
                    this.transitionTo("video", id);
                }
                else {
                    if (id === "default")
                    {
                        this.transitionTo('searchIndexTom');
                    }
                }
            }
        } else {

        }
    },
    activate: function() {
        var that = this;
        $(document).ready(function() {

            setTimeout(function() {
                that.controllerFor('application').residentialCommercialStatus();
                that.controllerFor('application').changeBackground();
            }, 50);

        });
    },
    deactivate: function() {

    },
    renderTemplate: function() {
    }

});
