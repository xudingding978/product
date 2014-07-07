
var passSubmit = true;
var counter = 3;
HubStar.ProfileNewController = Ember.Controller.extend({
    profile_name: "",
    categorySelection: "Category",
    subcategorySelection: "Subcategory",
    countrySelection: "Country",
    regionSelection: "Region/State",
    numberSelection: "-",
    keywordNumber: "5",
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
    editors: "",
    boost: null,
    profile_package: "",
    profile_contact_number: "",
    profile_bg_url: "",
    profile_hero_url: "",
    profile_pic_url: "",
    keywords: "",
    imageMode: "",
    loadingNewTime: false,
    classification: "",
    categorys: [],
    subcate: [],
    needs: ['profile', 'applicationFeedback', 'application'],
    init: function()
    {
        this.setTopicModel(HubStar.Cate.find({}));
        
         
        
        
    },
    validateEmail: function(email)
    {

        var re = /\S+@\S+\.\S+/;
        return re.test(email);
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
        if (
                $('.clientName').val() !== ""
                && $('.profileName').val() !== ""
                && $('.clientEmail').val() !== ""
                && $('#categorySelection').text() !== "Category"
                && $('#subcategorySelection').text() !== "Subcategory"
                && $('#countrySelection').text() !== "Country"
//                && $('#regionSelection').text() !== "Region/State"
                && $('#contactEmail').val() !== ""
                && $('#admins_1').val() !== ""
                && this.get("classification") !== ""
                && this.validateEmail($('.contactEmail').val())
                && this.validateEmail($('.admins').val())
                && this.validateEmail($('.clientEmail').val())

                //   && this.numberChecking("#numberFormat", $('.contactNumber').val())
                )

        {

            passSubmit = true;
            $('#errorMessage1').attr('style', 'display:none');
            $('#errorMessage2').attr('style', 'display:none');
            $('#errorMessage3').attr('style', 'display:none');
            $('#errorMessage4').attr('style', 'display:none');
            $('#errorMessage5').attr('style', 'display:none');
            $('#errorMessage6').attr('style', 'display:none');
            $('#numberFormat').attr('style', 'display:none');
            $('#errorMessage7').attr('style', 'display:none');
        }

        else {
            passSubmit = false;
        }

        if (this.validateEmail($('.clientEmail').val())) {
            $('#errorMessage2').attr('style', 'display:none');
            $('#clientEmailFormat').attr('style', 'display:none');
            $('#clientEmailField').removeClass("error-textfield");
        }
        else if ($('.clientEmail').val() === "") {
            $('#clientEmailFormat').attr('style', 'display:none');
            $('#errorMessage2').attr('style', 'display:block');
            $('#clientEmailField').addClass("error-textfield");
        }
        else {
            $('#clientEmailFormat').addClass('profileNew-format-error');
            $('#errorMessage2').attr('style', 'display:none');
            $('#clientEmailField').addClass("error-textfield");
        }
        if ($('.clientName').val() === "") {
            $('#errorMessage1').attr('style', 'display:block');
            $('#clientNameField').addClass("error-textfield");
        }
        else {
            $('#errorMessage1').attr('style', 'display:none');
            $('#clientNameField').removeClass("error-textfield");
        }
        if ($('.profileName').val() === "") {
            $('#errorMessage3').attr('style', 'display:block');
            $('#profileNameField').addClass("error-textfield");
        } else {
            $('#errorMessage3').attr('style', 'display:none');
            $('#profileNameField').removeClass("error-textfield");

        }
        if ($('#categorySelection').text() === "Category") {
            $('#errorMessage4').attr('style', 'display:block');
            $('#categorySelectionCheck').addClass("error-textfield");
        } else {
            $('#errorMessage4').attr('style', 'display:none');
            $('#categorySelectionCheck').removeClass("error-textfield");
        }
        if ($('#subcategorySelection').text() === "Subcategory") {
            $('#errorMessage4').attr('style', 'display:block');
            $('#subcategorySelectionCheck').addClass("error-textfield");
        } else {
            $('#errorMessage4').attr('style', 'display:none');
            $('#subcategorySelectionCheck').removeClass("error-textfield");
        }
        if ($('#countrySelection').text() === "Country") {
            $('#errorMessage4').attr('style', 'display:block');
            $('#countrySelectionCheck').addClass("error-textfield");
        } else {
            $('#errorMessage4').attr('style', 'display:none');
            $('#countrySelectionCheck').removeClass("error-textfield");
        }
        if ($('#regionSelection').text() === "Region/State") {
            
            $('.dashdiv').attr('style','display:none');
            $('#errorMessage4').attr('style', 'display:block');
 //           $('#regionSelectionCheck').addClass("error-textfield");

        } else { 
            $('.dashdiv').attr('style','display:block');
            $('#errorMessage4').attr('style', 'display:none');
            $('#regionSelectionCheck').removeClass("error-textfield");
        }
        if ($('#contactEmail').val() === "") {
            $('#errorMessage5').attr('style', 'display:block');
            $('#contactEmailFormat').attr('style', 'display:none');
            $('#contactEmailField').addClass("error-textfield");
        }
        else if (this.validateEmail($('#contactEmail').val())) {
            $('#contactEmailFormat').attr('style', 'display:none');
            $('#errorMessage5').attr('style', 'display:none');
            $('#contactEmailField').removeClass("error-textfield");
        }
        else {
            $('#errorMessage5').attr('style', 'display:none');
            $('#contactEmailFormat').addClass('profileNew-format-error');
            $('#contactEmailField').addClass("error-textfield");
        }
        if (this.get("classification") === "")
        {
            $('#errorMessage7').attr('style', 'display:block');
            $('#residential').addClass("error-textfield");
            $('#commercial').addClass("error-textfield");

        }
        else {
            $('#errorMessage7').attr('style', 'display:none');
            $('#residential').removeClass("error-textfield");
            $('#commercial').removeClass("error-textfield");
        }

        if ($("#admins_1").val() === "") {
            $('#errorMessage6').attr('style', 'display:block');
            $('#adminsEmailFormat_1').attr('style', 'display:none');
            $('#adminsField_1').addClass("error-textfield");
        }
        else if (this.validateEmail($("#admins_1").val())) {
            $('#adminsEmailFormat_1').attr('style', 'display:none');
            $('#errorMessage6').attr('style', 'display:none');
            $('#adminsField_1').removeClass("error-textfield");

            var value = $("#admins_1").val();
        }
        else {
            $('#errorMessage6').attr('style', 'display:none');
            $('#adminsEmailFormat_1').addClass('profileNew-format-error');
            if (document.getElementById('adminsField_1') !== null)
                $('#adminsField_1').addClass("error-textfield");
        }


        if (document.getElementById('secondEmail').style.display === "table-row") {


            if (this.validateEmail($('#contactEmail2').val())) {
                $('#contactEmailFormat2').attr('style', 'display:none');
                $('#contactEmailField2').removeClass("error-textfield");
            }
            else if ($('#contactEmail2').val() === "") {
                $('#contactEmailFormat2').attr('style', 'display:none');
                $('#contactEmailField2').removeClass("error-textfield");
            }
            else {
                $('#contactEmailFormat2').addClass('profileNew-format-error');
                $('#contactEmailField2').addClass("error-textfield");

            }

        }

        if (document.getElementById('thirdEmail').style.display === "table-row") {


            if (this.validateEmail($('#contactEmail3').val())) {
                $('#contactEmailFormat3').attr('style', 'display:none');
                $('#contactEmailField3').removeClass("error-textfield");
            }
            else if ($('#contactEmail3').val() === "") {
                $('#contactEmailFormat3').attr('style', 'display:none');
                $('#contactEmailField3').removeClass("error-textfield");
            }
            else {
                $('#contactEmailFormat3').addClass('profileNew-format-error');
                $('#contactEmailField3').addClass("error-textfield");

            }

        }
        for (var i = 2; i < counter; i++) {

            if ($("#admins_" + i).val() === "") {
                $('#errorMessage6').attr('style', 'display:none');
                $('#adminsEmailFormat_' + i).attr('style', 'display:none');
                $('#adminsField_' + i).removeClass("error-textfield");
            }
            else if (this.validateEmail($("#admins_" + i).val())) {
                $('#adminsEmailFormat_' + i).attr('style', 'display:none');
                $('#errorMessage6').attr('style', 'display:none');
                $('#adminsField_' + i).removeClass("error-textfield");
                var value1 = value1 + "," + $("#admins_" + i).val();

            }
            else {
                $('#errorMessage6').attr('style', 'display:none');
                $('#adminsEmailFormat_' + i).addClass('profileNew-format-error');
                if (document.getElementById('adminsField_' + i) !== null)
                    $('#adminsField_' + i).addClass("error-textfield");
            }
        }

        this.set("editors", value);

        if ($('.contactNumber').val() !== "") {
            if (this.numberChecking("#numberFormat", $('.contactNumber').val())) {
                $('#numberFormat').attr('style', 'display:none');
                $('#numberField').removeClass("error-textfield");
            }
            else {
                $('#numberFormat').attr('style', 'display:block');
                $('#numberField').addClass("error-textfield");
            }
        }

        if ($('#regionSelection').text() === "Region/State") {
            this.set("profile_url", this.spaceChecking(this.get("profile_name").toLowerCase().replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '')) + "-" + this.spaceChecking($('#countrySelection').text().toLowerCase()));

        } else {

            this.set("profile_url", this.spaceChecking(this.get("profile_name").toLowerCase().replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '')) + "-" + this.spaceChecking($('#regionSelection').text().toLowerCase()) + "-" + this.spaceChecking($('#countrySelection').text().toLowerCase()));

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
    addTRmore: function() {

        if (counter <= 7) {
            var newdiv = document.createElement('tr');
            newdiv.innerHTML = "<div class='table-cell align-right'></div><div class='table-cell'><div style='display: block;'><div id='adminsField_" + counter
                    + "'"
                    + "class='profilenew-inputarea2 display-inline'>"
                    + "<input id='admins_" + counter + "'" + "type='text' class='admins' placeholder='emailaddress@yourdomain.com'></div>"
                    + "<div id='remove_" + counter + "'" + "style='display: inline-block; padding:4px;'><i class='fa fa-minus' ></i></div></div>"
                    + "<div class='mustfull display-none' id='adminsEmailFormat_" + counter
                    + "'"
                    + ">not correct email format.....</div>"
                    + "</div>";
            document.getElementById("step3").appendChild(newdiv);
            var remove = $("#remove_" + counter);
            remove.click(function() {
                $(this).parent().parent().parent().remove();
                counter = counter - 1;
            });
            counter++;
        }


    },
    save: function() {
        this.fillInChecking();
        if (passSubmit) {

            var newMegaNewModel = HubStar.Meganew.createRecord({
                "id": this.get("profile_url"),
                "type": "profile",
                boost: this.get("keywordNumber"),
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


            //newMegaNewModel.get("profile").pushObject(newProfile);

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


//                    newMegaNewModel.addObserver('isDirty', function() {
//                        if (!newMegaNewModel.get('isDirty')) {
//                            newProfile.store.save();
//                            //that.transitionToRoute('profile', newProfile);
//                            //location.href = "#/profiles/" + that.get("profile_url");
//                            //location.reload();
//                        } else {
//                        }
//
//                    });

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
    classSelection: function(checking) {
        // console.log("aaa");

        if (checking === "Residential") {
            $("#residential").addClass("selected easing");
            $("#commercial").removeClass("selected easing");
            this.set("classification", "residential");
        } else if (checking === "Commercial") {
            $("#residential").removeClass("selected easing");
            $("#commercial").addClass("selected easing");
            this.set("classification", "commercial");
        }

    },
    packageSelection: function(checking) {

        if (checking === "gold") {

            this.set("profile_package", "Gold");
            this.set("keywordNumber", "100");
            $("#gold").removeClass("hover-opacity easing");
            $("#silver").addClass("hover-opacity easing");
            $("#bronze").addClass("hover-opacity easing");

        } else if (checking === "silver") {

            this.set("profile_package", "Silver");
            this.set("keywordNumber", "50");
            $("#gold").addClass("hover-opacity easing");
            $("#silver").removeClass("hover-opacity easing");
            $("#bronze").addClass("hover-opacity easing");
        } else if (checking === "bronze") {

            this.set("profile_package", "Bronze");
            this.set("keywordNumber", "25");
            $("#gold").addClass("hover-opacity easing");
            $("#silver").addClass("hover-opacity easing");
            $("#bronze").removeClass("hover-opacity easing");
        }


    }
});

