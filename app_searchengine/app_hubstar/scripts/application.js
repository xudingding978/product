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
        'jquery': 'libs/jquery/1.9.1/jquery-1.9.1',
        'handlebars': 'libs/handlebars/1.0.0-rc.4/handlebars-1.0.0-rc.4',
        'ember': 'libs/ember/1.0.0-rc.5/ember-latest',
        'emberData': 'libs/ember-data/0.13/ember-data-latest',
        'jquery.ui': 'libs/jquery.ui/1.9.2/jquery-ui-1.9.2.custom.min',
        'bootstrap': 'libs/bootstrap/2.2.2/js/bootstrap.min',
        "bootstrap-collapse": 'libs/bootstrap/2.2.2/js/bootstrap-collapse',
        'bootstrap-wysihtml5': 'libs/wysihtml5/bootstrap-wysihtml5',
        'bootstrap-modal': 'libs/bootstrap/2.2.2/js/bootstrap-modal',
        'wysihtml5': 'libs/wysihtml5/wysihtml5-0.3.0',
        'bxslider': 'libs/jquery.bxslider.min',
        'moment': 'libs/moment',
        'modernizr': 'libs/modernizer/modernizr-latest',
        'guid_creater': 'libs/guid_creater',
        'jquery.masonry': 'libs/jquery.masonry/jquery.masonry.min',
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
        'jquery.masonry': ['jquery'],
        'bootstrap-modal': ['bootstrap']
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
    "views/UserView",
    "views/EditingView",
    "views/PhotoUploadView",
    "views/ImageInputButtonView",
    "views/PreviewUploadImageView",
    "views/TestView",
    "views/EditingAboutView",
    "views/ProfileNewView",
    "views/IndexView",
    "views/CarouselView",
    "views/PhotoSliderView",
    "views/MasonryView",
    "views/LightBoxView",
    "views/VideoView",
    "views/FilesView",
    "views/ArticleView",
    "views/IdeabooksView",
    "views/DiscussionsView",
    "views/DefaultView",
    "views/SearchsView",
    "views/DataView",
    "views/DataItemView",
    "views/DataIndexView",
    "views/ContactView",
    'views/FooterView',
    "views/HeaderView",
    "views/BeforeLoginView",
    "views/AfterLoginView",
    "views/LoginModalView",
    "views/StatusView",
    "views/ShowAlbumView",
    "views/PhotoDisplayAreaView",
    "views/SearchTextFieldView",
    "views/SearchKeyFieldView",
    "views/WelcomeView",
    "views/QuickstartView",
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
    "controllers/PhotoController",
    "controllers/StatusController",
    "controllers/MegaController",
    "controllers/PhotoDisplayAreaController",
    "app/router",
    "routes/ApplicationRoute",
    "routes/IndexRoute",
    "routes/SelectedTabRoute",
    "routes/DataRoute",
    "routes/ProfilesRoute",
    "routes/ProfileRoute",
    "routes/ProfileIndexRoute",
    "routes/UserIndexRoute",
    "routes/UsersRoute",
    "routes/UserRoute",
    "routes/ProfileNewRoute",
    "routes/PhotoUploadRoute",
    "routes/LightBoxRoute",
    "routes/PhotosRoute",
    "routes/PhotoRoute",
    "routes/VideosRoute",
    "routes/VideoRoute",
    "routes/FilesRoute",
    "routes/ArticlesRoute",
    "routes/ArticleRoute",
    "routes/DiscussionsRoute",
    "routes/SearchsRoute",
    "routes/SearchRoute",
    "routes/SearchIndexRoute",
    "routes/IndexIndexRoute",
    "routes/WelcomeRoute",
    "routes/QuickstartRoute",
    "models/MegaModel",
    "models/PostModel",
    "models/ProfileModel",
    "models/UserModel",
    "models/ImageArray",
    "models/SearchModel",
    "models/PhotoModel",
    "models/ArticleModel",
    "models/VideoModel",
    "models/ResultstatusModel",
    "emberData",
    'jquery',
    "bxslider",
    'bootstrap-wysihtml5',
    "wysihtml5",
    'bootstrap',
    'jquery.masonry',
    'bootstrap-modal'

], function(
        DragNDropNamespace,
        ApplicationView,
        DiscoveryView,
        PhotoView,
        ProfilesView,
        ProfileView,
        UsersView,
        UserView,
        EditingView,
        PhotoUploadView,
        ImageInputButtonView,
        PreviewUploadImageView,
        TestView,
        EditingAboutView,
        ProfileNewView,
        IndexView,
        CarouselView,
        PhotoSliderView,
        MasonryView,
        LightBoxView,
        VideoView,
        FilesView,
        ArticleView,
        IdeabooksView,
        DiscussionsView,
        DefaultView,
        SearchsView,
        DataView,
        DataItemView,
        DataIndexView,
        ContactView,
        FooterView,
        HeaderView,
        BeforeLoginView,
        AfterLoginView,
        LoginModalView,
        StatusView,
        ShowAlbumView,
        PhotoDisplayAreaView,
        SearchTextFieldView,
        SearchKeyFieldView,
        WelcomeView,
        QuickstartView,
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
        PhotoController,
        StatusController,
        MegaController,
        PhotoDisplayAreaController,
        Router,
        ApplicationRoute,
        IndexRoute,
        SelectedTabRoute,
        DataRoute,
        ProfilesRoute,
        ProfileRoute,
        ProfileIndexRoute,
        UserIndexRoute,
        UsersRoute,
        UserRoute,
        ProfileNewRoute,
        PhotoUploadRoute,
        LightBoxRoute,
        PhotosRoute,
        PhotoRoute,
        VideosRoute,
        VideoRoute,
        FilesRoute,
        ArticlesRoute,
        ArticleRoute,
        DiscussionsRoute,
        SearchsRoute,
        SearchRoute,
        SearchIndexRoute,
        IndexIndexRoute,
        WelcomeRoute,
        QuickstartRoute,
        Mega,
        Post,
        Profile,
        User,
        ImageArray,
        Searchresult,
        Photo,
        Article,
        Video,
        Resultstatus
        )
{


    return  Ember.Application.createWithMixins({
        LOG_TRANSITIONS: true,
        LOG_BINDINGS: true,
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
        UserView: UserView,
        EditingView: EditingView,
        PhotoUploadView: PhotoUploadView,
        ProfileNewView: ProfileNewView,
        IndexView: IndexView,
        CarouselView: CarouselView,
        PhotoSliderView: PhotoSliderView,
        MasonryView: MasonryView,
        ImageInputButtonView: ImageInputButtonView,
        PreviewUploadImageView: PreviewUploadImageView,
        TestView: TestView,
        EditingAboutView: EditingAboutView,
        LightBoxView: LightBoxView,
        VideoView: VideoView,
        FilesView: FilesView,
        ArticleView: ArticleView,
        IdeabooksView: IdeabooksView,
        DiscussionsView: DiscussionsView,
        DefaultView: DefaultView,
        SearchsView: SearchsView,
        DataView: DataView,
        DataItemView: DataItemView,
        DataIndexView: DataIndexView,
        ContactView: ContactView,
        FooterView: FooterView,
        HeaderView: HeaderView,
        BeforeLoginView: BeforeLoginView,
        AfterLoginView: AfterLoginView,
        LoginModalView: LoginModalView,
        StatusView: StatusView,
        ShowAlbumView: ShowAlbumView,
        PhotoDisplayAreaView: PhotoDisplayAreaView,
        SearchTextFieldView: SearchTextFieldView,
        SearchKeyFieldView: SearchKeyFieldView,
        WelcomeView: WelcomeView,
        QuickstartView: QuickstartView,
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
        PhotoController: PhotoController,
        StatusController: StatusController,
        MegaController: MegaController,
        PhotoDisplayAreaController: PhotoDisplayAreaController,
        Router: Router,
        ApplicationRoute: ApplicationRoute,
        IndexRoute: IndexRoute,
        SelectedTabRoute: SelectedTabRoute,
        DataRoute: DataRoute,
        ProfilesRoute: ProfilesRoute,
        ProfileRoute: ProfileRoute,
        ProfileIndexRoute: ProfileIndexRoute,
        UserIndexRoute: UserIndexRoute,
        UsersRoute: UsersRoute,
        UserRoute: UserRoute,
        ProfileNewRoute: ProfileNewRoute,
        PhotoUploadRoute: PhotoUploadRoute,
        LightBoxRoute: LightBoxRoute,
        PhotosRoute: PhotosRoute,
        PhotoRoute: PhotoRoute,
        VideosRoute: VideosRoute,
        VideoRoute: VideoRoute,
        FilesRoute: FilesRoute,
        ArticlesRoute: ArticlesRoute,
        ArticleRoute: ArticleRoute,
        DiscussionsRoute: DiscussionsRoute,
        SearchsRoute: SearchsRoute,
        SearchRoute: SearchRoute,
        SearchIndexRoute: SearchIndexRoute,
        IndexIndexRoute: IndexIndexRoute,
        WelcomeRoute: WelcomeRoute,
        QuickstartRoute: QuickstartRoute,
        Mega: Mega,
        Post: Post,
        Profile: Profile,
        User: User,
        ImageArray: ImageArray,
        Searchresult: Searchresult,
        Photo: Photo,
        Article: Article,
        Video: Video,
        Resultstatus: Resultstatus,
        store: DS.Store.create({
            revision: 12,
            adapter: DS.RESTAdapter.create({
                bulkCommit: false,
                url: getRestAPIURL(),
                mappings: {
                    resultstatus: "App.Resultstatus"
                },
                plurals: {
                    mega: "mega",
                    resultstatus: 'resultstatuss'
                },
//                map: {
//                    Object: {
//                        Photo: {embedded: 'always'}
//                    }
//                },
            })
        }),
        ready: function() {


            App.set("isLogin", false);



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
    console.log(api_url);
    return api_url;
}


function getLogin()
{
//  $.ajax()
}
