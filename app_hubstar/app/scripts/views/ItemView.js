HubStar.ItemView = Ember.View.extend({
    templateName: 'item',
    actions: {
        checkingLoginStatus: function() {
            var controller = this.get('controller');
            if (controller._debugContainerKey.indexOf("application") !== -1) {

                if (localStorage.getItem("loginStatus") === null || (localStorage.loginStatus === "")) {
                    controller.set("popup", true);
                }
            }
        }
    },
    didInsertElement: function() {

    },
    transitionToArticle: function() {

    },
    moreContent: function(event) {
        var id = "#" + event.id;

        this.get("controller").articleFromSearch();
        var collape_button = "#collape_button_" + event.id;
        var more_button = "#more_button_" + event.id;
        $(id).animate({
            height: "100%"

        }, 200);
        $(collape_button).attr("style", "display:block");
        $(more_button).attr("style", "display:none");


    },
    collapeContent: function(event) {
        var id = "#" + event.id;
        var collape_button = "#collape_button_" + event.id;
        var more_button = "#more_button_" + event.id;
        $(id).animate({
            height: "20px"
        }, 200);
        $(collape_button).attr("style", "display:none");
        $(more_button).attr("style", "display:block");

    },
    searching: function(search_key) {
        this.get("controller").transitionToRoute('search', {id: search_key});
    },
    mega: function() {
        this.rerender();
    }.observes('controller.content')
});
