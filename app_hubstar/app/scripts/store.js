//HubStar.Store = DS.Store.extend({
//  // if you're looking at this, you probably know what you're doing...
//      revision: 13,
//    adapter: DS.RESTAdapter.create({
//        bulkCommit: false,
//        url: getRestAPIURL()
//
//    })
//});


 HubStar.Store = DS.Store.extend({
    revision: 13,
    adapter: DS.RESTAdapter.create({
        bulkCommit: false,
        url: getRestAPIURL()
    })
});