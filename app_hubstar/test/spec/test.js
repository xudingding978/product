



HubStar.Store = DS.Store.extend({
    revision: 12,
    adapter: DS.FixtureAdapter.create({simulateRemoteResponse: false})
});



beforeEach(function() {
    Ember.run(function() {
        HubStar.reset();
    });
    Ember.testing = true;
});

afterEach(function() {
    Ember.testing = false;
});

after(function() {
    Ember.run(function() {
        HubStar.reset();
    });
});


describe('Array', function(){
  describe('testingggggggggggg', function(){
    it('should return -1 when the value is not present', function(){
      [1,2,3].indexOf(5).should.equal(-1);
      [1,2,3].indexOf(0).should.equal(-1);
    });
  });
});




