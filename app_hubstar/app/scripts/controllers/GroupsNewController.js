HubStar.GroupsNewController = Ember.Controller.extend({
    groupStepOne: true,
    groupStepTwo: false,
    groupStepThree: false,
    groupStepFour: false,
    categorys: [],
    subcate: [],
    isResidential:true,
    needs: ['profile', 'applicationFeedback', 'application'],
    init: function()
    {
        this.setTopicModel(HubStar.Cate.find({}));
    },
    setTopicModel: function(model) {
        this.set('categorys', null);
        this.set('categorys', model);

    },
    topicSelection: function(data) {

        this.set('subcate', []);
        for (var i = 0; i < data.get('subcate').get('length'); i++)
        {
            this.get('subcate').pushObject({'category_topic': data.get('subcate').objectAt(i).get('category_topic'), 'subcategories': data.get('subcate').objectAt(i).get('subcategories')
            });
        }

    },
    groupStep: function(number) {

        if (number === "1") {
            this.set("groupStepOne", false);
            this.set("groupStepTwo", true);
            this.set("groupStepThree", false);
            this.set("groupStepFour", false);
        } else if (number === "2") {
            this.set("groupStepOne", false);
            this.set("groupStepTwo", false);
            this.set("groupStepThree", true);
            this.set("groupStepFour", false);
        } else if (number === "3") {
            this.set("groupStepOne", false);
            this.set("groupStepTwo", false);
            this.set("groupStepThree", false);
            this.set("groupStepFour", true);
        } else if (number === "0") {
          this.set("groupStepOne", true);
            this.set("groupStepTwo", false);
            this.set("groupStepThree", false);
            this.set("groupStepFour", false);
        }
    },
    groupSelection: function(checking) {

        if (checking === "residental") {

            this.set("isResidential", true);
            $("#groupRes").removeClass("hover-opacity easing");
            $("#groupCom").addClass("hover-opacity easing");
        } else if (checking === "commerial") {

           this.set("isResidential", false);
            $("#groupRes").addClass("hover-opacity easing");
            $("#groupCom").removeClass("hover-opacity easing");
        } 


    }
});

