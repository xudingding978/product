HubStar.Store = DS.Store.extend({
    revision: 12,
    adapter: DS.FixtureAdapter.create({ simulateRemoteResponse: false })
});

// Declare some fixture objects to use in our testHubStarlication.  There's
// nothing like factory_girl or machinist yet.




beforeEach(function () {
    // Put theHubStarlication into a known state, and destroy the defaultStore.
    // Be careful about DS.Model instances stored inHubStar; they'll be invalid
    // after this.
    // Currently broken, see: https://github.com/emberjs/data/issues/847
    //App.reset();
    // Display an error if asynchronous operations are queued outside of
    // Ember.run.  You need this if you want to stay sane.
    Ember.testing = true;
});

// Run after each test case.
afterEach(function () {
    Ember.testing = false;
});

// Load associations immediately, instead of waiting for FixtureAdapter's
// asynchronous loads.  Basically, all we need to do is access each object
// from inside Ember.run.
// TODO: We can't test this or insert where needed untilHubStar.reset() works.
// TODO: Handle hasMany.
function loadAssociations(object /*, paths... */) {
    var paths = Array.prototype.slice.call(arguments, 1);
    for (var i = 0; i < paths.length; i++) {
        var components = paths[i].split(".");
        for (var j = 0; j < components.length; j++) {
            Ember.run(function () {
                var path = components.slice(0, j+1).join(".");
                object.get(path);
            });
        }
    }
}

// Sample model test.
describe("App.Employee", function () {
    it("has a name", function () {
        var jane;
        Ember.run(function () {
            // Won't actually load until the end of the run-block.
            jane =HubStar.Employee.find(1);
        });
        jane.get("name").should.equal("Jane Q. Public");
    });
});
