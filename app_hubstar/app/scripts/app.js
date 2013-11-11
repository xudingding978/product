var HubStar = window.HubStar = Ember.Application.createWithMixins({
    LOG_TRANSITIONS: false,
    LOG_BINDINGS: false,
    ready: function() {
        HubStar.set("isLogin", false);
        HubStar.set("checkLoginStatus", false);
        HubStar.set("afterSearch", false);
        HubStar.set("setHight", null);
        HubStar.set('chooseCollection', null);
        HubStar.set('isMansonryPageLoad', false);
        HubStar.set('searchStart', false);
        HubStar.set('photoDomain', "http://s3.hubsrv.com/trendsideas.com");
        HubStar.set('geoLocation', "Global");

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
