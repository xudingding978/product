
HubStar.MasonryCollectionItemsController = Ember.ArrayController.extend({
    content: [],
    uploadImageContent: [],
    title: null,
    collection_id: null,
    is_authentic_user: false,
    is_profile_editing_mode: false,
    uploadOrsubmit: false,
    is_user_editing_mode: false,
    isUser: false,
    isVideoPhoto: false,
    collectionID: "",
    isSearchBoard: true,
    itemID: "",
    profileId: "",
    createTime: "",
    isSave: false,
    type: "",
    needs: ['photoCreate', 'profile', 'user', 'permission', 'photoCreateInfoSetting', 'applicationFeedback'],
    user_id: null,
    loadingTime: false,
    init: function() {
    },
    selectModelForUser: function(collection_id) {
        this.set('content', []);
        this.set('type', "user");
        this.set('collection_id', collection_id);
        this.set("isUser", true);
        $(document).ready(function() {
            setTimeout(function() {
                $(function() {
                    $('#masonry_photo_collection_container').masonry({
                        itemSelector: '.box',
                        columnWidth: 185,
                        isFitWidth: true,
                        transitionDuration: 0
                    });
                });
            }, 5);
        });
        var address = document.URL;
        var user_id = address.split("#")[1].split("/")[2];
        this.set("id", user_id);
        this.set('user_id', user_id);
        this.set('collections', this.get('controllers.user').get('collections'));
        for (var i = 0; i < this.get("collections").get("length"); i++)
        {
            if (this.get("collections").objectAt(i).get("id") === collection_id)
            {
                this.set('title', this.get("collections").objectAt(i).get('title'));
                if (this.get("collections").objectAt(i).get('updated_at') !== null) {
                    var date = this.get("collections").objectAt(i).get('updated_at');
                    this.set("createTime", date + "");
                }
                else
                {
                    this.set("createTime", "Wed Jan 01 2014 00:00:00 GMT+1200 (NZST)");
                }
            }
        }
        var results = HubStar.Mega.find({RquireType: "personalCollection", user_id: user_id, collection_id: collection_id});
        var that = this;
        this.set("loadingTime", true);
        results.then(function() {
            for (var i = 0; i < results.get("length"); i++) {
                var tempObject = results.objectAt(i);
                that.get("content").pushObject(tempObject);
            }
            $(document).ready(function() {
                setTimeout(function() {
                    for (var i = 0; i < results.get("length"); i++) {
                        var tempmega = results.objectAt(i);
                        if (tempmega.get("getPhoto") === true || tempmega.get("getArticle") === true)
                        {
                            if (tempmega.get("object_image_url") !== null) {
                                var url = tempmega.get("object_image_url").split("_");
                                var length = url.length;
                                var size = url[length - 1].split(".")[0].split("x")[1];
                                if (size !== undefined)
                                {
                                    $("#init_photo_" + tempmega.get("id")).css({height: size});
                                }
                            }
                        }
                        else if (tempmega.get("getVideo") === true)
                        {
                            $("#init_photo_" + tempmega.get("id")).css({height: "263px"});
                        }
                    }
                    setTimeout(function() {
                        $('#masonry_photo_collection_container').masonry("reloadItems");
                        setTimeout(function() {
                            $('#masonry_photo_collection_container').masonry();
                            $('html,body').animate({
                                scrollTop: $("#profile_submenu_collection").offset().top - 100
                            });
                            that.set("loadingTime", false);
                        }, 15);
                    }, 15);
                }, 5);
            });
        });
        this.checkEditingMode();
    },
    selectModelForProfile: function(collection_id, title, profileId) {
        this.set('collection_id', collection_id);

        var owner_id = profileId;
        this.set("profileId", profileId);
        this.resetContent();
        this.set('type', "profile");
        this.set("isUser", true); //if click from search board, isUser is false
        $(document).ready(function() {
            setTimeout(function() {
                $(function() {
                    $('#masonry_photo_collection_container').masonry({
                        itemSelector: '.box',
                        columnWidth: 185,
                        isFitWidth: true,
                        transitionDuration: 0
                    });
                });
            }, 5);
        });
        if (title === undefined)
        {

            var results = HubStar.Collection.find({RquireType: "personalCollection", profile_id: owner_id, collection_id: collection_id});
            var that = this;

            results.addObserver('isLoaded', function() {
                if (results.get('isLoaded')) {
                    var titleFill = results.objectAt(0).get("title");
                    that.set('title', titleFill);

                }
            });
        }
        else {
            this.set("id", owner_id);
            this.set('title', title);
        }
        this.checkEditingMode();
    }
    ,
    goBack: function() {
//        var lastposition = HubStar.get("scrollCollectionPosition");
        //window.history.back();

        var address = document.URL;
        var user_id = address.split("#")[1].split("/")[1];
        if (user_id === "profiles")
        {
            this.get('controllers.profile').goToProfileRoute(address.split("#")[1].split("/")[2]);

        }
        else if (user_id === "users")
        {
            this.get('controllers.user').goToUserRoute();
        }

        setTimeout(function() {
            $('#masonry_user_container').masonry();
            $('html,body').animate({
                scrollTop: $("#profile_submenu").offset().top - 100
            });
        }, 100);
    },
    newUpload: function() {

        $('#ownerUpload').attr('style', 'display:block');
        $('#tagetUplaod').attr('style', 'display:none');
        $('#addNew').toggleClass('col2');
        $('#addNew').toggleClass('col4');
        var photoCreate = this.get('controllers.photoCreate');
        photoCreate.init();
        setTimeout(function() {
            $('#masonry_photo_collection_container').masonry("reloadItems");
            setTimeout(function() {
                $('#masonry_photo_collection_container').masonry();
            }, 100);
        }, 200);
    },
    back: function() {
        this.resetContent();
        var photoCreateController = this.get('controllers.photoCreate');
        photoCreateController.set("fileSize", 0);
        photoCreateController.set("filesNumber", 0);
        $('#ownerUpload').attr('style', 'display:none');
        $('#tagetUplaod').attr('style', 'display:block');
        this.set('uploadOrsubmit', false);
        $('#addNew').toggleClass('col2');
        $('#addNew').toggleClass('col4');
        this.reLayout();

        HubStar.set('isNewUpload', true);
        $('#dragAndDroppArea').attr('style', "display:none");
    },
    removeCollectedItem: function(collectionID, itemID, type)
    {
        var message = "Remove this item from your collection?";
        this.set("message", message);
        this.set('makeSureDelete', true);
        this.dropdownPhotoSetting(itemID);
        if (this.get('willDelete')) {
            var tempItem;
            if (this.get("type") === "user") {
                var currentUser = HubStar.User.find(localStorage.loginStatus);
                var currentCollection = null;
                var collectedColletionids = null;

                for (var j = 0; j < this.get('content').length; j++) {
                    if (this.get('content').objectAt(j).get('id') === this.get('itemID')) {
                        tempItem = this.get('content').objectAt(j);
                        for (var i = 0; i < currentUser.get('collections').get('length'); i++) {
                            if (currentUser.get('collections').objectAt(i).get('id') === this.get('collectionID'))
                            {
                                currentCollection = currentUser.get('collections').objectAt(i);
                                collectedColletionids = currentCollection.get('collection_ids');
                                if (collectedColletionids === null) {
                                    collectedColletionids = "";
                                }
                                var tempcollectedColletionids = collectedColletionids.replace(this.get('itemID') + ",", "");
                                tempcollectedColletionids = tempcollectedColletionids.replace(this.get('itemID'), "");
                                currentCollection.set('collection_ids', tempcollectedColletionids);
                                currentCollection.store.save();
                                this.get('content').removeObject(tempItem);
                                break;
                            }
                        }
                        break;
                    }
                }
            }
            else
            {
                var profile = HubStar.Profile.find(this.get("profileId"));
                for (var i = 0; i < this.get('content').length; i++) {
                    if (this.get('content').objectAt(i).get('id') === this.get('itemID')) {
                        tempItem = this.get('content').objectAt(i);
                        if (this.get('type') === 'profile') {
                            var item = HubStar.Mega.find(this.get('itemID'));

//                            if (this.get("profileId") !== item.get("owner_id") || item.get("collection_id") !== this.get('collectionID'))
                            {

                                for (var j = 0; j < profile.get('collections').get('length'); j++) {
                                    if (profile.get('collections').objectAt(j).get('id') === this.get('collectionID'))
                                    {
                                        currentCollection = profile.get('collections').objectAt(j);
                                        collectedColletionids = currentCollection.get('collection_ids');
                                        if (collectedColletionids === null) {
                                            collectedColletionids = "";
                                        }

                                        var ids = collectedColletionids.split(",");
                                        var delResult = "";
                                        for (var i = 0; i < ids.length; i++)
                                        {
                                            if (this.get('itemID') !== ids[i])
                                            {
                                                delResult = delResult + ids[i] + ",";
                                            }
                                        }
                                        delResult = delResult.substr(0, delResult.length - 1);

                                        currentCollection.set('collection_ids', delResult);
                                        if (this.get("profileId") === item.get("owner_id") && item.get("collection_id") === this.get('collectionID')) {
                                            //console.log(item);
                                            if (item.get("save_count") > 0)
                                            {
                                                item.set("is_deleted", true);
                                                item.store.save();
                                            }
                                            else {
                                                item.deleteRecord();
                                                item.store.save();
                                            }
                                        }
                                        currentCollection.store.save();
                                        break;
                                    }
                                }
                            }
//                            else {
//                                tempItem.deleteRecord();
//                                tempItem.store.save();
//                            }
                        }
                        this.get('content').removeObject(tempItem);
                        break;
                    }
                }
            }
            this.reLayout();
            this.cancelDelete();
        } else {
            this.set('willDelete', true);
            this.set('collectionID', collectionID);
            this.set('itemID', itemID);
            this.set('type', type);
        }
    },
    reLayout: function() {
        var that = this;
        setTimeout(function() {
            $('#masonry_photo_collection_container').masonry("reloadItems");
            setTimeout(function() {
                that.set("loadingTime", false);
                $('#masonry_photo_collection_container').masonry();
            }, 100);
        }, 300);
    },
    cancelDelete: function() {
        this.set('willDelete', false);
        this.set('makeSureDelete', false);
        HubStar.set('data', null);
    },
    checkAuthenticUser: function() {
        var currentUser = HubStar.User.find(localStorage.loginStatus);
        var current_user_email = currentUser.get('email');
        var permissionController = this.get('controllers.permission');
        var that = this;
        var role = permissionController.checkAuthenticEdit(that.get("pageModel").get("profile_creator"), that.get("pageModel").get("profile_administrator"), that.get("pageModel").get("profile_editor"));
        var is_edit = false;
        if (role !== "")
        {
            is_edit = true;
        }

        if (currentUser.get("isLoaded")) {
            var is_authentic_user = permissionController.checkAuthenticUser(that.get("pageModel").get("owner"), that.get("pageModel").get("profile_editors"), current_user_email);
            this.set("is_authentic_user", is_authentic_user || is_edit);
        } else {
            currentUser.addObserver('isLoaded', function() {
                var current_user_email = currentUser.get('email');
                if (currentUser.get('isLoaded')) {
                    is_authentic_user = permissionController.checkAuthenticUser(that.get("pageModel").get("owner"), that.get("pageModel").get("profile_editors"), current_user_email);
                    that.set("is_authentic_user", is_authentic_user || is_edit);
                }
            });
        }
        //return is_authentic_user;
    },
    changeCollectionCover: function(id, collection_id, HubStarModel, article) {

        this.dropdownPhotoSetting(id);
        var Mega = HubStar.Mega.find(id);
        var address = document.URL;
        var owner_id = address.split("#")[1].split("/")[2];
        var userOrprofile = HubStarModel.find(owner_id).get('collections');
        var coverImge = "";
        if (Mega.get('type') === "photo")
        {
            coverImge = Mega.get('photo').objectAt(0).get("photo_image_original_url");
        }
        else if (Mega.get('type') === "article")
        {
            coverImge = Mega.get('article').objectAt(0).get("article_image_url");
        }
        for (var i = 0; i < userOrprofile.get('content').length; i++) {

            if (userOrprofile.objectAt(i).get("id") === collection_id) {

                var currentCollection = userOrprofile.objectAt(i);
                currentCollection.set('cover', coverImge);
                currentCollection.set('optional', owner_id);
                HubStarModel.find(owner_id).store.save();
                this.get('controllers.applicationFeedback').statusObserver(null, "Cover image updated.");
                break;
            }
        }
    },
    dropdownPhotoSetting: function(id) {
//        $('#dropdown_id_' + id).toggleClass('hideClass');
        var id = '#dropdown_id_' + id;
        $(id).toggleClass('hideClass');
        $(id).click(function() {
            $(this).removeClass('hideClass');
        }).mouseleave(function() {
            $(this).addClass('hideClass');
        });
    },
    resetContent: function()
    {

        this.set('content', []);
        this.set('uploadImageContent', []);

        var owner_id = this.get("profileId");
        var title = this.get('collection_id');

        var pics = HubStar.Mega.find({RquireType: "profileCollection", user_id: owner_id, collection_id: title});
        var that = this;
        this.set("loadingTime", true);
        pics.addObserver('isLoaded', function() {
            if (pics.get('isLoaded')) {
                for (var i = this.get("content").length - 1; i >= 0; i--) {
                    var tempObject = pics.objectAt(i);
                    that.get("content").pushObject(tempObject);
                }
                $(document).ready(function() {
                    setTimeout(function() {
                        for (var i = 0; i < pics.get("length"); i++) {
                            var tempmega = pics.objectAt(i);
                            if (tempmega.get("getPhoto") === true || tempmega.get("getArticle") === true)
                            {
                                if (tempmega.get("object_image_url") !== null) {
                                    var url = tempmega.get("object_image_url").split("_");
                                    var length = url.length;
                                    var size = url[length - 1].split(".")[0].split("x")[1];
                                    if (size !== undefined)
                                    {
                                        $("#init_photo_" + tempmega.get("id")).css({height: size});
                                    }
                                }
                            }
                        }
                        setTimeout(function() {
                            $('#masonry_photo_collection_container').masonry("reloadItems");
                            setTimeout(function() {
                                $('#masonry_photo_collection_container').masonry();
                                that.set("loadingTime", false);
                                $('html,body').animate({
                                    scrollTop: $("#profile_submenu_collection").offset().top - 100
                                });
                            }, 15);
                        }, 15);
                    }, 500);
                });
            }
        });
    },
    checkEditingMode: function()
    {
        this.set('is_profile_editing_mode', false);
        this.set('is_user_editing_mode', false);

        if (HubStar.get('editingMode') === 'profile') {
            this.set('is_profile_editing_mode', true);
            var proController = this.get('controllers.profile');
            this.set('pageModel', proController.get('model'));
            this.checkAuthenticUser();
        }
        else if (HubStar.get('editingMode') === 'user') {
            this.set('is_user_editing_mode', true);
            var userController = this.get('controllers.user');
            this.set('is_authentic_user', userController.get('is_authentic_user'));
        }
        else {
            this.set('is_profile_editing_mode', false);
            this.set('is_user_editing_mode', false);
        }
    },
    photoUpload: function(e) {
        for (var i = 0; i < this.get("uploadImageContent").length; i++)
        {
            var t = this.get("uploadImageContent").objectAt(i).store.save();
            this.get("uploadImageContent").objectAt(i).get("isSaving");
        }
    }

});
