define([
    'ember'
], function(Ember) {

    var AddCollectionTemplate = Ember.ObjectController.extend({
        collections: [],
        selectedDesc: "",
        selectedTitle: "",
        selectionPop: false,
        needs: ["mega"],
        newCollectionName: null,
        objectID: null,
        init: function()
        {
            var megaController = this.get("controllers.mega");
            var id = megaController.get("selected").id;
            this.set("objectID", id);
            this.setUser();
        },
        setUser: function()
        {
            var user = App.User.find(localStorage.loginStatus);
            this.set("collections", user.get("collections"));
            if (this.get("collections").objectAt(0) !== null && this.get("collections").objectAt(0) !== undefined) {
                this.setDesc(this.get("collections").objectAt(0).get("desc"));
                this.setTitle(this.get("collections").objectAt(0).get("title"));
            }
        },
        setImageID: function(id) {
            this.set("objectID", id);
        },
        setDesc: function(desc) {
            this.set("selectedDesc", desc);
        },
        setTitle: function(title) {
            this.set("selectedTitle", title);
        },
        submit: function()
        {
            for (var i = 0; i < this.get("collections").get("length"); i++)
            {
                var collection = this.get("collections").objectAt(i);
                if (collection.get("title") === this.get("selectedTitle"))
                {
                    collection.set("desc", this.get("selectedDesc"));
                    var content = collection.get("collection_ids");
                    this.addCollection(collection, content);
                }
            }
            var that = this;
            var user = App.User.find(localStorage.loginStatus);
            user.store.save();
            user.addObserver('isSaving', function() {
                if (!user.get('isSaving')) {
                }
                else {
                }
            });

            this.get("controllers.mega").switchCollection();
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
        },
        exit: function() {
            this.get("controllers.mega").switchCollection();
        },
        addNewCollection: function()
        {
            var title = this.get("newCollectionName");
            var isInputValid = this.checkInput(title);
            if (isInputValid) {
                var tempCollection = App.Collection.createRecord({"id":title,"title": title, "desc": null, "collection_ids": null, "createdAt": new Date()});
                this.get("collections").pushObject(tempCollection);
                this.set('selectedTitle', tempCollection.get('title'));
                $('#recordID').text(this.get('selectedTitle'));

            }

            this.set('newCollectionName', null);
            this.set('selectionPop', !this.get('selectionPop'));
        },
        collectionSwitch: function() {

            this.set('selectionPop', !this.get('selectionPop'));

        },
        chooseRecord: function(record) {
            this.set('selectedTitle', record);
            $('#recordID').text(this.get('selectedTitle'));
            this.set('selectionPop', !this.get('selectionPop'));

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
        }
    });
    return AddCollectionTemplate;
});
