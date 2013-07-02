define([
    'ember'
], function(Ember) {


    var ContactController = Ember.Controller.extend({
        dropdownCategory: "category",
        dropdownTimeframe: "Timeframe",
        dropdownBudget: "Budget",
        dropdownExperience: "Experience",
        selectedMega: null,
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
        emaiBCCDestination: null,
        projectCategory: null,
        projectTimeframe: null,
        projectBudget: null,
        projectExperience: null,
        needs: ["mega"],
        setSelectedMega: function(id)
        {
            this.set("currentUser", App.User.find(localStorage.loginStatus));
            this.set("displayName", this.get("currentUser").get("first_name") + " " + this.get("currentUser").get("last_name"));
            this.set("displayEmail", this.get("currentUser").get("email"));
            this.set("selectedMega", App.Mega.find(id));
            this.set("emailDestination", this.get("selectedMega").get("owner_contact_email"));
            this.set("emaiCCDestination", this.get("selectedMega").get("owner_contact_cc_emails"));
        },
        closeContact: function() {
            var megaController = this.get("controllers.mega");
            this.set('projectCategoryDropdown', false);
            this.set('projectTimeframeDropdown', false);
            this.set('projectBudgetDropdown', false);
            this.set('projectExperienceDropdown', false);
            megaController.closeContact();
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
            var tempEmail = App.Email.createRecord({
                "displayName": this.get("displayName"),
                "displayEmail": this.get("displayEmail"),
                "emailBody": this.get("emailBody"),
                "emailSubject": this.get("emailSubject"),
                "emailDestination": this.get("emailDestination"),
                "emaiCCDestination": this.get("emaiCCDestination"),
                "emaiBCCDestination": this.get("emaiBCCDestination"),
                "projectCategory": $('#dropdownCategory').text().trim(),
                "projectTimeframe": $('#dropdownTimeframe').text().trim(),
                "projectBudget": $('#dropdownBudget').text().trim(),
                "projectExperience": $('#dropdownExperience').text().trim()
            });
            tempEmail.store.commit();
            this.closeContact();
        },
        dropdown: function(checking) {
            if (checking === "category") {
            //    console.log(checking);
                this.set('projectExperienceDropdown', false);
                this.set('projectTimeframeDropdown', false);
                this.set('projectBudgetDropdown', false);
                this.set('projectCategoryDropdown', !this.get('projectCategoryDropdown'));

            } else if (checking === "Timeframe") {
          //      console.log(checking);
                this.set('projectExperienceDropdown', false);
                this.set('projectBudgetDropdown', false);
                this.set('projectCategoryDropdown', false);
                this.set('projectTimeframeDropdown', !this.get('projectTimeframeDropdown'));

            } else if (checking === "Budget") {
         //       console.log(checking);
                this.set('projectExperienceDropdown', false);
                this.set('projectCategoryDropdown', false);
                this.set('projectTimeframeDropdown', false);
                this.set('projectBudgetDropdown', !this.get('projectBudgetDropdown'));

            } else if (checking === "Experience") {
         //       console.log(checking);
                this.set('projectTimeframeDropdown', false);
                this.set('projectCategoryDropdown', false);
                this.set('projectBudgetDropdown', false);
                this.set('projectExperienceDropdown', !this.get('projectExperienceDropdown'));

            } else {
            }
        }

    });

    return ContactController;
});
