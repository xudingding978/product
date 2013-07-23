define([
    "ember",
    "text!templates/photoCreateInfoSettingTemplate.html"
], function(Ember, photoCreateInfoSettingTemplate) {

    Ember.TEMPLATES["PhotoCreateInfoSetting"] = Ember.Handlebars.compile(photoCreateInfoSettingTemplate);

    var PhotoCreateInfoSettingView = Ember.View.extend({
        template: Ember.Handlebars.compile(photoCreateInfoSettingTemplate)
    });

    return PhotoCreateInfoSettingView;
});