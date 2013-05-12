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
    "namespace/DragNDrop",
    "models/ImageFile",
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
    "views/TestView",
    "views/ImageInputButton",
    "views/PreviewUploadImageView",
    "controllers/ApplicationController",
    "controllers/tabListController",
    "controllers/DataController",
    "controllers/ProfilesController",
    "controllers/TestController",
    "app/router",
    "routes/IndexRoute",
    "routes/SelectedTabRoute",
    "routes/DataRoute",
    "routes/ProfilesRoute",
    "routes/UsersRoute",
    "models/Postmodel",
    "emberData"

], function(
        DragNDrop,
        ImageFile,
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
        TestView,
        ImageInputButton,
        PreviewUploadImageView,
        ApplicationController,
        tabListController,
        DataController,
        ProfilesController,
        TestController,
        Router,
        IndexRoute,
        SelectedTabRoute,
        DataRoute,
        ProfilesRoute,
        UsersRoute,
        Post)
{

    var url_path = getURL();
    return  Ember.Application.createWithMixins({
        VERSION: '1.0.0',
        rootElement: '#main',
        //  DragNDrop: DragNDrop,
        DragNDrop: DragNDrop,
        ImageFile: ImageFile,
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
        TestView: TestView,
        ImageInputButton: ImageInputButton,
        PreviewUploadImageView: PreviewUploadImageView,
        ApplicationController: ApplicationController,
        tabListController: tabListController,
        DataController: DataController,
        ProfilesController: ProfilesController,
        TestController: TestController,
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
                url: url_path,
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
function getURL()
{
    var url = document.URL;
    var url = url.replace("www", "api");
    return url;
}

