define([
    'models/MegaModel',
    'models/StatModel',
    'ember'
], function(MegaModel, Stat, Ember) {

    var SearchsController = Ember.ArrayController.extend({
        needs: ['application', 'status'],
        loginInfo: "",
        content: [],
        search_string: "",
        search_area: "",
        searchResultNum: "",
        time: "",

        defaultSearch: function() {
            this.set("loginInfo", localStorage.loginStatus);
            var ac = this.get("controllers.application");
            var st = this.get("controllers.status");
            ac.grapData();
            st.grapData();
            var results = MegaModel.find({});
            this.set("content", results);
        }



    });


    return SearchsController;
});
