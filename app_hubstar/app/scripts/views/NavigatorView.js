HubStar.NavigatorView = Ember.View.extend({
    templateName: 'navigator',
    didInsertElement: function() {
    },
    commercial: function() {

        if ($("#commercial1").hasClass("residentialCommerical-selected")) {
            if ($("#residential1").hasClass("residentialCommerical-selected")) {
                $("#residential1").removeClass("residentialCommerical-selected");
                localStorage.resOrcom = "commercial";
            } else {
                $("#residential1").addClass("residentialCommerical-selected");
                localStorage.resOrcom = "All";
            }
        }
        else {
            $("#commercial1").addClass("residentialCommerical-selected");
            $("#residential1").removeClass("residentialCommerical-selected");
            localStorage.resOrcom = "commercial";

        }
        this.get("controller").residentialCommercialStatus();
         this.get("controller").changeBackground();
          

    },
    residential: function() {
        if ($("#residential1").hasClass("residentialCommerical-selected")) {
            if ($("#commercial1").hasClass("residentialCommerical-selected")) {
                $("#commercial1").removeClass("residentialCommerical-selected");
                localStorage.resOrcom = "residential";
            } else {
                $("#commercial1").addClass("residentialCommerical-selected");
                localStorage.resOrcom = "All";
            }
        }
        else {
            $("#residential1").addClass("residentialCommerical-selected");
            $("#commercial1").removeClass("residentialCommerical-selected");
            localStorage.resOrcom = "residential";
        }
        this.get("controller").residentialCommercialStatus();
        this.get("controller").changeBackground();

    }
});
