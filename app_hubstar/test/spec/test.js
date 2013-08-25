describe("Platform  bar", function() {
    var controller;
    var topics;
    var result;
    beforeEach(function(done) {
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
        $(".profilepic_user").click();


         setTimeout(function() {
            controller = HubStar.UserController.create();
            controller.userDashboardButton();
            done();
        }, 600);
        Ember.run(function() {
            //           controller = HubStar.UserController.create();
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
});
});

describe("poster picture  testing", function() {
    it("click poster picture", function() {

        $('#masonry_container').find('.box').eq(1).find('.mainfeature-wrapper img').click();

        var title = HubStar.Mega.find('2119904211372397730').get('owner_title');

        $('.objectview-wrapper').find('.poster-name').should.have.text(title);

    });
    afterEach(function() {
        route = HubStar.Router.create();
          route.transitionTo("searchIndex");
    });
});

describe("poster photo_title photo_caption  testing", function() {
    it("click poster picture", function() {

        $('#masonry_container').find('.box').eq(1).find('.mainfeature-wrapper img').click();


        var photo_title = HubStar.Mega.find('2119904211372397730').get('photo').objectAt(0).get('photo_title');
        var photo_caption = HubStar.Mega.find('2119904211372397730').get('photo').objectAt(0).get('photo_caption');


        $('.objectview-wrapper').find('.article-title').should.have.text(photo_title);
        $('.objectview-wrapper').find('.article-text').should.have.text(photo_caption);
    });
    afterEach(function() {
        route = HubStar.Router.create();
        route.transitionTo("searchIndex");
    });
});


describe("poster photo_url  validation  testing", function() {
    var validation;
    var photo_image_original_url;
    
    beforeEach(function(done) {
        
        $('#masonry_container').find('.box').eq(1).find('.mainfeature-wrapper img').click();

        photo_image_original_url = HubStar.Mega.find('2119904211372397730').get('photo').objectAt(0).get('photo_image_original_url');
       
        $("<img>", {
            src: photo_image_original_url,
            error: function() {
                validation = false;
                done();
            },
            load: function() {
                validation = true;
                done();}
        });
    });

    it("click poster picture", function() {
        (validation === true).should.equal(true);
        $('.objectview-wrapper').find('.mainfeature img').attr("src").should.be(photo_image_original_url);
    });


    afterEach(function() {
        route = HubStar.Router.create();
        route.transitionTo("searchIndex");
    });
});
