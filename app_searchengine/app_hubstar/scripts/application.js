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
        'helper': 'libs/helper',
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
//    "views/PhotoSliderView",
    "views/MasonryView",
  //  "views/LightBoxView",
    "views/VideoView",
 //   "views/FilesView",
    "views/ArticleView",
 //   "views/IdeabooksView",
 //   "views/DiscussionsView",
  //  "views/DefaultView",
  //  "views/SearchsView",
 //   "views/DataView",
  //  "views/DataItemView",
  //  "views/DataIndexView",
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
    "views/ConView",
    "views/AddChildViewButton",
    "views/InsideCollectionView",
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
    "views/ProfileCollectionsView",
    "views/ProfilePartnersView",
    "views/ProfileFollowersView",
    "views/UserCollectionsView",
    "controllers/ApplicationController",
    "controllers/tabListController",
    "controllers/DataController",
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
    "controllers/InsideCollectionController",
    "controllers/ContactController",
    "controllers/CommentController",
    "controllers/TopicSelectionController",
    "controllers/PlatformBarController",
    "controllers/ItemProfilesController",
    "controllers/ProfilePartnersController",
    "controllers/ArticleController",
    "controllers/ProfileFollowersController",
    "app/router",
    "routes/ApplicationRoute",
    "routes/IndexRoute",
 //   "routes/SelectedTabRoute",
    "routes/DataRoute",
    "routes/ProfilesRoute",
    "routes/ProfileRoute",
    "routes/ProfileIndexRoute",
    "routes/ProfilesIndexRoute",
    "routes/UserIndexRoute",
    "routes/UsersIndexRoute",
    "routes/UsersRoute",
    "routes/UserRoute",
    "routes/ProfileNewRoute",
    "routes/PhotoUploadRoute",
  //  "routes/LightBoxRoute",
    "routes/PhotosRoute",
    "routes/PhotoRoute",
    "routes/VideosRoute",
    "routes/VideoRoute",
 //   "routes/FilesRoute",
    "routes/ArticlesRoute",
    "routes/ArticleRoute",
    "routes/DiscussionsRoute",
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
    "models/PostModel",
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
    //    PhotoSliderView,
        MasonryView,
  //      LightBoxView,
        VideoView,
    //    FilesView,
        ArticleView,
   //     IdeabooksView,
   //     DiscussionsView,
   //     DefaultView,
  //      SearchsView,
  //      DataView,
  //      DataItemView,
 //      DataIndexView,
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
        ConView,
        AddChildViewButton,
        InsideCollectionView,
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
        ProfileCollectionsView,
        ProfilePartnersView,
        ProfileFollowersView,
        UserCollectionsView,
        ApplicationController,
        tabListController,
        DataController,
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
        InsideCollectionController,
        ContactController,
        CommentController,
        TopicSelectionController,
        PlatformBarController,
        ItemProfilesController,
        ProfilePartnersController,
        ArticleController,
        ProfileFollowersController,
        Router,
        ApplicationRoute,
        IndexRoute,
 //       SelectedTabRoute,
        DataRoute,
        ProfilesRoute,
        ProfileRoute,
        ProfileIndexRoute,
        ProfilesIndexRoute,
        UserIndexRoute,
        UsersIndexRoute,
        UsersRoute,
        UserRoute,
        ProfileNewRoute,
        PhotoUploadRoute,
    //    LightBoxRoute,
        PhotosRoute,
        PhotoRoute,
        VideosRoute,
        VideoRoute,
    //    FilesRoute,
        ArticlesRoute,
        ArticleRoute,
        DiscussionsRoute,
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
        Post,
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
 //       PhotoSliderView: PhotoSliderView,
        MasonryView: MasonryView,
        ImageInputButtonView: ImageInputButtonView,
        PreviewUploadImageView: PreviewUploadImageView,
        TestView: TestView,
        EditingAboutView: EditingAboutView,
     //   LightBoxView: LightBoxView,
        VideoView: VideoView,
   //     FilesView: FilesView,
        ArticleView: ArticleView,
   //     IdeabooksView: IdeabooksView,
    //    DiscussionsView: DiscussionsView,
      //  DefaultView: DefaultView,
     //   SearchsView: SearchsView,
 //       DataView: DataView,
    //    DataItemView: DataItemView,
     //   DataIndexView: DataIndexView,
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
        ConView: ConView,
        AddChildViewButton: AddChildViewButton,
        InsideCollectionView: InsideCollectionView,
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
        ProfileCollectionsView: ProfileCollectionsView,
        ProfilePartnersView: ProfilePartnersView,
        ProfileFollowersView: ProfileFollowersView,
        UserCollectionsView:UserCollectionsView,
        ApplicationController: ApplicationController,
        tabListController: tabListController,
        DataController: DataController,
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
        InsideCollectionController: InsideCollectionController,
        ContactController: ContactController,
        CommentController: CommentController,
        TopicSelectionController: TopicSelectionController,
        PlatformBarController: PlatformBarController,
        ItemProfilesController: ItemProfilesController,
        ProfilePartnersController: ProfilePartnersController,
        ArticleController: ArticleController,
        ProfileFollowersController: ProfileFollowersController,
        Router: Router,
        ApplicationRoute: ApplicationRoute,
        IndexRoute: IndexRoute,
 //       SelectedTabRoute: SelectedTabRoute,
        DataRoute: DataRoute,
        ProfilesRoute: ProfilesRoute,
        ProfileRoute: ProfileRoute,
        ProfileIndexRoute: ProfileIndexRoute,
        ProfilesIndexRoute: ProfilesIndexRoute,
        UserIndexRoute: UserIndexRoute,
        UsersIndexRoute: UsersIndexRoute,
        UsersRoute: UsersRoute,
        UserRoute: UserRoute,
        ProfileNewRoute: ProfileNewRoute,
        PhotoUploadRoute: PhotoUploadRoute,
    //    LightBoxRoute: LightBoxRoute,
        PhotosRoute: PhotosRoute,
        PhotoRoute: PhotoRoute,
        VideosRoute: VideosRoute,
        VideoRoute: VideoRoute,
     //   FilesRoute: FilesRoute,
        ArticlesRoute: ArticlesRoute,
        ArticleRoute: ArticleRoute,
        DiscussionsRoute: DiscussionsRoute,
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
        Post: Post,
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
