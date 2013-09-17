/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.UserFollowingsView = Ember.View.extend({
  templateName: 'userFollowings',
  didInsertElement: function() {
            $(function() {
                $('#masonry_profile_partner_container').masonry({
                    itemSelector: '.box',
                   columnWidth: 1,
                    isInitLayout: false,
                    isFitWidth: true
                });
            });
        }
    });
