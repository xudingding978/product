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
function getImageWidth(imgSrc)
{


    var deferred = $.Deferred();
    deferred.done(function(imgSrc) {
        var img = new Image();

        img.onload = function() {
            return img.width;
        };
        img.src = imgSrc;
    });

    deferred.resolve(imgSrc);

}

function getImageWidth(imgSrc, callback) {
    var img = new Image();
    img.src = imgSrc;
    img.onload = function() {
        callback(this.width,this.height);
    };

}




function getImageHeight(imgSrc)
{
    var img = new Image();
    img.onload = function() {

    };
    img.src = imgSrc;
    return img.height;
}
function callback(result)
{
    return result;
}
