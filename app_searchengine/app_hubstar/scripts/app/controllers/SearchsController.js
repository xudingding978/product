define([
    'models/MegaModel',
    'ember'
], function(MegaModel, Ember) {

    var SearchsController = Ember.ArrayController.extend({
        content: [],
        needs: ['application', 'status'],
        loginInfo: "",
        newSearch: function(object) {
            this.set("content", MegaModel.find(object));
            //    console.log(MegaModel.find(object).toString());
            //    console.log(this.get("content"));
        },
        searchModel: function() {



            this.set("loginInfo", localStorage.loginStatus);

            var ac = this.get("controllers.application");
            var st = this.get("controllers.status");
            ac.grapData();
            st.grapData();
        

            var data = MegaModel.find({});
        }
    });


    return SearchsController;
});
