define([
    'ember'],
        function(
                Ember
                ) {
            var IndexController = Ember.ObjectController.extend({
                isLogin: false,
                loginIn: function() {
                    this.set('isLogin', true);


                },
                loginOut: function() {
                    this.set('isLogin', false);

                }
            });
            return IndexController;
        });
