/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var CollectionController = HubStar.CollectionController.create();

var model = HubStar.User.find("56344323073");
model.addObserver('isLoaded', function() {
    if (model.get('isLoaded')) {
    }
});
module("Basic Tests");
test("collectionController", function() {

//getCreateCollection
    module("group getCreateCollection");
    test("getCreateCollection a", function()
    {

        var title = "hubstarcom";
        var desc = "trendsideasGood";
        var cover = "https://s3-ap-southeast-2.amazonaws.com/develop.devbox/Defaultcollection-cover.png";
        var collections = model.get("collections");
        var collection = CollectionController.getCreateCollection(title, desc, collections);
        var titleResult = collection.get("title");
        var descResult = collection.get("desc");
        var coverResult = collection.get("cover");
        equal(title, titleResult, " title successful");
        equal(desc, descResult, " desc successful");
        equal(cover, coverResult, " cover successful");
    });
    test("getCreateCollection b", function()
    {
        var title = "hubstarcom";
        var desc = "";
        var cover = "https://s3-ap-southeast-2.amazonaws.com/develop.devbox/Defaultcollection-cover.png";
        var collections = model.get("collections");
        var collection = CollectionController.getCreateCollection(title, desc, collections);
        var titleResult = collection.get("title");
        var descResult = collection.get("desc");
        var coverResult = collection.get("cover");
        equal(title, titleResult, " title successful");
        equal("Add a short description to your Collection", descResult, " desc successful");
        equal(cover, coverResult, " cover successful");
    });


    //checkingValidInput
    module("group checkingValidInput");

    test("checkingValidInput ", function()
    {
        var title = CollectionController.checkingValidInput("http://trendsideas.com/profiles/tom auckland nez zeanland");
        var titleResult = "http://trendsideas.com/profiles/tom-auckland-nez-zeanland";
        equal(title, titleResult, "checking ValidInput successful");
    });
    test("checkingValidInput ", function()
    {
        var title = "";
        var titleResult = CollectionController.checkingValidInput(title);
        equal(title, titleResult, "checking ValidInput null successful");
    });
    test("checkingValidInput ", function()
    {
        var title = null;
        ;
        var titleResult = CollectionController.checkingValidInput(title);
        equal(title, titleResult, "checking ValidInput null successful");
    });


    //checkingIdisExsinting
    module("group checkingIdisExsinting");

    test("checkingIdisExsinting ", function()
    {
        var id = "ddqwerasdfw345";
        var postOrPut = "create";
        var collections = model.get("collections");
        CollectionController.set("collections", collections);
        var isExsinting = CollectionController.checkingIdisExsinting(id, postOrPut);

        equal(isExsinting, true, "checking Valid no exist Input successful");
    });

    //getUpdateCollection
    test("getUpdateCollection ", function()
    {
        var selectedCollection = model.get("collections").objectAt(0);
        var desc = "Add-a-short-description-to-your-Collection";
        var id = "test";
        var title = "test";
        var newRecord = CollectionController.getUpdateCollection(selectedCollection);
        var descResult = newRecord.get("desc");
        var idResult = newRecord.get("id");
        var titleResult = newRecord.get("title");
        equal(title, titleResult, "title successful");
        equal(id, idResult, "id successful");
        equal(desc, descResult, "desc successful");
    });


    equal("2345234", "2345234", "collectionControllersuccessful");
});


