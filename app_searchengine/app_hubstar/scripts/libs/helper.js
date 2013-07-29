/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function createGuid() {

    var dateObject = new Date();
    var randomnumber = Math.random().toString().slice(2, 5);
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

function getDomain()
{
    var domain = document.domain;
    var n = domain.split(".");
    var domain = "";
    for (var i = 1; i < n.length; i++) {
        domain += n[i];
        if (i < n.length - 1) {
            domain += ".";
        }
    }
    return domain;
}


