// Define libraries
require.config({
    paths: {
        'App': 'main',
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
        'ember': 'libs/ember/1.0.0-rc.6/ember-1.0.0-rc.6',
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
        'helper': 'libs/helper',
        'browserdetecter': 'libs/browerdetecter',
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
    waitSeconds: 100,
    urlArgs: "bust=" + (new Date()).getTime()  //cancel caching for network requests,for development.
});
// Define application
define('application', [
//    "namespace/DragNDropNamespace",
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
    "views/CarouselView",
    "views/MasonryView",
    "views/VideoView",
    "views/ArticleView",
    "views/ContactView",
    'views/FooterView',
    "views/HeaderView",
    "views/BeforeLoginView",
    "views/AfterLoginView",
    "views/LoginModalView",
    "views/StatusView",
    "views/ShowAlbumView",
    "views/PhotoDisplayAreaView",
    "views/SearchRequireTextFieldView",
    "views/SearchAreaTextFieldView",
    "views/WelcomeView",
    "views/QuickstartView",
    "views/AddCollectionView",
    "views/ComingSoonView",
    "views/DropDownView",
    "views/MasonryCollectionItemsView",
    "views/MapView",
    "views/ItemView",
    "views/EditCollectionView",
    "views/MasonryCollectionView",
    "views/UploadResourceView",
    "views/DeleteFunctionView",
    "views/DropdownListView",
    "views/CommentView",
    "views/LoadingSpinnerView",
    "views/PlatformBarView",
    "views/ItemProfilesView",
    "views/CollectionsView",
    "views/ProfilePartnersView",
    "views/ProfileFollowersView",
    "views/ApplicationFeedbackView",
    "views/PhotoCreateInfoSettingView",
    "views/SingleFileUploaderView",
    "controllers/ApplicationController",
    "controllers/ProfilesController",
    "controllers/TestController",
    "controllers/ProfileController",
    "controllers/ProfileNewController",
    "controllers/EditingController",
    "controllers/IndexController",
    "controllers/SearchsController",
    "controllers/PhotoCreateController",
    "controllers/StatusController",
    "controllers/MegaController",
    "controllers/PhotoDisplayAreaController",
    "controllers/AddCollectionController",
    "controllers/UsersController",
    "controllers/UserController",
    "controllers/MasonryCollectionItemsController",
    "controllers/ContactController",
    "controllers/CommentController",
    "controllers/TopicSelectionController",
    "controllers/PlatformBarController",
    "controllers/ItemProfilesController",
    "controllers/ProfilePartnersController",
    "controllers/ArticleController",
    "controllers/ProfileFollowersController",
    "controllers/PermissionController",
    "controllers/PhotoCreateInfoSettingController",
    "controllers/SingleFileUploaderController",
    "app/router",
    "routes/ApplicationRoute",
    "routes/IndexRoute",
    //   "routes/SelectedTabRoute",
    //   "routes/DataRoute",
    "routes/ProfilesRoute",
    "routes/ProfileRoute",
    "routes/UsersRoute",
    "routes/UserRoute",
    "routes/UserIndexRoute",
    "routes/ProfileIndexRoute",
    "routes/ProfileNewRoute",
    //  "routes/LightBoxRoute",
    "routes/PhotosRoute",
    "routes/PhotoRoute",
    "routes/VideosRoute",
    "routes/VideoRoute",
    //   "routes/FilesRoute",
    "routes/ArticlesRoute",
    "routes/ArticleRoute",
    "routes/SearchsRoute",
    "routes/SearchRoute",
    "routes/SearchIndexRoute",
    "routes/IndexIndexRoute",
    "routes/WelcomeRoute",
    "routes/QuickstartRoute",
    "routes/ComingSoonRoute",
    "routes/CollectionRoute",
    "routes/ProfileCollectionRoute",
    "models/MegaModel",
    // "models/PostModel",
    "models/ProfileModel",
    "models/UserModel",
    "models/ImageArray",
    "models/SearchModel",
    "models/PhotoModel",
    "models/ArticleModel",
    "models/VideoModel",
    "models/StatModel",
    "models/CollectionModel",
    "models/CommentModel",
    "models/EmailModel",
    "models/CateModel",
    "models/SubcateModel",
    "models/SubcategoriesModel",
    "models/FollowerModel",
    "emberData",
    'jquery',
    "bxslider",
    'bootstrap-wysihtml5',
    "wysihtml5",
    'bootstrap',
    'jquery.masonry',
    'bootstrap-modal'

], function(
        //      DragNDropNamespace,
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
        CarouselView,
        MasonryView,
        VideoView,
        ArticleView,
        ContactView,
        FooterView,
        HeaderView,
        BeforeLoginView,
        AfterLoginView,
        LoginModalView,
        StatusView,
        ShowAlbumView,
        PhotoDisplayAreaView,
        SearchRequireTextFieldView,
        SearchAreaTextFieldView,
        WelcomeView,
        QuickstartView,
        AddCollectionView,
        ComingSoonView,
        DropDownView,
        MasonryCollectionItemsView,
        MapView,
        ItemView,
        EditCollectionView,
        MasonryCollectionView,
        UploadResourceView,
        DeleteFunctionView,
        DropdownListView,
        CommentView,
        LoadingSpinnerView,
        PlatformBarView,
        ItemProfilesView,
        CollectionsView,
        ProfilePartnersView,
        ProfileFollowersView,
        ApplicationFeedbackView,
        PhotoCreateInfoSettingView,
        SingleFileUploaderView,
        ApplicationController,
        ProfilesController,
        TestController,
        ProfileController,
        ProfileNewController,
        EditingController,
        IndexController,
        SearchsController,
        PhotoCreateController,
        StatusController,
        MegaController,
        PhotoDisplayAreaController,
        AddCollectionController,
        UsersController,
        UserController,
        MasonryCollectionItemsController,
        ContactController,
        CommentController,
        TopicSelectionController,
        PlatformBarController,
        ItemProfilesController,
        ProfilePartnersController,
        ArticleController,
        ProfileFollowersController,
        PermissionController,
        PhotoCreateInfoSettingController,
        SingleFileUploaderController,
        Router,
        ApplicationRoute,
        IndexRoute,
        //       SelectedTabRoute,
        //      DataRoute,
        ProfilesRoute,
        ProfileRoute,
        UsersRoute,
        UserRoute,
        UserIndexRoute,
        ProfileIndexRoute,
        ProfileNewRoute,
        //    LightBoxRoute,
        PhotosRoute,
        PhotoRoute,
        VideosRoute,
        VideoRoute,
        //    FilesRoute,
        ArticlesRoute,
        ArticleRoute,
        //      DiscussionsRoute,
        SearchsRoute,
        SearchRoute,
        SearchIndexRoute,
        IndexIndexRoute,
        WelcomeRoute,
        QuickstartRoute,
        ComingSoonRoute,
        CollectionRoute,
        ProfileCollectionRoute,
        Mega,
        Profile,
        User,
        ImageArray,
        Searchresult,
        Photo,
        Article,
        Video,
        Stat,
        Collection,
        Comment,
        Email,
        Cate,
        Subcate,
        Subcategories,
        Follower
        )
{


    return  Ember.Application.createWithMixins({
        LOG_TRANSITIONS: false,
        LOG_BINDINGS: false,
        VERSION: '1.0.0',
        rootElement: '#main',
        //  DragNDrop: DragNDrop,
        //       DragNDropNamespace: DragNDropNamespace,
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
        CarouselView: CarouselView,
        MasonryView: MasonryView,
        ImageInputButtonView: ImageInputButtonView,
        PreviewUploadImageView: PreviewUploadImageView,
        TestView: TestView,
        EditingAboutView: EditingAboutView,
        VideoView: VideoView,
        ArticleView: ArticleView,
        ContactView: ContactView,
        FooterView: FooterView,
        HeaderView: HeaderView,
        BeforeLoginView: BeforeLoginView,
        AfterLoginView: AfterLoginView,
        LoginModalView: LoginModalView,
        StatusView: StatusView,
        ShowAlbumView: ShowAlbumView,
        PhotoDisplayAreaView: PhotoDisplayAreaView,
        SearchRequireTextFieldView: SearchRequireTextFieldView,
        SearchAreaTextFieldView: SearchAreaTextFieldView,
        WelcomeView: WelcomeView,
        QuickstartView: QuickstartView,
        AddCollectionView: AddCollectionView,
        ComingSoonView: ComingSoonView,
        DropDownView: DropDownView,
        MasonryCollectionItemsView: MasonryCollectionItemsView,
        MapView: MapView,
        ItemView: ItemView,
        EditCollectionView: EditCollectionView,
        MasonryCollectionView: MasonryCollectionView,
        UploadResourceView: UploadResourceView,
        DeleteFunctionView: DeleteFunctionView,
        DropdownListView: DropdownListView,
        CommentView: CommentView,
        LoadingSpinnerView: LoadingSpinnerView,
        PlatformBarView: PlatformBarView,
        ItemProfilesView: ItemProfilesView,
        CollectionsView: CollectionsView,
        ProfilePartnersView: ProfilePartnersView,
        ProfileFollowersView: ProfileFollowersView,
        ApplicationFeedbackView: ApplicationFeedbackView,
        PhotoCreateInfoSettingView: PhotoCreateInfoSettingView,
        SingleFileUploaderView: SingleFileUploaderView,
        ApplicationController: ApplicationController,
        ProfilesController: ProfilesController,
        TestController: TestController,
        ProfileController: ProfileController,
        ProfileNewController: ProfileNewController,
        EditingController: EditingController,
        IndexController: IndexController,
        SearchsController: SearchsController,
        PhotoCreateController: PhotoCreateController,
        StatusController: StatusController,
        MegaController: MegaController,
        PhotoDisplayAreaController: PhotoDisplayAreaController,
        AddCollectionController: AddCollectionController,
        UsersController: UsersController,
        UserController: UserController,
        MasonryCollectionItemsController: MasonryCollectionItemsController,
        ContactController: ContactController,
        CommentController: CommentController,
        TopicSelectionController: TopicSelectionController,
        PlatformBarController: PlatformBarController,
        ItemProfilesController: ItemProfilesController,
        ProfilePartnersController: ProfilePartnersController,
        ArticleController: ArticleController,
        ProfileFollowersController: ProfileFollowersController,
        PermissionController: PermissionController,
        PhotoCreateInfoSettingController: PhotoCreateInfoSettingController,
        SingleFileUploaderController: SingleFileUploaderController,
        Router: Router,
        ApplicationRoute: ApplicationRoute,
        IndexRoute: IndexRoute,
        ProfilesRoute: ProfilesRoute,
        ProfileRoute: ProfileRoute,
        UsersRoute: UsersRoute,
        UserRoute: UserRoute,
        UserIndexRoute: UserIndexRoute,
        ProfileIndexRoute: ProfileIndexRoute,
        ProfileNewRoute: ProfileNewRoute,
        //    LightBoxRoute: LightBoxRoute,
        PhotosRoute: PhotosRoute,
        PhotoRoute: PhotoRoute,
        VideosRoute: VideosRoute,
        VideoRoute: VideoRoute,
        //   FilesRoute: FilesRoute,
        ArticlesRoute: ArticlesRoute,
        ArticleRoute: ArticleRoute,
        //       DiscussionsRoute: DiscussionsRoute,
        SearchsRoute: SearchsRoute,
        SearchRoute: SearchRoute,
        SearchIndexRoute: SearchIndexRoute,
        IndexIndexRoute: IndexIndexRoute,
        WelcomeRoute: WelcomeRoute,
        QuickstartRoute: QuickstartRoute,
        ComingSoonRoute: ComingSoonRoute,
        CollectionRoute: CollectionRoute,
        ProfileCollectionRoute: ProfileCollectionRoute,
        Mega: Mega,
        Profile: Profile,
        User: User,
        ImageArray: ImageArray,
        Searchresult: Searchresult,
        Photo: Photo,
        Article: Article,
        Video: Video,
        Stat: Stat,
        Collection: Collection,
        Comment: Comment,
        Email: Email,
        Cate: Cate,
        Subcate: Subcate,
        Subcategories: Subcategories,
        Follower: Follower,
        store: DS.Store.create({
            revision: 12,
            adapter: DS.RESTAdapter.create({
                bulkCommit: false,
                url: getRestAPIURL()

            })
        }),
        ready: function() {
            App.set("isLogin", false);
            App.set("afterSearch", false);
            App.set("setHight", null);
            App.set('chooseCollection', null);
            App.set('isMansonryPageLoad', false);
            App.set('searchStart', false);

        }
    });
}
);
function getRestAPIURL()
{
    var api_url = document.domain;
    var api_domain_start_pos = api_url.indexOf('.');
    var api_url = api_url.slice(api_domain_start_pos);
    api_url = "http://develop-api" + api_url;
    return api_url;
}


function getLogin()
{
//  $.ajax()
}
