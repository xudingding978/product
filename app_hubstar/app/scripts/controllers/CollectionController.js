HubStar.CollectionController = Ember.Controller.extend({
    collections: null,
 
    needs: ['applicationFeedback'],

    init: function() {

    },
    getCreateCollection: function(title, desc, collections)
    {
        this.set('collections', collections);
        var isExsinting = this.checkingIdisExsinting(title, "create");
        var collection = null;
        if (isExsinting) {
            var validID = this.checkingValidInput(title);
            var checkingCharater = this.specialCharactersChecking(validID);

            if (checkingCharater && validID !== null && validID !== '') {
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
                this.get('controllers.applicationFeedback').statusObserver(null, "Please try to type name with upper case and space.","warnning");
            }
        }

        return collection;

    },
    checkingValidInput: function(title) {
console.log("dddddd222");
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
                this.get('controllers.applicationFeedback').statusObserver(null, "This Collection is already exsiting.","warnning");
            }
        }
        return isExsinting;
    }, 
            
 
            
        specialCharactersChecking: function(str) {
        var re = /^[a-zA-Z0-9-][a-zA-Z0-9-]*$/;
        return re.test(str);
    },
    getUpdateCollection: function(selectedCollection) {

        var desc = selectedCollection.get('desc');


        if (selectedCollection.get('desc') !== undefined) {
            

            desc = selectedCollection.get("desc");
      }




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
