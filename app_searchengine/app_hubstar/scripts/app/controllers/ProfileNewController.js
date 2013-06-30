define([
    'models/ProfileModel',
    'ember'],
        function(
                ProfileModel,
                Ember
                ) {
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
                newProfile: function() {
                    var newMega = App.Mega.createRecord({//15
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
                        phone_number: this.get("contact_number"),
                        collections: null,
                        website_url: this.get("website")
                    });
                    newMega.get("profile").addObject(newProfile);
                    console.log(newMega);
                  newMega.store.commit();
                }
            });
            return ProfileNewController;
        });
