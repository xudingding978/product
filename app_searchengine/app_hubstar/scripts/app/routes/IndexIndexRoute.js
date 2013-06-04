define([
    'ember',
    //'models/SearchModel',
    'models/MegaModel'
], function(
        Ember,
        //  SearchModel,
        Object
        ) {
    "use strict";

    var IndexIndexRoute = Ember.Route.extend({
        redirect: function() {

            this.transitionTo('index');
        },
        model: function() {
//est5529751369969685701 
            var obj = Object.find("1396571369972031211");
            console.log(obj);
            console.log(obj.creator);
            //   var searchresults = tempsearchresults.get("content");
            //     console.log(tempsearchresults);
            //    console.log(searchresults);
            //      console.log(searchresults.get("source"));
        //          console.log(obj.get("photos").objectAt(0).get("photo_title"));
  //              console.log(obj.get("articles").objectAt(0).get("article_title"));

             return obj;

        },
        activate: function() {
            //      localStorage.isLogin = false;
            
              App.set("isLogin", false);
        },
        deactivate: function() {

            //         localStorage.isLogin = true;


            App.set("isLogin", true);
        },
        renderTemplate: function() {

            this.render('index', {
                into: "application"
            });

            this.render('default', {
                into: "index"
            });
        }

    });
    return IndexIndexRoute;
});
