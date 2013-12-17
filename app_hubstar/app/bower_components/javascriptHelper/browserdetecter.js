// feature detection script to check that the browser support the baseline requirements for the platform

var browserAllow=false;

// checking for Application Cache, HTML5 LocalStorage, SessionStorage, Web Workers, Web Sockets and pushState 
if (Modernizr.applicationcache)
{
    browserAllow = true;
}else{
    browserAllow = false;
}

// failed feature detection, redirecting to the Upgrade page
if (!browserAllow) {
    var api_url = document.domain;
    window.location = "http://" + api_url + "/upgrade.html";
}


