// Define libraries
require.config({
    paths: {
//     'AppMain': 'app/main',
        'namespace': 'app/namespace',
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
        'bootstrap-wysihtml5': 'libs/wysihtml5/bootstrap-wysihtml5',
        'wysihtml5': 'libs/wysihtml5/wysihtml5-0.3.0',
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
        'jquery.ui': ['jquery'],
        'bxslider': ['jquery'],
        'bootstrap-wysihtml5': ['wysihtml5'],
        'bootstrap': ['jquery']
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
    "namespace/DragNDropNamespace",
    "models/ImageFile",
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
    "views/DragNDropView",
    "views/ImageInputButton",
    "views/PreviewUploadImageView",
    "views/TestView",
    "views/EditingAboutView",
    "views/ProfileNewView",
    "controllers/ApplicationController",
    "controllers/tabListController",
    "controllers/DataController",
    "controllers/ProfilesController",
    "controllers/TestController",
    "controllers/DragNDropController",
    "controllers/ProfileController",
    "controllers/ProfileNewController",
    "controllers/EditingController",
    "app/router",
    "routes/IndexRoute",
    "routes/SelectedTabRoute",
    "routes/DataRoute",
    "routes/ProfilesRoute",
    "routes/ProfileRoute",
    "routes/ProfileIndexRoute",
    "routes/UsersRoute",
    "routes/ProfileNewRoute",
    "routes/DragNDropRoute",
    "models/PostModel",
    "models/ProfileModel",
    "models/UserModel",
    "models/ProgressModel",
    "emberData",
    "bxslider",
    'bootstrap-wysihtml5',
    "wysihtml5",
    'bootstrap'

], function(
        DragNDropNamespace, ImageFile, ApplicationView,
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
        DragNDropView,
        ImageInputButton,
        PreviewUploadImageView,
        TestView,
        EditingAboutView,
        ProfileNewView,
        ApplicationController,
        tabListController,
        DataController,
        ProfilesController,
        TestController,
        DragNDropController,
        ProfileController,
        ProfileNewController,
        EditingController,
        Router,
        IndexRoute,
        SelectedTabRoute,
        DataRoute,
        ProfilesRoute,
        ProfileRoute,
        ProfileIndexRoute,
        UsersRoute,
        ProfileNewRoute,
        DragNDropRoute,
        Post,
        Profile,
        User,
        Progress
        )
{


    return  Ember.Application.createWithMixins({
        LOG_TRANSITIONS: true,
        VERSION: '1.0.0',
        rootElement: '#main',
        //  DragNDrop: DragNDrop,
        DragNDropNamespace: DragNDropNamespace,
        ImageFile: ImageFile,
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
        DragNDropView: DragNDropView,
        ProfileNewView: ProfileNewView,
        ImageInputButton: ImageInputButton,
        PreviewUploadImageView: PreviewUploadImageView,
        TestView: TestView,
        EditingAboutView: EditingAboutView,
        ApplicationController: ApplicationController,
        tabListController: tabListController,
        DataController: DataController,
        ProfilesController: ProfilesController,
        TestController: TestController,
        DragNDropController: DragNDropController,
        ProfileController: ProfileController,
        ProfileNewController: ProfileNewController,
        EditingController: EditingController,
        Router: Router,
        IndexRoute: IndexRoute,
        SelectedTabRoute: SelectedTabRoute,
        DataRoute: DataRoute,
        ProfilesRoute: ProfilesRoute,
        ProfileRoute: ProfileRoute,
        ProfileIndexRoute: ProfileIndexRoute,
        UsersRoute: UsersRoute,
        ProfileNewRoute: ProfileNewRoute,
        DragNDropRoute: DragNDropRoute,
        Post: Post,
        Profile: Profile,
        User: User,
        Progress: Progress,
        store: DS.Store.create({
            revision: 12,
            adapter: DS.RESTAdapter.create({
                bulkCommit: false,
                url: getRestAPIURL(),
                mappings: {
                    posts: Post
                }
            })
        }),
        ready: function() {

        }
    });
}
);


function getRestAPIURL()
{
    var api_url = document.domain;
    var api_url = api_url.replace("www", "api");
    api_url = "http://" + api_url;
    return api_url;
}
