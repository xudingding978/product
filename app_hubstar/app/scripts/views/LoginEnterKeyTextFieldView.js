HubStar.LoginEnterKeyTextFieldView = Ember.TextField.extend({
    didInsertElement: function() {
        
        if (this.get('controller').get('loginUsername') !== undefined&&this.get('controller').get('loginUsername') !== null&&this.get('controller').get('loginUsername') !== " ")
        {
            this.$().focus();
        }else{
             document.getElementById("loginusername").focus();
        }

    },
    keyDown: function(event) {
        if (event.keyCode === 13) {
            this.get('controller').login();

        }
    }
});
