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
        equal(checkingValidInput, result, "set thumbnail url successful");
    });


    //set Selected Collection

    asyncTest("asynchronous test for setSelectedCollection : one second later!", function() {
        expect(1);
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
            equal(electedCollection.get("id"), "trends", "set ee url successful");
            start();
        }, 1000);
    });


//addCollection
//module("group addCollection");
//asyncTest( "asynchronous test for addCollection : one second later!", function() {
//  expect( 1 );
//
//  setTimeout(function() {
//      addCollectionController.set("collections", model.get("collections"));
//      var collection = addCollectionController.get("collections").objectAt(0);
//     var objectID = addCollectionController.set("objectID", "trends");
//     var content ={"id": "help"};
//    var addCollection = addCollectionController.addCollection(collection,content);
//
//   equal(addCollection, "help", "set ee url successful");
//    start();
//  }, 1000);
//});
//

//addComment
    module("group addComment");
    asyncTest("asynchronous test for addComment : one second later!", function() {
        expect(1);
        addCollectionController.set('selectedDesc', "good");
        localStorage.loginStatus = "56344323073";
        addCollectionController.set("commentObject", HubStar.Mega.find("7245181351372397723"));
        addCollectionController.addComment();
        setTimeout(function() {
            var currentComment = addCollectionController.get("commentObject").get('comments').objectAt(0).get("content");
            equal(currentComment, "good", "set thumbnail url successful");
            start();
        }, 1000);

    });

// submit
//    asyncTest("asynchronous test for submit : one second later!", function() {
//        expect(1);
//        localStorage.loginStatus = "56344323073";
//        addCollectionController.setSelectedCollection("Kitchen-Design");
//        var collectionController = addCollectionController.get('controllers.collection');
//        var collection = collectionController.getUpdateCollection(this.get('selectedCollection'));
//        addCollectionController.set("objectID", "7245181351372397723");
//        addCollectionController.submit();
//
//        setTimeout(function() {
//
//            var loginUser = collection.get('optional');
//            equal(loginUser, "photo/7245181351372397723", "set thumbnail url successful");
//            start();
//        }, 1000);
//
//    });


//checkInput
    module("group checkInput");

    asyncTest("asynchronous test for checkInput : one second later!", function() {
        expect(1);

        setTimeout(function() {
            addCollectionController.set("collections", model.get("collections"));
            var checkInput = addCollectionController.checkInput("sdfgsdfgsdf");

            equal(checkInput, true, "set ee url successful");
            start();
        }, 1000);
    });
    asyncTest("asynchronous test for checkInput : one second later!", function() {
        expect(1);

        setTimeout(function() {
            addCollectionController.set("collections", model.get("collections"));
            var checkInput = addCollectionController.checkInput("Trends");

            equal(checkInput, true, "set sss url successful");
            start();
        }, 1000);
    });
    test("asynchronous test for checkInput : one second later!", function() {

        var checkInput = addCollectionController.checkInput(null);
        equal(checkInput, false, "set cc url successful");
    });

    test("asynchronous test for checkInput : one second later!", function() {

        var checkInput = addCollectionController.checkInput("");
        equal(checkInput, false, "set bb url successful");
    });

    module("group isTitleNotExist");
    asyncTest("asynchronous test for title exist: one second later!", function() {
        expect(1);

        setTimeout(function() {
            addCollectionController.set("collections", model.get("collections"));
            var isTitleNotExist = addCollectionController.isTitleNotExist("Trends");
            equal(isTitleNotExist, true, "set title url successful");
            start();
        }, 1000);
    });

    asyncTest("asynchronous test for title  not eixt: one second later!", function() {
        expect(1);

        setTimeout(function() {
            addCollectionController.set("collections", model.get("collections"));
            var isTitleNotExist = addCollectionController.isTitleNotExist("Trenddds");
            equal(isTitleNotExist, true, "set uyuyu url successful");
            start();
        }, 1000);
    });

//addNewCollection
//  test("addNewCollection", function()
//    {
//        var addNewCollection = addNewCollection.setRelatedController("adbbdddddddddb");
//
//        equal(checkInput, true, "set thumbnail url successful");
//    });
//    
    
    //set users
//asyncTest("asynchronous test for setUser: one second later!", function() {
//        expect(1);
//
//        setTimeout(function() {
//        //    addCollectionController.set("collections", model.get("collections"));
//        localStorage.loginStatus = "10242305480";
//        addCollectionController.setUser();
//            var desc = addCollectionController.get("selectedDesc");
//            var title = addCollectionController.get("selectedTitle");
//            var titleResult = 
//            equal(desc, "", "set uyuyu url successful");
//            equal(title, "", "set uyuyu url successful");
//            start();
//        }, 1000);
//    });
// 

    equal("control", "control", "set thumbnail url successful");
});
