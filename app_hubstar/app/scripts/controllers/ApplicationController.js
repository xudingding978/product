
 /*global HubStar */
 /*global Ember */
/*global $:false */

HubStar.ApplicationController = Ember.ArrayController.extend({
    needs: ['status', 'applicationFeedback'],
    content: [],
    loginInfo: "",
    search_area: "",
    search_string: "inspirational",
    firstTimeUser: false,
    test: false,
    user: null,
    from: null,
    size: null,
    photo_url: null,
    iframeURL: "",
    iframeLoginURL: "",
    init: function() {
        this.newSearch();
        this.set('search_string', '');
        var address = document.URL;
        var domain = address.split("/")[2];
        this.set('iframeURL', "http://" + domain + "/user/create/");
        this.set('iframeLoginURL', "http://" + domain + "/site/login/");
    },
    popupModal: function() {
        this.set('popup', !this.get('popup'));
    },
    email_login: function() {
        this.set('mail', !this.get('mail'));
    },
    loginStatus: function() {
    },
    grapData: function() {
        this.set("user", HubStar.User.find(localStorage.loginStatus));
        this.set("myUserProfile", "#/users/" + localStorage.loginStatus);
    },
    reloadPage: function() {
        this.set("test", !this.get("test"));
    },
    scrollDownAction: function() {


        this.set('loadingTime', true);

        this.set("size", 20);
        this.set("from", this.get("from") + this.get("size"));
        var results = HubStar.Mega.find({"RquireType": "search", "region": this.get("search_area"), "search_string": this.get("search_string"), "from": this.get("from"), "size": this.get("size")});
        var that = this;
        results.addObserver('isLoaded', function() {
            if (results.get('isLoaded')) {
                for (var i = 0; i < results.get("length"); i++) {
                    var tempmega = results.objectAt(i);
                    //console.log(tempmega.get("profile").objectAt(0));
                    if (tempmega.get("profile").objectAt(0) !== undefined) {
                        var isFollow = false;
                        for (var j = 0; j < tempmega.get("profile").objectAt(0).get("followers").get("length"); j++)
                        {
                            if (tempmega.get("profile").objectAt(0).get("followers").objectAt(j).get("follower_id") === localStorage.loginStatus)
                            {
                                isFollow = true;
                                break;
                            }
                        }
                        tempmega.get("profile").objectAt(0).set("isFollowCurrentUser", isFollow);
                    }
                    that.pushObject(tempmega);
                }
                setTimeout(function() {
                    $('#masonry_container').masonry("reload");
                }, 2200);
                that.set('loadingTime', false);
                if (results.get("length") === 0) {
                    that.get('controllers.applicationFeedback').statusObserver(null, "You have reached the end of your search results", "info"); //added user flash message
                }
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
        var that = this;
        var statusController = this.get('controllers.status');
        var stats = HubStar.Stat.find({"RquireType": "firstsearch", "region": this.get("search_area"), "search_string": this.get("search_string"), "from": this.get("from"), "size": this.get("size")});
        stats.addObserver('isLoaded', function() {
            if (stats.get('isLoaded')) {
                var stat = stats.objectAt(0);
                var megasResults = stat.get("megas");
                HubStar.set('itemNumber', megasResults.get("length"));
                for (var i = 0; i < megasResults.get("length"); i++) {
                    var tempmega = megasResults.objectAt(i);
                    //console.log(tempmega.get("profile").objectAt(0));
                    if (tempmega.get("profile").objectAt(0) !== undefined) {
                        var isFollow = false;
                        for (var j = 0; j < tempmega.get("profile").objectAt(0).get("followers").get("length"); j++)
                        {
                            if (tempmega.get("profile").objectAt(0).get("followers").objectAt(j).get("follower_id") === localStorage.loginStatus)
                            {
                                isFollow = true;
                                break;
                            }
                        }
                        tempmega.get("profile").objectAt(0).set("isFollowCurrentUser", isFollow);
                    }
                    that.pushObject(tempmega);
                }
                that.set('loadingTime', false);
                this.set("from", this.get("size"));
                var d = new Date();
                var end = d.getTime();
                var time = that.getResponseTime(start, end);
                statusController.set("searchResultNum", stat.get('numberofresults'));
                statusController.set("time", time);
                statusController.changeDescription();
            }
            setTimeout(function() {
                $('#masonry_container').masonry("reload");
            }, 1800);
        });

        HubStar.set('searchStart', true);
    },
    defaultSearch: function() {
        this.set("loginInfo", localStorage.loginStatus);
        var results = HubStar.Mega.find({});
        this.set("content", results);
    },
    getResponseTime: function(start, end) {
        var totalTime = end - start;
        totalTime += "ms";
        return totalTime;
    },
    flipFrontClick: function() {
        $(".hover").addClass('flip');
    },
    flipFrontBack: function() {
        $(".hover").removeClass('flip');
    },
    changeImage: function(imageSrc)
    {
        this.set('photo_url', imageSrc);
    }

});
