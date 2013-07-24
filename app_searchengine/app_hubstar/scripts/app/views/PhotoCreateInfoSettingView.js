define([
    "ember",
    "text!templates/photoCreateInfoSettingTemplate.html"
], function(Ember, photoCreateInfoSettingTemplate) {

    Ember.TEMPLATES["PhotoCreateInfoSetting"] = Ember.Handlebars.compile(photoCreateInfoSettingTemplate);

    var PhotoCreateInfoSettingView = Ember.View.extend({
        template: Ember.Handlebars.compile(photoCreateInfoSettingTemplate),
        aaddd: function()
        {
            var controller = this.get('controller');
                controller.setData();
        }.observes('controller.isEditingMode')
    });

    return PhotoCreateInfoSettingView;
});