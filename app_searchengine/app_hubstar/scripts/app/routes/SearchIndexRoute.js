define([
    'ember'

], function(
        Ember

        ) {
    "use strict";

    var SearchIndexRoute = Ember.Route.extend({
        redirect: function() {

           


            if ((localStorage.getItem("loginStatus") === null) || (localStorage.loginStatus === "")) {
                  alert('please login in');
           this.transitionTo('indexIndex');

            } else {
              
                this.transitionTo('searchIndex');

            }


        },
        activate: function() {
            App.set("isLogin", true);
//            var data = JSON.parse(localStorage.loginStatus);
//            console.log(data);
//
//
//
//            var user = App.store.createRecord(App.User, {
//                id:"leo11",
//                profileURL: "John",
//                 webSiteURL: "Doe",
//                 photoURL_large:'doe@whatever.com',
//                 birthYear:'Rockstar'
//             });
//            console.log(user);

        },
        deactivate: function() {

        },
        renderTemplate: function() {
            this.render('index', {
                into: "application"
            });
            this.render('searchs', {
                into: "index"
            });
        }

    });
    return SearchIndexRoute;
});
