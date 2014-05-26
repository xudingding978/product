HubStar.GroupsNewController = Ember.Controller.extend({
    groupStepOne: false,
    groupStepTwo: false,
    groupStepThree: true,
    categorys: null,
    subcate: null,
    selected_cate: [],
    group_expertise: '',
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
            if (this.get('selected_cate').get('length') !== null && this.get('selected_cate').get('length') !== 0) {
                this.set("groupStepOne", false);
                this.set("groupStepTwo", true);
                this.set("groupStepThree", false);

                setTimeout(function() {
                    $("#budget").slider();
                    $("#timeframe").slider();
                    $("#budget").on('slide', function(slideEvt) {
                        var valueleft = slideEvt.value[0];
                        var valueright = slideEvt.value[1];
                        $("#budget-left").text(valueleft);
                        $("#budget-right").text(valueright);
                    });
                    $("#timeframe").on('slide', function(slideEvt) {
                        var valueleft = slideEvt.value[0];
                        var valueright = slideEvt.value[1];
                        $("#timeframe-left").text(valueleft);
                        $("#timeframe-right").text(valueright);
                    });
                }, 10);
            }
            else
            {
                this.get('controllers.applicationFeedback').statusObserver(null, "Please select a cateory");
            }
        } else if (number === "2") {
            this.set("groupStepOne", true);
            this.set("groupStepTwo", false);
            this.set("groupStepThree", false);
            var that = this;
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
    choose: function(number) {
        if (number === "1") {
            $("#first_time").addClass("selected");
            $("#some_experiences").removeClass("selected");
            $("#professional").removeClass("selected");
            this.set("group_expertise", "First Time");


        } else if (number === "2") {
            $("#some_experiences").addClass("selected");
            $("#first_time").removeClass("selected");
            $("#professional").removeClass("selected");
            this.set("group_expertise", "I have some experiences");
        } else if (number === "3") {
            $("#professional").addClass("selected");
            $("#some_experiences").removeClass("selected");
            $("#first_time").removeClass("selected");
            this.set("group_expertise", "I am professional");
        }
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
                group_budget: "",
                group_expertise: that.get("group_expertise"),
                group_category: that.get("Category"),
                group_subcategory: that.get("subCategory"),
                group_hero_url: that.get("group_hero_url"),
                group_pic_url: that.get("group_pic_url"),
                group_bg_url: that.get("group_bg_url"),
                group_hero_cover_url: "",
                group_name: that.get("groupName"), //group name
                group_timeframe: "", //how long does the project need?
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
                            //location.href = "#/groups/" + id;
                            //location.reload();
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
            var that =this;
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

