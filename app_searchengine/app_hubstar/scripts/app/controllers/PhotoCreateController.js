define(["ember", "helper"],
        function(Ember) {
            var PhotoCreateController = Ember.ArrayController.extend({
                content: [],
                newMegas: [],
                mode: null,
                profileMega: null,
                nodifyBackGround: false,
                collection_id: "",
                needs: ['profile', 'insideCollection'],
                init: function() {

                    this.setMega();
                },
                commitFiles: function(evt) {
                    this.set("nodifyBackGround", true);
                    var input = evt.target;
                    var files = input.files;
                    var that = this;
                    for (var i = 0; i < files.length; i++) {
                        (function(file) {
                            var name = file.name;
                            var type = file.type;
                            var reader = new FileReader();
                            reader.onload = function(e) {
                                //   var src = e.srcElement.result;

                                that.addPhotoObject(e, that, name, type);
                            }, reader.readAsDataURL(files[i]);
                        })(files[i]);
                        evt.preventDefault();
                    }
                },
                setMode: function()
                {
                }, submit: function()
                {

                    App.store.commit();

                }, back: function()
                {
                    this.set("content", []);
                    this.set("nodifyBackGround", false);
                    var insideCollection = this.get('controllers.insideCollection');
                    insideCollection.back();
                },
                setMega: function() {
                    var profileController = this.get('controllers.profile');
                    var tempmega = profileController.get("model");
                    var that = this;
                    that.set("profileMega", tempmega);
                    if (that.get("profileMega") === null) {
                        tempmega.addObserver('isLoaded', function() {
                            if (tempmega.get('isLoaded')) {
                                that.set("profileMega", tempmega);
                            }
                        });
                    }
                },
                createNewMega: function(ProfileMega)
                {
                    var photoMega = App.Mega.createRecord({
                        "accessed": ProfileMega.get("accessed"),
                        "boost": ProfileMega.get("boost"),
                        "owner_type": "profiles",
                        "is_active": false,
                        "region": ProfileMega.get("profile_regoin"),
                        "topic": null,
                        "type": "photo",
                        "category": ProfileMega.get("category"),
                        "creator": localStorage.loginStatus,
                        "country": ProfileMega.get("country"),
                        "collection_id": this.get('controllers.insideCollection').get('title'),
                        "deleted": null,
                        "domains": getDomain(),
                        "editors": "",
                        "geography": ProfileMega.get("country"),
                        "is_indexed": false,
                        "object_image_url": ProfileMega.get("object_image_url"),
                        "object_title": null,
                        "object_description": null,
                        "owner_profile_id": this.get("profileMega").id,
                        "owner_profile_pic": ProfileMega.get("profile_pic_url"),
                        "owner_title": ProfileMega.get("profile_name"),
                        "owner_url": ProfileMega.get("owner_url"),
                        "owners": ProfileMega.get("owners"),
                        "owner_id": ProfileMega.id,
                        "owner_contact_email": ProfileMega.get("owner_contact_email"),
                        "owner_contact_cc_emails": ProfileMega.get("owner_contact_cc_emails"),
                        "owner_contact_bcc_emails": ProfileMega.get("owner_contact_bcc_emails"),
                        "keywords": ProfileMega.get("profile_keywords"),
                        "status_id": null,
                        "uri_url": ProfileMega.get("uri_url"),
                        "view_count": null
                    });
                    return photoMega;
                }, addPhotoObject: function(e, that, name, type) {


                    var target = that.getTarget(e);
                    var src = target.result;
                    var mega = that.createNewMega(that.get("profileMega"));
                    var file = App.Photo.createRecord({
                        "photo_title": name.toLowerCase(),
                        "photo_source_id": name.toLowerCase().replace('.', "_"),
                        "photo_image_original_url": src,
                        "photo_file_name": name.toLowerCase(),
                        "photo_type": type,
                        "photo_keywords": that.get("profileMega").get("keywords")});
                    mega.get("photo").pushObject(file);
                    mega.addObserver('isSaving', function() {
                        if (mega.get('isSaving')) {
                            $('.' + file.get('photo_source_id')).attr("style", "display:block");
                        }
                        else {
                            $('.' + file.get('photo_source_id')).attr("style", "display:none");
                        }
                    });

                    that.get("content").addObject(file);
                },
                getTarget: function(obj) {
                    var targ;
                    var e = obj;
                    if (e.target)
                        targ = e.target;
                    else if (e.srcElement)
                        targ = e.srcElement;
                    if (targ.nodeType === 3) // defeat Safari bug
                        targ = targ.parentNode;
                    return targ;
                }
            }
            );
            PhotoCreateController.cancel = function(event) {
                event.preventDefault();
                return false;
            };
            PhotoCreateController.Droppable = Ember.Mixin.create(PhotoCreateController, {
                content: [],
                dragEnter: PhotoCreateController.cancel,
                dragOver: PhotoCreateController.cancel,
                test: function() {
                    console.log("this is mixin test");
                }

            });


            return PhotoCreateController;
        });
