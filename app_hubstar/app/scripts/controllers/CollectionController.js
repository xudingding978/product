HubStar.CollectionController = Ember.Controller.extend({
    collections: null,
     needs: ['applicationFeedback'],
    getCreateCollection: function(selectedCollection,  collections)
    {
//        console.log(title);
        this.set('collections',collections);
        var title = selectedCollection.get('title');
        var desc = selectedCollection.get('desc');
        var isExsinting = this.checkingIdisExsinting(title, "create");
        console.log(isExsinting);
        var collection = null;
        if (isExsinting) {
            var validID = this.checkingValidInput(title);
            var checkingCharater = this.specialCharactersChecking(title);
            if (checkingCharater) {
//                collection = HubStar.Collection.createRecord({});
                selectedCollection.set('id', validID.toLowerCase());
//                collection.set('title', title);
//                selectedCollection.set('cover', "https://s3-ap-southeast-2.amazonaws.com/develop.devbox/Defaultcollection-cover.png");
//                collection.set('type', type);
//                collection.set('optional', owner_id);
                if (desc !== null && desc !== "") {
                    selectedCollection.set('desc', desc);
                } else {
                    selectedCollection.set('desc', "Add a short description to your Collection");
                }
            } else {
                this.get('controllers.applicationFeedback').statusObserver(null, "invalide characters...");
            }
        }
        return selectedCollection;

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
        console.log(this.get('collections'));
        var isExsinting = true;
        if (postOrPut === "create") {
            for (var i = 0; i < this.get("collections").get('length'); i++) {
                if (this.get("collections").objectAt(i).get("id") === id) {
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
    },
            
    getUpdateCollection: function(selectedCollection) {
        var desc = this.checkingValidInput(selectedCollection.get('desc'));
        var id = this.checkingValidInput(selectedCollection.get('id'));
        var title = selectedCollection.get("title");
        selectedCollection.set("title", title);
        return selectedCollection;
    },
            
    getDeleteCollection: function() {
        
    }
}
);
