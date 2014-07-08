/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.ProfilePdfRoute = Ember.Route.extend({
    setupController: function(controller, model) {
         
        this.controllerFor('profile').set('profileSelectionStatus', 'Pdf');
        this.controllerFor('profile').set('reviewTag', false);
        this.controllerFor('profile').set('partnerTag', false);
        this.controllerFor('profile').set('collectionTag', false);
        this.controllerFor('profile').set('followerProfileTag', false);
        this.controllerFor('profile').set('videoTag', false);
        this.controllerFor('profile').set('pdfTag', true);
         
      $(document).ready(function() {
                setTimeout(function() {
                    $('#user-stats > li').removeClass('selected-user-stats');
        $('#pdf').addClass('selected-user-stats');
                }, 3500);
            });
        var address = document.URL;
        var l = address.split("#")[1].split("/").length;
        if (l > 4) {
            if (address.split("#")[1].split("/")[4] === "pdf")
            {
            }
            else
            {
                this.controllerFor('profile').send("selectPdf",model);
            }
        }
        else {
            this.controllerFor('profile').send("selectPdf",model);
        }



    },
    model: function(params) {

        var address = document.URL;
        var profile_id = address.split("#")[1].split("/")[2];
        var model = HubStar.Profile.find(profile_id);
        return model;
    },
    renderTemplate: function() {

        this.render("profilePdf", {
            outlet: "profilePdf",
            into: "profile"
        });
    }
});

