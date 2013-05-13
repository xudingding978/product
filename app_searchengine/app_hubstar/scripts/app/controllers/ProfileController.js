define([
    'models/ProfileModel',
    'ember'],
        function(
                ProfileModel,
                Ember
                ) {
            var ProfileController = Ember.ObjectController.extend({
                editing: false,
                content: null,
                toggleEditing: function() {

                    this.set('editing', !this.get('editing'));

                },
                changeTitle: function() {
                    this.transaction = App.store.transaction();
                    var model = this.transaction.createRecord(ProfileModel);
                    // var model = ProfileModel.find(this.get('content.id'));
                    model.set("profile_name", "fffff");
                    console.log(model.get("profile_name"));
                    console.log(model);
                    //      this.transaction.set(this.get('content.profile_name'), 'ddddd');
                    //           console.log(this.get('content'));
                 this.transaction.commit();
                    App.store.commit();
                    this.transaction = null;
//                    alert(this.get('content.profile_name'));
//                    this.set("content.profileName", this.get('content.profile_name'));
                    this.set('editing', false);
//                    App.store.commit();
                },
                toggleEditingAbout: function() {
                    this.set('editingAbout', !this.get('editingAbout'));

                },
                changeAbout: function() {

                    this.set('editingAbout', false);
                },
            });
            return ProfileController;
        });
