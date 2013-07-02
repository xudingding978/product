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
            var workingtime;
            var isExsinting = true;
            var seletedID = "";
            var ProfileController = Ember.ObjectController.extend({
                model: null,
                editing: false,
                switchPhoto: false,
                editingAbout: false,
                editingContact: false,
                galleryInsert: false,
                temp: [],
                editingTime: false,
                aboutMe: "aboutMe",
                profileName: "profileName",
                contact: "contact",
                timeSetting: "timeSetting",
                collections: [],
                selectedCollection: "",
                hours: [],
                init: function() {



                },
                setLocalLoginRecrod: function() {
                    App.set('afterSearch', true);
                    localStorage.user_id = this.get('model.id');
                },
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
                    else if (checkingInfo === "timeSetting") {


                        this.set('editingTime', !this.get('editingTime'));
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
                    else if (checkingInfo === "timeSetting") {
                        var updateHour = this.get('hours');
                        var data = "";
                        for (var i = 0; i < updateHour.length; i++) {
                            data = data + updateHour.objectAt(i).day + "=" + updateHour.objectAt(i).time + ",";
                        }
                        this.set('model.hours', data.substring(0, data.length - 1));
                        this.set('editingTime', !this.get('editingTime'));
                    }
                    this.updateClient();
                },
                updateClient: function() {
                    var update_profile_record = App.Profile.find(this.get('model.id'));
                    App.store.get('adapter').updateRecord(App.store, App.Profile, update_profile_record);
                    //       this.setModel(update_profile_record);
                    this.set('collections', []);
                    var total_collection = this.get('model').get('collections').split(",");
                    for (var i = 0; i < total_collection.length; i++) {

                        this.get('collections').pushObject({id: total_collection[i], title: total_collection[i], desc: $('.new-collection-area').val()});
                    }

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
                    else if (checkingInfo === "timeSetting") {
                        this.updateWorkingHourData(this.get('model.hours'));



                        this.set('editingTime', !this.get('editingTime'));
                    }
                },
                updateWorkingHourData: function(times) {
                    this.set('hours', []);
                    if (times !== null && times !== "") {
                        var time = times.split(",");
                        for (var i = 0; i < time.length; i++) {
                            var dayAndTime = time[i].split("=");
                            this.get('hours').pushObject({day: dayAndTime[0], time: dayAndTime[1]});
                        }
                    }
                },
                submit: function()
                {
                    var newInsert = this.checkingValidInput($('#clientAddCollection .new-collection-name_insert').val());



                    this.checkingIdisExsinting(newInsert, "create");
                    if (isExsinting) {

                        if (this.get('model.collections') === null || this.get('model.collections') === "") {
                            this.set('model.collections', newInsert);
                        } else {

                            this.set('model.collections', newInsert + "," + this.get('model.collections'));
                        }

                        this.updateClient();
                        //        this.get('collections').insertAt(0, {id: newInsert, title: newInsert, desc: $('.new-collection-area').val()});
                        $(".Targeting_Object_front").attr("style", "display:inline-block");
                        $(" #uploadArea").attr('style', "display:none");
                        $(" #uploadObject").attr('style', "display:block");




                    } else {
                        isExsinting = true;
                    }

                },
                setModel: function(model) {
                    this.updateWorkingHourData(model.get('hours'));
                    this.set("model", model);
                    this.set('collections', []);
                    if (this.get('model').get('collections') === "undefined" || this.get('model').get('collections') === "" || this.get('model').get('collections') === null) {
                    } else {
                        var total_collection = this.get('model').get('collections').split(",");
                        for (var i = 0; i < total_collection.length; i++) {

                            this.get('collections').pushObject({id: total_collection[i], title: total_collection[i], desc: $('.new-collection-area').val()});
                        }
                    }


                    var collections = this.get("collections");

                    for (var i = 0; i < collections.length; i++)
                    {
                        var col = collections.objectAt(i);
                        if ((col.id !== null && col.id !== "")) {

                            this.getHeroImgae(col.id);
                        }


                    }
                },
                getHeroImgae: function(col) {
                    var photo = App.Mega.find({collection_id: col});

                    photo.addObserver('isLoaded', function() {
                        if (photo.get('isLoaded')) {
                            //       console.log(photo);
//                            col.set("cover", photo.get('photo').objectAt(0).get("photo_image_hero_url"));
//
//                            col.store.save();
                        }
                    });
                },
                setSelectedCollection: function(id) {

                    for (var i = 0; i < this.get("collections").get("length"); i++) {


                        var thisCollection = this.get("collections").objectAt(i);

//                        console.log(thisCollection.id);
//                        console.log(id);
                        this.get('temp').pushObject(thisCollection.id);
                        if (id === thisCollection.id) {
                            seletedID = thisCollection.id;
                            this.set("selectedCollection", thisCollection);
                        }
                    }
                },
                updateCollectionInfo: function()
                {

                    var id = this.checkingValidInput($('#clientAddCollection .new-collection-name_insert').val());


                    this.checkingIdisExsinting(id, "update");
                    if (isExsinting) {

                        console.log(seletedID);
                        console.log(id);
                        this.set('model.collections', this.get('model.collections').replace(seletedID, id));

                        console.log(this.get('collections').length);

                        for (var i = 0; i < this.get('collections').length; i++) {

                            //  console.log(this.get('collections').objectAt(i).title);
                            if (this.get('collections').objectAt(i).id === id) {
                                console.log(this.get('collections').objectAt(i));
                            }

                        }
                        this.updateClient();


                        $(".Targeting_Object_front").attr("style", "display:inline-block");
                        $(" #uploadArea").attr('style', "display:none");
                        $(" #uploadObject").attr('style', "display:block");
                    } else {
                        isExsinting = true;
                    }
                },
                checkingIdisExsinting: function(id, postOrPut) {

                    if (postOrPut === "update") {
                        for (var i = 0; i < this.get("temp").get('length'); i++) {
                            if (this.get("temp").objectAt(i) === id) {

                                isExsinting = false;
                            }
                        }
                        if (!isExsinting) {
                            alert('This Collection is already exsiting!!!');
                        }
                    } else if (postOrPut === "create") {

                        for (var i = 0; i < this.get("collections").get('length'); i++) {
                            console.log(this.get("collections").objectAt(i).id);
                            if (this.get("collections").objectAt(i).id === id) {

                                isExsinting = false;
                            }
                        }
                        if (!isExsinting) {
                            alert('This Collection is already exsiting!!!');
                        }
                    }
                },
                checkingValidInput: function(title) {

                    if (title.indexOf(" ") !== -1) {

                        title = title.split(' ').join('-');

                    }
                    return title;

                },
                newCollection: function()
                {

                }
            });
            return ProfileController;
        });
