HubStar.PhotoCreateInfoSettingView = Ember.View.extend({
     
        observerSetData: function()
        {
            var controller = this.get('controller');
                controller.setData();
        }.observes('controller.isEditingMode')
    });

