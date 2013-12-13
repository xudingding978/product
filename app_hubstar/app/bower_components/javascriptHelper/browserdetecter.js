
var browerAllow=false;
if (Modernizr.applicationcache&&Modernizr.localstorage&&Modernizr.history)
{
    browerAllow = true;
}else{
    browerAllow = false;
}


if (!browerAllow) {
    var api_url = document.domain;
    window.location = "http://" + api_url + "/upgrade.html";

}