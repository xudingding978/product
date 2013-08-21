<<<<<<< HEAD
=======


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
after(function(done) {
    LoginOut();
    Ember.run(function() {
        route = HubStar.Router.create();
        route.transitionTo("indexIndex");
        done();
    });

});
function LoginIn(done) {

    if (localStorage.loginstatus === null || localStorage.loginstatus === undefined) {
        $("a:contains('Login')").click();
        $(".square-button").last().click();


         setTimeout(function() {
            var content = $('#login_iframe').contents();
            content.find('#LoginForm_username').val('Jenny');
            content.find('#LoginForm_password').val('test123');

            content.find("input:submit.ifame_login").click();
            done();
        }, 1000);

    }


}
;
function LoginOut() {
    $('.profilepic-container').find('a').eq(1).find('img').click();

    //    $("a:contains('Logout')").click();

     setTimeout(function() {
        $("a:contains('Logout')").click();
    }, 1000);


}
;


>>>>>>> 17699298182f2a91108209f1cf7d0bb3d03c584c
describe("Platform  bar", function() {
    var controller;
    var topics;
    var result;
    beforeEach(function(done) {
<<<<<<< HEAD
        Ember.run(function() {
=======



        Ember.run(function() {
            LoginIn(done);

>>>>>>> 17699298182f2a91108209f1cf7d0bb3d03c584c
            controller = HubStar.PlatformBarController.create();
            topics = controller.categorys;
            topics.addObserver('isLoaded', function() {
                if (topics.get('isLoaded')) {
                    result = topics.get('length');
                    done();
                }
            });
<<<<<<< HEAD
        });
    });
    it("total topics", function() {
=======
        });
    });
    it("total topics", function() {
        Ember.run(function() {
            result.should.equal(14);
        });
    });
});
describe("profiles Routing ", function() {
    beforeEach(function(done) {
        Ember.run(function() {
            route = HubStar.Router.create();
            route.transitionTo("profiles");
             setTimeout(function() {
                $('.nothingHere').find('ul').eq(0).find('a').click();
                done();
            }, 600);

        });
    });
    afterEach(function() {
        Ember.run(function() {
            route = HubStar.Router.create();
            route.transitionTo("searchIndex");
        });
    });
    it("Routing", function() {
        Ember.run(function() {
            //         $('#aside_contact').find('tr').eq(1).find('th').eq(0).should.have.text("Category:");
        });
    });
});

describe("testing platform side bar searching result", function() {
    it("hover and click topics", function() {
        $('.firstList').find('li').eq(1).find('a').eq(0).click();
        $('.search_business').text().should.be($('.firstList').find('li').eq(1).find('a').eq(0).text().trim());

    });

    it("hover and click subtopics", function() {
        $('.firstList').find('li').eq(1).find('ul').find('li').eq(1).find('ul').find('li').eq(1).find('a').click();
        $('.search_business').text().should.be($('.firstList').find('li').eq(1).find('ul').find('li').eq(1).find('ul').find('li').eq(1).text().trim());
    });
});

describe("user profies testing", function() {
    var controller;

    beforeEach(function() {

>>>>>>> 17699298182f2a91108209f1cf7d0bb3d03c584c
        Ember.run(function() {
            //           controller = HubStar.UserController.create();

        });
    });
<<<<<<< HEAD
});
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

describe("testing platform side bar searching result", function() {
    it("hover and click topics", function() {
        $('.firstList').find('li').eq(1).find('a').eq(0).click();
        $('.search_business').text().should.be($('.firstList').find('li').eq(1).find('a').eq(0).text().trim());

    });

    it("hover and click subtopics", function() {
        $('.firstList').find('li').eq(1).find('ul').find('li').eq(1).find('ul').find('li').eq(1).find('a').click();
        $('.search_business').text().should.be($('.firstList').find('li').eq(1).find('ul').find('li').eq(1).find('ul').find('li').eq(1).text().trim());
    });
});

describe("test user profile flick button", function() {
    it("test user profile flick button", function() {
        Ember.run(function() {
               platformBarController = HubStar.PlatformBarController.create();
               console.log(platformBarController);
            var thiscontroller = HubStar.UserController.create();
            console.log(thiscontroller);
            thiscontroller.flickButtonClick();
            thiscontroller.get("isEditingMode").should.equal(true);
        });
=======
    afterEach(function() {

    });
    it("user controller ", function() {
        //     Ember.run(function() {

>>>>>>> 17699298182f2a91108209f1cf7d0bb3d03c584c
    });
});
