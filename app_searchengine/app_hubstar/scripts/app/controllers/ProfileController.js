define([
    'models/ProfileModel',
    'ember', 'controllers/PhotoUploadController'],
        function(
                ProfileModel,
                Ember, PhotoUploadController
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
                galleryInsert: false,
                setLocalLoginRecrod: function() {
                    App.set('afterSearch', true);
                    console.log(App.get("afterSearch"));
                    localStorage.user_id = this.get('content.id');
                },
                toggleEditing: function() {
                    profile_record = this.get('content.profile_name');
                    this.set('editing', !this.get('editing'));
                },
                changeTitle: function() {
                    var update_profile_record = App.Profile.find(this.get('content.id'));
                    App.store.get('adapter').updateRecord(App.store, App.Profile, update_profile_record);
                    this.set('editing', false);
                },
                exitEditing: function() {
                    this.set('content.profile_name', profile_record);
                    this.set('editing', !this.get('editing'));
                },
                toggleEditingAbout: function() {
                    about_record = this.get('content.about');
                    this.set('editingAbout', !this.get('editingAbout'));
                },
                changeAbout: function() {
                    var update_about_record = App.Profile.find(this.get('content.id'));
                    App.store.get('adapter').updateRecord(App.store, App.Profile, update_about_record);
                    this.set('editingAbout', false);
                },
                exitAboutEditing: function() {
                    this.set('content.about', about_record);
                    this.set('editingAbout', !this.get('editingAbout'));
                },
                toggleEditingContact: function() {
                    contact_record = this.get('content.contact_user');
                    category_record = this.get('content.profile_category');
                    address_record = this.get('content.profile_physical_address');
                    phone_record = this.get('content.phone_number');
                    website_record = this.get('content.website_url');
                    this.set('editingContact', !this.get('editingContact'));
                },
                changeEditingContact: function() {
                    var update_contact_record = App.Profile.find(this.get('content.id'));
                    App.store.get('adapter').updateRecord(App.store, App.Profile, update_contact_record);
                    this.set('editingContact', false);
                },
                exitContactEditing: function() {
                    this.set('content.contact_user', contact_record);
                    this.set('content.profile_category', category_record);
                    this.set('content.profile_physical_address', address_record);
                    this.set('content.phone_number', phone_record);
                    this.set('content.website_url', website_record);
                    this.set('editingContact', !this.get('editingContact'));
                },
                galleryEdit: function() {
                    this.set('galleryInsert', !this.get('galleryInsert'));
                },
                test: function()
                {
                    console.log("click showDragNdropWindow ");
                },
                setModel: function(model) {
                    this.set("model", model);
                }
            }

            );

            return ProfileController;
        });
