//HubStar.Store = DS.Store.extend({
//  // if you're looking at this, you probably know what you're doing...
//});


HubStar.store = DS.Store.create({
    revision: 13,
    adapter: DS.RESTAdapter.create({
        bulkCommit: false,
        url: getRestAPIURL()

    })
});