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
        currentID: "",
        objectID: null,
        needs: ['photoCreate'],
        sortProperties: ['id'],
        sortAscending: false,
        selectedCollection: "",
        init: function()
        {
            this.setUser();
        },
        setUser: function()
        {
            var user = this.getCurrentUser();
            this.set("collections", user.get("collections"));
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
            photo.addObserver('isLoaded', function() {
                if (photo.get('isLoaded')) {
                    col.set("cover", photo.get('photo').objectAt(0)._data.attributes.photo_image_hero_url);
                    col.store.save();
                }
            });

        },
        getCollectedItems: function(ids)
        {
            var results = App.Mega.find({"RquireType": "personalCollection", "collection_ids": ids});
        },
        exit: function()
        {
            console.log(" drop and grag controller");
        },
        addNewCollection: function()
        {
            var title = this.get("newCollectionName");
            var isInputValid = this.checkInput(title);
            if (isInputValid) {
                var tempCollection = App.Collection.createRecord({"id": title, "title": title, "desc": null, "collection_ids": null, "createdAt": new Date()});
                this.get("collections").pushObject(tempCollection);
            }
        },
        getCurrentUser: function()
        {
            this.addNewCollection();
            var address = document.URL;
            var user_id = address.split("#")[1].split("/")[2];
            this.set('currentID', user_id);
            var user = App.User.find(user_id);
            return user;
        },
        submit: function()
        {
            var user = this.getCurrentUser();
            user.store.commit();

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
            this.get("collections").removeObject(this.get("selectedCollection"));
            var user = this.getCurrentUser();
            user.store.commit();

        },
        updateCollectionInfo: function()
        {
            this.get("selectedCollection").store.save();
        },
        setSelectedCollection: function(id) {
            console.log(id);
            for (var i = 0; i < this.get("collections").get("length"); i++) {
                var thisCollection = this.get("collections").objectAt(i);
                if (id === thisCollection.get("id")) {
                    console.log(thisCollection.get("id"));
                    this.set("selectedCollection", thisCollection);
                }
            }
        }
    }
    );
    return UserController;
});
