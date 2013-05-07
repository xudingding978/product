// Define libraries
require.config({
    paths: {
        //     'AppMain': 'app/main',
        'models': 'app/models',
        'views': 'app/views',
        'controllers': 'app/controllers',
        'templates': 'app/templates',
        'routes': 'app/routes',
        'helpers': 'app/helpers/forms',
        /*libs*/
        'jquery': 'libs/jquery/1.9.1/jquery',
        'handlebars': 'libs/handlebars/1.0.rc.3/handlebars',
        'ember': 'libs/ember-latest',
        'emberData': 'libs/ember-data-latest',
        'jquery.ui': 'libs/jquery.ui/1.9.2/jquery-ui-1.9.2.custom.min',
        'bootstrap': 'libs/bootstrap/2.2.2/js/bootstrap.min',
        'bootstrapPopover': 'libs/bootstrap/2.2.2/js/bootstrap-popover',
        'bootstrapTooltip': 'libs/bootstrap/2.2.2/js/bootstrap-tooltip',
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
    "views/ProfilesView",
    "views/UsersView",
    "views/EditingView",
    "controllers/ApplicationController",
    "controllers/tabListController",
    "controllers/DataController",
    "controllers/ProfilesController",
    "app/router",
    "routes/IndexRoute",
    "routes/SelectedTabRoute",
    "routes/DataRoute",
    "routes/ProfilesRoute",
    "routes/UsersRoute",
    "models/Postmodel",
    "emberData"

], function(
        ApplicationView,
        WindowContainerView,
        TabIndexView,
        SelectedTabView,
        TabMenuView,
        TabView,
        CarouselView,
        PhotoView,
        ProfilesView,
        UsersView,
        EditingView,
        ApplicationController,
        tabListController,
        DataController,
        ProfilesController,
        Router,
        IndexRoute,
        SelectedTabRoute,
        DataRoute,
        ProfilesRoute,
        UsersRoute,
        Post)
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
        ProfilesView: ProfilesView,
        UsersView: UsersView,
        EditingView: EditingView,
        ApplicationController: ApplicationController,
        tabListController: tabListController,
        DataController: DataController,
        ProfilesController: ProfilesController,
        Router: Router,
        IndexRoute: IndexRoute,
        SelectedTabRoute: SelectedTabRoute,
        DataRoute: DataRoute,
        ProfilesRoute: ProfilesRoute,
        UsersRoute: UsersRoute,
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

