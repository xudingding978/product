/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.ProfilePdfRoute = Ember.Route.extend({
    setupController: function(controller, model) {

// if (this.controllerFor('checkingLoginStatus').popupLogin())
//        {
            console.log(this.controllerFor('profile').get('is_authentic_user'));
         this.controllerFor('profile').set('profileSelectionStatus', 'Pdf');
         this.controllerFor('profile').set('partnerTag', false);
         this.controllerFor('profile').set('collectionTag', false);
         this.controllerFor('profile').set('followerProfileTag', false);         
         this.controllerFor('profile').set('reviewTag', false);  
         this.controllerFor('profile').set('videoTag', false);  
         this.controllerFor('profile').set('pdfTag', true);  
//        }
    },
    model: function(params) {

        var address = document.URL;
        var profile_id = address.split("#")[1].split("/")[2];
        var model = HubStar.Profile.find(profile_id);
        return model;
    }
});

