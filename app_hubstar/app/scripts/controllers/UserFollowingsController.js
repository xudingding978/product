/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.UserFollowingsController = Ember.Controller.extend({
    content: [],
    clientID: "",
    followingID: "",
    model: "",
    addPartner: true,
    currentAddPartnerPic: null,
    selectedPartnerPic: "",
    is_authentic_user: false,

    needs: ['permission', 'applicationFeedback','user'],

    getClientId: function(model) {
//        this.set('content', []);
//        this.set("model", model);
//        this.set('clientID', model.id);
//        this.set('followingID', model.get('profile_partner_ids'));
//        if (this.get('followingID') !== null && this.get('followingID') !== 'undefined' && this.get('followingID') !== "") {
//            var data = HubStar.Mega.find({RequireType: "follower", profile_partner_ids: this.get('followingID')});
//            var that = this;
//            data.addObserver('isLoaded', function() {
//             //   that.checkAuthenticUser();
//                if (data.get('isLoaded')) {
//                    for (var i = 0; i < data.get("length"); i++) {
//                        var tempmega = data.objectAt(i);
//                        that.get("content").pushObject(tempmega);
//                    }      
//                        
//                    
//                    //that.get('controllers.profile').statstics();
//                }
//            });      
//        }
     //   this.checkAuthenticUser();
    }
});