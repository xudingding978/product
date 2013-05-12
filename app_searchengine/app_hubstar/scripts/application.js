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
        'bxslider': 'libs/jquery.bxslider.min',
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
    "views/DiscoveryView",
    "views/PhotoView",
    "views/ProfilesView",
    "views/ProfileView",
    "views/UsersView",
    "views/EditingView",
    "views/EditingAboutView",
    "views/ProfileNewView",
    "controllers/ApplicationController",
    "controllers/tabListController",
    "controllers/DataController",
    "controllers/ProfilesController",
    "controllers/ProfileController",
    "app/router",
    "routes/IndexRoute",
    "routes/SelectedTabRoute",
    "routes/DataRoute",
    "routes/ProfilesRoute",
    "routes/ProfileRoute",
    "routes/UsersRoute",
    "routes/ProfileNewRoute",
    "models/PostModel",
    "models/ProfileModel",
    "models/UserModel",
    "emberData"

], function(
        ApplicationView,
        WindowContainerView,
        TabIndexView,
        SelectedTabView,
        TabMenuView,
        TabView,
        DiscoveryView,
        PhotoView,
        ProfilesView,
        ProfileView,
        UsersView,
        EditingView,
        EditingAboutView,
        ProfileNewView,
        ApplicationController,
        tabListController,
        DataController,
        ProfilesController,
        ProfileController,
        Router,
        IndexRoute,
        SelectedTabRoute,
        DataRoute,
        ProfilesRoute,
        ProfileRoute,
        UsersRoute,
        ProfileNewRoute,
        Post,
        Profile,
        User
        )
{

    return  Ember.Application.createWithMixins({
        LOG_TRANSITIONS: true,
        VERSION: '1.0.0',
        rootElement: '#main',
        ApplicationView: ApplicationView,
        WindowContainerView: WindowContainerView,
        TabIndexView: TabIndexView,
        SelectedTabView: SelectedTabView,
        TabMenuView: TabMenuView,
        TabView: TabView,
        DiscoveryView: DiscoveryView,
        PhotoView: PhotoView,
        ProfilesView: ProfilesView,
        ProfileView: ProfileView,
        UsersView: UsersView,
        EditingView: EditingView,
        EditingAboutView: EditingAboutView,
        ProfileNewView: ProfileNewView,
        ApplicationController: ApplicationController,
        tabListController: tabListController,
        DataController: DataController,
        ProfilesController: ProfilesController,
        ProfileController: ProfileController,
        Router: Router,
        IndexRoute: IndexRoute,
        SelectedTabRoute: SelectedTabRoute,
        DataRoute: DataRoute,
        ProfilesRoute: ProfilesRoute,
        ProfileRoute: ProfileRoute,
        UsersRoute: UsersRoute,
        ProfileNewRoute: ProfileNewRoute,
        Post: Post,
        Profile: Profile,
        User: User,
        store: DS.Store.create({
            revision: 12,
            adapter: DS.RESTAdapter.extend({
                bulkCommit: false,
                url: getRestAPIURL(),
                mappings: {
                    posts: Post,
                    profiles: Profile,
                    users: User
                }
            })
        }),
        ready: function() {
        }
    });
});

function getRestAPIURL()
{
    var api_url = document.domain;
    var api_url = api_url.replace("www", "api");
    api_url = "http://" + api_url;
    return api_url;
}
