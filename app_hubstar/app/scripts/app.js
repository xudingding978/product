
var HubStar = window.HubStar = Ember.Application.create({
    LOG_TRANSITIONS: false,
    LOG_BINDINGS: false,
    ready: function() {
    }
});

/* Order and include as you please. */
require('scripts/helper');
require('scripts/models/*');
require('scripts/controllers/*');
require('scripts/store');
require('scripts/router');
require('scripts/routes/*');
require('scripts/views/*');

