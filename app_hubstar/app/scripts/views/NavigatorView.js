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
                    $('#switchbarBtn').attr("style", "margin-left:0px;");
                    $('#switchbarBtn1').attr("style", "margin-left:0px;");
                    that.get("controller").set("residential", "1");
                    that.get("controller").set("commercial", "0");
                } else if (mousedownX >= (middle - d / 2) && mousedownX < (middle + d / 2)) {
                    $('#switchbarBtn').attr("style", "margin-left:13px;");
                    $('#switchbarBtn1').attr("style", "margin-left:13px;");
                    that.get("controller").set("residential", "1");
                    that.get("controller").set("commercial", "1");
                }
                else if (mousedownX >= (middle + d / 2)) {
                    $('#switchbarBtn').attr("style", "margin-left:28px;");
                    $('#switchbarBtn1').attr("style", "margin-left:28px;");
                    that.get("controller").set("residential", "0");
                    that.get("controller").set("commercial", "1");
                }
            });

        });

    }

});
