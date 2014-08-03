
 HubStar.Store = DS.Store.extend({
    revision: 13,
    adapter: DS.RESTAdapter.create({
        bulkCommit: false,
        url: getRestAPIURL()
    })
});