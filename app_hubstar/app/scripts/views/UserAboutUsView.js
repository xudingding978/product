HubStar.UserAboutUsView = Ember.TextArea.extend({
    didInsertElement: function() {

        return this.$().attr({tabindex: 1}), this.$().focus();
    },
    keyUp: function() {
 
         // pressed 'esc'
            var aboutme_limit = 430;
            var left_count = 0;

            if (this.get("controller").get("value").length > 430)
            {
                left_count = 0;
            }
            else
            {
                left_count = aboutme_limit - this.get("controller").get("value").length;
            }
            var controller = this.get('targetObject');
            if (controller._debugContainerKey.indexOf("user") !== -1)
            {
                controller.set("left_count_aboutme", left_count);
            }
        
    }
});
