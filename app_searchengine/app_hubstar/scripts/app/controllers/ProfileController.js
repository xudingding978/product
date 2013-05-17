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
                    this.transaction.add(this.get('content'));
                    //         console.log(this.get('content.id'));

                    //        this.transaction.add(this.get('content'));
                    //        console.log(this.get('content.profile_name'));

                    var update_record = App.Profile.find(this.get('content.id'));
//               //     console.log(update_record);
//                 //   update_record.set('profile_name', this.get('content.profile_name'));
            //        App.store.get('adapter').updateRecord(App.store, App.Profile, update_record);

 


                    //            this.transaction.commit();
          //          App.store.commit();
                    //             this.transaction = null;
//                    alert(this.get('content.profile_name'));
//                    this.set("content.profileName", this.get('content.profile_name'));
                    this.set('editing', false);

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
