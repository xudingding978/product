/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


var addCollectionController = HubStar.AddCollectionController.create();
var model = HubStar.User.find("10242305480");
model.addObserver('isLoaded', function() {
    if (model.get('isLoaded')) {
    }

});

module("Basic Tests");
test("addCollectionController", function() {
//  ok(true, "true is truthy");
//  var t="test";
//   var s="test";
//  equal(t, s, "1 is truthy");
//  notEqual(0, true, "0 is NOT truthy");

//set title
    var addCollectionController = HubStar.AddCollectionController.create();
    //set title
    test("setTitle", function()
    {
        var setTitle = addCollectionController.setTitle("trendsideas");
        var gettTitle = addCollectionController.get("selectedTitle");
        equal(gettTitle, "trendsideas", "set title successful");
    });

    //set desc
    test("setDesc", function()
    {
        var setDesc = addCollectionController.setDesc("desc");
        var getDesc = addCollectionController.get("selectedDesc");
        equal(getDesc, "desc", "set desc successful");
    });

    //set  image id
    test("setImageID", function()
    {
        var setImageID = addCollectionController.setImageID("2345234");
        var getImageID = addCollectionController.get("objectID");
        equal(getImageID, "2345234", "set image id successful");
    });

    //set  thumbnail url
    test("setThumbnailUrl", function()
    {
        var setThumbnailUrl = addCollectionController.setThumbnailUrl("http://beta.trendsideas.com/#/photos/23423234");
        var getThumbnailUrl = addCollectionController.get("selectedPhotoThumbnailUrl");
        equal(getThumbnailUrl, "http://beta.trendsideas.com/#/photos/23423234", "set thumbnail url successful");
    });


    //checkingValidInput
    test("checkingValidInput", function()
    {
        var checkingValidInput = addCollectionController.checkingValidInput("beta.trendsideas.com photos 23423234");
        var result = "beta.trendsideas.com-photos-23423234";
        equal(checkingValidInput, result, "checking Valid Input  successful");
    });


    //set Selected Collection

    asyncTest("asynchronous test for setSelectedCollection : one second later!", function() {
        expect(7);
        var addCollectionController = HubStar.AddCollectionController.create();
        var model = HubStar.User.find("10242305480");
        setTimeout(function() {
            addCollectionController.set("collections", model.get("collections"));
            addCollectionController.setSelectedCollection("trends");
            var electedCollection = addCollectionController.get("selectedCollection");
            var col = {
                "title": "Trends",
                "desc": "Projects--that-I-have-had-published-in-Trends-",
                "collection_ids": "7275334791372526835, 3149680881372505467, 2379513971372451786, 1463488341373671381, 7902975431372479406, 8041043911372337297, 3495646151372546288, 8417355201372516646, 6456483831372278304, 1115627351372522724, 8209818051372495232, 5965204721372492939, 6606287561372546281, 6795672391372521645, 9329785151372270156, 8525407111372399532, 6535491261372413838, 3972156951372506506, 7077209071372536516, 2318145851372505464, 8452143731372270150, 3657337311372288406, 6328733331373671534, 6112804421373671044, 5078179431372390091, 4193423561372288417, 2535979541372406002, 7918880591373671170, 8870732031372435993",
                "created_at": null,
                "cover": "https://s3-ap-southeast-2.amazonaws.com/develop.devbox/Defaultcollection-cover.png",
                "parent_type": null,
                "optional": "10242305480",
                "type": "user",
                "id": "trends"
            };
            equal(electedCollection.get("id"), "trends", "set Selected Collection successful");
            equal(electedCollection.get("desc"), "Projects--that-I-have-had-published-in-Trends-", "set Selected Collection successful");
            equal(electedCollection.get("collection_ids"), "7275334791372526835, 3149680881372505467, 2379513971372451786, 1463488341373671381, 7902975431372479406, 8041043911372337297, 3495646151372546288, 8417355201372516646, 6456483831372278304, 1115627351372522724, 8209818051372495232, 5965204721372492939, 6606287561372546281, 6795672391372521645, 9329785151372270156, 8525407111372399532, 6535491261372413838, 3972156951372506506, 7077209071372536516, 2318145851372505464, 8452143731372270150, 3657337311372288406, 6328733331373671534, 6112804421373671044, 5078179431372390091, 4193423561372288417, 2535979541372406002, 7918880591373671170, 8870732031372435993", "set Selected Collection successful");
            equal(electedCollection.get("cover"), "https://s3-ap-southeast-2.amazonaws.com/develop.devbox/Defaultcollection-cover.png", "set Selected Collection successful");
            equal(electedCollection.get("parent_type"), null, "set Selected Collection successful");
            equal(electedCollection.get("optional"), "10242305480", "set Selected Collection successful");
            equal(electedCollection.get("type"), "user", "set Selected Collection successful");
            start();
        }, 1000);
    });

// submit
//    asyncTest("asynchronous test for submit : one second later!", function() {
//        expect(1);
//        localStorage.loginStatus = "56344323073";
//        var collection = model.get("collections").objectAt(0);
//        addCollectionController.set("selectionPop", false);
//        addCollectionController.set('selectedCollection', "test");
//        addCollectionController.set("objectID", "8606534651372499870");
//        addCollectionController.submit();
//
//        setTimeout(function() {
//
//            var loginUser = collection.get('optional');
//            equal(loginUser, "5634432307322", "set thumbnail url successful");
//            start();
//        }, 1000);
//
//    });
//addCollection
    module("group addCollection");
    asyncTest("asynchronous test for addCollection : one second later!", function() {
        expect(1);
        var collection = model.get("collections").objectAt(0);
        var content = collection.get("collection_ids"); //"8606534651372499870, 1530841381372499873, 9266708171373670147, 1222395341372427698, 7910884191372246076, 6184291091372427695";//
        setTimeout(function() {
            addCollectionController.set("objectID", "1111111");
            addCollectionController.addCollection(collection, content);
            var content2 = content + ", 1111111";
            var collection_ids = collection.get("collection_ids");
            equal(collection_ids, content2, "add Collection successful");
            start();
        }, 1000);
    });


//addComment
    module("group addComment");
    asyncTest("asynchronous test for addComment : one second later!", function() {
        expect(1);
        addCollectionController.set('selectedDesc', "good");
        addCollectionController.set("objectID", "1111111");
        localStorage.loginStatus = "10242305480";
        addCollectionController.set("commentObject", HubStar.Mega.find("7245181351372397723"));
        addCollectionController.addComment();
        setTimeout(function() {
            var currentComment = addCollectionController.get("commentObject").get('comments').objectAt(0).get("content");
            equal(currentComment, "good", " add Comment successful");
            start();
        }, 1000);

    });

//checkInput
    module("group checkInput");

    asyncTest("asynchronous test for checkInput : one second later!", function() {
        expect(1);

        setTimeout(function() {
            addCollectionController.set("collections", model.get("collections"));
            var checkInput = addCollectionController.checkInput("sdfgsdfgsdf");

            equal(checkInput, true, "check Input a successful");
            start();
        }, 1000);
    });
    asyncTest("asynchronous test for checkInput : one second later!", function() {
        expect(1);

        setTimeout(function() {
            addCollectionController.set("collections", model.get("collections"));
            var checkInput = addCollectionController.checkInput("Trends");

            equal(checkInput, true, "check Input b successful");
            start();
        }, 1000);
    });
    test(" test for checkInput : one second later!", function() {

        var checkInput = addCollectionController.checkInput(null);
        equal(checkInput, false, "check Input c successful");
    });

    test(" test for checkInput : one second later!", function() {

        var checkInput = addCollectionController.checkInput("");
        equal(checkInput, false, "check Input d successful");
    });

    module("group isTitleNotExist");
    asyncTest("asynchronous test for title exist: one second later!", function() {
        expect(1);

        setTimeout(function() {
            addCollectionController.set("collections", model.get("collections"));
            var isTitleNotExist = addCollectionController.isTitleNotExist("Trends");
            equal(isTitleNotExist, true, "isTitleNotExist exist successful");
            start();
        }, 1000);
    });

    asyncTest("asynchronous test for title  not eixt: one second later!", function() {
        expect(1);

        setTimeout(function() {
            addCollectionController.set("collections", model.get("collections"));
            var isTitleNotExist = addCollectionController.isTitleNotExist("Trenddds");
            equal(isTitleNotExist, true, "isTitleNotExist not eixt successful");
            start();
        }, 1000);
    });

    //set users
    module("group set users");
    test("asynchronous test for setUser: one second later!", function() {

        localStorage.loginStatus = "10242305480";
        addCollectionController.setUser();
        var desc = addCollectionController.get("selectedDesc");
        var title = addCollectionController.get("selectedTitle");
        var titleResult = "Trends";
        var colelctions = [
            {
                "title": "Trends",
                "desc": "Projects--that-I-have-had-published-in-Trends-",
                "collection_ids": "7275334791372526835, 3149680881372505467, 2379513971372451786, 1463488341373671381, 7902975431372479406, 8041043911372337297, 3495646151372546288, 8417355201372516646, 6456483831372278304, 1115627351372522724, 8209818051372495232, 5965204721372492939, 6606287561372546281, 6795672391372521645, 9329785151372270156, 8525407111372399532, 6535491261372413838, 3972156951372506506, 7077209071372536516, 2318145851372505464, 8452143731372270150, 3657337311372288406, 6328733331373671534, 6112804421373671044, 5078179431372390091, 4193423561372288417, 2535979541372406002, 7918880591373671170, 8870732031372435993",
                "created_at": null,
                "cover": "https://s3-ap-southeast-2.amazonaws.com/develop.devbox/Defaultcollection-cover.png",
                "parent_type": null,
                "optional": "10242305480",
                "type": "user",
                "id": "trends"
            }
        ];
        var collectionsResult = addCollectionController.get("collections").objectAt(0);
        equal(desc, "", "set setUser desc successful");
        equal(title, titleResult, "set setUser title successful");
        equal("Trends", collectionsResult.get("title"), "set setUser colelctions successful");
        equal(null, collectionsResult.get("parent_type"), "set setUser colelctions successful");
        equal(null, collectionsResult.get("created_at"), "set setUser colelctions successful");
        equal("user", collectionsResult.get("type"), "set setUser colelctions successful");
        equal("trends", collectionsResult.get("id"), "set setUser colelctions successful");
        equal("10242305480", collectionsResult.get("optional"), "set setUser colelctions successful");
        equal("Projects--that-I-have-had-published-in-Trends-", collectionsResult.get("desc"), "set setUser colelctions successful");
        equal("https://s3-ap-southeast-2.amazonaws.com/develop.devbox/Defaultcollection-cover.png", collectionsResult.get("cover"), "set setUser colelctions successful");
        //  deepEqual(colelctions, addCollectionController.get("collections"), "set addCollectionController  successful");
        equal("7275334791372526835, 3149680881372505467, 2379513971372451786, 1463488341373671381, 7902975431372479406, 8041043911372337297, 3495646151372546288, 8417355201372516646, 6456483831372278304, 1115627351372522724, 8209818051372495232, 5965204721372492939, 6606287561372546281, 6795672391372521645, 9329785151372270156, 8525407111372399532, 6535491261372413838, 3972156951372506506, 7077209071372536516, 2318145851372505464, 8452143731372270150, 3657337311372288406, 6328733331373671534, 6112804421373671044, 5078179431372390091, 4193423561372288417, 2535979541372406002, 7918880591373671170, 8870732031372435993", collectionsResult.get("collection_ids"), "set setUser colelctions successful");
    });

    equal("control", "control", "set thumbnail url successful");
});
