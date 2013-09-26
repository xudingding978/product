/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

module("TestTwoController Tests");

test("testTwoController", function() {

    console.log(HubStar.TestController);
    var testTwoController = HubStar.TestController.create();
    var result = testTwoController.test();
    equal(result, 'aaaaaaaaaaaaa', "testTwoController is truthy");
});