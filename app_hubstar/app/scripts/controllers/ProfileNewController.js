
var passSubmit = true;
var counter = 2;
HubStar.ProfileNewController = Ember.ObjectController.extend({
    profile_name: "",
    categorySelection: "Category",
    subcategorySelection: "Subcategory",
    countrySelection: "Country",
    regionSelection: "Regoin/State",
    numberSelection: "-",
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
    imageMode: "",
    newStyleImageSource: "",
    newStyleImageName: "",
    backgroundSource: "",
    backgroundName: "",
    heroSource: "",
    heroName: "",
    pictureSource: "",
    pictureName: "",
    loadingTime: false,
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

        if (this.validateEmail($('.clientEmail').val())
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
                )

        {
            $('#clientEmail').attr('style', 'display:none');
            $('#admins').attr('style', 'display:none');
            $('#contactEmail').attr('style', 'display:none');
            $('#numberFormat').attr('style', 'display:none');
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
            document.getElementById('categorySelectionCheck').setAttribute("class", "error-textfield");
        } else {
            $('#categoryCheck').attr('style', 'display:none');
            document.getElementById('categorySelectionCheck').setAttribute("class", "");
        }
        if ($('#subcategorySelection').text() === "Subcategory") {
            //    passSubmit = false;
            $('#subcategoryCheck').attr('style', 'display:block');
            document.getElementById('subcategorySelectionCheck').setAttribute("class", "error-textfield");
        } else {
            $('#subcategoryCheck').attr('style', 'display:none');
            document.getElementById('subcategorySelectionCheck').setAttribute("class", "");
        }
        if ($('#countrySelection').text() === "Country") {
            //    passSubmit = false;
            $('#countryCheck').attr('style', 'display:block');
            document.getElementById('countrySelectionCheck').setAttribute("class", "error-textfield");
        } else {
            $('#countryCheck').attr('style', 'display:none');
            document.getElementById('countrySelectionCheck').setAttribute("class", "");
        }
        if ($('#regionSelection').text() === "Regoin/State") {
            //  passSubmit = false;
            $('#regionCheck').attr('style', 'display:block');
            document.getElementById('regionSelectionCheck').setAttribute("class", "error-textfield");

        } else {
            $('#regionCheck').attr('style', 'display:none');
            document.getElementById('regionSelectionCheck').setAttribute("class", "");
        }
        if ($('.contactEmail').val() === "") {
            //  passSubmit = false;
            $('#contactEmail').attr('style', 'display:block');
            $('#contactEmailFormat').attr('style', 'display:none');
            document.getElementById('contactEmailField').setAttribute("class", "error-textfield");
        }
        else if (this.validateEmail($('.contactEmail').val())) {
            $('#contactEmailFormat').attr('style', 'display:none');
            $('#contactEmail').attr('style', 'display:none');
            document.getElementById('contactEmailField').setAttribute("class", "");
        }
        else {
            $('#contactEmail').attr('style', 'display:none');
            $('#clientEmailFormat').attr('style', 'display:block');
            document.getElementById('contactEmailField').setAttribute("class", "error-textfield");
        }


        if (document.getElementById('secondEmail').style.display === "block") {
            console.log("start");
            if ($('.contactEmail2').val() === "") {
                //  passSubmit = false;
                console.log("none");
                $('#contactEmail2').attr('style', 'display:none');
                $('#contactEmailFormat2').attr('style', 'display:none');
                document.getElementById('contactEmailField2').setAttribute("class", "");
            }
            else
            {
                console.log("have");
                if (this.validateEmail($('.contactEmail2').val())) {
                    $('#contactEmailFormat2').attr('style', 'display:none');
                    $('#contactEmail2').attr('style', 'display:none');
                    document.getElementById('contactEmailField2').setAttribute("class", "");
                }
                else {
                    $('#contactEmailFormat2').attr('style', 'display:block');
                    $('#contactEmail2').attr('style', 'display:none');
                    document.getElementById('contactEmailField2').setAttribute("class", "error-textfield");
                }
            }
        }

        if (document.getElementById('thirdEmail').style.display === "block") {

            if ($('.contactEmail3').val() === "") {
                //  passSubmit = false;
                $('#contactEmail3').attr('style', 'display:none');
                $('#contactEmailFormat3').attr('style', 'display:none');
                document.getElementById('contactEmailField3').setAttribute("class", "");
            }
            else
            {
                if (this.validateEmail($('.contactEmail3').val())) {
                    $('#contactEmailFormat3').attr('style', 'display:none');
                    $('#contactEmail3').attr('style', 'display:none');
                    document.getElementById('contactEmailField3').setAttribute("class", "");
                }
                else {
                    $('#contactEmailFormat3').attr('style', 'display:block');
                    $('#contactEmail3').attr('style', 'display:none');
                    document.getElementById('contactEmailField3').setAttribute("class", "error-textfield");
                }
            }

        }
        for (var i = 1; i < counter; i++) {

            if ($("#admins_" + i).val() === "") {
                $('#adminEmail_' + i).attr('style', 'display:block');
                $('#adminsEmailFormat_' + i).attr('style', 'display:none');
                document.getElementById('adminsField_' + i).setAttribute("class", "error-textfield");
            }
            else if (this.validateEmail($("#admins_" + i).val())) {
                $('#adminsEmailFormat_' + i).attr('style', 'display:none');
                $('#adminEmail_' + i).attr('style', 'display:none');
                document.getElementById('adminsField_' + i).setAttribute("class", "");
                var value;
                if (i === 1) {
                    value = $("#admins_" + 1).val();
                } else if (i > 1) {
                    value = value + "," + $("#admins_" + i).val();
                }
            }
            else {
                $('#adminEmail_' + i).attr('style', 'display:none');
                $('#adminsEmailFormat_' + i).attr('style', 'display:block');
                document.getElementById('adminsField_' + i).setAttribute("class", "error-textfield");
            }
        }

        this.set("editors", value);

        if ($('.contactNumber').val() === "") {
            $('#numberFormat').attr('style', 'display:none');
            document.getElementById('numberField').setAttribute("class", "");

        } else if ($('.contactNumber').val() !== "") {
            if (this.numberChecking("#numberFormat", $('.contactNumber').val())) {
                //   passSubmit = false;
                $('#numberFormat').attr('style', 'display:none');
                document.getElementById('numberField').setAttribute("class", "");
            }
            else {
                $('#numberFormat').attr('style', 'display:block');
                document.getElementById('numberField').setAttribute("class", "error-textfield");
            }
        }
        if ($('.background').val() === "") {

            this.set('profile_bg_url', "https://s3-ap-southeast-2.amazonaws.com/develop.devbox/profile_bg/default/defaultbg6.jpg");

        }
        if ($('.hero').val() === "") {
            this.set('profile_hero_url', "https://s3-ap-southeast-2.amazonaws.com/develop.devbox/profile_cover/default/defaultcover4.jpg");

        }
        if ($('.picture').val() === "") {

            this.set('profile_pic_url', "https://s3-ap-southeast-2.amazonaws.com/develop.devbox/profile_pic/default/defaultpic1.jpg");

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
    addTRmore: function() {

        if (counter <= 6) {
            var newdiv = document.createElement('tr');
            newdiv.innerHTML = "<td></td><td><div style='display: block;'><div id='adminsField_" + counter
                    + "'"
                    + "style='margin: 10px 30px 5px 10px;;width: 70%;'>"
                    + "<input id='admins_" + counter + "'" + "type='text' placeholder='emailaddress@yourdomain.com'></div></div>"
                    + "<div class='mustfill' id='adminsEmailFormat_" + counter
                    + "'"
                    + "style='display: none'>not correct email format.....</div>"
                    + "<div class='mustfull' id='adminEmail_" + counter
                    + "'"
                    + "style='display: none'>please fill in info... </div>"
                    + "</td>";
            //+"<td><button type='button' onclick='var el = document.getElementById('adminsField_2');el.parentNode.removeChild(el);'>Delete item</button></td>";
            document.getElementById("step3").appendChild(newdiv);
            counter++;
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
                profile_editors: this.get("owner") + "," + this.get("editors"),
                profile_contact_number: "(" + $('#numberSelection').text() + ")" + " " + this.get("profile_contact_number"),
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
                profile_keywords_num: this.get("keywordNumber"),
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
            that.set('loadingTime', true);
            newMegaNewModel.addObserver('isDirty', function() {
                if (!newMegaNewModel.get('isDirty')) {

                    that.transitionToRoute('profile', newProfile);


                } else {
                }

            });

        }
var that = this;
        setTimeout(function() {
            that.imageModeSelection();
            location.href = "#/profiles/" + that.get("profile_url");
            location.reload();
        }, 100);

        that.set('loadingTime', false);


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

    },
    profileNewBackgroundDrop: function(e, name) {
        var target = getTarget(e, "single");
        var src = target.result;

        this.set('backgroundSource', src);
        this.set('profile_bg_url', name);
        this.set("backgroundName", name);

    },
    profileNewHeroDrop: function(e, name) {
        var target = getTarget(e, "single");
        var src = target.result;

        this.set('heroSource', src);
        this.set('profile_hero_url', name);
        this.set("heroName", name);

    },
    profileNewPictureDrop: function(e, name) {
        var target = getTarget(e, "single");
        var src = target.result;

        this.set('pictureSource', src);
        this.set('profile_pic_url', name);
        this.set("pictureName", name);

    },
    imageModeSelection: function() {

        if ($('.background').val() !== "") {

            this.set("imageMode", "Background");
            this.set("newStyleImageSource", this.get("backgroundSource"));
            this.set("newStyleImageName", this.get("backgroundName"));
            this.imageSave();
        }
        if ($('.hero').val() !== "") {

            this.set("imageMode", "Profile Hero");
            this.set("newStyleImageSource", this.get("heroSource"));
            this.set("newStyleImageName", this.get("heroName"));
            this.imageSave();
        }
        if ($('.picture').val() !== "") {

            this.set("imageMode", "Profile Picture");
            this.set("newStyleImageSource", this.get("pictureSource"));
            this.set("newStyleImageName", this.get("pictureName"));
            this.imageSave();
        }
    },
    imageSave: function() {
        console.log("hehe for the image saving issue");
        if (this.get('newStyleImageSource') !== null && this.get('newStyleImageSource') !== "")
        {
            var data = {"newStyleImageSource": this.get('newStyleImageSource'),
                'newStyleImageName': this.get('newStyleImageName'),
                'mode': this.get('imageMode').replace(" ", "_").toLowerCase(),
                'id': this.get("profile_url")};
            requiredBackEnd('meganews', 'updateStyleImage', data, 'POST', function(params) {


            });

        }





    }

});

