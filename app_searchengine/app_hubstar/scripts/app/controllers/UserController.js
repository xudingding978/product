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
        objectID: null,
        needs: ['photoCreate'],
        init: function()
        {
            this.setUser();
        },
        setUser: function()
        {
            var user = App.User.find(localStorage.loginStatus);
            this.set("collections", user.get("collections"));
 //         this.setDesc(this.get("collections").objectAt(0).get("desc"));
        //    this.setTitle(this.get("collections").objectAt(0).get("title"));
            this.set("user", user);
            var collections = user.get("collections");
            var all_cols = "";
            for (var i = 0; i < collections.get("length"); i++)
            {
                var col = collections.objectAt(i);
                all_cols += col.get("collection_ids") + ",";
            }
            this.getCollectedItems(all_cols);
        },
        getCollectedItems: function(ids)
        {
            var results = App.Mega.find({"RquireType": "personalCollection", "collection_ids": ids});
            console.log(results);
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
                var tempCollection = App.Collection.createRecord({"title": title, "desc": null, "collection_ids": null, "createdAt": new Date()});
                this.get("collections").pushObject(tempCollection);

            }
        }, submit: function()
        {
            var controller = this.get('controllers.photoCreate');
            controller.setMode("user");
        },
        setDesc: function(desc) {
            this.set("selectedDesc", desc);
        },
        setTitle: function(title) {
            this.set("selectedTitle", title);
        }, checkInput: function(title) {
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
    }
    );
    return UserController;
});