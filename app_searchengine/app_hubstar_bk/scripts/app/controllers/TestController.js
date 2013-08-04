define(["ember"], function(Ember) {
    var TestController = Ember.Controller.extend({
        test: function()
        {console.log("test");
        }
    }
    );
    return TestController;
});
