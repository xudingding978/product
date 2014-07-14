/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.PartnersRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        if (this.controllerFor('checkingLoginStatus').popupLogin())
        {
            this.controllerFor('profile').set('profileSelectionStatus', 'Partners');
            this.controllerFor('profile').set('reviewTag', false);
            this.controllerFor('profile').set('partnerTag', true);
            this.controllerFor('profile').set('collectionTag', false);
            this.controllerFor('profile').set('followerProfileTag', false);
            this.controllerFor('profile').set('pdfTag', false);
            this.controllerFor('profile').set('videoTag', false);
            $(document).ready(function() {
                setTimeout(function() {
                    $('#user-stats > li').removeClass('selected-user-stats');
                    $('#network').addClass('selected-user-stats');
                }, 50);
            });
            this.controllerFor('profilePartners').getClientId(model);
            this.controllerFor('profile').send("selectPartner",model);
        }
    },
    model: function(params) {
        var address = document.URL;
        var profile_id = address.split("#")[1].split("/")[2];
        var model = HubStar.Profile.find(profile_id);
        return model;
    }
});
