
    DS.RESTAdapter.map('HubStar.Stat', {
         megas: {embedded: 'load'}
    });

HubStar.Stat = DS.Model.extend({
    numberofresults: DS.attr('string'),
    megas: DS.hasMany('HubStar.Mega'),
    didLoad: function() {
    }
});

