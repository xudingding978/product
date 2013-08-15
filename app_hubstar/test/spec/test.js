

        App.Store = DS.Store.extend({
            revision: 13,
            adapter: DS.FixtureAdapter.create({simulateRemoteResponse: false})
        });

// Declare some fixture objects to use in our test application.  There's
// nothing like factory_girl or machinist yet.
        App.Employee.FIXTURES = [{
                id: 1,
                name: "Jane Q. Public",
                salary: 80000,
                managedBy: null,
                manages: [2]
            }, {
                id: 2,
                name: "John Q. Public",
                salary: 60000,
                managedBy: 1,
                manages: []
            }];

// Run before each test case.
        beforeEach(function() {
            // Put the application into a known state, and destroy the defaultStore.
            // Be careful about DS.Model instances stored in App; they'll be invalid
            // after this.
            // This is broken in some versions of Ember and Ember Data, see:
            // https://github.com/emberjs/data/issues/847
            Ember.run(function() {
                App.reset();
            });
            // Display an error if asynchronous operations are queued outside of
            // Ember.run.  You need this if you want to stay sane.
            Ember.testing = true;
        });

// Run after each test case.
        afterEach(function() {
            Ember.testing = false;
        });

// Optional: Clean up after our last test so you can try out the app
// in the jsFiddle.  This isn't normally required.
        after(function() {
            Ember.run(function() {
                App.reset();
            });
        });

// Load associations immediately, instead of waiting for FixtureAdapter's
// asynchronous loads.  Basically, all we need to do is access each object
// from inside Ember.run.
// TODO: We can't test this or insert where needed until App.reset() works.
// TODO: Handle hasMany.
        function loadAssociations(object /*, paths... */) {
            var paths = Array.prototype.slice.call(arguments, 1);
            for (var i = 0; i < paths.length; i++) {
                var components = paths[i].split(".");
                for (var j = 0; j < components.length; j++) {
                    Ember.run(function() {
                        var path = components.slice(0, j + 1).join(".");
                        object.get(path);
                    });
                }
            }
        }

// Sample model test.
        describe("App.Employee", function() {
            it("has a name", function() {
                var jane;
                Ember.run(function() {
                    // Won't actually load until the end of the run-block.
                    jane = App.Employee.find(1);
                });
                jane.get("name").should.equal("Jane Q. Public");
            });
        });

// Sample controller test.
        describe("App.EmployeeController", function() {
            var model, controller;

            beforeEach(function() {
                Ember.run(function() {
                    // We could also fetch a model from our fixtures.
                    model = App.Employee.createRecord({salary: 100000});
                    controller = App.EmployeeController.create({content: model});
                });
            });

            it("can give the employee a raise", function() {
                var oldSalary = model.get("salary");
                Ember.run(function() {
                    controller.giveRaise();
                });
                model.get("salary").should.equal(oldSalary * 1.1);
            });
        });

// Sample view test.
        describe("App.EmployeeView", function() {
            var controller, view;

            beforeEach(function() {
                Ember.run(function() {
                    var model = App.Employee.find(1);
                    controller = App.EmployeeController.create({
                        // We need a container to test views with linkTo.
                        container: App.__container__,
                        content: model
                    });
                    // If for some reason we want to isolate this, we can use
                    // a sinon stub to intercept certain calls.
                    sinon.stub(controller, "giveRaise");
                    view = App.EmployeeView.create({
                        controller: controller,
                        context: controller
                    });
                    view.append(); // Hook up to our document.
                });
            });

            afterEach(function() {
                Ember.run(function() {
                    view.remove(); // Unhook from our document.
                });
            });

            it("shows the employee's name", function() {
                // This uses a chai-jquery assertion.
                view.$("h2").should.have.text("Jane Q. Public");
                view.$(".manages li").text().should.match(/John/);
            });

            it("has a button which gives the employee a raise", function() {
                view.$("button").click();
                // We use a sinon-chai method here.
                controller.giveRaise.should.have.been.calledOnce;
            });
        });

// Sample acceptance test.
        describe("Employee features", function() {
            it("give John's boss a raise", function() {
                $("a:contains('Show employees')").click();
                $("a:contains('John')").click();
                $(".managed-by a").click();
                $(".salary").should.have.text("$80000");
                $("button:contains('Give Raise')").click();
                $(".salary").should.have.text("$88000");
            });
        });





