HubStar.GroupsNewController = Ember.Controller.extend({
    groupStepOne: true,
    groupStepTwo: false,
    editingGroupTitle: false,
    groupStepThree: false,
    groupStepFour: false,
    categorys: null,
    subcate: null,
    selected_topics: "",
    selected_cate: [],
    isResidential: false,
    isCommercial: false,
    topic: [],
    needs: ['profile', 'applicationFeedback', 'application'],
    init: function()
    {
        this.setTopicModel();
    },
    setTopicModel: function() {
        this.set('categorys', this.get("controllers.application").get("categorys"));
        for (var i = 0; i < this.get('categorys').get('length'); i++)
        {
            this.get('categorys').objectAt(i).set("isSelected", false);
        }
    },
    topicSelection: function(data) {
        this.set('topic', data);
        this.set('subcate', data.get('subcate'));
    },
    addToSeclection: function(item) {
        item.set("isSelected", true);
        var s = [];
        s.id = item.get("ids");
        s.parentId = this.get('topic').get('ids');
        s.category_topic = this.get('topic').get('topic') + '•' + item.get('category_topic');
        this.get('topic').set("chooseNumber", this.get('topic').get("chooseNumber") + 1);
        this.get('selected_cate').push(s);
    },
    delToSeclection: function(item) {
        item.set('isSelected', false);
        for (var i = 0; i < this.get('selected_cate').get('length'); i++)
        {
            if (this.get('selected_cate')[i].id === item.get('ids'))
            {
                this.get('selected_cate').splice(i, 1);
            }
        }
        this.get('topic').set("chooseNumber", this.get('topic').get("chooseNumber") - 1);
    },
    groupStep: function(number) {

        if (number === "1") {
            this.set("groupStepOne", false);
            this.set("groupStepTwo", true);
        } else if (number === "2") {
            this.set("groupStepOne", true);
            this.set("groupStepTwo", false);
        }
    },
    choose: function(number) {
        if (number === "1") {
            $("#1").addClass("selected");
            $("#2").removeClass("selected");
            $("#3").removeClass("selected");

        } else if (number === "2") {

            $("#2").addClass("selected");
            $("#1").removeClass("selected");
            $("#3").removeClass("selected");

        } else if (number === "3") {
            $("#3").addClass("selected");
            $("#2").removeClass("selected");
            $("#1").removeClass("selected");
        }
    },
    changeTitle: function(title) {
        this.set("editingGroupTitle", true);

    },
    no: function(title) {
        this.set("editingGroupTitle", false);

    },
    yes: function(title) {
        this.set("editingGroupTitle", false);
    },
    chooseResidential: function() {
        this.set('isResidential', true);
        this.set('isCommercial', false);
        this.set('subcate', null);
        $("#group-res").addClass("group-button-active");
        $("#group-com").removeClass("group-button-active");
    },
    chooseCommercial: function() {
        this.set('isResidential', false);
        this.set('isCommercial', true);
        this.set('subcate', null);
        $("#group-com").addClass("group-button-active");
        $("#group-res").removeClass("group-button-active");

    },
    save: function() {
        {
            var that = this;
            var id = createMessageid();
            var newMegaModel = HubStar.Mega.createRecord({
                "id": id + "",
                "type": "group",
                boost: 25,
                accessed: new Date(),
                is_active: true,
                is_indexed: true,
                is_deleted: false,
                categories: that.get("selected_topics"),
                subcategories: "",
                created: new Date(),
                creator: localStorage.loginStatus,
                classification: that.get("isResidential") ? "residential" : "commercial",
                country: null,
                region: null,
                suburb: null,
                domains: getDomain(),
                editors: "",
                keywords: "",
                keyword_num: 0,
                owner_type: "groups", // profiles or user can upload files, this could help to link back to their profile.
                owner_profile_pic: "https://s3-ap-southeast-2.amazonaws.com/develop.devbox/profile_pic/default/defaultpic1.jpg",
                owner_title: "", //profile name
                owner_id: localStorage.loginStatus, //user id
                owner_contact_email: null,
                owner_contact_bcc_emails: null,
                owner_contact_cc_emails: null,
                updated: 0,
                view_count: 0,
                share_count: 0,
                save_count: 0,
                likes_count: 0,
                comment_count: 0,
                keyword: [],
                group: []
            });

            var newGroup = HubStar.Group.createRecord({
                group_step: "",
                group_budget: "",
                group_expertise: "",
                group_category: that.get("selected_topics"),
                group_subcategory: "",
                group_hero_url: "https://s3-ap-southeast-2.amazonaws.com/develop.devbox/profile_bg/default/defaultbg6.jpg",
                group_pic_url: "https://s3-ap-southeast-2.amazonaws.com/develop.devbox/profile_cover/default/defaultcover4.jpg",
                group_bg_url: "https://s3-ap-southeast-2.amazonaws.com/develop.devbox/profile_pic/default/defaultpic1.jpg",
                group_hero_cover_url: "",
                group_name: "",
                group_timeframe: "", //how long does the project need?

                group_partner_ids: "",
                group_creator: localStorage.loginStatus, //user id
                group_administrator: "", //user id
                group_editor: "", //user id
                id: id,
                keywords: []
            });

            newMegaModel.save();
            newMegaModel.get('isSaving');
            newMegaModel.addObserver('isDirty', function() {
                if (!newMegaModel.get('isDirty')) {
                    newGroup.save();
                    newGroup.get('isSaving');
                    newGroup.addObserver('isDirty', function() {
                        if (!newGroup.get('isDirty')) {
                            location.href = "#/groups/" + id;
                            location.reload();
                        }
                    });
                }
                else
                {
                }
            });
        }
    }
});

