
var HubStar = window.HubStar = Ember.Application.create({
    LOG_TRANSITIONS: false,
    LOG_BINDINGS: false,
    ready: function() {
        HubStar.set("isLogin", false);
        if(localStorage.loginStatus === "" || localStorage.loginStatus === null || localStorage.loginStatus === undefined){
             HubStar.set("checkLoginStatus", true);
        }else {
            HubStar.set("checkLoginStatus", false);
        }
       
        HubStar.set("showDiscoveryBar", true);
        HubStar.set("afterSearch", false);
        HubStar.set("setHight", null);
        requiredBackEnd('tenantConfiguration', 'pdfDisplay', null, 'POST', function(params) {
            HubStar.set('pdf_display', params[0]);
            HubStar.set('tagging_display', params[1] && params[2]);
            HubStar.set('profile_manager', params[2]);
            HubStar.set('top_ad_display', params[3]);
            HubStar.set('object_ad_display', params[4]);
            HubStar.set('group_switch', params[5]);
        });
        requiredBackEnd('tenantConfiguration', 'objectAdDisplay', null, 'post', function(callbck) {
            var array = $.map(callbck, function(value, index) {
                return [value];
            });
            if (HubStar.get("ads") !== null && HubStar.get("ads") !== undefined) {
            }
            else
            {
                for (var i = 0; i < array.length; i++) {
                    for (var j = 0; j < array[i].length; j++) {
                        array[i][j].isNew = true;
                    }
                }
            }
            HubStar.set('objectAds', array);
        });
        if (Modernizr.touch) {
            HubStar.set('touchDevice', true);
        } else {
            HubStar.set('touchDevice', false);
        }
        HubStar.set('chooseCollection', null);
        HubStar.set('isMansonryPageLoad', false);
        HubStar.set('searchStart', false);
        HubStar.set('loginModal', false);
        HubStar.set('photoDomain', "http://s3.hubsrv.com/trendsideas.com");
        HubStar.set("pdf_display", false);
        if (localStorage.geoLocation === "" || localStorage.geoLocation === null || localStorage.geoLocation === undefined) {
            localStorage.geoLocation = "International";
        }
        (function(i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r;
            i[r] = i[r] || function() {
                (i[r].q = i[r].q || []).push(arguments);
            }, i[r].l = 1 * new Date();
            a = s.createElement(o),
                    m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m);
        })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
        ga('create', 'UA-235915-17', {'name': 'Trends'});
        ga('create', 'UA-46481605-1', {'name': 'HubStar'});
    }
});

/* Order and include as you please. */
require('scripts/helper');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/store');
require('scripts/controllers/*');
require('scripts/views/*');
require('scripts/router');
