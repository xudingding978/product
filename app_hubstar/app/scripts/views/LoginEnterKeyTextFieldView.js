HubStar.LoginEnterKeyTextFieldView = Ember.TextField.extend({
    didInsertElement: function() {
        
        if (this.get('targetObject').get('loginUsername') !== undefined&&this.get('targetObject').get('loginUsername') !== null&&this.get('targetObject').get('loginUsername') !== " ")
        {
            this.$().focus();
        }else{
             document.getElementById("loginUsername").focus();
        }

    },
    keyDown: function(event) {
        if (event.keyCode === 13) {
           
            this.get('targetObject').send("login");

        }
    }
});
