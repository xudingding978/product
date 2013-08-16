
//
//HubStar.Store = DS.Store.extend({
//    revision: 12,
//    adapter: DS.FixtureAdapter.create({ simulateRemoteResponse: false })
//});
//
//
//beforeEach(function() {
//    Ember.run(function() {
//        HubStar.reset();
//    });
//    Ember.testing = true;
//});
//
//afterEach(function() {
//    Ember.testing = false;
//});
//
//after(function() {
//    Ember.run(function() {
//        HubStar.reset();
//    });
//});


describe("Platform side bar ", function() {
    var controller;
    var test;
    var result;
    beforeEach(function() {
        Ember.run(function() {
            // Won't actually load until the end of the run-block.
            controller = HubStar.PlatformBarController.create();
            test = controller.categorys;


            test.addObserver('isLoaded', function() {
                if (test.get('isLoaded')) {
                    result = test.get('length');
                    console.log(result);
                }
            });

        });
    });


    it("Side bar catagories length", function() {


        Ember.run(function() {
            setTimeout(function() {
                console.log(result);

            }, 10000);
            result.should.equal(3);
        });


    });
});



