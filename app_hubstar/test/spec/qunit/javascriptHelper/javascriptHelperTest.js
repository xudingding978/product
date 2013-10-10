/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


module("JavascriptHelper Tests");

test("getRestAPIURL", function() {

    var result = getRestAPIURL();
 
    equal(result, 'http://api.'+ document.domain, "Api url is correct.");
});