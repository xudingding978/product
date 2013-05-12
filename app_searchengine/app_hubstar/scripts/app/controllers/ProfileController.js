define([
    'controllers/ProfileController',
    'models/ProfileModel',
    'ember'],
        function(
                ProfileController,
                ProfileModel,
                Ember
                ) {
            var ProfileController = Ember.ObjectController.extend({
                editing: false,
                toggleEditing: function() {
                    //     alert("aa");
                    this.set('editing', !this.get('editing'));

                },
                changeTitle: function() {
                    //   var new_name = this.$("input").val();
                    //      alert(new_name);
                    //  this.set("profileName", new_name);
                    this.set('editing', false);
                },
                toggleEditingAbout: function() {
                    this.set('editingAbout', !this.get('editingAbout'));

                },
                changeAbout: function() {

                    this.set('editingAbout', false);
                },
                newProfile: function() {
                    alert("aa");
                },
                saveProfile: function() {
                    App.store.commit();
                }

            });
            return ProfileController;
        });