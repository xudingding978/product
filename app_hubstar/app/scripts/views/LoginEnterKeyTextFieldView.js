HubStar.LoginEnterKeyTextFieldView = Ember.TextField.extend({
  didInsertElement: function() {
      
    this.$().focus();
  },
       
   keyDown: function(event) {
    if (event.keyCode === 13) { 
      this.get('controller').login();
      
    }
  }
    });
