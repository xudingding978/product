define([
    "ember"

], function(Ember) {
    var DropDownView = Ember.View.extend({
        value: null,
        valueChanged: function() {
            this.$('select').val(this.get('value'));
            var controller = this.get("App.ApplicationController");
            controller.test();
            
            
      controller.test();
        }.observes('value'),
        didInsertElement: function() {
            var self = this;
            this.$('select').change(function() {
                var val = $('select option:selected').val();
                self.set('value', val);
            });
        }
    });
    return DropDownView;
});
