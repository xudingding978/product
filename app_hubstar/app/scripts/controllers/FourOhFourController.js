/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

HubStar.FourOhFourController = Ember.Controller.extend({
    searching: function() {

        setTimeout(function() {
            $(".Navigator-box").css('display', 'none');
            $("#top-about-menu").fadeOut("320");
            $("#search-bar").fadeIn("320");
        }, 10);


        HubStar.set("showDiscoveryBar", false);
        var area = $("#search_key").val();
        var search_key = $("#errorpage_search").val();
        var object;
        if (search_key !== "" || area !== "") {
            if (area !== "" && search_key !== "") {
                object = {"region": area, "search_string": search_key};
            } else if (area === "" && search_key !== "") {
                object = {"region": area, "search_string": search_key};
            } else if (area !== "" && search_key === "") {
                object = {"region": area, "search_string": search_key};
            }
        } else {
            object = {"region": "", "search_string": ""};
        }
        this.transitionToRoute('search', {id: search_key});
    }

});
