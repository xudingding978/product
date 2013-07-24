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
   
console.log('31111111111111111111');
                controller.setData();
         
        }.observes('controller.isEditingMode')
    });

    return PhotoCreateInfoSettingView;
});