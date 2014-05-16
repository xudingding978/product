HubStar.NavigatorView = Ember.View.extend({
    templateName: 'navigator',
    didInsertElement: function() {
        var that = this;
        $(document).ready(function() {
            $("#switchbar").mouseup(function(event) {
                var mousedownX = event.pageX;
                var witdhleft = $('#switchbar').offset().left;
                var d = 23;
                var middle = witdhleft + d;
                if (mousedownX < middle - d / 2) {
                    localStorage.resOrcom = "residential";
                } else if (mousedownX >= (middle - d / 2) && mousedownX < (middle + d / 2)) {
                    localStorage.resOrcom = "All";
                }
                else if (mousedownX >= (middle + d / 2)) {
                    localStorage.resOrcom = "commercial";
                }
                that.get("controller").residentialCommercialStatus();
                that.get("controller").changeBackground();   
            });
        });

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
