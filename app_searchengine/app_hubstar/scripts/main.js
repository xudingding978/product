//(function(root) {
//    require(["config"], function(config) {
//        requirejs.config(config);
//        require(["AppMain", "ember"], function(App, Ember) {
//            var app_name = config.app_name || "App";
//            App = Ember.Application.createWithMixins(App);
//            root[app_name] = App;
//        });
//    });
//})(this);

// Start the main app logic.
requirejs(['application'],
        function(application) {
            var App = window.App = application;
            //App.initialize()
        });




