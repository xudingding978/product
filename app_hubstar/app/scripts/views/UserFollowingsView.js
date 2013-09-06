/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.UserFollowingsView = Ember.View.extend({
  templateName: 'userFollowings',
        didInsertElement: function() {
            $(function() {
                $('#masonry_use_following_container').masonry({
                    itemSelector: '.box',
                    columnWidth: 0,
                    isInitLayout: false,
                    isFitWidth: true
                });
            });
        }
    });
