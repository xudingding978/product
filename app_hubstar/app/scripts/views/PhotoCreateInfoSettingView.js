HubStar.PhotoCreateInfoSettingView = Ember.View.extend({
        templateName: 'photoCreateInfoSetting',
        observerSetData: function()
        {
            var controller = this.get('controller');
                controller.setData();
        }.observes('controller.isEditingMode')
    });

