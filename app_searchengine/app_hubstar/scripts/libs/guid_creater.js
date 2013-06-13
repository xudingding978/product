/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function createGuid() {
    var date = new Date();
    var dateObject = new Date();
    var randomnumber = Math.random().toString().slice(2, 8);
    randomnumber = randomnumber.toString();
    randomnumber = removeZero(randomnumber);
    var result = randomnumber +
            dateObject.getTime().toString();
    return "test" + result.toString();
}

function removeZero(string)
{

    if (string.charAt(0) === "0")
    {
        string = string.substring(1);
        removeZero(string);
    }

    return string;

}
