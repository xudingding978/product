

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
//after(function() {
//    Ember.run(function() {
//        HubStar.reset();
//    });
//});
function checkingLogin() {

    if (localStorage.loginstatus === null || localStorage.loginstatus === undefined) {
       $(".sign-in-with:contains('Sign In with Facebook')").click();

    }


}
;



describe("Platform  bar", function() {
    var controller;
    var topics;
    var result;
    beforeEach(function(done) {

        checkingLogin();

        Ember.run(function() {
            controller = HubStar.PlatformBarController.create();
            topics = controller.categorys;
            topics.addObserver('isLoaded', function() {
                if (topics.get('isLoaded')) {
                    result = topics.get('length');
                    done();
                }
            });
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
            $('#aside_contact').find('tr').eq(1).find('th').eq(0).should.have.text("Category:");
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

        checkingLogin();

        Ember.run(function() {
            controller = HubStar.UserController.create();

        });
    });
    it("user controller ", function() {
        Ember.run(function() {

        });
    });
});