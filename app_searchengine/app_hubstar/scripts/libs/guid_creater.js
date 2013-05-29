/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function createGuid() {
    var date = new Date();
    var dateObject = new Date();
    var randomnumber = Math.random().toString().slice(2, 8);
    var result = randomnumber.toString() +
            dateObject.getTime().toString();

    return "test" + result.toString();
}

