HubStar.GroupsNewController = Ember.Controller.extend({
    groupStepOne: true,
    groupStepTwo: false,
    groupStepThree: false,
    groupStepFour: false,
    categorys: [],
    subcate: [],
    isResidential: true,
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
    },
    save: function() {
        //this.fillInChecking();
        //if (passSubmit) 
        {
            var newMegaNewModel = HubStar.Meganew.createRecord({
                "id": createMessageid(),
                "type": "group",
                boost: 25,
                accessed: new Date(),
                is_active: true,
                is_indexed: true,
                is_deleted: false,
                categories: $('#categorySelection').text(),
                subcategories: $('#subcategorySelection').text(),
                created: new Date(),
                creator: localStorage.loginStatus,
                classification: this.get("classification"),
                country: $('#countrySelection').text(),
                region: $('#regionSelection').text(),
                suburb: this.get("suburb"),
                domains: getDomain(),
                editors: this.get("owner") + "," + this.get("editors"),
                keywords: this.get("keywords"),
                keyword_num: this.get("keywordNumber"),
                owner_type: "profiles", // profiles or user can upload files, this could help to link back to their profile.
                owner_profile_pic: "https://s3-ap-southeast-2.amazonaws.com/develop.devbox/profile_pic/default/defaultpic1.jpg",
                owner_title: this.get("profile_name"), //profile name
                owner_id: this.get("profile_url"), //profile id
                owner_contact_email: this.get("direct_enquiry_emails"),
                owner_contact_bcc_emails: this.get("direct_enquiry_emails_2"),
                owner_contact_cc_emails: this.get("direct_enquiry_emails_3"),
                updated: 0,
                view_count: 0,
                share_count: 0,
                save_count: 0,
                likes_count: 0,
                comment_count: 0,
                keyword: [],
                profile: []
            });

            var newProfile = HubStar.Profile.createRecord({
                id: this.get("profile_url"),
                profile_name: this.get("profile_name"),
                profile_contact_last_name: this.get("last_name"),
                profile_contact_first_name: this.get("first_name"),
                profile_about_us: "<br>Welcome!<br>",
                profile_package_name: this.get("profile_package"),
                profile_bg_url: "https://s3-ap-southeast-2.amazonaws.com/develop.devbox/profile_bg/default/defaultbg6.jpg",
                profile_hero_url: "https://s3-ap-southeast-2.amazonaws.com/develop.devbox/profile_cover/default/defaultcover4.jpg",
                profile_pic_url: "https://s3-ap-southeast-2.amazonaws.com/develop.devbox/profile_pic/default/defaultpic1.jpg",
                profile_boost: this.get("keywordNumber"),
                owner: this.get("owner"),
                profile_creator: localStorage.loginStatus,
                profile_administrator: "",
                profile_editor: "",
                profile_editors: this.get("owner") + "," + this.get("editors"),
                profile_contact_number: this.get("profile_contact_number"),
                owner_contact_email: this.get("direct_enquiry_emails"),
                owner_contact_bcc_emails: this.get("direct_enquiry_emails_2"),
                owner_contact_cc_emails: this.get("direct_enquiry_emails_3"),
                profile_category: $('#categorySelection').text(),
                profile_subcategory: $('#subcategorySelection').text(),
                profile_physical_address: this.get("address"),
                profile_is_active: "true",
                profile_is_deleted: "false",
                profile_suburb: this.get("suburb"),
                profile_keywords: this.get("keywords"),
                profile_video_num: 0,
                profile_keywords_num: this.get("keywordNumber"),
                profile_regoin: $('#regionSelection').text(),
                profile_country: $('#countrySelection').text(),
                profile_hours: "Monday=9:00am-5:00pm,Tuesday=9:00am-5:00pm,Wednesday=9:00am-5:00pm,Thursday=9:00am-5:00pm,Friday=9:00am-5:00pm,Saturday=closed,Sunday=closed,Holidays=closed",
                profile_partner_ids: null,
                profile_website_url: this.get("website_url"),
                profile_website: this.get("website"),
                keywords: []

            });

            var that = this;
            requiredBackEnd('meganews', 'createNewProfile', newMegaNewModel, 'POST', function(params) {
                if (params === true) {
                    that.get('controllers.applicationFeedback').statusObserver(null, "The profile has been created with the same profile URL, Please change a new profile name, thank you!", "warnning");
                }
                else {
                    newMegaNewModel.save();
                    newMegaNewModel.get('isSaving');
                    newMegaNewModel.addObserver('isDirty', function() {
                        if (!newMegaNewModel.get('isDirty')) {
                            newProfile.save();
                            newProfile.get('isSaving');
                            newProfile.addObserver('isDirty', function() {
                                if (!newProfile.get('isDirty')) {
                                    location.href = "#/profiles/" + that.get("profile_url");
                                    location.reload();
                                }
                            });
                        }
                        else
                        {
                        }
                    });
                }
            });
        }
    }
});

