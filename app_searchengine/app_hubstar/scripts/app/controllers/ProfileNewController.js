define([
    'models/ProfileModel',
    'ember'],
        function(
                ProfileModel,
                Ember
                ) {
            var passSubmit = true;
            var multiEmail1 = true;
            var multiEmail2 = true;
            var ProfileNewController = Ember.ObjectController.extend({
                profile_name: "",
                dropdownCategory: "category",
                packgeSelection: "package",
                profile_url: "",
                first_name: "",
                last_name: "",
                address: "",
                projectCategoryDropdown: false,
                packgetDropdown: false,
                contact_number: "",
                website: "",
                client_name: "",
                owner: "",
                direct_enquiry_emails: "",
                creater: "",
                editors: "",
                boost: "",
                package: "",
                profile_contact_number:"",
                secondary_email: "",
                direct_enquiry_provide_email: "",
                profile_bg_url: "",
                profile_hero_url: "",
                profile_pic_url: "",
                keywords: "",
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
                fillInChecking: function() {

                    multiEmail2 = this.multiEmailChecking($('.mustFill6').val(), '#emailFormat6', multiEmail2);
                    var boost = this.numberChecking('#number1', $('.mustFill7').val());
                    console.log(boost);
                    if ($('.mustFill1').val() !== "" && $('.mustFill2').val() !== "" && $('.country').val() !== "" && $('.region').val() !== "" && $('.mustFill3').val() !== "" && multiEmail1
                            && $('.mustFill5').val() !== "" && $('.mustFill4').val() !== "" && $('.mustFill6').val() !== "" && boost && $('.mustFill7').val() !== "" && multiEmail2 && this.validateEmail($('.mustFill5').val())
                            && this.validateEmail($('.mustFill3').val())) {
                        passSubmit = true;
                    } else {
                        passSubmit = false;
                    }
                    if (this.validateEmail($('.mustFill3').val())) {

                        $('#emailFormat3').attr('style', 'display:none');
                    } else {

                        $('#emailFormat3').attr('style', 'display:block');
                    }

                    if (this.validateEmail($('.mustFill5').val())) {

                        $('#emailFormat5').attr('style', 'display:none');
                    } else {

                        $('#emailFormat5').attr('style', 'display:block');
                    }
                    if ($('.region').val() === "") {

                        $('#region').attr('style', 'display:block');
                    } else {
                        $('#region').attr('style', 'display:none');
                    }

                    if ($('.country').val() === "") {

                        $('#country').attr('style', 'display:block');
                    } else {
                        $('#country').attr('style', 'display:none');
                    }

                    if ($('.mustFill1').val() === "") {

                        $('#mustFill1').attr('style', 'display:block');
                    } else {
                        $('#mustFill1').attr('style', 'display:none');
                    }
                    if ($('.mustFill2').val() === "") {

                        $('#mustFill2').attr('style', 'display:block');
                    } else {
                        $('#mustFill2').attr('style', 'display:none');
                    }
                    if ($('.mustFill3').val() === "") {
                        $('#emailFormat3').attr('style', 'display:none');
                        $('#mustFill3').attr('style', 'display:block');
                    } else {
                        $('#mustFill3').attr('style', 'display:none');
                    }
                    if ($('.mustFill4').val() === "") {

                        $('#mustFill4').attr('style', 'display:block');
                    } else {
                        $('#mustFill4').attr('style', 'display:none');
                    }
                    if ($('.mustFill5').val() === "") {

                        $('#emailFormat5').attr('style', 'display:none');
                        $('#mustFill5').attr('style', 'display:block');
                    } else {
                        $('#mustFill5').attr('style', 'display:none');
                    }

                    if ($('.mustFill6').val() === "") {

                        $('#mustFill6').attr('style', 'display:block');
                    } else {
                        $('#mustFill6').attr('style', 'display:none');
                    }

                    if ($('.mustFill7').val() === "") {

                        $('#mustFill7').attr('style', 'display:block');
                    } else {
                        $('#mustFill7').attr('style', 'display:none');
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
                },
//                IsValidImageUrl: function(url) {
//                    $("<img>", {
//                        src: url,
//                        error: function() {
//                            alert(url + ': ' + false);
//                        },
//                        load: function() {
//                            alert(url + ': ' + true);
//                        }
//                    });
//                },
                save: function() {

                    this.fillInChecking();
                    if (passSubmit) {


                        var newMega = App.store.createRecord(App.Mega, {//15
                            "id": this.get("profile_url"),
                            "type": "profile",
                            accessed: null,
                            boost: this.get("boost"),
                            is_active: "true",
                            is_indexed: "true",
                            category: $('#dropdownCategory').text(),
                            created: new Date(),
                            creator: this.get("creater"),
                            country: this.get("country"),
                            region: this.get("region"),
                            domains: document.domain,
                            keywords: this.get("keywords"),
                            owner_type: "profiles", // profiles or user can upload files, this could help to link back to their profile.
                            owner_profile_pic: "https://s3-ap-southeast-2.amazonaws.com/develop.devbox/profile_pic/default/defaultpic1.jpg",
                            owner_title: this.get("profile_name"), //profile name
                            owner_id: this.get("profile_url"), //profile id
                            owner_contact_email: this.get("direct_enquiry_emails"),
                            owner_contact_cc_emails: this.get("secondary_email"),
                            owner_contact_bcc_emails: this.get("direct_enquiry_provide_email"),
                            updated: new Date()
                        });
                        var newProfile = App.store.createRecord(App.Profile, {
                            id: this.get("profile_url"),
                            profile_name: this.get("profile_name"),
                            profile_contact_last_name: this.get("last_name"),
                            profile_contact_first_name: this.get("first_name"),
                            profile_about_us: null,
                            profile_package_name: $('#packgeSelection').text(),
                            profile_bg_url: this.get("profile_bg_url"),
                            profile_hero_url: this.get("profile_hero_url"),
                            profile_pic_url: this.get("profile_pic_url"),
                            owner: this.get("owner"),
                            profile_creater: this.get("creater"),
                            profile_contact_number: this.get("profile_contact_number"),
                            owner_contact_email: this.get("direct_enquiry_emails"),
                            owner_contact_cc_emails: this.get("secondary_email"),
                            owner_contact_bcc_emails: this.get("direct_enquiry_provide_email"),
                            profile_category: $('#dropdownCategory').text(),
                            profile_physical_address: this.get("address"),
                            profile_keywords: this.get("keywords"),
                            profile_regoin: this.get("region"),
                            profile_country: this.get("country"),
                            profile_hours: "Monday=7:00-late,Tuesday=7:00-late,Wednesday=7:00-late,Thursday=7:00-late,Friday=7:00-late,Saturday=7:00-late,Sunday=closed,Holidays=closed",
                            phone_number: this.get("contact_number"),
                            collections: [],
                            profile_website: this.get("website")
                        });
                        newMega.get("profile").addObject(newProfile);
                        App.store.commit();
                        this.transitionToRoute('profile', newProfile);
                    }

                },
                dropdown: function(checking) {

                    if (checking === "category") {
                        this.set('packgetDropdown', false);
                        this.set('projectCategoryDropdown', !this.get('projectCategoryDropdown'));
                    } else if (checking === "package") {
                        this.set('projectCategoryDropdown', false);
                        this.set('packgetDropdown', !this.get('packgetDropdown'));
                    } else {


                    }
                }
            });
            return ProfileNewController;
        });
