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
        needs: ["mega"],
        setSelectedMega: function(id)
        {
            this.set("currentUser", App.User.find(localStorage.loginStatus));
            this.set("displayName", this.get("currentUser").get("first_name") + " " + this.get("currentUser").get("last_name"));
            this.set("displayEmail", this.get("currentUser").get("email"));
            this.set("selectedMega", App.Mega.find(id));
            this.set("emailDestination", this.get("selectedMega").get("owner_contact_email"));
            this.set("emaiCCDestination", this.get("selectedMega").get("owner_contact_cc_emails"));
            this.set("emaiBCCDestination", this.get("selectedMega").get("owner_contact_bcc_emails"));
            console.log(this.get("selectedMega"));
            console.log(this.get("emailDestination"));
        },
        closeContact: function() {
            var megaController = this.get("controllers.mega");
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
                "emaiBCCDestination": this.get("emaiBCCDestination")
            });
            tempEmail.store.commit();
            this.closeContact();
        },
        dropdown: function(checking) {
            if (checking === "category") {
                console.log(checking);
                this.set('toggleDropdown1', !this.get('toggleDropdown1'));

            } else if (checking === "Timeframe") {
                console.log(checking);
                this.set('toggleDropdown2', !this.get('toggleDropdown2'));

            } else if (checking === "Budget") {
                console.log(checking);
                this.set('toggleDropdown3', !this.get('toggleDropdown3'));

            } else if (checking === "Experience") {
                console.log(checking);
                this.set('toggleDropdown4', !this.get('toggleDropdown4'));

            } else {


            }

        }

    });

    return ContactController;
});
