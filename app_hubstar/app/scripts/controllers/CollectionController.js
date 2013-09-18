HubStar.CollectionController = Ember.Controller.extend({
    collections: null,
     needs: ['applicationFeedback'],
    getCreateCollection: function(selectedCollection,  collections)
    {
        this.set('collections',collections);
        var title = selectedCollection.get('title');
        var desc = selectedCollection.get('desc');
        var isExsinting = this.checkingIdisExsinting(title, "create");       
        if (isExsinting) {
            var validID = this.checkingValidInput(title);
            var checkingCharater = this.specialCharactersChecking(title);
            if (checkingCharater && validID !== null && validID !=='') {
                selectedCollection.set('id', validID.toLowerCase());
                if (desc !== null && desc !== "") {
                    selectedCollection.set('desc', desc);
                } else {
                    selectedCollection.set('desc', "Add a short description to your Collection");
                }
            } else {
                selectedCollection = null;
                this.get('controllers.applicationFeedback').statusObserver(null, "invalide characters...");
            }
        } else {
            selectedCollection = null;
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
        selectedCollection.set("id", id);
        selectedCollection.set("title", title);
        selectedCollection.set("desc", desc);
        return selectedCollection;
    },
            
    getDeleteCollection: function() {
        
    }
}
);
