
HubStar.ContactController = Ember.Controller.extend({
    dropdownCategory: "Category",
    dropdownTimeframe: "Timeframe",
    dropdownBudget: "Budget",
    dropdownExperience: "Experience",
    selectedMega: null,
    recieveProfile: null,
    displayName: null,
    displayEmail: null,
    currentUser: null,
    isDisplayNameEditable: false,
    isDisplayEmailEditable: false,
    editNameStatus: "edit",
    editEmailStatus: "edit",
    emailBody: null,
    emailSubject: null,
    emailDestination: null,
    emaiCCDestination: null,
    rememberMessage: true,
    osAndBrowser: true,
    userEnvironment: "",
    owner_profile_pic: null,
    emaiBCCDestination: null,
    projectCategory: null,
    projectTimeframe: null,
    categorys: [],
    showCate: false,
    temp: [],
    subcate: [],
    projectBudget: null,
    projectExperience: null,
    email_title: "",
    needs: ["mega", "profile", 'article', 'applicationFeedback', 'video', 'application'],
    init: function() {
        this.set('categorys', this.get("controllers.application").get("categorys"));
        this.set('projectCategorySelection', 'Please Select One ...');
        this.set('timeframeSelection', 'Please Select One ...');
        this.set('projectBudgetSelection', 'Please Select One ...');
        this.set('projectExperienceSelection', 'Please Select One ...');
    },
    selectionCheckBox: function() {
        if (this.get('temp').get('subcate') !== undefined) {
            this.set('subcate', []);
            for (var i = 0; i < this.get('temp').get('subcate').get('length'); i++) {
                this.get('subcate').pushObject({'list_id': "checkbox" + i, 'category_topic': this.get('temp').get('subcate').objectAt(i).get('category_topic'), "isSelection": this.get("checkbox" + i)});
            }
        }
    },
    topicSelection: function(data) {
        this.set('showCate', true);
        this.set('temp', []);
        this.set('temp', data);
        this.set('subcate', []);
        for (var i = 0; i < data.get('subcate').get('length'); i++) {
            this.set("checkbox" + i, false);
            this.get('subcate').pushObject({'list_id': "checkbox" + i, 'category_topic': data.get('subcate').objectAt(i).get('category_topic'), "isSelection": this.get("checkbox" + i)});
        }

    },
    checkedAction: function(checkedboxselection) {
        $("#" + checkedboxselection).prop('checked', !$("#" + checkedboxselection).prop('checked'));
        if ($("#" + checkedboxselection).prop('checked') === false) {
            this.set(checkedboxselection, false);
        } else {
            this.set(checkedboxselection, true);
        }
    },
    setSelectedMega: function(id)
    {
        this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
        if (this.get("currentUser").get("first_name") !== null && this.get("currentUser").get("last_name")) {
            this.set("displayName", this.get("currentUser").get("first_name") + " " + this.get("currentUser").get("last_name"));
        }
        else {
            this.set("displayName", this.get("currentUser").get("display_name"));
        }
        this.set("displayEmail", this.get("currentUser").get("email"));
        var idProfile;
        var tempMega = HubStar.Mega.find(id);
        this.set("selectedMega", tempMega);
        var that = this;
        tempMega.then(function() {
            that.set("selectedMega", tempMega);
            that.set("emailDestination", that.get("selectedMega").get("owner_contact_email"));
            that.set("emaiCCDestination", that.get("selectedMega").get("owner_contact_cc_emails"));
            that.set("emaiBCCDestination",that.get("selectedMega").get("owner_contact_bcc_emails"));
            that.set("ownerTitle",that.get("selectedMega").get("owner_title"));
            idProfile = that.get("selectedMega").get("owner_id");

            if (that.get("selectedMega").get("type") === 'profile')
            {
                that.set("owner_profile_pic", that.get("selectedMega").get("profile").objectAt(0).get('profile_pic_url'));
            }
            else {
                that.set("owner_profile_pic", that.get("selectedMega").get("owner_profile_pic"));
            }
//            var tempProfile = HubStar.Profile.find(idProfile);
//            var those = that;
//            tempProfile.then(function() {
//                those.get('selectedMega').set('owner_title', tempProfile.get('profile_name'));
//                those.set("emailDestination", tempProfile.get("owner_contact_email"));
//                those.set("emaiCCDestination", tempProfile.get("owner_contact_cc_emails"));
//                that.set("emaiBCCDestination",tempProfile.get("owner_contact_bcc_emails"));
//            });
        });
    },
    closeContact: function() {
        var megaController = this.get("controllers.mega");
        var profileController = this.get("controllers.profile");
        var articleController = this.get("controllers.article");
        var videoController = this.get("controllers.video");

        this.set('projectCategoryDropdown', false);
        this.set('projectTimeframeDropdown', false);
        this.set('projectBudgetDropdown', false);
        this.set('projectExperienceDropdown', false);
        this.set('showCate', false);

        videoController.closeContact();
        megaController.closeContact();
        profileController.closeContact();
        articleController.closeContact();
    },
    setEditable: function(attr) {
        var swtich = "isDisplay" + attr + "Editable";
        var status = "edit" + attr + "Status";
        if (this.get(swtich))
        {
            this.set(status, "edit");
        }
        else {
            this.set(status, "confirm");
        }
        this.set(swtich, !this.get(swtich));
    },
    emailSend: function()
    {

        var projectSubCategoryItem = "";
        for (var i = 0; i < this.get('subcate').get('length'); i++) {
            if (this.get("checkbox" + i) === true) {
                projectSubCategoryItem += $('.checkbox' + i).text() + ",";
            }
        }
        var userEnvironment = "";
        if (this.get("osAndBrowser") === true)
        {
            userEnvironment = this.get("userEnvironment");
        }
        projectSubCategoryItem = projectSubCategoryItem.substring(0, projectSubCategoryItem.length - 1);
        var tempEmail = HubStar.Email.createRecord({
            "ownerTitle":this.get("ownerTitle"),
            "displayName": this.get("displayName"),
            "displayEmail": this.get("displayEmail"),
            'recieveProfile': this.get('recieveProfile'),
            "emailBody": this.get("emailBody"),
            "emailSubject": this.get("emailSubject"),
            "emailDestination": this.get("emailDestination"),
            "emaiCCDestination": this.get("emaiCCDestination"),
            "emaiBCCDestination": this.get("emaiBCCDestination"),
            "projectCategory": this.get('projectCategorySelection').trim(),
            "projectTimeframe": this.get('timeframeSelection').trim(),
            "projectBudget": this.get('projectBudgetSelection').trim(),
            "projectExperience": this.get('projectExperienceSelection').trim(),
            "objectUrl": document.URL,
            "userEnvironment": userEnvironment,
            "projectSubCategoryItem": projectSubCategoryItem
        });

        tempEmail.store.commit();
        this.get('controllers.applicationFeedback').statusObserver(null, "Your message has been sent.");
        if (!this.get('rememberMessage')) {
            this.set("emailBody", "");
            this.set("emailSubject", "");

        }

        this.set('projectCategorySelection', 'Please Select One ...');
        this.set('timeframeSelection', 'Please Select One ...');
        this.set('projectBudgetSelection', 'Please Select One ...');
        this.set('projectExperienceSelection', 'Please Select One ...');
        this.set('showCate', false);
        this.closeContact();

    },
    dropdown: function(checking) {
        if (checking === "Category") {

            this.set('projectExperienceDropdown', false);
            this.set('projectTimeframeDropdown', false);
            this.set('projectBudgetDropdown', false);
            this.set('projectCategoryDropdown', !this.get('projectCategoryDropdown'));

        } else if (checking === "Timeframe") {

            this.set('projectExperienceDropdown', false);
            this.set('projectBudgetDropdown', false);
            this.set('projectCategoryDropdown', false);
            this.set('projectTimeframeDropdown', !this.get('projectTimeframeDropdown'));

        } else if (checking === "Budget") {

            this.set('projectExperienceDropdown', false);
            this.set('projectCategoryDropdown', false);
            this.set('projectTimeframeDropdown', false);
            this.set('projectBudgetDropdown', !this.get('projectBudgetDropdown'));

        } else if (checking === "Experience") {

            this.set('projectTimeframeDropdown', false);
            this.set('projectCategoryDropdown', false);
            this.set('projectBudgetDropdown', false);
            this.set('projectExperienceDropdown', !this.get('projectExperienceDropdown'));

        } else {
        }
    },
    canelDropDown: function()
    {
        this.set('projectCategoryDropdown', false);
        this.set('projectTimeframeDropdown', false);
        this.set('projectBudgetDropdown', false);
        this.set('projectExperienceDropdown', false);
    },
    nextSendingEmailProcess: function() {

        this.set('secondStepOfContactEmail', true);
        this.set('firstStepOfContactEmail', true);
        this.selectionCheckBox();

    },
    proviousSendingEmailProcess: function() {
        this.set('secondStepOfContactEmail', false);
        this.set('firstStepOfContactEmail', false);
    }
});
