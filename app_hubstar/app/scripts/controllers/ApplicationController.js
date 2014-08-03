/*global HubStar */
/*global Ember */
/*global $:false */

HubStar.ApplicationController = Ember.Controller.extend({
    productContent:[],
    needs: ['product'],
    init: function() {
        var data = "";
        var that =this;
        requiredBackEnd('products', 'test', data, 'POST', function(params) {
            that.product(params);
            console.log(params);
        });
        //
    },
    product: function(params) {
        var obj = params;
        for (var i = 0; i<obj.Items.get("length");i++ )
        {
            obj.Items[i].isEdit = false;
            this.get("productContent").pushObject(obj.Items[i]);
        }
    }
});
