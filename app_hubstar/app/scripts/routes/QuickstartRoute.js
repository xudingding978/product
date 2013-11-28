HubStar.QuickstartRoute = Ember.Route.extend({
        redirect: function() {




            if (localStorage.checkUser === "newUser") {
                  console.log("qudjkflsdfd");


            } else {

                this.transitionTo('searchIndex');

            }


        },
        setupController: function() {
            this.controllerFor('searchs').defaultSearch();
            this.controllerFor('index').setLogin();

            this.controllerFor('application').set('islogin', true);


            setTimeout(function() {
                $(window).scrollTop(0);
                $('#masonry_container').attr('style', "display:none");
                  $('#discovery_search_bar_wrapper').attr('style', "display:none");
            }, 100);

        },
        renderTemplate: function() {
            this.render('quickstart', {
                outlet: 'quickstart',
                into: 'application'
            });
        }
    });
