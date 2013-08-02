HubStar.DropDownView = Ember.View.extend({
        value: null,
        title: null,
        valueChanged: function() {
            this.$('select').val(this.get('value'));
            this.get("controller").setDesc(this.get('value'));
            this.get("controller").setTitle(this.get('title'));
        }.observes('value'),
        didInsertElement: function() {
            var self = this;
            this.$('select').change(function() {
                var val = $('select option:selected').val();
                var label = $('select option:selected').html();
                label = label.split("</script>");
                label = label[1].split("<script");
                label = label[0];
                self.set('title', label);
                self.set('value', val);
            });
        },
        setSelectCollection: function() {

        }.observes("controller.selectedTitle")
    });
