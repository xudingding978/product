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
        'isotope': 'libs/isotope/jquery.isotope.min',
        'search': 'libs/isotope/search',
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
        'jquery': [''],
        'jquery.ui': ['jquery'],
        'bxslider': ['jquery'],
        'bootstrap-wysihtml5': ['wysihtml5'],
        'bootstrap': ['jquery'],
        'isotope': ['jquery'],
        'search': ['jquery']
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
    "views/IndexView",
    "views/CarouselView",
    "views/IsotopeView",
    "views/LightBoxView",
    "views/PhotosView",
    "views/VideosView",
    "views/FilesView",
    "views/ArticlesView",
    "views/IdeabooksView",
    "views/DiscussionsView",
    "controllers/ApplicationController",
    "controllers/tabListController",
    "controllers/DataController",
    "controllers/ProfilesController",
    "controllers/TestController",
    "controllers/DragNDropController",
    "controllers/ProfileController",
    "controllers/ProfileNewController",
    "controllers/EditingController",
    "controllers/IndexController",
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
    "routes/LightBoxRoute",
    "routes/PhotosRoute",
    "routes/VideosRoute",
    "routes/FilesRoute",
    "routes/ArticlesRoute",
    "routes/DiscussionsRoute",
    "routes/PhotoUploadRoute",
    "models/PostModel",
    "models/ProfileModel",
    "models/UserModel",
    "models/ProgressModel",
    "models/Image",
    "emberData",
    'jquery',
    "bxslider",
    'bootstrap-wysihtml5',
    "wysihtml5",
    'bootstrap',
    'isotope',
    'search'

], function(
        DragNDropNamespace, ApplicationView,
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
        IndexView,
        CarouselView,
        IsotopeView,
        LightBoxView,
        PhotosView,
        VideosView,
        FilesView,
        ArticlesView,
        IdeabooksView,
        DiscussionsView,
        ApplicationController,
        tabListController,
        DataController,
        ProfilesController,
        TestController,
        DragNDropController,
        ProfileController,
        ProfileNewController,
        EditingController,
        IndexController,
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
        LightBoxRoute,
        PhotosRoute,
        VideosRoute,
        FilesRoute,
        ArticlesRoute,
        DiscussionsRoute,
        PhotoUploadRoute,
        Post,
        Profile,
        User,
        Progress,
        Image
        )
{


    return  Ember.Application.createWithMixins({
        LOG_TRANSITIONS: true,
        VERSION: '1.0.0',
        rootElement: '#main',
        //  DragNDrop: DragNDrop,
        DragNDropNamespace: DragNDropNamespace,
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
        IndexView: IndexView,
        CarouselView: CarouselView,
        IsotopeView: IsotopeView,
        ImageInputButton: ImageInputButton,
        PreviewUploadImageView: PreviewUploadImageView,
        TestView: TestView,
        EditingAboutView: EditingAboutView,
        LightBoxView: LightBoxView,
        PhotosView: PhotosView,
        VideosView: VideosView,
        FilesView: FilesView,
        ArticlesView: ArticlesView,
        IdeabooksView: IdeabooksView,
        DiscussionsView: DiscussionsView,
        ApplicationController: ApplicationController,
        tabListController: tabListController,
        DataController: DataController,
        ProfilesController: ProfilesController,
        TestController: TestController,
        DragNDropController: DragNDropController,
        ProfileController: ProfileController,
        ProfileNewController: ProfileNewController,
        EditingController: EditingController,
        IndexController: IndexController,
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
        LightBoxRoute: LightBoxRoute,
        PhotosRoute: PhotosRoute,
        VideosRoute: VideosRoute,
        FilesRoute: FilesRoute,
        ArticlesRoute: ArticlesRoute,
        DiscussionsRoute: DiscussionsRoute,
        PhotoUploadRoute:PhotoUploadRoute,
        Post: Post,
        Profile: Profile,
        User: User,
        Progress: Progress,
        Image: Image,
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
    var api_domain_start_pos = api_url.indexOf('.');
    var api_url = api_url.slice(api_domain_start_pos);
    api_url = "http://api" + api_url;
    return api_url;
}
