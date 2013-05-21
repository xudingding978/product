define(['models/SearchModel',
    'ember'],
        function(
                SearchModel,
                Ember
                ) {
            var IndexController = Ember.ObjectController.extend({
                isLogin: false,
                loginIn: function() {
                    this.set('isLogin', true);


                },
                loginOut: function() {
                    this.set('isLogin', false);

                },
//                test: function() {
//                    alert(this.get('content.type'));
//                    this.set('type', this.get('content.type'));
//
//                }
            });
            return IndexController;
        });
