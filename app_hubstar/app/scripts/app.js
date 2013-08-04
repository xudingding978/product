var HubStar = window.HubStar = Ember.Application.createWithMixins({
    LOG_TRANSITIONS: false,
    LOG_BINDINGS: false,
    ready: function() {
        HubStar.set("isLogin", false);
        HubStar.set("afterSearch", false);
        HubStar.set("setHight", null);
        HubStar.set('chooseCollection', null);
        HubStar.set('isMansonryPageLoad', false);
        HubStar.set('searchStart', false);

    }
});

/* Order and include as you please. */
require('scripts/helper');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/controllers/*');
require('scripts/views/*');
require('scripts/router');
require('scripts/store');