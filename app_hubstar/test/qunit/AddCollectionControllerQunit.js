/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */




module("Basic Tests");
 
//test("truthy", function() {
//  ok(true, "true is truthy");
//  var t="test";
//   var s="test";
//  equal(t, s, "1 is truthy");
//  notEqual(1, true, "0 is NOT truthy");
//});


test("setTitle", function() {
//  ok(true, "true is truthy");
//  var t="test";
//   var s="test";
//  equal(t, s, "1 is truthy");
//  notEqual(0, true, "0 is NOT truthy");
//console.log(HubStar.AddCollectionController);

    var controller = HubStar.AddCollectionController.create();
    var result = controller.setTitle("dddd");
    var result1 = controller.get("selectedTitle");
    equal(result, result1, "set title  correct");
});
