HubStar.LoginEnterKeyTextFieldView = Ember.TextField.extend({

       
   keyDown: function(event) {
    if (event.keyCode === 13) { 
      this.get('controller').login();
      
    }
  }
    });