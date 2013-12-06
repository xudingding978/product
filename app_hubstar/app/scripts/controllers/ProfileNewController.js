
var passSubmit = true;
//var multiEmail2 = true;
HubStar.ProfileNewController = Ember.ObjectController.extend({
    profile_name: "",
    categorySelection: "Category",
    subcategorySelection: "Subcategory",
    countrySelection: "Country",
    regionSelection: "Regoin/State",
    numberSelection: "021",
    keywordNumber: "",
    heroImage: false,
    profile_url: "",
    first_name: "",
    last_name: "",
    address: "",
    suburb: "",
    categoryDropdown: false,
    subcategoryDropdown: false,
    countryDropdown: false,
    regionDropdown: false,
    numberDropdown: false,
    contact_number: "",
    website: "",
    website_url: "",
    client_name: "",
    owner: "",
    direct_enquiry_emails: "",
    direct_enquiry_emails_2: "",
    direct_enquiry_emails_3: "",
    creater: "",
    editors: "",
    boost: "",
    profile_package: "",
    profile_contact_number: "",
    direct_enquiry_provide_email: "",
    profile_bg_url: "",
    profile_hero_url: "",
    profile_pic_url: "",
    keywords: "",
    categorys: [],
    subcate: [],
    init: function()
    {
        this.setTopicModel(HubStar.Cate.find({}));
    },
    validateEmail: function(email)
    {

        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    },
//    multiEmailChecking: function(cleanEmail, divInfo, multiEmail) {
//
//
//        if (cleanEmail.indexOf(',') === -1) {
//            if (this.validateEmail(cleanEmail)) {
//
//                multiEmail = true;
//                $(divInfo).attr('style', 'display:none');
//            } else {
//                multiEmail = false;
//                $(divInfo).attr('style', 'display:block');
//            }
//
//        } else {
//            multiEmail = true;
//            var emails = cleanEmail.split(',');
//            for (var i = 0; i < emails.length; i++) {
//
//                if (!this.validateEmail(emails.objectAt(i))) {
//                    multiEmail = false;
//                    $(divInfo).attr('style', 'display:block');
//                }
//            }
//            if (multiEmail) {
//
//                $(divInfo).attr('style', 'display:none');
//            }
//
//        }
//        return multiEmail;
//    },
    numberChecking: function(divInfo, number) {
        var matches = number.match('^[0-9]+$');
        if (matches !== null) {
            $(divInfo).attr('style', 'display:none');
            return true;
        }
        $(divInfo).attr('style', 'display:block');
        return false;
    },
    specialCharactersChecking: function(str) {

        var re = /^[a-zA-Z-]*$/;
        return re.test(str);
    },
    spaceChecking: function(str) {

        if (str.indexOf(" ") !== -1) {
            str = str.split(' ').join('-');
        }
        return str;
    },
    fillInChecking: function() {

        // multiEmail2 = this.multiEmailChecking($('.admins').val(), '#emailFormat6', multiEmail2);

        if ($('.clientEmail').val() !== ""
                && $('.clientName').val() !== ""
                && $('.profileName').val() !== ""
                && $('#categorySelection').text() !== "Category"
                && $('#subcategorySelection').text() !== "Subcategory"
                && $('#countrySelection').text() !== "Country"
                && $('#regionSelection').text() !== "Regoin/State"
                && $('.contactEmail').val() !== ""
                && $('.admins').val() !== ""
                && this.validateEmail($('.contactEmail').val())
                && this.validateEmail($('.admins').val())  
                && this.numberChecking("#numberFormat", this.get("profile_contact_number"))
    )
        {
            passSubmit = true;
        }
        else {
            passSubmit = false;
        }

        if (this.validateEmail($('.clientEmail').val())) {
            $('#clientEmail').attr('style', 'display:none');
            $('#clientEmailFormat').attr('style', 'display:none');
            document.getElementById('clientEmailField').setAttribute("class", "");
        }
        else if ($('.clientEmail').val() === "") {
            $('#clientEmailFormat').attr('style', 'display:none');
            $('#clientEmail').attr('style', 'display:block');
            document.getElementById('clientEmailField').setAttribute("class", "error-textfield");
        }
        else {
            $('#clientEmailFormat').attr('style', 'display:block');
            $('#clientEmail').attr('style', 'display:none');
            document.getElementById('clientEmailField').setAttribute("class", "error-textfield");
        }
        if ($('.clientName').val() === "") {
            // passSubmit = false;
            $('#clientName').attr('style', 'display:block');
            console.log("hehe");
            document.getElementById('clientNameField').setAttribute("class", "error-textfield");
        }
        else {
            $('#clientName').attr('style', 'display:none');
            document.getElementById('clientNameField').setAttribute("class", "");

        }
        if ($('.profileName').val() === "") {
            //  passSubmit = false;
            $('#profileName').attr('style', 'display:block');
            document.getElementById('profileNameField').setAttribute("class", "error-textfield");
        } else {
            $('#profileName').attr('style', 'display:none');
            document.getElementById('profileNameField').setAttribute("class", "");

        }
        if ($('#categorySelection').text() === "Category") {
            //   passSubmit = false;
            $('#categoryCheck').attr('style', 'display:block');
        } else {
            $('#categoryCheck').attr('style', 'display:none');
        }
        if ($('#subcategorySelection').text() === "Subcategory") {
            //    passSubmit = false;
            $('#subcategoryCheck').attr('style', 'display:block');
        } else {
            $('#subcategoryCheck').attr('style', 'display:none');
        }
        if ($('#countrySelection').text() === "Country") {
            //    passSubmit = false;
            $('#countryCheck').attr('style', 'display:block');
        } else {
            $('#countryCheck').attr('style', 'display:none');
        }
        if ($('#regionSelection').text() === "Regoin/State") {
            //  passSubmit = false;
            $('#regionCheck').attr('style', 'display:block');
        } else {
            $('#regionCheck').attr('style', 'display:none');
        }
        if ($('.contactEmail').val() === "") {
            //  passSubmit = false;
            $('#contactEmail').attr('style', 'display:block');
            document.getElementById('contactEmailField').setAttribute("class", "error-textfield");
        }
        else if (this.validateEmail($('.contactEmail').val())) {
            $('#contactEmailFormat').attr('style', 'display:block');
            document.getElementById('contactEmailField').setAttribute("class", "error-textfield");
        }
        else {
            $('#contactEmail').attr('style', 'display:none');
            document.getElementById('contactEmailField').setAttribute("class", "");
        }
        if ($('.admins').val() === "") {
            //   passSubmit = false;
            $('#admins').attr('style', 'display:block');
            document.getElementById('adminsField').setAttribute("class", "error-textfield");
        }
        else if (this.validateEmail($('.admins').val())) {
            $('#adminsEmailFormat').attr('style', 'display:block');
            document.getElementById('adminsField').setAttribute("class", "error-textfield");
        }
        else {
            $('#admins').attr('style', 'display:none');
            document.getElementById('adminsField').setAttribute("class", "");
        }
        
        if (this.numberChecking("#numberFormat", this.get("profile_contact_number"))) {
            //   passSubmit = false;
            $('#numberFormat').attr('style', 'display:block');
            document.getElementById('numberField').setAttribute("class", "error-textfield");
        }

        if ($('.background').val() === "") {

            this.set('profile_bg_url', "https://s3-ap-southeast-2.amazonaws.com/develop.devbox/profile_bg/default/defaultbg6.jpg");
        }
        else {
            this.set('profile_bg_url', this.get("profile_bg_url"));
        }
        if ($('.hero').val() === "") {

            // this.set('heroImage', true);
            this.set('profile_hero_url', "https://s3-ap-southeast-2.amazonaws.com/develop.devbox/profile_cover/default/defaultcover4.jpg");
        }
         else {
            this.set('profile_hero_url', this.get("profile_hero_url"));
        }
        if ($('.picture').val() === "") {

            this.set('profile_pic_url', "https://s3-ap-southeast-2.amazonaws.com/develop.devbox/profile_pic/default/defaultpic1.jpg");
        } else {
            this.set('profile_pic_url', this.get("profile_pic_url"));
        }


        this.set("profile_url", this.spaceChecking(this.get("profile_name").toLowerCase()) + "-" + this.spaceChecking($('#regionSelection').text().toLowerCase()) + "-" + this.spaceChecking($('#countrySelection').text().toLowerCase()));
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
    save: function() {

        this.fillInChecking();
        if (passSubmit) {   
            var newMegaNewModel = HubStar.store.createRecord(HubStar.Meganew, {
                "id": this.get("profile_url"),
                "type": "profile",
                accessed: null,
                is_active: "true",
                is_indexed: "true",
                categories: $('#categorySelection').text(),
                subcategories: $('#subcategorySelection').text(),
                created: "",
                creator: this.get("creater"),
                country: $('#countrySelection').text(),
                region: $('#regionSelection').text(),
                domains: getDomain(),
                editors: this.get("editors"),
                keywords: this.get("keywords"),
                owner_type: "profiles", // profiles or user can upload files, this could help to link back to their profile.
                owner_profile_pic: "https://s3-ap-southeast-2.amazonaws.com/develop.devbox/profile_pic/default/defaultpic1.jpg",
                owner_title: this.get("profile_name"), //profile name
                owner_id: this.get("profile_url"), //profile id
                owner_contact_email: this.get("direct_enquiry_emails"),
                 owner_second_contact_email: this.get("direct_enquiry_emails_2"),
                  owner_third_contact_email: this.get("direct_enquiry_emails_3"),
                updated: ""
            });

            var newProfile = HubStar.store.createRecord(HubStar.Profile, {
                id: this.get("profile_url"),
                profile_name: this.get("profile_name"),
                profile_contact_last_name: this.get("last_name"),
                profile_contact_first_name: this.get("first_name"),
                profile_about_us: "<br>Welcome!<br>",
                profile_package_name: this.get("profile_package"),
                profile_bg_url: this.get("profile_bg_url"),
                profile_hero_url: this.get("profile_hero_url"),
                profile_pic_url: this.get("profile_pic_url"),
                owner: this.get("owner"),
                profile_creater: this.get("creater"),
                profile_editors: this.get("editors"),
                profile_contact_number:"(" + $('#numberSelection').text() + ")" + " " + this.get("profile_contact_number"),
                owner_contact_email: this.get("direct_enquiry_emails"),
                owner_second_contact_email: this.get("direct_enquiry_emails_2"),
                  owner_third_contact_email: this.get("direct_enquiry_emails_3"),
                profile_category: $('#categorySelection').text(),
                profile_subcategory: $('#subcategorySelection').text(),
                profile_physical_address: this.get("address"),
                profile_suburb: this.get("suburb"),
                profile_keywords: this.get("keywords"),
                profile_regoin: $('#regionSelection').text(),
                profile_country: $('#countrySelection').text(),
                profile_hours: "Monday=9:00am-5:00pm,Tuesday=9:00am-5:00pm,Wednesday=9:00am-5:00pm,Thursday=9:00am-5:00pm,Friday=9:00am-5:00pm,Saturday=closed,Sunday=closed,Holidays=closed",
                profile_partner_ids: null,
                profile_website_url: this.get("website_url"),
                profile_website: this.get("website")
            });


            newMegaNewModel.get("profile").addObject(newProfile);
            var that = this;
            newMegaNewModel.store.save();

            newMegaNewModel.addObserver('isDirty', function() {
                if (!newMegaNewModel.get('isDirty')) {

                    that.transitionToRoute('profile', newProfile);
                } else {
                }
            });
        }

    },
    dropdown: function(checking) {

        if (checking === "category") {
            this.set('countryDropdown', false);
            this.set('numberDropdown', false);
            this.set('regionDropdown', false);
            this.set('subcategoryDropdown', false);
            this.set('categoryDropdown', !this.get('categoryDropdown'));
        }
        else if (checking === "country") {
            this.set('categoryDropdown', false);
            this.set('numberDropdown', false);
            this.set('regionDropdown', false);
            this.set('subcategoryDropdown', false);
            this.set('countryDropdown', !this.get('countryDropdown'));
        }
        else if (checking === "region") {
            this.set('countryDropdown', false);
            this.set('numberDropdown', false);
            this.set('categoryDropdown', false);
            this.set('subcategoryDropdown', false);
            this.set('regionDropdown', !this.get('regionDropdown'));
        }
        else if (checking === "number") {
            this.set('countryDropdown', false);
            this.set('categoryDropdown', false);
            this.set('regionDropdown', false);
            this.set('subcategoryDropdown', false);
            this.set('numberDropdown', !this.get('numberDropdown'));
        }
        else if (checking === "subcategory") {
            this.set('categoryDropdown', false);
            this.set('numberDropdown', false);
            this.set('regionDropdown', false);
            this.set('countryDropdown', false);
            this.set('subcategoryDropdown', !this.get('subcategoryDropdown'));
        }
    },
    packageSelection: function(checking) {

        if (checking === "gold") {

            console.log("gold");
            this.set("profile_package", "Gold");
            this.set("keywordNumber", "100");

        } else if (checking === "silver") {

            console.log("silver");
            this.set("profile_package", "Silver");
            this.set("keywordNumber", "50");

        } else if (checking === "bronze") {

            console.log("bronze");
            this.set("profile_package", "Bronze");
            this.set("keywordNumber", "25");

        }

    }



});

