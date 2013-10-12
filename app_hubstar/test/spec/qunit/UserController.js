/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var controller = HubStar.UserController.create();
var model = HubStar.User.find('60765140894');
localStorage.loginStatus = '25180585742';

model.addObserver('isLoaded', function() {
    if (model.get('isLoaded')) {
    }
});
module("Basic Tests");
test("collectionController", function() {

//getCreateCollection
    module("group UserController");
    
    test ("setUserAttr function test", function() {
        controller.set('model',model);
        controller.setUserAttr();
        controller.get('collections').should.equal(model.get('collection'));
        controller.get('description').should.equal(model.get('description'));
        controller.get('display_name').should.equal(model.get('display_name'));
        controller.get('currentUserID').should.equal(model.get('id'));
        controller.get('first_name').should.equal(model.get('first_name'));
        controller.get('last_name').should.equal(model.get('last_name'));
        controller.get('identifier').should.equal(model.get('identifier'));
        controller.get('about_me').should.equal(model.get('about_me'));
        controller.get('facebook').should.equal(model.get('facebook_link'));
        controller.get('twitter').should.equal(model.get('twitter_link'));
        controller.get('googleplus').should.equal(model.get('googleplus_link'));
        controller.get('pinterest').should.equal(model.get('pinterest_link'));
        controller.get('linkedin').should.equal(model.get('linkedin_link'));
        controller.get('youtube').should.equal(model.get('youtube_link'));
        controller.get('location').should.equal(model.get('region'));
        controller.get('email').should.equal(model.get('email'));
        controller.get('password').should.equal(model.get('password'));
        controller.get('cover_url').should.equal(model.get('cover_url'));
        controller.get('photo_url_large').should.equal(model.get('photo_url_large'));
    });
    
    test ("setIntersetsArr function test", function() {
        var user=model;
        user.set('selected_topics','aa,haha,cc,dd');
        controller.setUserAttr(user);
        controller.get('interests').should.equal('aa,haha,cc,dd');
        controller.get('selected_topics').should.equal([{interests:aa},{interests:haha},{interests:cc},{interests:dd}]);
    });
    
    test ("isUserSelfOrNot function test", function() {
        controller.isUserSelfOrNot("25180585742");
        controller.get('isUserSelf').should.equal(false);
    });
    
    test ("checkAuthenticUser function test", function() {
        controller.checkAuthenticUser();
        controller.get('is_authentic_user').should.equal(false);
    });
    
    test ("initStastics function test", function() {
        controller.checkAuthenticUser(model);
        controller.get('userFollowerStatistics').should.equal(model.get("followers").get("length"));
        controller.get('userFollowingStatistics').should.equal(model.get("followings").get("length"));
    });
    
    test("statstics function test", function() {
        controller.set('collections', model.get('collections'));
        controller.statstics();
        controller.get('userCollectionStatistics').should.equal(model.get("collections").get("length"));
    });
    
    
});


