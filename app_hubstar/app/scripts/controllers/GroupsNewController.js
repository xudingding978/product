HubStar.GroupsNewController = Ember.Controller.extend({
    groupStepOne: true,
    groupStepTwo: false,
    categorys: [],
    subcate: [],
    selected_topics: "",
    editingGroupTitle:false,
    isResidential: true,
    needs: ['profile', 'applicationFeedback', 'application'],
    init: function()
    {
        this.setTopicModel();
    },
    setTopicModel: function() {
        this.set('categorys', this.get("controllers.application").get("categorys"));
    },
    topicSelection: function(data) {
        this.set('subcate', []);
        for (var i = 0; i < data.get('subcate').get('length'); i++)
        {
            this.get('subcate').pushObject({'category_topic': data.get('subcate').objectAt(i).get('category_topic'), 'subcategories': data.get('subcate').objectAt(i).get('subcategories')
            });
        }
    },
    selectTopic: function(ids, topic) {
        if (this.get('selected_topics').indexOf(topic) !== -1) {
            this.set('selected_topics', this.get('selected_topics').replace(topic, ""));
            this.set('selected_topics', this.get('selected_topics').replace(",,", ","));
            $('#minusSelect_' + ids).attr("style", "opacity: .8; z-index: 10; right: 0; margin: 10px; display:none;");
        }
        else {
            $('#minusSelect_' + ids).attr("style", "opacity: .8; z-index: 10; right: 0; display:block;");
            if (this.get('selected_topics') === "") {
                this.set('selected_topics', topic);
            } else {
                this.set('selected_topics', this.get('selected_topics') + "," + topic);
            }
        }
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
    
    changeTitle: function(title){
        this.set("editingGroupTitle", true);
        
    },
      no: function(title){
        this.set("editingGroupTitle", false);
        
    }, 
      yes: function(title){
        this.set("editingGroupTitle", false);
        
    },
    save: function() {
        {
            var that = this;
            var id =createMessageid();
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
                group_timeframe: "",//how long does the project need?
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

