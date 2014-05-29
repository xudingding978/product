HubStar.GroupsNewController = Ember.Controller.extend({
    groupStepOne: true,
    groupStepTwo: false,
    groupStepThree: false,
    categorys: null,
    subcate: null,
    selected_cate: [],
    group_expertise: '',
    group_budget: '',
    group_timeframe: '',
    isResidential: false,
    isCommercial: false,
    subCategory: "",
    Category: "",
    groupName: '',
    aboutProject: '',
    logoSource: null,
    logoName: null,
    bgSource: null,
    bgName: null,
    group_bg_url: "",
    group_hero_url: "",
    group_pic_url: "",
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
        if (data !== this.get("topic")) {
            this.set('selected_cate', []);
        }
        data.set("isSelected", true);
        this.set('topic', data);
        this.set('subcate', data.get('subcate'));
        for (var i = 0; i < this.get('categorys').get('length'); i++)
        {
            if (data.get("ids") !== this.get('categorys').objectAt(i).get("ids")) {
                this.get('categorys').objectAt(i).set("isSelected", false);
                this.get('categorys').objectAt(i).set("chooseNumber", 0);
                for (var j = 0; j < this.get('categorys').objectAt(i).get("subcate").get("length"); j++)
                {
                    this.get('categorys').objectAt(i).get("subcate").objectAt(j).set("isSelected", false);
                }
            }
        }
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
        var that = this;
        if (number === "1") {
            if (this.get('selected_cate').get('length') !== null && this.get('selected_cate').get('length') !== 0) {
                this.set("groupStepOne", false);
                this.set("groupStepTwo", true);
                this.set("groupStepThree", false);
                $(document).ready(function() {
                    setTimeout(function() {
                        that.refreshPage();
                    }, 1);
                });
            }
            else
            {
                this.get('controllers.applicationFeedback').statusObserver(null, "Please select a cateory");
            }
        } else if (number === "2") {
            this.set("groupStepOne", true);
            this.set("groupStepTwo", false);
            this.set("groupStepThree", false);
            $(document).ready(function() {
                setTimeout(function() {
                    if (that.get('isResidential') === true)
                    {
                        that.chooseResidential();
                    }
                    else
                    {
                        that.chooseCommercial();
                    }
                }, 1);
            });
        } else if (number === "3") {
            this.set("groupStepOne", false);
            this.set("groupStepTwo", false);
            this.set("groupStepThree", true);
        }
    },
    refreshPage: function() {
        if (this.get('group_expertise') === "First Time")
        {
            this.choose("1");
        }
        else if (this.get('group_expertise') === "I have some experiences")
        {
            this.choose("2");
        }
        else if (this.get('group_expertise') === "I am professional")
        {
            this.choose("3");
        }

        if (this.get('group_budget') === "Less than 5k")
        {
            this.chooseBudget("1", this.get('group_budget'));
        }
        else if (this.get('group_budget') === "5k-10k")
        {
            this.chooseBudget("2", this.get('group_budget'));
        }
        else if (this.get('group_budget') === "10k-50k")
        {
            this.chooseBudget("3", this.get('group_budget'));
        }
        else if (this.get('group_budget') === "50k-100k")
        {
            this.chooseBudget("4", this.get('group_budget'));
        }
        else if (this.get('group_budget') === "100k-250k")
        {
            this.chooseBudget("5", this.get('group_budget'));
        }
        else if (this.get('group_budget') === "250k-500k")
        {
            this.chooseBudget("6", this.get('group_budget'));
        }
        else if (this.get('group_budget') === "500k- 1M")
        {
            this.chooseBudget("7", this.get('group_budget'));
        }
        else if (this.get('group_budget') === "1M+")
        {
            this.chooseBudget("8", this.get('group_budget'));
        }

        if (this.get('group_timeframe') === "1-2 months")
        {
            this.chooseTime("1", this.get('group_timeframe'));
        }
        else if (this.get('group_timeframe') === "Next 6 months")
        {
            this.chooseTime("2", this.get('group_timeframe'));
        }
        else if (this.get('group_timeframe') === "Within 12 months")
        {
            this.chooseTime("3", this.get('group_timeframe'));
        }
        else if (this.get('group_timeframe') === "1-2 years")
        {
            this.chooseTime("4", this.get('group_timeframe'));
        }
        else if (this.get('group_timeframe') === "Within 3 years")
        {
            this.chooseTime("5", this.get('group_timeframe'));
        }
    },
    chooseBudget: function(n, s) {
        for (var i = 1; i <= 8; i++)
        {
            $("#budget" + i).removeClass("group-selected");
        }
        $("#budget" + n).addClass("group-selected");
        this.set("group_budget", s);
    },
    chooseTime: function(n, s) {
        for (var i = 1; i <= 5; i++)
        {
            $("#time" + i).removeClass("group-selected");
        }
        $("#time" + n).addClass("group-selected");
        this.set("group_timeframe", s);
    },
    choose: function(number) {
        if (number === "1") {
            $("#first_time").addClass("group-selected");
            $("#some_experiences").removeClass("group-selected");
            $("#professional").removeClass("group-selected");
            this.set("group_expertise", "First Time");
        } else if (number === "2") {
            $("#some_experiences").addClass("group-selected");
            $("#first_time").removeClass("group-selected");
            $("#professional").removeClass("group-selected");
            this.set("group_expertise", "I have some experiences");
        } else if (number === "3") {
            $("#professional").addClass("group-selected");
            $("#some_experiences").removeClass("group-selected");
            $("#first_time").removeClass("group-selected");
            this.set("group_expertise", "I am professional");
        }
    },
    chooseResidential: function() {
        this.set('isResidential', true);
        this.set('isCommercial', false);
        this.set('subcate', null);
        $("#group-res").addClass("group-button-active");
        $("#group-com").removeClass("group-button-active");
        $(".subcategory-box").css("padding", "10px");
    },
    chooseCommercial: function() {
        this.set('isResidential', false);
        this.set('isCommercial', true);
        this.set('subcate', null);
        $("#group-com").addClass("group-button-active");
        $("#group-res").removeClass("group-button-active");
        $(".subcategory-box").css("padding", "10px");

    },
    fieldChecking: function() {

        var flag = true;
        if (this.get("groupName") === "")
        {
            flag = false;
        }
        if (this.get("aboutProject") === "")
        {
            flag = false;
        }
        if (this.get("group_expertise") === "")
        {
            flag = false;
        }
        if (this.get("group_bg_url") === "" || this.get("group_hero_url") === "" || this.get("group_pic_url") === "")
        {
            flag = false;
        }
        return flag;
    },
    getCateandSubCate: function() {
        var subCategory = "";
        var cateIds = "";
        var Category = "";
        for (var i = 0; i < this.get('selected_cate').get("length"); i++)
        {
            if (subCategory === "")
            {
                subCategory = subCategory + this.get('selected_cate')[i].category_topic;
            }
            else
            {
                subCategory = subCategory + "," + this.get('selected_cate')[i].category_topic;
            }
            if (cateIds.indexOf(this.get('selected_cate')[i].parentId) === -1)
            {
                if (Category === "")
                {
                    Category = Category + this.get('selected_cate')[i].category_topic.split('•')[0];
                    cateIds = cateIds + this.get('selected_cate')[i].parentId;
                }
                else
                {
                    Category = Category + "," + this.get('selected_cate')[i].category_topic.split('•')[0];
                    cateIds = cateIds + "," + this.get('selected_cate')[i].parentId;
                }
            }
        }
        this.set("subCategory", subCategory);
        this.set("Category", Category);
    },
    save: function() {
        this.getCateandSubCate();
        if (this.fieldChecking())
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
                categories: that.get("Category"),
                subcategories: that.get("subCategory"),
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
                owner_profile_pic: that.get("group_pic_url"),
                owner_title: that.get("groupName"), //group name
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
                group_budget: that.get("group_budget"),
                group_expertise: that.get("group_expertise"),
                group_classification: that.get("isResidential") ? "residential" : "commercial",
                group_category: that.get("Category"),
                group_subcategory: that.get("subCategory"),
                group_hero_url: that.get("group_hero_url"),
                group_pic_url: that.get("group_pic_url"),
                group_bg_url: that.get("group_bg_url"),
                group_hero_cover_url: "",
                group_name: that.get("groupName"), //group name
                group_timeframe: that.get("group_timeframe"), //how long does the project need?
                group_description: that.get("aboutProject"),
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
    },
    removePic: function(s) {
        this.set(s + 'Source', null);
        this.set(s + 'Name', null);
        if (s === "logo") {
            this.set("group_pic_url", "");
        }
        else if (s === "bg")
        {
            this.set("group_bg_url", "");
            this.set("group_hero_url", "");
        }
    },
    profileStyleImageDrop: function(e, name, variable) {
        this.set("isUploadPhoto", true);
        var target = getTarget(e, "single");
        var src = target.result;
        this.set(variable + 'Source', src);
        this.set(variable + 'Name', name);
        this.savePic(variable + 'Source', variable + 'Name', variable);
    },
    savePic: function(src, name, variable) {
        if (this.get(src) !== null && this.get(name) !== null)
        {
            var imageType = "";
            var imageName = this.get(name).split('.');
            imageType = imageName[imageName.length - 1];
            var data = [this.get(src), this.get(name), imageType, variable];
            data = JSON.stringify(data);
            var that = this;
            requiredBackEnd('photos', 'savePicGroup', data, 'POST', function(params) {
                if (params.length > 1)
                {
                    that.set("group_bg_url", params[0]);
                    that.set("group_hero_url", params[1]);
                }
                else
                {
                    that.set("group_pic_url", params[0]);
                }
            });
        }
    }
});

