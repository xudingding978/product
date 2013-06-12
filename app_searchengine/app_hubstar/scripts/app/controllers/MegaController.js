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
                content: [],
                selected: null,
                needs: ['photo'],
                findSelectedItemIndex: function() {

                    var content = this.get('content');
                    for (var index = 0; index < content.get('length'); index++) {
                        if (this.get('selected') === content.objectAt(index)) {
                            return index;
                        }
                    }
                    return 0;
                },
                previesImage: function() {

                    if (!this.get('selected')) {
                        this.set('selected', this.get('content').get('lastObject'));
                    } else {
                        var selectedIndex = this.findSelectedItemIndex();

                        if (selectedIndex <= 0) {
                            selectedIndex = this.get('content').get('length') - 1;
                        } else {
                            selectedIndex--;
                        }

                        this.set('selected', this.get('content').objectAt(selectedIndex));
                        console.log(this.get('selected'));
                    }


                },
                nextImage: function() {
                    if (!this.get('selected')) {
                        this.set('selected', this.get('content').get('firstObject'));


                    } else {
                        var selectedIndex = this.findSelectedItemIndex();
                        if (selectedIndex >= (this.get('content').get('length') - 1)) {

                            selectedIndex = 0;
                        } else {
                            selectedIndex++;

                        }
                        this.set('selected', this.get('content').objectAt(selectedIndex));
                        console.log(this.get('selected'));
                    }
                },
                actionOn: function(megaObject) {
console.log("aaaaa"+megaObject);

             //       get("content").pushObject(MegaModel.find(model.id));
                }
            });
            return MegaController;
        });
