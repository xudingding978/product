Ember.RadioButton = Ember.View.extend({
    tagName : "input",
    type : "radio",
    attributeBindings : [ "name", "type", "value", "checked:checked:" ],
    click : function() {
        console.log('222222');
        this.set("selection", this.$().val());
    },
    checked : function() {
        console.log('3333333');
        console.log(this.get('value'));
        console.log(this.get('selection'));
        return this.get("value") === this.get("selection");   
    }.property()
});