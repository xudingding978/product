HubStar.ProfilePartnersView = Ember.View.extend({
  templateName: 'profilePartners',
        didInsertElement: function() {
            $(function() {
                $('#masonry_profile_partner_container').masonry({
                    itemSelector: '.box',
                    columnWidth: 0,
                    isInitLayout: false,
                    isFitWidth: true
                });
            });
        }
    });
