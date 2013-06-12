/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


define(['models/MegaModel',
    'ember'],
        function(
                MegaModel,
                Ember
                ) {
            var MegaController = Ember.ArrayController.extend({
                isClicked: false,
                test: function(id) {
                    var t = MegaModel.find(id);

                    setTimeout(function() {
                        var owner_profile_id = t.get("owner_profile_id");
                        var collection_id = t.get("collection_id");
                       MegaModel.find({"collection_id":collection_id,"owner_profile_id":owner_profile_id});
                    }, 200);
                },
                clicked: function() {
                    console.log("change the isClicked value");
                    this.set("isClicked", true);
                },
                getFirstPhoto: function(id) {
                    console.log("aaaa");
                    var t = MegaModel.find(id);
                    //  this.content.pushObject(t);
                    //  console.log(this.content.length);
                    //this.get("controllers.mega").test(id);
                }
            });
            return MegaController;
        });
