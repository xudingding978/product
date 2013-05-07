/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

define(["ember"], function(Ember) {
    var DragNDrop = Ember.Namespace.create();

    DragNDrop.cancel = function(event) {
        event.preventDefault();
        return false;
    };

    DragNDrop.Droppable = Ember.Mixin.create({
        dragEnter: DragNDrop.cancel,
        dragOver: DragNDrop.cancel,
        drop: function(event) {
            var dataTransfer = event.originalEvent.dataTransfer;
            var f = dataTransfer.files;
            alert(escape(f[0].name));
            return false;
        }
    });
    return DragNDrop;
});