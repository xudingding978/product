define([
    'models/ProfileModel',
    'ember'],
        function(
                ProfileModel,
                Ember
                ) {
            var profile_record;
            var about_record;
            var ProfileController = Ember.ObjectController.extend({
                editing: false,
                content: null,
//                record: Ember.Profile.find(this.get('content.profile_name')),
                toggleEditing: function() {
                    profile_record = this.get('content.profile_name');
                    this.set('editing', !this.get('editing'));

                },
                changeTitle: function() {

                    var update_profil_record = App.Profile.find(this.get('content.id'));
                    App.store.get('adapter').updateRecord(App.store, App.Profile, update_profil_record);
                    App.store.commit();
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
                    App.store.commit();
                    this.set('editingAbout', false);
                },
                exitAboutEditing: function() {
                    this.set('content.about', about_record);
                    this.set('editingAbout', !this.get('editingAbout'));
                },
                toggleEditingContact: function() {

                    this.set('editingContact', !this.get('editingContact'));

                },
                changeEditingContact: function() {

                    this.set('editingContact', false);

                }
            });
            return ProfileController;
        });
