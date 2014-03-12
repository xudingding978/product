
var HubStar = window.HubStar = Ember.Application.create({
    LOG_TRANSITIONS: true,
    LOG_BINDINGS: false,
    ready: function() {
        HubStar.set("isLogin", false);
        HubStar.set("checkLoginStatus", false);
          HubStar.set("showDiscoveryBar", true);
        HubStar.set("afterSearch", false);
        HubStar.set("setHight", null);
//        requiredBackEnd('tenantConfiguration', 'doesAdDisplay', null, 'post', function(callbck) {
//            var array = $.map(callbck, function(value, index) {
//                return [value];
//            });
//            HubStar.set('ads', array);
//            //console.log(HubStar.get('ads'));
//        });
        HubStar.set('chooseCollection', null);
        HubStar.set('isMansonryPageLoad', false);
        HubStar.set('searchStart', false);
        HubStar.set('photoDomain', "http://s3.hubsrv.com/trendsideas.com");
        HubStar.set('geoLocation', "Global");
         (function(i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r;
            i[r] = i[r] || function() {
                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date();
            a = s.createElement(o),
                    m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m)
        })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
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
