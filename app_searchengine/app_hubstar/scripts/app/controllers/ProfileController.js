define([
    'models/ProfileModel',
    'ember'],
        function(
                ProfileModel,
                Ember
                ) {
            var profile_record;
            var about_record;
            var contact_record;
            var category_record;
            var address_record;
            var phone_record;
            var website_record;


            var ProfileController = Ember.ObjectController.extend({
                model: null,
                editing: false,
                switchPhoto: false,
                editingAbout: false,
                editingContact: false,
                galleryInsert: false,
                aboutMe: "aboutMe",
                profileName: "profileName",
                contact: "contact",
                collections: [],
                setLocalLoginRecrod: function() {
                    App.set('afterSearch', true);
                    localStorage.user_id = this.get('model.id');
                },
//                toggleEditing: function(data) {
//                    profile_record = data;
//                    this.set('editing', !this.get('editing'));
//                },
//                changeTitle: function() {
//                    var update_profile_record = App.Profile.find(this.get('content.id'));
//                    App.store.get('adapter').updateRecord(App.store, App.Profile, update_profile_record);
//                    this.set('editing', false);
//                },
//                exitEditing: function() {
//                    this.set('content.profile_name', profile_record);
//                    this.set('editing', !this.get('editing'));
//                },
//                toggleEditingAbout: function() {
//                    about_record = this.get('content.about');
//                    this.set('editingAbout', !this.get('editingAbout'));
//                },
//
//                changeAbout: function() {
//                    var update_about_record = App.Profile.find(this.get('content.id'));
//                    App.store.get('adapter').updateRecord(App.store, App.Profile, update_about_record);
//                    this.set('editingAbout', false);
//                },
//                exitAboutEditing: function() {
//                    this.set('content.about', about_record);
//                    this.set('editingAbout', !this.get('editingAbout'));
//                },
//                toggleEditingContact: function() {
//                    contact_record = this.get('content.contact_user');
//                    category_record = this.get('content.profile_category');
//                    address_record = this.get('content.profile_physical_address');
//                    phone_record = this.get('content.phone_number');
//                    website_record = this.get('content.website_url');
//                    this.set('editingContact', !this.get('editingContact'));
//                },
//                changeEditingContact: function() {
//                    var update_contact_record = App.Profile.find(this.get('content.id'));
//                    App.store.get('adapter').updateRecord(App.store, App.Profile, update_contact_record);
//                    this.set('editingContact', false);
//                },
//                exitContactEditing: function() {
//                    this.set('content.contact_user', contact_record);
//                    this.set('content.profile_category', category_record);
//                    this.set('content.profile_physical_address', address_record);
//                    this.set('content.phone_number', phone_record);
//                    this.set('content.website_url', website_record);
//                    this.set('editingContact', !this.get('editingContact'));
//                },
//                galleryEdit: function() {
//                    this.set('galleryInsert', !this.get('galleryInsert'));
//                },


                toggleEditing: function(data, checkingInfo) {



                    if (checkingInfo === "profileName") {
                        profile_record = data;
                        this.set('editing', !this.get('editing'));
                    } else if (checkingInfo === "aboutMe") {
                        about_record = data;
                        this.set('editingAbout', !this.get('editingAbout'));

                    } else if (checkingInfo === "contact") {
                        contact_record = this.get('model.contact_user');
                        category_record = this.get('model.profile_category');
                        address_record = this.get('model.profile_physical_address');
                        phone_record = this.get('model.phone_number');
                        website_record = this.get('model.website_url');
                        this.set('editingContact', !this.get('editingContact'));

                    }

                },
                yes: function(checkingInfo) {
                    if (checkingInfo === "profileName") {

                        this.set('editing', !this.get('editing'));
                    }
                    else if (checkingInfo === "aboutMe") {

                        this.set('editingAbout', !this.get('editingAbout'));

                    } else if (checkingInfo === "contact") {

                        this.set('editingContact', !this.get('editingContact'));

                    }
                    var update_profile_record = App.Profile.find(this.get('model.id'));
                    App.store.get('adapter').updateRecord(App.store, App.Profile, update_profile_record);
                    //          App.store.commit();
                },
                no: function(checkingInfo) {
                    if (checkingInfo === "profileName") {
                        this.set('model.profile_name', profile_record);
                        this.set('editing', !this.get('editing'));
                    }
                    else if (checkingInfo === "aboutMe") {
                        this.set('model.about', about_record);
                        this.set('editingAbout', !this.get('editingAbout'));

                    }
                    else if (checkingInfo === "contact") {
                        this.set('model.contact_user', contact_record);
                        this.set('model.profile_category', category_record);
                        this.set('model.profile_physical_address', address_record);
                        this.set('model.phone_number', phone_record);
                        this.set('model.website_url', website_record);
                        this.set('editingContact', !this.get('editingContact'));
                    }
                },
                setModel: function(model) {
                    this.set("model", model);
                    if (this.get('model').get('collections') === "undefined" || this.get('model').get('collections') === "" || this.get('model').get('collections') === null) {       
                    } else {
                        var total_collection = this.get('model').get('collections').split(",");
                        for (var i = 0; i < total_collection.length; i++) {
                            this.get('collections').pushObject({id: total_collection[i]});
                        }
                    }
                }
            }

            );

            return ProfileController;
        });
