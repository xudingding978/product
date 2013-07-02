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
                profile_url: "",
                first_name: "",
                last_name: "",
                address: "",
                contact_number: "",
                website: "",
                client_name: "",
                owner: "",
                direct_enquiry_emails: "",
                creater: "",
                editors: "",
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
                fillInChecking: function() {
                    multiEmail1 = this.multiEmailChecking($('.mustFill4').val(), '#emailFormat4', multiEmail1);
                    multiEmail2 = this.multiEmailChecking($('.mustFill6').val(), '#emailFormat6', multiEmail2);


                    if ($('.mustFill1').val() !== "" && $('.mustFill2').val() !== "" && $('.mustFill3').val() !== "" && multiEmail1
                            && $('.mustFill5').val() !== "" && multiEmail2 && this.validateEmail($('.mustFill5').val())
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
                },
                save: function() {

                    this.fillInChecking();
                    alert(passSubmit);
                    if (passSubmit) {
                        var newMega = App.store.createRecord(App.Mega, {//15
                            "id": this.get("profile_url"),
                            "type": "profile",
                            accessed: null,
                            active_yn: "true",
                            category: null,
                            creator_type: "user",
                            created: new Date(),
                            creator: this.get("creater"),
                            country: "New Zealand",
                            region: "Auckland",
                            domains: document.domain,
                            editors: this.get("editors"),
                            keywords: this.get("keywords"),
                            indexed_yn: "true",
                            owners: this.get("email"),
                            updated: new Date()
                        });
                        var newProfile = App.store.createRecord(App.Profile, {
                            id: this.get("profile_url"),
                            profile_name: this.get("profile_name"),
                            type: "profile",
                            last_name: this.get("last_name"),
                            first_name: this.get("first_name"),
                            email: this.get("direct_enquiry_emails"),
                            about: null,
                            profile_bg_url: "https://s3-ap-southeast-2.amazonaws.com/develop.devbox/profile_bg/default/defaultbg6.jpg",
                            profile_cover_url: "https://s3-ap-southeast-2.amazonaws.com/develop.devbox/profile_cover/default/defaultcover4.jpg",
                            profile_pic_url: "https://s3-ap-southeast-2.amazonaws.com/develop.devbox/profile_pic/default/defaultpic1.jpg",
                            contact_user: this.get("direct_enquiry_emails"),
                            profile_category: null,
                            profile_physical_address: null,
                            hours: "Monday=7:00-late,Tuesday=7:00-late,Wednesday=7:00-late,Thursday=7:00-late,Friday=7:00-late,Saturday=7:00-late,Sunday=closed,Holidays=closed",
                            phone_number: this.get("contact_number"),
                            collections: null,
                            website_url: this.get("website")
                        });
                        newMega.get("profile").addObject(newProfile);
                        App.store.commit();
                        this.transitionTo('profile', newProfile);
                    }

                }
            });
            return ProfileNewController;
        });
