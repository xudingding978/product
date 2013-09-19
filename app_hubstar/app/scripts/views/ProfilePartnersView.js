HubStar.ProfilePartnersView = Ember.View.extend({
  templateName: 'profilePartners',
        didInsertElement: function() {
            $(function() {
                $('#masonry_profile_partner_container').masonry({
                    itemSelector: '.box',
                    columnWidth: 185,
                    isInitLayout: false,
                    isFitWidth: true
                });
            });
        }
    });
