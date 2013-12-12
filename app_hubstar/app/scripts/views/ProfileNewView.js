HubStar.ProfileNewView = Ember.View.extend({
    templateName: 'profileNew',
    added: true,
 
    didInsertElement: function() {
    },
    addSecond: function() {
        $("#secondEmail").css("display", "table-row");
        $("#firstAdd").css("display", "none");
        this.set("added", true);

    },
    addThird: function() {
        $("#thirdEmail").css("display", "table-row");
        this.set("added", false);
    },
    deleteSecond: function() {
        this.set("added", false);
        $("#secondEmail").css("display", "none");
        $("#firstAdd").css("display", "table-row");
    },
    deleteThird: function() {
        $("#thirdEmail").css("display", "none");
        this.set("added", true);

    }
 
    
    

});


