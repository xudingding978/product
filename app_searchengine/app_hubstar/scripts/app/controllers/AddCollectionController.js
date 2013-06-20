define([
    'ember'
], function(Ember) {

    var AddCollectionTemplate = Ember.ObjectController.extend({
        collection: [],
        user: null,
        selectedDesc: "",
        selectedTitle: "",
        needs: ["mega"],
        newCollectionName: null,
        objectID: null,
        init: function()
        {
            var megaController = this.get("controllers.mega");
            var id = megaController.get("percentComplete").id;
            this.set("objectID", id);
            this.setUser();
        },
        setUser: function()
        {
            var user = App.User.find(localStorage.loginStatus);
            this.set("collection", user.get("collection"));
            this.setDesc(this.get("collection").objectAt(0).get("desc"));
            this.setTitle(this.get("collection").objectAt(0).get("title"));
        },
        setDesc: function(desc) {
            this.set("selectedDesc", desc);
        },
        setTitle: function(title) {
            this.set("selectedTitle", title);
        },
        submit: function()
        {

            for (var i = 0; i < this.get("collection").get("length"); i++)
            {
                var collection = this.get("collection").objectAt(i);
                if (collection.get("title") === this.get("selectedTitle"))
                {
                    collection.set("desc", this.get("selectedDesc"));
                    var content = collection.get("collection_ids");
                    this.addCollection(collection, content);
                }
            }
            App.store.commit();
        },
        addCollection: function(collection, content)
        {
            if (content === null) {
                collection.set("collection_ids", this.get("objectID"));
            }

            else if (content.indexOf(this.get("objectID")) !== -1)
            {
                console.log("already got that");
            }
            else {
                var ids = collection.get("collection_ids");
                ids = ids + ", " + this.get("objectID");
                collection.set("collection_ids", ids);
            }
        }, exit: function() {
            this.get("controllers.mega").addCollection();
        },
        addNewCollection: function()
        {


            var title = this.get("newCollectionName");
            var isInputValid = this.checkInput(title);
            if (isInputValid) {
                var tempCollection = App.Collection.createRecord({"title": title, "desc": null, "collection_ids": null});
                this.get("collection").pushObject(tempCollection);
                this.set("selectedTitle", title);
            }
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
            for (var i = 0; i < this.get("collection").get("length"); i++)
            {
                var collection = this.get("collection").objectAt(i);
                if (collection.get("title") === title)
                {
                    isContainsTitle = false;
                }
            }
            return isContainsTitle;
        }
    });
    return AddCollectionTemplate;
});
