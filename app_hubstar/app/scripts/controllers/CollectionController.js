HubStar.CollectionController = Ember.Controller.extend({
    collections: null,
    needs: ['applicationFeedback', 'addCollection'],
    init: function() {

    },
    getCreateCollection: function(title, desc, collections)
    {
        if (title !== null && title !== "" && title !== undefined) {
            this.set('collections', collections);
            var ID = createMessageid();
            var isExsinting = this.checkingIdisExsinting(ID, "create");
            var collection = null;
            if (isExsinting) {
                var validID = this.checkingValidInput(ID);
                var checkingCharater = this.specialCharactersChecking(validID);

                if (checkingCharater && validID !== null && validID !== '') {

                    collection = HubStar.Collection.createRecord({});
                    collection.set('id', validID.toLowerCase());
                    collection.set('title', title);
                    collection.set('cover', "https://s3-ap-southeast-2.amazonaws.com/develop.devbox/Defaultcollection-cover.png");
                    if (desc !== null && desc !== "") {
                        collection.set('desc', desc);
                    } else {
                        collection.set('desc', "Write a brief description for this Collection");
                    }

                } else {
                    this.get('controllers.applicationFeedback').statusObserver(null, "Please try to type name with uppercase and space.", "warnning");
                }
            }
            return collection;
        } else
        {
            this.get('controllers.applicationFeedback').statusObserver(null, "Please try to type a name.", "warnning");
        }
    },
    checkingValidInput: function(title) {

        if (title === null || title === "") {
        } else {
            if (title.indexOf(" ") !== -1) {
                title = title.split(' ').join('-');
            }
            if (title === "content")
            {
                title = "content-trends";
            }
        }
        return title;
    },
    checkingIdisExsinting: function(id, postOrPut) {
        var isExsinting = true;
        if (postOrPut === "create") {
            for (var i = 0; i < this.get("collections").get('length'); i++) {
                if (HubStar.get("isProfile") === true)
                {

                    if (this.get("collections").objectAt(i).id === id) {
                        isExsinting = false;
                    }
                }
                else
                {
                    if (this.get("collections").objectAt(i).get("id") === id) {
                        isExsinting = false;
                    }
                }
            }
            if (!isExsinting) {
                this.get('controllers.applicationFeedback').statusObserver(null, "This Collection is already exsiting.", "warnning");
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
