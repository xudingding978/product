HubStar.CollectionController = Ember.Controller.extend({
    collections: null,
    getCreateCollection: function(title, desc, collections)
    {
        this.set('collections',collections);
        var isExsinting = this.checkingIdisExsinting(title, "create");
        var collection = null;
        if (isExsinting) {
            var validID = this.checkingValidInput(title);
            console.log(validID);
            var checkingCharater = this.specialCharactersChecking(validID);
            if (checkingCharater) {
                collection = HubStar.Collection.createRecord({});
                collection.set('id', validID.toLowerCase());
                collection.set('title', title);
                collection.set('cover', "https://s3-ap-southeast-2.amazonaws.com/develop.devbox/Defaultcollection-cover.png");
                if (desc !== null && desc !== "") {
                    collection.set('desc', desc);
                } else {
                    collection.set('desc', "Add a short description to your Collection");
                }
            } else {
                this.get('controllers.applicationFeedback').statusObserver(null, "invalide characters...");
            }
        }
        return collection;

    },
    checkingValidInput: function(title) {
        if (title === null || title === "") {
        } else {
            if (title.indexOf(" ") !== -1) {
                title = title.split(' ').join('-');
            }
        }
        return title;
    },
    checkingIdisExsinting: function(id, postOrPut) {
        var isExsinting = true;
        if (postOrPut === "create") {
            for (var i = 0; i < this.get("collections").get('length'); i++) {
                if (this.get("collections").objectAt(i).id === id) {
                    isExsinting = false;
                }
            }
            if (!isExsinting) {
                this.get('controllers.applicationFeedback').statusObserver(null, "This Collection is already exsiting!!!");
            }
        }
        return isExsinting;
    }, specialCharactersChecking: function(str) {
        var re = /^[a-zA-Z-][a-zA-Z0-9-]*$/;
        return re.test(str);
    }
}
);
