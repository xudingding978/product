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
        'guid_creater': 'libs/guid_creater',
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
    "views/DiscoveryView",
    "views/PhotoView",
    "views/ProfilesView",
    "views/ProfileView",
    "views/UsersView",
    "views/EditingView",
    "views/PhotoUploadView",
    "views/ImageInputButtonView",
    "views/PreviewUploadImageView",
    "views/TestView",
    "views/EditingAboutView",
    "views/ProfileNewView",
    "views/IndexView",
    "views/CarouselView",
    "views/IsotopeView",
    "views/LightBoxView",
    "views/VideosView",
    "views/FilesView",
    "views/ArticleView",
    "views/IdeabooksView",
    "views/DiscussionsView",
    "views/DefaultView",
    "views/SearchsView",
    "controllers/ApplicationController",
    "controllers/tabListController",
    "controllers/DataController",
    "controllers/ProfilesController",
    "controllers/TestController",
    "controllers/PhotoUploadController",
    "controllers/ProfileController",
    "controllers/ProfileNewController",
    "controllers/EditingController",
    "controllers/IndexController",
    "controllers/SearchsController",
    "app/router",
    "routes/IndexRoute",
    "routes/SelectedTabRoute",
    "routes/DataRoute",
    "routes/ProfilesRoute",
    "routes/ProfileRoute",
    "routes/ProfileIndexRoute",
    "routes/UsersRoute",
    "routes/ProfileNewRoute",
    "routes/PhotoUploadRoute",
    "routes/LightBoxRoute",
    "routes/PhotosRoute",
    "routes/PhotoRoute",
    "routes/VideosRoute",
    "routes/FilesRoute",
    "routes/ArticlesRoute",
    "routes/ArticleRoute",
    "routes/DiscussionsRoute",
    "routes/SearchsRoute",
    "routes/SearchRoute",
    "routes/SearchIndexRoute",
    "routes/IndexIndexRoute",
    "models/ObjectModel",
    "models/PostModel",
    "models/ProfileModel",
    "models/UserModel",
    "models/ImageArray",
    "models/SearchModel",
    "models/PhotoModel",
    "models/ArticleModel",
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
        DiscoveryView,
        PhotoView,
        ProfilesView,
        ProfileView,
        UsersView,
        EditingView,
        PhotoUploadView,
        ImageInputButtonView,
        PreviewUploadImageView,
        TestView,
        EditingAboutView,
        ProfileNewView,
        IndexView,
        CarouselView,
        IsotopeView,
        LightBoxView,
        VideosView,
        FilesView,
        ArticleView,
        IdeabooksView,
        DiscussionsView,
        DefaultView,
        SearchsView,
        ApplicationController,
        tabListController,
        DataController,
        ProfilesController,
        TestController,
        PhotoUploadController,
        ProfileController,
        ProfileNewController,
        EditingController,
        IndexController,
        SearchsController,
        Router,
        IndexRoute,
        SelectedTabRoute,
        DataRoute,
        ProfilesRoute,
        ProfileRoute,
        ProfileIndexRoute,
        UsersRoute,
        ProfileNewRoute,
        PhotoUploadRoute,
        LightBoxRoute,
        PhotosRoute,
        PhotoRoute,
        VideosRoute,
        FilesRoute,
        ArticlesRoute,
        ArticleRoute,
        DiscussionsRoute,
        SearchsRoute,
        SearchRoute,
        SearchIndexRoute,
        IndexIndexRoute,
        Object,
        Post,
        Profile,
        User,
        ImageArray,
        Search,
        Photo,
        Article



        )
{


    return  Ember.Application.createWithMixins({
        LOG_TRANSITIONS: true,
        VERSION: '1.0.0',
        rootElement: '#main',
        //  DragNDrop: DragNDrop,
        DragNDropNamespace: DragNDropNamespace,
        ApplicationView: ApplicationView,
        DiscoveryView: DiscoveryView,
        PhotoView: PhotoView,
        ProfilesView: ProfilesView,
        ProfileView: ProfileView,
        UsersView: UsersView,
        EditingView: EditingView,
        PhotoUploadView: PhotoUploadView,
        ProfileNewView: ProfileNewView,
        IndexView: IndexView,
        CarouselView: CarouselView,
        IsotopeView: IsotopeView,
        ImageInputButtonView: ImageInputButtonView,
        PreviewUploadImageView: PreviewUploadImageView,
        TestView: TestView,
        EditingAboutView: EditingAboutView,
        LightBoxView: LightBoxView,
        VideosView: VideosView,
        FilesView: FilesView,
        ArticleView: ArticleView,
        IdeabooksView: IdeabooksView,
        DiscussionsView: DiscussionsView,
        DefaultView: DefaultView,
        SearchsView: SearchsView,
        ApplicationController: ApplicationController,
        tabListController: tabListController,
        DataController: DataController,
        ProfilesController: ProfilesController,
        TestController: TestController,
        PhotoUploadController: PhotoUploadController,
        ProfileController: ProfileController,
        ProfileNewController: ProfileNewController,
        EditingController: EditingController,
        IndexController: IndexController,
        SearchsController: SearchsController,
        Router: Router,
        IndexRoute: IndexRoute,
        SelectedTabRoute: SelectedTabRoute,
        DataRoute: DataRoute,
        ProfilesRoute: ProfilesRoute,
        ProfileRoute: ProfileRoute,
        ProfileIndexRoute: ProfileIndexRoute,
        UsersRoute: UsersRoute,
        ProfileNewRoute: ProfileNewRoute,
        PhotoUploadRoute: PhotoUploadRoute,
        LightBoxRoute: LightBoxRoute,
        PhotosRoute: PhotosRoute,
        PhotoRoute: PhotoRoute,
        VideosRoute: VideosRoute,
        FilesRoute: FilesRoute,
        ArticlesRoute: ArticlesRoute,
        ArticleRoute: ArticleRoute,
        DiscussionsRoute: DiscussionsRoute,
        SearchsRoute: SearchsRoute,
        SearchRoute: SearchRoute,
        SearchIndexRoute: SearchIndexRoute,
        IndexIndexRoute: IndexIndexRoute,
        Object: Object,
        Post: Post,
        Profile: Profile,
        User: User,
        ImageArray: ImageArray,
        Search: Search,
        Photo: Photo,
        Article: Article,
        store: DS.Store.create({
            revision: 12,
            adapter: DS.RESTAdapter.create({
                bulkCommit: false,
                url: getRestAPIURL()
//                map: {
//                    Object: {
//                        Photo: {embedded: 'always'}
//                    }
//                },
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
