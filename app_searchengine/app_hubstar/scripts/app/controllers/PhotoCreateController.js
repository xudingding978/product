define(["ember","helper"],
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
                commitFiles: function(files) {
                    this.set("nodifyBackGround", true);
                    var that = this;
                    for (var i = 0; i < files.length; i++) {
                        (function(file) {
                            var name = file.name;
                            var type = file.type;
                            var reader = new FileReader();
                            reader.onload = function(e) {
                                that.addPhotoObject(e, that, name, type);
                            }, reader.readAsDataURL(files[i]);
                        })(files[i]);
                        event.preventDefault();
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
                    var id = profileController.get("model").id;
                    var tempmega = App.Mega.find(id);
                    var that = this;
                    tempmega.addObserver('isLoaded', function() {
                        if (tempmega.get('isLoaded')) {
                            that.set("profileMega", tempmega);
                        }
                    });
                },
                createNewMega: function(ProfileMega)
                {
                    var photoMega = App.Mega.createRecord({
                        "type": "photo",
                        "accessed": ProfileMega.get("accessed"),
                        "is_active": false,
                        "article_id": null,
                        "region": ProfileMega.get("region"),
                        "topic": null,
                        "category": ProfileMega.get("category"),
                        "created": new Date(),
                        "creator": localStorage.loginStatus,
                        "country": ProfileMega.get("country"),
                        "collection_id": this.get('controllers.insideCollection').get('title'),
                        "deleted": null,
                        "domains": getDomain(),
                        "editors": "",
                        "follower_count": null,
                        "followers": null,
                        "following": null,
                        "following_count": null,
                        "geography": ProfileMega.get("country"),
                        "is_indexed": false,
                        "object_image_linkto": ProfileMega.get("object_image_linkto"),
                        "object_image_url": ProfileMega.get("object_image_url"),
                        "object_title": ProfileMega.get("object_title"),
                        "object_description": null,
                        "owner_profile_id": this.get("profileMega").id,
                        "owner_profile_pic": ProfileMega.get("owner_profile_pic"),
                        "owner_title": ProfileMega.get("owner_title"),
                        "owner_url": ProfileMega.get("owner_url"),
                        "owners": ProfileMega.get("owners"),
                        "owner_id": this.get("profileMega").id,
                        "owner_contact_email": ProfileMega.get("owner_contact_email"),
                        "owner_contact_cc_emails": ProfileMega.get("owner_contact_cc_emails"),
                        "owner_contact_bcc_emails": ProfileMega.get("owner_contact_bcc_emails"),
                        "keywords": ProfileMega.get("keywords"),
                        "status_id": null,
                        "updated": new Date(),
                        "uri_url": ProfileMega.get("uri_url"),
                        "view_count": null
                    });
                    return photoMega;
                }, addPhotoObject: function(e, that, name, type) {
                    var src = e.srcElement.result;
                    var mega = that.createNewMega(that.get("profileMega"));
//                    mega.on('didCreate', function() {
//                        console.log(this);
//                    });
                    mega.addObserver('isSaving', function() {
                        if (!mega.get('isSaving')) {
                            console.log("wait");
                        }
                        else {

                        }
                    });
                    var file = App.Photo.createRecord({
                        "photo_title": name.toLowerCase(),
                        "photo_image_url": src,
                        "photo_type": type,
                        "photo_keywords": that.get("profileMega").get("keywords")});
                    mega.get("photo").pushObject(file);
                    that.get("content").addObject(file);
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
