/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
function getRestAPIURL()
{
    var api_url = document.domain;
    var api_domain_start_pos = api_url.indexOf('.');
    var api_url = api_url.slice(api_domain_start_pos);
    api_url = "http://test-api" + api_url;
    return api_url;
}

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
  
        callback(this.width, this.height);
       
    };

    
  }  
  
function requiredBackEnd(controller, method, para, ajaxType, callback) {
    {
        var tempurl = getRestAPIURL();

        $.ajax({
            url: tempurl + '/' + controller + '/' + method,
            type: ajaxType,
            data: JSON.stringify(para),
            success: function(feedback) {
                HubStar.store.save();
                callback(feedback);
            }
        });
    }


}
function getTarget(obj,type) {
        var targ;
        var e = obj;
        if (e.target)
            targ = e.target;
        else if (e.srcElement)
            targ = e.srcElement;
        if (type === "single") {
            if (targ.nodeType === 3) // defeat Safari bug
                targ = targ.parentNode;
        }
        return targ;
    }
    
    
 
    