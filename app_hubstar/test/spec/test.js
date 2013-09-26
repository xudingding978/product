//var expect = require('../lib/chai').expect;

module("Basic Tests");

test("truthy", function() {
//  ok(true, "true is truthy");
//  var t="test";
//   var s="test";
//  equal(t, s, "1 is truthy");
//  notEqual(0, true, "0 is NOT truthy");

console.log(HubStar.TestController);
    var testController = HubStar.TestController.create();
    var result = testController.test();
    equal(result, 'aaaaaaaaaaaaa', "test is truthy");
});


test("testTwoController", function() {

    console.log(HubStar.TestController);
    var testTwoController = HubStar.TestController.create();
    var result = testTwoController.test();
    equal(result, 'aaaaaaaaaaaaa', "testTwoController is truthy");
});


//
//beforeEach(function() {
//    Ember.run(function() {
//        HubStar.reset();
//    });
//    Ember.testing = true;
//});
//
//afterEach(function() {
//    Ember.testing = false;
//});
//
//after(function(done) {
//    LoginOut();
//    Ember.run(function() {
//        route = HubStar.Router.create();
//        route.transitionTo("indexIndex");
//        done();
//    });
//
//});


//describe('Array', function(){
//    describe('#indexOf()', function(){
//        it('should return -1 when the value is not present', function(){
//        //    [1,2,3].indexOf(5)===(-1);
//            expect([1,2,3].indexOf(5)).to.equal(-1);
//      //      assert.equal([1,2,3].indexOf(5),-1);
//        })
//    })
//});
//
//
//
//
//
//
//
//function LoginIn(done) {
//    if (localStorage.loginstatus === null || localStorage.loginstatus === undefined) {
//        $("a:contains('Login')").click();
//        $(".square-button").last().click();
//         setTimeout(function() {
//            var content = $('#login_iframe').contents();
//            content.find('#LoginForm_username').val('Jenny');
//            content.find('#LoginForm_password').val('test123');
//            content.find("input:submit.ifame_login").click();
//            done();
//        }, 1000);
//    }
//}
//;
//function LoginOut() {
//    $('.profilepic-container').find('a').eq(1).find('img').click();
//
//    //    $("a:contains('Logout')").click();
//
//     setTimeout(function() {
//        $("a:contains('Logout')").click();
//    }, 1000);
//
//
//}
//;
//
//
//describe("Platform  bar", function() {
//    var controller;
//    var topics;
//    var result;
//
//    beforeEach(function(done) {
//
//
//
//        Ember.run(function() {
//            LoginIn(done);
//
//            controller = HubStar.PlatformBarController.create();
//            topics = controller.categorys;
//            topics.addObserver('isLoaded', function() {
//                if (topics.get('isLoaded')) {
//                    result = topics.get('length');
//                    done();
//                }
//            });
//        });
//    });
//    it("total topics", function() {
//        Ember.run(function() {
//            result.should.equal(14);
//        });
//    });
//});

//describe("AddLike Test", function() {
//    var controller;
//    var topics;
//    var result;
//    beforeEach(function(done) {
//
//        Ember.run(function() {
//            LoginIn(done);
//          controller = HubStar.CommentController.create();
//           //console.log("ssssssssss");
//                controller.addLike("8911076791372397733");
//                    result = controller.get("count");
//                    console.log(result);
//                    done();
//            //controller.addLike("6939110571372460540");
//           
//       //    console.log("ssssssssss");
//        
//                  // done();
//         });
//    });
//    it("total topics", function() {
//        Ember.run(function() {
//          
//            result.should.equal("3");
//            
//        });
//    });
//});

//describe("profiles Routing ", function() {
//    beforeEach(function(done) {
//        Ember.run(function() {
//            route = HubStar.Router.create();
//            route.transitionTo("profiles");
//             setTimeout(function() {
//                $('.nothingHere').find('ul').eq(0).find('a').click();
//                done();
//            }, 600);
//
//        });
//    });
//    afterEach(function() {
//        Ember.run(function() {
//            route = HubStar.Router.create();
//            route.transitionTo("searchIndex");
//        });
//    });
//    it("Routing", function() {
//        Ember.run(function() {
//            //         $('#aside_contact').find('tr').eq(1).find('th').eq(0).should.have.text("Category:");
//        });
//    });
//});

//describe("profiles Routing ", function() {
//    beforeEach(function(done) {
//        Ember.run(function() {
//            route = HubStar.Router.create();
//            route.transitionTo("profiles");
//            setTimeout(function() {
//                $('.nothingHere').find('ul').eq(0).find('a').click();
//                done();
//            }, 600);
//
//        });
//    });
//    afterEach(function() {
//        Ember.run(function() {
//            route = HubStar.Router.create();
//            route.transitionTo("searchIndex");
//        });
//    });
//    it("Routing", function() {
//        Ember.run(function() {
//            $('#aside_contact').find('tr').eq(1).find('th').eq(0).should.have.text("Category:");
//        });
//    });
//});


//describe("testing platform side bar searching result", function() {
//    it("hover and click topics", function() {
//        $('.firstList').find('li').eq(1).find('a').eq(0).click();
//        $('.search_business').text().should.be($('.firstList').find('li').eq(1).find('a').eq(0).text().trim());
//
//    });
//
//    it("hover and click subtopics", function() {
//        $('.firstList').find('li').eq(1).find('ul').find('li').eq(1).find('ul').find('li').eq(1).find('a').click();
//        $('.search_business').text().should.be($('.firstList').find('li').eq(1).find('ul').find('li').eq(1).find('ul').find('li').eq(1).text().trim());
//    });
//});

//describe("profile page cancel saving test", function() {
//     var controller, model;
//     controller = HubStar.ProfileController.create();
//     model = HubStar.Profile.find('sean');
//     controller.set('model', model);
//
//    it ("cancel saving profile_name test in profile page", function() {
//
//        var temp_name_record = controller.profile_name;
//        controller.toggleEditing(controller.profile_name, controller.profileName);        
//        controller.profile_name = '11111111111111111';
//        controller.no(controller.profileName);
//        controller.profile_name.should.equal(temp_name_record);
//    });
//    
//    it ("cancel saving about us test in profile page", function() {
//
//        var temp_about_record = controller.about_me;
//        controller.toggleEditing(controller.about_me, controller.aboutMe);        
//        controller.profile_name = '11111111111111111';
//        controller.no(controller.aboutMe);
//        controller.about_me.should.equal(temp_about_record);
//    });
//    
//    it ("cancel saving contact test in profile page", function() {
//
//        var temp_first_name_record = controller.first_name;
//        var temp_last_name_record = controller.last_name;
//        var temp_address_record = controller.address;
//        var temp_contact_number_record = controller.profile_contact_number;
//        var temp_website_record = controller.website;
//        controller.toggleEditing(controller.profile_contact_number, controller.contact);
//        controller.first_name = '9999999999999999999999';
//        controller.last_name = '999999999999999999999999';
//        controller.address = '999999999999999999999999999';
//        controller.profile_contact_number = '99999999999999999999999999999';        
//        controller.website = '99999999999999999999999';
//        controller.no(controller.contact);
//        controller.first_name.should.equal(temp_first_name_record);
//        controller.last_name.should.equal(temp_last_name_record);
//        controller.address.should.equal(temp_address_record);
//        controller.profile_contact_number.should.equal(temp_contact_number_record);
//        controller.website.should.equal(temp_website_record);
//    });
//});

//describe("user collection test", function() {
//     var controller, model;
//     controller = HubStar.UserController.create();
//     model = HubStar.User.find('25180585742');
//     controller.set("model", model);
//
//    it ("add collection test", function() {
//        console.log(controller.get('needs'))
//        controller.newTitle='mocha test tile';
//        controller.newDesc='mocha test desc';
//        controller.set('collections', model.get('collections'));
//        controller.submit();
//        var model2=HubStar.User.find('25180585742');
//        controller.get('collections').get('length').should.equal(model2.get("collections").get('length'));
//        controller.get('collections').get('length').should.equal(model.get('collections').get('length')+1);
//        controller.get('collections').objectAt(0).get('id').should.equal('mocha-test-title');
//        controller.get('collections').objectAt(0).get('title').should.equal('mocha test title');
//        controller.get('collections').objectAt(0).get('desc').should.equal('mocha test desc');
//    });  
//});

//describe("collectionController test", function() {
//     var controller, model;
//     controller = HubStar.CollectionController.create();
//     model = HubStar.User.find('25180585742');
//
//    it ("getCreateCollection function test", function() {
//        var newTitle='mocha test title';
//        var newDesc='mocha test desc';
//        var collections = model.get('collections');
//        var collection = controller.getCreateCollection(newTitle,newDesc,collections);        
//        collection.get('id').should.equal('mocha-test-title');
//        collection.get('title').should.equal('mocha test title');
//        collection.get('desc').should.equal('mocha test desc');
//    });  
//    
//    it ("checkingValidInput function test", function() {
//        var newTitle='mocha test title';
//        var title = controller.checkingValidInput(newTitle); 
//        title.should.equal('mocha-test-title');
//    });
//    
//    it ("checkingIdisExsinting function test", function() {
//        
//    });
//    
//    it ("specialCharactersChecking function test", function() {
//        var str = 'mocha-test-title123';
//        var str2 = 'mocha-test-title@#$';
//        controller.specialCharactersChecking(str).should.equal(true);
//        controller.specialCharactersChecking(str2).should.equal(false);
//    });
//    
//    it ("getUpdateCollection function test", function() {
//        var collection = model.get('collections').objectAt(0);
//        controller.getUpdateCollection(collection).should.equal(collection);
//    });
//    
//});

//describe("user profies testing", function() {
//    var controller;
//
//    beforeEach(function() {
//
//        Ember.run(function() {
//            //           controller = HubStar.UserController.create();
//
//        });
//
//    });
//});


//describe("poster picture  testing", function() {
//    it("click poster picture", function() {
//
//        $('#masonry_container').find('.box').eq(1).find('.mainfeature-wrapper img').click();
//
//        var title = HubStar.Mega.find('2119904211372397730').get('owner_title');
//
//        $('.objectview-wrapper').find('.poster-name').should.have.text(title);
//
//    });
//    afterEach(function() {
//        route = HubStar.Router.create();
//          route.transitionTo("searchIndex");
//    });
//});

//describe("poster photo_title photo_caption  testing", function() {
//    it("click poster picture", function() {
//
//        $('#masonry_container').find('.box').eq(1).find('.mainfeature-wrapper img').click();
//
//
//        var photo_title = HubStar.Mega.find('2119904211372397730').get('photo').objectAt(0).get('photo_title');
//        var photo_caption = HubStar.Mega.find('2119904211372397730').get('photo').objectAt(0).get('photo_caption');
//
//
//        $('.objectview-wrapper').find('.article-title').should.have.text(photo_title);
//        $('.objectview-wrapper').find('.article-text').should.have.text(photo_caption);
//    });
//    afterEach(function() {
//        route = HubStar.Router.create();
//        route.transitionTo("searchIndex");
//    });
//});
//
//
//describe("poster photo_url  validation  testing", function() {
//    var validation;
//    var photo_image_original_url;
//    
//    beforeEach(function(done) {
//        
//        $('#masonry_container').find('.box').eq(1).find('.mainfeature-wrapper img').click();
//
//        photo_image_original_url = HubStar.Mega.find('2119904211372397730').get('photo').objectAt(0).get('photo_image_original_url');
//       
//        $("<img>", {
//            src: photo_image_original_url,
//            error: function() {
//                validation = false;
//                done();
//            },
//            load: function() {
//                validation = true;
//                done();}
//        });
//    });
//
//    it("click poster picture", function() {
//        (validation === true).should.equal(true);
//        $('.objectview-wrapper').find('.mainfeature img').attr("src").should.be(photo_image_original_url);
//    });
//
//
//    afterEach(function() {
//        route = HubStar.Router.create();
//        route.transitionTo("searchIndex");
//    });
//});

//describe("create profile", function() {
//    var controller;
//    var topics;
//    var result;
//    beforeEach(function(done) {
//
//        Ember.run(function() {
//            LoginIn(done);
//
//           controller = HubStar.ProfileNewController.create();
//           console.log("ssssssssss");
//           console.log(controller.addLike("1270944421372427691"));        
//        });
//    });
//    it("total topics", function() {
//        Ember.run(function() {
//            //result.should.equal(14);
//        });
//    });
//});

