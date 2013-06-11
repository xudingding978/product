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
                t:null,
                test: function(id) {               
t =MegaModel.find(id);
setInterval(function(){console.log(t.get("type"));},500);
//console.log(tt.get("type"));
                },
                clicked: function() {
                    console.log("change the isClicked value");
                    this.set("isClicked", true);
                }
            });
            return MegaController;
        });
