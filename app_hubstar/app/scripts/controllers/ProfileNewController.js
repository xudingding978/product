
var passSubmit = true;
var multiEmail1 = true;
var multiEmail2 = true;
HubStar.ProfileNewController = Ember.ObjectController.extend({
    profile_name: "",
    categorySelection: "Apartment Design",
    subcategorySelection: "Bathroom",
    countrySelection: "",
    regionSelection: "",
    numberSelection: "021",
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
    region: "Auckland",
    creater: "",
    editors: "",
    country: "New Zealand",
    boost: "",
    profile_package: "",
    profile_contact_number: "",
    //  secondary_email: "",
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
    multiEmailChecking: function(cleanEmail, divInfo, multiEmail) {


        if (cleanEmail.indexOf(',') === -1) {
            if (this.validateEmail(cleanEmail)) {

                multiEmail = true;
                $(divInfo).attr('style', 'display:none');
            } else {
                multiEmail = false;
                $(divInfo).attr('style', 'display:block');
            }

        } else {
            multiEmail = true;
            var emails = cleanEmail.split(',');
            for (var i = 0; i < emails.length; i++) {

                if (!this.validateEmail(emails.objectAt(i))) {
                    multiEmail = false;
                    $(divInfo).attr('style', 'display:block');
                }
            }
            if (multiEmail) {

                $(divInfo).attr('style', 'display:none');
            }

        }
        return multiEmail;
    },
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

        multiEmail2 = this.multiEmailChecking($('.admins').val(), '#emailFormat6', multiEmail2);
        //  var boost = this.numberChecking('#number1', $('.mustFill7').val());

        if ($('.profileName').val() !== "" && $('.country').val() !== "" && $('.region').val() !== "" && $('.clientEmail').val() !== "" && multiEmail1
                && $('.contactEmail').val() !== "" && $('.admins').val() !== "" && multiEmail2
                && this.validateEmail($('.clientEmail').val())) {
            passSubmit = true;
        } else {
            passSubmit = false;
        }

        if (this.specialCharactersChecking(this.spaceChecking(this.get("profile_url")))) {

            $('#invalide').attr('style', 'display:none');
        } else {

            $('#invalide').attr('style', 'display:block');
            passSubmit = false;
        }
        if (this.validateEmail($('.clientEmail').val())) {

            $('#clientEmailFormat').attr('style', 'display:none');
        } else {

            $('#clientEmailFormat').attr('style', 'display:block');
        }

//        if (this.validateEmail($('.mustFill5').val())) {
//
//            $('#emailFormat5').attr('style', 'display:none');
//        } else {
//
//            $('#emailFormat5').attr('style', 'display:block');
//        }
//        if ($('.region').val() === "") {
//
//            $('#region').attr('style', 'display:block');
//        } else {
//            $('#region').attr('style', 'display:none');
//        }
//
//        if ($('.country').val() === "") {
//
//            $('#country').attr('style', 'display:block');
//        } else {
//            $('#country').attr('style', 'display:none');
//        }

        if ($('.profileName').val() === "") {

            $('#profileName').attr('style', 'display:block');
        } else {
            $('#profileName').attr('style', 'display:none');
        }

        this.set("country", $('#country').val());
        this.set("region", $('#state').val());

        this.set("profile_url", this.get("profile_name") + "-" + this.get("country") + "-" + this.get("region"));
        console.log(this.get("profile_url"));


        if ($('.clientEmail').val() === "") {
            $('#clientEmailFormat').attr('style', 'display:none');
            $('#clientEmail').attr('style', 'display:block');
        } else {
            $('#clientEmail').attr('style', 'display:none');
        }
        if ($('.contactEmail').val() === "") {

            $('#contactEmail').attr('style', 'display:block');
        } else {
            $('#contactEmail').attr('style', 'display:none');
        }
//        if ($('.mustFill5').val() === "") {
//
//            $('#emailFormat5').attr('style', 'display:none');
//            $('#mustFill5').attr('style', 'display:block');
//        } else {
//            $('#mustFill5').attr('style', 'display:none');
//        }
//
        if ($('.admins').val() === "") {

            $('#admins').attr('style', 'display:block');
        } else {
            $('#admins').attr('style', 'display:none');
        }
//
//        if ($('.mustFill7').val() === "") {
//
//            $('#mustFill7').attr('style', 'display:block');
//        } else {
//            $('#mustFill7').attr('style', 'display:none');
//        }

        if ($('.background').val() === "") {

            this.set('profile_bg_url', "https://s3-ap-southeast-2.amazonaws.com/develop.devbox/profile_bg/default/defaultbg6.jpg");
        }
        if ($('.hero').val() === "") {

            this.set('profile_hero_url', "https://s3-ap-southeast-2.amazonaws.com/develop.devbox/profile_cover/default/defaultcover4.jpg");
        }
        if ($('.picture').val() === "") {

            this.set('profile_pic_url', "https://s3-ap-southeast-2.amazonaws.com/develop.devbox/profile_pic/default/defaultpic1.jpg");
        }
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
            var newMegaNewModel = HubStar.store.createRecord(HubStar.Meganew, {//15
                "id": this.spaceChecking(this.get("profile_url").toLowerCase()),
                "type": "profile",
                accessed: null,
                //   boost: this.get("boost"),
                is_active: "true",
                is_indexed: "true",
                category: $('#categorySelection').text(),
                subcategories: $('#subcategorySelection').text(),
                created: "",
                creator: this.get("creater"),
                country: this.get("country"),
                region: this.get("region"),
                domains: getDomain(),
                editors: this.get("editors"),
                keywords: this.get("keywords"),
                owner_type: "profiles", // profiles or user can upload files, this could help to link back to their profile.
                owner_profile_pic: "https://s3-ap-southeast-2.amazonaws.com/develop.devbox/profile_pic/default/defaultpic1.jpg",
                owner_title: this.get("profile_name"), //profile name
                owner_id: this.get("profile_url"), //profile id
                owner_contact_email: this.get("direct_enquiry_emails"),
//                owner_contact_cc_emails: this.get("secondary_email"),
//                owner_contact_bcc_emails: this.get("direct_enquiry_provide_email"),
                updated: ""
            });

            var newProfile = HubStar.store.createRecord(HubStar.Profile, {
                id: this.spaceChecking(this.get("profile_url").toLowerCase()),
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
                profile_contact_number: $('#numberSelection').text() + this.get("profile_contact_number"),
                owner_contact_email: this.get("direct_enquiry_emails"),
//                owner_contact_cc_emails: this.get("secondary_email"),
//                owner_contact_bcc_emails: this.get("direct_enquiry_provide_email"),
                profile_category: $('#categorySelection').text(),
                profile_subcategory: $('#subcategorySelection').text(),
                profile_physical_address: this.get("address"),
                profile_suburb: this.get("suburb"),
                profile_keywords: this.get("keywords"),
                profile_regoin: this.get("region"),
                profile_country: this.get("country"),
                profile_hours: "Monday=9:00am-5:00pm,Tuesday=9:00am-5:00pm,Wednesday=9:00am-5:00pm,Thursday=9:00am-5:00pm,Friday=9:00am-5:00pm,Saturday=closed,Sunday=closed,Holidays=closed",
                phone_number: "(" + $('#numberSelection').text() + ")"+ " " + this.get("profile_contact_number"),
                profile_partner_ids: null,
           //     collections: [],
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
            this.set("profile_package", "gold");

        } else if (checking === "silver") {

            console.log("silver");
            this.set("profile_package", "silver");

        } else if (checking === "bronze") {

            console.log("bronze");
            this.set("profile_package", "bronze");

        }

    }



});

