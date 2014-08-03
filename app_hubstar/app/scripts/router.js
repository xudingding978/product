
var Router = Ember.Router.extend( );


HubStar.Router.map(function() {
});

HubStar.Router.reopen({
    didTransition: function(infos) {
        this._super(infos);
        Ember.run.next(function() {

            
            ga('Trends.require', 'displayfeatures');
            ga('Trends.send', 'pageview');

           
            ga('HubStar.require', 'displayfeatures');
            ga('HubStar.send', 'pageview', window.location.href);
        });
    }
});
