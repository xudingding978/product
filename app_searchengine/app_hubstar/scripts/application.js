// Define libraries
require.config({
    paths: {
        //     'AppMain': 'app/main',
        'models': 'app/models',
        'views': 'app/views',
        'controllers': 'app/controllers',
        'templates': 'app/templates',
        'routes': 'app/routes',
        /*libs*/
        'jquery': 'libs/jquery/1.9.1/jquery',
        'handlebars': 'libs/handlebars/1.0.rc.3/handlebars',
        'ember': 'libs/ember-latest',
        'emberData': 'libs/ember-data-latest',
        'jquery.ui': 'libs/jquery.ui/1.9.2/jquery-ui-1.9.2.custom.min',
        'bootstrap': 'libs/bootstrap/2.2.2/js/bootstrap.min',
        /*requirejs-plugins*/
        'text': 'libs/requirejs-plugins/text',
        'hbs': 'libs/requirejs-plugins/hbs',
        'domReady': 'libs/requirejs-plugins/domReady'
    },
    shim: {
        'ember': {
            deps: ['handlebars', 'jquery'],
            exports: 'Ember'
        },
        'emberData': {
            deps: ['ember'],
            exports: 'DS'
        },
        'jquery.ui': ['jquery']
    },
    hbs: {
        disableI18n: true,
        templateExtension: "html"
    },
    waitSeconds: 15,
    urlArgs: "bust=" + (new Date()).getTime()  //cancel caching for network requests,for development.
});

// Define application
define('application', [
    "views/ApplicationView",
    "views/WindowContainerView",
    "views/TabIndexView",
    "views/SelectedTabView",
    "views/TabMenuView",
    "views/TabView",
    "views/CarouselView",
    "views/PhotoView",
    "controllers/ApplicationController",
    "controllers/tabListController",
    "controllers/DataController",
    "app/router",
    "routes/IndexRoute",
    "routes/SelectedTabRoute",
    "routes/DataRoute",
    "models/Postmodel",
    "emberData"

], function(ApplicationView, WindowContainerView, TabIndexView, SelectedTabView, TabMenuView, TabView, CarouselView, PhotoView, ApplicationController, tabListController, DataController, Router, IndexRoute, SelectedTabRoute, DataRoute, Post)
{
    return  Ember.Application.createWithMixins({
        VERSION: '1.0.0',
        rootElement: '#main',
        ApplicationView: ApplicationView,
        WindowContainerView: WindowContainerView,
        TabIndexView: TabIndexView,
        SelectedTabView: SelectedTabView,
        TabMenuView: TabMenuView,
        TabView: TabView,
        CarouselView: CarouselView,
        PhotoView: PhotoView,
        ApplicationController: ApplicationController,
        tabListController: tabListController,
        DataController: DataController,
        Router: Router,
        IndexRoute: IndexRoute,
        SelectedTabRoute: SelectedTabRoute,
        DataRoute: DataRoute,
        Post: Post,
        Store: DS.Store.extend({
            revision: 12,
            adapter: DS.RESTAdapter.create({
                bulkCommit: false,
                //  url: 'http://www.hubstar.devbox6',
                mappings: {
                    posts: Post
                },
                namespace: 'api'
            })
        }),
        ready: function() {
        }
    });
}
);

