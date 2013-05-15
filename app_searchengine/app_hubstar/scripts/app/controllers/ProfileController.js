define([
    'models/ProfileModel',
    'ember'],
        function(
                ProfileModel,
                Ember
                ) {
            var record;
            var ProfileController = Ember.ObjectController.extend({
                editing: false,
                content: null,
//                record: Ember.Profile.find(this.get('content.profile_name')),
                toggleEditing: function() {
                    record = this.get('content.profile_name');
                    this.set('editing', !this.get('editing'));

                },
                changeTitle: function() {

                    var update_record = App.Profile.find(this.get('content.id'));
                    App.store.get('adapter').updateRecord(App.store, App.Profile, update_record);
                    App.store.commit();
                    this.set('editing', false);
                },
                exitEditing: function() {
                    this.set('content.profile_name', record);
                    this.set('editing', !this.get('editing'));
                },
                toggleEditingAbout: function() {
                    this.set('editingAbout', !this.get('editingAbout'));

                },
                changeAbout: function() {

                    this.set('editingAbout', false);
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
