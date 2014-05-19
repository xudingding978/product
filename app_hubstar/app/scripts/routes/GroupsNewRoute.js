HubStar.GroupsNewRoute = Ember.Route.extend({
    renderTemplate: function() {
        this.render('groupsNew', {
            outlet: "groupsNew",
            into: "application"
        });
    },
    setupController: function(controller, model) {
        this.controllerFor('application').set('islogin', true);
        this.controllerFor('application').set('popup', false);
        this.controllerFor('application').set('isotherpage', true);
        this.controllerFor('searchs').setLoginImge();
        if (localStorage.getItem("loginStatus") === null || (localStorage.loginStatus === "")) {
            HubStar.set('isLogin', false);

        } else {
            HubStar.set('isLogin', true);
        }
        this.controllerFor('user').set('model', model);
        setTimeout(function() {
            $('.nothingHere').attr('style', 'display:none');
        }, 10);
        setTimeout(function() {
            $(window).scrollTop(0);
        }, 200);
        HubStar.set('editingMode', 'user');
        $("#user-dd-menu").attr("style", "display:none");
    },
    model: function() {
        var user = HubStar.User.find(localStorage.loginStatus);
        return user;
    },
    activate: function() {

    },
    deactivate: function() {
//            $("body").css("overflow", "auto");
//            $('#footer').attr("style", "display:block");
    },
    redirect: function() {

        if ((localStorage.getItem("loginStatus") === null) || (localStorage.loginStatus === "")) {

            this.transitionTo('indexIndex');
            this.controllerFor('application').set('popup', true);
        } else
        {
            //  this.transitionTo("searchIndex");
        }
    }
});
