define([
    'models/MegaModel',
    'models/StatModel',
    'ember', 'browserdetecter'
], function(MegaModel, Stat, Ember) {
    var ApplicationController = Ember.ArrayController.extend({
        needs: ['status'],
        content: [],
        loginInfo: "",
        search_area: "",
        search_string: "inspirational",
        firstTimeUser: false,
        test: false,
        user: null,
        from: null,
        size: null,
        iframeURL: "",
        iframeLoginURL: "",
        init: function() {

             this.newSearch();


            var address = document.URL;
            var domain = address.split("/")[2];
            this.set('iframeURL', "http://" + domain + "/user/create/");
            this.set('iframeLoginURL', "http://" + domain + "/site/login/");


        },
        popupModal: function() {
            this.set('popup', !this.get('popup'));
        },
        closeModal: function() {
            this.set('popup', !this.get('popup'));
        },
        email_login: function() {
            this.set('mail', !this.get('mail'));
        },
        loginStatus: function() {
        },
        grapData: function() {
            this.set("user", App.User.find(localStorage.loginStatus));
            this.set("myUserProfile", "#/users/" + localStorage.loginStatus);
        },
        reloadPage: function() {
            this.set("test", !this.get("test"));
        },
        scrollDownAction: function() {
            if (App.get("itemNumber") < this.get('size')) {
            } else {
                this.set('loadingTime', true);
            }
            this.set("size", 20);
            this.set("from", this.get("from") + this.get("size"));
            var results = MegaModel.find({"RquireType": "search", "region": this.get("search_area"), "search_string": this.get("search_string"), "from": this.get("from"), "size": this.get("size")});
            var that = this;
            results.addObserver('isLoaded', function() {
                if (results.get('isLoaded')) {
                    for (var i = 0; i < results.get("length"); i++) {
                        var tempmega = results.objectAt(i);
                        that.pushObject(tempmega);
                    }
                    setTimeout(function() {
                        $('#masonry_container').masonry("reload");
                    }, 2200);
                    that.set('loadingTime', false);
                }
            });
        },
        newSearch: function() {
            this.set("content", []);
            this.set("from", 0);
            this.set("size", 20);
            this.set('loadingTime', true);
            var d = new Date();
            var start = d.getTime();
            var results = MegaModel.find({"RquireType": "search", "region": this.get("search_area"), "search_string": this.get("search_string"), "from": this.get("from"), "size": this.get("size")});
            var that = this;
            results.addObserver('isLoaded', function() {
                if (results.get('isLoaded')) {
                    App.set('itemNumber', results.get("length"));
                    for (var i = 0; i < results.get("length"); i++) {
                        var tempmega = results.objectAt(i);
                        that.pushObject(tempmega);
                    }
                    setTimeout(function() {
                        $('#masonry_container').masonry("reload");

                    }, 2200);
                    that.set('loadingTime', false);
                }


            });
            this.set("from", this.get("size"));

            var statusController = this.get('controllers.status');
            var stats = Stat.find({"RquireType": "status", "region": this.get("search_area"), "search_string": this.get("search_string")});

            stats.addObserver('isLoaded', function() {
                if (stats.get('isLoaded')) {
                    var d = new Date();
                    var end = d.getTime();
                    var hit = Stat.find('hit');
                    var time = that.getResponseTime(start, end);
                    statusController.set("searchResultNum", hit.get("hits"));
                    statusController.set("time", time);
                    statusController.changeDescription();
                }
                setTimeout(function() {
                    $('#masonry_container').masonry("reload");
                }, 1800);
            });


            App.set('searchStart', true);
        },
        defaultSearch: function() {
            this.set("loginInfo", localStorage.loginStatus);
            var results = MegaModel.find({});
            this.set("content", results);

        },
        getResponseTime: function(start, end) {
            var totalTime = end - start;
            totalTime += "ms";
            return totalTime;
        }


    });

    return ApplicationController;
});
