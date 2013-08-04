
HubStar.AddCollectionView = Ember.View.extend({
    templateName: 'addCollection',
    classNames: ["contact-container"],
    didInsertElement: function() {
        if (HubStar.get('chooseCollection') !== null) {

            $('#recordID').text(HubStar.get('chooseCollection'));
        }
    }
});
