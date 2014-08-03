/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
function getRestAPIURL() {
//    var api_url = document.domain;
//    api_url = "http://api." + api_url;
//    console.log(api_url);
//    return api_url;
    var api_url = document.domain;
    api_url = "http://api." + api_url;
    return api_url;
}

function requiredBackEnd(controller, method, para, ajaxType, callback) {
    {
        var tempurl = getRestAPIURL();
        $.ajax({
            url: tempurl + '/' + controller + '/' + method,
            type: ajaxType,
            data: JSON.stringify(para),
            crossDomain: true,
            success: function(feedback) {

                //HubStar.Store.save();
                callback(feedback);
            }
        });
    }
}