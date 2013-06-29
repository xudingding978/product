define(["ember"
], function(
        Ember
        ) {
    var UserController = Ember.Controller.extend({
        user: null,
        uploadMode: null,
        newCollectionName: null,
        collections: [],
        selectedDesc: "",
        selectedTitle: "",
        coverImg: "",
        display_name: "",
        currentUserID: "",
        needs: ['photoCreate'],
        sortProperties: ['id'],
        sortAscending: false,
        makeSureDelete: false,
        selectedCollection: "",
        selected_topics: [],
        init: function()
        {
            this.setUser();
        },
        setUser: function()
        {
            var user = this.getCurrentUser();
            var topics = user.get('selected_topics').split(",");

            for (var i = 0; i < topics.length; i++) {
                if (topics.objectAt(i) === "" && topics.length === 1) {
//                    console.log(topics.objectAt(i));


                } else {

                    this.get('selected_topics').pushObject({topics: topics[i]});
                }
            }

            this.set("collections", user.get("collections"));
            this.set("coverImg", user.get("photo_url"));
            this.set("display_name", user.get("display_name"));
            if (this.get("collections").objectAt(0) !== null && typeof this.get("collections").objectAt(0) !== 'undefined') {
                this.setDesc(this.get("collections").objectAt(0).get("desc"));
                this.setTitle(this.get("collections").objectAt(0).get("title"));
            }
            this.set("user", user);
            var collections = user.get("collections");
            for (var i = 0; i < collections.get("length"); i++)
            {
                var col = collections.objectAt(i);
                if ((col.get("collection_ids") !== null && col.get("collection_ids") !== "")) {
                    var imgId = col.get("collection_ids").split(",").objectAt(0);
                    this.getHeroImgae(imgId, col);
                }
            }
        },
        getHeroImgae: function(id, col) {
            var photo = App.Mega.find(id);
            //   console.log(photo);
            photo.addObserver('isLoaded', function() {

                if (photo.get('isLoaded')) {
                    col.set("cover", photo.get('photo').objectAt(0).get("photo_image_hero_url"));
                    col.store.save();
                }
            });

        },
//        getCollectedItems: function(ids)
//        {
//            var results = App.Mega.find({"RquireType": "personalCollection", "collection_ids": ids});
//        },
        exit: function()
        {
            console.log(" drop and grag controller");
        },
//        addNewCollection: function()
//        {
//            var title = this.get("newCollectionName");
//            var isInputValid = this.checkInput(title);
//            if (isInputValid) {
//                var tempCollection = App.Collection.createRecord({"id": title, "title": title, "desc": null, "collection_ids": null, "createdAt": new Date()});
//                this.get("collections").pushObject(tempCollection);
//            }
//        },
        getCurrentUser: function()
        {

            //    this.addNewCollection();
            var address = document.URL;
            var user_id = address.split("#")[1].split("/")[2];
            this.set('currentUserID', user_id);
            var user = App.User.find(user_id);
            return user;
        },
        submit: function()
        {
            var id = this.checkingValidInput(this.selectedCollection.get('id'));

            console.log(id);
            this.selectedCollection.set('id', id);
            this.selectedCollection.set('title', id);
            //  console.log(this.selectedCollection.get('id'));
            this.get("collections").pushObject(this.selectedCollection);

            this.get("collections").store.commit();

            $(".Targeting_Object_front").attr("style", "display:inline-block");
            $(" #uploadArea").attr('style', "display:none");
            $(" #uploadObject").attr('style', "display:block");
        },
        checkingValidInput: function(title) {

            if (title.indexOf(" ") !== -1) {

                title = title.split(' ').join('-');

            }
            return title;

        },
        setDesc: function(desc) {
            this.set("selectedDesc", desc);
        },
        setTitle: function(title) {
            this.set("selectedTitle", title);
        },
        checkInput: function(title) {
            var isInputValid = false;
            if (title !== null && title !== "")
            {
                isInputValid = this.isTitleNotExist(title);

            }
            else {
                isInputValid = false;
            }
            return isInputValid;
        },
        isTitleNotExist: function(title) {
            var isContainsTitle = true;
            for (var i = 0; i < this.get("collections").get("length"); i++)
            {
                var collection = this.get("collections").objectAt(i);
                if (collection.get("title") === title)
                {
                    isContainsTitle = false;
                }
            }
            return isContainsTitle;
        },
        deleteSelectedCollection: function()
        {

            var message = "Do you wish to delete " + this.get("selectedCollection").get('id') + " ?";
            this.set("messege", message);
            this.set('makeSureDelete', true);

            if (this.get('willDelete')) {
                this.get("collections").removeObject(this.get("selectedCollection"));
                var user = this.getCurrentUser();
                user.store.save();
                this.cancelDelete();
            } else {
                this.set('willDelete', true);

            }

        },
        deleteTopic: function(topic) {

            var user = App.User.find(localStorage.loginStatus);

            user.set('selected_topics', user.get('selected_topics') + ',');

            $('#' + topic).attr('style', 'display:none');

            user.set('selected_topics', user.get('selected_topics').replace(topic + ",", ""));

            user.set('selected_topics', user.get('selected_topics').substring(0, user.get('selected_topics').length - 1));
            user.store.commit();
        },
        cancelDelete: function() {
            this.set('willDelete', false);
            this.set('makeSureDelete', false);
        },
        updateCollectionInfo: function()
        {
            var title = this.get("selectedCollection").get("id");
            this.get("selectedCollection").set("title", title);
            this.set("selectedTitle", title);
            this.get("selectedCollection").store.save();
            $(".Targeting_Object_front").attr("style", "display:inline-block");
            $(" #uploadArea").attr('style', "display:none");
            $(" #uploadObject").attr('style', "display:block");
        },
        setSelectedCollection: function(id) {

            for (var i = 0; i < this.get("collections").get("length"); i++) {
                var thisCollection = this.get("collections").objectAt(i);
                if (id === thisCollection.get("id")) {
                    this.set("selectedCollection", thisCollection);
                }
            }
        },
        newCollection: function()
        {
            var collection = App.Collection.createRecord({"id": null, "title": null, "desc": null, "collection_ids": null, "createdAt": new Date()});
            this.set("selectedCollection", collection);
        }
    }
    );
    return UserController;
});
