define(["ember"],
        function(Ember, PhotoModel, Obj, UserModel) {


            var PhotoCreateController = Ember.ArrayController.extend({
                content: [],
                mode: null,
                nodifyBackGround: false,
                needs: ['profile', 'insideCollection'],
                commitFiles: function(files) {
                    this.set("nodifyBackGround", true);
                    var that = this;
                    for (var i = 0; i < files.length; i++) {
                        (function(file) {
                            var name = file.name;
                            var type = file.type;
                            var reader = new FileReader();
                            reader.onload = function(e) {
                                var src = e.srcElement.result;
                                var obj = App.Mega.createRecord({"title": name.toLowerCase(), "type": "photos", "creator": localStorage.user_id});
                                var file = App.Photo.createRecord({"photo_title": name.toLowerCase(), "photo_image_url": src, "photo_type": type});
                                obj.get("photo").pushObject(file);
                                that.get("content").addObject(file);
                            }, reader.readAsDataURL(files[i]);
                        })(files[i]);
                        event.preventDefault();
                    }
                },
                setMode: function(mode)
                {
                    this.set("mode", mode);

                }, submit: function()
                {
                    //       var profileController = this.get('controllers.profile');
                    console.log(this.get("content").get("length"));
                      App.store.commit();
                }, back: function()
                {

                    this.set("content", []);
                    this.set("nodifyBackGround", false);
                    var insideCollection = this.get('controllers.insideCollection');
                    insideCollection.back();
                }, setMegaParameters: function(mega){
//                    mega.set("accessed",null);
//                    mega.set("is_actived",false);
//                    mega.set("is_indexed",false);
//                    mega.set("keywords");
//                    mega.set("photo_caption");
//                    mega.set("object_image_url");
//                    mega.set("object_title");
//                    mega.set("owner_type");
//                    mega.set("owner_profile_pic");
//                    mega.set("owner_title");
//                    mega.set("owner_id");
//                    mega.set("owner_profile_id");
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
            });
            return PhotoCreateController;
        });
